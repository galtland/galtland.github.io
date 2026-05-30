---
title: "CoinJoin and PayJoin"
volatility: warm
category: concept
created: 2026-05-30
updated: 2026-05-30
verified: 2026-05-30
confidence: high
tags: [coinjoin, payjoin, bitcoin, privacy, wasabi, joinmarket, wabisabi, chain-analysis, cypherpunk, digital-cash]
aliases: [coinjoin, payjoin, collaborative coinjoining, Wasabi, JoinMarket, WabiSabi]
summary: "Two Bitcoin base-layer privacy techniques: CoinJoin combines many users' inputs into one transaction so observers cannot link inputs to outputs (JoinMarket, Wasabi/WabiSabi), while PayJoin is a steganographic payment that breaks the common-input-ownership heuristic and looks like an ordinary transaction."
---

# CoinJoin and PayJoin

> CoinJoin and PayJoin are the two main techniques for adding privacy to ordinary on-chain [[bitcoin-whitepaper|Bitcoin]] transactions. They exist because Bitcoin's base layer is pseudonymous, not anonymous: the blockchain is public, and chain-analysis firms cluster addresses into identities using heuristics — chiefly the assumption that all inputs to a transaction share one owner. CoinJoin and PayJoin both attack that heuristic, by different means.

## The Base-Layer Privacy Problem

Every Bitcoin transaction is public and permanent: amounts, addresses, and timing are visible to anyone. **Address clustering** exploits this — when several inputs fund one transaction they are assumed to belong to the same entity (the **common-input-ownership heuristic**), and change outputs further link spends to senders. KYC exchanges supply identity anchors that analysis then extends across the transaction graph. The base layer provides no amount confidentiality, no sender/receiver unlinkability, and no deniability. This is the gap CoinJoin and PayJoin address, and it is why [[trusted-third-parties-as-security-holes|the design rule against trusted intermediaries]] extends to privacy: a custodial mixer would reintroduce exactly the linkage point users are trying to remove.

## CoinJoin

Proposed by Gregory Maxwell in 2013, **CoinJoin** combines inputs from multiple users into a single transaction with multiple outputs. Crucially, participants are not paying each other — each sends funds to themselves. In the simple case where participants each receive an equal-sized output, an observer cannot tell which output belongs to which participant; the link between inputs and outputs is broken across the **anonymity set** of participants.

CoinJoin needs coordination, and two models have emerged:

- **JoinMarket** uses market-based coordination: "takers" initiate rounds and pay "makers" for liquidity, with each taker coordinating their own transaction. Coordination is distributed across participants, so there is no central service to shut down, at the cost of more complex software and fees.
- **Wasabi Wallet** adds cryptographic blinding (the **WabiSabi** protocol) so the coordinator cannot link inputs to outputs even while coordinating. This lets users safely aggregate at one coordinator without trusting it, producing larger anonymity sets than JoinMarket typically achieves. The tradeoff is that a static coordinator is a censorship target — but the protocol is open, anyone can run a coordinator, and when Wasabi's original coordinator shut down under regulatory pressure users migrated to alternatives with little disruption.

CoinJoin's limits: effective mixing needs other participants (small anonymity sets are weak), repeated rounds create timing patterns, and unequal amounts can be re-linked through intersection analysis.

## PayJoin

**PayJoin** (also called Pay-to-EndPoint) is designed for actual payments rather than self-mixing. Instead of Alice simply sending Bob a payment, *both* Alice and Bob contribute inputs, so the transaction looks like an ordinary payment rather than a CoinJoin.

The privacy model is fundamentally different: PayJoin is **steganographic**. CoinJoin's equal-output structure leaves an obvious fingerprint on the chain; a PayJoin is indistinguishable from a normal transaction. Because a PayJoin secretly violates the common-input-ownership heuristic, and analysts cannot tell which transactions are PayJoins, even modest adoption degrades the reliability of clustering analysis *across the whole network*, not just for PayJoin users. Its cost is interactivity: sender and receiver must coordinate and be online together, and adoption remains limited.

## Place in This Wiki

CoinJoin and PayJoin are the on-chain privacy layer of [[the-praxeology-of-privacy|Hillebrand's]] implementation map, alongside the [[lightning-network|Lightning Network]] (payment-channel privacy) and [[ecash|ecash mints]] (custodial privacy). They are concrete instances of the [[parallel-economy|parallel economy]]'s strategy of raising the adversary's observation cost: each technique makes chain analysis more expensive without anyone's permission.

## See Also

- [[lightning-network|Lightning Network]] - the payment-channel layer with its own (partial) privacy properties
- [[ecash|Ecash and Chaumian Mints]] - the custodial privacy alternative on the same implementation map
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - why CoinJoin's coordinator is blinded rather than trusted
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - the public-ledger design these techniques add privacy to
- [[parallel-economy|The Parallel Economy]] - the strategic frame: raising observation cost
- [[praxeology-of-privacy|Praxeology of Privacy]] - selective disclosure applied to money
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaum's cryptographic-privacy ancestor of these methods
- [[privacy-and-cryptography|Privacy and Cryptography]] - the implementation-map topic
- [[the-praxeology-of-privacy|The Praxeology of Privacy]] - ch. 15 is the source for this concept

## Sources

- [The Praxeology of Privacy](https://towardsliberty.com/pop) - Hillebrand's ch. 15 §§15.7-15.8 on base-layer privacy limits, CoinJoin (JoinMarket, Wasabi/WabiSabi), and PayJoin
