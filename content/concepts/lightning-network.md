---
title: "Lightning Network"
volatility: warm
category: concept
created: 2026-05-28
updated: 2026-05-28
tags: [bitcoin, lightning-network, payment-channels, htlc, proof-of-work, cypherpunk, scalability]
aliases: [Lightning Network, Bitcoin Lightning Network, payment channels, HTLCs, hashed timelock contracts]
confidence: high
summary: "Bitcoin's Lightning Network is Poon and Dryja's second-layer design for routed off-chain payments using bidirectional payment channels and hashed timelock contracts. It keeps the blockchain as a settlement and dispute-resolution backstop rather than a record of every payment."
short: "Bitcoin second-layer payment channels: off-chain routed payments enforced by HTLCs, with the blockchain reserved for settlement and disputes."
---

# Lightning Network

> [[lightning-network|Lightning Network]] is Bitcoin's second-layer payment-channel system for instant routed payments. It uses bidirectional channels, hashed timelock contracts, and the Bitcoin blockchain as the final enforcement layer when counterparties stop cooperating.

## Scaling Without Custodians

Poon and Dryja begin with the same constraint that makes [[bitcoin-whitepaper|Bitcoin Whitepaper]] historically important: a peer-to-peer cash system must avoid trusted financial intermediaries. Their scaling question is whether Bitcoin can handle large payment volume without turning validation into a data-center privilege.

The paper argues that simply putting every payment on chain would centralize Bitcoin. Large blocks would raise bandwidth, storage, and validation costs until ordinary users could no longer run validating nodes. That would weaken the security model built around [[proof-of-work|Proof of Work]], because a smaller set of validators and miners would become easier to trust, pressure, or capture.

Lightning is therefore a scaling-by-deferral proposal. The blockchain remains the final judge of ownership, but ordinary repeated payments between cooperative parties do not need global publication.

## Channels as Enforceable Off-Chain Settlement

A payment channel starts with an on-chain funding transaction, usually a multisignature output controlled by the two channel parties. Inside the channel, the parties exchange signed commitment transactions that update the current balance. Each update replaces the previous state and gives both sides enough cryptographic evidence to close the channel if cooperation fails.

This is not a custodian's ledger layered over Bitcoin. The paper is explicit that channel payments are still Bitcoin transactions whose broadcast is deferred. The parties are not trusting an operator to keep balances honestly; they are holding enforceable transaction states that can be submitted to the blockchain if needed.

The design depends on signatures, timelocks, revocation, and penalty logic. Old states become dangerous to broadcast because the counterparty can punish a stale close. Cooperative parties keep updating off chain; uncooperative parties are forced back to on-chain settlement.

## HTLCs and Routed Payments

A single channel only connects two parties, so the network design adds hashed timelock contracts. An HTLC makes payment conditional on disclosure of a preimage to a known hash before a timeout. If the recipient reveals the preimage in time, funds can be claimed; if not, the sender can recover them after the timelock.

Routing chains these contracts across several channels. Alice can pay Dave through Bob and Carol by using the same hash condition across the path, with shorter timelocks as the payment moves closer to Dave. Dave's disclosure of the preimage lets each upstream participant claim from the previous one. The result is a multi-hop payment path without a central clearinghouse.

The paper treats these scripts as a practical instance of [[smart-contracts|Smart Contracts]]: protocol rules make the promised performance enforceable without asking a trusted intermediary to escrow the whole payment.

## Blockchain as Dispute Backstop

The blockchain is used most heavily when something goes wrong. If everyone cooperates, the payment path settles by channel updates and nothing new is broadcast. If a channel counterparty disappears, broadcasts an old state, or refuses to continue, only the affected channel has to close on chain. Other channels can continue updating off chain.

This is the anti-custodial point. Lightning does not remove Bitcoin's settlement layer; it economizes on it. The blockchain becomes the court of last resort for signed channel states, while most routine transfers remain local to the parties who care about them.

That makes Lightning adjacent to [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]]. The design tries to preserve peer-to-peer payment finality while reducing the pressure to outsource payments to large custodians.

## Tradeoffs

The paper's confidence is high for the design it documents, but the design is not costless. Routing requires liquidity, path discovery, fee markets, and online availability for some participants. Timelock selection matters, and forced-expiration spam is treated as a systemic risk because many forced channel closes can create on-chain pressure.

The tradeoff is therefore not "blockchain or no blockchain." It is whether the blockchain should process every payment or provide a scarce, expensive, decentralized enforcement layer for many off-chain agreements. Lightning chooses the second path.

## See Also

- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - base-layer electronic cash design that Lightning extends
- [[the-lightning-network-paper|The Lightning Network Paper]] - Poon and Dryja's 2016 payment-channel design paper
- [[proof-of-work|Proof of Work]] - consensus and settlement-cost layer Lightning tries to preserve from centralization
- [[smart-contracts|Smart Contracts]] - protocol-enforced contract frame for HTLCs and channel states
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - intermediary-risk thesis that motivates non-custodial channels
- [[public-key-cryptography|Public-Key Cryptography]] - signature infrastructure for channel control and settlement
- [[cypherpunk|Cypherpunk]] - movement context for peer-to-peer cryptographic payment systems
- [[hal-finney|Hal Finney]] - RPOW and early Bitcoin participant whose work sits upstream of payment-channel scaling
- [[the-bitcoin-standard|The Bitcoin Standard]] - Saifedean's monetary reading of Bitcoin, including second-layer scaling concerns
- [[the-fiat-standard|The Fiat Standard]] - later Ammous source with a dedicated Bitcoin scaling chapter
- [[bitcoin-is-venice|Bitcoin Is Venice]] - Farrington's 2021 essay: Bitcoin as civilizational exit from fiat finance, framed throu...

## Sources

- [[2026-05-28-lightning-network-paper|The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments]] - Poon and Dryja's 2016 paper on payment channels, HTLCs, routing, risks, and the blockchain as enforcement backstop
