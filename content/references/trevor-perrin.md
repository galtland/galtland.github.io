---
title: "Trevor Perrin"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-07-16
verified: 2026-07-16
tags: [trevor-perrin, signal, cryptography, protocol-design, noise-protocol, forward-secrecy, cypherpunk, privacy]
aliases: [Trevor Perrin, Perrin]
confidence: high
summary: "Trevor Perrin is a cryptographer and protocol designer — the design half of the Signal protocol, co-author with Moxie Marlinspike of the X3DH key-agreement protocol and the Double Ratchet algorithm. Beyond Signal he is the author of the Noise Protocol Framework, a toolkit for building secure-channel protocols that underlies WireGuard, WhatsApp's transport, and the Lightning Network handshake, and he has convened much of the modern secure-messaging standards work. Where Marlinspike shipped the cryptography, Perrin designed the constructions the deployments rest on."
short: "Cryptographer and protocol designer — the design half of the Signal protocol (X3DH, Double Ratchet) and author of the Noise Protocol Framework behind WireGuard, WhatsApp, and Lightning."
---

# Trevor Perrin

> [[trevor-perrin|Trevor Perrin]] is a cryptographer and protocol designer — the *design* half of the Signal protocol, co-author with the builder [[moxie-marlinspike|Moxie Marlinspike]] of [[signal-x3dh|Signal X3DH]] and the [[signal-double-ratchet|Signal Double Ratchet]]. His significance is not any one product but the *constructions*: he designs the secure-channel machinery that many deployments then adopt.

## The Signal Specifications

Perrin's contribution to this wiki is concentrated in two documents. The 2016 **X3DH (Extended Triple Diffie-Hellman) Key Agreement Protocol** establishes an authenticated shared secret between two parties even when one is offline — solving the asynchronous bootstrapping problem that earlier interactive key exchanges could not. The **Double Ratchet** algorithm then takes that initial secret and continuously derives fresh message keys, combining symmetric-key chains with Diffie-Hellman ratchet steps so that each message uses a new key. The result is forward secrecy (a compromised key does not expose past messages) and post-compromise security (the conversation heals after a compromise).

Together these are the cryptographic machinery behind Signal and the many messengers that adopted the Signal protocol. They are pure-cypherpunk artifacts: publicly specified, freely implementable, and aimed at making strong privacy the default rather than a specialist's tool.

## Beyond Signal: The Noise Protocol Framework

Perrin's influence reaches past Signal because of a second body of work: the **Noise Protocol Framework**, a systematic toolkit for constructing secure-channel handshakes from a small set of Diffie-Hellman patterns. Noise is deliberately not a single protocol but a *generator* of them, and its handshakes have been adopted well outside messaging — the WireGuard VPN, WhatsApp's client-server transport, and the [[lightning-network|Lightning Network]] peer handshake all build on Noise. He has also convened much of the modern secure-messaging and end-to-end-encryption standards effort. This is what marks Perrin as the *protocol designer* rather than the shipper: his contribution is a reusable grammar of secure channels that others deploy. (The Noise Protocol Framework and its adopters are widely documented common knowledge, not drawn from the two Signal specs this page cites.)

## Place in This Wiki

Perrin sits on the [[public-key-cryptography|public-key cryptography]] and [[privacy-and-cryptography|privacy]] side of the [[cypherpunk|cypherpunk]] thread — its *design* wing, the lineage from Diffie-Hellman and Chaumian privacy through to the constructions behind mass-deployed encrypted messaging. Where [[crypto-anarchy|crypto anarchy]] is the political thesis that strong cryptography shifts power to individuals, Perrin builds the machinery that makes the shift practical, and his co-author [[moxie-marlinspike|Moxie Marlinspike]] is the one who shipped it at scale.

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
