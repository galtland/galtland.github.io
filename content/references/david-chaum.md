---
title: "David Chaum"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-06-18
verified: 2026-06-18
tags: [david-chaum, blind-signatures, ecash, digicash, privacy, cypherpunk, digital-cash, cryptography]
aliases: [David Chaum, Chaum]
confidence: high
summary: "David Chaum is the cryptographer who invented blind signatures in his 1982 paper and laid out, in his 1985 Communications of the ACM article, a comprehensive program of privacy-preserving transaction systems built to make Big Brother obsolete. His blind-signature primitive lets a bank sign a payer-blinded token that the payer later unblinds, so the bank cannot link a withdrawal to its eventual spend — yielding untraceable digital cash. Chaum is the foundational pre-cypherpunk cryptographer whose ecash and DigiCash are the direct ancestors of later digital-cash designs."
short: "Cryptographer who invented blind signatures and the untraceable-payments program — the pre-cypherpunk foundation whose ecash and DigiCash ancestored later digital cash."
---

# David Chaum

> [[david-chaum|David Chaum]] is the cryptographer who invented the [[blind-signatures-for-untraceable-payments|blind signature]] and, with it, untraceable digital cash. His blind-signature primitive — a bank signs a token the payer has blinded, who later unblinds it, so withdrawal cannot be linked to spend — is the cryptographic core of [[ecash|Chaumian ecash]] and of his broader program of privacy-preserving payments, communications, and credentials designed to make a surveillance dossier society obsolete.

## The Blind-Signature Primitive

Chaum's 1982 paper introduces blind signatures as a way to resolve what he frames as a conflict: electronic payments that are fully traceable expose payee, amount, and time of every transaction, revealing a person's whereabouts, associations, and lifestyle, while anonymous cash lacks proof of payment and theft controls. The blind signature lets a system have both privacy and control. He explains it through a carbon-lined-envelope analogy: a payer chooses a random note and seals it (blinds it) so the signer marks the outside without seeing the contents; the carbon transfers the signature to the hidden slip, which is then removed (unblinded) and can be spent on its own.

Applied to payments, a bank signs anything with its private key as worth a fixed amount. The payer forms a blinded note, the bank signs it and debits the account, the payer strips the blinding to recover a valid signed note, and later spends it; when the note returns for deposit the bank cannot tell which withdrawal it came from. The result is untraceable digital cash that still supports proof of payment, exceptional-circumstance auditability, and the ability to stop stolen notes — counterfeiting is blocked by the signature itself.

## The Broader Program: Transaction Systems to Make Big Brother Obsolete

Chaum's 1985 Communications of the ACM article generalizes the idea into a full architecture. He argues that pervasive computerization is laying the foundation for a dossier society in which records linked by universal identifiers reveal individuals' habits and associations — a chilling effect on free behavior. His paraphrased aim is transaction systems to make Big Brother obsolete: replace identifying records with digital pseudonyms, blind signatures, and personal card computers so that security and privacy can hold at once. He shows feasibility across three transaction kinds — communication, payment, and credential — with pseudonyms that organizations cannot link even if all of them conspire, while still preventing abuse by individuals. This is the privacy-preserving program from which the later cypherpunk agenda descends.

## The Foundational Pre-Cypherpunk Cryptographer

Chaum predates and seeds the cypherpunk movement: his untraceable-payments and pseudonymous-credential designs supplied the conceptual vocabulary that the [[cypherpunk|cypherpunks]] later carried forward. His company DigiCash commercialized the scheme as ecash in the 1990s, the first real-world Chaumian digital cash. Where this wiki traces the [[digital-cash-history|history of digital cash]] toward Bitcoin, Chaum is the origin point — the blind-signature mint is the direct ancestor of modern [[ecash|Chaumian ecash]] systems, even though his designs kept the bank as a trusted issuer rather than removing it.

## See Also

- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaum's 1982 paper inventing the primitive
- [[security-without-identification|Security Without Identification]] - his 1985 program for privacy-preserving transaction systems
- [[ecash|Ecash and Chaumian Mints]] - the modern application of Chaum's blind-signature mint
- [[public-key-cryptography|Public-Key Cryptography]] - the cryptographic foundation his signatures build on
- [[digital-cash-history|Lessons from Digital-Cash History]] - the DigiCash-to-Bitcoin lineage Chaum opens
- [[the-cybereconomy|The Cybereconomy]] - the privacy-economy vision his work prefigures
- [[cypherpunk|Cypherpunk]] - the movement Chaum's program seeds
- [[hal-finney|Hal Finney]] - later cypherpunk who championed ecash's privacy properties
- [[anonymous-remailers|Anonymous Remailers]] - The cypherpunks' first deployed infrastructure: mail servers chained so no single operator knows both sender and recipient — Chaum's 1981 mix design made real, and the ancestor of Tor.

## Sources

- [Blind Signatures for Untraceable Payments](https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf) - Chaum's 1982 paper: the blind-signature cryptosystem, the untraceable-payments protocol, and its auditability and theft controls
- [Security Without Identification: Transaction Systems to Make Big Brother Obsolete](https://chaum.com/security-without-identification/) - Chaum's 1985 article: digital pseudonyms, card computers, and privacy-preserving communication, payment, and credential systems
