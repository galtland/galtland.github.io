---
title: "Hal Finney"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [hal-finney, bitcoin, rpow, proof-of-work, pgp, cypherpunk, digital-cash, satoshi-nakamoto]
aliases: [Harold Thomas Finney II, Hal, RPOW creator, first Bitcoin receiver]
confidence: medium
summary: "Hal Finney was a cypherpunk cryptographer, PGP contributor, RPOW creator, early Bitcoin participant, and recipient of the first Bitcoin transaction. His selected posts bridge Hashcash, Bit Gold, reusable proof of work, and early Bitcoin."
short: "Cypherpunk, PGP contributor, RPOW creator, early Bitcoin runner, and recipient of the first Bitcoin transaction."
---

# Hal Finney

> [[hal-finney|Hal Finney]] is the cypherpunk cryptographer whose selected posts connect PGP, anonymous remailers, reusable proof of work, Bit Gold, and early Bitcoin. In this corpus he is both an implementer of pre-Bitcoin proof-of-work money and one of Bitcoin's first serious readers and users.

## What the Corpus Covers

The raw source aggregates four Finney items: "Bitcoin and Me" from 2013, the archived RPOW page from 2004, his November 7, 2008 cryptography-mailing-list response to Satoshi's Bitcoin paper, and the January 11, 2009 "Running bitcoin" post.

Confidence is medium. The posts are direct primary materials for Finney's own statements, but the wider biographical and motivational reading remains limited to this selected corpus.

## PGP and Cypherpunk Path

In "Bitcoin and Me," Finney says he worked on an early version of PGP with [[phil-zimmermann|Phil Zimmermann]], became one of the first PGP Corporation hires, and participated in the Cypherpunks. He also says he ran the first cryptographically based anonymous remailer.

That makes Finney a bridge between [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] and Bitcoin. He moved from strong-encryption tools and remailers into proof-of-work money and peer-to-peer digital cash.

## RPOW and Proof-of-Work Money

Finney's RPOW page presents reusable proof-of-work as a way to make proof-of-work tokens transferable rather than one-shot anti-spam stamps. The system used Hashcash-style work and a transparent-server design so users could verify the code running on a secure processor.

The RPOW page explicitly invokes Nick Szabo's Bit Gold and describes proof-of-work objects as potentially useful payment foundations. That places Finney inside the [[unforgeable-costliness|Unforgeable Costliness]] lineage: costly tokens, verifiable creation, and transfer without ordinary mint trust.

## Early Bitcoin Reader and Receiver

Finney's November 2008 post calls Bitcoin promising and immediately recognizes its reliance on honest CPU power outweighing attackers. He also links it to Szabo's Bit Gold and asks practical questions about block validation, transaction handling, double spending, and process specification.

In "Bitcoin and Me," Finney says he downloaded the first release, was likely the first person besides Satoshi to run Bitcoin, mined an early block, received the first Bitcoin transaction of ten coins from [[satoshi-nakamoto|Satoshi Nakamoto]], and exchanged bug reports with Satoshi.

## ALS and Final Work

The 2013 post also explains Finney's ALS diagnosis in August 2009, retirement in 2011, and continued programming through eye-tracking software. His final described Bitcoin work in the source concerns hardening wallets using trusted-computing features.

The post's tone matters for confidence. It is not a detached biography; it is Finney's own retrospective on luck, illness, early Bitcoin, and the practical problem of securing coins for heirs.

## See Also

- [[satoshi-nakamoto|Satoshi Nakamoto]] - pseudonymous Bitcoin author with whom Finney corresponded early
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - paper Finney responded to on the cryptography mailing list
- [[proof-of-work|Proof of Work]] - Hashcash/RPOW/Bitcoin lineage central to Finney's role
- [[public-key-cryptography|Public-Key Cryptography]] - cryptographic infrastructure behind PGP, signatures, and Bitcoin ownership
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - design problem Finney's RPOW and Bitcoin interests address
- [[nick-szabo|Nick Szabo]] - Bit Gold author Finney cites in RPOW and the 2008 Bitcoin response
- [[phil-zimmermann|Phil Zimmermann]] - PGP creator with whom Finney worked
- [[unforgeable-costliness|Unforgeable Costliness]] - bridge concept for RPOW, Bit Gold, and Bitcoin
- [[cypherpunk|Cypherpunk]] - movement context for Finney's remailer, RPOW, and Bitcoin work
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for strong cryptography and privacy-preserving tools
- [[lightning-network|Lightning Network]] - Bitcoin second-layer payment channels: off-chain routed payments enforced by HTLCs
- [[hashcash|Hashcash]] - Adam Back's proof-of-work cost-function paper: non-interactive tokens, public

## Sources

- [[2026-05-28-hal-finney-early-bitcoin-corpus|Hal Finney Early Bitcoin Corpus]] - aggregate source for "Bitcoin and Me," RPOW, the 2008 cryptography-list Bitcoin response, and "Running bitcoin"
