---
title: "Signal Double Ratchet"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [libertarian, cypherpunk, signal, double-ratchet, forward-secrecy, post-compromise-recovery, end-to-end-encryption, messaging, diffie-hellman]
aliases: [The Double Ratchet Algorithm, Double Ratchet, Signal ratchet, Axolotl ratchet]
confidence: high
summary: "The Signal Double Ratchet specification describes how two parties derive a new message key for every message by combining symmetric-key ratchets with Diffie-Hellman ratchet steps. Its goals are forward secrecy, break-in recovery, and usable encrypted messaging over unreliable networks."
short: "Signal's messaging ratchet: per-message symmetric keys plus DH ratchet turns for forward secrecy and post-compromise recovery."
---

# Signal Double Ratchet

> [[signal-double-ratchet|Signal Double Ratchet]] is the Signal messaging algorithm that continuously derives new encryption keys from a shared secret, symmetric-key chains, and Diffie-Hellman ratchet steps. It is the protocol machinery behind modern forward-secure encrypted conversations.

## Work and Revision

The ingested source is *The Double Ratchet Algorithm*, Revision 4, dated 2025-11-04. It credits the algorithm to Trevor Perrin and Moxie Marlinspike, with Rolfe Schmidt credited for revision 3 and later. The historical Signal ratchet predates this revision; the reference here follows the ingested specification.

The protocol assumes the parties already share an initial secret, usually from a key agreement protocol such as [[signal-x3dh|Signal X3DH]] or PQXDH. The Double Ratchet then handles message encryption, decryption, key deletion, and recovery from some passive compromises.

## Symmetric-Key Ratchet

The symmetric-key ratchet advances a sending or receiving chain for every message. A chain key feeds a key derivation function. The output gives a fresh message key and the next chain key. The message key encrypts or decrypts one message and can then be deleted.

This gives per-message forward security inside a chain. Learning a later chain key should not reveal old message keys if the old keys were deleted. Because message keys do not derive other keys, skipped message keys can be stored for delayed messages without exposing the whole chain.

## Diffie-Hellman Ratchet

The DH ratchet addresses the opposite direction of time. If an attacker learns current sending and receiving chain keys, a pure symmetric ratchet would let the attacker compute future message keys. The DH ratchet mixes fresh Diffie-Hellman outputs into the root chain whenever a new ratchet public key is received.

The parties take turns advertising new ratchet public keys. When Alice receives Bob's new ratchet key, she performs a DH step, updates root and receiving chains, generates a new local ratchet key pair, and derives a new sending chain. The same process repeats as Bob receives Alice's next ratchet key.

The "double" ratchet is the composition. Every sent or received message advances a symmetric chain. Every new remote ratchet public key triggers a DH step before the relevant symmetric step. The root chain connects the DH outputs to fresh sending and receiving chains.

The security result is two-sided. Old message keys should be unavailable from later state if deletion works. Future keys can recover secrecy after a passive compromise once fresh DH material unknown to the attacker enters the root chain.

## Out-of-Order Delivery

Real messaging networks lose, delay, and reorder messages. The specification handles this with message numbers and previous-chain lengths in headers. A recipient can derive and store skipped message keys so a delayed message can be decrypted if it arrives later.

Skipped-key storage is a security and denial-of-service trade-off. Storing too many skipped keys lets a malicious sender consume resources and leaves extra keys available if the device is later compromised. Implementations therefore need limits and deletion policies.

## Security Goals and Boundaries

The Double Ratchet provides [[forward-secrecy|Forward Secrecy]] and post-compromise recovery against passive eavesdroppers under defined assumptions. It does not save a session from a fully compromised endpoint, a corrupted random-number generator, or a persistent active man-in-the-middle attack that substitutes ratchet keys.

The specification is also explicit about secure deletion. Forward secrecy depends on old plaintext and keys actually becoming unrecoverable. Cryptographic protocol design can make deletion meaningful, but device storage behavior still matters.

## See Also

- [[forward-secrecy|Forward Secrecy]] - concept article for the core security property
- [[signal-x3dh|Signal X3DH]] - asynchronous key agreement protocol commonly used to initialize ratchet sessions
- [[public-key-cryptography|Public-Key Cryptography]] - broader primitive family behind ratchet key exchange
- [[new-directions-in-cryptography|New Directions in Cryptography]] - Diffie-Hellman public-key foundation
- [[tor-the-second-generation-onion-router|Tor: The Second-Generation Onion Router]] - earlier deployed system using forward-secret key negotiation in privacy infrastructure
- [[cypherpunk|Cypherpunk]] - movement context for user-controlled encrypted messaging
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for encrypted communication and privacy tools

## Sources

- [The Double Ratchet Algorithm](https://signal.org/docs/specifications/doubleratchet/doubleratchet.pdf) - primary source for KDF chains, symmetric and DH ratchets, skipped message keys, secure deletion, and recovery-from-compromise discussion
