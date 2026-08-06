---
title: "The Snowden Disclosures"
volatility: warm
category: concept
created: 2026-07-11
updated: 2026-08-05
verified: 2026-08-03
tags: [snowden, nsa, section-215, bulk-collection, mass-surveillance, fisa, pclob, aclu-v-clapper, usa-freedom-act, whistleblowing, cypherpunk, privacy]
aliases: [The Snowden Disclosures, Snowden disclosures, Snowden revelations, Edward Snowden, 2013 disclosures]
confidence: medium
short: "June 2013: bulk suspicionless surveillance confirmed by the state's own documents, condemned by its own courts, and answered by the demand to encrypt the network."
summary: "Concept page on the June 2013 Snowden disclosures, built on the official record: the Verizon order revealing bulk telephone-metadata collection under Section 215; the PCLOB report's majority finding the program legally nonviable, constitutionally troubling, and of minimal counterterrorism value (not a single instance, per the Board, in which the program made a concrete difference), over two members' separate dissents; ACLU v. Clapper holding it exceeded the statute; the USA FREEDOM Act ending it; Snowden's European Parliament testimony on the failure of internal channels; and the cypherpunk vindication — Snowden's own prescription was to encrypt the network, and whether governments could compel an exception to that became the second crypto war. Contested ground (espionage-law view, the limits of what the documents proved) flagged honestly."
---

# The Snowden Disclosures

> [[snowden-disclosures|The Snowden Disclosures]] are the hinge event of modern privacy politics. On 5 June 2013 *The Guardian* published a secret court order compelling Verizon to deliver its customers' calling records — everyone's, every day — to the NSA, the first in a cascade of documents provided by contractor Edward Snowden showing that suspicionless, population-scale surveillance was not a paranoid hypothesis but standing policy. What followed is nearly unique in the history of the surveillance state: a majority of the executive's own review board found the flagship program legally baseless and operationally near-worthless, a federal appeals court held it exceeded the statute, and Congress ended it. And the remedy the cypherpunks had prescribed two decades earlier — encryption everywhere, by default — became the demand that shaped the fight that followed.

## What Was Revealed

The first document was a Foreign Intelligence Surveillance Court order directing Verizon to produce "on an ongoing daily basis . . . all call detail records or ‘telephony metadata’ created by Verizon for communications (i) between the United States and abroad; or (ii) wholly within the United States, including local telephone calls." The government soon confirmed that the order was one 90-day slice of a program running since May 2006 — renewed 41 times by the secret court — resting on Section 215 of the PATRIOT Act, which authorizes orders for "tangible things" "relevant to an authorized investigation." The Privacy and Civil Liberties Oversight Board's January 2014 report remains the authoritative public description: "the NSA collects telephone call records or metadata — but not the content of phone conversations — covering the calls of most Americans on an ongoing basis," aggregated into a government database, retained for five years, and queried by chaining "hops" outward from suspect numbers.

A second revelation concerned content. Under Section 702 of the FISA Amendments Act, "the government collects the content of electronic communications, including phone calls and emails, where the targets are reasonably believed to be non-U.S. persons located outside the United States" — sweeping in Americans who talk to, or are mistaken for, foreign targets. Early reports called this collection PRISM, though PCLOB's Section 215 report calls the label imprecise, describing PRISM as "actually the database in which such communications are compiled". The scale question did not survive the government's own confirmations: what PCLOB called "the government's ongoing collection of virtually all telephone records of every American" stopped being deniable, and the argument had to move from *whether* to *lawful*.

## The Official Reckoning

The Privacy and Civil Liberties Oversight Board — a bipartisan board inside the executive branch, working from the classified record — concluded that the haystack had caught approximately nothing:

> "Based on the information provided to the Board, including classified briefings and documentation, we have not identified a single instance involving a threat to the United States in which the program made a concrete difference in the outcome of a counterterrorism investigation. Moreover, we are aware of no instance in which the program directly contributed to the discovery of a previously unknown terrorist plot or the disruption of a terrorist attack."
>
> — Privacy and Civil Liberties Oversight Board, *Report on the Telephone Records Program Conducted under Section 215 of the USA PATRIOT Act* (23 January 2014)

