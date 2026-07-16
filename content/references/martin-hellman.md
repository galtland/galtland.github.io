---
title: "Martin Hellman"
volatility: cold
category: reference
created: 2026-07-16
updated: 2026-07-16
verified: 2026-07-16
confidence: high
tags: [martin-hellman, whitfield-diffie, public-key-cryptography, new-directions-in-cryptography, cryptography, key-exchange, cypherpunk]
aliases: [Martin Hellman, Martin E. Hellman]
summary: "Martin Hellman is the cryptographer and Stanford engineer who, with Whitfield Diffie, invented public-key cryptography. Their 1976 paper 'New Directions in Cryptography' introduced the public-key cryptosystem and the Diffie–Hellman key exchange, ending the ancient requirement that secure communication first needs a securely shared key. Hellman also fought, in the same period, the U.S. government's attempts to restrict academic cryptographic research — an early skirmish in the long conflict over whether strong cryptography belongs in private hands — and later turned to analyzing the risks of nuclear deterrence. In the wiki he stands, with Diffie, at the mathematical root of the whole cypherpunk program."
short: "Cryptographer who, with Whitfield Diffie, invented public-key cryptography in 1976 — the foundation of encrypted messaging, digital signatures, and Bitcoin."
---

# Martin Hellman

> [[martin-hellman|Martin Hellman]] is the cryptographer who, with [[whitfield-diffie|Whitfield Diffie]], invented [[public-key-cryptography|public-key cryptography]] — the primitive on which the wiki's entire privacy-and-money thread is built.

## New Directions in Cryptography

Hellman and Diffie's 1976 paper [[new-directions-in-cryptography|New Directions in Cryptography]] introduced the two ideas that founded modern cryptography: the **public-key cryptosystem**, in which the encrypting key is public and only the decrypting key is secret, and the **Diffie–Hellman key exchange**, by which two parties can establish a shared secret over a channel an adversary is listening to. Together they solved the key-distribution problem that had, for all of prior history, required secure communication to begin with a securely delivered shared key — and so required trusting whoever delivered it. The paper is the point at which cryptography stopped being the preserve of states and militaries and became something ordinary people could, in principle, wield for themselves.

## Defending open cryptography

Hellman's contribution was not only mathematical. In the years around the paper he resisted U.S. government pressure to restrict the publication of academic cryptographic research, insisting that the field belonged in the open literature rather than under classification. That stance — that strong cryptography should be public knowledge and available to citizens, not a state monopoly — is the seed of the argument the [[cypherpunk|cypherpunk]] movement would later make its own, and it prefigures the 1990s [[pgp-and-the-crypto-wars|Crypto Wars]] over encryption and key escrow. In later decades Hellman turned his risk-analysis instincts to the dangers of nuclear deterrence.

## Place in This Wiki

With Diffie, Hellman sits one step before the cypherpunks in the [[privacy-and-cryptography|privacy-and-cryptography]] lineage — the mathematicians whose invention made the political program of [[crypto-anarchy|crypto anarchy]] technically possible. Every later tool the wiki covers, from PGP to Signal to Bitcoin's signatures, rests on the public-key idea he and Diffie set down.

## See Also

- [[whitfield-diffie|Whitfield Diffie]] - his co-author on the founding paper
- [[new-directions-in-cryptography|New Directions in Cryptography]] - the 1976 paper that invented the field
- [[public-key-cryptography|Public-Key Cryptography]] - the primitive he and Diffie created
- [[cypherpunk|Cypherpunk]] - the movement built on their invention
- [[crypto-anarchy|Crypto Anarchy]] - the political thesis their mathematics made possible

## Sources

- [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf) - Hellman and Diffie's 1976 paper: public-key cryptosystems, the Diffie–Hellman key exchange, and the end of the key-distribution problem
