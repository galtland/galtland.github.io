---
title: "Public-Key Cryptography"
volatility: cold
category: concept
created: 2026-05-27
updated: 2026-05-27
tags: [cryptography, public-key-cryptography, digital-signatures, privacy, cypherpunk, diffie-hellman]
aliases: [asymmetric cryptography, public key cryptography, Diffie-Hellman, digital signatures]
confidence: high
summary: "Public-key cryptography solves the key-distribution problem by separating public and private keys, enabling strangers to communicate securely and authenticate messages over open networks. It is the foundational primitive beneath cypherpunk privacy, digital cash, signatures, TLS, Tor, and Bitcoin ownership."
short: "The asymmetric-key breakthrough that made secure communication, digital signatures, blind signatures, Bitcoin ownership, and cypherpunk privacy practical on open networks."
---

# Public-Key Cryptography

> [[public-key-cryptography|Public-Key Cryptography]] is the asymmetric-key breakthrough that lets people communicate and authenticate messages over public networks without first sharing a secret key. It is the primitive that makes cypherpunk privacy, digital cash, digital signatures, onion routing, and Bitcoin ownership possible.

## The Key-Distribution Problem

Diffie and Hellman's 1976 [[new-directions-in-cryptography|New Directions in Cryptography]] starts from a practical bottleneck. Classical cryptography requires the parties to share a secret key before they can communicate privately. That may work for militaries, banks, or small groups with secure couriers, but it fails as a general foundation for open computer networks. Strangers on opposite sides of a network cannot wait for a prior physical key exchange before every private interaction.

The paper treats this as a structural obstacle to teleprocessing and digital commerce. The promise of networks is broad, cheap connection; the older cryptographic model reintroduces expensive prior coordination. Cypherpunk politics later grows out of that technical break. If strangers can establish secure channels without permission from a central dispatcher, private association becomes a network primitive rather than an institutional favor.

## The Asymmetric-Key Insight

The public-key idea separates encryption and decryption into different keys. The public key can be disclosed; the private key remains secret. A sender uses the recipient's public key to encrypt or verify, while the recipient uses the private key to decrypt or sign. Diffie and Hellman describe this as a system where calculating the private operation from the public one is computationally infeasible.

The original paper also distinguishes public-key cryptosystems from public-key distribution systems. The former are more powerful because they support encryption and authentication. The latter, closer to the Diffie-Hellman key exchange idea, let two parties establish a shared secret over an insecure channel. Both reduce the need for prearranged secure channels; both become central to later Internet security.

## Digital Signatures

The same asymmetry solves a second problem: signatures. Business contracts rely on marks that many people can verify but only one person can produce. Diffie and Hellman argue that digital networks need the equivalent of written signatures: message-dependent authentication that can be checked by anyone and cannot be forged by the recipient.

Digital signatures become the cypherpunk identity primitive. A key pair can stand for a durable pseudonym. A person can prove continuity of control without revealing a legal name. In [[bitcoin-whitepaper|Bitcoin Whitepaper]], Section 2 defines an electronic coin as a chain of digital signatures: each owner signs a hash of the previous transaction and the next owner's public key. Proof of work orders the history, but signatures transfer ownership.

## Blind Signatures and Digital Cash

David Chaum's [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] shows how public-key signatures can preserve privacy in payment and credential systems. A blind signature lets a signer certify a token without learning which certified token later appears. In the payment example, a bank can sign a withdrawal token, and later verify the deposited token, without linking deposit to withdrawal.

That primitive matters because it separates validity from traceability. A system can know that a token is authorized without learning the payer's full transaction history. The cypherpunk dream of digital cash did not begin with blockchains; it first used public-key signatures, blind signatures, and cryptographic protocols to make payment both verifiable and private.

## Downstream Applications

Public-key cryptography became ordinary infrastructure. PGP uses it for email encryption and signatures. TLS uses public-key methods to authenticate servers and establish session keys for web traffic. Tor uses public-key operations and Diffie-Hellman handshakes to build circuits through relays, then uses layered encryption so no single relay learns both origin and destination.

