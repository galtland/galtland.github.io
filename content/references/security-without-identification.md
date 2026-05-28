---
title: "Security Without Identification"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [david-chaum, pseudonymity, privacy, digital-cash, cryptography, surveillance, cypherpunk]
aliases: [Security Without Identification: Transaction Systems to Make Big Brother Obsolete, Transaction Systems to Make Big Brother Obsolete, Chaum 1985]
confidence: high
summary: "David Chaum's 1985 CACM paper expands blind signatures into a broader program for privacy-preserving transaction systems built on digital pseudonyms, personal card computers, untraceable communication, payments, and credentials."
short: "Chaum's 1985 privacy-infrastructure paper: digital pseudonyms, card computers, untraceable communication, payments, and credentials against dossier society."
---

# Security Without Identification

> [[security-without-identification|Security Without Identification]] is David Chaum's 1985 Communications of the ACM paper "Security Without Identification: Transaction Systems to Make Big Brother Obsolete."

## Dossier Society

Chaum's starting point is not only payment privacy. It is the growth of computerized transaction records across public and private organizations. When ordinary transactions produce linkable identifiers, organizations can compile dossiers about habits, whereabouts, associations, and life patterns.

The paper argues that this creates a chilling effect and a structural loss of individual monitorability and control. The problem is not that organizations need no security. It is that identification-centered security solves organizational abuse problems by making the individual increasingly transparent.

## Digital Pseudonyms and Card Computers

Chaum's alternative is to use different digital pseudonyms with different organizations. A person can have a bank pseudonym, a shop pseudonym, a credential pseudonym, and one-time-use pseudonyms without making them linkable by default. Abuse controls are built into the protocols rather than into universal identity.

The personal card computer is the user's side of that architecture. It is not a tamper-resistant institutional token that keeps secrets from the user. It is a user-controlled device that stores keys, authorizes transactions, displays terms, and lets the user decide what to disclose.

## Three Transaction Domains

The paper develops three domains. Communication transactions aim to hide tracing information while preserving authentication through digital signatures. Payment transactions use blind signatures so withdrawals and deposits cannot be linked, while note numbers, receipts, and clearing lists can still prevent double spending and support exceptional auditability.

Credential transactions let a user transform a credential issued under one pseudonym into a form shown under another pseudonym. The point is selective disclosure: an organization can verify the needed credential without learning unnecessary identity data or linking the user's whole dossier.

## Bridge from Blind Signatures

[[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] gives the core payment primitive. This paper generalizes the political and institutional program. Blind signatures become one component in a larger privacy architecture for communication, money, credentials, clearinghouses, and accountability.

For the cypherpunk lineage, that makes the paper a bridge. It is older than the 1990s cypherpunk list, but it already states the central cypherpunk move: replace identification-dependent trust with cryptographic protocols that preserve privacy while still making abuse costly.

## See Also

- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - payment primitive behind the broader program
- [[new-directions-in-cryptography|New Directions in Cryptography]] - public-key and digital-signature foundation
- [[public-key-cryptography|Public-Key Cryptography]] - concept article for signatures and public-key control
- [[privacy-and-cryptography|Privacy and Cryptography]] - topic map for privacy-preserving implementation
- [[cypherpunk|Cypherpunk]] - movement that later adopted Chaumian privacy themes
- [[praxeology-of-privacy|Praxeology of Privacy]] - later Austrian-libertarian theory of selective disclosure
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - later conflict over routine public-key privacy tools
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - adjacent protocol-design critique of institutional trust

## Sources

- [Security Without Identification: Transaction Systems to Make Big Brother Obsolete](https://chaum.com/security-without-identification/) - primary 1985 CACM paper
