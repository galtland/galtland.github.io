---
title: "Digital Euro"
volatility: hot
category: concept
created: 2026-07-08
updated: 2026-07-08
verified: 2026-07-08
tags: [digital-euro, cbdc, ecb, holding-cap, programmable-money, two-tier-cbdc, financial-surveillance, legal-tender, european-union]
aliases: [Digital Euro, digital euro, EU CBDC, COM(2023) 369]
confidence: medium
short: "The EU's retail CBDC project: a direct ECB liability with legal-tender status, bank-intermediated access, a holding cap, and a formal ban on 'programmable money' atop plumbing that would enable it."
summary: "Concept page on the digital euro — the EU's proposed retail central bank digital currency (regulation COM(2023) 369 final, tabled June 2023; ECB working assumption: adoption in 2026, first issuance around 2029). The design: a direct ECB liability with legal tender status, distributed through banks in a two-tier architecture with centralised Eurosystem settlement; an ECB-delegated holding limit (the FAQ tests EUR 3,000 per person) with waterfall linkage to bank deposits; a legal prohibition on restrictive 'programmable money' that still permits conditional payments; and a privacy floor that is stronger offline than online. The libertarian reading: the politically decisive powers sit with the ECB, and the cap/conditional-payment plumbing is structurally the surveillance-and-control plumbing, whatever today's prohibitions say."
---

# Digital Euro

> The digital euro is the European Union's proposed retail central bank digital currency: a direct liability of the ECB with full legal-tender status, accessed through commercial banks but settled on centralised Eurosystem infrastructure. Its enabling regulation (COM(2023) 369 final) writes three politically decisive features into the architecture — an ECB-controlled holding cap, mandatory acceptance, and a "not programmable money" clause that nonetheless permits conditional payments — and the whole design turns on where those discretions sit: with the central bank, not the legislature.

## The Design

The proposal, tabled 28 June 2023, hard-codes a **two-tier architecture**: payment service providers remain the customer interface (Articles 13–14 make distribution on request mandatory for banks operating euro payment accounts), while "The digital euro would operate on a centralised settlement platform and the Eurosystem would record and verify all settlements and holdings." Article 4 reserves to the ECB the decision *whether*, *when*, and *in what amounts* to issue; Article 16 delegates **holding limits** to the ECB rather than legislating a number — the ECB's own FAQ tests calibrations "up to EUR 3,000 per person", low enough to be a store-of-value ceiling rather than a wallet bound. A **waterfall / reverse-waterfall** mechanism links each wallet to a bank account so flows above the cap settle through the linked deposit — the design constraint that protects bank funding is built into the money itself.

On control, Article 23 states the headline reassurance — "The digital euro should not be programmable money." — while the ECB glosses the distinction: "The digital euro would never be programmable money, but it could facilitate conditional payments (for example, if a customer buys something online and chooses the option to pay on delivery)." On privacy, the floor is split: online transactions are pseudonymised toward the Eurosystem with PSPs seeing identity data for AML purposes, while offline payments (mandatory "as of the first issuance", Article 24) get a stronger guarantee under Article 37.

## The Libertarian Reading

Three structural points, each independent of the proposal's stated intentions. First, **discretion placement**: issuance volume, the cap, and its calibration all sit with the ECB — the politically decisive choices are lodged in the least accountable institution, revisable without new legislation. Second, **plumbing symmetry**: the infrastructure required to enforce a per-person cap, waterfall settlement, and conditional payments — centralised records of all holdings, identity-linked wallets, transaction-level conditionality — is the same infrastructure required for restrictive programmability and household-level financial surveillance; Article 23 prohibits a use of the machine, not the machine. This is [[hillebrand-on-cbdcs|Hillebrand's total-intervention argument]] instantiated in legislative text. Third, **the cash contrast**: the digital euro is marketed as cash's digital complement, but as [[your-secret-right-to-cash|Your Secret Right to Cash]] argues, cash's defining property was that its privacy and [[censorship-resistance|censorship resistance]] were physically self-enforcing — a legal-tender instrument whose every online movement is recorded on a central platform replaces a physical guarantee with a revocable policy. The offline component's stronger privacy floor is the tacit admission of exactly this difference.

The project's status is live politics: trilogue ongoing, ECB assumption of adoption in 2026 and potential first issuance around 2029 — this page tracks a moving target (volatility: hot).

## See Also

- [[hillebrand-on-cbdcs|Hillebrand on Central Bank Digital Currencies]] - the theoretical frame the proposal instantiates
- [[your-secret-right-to-cash|Your Secret Right to Cash]] - what the "digital complement to cash" does not replicate
- [[censorship-resistance|Censorship Resistance]] - the property at stake in centralised settlement
- [[crypto-wars-2|Crypto Wars 2]] - The second state campaign for plaintext (2010s–present): not banning encryption but compelling vendors — signed attack code, liability levers, detection orders — at the platform chokepoints.
