---
title: "Whitfield Diffie"
volatility: cold
category: reference
created: 2026-07-16
updated: 2026-07-16
verified: 2026-07-16
confidence: high
tags: [whitfield-diffie, martin-hellman, public-key-cryptography, new-directions-in-cryptography, cryptography, key-exchange, cypherpunk]
aliases: [Whitfield Diffie, Bailey Whitfield Diffie]
summary: "Whitfield Diffie is the cryptographer who, with Martin Hellman, invented public-key cryptography. Their 1976 paper 'New Directions in Cryptography' introduced the two ideas that made modern secure communication possible: public-key cryptosystems, in which the key that encrypts is public and only the key that decrypts is secret, and the Diffie–Hellman key exchange, by which two parties who have never met can agree on a shared secret over an open channel. Both broke the ancient assumption that secure communication first required a securely delivered shared key — the key-distribution problem that had bound cryptography to couriers and trusted intermediaries. Diffie's later career combined technical work with a public defence of civil-liberties cryptography against key-escrow and wiretap mandates. His invention is the mathematical foundation on which the entire cypherpunk program — encrypted messaging, digital signatures, and Bitcoin — is built."
short: "Cryptographer who, with Martin Hellman, invented public-key cryptography in 1976 — the primitive underlying encrypted messaging, digital signatures, and Bitcoin."
---

# Whitfield Diffie

> [[whitfield-diffie|Whitfield Diffie]] is the cryptographer who, with [[martin-hellman|Martin Hellman]], invented [[public-key-cryptography|public-key cryptography]] — the single idea the entire cypherpunk and cryptocurrency world is built on.

## New Directions in Cryptography

Diffie and Hellman's 1976 paper [[new-directions-in-cryptography|New Directions in Cryptography]] announced that cryptography stood on the brink of a revolution, and then delivered two of its foundations. The first was the concept of a **public-key cryptosystem**: a scheme in which the key used to encrypt a message is public and freely published, while only the separate key needed to decrypt it is kept secret — so anyone can send a confidential message to a recipient they have never contacted, using only information the recipient has posted openly. The second was the **Diffie–Hellman key exchange**, a protocol by which two parties communicating over a completely open channel can arrive at a shared secret that an eavesdropper who hears the whole exchange still cannot compute.

Both broke the assumption that had confined cryptography for millennia: that two parties must first share a secret key, delivered by some secure means, before they can communicate securely. That key-distribution problem tied every secure system to trusted couriers and central key authorities. Public-key methods dissolved it — the deepest instance of the wiki's recurring theme that [[trusted-third-parties-as-security-holes|trusted third parties are security holes]] that good design can remove.

## What it made possible

Nearly everything the wiki's [[cypherpunk|cypherpunk]] thread depends on descends from this work. Public-key cryptography is what lets PGP encrypt mail to a stranger, lets a digital signature prove authorship without revealing a secret, secures the Signal protocol, and underlies the [[public-key-cryptography|signature scheme]] that makes a Bitcoin coin a chain of ownership. Diffie also became a prominent public advocate for strong civil cryptography, arguing against government key-escrow and wiretap-access mandates during the 1990s [[pgp-and-the-crypto-wars|Crypto Wars]] — the political fight the cypherpunks would carry forward.

## Place in This Wiki

Diffie sits at the very root of the [[privacy-and-cryptography|privacy-and-cryptography]] tradition — one technical step before the cypherpunks, and the reason their program was possible at all. Where [[crypto-anarchy|crypto anarchy]] is the political thesis that cryptography shifts power to individuals, Diffie and Hellman supplied the mathematics that made the thesis more than a wish.

## See Also

- [[martin-hellman|Martin Hellman]] - his co-author on the founding paper
- [[new-directions-in-cryptography|New Directions in Cryptography]] - the 1976 paper that invented the field
- [[public-key-cryptography|Public-Key Cryptography]] - the primitive Diffie and Hellman created
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - the key-distribution problem public keys dissolve
- [[cypherpunk|Cypherpunk]] - the movement his invention made possible

## Sources

- [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf) - Diffie and Hellman's 1976 paper: public-key cryptosystems, the Diffie–Hellman key exchange, and the end of the key-distribution problem
