---
title: "The Lightning Network Paper"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
verified: 2026-05-30
tags: [bitcoin, lightning-network, payment-channels, htlc, scalability, proof-of-work, cypherpunk]
aliases: [The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, Lightning Network paper, Poon Dryja Lightning paper]
confidence: high
summary: "Joseph Poon and Tadge Dryja's 2016 Lightning paper proposes scalable off-chain Bitcoin payments through bidirectional payment channels, revocable commitments, hashed timelock contracts, routed payments, and blockchain settlement as a dispute backstop."
short: "Poon and Dryja's Lightning paper: HTLC-routed payment channels that keep Bitcoin's blockchain as settlement and dispute backstop."
---

# The Lightning Network Paper

> [[the-lightning-network-paper|The Lightning Network Paper]] is Joseph Poon and Tadge Dryja's 2016 draft "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments."

## Scaling Problem

Poon and Dryja begin with the constraint that every on-chain Bitcoin transaction must be propagated and validated by the network. If all global payments had to appear on chain, block size, bandwidth, and storage demands would push validation toward specialized operators and custodians.

The paper frames this as a scaling-versus-decentralization problem. Bigger blocks can raise throughput, but at sufficient scale they make full validation expensive and encourage trust in centralized parties. Lightning instead tries to keep ordinary payments off chain while preserving Bitcoin's blockchain as the final enforcement layer.

## Payment Channels

The paper's base object is the bidirectional payment channel. Two parties fund a 2-of-2 multisignature output on chain, then exchange signed commitment transactions that represent the current balance. They do not broadcast each update. They hold enforceable states that can be submitted if cooperation fails.

Old states are discouraged through revocation and penalty logic. If a party broadcasts a stale commitment, the counterparty can use a breach-remedy transaction to take the channel funds within the dispute window. This makes the current off-chain state credible because cheating can be punished on chain.

## HTLC Routing

A single channel only connects two parties. The network design adds hashed timelock contracts. An HTLC pays if the recipient reveals a preimage to a known hash before a timeout; otherwise the sender can recover the funds after the timeout.

Routing chains HTLCs across several channels with decrementing timelocks. Alice can pay Dave through Bob and Carol by using the same hash condition across the path. Dave's preimage disclosure lets each upstream participant claim from the prior hop. If a hop fails, only the affected channel has to go on chain; cooperative channels can settle by off-chain novation.

## Settlement Backstop and Tradeoffs

Lightning does not replace the blockchain. It changes how often the blockchain is used. Cooperative updates stay local to channel counterparties, while the blockchain remains the court of last resort for channel closure, stale-state punishment, and HTLC timeout or execution.

The tradeoff is operational complexity. Liquidity must be allocated to channels, paths must be found, timelocks must be chosen safely, keys may need online availability for routing nodes, and forced expiration spam is a systemic risk. [[lightning-network|Lightning Network]] covers the concept; the paper proposed the architecture.

## See Also

- [[lightning-network|Lightning Network]] - concept article for the protocol idea
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - base-layer settlement system Lightning extends
- [[proof-of-work|Proof of Work]] - settlement-cost layer Lightning tries to preserve from centralization
- [[public-key-cryptography|Public-Key Cryptography]] - signatures and key control for channel states
- [[smart-contracts|Smart Contracts]] - protocol-enforced contract frame for HTLCs
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - intermediary-risk thesis that Lightning tries to avoid
- [[cypherpunk|Cypherpunk]] - digital-cash movement context
- [[the-bitcoin-standard|The Bitcoin Standard]] - later Austrian-Bitcoin synthesis that discusses second-layer scaling

## Sources

- [The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments](https://lightning.network/lightning-network-paper.pdf) - primary Poon-Dryja 2016 draft, version 0.5.9.2
