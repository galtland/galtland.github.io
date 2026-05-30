---
title: "The Cypherpunks Mailing List"
volatility: cold
category: reference
created: 2026-05-29
updated: 2026-05-29
verified: 2026-05-29
confidence: high
tags: [cypherpunk, cypherpunks-mailing-list, tim-may, eric-hughes, hal-finney, adam-back, wei-dai, crypto-wars, digital-cash, remailers, proof-of-work, b-money, hashcash, history, primary-source]
aliases: [Cypherpunks Mailing List, cypherpunks@toad.com, the cypherpunks list, toad.com list]
summary: "Reference guide to the Cypherpunks mailing list (1992-2009), the Bay Area-founded forum where the cypherpunk program — anonymous remailers, Chaumian digital cash, the two founding manifestos, the Crypto Wars, Hashcash, and b-money — was argued out in public, and from which the lineage runs to the 2008 Bitcoin announcement on its successor cryptography list."
---

# The Cypherpunks Mailing List

> [[cypherpunks-mailing-list|The Cypherpunks Mailing List]] was the forum — founded by Eric Hughes, [[timothy-c-may|Tim May]], and John Gilmore in 1992 — where the cypherpunk movement worked out its program in public: build privacy with deployed code rather than petition for it. The wiki holds a curated subset of roughly thirty posts (1992–2009) tracing one continuous line from anonymous remailers and Chaumian digital cash, through the Clipper and key-escrow fights, to [[hashcash|Hashcash]], b-money, and the bridge to the cryptography mailing list where [[bitcoin-whitepaper|Bitcoin]] was announced.

## Text Status

The wiki does not hold the full seventeen-year archive. It holds a curated subset of about thirty hand-picked posts, organized into five sections: founding posts (1992–1993), Tim May threads and the Crypto Wars (1993–1997), Hal Finney and the digital-cash threads (1992–1998), protocol announcements and the proto-Bitcoin lineage, and the late-list bridge to the cryptography mailing list. The full archive lives at `cypherpunks.venona.com`; because direct Venona fetches timed out during ingest, the individual posts were retrieved from per-message Wayback Machine captures. Hal Finney's first reaction to Bitcoin is deliberately not duplicated here — it is covered in the separate early-Bitcoin corpus.

The list is a primary source. The posts are quoted, not paraphrased, so the wiki's framing of any one thread should be checked against the message text rather than treated as settled history.

## What the List Was

Eric Hughes opened the list on 21 September 1992 — "We have a real mailing list now, and not just a mail alias on my account" — thanking John Gilmore for server space on `hoptoad` and Hugh Daniel for the setup. The list address was `cypherpunks@toad.com`. From the start it had a physical counterpart: Bay Area meetings where members play-tested a "crypto-anarchy game" that produced, in Hughes's words, "interesting emergent behaviors, including resellers and reputation behaviors" — pseudonymous markets in miniature.

Its defining commitment was practical. Eric Hughes's *A Cypherpunk's Manifesto* (written 9 March 1993, posted to the list on 17 March) gave the canonical statement: "Privacy is the power to selectively reveal oneself to the world"; "We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence"; and the line that became the movement's motto — "Cypherpunks write code. We know that someone has to write software to defend privacy … and we're going to write it." The companion founding text, [[timothy-c-may|Tim May]]'s ([Timothy C. May](timothy-c-may.md)) *Crypto Anarchist Manifesto* (written 1988, read at the September 1992 founding meeting and reposted to the list that November), supplied the political register: anonymous, untraceable interaction will "alter completely the nature of government regulation, the ability to tax and control economic interactions." The list is where [[crypto-anarchy|crypto anarchy]] moved from manifesto to working group.

## The Technical Program

The list treated privacy as infrastructure to be built, and three projects recur across the subset:

