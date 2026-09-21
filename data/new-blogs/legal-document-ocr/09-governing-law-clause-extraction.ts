import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd09: BlogPost = {
  id: "ld-09",
  title: "Governing Law Clause Extraction: Law Isn't Forum",
  slug: "governing-law-clause-extraction",
  excerpt:
    "A governing law clause and a choice of forum clause are different provisions. Extracting one as the other creates jurisdictional risk in lending contracts.",
  description:
    "Why choice of law and choice of forum clauses get conflated in extraction, the doctrine that separates them, and how a pipeline should parse both correctly.",
  metaTag: "Governing Law Clause Extraction: Law Isn't Forum",
  content: `
    <p>A governing law clause and a choice of forum clause are not the same provision, and treating them as interchangeable in a contract extraction pipeline creates a specific kind of risk: a lender or servicer ends up believing a dispute over a defaulted loan agreement will be heard in a courthouse that the contract never actually named, because the extraction tool pulled the state named in the "governing law" sentence and assumed that state was also where litigation would happen. It usually is not a safe assumption. Courts have said this directly and repeatedly, choice of law does not control choice of forum, and the two provisions can point to entirely different states without contradicting each other or violating any rule of contract drafting.</p>

    <p>This is not a pedantic distinction that only matters to litigators. For teams doing <a href="/use-cases/contract-abstraction">contract abstraction</a> on loan agreements, guarantees, and vendor contracts as part of underwriting or portfolio risk review, the governing law field and the venue field feed different downstream decisions, one tells you which state's substantive law determines whether a term is even enforceable, the other tells you where you would have to show up, hire local counsel, and litigate if enforcement becomes necessary. A pipeline that extracts a single "jurisdiction" value covering both questions is quietly discarding information that a risk or legal team will need the moment a dispute actually happens.</p>

    <h2>The legal distinction, stated precisely</h2>

    <p>A choice of law clause, sometimes called a governing law clause, selects which state's or country's substantive law will be applied to interpret the contract and resolve disputes about its meaning and enforceability. A choice of forum clause, also called a forum selection or venue clause, selects where a lawsuit must be filed and heard, which court system has been granted, or in some drafting has exclusively been granted, jurisdiction over disputes. One answers "which rules apply." The other answers "which courthouse enforces them." A contract can specify Delaware law with New York exclusive venue, or Texas law with mandatory arbitration in Chicago, and neither combination is unusual or improperly drafted. Parties choose them independently because the two decisions optimize for different things, predictable substantive rules in one case, a convenient or neutral physical venue in the other.</p>

    <p>The confusion is understandable because the two clauses are drafted in the same section, often the same sentence, an overwhelming share of the time. A typical combined clause reads something like: "This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles, and each party irrevocably submits to the exclusive jurisdiction of the state and federal courts located in New Castle County, Delaware." That single sentence contains two legally distinct provisions stitched together with "and," a governing law clause naming Delaware substantive law, and a forum selection clause naming New Castle County courts as the exclusive venue. A keyword or regex extraction pass looking for "governed by" or "jurisdiction" will often grab the whole sentence as one blob, or worse, grab only the first half and report "governing law: Delaware" while silently dropping the venue commitment that follows it.</p>

    <h2>Why contracts routinely name different states for each</h2>

    <p>Sophisticated commercial parties deliberately decouple the two when their interests diverge. A lender headquartered in New York doing business nationally might insist on New York law because its legal team knows New York contract doctrine well and New York courts have a well developed body of commercial case law, while agreeing to litigate in the borrower's home state courts as a negotiating concession that costs the lender little in practice because the substantive rules deciding the dispute are still New York's. Conversely, a party might accept an unfamiliar governing law in exchange for keeping venue in its own backyard, reasoning that home-court procedural advantages, familiarity with local judges, and lower travel and local-counsel costs offset the risk of unfamiliar substantive law. Neither choice is a drafting mistake. Both are common, rational negotiating outcomes that an extraction system needs to represent as two separate facts, not collapse into one.</p>

    <h2>The doctrine that makes the distinction legally consequential: Restatement Section 187</h2>

    <p>The most concrete anchor for why choice of law clauses get enforced at all in the United States is Section 187 of the Restatement (Second) of Conflict of Laws, the framework most state courts draw on when deciding whether to honor a contract's chosen governing law. Section 187 sets out a two-part test. Under subsection (1), if the contested issue is one the parties could have resolved by writing an explicit term into the contract, courts will apply the chosen state's law essentially as a matter of course. Under subsection (2), which covers issues the parties could not have simply contracted around, the chosen law still applies unless one of two exceptions is met, either the chosen state has no substantial relationship to the parties or the transaction and there was no other reasonable basis for the choice, or applying the chosen state's law would be contrary to a fundamental policy of a state that has a materially greater interest in the issue than the chosen state does. In practice this creates a strong, but not absolute, presumption that a contract's stated governing law will be honored.</p>

    <p>What matters for extraction purposes is that this entire doctrinal test operates on the choice of law clause only. It says nothing about forum. A choice of forum clause is evaluated under a completely separate line of authority, most notably the Supreme Court's 1972 decision in The Bremen v. Zapata Off-Shore Co., 407 U.S. 1, which held that a freely negotiated forum selection clause should be enforced unless the party resisting it can meet a heavy burden of showing enforcement would be unreasonable, unjust, or the product of fraud or overreaching. Two separate legal tests, applied to two separate clauses, decided under two separate bodies of case law. A system that extracts "jurisdiction" as one merged field is implicitly asking a downstream user to apply the wrong legal test to the wrong sentence, or to not realize that two tests are even in play.</p>

    <h2>A statute that shows why states actively compete for the governing law slot</h2>

    <p>New York offers the clearest statutory illustration of why the governing law choice carries independent commercial weight. Under New York General Obligations Law Section 5-1401, parties to a contract covering a transaction of at least two hundred fifty thousand dollars in the aggregate may choose New York law to govern their agreement even if the deal has no other connection to New York at all, no New York party, no New York performance, no New York anything except the words on the page saying "New York law governs." The statute exists specifically to let out-of-state commercial parties access New York's well developed body of contract case law as a matter of predictability, and it works alongside a companion venue statute, Section 5-1402, that allows the same qualifying parties to consent to New York court jurisdiction for the same transactions. Critically, these are two separate sections of the same statutory article, Title 14 of Article 5 of the General Obligations Law is literally titled "Enforceability of Clauses Respecting Choice of Law and Choice of Forum," the legislature treated them as parallel but distinct enforceability questions requiring separate statutory sections, which is a fairly direct signal that the distinction extraction systems need to preserve is not a legal-tech invention, it is baked into how the underlying law itself is organized.</p>

    <h2>Where the two clauses interact in a way extraction cannot ignore: Klaxon and the forum-law feedback loop</h2>

    <p>There is a subtler reason the two fields cannot be merged, which is that the forum you end up in can change which state's conflict of laws rules a court applies in the first place, even when a contract's governing law clause looks clear on its face. Under Klaxon Co. v. Stentor Electric Manufacturing Co., 313 U.S. 487, a 1941 Supreme Court decision, a federal court sitting in diversity jurisdiction must apply the choice of law rules of the state in which it sits, not some independent federal conflict of laws standard. That means the forum a contract selects, or the forum a lawsuit ends up filed in when the forum clause is silent or unenforceable, can determine which state's conflict of laws framework, its own version of something like Section 187, gets applied to interpret the parties' chosen governing law in the first place. A governing law clause is not self-executing in a vacuum. It gets applied by a specific court, in a specific forum, following that forum's own rules about when to honor a contractual choice of law. This is exactly why treating "governing law" and "forum" as one interchangeable data point breaks down at the level of actual litigation mechanics, not just contract drafting semantics.</p>

    <h2>Worked example: parsing a single combined clause into two structured fields</h2>

    <p>Take the following sentence, representative of language found across a large share of commercial loan and vendor agreements: "This Agreement and all disputes arising hereunder shall be governed by and construed in accordance with the laws of the State of Illinois, without giving effect to its conflict of laws provisions, and the parties hereby consent to the exclusive jurisdiction and venue of the state and federal courts sitting in Cook County, Illinois, and waive any objection to such venue including on the grounds of forum non conveniens." A naive keyword extractor sees "governed by," pulls "Illinois," and stops. A slightly better one sees "jurisdiction" and "venue" too, and may either overwrite the governing law field with venue information or concatenate both into an unusable string. Neither output is something a risk team can actually use in a structured field.</p>

    <table>
      <thead>
        <tr><th>Extraction approach</th><th>Governing law field</th><th>Forum/venue field</th><th>Usable for risk modeling</th></tr>
      </thead>
      <tbody>
        <tr><td>Keyword match on "governed by"</td><td>Illinois</td><td>Not captured, field left empty</td><td>No, missing the venue commitment entirely</td></tr>
        <tr><td>Keyword match grabbing whole sentence</td><td>Full sentence text dumped into one field</td><td>Same full sentence duplicated</td><td>No, not machine-usable, requires a human to re-read it</td></tr>
        <tr><td>Clause-role classification with span separation</td><td>Illinois</td><td>Cook County, Illinois, state and federal courts, exclusive, forum non conveniens waived</td><td>Yes, both fields independently queryable and both flag exclusivity and waiver language</td></tr>
      </tbody>
    </table>

    <p>The third row is the actual target output. It requires the pipeline to do two things a keyword pass cannot: first, recognize that a single sentence can contain two functionally distinct legal provisions joined by a conjunction, and second, correctly assign each clause of the sentence, "governed by and construed in accordance with the laws of the State of Illinois" versus "consent to the exclusive jurisdiction and venue of the state and federal courts sitting in Cook County," to the right structured field based on the legal function of the language, not its position in the sentence or the specific verb used.</p>

    <h2>How a detection pipeline should actually disambiguate the two clause types</h2>

    <p>The reliable mechanism is span-level classification rather than sentence-level or clause-heading-level classification. Instead of asking "does this paragraph contain a governing law clause, yes or no," the model needs to operate at a finer grain, identifying the specific span of text that performs the choice of law function and, independently, the specific span that performs the choice of forum function, even when both spans sit inside one sentence with no punctuation boundary between them. This works because the two clause types have reliably distinct linguistic signatures once you look past the shared vocabulary they sometimes borrow from each other.</p>

    <table>
      <thead>
        <tr><th>Signal</th><th>Choice of law clause</th><th>Choice of forum clause</th></tr>
      </thead>
      <tbody>
        <tr><td>Core verb phrase</td><td>"governed by," "construed in accordance with," "interpreted under"</td><td>"submit to jurisdiction," "consent to venue," "brought exclusively in"</td></tr>
        <tr><td>Object of the verb</td><td>"the laws of [state]"</td><td>"the courts of [state/county]," "the state and federal courts located in"</td></tr>
        <tr><td>Common qualifying phrase</td><td>"without regard to conflict of laws principles"</td><td>"exclusive jurisdiction," "waive objection to venue," "forum non conveniens"</td></tr>
        <tr><td>What a court does with it</td><td>Applies Restatement Section 187 style balancing test to decide whether to honor the choice</td><td>Applies Bremen-style reasonableness test to decide whether to enforce the forum selection</td></tr>
        <tr><td>What happens if silent</td><td>Court applies its own state's conflict of laws rules to figure out governing law from scratch</td><td>Ordinary personal jurisdiction and venue statutes control, no contractual override exists</td></tr>
      </tbody>
    </table>

    <p>A production pipeline built this way should output governing law and forum selection as two independent structured fields per contract, each with its own confidence score, each separately flaggable if absent, and each carrying secondary attributes, exclusivity for forum clauses, whether conflict of laws principles are excluded for governing law clauses, since both attributes materially change legal effect even when the named state is identical. A contract naming Delaware law with non-exclusive Delaware venue behaves very differently in a dispute than one naming Delaware law with exclusive Delaware venue and a forum non conveniens waiver, and neither difference is visible if the extraction only records a single jurisdiction string.</p>

    <h2>Why this distinction matters more in lending underwriting than in general contract review</h2>

    <p>A general counsel doing routine vendor contract review might treat "check the box, governing law present" as sufficient for a low-value services agreement. In small business lending and fintech underwriting, the same clause pair feeds decisions with real dollar consequences. A guarantee governed by a borrower-friendly state's law but enforceable only in a distant, borrower-favorable venue changes the practical cost and speed of collection on a defaulted loan in a way that a single merged "jurisdiction: State X" field completely hides from a credit or legal ops team sizing recovery risk across a loan portfolio. Two agreements that both say "New York" in a naive extraction can carry very different collection economics if one names New York law with Texas venue and the other names New York law with New York venue, because the venue is what determines where outside counsel needs to be retained, how fast a judgment can realistically be obtained, and what a workout negotiation's fallback leverage actually looks like. This is the same category of hidden-detail risk that shows up in <a href="/resources/blogs/force-majeure-clause-extraction">force majeure clause extraction</a>, where a clause flagged as merely present without its actual conditions can mislead a risk model just as badly as an absent clause would.</p>

    <h2>What to check in a governing law extraction pipeline before trusting its output</h2>

    <p>Ask first whether the vendor's output separates governing law and forum selection into two distinct fields, or returns one merged jurisdiction value, since a merged value cannot represent the large share of contracts that legitimately name different states for each. Ask second whether the extraction captures exclusivity language, exclusive versus non-exclusive jurisdiction, and forum non conveniens waivers, since these attributes change enforcement mechanics even when the state named is unchanged from one contract to the next. Ask third whether the system was validated against contracts where the two clauses appear in a single unpunctuated sentence, the Illinois example above being a realistic, common pattern, rather than only against contracts with clean separate headings for each provision, since the merged-sentence case is exactly where keyword extraction breaks down. And ask whether the pipeline flags a contract as silent on forum even when governing law is present, rather than assuming forum follows automatically, since under ordinary personal jurisdiction rules an absent forum clause means ordinary venue statutes control rather than the named governing law state automatically becoming the forum too. A pipeline that gets this distinction right on volume gives a lending or fintech legal team something a manual review process struggles to match at scale, structured, independently queryable jurisdiction and venue data across an entire portfolio, the kind of underlying document ingestion that any <a href="/resources/blogs/contract-ocr">contract OCR</a> layer needs to get right before clause classification can even begin. The same enforceability-versus-presence distinction applies to <a href="/resources/blogs/arbitration-clause-extraction">arbitration clause extraction</a>, where a delegation clause can send even a challenge to the contract's validity to an arbitrator rather than a court. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a>.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "Legal",
  date: "September 7, 2026",
  datePublished: "2026-09-07T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "governing law clause extraction",
  secondary_keywords: [
    "choice of law vs choice of forum",
    "forum selection clause enforceability",
    "Restatement Section 187 choice of law",
    "NY General Obligations Law 5-1401",
    "jurisdiction clause extraction contracts",
    "contract abstraction risk clauses",
  ],
  tags: ["legal", "governing law", "choice of forum", "contract abstraction", "clause extraction"],
  cluster: "legal",
  faq: [
    {
      question: "What is the difference between a governing law clause and a choice of forum clause?",
      answer:
        "A governing law clause, also called a choice of law clause, selects which state's substantive law applies to interpret and enforce a contract. A choice of forum clause, also called a venue or forum selection clause, selects where a lawsuit must be filed and heard. They answer different questions and can name different states in the same contract.",
    },
    {
      question: "Can a contract have different states for governing law and forum?",
      answer:
        "Yes, this is common and not a drafting error. A contract might specify Delaware law with exclusive New York venue, or any other combination, because parties often value predictable substantive rules and a convenient litigation venue independently of each other.",
    },
    {
      question: "What legal test decides whether a governing law clause will be enforced?",
      answer:
        "Most state courts apply Section 187 of the Restatement (Second) of Conflict of Laws, which creates a strong presumption that the chosen law applies unless the chosen state has no substantial relationship to the parties or transaction, or applying it would violate a fundamental policy of a state with a materially greater interest.",
    },
    {
      question: "What legal test decides whether a forum selection clause will be enforced?",
      answer:
        "Under The Bremen v. Zapata Off-Shore Co., 407 U.S. 1 (1972), a freely negotiated forum selection clause is enforced unless the party resisting it shows enforcement would be unreasonable, unjust, or the product of fraud or overreaching, a separate legal test from the one applied to governing law clauses.",
    },
    {
      question: "Why does New York General Obligations Law 5-1401 matter for governing law extraction?",
      answer:
        "It allows parties to a transaction of at least $250,000 to choose New York law even with no other connection to the state, and it sits in a statutory article that separately addresses choice of forum in Section 5-1402, reflecting that the two issues are treated as legally distinct even at the statutory level.",
    },
    {
      question: "How should an extraction pipeline handle a sentence that contains both clauses at once?",
      answer:
        "It needs span-level classification that identifies the specific text performing the choice of law function and the specific text performing the choice of forum function within the same sentence, rather than treating the whole sentence as one clause or matching only the first keyword it finds.",
    },
  ],
}
