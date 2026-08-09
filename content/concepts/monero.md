---
title: "Monero"
volatility: warm
category: concept
created: 2026-07-15
updated: 2026-08-09
verified: 2026-07-15
tags: [monero, zcash, privacy-coins, fungibility, ring-signatures, zk-snarks, cryptonote, zerocash, stealth-addresses, ringct, censorship-resistance, cypherpunk, digital-cash]
aliases: [Monero, XMR, Zcash, ZEC, privacy coins, privacy-coins]
confidence: medium
short: "Monero makes privacy mandatory so every coin stays fungible; Zcash reaches the same goal via optional zk-SNARK shielding — two privacy models, one fungibility thesis."
summary: "Monero is the largest cryptocurrency in which privacy is mandatory rather than optional: descended from Nicolas van Saberhagen's 2013 CryptoNote design and launched in 2014, every transaction hides its sender among decoys via ring signatures and pays to a one-time stealth key, so no coin carries a legible, blacklistable history. This makes Monero fungible by construction: every output is a candidate decoy in someone else's ring, so no coin carries a legible history an exchange or chain-analysis firm could read and taint — though the per-transaction anonymity set is bounded to the ring, currently sixteen, not the whole chain. Zcash, the 2016 deployment of the Zerocash zk-SNARK scheme, pursues the same fungibility goal by the opposite route: cryptographically stronger hiding of origin, destination, and amount, but only for users who opt into its shielded pool, leaving a thinner anonymity set. The article argues the two are one goal by two designs — mandatory ambiguity versus optional cryptographic shielding — both realizing Chaum's untraceable digital cash without a trusted bank, and both now contested by regulatory pressure and de-anonymization research."
---

# Monero

> Monero is the largest cryptocurrency in which privacy is not a feature you switch on but the only way the money moves. Descended from the 2013 CryptoNote design, every Monero transaction hides its sender among decoys and pays out to a one-time key, so no coin carries a legible history and none can be singled out and refused. That is the whole point: a money whose units cannot be told apart is a money whose units cannot be blacklisted. Zcash reaches for the same end by the opposite means — near-perfect cryptographic hiding, but only for the users who opt in. Two privacy models, one goal, and a trade-off between them that decides how much fungibility each one actually delivers.

## Money that is private by default

Monero descends from [[cryptonote-whitepaper|CryptoNote]], the 2013 protocol by the pseudonymous Nicolas van Saberhagen, and launched in 2014, originally as a fork of the first CryptoNote coin, Bytecoin. CryptoNote set out two properties any fully anonymous cash system must satisfy: "Untraceability: for each incoming transaction all possible senders are equiprobable" and "Unlinkability: for any two outgoing transactions it is impossible to prove they were sent to the same person." [[bitcoin|Bitcoin]] meets neither — its ledger is public and every transaction traces to a unique origin and recipient — which is why van Saberhagen concludes it is "not an anonymous but a pseudo-anonymous electronic cash system."

Monero's defining decision is to make both properties mandatory. Sender privacy comes from [[ring-signatures|ring signatures]], which prove that one key in a chosen set authorized a spend without revealing which — the real input sits among decoys. Receiver privacy comes from one-time "stealth" destination keys, so no two payments to the same person can be linked on chain. The mathematics belongs to those primitive pages; the system-level consequence is what matters here:

> With a ring signature Bob can effectively hide every input among somebody else's; all possible spenders will be equiprobable, even the previous owner (Alice) has no more information than any observer.
>
> — Nicolas van Saberhagen, *CryptoNote v2.0*

Because privacy is compulsory rather than optional, no transaction stands out as the private one: every output on the chain is a candidate decoy for everyone else's ring, so there is no transparent baseline against which a "shielded" coin looks suspicious. The per-transaction anonymity set is still bounded — a ring of decoys, currently sixteen, not the whole chain — but no coin advertises a legible history that an exchange or chain-analysis firm could read and taint. This is [[fungibility|fungibility]] by construction: Monero does not restore uniform money by scrubbing histories after the fact — it never writes a readable one down.

## A design that keeps moving