Its first recommendation was blunt — "The government should end its Section 215 bulk telephone records program" — and its reasoning cut on every axis at once:

> "The Section 215 bulk telephone records program lacks a viable legal foundation under Section 215, implicates constitutional concerns under the First and Fourth Amendments, raises serious threats to privacy and civil liberties as a policy matter, and has shown only limited value. As a result, the Board recommends that the government end the program."
>
> — Privacy and Civil Liberties Oversight Board, *Report on the Telephone Records Program Conducted under Section 215 of the USA PATRIOT Act* (23 January 2014)

The Board's deepest point was structural: "permitting the government to routinely collect the calling records of the entire nation fundamentally shifts the balance of power between the state and its citizens." Snowden's less diplomatic summary of the same findings, delivered to the European Parliament, was that "the greatest success the program had ever produced was discovering a taxi driver in the United States transferring \$8,500 dollars to Somalia in 2007."

Then, in May 2015, the Second Circuit held in *ACLU v. Clapper* that "the bulk telephone metadata program is not authorized by § 215." The government's theory — that every American's records are "relevant" to counterterrorism because the database must exist before it can be searched — won in the district court, which dismissed the case and held the statutory claims would fail on the merits anyway, and then collapsed on appeal:

> "We agree with appellants that such an expansive concept of 'relevance' is unprecedented and unwarranted."
>
> — Gerard E. Lynch, *ACLU v. Clapper*, 785 F.3d 787 (2d Cir. 2015)

On the government's reading, the court observed, "it could use § 215 to collect and store in bulk any other existing metadata available anywhere in the private sector, including metadata associated with financial records, medical records, and electronic communications…" — and "we would expect such a momentous decision to be preceded by substantial debate, and expressed in unmistakable language." Weeks later, Congress declined to ratify the bulk reading: the USA FREEDOM Act of June 2015 ended the government's bulk collection of domestic calling records, leaving them with the carriers, reachable only through targeted, court-authorized queries.

## The Failure of Internal Channels

Snowden's stated reasons are on the record in his written testimony to the European Parliament's LIBE inquiry (March 2014). His position was not anti-intelligence — "spying serves a vital purpose and must continue", he told the Parliament, endorsing targeted collection against legitimate suspects. The core of his objection is an argument about who may authorize:

> "Secret laws and secret courts cannot authorize unconstitutional activities by fiat, nor can classification be used to shield an unjustified and embarrassing violation of human rights from democratic accountability."
>
> — Edward Snowden, "Testimony to the European Parliament LIBE Committee" (7 March 2014)

Asked whether he had exhausted internal avenues: "I had reported these clearly problematic programs to more than ten distinct officials, none of whom took any action to address them." As a contractor he sat in a deliberate legal gap — the 2012 whistleblower reform excluded intelligence agencies, and the presidential directive covering the intelligence community exempted contractors: "The result was that individuals like me were left with no proper channels." The precedents were vivid; of prior NSA whistleblowers Wiebe, Binney, and Drake, "All three men reported their concerns through the official, approved process, and all three men were subject to armed raids by the FBI and threats of criminal sanction." And his capability testimony made the stakes concrete as no abstraction could: "without getting out of my chair, I could have read the private communications of any member of this committee, as well as any ordinary citizen."

## The Cypherpunk Vindication

For the movement chronicled in [[cypherpunk|Cypherpunk]] and [[privacy-and-cryptography|Privacy and Cryptography]], nothing in the documents was architecturally surprising. [[timothy-c-may|Timothy May]] and the cypherpunk milieu had argued since the early 1990s that digital infrastructure plus state power yields dragnet surveillance unless cryptography raises its price — a warning long filed under paranoia. The disclosures converted it into evidence: what changed in 2013 was not the claim but its deniability. The wiki's sousveillance reading, [[of-cypherpunks-and-sousveillance|Of Cypherpunks and Sousveillance]], places Snowden — with WikiLeaks — inside the cypherpunk program itself: transparency forced upward, the watchers watched with their own documents. And Snowden's prescription to the Parliament was cypherpunk economics verbatim:

