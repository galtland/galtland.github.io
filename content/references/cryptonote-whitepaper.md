---
title: "CryptoNote Whitepaper"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
verified: 2026-05-30
tags: [libertarian, cypherpunk, cryptonote, monero, ring-signatures, stealth-addresses, proof-of-work, privacy-coins, digital-cash]
aliases: [CryptoNote v 2.0, CryptoNote whitepaper, Nicolas van Saberhagen CryptoNote, Monero foundation paper]
confidence: high
summary: "Nicolas van Saberhagen's 2013 CryptoNote v2.0 paper proposes a privacy-preserving cryptocurrency using one-time keys for receiver privacy, one-time ring signatures for sender privacy, and a memory-bound proof-of-work function intended to reduce specialized mining advantage. The paper is the design foundation for Monero."
short: "The 2013 CryptoNote paper behind Monero: ring signatures, one-time keys, and memory-bound proof of work for private electronic cash."
---

# CryptoNote Whitepaper

> [[cryptonote-whitepaper|CryptoNote Whitepaper]] is Nicolas van Saberhagen's 2013 *CryptoNote v 2.0*. It proposes electronic cash with unlinkable recipients, untraceable senders, and a proof-of-work design aimed at reducing specialized mining advantage.

## Work and Authorship

The paper is dated October 17, 2013, and credited to Nicolas van Saberhagen. That name is pseudonymous. The work itself is high-confidence as a primary technical document; the author's real-world identity should be treated as low-confidence unless a separate source establishes it.

CryptoNote starts from Bitcoin's public-ledger trade-off. Bitcoin removes the trusted mint, but every transaction is public, allowing transaction-graph analysis. CryptoNote tries to keep a decentralized proof-of-work ledger while reducing the linkability of sender, receiver, and transaction history.

## Unlinkable Payments

Receiver privacy comes from one-time destination keys. A recipient can publish a standard address, but the sender derives a unique output key using random data and a Diffie-Hellman-style shared secret with the recipient's public keys. Observers see a one-time public key on chain, not the published address reused.

The recipient scans transactions with part of the private information, recognizes outputs addressed to them, and derives the corresponding one-time private key to spend later. The result is a stealth-address style model: payment receipt does not require a new published address for every transaction.

## One-Time Ring Signatures

Sender privacy comes from [[ring-signatures|Ring Signatures]]. When spending an output, the user forms a ring with foreign outputs and signs in a way that proves one member of the ring authorized the spend. The verifier cannot identify which output is real.

CryptoNote adds a key image so the network can detect double spending. If the same one-time private key is used twice, the key image repeats. The duplicate can be rejected without revealing which ring member was the signer.

## Egalitarian Proof of Work

The paper also criticizes Bitcoin's SHA-256 proof of work for drifting away from "one-CPU-one-vote" as GPUs and ASICs dominate ordinary CPUs. CryptoNote proposes a memory-bound proof-of-work function, later associated with CryptoNight, designed around random access to a scratchpad large enough to resist cheap specialization.

This claim is partly historical and partly design intent. The paper's goal is egalitarian mining: narrow the advantage of specialized hardware so network voting power is less concentrated. Later mining economics and hardware development require separate evaluation.

## Role as Monero Foundation

Monero is the best-known system descended from the CryptoNote design. The foundation is conceptual rather than static: Monero has changed implementations and parameters over time, but its identity as a privacy coin comes from the CryptoNote combination of one-time keys, ring-signature sender ambiguity, and ledger-level double-spend detection.

CryptoNote also belongs between Chaum and Zerocash in the privacy-money lineage. It avoids Chaum's trusted bank and avoids Zerocash's early trusted setup, but it accepts visible rings, larger transactions, and anonymity-set trade-offs.

## See Also

- [[ring-signatures|Ring Signatures]] - concept article for CryptoNote's sender-privacy primitive
- [[zk-snarks|zk-SNARKs]] - contrasting privacy primitive used by Zerocash/Zcash
- [[zerocash|Zerocash]] - parallel privacy-coin design using zk-SNARK shielded transactions
- [[proof-of-work|Proof of Work]] - broader cost-function and consensus lineage that CryptoNote modifies
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - transparent-ledger design CryptoNote criticizes and extends
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaumian digital-cash predecessor
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - trust-minimization lens for avoiding laundering services and trusted mixers
- [[cypherpunk|Cypherpunk]] - movement context for private digital cash
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for privacy-preserving cryptographic systems

## Sources

- [CryptoNote v 2.0](https://cryptonote.org/whitepaper.pdf) - primary source for one-time keys, one-time ring signatures, key images, proof-of-work design, and emission/parameter discussion
