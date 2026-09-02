import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd14: BlogPost = {
  id: "md-14",
  title: "ANSI X12 835 Remittance Advice: The CAS Segments That Matter",
  slug: "835-remittance-advice-processing",
  excerpt:
    "An 835 file arrives fully structured under HIPAA's X12 mandate. Here is the real segment anatomy behind claim payments, and why teams still re-key it.",
  description:
    "The 835 remittance advice is already parsed EDI, not a document to OCR. Real CLP and CAS segment structure, worked arithmetic, and why re-keying still persists.",
  metaTag: "ANSI X12 835 Remittance Advice: CAS Segments Explained",
  content: `
    <p>An 835 file is not raw data waiting to be interpreted. By the time it lands in a provider's inbox, a payer's adjudication engine has already broken every dollar of every claim into a coded, machine-readable explanation: what was billed, what was allowed, what was paid, and exactly why the rest was withheld. It arrives as a HIPAA-mandated ANSI X12 transaction with a fixed segment grammar, the same grammar for every compliant payer in the country. And yet a large share of the healthcare billing workforce spends its day opening 835 files, or the PDF remittance report a clearinghouse generated from them, and typing the numbers back into a practice management system by hand. That gap, between a document that is already structured and a workflow that treats it as if it weren't, is the subject of this post.</p>
    <p>If you work across the wider set of documents that feed a medical billing or lending pipeline, our <a href="/documents/medical-docs">medical document processing</a> page covers the full range, from CMS-1500 claim forms to insurance cards to remittance files like the one covered here. This post goes specifically into the 835: its real segment structure, why its CAS adjustment segments make it the single richest source of denial-reason data anywhere in the billing chain, and why so much of that structured data still gets manually re-keyed anyway.</p>

    <h2>What the 835 actually is, and what it isn't</h2>
    <p>The 835, formally the Health Care Claim Payment/Advice transaction, is one of the electronic transaction sets HIPAA's administrative simplification rules require covered entities to support. Under 45 CFR Part 162, when a health plan sends a provider a remittance advice electronically, it must be sent as an ASC X12 835. This is not a suggestion or an industry best practice. It is a regulatory floor. Every payer that meets its HIPAA obligations produces an 835 with the same envelope structure, the same segment identifiers, and the same underlying code sets, regardless of how many other systems that payer runs behind the scenes.</p>
    <p>That is a meaningfully different starting point than almost every other document in a revenue cycle workflow. A CMS-1500 form has a fixed layout but arrives as a scanned image or a fax. An EOB carries similar information but is designed for a human reader and has no mandated format at all. The 835, by contrast, is designed to be consumed by software first. There is no "reading" it in the way you'd read a PDF. There is only parsing it, correctly or incorrectly, against a schema that has already been published.</p>

    <h2>The envelope: ISA, GS, ST, and BPR</h2>
    <p>Before the claim-level detail, every 835 opens with interchange and functional group envelopes (ISA and GS segments), then a transaction set header (ST). The segment that matters most for reconciliation sits right after that: BPR, the Financial Information segment. BPR carries the total payment amount for the entire transaction, the payment method (check, ACH, or a specific EFT trace), and the payer and payee identifying and banking information. A companion TRN segment carries the trace number, the same number that shows up on the actual bank deposit or check, which is what lets a billing system match "money that arrived" to "remittance detail that explains it" without a human cross-referencing anything.</p>
    <p>This pairing matters because it is exactly where automated posting most often goes wrong at a basic level: a single 835 transaction, tied to a single BPR payment amount, commonly covers dozens or hundreds of individual claims bundled into one payment. The BPR total is the number the bank statement will show. The claim-level detail explaining how that lump sum breaks down lives further down in the file, in the CLP loops.</p>

    <h2>Loop 2100: the CLP segment, one per claim</h2>
    <p>Inside Loop 2100, one CLP (Claim Payment Information) segment appears for every claim the payment covers. CLP carries the patient control number the provider originally submitted, a claim status code, the total charge submitted, the amount the payer actually paid, and the patient's responsibility amount for that claim. It is the anchor record: everything else attached to that claim, service lines, adjustments, remark codes, hangs off this one segment.</p>
    <p>Nested under each CLP is Loop 2110, one SVC (Service Payment Information) segment per billed service line, repeating the same billed-versus-paid structure at line granularity. A claim with four procedure codes on it gets four SVC segments, each of which can carry its own adjustments independent of what happened to the other three lines on the same claim. This is a detail that trips up simpler extraction approaches: claim-level totals and line-level totals both exist in the same file, and conflating the two produces numbers that look plausible but don't reconcile to anything.</p>

    <h2>CAS: the segment that carries the actual "why"</h2>
    <p>The CAS (Claim Adjustment) segment is where the 835 earns its reputation as a denial-data goldmine. Every CAS segment starts with a Claim Adjustment Group Code, one of four values: CO (Contractual Obligation, the discount the provider agreed to under its payer contract), PR (Patient Responsibility, amounts the patient owes), OA (Other Adjustment, a catch-all), and PI (Payer Initiated Reduction, an adjustment the payer applied unilaterally, often pending more information). After the group code, a CAS segment carries up to six repeating "adjustment trios," each one a Claim Adjustment Reason Code (CARC) paired with a dollar amount and, optionally, a quantity. A single CAS segment can therefore explain several distinct reasons a claim was reduced, rather than collapsing everything into one lump variance.</p>
    <p>CARC codes are not payer-invented. They are maintained centrally, under a governance process run through X12 and published via the Washington Publishing Company's code list infrastructure, now hosted at x12.org/codes. Every payer draws from the same numbered list. CARC 45 means the charge exceeds the fee schedule or contracted allowable amount. CARC 1 means a deductible amount was applied. CARC 2 means coinsurance. CARC 3 means a copayment. Because the vocabulary is shared and version-controlled, a system parsing CAS segments across ten different payers is working against one code list, not ten dialects. A companion code set, Remittance Advice Remark Codes (RARC), rides alongside CARC to add detail where a numeric reason code alone isn't specific enough, most commonly to explain exactly what documentation or correction would resolve a denial.</p>
    <p>No other document in the billing chain carries this. The original 837 claim submission, sent before adjudication happens, cannot contain a denial reason because nothing has been denied yet. The patient-facing EOB usually paraphrases the reason in free text or an internal code the payer invented for its own portal, with no requirement that it map back to CARC/RARC at all. Denial letters, when a payer sends a separate one, are unstructured prose written for a different audience and a different purpose. The 835 is the only transaction in the entire chain that is both regulatorily mandated to carry a coded reason for every dollar not paid, at claim and line level, and built from a shared, machine-checkable vocabulary rather than free text. That combination, universal coverage plus a standardized code list, is what makes it the richest denial-reason data source in healthcare billing, not just a rich one.</p>

    <h2>PLB: the segment most auto-posting logic gets wrong</h2>
    <p>One more segment sits at the end of the transaction, outside any specific claim: PLB, Provider Level Balance. PLB carries adjustments that apply to the provider as a whole rather than to one claim, recoupments of a prior overpayment, interest paid on a late claim, a withhold being released, or an offset the payer applied for an unrelated reason. A PLB adjustment reduces or increases the total payment reflected in BPR, but it isn't tied to any CLP segment in the same transaction, because the claim it relates to might have been paid in an entirely different remittance, weeks or months earlier.</p>
    <p>This is where a lot of otherwise solid auto-posting logic breaks. A posting system built to walk CLP loops and post each claim's payment will, if it ignores PLB, post every individual claim correctly and still end up with a total that doesn't match the actual deposit, because a $340 recoupment sitting in a PLB segment was never attached to any claim in this file. Reconciling PLB requires tracing the original claim reference (carried in PLB03) back through prior remittances, which is exactly the kind of cross-file lookup that a naive per-transaction parser has no way to do on its own.</p>

    <h2>Segment structure at a glance</h2>
    <table>
      <thead>
        <tr>
          <th>Segment</th>
          <th>Loop</th>
          <th>Cardinality</th>
          <th>Carries</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>BPR</td><td>Header</td><td>One per transaction</td><td>Total payment amount, payment method, EFT/check trace</td></tr>
        <tr><td>TRN</td><td>Header</td><td>One or more per transaction</td><td>Trace number linking remittance to the actual deposit</td></tr>
        <tr><td>CLP</td><td>2100</td><td>One per claim</td><td>Total charge, amount paid, patient responsibility, claim status</td></tr>
        <tr><td>CAS (claim level)</td><td>2100</td><td>Zero or more per claim</td><td>Up to six group code and CARC amount trios explaining claim-level reductions</td></tr>
        <tr><td>SVC</td><td>2110</td><td>One per billed service line</td><td>Line-level billed and paid amounts, procedure code</td></tr>
        <tr><td>CAS (line level)</td><td>2110</td><td>Zero or more per service line</td><td>CARC trios explaining line-level reductions</td></tr>
        <tr><td>PLB</td><td>Summary</td><td>Zero or more per transaction</td><td>Provider-level recoupments, interest, withholds not tied to a specific claim in this file</td></tr>
      </tbody>
    </table>

    <h2>A worked example: reading one claim's CAS segments</h2>
    <p>Take a claim billed at $500.00 for an office visit and a lab panel. The provider is in-network, so a contractual discount applies, and the patient has an unmet deductible plus a coinsurance obligation. A simplified, representative excerpt of the claim-level segments might read:</p>
    <pre><code>CLP*PATCTRL0042*1*500.00*264.00*116.00*12*9988776655*11*1~
CAS*CO*45*120.00~
CAS*PR*1*50.00~
CAS*PR*2*66.00~</code></pre>
    <p>Reading this without a proprietary tool, just from the published segment definitions: CLP03 is the total charge, $500.00. CLP04 is the amount actually paid, $264.00. CLP05 is patient responsibility, $116.00. The three CAS lines explain the gap. The first is a CO (Contractual Obligation) adjustment using CARC 45, meaning $120.00 of the charge exceeded the contracted allowable and was written off under the provider's payer agreement, never collectible from anyone. The second and third are PR (Patient Responsibility) adjustments: CARC 1 for a $50.00 deductible amount, CARC 2 for $66.00 in coinsurance.</p>
    <p>The arithmetic should close cleanly, and checking that it does is the single most useful automated validation step in 835 processing: $500.00 billed, minus $120.00 contractual adjustment, minus $50.00 deductible, minus $66.00 coinsurance, equals $264.00, which matches CLP04 exactly. And the patient responsibility components, $50.00 plus $66.00, sum to $116.00, matching CLP05. When that check fails on a real file, it almost always means a CAS segment was missed or a repeating trio inside one CAS segment was only partially parsed, not that the payer's math is actually wrong.</p>

    <h2>CARC group codes, what they mean for downstream routing</h2>
    <table>
      <thead>
        <tr>
          <th>Group code</th>
          <th>Meaning</th>
          <th>Typical downstream action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CO</td><td>Contractual Obligation, provider agreed to this write-off under its payer contract</td><td>Post as a contractual adjustment, not collectible from the patient</td></tr>
        <tr><td>PR</td><td>Patient Responsibility, the patient owes this amount</td><td>Route to patient billing or statement generation</td></tr>
        <tr><td>OA</td><td>Other Adjustment, doesn't fit the other three categories</td><td>Requires review; frequently used for coordination-of-benefits scenarios</td></tr>
        <tr><td>PI</td><td>Payer Initiated Reduction, applied unilaterally, sometimes pending more information</td><td>Frequently the trigger for an appeal or a request for additional documentation</td></tr>
      </tbody>
    </table>
    <p>This is also where the group code, alongside the CARC number, ends up doing real operational work. The same CARC can appear under different group codes with different consequences: a reduction attached to CO is a write-off the practice absorbs, while an identical dollar amount attached to PR becomes an amount that has to move onto a patient statement. Extraction logic that captures the CARC number but discards the group code loses exactly the distinction that determines who owes the money.</p>

    <h2>Why so much of this structured data still gets re-keyed by hand</h2>
    <p>Given all of the above, it is a fair question why manual re-keying of 835 data remains common practice at all, rather than a relic from before HIPAA's electronic transaction rules took hold. A few real mechanics explain most of it.</p>
    <p>First, many practice management and billing systems, particularly older or lower-tier ones still running at smaller practices, either lack a direct 835 ingestion module or implement one that only auto-posts the simple cases: a single claim, a single CAS trio, standard CO and PR codes. Anything with multiple stacked adjustments, a PLB recoupment, or an unfamiliar group code combination gets kicked into an exception queue for a human to resolve by hand, which in practice often means opening the file, or the PDF remittance report a clearinghouse rendered from it, and typing the numbers into the ledger directly rather than troubleshooting why the auto-poster rejected it.</p>
    <p>Second, "standardized" does not mean "identical in practice." The 835 schema is fixed, but real-world implementations still vary in ways that matter to a parser: how payers populate optional segments like MIA and MOA for institutional claims, which qualifier codes they use in NM1 name segments, how consistently they populate PLB03's claim reference for recoupments. A posting rule tuned against one payer's typical file shape can silently misfire against another payer's technically-compliant but differently-populated file, and staff who have been burned by a mis-posted claim tend to respond by verifying everything by hand going forward, which functions as a second manual pass even where auto-posting technically exists.</p>
    <p>Third, PLB segments specifically resist automation by design, not by implementation failure, because they reference claims that may not appear anywhere in the current file. Resolving a PLB recoupment correctly requires looking up a claim that was paid in a prior remittance, which means either a system built to retain and cross-reference historical 835 data, or a person doing that lookup manually. Smaller practices without that historical retrieval infrastructure default to the manual path every time a PLB segment shows up, which for many payers is on a meaningful share of remittances.</p>
    <p>Fourth, there is a workflow-design gap as much as a technology gap. A biller trained to reconcile against a printed remittance report learns to distrust an auto-posted total until it's manually checked against that report line by line, especially at practices that were burned once by a posting error that went undetected for months. That habit persists even after better tooling is in place, because the cost of catching an error late, a misposted contractual write-off compounding across a year of claims, is high enough that the manual check feels cheap by comparison, even when it duplicates work the system already did correctly.</p>

    <h2>What correct 835 processing actually requires</h2>
    <p>None of the reasons above are arguments that 835 automation is impossible, they're a map of exactly where naive automation fails. Handling an 835 file correctly, end to end, means walking every CLP loop and every nested SVC loop, parsing every CAS segment's full set of repeating trios rather than assuming one adjustment per segment, tracking the group code alongside the CARC number so patient-owed amounts route differently from contractual write-offs, resolving PLB segments against historical claim data rather than dropping them, and validating the arithmetic at both the claim and line level before treating any posted number as final. A system that does all of that reliably eliminates the exact category of exception that currently sends a file to a human: the multi-adjustment claim, the unfamiliar code combination, the provider-level recoupment.</p>
    <p>The same discipline that makes 835 posting reliable also makes the resulting denial data usable for analysis that goes well beyond posting a single payment. Because every CAS segment carries a standardized CARC, aggregating 835 data across a provider's full payer mix turns what looks like routine remittance processing into a structured denial-reason dataset: which CARCs recur most, which payers apply PI reductions most often, which service lines get contractually adjusted at the highest rate. That is data an appeals team, a coding review process, or a prior authorization workflow can act on directly, and it exists only because the 835 was parsed against its actual segment structure rather than treated as a payment total to glance at and file away.</p>
    <p>Teams working through the rest of the claims lifecycle usually touch several adjacent pieces of this same data chain. Our posts on <a href="/resources/blogs/denial-code-extraction">denial code extraction</a> and <a href="/resources/blogs/eob-parsing-automation">EOB parsing automation</a> cover the patient-facing and denial-analysis sides of the same underlying claim data, and <a href="/resources/blogs/medical-coding-automation">medical coding automation</a> covers the coding decisions that determine what gets billed in the first place, upstream of everything a CLP or CAS segment later reports back.</p>
    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Healthcare",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "835 remittance advice processing",
  secondary_keywords: [
    "ANSI X12 835 transaction",
    "CAS adjustment segment",
    "claim adjustment reason codes CARC",
    "electronic remittance advice ERA",
    "835 auto-posting",
    "healthcare denial reason data",
  ],
  tags: ["healthcare", "835", "remittance advice", "EDI", "revenue cycle", "medical billing"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is an ANSI X12 835 transaction?",
      answer:
        "The 835, formally the Health Care Claim Payment/Advice transaction, is the HIPAA-mandated electronic format payers use to send an electronic remittance advice (ERA) to providers. Under 45 CFR Part 162, when a health plan sends an ERA, it must be an ASC X12 835, which means every compliant payer produces the file with the same envelope structure, segment identifiers, and code sets rather than a payer-specific layout.",
    },
    {
      question: "What is the CAS segment and what does it contain?",
      answer:
        "CAS, the Claim Adjustment segment, explains why a paid amount differs from the billed amount. It starts with a Claim Adjustment Group Code (CO, PR, OA, or PI) and then carries up to six repeating trios, each pairing a Claim Adjustment Reason Code (CARC) with a dollar amount and an optional quantity, so a single claim's variance can be broken into several distinct, coded reasons rather than one lump adjustment.",
    },
    {
      question: "What is the difference between a CARC and a RARC code?",
      answer:
        "A CARC (Claim Adjustment Reason Code) is the numeric code inside a CAS segment that explains why an amount was adjusted, such as CARC 45 for a charge exceeding the contracted allowable. A RARC (Remittance Advice Remark Code) rides alongside CARC to add detail when the reason code alone isn't specific enough, most often spelling out what would need to change for a claim to be paid or reprocessed. Both are maintained centrally and published through the code list infrastructure hosted at x12.org/codes.",
    },
    {
      question: "What is the difference between the CLP and SVC segments?",
      answer:
        "CLP (Claim Payment Information) is a claim-level segment, one per claim, carrying the total charge, amount paid, and patient responsibility for that claim as a whole. SVC (Service Payment Information) sits nested inside each claim's loop, one per billed service line, carrying the same billed-versus-paid structure at the individual procedure level. Both can have their own attached CAS segments, so claim-level and line-level adjustments need to be tracked separately.",
    },
    {
      question: "Why do providers still manually re-key 835 data if it's already structured EDI?",
      answer:
        "Several practical reasons combine: many practice management systems only auto-post simple single-adjustment claims and route anything more complex to a manual queue; real-world 835 files vary in how payers populate optional segments even within the standard; PLB provider-level adjustments reference claims from prior remittances that require historical lookup rather than simple parsing; and billing staff who have been burned by a past posting error often manually verify auto-posted totals against a printed remittance report regardless of whether the system handled it correctly.",
    },
    {
      question: "Why is the 835 considered the richest source of denial-reason data in healthcare billing?",
      answer:
        "It is the only document in the billing chain that is both regulatorily required to carry a coded reason for every dollar not paid, at claim and line level, for every claim, and built from a shared, centrally maintained CARC and RARC vocabulary rather than free text. The original claim submission (837) predates adjudication and has no denial data, the patient-facing EOB has no standardized coding requirement, and denial letters are typically unstructured prose. Aggregated across a payer mix, 835 CAS data becomes a structured dataset of exactly why claims get reduced or denied.",
    },
  ],
}
