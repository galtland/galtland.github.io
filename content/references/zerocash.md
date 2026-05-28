---
title: "Zerocash"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [libertarian, cypherpunk, zerocash, zcash, zk-snarks, zero-knowledge-proofs, privacy-coins, bitcoin, digital-cash]
aliases: [Zerocash paper, Decentralized Anonymous Payments from Bitcoin, Zerocash extended paper, Zcash foundation paper]
confidence: medium-high
summary: "Ben-Sasson, Chiesa, Garman, Green, Miers, Tromer, and Virza's 2014 Zerocash paper proposes a decentralized anonymous payment protocol using zk-SNARKs to hide transaction origin, destination, and amount while preserving ledger validity. It is the technical foundation for Zcash."
short: "The 2014 Zerocash paper: zk-SNARK-based private payments that hide origin, destination, and amount while preserving ledger validity."
---

# Zerocash

> [[zerocash|Zerocash]] is the 2014 extended paper *Zerocash: Decentralized Anonymous Payments from Bitcoin* by Eli Ben-Sasson, Alessandro Chiesa, Christina Garman, Matthew Green, Ian Miers, Eran Tromer, and Madars Virza. It is the zk-SNARK foundation for Zcash.

## Threat Model

The paper starts from Bitcoin's public ledger. Bitcoin avoids a trusted bank, but the transaction graph, values, dates, and pseudonymous keys are public. Users can create many addresses, use mixers, or coordinate CoinJoin-style transactions, but those approaches require effort, may introduce trusted parties, and often fail to hide amounts or payment metadata.

Zerocash's threat model is ordinary legitimate privacy. The paper is not only about users with exceptional secrets. It argues that payment history, balances, and transaction relationships should not be publicly accessible to neighbors, merchants, co-workers, or chain analysts.

## From Zerocoin to Zerocash

Zerocoin used zero-knowledge proofs to unlink a spend from a mint, functioning like a decentralized mix. But the paper criticizes Zerocoin as incomplete: proofs were large, verification was slower, coins had fixed denominations, direct private payments were absent, and amounts or other metadata remained exposed.

Zerocash generalizes the construction into a decentralized anonymous payment scheme. Coins are commitments on a ledger. Transactions can mint, pour, split, merge, and redeem value. The ledger enforces validity while the proof hides the private witness behind the transaction.

## zk-SNARK Proofs

The core primitive is [[zk-snarks|zk-SNARKs]]. A pour transaction proves an NP statement: the spender knows valid old coins, the commitments appear in the ledger's Merkle tree, the serial numbers are correctly derived and not already spent, the new coin commitments are well formed, and the hidden values balance.

The verifier does not learn which commitments were spent, who receives the new coins, or what shielded amounts moved. The public ledger sees enough to prevent double spending and maintain consensus, but not the private transaction graph.

## Trusted Setup

Zerocash's efficiency depends on public parameters generated during setup. The paper describes setup as executed once by a trusted party; after setup, no ongoing trusted bank or escrow agent is needed. This is a real departure from Chaumian banking, but not total trust elimination.

The setup issue is the paper's most important trust caveat. The system removes a transactional intermediary but introduces a ceremony-level assumption. That is why Zerocash belongs simultaneously in the privacy-coin lineage and in the trust-minimization debate.

## Deployment as Zcash

The paper argues that Zerocash can be integrated into Bitcoin-like ledgers either by replacing the base currency or by running a hybrid currency with transparent and shielded components. It reports practical proof sizes and verification times compared with Zerocoin, with proof generation remaining more expensive.

Zcash is the deployed system descending from this design. The main conceptual contribution is shielded ledger validity: public consensus rules can verify that private money movement is valid without seeing the movement itself.

## See Also

- [[zk-snarks|zk-SNARKs]] - concept article for the proof primitive Zerocash uses
- [[ring-signatures|Ring Signatures]] - contrasting privacy primitive used by CryptoNote/Monero
- [[cryptonote-whitepaper|CryptoNote Whitepaper]] - parallel privacy-coin design using one-time keys and ring signatures
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - transparent ledger design whose privacy limits Zerocash addresses
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - earlier e-cash privacy primitive with a trusted bank
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - trust-minimization lens for the setup trade-off
- [[cypherpunk|Cypherpunk]] - movement context for private digital cash
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for privacy-preserving cryptographic systems

## Sources

- [Zerocash: Decentralized Anonymous Payments from Bitcoin](https://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf) - primary source for the threat model, Zerocoin comparison, DAP construction, zk-SNARK proof, setup requirement, and integration paths
