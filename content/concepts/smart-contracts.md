---
title: "Smart Contracts"
volatility: warm
category: concept
created: 2026-05-27
updated: 2026-05-27
tags: [cypherpunk, smart-contracts, contracts, cryptography, protocols, digital-cash]
aliases: [smart contract, smart property, computerized transaction protocols]
confidence: medium
summary: "Nick Szabo's original smart-contract concept describes contracts embedded in computerized transaction protocols that execute terms, reduce exceptions, and lower reliance on trusted intermediaries. The 1994 idea is broader than modern blockchain-specific usage."
short: "Szabo's broad 1994 idea that contract terms can be embedded in protocols, reducing fraud, enforcement costs, and dependence on intermediaries."
---

# Smart Contracts

> [[smart-contracts|Smart Contracts]] are Nick Szabo's 1994 idea that contract terms can be embedded in computerized transaction protocols. The original concept is broader than blockchain programs: it includes digital cash, cryptographic subprotocols, synthetic assets, and smart property.

## Szabo's Definition

Szabo defines a smart contract as a computerized transaction protocol that executes the terms of a contract. Its design goals are practical rather than decorative: satisfy common conditions such as payment, liens, confidentiality, and enforcement; minimize malicious and accidental exceptions; and reduce the need for trusted intermediaries.

That definition matters because it predates blockchains. A modern reader may think first of code running on Ethereum or another chain. Szabo's 1994 essay is wider. A point-of-sale terminal, EDI workflow, digital cash protocol, or cryptographic exchange can be "smart" when it moves contractual performance from later human enforcement into the transaction mechanism itself. The contract is not merely written in legal language; part of its performance is carried by the protocol.

## Digital Cash as the Canonical Example

Szabo's clearest early example is digital cash. A good digital cash protocol should preserve cash-like properties such as unforgeability, confidentiality, and divisibility while allowing online payment. In smart-contract terms, the payment instrument is not only a message saying "I owe you." It is a protocol object that can be validated, transferred, and settled according to rules.

The example shows both promise and incompleteness. Digital cash can deliver payment, but a full customer-vendor exchange also requires a way to coordinate delivery. The seller wants assurance that payment will arrive; the buyer wants assurance that the good or service will be delivered. Traditional commerce handles this through face-to-face exchange, credit history, collection agencies, certified mail, escrow, courts, and reputation. Smart-contract design asks how much of that coordination can be moved into cryptographic or computational protocols.

## Smart Property and Smart Liens

The essay extends the idea to property. Smart property means embedding control logic in physical or digital objects so that the right party can operate them under the contract's terms. Szabo's car example is intentionally concrete: a car might require a challenge-response protocol with the owner's key; if a loan is not paid, a lien could transfer control back to the lender.

This is not a simple celebration of automatic repossession. Szabo immediately notes exceptions: the lien must be removable when paid, hardship and operational cases matter, and it would be unacceptable to disable a car at highway speed. The limit is important. Smart contracts can reduce some enforcement costs, but they do not eliminate judgment, edge cases, or the need to design humane and failure-tolerant exceptions.

## Reducing Trusted Third Parties

Smart contracts are one answer to [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]]. A contract traditionally depends on courts, banks, escrow agents, registries, credit bureaus, collection agencies, and custodians. Some of those institutions remain useful, but each one can become a cost center or control point. Embedding terms into protocols can reduce dependence on them.

The connection is also visible in [[market-anarchism-and-private-law|Market Anarchism and Private Law]]. Smart contracts do not by themselves create a full private legal order, and they cannot handle every dispute. They do, however, shift some enforcement from ex post adjudication toward ex ante protocol design. That is why they occupy a distinctive place in cypherpunk legal imagination: less command, more mechanism.

## Semantics and Hidden Action

Szabo is careful about a risk that later smart-contract enthusiasm often underplays. A protocol may execute, but users still need to understand what it does. He calls attention to "smart fine print": software can take actions hidden from a party, such as linking a shopper's name to purchases without clearly communicating that fact. A contract embedded in code can be opaque even when it is deterministic.

This is a privacy and consent problem. [[public-key-cryptography|Public-Key Cryptography]], digital signatures, blind signatures, secret sharing, and multiparty computation give designers powerful building blocks. But a contract also has semantics. The user must know what rights, payments, disclosures, and exceptions the protocol actually implements.

## Beyond the Blockchain Usage

Blockchain smart contracts are a later special case. They add shared execution, public state, and consensus around program outputs. Szabo's original idea does not require a blockchain, and many smart-contract mechanisms can run in payment networks, hardware devices, synthetic assets, credential systems, or direct peer-to-peer protocols. The broader concept is therefore a bridge between contract law, economics, and computer security.

The confidence level is medium because the article synthesizes one short 1994 essay and later distinctions. The primary claim is stable: Szabo's smart contract is a general protocol-design idea, not merely a blockchain application.

## See Also

- [[nick-szabo|Nick Szabo]] - author of the 1994 smart-contract essay
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - Szabo's later design rule for minimizing intermediary dependence
- [[public-key-cryptography|Public-Key Cryptography]] - signatures and encryption primitive used in many smart-contract mechanisms
- [[proof-of-work|Proof of Work]] - later cost-function mechanism for decentralized coordination
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - later electronic-cash design that embeds ownership transfer and consensus rules in protocol
- [[market-anarchism-and-private-law|Market Anarchism and Private Law]] - legal-order frame for private enforcement and contractual institutions
- [[nonaggression-and-property-rights|Nonaggression and Property Rights]] - property-rights frame affected by automatic control over owned things
- [[privacy-and-cryptography|Privacy and Cryptography]] - topic map for cryptographic primitives and privacy-preserving protocols
- [[cypherpunk|Cypherpunk]] - topic map for the cypherpunk thread that this article participates in

- [[lightning-network|Lightning Network]] - practical Bitcoin-script channel design using HTLCs as enforceable contract logic
- [[are-bitcoins-ownable|Are Bitcoins Ownable?]] - legal-theory paper that places Szabo's smart-contract work in the crypto-anarchic law context
- [[the-lightning-network-paper|The Lightning Network Paper]] - Poon and Dryja's Lightning paper: HTLC-routed payment channels that keep Bitcoin's
- [[crypto-anarchy|Crypto Anarchy]] - Tim May's thesis that strong cryptography enables zones of voluntary exchange outside
- [[shelling-out|Shelling Out]] - Szabo's account of shell beads, necklaces, and other prehistoric collectibles as
- [[timothy-c-may|Timothy C. May]] - Tim May (1951-2018), former Intel physicist and founding cypherpunk; author of the

## Sources

- [Smart Contracts](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html) - Szabo's 1994 definition, digital-cash example, smart property extension, hidden-action warning, and limits
