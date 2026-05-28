---
title: "Blind Signatures for Untraceable Payments"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [david-chaum, blind-signatures, digital-cash, privacy, cryptography, cypherpunk, payments]
aliases: [Chaum 1982, Blind Signatures, Untraceable Payments, Chaumian e-cash]
confidence: high
summary: "David Chaum's CRYPTO '82 paper introduces blind signatures as a way for a bank to sign payment tokens without learning which signed token is later spent and deposited, preserving payer privacy while retaining verification and audit controls."
short: "Chaum's 1982 blind-signature paper: a bank signs a blinded token, the payer unblinds it, and later deposit cannot be linked to withdrawal."
---

# Blind Signatures for Untraceable Payments

> [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] is David Chaum's CRYPTO '82 paper introducing blind signatures for privacy-preserving electronic payments.

## The Payment Privacy Problem

Chaum starts from the coming automation of payment systems. Electronic banking can improve convenience and control, but if every transaction reveals payer, payee, amount, time, and place to a third party, the payment system becomes a record of a person's movements, associations, reading, religion, politics, health, and habits.

The paper's goal is to avoid a false choice between traceable electronic banking and insecure anonymous cash. Chaum wants a system that protects privacy while retaining proof of payment, exceptional auditability, and theft controls.

## Blind Signature Protocol

The paper explains blind signatures through the carbon-lined-envelope analogy. A voter or payer seals a message inside an envelope; the signer marks the outside; the carbon transfers the signature to the hidden slip; and the signed slip can later be shown without revealing which envelope it came from.

Cryptographically, the provider chooses a random token, blinds it with a commuting function, and sends the blinded token to the signer. The signer applies its private signing function and returns the signed blinded token. The provider removes the blinding factor and obtains a valid signature on the original token. Anyone can verify the signature with the public verification function, but the signer cannot link the unblinded token to the blinded item it signed.

## Bank, Payer, and Payee

In the payment example, the payer creates a random note and blinds it. The bank signs the blinded note and debits the payer's account. The payer unblinds the signed note, checks the bank's signature, and later gives the note to a payee. The payee verifies the signature and deposits the note with the bank.

The bank can reject double-spent notes by maintaining a list of cleared notes. It can also know that the note is valid because it carries the bank's signature. What it cannot know, if the protocol is used correctly, is which payer's withdrawal produced that deposited note.

## Lineage

This paper is the technical root of Chaumian e-cash and DigiCash. It also marks an important difference between banked digital cash and Bitcoin. Chaumian systems preserve privacy through a signing institution that cannot link withdrawals and deposits; Bitcoin removes the mint but exposes a public ledger with pseudonymous keys.

The paper belongs beside [[new-directions-in-cryptography|New Directions in Cryptography]] because it turns digital signatures into a privacy primitive. It belongs beside [[security-without-identification|Security Without Identification]] because the later paper expands blind signatures into a full transaction-systems program.

## See Also

- [[security-without-identification|Security Without Identification]] - Chaum's broader 1985 privacy-infrastructure paper
- [[public-key-cryptography|Public-Key Cryptography]] - signature primitive blind signatures extend
- [[new-directions-in-cryptography|New Directions in Cryptography]] - public-key foundation for digital signatures
- [[cypherpunk|Cypherpunk]] - movement lineage for digital cash and privacy systems
- [[privacy-and-cryptography|Privacy and Cryptography]] - topic map where Chaumian e-cash is an implementation domain
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - later digital-cash design that removes the bank but changes the privacy surface
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - Szabo's later critique of institutional trust points
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - adjacent public-key privacy deployment conflict
- [[ring-signatures|Ring Signatures]] - later digital-cash privacy primitive without a signing bank
- [[zk-snarks|zk-SNARKs]] - later zero-knowledge path for private ledger validation
- [[cryptonote-whitepaper|CryptoNote Whitepaper]] - privacy-coin paper in the post-Chaum digital-cash lineage
- [[zerocash|Zerocash]] - zk-SNARK-based anonymous payment design extending the e-cash lineage

## Sources

- [Blind Signatures for Untraceable Payments](https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf) - primary Chaum paper on the blind-signature protocol and payment example
