import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog15: BlogPost = {
  id: "new-15",
  title: "AML Document Checks: Seven Fields to Capture From Every Document",
  slug: "aml-document-checks",
  excerpt:
    "Regulators do not publish a list of fields to capture. Here is a practical seven-field checklist for AML documents, what the rules actually say, and the gaps that show up first.",
  description:
    "A practical seven-field checklist for AML document checks, what FinCEN rules say about thresholds and beneficial owners, and the record gaps to fix first.",
  metaTag: "AML Document Checks: Seven Fields to Capture",
  content: `
    <p>AML document checks turn the paperwork behind a transaction into structured records you can monitor, report on and show to an examiner. FinCEN's rules say what you must detect and keep, but they do not list the fields to capture from each document. The checklist below is our practical suggestion, not a regulatory list: seven fields that make a document usable for monitoring and for audit.</p>
    <p>This guide covers the seven fields, what the rules do say, the document types that need extra care, and the record gaps that show up first. It is not legal advice, so confirm requirements for your institution with your compliance team.</p>

    <h2>What do AML document checks cover?</h2>
    <p>AML (anti-money laundering) rules require financial institutions to detect and report suspicious activity. Document checks are the part where you pull structured data out of wire instructions, source-of-funds statements, beneficial ownership forms and similar records, and keep that data for monitoring, reporting and audit. The work splits in two:</p>
    <ul>
      <li><strong>At onboarding:</strong> verify identity (KYC) and collect source-of-funds documents.</li>
      <li><strong>Ongoing:</strong> monitor transactions and patterns, and file reports when the rules say to.</li>
    </ul>
    <p>The extraction layer feeds both. The identity side is covered in <a href="/resources/blogs/kyc-document-verification">KYC document verification</a>.</p>

    <h2>What do the rules actually say?</h2>
    <p>These are the points worth knowing before you design fields. Secondary sources confirm each one, but check the current rule text before you build logic on a number.</p>
    <ul>
      <li><strong>Suspicious activity reports.</strong> For banks, the usual trigger is a transaction of $5,000 or more involving activity you know, suspect or have reason to suspect is illicit. The report is generally due within 30 days of detection, and the SAR is kept for 5 years (see the <a href="https://complianceconcourse.willkie.com/?p=5345" target="_blank" rel="noopener">Willkie compliance guide to SARs</a>). Money services businesses use a lower figure.</li>
      <li><strong>Beneficial owners.</strong> FinCEN's customer due diligence rule asks for each person who owns 25 percent or more of the equity of a legal entity customer, plus one person who controls it (see <a href="https://www.crowell.com/en/insights/client-alerts/fincen-s-final-rule-on-beneficial-ownership-and-the-administration-s-new-initiatives-on-financial-transparency-what-you-need-to-know" target="_blank" rel="noopener">Crowell's summary of the final rule</a>). An institution may choose a lower ownership line on a risk basis.</li>
    </ul>
    <p>Neither rule tells you which fields to keep on each page. That part is a design choice, and the checklist below is one way to make it.</p>

    <h2>What is the seven-field minimum?</h2>
    <p>For each AML-relevant document, capture these seven fields. Skip one and you create either an audit gap or a blind spot in monitoring.</p>

    <h3>1. Document type</h3>
    <p>Is this a wire instruction, a source-of-funds statement, a beneficial ownership form or a tax document? The type decides which rules apply next. See <a href="/resources/blogs/document-classification-software">document classification</a>.</p>

    <h3>2. Dates</h3>
    <p>Keep both the date on the document and the date you received it. Examiners compare these with transaction timestamps.</p>

    <h3>3. Customer identifier</h3>
    <p>Your internal customer ID, linked to the KYC record. This ties each document to the right customer.</p>

    <h3>4. Counterparty details</h3>
    <p>For sender, receiver or beneficiary: name, address and an identifier such as an account number or tax ID. The counterparty is half of the picture in any transfer.</p>

    <h3>5. Transaction amount and currency</h3>
    <p>Store the amount as a number and the currency as a separate code, never as a formatted string such as "$1,000.00". See <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a>.</p>

    <h3>6. Stated source of funds</h3>
    <p>For large or unusual transactions: what does the customer say the money came from, such as salary, sale proceeds, a gift or business income? This field often decides whether an alert becomes a report.</p>

    <h3>7. Risk indicators</h3>
    <p>Record any flag that triggered extra review: a cross-border transfer, a high-risk jurisdiction, a politically exposed person match or an amount over your threshold. The audit trail should show why a document got special handling.</p>

    <h2>Which record gaps show up first?</h2>
    <p>These are the gaps a mock audit of your own files is most likely to turn up. Treat them as a self-check list, not as a report of what any regulator found.</p>
    <table>
      <thead><tr><th>Gap</th><th>What it looks like</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>Missing counterparty</td><td>Wire on file with no receiving party details</td><td>Make field 4 required for any transfer document</td></tr>
        <tr><td>Amount stored as text</td><td>"$1,000.00" sits in a text column, so monitoring cannot read it</td><td>Store a number and a currency code</td></tr>
        <tr><td>No source of funds</td><td>A $50,000 transfer with documents but no stated source</td><td>Require field 6 above a threshold you set</td></tr>
        <tr><td>Risk flag not recorded</td><td>A high-risk jurisdiction was reviewed, but no flag was saved</td><td>Write every indicator to field 7</td></tr>
        <tr><td>Broken audit trail</td><td>A SAR cites a document, but steps in between are missing</td><td>Log every step with input, output, time and operator</td></tr>
      </tbody>
    </table>

    <h2>Which document types need extra care?</h2>
    <ul>
      <li><strong>Wire transfer instructions.</strong> SWIFT messages, ACH files and internal transfer forms. Capture sender, receiver, amount, currency, purpose and any intermediaries. Stripped or hidden party details are themselves a flag.</li>
      <li><strong>Beneficial ownership forms.</strong> Capture each owner's name, date of birth, address and ownership percentage, and check them against the source ID.</li>
      <li><strong>Source-of-funds statements.</strong> Capture the customer's statement word for word, with the signature and date.</li>
      <li><strong>Cross-border tax forms.</strong> W-8BEN, W-9, FATCA and CRS forms each have fixed fields, so extraction has to follow the form's layout.</li>
      <li><strong>Screening records.</strong> Record who was screened, against which list, on what date and with what result. See <a href="/resources/blogs/real-time-sanctions-screening">real-time sanctions screening</a> for how list freshness differs from speed.</li>
    </ul>

    <h2>What does a pipeline for AML documents look like?</h2>
    <ol>
      <li><strong>Ingest.</strong> Take the document in by portal, email or API and store the original unchanged.</li>
      <li><strong>Classify.</strong> Find the document type and route it to the right extraction template.</li>
      <li><strong>Extract.</strong> Run layout-aware OCR and pull the seven fields plus any type-specific fields.</li>
      <li><strong>Validate.</strong> Check that required fields are filled, amounts are numeric and dates parse. Send failures to review. See <a href="/resources/blogs/real-time-document-validation-api">real-time document validation</a>.</li>
      <li><strong>Screen.</strong> Check counterparties against sanctions and politically exposed person lists, and record the result.</li>
      <li><strong>Tag.</strong> Add risk indicators such as cross-border or high-risk jurisdiction.</li>
      <li><strong>Log.</strong> Keep every step's input, output, time and operator in a record that cannot be edited afterwards.</li>
      <li><strong>Hand off.</strong> Send the data to your monitoring system and start the SAR workflow when your rules call for it.</li>
    </ol>

    <h2>How do AML document checks differ from KYC?</h2>
    <p>KYC establishes who the customer is, at onboarding and on a periodic refresh. AML watches what the customer does, continuously. KYC documents are mostly photo IDs and proof of address. AML documents include those plus transaction records, attestations, source-of-funds papers and ownership forms. AML therefore tends to produce more documents per customer, because each flagged transaction can add its own.</p>

    <h2>How accurate does the OCR need to be?</h2>
    <p>AML documents mix structured forms, where field extraction matters, with free text such as attestations, where meaning matters. A wrong amount or a missed counterparty can turn into a missed report, so validate every extracted value and send low-confidence fields to a person. Accuracy depends heavily on document type, which is why we publish per-type numbers in the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>. For the general limits of OCR, see the <a href="/resources/blogs/ocr-pdf-honest-guide">honest guide to OCR</a>, and for the identity side, <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification</a>.</p>

    <h2>Where should you start?</h2>
    <p>If you are building from scratch, get the seven-field extraction right first. Monitoring rules, SAR workflows and dashboards all sit on top of that data. If you already have a system, pull 100 documents at random and check whether all seven fields were captured cleanly. The gaps are most often in field 4 (counterparty) or field 6 (source of funds), so fix those first. If you are preparing for an exam, run a mock audit on a sample of files and rebuild each decision from the audit trail. Any gap you cannot explain from the file is one an examiner may also find.</p>
  `,
  image: "/images/passport-ocr.png",
  featuredImage: "/images/passport-ocr.png",
  category: "Compliance",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-10-29T00:00:00.000Z",
  last_updated: "October 29, 2026",
  readTime: "7 min read",
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
        "Yes, for the extraction step. Decision-making (does this trigger a SAR?) still requires human judgment plus documented rules. Use OCR and rules for extraction and first-pass checks, and keep a person on every decision that can lead to a report.",
    },
    {
      question: "What happens if AML documents are missing fields?",
      answer:
        "For automated processing: route to manual review. For audit: it depends on which field. Missing date or amount fields are findings. Missing risk-indicator flags are findings. Examiners want every decision supported by the file.",
    },
  ],
}
