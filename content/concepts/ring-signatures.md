---
title: "Ring Signatures"
volatility: cold
category: concept
created: 2026-05-28
updated: 2026-05-28
verified: 2026-05-30
tags: [libertarian, cypherpunk, ring-signatures, cryptonote, monero, privacy-coins, digital-cash, cryptography]
aliases: [one-time ring signatures, linkable ring signatures, Monero ring signatures, CryptoNote ring signatures]
confidence: medium-high
summary: "Ring signatures let a signer prove that one key in a chosen set authorized a message without revealing which key it was. CryptoNote adapts one-time ring signatures to hide cryptocurrency spenders while still detecting double spends through key images."
short: "A privacy signature primitive: prove one key in a set signed, without revealing which key; CryptoNote uses it to hide senders."
---

# Ring Signatures

> [[ring-signatures|Ring Signatures]] are signatures that prove a message was signed by one member of a set without revealing which member signed it. In [[cryptonote-whitepaper|CryptoNote]], this becomes the sender-privacy primitive behind Monero-style private payments.

## The Core Intuition

A normal digital signature points to one public key. A verifier checks the message against that key and learns which key authorized the message. A ring signature changes the verification target. The signer assembles a set of public keys and produces a signature that verifies against the set as a whole.

The verifier learns that one of the keys in the ring signed. The verifier does not learn which one. The ring can be formed ad hoc, without a group manager or trusted anonymity administrator. That autonomy is why ring signatures fit the cypherpunk pattern: privacy comes from protocol structure rather than institutional discretion.

## CryptoNote's One-Time Variant

The [[cryptonote-whitepaper|CryptoNote]] paper uses a one-time ring signature. The signer spends an output using the private key for that output, but mixes it with foreign outputs of the same amount. Observers see a valid spend from the ring, not the actual input.

CryptoNote also needs double-spend detection. Its answer is the key image: a value derived from the signer's private key that cannot be inverted to reveal the signer but repeats if the same private key is used twice. A transaction can therefore be rejected as a double spend without deanonymizing the original signer.

## Sender Privacy in Monero

In the CryptoNote transaction model, receiver privacy and sender privacy are separate. One-time destination keys, often called stealth-address style outputs, make incoming payments unlinkable to a published address. Ring signatures hide which prior output is being spent when the recipient later sends funds onward.

Monero's privacy design descends from this combination. The exact implementation has evolved, but the conceptual structure remains CryptoNote's: hide recipients with one-time keys, hide senders with ring signatures, and preserve ledger validity with linkability against double spending.

## Anonymity Set and Transaction Size

Ring signatures make privacy quantitative. A ring of one gives no meaningful sender ambiguity. A larger ring gives a larger anonymity set, but the signature grows with the number of ring members. CryptoNote states the trade-off directly: stronger ambiguity means larger transactions and higher fees.

This creates a protocol-design problem rather than a pure cryptography problem. If users choose small rings, privacy weakens. If the network requires large rings, transactions become heavier. A privacy coin must balance anonymity, verification cost, wallet usability, and chain growth.

## Comparison With Blind Signatures and zk-SNARKs

Ring signatures are one branch of digital-cash privacy. Chaum's [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] hides the link between withdrawal and deposit by having a bank sign a blinded token. CryptoNote removes the bank but uses a visible ledger, so it must hide the spender among decoy outputs.

[[zk-snarks|zk-SNARKs]] take a different path. In Zerocash, the proof shows that a ledger transition is valid without revealing the spent coin, receiver, or amount. Ring signatures leave an explicit anonymity set on chain. zk-SNARKs compress the validity claim into a zero-knowledge proof, at the cost of more complex assumptions and, in early systems, trusted setup.

## See Also

- [[cryptonote-whitepaper|CryptoNote Whitepaper]] - work reference for the CryptoNote design using one-time ring signatures
- [[zk-snarks|zk-SNARKs]] - contrasting privacy primitive used by Zerocash/Zcash
- [[zerocash|Zerocash]] - privacy-coin design that hides ledger transitions with zk-SNARK proofs rather than visible rings
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaumian digital-cash privacy lineage
- [[public-key-cryptography|Public-Key Cryptography]] - signature and key-control foundation that ring signatures extend
- [[proof-of-work|Proof of Work]] - CryptoNote pairs transaction privacy with an egalitarian proof-of-work design
- [[praxeology-of-privacy|Praxeology of Privacy]] - privacy-as-selective-disclosure frame for transaction privacy tools
- [[cypherpunk|Cypherpunk]] - movement context for private digital cash
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for privacy-preserving cryptographic systems

## Sources

- [CryptoNote v 2.0](https://cryptonote.org/whitepaper.pdf) - primary source for one-time ring signatures, key images, unlinkable payments, and the anonymity-set/size trade-off
