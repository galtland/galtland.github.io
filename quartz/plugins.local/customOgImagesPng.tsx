import { QuartzEmitterPlugin } from "../plugins/types"
import { i18n } from "../i18n"
import { unescapeHTML } from "../util/escape"
import { FullSlug, getFileExtension, isAbsoluteURL, joinSegments, QUARTZ } from "../util/path"
import { ImageOptions, SocialImageOptions, defaultImage, getSatoriFonts } from "../util/og"
import sharp from "sharp"
import satori, { SatoriOptions } from "satori"
import { loadEmoji, getIconCode } from "../util/emoji"
import { Readable } from "stream"
import { write } from "../plugins/emitters/helpers"
import { BuildCtx } from "../util/ctx"
import { QuartzPluginData } from "../plugins/vfile"
import fs from "node:fs/promises"
import { styleText } from "util"

const defaultOptions: SocialImageOptions = {
  colorScheme: "lightMode",
  width: 1200,
  height: 630,
  imageStructure: defaultImage,
  excludeRoot: false,
}

/**
 * Local fork of Quartz's CustomOgImages emitter (quartz/plugins/emitters/ogImage.tsx).
 *
 * Diverges from upstream on three points:
 *   1. Encodes social images as PNG (compressionLevel: 9) instead of WebP
 *      (quality: 40). WhatsApp, iMessage, and some older Twitter/Slack
 *      preview scrapers don't reliably render WebP previews. PNG is ~50-90KB
 *      for the typical 1200x630 text-on-solid-background image — well under
 *      WhatsApp's 300KB scraper cap.
 *   2. Writes the file with `ext: ".png"` and emits `og:image` URLs ending
 *      in `.png` to match.
 *   3. Fixes a pre-existing bug in `og:image:type` interpolation: getFileExtension()
 *      returns the extension with a leading dot, so the upstream code emits
 *      "image/.png" instead of "image/png". Stripped here.
 *
 * The emitter's reported `name` is kept as the upstream value "CustomOgImages"
 * so that quartz/components/Head.tsx's filter (`e.name === CustomOgImagesEmitterName`)
 * continues to match.
 *
 * Re-check against upstream on every Quartz upgrade.
 *
 * Generates social image (OG/twitter standard) and saves it as `.png` inside the public folder
 * @param opts options for generating image
 */
async function generateSocialImage(
  { cfg, description, fonts, title, fileData }: ImageOptions,
  userOpts: SocialImageOptions,
): Promise<Readable> {
  const { width, height } = userOpts
  const iconPath = joinSegments(QUARTZ, "static", "icon.png")
  let iconBase64: string | undefined = undefined
  try {
    const iconData = await fs.readFile(iconPath)
    iconBase64 = `data:image/png;base64,${iconData.toString("base64")}`
  } catch (err) {
    console.warn(styleText("yellow", `Warning: Could not find icon at ${iconPath}`))
  }

  const imageComponent = userOpts.imageStructure({
    cfg,
    userOpts,
    title,
    description,
    fonts,
    fileData,
    iconBase64,
  })

  const svg = await satori(imageComponent, {
    width,
    height,
    fonts,
    loadAdditionalAsset: async (languageCode: string, segment: string) => {
      if (languageCode === "emoji") {
        return await loadEmoji(getIconCode(segment))
      }

      return languageCode
    },
  })

  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 })
}

async function processOgImage(
  ctx: BuildCtx,
  fileData: QuartzPluginData,
  fonts: SatoriOptions["fonts"],
  fullOptions: SocialImageOptions,
) {
  const cfg = ctx.cfg.configuration
  const slug = fileData.slug!
  const titleSuffix = cfg.pageTitleSuffix ?? ""
  const title =
    (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
  const description =
    fileData.frontmatter?.socialDescription ??
    fileData.frontmatter?.description ??
    unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

  const stream = await generateSocialImage(
    {
      title,
      description,
      fonts,
      cfg,
      fileData,
    },
    fullOptions,
  )

  return write({
    ctx,
    content: stream,
    slug: `${slug}-og-image` as FullSlug,
    ext: ".png",
  })
}

// Keep the upstream emitter-name string so quartz/components/Head.tsx
// keeps recognizing this plugin when filtering registered emitters.
export const CustomOgImagesPngEmitterName = "CustomOgImages"
export const CustomOgImagesPng: QuartzEmitterPlugin<Partial<SocialImageOptions>> = (userOpts) => {
  const fullOptions = { ...defaultOptions, ...userOpts }

  return {
    name: CustomOgImagesPngEmitterName,
    getQuartzComponents() {
      return []
    },
    async *emit(ctx, content, _resources) {
      const cfg = ctx.cfg.configuration
      const headerFont = cfg.theme.typography.header
      const bodyFont = cfg.theme.typography.body
      const fonts = await getSatoriFonts(headerFont, bodyFont)

      for (const [_tree, vfile] of content) {
        if (vfile.data.frontmatter?.socialImage !== undefined) continue
        yield processOgImage(ctx, vfile.data, fonts, fullOptions)
      }
    },
    async *partialEmit(ctx, _content, _resources, changeEvents) {
      const cfg = ctx.cfg.configuration
      const headerFont = cfg.theme.typography.header
      const bodyFont = cfg.theme.typography.body
      const fonts = await getSatoriFonts(headerFont, bodyFont)

      // find all slugs that changed or were added
      for (const changeEvent of changeEvents) {
        if (!changeEvent.file) continue
        if (changeEvent.file.data.frontmatter?.socialImage !== undefined) continue
        if (changeEvent.type === "add" || changeEvent.type === "change") {
          yield processOgImage(ctx, changeEvent.file.data, fonts, fullOptions)
        }
      }
    },
    externalResources: (ctx) => {
      if (!ctx.cfg.configuration.baseUrl) {
        return {}
      }

      const baseUrl = ctx.cfg.configuration.baseUrl
      return {
        additionalHead: [
          (pageData) => {
            const isRealFile = pageData.filePath !== undefined
            let userDefinedOgImagePath = pageData.frontmatter?.socialImage

            if (userDefinedOgImagePath) {
              userDefinedOgImagePath = isAbsoluteURL(userDefinedOgImagePath)
                ? userDefinedOgImagePath
                : `https://${baseUrl}/static/${userDefinedOgImagePath}`
            }

            const generatedOgImagePath = isRealFile
              ? `https://${baseUrl}/${pageData.slug!}-og-image.png`
              : undefined
            const defaultOgImagePath = `https://${baseUrl}/static/og-image.png`
            const ogImagePath = userDefinedOgImagePath ?? generatedOgImagePath ?? defaultOgImagePath
            // getFileExtension returns the extension with the leading dot
            // (e.g., ".png"), so strip it before interpolating into the MIME
            // type — otherwise og:image:type emits "image/.png" instead of
            // "image/png", which some social-preview parsers reject.
            const ogImageExt = getFileExtension(ogImagePath)?.replace(/^\./, "") ?? "png"
            const ogImageMimeType = `image/${ogImageExt}`
            return (
              <>
                {!userDefinedOgImagePath && (
                  <>
                    <meta property="og:image:width" content={fullOptions.width.toString()} />
                    <meta property="og:image:height" content={fullOptions.height.toString()} />
                  </>
                )}

                <meta property="og:image" content={ogImagePath} />
                <meta property="og:image:url" content={ogImagePath} />
                <meta name="twitter:image" content={ogImagePath} />
                <meta property="og:image:type" content={ogImageMimeType} />
              </>
            )
          },
        ],
      }
    },
  }
}
