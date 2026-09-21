import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "12",
  title: "OCR for Bank Statements, Checks and Utility Bills: Worked Math",
  slug: "ocr-bank-statement-technology-revolutionizing-financial-data-processing",
  excerpt:
    "OCR turns bank statements, checks and utility bills into data, then proves the read with arithmetic and checksums. Worked examples, how lenders verify statements, and why meter photos are a different problem.",
  description:
    "How OCR for bank statements, checks and utility bills works: the fields, the sums and checksums that prove it, and how lenders verify statements.",
  metaTag: "OCR for Bank Statements, Checks and Utility Bills",
  summary:
    "OCR for bank statements reads account details, opening and closing balances, and every transaction row, then proves the read with one sum: opening balance plus credits minus debits must equal closing balance. Lenders add authenticity checks or pull data straight from the bank.",
  content: `
    <p>OCR for bank statements turns a PDF or photo into rows of data, then checks its own work with arithmetic: opening balance plus credits minus debits must equal the closing balance. Checks work differently. They carry a magnetic-ink line whose routing number has its own checksum. Utility bills are ordinary text, but utility meter photos are an image problem. This page gives the field lists, worked math and lender checks.</p>

    <h2>What does OCR for bank statements extract?</h2>

    <p>OCR for bank statements reads the account header (holder, bank, account number, statement period), the opening and closing balances, and every transaction as a row with a date, description, amount and debit or credit direction. Some banks also print a running balance after each row. The output is JSON or CSV.</p>

    <table>
      <thead><tr><th>Field</th><th>Common trap</th></tr></thead>
      <tbody>
        <tr><td>Account holder and number</td><td>Joint accounts list two names; the number is usually masked</td></tr>
        <tr><td>Statement period</td><td>Rows print dates like 07/17 with no year, so the period supplies it</td></tr>
        <tr><td>Opening and closing balance</td><td>Labels vary (beginning, ending); "available balance" is a different number</td></tr>
        <tr><td>Transaction date and description</td><td>Long descriptions wrap onto a second line</td></tr>
        <tr><td>Amount, debit or credit</td><td>Two columns, one signed column, or CR and DR suffixes</td></tr>
        <tr><td>Running balance</td><td>Many banks print only daily balances</td></tr>
      </tbody>
    </table>

    <p>Field names differ by vendor. Microsoft's public schema for its US bank statement model returns BeginningBalance and EndingBalance per account, and Date, Description, CheckNumber, DepositAmount and WithdrawalAmount per transaction. As of the version we read, it has no running balance and no total credits or debits, so confirm what your tool returns.</p>

    <p>OCR is for scans and photos; a PDF from the bank's website already holds its text (<a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDF vs image PDF</a> has a two-second test).</p>

    <h2>Why does bank statement OCR fail, and how do you prove it read the statement right?</h2>

    <p>It usually fails on table structure, not on letters. Amounts land in the wrong column, rows split at page breaks, and page subtotals or wrapped descriptions become fake rows. You catch this with one sum: opening balance plus credits minus debits must equal the closing balance to the cent. If it misses by one cent, at least one number is wrong.</p>

    <p>Table handling is the real gap between engines. In the 500-document OCR-engine set of our benchmark, character-level accuracy on scanned multi-page bank statement tables was 64% for Tesseract 5.x, 79% for PaddleOCR and 91% for DocsAPI. On the separate 1,200-document parser set, bank statement tables scored 76% for Docling, 71% for LlamaParse and 91% for DocsAPI. DocsAPI is our product, so see the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">full benchmark method</a>. Most engines treat each page as its own table (<a href="/resources/blogs/pdf-parser-online">PDF parser online</a> explains).</p>

    <h3>The reconciliation check, worked</h3>

    <p>Here is a made-up August statement. The opening balance on August 1 is 4,250.00, and the bank prints a running balance after each row.</p>

    <table>
      <thead><tr><th>Date</th><th>Description</th><th>Debit</th><th>Credit</th><th>Running balance</th></tr></thead>
      <tbody>
        <tr><td>Aug 3</td><td>Deposit, card settlement</td><td></td><td>3,120.45</td><td>7,370.45</td></tr>
        <tr><td>Aug 5</td><td>Check 1041</td><td>1,200.00</td><td></td><td>6,170.45</td></tr>
        <tr><td>Aug 7</td><td>ACH rent</td><td>1,850.00</td><td></td><td>4,320.45</td></tr>
        <tr><td>Aug 12</td><td>Deposit</td><td></td><td>2,480.00</td><td>6,800.45</td></tr>
        <tr><td>Aug 14</td><td>POS fuel</td><td>64.18</td><td></td><td>6,736.27</td></tr>
        <tr><td>Aug 18</td><td>ACH payroll</td><td>2,900.00</td><td></td><td>3,836.27</td></tr>
        <tr><td>Aug 21</td><td>Deposit</td><td></td><td>1,975.30</td><td>5,811.57</td></tr>
        <tr><td>Aug 27</td><td>Service fee</td><td>15.00</td><td></td><td>5,796.57</td></tr>
        <tr><td>Aug 29</td><td>Check 1042</td><td>410.75</td><td></td><td>5,385.82</td></tr>
      </tbody>
    </table>

    <p>Credits: 3,120.45 + 2,480.00 + 1,975.30 = 7,575.75. Debits: 1,200.00 + 1,850.00 + 64.18 + 2,900.00 + 15.00 + 410.75 = 6,439.93. So 4,250.00 plus 7,575.75 minus 6,439.93 = 5,385.82, which matches the closing balance. Now break it three ways:</p>

    <table>
      <thead><tr><th>What OCR got wrong</th><th>Computed closing balance</th><th>Gap to the printed 5,385.82</th></tr></thead>
      <tbody>
        <tr><td>The Aug 12 deposit of 2,480.00 read into the debit column</td><td>425.82</td><td>4,960.00 too low (twice 2,480.00)</td></tr>
        <tr><td>The Aug 21 deposit of 1,975.30 lost at a page break</td><td>3,410.52</td><td>1,975.30 too low</td></tr>
        <tr><td>Rent of 1,850.00 read as 1,650.00</td><td>5,585.82</td><td>200.00 too high</td></tr>
      </tbody>
    </table>

    <p>Any gap sends the statement to review. If a running balance is printed, also test each row: previous balance, minus the debit or plus the credit, must equal the printed one. In the third case, row 3 expects 4,520.45 but the bank printed 4,320.45, which points to the bad row.</p>

    <h3>What the check cannot tell you</h3>

    <ul>
      <li>It proves the numbers agree, not that the statement is genuine. A careful edit can keep the arithmetic consistent (see <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a>).</li>
      <li>A right amount under a truncated description passes the sum, yet the description decides whether a large deposit needs explaining.</li>
      <li>One closing balance should also equal the next opening balance, which <a href="/resources/blogs/multi-account-bank-statement-ocr">multi-account bank statement OCR</a> covers.</li>
    </ul>

    <h2>How do lenders verify bank statements automatically?</h2>

    <p>Lenders use three routes, often together. Software reads the statement and checks its arithmetic and required fields. Forensic checks look for signs of editing, such as font differences, suspiciously round numbers, typos and totals that do not add up (Ocrolus lists these). Or, with the borrower's permission, the lender pulls data straight from the bank and skips the document.</p>

    <p>For mortgages sold to Fannie Mae, section B3-4.2-01 says a statement must show the institution, the borrower as account holder, the last four digits of the account number, the period, all deposits and withdrawals, and the ending balance. A purchase needs the most recent full two-month period, a refinance one month, and a statement over 45 days old needs supplemental bank-generated documentation. The guide also accepts direct verification by a vendor when the borrower authorizes it.</p>

    <p>Section B3-4.2-02 defines a large deposit as a single deposit above 50% of total monthly qualifying income. If the source (payroll, Social Security, an IRS refund, a transfer between verified accounts) is printed on the statement, nothing more is needed. These are mortgage rules; other lenders set their own. OCR reads the fields so rules can run; it does not decide whether a deposit is acceptable (<a href="/resources/blogs/verification-of-assets-ocr">verification of assets OCR</a> works the rule).</p>

    <h2>What do OCR for underwriters and OCR for bank statement analysis need to deliver?</h2>

    <p>Clean rows plus a few computed numbers: verified balances, every deposit with its full description, fee and overdraft counts, and a flag on anything the software doubted. Extraction reads the statement. Analysis, the next step, categorizes transactions and computes income, average balance and overdraft signals. It is only as good as the rows under it.</p>

    <table>
      <thead><tr><th>Underwriter asks</th><th>What breaks it</th></tr></thead>
      <tbody>
        <tr><td>Is income steady?</td><td>Own-account transfers counted as income (<a href="/resources/blogs/cash-flow-underwriting-ocr">cash flow underwriting OCR</a>)</td></tr>
        <tr><td>Any overdrafts or NSF?</td><td>Shortfalls covered by a linked account leave no fee (<a href="/resources/blogs/nsf-overdraft-detection-ocr">NSF overdraft detection OCR</a>)</td></tr>
        <tr><td>Was this data known at decision time?</td><td>Training on data the model could not have had (<a href="/resources/blogs/real-time-bank-statement-processing">real-time bank statement processing</a>)</td></tr>
      </tbody>
    </table>

    <p>Small error rates add up. The <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing</a> post estimates 100 to 200 fields on a multi-page statement. At 150 fields and 99% field accuracy, the chance of zero errors is 0.99 to the power of 150, about 0.22 (assuming independent errors), so the reconciliation check and a review queue matter more than a headline accuracy number. More: <a href="/resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions">automated bank statement analysis</a> and <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a>.</p>

    <h2>How does OCR for checks read a bank check?</h2>

    <p>OCR for checks reads two zones. The face holds the payee, the amount in numbers and in words, the date, the memo and the signature. The bottom line, the MICR line, holds the routing number, account number and check number in magnetic ink. OCR for bank checks is safest when the routing number is validated with its own checksum.</p>

    <table>
      <thead><tr><th>Field</th><th>What to validate</th></tr></thead>
      <tbody>
        <tr><td>Amount in numbers and in words</td><td>They must agree; if not, a person decides</td></tr>
        <tr><td>Date</td><td>A bank need not pay a check presented over six months after its date (UCC 4-404), so flag old dates</td></tr>
        <tr><td>Routing number (MICR)</td><td>Nine digits that pass the checksum below</td></tr>
        <tr><td>Amount (MICR)</td><td>Added later in processing, so an unprocessed check often has none; use the face</td></tr>
      </tbody>
    </table>

    <h3>What is the MICR line?</h3>

    <p>MICR means magnetic ink character recognition. Regulation CC (12 CFR 229.2) defines the MICR line as numbers printed near the bottom of a check in magnetic ink under ANSI standard X9.13, such as the routing, account and check numbers. US checks use the E-13B font: 10 digits and four symbols (transit, on-us, amount, dash). Bank scanners read the magnetism. A phone photo has only the picture, so OCR must recognize E-13B shapes from pixels.</p>

    <p>Layout varies by check style (Microsoft's sample puts the check number first), so read fields by the symbols around them. The US Treasury's OTCnet check capture flags a "Reject Characters Detected" error when the MICR line cannot be read, offers a rescan for skewed or upside-down images, and lets only a supervisor or lead operator key in a corrected line. Never guess silently.</p>

    <h3>The routing number checksum, worked</h3>

    <p>A US routing number has nine digits: a four-digit Federal Reserve routing symbol, a four-digit institution identifier and a check digit. The Federal Reserve Bank of New York announced the check digit in Circular 8203 (October 19, 1977) as the last digit of the routing number field, computed "modulus-10, weights 3, 7, 1". Multiply the digits by 3, 7, 1, 3, 7, 1, 3, 7, 1, add the products, and the total must be a multiple of 10. We use 021000021 only for the arithmetic, not to say whose it is.</p>

    <table>
      <thead><tr><th>Position</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
      <tbody>
        <tr><td>Digit</td><td>0</td><td>2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>2</td><td>1</td></tr>
        <tr><td>Weight</td><td>3</td><td>7</td><td>1</td><td>3</td><td>7</td><td>1</td><td>3</td><td>7</td><td>1</td></tr>
        <tr><td>Product</td><td>0</td><td>14</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>14</td><td>1</td></tr>
      </tbody>
    </table>

    <p>The products add up to 30, so the number is valid. Here is what the test catches:</p>

    <table>
      <thead><tr><th>What OCR did</th><th>Number</th><th>Total</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td>Correct read</td><td>021000021</td><td>30</td><td>Pass</td></tr>
        <tr><td>Last digit misread (1 as 2)</td><td>021000022</td><td>31</td><td>Fail</td></tr>
        <tr><td>Made-up valid number</td><td>016100004</td><td>20</td><td>Pass</td></tr>
        <tr><td>Same, with 1 and 6 swapped</td><td>061100004</td><td>50</td><td>Pass (missed)</td></tr>
      </tbody>
    </table>

    <p>We brute-forced it in Python. Across 20,000 random valid numbers, all 1,620,000 single-digit errors failed the test, and adjacent swaps were missed only when the two digits differ by exactly 5 (1 and 6, 2 and 7). If one digit is unreadable and you know its position, exactly one of the ten digits passes, so the checksum can repair it. With two uncertain positions, ask a person.</p>

    <pre><code>def routing_ok(r):
    if len(r) != 9 or not r.isdigit():
        return False
    weights = [3, 7, 1] * 3
    return sum(int(d) * w for d, w in zip(r, weights)) % 10 == 0

print(routing_ok("021000021"))  # True
print(routing_ok("021000022"))  # False
print(routing_ok("123456789"))  # False</code></pre>

    <p>The last line is the sample routing number on Microsoft's check schema page, which fails (its products total 159). A pass proves the number is well formed, not that it is assigned or that the check is genuine, so look it up in the Federal Reserve's E-Payments Routing Directory. Passport MRZ check digits work similarly (<a href="/resources/blogs/mrz-passport-verification">details</a>).</p>

    <h2>Can OCR for utility bills prove where someone lives?</h2>

    <p>OCR for utility bills can reliably read the name, service address and bill date. Whether that proves an address depends on who is asking: the allowed bill age, and whether the service or mailing address counts, differ by requester. OCR also cannot tell a genuine bill from a forged one.</p>

    <table>
      <thead><tr><th>Field</th><th>Trap</th></tr></thead>
      <tbody>
        <tr><td>Service address</td><td>Where service is supplied; can differ from the mailing address</td></tr>
        <tr><td>Mailing address</td><td>May be a PO box; California's DMV also wants a physical address</td></tr>
        <tr><td>Bill date</td><td>Starts the age clock for most requesters; confused with the due date or period end</td></tr>
      </tbody>
    </table>

    <p>There is no single date rule. Canada's FINTRAC lists a utility bill as a reliable source for name and address and says only that the information must be valid and current, with no day count. California's DMV accepts home utility bills and bank records, and asks for two different documents. Windows of three to six months are common in KYC and some regions use two (see <a href="/resources/blogs/proof-of-address-verification">proof of address verification</a>, which also covers address matching and file forensics).</p>

    <p>Example: a bill dated July 15, 2026, checked on September 21, 2026, is 68 days old. It passes a 90-day rule and fails a 60-day rule. If OCR reads the due date as the bill date, an old bill looks newer than it is, so label every date and let a per-customer policy set the window.</p>

    <h2>Is OCR for utility meter readings the same problem?</h2>

    <p>No. A utility bill prints its numbers as text, so OCR reads them. OCR for utility meter readings starts from a photo of a physical meter, with glare, dirt, tilt and digit wheels caught mid-turn. That is mostly image recognition: find the counter, straighten it, recognize the digits, and reject photos that cannot be read.</p>

    <p>The clearest evidence is a published study by Laroca and colleagues (IEEE Access, 2021). Their Copel-AMR dataset holds 12,500 meter images taken in the field by an energy company's employees, and 2,500 (20%) cannot be read at all because of occlusion or faulty meters. On their data, rejecting low-confidence readings gave recognition of 99% or better, filtering out 98.9% of illegible meters while accepting 99.82% of legible ones. That is one utility's photos, not a guarantee for yours.</p>

    <p>Electromechanical meters have digit wheels that can be caught mid-turn, so the authors follow the utility's protocol of labeling the lower digit (a wheel between 4 and 5 counts as 4). Models trained on general text data are likely to fail on rotating digits. What works:</p>

    <ol>
      <li>Use smart meter or utility account data if available, and skip the photo.</li>
      <li>If you need photos, use a detect, straighten and recognize pipeline built for meters, not general document OCR.</li>
      <li>Reject unreadable photos and ask for another. Do not guess.</li>
      <li>Validate: a cumulative register only counts up, so a lower reading is a misread or a rollover.</li>
    </ol>

    <p>DocsAPI's supported document list includes utility bills, not meter photos, so for meters look at a meter-specific model.</p>

    <h2>Do OCR for financial statement extraction and OCR for reconciling transactions work the same way?</h2>

    <p>They share one idea: extract the numbers, then test that they tie. OCR for financial statement extraction reads balance sheets, income statements and cash flow statements into line items and checks that subtotals add up and assets equal liabilities plus equity. OCR for reconciling transactions matches bank statement rows to your ledger and explains every difference.</p>

    <h3>Financial statements</h3>

    <p>LlamaIndex defines financial statement extraction as turning income statements, balance sheets and cash flow statements into machine-readable data. The hard part is layout: a prior-year column beside the current one, nested tables and footnotes.</p>

    <p>Take a made-up balance sheet: cash 18,400, receivables 26,150, inventory 12,300 and equipment 43,150 total 100,000. Liabilities of 21,700, 15,000 and 28,300 total 65,000, and with owner's equity of 35,000 the sum is also 100,000: assets equal liabilities plus equity, the accounting equation in OpenStax's textbook. If OCR reads receivables as 26,750, assets become 100,600, off by 600, so the statement goes to review.</p>

    <h3>Reconciling transactions</h3>

    <p>OpenStax describes a bank reconciliation as the report that explains the differences between the bank's balance and your own records. Bank-side items are deposits in transit and outstanding checks (you recorded them, the bank has not). Book-side items are service charges, NSF checks and interest (the bank recorded them, you have not).</p>

    <p>Take the August statement above. The bank's closing balance is 5,385.82. Your books show 5,914.32 before you record the 15.00 service fee. A deposit of 1,200.00 made on August 31 posts at the bank in September, and check 1043 for 686.50 has not cleared. Adjusted bank balance: 5,385.82 plus 1,200.00 minus 686.50 = 5,899.32. Adjusted book balance: 5,914.32 minus 15.00 = 5,899.32. They tie.</p>

    <p>OCR's job is clean rows: signed amounts, ISO 8601 dates, full descriptions and check numbers (see <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a>). Match on check number and amount first. Bank rows with no ledger match suggest book-side items; ledger entries with no bank match suggest bank-side items. <a href="/resources/blogs/credit-card-statement-ocr">Credit card statements</a> follow the same logic.</p>

    <h2>What to do next</h2>

    <ul>
      <li><strong>Lender or underwriter:</strong> run the reconciliation check on every statement, apply your own deposit and statement-age rules, and add file forensics or direct bank data for risky files. Our <a href="/documents/financial-docs/bank-statements">bank statements page</a> shows what our product extracts.</li>
      <li><strong>Bookkeeper:</strong> treat unmatched rows as reconciling items, not errors.</li>
      <li><strong>Taking checks:</strong> validate the checksum and directory lookup, compare numbers with words, flag old dates, and keep a human correction step. We do not list check images as a supported document type.</li>
      <li><strong>Verifying addresses:</strong> extract every date and apply the requester's window.</li>
      <li><strong>Reading meters:</strong> smart meter data first, otherwise a model that rejects bad photos.</li>
    </ul>

    <p>Choosing a vendor? Test 50 of your own documents (<a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> explains scoring): a 12-page statement, extracted totals against printed totals, a slightly angled phone photo, field-level confidence scores, and a written answer on training use of your documents.</p>

    <h2>Sources and how we checked this</h2>

    <p>We opened each source below and used only what the page states. All arithmetic was run in Python 3 with exact decimals. DocsAPI is our product and the benchmark is our own test, so run your own.</p>

    <ul>
      <li>Microsoft Document Intelligence: <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/bank-statement?view=doc-intel-4.0.0">bank statement model</a>, its <a href="https://github.com/Azure-Samples/document-intelligence-code-samples/blob/main/schema/2024-11-30-ga/bank-statement.md">schema</a>, the <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/bank-check?view=doc-intel-4.0.0">check model</a> and its <a href="https://github.com/Azure-Samples/document-intelligence-code-samples/blob/main/schema/2024-11-30-ga/bank-check.md">schema</a>.</li>
      <li>Fannie Mae Selling Guide <a href="https://selling-guide.fanniemae.com/sel/b3-4.2-01/verification-deposits-and-assets">B3-4.2-01</a> and <a href="https://selling-guide.fanniemae.com/sel/b3-4.2-02/depository-accounts">B3-4.2-02</a>.</li>
      <li>Federal Reserve Bank of New York <a href="https://fraser.stlouisfed.org/title/federal-reserve-bank-new-york-circulars-466/8203-addition-check-digit-routing-number-field-checks-496539/fulltext">Circular 8203</a>; <a href="https://www.law.cornell.edu/cfr/text/12/229.2">12 CFR 229.2</a>; the Federal Reserve Board <a href="https://www.federalreserve.gov/secrs/2004/may/20040525/r-1176/r-1176_150_1.pdf">staff paper on MICR-line issues</a>; <a href="https://www.law.cornell.edu/ucc/4/4-404">UCC 4-404</a>; the <a href="https://www.frbservices.org/resources/routing-number-directory">E-Payments Routing Directory</a>.</li>
      <li>Wikipedia on <a href="https://en.wikipedia.org/wiki/Magnetic_ink_character_recognition">MICR</a> (E-13B symbols) and <a href="https://en.wikipedia.org/wiki/ABA_routing_transit_number">ABA routing numbers</a> (nine-digit structure); US Treasury <a href="https://fiscal.treasury.gov/sites/default/files/2026-02/pja_correct_micr_line.pdf">OTCnet job aid</a>.</li>
      <li>FINTRAC <a href="https://fintrac-canafe.canada.ca/guidance-directives/client-clientele/Guide11/11-eng">Annex 5</a>; California DMV <a href="https://www.dmv.ca.gov/portal/uploads/2020/06/List_of_Docs_REALID.pdf">REAL ID document list</a> (sheet dated 4/2019).</li>
      <li>Laroca et al., <a href="https://arxiv.org/abs/2009.10181">Towards Image-based Automatic Meter Reading in Unconstrained Scenarios</a> (IEEE Access, 2021) and <a href="https://arxiv.org/abs/1902.09600">Convolutional Neural Networks for Automatic Meter Reading</a> (2019).</li>
      <li>OpenStax Principles of Accounting: <a href="https://openstax.org/books/principles-financial-accounting/pages/2-2-define-explain-and-provide-examples-of-current-and-noncurrent-assets-current-and-noncurrent-liabilities-equity-revenues-and-expenses">accounting equation</a> and <a href="https://openstax.org/books/principles-financial-accounting/pages/8-6-define-the-purpose-of-a-bank-reconciliation-and-prepare-a-bank-reconciliation-and-its-associated-journal-entries">bank reconciliation</a>; <a href="https://www.llamaindex.ai/glossary/financial-statement-extraction">LlamaIndex</a> and <a href="https://www.ocrolus.com/blog/how-to-spot-fake-bank-statements/">Ocrolus</a>.</li>
    </ul>

    <p>Limits: we could not open the ABA's Routing Number Policy, so the nine-digit structure rests on Wikipedia's summary; the weights come from the Federal Reserve circular. Fannie Mae rules cover mortgages sold to Fannie Mae. The date windows are examples from two public sources. We did not test any vendor's check or meter product. This is not legal advice: the rule's owner, not OCR, decides whether a document satisfies a lending or KYC rule.</p>
  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Industry Trends",
  date: "June 12, 2025",
  datePublished: "2025-06-12T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "ocr for bank statements",
  secondary_keywords: [
    "ocr for checks",
    "ocr for bank checks",
    "ocr for underwriters",
    "ocr for utility bills",
    "ocr for utility meter readings",
    "how do lenders verify bank statements automatically",
    "ocr for bank statement analysis",
    "ocr for financial statement extraction",
    "ocr for reconciling transactions",
  ],
  tags: [
    "bank statement OCR",
    "check OCR",
    "MICR",
    "routing number checksum",
    "utility bill OCR",
    "bank reconciliation",
    "underwriting",
  ],
  cluster: "industry-trends",
  faq: [
    {
      question: "Can OCR read a bank statement PDF that is not scanned?",
      answer:
        "Often you do not need OCR at all. A PDF downloaded from a bank's website usually has the text inside the file, so software can read it directly and the work is table extraction. OCR is for scans and photos, where the page is only a picture. If you cannot select the text with your cursor, it is an image PDF.",
    },
    {
      question: "Can OCR read a photo of a bank statement taken on a phone?",
      answer:
        "Yes, if the whole page is in frame, flat and sharp, but expect more errors than from a PDF. Microsoft's Document Intelligence documentation asks for one clear photo or high-quality scan per document and a minimum text height of 12 pixels on a 1024 by 768 image, about 8-point text at 150 dots per inch. Run the reconciliation check on every photo.",
    },
    {
      question: "What is the difference between a debit and a credit on a bank statement?",
      answer:
        "On a statement you receive as the account holder, a credit is money added to the account (a deposit) and a debit is money taken out (a withdrawal or fee). Some statements use two columns, some use one signed column, and some add CR or DR after the amount. OCR must map each layout to a consistent sign before the reconciliation sum works.",
    },
    {
      question: "How many months of bank statements do lenders ask for?",
      answer:
        "It depends on the lender and the loan. For mortgages sold to Fannie Mae, the Selling Guide asks for the most recent full two-month period (60 days, or the most recent quarter) on a purchase and one month on a refinance. Other lenders, including small business lenders, set their own rules, so check the lender's checklist rather than assuming.",
    },
    {
      question: "Do lenders still need OCR if the borrower connects a bank account?",
      answer:
        "Less, but not never. With borrower authorization, Fannie Mae's guide accepts direct verification through an asset verification vendor, which skips the document. When the borrower does not connect an account, the lender falls back to uploaded statements, and that is where OCR and the checks on this page apply.",
    },
    {
      question: "Does a bank statement that adds up prove it is genuine?",
      answer:
        "No. The reconciliation check proves the numbers agree with each other. A careful forger can edit a statement and keep the arithmetic consistent. Authenticity needs separate checks on how the file was built and edited, and for high-risk files, direct data from the bank. OCR reads what is on the page; it does not know whether the bank issued it.",
    },
    {
      question: "Can OCR read handwritten checks and amounts?",
      answer:
        "It can, with lower accuracy. In our benchmark, DocsAPI scored 78% at character level on handwritten forms of mixed neatness, against 73% for PaddleOCR and 61% for Tesseract 5.x. That is why the amount in numbers should be compared with the amount in words, and any disagreement should go to a person.",
    },
    {
      question: "Is a utility bill or a bank statement better proof of address?",
      answer:
        "Requesters often accept either, so ask which they prefer. California's DMV lists both home utility bills and bank records, and wants two different documents. A utility bill shows where service is supplied. A bank statement shows where the bank mails the statement, which may not be a residence. Check the date window and address type each requester wants.",
    },
    {
      question: "Are there public datasets for meter reading OCR?",
      answer:
        "Yes. The UFPR-AMR dataset has 2,000 annotated meter images and is public. The larger Copel-AMR dataset has 12,500 field images, including 2,500 unreadable ones, and is available to the research community after registering and accepting its terms. The Copel-AMR images come from a Brazilian energy company's field staff.",
    },
    {
      question: "Why is a passing routing number checksum not enough?",
      answer:
        "The checksum only tests that nine digits are well formed. About 1 in 10 random nine-digit strings passes; in a simulation of 200,000 random strings we saw 9.96% pass. So a pass does not show the number belongs to a bank. Look it up in the Federal Reserve's E-Payments Routing Directory. Neither test shows the check itself is genuine.",
    },
  ],
}
