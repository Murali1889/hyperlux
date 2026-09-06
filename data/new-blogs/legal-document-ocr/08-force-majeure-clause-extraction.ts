import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd08: BlogPost = {
  id: "ld-08",
  title: "Force Majeure Clause Extraction: Why Keywords Fail",
  slug: "force-majeure-clause-extraction",
  excerpt:
    "Force majeure clause extraction is not keyword search. Contracts excuse performance without the term, and similar clauses can carry opposite legal effect.",
  description:
    "Why keyword search misses force majeure and indemnification clauses, the real semantic classification approach, and a worked comparison of two clauses.",
  metaTag: "Force Majeure Clause Extraction: Why Keywords Fail",
  content: `
    <p>Force majeure clause extraction is not the same problem as searching a contract for the phrase "force majeure," and treating the two as interchangeable creates a specific, predictable failure: a meaningful share of commercial contracts excuse a party's performance during a disruption without ever using that Latin phrase at all. They call it "excused performance," "events beyond reasonable control," "unavoidable delay," or simply fold the concept into a broader "no breach" provision. A pipeline that only looks for the literal string "force majeure" will report those contracts as lacking one, when in fact the protection is sitting right there in different words. The same blind spot shows up with indemnification clauses, which frequently appear as "shall be responsible for all costs and expenses arising from" or "assumes full liability for" without the word "indemnify" anywhere in the paragraph.</p>

    <p>This matters directly for lending and fintech workflows built around <a href="/use-cases/contract-abstraction">contract abstraction</a>, where a vendor agreement, a loan guarantee, or a servicing contract gets scanned for risk-relevant clauses as part of underwriting or portfolio review. If the extraction layer under that workflow is keyword matching dressed up as "AI," it will systematically undercount both force majeure and indemnification coverage, and nobody downstream will know the count is wrong because the tool never flags a miss as a miss. It just reports "not found."</p>

    <h2>Why keyword search misses the majority of real force majeure language</h2>

    <p>A force majeure clause exists to do one specific legal job: excuse a party from liability for nonperformance caused by an event outside its control. Lawyers drafting that provision have no obligation to use the term "force majeure" to accomplish it, and in practice a large share do not. Common substitute framings include "neither party shall be liable for any delay or failure to perform resulting from causes beyond its reasonable control," "performance shall be suspended during the continuance of any Act of God," or clauses that simply enumerate qualifying events, war, epidemic, government order, labor stoppage, without a heading or defined term at all. Some contracts fold the concept into an "excused performance" or "suspension of obligations" section that never mentions force majeure by name even once.</p>

    <p>A regex or keyword search built around the literal term, or even a modest list of synonyms, will miss these variants at a rate that scales with how far the drafting style departs from boilerplate. This is not a hypothetical edge case. It is the ordinary output of thousands of different law firms and in-house counsel drafting the same functional provision in their own house style over decades, none of them required to converge on identical vocabulary.</p>

    <h2>The actual mechanism: clause-type classification, not term matching</h2>

    <p>The approach that actually works treats clause identification as a text classification problem, not a search problem. A model is trained to recognize the functional role a paragraph plays in a contract, does it excuse performance during a disruption, does it allocate liability for third-party claims, based on the structure and legal function of the language, not on whether a specific defined term appears in it. In practice this means the model has learned, from a large set of paragraphs labeled by legal experts, what an excuse-of-performance clause looks like as a pattern: a conditional structure ("if X event occurs, then Y obligation is suspended or excused"), a list of qualifying triggering events, and often a notice or mitigation requirement, regardless of whether the paragraph happens to use the words "force majeure," "Act of God," or nothing more specific than "circumstances beyond the reasonable control of the affected party."</p>

    <p>This is meaningfully different from a synonym-expanded keyword list, which still requires someone to have anticipated the specific substitute phrase in advance. A classification model generalizes from the underlying pattern, so it can flag a force majeure equivalent clause built around vocabulary that never appeared anywhere in its training data, because it is not matching against vocabulary, it is scoring the paragraph's function.</p>

    <h2>The dataset that most legal-clause classifiers are actually built or benchmarked against</h2>

    <p>The most concrete, verifiable anchor for how this works in practice is the Contract Understanding Atticus Dataset, known as CUAD, published by the Atticus Project and used widely as a benchmark for legal clause extraction and classification research. CUAD consists of more than 13,000 individual clause labels applied across 510 real commercial contracts, manually annotated by legal experts across 41 distinct categories of clauses that lawyers routinely look for in due diligence and contract review, including indemnification, along with categories such as anti-assignment, change of control, uncapped liability, and limitation of liability. Force majeure style excuse-of-performance language falls within the same family of risk-allocation provisions the dataset was built to help models learn to recognize by function rather than by fixed phrasing.</p>

    <p>What CUAD demonstrates, and why it matters for anyone evaluating a clause extraction vendor's claims, is that the underlying task researchers actually optimize for is retrieval and classification of clause type from raw contract text, not string matching against a defined-term list. A model trained or evaluated against a benchmark like CUAD has to correctly identify the 41 clause categories across contracts drafted in genuinely different house styles, which only works if the model has learned the structural and semantic pattern of each clause type rather than memorizing specific phrasing.</p>

    <h2>The legal doctrine behind the concept, independent of the label used</h2>

    <p>Force majeure as a defined contractual term sits alongside a parallel, older legal doctrine that operates even when a contract never uses the phrase at all. Under the Uniform Commercial Code, Section 2-615, titled "Excuse by Failure of Presupposed Conditions," a seller's delay or non-delivery is not a breach if performance has been made impracticable by the occurrence of a contingency whose non-occurrence was a basic assumption of the contract, or by compliance with a governmental order. Courts applying Section 2-615 generally look at three things: whether the seller assumed the risk of the contingency, whether the contingency's non-occurrence was a basic assumption underlying the deal, and whether its occurrence actually made performance commercially impracticable rather than merely more expensive. A rise in the market price of an input, on its own, does not qualify, because absorbing ordinary price risk is exactly what a fixed-price contract is for.</p>

    <p>The reason this matters for clause extraction is that a contract can rely entirely on this background statutory doctrine and never draft an explicit force majeure clause at all, or it can draft a clause that narrows, waives, or expands what Section 2-615 would otherwise provide. An extraction system that only looks for an explicit clause and treats its absence as "no force majeure protection" is ignoring the statutory layer sitting underneath the contract by default, and conversely a system that flags any excuse language as generically equivalent to that statutory default is ignoring cases where the drafted clause deliberately overrides it.</p>

    <h2>Worked example: two force majeure clauses that look nearly identical but are not</h2>

    <p>Here are two clauses, both plausible, both from real-looking commercial agreements, differing by one structural element.</p>

    <table>
      <thead>
        <tr><th>Element</th><th>Clause A</th><th>Clause B</th></tr>
      </thead>
      <tbody>
        <tr><td>Text</td><td>"Neither party shall be liable for delay or failure to perform due to causes beyond its reasonable control, including acts of God, war, or governmental action."</td><td>"Neither party shall be liable for delay or failure to perform due to causes beyond its reasonable control, including acts of God, war, or governmental action, provided that the affected party gives prompt written notice within five business days and uses commercially reasonable efforts to mitigate the delay."</td></tr>
        <tr><td>Structure</td><td>Self-executing excuse</td><td>Excuse conditioned on notice and mitigation</td></tr>
        <tr><td>Effect if event occurs but no notice is given</td><td>Excuse still applies; the event alone is sufficient</td><td>Excuse can be lost entirely if the five-day notice window is missed, regardless of how severe the underlying event was</td></tr>
        <tr><td>Practical risk</td><td>Low administrative risk, harder for a counterparty to challenge</td><td>Real risk of forfeiting the protection through late paperwork during an actual crisis, when notice deadlines are easiest to miss</td></tr>
      </tbody>
    </table>

    <p>A keyword or term-matching system sees both clauses as "has force majeure clause: yes" and stops there. Both contain the same trigger list, the same core phrase "causes beyond its reasonable control," and neither is more or less findable by string search than the other. But their legal effect diverges sharply the moment an actual disruption happens. Clause A protects a party automatically once a qualifying event occurs. Clause B makes that same protection conditional on a procedural step, prompt written notice within five business days, that has nothing to do with whether the underlying disruption was genuine or severe. A party relying on Clause B who misses that window during an actual emergency, when attention is reasonably elsewhere, can lose the excuse entirely and be back to strict liability for the delay. A proper clause extraction system needs to surface not just "force majeure clause present" but the specific conditions attached to it, because that is where the real risk difference lives.</p>

    <h2>The same blindness applies to indemnification, with an even sharper practical consequence</h2>

    <p>Indemnification clauses suffer the identical keyword problem. Many contracts allocate liability for third-party claims using phrasing like "the Vendor shall bear all costs, expenses, and losses arising from its breach of this Agreement" or "each party assumes full responsibility for claims resulting from its own negligence," without the word "indemnify" appearing anywhere. Functionally these are indemnification provisions. A term-matching extraction tool that searches for "indemnif" as a stem will miss them entirely, again reporting a contract as having no indemnification coverage when it plainly does, just phrased differently.</p>

    <p>The more consequential version of the problem, though, is not whether a clause is found but what its actual scope turns out to be once found, and this is where a second worked comparison is useful.</p>

    <h2>Worked example: duty to defend versus duty to indemnify only</h2>

    <table>
      <thead>
        <tr><th>Element</th><th>Clause C: indemnify only</th><th>Clause D: defend, indemnify, and hold harmless</th></tr>
      </thead>
      <tbody>
        <tr><td>Text</td><td>"Vendor shall indemnify Client against any losses, damages, and liabilities arising from Vendor's breach of this Agreement."</td><td>"Vendor shall defend, indemnify, and hold harmless Client against any claims, losses, damages, and liabilities arising from Vendor's breach of this Agreement."</td></tr>
        <tr><td>When the obligation is triggered</td><td>Generally after liability is established or a loss is actually determined</td><td>As soon as a covered claim is asserted, before any liability is proven</td></tr>
        <tr><td>What is owed</td><td>Compensation for the loss once it is fixed</td><td>Immediate funding of legal defense costs as they are incurred, plus indemnification for any resulting loss</td></tr>
        <tr><td>Cash flow impact during litigation</td><td>Client typically funds its own defense and seeks reimbursement afterward</td><td>Vendor is on the hook to fund Client's defense costs in real time, often before the underlying claim is resolved</td></tr>
      </tbody>
    </table>

    <p>Both clauses read as boilerplate risk allocation, both would be tagged identically by a system that only checks for the presence of indemnification language, and both use overlapping vocabulary. But the duty to defend is treated in contract and insurance law as broader and separately triggered from the duty to indemnify. It typically arises the moment a qualifying claim is asserted against the protected party, independent of whether that claim ultimately succeeds, while a bare duty to indemnify usually does not require payment until liability or a loss amount is actually determined. For a lender or fintech reviewing a vendor's or a borrower's indemnification obligations as part of risk assessment, that timing difference is the entire point: Clause D creates a real-time cash obligation the moment litigation starts, while Clause C creates a contingent obligation that may not require any outlay until a case resolves months or years later. A clause extraction system that reports both as "indemnification clause: present" without flagging whether "defend" appears alongside "indemnify" is missing the detail that actually determines financial exposure.</p>

    <h2>Why this level of detail matters more in lending than in general contract review</h2>

    <p>General corporate contract review often treats clause presence as a checklist item, does the vendor agreement have a force majeure clause, does it have indemnification, yes or no, moving on. In lending and fintech underwriting, the same clauses get pulled into cash flow, guarantee, and counterparty risk models where the specific conditions attached to a clause change the actual number that gets entered into a model. A loan guarantee with a self-executing force majeure clause behaves differently under stress than one requiring five-day notice. A servicing agreement with a defend-and-indemnify clause creates a different near-term liquidity exposure for the servicer than one with indemnify-only language. Extraction that stops at "clause present, yes or no" hands a risk team a false sense of completeness while the detail that actually drives the risk number sits unread in the paragraph underneath.</p>

    <h2>What to check in a clause extraction pipeline before trusting its output</h2>

    <p>Ask first whether the system's force majeure and indemnification detection relies on term matching, including synonym lists, or on a classifier trained to recognize the clause's function from structure and language, since only the latter reliably catches the substitute phrasings covered above. Ask second whether a positive match on either clause type returns just a presence flag or the actual conditions attached, notice periods, mitigation requirements, whether "defend" appears alongside "indemnify," since two clauses that both register as present can carry materially different legal and financial effect, exactly as shown in both worked examples here. Ask third whether the extraction was validated against a real labeled benchmark covering these clause categories, of the kind researchers use CUAD for, rather than against an internal test set the vendor built and graded itself. And ask whether the system distinguishes an explicit drafted force majeure clause from the background statutory excuse doctrine under UCC 2-615 that can apply to a sale-of-goods contract even when no such clause was drafted at all, since treating clause absence as "no protection" ignores a layer of legal reality the contract itself never had to state.</p>

    <p>None of this argues against automating force majeure and indemnification review, the manual alternative, a human reading every clause in every vendor agreement and loan document line by line, does not scale to any real contract volume and is not meaningfully more consistent across reviewers than a well built classifier is across contracts. It is a reason to be specific about what "clause extraction" actually means before relying on its output for risk decisions. The same presence-versus-conditions problem shows up in <a href="/resources/blogs/governing-law-clause-extraction">governing law clause extraction</a> and in <a href="/resources/blogs/arbitration-clause-extraction">arbitration clause extraction</a>, where a clause flagged as merely present without its actual terms can mislead a risk model just as badly as a missed clause. Coverage for legal document workflows more broadly is covered in our <a href="/resources/blogs/legal-document-automation-the-complete-guide-for-modern-law-firms">legal document automation guide</a> and our <a href="/resources/blogs/contract-ocr">contract OCR overview</a>, and the underlying pipeline that turns scanned or PDF contracts into text a classifier can actually read is worth understanding on its own before the classification layer sitting on top of it gets evaluated at all. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-in-finance.png",
  featuredImage: "/images/ocr-in-finance.png",
  category: "Legal",
  date: "September 6, 2026",
  datePublished: "2026-09-06T00:00:00.000Z",
  dateModified: "2026-09-06T00:00:00.000Z",
  last_updated: "September 6, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "force majeure clause extraction",
  secondary_keywords: [
    "indemnification clause extraction",
    "semantic clause classification contracts",
    "CUAD contract dataset",
    "UCC 2-615 excused performance",
    "duty to defend vs duty to indemnify",
    "contract abstraction risk clauses",
  ],
  tags: ["legal", "force majeure", "indemnification", "contract abstraction", "clause extraction"],
  cluster: "legal",
  faq: [
    {
      question: "Why does keyword search fail to find force majeure clauses?",
      answer:
        "Many contracts excuse performance during a disruption without ever using the term \"force majeure,\" instead using phrasing like \"causes beyond reasonable control\" or \"excused performance.\" A keyword search only finds contracts using the literal term or a pre-anticipated synonym.",
    },
    {
      question: "What is the actual technical approach for force majeure clause extraction?",
      answer:
        "Clause-type classification: a model trained on labeled contract paragraphs learns to recognize the functional pattern of an excuse-of-performance clause, conditional structure, triggering events, notice requirements, rather than matching specific vocabulary.",
    },
    {
      question: "What is CUAD and why is it relevant to clause extraction?",
      answer:
        "The Contract Understanding Atticus Dataset is a benchmark of over 13,000 expert-labeled clauses across 510 real commercial contracts spanning 41 clause categories, including indemnification, used to train and evaluate clause classification models on function rather than fixed phrasing.",
    },
    {
      question: "What does UCC 2-615 have to do with force majeure clauses that were never drafted?",
      answer:
        "UCC Section 2-615, Excuse by Failure of Presupposed Conditions, can excuse a seller's performance for goods contracts even when no force majeure clause was drafted at all, provided a qualifying contingency made performance genuinely impracticable rather than merely more expensive.",
    },
    {
      question: "Can two force majeure clauses with the same trigger list have different legal effect?",
      answer:
        "Yes. A clause that conditions the excuse on prompt notice and mitigation efforts can be lost entirely if that procedural step is missed, while a self-executing clause with the same trigger list protects the party automatically once the event occurs.",
    },
    {
      question: "Why does it matter whether an indemnification clause includes the word \"defend\"?",
      answer:
        "A duty to defend is generally triggered as soon as a claim is asserted, requiring the indemnitor to fund legal defense costs in real time, while a bare duty to indemnify typically does not require payment until liability or loss is actually determined.",
    },
  ],
}
