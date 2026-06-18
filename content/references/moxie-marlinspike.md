---
title: "Moxie Marlinspike"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-06-18
verified: 2026-06-18
tags: [moxie-marlinspike, signal, cryptography, end-to-end-encryption, key-agreement, forward-secrecy, cypherpunk, privacy]
aliases: [Moxie Marlinspike, Marlinspike]
confidence: high
summary: "Moxie Marlinspike is the cryptographer behind Signal and, with Trevor Perrin, co-author of the X3DH key-agreement protocol and the Double Ratchet algorithm — the cryptographic core of the Signal protocol. His work made forward-secure, asynchronous end-to-end encryption a default consumer technology, the clearest mass-scale realization of the cypherpunk program."
short: "Cryptographer behind Signal; co-author with Trevor Perrin of the X3DH and Double Ratchet specs that define modern end-to-end encrypted messaging."
---

# Moxie Marlinspike

> [[moxie-marlinspike|Moxie Marlinspike]] is the cryptographer behind Signal and, with [[trevor-perrin|Trevor Perrin]], co-author of the two specifications that define the Signal protocol: [[signal-x3dh|Signal X3DH]] and the [[signal-double-ratchet|Signal Double Ratchet]]. More than any other figure, he turned strong end-to-end encryption from a specialist tool into a default consumer technology.

## The Signal Specifications

Marlinspike's contribution in this corpus is the same two documents he co-authored with Perrin. The 2016 **X3DH** key-agreement protocol lets two parties derive an authenticated shared secret asynchronously — one can be offline — which earlier interactive key exchanges could not do. The **Double Ratchet** then derives a fresh key per message from that secret using symmetric-key chains and Diffie-Hellman ratchet steps, giving forward secrecy and post-compromise security.

These protocols are the engine of Signal and of the wider ecosystem that adopted the Signal protocol for default end-to-end encryption. They embody the cypherpunk commitment to building privacy into deployed systems rather than petitioning for it: the cryptography is public, implementable, and shipped to ordinary users by default.

## Place in This Wiki

Marlinspike belongs to the [[privacy-and-cryptography|privacy]] and [[public-key-cryptography|public-key cryptography]] line of the [[cypherpunk|cypherpunk]] thread. If [[crypto-anarchy|crypto anarchy]] is the claim that strong cryptography removes practical levers of surveillance and control, Signal is among the most widely deployed demonstrations of it.

## See Also

- [[trevor-perrin|Trevor Perrin]] - co-author of the same two specifications
- [[signal-x3dh|Signal X3DH]] - the key-agreement protocol he co-authored
- [[signal-double-ratchet|Signal Double Ratchet]] - the ratcheting algorithm he co-authored
- [[public-key-cryptography|Public-Key Cryptography]] - the primitive family the Signal protocols build on
- [[cypherpunk|Cypherpunk]] - topic map for the thread this work belongs to
- [[privacy-and-cryptography|Privacy and Cryptography]] - the technical-political setting
- [[crypto-anarchy|Crypto Anarchy]] - the thesis Signal helps realize

## Sources

- [Signal X3DH (Full Text)](https://signal.org/docs/specifications/x3dh/x3dh.pdf) - the X3DH key-agreement specification he co-authored
- [Signal Double Ratchet (Full Text)](https://signal.org/docs/specifications/doubleratchet/doubleratchet.pdf) - the Double Ratchet algorithm specification he co-authored
