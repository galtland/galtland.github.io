---
title: "Tor: The Second-Generation Onion Router"
volatility: cold
category: reference
created: 2026-05-28
updated: 2026-05-30
verified: 2026-05-30
tags: [tor, onion-routing, anonymity, privacy, cryptography, cypherpunk, hidden-services, forward-secrecy]
aliases: [Tor paper, Second-Generation Onion Router, Tor design paper, Dingledine Mathewson Syverson 2004]
confidence: high
summary: "Dingledine, Mathewson, and Syverson's 2004 Tor paper presents a deployable second-generation onion-routing system with telescoping circuit construction, forward secrecy, directory servers, exit policies, congestion control, and hidden services."
short: "The 2004 Tor design paper: low-latency onion routing with telescoping circuits, directory servers, exit policies, congestion control, and hidden services."
---

# Tor: The Second-Generation Onion Router

> [[tor-the-second-generation-onion-router|Tor: The Second-Generation Onion Router]] is Roger Dingledine, Nick Mathewson, and Paul Syverson's 2004 design paper for a practical low-latency anonymous communication network.

## Second-Generation Onion Routing

The paper presents Tor as a successor to earlier onion-routing designs. The goal is deployable low-latency anonymity for TCP applications such as web browsing, SSH, and instant messaging. Tor does not aim to defeat a global passive adversary or solve all traffic-correlation attacks. It aims to improve the practical tradeoff between anonymity, usability, efficiency, and volunteer deployment.

The core onion-routing model remains layered relaying. A client builds a circuit through relays. Each relay knows only its predecessor and successor, not the whole path. Traffic moves in fixed-size cells with layered encryption.

## Forward Secrecy and Telescoping Circuits

The major cryptographic change is telescoping circuit construction. Instead of building a whole path with one multiply encrypted onion, the client extends the circuit one hop at a time and negotiates a fresh key with each relay. The paper uses Diffie-Hellman handshakes inside this process.

This gives forward secrecy: if a node is later compromised after deleting session keys, old traffic cannot be decrypted from recordings. Telescoping also makes circuit construction more reliable because the client can learn which extension failed and try another relay.

## Directory Servers, Exit Policies, and Congestion

Tor adds directory servers as a simpler alternative to flooding network state. Trusted directory authorities publish signed descriptions of known routers, keys, bandwidth, status, and exit policies. Clients fetch directories to choose circuits.

Exit policies are a deployment feature as much as a technical one. Volunteer relays can advertise which hosts and ports they will connect to, reducing abuse exposure and making operation more realistic. The paper also adds congestion control and rate limiting so the network can handle bottlenecks while preserving anonymity as much as possible.

## Hidden Services

Tor's rendezvous-point design supports location-hidden services. A server can offer a TCP service without revealing its IP address. Clients connect through introduction and rendezvous mechanisms so that client and server never learn each other's IP address, and no introduction or rendezvous relay learns both endpoints' identities and their traffic. (Each side still reveals its IP to its own first Tor hop, as in any onion circuit — the design hides the two ends from each other and from any single relay, not from the entry guard.)

This is the paper's bridge from anonymous client browsing to broader resistant infrastructure. In [[privacy-and-cryptography|Privacy and Cryptography]], Tor is an implementation domain for selective disclosure and resistant communication, not merely a web proxy.

## See Also

- [[privacy-and-cryptography|Privacy and Cryptography]] - topic map for privacy-preserving infrastructure
- [[cypherpunk|Cypherpunk]] - movement context for anonymous protocols
- [[public-key-cryptography|Public-Key Cryptography]] - signature and key-exchange primitive used in circuit construction
- [[new-directions-in-cryptography|New Directions in Cryptography]] - Diffie-Hellman public-key foundation
- [[praxeology-of-privacy|Praxeology of Privacy]] - selective-disclosure theory that later uses Tor as an implementation example
- [[the-praxeology-of-privacy|The Praxeology of Privacy]] - Hillebrand book that includes anonymous communication networks in its implementation map
- [[crypto-anarchy|Crypto Anarchy]] - political thesis that strong cryptography and anonymous networks frustrate control
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - earlier public conflict over routine strong encryption
- [[forward-secrecy|Forward Secrecy]] - cryptographic property Tor's telescoping circuit construction helps provide
- [[signal-double-ratchet|Signal Double Ratchet]] - messaging protocol with a different forward-secret key-update pattern

## Sources

- [Tor: The Second-Generation Onion Router](https://svn.torproject.org/svn/projects/design-paper/tor-design.pdf) - primary 2004 design paper
