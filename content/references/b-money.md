---
title: "b-money"
volatility: cold
category: reference
created: 2026-06-19
updated: 2026-06-19
verified: 2026-06-19
tags: [b-money, wei-dai, proof-of-work, digital-money, cypherpunk, crypto-anarchy, contracts, trusted-third-parties]
aliases: [b-money, bmoney, b money]
confidence: high
summary: "b-money is Wei Dai's 1998 proposal for a digital money that lets pseudonymous online participants hold balances and enforce contracts without any government or trusted issuer. Money is created by broadcasting solutions to costly computational problems, transfers are signed broadcasts applied to a shared set of account databases, and contracts are bonded with arbitration. It is one of the cypherpunk proof-of-work predecessors the Bitcoin whitepaper cites directly, supplying proof-of-work issuance and signed, broadcast-ordered accounts while leaving the consensus problem open."
short: "Wei Dai's 1998 proposal for pseudonymous digital money with proof-of-work issuance, signed transfers, and bonded contracts — a precursor to Bitcoin that left the consensus problem open."
---

# b-money

> [[b-money|b-money]] is [[wei-dai|Wei Dai]]'s 1998 proposal for a digital money that needs no government and no trusted issuer. New units are created by broadcasting the solution to a costly computational problem; transfers are signed broadcasts that every participant applies to a shared record of balances; and contracts are made enforceable by bonding each party with a maximum reparation and an arbitrator. It is one of the proof-of-work predecessors the [[bitcoin-whitepaper|Bitcoin whitepaper]] cites directly, alongside [[hashcash|Hashcash]]; it anticipates Bitcoin's [[proof-of-work|proof-of-work]] issuance and signed-transfer model, though it stops short of a single consensus rule.

## The Problem It Sets

b-money opens from a political motive rather than a technical one. Dai takes up [[timothy-c-may|Tim May]]'s [[crypto-anarchy|crypto-anarchy]] and asks what would make it actually livable. What distinguishes it from ordinary anarchy, he writes, is permanence:

> "…in a crypto-anarchy the government is not temporarily destroyed but permanently forbidden and permanently unnecessary."
>
> — [[wei-dai|Wei Dai]], [[b-money|b-money]]

The obstacle is that a community is defined by cooperation, and "efficient cooperation requires a medium of exchange (money) and a way to enforce contracts" — services that have traditionally been supplied by governments and supplied only to legal, named entities. Dai's aim is to provide both "to and by untraceable entities", i.e. to digital pseudonyms identified by public keys on an untraceable, signed-message network. That places b-money squarely in the cypherpunk program: extend to money the permissionless quality already won for messages.

## The First Protocol: Money as a Shared Ledger

In the first (admittedly impractical) protocol, *every* participant keeps a database of how much money belongs to each pseudonym, and the protocol is just the rules for updating those databases by broadcast.

- **Creation.** "Anyone can create money by broadcasting the solution to a previously unsolved computational problem", provided the work done is easy to measure and the solution is otherwise worthless. Crucially, the amount minted is pinned to real cost: "The number of monetary units created is equal to the cost of the computing effort in terms of a standard basket of commodities." This is proof-of-work issuance with a commodity-denominated peg — work spent buys a measured quantity of money.
- **Transfer.** To pay, an owner broadcasts a signed message of the form "I give X units of money to K_B"; everyone debits the sender and credits the receiver, unless that would overdraw the sender, in which case the message is ignored.
- **Contracts.** A valid contract names a maximum reparation for each party and an arbitrator; on broadcast, each party's reparation is escrowed into a hash-identified account, and on conclusion the escrow is released or redistributed according to the outcome — with arbitration and broadcast fine schedules if the parties cannot agree.

The design thus bundles a money *and* a private law of contract into one broadcast ledger, with enforcement reduced to bonded escrow rather than courts.

## The Second Protocol: Servers and Bonds

Because a synchronous, unjammable broadcast channel read by everyone is unrealistic, Dai sketches a second protocol in which the accounts are kept by a subset of participants he calls *servers*, linked by a Usenet-style channel; the affected participants of a transaction confirm it was processed by a random subset of servers. Since servers must now be trusted to a degree, they are kept honest by economics rather than by assumption: each must post a bond against proof of misconduct, and each must periodically publish and commit to its money-creation and ownership databases so that participants can audit them. The audit has a specific monetary purpose:

> "This prevents the servers, even in total collusion, from permanently and costlessly expanding the money supply."
>
> — [[wei-dai|Wei Dai]], [[b-money|b-money]]

An appendix adds an alternative issuance scheme: because the real cost of computation drifts and is often secret, account keepers instead agree on *how much* money to create each period and let an auction of proof-of-work bids set its cost — an early gesture at an elastic, governed money supply — unlike the whitepaper's model of block-reward issuance, eventual fee funding, and a predetermined total.

## Relationship to Bitcoin

b-money sits one rung before [[bitcoin|Bitcoin]] in the [[proof-of-work|proof-of-work]] lineage, and unlike [[bit-gold|Bit Gold]] it is cited directly: [[satoshi-nakamoto|Satoshi Nakamoto]]'s whitepaper lists Dai's b-money among its references. The overlap is real — proof-of-work money creation, pseudonymous public-key identities, and publicly announced, signed transfers all reappear in Bitcoin, though Bitcoin replaces b-money's per-keeper account databases with coins defined as chains of digital signatures. What b-money lacked was a single rule by which independent record-keepers converge on one history: the first protocol assumes everyone sees the same broadcasts in the same order, and the second leaves separate servers to stay synchronized without specifying how they resolve disagreement. That consensus gap — closed by Bitcoin's longest-chain proof-of-work rule — is the difference between a sketch and a running network. Dai closed with the appropriate modesty:

> "The protocol can probably be made more efficient and secure, but I hope this is a step toward making crypto-anarchy a practical as well as theoretical possibility."
>
> — [[wei-dai|Wei Dai]], [[b-money|b-money]]

## See Also

- [[wei-dai|Wei Dai]] - author of the b-money proposal
- [[bitcoin|Bitcoin]] - the later design that cites b-money and supplies the consensus rule it lacked
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - the 2008 paper that lists b-money among its references
- [[satoshi-nakamoto|Satoshi Nakamoto]] - author of the design b-money most directly anticipates
- [[bit-gold|Bit Gold]] - Szabo's parallel proof-of-work proposal, the other closest precursor to Bitcoin
- [[proof-of-work|Proof of Work]] - the cost function b-money turns into money creation
- [[crypto-anarchy|Crypto Anarchy]] - the political program b-money was built to make practical
- [[timothy-c-may|Tim May]] - originator of crypto-anarchy, the motive Dai takes up
- [[unforgeable-costliness|Unforgeable Costliness]] - the monetary primitive proof-of-work issuance recreates digitally
- [[hard-money|Hard Money]] - the supply-discipline frame; b-money's audit and Bitcoin's cap pursue it differently
- [[hashcash|Hashcash]] - Adam Back's proof-of-work cost function, the other primitive the whitepaper cites
- [[cypherpunk|Cypherpunk]] - topic map for the thread this proposal belongs to

## Sources

- [b-money](http://www.weidai.com/bmoney.txt) - Wei Dai's 1998 essay: the crypto-anarchy motive, the two account-database protocols, proof-of-work money creation pegged to a commodity basket, signed broadcast transfers, bonded contracts with arbitration, and the auction-based issuance appendix
- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) - the later design used here for the citation and the consensus-rule comparison
