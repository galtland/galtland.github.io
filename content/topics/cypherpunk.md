---
title: "Cypherpunk"
volatility: warm
category: topic
created: 2026-05-28
updated: 2026-05-28
tags: [cypherpunk, crypto-anarchy, cryptography, bitcoin, privacy, proof-of-work, austrian-economics, libertarianism]
aliases: [cypherpunks, crypto-anarchism, cypherpunk movement]
confidence: medium
summary: "Topic map for the cypherpunk thread: a 1990s technical-political movement holding that strong cryptography, anonymous protocols, and verifiable scarcity move power from centralized institutions to individuals. This wiki frames cypherpunk as the implementation arm of an Austrian-libertarian political economy: sound money meets strong cryptography."
short: "Cypherpunk as the implementation arm of Austrian libertarianism: strong cryptography, anonymous protocols, and verifiable scarcity replacing trusted intermediaries with verifiable rules."
---

# Cypherpunk

> [[cypherpunk|Cypherpunk]] is a technical-political movement that began on the Bay Area cypherpunks mailing list in 1992 and has carried, ever since, a distinct thesis: strong cryptography, anonymous protocols, and unforgeable digital scarcity move political power from centralized institutions to individuals. This topic maps how the cypherpunk canon connects to the wiki's existing Austrian-libertarian thread.

## The Founding Texts

Three short documents define the political register. [[crypto-anarchy|Crypto Anarchy]] collects the central thesis from Tim May's 1988 *Crypto Anarchist Manifesto* and his 1994 *Cyphernomicon*: that public-key cryptography and anonymous markets make many forms of state regulation impractical, not by lobbying or revolution but by raising the cost of enforcement above what states can sustain. Eric Hughes's 1993 *A Cypherpunk's Manifesto* tightens the practical commitment — "cypherpunks write code" — and treats privacy as something built by deployed systems, not granted by institutional promise. John Perry Barlow's 1996 *Declaration of the Independence of Cyberspace* gives the rhetorical maximum: governments of the industrial world have no sovereignty over the networked space being built.

These manifestos are deliberately programmatic. They make claims that need physical implementation to be credible. The rest of the cypherpunk thread is the implementation.

## The Technical Lineage

The technical chain starts before the mailing list existed. [[public-key-cryptography|Public-Key Cryptography]] emerges from Diffie and Hellman's 1976 [[new-directions-in-cryptography|New Directions in Cryptography]]: the asymmetric-key insight that makes secure communication between strangers possible without prior key exchange. David Chaum's 1982 [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] and 1985 [[security-without-identification|Security Without Identification]] show how cryptographic primitives can produce privacy-preserving payment, communication, and credential systems — Chaum's program of "transaction systems to make Big Brother obsolete."

[[proof-of-work|Proof of Work]] follows in the late 1990s. Adam Back's [[hashcash|Hashcash]] (1997 announcement, 2002 formal paper) introduces a publicly verifiable cost function for throttling spam. Wei Dai's 1998 *b-money* sketches a pseudonymous digital money using proof-of-work issuance. Nick Szabo's 2005 *Bit Gold* applies costly bits to a distributed title registry. Satoshi Nakamoto's 2008 [[bitcoin-whitepaper|Bitcoin Whitepaper]] integrates Hashcash-style proof of work, distributed timestamping, and incentive design into a working peer-to-peer cash system. Bitcoin is the most public artifact of the cypherpunk program and the moment cypherpunk technology stopped being demonstration and started being infrastructure.

## The Austrian Bridge

The wiki treats [[nick-szabo|Nick Szabo]] as the most directly Austrian cypherpunk and the cleanest bridge between the two traditions. [[shelling-out|Shelling Out]] carries Carl Menger's origin-of-money account back into prehistoric collectibles and forward into digital scarcity. The argument matches [[the-theory-of-money-and-credit|Mises's regression theorem]] without being framed in Austrian vocabulary: money's purchasing power must trace back to an object that had value for non-monetary reasons before it became money. [[trusted-third-parties-as-security-holes|Trusted Third Parties Are Security Holes]] extends [[market-anarchism-and-private-law|market-anarchist]] skepticism about centralized authority into protocol-design terms: intermediaries concentrate risk because they become targets, bottlenecks, and points of coercion. [[smart-contracts|Smart Contracts]] (Szabo, 1994) applies the same instinct to contractual performance.

The wiki position is that this is not a coincidence. Szabo writes from inside the cypherpunk movement but reaches conclusions about money, contracts, and property that align with Mises, Rothbard, and Hoppe arrived at decades earlier from praxeology. The bridge is the wiki's most important editorial claim about the cypherpunk thread.

## The Modern Synthesis Writers

