import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../plugins/types"
import { escapeHTML } from "../util/escape"

export interface Options {
  descriptionLength: number
  maxDescriptionLength: number
  replaceExternalLinks: boolean
}

const defaultOptions: Options = {
  descriptionLength: 150,
  maxDescriptionLength: 300,
  replaceExternalLinks: true,
}

const urlRegex = new RegExp(
  /(https?:\/\/)?(?<domain>([\da-z\.-]+)\.([a-z\.]{2,6})(:\d+)?)(?<path>[\/\w\.-]*)(\?[\/\w\.=&;-]*)?/,
  "g",
)

/**
 * Local fork of Quartz's Description transformer (quartz/plugins/transformers/description.ts).
 *
 * Diverges from upstream on one point: the frontmatter lookup walks a chain
 * of `short` → `description` → `summary`, returning the first non-empty
 * string. The Galtland wiki convention is that `short:` is the curated
 * 1-2 sentence OG/Twitter preview text, deliberately tighter than the
 * structured `summary:` (which is used by `_index.md` rows and tends
 * toward 2-3 sentences). `description:` is the upstream-default
 * Quartz field — kept second so a Quartz-native author can still set
 * `description:` if they want, and so articles missing both `short` and
 * `description` fall back to the longer `summary:` instead of an
 * auto-extracted body fragment.
 *
 * The fallback includes a runtime type guard (typeof === "string"), so
 * non-string frontmatter values (numbers, arrays, mis-typed YAML) silently
 * fall through to the body-text extraction instead of crashing the
 * downstream `.replace` call.
 *
 * Re-check against upstream on every Quartz upgrade.
 */
export const DescriptionWithFallbacks: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            // Wiki convention: `short:` is the curated OG/Twitter preview
            // text — 1-2 tight sentences. `description:` is upstream Quartz's
            // own field, honored second so Quartz-native authors can still
            // use it. `summary:` is the wiki's structured 2-3-sentence index
            // row text, used as the final fallback. This order means social-
            // preview cards prefer the punchy `short:` when present, and
            // articles missing both `short:` and `description:` still get
            // the curated `summary:` rather than an auto-extracted body
            // fragment.
            //
            // Runtime-guard for unknown values: frontmatter is typed as
            // `{ [key: string]: unknown }`, so a non-string value (number,
            // array, mis-typed YAML) would crash the downstream `.replace`
            // call. Pick the first non-empty *string* across the chain;
            // anything else falls through to the auto-extracted body text.
            const fm = file.data.frontmatter
            const firstNonEmptyString = (...vals: unknown[]) => {
              for (const v of vals) {
                if (typeof v === "string" && v.length > 0) return v
              }
              return undefined
            }
            let frontMatterDescription = firstNonEmptyString(
              fm?.short,
              fm?.description,
              fm?.summary,
            )
            let text = escapeHTML(toString(tree))

            if (opts.replaceExternalLinks) {
              frontMatterDescription = frontMatterDescription?.replace(
                urlRegex,
                "$<domain>" + "$<path>",
              )
              text = text.replace(urlRegex, "$<domain>" + "$<path>")
            }

            if (frontMatterDescription) {
              file.data.description = frontMatterDescription
              file.data.text = text
              return
            }

            // otherwise, use the text content
            const desc = text
            const sentences = desc.replace(/\s+/g, " ").split(/\.\s/)
            let finalDesc = ""
            let sentenceIdx = 0

            // Add full sentences until we exceed the guideline length
            while (sentenceIdx < sentences.length) {
              const sentence = sentences[sentenceIdx]
              if (!sentence) break

              const currentSentence = sentence.endsWith(".") ? sentence : sentence + "."
              const nextLength = finalDesc.length + currentSentence.length + (finalDesc ? 1 : 0)

              // Add the sentence if we're under the guideline length
              // or if this is the first sentence (always include at least one)
              if (nextLength <= opts.descriptionLength || sentenceIdx === 0) {
                finalDesc += (finalDesc ? " " : "") + currentSentence
                sentenceIdx++
              } else {
                break
              }
            }

            // truncate to max length if necessary
            file.data.description =
              finalDesc.length > opts.maxDescriptionLength
                ? finalDesc.slice(0, opts.maxDescriptionLength) + "..."
                : finalDesc
            file.data.text = text
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}
