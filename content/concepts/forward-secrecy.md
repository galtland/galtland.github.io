---
title: "Forward Secrecy"
volatility: cold
category: concept
created: 2026-05-28
updated: 2026-05-28
tags: [libertarian, cypherpunk, forward-secrecy, signal, double-ratchet, x3dh, diffie-hellman, cryptography, messaging]
aliases: [perfect forward secrecy, forward-secure messaging, ephemeral session keys, forward-secure key update]
confidence: medium-high
summary: "Forward secrecy is the property that later compromise of long-term keys does not retroactively decrypt past sessions. Signal combines X3DH session initiation with the Double Ratchet's symmetric and Diffie-Hellman ratchets to keep replacing message keys."
short: "A key-compromise limit: past sessions stay protected even if long-term keys are later stolen, usually by using and deleting ephemeral keys."
---

# Forward Secrecy

> [[forward-secrecy|Forward Secrecy]] is the cryptographic property that compromise of long-term keys does not retroactively expose past sessions. The usual pattern is to derive temporary session keys from ephemeral key exchange, use them briefly, and delete them.

## The Basic Idea

Without forward secrecy, a recorded encrypted session may become readable years later if an attacker obtains the relevant long-term private key. The attacker does not need to break the old ciphertext at the time it was sent. They can store it, compromise the key later, and decrypt backward.

Forward secrecy blocks that path by making session keys independent of long-term keys after the session has been negotiated. Long-term keys may authenticate parties, but fresh ephemeral secrets generate the traffic keys. If those ephemeral secrets and traffic keys are deleted, later theft of the long-term key is not enough to recover old messages.

## Diffie-Hellman Roots

The concept depends on the public-key breakthrough described in [[new-directions-in-cryptography|New Directions in Cryptography]]. Diffie-Hellman key exchange lets two parties derive a shared secret across an open channel. Ephemeral Diffie-Hellman repeats that process with short-lived keys.

That is why [[public-key-cryptography|Public-Key Cryptography]] and forward secrecy should be kept distinct. Public-key cryptography solves key distribution and authentication problems. Forward secrecy is an additional session property: compromise later should not reveal traffic from before.

## Signal's X3DH Start

[[signal-x3dh|Signal X3DH]] handles the asynchronous start of a secure session. Bob may be offline, so he publishes a signed prekey and a set of one-time prekeys to a server. Alice fetches a prekey bundle, verifies Bob's signed prekey, creates an ephemeral key, and combines several Diffie-Hellman outputs into a shared secret.

The one-time prekey is the strongest initial forward-secrecy component. If it is used and Bob later deletes its private key, future compromise of Bob's identity key and signed prekey does not reveal the older shared secret. If one-time prekeys are unavailable, X3DH still works, but the initial secret depends more heavily on the signed prekey's lifetime until the post-X3DH ratchet refreshes keys.

## Signal's Double Ratchet

[[signal-double-ratchet|Signal Double Ratchet]] turns a shared secret into an ongoing messaging state. It has two linked mechanisms. The symmetric-key ratchet advances a sending or receiving chain for every message, deriving a unique message key and a new chain key. Old message keys and old chain keys can be deleted after use.

The Diffie-Hellman ratchet updates the chains when a party receives a new ratchet public key. Parties take turns introducing fresh DH key pairs. The DH outputs feed the root chain, which derives new sending and receiving chain keys. This is the "double" ratchet: message-by-message symmetric updates plus new DH secrets as the conversation turns.

## Post-Compromise Recovery

Forward secrecy protects the past. Signal's ratchet also aims at post-compromise recovery for future messages after a passive compromise. If an attacker briefly learns current chain keys, future DH ratchet steps can mix in fresh secrets the attacker does not know, restoring confidentiality for later messages.

This is not magic. If an attacker controls the device, tampers with random-number generation, or actively substitutes ratchet keys, recovery may fail. Forward secrecy and post-compromise recovery are properties of protocol state under specific compromise models, not guarantees against all device compromise.

## TLS and Tor

TLS forward-secret cipher suites apply the same basic idea to web sessions: authenticate the endpoint, negotiate a fresh session secret, and avoid making recorded traffic decryptable from a later server-key compromise. [[tor-the-second-generation-onion-router|Tor]] uses telescoping circuit construction and fresh key negotiation with relays to give forward secrecy at the circuit layer.

The common pattern is deletion. A system can only benefit from forward secrecy if old traffic keys and ephemeral private keys actually disappear from usable state.

## See Also

- [[signal-double-ratchet|Signal Double Ratchet]] - messaging ratchet that continuously derives and deletes message keys
- [[signal-x3dh|Signal X3DH]] - asynchronous key agreement protocol that starts Signal sessions
- [[public-key-cryptography|Public-Key Cryptography]] - broader primitive family behind authenticated key exchange
- [[new-directions-in-cryptography|New Directions in Cryptography]] - Diffie-Hellman foundation for shared secrets over open channels
- [[tor-the-second-generation-onion-router|Tor: The Second-Generation Onion Router]] - anonymous-network design using forward-secret circuit construction
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - design lens for limiting damage from compromised services and keys
- [[praxeology-of-privacy|Praxeology of Privacy]] - privacy-as-selective-disclosure frame for encrypted communication
- [[cypherpunk|Cypherpunk]] - movement context for user-controlled encryption
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for privacy-preserving cryptographic systems
- [[surveillance-capitalism|Surveillance Capitalism]] - Zuboff's term for the business model that treats human experience as free raw
- [[nostr|Nostr]] - Nostr (Notes and Other Stuff Transmitted by Relays) is a minimal protocol where

## Sources

- [The Double Ratchet Algorithm](https://signal.org/docs/specifications/doubleratchet/doubleratchet.pdf) - primary source for symmetric ratchets, DH ratchets, message keys, skipped-key handling, and post-compromise recovery
- [The X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh/x3dh.pdf) - primary source for asynchronous prekeys, one-time prekeys, and initial forward-secrecy trade-offs
