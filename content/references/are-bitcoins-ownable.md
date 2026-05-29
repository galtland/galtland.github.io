---
title: "Are Bitcoins Ownable?"
volatility: warm
category: reference
created: 2026-05-28
updated: 2026-05-28
tags: [konrad-graf, bitcoin, property-rights, legal-theory, intellectual-property, austrian-economics, cypherpunk, rival-goods]
aliases: [Are Bitcoins Ownable, Are Bitcoins Ownable? Property Rights IP Wrongs and Legal-Theory Implications, bitcoin ownability]
confidence: medium
summary: "Konrad Graf's 2013 paper applies action-based property theory to Bitcoin, arguing that bitcoin can be analyzed as rival and potentially ownable without collapsing into intellectual-property claims over copyable patterns."
short: "Graf's action-based property-theory analysis of Bitcoin ownership, keys, UTXOs, trespass by hacking, double spending, fungibility, and IP limits."
---

# Are Bitcoins Ownable?

> [[are-bitcoins-ownable|Are Bitcoins Ownable?]] is Konrad Graf's action-based property-theory paper on Bitcoin, rival goods, intellectual-property errors, hacking, double spending, fungibility, and legal remedies. It treats bitcoin as a novel property-theory test case rather than a simple ledger-entry metaphor.

## Question and Scope

Graf asks whether bitcoin can be analyzed with property-rights concepts or whether doing so repeats the intellectual-property mistake of treating nonrival patterns as owned things. The paper is explicitly legal-theoretical, not a survey of positive-law classifications in particular jurisdictions.

The confidence level is medium. Graf's argument is rigorous within its libertarian and Misesian property-theory frame, but it is a minority reading relative to mainstream legal academia and should be treated as one specialized interpretation.

## Action-Based Property Theory

Graf works from action-based jurisprudence. Legal theory, in this frame, concerns when force can be justified in response to rights violations. It must distinguish rightful ownership from mere possession and legal claims from broader ethical judgments.

The paper rejects intellectual-property reasoning because ideas, methods, and digital copies are nonrival. Assigning rights to nonrival goods creates artificial scarcity and conflicts with ownership of scarce goods. That places the paper next to [[nonaggression-and-property-rights|Nonaggression and Property Rights]] and [[market-anarchism-and-private-law|Market Anarchism and Private Law]].

## Keys, Ledger Entries, and UTXOs

Graf's central distinction is that owning a key is not the same as owning a bitcoin, and calling bitcoin "just a ledger entry" does not explain what the ledger records. Cryptographic keys are copyable data strings. Bitcoin units are specific spendable outputs that can be spent successfully only once.

This is why Graf treats bitcoin as rival without being material or spatial. A user can control a particular UTXO with the relevant signing key, but two parties cannot both spend the same UTXO for incompatible purposes. The blockchain can show effective control or possession; it cannot by itself show whether the possessor is a rightful owner, thief, borrower, fraud victim, or brain-wallet sweeper.

## Trespass, Double Spending, and Brain Wallets

In ordinary theft-by-hacking cases, Graf argues that bitcoin ownability may be practically unnecessary. If an attacker trespasses on a victim's computer, copies wallet material, and transfers coins, the legal claim can rest on trespass and resulting damages even if bitcoin's ownability remains disputed.

Double spending is different. It is payment fraud using the payer's own inputs, not direct theft of another party's bitcoin. Brain-wallet sweeping is harder still: weak phrases can be independently generated without trespassing on anyone's device. Graf uses that case to show where the ownability question might matter most.

## Fungibility and Limits

The paper also rejects the idea that miners, nodes, or other infrastructure providers acquire legal obligations to reverse thefts. They do not know the legal nature of transactions, cannot identify parties from within the protocol, and cannot transfer coins for which they lack keys.

Fungibility creates another limit. Bitcoin has traceability, but treating every later holder of a tainted output as directly obligated to return specific units could undermine money-like use. Graf therefore treats restitution as usually a claim against the wrongdoer, not a general duty imposed on the network.

Graf's tentative answer is that bitcoins appear ownable because they are controllable, exclusively appropriable, rival, and specified as UTXOs. Yet he also stresses how often that answer does not decide real cases. Many enforceable claims can be resolved through trespass, fraud, duress, and restitution without making bitcoin ownability do all the work.

## See Also

- [[nonaggression-and-property-rights|Nonaggression and Property Rights]] - normative property framework used by Graf's argument
- [[market-anarchism-and-private-law|Market Anarchism and Private Law]] - private-law context for action-based legal reasoning
- [[crypto-anarchy|Crypto Anarchy]] - movement context for cryptographic alternatives to legal institutions
- [[smart-contracts|Smart Contracts]] - Szabo's legal-protocol bridge discussed in Graf's context
- [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] - anti-intermediary design rule adjacent to crypto-anarchic law
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - Bitcoin protocol source behind UTXOs, signatures, and double-spend prevention
- [[public-key-cryptography|Public-Key Cryptography]] - key-control primitive underlying the paper's ownership analysis
- [[nick-szabo|Nick Szabo]] - smart-contracts and Bit Gold author cited in the paper's legal-technical context
- [[austrian-economics|Austrian Economics]] - Misesian action-theory background for Graf's jurisprudence
- [[cypherpunk|Cypherpunk]] - technical-political setting for Bitcoin and crypto-anarchic property questions
- [[intellectual-property|Intellectual Property]] - The scarcity-based Austrian critique of intellectual property (Kinsella, Rothbard): pro...

## Sources

- [[2026-05-28-are-bitcoins-ownable|Are Bitcoins Ownable? Property Rights, IP Wrongs, and Legal-Theory Implications]] - Graf's paper on action-based property theory, bitcoin ownability, trespass by hacking, double spending, brain wallets, fungibility, and rival goods
