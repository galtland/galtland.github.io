---
title: "Bernstein v. United States (1999)"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-30
verified: 2026-05-30
tags: [libertarian, cypherpunk, bernstein-v-united-states, code-as-speech, first-amendment, export-controls, crypto-wars, court-ruling]
aliases: [Bernstein v. USDOJ, Bernstein v. Department of State, Bernstein v. Department of Justice, Bernstein 1999, Snuffle case]
confidence: medium
summary: "The 1999 Ninth Circuit panel opinion in Bernstein held that encryption source code, as used by cryptographers, can be expressive First Amendment material and that the challenged export-control licensing regime operated as unconstitutional prior restraint. The opinion was withdrawn when the court granted rehearing en banc, and the dispute was mooted by changed export rules before any en banc ruling, so it set no binding precedent. The source also records the district-court path through Judge Marilyn Hall Patel's 1996 and 1997 rulings."
short: "The influential — but later withdrawn and non-precedential — 1999 Ninth Circuit panel opinion treating encryption source code as speech and striking export licensing as unconstitutional prior restraint."
---

# Bernstein v. United States (1999)

> [[bernstein-v-united-states-1999|Bernstein v. United States (1999)]] is the Ninth Circuit Crypto Wars panel opinion that treated encryption source code as protected expression and held that the challenged export-control licensing regime imposed unconstitutional prior restraint. The panel opinion was later withdrawn when the Ninth Circuit granted rehearing en banc, and the dispute was mooted by changed export rules before any en banc decision — so it remains historically influential and widely cited, but never became binding precedent.

## Work and Procedural History

Daniel J. Bernstein developed Snuffle while a doctoral candidate at the University of California, Berkeley. He wanted to publish a paper, C source code, and English instructions, and to discuss the work in academic settings. The State Department treated the source code and instructions as controlled under encryption export rules.

Bernstein sued. Judge Marilyn Hall Patel first held in 1996 that source code was speech protected by the First Amendment. Later in 1996 she held the ITAR system facially invalid as a prior restraint. After President Clinton shifted nonmilitary encryption export licensing from State to Commerce in December 1996, Bernstein amended the complaint. In 1997, Judge Patel again granted summary judgment, this time against the new EAR regime.

## The Ninth Circuit Panel

The ingested opinion is filed May 6, 1999, in case No. 97-16686. It lists Judges Myron H. Bright, Betty B. Fletcher, and Thomas G. Nelson. Judge Fletcher wrote the opinion, Judge Bright concurred, and Judge Nelson dissented.

That panel alignment matters because the opinion is not a unanimous broad manifesto. The majority used a narrower rationale than the district court but still affirmed. The concurrence joined the speech holding. The dissent resisted the majority's treatment of the export-control system.

## Source Code as Expression

The opinion's central analytical move is to distinguish source code from object code and to focus on how source code is used by cryptographers. Source code is human-readable text in a programming language. It can be compiled, but in source form it also communicates precise algorithmic ideas to other programmers.

The court treated that expressive use as constitutionally significant. Cryptographers use code much as mathematicians use equations: to state methods with rigor and to make peer review possible. Snuffle was especially strong on this point because Bernstein's source code was not merely a finished commercial product; it was part of his scientific and political argument about encryption export rules.

## Prior Restraint Analysis

The challenged EAR provisions required prepublication licensing for encryption source code exports, with export defined broadly enough to burden internet publication and communications with foreign persons. Because the majority treated encryption source code as expression, the licensing system had to survive prior-restraint scrutiny.

It failed. The court held that the regime operated as a prepublication licensing scheme, vested broad discretion in officials, and lacked adequate procedural safeguards. Under the Freedman line of cases, licensing restraints on speech need brief definite time limits, prompt judicial review, and constrained official discretion. The EAR process could delay decisions, route matters to the President without a firm time limit, and deny prompt review.

## Holding and Aftermath

The holding was that the challenged regulations constituted a prior restraint on speech in violation of the First Amendment. The court affirmed the district court's injunction against enforcement of the invalidated provisions.

The dossier's later Gilmore account records the practical aftermath. The government sought rehearing before an 11-judge en banc panel, which was granted — and under Ninth Circuit practice, granting rehearing en banc withdrew the May 1999 panel opinion as binding authority. The government then "voluntarily" changed the encryption export regulations so that most free software and academic research could be published from the United States more easily, the en banc review of the old regulations became moot, and the case was handed back to Judge Patel, who ended it. The 1999 panel opinion therefore never matured into settled circuit precedent, even though it remains one of the most cited statements of the code-as-speech position. That resolution relaxed the publication fight without eliminating export controls altogether.

[[code-as-speech|Code as Speech]] is the concept article for the legal thesis. The work reference belongs beside [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] because both episodes turn encryption from a specialist engineering practice into a civil-liberties conflict over publication, distribution, and ordinary private communication.

Bernstein did not make all regulation of software unconstitutional, and because the panel opinion was withdrawn and never reinstated en banc, it is persuasive history rather than controlling law. On its own record it argued forcefully that controlling publication of encryption source code burdens expression and that export licensing can be a speech licensing scheme, not merely trade administration — the reasoning that gave the code-as-speech thesis its most-cited articulation.

## See Also

- [[code-as-speech|Code as Speech]] - concept article for the First Amendment source-code thesis
- [[key-escrow-and-clipper-chip|Key Escrow and Clipper Chip]] - parallel Crypto Wars fight over government-access encryption
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - deployment conflict around PGP, export controls, and routine strong encryption
- [[cypherpunk|Cypherpunk]] - movement context for publishing cryptographic code
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for strong encryption and privacy tools

## Sources

- [Bernstein v. United States, Ninth Circuit Opinion (1999)](https://www.eff.org/files/filenode/bernstein/19990506_circuit_decision.html) - primary court opinion for facts, procedural posture, panel, source-code analysis, and prior-restraint holding
- [1990s Crypto Wars Dossier](https://web.archive.org/web/20011127065037id_/http://www.eff.org/Privacy/Clipper/) - EFF case-page timeline and Gilmore aftermath account
