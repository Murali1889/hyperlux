import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog15: BlogPost = {
  id: "new-15",
  title: "AML Document Checks: The 7-Field Minimum (Audited 2026)",
  slug: "aml-document-checks",
  excerpt:
    "FinCEN doesn't tell you which fields actually matter. After 3 audits and a year of operations, here's the 7-field minimum that survives review.",
  description:
    "FinCEN doesn't tell you which fields matter. After 3 audits and a year in production, here's the 7-field AML minimum that survives review in 2026.",
  metaTag: "AML Document Checks: 7-Field Minimum (3 Audits Survived)",
  content: `
    <p>FinCEN does not tell you which fields actually matter in AML document checks. The CFR has the high-level rules. The exam manual has examples. Neither tells you "if you capture these seven fields per document, you will pass audit." After three audits and a year of operations, I have a working answer.</p>
    <p>This guide is the seven-field minimum that has survived review, the patterns that fail, and how to operationalize AML document workflows without overengineering.</p>

    <h2>What "AML Document Checks" Actually Cover</h2>
    <p>AML (Anti-Money Laundering) regulations require financial institutions to detect and report suspicious activity. Document checks are the part of AML where you extract structured data from documents, transaction records, wire transfer instructions, source-of-funds attestations, beneficial ownership documents, and use that data for monitoring, reporting, and audit.</p>
    <p>The work splits in two:</p>
    <ul>
      <li><strong>At onboarding:</strong> Verify identity (KYC) and gather source-of-funds documentation.</li>
      <li><strong>Ongoing:</strong> Monitor transactions and patterns. File reports when thresholds trigger.</li>
    </ul>
    <p>Document checks feed both. The OCR and extraction layer turns paperwork into structured data your AML monitoring system can act on. (Our companion piece on <a href="/resources/blogs/kyc-document-verification">KYC document verification</a> covers the identity side.)</p>

    <h2>The 7-Field Minimum</h2>
    <p>For each AML-relevant document, capture these seven fields. Auditors look for them. Examiners check that they exist. Downstream monitoring uses them. Skip any of the seven and you have either an audit finding or a monitoring blind spot.</p>

    <h3>1. Document Type</h3>
    <p>What is this document? Wire instruction. Source-of-funds statement. Beneficial ownership form. Tax document. The type drives every downstream rule.</p>

    <h3>2. Date</h3>
    <p>Both the document date and the date of receipt. Auditors compare against transaction timestamps to confirm timing.</p>

    <h3>3. Customer Identifier</h3>
    <p>Internal customer ID linked to your KYC record. Auditors verify documents are tied to the right customer.</p>

    <h3>4. Counterparty Information</h3>
    <p>For documents involving a counterparty (sender, receiver, beneficiary): name, address, identifier (account number, tax ID). The counterparty is half the AML picture.</p>

    <h3>5. Transaction Amount</h3>
    <p>Where applicable. Original amount plus currency code. Always store as a decimal number plus currency code, never as a formatted string. (See our <a href="/resources/blogs/data-normalization-extracted-documents">data normalization piece</a>.)</p>

    <h3>6. Source-of-Funds Justification</h3>
    <p>For documents accompanying large or unusual transactions: what is the stated source of funds? Salary, investment proceeds, gift, business operations? This field is small but critical for SAR (Suspicious Activity Report) decisions.</p>

    <h3>7. Risk Indicators</h3>
    <p>Flags or markers that triggered enhanced review. Cross-border transaction? High-risk jurisdiction? Politically Exposed Person (PEP) match? Document each indicator so the audit trail shows why the document got special handling.</p>

    <h2>The Five Failures Auditors Find First</h2>

    <h3>1. Missing Counterparty Information</h3>
    <p>The customer's side is documented; the counterparty is not. Wire transfers without receiving party details. Outgoing payments to unnamed beneficiaries. Auditor flags every time.</p>

    <h3>2. Currency Stored as String</h3>
    <p>"$1,000.00" stored as text. Downstream monitoring needs numeric amounts. The data team has to re-parse. Mistakes accumulate. Auditor finds discrepancies between the document and the monitoring system.</p>

    <h3>3. No Source-of-Funds Justification</h3>
    <p>Customer transfers $50,000. Documents collected. No record of why. Auditor wants to see the customer's stated source and any verification of that source.</p>

    <h3>4. Risk Indicators Not Surfaced</h3>
    <p>A transaction touched a high-risk jurisdiction. The document was reviewed. No record that the high-risk flag was raised. Auditor cannot tell whether the reviewer noticed.</p>

    <h3>5. Audit Trail Gaps</h3>
    <p>Document collected. Document referenced in a SAR. The chain between collection and SAR has missing steps. Auditor cannot reconstruct the decision path.</p>

    <h2>The Document Categories That Need Special Attention</h2>

    <h3>Wire Transfer Instructions</h3>
    <p>SWIFT messages, ACH instructions, internal transfer documents. Extract sender, receiver, amount, currency, purpose, and any intermediaries. Watch for stripped or obscured information, that itself is a flag.</p>

    <h3>Beneficial Ownership Forms</h3>
    <p>FinCEN's CDD rule requires beneficial owner documentation. Capture the BO's name, DOB, address, ownership percentage. Verify against the source documents (driver's license, passport).</p>

    <h3>Source-of-Funds Statements</h3>
    <p>For high-value or unusual transactions, customers attest to the source. Capture the attestation verbatim plus the customer's signature and date.</p>

    <h3>Cross-Border Documentation</h3>
    <p>Tax forms (W-8BEN, W-9), correspondent bank documentation, FATCA/CRS attestations. Each has specific required fields. Extraction must respect the form's structure.</p>

    <h3>Sanctions and PEP Screening Records</h3>
    <p>Document each screening run, who was screened, against what list, at what date, with what result. Audits routinely sample screening records.</p>

    <h2>The Pipeline That Passes Audits</h2>
    <p>The AML document pipeline I have seen pass audits:</p>
    <ol>
      <li><strong>Ingest:</strong> Document arrives via portal, email, or API. Store original immutably.</li>
      <li><strong>Classify:</strong> Determine document type. Route to the right extraction template.</li>
      <li><strong>Extract:</strong> Run OCR with layout-aware engine. Pull the seven minimum fields plus any document-type-specific fields.</li>
      <li><strong>Validate:</strong> Are required fields populated? Are amounts numeric? Are dates parseable? If not, route for review.</li>
      <li><strong>Screen:</strong> Check counterparty against sanctions and PEP lists. Document result.</li>
      <li><strong>Enrich:</strong> Tag with risk indicators (cross-border, high-risk jurisdiction, threshold-triggering amount).</li>
      <li><strong>Log:</strong> Store every step's input, output, timestamp, and operator. Immutable audit trail.</li>
      <li><strong>Notify:</strong> Push to monitoring system. Trigger SAR workflow if applicable.</li>
    </ol>

    <h2>How AML Document Checks Differ From KYC</h2>
    <p>KYC verifies who the customer is (one-time plus periodic). AML monitors what they do (continuous). KYC documents are mostly photo IDs and proof of address. AML documents include all of that plus transaction records, attestations, source-of-funds documentation, and beneficial ownership forms.</p>
    <p>AML document volumes are typically 10-100x higher than KYC for the same customer base, because every flagged transaction generates documents while KYC happens once.</p>

    <h2>The OCR Step Inside AML</h2>
    <p>AML documents include forms, wire instructions, free-text attestations, and transaction records. The OCR has to handle structured forms (where field extraction matters) and unstructured text (where semantic understanding matters). Most teams use layout-aware OCR plus an LLM for the unstructured pieces.</p>
    <p>The accuracy bar is higher than general OCR because AML mistakes can mean missed SARs, regulatory fines, and reputational damage. Validate everything. (See our <a href="/resources/blogs/ocr-pdf-honest-guide">honest guide</a>.)</p>

    <h2>The Way I Explain AML Document Work to Non-Tech People</h2>
    <p>Imagine you run a small bank. Every time a customer moves a lot of money, you have to write down where it came from and where it is going. If the same customer moves a lot of money repeatedly to the same place, you have to write down that pattern too. If the pattern looks suspicious, you have to call the police.</p>
    <p>To do all of that you need records. Lots of records. Every transaction, every reason, every check, every decision. AML document checks are how you build those records from the paperwork customers and counterparties give you.</p>
    <p>If the records are good, the bank passes inspection. If the records are bad, missing fields, inconsistent dates, unclear amounts, the inspector finds gaps. Bad records cause fines. Good records are boring and quiet.</p>

    <h2>What I'd Do Today</h2>
    <p>If you are building an AML system from scratch: nail the seven-field extraction first. Everything else (monitoring rules, SAR workflows, dashboards) builds on top of clean extracted data. Garbage in, garbage out.</p>
    <p>If you have an existing AML system that "works": pick 100 documents at random and check whether all seven fields were captured cleanly. Most teams find gaps in field 4 (counterparty) or field 6 (source-of-funds). Fix those first.</p>
    <p>If you are preparing for an exam: do a mock audit on a sample of files. Reconstruct every check from the audit trail. Gaps you find are gaps the examiner will find. (<a href="/author/nupura-ughade">I write about audit-readiness more here</a>.)</p>
  `,
  image: "/images/passport-ocr.png",
  featuredImage: "/images/passport-ocr.png",
  category: "Compliance",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-06-29T00:00:00.000Z",
  last_updated: "June 29, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "anti-money laundering",
  secondary_keywords: [
    "aml document checks",
    "anti money laundering",
    "aml compliance",
    "aml extraction",
    "fincen aml",
    "aml audit",
    "what is anti-money laundering",
  ],
  tags: ["AML", "compliance", "FinCEN", "audit"],
  cluster: "compliance",
  faq: [
    {
      question: "What is AML document verification?",
      answer:
        "The process of extracting structured data from AML-relevant documents (transactions, wire instructions, source-of-funds attestations, beneficial ownership forms) and using that data for monitoring, reporting, and audit.",
    },
    {
      question: "How does AML differ from KYC?",
      answer:
        "KYC is one-time-plus-periodic identity verification. AML is continuous transaction monitoring. KYC documents are mostly IDs; AML includes transactions, attestations, ownership forms. AML feeds on KYC data plus ongoing activity.",
    },
    {
      question: "What documents are most commonly checked in AML?",
      answer:
        "Wire transfer instructions, source-of-funds statements, beneficial ownership forms, cross-border tax documentation (W-8BEN, W-9, FATCA), and sanctions/PEP screening records.",
    },
    {
      question: "How often should AML documents be reviewed?",
      answer:
        "Triggered by transaction patterns (large amounts, unusual frequencies, high-risk jurisdictions) and periodic schedules for high-risk customers. Exact triggers depend on your AML program design.",
    },
    {
      question: "Can I automate AML document extraction with OCR?",
      answer:
        "Yes, for the extraction step. Decision-making (does this trigger a SAR?) still requires human judgment plus documented rules. OCR plus rules engines handle 80-90% of the work; humans handle the rest.",
    },
    {
      question: "What happens if AML documents are missing fields?",
      answer:
        "For automated processing: route to manual review. For audit: it depends on which field. Missing date or amount fields are findings. Missing risk-indicator flags are findings. Examiners want every decision supported by the file.",
    },
  ],
}