The deployed protocol has advanced well past the whitepaper (the specifics that follow are widely documented deployment history, not claims from the papers). RingCT — Ring Confidential Transactions, made mandatory in 2017 — hid transaction *amounts* as well as parties, closing the last plaintext field. A mandatory minimum ring size, raised over the years and currently sixteen, fixed the whitepaper's own admission that a ring of one instantly reveals the spender. RandomX, adopted in 2019, is an ASIC-resistant, CPU-friendly [[proof-of-work|proof of work]] that carries forward CryptoNote's stated goal of closing the gap between ordinary CPU miners and the GPU/FPGA/ASIC hardware that centralizes Bitcoin mining. Bulletproofs shrank range proofs and fees. And a small perpetual tail emission funds ongoing security — a deliberate break from Bitcoin's hard cap.

One nuance cuts against the caricature of privacy coins as absolute black boxes: CryptoNote already builds in voluntary disclosure. The tracking key (a, B) lets an owner hand a third party the power to *audit* incoming transactions without the power to *spend* them. Privacy here is selective, not total — the owner chooses what to reveal, which is the [[praxeology-of-privacy|praxeology of privacy]] distinction between secrecy and control.

## Zcash: the same goal by the opposite road

Zcash is the first deployment (2016) of the [[zerocash|Zerocash]] scheme by Ben-Sasson, Chiesa, Garman, Green, Miers, Tromer, and Virza. Where Monero hides the real input among visible decoys, Zcash uses [[zk-snarks|zk-SNARKs]] to prove a transaction obeys the ledger's rules while "the corresponding transaction hides the payment's origin, destination, and amount." That is cryptographically stronger hiding than a decoy set: there is no ring left on chain to analyze, only a succinct proof that the accounting is valid. And the authors are explicit that this is a fungibility project:

> Anonymous transactions also ensure that the market value of a coin is independent of its history, thus ensuring that legitimate users' coins remain fungible.
>
> — Ben-Sasson et al., [[zerocash|Zerocash]]

The catch is optionality. Zcash keeps transparent (t-address) and shielded (z-address) funds side by side, and for much of its history most value stayed transparent. Strong hiding over a small shielded pool means a *thin* anonymity set — which weakens fungibility precisely where Monero's mandatory design strengthens it. Early Zcash also required a trusted-setup ceremony to generate its parameters, the notorious toxic-waste problem: whoever kept the secret could counterfeit coins undetectably, though not de-anonymize anyone — a risk later protocol work was designed to retire, though not uniformly across pools that were already deployed under their original ceremonies. Viewing keys, like CryptoNote's tracking key, provide selective disclosure. The Zerocash authors reported the scheme was already practical at deployment scale, with sub-kilobyte transactions verifying in a few milliseconds.

## Two privacy models, one goal

Strip away the cryptography and the contrast collapses to a single design axis. Monero chose **mandatory ambiguity**: universal coverage — every transaction private, every output a potential decoy — at the cost of weaker per-transaction hiding, since the real spend is ambiguous only within a bounded ring; early Monero was in fact statistically traceable before mandatory RingCT and larger rings hardened it. Zcash chose **optional cryptographic shielding**: near-perfect hiding for those who use it, but an anonymity set no larger than the shielded pool, and leakage risk whenever value crosses the transparent boundary. Universal-but-softer versus strong-but-partial. Same goal, opposite trade-off — and the trade-off, not the cryptography, is what determines real-world fungibility.

Both are the realization of a decades-old cypherpunk ambition: Chaum's untraceable digital cash *without a trusted bank*. Chaum's DigiCash hid the link between withdrawal and deposit using [[blind-signatures-for-untraceable-payments|blind signatures]] — but only because a central issuer signed the tokens. Monero and Zcash keep the untraceability and delete the bank, replacing institutional discretion with protocol structure. That is the cypherpunk achievement over DigiCash, and it is why these systems belong to the [[cypherpunk|cypherpunk]] lineage rather than the fintech one.

## Why it matters

Fungibility is [[censorship-resistance|censorship resistance]] at the level of the individual unit. A state or exchange that cannot stop the network can still enforce policy by tainting coins — freezing the wrong ones, discounting the suspicious ones — and a coin that can be blacklisted is a coin the gatekeeper still controls, one unit at a time. Default privacy removes the lever outright: there is no history to read, so there is nothing to discriminate against. This is the sense in which a mixing tool like [[coinjoin|CoinJoin]] — opt-in, occasional, detectable — is a partial patch, while default-private money is the property built in. Monero's strongest claim is exactly this narrow, durable one: if a money wants fungibility on a transparent, hostile network, privacy cannot be a rare feature — it has to be the ordinary form of payment.