> "The weakness of mass surveillance is that it can very easily be made much more expensive through changes in technical standards: pervasive, end-to-end encryption can quickly make indiscriminate surveillance impossible on a cost-effective basis."
>
> — Edward Snowden, "Testimony to the European Parliament LIBE Committee" (7 March 2014)

"Mass surveillance, passive surveillance, relies upon unencrypted or weakly encrypted communications at the global network level" — so encrypt the network. Whether governments could compel an exception to that became the second crypto war, traced in [[crypto-wars-2|Crypto Wars 2]].

## Contested Ground

What the record establishes should not be overclaimed in either direction. The Board itself was not unanimous: Rachel Brand and Elisebeth Collins Cook filed separate statements, Brand writing that she disagreed "with much of the Report’s discussion and some of its recommendations" — and Cook adding that on her own reading the program "fits within a permissible reading" of FISA and that she disagreed "with the Board’s analysis of the efficacy of the program" — so the statutory, constitutional and limited-value conclusions quoted above are a majority's, not an agency's single voice. Snowden violated secrecy law and disclosed classified programs on his own authority; the espionage-law view holds that clearance-holders do not get a unilateral declassification veto, whatever the outcome, and a Parliament questioner put the harm case — endangered lives, hampered counterterrorism — to him directly. His answer was that "no specific evidence has ever been offered, by any government, that even a single life has been put at risk…". That is a claim about the absence of offered evidence, not a settled adjudication; the justification of the disclosures finally rests on the political judgment that the public's claim to know what was being done to it outweighed the laws he broke.

Nor did the documents prove a Stasi. PCLOB, naming the danger that bulk data "will be misused to harass, blackmail, or intimidate", was careful to add that "the Board has seen no evidence suggesting that anything of the sort is occurring at the NSA." The Second Circuit ruled on statutory grounds and never reached the Constitution; PCLOB found constitutional "concerns", not violations. The libertarian case the disclosures actually support is therefore structural rather than lurid: a state quietly built the standing capability to map every citizen's associations, on a legal theory its own reviewers judged nonviable, with counterterrorism results its own reviewers judged near-nil — and kept it secret. Why it was classified is not something the record here establishes; what the Second Circuit did find is that the theory could not survive the scrutiny it eventually got, because Congress had never authorised the program in the unmistakable terms such a power would require. The abuse is the architecture.

## See Also

- [[cypherpunk|Cypherpunk]] - the movement whose 1990s threat model the documents confirmed
- [[privacy-and-cryptography|Privacy and Cryptography]] - the topic hub: surveillance, its costs, and the cryptographic response
- [[crypto-wars-2|Crypto Wars 2]] - Going Dark: the state's campaign for lawful access to encrypted communications
- [[pgp-and-the-crypto-wars|PGP and the Crypto Wars]] - Crypto War 1: how civilian cryptography became legal to ship
- [[of-cypherpunks-and-sousveillance|Of Cypherpunks and Sousveillance]] - Snowden and WikiLeaks as the cypherpunk counter-move: watching the watchers
- [[surveillance-capitalism|Surveillance Capitalism]] - the commercial dragnet whose infrastructure state collection rides on
- [[julian-assange|Julian Assange]] - Founder of WikiLeaks; founding-generation cypherpunk whose 2006 conspiracy essays theorized leaks as a secrecy tax on unjust regimes

## Sources

- [PCLOB Report on the Telephone Records Program (Section 215) and FISC Operations](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf) - The Privacy and Civil Liberties Oversight Board's 23 January 2014 report on the NSA's bulk telephone-records program conducted under Section 215 of the USA
- [ACLU v. Clapper, 785 F.3d 787 (2d Cir. 2015) — opinion](https://www.govinfo.gov/content/pkg/USCOURTS-ca2-14-00042/pdf/USCOURTS-ca2-14-00042-0.pdf) - The Second Circuit's 7 May 2015 opinion (Lynch, J.) holding that the NSA's bulk telephone-metadata program exceeded the authority granted by Section 215
- [Edward Snowden — Testimony to the European Parliament LIBE Committee (7 March 2014)](https://www.europarl.europa.eu/document/activities/cont/201403/20140307ATT80674/20140307ATT80674EN.pdf) - Snowden's written testimony to the European Parliament's LIBE committee inquiry on mass surveillance (7 March 2014): his account of why he disclosed
