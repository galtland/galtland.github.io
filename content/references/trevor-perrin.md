---
title: "Trevor Perrin"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-06-18
verified: 2026-06-18
tags: [trevor-perrin, signal, cryptography, end-to-end-encryption, key-agreement, forward-secrecy, cypherpunk, privacy]
aliases: [Trevor Perrin, Perrin]
confidence: high
summary: "Trevor Perrin is a cryptographer and, with Moxie Marlinspike, co-author of the two specifications at the core of the Signal messaging protocol: the X3DH key-agreement protocol and the Double Ratchet algorithm. Together they define the asynchronous, forward-secure, deniable end-to-end encryption now deployed to billions of users — the cypherpunk goal of routine strong cryptography realized in working infrastructure."
short: "Cryptographer, co-author with Moxie Marlinspike of Signal's X3DH and Double Ratchet specs — the key-agreement and ratcheting core of modern end-to-end encrypted messaging."
---

# Trevor Perrin

> [[trevor-perrin|Trevor Perrin]] is a cryptographer who, with [[moxie-marlinspike|Moxie Marlinspike]], authored the two specifications at the heart of the Signal protocol: [[signal-x3dh|Signal X3DH]] and the [[signal-double-ratchet|Signal Double Ratchet]]. His work turns the cypherpunk slogan that "cypherpunks write code" into deployed infrastructure: end-to-end encryption that is forward-secure, asynchronous, and used by billions.

## The Signal Specifications

Perrin's contribution to this wiki is concentrated in two documents. The 2016 **X3DH (Extended Triple Diffie-Hellman) Key Agreement Protocol** establishes an authenticated shared secret between two parties even when one is offline — solving the asynchronous bootstrapping problem that earlier interactive key exchanges could not. The **Double Ratchet** algorithm then takes that initial secret and continuously derives fresh message keys, combining symmetric-key chains with Diffie-Hellman ratchet steps so that each message uses a new key. The result is forward secrecy (a compromised key does not expose past messages) and post-compromise security (the conversation heals after a compromise).

Together these are the cryptographic machinery behind Signal and the many messengers that adopted the Signal protocol. They are pure-cypherpunk artifacts: publicly specified, freely implementable, and aimed at making strong privacy the default rather than a specialist's tool.

## Place in This Wiki

Perrin sits on the [[public-key-cryptography|public-key cryptography]] and [[privacy-and-cryptography|privacy]] side of the [[cypherpunk|cypherpunk]] thread — the lineage from Diffie-Hellman and Chaumian privacy through to mass-deployed encrypted messaging. Where [[crypto-anarchy|crypto anarchy]] is the political thesis that strong cryptography shifts power to individuals, the Signal protocols are one of its most consequential implementations.

## See Also

- [[moxie-marlinspike|Moxie Marlinspike]] - co-author of the same two specifications
- [[signal-x3dh|Signal X3DH]] - the key-agreement protocol he co-authored
- [[signal-double-ratchet|Signal Double Ratchet]] - the ratcheting algorithm he co-authored
- [[public-key-cryptography|Public-Key Cryptography]] - the primitive family the Signal protocols build on
- [[cypherpunk|Cypherpunk]] - topic map for the thread this work belongs to
- [[privacy-and-cryptography|Privacy and Cryptography]] - the technical-political setting
- [[crypto-anarchy|Crypto Anarchy]] - the thesis these protocols help realize

## Sources

- [Signal X3DH (Full Text)](https://signal.org/docs/specifications/x3dh/x3dh.pdf) - the X3DH key-agreement specification he co-authored
- [Signal Double Ratchet (Full Text)](https://signal.org/docs/specifications/doubleratchet/doubleratchet.pdf) - the Double Ratchet algorithm specification he co-authored