The stakes reach back further than cryptography. Van Saberhagen closes the CryptoNote paper by invoking currency competition: "Nobel prize laureate Friedrich Hayek in his famous work proves that the existence of concurrent independent currencies has a huge positive effect." A money that is sound at the level of the individual unit — that no third party can selectively refuse — is money denationalized in the strongest sense: not merely issued outside the state, but beyond its power to sort the clean from the dirty.

## Where it is contested

None of this is settled, and the confidence here is medium. Regulators increasingly treat strong on-chain privacy as illicit-finance infrastructure: exchanges have delisted privacy coins in several jurisdictions, the FATF "travel rule" pressures venues to bind identity to transfers, and EU rules bearing on anonymity-enhancing assets have been adopted with future application dates. This page cites no regulatory source, so treat the direction as well attested and every specific instrument, article, and date here as unverified until one is ingested. The pressure lands where the network cannot be stopped but its edges can — the chokepoints of exchanges, custodians, hosted wallets, and payment processors. De-anonymization research is a live thread on both sides — early Monero rings were statistically traceable, and Zcash's shielded pool has leaked information through t→z→t movement patterns. The trusted-setup risk shadowed early Zcash whether or not it was ever exploited. And privacy is a moving contest: analysis improves, protocols harden, and any anonymity set is only as strong as the current design and the number of people sharing it. The thesis holds — privacy is fungibility is unit-level censorship resistance — but the degree to which either coin delivers it is contested terrain, not a finished victory.

## See Also

- [[fungibility|Fungibility]] - the conceptual parent: privacy tools are, at bottom, fungibility tools, and Monero is the case where they are mandatory
- [[ring-signatures|Ring Signatures]] - Monero's sender-privacy primitive, hiding the real input among decoys
- [[zk-snarks|zk-SNARKs]] - Zcash's engine, proving validity while hiding origin, destination, and amount
- [[cryptonote-whitepaper|CryptoNote Whitepaper]] - Monero's design ancestor and source of the two anonymity properties
- [[zerocash|Zerocash]] - Zcash's design ancestor and the DAP scheme it deploys
- [[bitcoin|Bitcoin]] - the transparent, pseudo-anonymous baseline both privacy coins react against
- [[censorship-resistance|Censorship Resistance]] - what unit-level fungibility amounts to when an exchange cannot stop the chain but can still taint coins
- [[coinjoin|CoinJoin]] - Bitcoin's opt-in mixing, the weaker analogue to built-in privacy
- [[proof-of-work|Proof of Work]] - CryptoNote's egalitarian goal, carried into Monero's RandomX
- [[praxeology-of-privacy|Praxeology of Privacy]] - privacy as selective disclosure, the frame for tracking and viewing keys
- [[cypherpunk|Cypherpunk]] - the movement whose untraceable-cash-without-a-bank ambition these coins realize
- [[privacy-and-cryptography|Privacy and Cryptography]] - broader topic map for privacy-preserving systems
- [[money-and-banking|Money and Banking]] - The wiki's money hub: the Austrian theory of money from Menger and Mises through sound money, banking and the business cycle, the fiat system and CBDCs, to Bitcoin as digital hard money.
- [[financial-surveillance|Financial Surveillance]]
- [[silk-road|Silk Road]]

## Sources

- [CryptoNote v2.0 (Whitepaper)](https://cryptonote.org/whitepaper.pdf) - backs the untraceability/unlinkability definitions, Bitcoin's "pseudo-anonymous" limitation, the ring-signature ambiguity that makes all spenders equiprobable, the egalitarian proof-of-work goal, the tracking-key disclosure mechanism, and the Hayek/currency-competition close. Deployment history (RingCT, ring size, RandomX, Bulletproofs, tail emission, launch/fork dates) is widely documented common knowledge, not drawn from this paper.
- [Zerocash: Decentralized Anonymous Payments from Bitcoin](https://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf) - backs the zk-SNARK hiding of a payment's origin, destination, and amount, the explicit link from anonymity to fungibility, the one-time trusted setup, and the sub-kilobyte / millisecond-verification efficiency claims. Zcash's deployment specifics (2016 launch, t/z-address split, Halo 2 in 2022, viewing keys) are common knowledge, not from this paper.
