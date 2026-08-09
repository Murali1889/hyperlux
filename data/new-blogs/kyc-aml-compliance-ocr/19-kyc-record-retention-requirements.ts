import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa19: BlogPost = {
  id: "ka-19",
  title: "KYC Record Retention: Why Three Clocks Run at Once",
  slug: "kyc-record-retention-requirements",
  excerpt:
    "Retention content says keep KYC records five years. Almost none explains that identity, transaction, and SAR records run on three separate clocks.",
  description:
    "KYC record retention requirements: why identity records, transaction records, and SAR documentation each start their five-year clock from a different event.",
  metaTag: "KYC Record Retention: Three Separate Clocks (2026)",
  content: `
    <p>KYC record retention content reliably lands on the same headline number, five years, and stops there, treating retention as a single rule applied uniformly across a customer's file. In practice, a five-year retention period is not one clock, it is at least three separate clocks, each starting from a different triggering event, and a compliance program that treats them as interchangeable either destroys records it was legally required to keep or holds onto records past the point it should have stopped, both of which are findings an examiner will catch.</p>

    <p>This matters directly for <a href="/solutions/compliance-risk">compliance risk automation</a> managing document lifecycles at scale, and follows the SAR-specific documentation requirements covered in our <a href="/resources/blogs/suspicious-activity-report-filing">SAR filing piece</a> and the ongoing-monitoring trigger logic covered in our <a href="/resources/blogs/perpetual-kyc-monitoring">perpetual KYC monitoring piece</a> into the broader retention question neither piece fully covered on its own.</p>

    <h2>The three clocks, and what actually starts each one</h2>

    <p>Under the US Bank Secrecy Act framework, transaction records generally must be retained for five years from the date of each individual transaction, a rolling clock that starts fresh with every new transaction rather than a single date applying to the whole account. Customer identification records under a bank's Customer Identification Program must be retained for five years after the date the account is closed, or for credit card accounts specifically, five years after the account becomes closed or dormant, an entirely different trigger tied to the end of the relationship rather than any individual transaction within it. Suspicious Activity Report supporting documentation runs on a third, independent clock: five years from the date the SAR itself was filed, regardless of what has happened to the underlying account or transaction in the meantime.</p>

    <table>
      <thead>
        <tr><th>Record type</th><th>Retention period</th><th>What starts the clock</th></tr>
      </thead>
      <tbody>
        <tr><td>Transaction records</td><td>5 years</td><td>The date of each individual transaction</td></tr>
        <tr><td>Customer identification (CIP) records</td><td>5 years</td><td>Account closure, or dormancy for credit card accounts</td></tr>
        <tr><td>SAR supporting documentation</td><td>5 years</td><td>The date the SAR was filed</td></tr>
      </tbody>
    </table>

    <h2>Why a single global clock produces two opposite failures</h2>

    <p>A retention system built around one uniform trigger, say, deleting everything five years after account closure regardless of record type, produces failures in both directions depending on which record type it is misapplied to. Applied to transaction records generated years before an account eventually closes, it retains those records far longer than the BSA requirement actually demands, since the individual transaction date, not the eventual account closure, is what the five-year clock for that record type is actually measured against. Applied to SAR supporting documentation, the same single clock can delete that documentation too early if the account closes before the SAR's own five-year retention window has elapsed, or too late if the account remains open well past that window while the SAR documentation's independent clock has already run out.</p>

    <h2>A worked example: one customer, three clocks ending on three different dates</h2>

    <p>Consider a customer who opens an account in year one, conducts a transaction in year three that triggers a SAR filing that same year, and eventually closes the account in year six. The transaction from year three starts its own five-year retention clock immediately, requiring that specific transaction record to be kept until year eight. The SAR filed in year three starts its own five-year clock from the filing date, also requiring retention until year eight, coincidentally landing on the same year in this example but through an entirely independent trigger, not because the two record types share a rule. The customer identification records tied to the account itself do not start their retention clock until the account closes in year six, requiring those specific records to be kept until year eleven, three years after the transaction and SAR documentation clocks have already expired.</p>

    <h2>Why this matters operationally, not just as a technicality</h2>

    <p>A document management system architected around a single retention date per customer file cannot represent this reality at all, since three genuinely different expiration dates exist within the same customer relationship depending on which specific record is in question. A system architected around retention rules attached to the record type itself, not the customer file as a whole, correctly computes and tracks each clock independently, and this distinction is exactly what determines whether a compliance program can produce the year-three transaction record on request in year seven while correctly having already purged it by year nine, versus a program that either purges everything on one shared clock or, more commonly in practice, defensively over-retains everything indefinitely because building three separate clocks looked more complicated than just keeping records forever.</p>

    <h2>Why indefinite over-retention is not actually the safe default</h2>

    <p>Retaining records well past their required window is not a risk-free fallback position, even though it feels conservative from a pure compliance-availability standpoint. Data protection frameworks operating alongside AML retention requirements generally require erasure of personal data once it is no longer needed for the purpose it was collected, creating a real tension with indefinite retention rather than a free pass to keep everything. India's Digital Personal Data Protection Act, in Section 8(7), creates an erasure obligation with a specific carve-out for data an organization is legally required to retain under another applicable law, meaning the AML retention mandate justifies keeping a record through its actual required window, but that same carve-out does not extend indefinitely once the underlying AML retention period for that specific record type has genuinely expired.</p>

    <h2>Why format and immutability matter as much as duration</h2>

    <p>Retention rules generally specify not just how long a record must be kept but the form it must be kept in, the original or an accepted business-record equivalent that preserves the record's evidentiary value rather than a lossy summary of it. A scanned identity document retained as a compressed thumbnail, or a transaction record retained only as a downstream database row with the original supporting document discarded, can technically satisfy a naive reading of "kept for five years" while failing the actual requirement, since an examiner requesting the underlying record expects something that still functions as genuine evidence of what was originally verified, not a derived summary that happened to survive the retention window intact. Immutability matters for the same reason, a retained record that can still be silently edited after the fact undermines the evidentiary purpose retention exists to serve in the first place, regardless of how faithfully its retention duration was otherwise tracked.</p>

    <h2>Why litigation holds and active investigations are a distinct fourth condition, not a fourth clock</h2>

    <p>An active investigation, regulatory inquiry, or litigation matter touching a specific customer's records extends retention beyond whatever the record type's normal clock would otherwise dictate, but this is better understood as a hold placed on top of the normal clocks rather than a separate, independently computed retention period of its own. A record whose normal five-year window would otherwise have expired does not get purged while a genuinely relevant hold remains active, and the correct operational pattern is a hold flag capable of overriding the otherwise-applicable clock for the specific records the hold covers, not a separate retention rule requiring its own independent trigger logic layered alongside the three described above.</p>

    <h2>Why the dormancy trigger for credit card accounts deserves its own attention</h2>

    <p>The credit card carve-out within the customer identification clock, five years after an account becomes closed or dormant rather than only closed, is easy to overlook precisely because dormancy is a state, not a discrete event with an obvious filing date attached to it the way an account closure clearly is. A system tracking only formal closure dates for its identification-record clock misses the dormancy trigger entirely for any credit card account a customer simply stops using without ever formally closing, silently extending that record's practical retention far beyond what the rule actually requires, since the clock the rule specifies never technically starts under a closure-only tracking approach. Correctly implementing this specific trigger requires the retention system to monitor account activity status on an ongoing basis, not just react to an explicit closure instruction, treating a defined period of inactivity as functionally equivalent to closure for this one particular record type and account category.</p>

    <h2>What I would check in your current record retention pipeline</h2>

    <p>Ask whether your retention system computes clocks per record type, transaction date for transaction records, account closure or dormancy for identity records, filing date for SAR documentation, or whether it applies one retention date per customer file regardless of which specific record is in question, since the worked example above shows those three clocks genuinely diverging by years within a single customer relationship. Then ask whether your default response to that complexity has been building the three clocks correctly or simply retaining everything indefinitely to avoid the engineering work, since indefinite retention creates its own exposure under data protection frameworks that require erasure once a legally mandated retention period has genuinely run its course. Confirm your system supports a hold mechanism capable of overriding an otherwise-expired clock for records tied to an active investigation or litigation matter, without requiring that hold logic to be built as a fourth, independently triggered retention period. Finally, confirm whichever team owns this system can produce, for any given record, both what its retention period is and what specific event started that clock, since being unable to answer that second question during an examination is itself a finding, regardless of whether the record happens to still exist.</p>

    <h3>Frequently asked questions</h3>

    <p><strong>Is KYC record retention really just "keep everything for five years"?</strong><br />
    No. Transaction records, customer identification records, and SAR supporting documentation each run on a five-year clock, but each clock starts from a different event, transaction date, account closure, or SAR filing date respectively, so they rarely expire on the same day even within one customer's file.</p>

    <p><strong>What event starts the retention clock for customer identification records?</strong><br />
    Account closure, or for credit card accounts specifically, the date the account becomes closed or dormant, not the date any individual transaction occurred within the account's lifetime.</p>

    <p><strong>What event starts the retention clock for SAR supporting documentation?</strong><br />
    The date the SAR was filed, an independent clock that runs regardless of whether the underlying account remains open or has since closed.</p>

    <p><strong>Why is indefinite record retention not a safe default?</strong><br />
    Data protection frameworks generally require erasure of personal data once it is no longer needed, with a carve-out for legally mandated retention. That carve-out covers a record through its actual required window, not indefinitely once that window has genuinely expired.</p>

    <p><strong>How should an active investigation or litigation hold affect retention?</strong><br />
    As a hold that overrides an otherwise-expired clock for the specific records it covers, rather than as a separate, independently triggered retention period requiring its own clock logic.</p>

    <p><strong>Why does a single retention date per customer file cause problems?</strong><br />
    It cannot represent the reality that transaction records, identity records, and SAR documentation genuinely expire on different dates within the same customer relationship, leading to either premature deletion of records still required or unnecessary over-retention of records no longer required.</p>

    <p>"Keep KYC records for five years" is not wrong, it is simply incomplete in a way that matters. Three structurally different record types share that same headline number while starting their clocks from three different events, and a compliance program that has never separated them has likely never actually tested whether its retention logic is correct, only whether it happens to be conservative enough that the gap has not yet been discovered during an examination.</p>

    <p>None of this argues against automating record retention. Manually tracking three separate clocks per customer across a real portfolio does not scale any better than a single, wrong, unified clock does, it just fails less visibly. It is a reason to confirm your retention system is built around record-type-specific triggers rather than one customer-level date, and to treat indefinite over-retention as a genuine data protection exposure rather than a conservative, risk-free default, before an examiner or a data protection regulator, not your own compliance team, is the first to notice which specific clock you never actually built. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/legal-document-automation.png",
  featuredImage: "/images/legal-document-automation.png",
  category: "Compliance",
  date: "August 29, 2026",
  datePublished: "2026-08-29T00:00:00.000Z",
  dateModified: "2026-08-29T00:00:00.000Z",
  last_updated: "August 29, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "kyc record retention requirements",
  secondary_keywords: [
    "bsa record retention period",
    "sar supporting documentation retention",
    "cip recordkeeping account closure",
    "aml document retention clock",
    "dpdp act erasure carve-out",
    "litigation hold record retention",
  ],
  tags: ["compliance", "KYC", "record retention", "BSA", "data protection"],
  cluster: "compliance",
  faq: [
    {
      question: "Is KYC record retention really just \"keep everything for five years\"?",
      answer:
        "No. Transaction records, identification records, and SAR supporting documentation each run on a five-year clock, but each starts from a different event, so they rarely expire on the same day even within one customer's file.",
    },
    {
      question: "What event starts the retention clock for customer identification records?",
      answer:
        "Account closure, or for credit card accounts, the date the account becomes closed or dormant, not the date any individual transaction occurred within the account's lifetime.",
    },
    {
      question: "What event starts the retention clock for SAR supporting documentation?",
      answer:
        "The date the SAR was filed, an independent clock that runs regardless of whether the underlying account remains open or has since closed.",
    },
    {
      question: "Why is indefinite record retention not a safe default?",
      answer:
        "Data protection frameworks generally require erasure of personal data once no longer needed, with a carve-out for legally mandated retention that covers a record through its required window, not indefinitely afterward.",
    },
    {
      question: "How should an active investigation or litigation hold affect retention?",
      answer:
        "As a hold that overrides an otherwise-expired clock for the specific records it covers, rather than as a separate, independently triggered retention period requiring its own clock logic.",
    },
    {
      question: "Why does a single retention date per customer file cause problems?",
      answer:
        "It cannot represent that transaction, identity, and SAR records genuinely expire on different dates within the same relationship, causing either premature deletion or unnecessary over-retention.",
    },
  ],
}
