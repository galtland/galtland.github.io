---
title: "Free Software"
volatility: warm
category: concept
compiled-from: conversation
created: 2026-07-16
updated: 2026-07-16
verified: 2026-07-16
confidence: high
tags: [free-software, open-source, copyleft, richard-stallman, gnu, gpl, cypherpunk, auditability, licensing]
aliases: [Free Software, open source, copyleft, FOSS, free and open-source software]
summary: "Free software is the movement, begun by Richard Stallman with the GNU project in the 1980s, holding that users must be free to run, study, modify, and share the software they use — freedom as in liberty, not price. Its central innovation is copyleft, the licensing hack of the GNU General Public License that turns copyright against itself: a copyleft licence permits everything except taking the freedom away, so derivative works must stay free. The wiki treats free (and open-source) software as a precondition of the cypherpunk program rather than a coincidence of it. A privacy or money tool you cannot inspect is a tool you must trust; only source you can read, verify, and rebuild can honour the 'don't trust, verify' ethic. That is why every load-bearing cypherpunk tool — PGP, Tor, the Signal protocol, Bitcoin, Monero — is open source: auditability is the trust model."
short: "The movement (Stallman/GNU) for users' freedom to run, study, modify, and share code, enforced by copyleft — and the auditability precondition for every trustless cypherpunk tool."
---

# Free Software

> Free software is the principle that the people who use a program should be free to run, study, change, and share it — freedom as in liberty, not as in price. It is usually treated as a developers' ethic, but the wiki treats it as something more load-bearing: the precondition that makes trustless cryptographic tools possible at all.

## The four freedoms

The movement was launched by Richard Stallman, who founded the GNU project in 1983 and the Free Software Foundation in 1985 to build a complete operating system that users would be free to control. Its definition of *free* is a specific set of freedoms: to run the program for any purpose, to study how it works and change it (which requires access to the source code), to redistribute copies, and to distribute modified versions. Software that denies these — that ships only as an opaque binary the user may not inspect or alter — is, on this view, a means by which its author exercises power over its users. The claim is moral before it is technical: control over the software you depend on is a question of freedom.

## Copyleft

Free software's decisive invention is *copyleft*, embodied in the GNU General Public License (GPL). Ordinary copyright lets an author forbid copying and modification; copyleft uses that same legal power to guarantee the opposite. A copyleft licence grants everyone the four freedoms on one condition — that any derivative work be released under the same terms — so the freedom cannot be stripped out downstream by someone who takes the code, improves it, and closes it. It is copyright turned against itself, a licensing hack that propagates freedom virally through every fork. This is the counterpoint to the wiki's treatment of [[intellectual-property|intellectual property]]: where the libertarian IP debate asks whether ideas can be owned at all, copyleft is a pragmatic tool that works *within* copyright to enlarge the commons.

## Free versus open source

A later, milder framing — *open source* — describes the same practice of shared, modifiable code but justifies it pragmatically (better software, faster development) rather than as a matter of user freedom. The code is often the same; the disagreement is over *why* it matters. For the wiki's purposes the two converge on the property that counts: the source is available to be read and rebuilt by anyone.

## The cypherpunk precondition

This is where free software stops being a programmers' preference and becomes structural. A privacy tool, an encryption library, or a money protocol that you cannot inspect is one you must simply *trust* — trust that it has no backdoor, leaks no keys, and does what it claims. That is exactly the trust the cypherpunk program refuses: it is the software instance of [[trusted-third-parties-as-security-holes|trusted third parties as security holes]]. Open source converts that trust into *verification*: the code can be audited by anyone, compiled reproducibly, and checked against its claims. The [[bitcoin|Bitcoin]] maxim *don’t trust, verify* applies to the software as much as to the ledger. It is no accident that every load-bearing tool in the wiki's [[cypherpunk|cypherpunk]] canon — PGP, Tor, the [[public-key-cryptography|public-key]] messaging stacks, Bitcoin, [[monero|Monero]] — is free and open source. Auditability *is* the security model, and free software is what makes it available.

## Place in This Wiki

Free software sits beneath the wiki's [[cypherpunk|cypherpunk]] and [[peer-to-peer|peer-to-peer]] threads as an enabling ethic rather than a headline. The movement's insistence that users control their tools is the same commitment, in the domain of code, that the wiki makes about money and speech: that the systems people depend on should not be black boxes controlled by someone else. It is the software precondition for [[censorship-resistance|censorship resistance]] and for [[crypto-anarchy|crypto anarchy]].

## See Also

- [[cypherpunk|Cypherpunk]] - the movement free software is a precondition of
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - why an un-inspectable tool is a trust hole
- [[bitcoin|Bitcoin]] - *don’t trust, verify* applied to open-source money
- [[intellectual-property|Intellectual Property]] - the libertarian IP debate copyleft works within
- [[censorship-resistance|Censorship Resistance]] - the property open, auditable code underwrites
- [[peer-to-peer|Peer-to-Peer and the BitTorrent Lineage]] - the architecture that pairs with open code
- [[crypto-anarchy|Crypto Anarchy]] - the political program open tools serve