- **Anonymous remailers.** Hughes posted a hands-on guide to building an automated remailer out of Unix mail tools (`.forward`, `slocal`, a Perl script, `sendmail`) within the list's first week. The aspiration, articulated by [[hal-finney|Hal Finney]] in his 1993 wish list, was true Chaumian "mix" functionality — message batching and padding so that input-to-output mapping is lost — plus reply-capable pseudonym registration. This is the human-operated ancestor of [[tor-the-second-generation-onion-router|onion routing]].
- **Digital cash.** Finney's "Electronic Banking" (November 1992) proposed implementing one of David Chaum's simpler [[blind-signatures-for-untraceable-payments|blind-signature]] schemes for email "banking," and named the hard part precisely: not the cryptography but the social question — *what backs the money, and how does the supply get started?* A 1993 "Digital Gold" proposal (signed "][adon Nash") sketched coins claimed by being the first to sign an integer, aiming at money that is "unforgeable, uninflatable, and untraceable" — an early gesture at [[unforgeable-costliness|unforgeable costliness]]. Finney later proved a structural limit: payee anonymity conflicts with double-spend prevention, because detecting a double-spend requires the bank to see a correlation that also makes the coin traceable. That result framed the "Clipper cash" debate over deliberately traceable e-cash.
- **Reputation and pseudonymity.** Across the threads, the substitute for legal identity is the pseudonym with an online reputation — a recurring theme from the founding game through [[trusted-third-parties-as-security-holes|Szabo's later protocol-design rule]]. The 1993 "BlackNet" posting — May's thought experiment in an anonymous information market built on [[public-key-cryptography|public-key cryptography]] and remailer chains — is included as documentary primary material for how far the list was willing to push the logic, not as endorsement.

## The Crypto Wars on the List

Much of the 1993–1997 traffic is the list reacting to the U.S. government's attempts to keep strong cryptography under control: the Clipper chip, key escrow, and what members called GAK (government access to keys). May placed Clipper in a long NSA policy lineage and argued repeatedly that the durable defense was technical, not legislative — "Give me technology any day." His 1996 post "How I Would Ban Strong Crypto in the U.S." is valuable as a threat model written from the adversary's chair: push a nominally *voluntary* key-escrow standard, get it bundled into mass-market software, coordinate with foreign governments to limit alternatives abroad, then — once deployment is wide — restrict the non-escrowed option at home. The list's verdict, which the wiki treats as the cypherpunk position, was to refuse even "voluntary" escrow. This is the same fight covered from the PGP side in [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] and [[key-escrow-and-clipper-chip|Key Escrow and the Clipper Chip]].

## The Proto-Bitcoin Lineage

The subset's center of gravity, for this wiki, is the chain of monetary protocols announced on the list:

- **Hashcash.** Adam Back announced his "hash cash postage" implementation to the list on 28 March 1997: partial hash collisions that are arbitrarily expensive to compute yet instantly verifiable, proposed as anti-spam postage and a remailer good-behavior bond, complete with a double-spend database. Finney noted on the same threads that the collisions "represent a certain threshold of effort … but they can't replace cash" — proof of work as a cost function, not yet money. This is the source artifact behind the wiki's [[proof-of-work|Proof of Work]] and [[hashcash|Hashcash]] articles.
- **b-money.** Wei Dai announced b-money on the list in November 1998: money created by broadcasting solutions to unused computational problems (valued at the cost of the computing effort), a distributed ledger of pseudonym balances, and contract enforcement by bonded servers. In the follow-up thread, Back's critique reads as a list of the problems Bitcoin would later have to solve — inflation as Moore's law cheapens computation (Back's fix: define a unit to require more computation *over time*, anticipating difficulty adjustment), transaction linkability, and the difficulty of getting value in and out without de-anonymizing the user. Dai's reply added a deflation factor, predicted b-money would "at most be a niche currency," and — strikingly for the venue — conceded that he had come to think "the government monopoly of force is a net benefit."
- **The bridge to the cryptography list.** By 2008 the cypherpunks list itself was effectively defunct, and the subset's final section follows the thread onto its successor, the `metzdowd.com` cryptography mailing list. There, on 31 October 2008, [[satoshi-nakamoto|Satoshi Nakamoto]] announced the Bitcoin paper — "New coins are made from Hashcash style proof-of-work" — and on 8 January 2009 the v0.1 release, with the 21,000,000-coin cap and the four-year halving schedule. Bitcoin is the point where the list's two-decade program — remailers, untraceable cash, proof of work, pseudonymous ledgers — converged into running infrastructure.

## Place in This Wiki

The mailing list is the connective primary-source substrate beneath the wiki's cypherpunk concept and reference articles. Where [[crypto-anarchy|Crypto Anarchy]], [[proof-of-work|Proof of Work]], and the author references for May, Finney, Szabo, and Nakamoto each isolate one idea or figure, this reference shows the medium in which those ideas were proposed, attacked, and refined in real time. It also documents the movement's internal disagreement — over assassination-market discourse, over whether the state's monopoly of force is wholly bad, over voluntary escrow — which keeps the cypherpunk thread in this wiki from collapsing into a single party line. It is the historical anchor for the [[cypherpunk|Cypherpunk]] topic.

## See Also

- [[cypherpunk|Cypherpunk]] - topic this corpus historically anchors
- [[crypto-anarchy|Crypto Anarchy]] - the political thesis the list put into practice
- [[proof-of-work|Proof of Work]] - the cost-function lineage from Hashcash to Bitcoin announced on the list
- [[hashcash|Hashcash]] - Adam Back's 1997 on-list announcement
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - the 2008 announcement on the successor cryptography list
- [[blind-signatures-for-untraceable-payments|Blind Signatures for Untraceable Payments]] - Chaumian primitive behind the list's digital-cash threads
- [[public-key-cryptography|Public-Key Cryptography]] - foundational primitive assumed throughout
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - the protocol-design rule the remailer/reputation work prefigured
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - the same encryption fight from the PGP side
- [[key-escrow-and-clipper-chip|Key Escrow and Clipper Chip]] - the Clipper/GAK policy fight the list mobilized against
- [[unforgeable-costliness|Unforgeable Costliness]] - the monetary property the list's digital-gold and b-money threads reached toward
- [[timothy-c-may|Timothy C. May]] - founding figure and Crypto Anarchist Manifesto author
- [[hal-finney|Hal Finney]] - the list's most prolific digital-cash contributor
- [[nick-szabo|Nick Szabo]] - list participant whose later work bridges to Austrian monetary theory
- [[satoshi-nakamoto|Satoshi Nakamoto]] - announced Bitcoin on the list's successor forum
- [[digital-cash-history|Lessons from Digital-Cash History]] - Why pre-Bitcoin alternative monies failed and what Bitcoin's design escaped, drawn

## Sources

- [Cypherpunks Mailing List Curated Subset](https://cypherpunks.venona.com/) - ~30 curated posts (1992–2009), Venona archive via Wayback captures

