---
title: "Timelines"
---

# Timelines

Chronological timelines of the wiki’s core threads, assembled at publish time. Each entry links to the article that documents it.

## The Crypto Wars

The decades-long conflict over whether ordinary people may use strong cryptography — from the invention of public-key cryptography, through the 1990s fights over PGP, the Clipper Chip, and export controls, to the surveillance disclosures and renewed pressure of the present. Each entry links to the article that documents it.

- **1976** — Whitfield Diffie and Martin Hellman publish "New Directions in Cryptography," inventing public-key cryptography and key exchange and putting encryption within reach of civilians rather than states alone. ([New Directions in Cryptography](/references/new-directions-in-cryptography))
- **1982** — David Chaum's "Blind Signatures for Untraceable Payments" shows how a bank can sign a token it cannot link to the payer — the cryptographic basis for untraceable digital cash. ([Blind Signatures for Untraceable Payments](/references/blind-signatures-for-untraceable-payments))
- **1985** — Chaum's "Security Without Identification" sketches a privacy infrastructure of digital pseudonyms and card-computer credentials — transactions without a central identity register. ([Security Without Identification](/references/security-without-identification))
- **1991** — Phil Zimmermann releases PGP for free after Senate Bill 266's anti-encryption "trapdoor" language, making public-key encryption usable by ordinary computer users — and betting that widespread use would make later criminalization harder. ([PGP and the Crypto Wars](/concepts/pgp-and-the-crypto-wars))
- **1992** — The Cypherpunks mailing list is founded in the Bay Area, becoming the public forum (active until 2009) where the movement's program — privacy through code — was argued out. ([The Cypherpunks Mailing List](/references/cypherpunks-mailing-list))
- **1994** — Amid congressional hearings on key escrow, Matt Blaze's analysis undermines the Clipper Chip on its own technical terms, showing its law-enforcement access field could be defeated. ([Key Escrow and Clipper Chip](/concepts/key-escrow-and-clipper-chip))
- **1996** — In the Bernstein litigation, Judge Marilyn Hall Patel's district-court rulings begin treating encryption source code as speech and questioning the export-licensing regime as prior restraint. ([Bernstein v. United States (1999)](/references/bernstein-v-united-states-1999))
- **1999** — A Ninth Circuit panel holds in Bernstein that encryption source code is protected expression and the export-control licensing was unconstitutional prior restraint; the same year, U.S. export controls on strong cryptography are substantially relaxed. ([Bernstein v. United States (1999)](/references/bernstein-v-united-states-1999))
- **2004** — The Tor design paper describes low-latency onion routing with telescoping circuits — anonymity as deployed infrastructure rather than theory. ([Tor: The Second-Generation Onion Router](/references/tor-the-second-generation-onion-router))
- **2013** — June: the Snowden disclosures confirm bulk suspicionless surveillance from the state's own documents — the hinge event that answered the Crypto Wars with encryption-by-default. ([The Snowden Disclosures](/concepts/snowden-disclosures))
- **2017** — "Fog of CryptoWar" (Logan) maps the second Crypto War: the "ban encryption" debate is a straw man while plaintext access arrives through vendor pressure, weak defaults, metadata retention, and lawful hacking. ([Fog of CryptoWar](/references/fog-of-cryptowar))
- **2022** — "Of Cypherpunks and Sousveillance" (Anderson) studies the movement's ethic — privacy for the weak, transparency for the powerful — and its practice of watching the watchers. ([Of Cypherpunks and Sousveillance](/references/of-cypherpunks-and-sousveillance))

## The Road to Digital Cash

The cryptographic lineage that led to Bitcoin — from Chaum's blinded tokens through the proof-of-work and digital-money proposals of the cypherpunks to a working peer-to-peer currency and its settlement layer. Each entry links to the reference page for that work.

