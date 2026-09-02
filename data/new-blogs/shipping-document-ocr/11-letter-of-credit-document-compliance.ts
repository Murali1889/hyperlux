import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd11: BlogPost = {
  id: "sd-11",
  title: "Letter of Credit Document Compliance Under UCP 600",
  slug: "letter-of-credit-document-compliance",
  excerpt:
    "A shipment arrives exactly as ordered, on time, undamaged, and the bank still refuses payment. One day late on paperwork is all it takes under UCP 600.",
  description:
    "How UCP 600 strict compliance governs letter of credit review, why banks reject single discrepancies regardless of the goods, with real Article 14 rules.",
  metaTag: "Letter of Credit Compliance: UCP 600 Strict Rules",
  content: `
    <p>A seller ships 50,000 kilograms of soybeans, on the correct vessel, to the correct port, three days before the letter of credit's shipment deadline. The buyer receives exactly what was ordered, in good condition, on schedule. And the bank refuses to pay. Not because anything went wrong with the cargo, but because the documents proving the shipment happened were presented to the bank one calendar day past a deadline nobody involved in the actual shipping had thought to track closely. That is not a hypothetical edge case. It is the ordinary, predictable outcome of how letter of credit document compliance actually works under UCP 600, and it surprises exporters constantly because it runs against every instinct a normal commercial relationship trains into you: if you delivered what you promised, you should get paid.</p>

    <p>Letters of credit do not work that way, and understanding exactly why is the difference between a trade finance operation that gets paid reliably and one that spends its margin on rejected presentations, re-submissions, and the interest cost of payment delayed by weeks. This post walks through the actual doctrine, the specific UCP 600 provisions that create it, and a worked example of the single most common way it bites exporters who assumed close enough would be good enough. If you are building or evaluating systems that extract and validate data from bills of lading, commercial invoices, and the other documents that make up a shipping document set as described on our <a href="/documents/shipping-docs">shipping document processing</a> page, this is the rulebook those documents get judged against before a bank ever looks at what actually happened on the water.</p>

    <h2>The rule that makes close enough meaningless</h2>

    <p>UCP 600, the Uniform Customs and Practice for Documentary Credits, is the rulebook published by the International Chamber of Commerce that governs how letters of credit operate worldwide. The current version was approved in October 2006 and took effect on July 1, 2007, replacing UCP 500. It runs 39 articles, and the article that decides whether a bank pays or refuses is Article 14, titled Standard for Examination of Documents.</p>

    <p>Article 14(a) states that a bank must examine a presentation "to determine, on the basis of the documents alone, whether or not the documents appear on their face to constitute a complying presentation." Two phrases in that sentence do all the work. "On the basis of the documents alone" means the bank is not investigating what actually happened at the port, checking with the shipping line, or calling the buyer to ask if the goods arrived fine. "On their face" means the bank is reading the paper, or the electronic record standing in for it, and checking whether what it says lines up with what the credit demands. Nothing about the underlying transaction enters into that examination. This is the doctrine banking and trade finance practitioners call strict compliance: documents must match the credit's terms, not approximately, not in substance, not close enough for a reasonable person to understand what was meant. A single field that does not line up is, in the bank's eyes, indistinguishable from a shipment that never happened at all, because the bank's job under UCP 600 is never to evaluate the shipment. It is to evaluate the paperwork.</p>

    <h2>Why the underlying shipment almost never matters</h2>

    <p>This is not an accident of how banks choose to interpret their role, it is written directly into the rules. UCP 600 Article 4 states that a credit is, by its nature, a transaction separate from the sale or other contract on which it might be based, and that banks are in no way concerned with or bound by that underlying contract, even if the credit refers to it. Article 5 goes further, stating plainly that banks deal with documents and not with the goods, services, or performance to which the documents may relate. Put those two articles together and the logic becomes clear: the letter of credit is not a proxy for the shipment, it is a separate legal instrument that happens to reference one, and the bank's payment obligation is triggered entirely by document compliance, independent of whether the goods described in those documents actually existed, shipped, or arrived in the condition promised.</p>

    <p>That independence principle is what makes letters of credit useful in the first place. A seller shipping goods to a buyer in a country with no prior trading relationship needs payment certainty that does not depend on trusting a stranger's word about product quality, and a buyer needs assurance that payment only flows against evidence the shipment actually happened. Neither party wants the bank adjudicating disputes about cargo condition, that is what inspection certificates, insurance claims, and sale contract remedies are for. The bank's narrow, mechanical role, checking paper against paper, is a feature of the system, not a flaw in it. But it means the seller carries the entire burden of getting the documentation exactly right, because there is no fallback argument available that says "the goods were fine, so the paperwork error should not matter." Under UCP 600, it does matter, every time, regardless of outcome.</p>

    <h2>A worked example: the 21-day rule and a shipment that still gets rejected</h2>

    <p>The clearest way to see strict compliance in action is through UCP 600's default presentation period, set out in Article 14(c). When a letter of credit requires a transport document like a bill of lading but does not specify how many days after shipment the beneficiary has to present documents to the bank, Article 14(c) fills that gap automatically: presentation must happen "not later than 21 calendar days after the date of shipment," and in any event not later than the credit's own expiry date, whichever comes first.</p>

    <p>Here is how that plays out on a real timeline. Say a letter of credit is issued on June 1, requires shipment no later than July 10, sets its own expiry (the final date for presenting documents to the bank) at August 5, and says nothing about a specific presentation period, meaning the Article 14(c) default of 21 days applies. The exporter ships the soybeans on July 8, two days ahead of the shipment deadline, and the ocean carrier issues an on board bill of lading dated July 8. Everything about the shipment itself is clean: correct cargo, correct vessel, correct port, ahead of schedule.</p>

    <table>
      <thead>
        <tr><th>Event</th><th>Date</th><th>Days from shipment</th></tr>
      </thead>
      <tbody>
        <tr><td>LC issued</td><td>June 1</td><td>n/a</td></tr>
        <tr><td>Latest allowed shipment date (per LC)</td><td>July 10</td><td>n/a</td></tr>
        <tr><td>Actual shipment / bill of lading date</td><td>July 8</td><td>Day 0</td></tr>
        <tr><td>Article 14(c) 21-day presentation deadline</td><td>July 29</td><td>Day 21</td></tr>
        <tr><td>LC expiry date</td><td>August 5</td><td>Day 28</td></tr>
        <tr><td>Documents actually presented to the bank</td><td>July 30</td><td>Day 22</td></tr>
      </tbody>
    </table>

    <p>The exporter's documentation team assembles the invoice, packing list, insurance certificate, certificate of origin, and bill of lading, and presents the full set to the nominated bank on July 30. Counting forward from the July 8 shipment date, July 29 is the 21st calendar day, so July 30 is one day past the Article 14(c) deadline. The credit itself does not expire until August 5, a full week later, so there is no question of missing the overall window. But Article 14(c) does not care about the expiry date in isolation, it imposes both limits, and the earlier one controls. The documents are presented on day 22 against a 21-day rule. That is a discrepancy: a stale, late presentation. The bank is entitled to refuse the entire document set on that basis alone, regardless of the fact that the shipment happened three days ahead of the deadline printed in the credit, regardless of the fact that every other document is flawless, and regardless of the fact that the goods are, at that exact moment, sitting correctly loaded on a vessel headed to the right port. One calendar day, on one clock nobody was actively watching, is sufficient.</p>

    <h2>Two documents, two different compliance standards</h2>

    <p>Presentation timing is not the only place strict compliance produces outcomes that feel disproportionate. The description of goods across different documents in the same presentation is held to genuinely different standards under UCP 600, and missing that distinction is one of the more common ways a discrepancy gets introduced without anyone intending it.</p>

    <p>Article 18(c) governs the commercial invoice specifically, and it states that the description of the goods, services, or performance on the commercial invoice "must correspond with that appearing in the credit." Article 14(e), by contrast, governs every other document in the set, stating that in documents other than the commercial invoice, the description of goods "may be in general terms not inconsistent with" the description in the credit. Those are two different legal standards sitting inside the same rulebook, applied to the same shipment.</p>

    <table>
      <thead>
        <tr><th>Document</th><th>Governing article</th><th>Standard applied</th><th>Practical effect</th></tr>
      </thead>
      <tbody>
        <tr><td>Commercial invoice</td><td>Article 18(c)</td><td>Must correspond with the credit's description</td><td>Wording, quantities, and grade must match the LC closely, near verbatim</td></tr>
        <tr><td>Bill of lading, packing list, insurance certificate, certificate of origin</td><td>Article 14(e)</td><td>General terms not inconsistent with the credit</td><td>Shorter or general descriptions are acceptable as long as nothing actively conflicts</td></tr>
      </tbody>
    </table>

    <p>In practice, that means a packing list can describe cargo as simply "soybeans, bulk" even if the letter of credit specifies "50,000 kg Grade 2 Yellow Soybeans, 2026 crop," and that packing list will pass examination, because Article 14(e) only asks that the general description not conflict with the credit. But if the commercial invoice uses that same shorthand, "soybeans, bulk," instead of matching the credit's fuller description, a bank examining under the stricter Article 18(c) standard can flag it as a discrepancy, because the invoice description does not correspond with what the credit specifies. Exporters who assume that because a general description worked on the bill of lading it will also work on the invoice are applying the wrong standard to the wrong document, and it is a mistake that shows up constantly in real presentations.</p>

    <h2>What else typically counts as a discrepancy</h2>

    <p>Late presentation and description mismatches are common, but they sit alongside a broader set of discrepancy categories that recur across LC transactions regardless of industry or commodity. None of these require any doubt about whether the goods shipped correctly, each is a pure paper-against-paper failure.</p>

    <table>
      <thead>
        <tr><th>Discrepancy category</th><th>UCP 600 basis</th><th>Typical example</th></tr>
      </thead>
      <tbody>
        <tr><td>Late or stale presentation</td><td>Article 14(c)</td><td>Documents presented more than 21 days after shipment with no LC override, or after the credit's own expiry</td></tr>
        <tr><td>Goods description mismatch on invoice</td><td>Article 18(c)</td><td>Invoice wording, grade, or quantity does not correspond with the credit's stated description</td></tr>
        <tr><td>Data inconsistency between documents</td><td>Article 14(d)</td><td>Invoice quantity does not match the bill of lading quantity, or dates conflict across documents</td></tr>
        <tr><td>Missing or incorrect endorsement</td><td>Article 14(a)</td><td>An order bill of lading requiring endorsement is presented unendorsed</td></tr>
        <tr><td>Insurance coverage below required amount</td><td>Article 28</td><td>Insurance certificate covers less than the credit's minimum percentage of invoice value</td></tr>
        <tr><td>Shipment terms not matching the credit</td><td>Article 20, Article 14(a)</td><td>Bill of lading shows a port of loading or discharge different from what the credit specifies</td></tr>
      </tbody>
    </table>

    <p>Article 14(d) is worth calling out specifically because it is the closest thing UCP 600 offers to a tolerance for imperfection, and it is narrower than most exporters assume. It states that data in a document, read in context with the credit, the document itself, and international standard banking practice, "need not be identical to, but must not conflict with" data in other stipulated documents. That standard permits reasonable variation in how information is expressed, a date written as "08 July 2026" on one document and "July 8, 2026" on another is not a conflict. It does not permit numbers, quantities, or material facts that actually contradict each other across documents. The bar is "does not conflict," not "is close enough to guess what was meant."</p>

    <h2>The five banking day clock and why a phone call cannot fix a discrepancy</h2>

    <p>UCP 600 Article 16 governs what happens once a bank identifies a discrepancy, and it is built to prevent exactly the kind of informal, judgment-call resolution that might feel fair in an ordinary commercial dispute. Article 16 gives the bank a maximum of five banking days following the day of presentation to determine whether documents comply and to communicate that decision. If the bank finds a discrepancy and intends to refuse, Article 16(c) requires a single notice, given by whatever fast means of communication is available, that states every discrepancy the bank is relying on and what will happen to the documents, whether they are being held, returned, or held pending instructions.</p>

    <p>Two things about that structure matter for exporters. First, the notice has to list every discrepancy at once. A bank cannot refuse on one ground, wait for that to be fixed, and then raise a second ground it had already noticed but held back, Article 16 exists precisely to prevent a bank from stringing a beneficiary along through multiple rounds of piecemeal rejection. Second, and this is the part that surprises people most, if a bank fails to act within that five banking day window or fails to give a proper Article 16(c) notice, Article 16(f) precludes the bank from later claiming the documents were discrepant at all. The clock runs against the bank just as it runs against the exporter's presentation deadline, and missing it has real legal consequences on either side. But none of that changes the underlying standard, once a genuine discrepancy is properly identified and noticed within the window, the bank's refusal to honor the credit is fully within its rights under the rules both parties agreed to when the credit was opened.</p>

    <h2>What happens after a discrepancy is found</h2>

    <p>A discrepancy is not automatically fatal to getting paid, it just removes the automatic obligation. Once a bank issues a proper Article 16 refusal notice, a few paths remain open. The issuing bank can, at its own discretion, approach the applicant, the buyer, and ask whether they are willing to waive the specific discrepancies and accept the documents anyway, which happens often when the underlying business relationship is fine and the discrepancy is genuinely minor from the buyer's perspective. The beneficiary can also correct and re-present the documents, if there is still time left before the credit's expiry date, though in the worked example above, correcting a 21-day presentation deadline that has already passed is not something a resubmission can fix, the underlying timing failure cannot be undone by trying again. Failing either of those, the exporter can fall back on presenting the documents on a collection basis instead, essentially asking the buyer to pay against documents outside the letter of credit mechanism entirely, which removes the bank's payment guarantee and shifts the transaction back onto ordinary trust between buyer and seller. None of these paths restore the certainty the letter of credit was opened to provide in the first place, they are damage control after that certainty has already been lost.</p>

    <h2>Where this connects to document processing</h2>

    <p>Every discrepancy category in the table above is, mechanically, a data comparison problem: does this date fall within this window, does this description match that description under the right standard, does this quantity on one document match that quantity on another. That is exactly the kind of structured extraction and cross-document validation that document intelligence systems are built to automate, checking a <a href="/resources/blogs/bill-of-lading-processing">bill of lading</a> against the letter of credit's shipment and port requirements, confirming a <a href="/resources/blogs/certificate-of-origin-verification">certificate of origin</a> matches the invoice's stated country and commodity, or flagging when shipment terms extracted from a document do not align with the <a href="/resources/blogs/incoterms-clause-extraction">Incoterms clause</a> specified in the credit. The value is not in replacing the bank's examiners, banks will keep applying Article 14 themselves. The value is in catching a stale presentation date or a goods description mismatch before the document set ever leaves the exporter's own office, when there is still time on the clock to fix it, rather than finding out about it in a refusal notice five banking days later with the presentation deadline already gone.</p>

    <p>The soybean example at the top of this post is not a story about careless paperwork. Every individual document in that presentation could have been prepared correctly, checked twice, and still missed the one thing that mattered, a 21-day clock that started ticking the moment the bill of lading was dated, independent of the shipment deadline printed in the credit itself. That is the entire character of strict compliance under UCP 600. It does not ask whether a mistake was reasonable, minor, or irrelevant to the actual trade. It asks whether the documents, on their face, match the credit's terms. When they do not, on the goods description, on a date, on an amount, on an endorsement, the bank's obligation to pay simply does not arise, no matter how correctly the underlying shipment went.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/transforming-financial-services.png",
  featuredImage: "/images/transforming-financial-services.png",
  category: "Logistics",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "letter of credit document compliance",
  secondary_keywords: [
    "UCP 600 strict compliance",
    "letter of credit discrepancies",
    "documentary credit compliance",
    "letter of credit discrepancy examples",
    "bank refusal to pay letter of credit",
    "trade finance document examination",
  ],
  tags: ["logistics", "trade finance", "letter of credit", "UCP 600", "document AI", "OCR"],
  cluster: "logistics",
  faq: [
    {
      question: "What is the strict compliance doctrine under UCP 600?",
      answer:
        "It is the principle that documents presented under a letter of credit must match the credit's terms exactly on their face, as required by UCP 600 Article 14(a), which directs banks to examine a presentation on the basis of the documents alone. A document that is close in substance but not exactly matching can still be rejected as discrepant.",
    },
    {
      question: "Does it matter if the goods were actually shipped correctly?",
      answer:
        "No, not to the bank's payment decision. UCP 600 Article 5 states that banks deal with documents and not with the goods, services, or performance to which the documents relate, and Article 4 establishes that a credit is a separate transaction from the underlying sale contract. A bank's obligation to pay is triggered by document compliance alone.",
    },
    {
      question: "What is the UCP 600 21-day presentation rule?",
      answer:
        "Article 14(c) states that when a letter of credit requires a transport document but does not specify a presentation period, documents must be presented not later than 21 calendar days after the date of shipment, and in any event not later than the credit's expiry date. Missing that window is a discrepancy even if the credit has not yet expired.",
    },
    {
      question: "Why does a commercial invoice get held to a stricter standard than other documents?",
      answer:
        "Article 18(c) requires the goods description on a commercial invoice to correspond with the description in the credit, while Article 14(e) allows other documents, like a bill of lading or packing list, to use general terms as long as they are not inconsistent with the credit. The invoice is checked more strictly than the rest of the document set.",
    },
    {
      question: "How much time does a bank have to reject discrepant documents?",
      answer:
        "UCP 600 Article 16 gives a bank a maximum of five banking days following presentation to determine compliance and to issue a single notice listing every discrepancy it is relying on. If the bank misses that window or fails to give proper notice, Article 16(f) precludes it from later claiming the documents were discrepant.",
    },
    {
      question: "Can a discrepant letter of credit presentation still get paid?",
      answer:
        "Sometimes. The issuing bank can ask the buyer to waive the specific discrepancies and accept the documents anyway, or the beneficiary can correct and re-present documents if time remains before the credit's expiry. If neither option works, the exporter can fall back to presenting on a collection basis outside the letter of credit, which removes the bank's payment guarantee.",
    },
  ],
}
