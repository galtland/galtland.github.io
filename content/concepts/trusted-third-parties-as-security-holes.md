---
title: "Trusted Third Parties as Security Holes"
volatility: warm
category: concept
created: 2026-05-27
updated: 2026-05-27
tags: [cypherpunk, security, cryptography, trusted-third-parties, protocols, intermediaries]
aliases: [Trusted Third Parties Are Security Holes, TTP security holes, TTP minimization]
confidence: medium
summary: "Nick Szabo's protocol-design thesis holds that trusted intermediaries concentrate risk because they become targets, bottlenecks, and coercion points. Good protocol design should identify, price, minimize, or eliminate those dependencies."
short: "Szabo's thesis that trusted intermediaries are not neutral conveniences: they concentrate risk, cost, and coercive leverage inside protocol design."
---

# Trusted Third Parties as Security Holes

> [[trusted-third-parties-as-security-holes|Trusted Third Parties as Security Holes]] is Nick Szabo's protocol-design thesis that an intermediary a protocol must trust is also a vulnerability. The point is not that every institution is worthless, but that dependence on a trusted third party must be treated as a costly security hole rather than assumed away.

## The Thesis

Szabo's 2001 essay begins from commercial security: privacy, integrity, protection of property, and detection of breach. A security hole is any weakness that raises the risk of violating those goals. On that definition, a protocol that relies on a trusted third party has introduced a vulnerability into the design. The designer may still decide that the vulnerability is acceptable, but it must be named, costed, and minimized.

This reframes "trust" as an engineering claim. In ordinary speech trust can mean well-informed reliance. In protocol design, Szabo argues that it often means "is vulnerable to." That substitution strips away the comfort word. A party who can certify, censor, reverse, disclose, freeze, reorder, or fail is not merely helping the protocol. It is also a target, bottleneck, and possible point of coercion.

## Certificate Authorities and DNS

Szabo's central concrete case is public-key infrastructure. Early public-key protocols often assumed a certificate authority that would vouch for identity. In deployed SSL and S/MIME systems, that assumption became a requirement. The certificate authority then became an arbiter of who could use the protocol, with high fees, bureaucratic renewal, identification exposure, and institutional fragility.

The essay treats DNS similarly. Most of the TCP/IP stack works through protocol negotiation among nodes, but DNS depends on a centralized hierarchy of naming authorities. That makes it a recurring site of disputes, failures, and institutional pressure. The same pattern appears in other settings: key escrow turns access to private communications into a state or institutional capability; custodial exchanges make balances easier to hold and transfer, but also easier to freeze, hack, surveil, or regulate through one account database.

## Why TTPs Are Tempting

Trusted third parties remain attractive because they lower some visible design costs. It is easier to assume a certificate authority, exchange, escrow agent, auditor, mint, registry, or compliance office than to build a protocol that handles the same problem with cryptography, distributed consensus, or direct user verification. The institution also has a business incentive to occupy the trust position. Szabo names the temptation to become the next Visa or Verisign as part of the political economy of protocol design.

The result can invert the cost structure. Software protocol costs often fall over time. Institutional costs persist: staff, lawyers, auditors, compliance processes, liability, dispute handling, and reputation management. A protocol that looked simpler because it assumed a trusted party may become more expensive and fragile than a more complex protocol that minimized that party from the start.

## TTP-Minimizing Design

Szabo's method is not "trust nobody" as a slogan. It is a design discipline. First, identify every trusted party and what each one is expected to do. Second, estimate the cost and risk of that dependence. Third, change the protocol so the most costly or dangerous dependencies are reduced, automated, distributed, or removed.

This is where the essay connects to [[smart-contracts|Smart Contracts]]. Smart contracts aim to put some contractual performance into protocols rather than leaving every step to courts, custodians, or collection agencies. It also connects to [[proof-of-work|Proof of Work]], where Satoshi later uses an expensive, publicly verifiable cost function to replace a trusted timestamping or double-spend authority. Both are examples of the same cypherpunk instinct: where possible, substitute verifiable protocol behavior for institutional discretion.

## Relation to Libertarian Legal Theory

The thesis also has a political edge. A trusted third party can be coerced because it is legible. It has offices, staff, licenses, bank accounts, legal duties, or administrators. That makes it easier for states or litigants to turn a private security dependency into a public control point. The point is close to [[market-anarchism-and-private-law|Market Anarchism and Private Law]]: legal and commercial order need not always be supplied by monopolistic public authority, but institutional substitutes must themselves be analyzed for power concentration.

The property-rights connection is narrower. [[nonaggression-and-property-rights|Nonaggression and Property Rights]] asks when control is legitimate. Szabo asks where control is technically concentrated. A protocol can reduce opportunities for aggression or breach by reducing the number of actors with unilateral power over other people's property, communication, or identity.

## Limits

The confidence level is medium because the article applies Szabo's single essay across a family of protocol-design cases. Szabo himself does not claim that every trusted party can be eliminated. His conclusion allows small holes to remain unplugged when the cure is worse than the risk, and it allows existing institutions to remain valuable in domains where they are already specialized. The thesis is strongest as a warning against hidden institutional assumptions: every trusted third party is a security hole, but not every security hole has the same cost.

## See Also

- [[nick-szabo|Nick Szabo]] - author of the 2001 essay and related protocol-design work
- [[smart-contracts|Smart Contracts]] - protocol-embedded contract performance that can reduce reliance on intermediaries
- [[proof-of-work|Proof of Work]] - cost-function mechanism that can replace trusted timestamping or minting assumptions
- [[public-key-cryptography|Public-Key Cryptography]] - primitive whose deployment created certificate-authority design problems
- [[market-anarchism-and-private-law|Market Anarchism and Private Law]] - legal-order frame for non-state enforcement and private institutions
- [[nonaggression-and-property-rights|Nonaggression and Property Rights]] - property framework affected by concentrated control over assets and identities
- [[bitcoin-whitepaper|Bitcoin Whitepaper]] - later peer-to-peer electronic cash design that removes the trusted mint from double-spend prevention
- [[satoshi-nakamoto|Satoshi Nakamoto]] - pseudonymous designer who adapted this anti-intermediary pattern in Bitcoin
- [[cypherpunk|Cypherpunk]] - topic map for the cypherpunk thread that this article participates in

- [[lightning-network|Lightning Network]] - non-custodial scaling design that avoids payment hubs as trusted custodians
- [[hal-finney|Hal Finney]] - RPOW and early Bitcoin participant working in the anti-trusted-third-party lineage
- [[are-bitcoins-ownable|Are Bitcoins Ownable?]] - property-theory paper on Bitcoin, legal remedies, and protocol limits without trusted reversal authorities

## Sources

- [Trusted Third Parties Are Security Holes](https://nakamotoinstitute.org/library/trusted-third-parties/) - Szabo's 2001 argument for TTP minimization, with certificate authority, DNS, trust terminology, and protocol-design examples