Bitcoin uses public keys and signatures for ownership, while [[proof-of-work|Proof of Work]] handles public ordering and Sybil-resistant consensus. [[smart-contracts|Smart Contracts]] depend on the same family of primitives for authorization, payment, confidentiality, and automatic execution. [[crypto-anarchy|Crypto Anarchy]] is unintelligible without this foundation: May's anonymous markets, reputations, and digital cash require keys that users can control directly.

## Limits and Trust Reintroduced

Public-key cryptography reduces the need for prior shared secrets, but it does not remove every trusted party. Users still need to know that a public key belongs to the intended party. Certificate authorities, webs of trust, key transparency systems, manual fingerprint checks, and trust-on-first-use are different answers to that binding problem. This is why public-key deployment leads directly to [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]]: a mathematical breakthrough can still become institutionally centralized at the naming, identity, or custody layer.

The confidence level is high for the core claim. Diffie and Hellman's paper explicitly identifies key distribution and digital signatures as open problems and gives the conceptual foundation for public-key systems. The later applications differ, but they all rely on the same asymmetric-key break.

## See Also

- [[crypto-anarchy|Crypto Anarchy]] - political and institutional thesis enabled by strong cryptography
- [[smart-contracts|Smart Contracts]] - protocol-embedded contract execution using cryptographic building blocks
- [[proof-of-work|Proof of Work]] - complementary primitive for costly public ordering
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - institutional problem that appears in public-key deployment
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - signature chain and proof-of-work consensus design
- [[new-directions-in-cryptography|New Directions in Cryptography]] - Diffie-Hellman public-key foundation paper
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaum's payment-privacy signature primitive
- [[security-without-identification|Security Without Identification]] - Chaum's broader privacy-preserving transaction-system program
- [[tor-the-second-generation-onion-router|Tor: The Second-Generation Onion Router]] - onion-routing design using public-key handshakes
- [[satoshi-nakamoto|Satoshi Nakamoto]] - pseudonymous designer who used signatures for Bitcoin ownership
- [[praxeology-of-privacy|Praxeology of Privacy]] - privacy-as-selective-disclosure frame implemented by cryptographic tools
- [[privacy-and-cryptography|Privacy and Cryptography]] - topic map for privacy-preserving technical systems
- [[cypherpunk|Cypherpunk]] - topic map for the cypherpunk thread that this article participates in

- [[lightning-network|Lightning Network]] - payment-channel system using signatures and key control for off-chain settlement
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - strong-encryption politics around public-key privacy tools
- [[phil-zimmermann|Phil Zimmermann]] - PGP creator who packaged public-key cryptography for ordinary users
- [[hal-finney|Hal Finney]] - PGP contributor and later Bitcoin participant
- [[are-bitcoins-ownable|Are Bitcoins Ownable?]] - property-theory paper built around signing keys, control, and UTXOs
- [[the-lightning-network-paper|The Lightning Network Paper]] - Poon and Dryja's Lightning paper: HTLC-routed payment channels that keep Bitcoin's bloc...
- [[ring-signatures|Ring Signatures]] - public-key signature variant that hides which key in a set signed
- [[forward-secrecy|Forward Secrecy]] - session property built from ephemeral public-key exchange
- [[signal-x3dh|Signal X3DH]] - asynchronous authenticated key agreement using identity keys, prekeys, and DH composition
- [[signal-double-ratchet|Signal Double Ratchet]] - messaging ratchet that repeatedly mixes Diffie-Hellman outputs into new keys
- [[timothy-c-may|Timothy C. May]] - Tim May (1951-2018), former Intel physicist and founding cypherpunk; author of the Cryp...
- [[cypherpunks-mailing-list|The Cypherpunks Mailing List]] - Reference guide to the Cypherpunks mailing list (1992-2009), the Bay Area-founded forum...
- [[nostr|Nostr]] - Nostr (Notes and Other Stuff Transmitted by Relays) is a minimal protocol where identit...

## Sources

- [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf) - Diffie and Hellman's 1976 key-distribution, public-key, and digital-signature framework
- [Blind Signatures for Untraceable Payments](https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf) - Chaum's privacy-preserving signature primitive for digital payments
- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) - Satoshi's use of digital signatures for ownership transfer
- [Tor: The Second-Generation Onion Router](https://svn.torproject.org/svn/projects/design-paper/tor-design.pdf) - onion-routing application using public-key cryptography and Diffie-Hellman handshakes