A later generation reads Bitcoin as a fully Austrian-libertarian project. Saifedean Ammous's [[the-bitcoin-standard|The Bitcoin Standard]] (Wiley, 2018), [[the-fiat-standard|The Fiat Standard]] (2021), and [[principles-of-economics-ammous|Principles of Economics]] (2023) frame Bitcoin and the post-1971 fiat regime in explicit Misesian terms. Pierre Rochard's [[speculative-attack|Speculative Attack]] (2014) describes hyperbitcoinization as a monetary process in which good money drives out bad. Allen Farrington's [[bitcoin-is-venice|Bitcoin Is Venice]] (essays, 2021) reads Bitcoin as a civilizational exit from fiat finance. These writers depend on the earlier cypherpunk and Austrian work and assume readers already have both backgrounds.

## Relation to the Privacy-and-Cryptography Topic

This topic overlaps with [[privacy-and-cryptography|Privacy and Cryptography]] but emphasizes a different axis. Privacy-and-cryptography is centered on [[praxeology-of-privacy|Praxeology of Privacy]] and Hillebrand's argument that privacy is a structural feature of human action; it treats cryptography as the implementation layer for that theory. Cypherpunk-as-topic emphasizes the political-movement axis: a chronological canon of manifestos, protocol papers, and synthesis books that asserts cryptography is a vector for political change in itself. The two topics will share many concept and reference articles; reading them as paired maps rather than competing taxonomies is the wiki's intended use.

## Boundaries

This topic should not absorb every cryptographic or blockchain technology. The wiki value is in the cypherpunk-Austrian connection: how concrete cryptographic systems implement long-standing libertarian commitments to property, sound money, and resistance to coerced disclosure. Smart-contract-platform tutorials, altcoin economics, NFT history, and academic cryptography that does not bear on the political thesis belong elsewhere.

Closed gaps as of 2026-05-28 (the same day this topic was first written): Phil Zimmermann's *Why I Wrote PGP* and the 1990s Crypto Wars are now treated in [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]]; [[hal-finney|Hal Finney]] has a dedicated author reference covering his RPOW and early-Bitcoin correspondence; the [[the-lightning-network-paper|Lightning Network whitepaper]] is ingested and paired with the [[lightning-network|Lightning Network]] concept; Konrad Graf's [[are-bitcoins-ownable|Are Bitcoins Ownable?]] was successfully retried from the author's own free PDF mirror; all three Saifedean books are ingested in full text.

Phase C closed-gaps (later same day): 1990s Crypto Wars primary sources are now collected in the 1990s Crypto Wars dossier raw aggregate (Clipper Chip campaign, Matt Blaze 1994 protocol-failure paper, Bernstein timeline, Zimmermann prosecution timeline, Gilmore code-as-speech materials). The *Bernstein v. United States* Ninth Circuit opinion (1999) is its own raw paper. A curated Cypherpunks mailing-list subset (~30 hand-picked posts spanning 1992-2009) closes the worst of the mailing-list gap. Privacy-coin and messaging-protocol primary sources are ingested: van Saberhagen's CryptoNote v2.0 (Monero foundation), the extended Zerocash paper (Zcash zk-SNARK foundation), and the Signal X3DH plus Double Ratchet specifications.

