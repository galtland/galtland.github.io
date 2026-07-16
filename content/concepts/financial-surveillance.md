---
title: "Financial Surveillance"
volatility: warm
category: concept
compiled-from: conversation
created: 2026-07-16
updated: 2026-07-16
verified: 2026-07-16
confidence: high
tags: [financial-surveillance, kyc, aml, fatf, cbdc, financial-privacy, censorship-resistance, chokepoint, monero]
aliases: [Financial Surveillance, KYC/AML, know-your-customer, anti-money-laundering, financial-privacy]
summary: "Financial surveillance is the regime that turns the payment system into a monitoring and control system: know-your-customer (KYC) rules that force every account to a verified identity, anti-money-laundering and counter-terrorist-financing (AML/CTF) rules that deputize banks and payment providers as reporting agents, and the global standard-setting of the Financial Action Task Force (FATF) that harmonizes both across borders. Because it operates through the intermediaries who stand between people and their money, it needs no direct search of anyone — the chokepoints report by default, and the same chokepoints can freeze or debank a disfavored party. Central-bank digital currencies are its potential culmination, folding identity, monitoring, and programmable control into the money itself. The libertarian objection is that this inverts financial privacy from a norm into a suspicious exception; the technical answer is fungible, self-custodied money that removes the reporting intermediary."
short: "The KYC/AML/FATF regime that turns the payment system into surveillance and control by deputizing intermediaries; CBDCs are its culmination, fungible self-custody the counter."
---

# Financial Surveillance

> Financial surveillance is the standing regime that makes the financial system a surveillance system. It does not work by searching individuals but by conscripting the *intermediaries* — banks, exchanges, payment processors — into identifying, monitoring, and reporting their customers by default. The same architecture that watches the flow of money can also stop it, which is why financial surveillance and financial *control* are two faces of one design.

## Surveillance by intermediary

The regime has three layers. **Know-your-customer (KYC)** rules require every regulated financial institution to tie each account to a verified legal identity, abolishing the anonymous account. **Anti-money-laundering and counter-terrorist-financing (AML/CTF)** rules then deputize those institutions as watchers: they must monitor transactions, file suspicious-activity and currency-transaction reports, and — under the *travel rule* — pass identifying information along with transfers. The **Financial Action Task Force (FATF)**, an intergovernmental body, writes the recommendations that harmonize these rules worldwide and grades countries on compliance, so the standard propagates without any single legislature enacting it.

The elegance, from the state's side, is that it needs no warrant and no direct search. The intermediary reports *by default*, and the citizen who wants to transact through the formal system has already consented to being watched as the price of entry. Financial privacy, historically the norm, is thereby redefined as a red flag: the desire to transact unmonitored is treated as presumptive evidence of wrongdoing.

## Chokepoints and debanking

Because the regime runs through intermediaries, whoever controls the intermediaries controls access to the money. The on- and off-ramps between the banking system and the wider economy are **chokepoints**, and a chokepoint that can report can also refuse. This is the mechanism behind *debanking* and financial deplatforming: a person, business, or cause can be cut off from payment rails not by a court judgment but by a bank's risk decision, a processor's terms of service, or informal regulatory pressure on the intermediary. It is the [[political-means-and-economic-means|political means]] applied to money — control exercised through the gatekeeper rather than the gate — and the reason [[censorship-resistance|censorship resistance]] is a monetary property and not only a communications one.

## CBDCs as the culmination

A [[hillebrand-on-cbdcs|central-bank digital currency]] would fold all three layers into the money itself. Where today's surveillance is assembled from reports filed by many private intermediaries, a retail CBDC issued as a direct central-bank liability could give the issuer a single, real-time view of balances and payments — and, if it carried programmable rules (expiry dates, category restrictions, holding caps, identity gating), the power to *shape* spending, not merely observe it. That is why the wiki treats the CBDC debate as the sharp edge of financial surveillance: it is the point at which monitoring and control stop being two systems and become one.

## The counter: fungibility and self-custody

The technical answer to financial surveillance is money that removes the reporting intermediary. [[self-custody|Self-custody]] takes the balance out of the deputized bank; [[fungibility|fungibility]] — the interchangeability that a transparent ledger erodes and privacy technology restores — is what keeps a monitored history from following a coin. [[monero|Monero]] makes untraceability the default, and [[coinjoin|CoinJoin]] composes privacy over [[bitcoin|Bitcoin]]'s pseudonymous base. Physical cash is the same principle in analog form, which is why proposals to cap or retire it belong to the same story. None of these abolishes the state's interest in watching money; they raise the cost of watching and restore the default the regime reversed.

## Place in This Wiki

Financial surveillance is where the wiki's [[privacy-and-cryptography|privacy]] and [[money-and-banking|money]] threads meet. It is the concrete institutional stake behind the abstract case for [[hard-money|hard]], private money: not merely that state money can be inflated, but that state-intermediated money can be watched and switched off. It is the adversary the cypherpunk tradition built its tools against, and the reason the wiki reads privacy coins and self-custody as political technologies rather than conveniences.

## See Also

- [[hillebrand-on-cbdcs|CBDCs]] - the potential culmination of the regime in programmable state money
- [[censorship-resistance|Censorship Resistance]] - the property that answers the chokepoint
- [[fungibility|Fungibility]] - the monetary property surveillance erodes and privacy tech restores
- [[monero|Monero]] - default-private money as the direct counter
- [[coinjoin|CoinJoin]] - on-chain privacy over a transparent ledger
- [[self-custody|Self-Custody]] - removing the deputized reporting intermediary
- [[political-means-and-economic-means|Political Means and Economic Means]] - control through the gatekeeper as the political means applied to money
- [[privacy-and-cryptography|Privacy and Cryptography]] - the hub this regime is the adversary of
