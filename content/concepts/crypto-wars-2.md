---
title: "Crypto Wars 2"
volatility: hot
category: concept
created: 2026-07-11
updated: 2026-08-07
verified: 2026-07-11
tags: [crypto-wars, going-dark, encryption, apple-fbi, earn-it, chat-control, client-side-scanning, all-writs-act, backdoors, cypherpunk, surveillance]
aliases: [Crypto Wars 2, the second crypto war, Crypto War 2, Going Dark]
confidence: medium
short: "The second state campaign for plaintext (2010s–present): not banning encryption but compelling vendors — signed attack code, liability levers, detection orders — at the platform chokepoints."
summary: "Concept page on Crypto Wars 2: after losing the 1990s war over export controls, key escrow, and code-as-speech, the state's demand for plaintext returned as Going Dark politics — the All Writs Act order compelling Apple to sign attack code against its own customer (2016), the EARN IT Act's Section 230 liability lever that never names encryption, and the EU's chat-control detection orders whose technology-neutrality implies client-side scanning of end-to-end services. The analytical spine is Logan's Fog of CryptoWar: regulation targets behavior not knowledge, needs only partial enforcement, and moves vendors at platform chokepoints — which is why 'you can't ban math' wins arguments and loses the war."
---

# Crypto Wars 2

> [[crypto-wars-2|Crypto Wars 2]] is the second state campaign for plaintext, running from roughly the 2010s to the present. The first Crypto War ended in an apparent rout — export controls collapsed, code was held to be speech, Clipper died — but the demand survived the defeat and returned without the word *ban*. It now arrives as a court order compelling a vendor to sign attack code against its own customers, as a liability lever that never names encryption, and as detection mandates that leave the mathematics untouched while conscripting the endpoint. The battlefield moved from algorithms to intermediaries, and the loss condition moved with it: not a statute against math, but a market in which confidentiality is quietly no longer on offer.

## Going Dark: The Demand Survives Its Defeat

Crypto War 1 — the fight recorded in [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] — closed with strong cryptography legal to publish and ship: export controls were relaxed, key escrow was abandoned, and the [[code-as-speech|Code as Speech]] litigation made prior restraint of encryption source code constitutionally radioactive. What changed in the 2010s was deployment. After the 2013 Snowden disclosures, device encryption and end-to-end messaging moved from activist tooling to shipping defaults on billions of phones — and the FBI and DOJ answered with the Going Dark frame: warrants that issue but return only ciphertext. The San Bernardino attack of December 2015 gave the frame its flagship case, and officials converged across jurisdictions — a UK Home Secretary who appears in Logan's collection of specimens, in his rendering, declaring "End-2-End encryption is completely unacceptable" — the wording is Logan's; this wiki holds no transcript of the remark itself.

The contested point deserves its due: law enforcement is not wrong that strong default encryption changes investigations — a locked phone or end-to-end messenger can defeat a warrant in a way earlier carrier-mediated systems did not. The libertarian and cypherpunk objection is that every proposed remedy changes the security architecture for everyone; and the politically strongest cases for access — terrorism, child exploitation — are precisely the cases most useful for normalizing general-purpose access machinery.

The wiki's field map of this war, [[fog-of-cryptowar|Fog of CryptoWar]], insists the sequel is not a rerun:

> "The goal is not, and cannot be, to snatch strong cryptography from the hands of people. Instead, the current debate is about making the secrets that cryptography protects accessible to law enforcement."
>
> — Jonathan "smuggler" Logan, [[fog-of-cryptowar|Fog of CryptoWar]]

If the demand is plaintext rather than prohibition, the state can lose every argument about banning encryption and still win — through the vendors.

## Apple v. FBI (2016): The Compelled Signature

On 16 February 2016, a federal magistrate, acting ex parte under the All Writs Act of 1789, ordered Apple to provide "reasonable technical assistance" in unlocking the San Bernardino shooter's iPhone 5C — concretely, a signed "Software Image File": a custom iOS build, keyed to that one device, that would bypass the auto-erase function, accept passcodes electronically, and strip the delays between attempts, so the passcode could be brute-forced (the order is preserved here as OCR; quotes advisory). The demand was not for data Apple held — Apple had complied with those warrants. It was: write and cryptographically sign a weakened operating system on command. Tim Cook's answer, published the same day, was blunt: "They have asked us to build a backdoor to the iPhone."

> "The government suggests this tool could only be used once, on one phone. But that’s simply not true. Once created, the technique could be used over and over again, on any number of devices."
>
> — Tim Cook, "A Message to Our Customers"