Remaining gaps (smaller now): the FULL Cypherpunks mailing-list archive 1992-2009 (we have a curated subset, not the whole 17-year record); the PGP source-code USENET posts (Zimmermann's 1991 release in source form); the AES selection process documents (NIST 1997-2001); and dedicated author references for Eric Hughes, John Perry Barlow, John Gilmore, Adam Back, Wei Dai, David Chaum, Whitfield Diffie, Martin Hellman, Pierre Rochard, Allen Farrington, Joseph Poon, Tadge Dryja, Moxie Marlinspike, Trevor Perrin, and Konrad Graf (all currently covered by work-references rather than umbrella author-references).

## See Also

- [[crypto-anarchy|Crypto Anarchy]] - Tim May's founding thesis
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - Szabo's protocol-design rule
- [[smart-contracts|Smart Contracts]] - Szabo on contracts as protocols
- [[proof-of-work|Proof of Work]] - Hashcash to Bit Gold to Bitcoin lineage
- [[new-directions-in-cryptography|New Directions in Cryptography]] - Diffie-Hellman public-key foundation
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaumian e-cash primitive
- [[security-without-identification|Security Without Identification]] - Chaum's broader privacy-infrastructure program
- [[hashcash|Hashcash]] - Adam Back's cost-function bridge to Bitcoin proof of work
- [[shelling-out|Shelling Out]] - the Mengerian/Misesian bridge from Szabo
- [[public-key-cryptography|Public-Key Cryptography]] - Diffie-Hellman foundation
- [[timothy-c-may|Timothy C. May]] - crypto-anarchy anchor author
- [[nick-szabo|Nick Szabo]] - Austrian-cypherpunk bridge author
- [[satoshi-nakamoto|Satoshi Nakamoto]] - pseudonymous Bitcoin whitepaper author
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - 2008 design source
- [[tor-the-second-generation-onion-router|Tor: The Second-Generation Onion Router]] - anonymous-network infrastructure paper
- [[the-lightning-network-paper|The Lightning Network Paper]] - payment-channel scaling paper
- [[speculative-attack|Speculative Attack]] - hyperbitcoinization essay
- [[bitcoin-is-venice|Bitcoin Is Venice]] - modern civilizational-exit essay
- [[privacy-and-cryptography|Privacy and Cryptography]] - paired topic emphasizing praxeology of privacy
- [[austrian-economics|Austrian Economics]] - economic framework the bridge connects to
- [[libertarianism|Libertarianism]] - political framework the bridge extends

- [[lightning-network|Lightning Network]] - second-layer Bitcoin payment-channel design in the cypherpunk digital-cash lineage
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - strong-encryption fight that made routine cryptographic privacy a civil-liberties issue
- [[unforgeable-costliness|Unforgeable Costliness]] - Szabo-to-Saifedean monetary bridge for costly digital money
- [[fiat-as-engineered-system|Fiat as Engineered System]] - Ammous's fiat-vs-Bitcoin system comparison
- [[the-bitcoin-standard|The Bitcoin Standard]] - later Austrian-Bitcoin synthesis in the cypherpunk reception history
- [[the-fiat-standard|The Fiat Standard]] - companion fiat-vs-Bitcoin analysis
- [[phil-zimmermann|Phil Zimmermann]] - PGP creator and Crypto Wars figure
- [[hal-finney|Hal Finney]] - RPOW creator and early Bitcoin participant
- [[are-bitcoins-ownable|Are Bitcoins Ownable?]] - libertarian legal-theory reading of Bitcoin ownership and protocol limits
- [[code-as-speech|Code as Speech]] - legal thesis that publishing encryption source code can be protected speech
- [[ring-signatures|Ring Signatures]] - sender-privacy primitive in the CryptoNote/Monero lineage
- [[zk-snarks|zk-SNARKs]] - zero-knowledge proof primitive used in Zerocash/Zcash
- [[forward-secrecy|Forward Secrecy]] - key-compromise property central to modern secure messaging
- [[key-escrow-and-clipper-chip|Key Escrow and Clipper Chip]] - 1990s government-access encryption fight
- [[bernstein-v-united-states-1999|Bernstein v. United States (1999)]] - Ninth Circuit code-as-speech ruling
- [[cryptonote-whitepaper|CryptoNote Whitepaper]] - Monero foundation paper for private electronic cash
- [[zerocash|Zerocash]] - Zcash foundation paper for zk-SNARK private payments
- [[signal-x3dh|Signal X3DH]] - asynchronous Signal key-agreement specification
- [[signal-double-ratchet|Signal Double Ratchet]] - Signal messaging ratchet for forward-secure conversations
- [[hard-money|Hard Money]] - Money whose supply is hard to expand. The bridge concept between Mises on sound
- [[cypherpunks-mailing-list|The Cypherpunks Mailing List]] - Reference guide to the Cypherpunks mailing list (1992-2009), the Bay Area-founded
- [[parallel-economy|The Parallel Economy]] - Hillebrand's strategic synthesis: an integrated stack of privacy-preserving tools
- [[nostr|Nostr]] - Nostr (Notes and Other Stuff Transmitted by Relays) is a minimal protocol where

## Sources

- [The Crypto Anarchist Manifesto](https://www.activism.net/cypherpunk/crypto-anarchy.html) - Tim May 1988, founding political text
- [A Cypherpunk's Manifesto](https://www.activism.net/cypherpunk/manifesto.html) - Eric Hughes 1993, "cypherpunks write code"
- [The Cyphernomicon](https://nakamotoinstitute.org/library/cyphernomicon/) and [Cyphernomicon full text](https://nakamotoinstitute.org/library/cyphernomicon/) - Tim May 1994, comprehensive cypherpunk FAQ
- [A Declaration of the Independence of Cyberspace](https://www.eff.org/cyberspace-independence) - Barlow 1996
- [Shelling Out: The Origins of Money](https://nakamotoinstitute.org/library/shelling-out/) - Szabo 2002, Mengerian bridge
- [Trusted Third Parties Are Security Holes](https://nakamotoinstitute.org/library/trusted-third-parties/) - Szabo 2001
- [Smart Contracts](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html) - Szabo 1994
- [The God Protocols](https://nakamotoinstitute.org/the-god-protocols/) - Szabo 1997
- [Bit Gold](https://nakamotoinstitute.org/library/bit-gold/) - Szabo 2005
- [Money, Blockchains, and Social Scalability](https://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html) - Szabo 2017
- [b-money](http://www.weidai.com/bmoney.txt) - Wei Dai 1998
- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) - Satoshi 2008
- [Blind Signatures for Untraceable Payments](https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf) - Chaum 1982
- [Security Without Identification](https://chaum.com/security-without-identification/) - Chaum 1985
- [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf) - Diffie-Hellman 1976
- [Hashcash: A Denial of Service Counter-Measure](http://www.hashcash.org/papers/hashcash.pdf) - Adam Back 2002
- [Tor: The Second-Generation Onion Router](https://svn.torproject.org/svn/projects/design-paper/tor-design.pdf) - Dingledine, Mathewson, Syverson 2004
