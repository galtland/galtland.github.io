---
title: "Colophon — How This Wiki Is Made"
volatility: cold
category: concept
compiled-from: conversation
created: 2026-07-16
updated: 2026-07-16
verified: 2026-07-16
confidence: high
tags: [colophon, meta, integrity, quote-verification, editorial-standards, provenance, licensing, methodology]
aliases: [Colophon, About, How This Wiki Is Made, Integrity Pipeline]
summary: "A statement of how the Galtland Index is built and checked. Every direct quotation is held to a verbatim standard — contiguous and character-exact against the specific cited edition — enforced by a deterministic mechanical check on clean digital sources and downgraded to advisory on OCR scans, backed by an adversarial human-reviewed pass on new quote-heavy material. The page is deliberate about the limits: a passing mechanical check is a floor, not a proof, and the verbatim rule is ultimately upheld by hand. It also states the wiki's provenance discipline (full sources held privately, only short verified quotations and canonical links published) and its licensing position on source works, the site software, and the original editorial content."
short: "How the wiki is built and checked: the verbatim quote standard, the mechanical gate and its honest limits, adversarial review, provenance, and licensing."
---

# Colophon — How This Wiki Is Made

The Galtland Index is a library with a point of view — and one that tries to show its work. It argues a case (Austrian economics, libertarian political philosophy, and the cypherpunk tradition), but it is built on primary sources and holds itself to a mechanical standard for how those sources are quoted. This page explains that standard *honestly*, including where it stops.

## The quote standard

Every passage set in quotation marks is meant to be exactly what the source says. Before any span goes in quotes, it is checked against the specific cited edition and must be *contiguous and character-exact* — punctuation included. That means:

- No silent tidying of commas, dashes, or spelling.
- No stitching a quotation together from non-contiguous fragments.
- No truncating mid-sentence without an ellipsis.
- When a work exists in several translations, the wording must match the translation *actually cited*, not a more familiar rendering of the same passage.

Anything that cannot be confirmed verbatim is fixed to the source, abridged honestly with an ellipsis, or un-quoted and paraphrased instead.

## The mechanical gate — and its honest limits

A deterministic check runs on every change to the wiki and reads each quoted span back against its cited source. It is a real gate, but it is *tiered*, and it is worth being precise about what a passing run does and does not prove:

- **On clean, digital-text sources it is enforced.** If a quoted span is not found verbatim in the cited source, the check fails and the change cannot merge. A growing share of the canon here has been re-sourced from clean digital editions specifically so that its quotes fall under this enforced tier.
- **On OCR-scanned sources it is advisory.** Optical character recognition introduces artifacts — split words, stray characters, letter-spacing — so on those sources the check only fails when a quotation is *certainly* absent. A quotation that is merely close — a changed inflection, an added comma, a wrong-edition rendering — can pass. Several older works in the collection are held only as scans, and their quotes sit in this advisory tier.
- **A passing check is a floor, not a proof.** The mechanical pass is conservative by design — it skips a page's opening summary blockquote, for instance — so it is the minimum bar, not a guarantee of correctness. The verbatim rule above is ultimately upheld by hand.

## Adversarial review

Because a mechanical check cannot catch a misquote that is merely close, new quote-heavy material also gets an *adversarial* read: a separate language model is pointed at each quotation and asked to assume it is wrong until proven right — to locate the span in the source, compare it word for word, and flag any changed word, added punctuation, wrong-work attribution, un-ellipsed truncation, or a claim that inverts what the source says. In practice this pass catches real defects that both the mechanical check and an ordinary proofread miss.

This review is deliberately kept *advisory*: a human reads its findings and fixes the genuine ones. It is not wired into an automatic merge block, because free-text review output is too variable to gate on reliably — an attempt to hard-block on it was tried and abandoned. The judgment stays with a person.

## Provenance

Every factual claim and every quotation traces to a real source. Full source texts are held in a private working repository and are *not published* — only the finished articles appear on this site, carrying short verified quotations and links out to the canonical public edition of each work (Project Gutenberg, the Mises Institute, arXiv, and the like). Where a source has no free public edition, the article names it in plain text rather than linking a copy.

## For machines

Two machine-readable indexes accompany the site for language-model agents and crawlers. `/llms.txt` is a table of contents — every public page with its title, category, and summary. `/llms-full.txt` is the same corpus with each article's complete text inlined, so an agent can read the whole wiki in one fetch. Both are regenerated at publish time from the published articles *only*; neither includes the private full-text sources.

## Copyright, sources, and licensing

- **Quoted and referenced works** remain the property of their respective copyright holders. This wiki reproduces only short excerpts, for commentary, criticism, and education, and links to the original wherever a public edition exists. Some sources are public-domain, some are openly licensed (for example, works released under Creative Commons), and some are commercially published and held privately for research only — the full text of the latter is never republished here.
- **The site software** is [Quartz](https://quartz.jzhao.xyz/), used under its MIT license.
- **The original editorial content** — the articles, syntheses, and commentary written for this wiki — is the work of the Galtland Index. It is offered for reading and citation; it is not placed under an open-reuse license by this statement. Quoting it with attribution and a link back is welcome.

---

*This page describes the process, not a promise of infallibility. If you find a misquotation, a broken source link, or a claim a source does not support, that is a defect worth reporting — the standard on this page is exactly the standard by which such a report should be judged.*
