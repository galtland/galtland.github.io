document.addEventListener("nav", () => {
  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  // 1) "Cite this page": fill the accessed date and wire the copy button.
  const boxes = document.querySelectorAll(".cite-this")
  boxes.forEach((box) => {
    const accessed = box.querySelector(".cite-accessed")
    const textEl = box.querySelector(".cite-text")
    const button = box.querySelector(".cite-copy-button") as HTMLButtonElement | null
    if (accessed) {
      accessed.textContent = ` (accessed ${formatDate(new Date())}).`
    }
    if (button && textEl) {
      const onClick = () => {
        const citation = (textEl.textContent ?? "").replace(/\s+/g, " ").trim()
        navigator.clipboard.writeText(citation).then(
          () => {
            const prev = button.textContent
            button.textContent = "Copied!"
            button.classList.add("copied")
            setTimeout(() => {
              button.textContent = prev
              button.classList.remove("copied")
            }, 2000)
          },
          (err) => console.error(err),
        )
      }
      button.addEventListener("click", onClick)
      window.addCleanup(() => button.removeEventListener("click", onClick))
    }
  })

  // 2) "Permalink to quote": clicking a heading's autolink anchor copies its
  // absolute permalink to the clipboard (in addition to the default in-page
  // jump), so a reader can link straight to a passage.
  const anchors = document.querySelectorAll("article a[role='anchor'][href^='#']")
  anchors.forEach((el) => {
    const a = el as HTMLAnchorElement
    const onClick = () => {
      const id = (a.getAttribute("href") ?? "").slice(1)
      if (!id) return
      const permalink = `${location.origin}${location.pathname}#${id}`
      navigator.clipboard.writeText(permalink).then(
        () => {
          a.classList.add("permalink-copied")
          setTimeout(() => a.classList.remove("permalink-copied"), 1500)
        },
        (err) => console.error(err),
      )
    }
    a.addEventListener("click", onClick)
    window.addCleanup(() => a.removeEventListener("click", onClick))
  })
})
