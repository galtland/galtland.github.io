---
title: "Signal X3DH"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [libertarian, cypherpunk, signal, x3dh, key-agreement, forward-secrecy, end-to-end-encryption, messaging, diffie-hellman]
aliases: [The X3DH Key Agreement Protocol, Extended Triple Diffie-Hellman, X3DH, Signal prekey protocol]
confidence: high
summary: "Moxie Marlinspike and Trevor Perrin's 2016 X3DH specification describes asynchronous authenticated key agreement for encrypted messaging. It uses identity keys, signed prekeys, optional one-time prekeys, and three or four Diffie-Hellman computations to establish a shared secret when one party may be offline."
short: "Signal's asynchronous key-agreement spec: identity keys, signed prekeys, one-time prekeys, and 3-4 DH values to start a secure session."
---

# Signal X3DH

> [[signal-x3dh|Signal X3DH]] is Moxie Marlinspike and Trevor Perrin's 2016 *X3DH Key Agreement Protocol*. It establishes an authenticated shared secret for encrypted messaging even when one party is offline.

## The Asynchronous Problem

Messaging systems cannot assume both parties are online at the same time. Alice may want to send Bob an encrypted first message while Bob is offline. A normal interactive key exchange would fail in that setting.

X3DH solves this by having Bob publish prekey material to a server in advance. The server stores Bob's identity key, signed prekey, signature over the signed prekey, and optional one-time prekeys. Alice can fetch a bundle, compute a shared secret, and send an encrypted initial message for Bob to process later.

## Prekey Bundles

The protocol uses several elliptic-curve public keys. Alice has an identity key and generates a fresh ephemeral key for the protocol run. Bob has a long-term identity key, a periodically rotated signed prekey, and a set of one-time prekeys.

The signed prekey is authenticated by Bob's identity key. The optional one-time prekey is consumed once and then deleted by the server. Bob eventually deletes old signed-prekey private keys and deletes used one-time prekey private keys after receiving messages.

## The Four DH Composition

Alice verifies Bob's signed prekey signature, creates an ephemeral key, and computes three Diffie-Hellman outputs if no one-time prekey is present: Alice identity with Bob signed prekey, Alice ephemeral with Bob identity, and Alice ephemeral with Bob signed prekey. If a one-time prekey is present, she also computes Alice ephemeral with Bob one-time prekey.

The specification explains the roles: the first two DH values provide mutual authentication, while the third and fourth contribute forward secrecy. The outputs are concatenated and passed through a KDF to produce a 32-byte shared secret.

## Security Goals and Limits

X3DH provides mutual authentication based on public keys, forward secrecy, and cryptographic deniability. It also warns about boundaries. If users do not authenticate identity keys through some channel, they do not know who they are talking to. If one-time prekeys are unavailable, initial forward secrecy depends more on the signed prekey's lifetime. If Bob reuses a derived secret after replay, a post-X3DH protocol must randomize keys quickly.

This is why X3DH is paired with [[signal-double-ratchet|Signal Double Ratchet]]. X3DH starts the session. The ratchet then keeps replacing message keys and mixing in fresh Diffie-Hellman material.

## Server Trust

The server is useful but not fully trusted. It can refuse service, withhold messages, or fail to provide one-time prekeys. If Alice and Bob authenticate each other's identity keys, the server should not be able to impersonate either party without detection, but it can reduce the quality of initial forward secrecy by not handing out one-time prekeys.

That makes X3DH a practical compromise in [[trusted-third-parties-as-security-holes|trusted-third-party]] terms. The server handles availability and prekey distribution, while the protocol limits what the server can learn or forge.

## See Also

- [[forward-secrecy|Forward Secrecy]] - concept article for X3DH's key-compromise goal
- [[signal-double-ratchet|Signal Double Ratchet]] - post-X3DH messaging ratchet that refreshes keys per message and per turn
- [[public-key-cryptography|Public-Key Cryptography]] - broader primitive family behind identity keys and authenticated key agreement
- [[new-directions-in-cryptography|New Directions in Cryptography]] - Diffie-Hellman public-key foundation
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - design lens for limiting server trust
- [[cypherpunk|Cypherpunk]] - movement context for user-controlled encrypted messaging
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for encrypted communication and privacy tools

## Sources

- [The X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh/x3dh.pdf) - primary source for roles, keys, prekey bundles, DH calculations, security goals, and server-trust limits
