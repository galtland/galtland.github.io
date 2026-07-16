---
title: "Moxie Marlinspike"
volatility: cold
category: reference
created: 2026-06-18
updated: 2026-07-16
verified: 2026-07-16
tags: [moxie-marlinspike, signal, cryptography, end-to-end-encryption, deployment, forward-secrecy, cypherpunk, privacy]
aliases: [Moxie Marlinspike, Marlinspike]
confidence: high
summary: "Moxie Marlinspike is the builder behind Signal — founder of Open Whisper Systems, creator of the Signal messenger, and, with Trevor Perrin, co-author of the X3DH and Double Ratchet specifications that form the Signal protocol. His distinctive contribution is not protocol theory but deployment: he made forward-secure end-to-end encryption a default consumer technology, first in Signal and then by getting the Signal protocol adopted into WhatsApp — the single largest rollout of strong cryptography in history, and the clearest mass-scale realization of the cypherpunk program."
short: "The builder behind Signal — founder of Open Whisper Systems, co-author (with Trevor Perrin) of the X3DH and Double Ratchet specs, and the figure who shipped default end-to-end encryption to billions."
---

# Moxie Marlinspike

> [[moxie-marlinspike|Moxie Marlinspike]] is the *builder* behind Signal: the founder of Open Whisper Systems, the creator of the Signal messenger, and — with the protocol designer [[trevor-perrin|Trevor Perrin]] — co-author of the two specifications that define the Signal protocol, [[signal-x3dh|Signal X3DH]] and the [[signal-double-ratchet|Signal Double Ratchet]]. Where Perrin's significance is protocol design, Marlinspike's is *deployment*: more than any other figure, he turned strong end-to-end encryption from a specialist tool into a default consumer technology.

## The Signal Specifications

Marlinspike's contribution in this corpus is the same two documents he co-authored with Perrin. The 2016 **X3DH** key-agreement protocol lets two parties derive an authenticated shared secret asynchronously — one can be offline — which earlier interactive key exchanges could not do. The **Double Ratchet** then derives a fresh key per message from that secret using symmetric-key chains and Diffie-Hellman ratchet steps, giving forward secrecy and post-compromise security.

These protocols are the engine of Signal and of the wider ecosystem that adopted the Signal protocol for default end-to-end encryption. They embody the cypherpunk commitment to building privacy into deployed systems rather than petitioning for it: the cryptography is public, implementable, and shipped to ordinary users by default.

## The Cypherpunk Who Shipped

What distinguishes Marlinspike from the protocol theorists is that he made the cryptography *win by default*. Through Open Whisper Systems he built Signal into a usable consumer messenger and then persuaded far larger platforms to adopt the same protocol — most consequentially WhatsApp, which turned on Signal-protocol end-to-end encryption for its entire user base. That decision alone put strong, forward-secure encryption in the pockets of billions of people who never chose it and mostly never noticed it, which is precisely the point: his design philosophy is that privacy technology only matters at the scale of the default, and a tool ordinary people must opt into and configure has already lost. (Open Whisper Systems, the Signal app, and the WhatsApp rollout are widely documented common knowledge, not drawn from the two protocol specs this page cites.)

## Place in This Wiki

Marlinspike belongs to the [[privacy-and-cryptography|privacy]] and [[public-key-cryptography|public-key cryptography]] line of the [[cypherpunk|cypherpunk]] thread — its *deployment* wing. If [[crypto-anarchy|crypto anarchy]] is the claim that strong cryptography removes practical levers of surveillance and control, Signal is among the most widely deployed demonstrations of it, and Marlinspike is the reason it shipped. His co-author [[trevor-perrin|Trevor Perrin]] supplies the complementary protocol-design half of the same story.

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
