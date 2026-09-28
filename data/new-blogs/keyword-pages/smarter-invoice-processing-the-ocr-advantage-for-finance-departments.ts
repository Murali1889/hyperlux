import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "2",
  title: "OCR for Invoices and AP Documents: Steps, Costs, Limits",
  slug: "smarter-invoice-processing-the-ocr-advantage-for-finance-departments",
  excerpt:
    "How invoices, receipts, purchase orders and delivery notes get from paper and PDFs into your system: the six-step pipeline, a paper backlog checklist, and a cost example you can rerun with your own numbers.",
  description:
    "Get invoices, receipts, purchase orders and delivery notes out of paper and PDFs into your system: the six steps, a backlog checklist and a cost example.",
  metaTag: "OCR for Invoices and AP Documents: Steps and Costs",
  summary:
    "Invoices, receipts, purchase orders and delivery notes all follow one pipeline: capture, read, extract fields, validate, match and post. OCR does the reading and extracting and removes most typing, but people still review exceptions: Ardent Partners' 2025 benchmarks found only 32.6% of invoices processed touchless on average.",
  content: `
    <p>You can automate invoice processing with OCR (optical character recognition, software that reads text from images) in six steps: capture, read, extract fields, validate, match to the purchase order (PO) and delivery record, and post. OCR does only steps 2 and 3, so it cuts typing, not review. Below: receipts, POs, delivery notes, a backlog checklist and a cost example.</p>

    <h2>How does OCR for accounts payable automation work, step by step?</h2>

    <p>OCR for accounts payable automation is a six-step pipeline: capture the document, read it, extract the fields, validate the numbers, match to the purchase order and delivery record, and post to your system. OCR itself covers only steps 2 and 3. Steps 4 to 6 are business rules and integrations, and they decide how much typing you really save.</p>

    <table>
      <thead><tr><th>Step</th><th>What happens</th><th>What usually goes wrong</th></tr></thead>
      <tbody>
        <tr><td>1. Capture</td><td>Scan paper, receive a PDF by email or portal, or take a phone photo.</td><td>Skewed pages, missing back sides, locked PDFs, invoices buried in threads (<a href="/resources/blogs/email-invoice-parsing">email invoice parsing</a>).</td></tr>
        <tr><td>2. Read (OCR)</td><td>The image becomes text, with each word's position on the page.</td><td>Low resolution, fading, stamps over text, handwriting.</td></tr>
        <tr><td>3. Extract fields</td><td>Software decides which text is the vendor, number, date, PO, tax, total and line items.</td><td>Subtotal picked instead of Total, tables that span pages (<a href="/resources/blogs/invoice-line-item-ocr">invoice line-item extraction</a>).</td></tr>
        <tr><td>4. Validate</td><td>Lines add up, formats are valid, the vendor exists, the invoice is not a duplicate.</td><td>No rules, so a misread amount flows through (<a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection</a>).</td></tr>
        <tr><td>5. Match</td><td>Invoice against the purchase order (2-way), plus the delivery or receipt record (3-way).</td><td>No PO, partial deliveries, prices outside tolerance (<a href="/resources/blogs/3-way-match-invoice-automation">3-way match invoice automation</a>, <a href="/resources/blogs/non-po-invoice-exception-routing">non-PO invoice exception routing</a>).</td></tr>
        <tr><td>6. Post</td><td>Bill created in your accounting or ERP (enterprise resource planning) system, image attached, routed for approval.</td><td>Duplicate vendor records, closed periods, wrong account codes.</td></tr>
      </tbody>
    </table>

    <p>When a vendor quotes one accuracy figure, ask which step it measures. Classify each file before reading it. Statements, tax forms and packing slips land in the same inbox, and treating them as invoices creates bad bills (<a href="/resources/blogs/document-classification-software">document classification software</a>). To choose a tool, our <a href="/resources/blogs/best-ocr-software-for-accounts-payable">accounts payable (AP) buyer's guide</a> ranks 8 of them on 200 real invoices, and <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR</a> gives the wider overview.</p>

    <h2>How are invoices, receipts, purchase orders and delivery notes different for OCR?</h2>

    <p>They differ in who issues them and what they must match. An invoice matches a purchase order and a delivery record. A receipt matches a card transaction. A purchase order matches an invoice, or your price list if a customer sent it. A delivery note matches the order and the invoice.</p>

    <table>
      <thead><tr><th>Document</th><th>Key fields</th><th>Who issues it</th><th>Matched against</th><th>Typical OCR trouble</th></tr></thead>
      <tbody>
        <tr><td>Invoice</td><td>Supplier, invoice number and date, due date, PO number, line items, tax, total, bank details</td><td>The supplier</td><td>Purchase order, delivery record, earlier invoices, vendor list</td><td>Multi-page line-item tables, Subtotal vs Total vs Balance due, date formats, currencies, handwriting</td></tr>
        <tr><td>Receipt</td><td>Merchant, date, total, tax, payment method, tip</td><td>The merchant, at the sale</td><td>Card transaction, expense report, spending policy</td><td>Faded thermal paper, crumpled paper, phone photos with shadows, handwritten tips</td></tr>
        <tr><td>Purchase order</td><td>PO number, buyer, supplier, ship-to, line items (item code, quantity, unit price), delivery date, total</td><td>The buyer, to the supplier (or your customer, to you)</td><td>Buying side: invoice and delivery record. Selling side: your price list and sales order</td><td>A different layout per customer, their item codes not yours, revisions sent as new PDFs</td></tr>
        <tr><td>Delivery note or goods receipt</td><td>Note number, date, supplier, PO reference, items, quantities, condition, signature</td><td>Delivery note: the supplier. Goods received note (GRN): your receiving team</td><td>Purchase order and invoice</td><td>Handwritten ticks and corrections, stamps and signatures over text, carbon copies, dock photos</td></tr>
      </tbody>
    </table>

    <p>The fields are typical, not a standard, and some countries fix them by law. HMRC (the UK tax authority) sets this out in its VAT guide (Notice 700, section 16): a full UK VAT invoice must also show the supplier's VAT registration number, the customer's name and address, the VAT rate and amount, and the tax point.</p>

    <h2>What is the best way to digitize paper invoices?</h2>

    <p>The best way is to stop paper at the source, then scan what remains. Ask suppliers to email PDFs. For paper that still arrives, scan double-sided at 300 dpi (dots per inch) or higher on a document-feeder scanner, run OCR, validate the amounts, and keep the image attached to the posted bill. Check retention rules before shredding anything.</p>

    <p>Match effort to volume: a phone scan for a few a week, a document-feeder scanner for a steady trickle, a scanning service for boxes (get a quote and a sample batch; we did not price services). For a backlog, use this checklist.</p>

    <ol>
      <li><strong>Count and sort.</strong> Pull out statements, remittance advices, packing slips and tax forms so they do not become bills.</li>
      <li><strong>Check retention rules before shredding.</strong> They differ by country. In the US, see IRS Publication 583 and the FAQ. Ask your accountant.</li>
      <li><strong>Decide what each pile is for.</strong> Unpaid or disputed invoices need full extraction and posting. Paid history usually only needs to be findable: a searchable PDF plus vendor, invoice number, date and total.</li>
      <li><strong>Prepare the paper.</strong> Remove staples and flatten pages. Scan both sides (some suppliers print lines on the back) and drop blank pages afterwards.</li>
      <li><strong>Set up the scanner.</strong> Document feeder, 300 dpi or higher (Tesseract's documentation recommends at least 300 dpi), saved as PDF or TIFF. Color or grayscale keeps faint text and stamps.</li>
      <li><strong>Test your 20 worst pages first:</strong> faded, stamped, folded, with handwritten notes. See what breaks before you scan the rest.</li>
      <li><strong>Scan in labeled batches.</strong> Count sheets in and pages out, so a missed sheet shows up the same day. Keep the extracted data linked to the original scan, and never replace the scan with OCR output.</li>
      <li><strong>Validate before posting.</strong> Lines add up to the subtotal, subtotal plus tax equals the total, the vendor exists, and the invoice number and amount are not already in your ledger. Backlog invoices were often keyed by hand years ago, so duplicates are likely (<a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection</a>).</li>
      <li><strong>Review flagged invoices and count the fixes</strong> in the first 100. That is your real error rate (<a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>, <a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">how long a parallel run should last</a>).</li>
      <li><strong>Dispose last,</strong> after a random sample of scans has been compared with the paper and your rules allow it. Keep originals that must stay on paper, such as signed contracts.</li>
    </ol>

    <h2>How do you extract text from scanned invoice files?</h2>

    <p>Run the scan through an OCR engine. Free tools cover one-off files (see our <a href="/resources/blogs/free-online-ocr-tools">free online OCR tools review</a>), and Tesseract is the standard open-source engine. But OCR returns raw text only. Nothing in that text says which number is the total or which date is the due date. Code we ran shows the gap.</p>

    <p>We made a synthetic invoice with Python's Pillow library (made-up supplier and figures) and ran Tesseract 5.5.2. The flag --psm 6 treats the page as one block of text.</p>

    <pre><code>tesseract invoice_clean.png out_clean --psm 6</code></pre>

    <p>The clean 300 dpi image came back with every line correct, which is why demos look good. A degraded copy (skewed 2.2 degrees, blurred, speckled, faded, halved to about 150 dpi; same command, saved as out_deg.txt) was mostly right, but the quantity 1 on the delivery charge became a plus sign, and a junk line appeared above the subtotal:</p>

    <pre><code>Delivery charge + 15.00 15.00</code></pre>

    <p>Raw text also invites naive parsing. On this invoice, a regular expression that looks for the word total returns 431.70, which is the Subtotal line, not the Total. Finding the right field is one step and checking it is another. This checker parses the raw text and tests the arithmetic:</p>

    <pre><code>import re
from decimal import Decimal as D

def check(path):
    text = open(path).read()
    rows = re.findall(r"^(.+?)\\s+(\\d+)\\s+(\\d+\\.\\d\\d)\\s+(\\d+\\.\\d\\d)$", text, re.M)
    sub = D(re.search(r"Subtotal\\s+(\\d+\\.\\d\\d)", text)[1])
    problems = []
    for name, qty, unit, amt in rows:
        if int(qty) * D(unit) != D(amt):
            problems.append("bad line: " + name)
    lines_sum = sum(D(r[3]) for r in rows)
    if lines_sum != sub:
        problems.append(f"lines sum to {lines_sum}, subtotal says {sub}")
    return len(rows), problems

for p in ("out_clean.txt", "out_deg.txt"):
    n, problems = check(p)
    print(p, "| line rows read:", n, "|", problems or "all checks pass")</code></pre>

    <p>Output (Python 3.9.6):</p>

    <pre><code>out_clean.txt | line rows read: 3 | all checks pass
out_deg.txt | line rows read: 2 | ['lines sum to 416.70, subtotal says 431.70']</code></pre>

    <p>The checker cannot tell which character is wrong, only that 222.00 plus 194.70 is 416.70 while the subtotal reads 431.70. That is what validation does: it turns silent misreads into flagged invoices. It is a toy on one synthetic invoice, not a benchmark. <a href="/resources/blogs/rules-based-vs-ai-invoice-extraction">Rules-based vs AI invoice extraction</a> explains where rules beat models.</p>

    <h2>Where does OCR break on receipts, purchase orders and delivery notes?</h2>

    <p>Each document breaks differently. Receipts fail on faded thermal paper and phone photos. Purchase orders fail on customer-specific layouts and item codes that do not match your catalog. Delivery notes fail on handwritten quantities, signatures and stamps. Invoices fail mostly on multi-page tables.</p>

    <h3>OCR for receipts</h3>

    <p>OCR for receipts is harder than OCR on a clean PDF, because the input is a photo. In our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>, phone-photographed receipts scored 58% (Tesseract), 82% (PaddleOCR) and 76% (DocsAPI), against 97-99% for all three on clean typed English. In the parser test, mobile-quality scanned receipts scored 58% (Docling), 78% (LlamaParse) and 74% (DocsAPI). DocsAPI is our product, and it won neither test.</p>

    <p>Thermal paper adds a deadline. Wikipedia's article on thermal paper says the dyes are often unstable and revert to colorless in hot or humid conditions, and coatings only reduce fading. Nobody can give a safe expiry date, so scan within days. Photograph one receipt at a time, flat, in even light, all four edges in frame (Microsoft's docs advise one clear photo or high-quality scan per document).</p>

    <h3>OCR for expense receipts</h3>

    <p>OCR for expense receipts has a smaller job: read the merchant, date and total, then attach the receipt to the right expense. Microsoft's Dynamics 365 receipt OCR extracts the merchant name, date and total amount, and tries to match unattached receipts to unattached expense transactions (typically imported from the card provider). Trouble sits at the edges: handwritten tips that differ from the card charge, hotel bills that bundle many charges, the same receipt submitted twice. Language support varies too: that page lists the USA, Canada, UK and Australia, the EU partly (English receipts only), and not Asia.</p>

    <h3>OCR for purchase orders</h3>

    <p>OCR for purchase orders is usually a selling-side problem. Your own POs already exist as data in your ERP, so in AP you read the PO number off the invoice and look the order up. OCR matters when customers email POs as PDFs that someone retypes into your order system. The trouble is mapping: layouts differ per customer, item codes and units differ from yours, and a revised PO must replace the old one. Route anything unmapped to a person.</p>

    <h3>OCR for delivery notes</h3>

    <p>OCR for delivery notes is mostly about quantities. The supplier's delivery note lists what was shipped. The goods received note is created by your receiving team after checking what arrived, and Ramp's goods receipt guide draws the same line. Paper hangs on here: hand-corrected quantities, signatures and stamps over text, carbon copies, dock photos. Wrong quantities cause false mismatches (<a href="/resources/blogs/3-way-match-invoice-automation">3-way match invoice automation</a> shows how to tell OCR misreads from real ones). See also <a href="/resources/blogs/proof-of-delivery-processing">proof of delivery processing</a>, <a href="/resources/blogs/packing-list-reconciliation">packing list reconciliation</a> and <a href="/resources/blogs/partial-shipment-invoice-matching">partial shipment invoice matching</a>.</p>

    <h2>Can you use OCR to eliminate manual invoice processing?</h2>

    <p>Not completely. OCR removes most of the typing, but people still review exceptions, approve payments and fix mismatches. In Ardent Partners' 2025 benchmark report, 32.6% of invoices were processed touchless on average (no human touch from receipt to posting), and 49.2% at best-in-class companies. In our own 200-invoice trial of 8 AP tools, touchless rates ran from 65% to 81%.</p>

    <table>
      <thead><tr><th>Measure</th><th>Ardent Partners 2025 report</th><th>Our 200-invoice AP trial</th></tr></thead>
      <tbody>
        <tr><td>Touchless rate</td><td>32.6% average; 49.2% best-in-class; 23.4% all others</td><td>65% to 81% across 8 tools; 81% for our tuned pipeline (DocsAPI), about 65% out of the box before validation</td></tr>
        <tr><td>Exception rate</td><td>14% average; 9.0% best-in-class; 22.0% all others</td><td>Not reported</td></tr>
        <tr><td>Sample</td><td>212 AP leaders surveyed March to May 2024; 53% at companies above $1 billion revenue</td><td>200 real invoices: 60% clean PDFs from repeat vendors, 25% scanned, 15% first-time vendors</td></tr>
      </tbody>
    </table>

    <p>Ardent defines best-in-class as the 20% of enterprises with the lowest invoice cost and shortest cycle time. Our trial was small and includes our own product. Use the two as a range: about a third of invoices touchless on average, a ceiling in the low 80s on a tuned pipeline, and a review queue for the rest.</p>

    <p>Exceptions are the reason. These are invoices flagged for coding errors, missing information, approval bottlenecks or missing PO data, and Ardent lists them (53% of respondents) as the top AP challenge. OCR reads what is on the page, and a missing PO number stays missing. It also cannot tell whether an invoice is real: it reads a forged one as accurately as a genuine one, and 29% of Ardent's respondents named fraud a top threat (<a href="/resources/blogs/invoice-fraud-detection">invoice fraud detection</a>).</p>

    <p>Some invoices will keep needing people: handwritten or faxed ones (<a href="/resources/blogs/handwritten-faxed-invoice-ocr">handwritten and faxed invoice OCR</a>), multi-currency ones (<a href="/resources/blogs/multi-currency-invoice-ocr">multi-currency invoice OCR</a>), invoices with no PO, and possible duplicates or fakes. The work shifts from typing to reviewing (<a href="/resources/blogs/ap-clerk-day-before-after-ocr">an AP clerk's day before and after invoice OCR</a>).</p>

    <h2>How much does it cost, and how do you work out your own savings?</h2>

    <p>Cost per invoice depends on your numbers: hands-on minutes today, hourly labor cost, the share of invoices that need no human touch, and review minutes for the rest. Ardent's 2025 report put the average all-inclusive cost at $9.40 per invoice, but your own figure matters more. Below is a worked example with made-up inputs.</p>

    <p>EXAMPLE assumptions (not industry averages, replace every one):</p>

    <table>
      <thead><tr><th>Input</th><th>EXAMPLE value</th><th>How to get your own</th></tr></thead>
      <tbody>
        <tr><td>Invoices per month (V)</td><td>1,000</td><td>Count 3 months in your AP ledger</td></tr>
        <tr><td>Hands-on minutes per invoice today (M)</td><td>8</td><td>Time 20 invoices, take the middle value</td></tr>
        <tr><td>Loaded labor cost per hour (R)</td><td>$30.00</td><td>Pay, benefits, overhead per working hour</td></tr>
        <tr><td>Share needing no human touch (T)</td><td>50%</td><td>Measure in a pilot (ranges above)</td></tr>
        <tr><td>Review minutes per flagged invoice (Mr)</td><td>4</td><td>Measure in the same pilot</td></tr>
        <tr><td>Software fee per invoice (F)</td><td>$0.75</td><td>Use a real quote (<a href="/resources/blogs/invoice-ocr-pricing-models">invoice OCR pricing models</a>)</td></tr>
        <tr><td>One-time setup, staff hours</td><td>80</td><td>Your estimate of rules, testing, integration</td></tr>
      </tbody>
    </table>

    <p>The formulas, with the arithmetic checked in python3:</p>

    <ol>
      <li>Manual cost per invoice = M ÷ 60 × R = 8 ÷ 60 × $30 = $4.00, or $4,000 a month.</li>
      <li>Automated cost per invoice = (1 minus T) × Mr ÷ 60 × R + F = 0.5 × 4 ÷ 60 × $30 + $0.75 = $1.00 + $0.75 = $1.75, or $1,750 a month.</li>
      <li>Monthly saving = (manual minus automated) × V = $2.25 × 1,000 = $2,250, or $27,000 a year.</li>
      <li>Payback = setup hours × R ÷ monthly saving = 80 × $30 ÷ $2,250 = $2,400 ÷ $2,250 = 1.07 months, about 32 days.</li>
    </ol>

    <p>The result swings on two inputs you measure in a pilot, not on the tool's price. Automated cost per invoice, against the manual $4.00:</p>

    <table>
      <thead><tr><th>Touchless share</th><th>3 min review</th><th>5 min review</th><th>8 min review</th></tr></thead>
      <tbody>
        <tr><td>30%</td><td>$1.80</td><td>$2.50</td><td>$3.55</td></tr>
        <tr><td>50%</td><td>$1.50</td><td>$2.00</td><td>$2.75</td></tr>
        <tr><td>70%</td><td>$1.20</td><td>$1.50</td><td>$1.95</td></tr>
      </tbody>
    </table>

    <p>In the worst corner (30% touchless, 8 minutes per review) the saving shrinks to $0.45 per invoice. If nobody skips review and review takes as long as typing, you pay $4.75 against $4.00 and lose money. At 200 invoices a month the same inputs pay back in 5.3 months.</p>

    <p>The example leaves out approvals (they happen either way), late fees, missed early-payment discounts (<a href="/resources/blogs/early-payment-discount-capture">early payment discount capture</a>), duplicate payments and integration upkeep. Ardent's $9.40 is higher than $4.00 because it counts all staff and operating costs, including technology and overhead. For a case that also prices risk, see <a href="/resources/blogs/invoice-ocr-cfo-business-case">pitching invoice OCR to your CFO</a>.</p>

    <h2>What to do next</h2>

    <ul>
      <li><strong>Invoices arrive by email as PDFs:</strong> try the capture feature in your accounting or AP tool on your 20 messiest invoices, then the <a href="/resources/blogs/best-ocr-software-for-accounts-payable">AP buyer's guide</a> if it falls short. Roll out supplier by supplier, only as fast as reviewers clear exceptions.</li>
      <li><strong>You have a paper backlog:</strong> follow the checklist above, and archive paid invoices as searchable PDFs instead of extracting every line.</li>
      <li><strong>Your problem is expense receipts:</strong> trial receipt capture on real phone photos from your staff, in your languages.</li>
      <li><strong>Customers email you purchase orders:</strong> extract the must-have fields (PO number, item codes, quantities, dates), build the code mapping, and route anything unmapped to a person.</li>
      <li><strong>You are building your own pipeline:</strong> weigh <a href="/resources/blogs/build-vs-buy-invoice-ocr">build vs buy</a>, and measure on your own documents first. To try our API on invoices (disclosure: DocsAPI is our product), see the <a href="/use-cases/invoice-processing">invoice processing use case</a>.</li>
    </ul>

    <h2>Sources and how we checked this</h2>

    <p>We checked these pages on September 21, 2026.</p>

    <ul>
      <li><a href="https://www.datocms-assets.com/80283/1744404602-ardent-partners-ap-metrics-that-matter-in-2025-pagero-final.pdf" rel="nofollow">Ardent Partners, Accounts Payable Metrics That Matter in 2025</a> (February 2025): cost, touchless and exception rates, sample.</li>
      <li><a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice?view=doc-intel-4.0.0" rel="nofollow">Microsoft Learn, Document Intelligence invoice model</a></li>
      <li><a href="https://learn.microsoft.com/en-us/dynamics365/project-operations/expense/match-receipt-expense-ocr" rel="nofollow">Microsoft Learn, Capture a receipt using OCR</a></li>
      <li><a href="https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/three-way-matching-policies" rel="nofollow">Microsoft Learn, Three-way matching policies</a></li>
      <li><a href="https://www.irs.gov/publications/p583" rel="nofollow">IRS Publication 583</a>, electronic records and retention</li>
      <li><a href="https://www.gov.uk/guidance/vat-guide-notice-700" rel="nofollow">HMRC VAT Notice 700, section 16</a>, UK VAT invoice contents</li>
      <li><a href="https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html" rel="nofollow">Tesseract documentation, improving output quality</a></li>
      <li><a href="https://en.wikipedia.org/wiki/Thermal_paper" rel="nofollow">Wikipedia, Thermal paper</a></li>
      <li><a href="https://ramp.com/blog/accounts-payable/goods-receipt" rel="nofollow">Ramp, Goods receipt guide</a></li>
      <li>Our numbers come from the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> (1,900 documents, 8 engines, including a 200-invoice AP trial).</li>
    </ul>

    <p>Limits. Ardent's survey is self-reported and skews to large companies, so a small business may differ. APQC's per-invoice figures sit behind a membership, so we did not use them. The Tesseract demo used one synthetic invoice, and the cost inputs are invented on purpose. Nothing here is tax or legal advice: retention rules and invoice contents differ by country, so confirm with your accountant. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Industry Trends",
  date: "May 12, 2025",
  datePublished: "2025-05-12T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
  last_updated: "September 28, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "ocr for invoices",
  secondary_keywords: [
    "ocr invoice meaning",
    "ocr for receipts",
    "ocr for purchase orders",
    "ocr for expense receipts",
    "ocr for delivery notes",
    "what is the best way to digitize paper invoices",
    "ocr for accounts payable automation",
    "ocr to eliminate manual invoice processing",
    "automate invoice processing with ocr",
    "extract text from scanned invoice",
  ],
  tags: [
    "invoice OCR",
    "accounts payable",
    "receipt OCR",
    "purchase orders",
    "delivery notes",
    "invoice digitization",
    "invoice automation",
    "AP automation",
  ],
  cluster: "industry-trends",
  faq: [
    {
      question: "Can OCR read handwritten invoices?",
      answer:
        "Partly. In our benchmark, handwritten forms of mixed neatness scored 61% (Tesseract), 73% (PaddleOCR) and 78% (DocsAPI), against 97-99% for clean typed English. That means a person should check every handwritten amount before it posts. Where you can, ask small suppliers to send typed PDFs, and route handwritten invoices to review by default.",
    },
    {
      question: "Can I throw away paper invoices after scanning them?",
      answer:
        "It depends on your country and record type. In the US, IRS Publication 583 says original hard copies may be destroyed if the electronic storage system has been tested and reproduces them in line with IRS requirements (Revenue Procedure 97-22 has the detail), and that you keep records as long as they may be needed. This is not tax advice, so confirm with your accountant.",
    },
    {
      question: "What resolution should I scan invoices at?",
      answer:
        "Use 300 dpi or higher. Tesseract's documentation says it works best on images of at least 300 dpi. Microsoft's Document Intelligence docs set a minimum text height of 12 pixels on a 1024 x 768 image, which is about 8-point text at 150 dpi. Scanning at 300 dpi gives you margin for small print and slightly faded pages.",
    },
    {
      question: "Is a phone photo good enough for invoices and receipts?",
      answer:
        "It can work, but expect more errors than from a feeder scan. Microsoft advises one clear photo or high-quality scan per document. Our benchmark shows the cost: phone-photographed receipts scored 58% to 82% depending on the engine, against 97-99% on clean typed text. Use a flat surface, even light, all four edges in frame, and no shadows across the text.",
    },
    {
      question: "What is a goods received note, and how is it different from a delivery note?",
      answer:
        "A delivery note comes from the supplier with the shipment and states what they say they sent. A goods received note (GRN) is created by your own receiving team after checking what actually arrived, and it records quantities and condition. In a three-way match, the GRN or the checked delivery note supplies the received quantity.",
    },
    {
      question: "What is the difference between two-way and three-way matching?",
      answer:
        "Two-way matching compares the invoice with the purchase order, mainly on price and item. Three-way matching adds the goods receipt: it compares the invoice price with the PO price and the invoice quantity with the quantity received. Microsoft's Dynamics 365 documentation lets you set either policy at company, item, or item-and-vendor level, with price tolerances.",
    },
    {
      question: "Does invoice OCR work on invoices in other languages?",
      answer:
        "Usually, but accuracy varies by language and engine. Microsoft's docs say its invoice model supports 27 languages. In our benchmark, English plus Mandarin and Spanish documents scored 71% (Tesseract), 89% (PaddleOCR) and 81% (DocsAPI). Test 20 invoices in each language you receive before assuming a vendor's language list means good results.",
    },
    {
      question: "What should I ask an OCR vendor about my invoice data?",
      answer:
        "Ask how long they keep your documents, whether they train models on them, where they process them, and which compliance reports they hold. As examples: Microsoft's receipt OCR page says its service keeps a copy for up to 24 hours while processing. DocsAPI's stated policy is deletion after processing, no training on customer documents, and SOC 2 Type II.",
    },
    {
      question: "What is the difference between OCR and intelligent document processing?",
      answer:
        "OCR turns an image into text. Intelligent document processing (IDP) wraps OCR with classification (is this an invoice?), field extraction (which number is the total?), validation (do the numbers add up?) and routing. For AP you need the whole set, because reading characters alone leaves the typing, checking and matching to people.",
    },
    {
      question: "What does OCR invoice mean?",
      answer:
        "OCR invoice meaning, in short: an invoice whose data was captured by optical character recognition instead of being typed. In accounts payable it means software reads the vendor, invoice number, dates, line items and totals from the PDF or scan and sends them to your accounting system for checking and approval.",
    },
  ],
}
