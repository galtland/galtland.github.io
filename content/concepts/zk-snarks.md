---
title: "zk-SNARKs"
volatility: cold
category: concept
created: 2026-05-28
updated: 2026-05-28
verified: 2026-05-30
tags: [libertarian, cypherpunk, zk-snarks, zero-knowledge-proofs, zerocash, zcash, privacy-coins, cryptography]
aliases: [zero-knowledge succinct non-interactive arguments of knowledge, SNARKs, ZK SNARKs, succinct zero-knowledge proofs]
confidence: medium-high
summary: "zk-SNARKs are short, publicly verifiable zero-knowledge proofs of knowledge. Zerocash uses them to prove that a private ledger transition is valid without revealing the coins, amounts, or addresses involved."
short: "Short zero-knowledge proofs that let Zerocash/Zcash prove private ledger transitions are valid without exposing transaction details."
---

# zk-SNARKs

> [[zk-snarks|zk-SNARKs]] are zero-knowledge succinct non-interactive arguments of knowledge. In [[zerocash|Zerocash]], they let users prove that a payment obeys ledger rules while hiding transaction origin, destination, and amount.

## What the Acronym Means

A zk-SNARK is a proof system for statements that can be checked by efficient computation. The prover knows a witness: the secret information that makes the statement true. The verifier sees a public instance and a proof, then accepts or rejects without learning the witness.

In payment systems, the witness might include secrets opening a coin commitment, authentication paths in a Merkle tree, serial numbers, trapdoors, values, and address secrets. The public statement can say: this transaction spends existing unspent coins, preserves balance, creates well-formed new coins, and reveals no duplicate serial number. The proof convinces the network without exposing the private transaction graph.

## Four Properties

The Zerocash paper emphasizes four properties.

Completeness means an honest prover with a valid witness can convince the verifier. Soundness, strengthened as proof of knowledge, means a bounded adversary should not be able to produce an accepted proof without knowing a valid witness. Succinctness means proofs are short and verification is fast relative to the full computation being proved. Zero knowledge means the proof leaks no information about the witness beyond the truth of the statement.

Those properties are jointly important. A private currency needs zero knowledge, but it also needs soundness so privacy cannot become undetectable inflation. It needs succinct verification because every full node may need to check proofs. It needs non-interactivity because transactions are broadcast to a public ledger, not negotiated privately with every verifier.

## Zerocash's Ledger Transition

[[zerocash|Zerocash]] uses zk-SNARKs for a decentralized anonymous payment scheme. Users mint coin commitments onto a ledger. Later, a pour transaction consumes old coins and creates new ones. The transaction reveals enough public data for consensus, including serial numbers to prevent double spending, but hides which commitments are being spent, who receives the new coins, and what amounts are shielded.

The zk-SNARK proves the hidden accounting. The user knows valid openings and Merkle paths for the consumed coins; the consumed serial numbers are derived correctly; the new commitments are well formed; and the private balance equation is satisfied. The ledger can reject invalid transitions without learning the transaction's private details.

## Trusted Setup

The early Zerocash construction requires public parameters generated in a one-time setup. A trusted party runs setup for the relevant circuit and publishes proving and verification keys. After setup, ordinary transactions do not require that party.

This is a major trade-off. The setup makes short proofs and fast verification practical, but it introduces a trust assumption at the beginning of the system. If toxic setup material were retained or abused, the system's integrity could be compromised. That is why trusted setup became one of the central public controversies around zk-SNARK-based currencies.

## Deployment in Zcash

The paper presents Zerocash as a practical implementation at 128-bit security and argues that it can be integrated into Bitcoin-style ledgers or altcoins. It reports sub-kilobyte spend transactions and millisecond-scale verification for the relevant proof, with proof generation taking much longer.

Zcash is the deployed descendant of this design. The practical achievement is not merely better mixing. It is a shift from visible decoy sets to cryptographic validity proofs: the chain can remain publicly auditable for consensus while the transaction graph becomes hidden.

## Comparison With Ring Signatures

[[ring-signatures|Ring Signatures]] hide a spender inside an explicit set of possible signers. The anonymity set is visible and grows with ring size. zk-SNARKs instead hide the witness behind a succinct proof. The chain sees that the rules were followed, not which visible decoys were used.

That does not make zk-SNARKs universally superior. They use heavier mathematics, stronger assumptions, and, in Zerocash's early form, trusted setup. The trade-off is sharper privacy with a more complex trust and implementation surface.

## See Also

- [[zerocash|Zerocash]] - work reference for the Zerocash paper and Zcash foundation
- [[ring-signatures|Ring Signatures]] - contrasting privacy primitive with visible anonymity sets
- [[cryptonote-whitepaper|CryptoNote Whitepaper]] - parallel privacy-coin design using one-time keys and ring signatures
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - earlier e-cash privacy primitive using a trusted bank
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - transparent ledger design whose privacy limits Zerocash addresses
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - trust-minimization lens for the setup controversy
- [[praxeology-of-privacy|Praxeology of Privacy]] - privacy-as-selective-disclosure frame for shielded payments
- [[cypherpunk|Cypherpunk]] - movement context for private digital cash
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for privacy-preserving cryptographic systems

## Sources

- [Zerocash: Decentralized Anonymous Payments from Bitcoin](https://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf) - primary source for zk-SNARK properties, trusted setup, the DAP construction, and Zerocash deployment claims
