import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog24: BlogPost = {
  id: "new-24",
  title: "Mortgage OCR: What It Reads, Where It Struggles and What to Test",
  slug: "mortgage-ocr",
  excerpt:
    "Mortgage OCR reads the documents in a loan packet and feeds the data to your loan origination system. Here is what is in a packet, which documents are hard, and how to test a vendor on your own files.",
  description:
    "Mortgage OCR reads pay stubs, W-2s, tax returns, bank statements and appraisals. Which documents are hard, what accuracy to expect and how to test a vendor.",
  metaTag: "Mortgage OCR: Documents, Accuracy and What to Test",
  summary:
    "Mortgage OCR extracts data from the documents in a loan packet, such as the loan application (Form 1003), pay stubs, W-2s, tax returns, bank statements and appraisals. Each document type needs its own extraction and checks, and matching every document to the right borrower and year is the slow part.",
  content: `
    <p>Mortgage OCR reads the documents in a loan packet, such as the loan application, pay stubs, W-2s, tax returns, bank statements and the appraisal, and turns them into structured data for your loan origination system (LOS). It removes most of the typing. It does not remove the need for review, because some documents in every packet are hard to read, and a few are hard enough that a person should check them every time.</p>
    <p>This guide covers what is in a packet, which documents are hard and why, what accuracy numbers we can and cannot back, and how to test a vendor on your own files. We have not benchmarked every mortgage document type, and the post says so where it matters.</p>

    <h2>What documents are in a mortgage packet?</h2>
    <p>A typical packet has eight kinds of document. Each needs its own extraction and its own checks.</p>
    <table>
      <thead><tr><th>Document</th><th>What you extract</th><th>Why it is easy or hard</th></tr></thead>
      <tbody>
        <tr><td>Loan application (URLA, Form 1003)</td><td>Borrower, employment, income, assets, liabilities, property</td><td>Standard layout, so usually the easiest</td></tr>
        <tr><td>Pay stubs</td><td>Gross and net pay, year-to-date totals, pay frequency, employer</td><td>Layouts differ by employer, but the key fields are few</td></tr>
        <tr><td>W-2s and 1099s</td><td>Wages, withholding, employer and payer details</td><td>Fixed IRS layouts. The harder job is matching each form to the right borrower and tax year</td></tr>
        <tr><td>Personal tax returns (Form 1040)</td><td>Income lines and the schedules behind them</td><td>Schedule C (self-employment), Schedule E (rental) and Schedule K-1 (partnerships) all vary</td></tr>
        <tr><td>Business tax returns (1120, 1120-S, 1065)</td><td>Entity income, deductions, owner shares</td><td>Long, dense and different by entity type. Plan human review</td></tr>
        <tr><td>Bank statements</td><td>Balances, deposits, withdrawals, account holder</td><td>Multi-page transaction tables, which are where OCR engines differ most</td></tr>
        <tr><td>Appraisal (Form 1004 is the common one)</td><td>Value, comparables, condition and adjustments</td><td>Structured fields extract well. The narrative sections need more than OCR</td></tr>
        <tr><td>Identity documents</td><td>Name, date of birth, ID number, expiry</td><td>Fixed formats, and the passport zone has built-in checks. See <a href="/resources/blogs/kyc-document-verification">KYC document verification</a></td></tr>
      </tbody>
    </table>
    <p>Some lenders also ask for IRS transcripts through Form 4506-C. See <a href="/resources/blogs/4506-c-tax-transcript-ocr">4506-C tax transcript OCR</a> for that document.</p>

    <h2>How accurate is mortgage OCR?</h2>
    <p>It depends on the document type, so ask for numbers per type and not one headline figure. The numbers we can back come from our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 benchmark</a> of 1,700 real documents. It is DocsAPI's own benchmark, so treat it as a vendor result.</p>
    <ul>
      <li>97 to 99% on clean typed text, which is the foundation for pay stubs and typed forms.</li>
      <li>91% on multi-page bank statement tables, against 64 to 79% for the OCR engines we compared.</li>
      <li>93% on invoice line items, which shows how well table structure holds up.</li>
      <li>78% on handwriting and 76% on phone-photographed documents. Both matter if borrowers photograph their paperwork.</li>
    </ul>
    <p>We have not published per-type accuracy for tax returns, business returns or appraisals, and we do not quote numbers we have not measured. Treat any vendor figure for those as a claim to test, not a fact.</p>

    <h2>Which mortgage documents need a human check?</h2>
    <p>Send these to review every time, whatever a vendor's accuracy claim says:</p>
    <ul>
      <li><strong>Business tax returns.</strong> They are the longest and most varied documents in a self-employed borrower's file, and a wrong number can change the income calculation.</li>
      <li><strong>Appraisals.</strong> The structured fields extract well, but the condition notes and adjustments are written in prose.</li>
      <li><strong>Anything photographed or handwritten.</strong> Our benchmark shows the largest accuracy drop on these.</li>
      <li><strong>Any field below your confidence line.</strong> Pick the line from your own test, then route everything under it to a queue.</li>
    </ul>

    <h2>What breaks a mortgage OCR rollout?</h2>
    <ul>
      <li><strong>No document boundaries.</strong> Borrowers often email one large PDF with no page breaks. Without splitting it into documents first, the OCR treats hundreds of pages as one document. See the <a href="/resources/blogs/document-detection-before-ocr">document detection guide</a>.</li>
      <li><strong>No match to the right borrower and year.</strong> Reading a W-2 correctly is not enough if it is filed against the wrong borrower or the wrong tax year.</li>
      <li><strong>No cross-document checks.</strong> Compare income on the application with the pay stubs and the tax return at intake, so the borrower fixes a mismatch once and not twice.</li>
      <li><strong>Raw values stored as text.</strong> Amounts and dates need to be numbers and ISO dates before the LOS can use them. See <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a>.</li>
    </ul>

    <h2>What does a mortgage OCR pipeline look like?</h2>
    <ol>
      <li><strong>Receive the packet</strong> by email, portal upload or LOS integration, and keep the original unchanged.</li>
      <li><strong>Split</strong> the packet into individual documents.</li>
      <li><strong>Classify</strong> each document: pay stub, tax return, bank statement and so on.</li>
      <li><strong>Extract</strong> the fields that belong to that document type.</li>
      <li><strong>Validate across documents,</strong> for example income on the application against the pay stubs and the return.</li>
      <li><strong>Route exceptions</strong> to a review queue.</li>
      <li><strong>Push approved data</strong> to the LOS.</li>
      <li><strong>Log every step</strong> so quality control and investor delivery have an audit trail.</li>
    </ol>

    <h2>How do you work out what mortgage OCR saves you?</h2>
    <p>Do not rely on a vendor's saved-hours figure. Measure your own file. Time 10 recent packets from intake to LOS entry, split into sorting, data entry, cross-checking and exceptions. Then use this model:</p>
    <pre><code>manual cost per file  = hours per file x loaded hourly cost
OCR cost per file     = pages x price per page
                        + exception hours x loaded hourly cost
saving per file       = manual cost - OCR cost</code></pre>
    <p>For the price per page, our starting list price is $0.02 per page, so a 300-page packet is about $6 in page charges at that price. That is before volume discounts and before your exception hours, which are usually the larger number. See <a href="/pricing">DocsAPI pricing</a> for how access works. The exception hours are what you learn from the test below.</p>

    <h2>How do you test a mortgage OCR vendor?</h2>
    <ol>
      <li>Pull 10 to 20 closed files and include at least two self-employed borrowers and one photographed document.</li>
      <li>Hand-label the fields that drive your decisions, such as gross pay, year-to-date income, balances and the income lines on the return.</li>
      <li>Run the files through the vendor and score field accuracy per document type, not overall.</li>
      <li>Count how many fields land in the review queue, and how long each file takes a person to clear.</li>
      <li>Ask for the vendor's own per-type numbers on business returns and appraisals. A vendor who cannot give them has not measured them.</li>
    </ol>
    <p>For more on judging OCR claims, see the <a href="/resources/blogs/ocr-pdf-honest-guide">honest guide to OCR</a>. The wider context is in <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a> and <a href="/resources/blogs/transforming-financial-services-the-complete-guide-to-document-automation">financial services document automation</a>. For the foundations, see the <a href="/resources/blogs/optical-character-reader-2026">optical character reader guide</a> and, for the regulatory side, <a href="/resources/blogs/ocr-technology-in-banking">OCR in banking</a>.</p>
  `,
  image: "/images/transforming-financial-services.png",
  featuredImage: "/images/transforming-financial-services.png",
  category: "Industry Trends",
  date: "June 18, 2026",
  datePublished: "2026-06-18T00:00:00.000Z",
  dateModified: "2026-10-29T00:00:00.000Z",
  last_updated: "October 29, 2026",
  readTime: "8 min read",
  author: nupuraUghade,
  primary_keyword: "mortgage ocr",
  secondary_keywords: [
    "mortgage forms ocr",
    "ocr in home loan",
    "what is ocr in home loan",
    "loan document ocr",
    "loan application ocr",
    "mortgage document automation",
    "mortgage processing automation",
    "mortgage ocr api",
    "loan origination ocr",
  ],
  tags: ["mortgage", "lending", "OCR", "automation"],
  cluster: "industry-trends",
  faq: [
    {
      question: "What is mortgage OCR?",
      answer:
        "Mortgage OCR is the use of optical character recognition to read the documents in a mortgage application, such as pay stubs, tax returns, bank statements, appraisals and ID documents, and send that data to a loan origination system without manual typing.",
    },
    {
      question: "How accurate is mortgage OCR?",
      answer:
        "It depends on the document. In our 2026 benchmark of 1,700 documents, DocsAPI scored 97 to 99% on clean typed text and 91% on multi-page bank statement tables, and lower on handwriting (78%) and phone photos (76%). We have not published per-type accuracy for tax returns or appraisals, so test any vendor on your own files.",
    },
    {
      question: "Can mortgage OCR replace processors?",
      answer:
        "No. It takes over most of the typing. Cross-checking, borrower communication, conditions and quality control still need experienced people, and so does every document the OCR is unsure about.",
    },
    {
      question: "How does mortgage OCR affect days-to-close?",
      answer:
        "It removes the wait for manual data entry, so an underwriter can see a structured file sooner. How much sooner depends on your own process, so time 10 recent files from intake to LOS entry before and after a trial.",
    },
    {
      question: "Does mortgage OCR work for self-employed borrowers?",
      answer:
        "Partly. Pay stubs and personal returns are easier. Business returns (Forms 1120, 1120-S and 1065) and the schedules behind a personal return vary a lot, so route those to human review every time.",
    },
    {
      question: "What does mortgage OCR cost per loan?",
      answer:
        "Page charges are pages times the price per page. DocsAPI starts from $0.02 per page, so a 300-page packet is about $6 before volume discounts. Your real cost also includes the hours a person spends on exceptions, so measure those in a trial.",
    },
    {
      question: "What does OCR mean in a home loan?",
      answer:
        "In Indian home loans, OCR usually means Own Contribution Receipt: the receipt a builder or seller issues when you pay your own share of the property price, which lenders ask for before releasing the loan. It is unrelated to optical character recognition, the document-reading technology this page covers, although lenders can use OCR in home loan processing to read those receipts too.",
    },
    {
      question: "Which mortgage forms does OCR handle well?",
      answer:
        "Standardized forms such as the loan application (Form 1003), W-2s, 1099s and IRS transcripts read well because their layouts rarely change. Pay stubs, bank statements, appraisals and scanned deeds vary far more, so mortgage forms OCR needs checks for each document type and human review of low-confidence fields.",
    },
  ],
}