- **1982** — David Chaum's "Blind Signatures for Untraceable Payments" gives the first cryptographic scheme for digital money a bank cannot trace to the payer. ([Blind Signatures for Untraceable Payments](/references/blind-signatures-for-untraceable-payments))
- **1997** — Adam Back proposes Hashcash: a non-interactive proof-of-work cost function, later the direct citation lineage for Bitcoin's mining. ([Hashcash](/references/hashcash))
- **1998** — Wei Dai's b-money describes pseudonymous digital money with proof-of-work issuance and signed transfers — a Bitcoin precursor that left the consensus problem open. ([b-money](/references/b-money))
- **2004** — Hal Finney builds RPOW (Reusable Proofs of Work), a running system for passing proof-of-work tokens — the first working step toward proof-of-work money. ([Hal Finney](/references/hal-finney))
- **2005** — Nick Szabo's Bit Gold proposes money made of unforgeably costly, timestamped proof-of-work strings tracked in a distributed title registry — the closest uncited precursor to Bitcoin. ([Bit Gold](/references/bit-gold))
- **2008** — Satoshi Nakamoto's Bitcoin whitepaper combines digital signatures, public transaction ordering, and hash-based proof of work to solve double-spending without a trusted intermediary. ([Bitcoin Whitepaper](/references/bitcoin-whitepaper))
- **2009** — January: Satoshi releases the first Bitcoin software (v0.1), moving the design from paper to a running peer-to-peer network. ([Satoshi Nakamoto](/references/satoshi-nakamoto))
- **2016** — Poon and Dryja's Lightning Network paper adds HTLC-routed payment channels, keeping Bitcoin's chain as settlement and dispute backstop while moving everyday payments off it. ([The Lightning Network Paper](/references/the-lightning-network-paper))

## From the Gold Standard to Bitcoin

The monetary arc the wiki's Austrian sources trace: money leaves political control under the classical gold standard, is dismantled in stages across the twentieth century into pure fiat, and is answered in the twenty-first by a fixed-supply digital money. Each entry links to the article that documents it.

- **1870s** — The classical gold standard matures: major currencies are defined as fixed weights of gold, exchange rates are fixed by arithmetic, and trade imbalances correct automatically — money largely outside political control. ([The Gold Standard](/concepts/gold-standard))
- **1913** — The United States adopts the Federal Reserve System — the last major nation to take up central banking — an outcome the wiki's Austrian sources trace to the secret 1910 Jekyll Island drafting session rather than the official lender-of-last-resort story. ([Federal Reserve](/concepts/federal-reserve))
- **1929** — The Wall Street crash opens the Great Depression, which Rothbard reads as the unavoidable correction of the credit inflation the Fed engineered through the 1920s. ([Great Depression](/concepts/great-depression))
- **1933** — Roosevelt bans private gold ownership, forcing Americans to sell to the Treasury at $20.67 an ounce, then revalues the dollar to $35 — a roughly 41% devaluation after the population had been stripped of the metal. ([The Gold Standard](/concepts/gold-standard))
- **1944** — Bretton Woods builds a dollar-gold exchange standard: other currencies peg to the dollar and only the dollar is convertible to gold — and only for foreign central banks, with ordinary Americans still barred from owning it. ([The Gold Standard](/concepts/gold-standard))
- **1971** — August 15: Nixon closes the gold window, ending dollar-gold convertibility — in effect a U.S. default on redeeming dollars in gold — and inaugurating the pure fiat era. ([The Fiat Standard](/references/the-fiat-standard))
- **2008** — Satoshi Nakamoto's Bitcoin whitepaper proposes a fixed-supply, rule-based money that needs no central bank — advanced by its proponents as gold's contested digital heir. ([Bitcoin Whitepaper](/references/bitcoin-whitepaper))
- **2009** — January: the Bitcoin network launches with Satoshi's v0.1 release — the first money since the classical gold standard with a fixed, apolitical issuance schedule. ([Satoshi Nakamoto](/references/satoshi-nakamoto))

