---
title: "New Directions in Cryptography"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [diffie-hellman, public-key-cryptography, digital-signatures, cryptography, cypherpunk, key-exchange, privacy]
aliases: [Diffie-Hellman 1976, New Directions, public-key cryptography paper]
confidence: high
summary: "Whitfield Diffie and Martin Hellman's 1976 paper identifies the key-distribution and digital-signature problems and proposes public-key cryptography and public-key distribution as foundations for secure communication over open networks."
short: "Diffie and Hellman's 1976 breakthrough: public keys, key exchange, and digital signatures for secure communication without prior shared secrets."
---

# New Directions in Cryptography

> [[new-directions-in-cryptography|New Directions in Cryptography]] is Whitfield Diffie and Martin E. Hellman's 1976 IEEE paper that introduced the public-key turn in modern cryptography.

## The Key-Distribution Problem

The paper begins from a practical problem created by teleprocessing networks. Classical cryptography requires the parties to share a secret key before they communicate privately. That model can work for small, planned, high-security relationships, but it does not scale to ordinary business or open computer networks where strangers need secure communication without prior courier exchange.

Diffie and Hellman therefore treat secure key distribution as a central obstacle rather than an implementation detail. A large network cannot preload keys for every possible pair of users. Cryptography has to support private communication over public channels.

## Public-Key Cryptography

The paper's central insight is to separate encryption and decryption into distinct operations. A user can publish an enciphering key while keeping the deciphering key private, so anyone can send a message that only the private-key holder can read. The published key does not reveal the secret key because deriving the secret operation is computationally infeasible.

The paper also distinguishes public-key cryptosystems from public-key distribution systems. The first can support encryption and authentication directly. The second lets two users establish a shared secret over an insecure channel. The Diffie-Hellman key-exchange idea comes from this second path.

## Digital Signatures

Diffie and Hellman identify authentication as a second problem for digital networks. Paper contracts rely on signatures that many people can verify but only one person can produce. A digital equivalent must be message-dependent, publicly checkable, and unforgeable even by the recipient.

That signature concept is the primitive later used by PGP, software distribution, Bitcoin ownership, smart-contract systems, and digital identity. In [[bitcoin-whitepaper|Bitcoin Whitepaper]], the electronic coin begins as a chain of digital signatures; proof of work orders the history, but signatures transfer control.

## Downstream Role

This paper sits underneath most of the cypherpunk stack. [[public-key-cryptography|Public-Key Cryptography]] depends on its asymmetric-key insight. PGP packages that insight for ordinary email. TLS uses related methods for authenticated web sessions. Tor uses public-key operations and Diffie-Hellman handshakes to build anonymous circuits. Bitcoin uses signatures for ownership and authorization.

The paper does not itself give every later algorithm or deployed protocol. Its canonical role is conceptual: it names the key-distribution and signature problems and shows that open networks need cryptographic systems whose public information can be safely public.

## See Also

- [[public-key-cryptography|Public-Key Cryptography]] - concept article for the asymmetric-key primitive
- [[cypherpunk|Cypherpunk]] - topic map for the movement built on strong cryptography
- [[privacy-and-cryptography|Privacy and Cryptography]] - topic map connecting the primitive to privacy theory
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaum's payment-privacy extension of signature primitives
- [[security-without-identification|Security Without Identification]] - Chaum's broader privacy-infrastructure program
- [[tor-the-second-generation-onion-router|Tor: The Second-Generation Onion Router]] - later anonymous-communication system using public-key handshakes
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - digital-signature chain plus proof-of-work settlement
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - public-key encryption as civil-liberties conflict

## Sources

- [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf) - primary 1976 paper from IEEE Transactions on Information Theory
