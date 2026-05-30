---
title: "Code as Speech"
volatility: cold
category: concept
created: 2026-05-28
updated: 2026-05-30
verified: 2026-05-30
tags: [libertarian, cypherpunk, code-as-speech, first-amendment, crypto-wars, export-controls, encryption]
aliases: [code is speech, source code as speech, encryption source code as speech, Bernstein code as speech]
confidence: medium
summary: "Code as speech is the Crypto Wars legal thesis that encryption source code can be protected First Amendment expression because programmers use code to communicate precise algorithmic ideas. In Bernstein v. United States, a 1999 Ninth Circuit panel applied that thesis to strike export-control licensing of cryptography as unconstitutional prior restraint — but the panel opinion was withdrawn for en-banc rehearing and the case was mooted, so it stands as influential Crypto Wars history rather than binding precedent."
short: "The Bernstein Crypto Wars thesis: encryption source code can be First Amendment expression, and export licensing can become unconstitutional prior restraint."
---

# Code as Speech

> [[code-as-speech|Code as Speech]] is the claim that source code can be protected expression when programmers use it to communicate ideas, methods, and algorithms. In the Crypto Wars, the claim mattered because US export controls forced cryptographers to seek government permission before publishing encryption code.

## The Bernstein Thesis

The most important source for the concept is [[bernstein-v-united-states-1999|Bernstein v. United States (1999)]]. Daniel J. Bernstein developed Snuffle, an encryption method described in a paper, C source code, and English instructions. When he asked whether he needed permission to publish and discuss that material, the State Department treated the source code and instructions as controlled encryption exports.

Bernstein's challenge converted a technical classification dispute into a speech case. The point was not that every program is always political speech. It was narrower: cryptographers and programmers routinely use source code to express algorithmic ideas with precision. A licensing system aimed at encryption source code therefore burdened a real medium of scientific communication.

One procedural caveat governs everything below: the 1999 Ninth Circuit decision was a three-judge *panel* opinion. The court soon granted rehearing en banc — which under circuit practice withdrew the panel opinion — and before the en-banc court could rule, the government changed the export rules and the dispute became moot. The reasoning summarized here is therefore the most-cited articulation of the code-as-speech thesis, but it is persuasive Crypto Wars history, not settled, binding precedent.

## Source Code as Written Expression

The Ninth Circuit panel opinion explains source code as text written in a high-level programming language. Snuffle's C source had to be compiled into object code before a machine could run it; more generally, source code is human-readable program text that must be compiled or interpreted before execution, while programmers can read the source directly to understand the method it expresses. That dual character is the center of the case.

The government argued that code's functional aspect removed it from ordinary First Amendment treatment. The court rejected that move for source code as used by cryptographers. A functional medium can still be expressive. Mathematical equations can be used to calculate; graphs can be used to model; source code can be compiled. None of that erases the fact that specialists use those media to communicate ideas.

## Prior Restraint

The legal bite came from prior-restraint doctrine. The challenged regulations did not merely punish unlawful conduct after the fact. They required prepublication licensing before Bernstein could distribute encryption source code in ways the government called export, including internet publication accessible to foreign persons.

Under the court's analysis, a licensing scheme that burdens protected expression must have narrow discretion, brief specified deadlines, and prompt review. The EAR system failed those tests. It vested broad discretion in export officials, allowed indefinite delay through referrals and appeals, and lacked adequate judicial review. For a researcher trying to publish cryptography, the burden was not theoretical. The process chilled scientific publication before speech occurred.

## Relation to PGP and the Crypto Wars

Code as speech belongs beside [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]]. Phil Zimmermann's PGP episode showed the practical side of the same conflict: strong encryption software spread online, the government treated export of cryptography as a national-security issue, and publication became a target of control.

Bernstein supplied the clean legal theory. If encryption source code is expressive, then a government licensing gate over publication is not just technical export administration. It is a speech restriction. That made code publication itself part of the cypherpunk strategy: publishing tools, algorithms, and source became a way to normalize strong cryptography before states could keep it exceptional.

## Boundary of the Claim

The concept should stay bounded. The Bernstein panel did not hold — and given the opinion's withdrawal, no binding Ninth Circuit authority holds — that every software object is fully protected speech in every regulatory context. The panel opinion emphasized encryption source code in source form, the record of expressive use among cryptographers, and a licensing system that directly burdened publication.

That boundary matters because code can also be conduct, infrastructure, evidence, or an operational component of a regulated system. The code-as-speech claim is strongest where the state controls publication of human-readable source code because the code communicates forbidden technical knowledge.

## See Also

- [[bernstein-v-united-states-1999|Bernstein v. United States (1999)]] - the withdrawn Ninth Circuit panel opinion applying the code-as-speech thesis to encryption export controls (persuasive history, not binding precedent)
- [[key-escrow-and-clipper-chip|Key Escrow and Clipper Chip]] - parallel Crypto Wars fight over mandatory or encouraged access mechanisms
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - deployment conflict around routine strong encryption and export controls
- [[cypherpunk|Cypherpunk]] - movement context for publishing cryptographic tools as resistance infrastructure
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for strong encryption and privacy tools

## Sources

- [Bernstein v. United States, Ninth Circuit Opinion (1999)](https://www.eff.org/files/filenode/bernstein/19990506_circuit_decision.html) - primary court opinion on source code, First Amendment protection, and prior restraint
- [1990s Crypto Wars Dossier](https://web.archive.org/web/20011127065037id_/http://www.eff.org/Privacy/Clipper/) - EFF Bernstein timeline and broader export-control context
