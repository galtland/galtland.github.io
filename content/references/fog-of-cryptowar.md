---
title: "Fog of CryptoWar"
volatility: cold
category: reference
created: 2026-07-08
updated: 2026-07-08
verified: 2026-07-08
tags: [jonathan-logan, smuggler, crypto-wars, going-dark, encryption, key-escrow, lawful-hacking, backdoors, surveillance, cypherpunk, opsec]
aliases: [Fog of CryptoWar, Fog of Crypto War]
confidence: medium
short: "Logan's 2017 field map of Crypto War 2: the 'ban encryption' debate is a straw man while plaintext access arrives through vendor pressure, weak defaults, metadata retention, and lawful hacking."
summary: "Reference guide to Jonathan 'smuggler' Logan's Fog of CryptoWar (2017), the wiki's seed source on the second crypto war. Against the replayed 1990s arguments ('you can't ban math'), Logan shows why absolutist claims lose the policy fight — regulation targets behavior, not knowledge, and needs only partial enforcement — then surveys the real regulatory menu: metadata defense, insecure defaults, lawful hacking, update-channel trojans, and result-driven plaintext mandates enforced through the app-store chokepoint."
---

# Fog of CryptoWar

> [[fog-of-cryptowar|Fog of CryptoWar]] is Jonathan "smuggler" Logan's 2017 survey of the renewed crypto wars, written for the pro-crypto side as a warning against fighting the last war. The public debate over "banning encryption" is a fog: while activists rebut a straw man with 1990s arguments, the plausible regulatory road runs through vendor pressure, weakened defaults, metadata retention, lawful hacking, and mandated plaintext — none of which requires banning anything.

## What the Essay Argues

Logan opens with the post-San-Bernardino wave of political statements against end-to-end encryption and the reflexive replay of Crypto War 1 responses. His first move is a theory of politics as strategic communication: legislation stands trial "in the court of public opinion", trades off interests, and is neither dogmatic nor bound to technical fact. Against that background he dismantles the three standard absolutist arguments — "It is impossible to regulate cryptography." or "Banning cryptography is like banning math."; that regulation would destroy e-commerce; that any regulation makes cryptography insecure. The first confuses knowledge with use: "It is behavior that is regulated, not thought." And enforcement never needed to be total:

> "We would agree if the goal were total enforcement. However, almost no laws are completely enforced. All complete enforcement requires totalitarian systems."
>
> — Jonathan "smuggler" Logan, *Fog of CryptoWar*

The middle of the essay is a technical field map of every plaintext-recovery mechanism — outlawing or manipulating algorithms, undermining protocols, key/content escrow, key recovery, mandatory key discovery, insecure defaults, remote access, mandatory backdoors, lawful hacking, targeted updates — with the security, cost, and coordination problems of each. The hard-handed 1990s approaches are ruled out by their own risks. What remains, Logan predicts, are five realistic routes: defense of metadata access; nudging vendors toward less secure defaults (hidden key verification, cloud backups the vendor can read); lawful hacking under multi-jurisdictional frameworks; delivery of police trojans through the update channel; and result-driven mandates that vendors "provide plaintext" on request, enforced by fines and app-store removal — exploiting the chokepoint that a handful of platform operators control operating systems, hardware, and application delivery. The conclusion reframes the stakes: "we are facing a change in the views and guarantees of confidentiality", and the debate must widen to vendor neutrality, device integrity, freedom of processing, and a right to digital self-defense.

## Why It Matters in This Wiki

This is the wiki's primary source on [[crypto-wars-2|Crypto War 2]] and the corrective to the folk memory of Crypto War 1 that [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] records: the state did not stop wanting plaintext when it lost on export controls — it changed tactics, and the winning cypherpunk arguments of the 1990s are precisely the ones Logan shows losing now. The essay's platform-chokepoint analysis gives the [[cypherpunk|cypherpunk]] program its modern target list — verifiable builds, single-source-of-record software delivery, independence from app stores — and its enforcement realism ("Regulation does not require perfect adherence") is the strongest internal challenge to the wiki's more triumphalist censorship-resistance material: unstoppable in principle is not unstopped in practice.

## See Also

- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - Crypto War 1, whose winning arguments this essay retires
- [[cypherpunk|Cypherpunk]] - the movement whose strategy the essay redirects
- [[censorship-resistance|Censorship Resistance]] - the property whose practical limits the essay stress-tests
- [[crypto-wars-2|Crypto Wars 2]] - The second state campaign for plaintext (2010s–present): not banning encryption but compelling vendors — signed attack code, liability levers, detection orders — at the platform chokepoints.
