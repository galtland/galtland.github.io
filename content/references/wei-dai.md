---
title: "Wei Dai"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-06-18
verified: 2026-06-18
tags: [wei-dai, b-money, proof-of-work, cypherpunk, bitcoin, digital-cash, cryptography]
aliases: [Wei Dai, b-money author]
confidence: high
summary: "Wei Dai is the cypherpunk who proposed b-money in 1998, a protocol for pseudonymous online communities to hold money balances and enforce contracts without government. B-money pairs computational money creation by proof of work with signed broadcasts and deposit-backed arbitration, and the Bitcoin whitepaper explicitly cites it — making Dai the pseudonymous-money-plus-proof-of-work-issuance rung in the cypherpunk lineage alongside Adam Back's Hashcash and Nick Szabo's Bit Gold."
short: "Cypherpunk who proposed b-money (1998), the pseudonymous digital-money design with proof-of-work issuance and deposit-backed contracts that the Bitcoin whitepaper explicitly cites."
---

# Wei Dai

> [[wei-dai|Wei Dai]] is the cypherpunk who proposed [[b-money|b-money]] in 1998: a protocol that lets pseudonymous online communities hold money balances and enforce contracts without government institutions, pairing computational money creation by [[proof-of-work|proof of work]] with signed broadcasts and deposit-backed arbitration.

## What b-money Proposed

Dai set out to make Tim May's crypto-anarchy practical by supplying the two services a cooperating community needs — a medium of exchange and a way to enforce contracts — to and by untraceable entities identified only by digital pseudonyms (public keys), with every message signed and encrypted. He described two protocols. In the first, every participant keeps a separate database of how much money each pseudonym owns; those accounts collectively define ownership, and signed broadcasts update them. The second, more practical protocol hands account-keeping to a subset of participants called servers, linked by a Usenet-style broadcast channel, with affected parties checking that a randomly chosen subset of servers processed each transaction.

Money is created computationally: anyone can mint by broadcasting the solution to a previously unsolved problem whose required effort is easy to measure and whose solution is otherwise worthless, with the units credited equal to the computing cost in a standard basket of commodities. Transfers are signed messages that debit the sender and credit the receiver unless the balance would go negative. Contracts carry a maximum reparation per party and a named arbitrator; participants escrow each party's maximum reparation into a hash-identified account, then settle on conclusion or, in dispute, by each participant ruling on the broadcast evidence. To keep servers honest in the second protocol, each must deposit money against proof of misconduct and periodically publish its money-creation and ownership databases so participants can verify balances and that the supply was not silently inflated.

## Place in the Lineage

B-money is the pseudonymous-money-plus-proof-of-work-issuance rung of the cypherpunk proof-of-work story this wiki traces from cost function to working cash. Where [[adam-back|Adam Back]]'s [[hashcash|Hashcash]] supplies a verifiable cost primitive and [[nick-szabo|Nick Szabo]]'s [[bit-gold|Bit Gold]] turns costly proofs into digital monetary objects with title, Dai's contribution is pseudonymous money plus contract cooperation, with issuance metered by computational work. The connection to Bitcoin is explicit rather than inferred: the [[bitcoin-whitepaper|Bitcoin whitepaper]] by [[satoshi-nakamoto|Satoshi Nakamoto]] cites b-money directly, and [[bitcoin|Bitcoin]] realizes Dai's pseudonymous-money goal by combining proof-of-work issuance with a single ordered public history.

## See Also

- [[b-money|b-money]] - Dai's 1998 proposal for pseudonymous digital money and contract enforcement
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - explicitly cites b-money as a predecessor
- [[satoshi-nakamoto|Satoshi Nakamoto]] - cited b-money and built the live peer-to-peer cash system
- [[proof-of-work|Proof of Work]] - the cost-function-to-consensus lineage b-money's issuance belongs to
- [[hashcash|Hashcash]] - Back's proof-of-work cost function, the adjacent primitive rung
- [[adam-back|Adam Back]] - Hashcash author, the cost-function rung of the lineage
- [[bit-gold|Bit Gold]] - Szabo's proof-of-work digital-money design, the adjacent money rung
- [[nick-szabo|Nick Szabo]] - Bit Gold author whose work parallels b-money's aims
- [[bitcoin|Bitcoin]] - the system that realized pseudonymous money with proof-of-work issuance
- [[hal-finney|Hal Finney]] - cypherpunk who extended proof of work and ran early Bitcoin
- [[cypherpunk|Cypherpunk]] - topic map for the thread Dai's work belongs to

## Sources

- [b-money](http://www.weidai.com/bmoney.txt) - Dai's 1998 proposal: two protocols, proof-of-work money creation, signed transfers, and deposit-backed arbitration
- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) - explicitly cites b-money as a pseudonymous digital-money predecessor
