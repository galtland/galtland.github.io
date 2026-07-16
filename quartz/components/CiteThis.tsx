import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/citethis.inline"
import style from "./styles/citethis.scss"

// A per-article "Cite this page" affordance. The citation (site, title, URL) is
// rendered server-side so it works without JavaScript; the inline script appends
// the reader's access date and wires the copy button, and also turns the heading
// autolink anchors into copy-permalink affordances (the "permalink to quote"
// half of the feature).
const CiteThis: QuartzComponent = ({ cfg, fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  // No title → not a real article (tag/list/404 pages); render nothing.
  if (!title) {
    return null
  }
  const slug = fileData.slug ?? ""
  const url = `https://${cfg.baseUrl}/${slug}`
  const siteName = cfg.pageTitle ?? "Galtland Index"
  // Curly quotes around the title; the accessed clause is filled client-side.
  const citation = `${siteName}. “${title}.” ${url}`
  return (
    <div class={classNames(displayClass, "cite-this")}>
      <details>
        <summary>Cite this page</summary>
        <div class="cite-body">
          <p class="cite-text">
            <span class="cite-main">{citation}</span>
            <span class="cite-accessed"></span>
          </p>
          <button class="cite-copy-button" type="button" aria-label="Copy citation to clipboard">
            Copy citation
          </button>
        </div>
      </details>
    </div>
  )
}

CiteThis.css = style
CiteThis.afterDOMLoaded = script

export default (() => CiteThis) satisfies QuartzComponentConstructor