Cook reached for an analogy to say what such a tool amounts to: "In the physical world, it would be the equivalent of a master key, capable of opening hundreds of millions of locks — from restaurants and banks to stores and homes." And he named the legal vector: "Rather than asking for legislative action through Congress, the FBI is proposing an unprecedented use of the All Writs Act of 1789 to justify an expansion of its authority."

The case never resolved. On 28 March 2016 the order was vacated as moot after the FBI obtained access to the phone through a third party. No precedent was set; the gap was closed by the exploit market instead — lawful hacking, one of Logan's predicted routes.

## EARN IT: The Lever That Never Names Encryption

The EARN IT Act was introduced in 2020 as S. 3398 and never became law; it died in the 116th Congress and has been reintroduced since. What follows describes the bill's mechanism, not operative statute.

The EARN IT Act (S. 3398, 116th Congress, introduced March 2020) is the legislative version of the same maneuver. Its visible machinery is child-protection process: a 19-member National Commission on Online Child Sexual Exploitation Prevention, chaired by the Attorney General, develops "recommended best practices" that providers "may choose to implement". The compulsion sits one section over. Section 6 — *Earning Immunity* — strips Section 230 protection from providers for CSAM claims, exposing them to state prosecution and to civil suits in which the bill substitutes a recklessness standard for the statute's knowledge requirement, unless the provider certifies compliance with the commission's practices — which bind only once Congress enacts a bill containing them under the expedited procedures the Act sets up — or has implemented "reasonable measures". The word encryption appears nowhere in the bill; its rule of construction even disclaims requiring providers to "search, screen, or scan" for the material at all.

That double absence is the contention. On its face nothing forbids end-to-end encryption — the bill's defenders say exactly that. The critics' reading, and this wiki's, is structural: a provider whose encryption blinds it to user content is a provider a plaintiff can call reckless, and the body defining diligence is chaired by the government's chief demander of plaintext; the bill assembles an encryption mandate entirely from liability exposure, deniable at every joint. Immunity is no longer a right; it is earned — and the price-setter wants plaintext.

## Chat Control: Conscripting the Endpoint

The EU proposed the same machine from regulatory parts. COM(2022) 209 final (11 May 2022), "laying down rules to prevent and combat child sexual abuse" — universally, Chat Control — creates detection orders: a "significant risk" finding is the trigger, though the proposal states that "the finding of such a significant risk should in itself be insufficient to justify the issuance of a detection order" and requires that the reasons for the order "outweigh negative consequences for the rights and legitimate interests of all parties affected, having regard in particular to the need to ensure a fair balance between the fundamental rights of those parties". Where that balance is struck, a judicial or independent administrative authority can require a hosting or interpersonal-communications provider to install and operate technologies detecting known and new CSAM, against indicator databases run by a new EU Centre. Grooming detection is narrower: Article 7(7) reaches only providers that qualify as interpersonal-communications services. The proposal insists the obligation is technology-neutral — measures apply "regardless of the technologies used by the providers concerned", precisely to "remain technologically neutral, and avoid circumvention of the detection obligations" — and, in the same recital, praises what it declines to exempt:

> "That includes the use of end-to-end encryption technology, which is an important tool to guarantee the security and confidentiality of the communications of users, including those of children."
>
> — European Commission, *COM(2022) 209 final*, recital 26

An end-to-end encrypted service has no middle where detection can happen. The structural inference — this wiki's reading, and the core of the proposal's public controversy — is that a provider under a detection order must scan on the device, before encryption (client-side scanning), or stop encrypting end to end. The proposal never draws that conclusion itself, though it concedes that grooming detection "requires automatically scanning through texts in interpersonal communications". The drafting pattern will be familiar from the [[digital-euro|Digital Euro]]: a solemn assurance about one use of the machine — encryption is "an important tool"; the digital euro "should not be programmable money" — atop an architecture whose conditional-payment machinery could enable exactly that, which is what makes the prohibition a legal promise about a technical capability rather than the absence of one.

## The Fog: Why the Banning-Math Argument Loses

Logan's essay supplies the spine that joins these episodes, in three moves. First, regulation targets behavior, not knowledge. "Banning cryptography is like banning math." mistakes what the state needs to control: "It is behavior that is regulated, not thought." Speed limits do not erase the idea of driving fast. Second, enforcement never needed to be total:

