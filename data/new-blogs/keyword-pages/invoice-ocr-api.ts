import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-invoice-api",
  title: "Invoice OCR API: Fields, Prices and Limits Compared (2026)",
  slug: "invoice-ocr-api",
  excerpt:
    "What AWS, Azure, Google, Mindee and Veryfi invoice OCR APIs actually return, the field names you will map, list prices per invoice, their limits, and code to check the output before you post it.",
  description:
    "Invoice OCR APIs from AWS, Azure, Google, Mindee and Veryfi compared: the fields each returns, real prices per invoice, limits, and code to validate the output.",
  metaTag: "Invoice OCR API: Fields and Prices Compared (2026)",
  summary:
    "An invoice OCR API reads a PDF or photo of an invoice and returns the vendor, invoice number, dates, line items, tax and total as JSON. AWS, Azure, Google, Mindee and Veryfi return the same core fields under different names, at list prices from under a cent to 16 cents per one-page invoice.",
  content: `
    <p>Every invoice API demo looks the same: drop in a PDF, get tidy JSON back. The pain shows up later, the week you switch vendors or run two side by side and find that one calls the line total PRICE and another calls it total_price. We read the docs and price lists for AWS, Azure, Google, Mindee and Veryfi so you can compare fields, prices and limits in one place, and we ran the code that checks the output.</p>

    <h2>What is an invoice OCR API?</h2>
    <p>An invoice OCR API, sometimes sold as an invoice processing API, is a web service you send an invoice file to, and it returns the invoice's fields as structured JSON: vendor, invoice number, invoice and due dates, PO number, line items, subtotal, tax and total, usually with a confidence score and the position of each value on the page. You still decide what to do with the data.</p>
    <p>That last point matters. The API reads; it does not approve or pay. Checking the math, catching duplicates, matching purchase orders and posting to your accounting system are your code's job, or the job of an AP tool built on top. Our <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR guide</a> lists the seven checks an invoice should pass before payment.</p>

    <h2>Which invoice OCR API should you use?</h2>
    <p>The right OCR invoice API depends on your stack and your invoices. On AWS, use Textract AnalyzeExpense; on Azure, the prebuilt invoice model; on Google Cloud, the Invoice Parser. Choose Mindee or Veryfi for a focused invoice API outside a big cloud, and a document API when invoices arrive mixed with other documents.</p>
    <table>
      <thead><tr><th>If you...</th><th>Start with</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>Run on AWS and read English or Western European invoices</td><td>AWS Textract AnalyzeExpense</td><td>$0.01 a page, stays in your AWS account and IAM</td></tr>
        <tr><td>Run on Azure or need more languages</td><td>Azure prebuilt-invoice</td><td>$0.01 a page, 27 languages, invoices up to 2,000 pages</td></tr>
        <tr><td>Run on Google Cloud with European invoices</td><td>Google Invoice Parser</td><td>12 languages including Baltic and Nordic ones; priced per document</td></tr>
        <tr><td>Want a small, invoice-focused API with monthly plans</td><td>Mindee</td><td>From $44 a month for 6,000 page credits</td></tr>
        <tr><td>Process receipts, checks and statements as well</td><td>Veryfi</td><td>Priced per document type; free up to 100 documents a month</td></tr>
        <tr><td>Receive invoices mixed with statements, pay stubs and IDs</td><td>A document API that classifies first, such as DocsAPI</td><td>One call decides the document type before extracting fields</td></tr>
      </tbody>
    </table>

    <h2>How much does an invoice OCR API cost?</h2>
    <p>At list prices, a one-page invoice costs $0.01 on AWS and Azure, $0.10 on Google (priced per document of up to 10 pages), about $0.007 to $0.009 on Mindee's Starter plan, and $0.16 on Veryfi. Per-page and per-document pricing rank very differently once invoices run to several pages, so price your own page mix.</p>
    <table>
      <thead><tr><th>API</th><th>List price</th><th>Free tier</th><th>10,000 one-page invoices a month</th><th>10,000 three-page invoices a month</th></tr></thead>
      <tbody>
        <tr><td>AWS Textract AnalyzeExpense</td><td>$10 per 1,000 pages ($8 above 1 million)</td><td>100 pages a month for 3 months</td><td>10 x $10 = $100</td><td>30 x $10 = $300</td></tr>
        <tr><td>Azure prebuilt-invoice</td><td>$10 per 1,000 pages</td><td>500 pages a month (F0; first 2 pages of each document)</td><td>10 x $10 = $100</td><td>30 x $10 = $300</td></tr>
        <tr><td>Google Invoice Parser</td><td>$0.10 per document of up to 10 pages</td><td>See Google's pricing page</td><td>10,000 x $0.10 = $1,000</td><td>10,000 x $0.10 = $1,000</td></tr>
        <tr><td>Mindee Starter</td><td>$44 a month for 6,000 credits (1 credit per page); overage at the plan rate plus 20%</td><td>14-day trial</td><td>$44 + 4,000 x $0.0088 = $79.20</td><td>$44 + 24,000 x $0.0088 = $255.20</td></tr>
        <tr><td>Veryfi Starter</td><td>$0.16 per invoice, $500 a month minimum</td><td>100 documents a month</td><td>10,000 x $0.16 = $1,600</td><td>10,000 x $0.16 = $1,600</td></tr>
        <tr><td>DocsAPI (our product)</td><td>From $0.02 per page, tables and classification included</td><td>Free 30-day trial for qualified lenders, after a demo</td><td>10,000 x $0.02 = $200</td><td>30,000 x $0.02 = $600</td></tr>
      </tbody>
    </table>
    <p>How the Mindee overage works: $44 buys 6,000 credits, so the plan rate is $44 / 6,000 = $0.0073 a credit, and overage adds 20%, giving $0.0088. Mindee also counts 1.5 credits for a page when you ask for confidence scores, which raises these figures. Prices were read from each vendor's pricing page on September 28, 2026 and exclude volume discounts. For how per-page, per-document and subscription pricing play out across vendors, see our <a href="/resources/blogs/invoice-ocr-pricing-models">invoice OCR pricing models guide</a>.</p>

    <h2>What fields does each invoice OCR API return?</h2>
    <p>All four big invoice APIs return the same core fields: vendor, invoice number, dates, PO number, subtotal, tax, total and line items with description, quantity, unit price and amount. Only the names differ. Here is the crosswalk from each vendor's own documentation, which you need the day you switch APIs or run two side by side.</p>
    <table>
      <thead><tr><th>Field</th><th>AWS AnalyzeExpense</th><th>Azure prebuilt-invoice</th><th>Google Invoice Parser</th><th>Mindee</th></tr></thead>
      <tbody>
        <tr><td>Vendor name</td><td>VENDOR_NAME</td><td>VendorName</td><td>supplier_name</td><td>supplier_name</td></tr>
        <tr><td>Invoice number</td><td>INVOICE_RECEIPT_ID</td><td>InvoiceId</td><td>invoice_id</td><td>invoice_number</td></tr>
        <tr><td>Invoice date</td><td>INVOICE_RECEIPT_DATE</td><td>InvoiceDate</td><td>invoice_date</td><td>date</td></tr>
        <tr><td>Due date</td><td>DUE_DATE</td><td>DueDate</td><td>due_date</td><td>due_date</td></tr>
        <tr><td>PO number</td><td>PO_NUMBER</td><td>PurchaseOrder</td><td>purchase_order</td><td>po_number</td></tr>
        <tr><td>Payment terms</td><td>PAYMENT_TERMS</td><td>PaymentTerm</td><td>payment_terms</td><td>Not in the field list</td></tr>
        <tr><td>Subtotal</td><td>SUBTOTAL</td><td>SubTotal</td><td>net_amount</td><td>total_net</td></tr>
        <tr><td>Tax</td><td>TAX</td><td>TotalTax</td><td>total_tax_amount</td><td>total_tax</td></tr>
        <tr><td>Total</td><td>TOTAL</td><td>InvoiceTotal</td><td>total_amount</td><td>total_amount</td></tr>
        <tr><td>Vendor tax ID</td><td>VENDOR_VAT_NUMBER, VENDOR_GST_NUMBER and others</td><td>VendorTaxId</td><td>supplier_tax_id</td><td>supplier_company_registration</td></tr>
        <tr><td>Line: description</td><td>ITEM</td><td>Items.*.Description</td><td>line_item/description</td><td>line_items.description</td></tr>
        <tr><td>Line: quantity</td><td>QUANTITY</td><td>Items.*.Quantity</td><td>line_item/quantity</td><td>line_items.quantity</td></tr>
        <tr><td>Line: unit price</td><td>UNIT_PRICE</td><td>Items.*.UnitPrice</td><td>line_item/unit_price</td><td>line_items.unit_price</td></tr>
        <tr><td>Line: amount</td><td>PRICE</td><td>Items.*.Amount</td><td>line_item/amount</td><td>line_items.total_price</td></tr>
        <tr><td>Line: product code</td><td>PRODUCT_CODE</td><td>Items.*.ProductCode</td><td>line_item/product_code</td><td>line_items.product_code</td></tr>
      </tbody>
    </table>
    <p>Two naming traps to catch in your mapping code. On AWS, PRICE is the line total and UNIT_PRICE is the price of one unit, so mapping PRICE to "unit price" breaks every multi-quantity line. And "subtotal" is called net_amount by Google and total_net by Mindee, which is easy to confuse with the total. Beyond these, Azure also returns AmountDue and payment details such as IBAN, and AWS returns ADDRESS blocks for bill-to, ship-to and remit-to.</p>

    <h2>What are the limits of each invoice OCR API?</h2>
    <p>This is the part pricing pages leave out, and the part that decides whether an API survives your real invoices. The limits that matter are languages, pages per invoice and how multi-page files are handled. Azure's invoice model supports 27 languages and up to 2,000 pages; Google's Invoice Parser lists 12 languages and handles up to 10 pages per synchronous request; Textract reads six languages and needs its asynchronous API for any PDF longer than one page.</p>
    <table>
      <thead><tr><th>API</th><th>Languages</th><th>Pages and files</th><th>Worth knowing</th></tr></thead>
      <tbody>
        <tr><td>AWS AnalyzeExpense</td><td>Textract's six: English, French, German, Italian, Portuguese, Spanish</td><td>Synchronous: 1 page per PDF; asynchronous for longer files</td><td>Returns a confidence score and position for every field</td></tr>
        <tr><td>Azure prebuilt-invoice</td><td>27 languages</td><td>Up to 2,000 pages, 500 MB on the paid tier; the free tier reads only the first 2 pages</td><td>Also reads utility bills, sales orders and purchase orders</td></tr>
        <tr><td>Google Invoice Parser</td><td>12: German, English, Spanish, Estonian, French, Italian, Latvian, Lithuanian, Dutch, Portuguese, Romanian, Swedish</td><td>Up to 10 pages per synchronous request; batch requests up to 200 pages per document</td><td>Price is per 10-page block, so a 1-page invoice pays for 10</td></tr>
        <tr><td>Mindee</td><td>See Mindee's documentation</td><td>Credit per page</td><td>Confidence scores cost extra credits</td></tr>
        <tr><td>Veryfi</td><td>See Veryfi's documentation</td><td>Priced per document</td><td>$500 a month minimum on the Starter plan</td></tr>
      </tbody>
    </table>

    <h2>How do you check invoice OCR API output before posting it?</h2>
    <p>Map every API's field names to your own, then check that each line's quantity times unit price equals its amount, that lines plus tax plus shipping minus discount equal the total, and that the due date matches the payment terms. These three checks catch most misreads before they become wrong payments.</p>
    <p>Here is the code we ran, on an example invoice that contains a typical OCR misread (600.00 read as 6000.00 on line 3):</p>
    <pre><code>from datetime import date, timedelta
from decimal import Decimal as D

def money(v):
    return D(str(v).replace(",", "").replace("$", "")) if v not in (None, "") else D("0")

def check_invoice(inv, tolerance=D("0.02")):
    problems = []
    lines_total = D("0")
    for n, line in enumerate(inv["lines"], 1):
        qty, price, amount = money(line["quantity"]), money(line["unit_price"]), money(line["amount"])
        if abs(qty * price - amount) > tolerance:
            problems.append(f"line {n}: {qty} x {price} = {qty * price} but amount is {amount}")
        lines_total += amount
    expected = lines_total + money(inv.get("tax")) + money(inv.get("shipping")) - money(inv.get("discount"))
    if abs(expected - money(inv["total"])) > tolerance:
        problems.append(f"lines + tax + shipping - discount = {expected} but total is {money(inv['total'])}")
    terms = inv.get("payment_terms", "").lower().replace(" ", "")
    if terms.startswith("net") and inv.get("due_date"):
        want = date.fromisoformat(inv["invoice_date"]) + timedelta(days=int(terms[3:]))
        if want.isoformat() != inv["due_date"]:
            problems.append(f"due date {inv['due_date']} does not match {inv['payment_terms']} (expected {want})")
    return problems</code></pre>
    <p>On the example invoice (three lines of 2,250.00, 1,600.00 and 600.00, tax 367.13, total 4,817.13, net 30 from August 14, 2026), the output was:</p>
    <pre><code>line 3: 12 x 50.00 = 600.00 but amount is 6000.00
lines + tax + shipping - discount = 10217.13 but total is 4817.13</code></pre>
    <p>With line 3 corrected, it printed "all checks passed". Add a duplicate check on vendor plus a normalized invoice number before approval; our <a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection guide</a> shows how to normalize numbers such as INV-0042 and 42. Line items are where APIs disagree most, so read our <a href="/resources/blogs/invoice-line-item-ocr">invoice line-item OCR guide</a> before trusting them.</p>

    <h2>How accurate are invoice OCR APIs?</h2>
    <p>On clean, digital invoices, header fields such as vendor, number, date and total are usually right; line items are the hard part. In our 2026 benchmark, the best engine extracted invoice line items at 93%, and general document parsers scored 81 to 87%. Test any API on 50 of your own invoices, including scans and multi-page ones, before you commit.</p>
    <p>Our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> has the full results, and our <a href="/resources/blogs/aws-textract-vs-docsapi">AWS Textract comparison</a> covers Textract's full price list and limits.</p>

    <h2>Where DocsAPI fits</h2>
    <p>Disclosure: DocsAPI is our product. It classifies each document first, so invoices can arrive mixed with bank statements, pay stubs and IDs; it returns fields as JSON, joins line-item tables that run across pages, and runs validation before you use the data. It costs from $0.02 per page with tables and classification included, and qualified lenders can get a free 30-day trial for qualified lenders after a demo. If you only process single-page invoices on AWS or Azure, their $0.01 a page is cheaper.</p>

    <h2>If you are choosing an API this month</h2>
    <p>Do not let a pricing page make this decision for you. Let fifty of your own invoices make it.</p>
    <ul>
      <li>Pick two APIs from the table that fit your cloud and languages, and run the same 50 invoices through both.</li>
      <li>Map both to your own field names using the crosswalk above, and run the check code on every result.</li>
      <li>Price your real page mix, not a one-page example: per-page and per-document pricing rank differently for long invoices.</li>
      <li>If you would rather not build the checks and routing yourself, compare AP tools in our <a href="/resources/blogs/best-ocr-software-for-accounts-payable">best OCR software for accounts payable guide</a>, or see how <a href="/use-cases/invoice-processing">DocsAPI handles invoice processing</a>.</li>
    </ul>

    <h2>Where these facts come from</h2>
    <ul>
      <li>AWS: field names from <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html" target="_blank" rel="noopener">Analyzing invoices and receipts</a>; limits from <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html" target="_blank" rel="noopener">Set quotas in Amazon Textract</a>; prices from AWS's public price list and the <a href="https://aws.amazon.com/textract/pricing/" target="_blank" rel="noopener">Textract pricing page</a>.</li>
      <li>Azure: capabilities and limits from <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice" target="_blank" rel="noopener">Invoice data extraction</a>; field names from Microsoft's published <a href="https://github.com/Azure-Samples/document-intelligence-code-samples/blob/main/schema/2024-11-30-ga/invoice.md" target="_blank" rel="noopener">invoice model schema</a>; prices from Microsoft's public retail prices API (East US).</li>
      <li>Google: field names and languages from the <a href="https://docs.cloud.google.com/document-ai/docs/processors-list" target="_blank" rel="noopener">Document AI processor list</a>; price and the 10-page count rule from <a href="https://cloud.google.com/document-ai/pricing" target="_blank" rel="noopener">Document AI pricing</a>.</li>
      <li>Mindee: field names from its <a href="https://docs.mindee.com/use-cases/extraction-models/invoice" target="_blank" rel="noopener">invoice model documentation</a>; plans from <a href="https://www.mindee.com/pricing" target="_blank" rel="noopener">Mindee pricing</a>. Veryfi: plans from <a href="https://www.veryfi.com/pricing/" target="_blank" rel="noopener">Veryfi pricing</a>.</li>
      <li>All pages read on September 28, 2026. The validation code was run on the example invoice shown; the invoice is illustrative, not real customer data. DocsAPI facts come from our own published product information.</li>
    </ul>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Vendor Comparisons",
  date: "October 5, 2026",
  datePublished: "2026-10-05T00:00:00.000Z",
  dateModified: "2026-10-06T00:00:00.000Z",
  last_updated: "October 6, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "invoice ocr api",
  secondary_keywords: [
    "ocr invoice api",
    "invoice processing api",
    "invoice data extraction api",
    "invoice parser api",
    "invoice ocr api pricing",
    "textract analyzeexpense",
    "azure prebuilt invoice",
    "google invoice parser",
    "mindee invoice api",
    "veryfi invoice api",
  ],
  tags: ["invoice OCR", "API", "AWS Textract", "Azure", "Google Document AI", "Mindee", "Veryfi"],
  cluster: "comparison",
  faq: [
    {
      question: "What is the best invoice OCR API?",
      answer:
        "The one that fits your cloud, languages and page mix. On AWS, Textract AnalyzeExpense; on Azure, the prebuilt invoice model with 27 languages; on Google Cloud, the Invoice Parser. Mindee and Veryfi suit teams outside the big clouds. Run the same 50 invoices through two options before you choose.",
    },
    {
      question: "Is there a free invoice OCR API?",
      answer:
        "Several have free tiers: Azure's F0 tier covers 500 pages a month (reading the first two pages of each document), AWS gives 100 AnalyzeExpense pages a month for three months, Veryfi covers 100 documents a month, Mindee offers a 14-day trial, and DocsAPI offers a free 30-day trial for qualified lenders after a demo.",
    },
    {
      question: "What is the cheapest invoice OCR API?",
      answer:
        "For one-page invoices at list prices, Mindee's Starter plan works out to under a cent a page, and AWS and Azure charge $0.01 a page. For long invoices, per-document pricing can win instead. Always price your real page mix, and add the cost of building checks and review yourself.",
    },
    {
      question: "Can an invoice OCR API read line items?",
      answer:
        "Yes. All four big APIs return line items with description, quantity, unit price and amount, and most add a product code. Line items are also where errors concentrate, so check that quantity times unit price equals the amount on every row before you use them.",
    },
    {
      question: "Does an invoice OCR API handle multi-page invoices?",
      answer:
        "Yes, with limits. Azure processes up to 2,000 pages, Google up to 10 pages per synchronous request and more in batch, and Textract needs its asynchronous API for PDFs longer than one page. Tables that continue across pages may still need joining and checking in your code.",
    },
    {
      question: "What is the difference between an invoice OCR API and invoice processing software?",
      answer:
        "An invoice OCR API returns fields; you build the checks, approvals and posting. Invoice processing or AP software includes intake, OCR, approval routing and payments in one product. APIs cost less per page but need engineering time; software costs more per invoice but works sooner.",
    },
    {
      question: "How do I switch from one invoice OCR API to another?",
      answer:
        "Map both APIs to your own field names, run them in parallel on the same invoices, and compare field by field. Watch the naming traps: on AWS, PRICE is the line total and UNIT_PRICE the unit price, and Google and Mindee call the subtotal net_amount and total_net.",
    },
    {
      question: "How accurate are invoice OCR APIs?",
      answer:
        "Header fields on clean digital invoices are usually right. Line items are harder: the best engine in our 2026 benchmark reached 93% on invoice line items and general document parsers 81 to 87%. Scans, photos and new vendors lower accuracy, so validate every result.",
    },
    {
      question: "Which invoice OCR API supports the most languages?",
      answer:
        "Of the ones compared here, Azure's prebuilt invoice model lists 27 languages, Google's Invoice Parser 12, and Textract six (English, French, German, Italian, Portuguese and Spanish). Check Mindee's and Veryfi's documentation for their current language lists, and test your own invoices in each language.",
    },
  ],
}
