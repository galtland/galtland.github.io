---
title: "Adam Back"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-06-18
verified: 2026-06-18
tags: [adam-back, hashcash, proof-of-work, cypherpunk, bitcoin, digital-cash, cryptography]
aliases: [Adam Back, Back]
confidence: high
summary: "Adam Back is the cryptographer who created Hashcash, the proof-of-work cost function first proposed on the Cypherpunks list in 1997 and formalized in his 2002 paper. Hashcash is the abuse-pricing primitive — costly to mint, cheap and publicly to verify — that Satoshi Nakamoto cites in the Bitcoin whitepaper and adapts from spam throttling into timestamp consensus, making Back the cost-function rung in the cypherpunk proof-of-work lineage."
short: "Cryptographer who created Hashcash, the proof-of-work cost function cited by the Bitcoin whitepaper — the abuse-pricing primitive that became Bitcoin's mining and consensus mechanism."
---

# Adam Back

> [[adam-back|Adam Back]] is the cryptographer who created [[hashcash|Hashcash]], the [[proof-of-work|proof-of-work]] cost function he first proposed on the Cypherpunks list in 1997 and formalized in his 2002 paper. Hashcash is the primitive that [[satoshi-nakamoto|Satoshi Nakamoto]] cites in the [[bitcoin-whitepaper|Bitcoin whitepaper]] and adapts from anti-spam metering into public timestamp consensus.

## The Hashcash Cost Function

Back's contribution is a single, durable idea: a CPU cost function whose minting is parameterizably expensive but whose verification is cheap and public. A client mints a token by searching for an input whose hash carries enough leading-zero (partial-collision) value; anyone can then check it with a single hash and no secret material. Back specifies the properties that make such a function useful — efficient public verification, probabilistic expected cost, and freedom from any trapdoor that would let an insider mint cheaply — and gives both a non-interactive form (for store-and-forward systems like email and remailers) and an interactive, server-challenged form (for connection setup, where the work factor can rise under load).

Hashcash was not written as money. Its first target was abuse pricing for unmetered network resources: spam, remailer flooding, and denial-of-service. But the token's shape — costly to produce, trivial to verify, and standing as public evidence that work was done — is implicitly monetary, which is why later digital-cash designs reused it as a minting component.

## Place in the Proof-of-Work Lineage

Back is the first rung in the [[proof-of-work|proof-of-work]] lineage this wiki traces from cost function to consensus. Hashcash supplies the verifiable cost; [[nick-szabo|Nick Szabo]]'s [[bit-gold|Bit Gold]] and Wei Dai's b-money turn costly proofs toward digital money; and Bitcoin combines the cost function with distributed timestamping and a longest-chain rule into a working peer-to-peer cash system. The connection is explicit rather than inferred: Satoshi cites Hashcash in Section 4 and the references of the [[bitcoin-whitepaper|Bitcoin whitepaper]], using a Hashcash-style search for a nonce that drives a block hash below a target as the network's minting and voting mechanism. Back's improvement-correspondent on the Cypherpunks list, [[hal-finney|Hal Finney]], later built RPOW on the same idea.

## Why He Matters in This Wiki

Adam Back is one of the few cypherpunks whose specific technical artifact survived intact into Bitcoin. Where the wiki treats [[unforgeable-costliness|unforgeable costliness]] as the monetary requirement and Bitcoin as its first liquid realization, Hashcash is the mechanism that makes the cost both real and verifiable. Back therefore sits at the technical root of the proof-of-work story even though he did not set out to build money.

## See Also

- [[hashcash|Hashcash]] - Back's proof-of-work cost-function paper
- [[proof-of-work|Proof of Work]] - the cost-function-to-consensus lineage Back's work opens
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - cites Hashcash as the proof-of-work model
- [[satoshi-nakamoto|Satoshi Nakamoto]] - adapted Hashcash-style proof of work into Bitcoin consensus
- [[bitcoin|Bitcoin]] - the system built on the cost function Back created
- [[bit-gold|Bit Gold]] - Szabo's digital-money design that reused costly proofs
- [[nick-szabo|Nick Szabo]] - Bit Gold author, the adjacent proof-of-work-money rung
- [[hal-finney|Hal Finney]] - RPOW creator who extended Back's idea
- [[unforgeable-costliness|Unforgeable Costliness]] - the monetary primitive Hashcash makes verifiable
- [[cypherpunk|Cypherpunk]] - topic map for the thread Back's work belongs to

## Sources

- [Hashcash: A Denial of Service Counter-Measure](http://www.hashcash.org/papers/hashcash.pdf) - Back's 2002 paper: the cost-function design, interactive/non-interactive variants, public verifiability, and applications
- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) - cites Hashcash as the proof-of-work model Bitcoin adapts