> "We would agree if the goal were total enforcement. However, almost no laws are completely enforced. All complete enforcement requires totalitarian systems."
>
> — Jonathan "smuggler" Logan, [[fog-of-cryptowar|Fog of CryptoWar]]

"Regulation does not require perfect adherence." It is enough that defaults shift, most comply, and holdouts become conspicuous. Third, the mass market for cryptography flows through chokepoints — operating systems, app stores, update channels — controlled by "a handful of corporations in very few jurisdictions". The state does not need to police users; it needs to move a few vendors. Logan's realistic menu — metadata retention, weakened defaults, lawful hacking, police trojans through the update channel, and result-driven mandates that vendors "make the plaintext of specific messages or device contents available on request" on pain of fines and app-store removal — requires banning nothing.

Every episode above fits the menu. Apple was ordered to turn its signing key — the update channel's root of trust — into an instrument of search. EARN IT moves vendor behavior by liability gradient. Chat Control mandates a result and leaves "the choice of the technologies" to the provider. Nobody banned math; the arguments that won Crypto War 1 have nothing left to grip. For the [[cypherpunk|Cypherpunk]] program the lesson is uncomfortable and clarifying: the [[censorship-resistance|Censorship Resistance]] of protocols is necessary but not sufficient when confidentiality dies by default rather than by decree. The contested ground is now device integrity, software delivery, and control of the endpoint — because, as Logan concludes, "we are facing a change in the views and guarantees of confidentiality".

## See Also

- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - Crypto War 1: export controls, Clipper, and the victory this sequel routes around
- [[fog-of-cryptowar|Fog of CryptoWar]] - Logan's 2017 essay, the analytical spine of this article
- [[code-as-speech|Code as Speech]] - the Bernstein thesis that closed Crypto War 1's publication front — and why the state stopped attacking there
- [[censorship-resistance|Censorship Resistance]] - the property under stress: unstoppable in principle is not unstopped in practice
- [[cypherpunk|Cypherpunk]] - the movement whose target list Crypto War 2 rewrites: defaults, delivery channels, device integrity
- [[digital-euro|Digital Euro]] - the same EU drafting pattern in money: assurances about the machine's use atop mandates for the machine
- [[snowden-disclosures|The Snowden Disclosures]] - June 2013: the hinge event of modern privacy politics — bulk suspicionless surveillance confirmed by the state's own documents, condemned by its own reviewers and courts
- [[tor|Tor]] - The volunteer-run onion-routing overlay: the cypherpunk mix lineage reborn for real-time traffic, and the internet's principal anonymity and censorship-resistance infrastructure.
- [[privacy-and-cryptography|Privacy and Cryptography]] - Topic map of the wiki's privacy-and-cryptography thread: Austrian privacy theory, state surveillance, Bitcoin, and parallel-economy tools.

## Sources

- [Fog of CryptoWar](https://www.cypherpunkbooks.com/book/fog-of-cryptowar) - Jonathan 'smuggler' Logan's 2017 essay on the renewed crypto wars: why backdoor and key-escrow demands recur, the asymmetry between surveillance and privacy
- [Order Compelling Apple, Inc. to Assist Agents in Search (C.D. Cal., 16 February 2016)](https://assets.documentcloud.org/documents/2714001/SB-Shooter-Order-Compelling-Apple-Asst-iPhone.pdf) - Magistrate Judge Sheri Pym's ex parte order
- [A Message to Our Customers (Apple, 16 February 2016)](https://www.apple.com/customer-letter/) - Tim Cook's open letter opposing the FBI's demand (via an All Writs Act order in the San Bernardino case) that Apple build a signed iOS version defeating iPhone
- [EARN IT Act of 2020 (S. 3398, 116th Congress) — bill text](https://www.govinfo.gov/content/pkg/BILLS-116s3398is/html/BILLS-116s3398is.htm) - Full text of S. 3398 (116th Congress, introduced March 2020): the EARN IT Act, conditioning Section 230 immunity for CSAM claims on compliance with commission best practices
- [EU CSAM Regulation Proposal — 'Chat Control' (COM(2022) 209 final)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52022PC0209) - Full text of COM(2022) 209 final (11 May 2022): the EU proposal 'laying down rules to prevent and combat child sexual abuse' — universally known as Chat Control
- [EU Digital Euro Regulation Proposal (COM(2023) 369 final)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52023PC0369) - EU legislative proposal COM(2023) 369 final, tabled 28 June 2023, establishing the digital euro as a direct ECB liability distributed through a two-tier architecture in which credit institutions and other payment service providers handle distribution
