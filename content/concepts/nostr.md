---
title: "Nostr"
volatility: warm
category: concept
created: 2026-05-30
updated: 2026-05-30
verified: 2026-05-30
confidence: high
tags: [nostr, decentralized-social, cypherpunk, public-key-cryptography, identity, relays, censorship-resistance, lightning, privacy, fiatjaf]
aliases: [Nostr, Notes and Other Stuff Transmitted by Relays, decentralized social protocol, keys as identity]
summary: "Nostr (Notes and Other Stuff Transmitted by Relays) is a minimal protocol where identity is a cryptographic keypair and content is signed events distributed through user-chosen relays — solving the identity-capture problem of centralized platforms. It optimizes for censorship resistance and self-sovereign identity, not anonymity."
---

# Nostr

> Nostr — "Notes and Other Stuff Transmitted by Relays" — is a deliberately minimal protocol (originated by the developer **fiatjaf**) for censorship-resistant social coordination. Its core move is to make **identity a cryptographic keypair under the user's sole control** rather than an account rented from a platform. It directly answers the *identity-capture* failure of centralized platforms diagnosed in [[surveillance-capitalism|surveillance capitalism]]: on Nostr no authority can revoke your key or unilaterally erase your replicated profile, follows, and history, because your identity is yours rather than the platform's (though, as below, persistence still depends on relays carrying your events).

## The Protocol

Nostr is a protocol, not a platform. All content takes the form of **events**: signed JSON objects containing the content, a timestamp, the author's [[public-key-cryptography|public key]], a signature, and tags. An event is "nothing more than a signed text file," so it can be stored anywhere, sent over any channel, and processed by any software that can read JSON and verify signatures.

The architecture separates three roles. **Users** hold private keys and sign events. **Clients** are the apps users interact with — they fetch events from relays, display them, and create new ones. **Relays** are servers that store and forward events; they do not authenticate users, they simply accept valid signed events. No relay is authoritative: a user connects to many relays, content is replicated across the ones they choose, and no single relay can censor a user because others can carry their content. Protocol evolution happens through **NIPs** (Nostr Implementation Possibilities) — optional extensions adopted voluntarily by clients and relays, "market discovery applied to protocol development."

## Keys as Identity

In Nostr the public key *is* the identity — no registration, no approval, no database entry. The user self-declares their profile (name, bio, picture, Lightning address) in a signed event, and it exists the moment they sign it. This yields properties impossible on centralized platforms: the identity cannot be banned (no authority can invalidate a key), cannot be impersonated (signatures are unforgeable), cannot be edited by others, and is portable across every client and relay. The flip side is unforgiving key management: key loss is permanent (no password reset), key compromise is permanent identity theft, and there is no standard key rotation that preserves followers. This is the [[parallel-economy|self-sovereignty]] tradeoff made explicit rather than hidden behind platform "accounts."

## Markets Instead of Authorities

Functions a platform centralizes, Nostr pushes to competitive markets:

- **Relays** compete on reliability, retention, features, policy, and community, under free, paid, freemium, or community-funded models. Paid relays solve sustainability and spam-resistance at once.
- **Reputation** comes from a web of trust — follows, interactions, and **NIP-05** DNS-based verification (`user@example.com`, where the domain vouches for the key) — rather than a platform checkmark.
- **Moderation** is a market service, not a protocol rule: relays filter what they host, clients filter what they display, and blocklist/curation providers compete for users. No single authority decides what everyone sees.

Because events are just signed data, one keypair also serves marketplaces (NIP-99, with [[lightning-network|Lightning]] payments), software distribution, long-form publishing, live streaming, and even decentralized wikis — reputation earned in one context carries to the others.

## Privacy Limitations

Hillebrand is careful that Nostr optimizes for **censorship resistance and user control, not privacy**. It is pseudonymous, not anonymous: the persistent public key links all of a user's events, and behavioral patterns can deanonymize over time. Relays receive events in cleartext and therefore see metadata — who posts what, when, from which IP, and the social graph — and even encrypted direct messages (the legacy NIP-04, and the newer NIP-17 private messages that use NIP-44 encryption) hide content but not the fact of communication. Emerging work (the **Marmot Protocol**, built on the IETF's MLS / RFC 9420 standard) adds end-to-end encrypted group messaging with forward secrecy and metadata protection, publishing each message under a fresh ephemeral key so relays cannot see sender, membership, or group size. But full privacy still requires routing relay connections through an anonymity layer like [[crypto-anarchy|onion routing]] — the protocol does not provide it. Nostr is thus the **identity and coordination** layer of the cypherpunk stack, complementary to the money and transport layers rather than a private-messaging system in itself.

## See Also

- [[public-key-cryptography|Public-Key Cryptography]] - the keypair-as-identity primitive Nostr is built on
- [[surveillance-capitalism|Surveillance Capitalism]] - the centralized-platform identity capture Nostr answers
- [[parallel-economy|The Parallel Economy]] - the self-sovereign stack Nostr supplies the identity layer for
- [[lightning-network|Lightning Network]] - the payment rail integrated via zaps and NIP-99 marketplaces
- [[forward-secrecy|Forward Secrecy]] - the property Marmot/MLS bring to Nostr group messaging
- [[crypto-anarchy|Crypto Anarchy]] - the censorship-resistance tradition Nostr extends to identity
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - the platform-as-intermediary problem the relay model dissolves
- [[privacy-and-cryptography|Privacy and Cryptography]] - the implementation-map topic
- [[cypherpunk|Cypherpunk]] - the movement whose censorship-resistance goals Nostr advances
- [[the-praxeology-of-privacy|The Praxeology of Privacy]] - ch. 17 is the source for this concept

## Sources

- [The Praxeology of Privacy](https://towardsliberty.com/pop) - Hillebrand's ch. 17 "Decentralized Social Infrastructure": the Nostr protocol, keys-as-identity, relay markets, web-of-trust reputation, market-based moderation, the Marmot/MLS privacy work, and Nostr's pseudonymity limits
