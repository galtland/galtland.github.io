---
title: "Hashcash"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [hashcash, adam-back, proof-of-work, cypherpunk, bitcoin, spam, denial-of-service, cryptography]
aliases: [Hashcash paper, Hashcash: A Denial of Service Counter-Measure, Adam Back Hashcash]
confidence: high
summary: "Adam Back's 2002 Hashcash paper formalizes the 1997 proof-of-work cost function for throttling spam and denial-of-service abuse, defining interactive and non-interactive variants, public verifiability, trapdoor freedom, and later applications including b-money."
short: "Adam Back's proof-of-work cost-function paper: non-interactive tokens, public verification, DoS throttling, and the direct Bitcoin citation lineage."
---

# Hashcash

> [[hashcash|Hashcash]] is Adam Back's 2002 paper "Hashcash: A Denial of Service Counter-Measure," formalizing the proof-of-work cost function first proposed in 1997 for throttling spam, remailer abuse, and denial-of-service attacks.

## Cost Function Design

Hashcash is a CPU cost function. A client mints a token by searching for an input whose hash has enough leading zero bits, or more generally enough partial collision value. The intended asymmetry is direct: minting is parameterizably expensive, while verification is cheap.

The paper classifies a good cost function as efficiently verifiable, publicly auditable, probabilistic in expected cost, and preferably trapdoor-free. Hashcash's simplest version is non-interactive. The client can choose its own start value, attach a service name so tokens are not reusable across services, and include time information so servers can expire old entries and keep a manageable double-spending database.

## Interactive and Non-Interactive Variants

The non-interactive design fits store-and-forward systems such as email and anonymous remailers. There is no server challenge round trip, so the sender must mint a token that the receiver can later verify. This is the version that matters most for spam and publication-flood throttling.

The interactive variant fits connection-oriented settings such as TCP, TLS, SSH, or IPsec establishment. A server issues a challenge and can dynamically raise the work factor under load. Back also describes hashcash-cookies, analogous to SYN cookies, where the server avoids keeping per-connection state until the client returns a valid work token.

## Public Verifiability

The paper emphasizes public auditability and trapdoor freedom. Anyone can verify a Hashcash token without access to secret material and without repeating the work. The server has no shortcut for minting tokens, which matters when the verifier may have an incentive to fake traffic or accounting.

Back contrasts this with known-solution client puzzles and time-lock-puzzle constructions. Those may be useful in some settings, but they sacrifice public auditability, introduce trapdoors, require key management, or raise verification cost. Hashcash's importance comes from being simple, verifiable, and easy to scale by changing the target difficulty.

## Bitcoin Lineage

Hashcash was not written as a monetary treatise. Its first target was abuse pricing for unmetered network resources. But the token's structure has monetary implications: it is costly to produce, cheap to verify, and digitally transferable as evidence that work was done.

That is why [[bitcoin-whitepaper|Bitcoin Whitepaper]] cites Hashcash in its proof-of-work section. Satoshi adapts the cost function from anti-spam metering into public timestamp consensus. In [[proof-of-work|Proof of Work]], Hashcash is therefore the link between denial-of-service throttling, b-money's computational money, Bit Gold's costly strings, and Bitcoin's longest-chain rule.

## See Also

- [[proof-of-work|Proof of Work]] - concept article for the cost-function lineage
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - Satoshi paper that explicitly cites Hashcash
- [[cypherpunk|Cypherpunk]] - topic map placing Hashcash in the cypherpunk technical chain
- [[satoshi-nakamoto|Satoshi Nakamoto]] - designer who adapted Hashcash-style proof of work into Bitcoin consensus
- [[hal-finney|Hal Finney]] - RPOW creator and Hashcash-improvement correspondent cited in Back's paper
- [[nick-szabo|Nick Szabo]] - Bit Gold author who applied costly proof strings to digital money
- [[unforgeable-costliness|Unforgeable Costliness]] - monetary primitive connecting proof of work to costly digital scarcity
- [[the-bitcoin-standard|The Bitcoin Standard]] - later monetary interpretation of Bitcoin's proof-of-work scarcity
- [[cypherpunks-mailing-list|The Cypherpunks Mailing List]] - Reference guide to the Cypherpunks mailing list (1992-2009), the Bay Area-founded

## Sources

- [Hashcash: A Denial of Service Counter-Measure](http://www.hashcash.org/papers/hashcash.pdf) - primary 2002 paper covering cost-function classification, interactive/non-interactive forms, applications, and references
