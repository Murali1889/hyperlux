import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-22",
  title: "OCR for Loan Underwriting: What It Reads, What It Never Decides",
  slug: "ocr-for-lending-and-underwriting",
  excerpt:
    "OCR reads the documents in a loan file. Lender rules and people decide. See what OCR extracts from each document, the classic traps, what technology lenders use, and worked DTI and SBA DSCR math.",
  description:
    "OCR only reads loan documents; rules and people decide. See what it extracts from each file, the classic traps, and worked DTI and SBA DSCR arithmetic.",
  metaTag: "OCR for Loan Underwriting: What It Reads, Never Decides",
  summary:
    "OCR for loan underwriting reads the documents in a loan file (applications, pay stubs, tax forms, bank statements) and turns them into data fields. It decides nothing. Income, debt, approval and decline reasons come from lender rules and people using what it read.",
  content: `
    <p>OCR reads. Underwriting decides. In a loan file, OCR turns applications, pay stubs, tax forms and bank statements into data fields, and lender rules and people turn those fields into an income figure, a debt-to-income ratio (DTI) and a decision. This guide covers what OCR extracts from each document, where it goes wrong, what lenders use it for, what technology they choose, and what it never decides.</p>

    <h2>What does OCR extract in lending, and what does it decide?</h2>

    <p>OCR extracts text, numbers and table rows from loan documents: names, dates, dollar amounts, account numbers, transaction lines. It decides nothing about what they mean. Income qualification, debt classification, fraud review and the approve or decline call come from lender policy, underwriting software and people. A wrong reading still feeds a wrong decision.</p>

    <p>Think of four hand-offs. OCR reads the page. A classifier names each document. A rules layer, such as an income calculator or a DTI engine, applies the lender's policy to the extracted fields. A person handles exceptions and signs the decision. OCR for mortgage documents, OCR for mortgage lenders and OCR for loan applications all sit in the first two hand-offs. Everything after them is policy.</p>

    <h2>Which documents does OCR read in a loan file, and where does it go wrong?</h2>

    <p>This table covers eight documents OCR reads in a loan file: the fields it extracts, what underwriting does with them, and the classic OCR trap. Several of the worst traps are not misread characters. They are the wrong field, the wrong document or a missing document.</p>

    <table>
      <thead><tr><th>Document</th><th>Fields OCR extracts</th><th>What underwriting uses it for</th><th>Classic OCR trap</th><th>Read more</th></tr></thead>
      <tbody>
        <tr><td>Loan application (URLA Form 1003, the Uniform Residential Loan Application)</td><td>Borrower identity, employment, income, assets, debts, property, loan terms</td><td>The claims other documents must support</td><td>Treating it as evidence. Handwriting reads worse than print</td><td><a href="/resources/blogs/mortgage-ocr">Mortgage packet checklist</a></td></tr>
        <tr><td>Pay stub</td><td>Employer, pay period and frequency, gross pay, year-to-date (YTD) gross, net pay</td><td>Monthly income, and a cross-check against deposits</td><td>Treating a stub as proof. It is a claim until deposits match</td><td><a href="/resources/blogs/pay-stub-income-verification-ocr">Pay stub cross-check</a></td></tr>
        <tr><td>W-2</td><td>Employer, tax year, Box 1 wages, Box 5 Medicare wages</td><td>Income history, and averaging of overtime or bonus</td><td>Reading Box 1 only. IRS instructions say Box 1 excludes 401(k) deferrals and Box 5 includes them</td><td><a href="/resources/blogs/w2-1099-tax-form-ocr-underwriting">W-2 versus 1099</a></td></tr>
        <tr><td>Self-employed returns (Schedule C, business returns)</td><td>Schedule C gross receipts (line 1), depreciation (line 13), net profit (line 31)</td><td>Qualifying income from net profit plus allowed add-backs</td><td>Using gross receipts or the gross 1099 amount</td><td><a href="/resources/blogs/w2-1099-tax-form-ocr-underwriting">Self-employed income</a></td></tr>
        <tr><td>IRS transcript (Form 4506-C)</td><td>Transcript type, tax year, adjusted gross income, count of income documents</td><td>An IRS record the applicant cannot edit, compared with the submitted return</td><td>Wrong transcript type (a Return Transcript omits later changes), and a Wage and Income cap of about 85 documents</td><td><a href="/resources/blogs/4506-c-tax-transcript-ocr">4506-C transcripts</a></td></tr>
        <tr><td>Bank statement</td><td>Account holder, period, balances, each transaction's date, description and amount, running balance</td><td>Assets, large deposits, cash flow, overdraft and NSF (non-sufficient funds) events, deposits matching pay</td><td>Tables across pages and cut-off descriptions. Truncate IRS TREAS 310 TAX REF and a self-explanatory deposit becomes a document request</td><td><a href="/resources/blogs/verification-of-assets-ocr">Asset checks</a>, <a href="/resources/blogs/cash-flow-underwriting-ocr">cash flow</a></td></tr>
        <tr><td>Appraisal (Form 1004)</td><td>Address, opinion of value, comparable-sales grid, condition notes</td><td>Collateral value and loan-to-value (LTV)</td><td>The comparable grid spans columns, and narrative comments are free text a person reads</td><td><a href="/resources/blogs/heloc-document-ocr">HELOC LTV</a></td></tr>
        <tr><td>Business financials and debt schedule</td><td>Revenue, net income, interest, taxes, depreciation, amortization, existing loan payments</td><td>Debt service coverage ratio (DSCR)</td><td>One dropped zero can cross the lender's DSCR cutoff (example below)</td><td><a href="/resources/blogs/the-ultimate-guide-to-small-business-lending-automation-revolutionizing-sba-loans-and-financing">SBA document collection</a></td></tr>
      </tbody>
    </table>

    <p>OCR for loan applications works best on typed, fielded forms, and every value is still the borrower's claim. Handwriting needs a person to check it.</p>

    <h2>What do lenders use OCR for in underwriting?</h2>

    <p>OCR for mortgage underwriting and OCR for loan underwriting share the same jobs: sort incoming files, type fields into the loan system, feed income, debt and asset calculations, compare documents against each other, and flag tampering. These are the main OCR use cases in lending. Each result feeds a rule or a reviewer, who decides.</p>

    <ul>
      <li><strong>Sorting packets.</strong> Mortgage files are large mixed packets. <a href="/resources/blogs/document-detection-before-ocr">Document detection before OCR</a> explains what breaks when splitting is skipped.</li>
      <li><strong>Income.</strong> <a href="/resources/blogs/pay-stub-income-verification-ocr">Pay stub verification</a> covers amount, frequency and pattern checks against deposits, <a href="/resources/blogs/w2-1099-tax-form-ocr-underwriting">W-2 versus 1099</a> shows why equal gross income qualifies differently, and <a href="/resources/blogs/4506-c-tax-transcript-ocr">4506-C transcripts</a> add an IRS record to compare.</li>
      <li><strong>Assets and debts.</strong> <a href="/resources/blogs/verification-of-assets-ocr">Verification of assets</a> covers the 50% large-deposit rule. <a href="/resources/blogs/dti-calculation-ocr">DTI calculation</a> explains which debts belong in the ratio.</li>
      <li><strong>Cash flow.</strong> <a href="/resources/blogs/cash-flow-underwriting-ocr">Cash flow underwriting</a> defines deposit volatility and runway, <a href="/resources/blogs/nsf-overdraft-detection-ocr">overdraft detection</a> shows why fee counts miss covered shortfalls, and <a href="/resources/blogs/multi-account-bank-statement-ocr">multi-account statements</a> separates duplicates from transfers.</li>
      <li><strong>Fraud checks.</strong> <a href="/resources/blogs/bank-statement-fraud-detection">Bank statement fraud detection</a> explains what PDF structure reveals that metadata does not.</li>
      <li><strong>Loan-type rules.</strong> <a href="/resources/blogs/heloc-document-ocr">home equity lines of credit (HELOCs)</a> count the full credit line, <a href="/resources/blogs/auto-loan-document-ocr">auto loans</a> turn on lien perfection, <a href="/resources/blogs/personal-loan-document-ocr">personal loans</a> face stacking, <a href="/resources/blogs/student-loan-refinance-ocr">student loan refinances</a> depend on payoff good-through dates, <a href="/resources/blogs/business-line-of-credit-ocr">business lines</a> on borrowing base eligibility, <a href="/resources/blogs/hard-money-lender-document-ocr">hard money draws</a> on lien waiver order, and <a href="/resources/blogs/credit-union-lending-ocr">credit unions</a> track member business loans.</li>
      <li><strong>State and program rules.</strong> <a href="/resources/blogs/state-mortgage-document-requirements">State mortgage document requirements</a> covers escrow interest, owed in some states and not others, and <a href="/resources/blogs/fintech-lending-api-ocr">fintech lending API OCR</a> covers the bank and fintech document trail.</li>
    </ul>

    <h3>How does OCR for credit risk assessment work?</h3>

    <p>OCR for credit risk assessment supplies the inputs, not the score. It turns statements and returns into numbers a credit model or analyst can use: deposits, balances, fee events and income. The scorecard, the cutoff and the loss forecast belong to the model and the credit policy. If an input is wrong, the risk number is still precise, and wrong.</p>

    <p>Cash flow features such as deposit volatility use every transaction, so one misclassified transfer distorts the average and everything built on it. A model trained on data not yet available at decision time also looks better in testing than live, as <a href="/resources/blogs/real-time-bank-statement-processing">real-time bank statement processing</a> explains.</p>

    <h2>What does OCR not decide in underwriting?</h2>

    <p>OCR does not decide which income counts, which debts count, whether a deposit is a problem, whether a document is genuine, or whether to approve. Those are policy and human judgment. OCR also cannot explain a denial: under Regulation B, which implements the Equal Credit Opportunity Act (ECOA), reasons must describe the factors the creditor actually considered.</p>

    <ul>
      <li><strong>Which income counts.</strong> In our W-2 versus 1099 guide, $140,000 of gross income becomes $140,000 of qualifying income for a salaried borrower and $102,000 for a consultant with $38,000 of deductible expenses. Same reading, different rule.</li>
      <li><strong>Which debts count.</strong> Fannie Mae's guide lets a lender leave out a debt someone else pays only with that person's last 12 months of canceled checks or bank statements showing no late payments. OCR only reads those statements.</li>
      <li><strong>Whether a deposit matters.</strong> Fannie Mae defines a large deposit as a single deposit above 50% of total monthly qualifying income. On purchase loans, funds from an undocumented large deposit reduce verified funds. OCR reads the amount and description, nothing more.</li>
      <li><strong>Whether a document is real.</strong> OCR reads a forged pay stub as faithfully as a real one. Tampering checks use file structure and independent records such as IRS transcripts, and our pay stub guide argues a failed cross-check should route to a person, not trigger an automatic decline.</li>
      <li><strong>What the applicant is told.</strong> Regulation B (12 CFR 1002.9(b)(2)) requires specific, principal reasons, and citing internal standards or a failed qualifying score is insufficient. The official interpretation says reasons must relate to and accurately describe the factors actually considered or scored. Our <a href="/resources/blogs/ecoa-compliance-document-ocr">ECOA compliance guide</a> covers how explanation models drift from the deciding model. Not legal advice.</li>
    </ul>

    <h2>Worked example: from extracted fields to a DTI and a large-deposit check</h2>

    <p>This example shows where extraction ends and rules begin. The numbers are invented, and we ran every calculation in Python. The rules (1% student loan default, 12-month rule for debts paid by others, 50% large-deposit test, DTI limits) come from Fannie Mae's Selling Guide as we read it in September 2026. Other investors differ.</p>

    <table>
      <thead><tr><th>Source document</th><th>Fields OCR extracted</th><th>Example values</th></tr></thead>
      <tbody>
        <tr><td>Pay stub</td><td>Pay frequency; gross pay this period; YTD gross after 22 pay periods</td><td>Biweekly (26 a year); $2,600.00; $57,200.00</td></tr>
        <tr><td>Application and credit report</td><td>Housing payment; co-signed auto payment (someone else pays it); card minimum; deferred student loan balance, no payment shown</td><td>$1,850; $410; $75; $24,000</td></tr>
        <tr><td>Bank statements</td><td>Verified balance; three deposits (amount and description)</td><td>$18,400; $3,000 MOBILE DEPOSIT, $4,200 IRS TREAS 310 TAX REF, $2,500 TRANSFER</td></tr>
      </tbody>
    </table>

    <ol>
      <li>Monthly income: $2,600.00 × 26 ÷ 12 = $5,633.33. The stub agrees with itself: $57,200 ÷ 22 = $2,600.00.</li>
      <li>Student loan: no payment is shown, so use 1% of the balance: 1% × $24,000 = $240. The guide also allows a fully amortizing payment from documented repayment terms.</li>
      <li>DTI with every debt: ($1,850 + $410 + $75 + $240) ÷ $5,633.33 = $2,575 ÷ $5,633.33 = 45.71%.</li>
      <li>If the other borrower pays the auto loan and the file holds 12 months of that person's bank statements with no late payments, drop the $410: $2,165 ÷ $5,633.33 = 38.43%.</li>
      <li>Limits: 50% for loans run through Desktop Underwriter (DU), Fannie Mae's underwriting software; for manual underwriting, 36%, extendable to 45% if credit score and reserve requirements are met. So 45.71% passes DU but exceeds the manual ceiling, and 38.43% is under it if those requirements are met. Lender policy can be stricter.</li>
      <li>Large deposits: 50% × $5,633.33 = $2,816.67. The $4,200 deposit is over that line, but its description shows an IRS tax refund, which needs no further documentation. The $3,000 deposit is over it and says nothing about its source, so the lender asks for documents. The $2,500 deposit is under it. If the $3,000 cannot be documented, verified funds fall from $18,400 to $15,400.</li>
    </ol>

    <p>Now the OCR risk. Cut the $4,200 description to IRS TREAS 310 and the deposit stops being self-explanatory, so the borrower gets a needless request. Misread 22 pay periods as 2 and the YTD check fails on a good stub. The decision still belongs to the rule and the person.</p>

    <h2>What OCR technology do lenders use for underwriting?</h2>

    <p>Lenders use four kinds of technology: in-house or open source OCR engines, cloud OCR and document APIs, intelligent document processing (IDP) platforms for lenders, and bank data connections that skip documents when the borrower can link an account. They combine, because a connection only covers linkable accounts and everything else arrives as a PDF.</p>

    <table>
      <thead><tr><th>Category</th><th>What it is</th><th>What we verified on vendor pages</th><th>Fits when</th></tr></thead>
      <tbody>
        <tr><td>In-house and open source</td><td>Engines you run and maintain, such as Tesseract and PaddleOCR</td><td>In <a href="/resources/blogs/ocr-accuracy-benchmark-2026">our benchmark</a> both reached 97-99% on clean typed English, but scored 64% (Tesseract) and 79% (PaddleOCR) on multi-page scanned bank statements</td><td>You have engineers and mostly clean documents</td></tr>
        <tr><td>Cloud OCR and document APIs</td><td>Managed APIs from the large cloud providers</td><td>Amazon Textract Analyze Lending splits a packet, classifies pages (including 1003, 1008, pay slips, W-2 and bank statements) and extracts fields, asynchronously only. Google Document AI lists bank statement, W2 and pay slip parsers. Microsoft Document Intelligence has prebuilt models for Forms 1003, 1004, 1005 (employment verification), 1008 (underwriting transmittal summary) and the Closing Disclosure, English only</td><td>Developers building into a loan origination system (LOS)</td></tr>
        <tr><td>IDP platforms for lenders</td><td>Products that add income, condition and workflow layers on top of OCR</td><td>Ocrolus calls itself an AI workflow and analytics platform for lenders and lists bank statements, pay stubs and tax documents. DocsAPI is our own product, a document API covering bank statements, pay stubs, tax forms and mortgage documents</td><td>You want income calculations and workflow, not only fields</td></tr>
        <tr><td>Bank data connections</td><td>The borrower links an account and the lender receives transaction data</td><td>Plaid Check Consumer Report offers up to 24 months of consumer-permissioned bank account data with categorized inflows and outflows. Fannie Mae's Day 1 Certainty applies when income, employment or asset information is validated through Desktop Underwriter</td><td>Borrowers can link accounts. OCR still handles PDFs, returns and paper</td></tr>
      </tbody>
    </table>

    <h3>What OCR software do banks use?</h3>

    <p>No public source lists which OCR software each bank uses, so any ranking would be a guess. AWS says BlueVine used Amazon Textract to process Paycheck Protection Program applications at "tens of thousands of PPP forms per day", a fintech lender's claim we could not check.</p>

    <p>Ask any vendor for named references you can call, and test on your own files. Our <a href="/resources/blogs/ocr-technology-in-banking">OCR technology in banking guide</a> lists five demo tests, <a href="/resources/blogs/aws-textract-vs-docsapi">AWS Textract vs DocsAPI</a> compares the biggest cloud option with ours, <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a> ranks tools by use case, and <a href="/resources/blogs/ocr-bank-statement-technology-revolutionizing-financial-data-processing">bank statement OCR</a> explains multi-page table stitching.</p>

    <h2>How does OCR for SBA loan processing work?</h2>

    <p>OCR for SBA loan processing reads SBA Form 1919, the business's tax returns, financial statements, debt schedule and bank statements so the lender can run its own credit analysis. For 7(a) Small Loans, up to $350,000, SBA requires debt service coverage of at least 1.1:1 and a review of the two most recent months of commercial bank activity.</p>

    <p>SBA dropped its SBSS (FICO Small Business Scoring Service) score for 7(a) Small loans on March 1, 2026 (Procedural Notice 5000-875701). SOP 50 10 8.1 takes effect October 1, 2026 for loans that receive an SBA loan number on or after that date, and NAGGL says it folds in earlier notices, so read the current text before building rules.</p>

    <p>The notice defines debt service coverage as operating cash flow divided by debt service. Operating cash flow is EBITDA (earnings before interest, taxes, depreciation and amortization), with additions and subtractions allowed under SBA's Standard 7(a) rules. Debt service is the future required principal and interest on all business debt, including the new SBA loan. The credit memo must also say why credit is not available elsewhere, which OCR cannot write.</p>

    <p>Example, with invented numbers. From the return, OCR reads net income $78,000, interest $14,000, taxes $8,000, depreciation $22,000 and amortization $2,000, so EBITDA is $124,000. The debt schedule shows $60,000 a year of existing payments. The new loan is $250,000 over 10 years at an example rate of 10.5%, not an SBA rate. The standard amortizing payment formula gives $3,373.37 a month, or $40,480.50 a year. Debt service is $60,000 + $40,480.50 = $100,480.50, so DSCR = $124,000 ÷ $100,480.50 = 1.23, above 1.1.</p>

    <p>Now let OCR drop a zero on depreciation and read $2,200. EBITDA becomes $104,200 and DSCR becomes 1.04, under 1.1, so a good file looks like a decline. An extra zero would do the reverse and lift a weak file over the line. Check the fields that drive the ratio and tie components to totals. Our <a href="/resources/blogs/the-ultimate-guide-to-small-business-lending-automation-revolutionizing-sba-loans-and-financing">SBA lending automation guide</a> covers the document-collection side of a 7(a) file.</p>

    <h2>Does OCR make loan processing faster, and by how much?</h2>

    <p>OCR removes sorting and typing time, not waiting time. A borrower who has not uploaded a document, an appraisal not yet ordered, or a condition that needs judgment still takes days. We found no independent, sourced industry figure for time saved, so we give none. Time your own files before and after a pilot.</p>

    <p>How often a file needs a person matters too. A vendor's 99% usually means per field, not per document. A multi-page statement can hold 100 to 200 extracted fields, the range our <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing guide</a> uses, so the table takes 150. If each field is independently right 99% of the time, the chance of a fully clean statement is 0.99 raised to the power of 150.</p>

    <table>
      <thead><tr><th>Field accuracy</th><th>Fields per statement</th><th>Chance the whole statement has zero errors</th></tr></thead>
      <tbody>
        <tr><td>99.0%</td><td>150</td><td>22.1%</td></tr>
        <tr><td>99.5%</td><td>150</td><td>47.1%</td></tr>
        <tr><td>99.9%</td><td>150</td><td>86.1%</td></tr>
      </tbody>
    </table>

    <p>Real errors cluster, so treat this as a planning estimate. In <a href="/resources/blogs/ocr-accuracy-benchmark-2026">our benchmark</a> the best result on multi-page bank statement tables was 91% and the worst was 64%, a gap of nearly 30 points, while clean typed English scored 97-99% on every engine. Size your review queue on your own documents.</p>

    <h2>What to do next</h2>

    <ul>
      <li><strong>Choosing a vendor:</strong> score about 50 real files, messy ones included, field by field. <a href="/resources/blogs/how-to-measure-ocr-accuracy">How to measure OCR accuracy</a> explains how.</li>
      <li><strong>Underwriting mortgages or consumer loans:</strong> start with pay stubs, W-2s and bank statements, then add income, debt and deposit rules. <a href="/resources/blogs/mortgage-ocr">Mortgage OCR</a> has the packet checklist.</li>
      <li><strong>Underwriting SBA or small business loans:</strong> start with bank statements and business returns, and check your DSCR inputs against the current SOP text.</li>
      <li><strong>Borrowers can link accounts:</strong> use the data connection first and keep OCR for everything else.</li>
      <li><strong>Also verifying identity or taxes:</strong> <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification</a> covers identity checks, <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">OCR for passports, ID cards and driver's licenses</a> covers the documents, and <a href="/resources/blogs/ocr-for-tax-documents">OCR for tax documents</a> goes deeper on returns.</li>
    </ul>

    <p>To see loan documents read and checked end to end, the <a href="/use-cases/loan-verification">DocsAPI loan verification page</a> shows how our product handles it.</p>

    <h2>Sources and how we checked this</h2>

    <p>We opened each source below in September 2026. We did not test other vendors' accuracy.</p>

    <ul>
      <li>Vendor documentation, which describes each vendor's own products and includes unverified claims: <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/mortgage-documents?view=doc-intel-4.0.0">Microsoft mortgage models</a> (dated 2026-08-15), <a href="https://docs.aws.amazon.com/textract/latest/dg/lending-document-classification-extraction.html">AWS Analyzing Lending Documents</a>, <a href="https://aws.amazon.com/what-is/ocr/">AWS What is OCR</a> (the BlueVine claim), <a href="https://docs.cloud.google.com/document-ai/docs/pretrained-overview">Google Document AI</a>, <a href="https://plaid.com/docs/check/">Plaid Check</a> and the <a href="https://www.ocrolus.com/mortgage/">Ocrolus mortgage page</a>.</li>
      <li>Fannie Mae Selling Guide: <a href="https://selling-guide.fanniemae.com/sel/b3-4.2-02/depository-accounts">B3-4.2-02 large deposits</a>, <a href="https://selling-guide.fanniemae.com/sel/b3-6-05/monthly-debt-obligations">B3-6-05 debt obligations</a>, <a href="https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios">B3-6-02 DTI limits</a> and <a href="https://selling-guide.fanniemae.com/sel/b3-3.1-02/standards-employment-documentation">B3-3.1-02 paystubs</a>. Also the <a href="https://www.prnewswire.com/news-releases/fannie-mae-provides-day-1-certainty-new-enhancement-further-streamlines-mortgage-origination-process-for-lenders-and-homebuyers-302081628.html">Day 1 Certainty release</a>.</li>
      <li>IRS: <a href="https://www.irs.gov/instructions/iw2w3">Forms W-2 and W-3 instructions</a>, <a href="https://www.irs.gov/pub/irs-pdf/f1040sc.pdf">Schedule C (2025 form)</a> and <a href="https://www.irs.gov/individuals/transcript-types-and-ways-to-order-them">transcript types</a>.</li>
      <li>SBA: <a href="https://www.naggl.org/wp-content/uploads/2026/05/5000-875701.pdf">Procedural Notice 5000-875701</a>, the <a href="https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs">SOP 50 10 page</a>, <a href="https://legacy.sba.gov/document/information-notice-5000-880695-issuance-sop-50-10-81">Information Notice 5000-880695</a>, the <a href="https://legacy.sba.gov/document/sba-form-1919-borrower-information-form">Form 1919 page</a> and <a href="https://www.naggl.org/two-major-sba-announcements-issuance-of-sop-50-10-8-1-and-a-new-expansion-of-the-itl-program/">NAGGL's summary</a>.</li>
      <li>CFPB: <a href="https://www.consumerfinance.gov/rules-policy/regulations/1002/9/">Regulation B section 1002.9</a> and its <a href="https://www.consumerfinance.gov/rules-policy/regulations/1002/interp-9/">official interpretation</a>.</li>
      <li>Our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> (1,900 real documents, 8 engines). We build DocsAPI, so it is a vendor benchmark.</li>
    </ul>

    <p>Limits: we ran the DTI, deposit, DSCR and compounding arithmetic in Python, but the inputs are invented. Guidelines change, so confirm current text before you build rules. Fannie Mae's Day 1 Certainty page was blocked, so we used its press release. This page is not legal, tax or credit advice.</p>

    <p>Related guide: <a href="/resources/blogs/smb-lending-automation-document-processing">SMB lending automation tools for document processing</a>.</p>
  `,
  image: "/images/the-ultimate-guide-to-small-business.png",
  featuredImage: "/images/the-ultimate-guide-to-small-business.png",
  category: "Lending",
  date: "September 22, 2026",
  datePublished: "2026-09-22T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
  last_updated: "September 28, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "ocr for loan underwriting",
  secondary_keywords: [
    "ocr for mortgage documents",
    "ocr for loan applications",
    "ocr for mortgage lenders",
    "ocr for mortgage underwriting",
    "ocr for sba loan processing",
    "ocr for credit risk assessment",
    "what ocr technology do lenders use for underwriting",
    "what ocr software do banks use",
    "ocr use cases in lending",
  ],
  tags: [
    "OCR for lending",
    "loan underwriting",
    "mortgage documents",
    "SBA loans",
    "credit risk assessment",
    "bank statements",
    "document extraction",
  ],
  cluster: "industry-trends",
  noindex: true,
  faq: [
    {
      question: "Can OCR for loan applications read handwriting?",
      answer:
        "Only partly. In our benchmark, handwritten forms scored 61% for Tesseract, 73% for PaddleOCR and 78% for DocsAPI, our own product. That is far below the 97-99% every engine reached on clean typed English. Send handwritten applications to a person for review, and prefer typed or digital application channels where you can.",
    },
    {
      question: "Can a lender approve a loan automatically from OCR output?",
      answer:
        "OCR only supplies data. A person or a rules engine, such as Fannie Mae's Desktop Underwriter for eligible mortgages, applies the lender's rules to that data. Whoever or whatever decides, a lender generally has 30 days after a completed application to notify the applicant, and a denial needs specific, accurate reasons under Regulation B. Keep extraction, rules and reasons traceable to the same source fields.",
    },
    {
      question: "How recent must a pay stub be for a mortgage?",
      answer:
        "Fannie Mae's guide says the most recent paystub must be dated no earlier than 30 days before the initial loan application date and must include all year-to-date earnings. W-2s must cover the most recent one or two years depending on income type, and a year-end paystub can replace the W-2. Other investors and loan types can differ.",
    },
    {
      question: "What is the difference between OCR and intelligent document processing?",
      answer:
        "OCR converts an image of text into text. Intelligent document processing (IDP) wraps OCR with classification, field extraction, validation and routing, so a pay stub is recognized as a pay stub and its fields are checked. Lender workflows need IDP, not bare OCR, but the reading step underneath is still OCR.",
    },
    {
      question: "When should a lender use a bank data connection instead of OCR?",
      answer:
        "Use a connection when the borrower can link the account and you are allowed to use that data, because it skips the document. Use OCR for what a connection cannot cover: PDF statements from accounts that cannot be linked, tax returns, pay stubs and appraisals. A lender can support both paths and compare which one closes files faster.",
    },
    {
      question: "How do lenders catch OCR mistakes before a decision?",
      answer:
        "Three habits help. Confidence scores send doubtful fields to a person. Arithmetic checks tie a document to itself, such as pay stub YTD divided by pay periods, or statement balances that roll forward. Cross-document checks compare a stub with deposits and a return with an IRS transcript. None of this replaces testing on your own files.",
    },
    {
      question: "Does OCR detect forged documents?",
      answer:
        "No. OCR reads what is printed, including forged numbers. Forgery detection is a separate step: PDF structure and metadata checks, digital signature validation where a bank signs its statements, and independent records such as IRS transcripts. Structural checks catch edits made after a file was created, but they cannot catch every method.",
    },
    {
      question: "Do different loan types need different OCR rules?",
      answer:
        "Yes. The reading is similar, but each product hangs different rules on the fields. A HELOC counts its full credit line in combined loan-to-value, an auto loan needs lien status checked with the state, a student loan refinance depends on each payoff's good-through date, and a credit union must classify member business loans.",
    },
    {
      question: "What should I ask an OCR vendor for lending before I sign?",
      answer:
        "Ask whether accuracy is per character, per field or per document, and ask for results on your own worst files, not a demo. Ask how confidence scores route work to reviewers, whether each field links back to its source page for audit, whether the vendor trains on your documents, and how long it keeps them.",
    },
  ],
}
