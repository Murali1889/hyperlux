import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog18: BlogPost = {
  id: "new-18",
  title: "AWS Textract vs DocsAPI: Honest 2026 Comparison",
  slug: "aws-textract-vs-docsapi",
  excerpt:
    "AWS Textract pricing per 1,000 pages for every API, its real limits (six languages, one-page synchronous PDFs, US-only ID reading), and when Textract or DocsAPI is the better fit.",
  description:
    "AWS Textract pricing per 1,000 pages for every API, its real limits (6 languages, 1-page sync PDFs), and when Textract or DocsAPI fits better. Checked 2026.",
  metaTag: "AWS Textract Pricing 2026 vs DocsAPI: Costs and Limits",
  summary:
    "Pick AWS Textract if you already run on AWS and read English or Western European forms, receipts or US IDs; plain OCR costs $1.50 per 1,000 pages. Pick a document API like DocsAPI when you need multi-page statement tables joined and fields returned in one call.",
  content: `
    <p>AWS Textract is cheap for plain text ($1.50 per 1,000 pages) and gets expensive once you turn on forms ($50 per 1,000). It reads six languages, handles handwriting only in English, and needs an asynchronous job for any PDF over one page. This page gives the full Textract price list, its limits, worked costs, and when Textract, DocsAPI, Tesseract or another cloud fits.</p>

    <h2>Should you use AWS Textract or DocsAPI?</h2>
    <p>Use Textract if your stack is on AWS and your documents are English or Western European forms, receipts or US IDs. Use DocsAPI if you need document classification and named fields in one call, and bank statement or invoice tables joined across pages. Disclosure: DocsAPI is our product, so test both on your own documents.</p>
    <table>
      <thead><tr><th>Dimension</th><th>AWS Textract</th><th>DocsAPI</th></tr></thead>
      <tbody>
        <tr><td>What it is</td><td>AWS managed service with separate APIs for text, forms, tables, queries, expenses, IDs and mortgage documents</td><td>Standalone document API: classification, field extraction and validation</td></tr>
        <tr><td>Plain OCR price</td><td>$1.50 per 1,000 pages (first million a month)</td><td>Per page, from $0.02, tables and classification included</td></tr>
        <tr><td>Tables</td><td>$15 per 1,000 pages, returned page by page</td><td>Included; tables that run across pages are joined into one</td></tr>
        <tr><td>Forms (key-value pairs)</td><td>$50 per 1,000 pages</td><td>Included for supported document types</td></tr>
        <tr><td>Languages</td><td>English, French, German, Italian, Portuguese, Spanish</td><td>Major commercial languages; test yours</td></tr>
        <tr><td>Multi-page PDFs</td><td>Asynchronous job (synchronous calls take 1 page)</td><td>Whole document per request</td></tr>
        <tr><td>ID documents</td><td>AnalyzeID: US passports and US driver's licenses only</td><td>ID documents supported; test your countries</td></tr>
        <tr><td>Free tier</td><td>3 months: 1,000 text pages and 100 forms or tables pages a month</td><td>Free 30-day trial for qualified lenders, after a demo</td></tr>
        <tr><td>Best fit</td><td>AWS-native teams, forms, receipts, US IDs, mortgage packages</td><td>Lending and fintech documents, multi-page statements and invoices</td></tr>
      </tbody>
    </table>

    <h2>How much does AWS Textract cost per 1,000 pages?</h2>
    <p>Textract charges per page, with a lower rate after the first million pages a month. Plain text detection costs $1.50 per 1,000 pages ($0.0015 a page), tables $15, forms $50, queries $15, layout $4, receipts and invoices $10, and US IDs $25. The prices below are AWS's own list prices for US West (Oregon), taken from AWS's price list on September 28, 2026.</p>
    <table>
      <thead><tr><th>Textract API or feature</th><th>Per 1,000 pages, first 1M a month</th><th>Per 1,000 pages, above 1M</th><th>Per page, first tier</th></tr></thead>
      <tbody>
        <tr><td>DetectDocumentText (plain OCR, printed and handwritten)</td><td>$1.50</td><td>$0.60</td><td>$0.0015</td></tr>
        <tr><td>AnalyzeDocument: Layout</td><td>$4</td><td>$3</td><td>$0.004</td></tr>
        <tr><td>AnalyzeDocument: Signatures</td><td>$3.50</td><td>$1.40</td><td>$0.0035</td></tr>
        <tr><td>AnalyzeDocument: Tables</td><td>$15</td><td>$10</td><td>$0.015</td></tr>
        <tr><td>AnalyzeDocument: Queries</td><td>$15</td><td>$10</td><td>$0.015</td></tr>
        <tr><td>AnalyzeDocument: Queries and Tables</td><td>$20</td><td>$15</td><td>$0.02</td></tr>
        <tr><td>AnalyzeDocument: Custom Queries (trained adapter)</td><td>$25</td><td>$15</td><td>$0.025</td></tr>
        <tr><td>AnalyzeDocument: Forms</td><td>$50</td><td>$40</td><td>$0.05</td></tr>
        <tr><td>AnalyzeDocument: Forms and Queries</td><td>$55</td><td>$45</td><td>$0.055</td></tr>
        <tr><td>AnalyzeDocument: Forms, Queries and Tables</td><td>$70</td><td>$55</td><td>$0.07</td></tr>
        <tr><td>AnalyzeExpense (invoices and receipts)</td><td>$10</td><td>$8</td><td>$0.01</td></tr>
        <tr><td>AnalyzeID (US passports and driver's licenses)</td><td>$25 (first 100,000 pages)</td><td>$10 (above 100,000)</td><td>$0.025</td></tr>
        <tr><td>AnalyzeLending (mortgage packages)</td><td>$70</td><td>$55</td><td>$0.07</td></tr>
      </tbody>
    </table>
    <p>The free tier lasts three months for new AWS customers: 1,000 pages a month of text detection, 100 pages a month of forms, tables or layout, 100 of AnalyzeExpense, 100 of AnalyzeID and 2,000 of AnalyzeLending. Prices differ slightly by AWS region, so check the region you will run in.</p>

    <h3>What Textract costs at 100,000 pages a month</h3>
    <p>Here is AWS Textract pricing per 1,000 pages turned into monthly bills, so you can see which feature drives the cost. All of these stay in the first-million price tier.</p>
    <table>
      <thead><tr><th>What you run on 100,000 pages</th><th>Math</th><th>Monthly cost</th></tr></thead>
      <tbody>
        <tr><td>Plain text only (DetectDocumentText)</td><td>100 x $1.50</td><td>$150</td></tr>
        <tr><td>Layout</td><td>100 x $4</td><td>$400</td></tr>
        <tr><td>Receipts or invoices (AnalyzeExpense)</td><td>100 x $10</td><td>$1,000</td></tr>
        <tr><td>Tables</td><td>100 x $15</td><td>$1,500</td></tr>
        <tr><td>Queries and Tables</td><td>100 x $20</td><td>$2,000</td></tr>
        <tr><td>US IDs (AnalyzeID)</td><td>100,000 x $0.025</td><td>$2,500</td></tr>
        <tr><td>Forms</td><td>100 x $50</td><td>$5,000</td></tr>
        <tr><td>Forms and Tables together</td><td>100 x ($50 + $15)</td><td>$6,500</td></tr>
        <tr><td>Mortgage packages (AnalyzeLending)</td><td>100 x $70</td><td>$7,000</td></tr>
        <tr><td>DocsAPI, for comparison (our product)</td><td>100,000 x $0.02</td><td>$2,000 before volume discounts</td></tr>
      </tbody>
    </table>
    <p>The takeaway: if you only need text, Textract is far cheaper than any document API. If you need forms on every page, Textract can cost more than a specialized API. And above a million pages the second tier kicks in: 2 million pages of plain text cost 1,000 x $1.50 + 1,000 x $0.60 = $2,100 a month. For how per-page, per-document and subscription pricing compare across vendors, see our <a href="/resources/blogs/invoice-ocr-pricing-models">invoice OCR pricing guide</a> and <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing guide</a>.</p>

    <h2>Which Textract API do you need?</h2>
    <p>There are five Textract APIs, not one, and each Amazon Textract API call is billed per page. DetectDocumentText returns text and handwriting. AnalyzeDocument adds forms, tables, layout, signatures and queries. AnalyzeExpense reads invoices and receipts. AnalyzeID reads US passports and driver's licenses. AnalyzeLending classifies and extracts mortgage application documents. You pay for each feature you switch on.</p>
    <table>
      <thead><tr><th>Textract API</th><th>What it returns</th><th>Use it for</th></tr></thead>
      <tbody>
        <tr><td>DetectDocumentText</td><td>Lines and words with positions and confidence</td><td>Search, archives, feeding text to your own parser</td></tr>
        <tr><td>AnalyzeDocument</td><td>Key-value pairs (forms), tables, layout blocks, signatures, answers to questions you ask (queries)</td><td>Applications, tax forms, contracts, any form with labels</td></tr>
        <tr><td>AnalyzeExpense</td><td>Vendor, totals, dates and line items</td><td>Invoices and receipts</td></tr>
        <tr><td>AnalyzeID</td><td>Name, date of birth, expiry and other ID fields</td><td>US passports and US driver's licenses only</td></tr>
        <tr><td>AnalyzeLending</td><td>Page classification, splitting and extraction</td><td>Mortgage application packages</td></tr>
      </tbody>
    </table>
    <p>Queries let you ask for a field in plain English, such as "What is the account number?", and get the answer back. They are limited to 15 per page on synchronous calls and 30 on asynchronous calls, and they only work on English documents. If invoices are your main job, our <a href="/resources/blogs/invoice-ocr-api">invoice OCR API comparison</a> maps AnalyzeExpense's field names against Azure, Google and Mindee.</p>

    <h2>What are AWS Textract's limits?</h2>
    <p>The limits that surprise teams most: only six languages (English, French, German, Italian, Portuguese, Spanish), handwriting only in English, no vertical text, and synchronous calls that accept just one page of a PDF or TIFF. Multi-page PDFs must go through the asynchronous AWS Textract API, up to 3,000 pages and 500 MB per file.</p>
    <table>
      <thead><tr><th>Limit</th><th>What AWS documents</th><th>What it means for you</th></tr></thead>
      <tbody>
        <tr><td>Languages</td><td>English, French, German, Italian, Portuguese, Spanish; the detected language is not returned</td><td>Chinese, Arabic, Hindi or Japanese documents need another engine</td></tr>
        <tr><td>Handwriting</td><td>English only</td><td>Handwritten forms in other languages will not read well</td></tr>
        <tr><td>Synchronous calls</td><td>10 MB; PDF and TIFF limited to 1 page</td><td>A 5-page bank statement needs the async API</td></tr>
        <tr><td>Asynchronous calls</td><td>PDF and TIFF up to 500 MB and 3,000 pages</td><td>You start a job, then poll or wait for a notification</td></tr>
        <tr><td>Smallest text</td><td>15 pixels high (8 point at 150 DPI)</td><td>Scan fine print at 300 DPI</td></tr>
        <tr><td>File types</td><td>JPEG, PNG, PDF, TIFF; no XFA PDFs or password-protected PDFs</td><td>Convert other formats first</td></tr>
        <tr><td>AnalyzeID</td><td>US passports and US driver's licenses only</td><td>Non-US IDs need another service</td></tr>
      </tbody>
    </table>

    <h2>Where AWS Textract is the better choice</h2>
    <ul>
      <li><strong>You live on AWS.</strong> Documents already sit in S3, access runs through IAM, and billing is on one invoice. Adding an outside vendor has a real cost in security reviews and procurement.</li>
      <li><strong>You only need text.</strong> At $1.50 per 1,000 pages (and $0.60 above a million), plain text detection is hard to beat for a managed service.</li>
      <li><strong>Forms with clear labels and boxes.</strong> Government forms, applications and tax forms with printed labels suit AnalyzeDocument's key-value extraction.</li>
      <li><strong>US IDs and mortgage packages.</strong> AnalyzeID and AnalyzeLending are purpose-built for those two jobs.</li>
      <li><strong>Compliance inheritance.</strong> If your compliance program already covers AWS, Textract sits inside it. Check that the region and service are on AWS's list for the rules you follow.</li>
    </ul>

    <h2>Where AWS Textract falls short</h2>
    <ul>
      <li><strong>Tables that run across pages.</strong> Textract returns tables page by page, so a bank statement whose transaction table runs over 12 pages comes back as 12 tables your code must join, including repeated headers and rows split at page breaks. Our <a href="/resources/blogs/pdf-parser-online">PDF parser guide</a> shows this failure in detail, and our <a href="/resources/blogs/ocr-bank-statement-technology-revolutionizing-financial-data-processing">bank statement OCR guide</a> covers the checks you need after joining.</li>
      <li><strong>Languages.</strong> Six languages is narrow next to Tesseract's 100-plus. If you receive documents from Asia, the Middle East or India, Textract alone will not cover them.</li>
      <li><strong>Forms pricing at volume.</strong> Forms cost 33 times more than plain text ($50 against $1.50 per 1,000 pages). Switch forms on only for the pages that need it.</li>
      <li><strong>Async for any multi-page PDF.</strong> Because synchronous calls take one page, real-time flows on multi-page files need a job, a wait and a result fetch.</li>
      <li><strong>No document classification in the general API.</strong> Outside AnalyzeLending, you tell Textract what to run; deciding whether a file is a pay stub or a bank statement is your code's job.</li>
    </ul>

    <h2>Where DocsAPI is the better choice, and where it is not</h2>
    <p>DocsAPI (our product) classifies each document, extracts named fields as JSON and joins tables across pages, with tables and classification included in the per-page price. That suits lending, fintech and accounts payable teams processing bank statements, pay stubs, invoices and IDs.</p>
    <ul>
      <li><strong>Better for:</strong> mixed document packets where you do not know the type in advance, multi-page statement and invoice tables, teams not on AWS, and teams that want one price per page instead of per feature. Qualified lenders get a free 30-day trial after a demo, and DocsAPI is SOC 2 Type II and ISO 27001 certified and HIPAA-eligible with a business associate agreement.</li>
      <li><strong>Not better for:</strong> plain text at the lowest possible price (Textract's $0.0015 a page wins), teams that need everything on one AWS bill, and research papers or scientific PDFs, where tools like Docling fit better (see our <a href="/resources/blogs/docling-vs-llamaparse-vs-docsapi">Docling vs LlamaParse comparison</a>). It is a cloud API, so it cannot run air-gapped.</li>
    </ul>

    <h2>AWS Textract vs Tesseract: which should you use?</h2>
    <p>Use Tesseract when you need free, offline OCR of clean printed text in any of 100-plus languages. Use Textract when you want a managed service that also returns forms, tables, receipts and US ID fields, and your documents are in one of its six languages. Tesseract returns text only, and you run and scale it yourself.</p>
    <p>On hard images such as phone photos and faded receipts, Tesseract makes more errors than modern deep-learning engines; in our <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract test</a> it lost a receipt total. If you like open source but need better accuracy on messy images, PaddleOCR is the engine to compare against Textract, not Tesseract.</p>

    <h2>How does Textract compare to Google Document AI and Azure?</h2>
    <p>AWS OCR pricing matches Google and Azure for plain text: all three clouds charge $1.50 per 1,000 pages, falling to $0.60 at high volume. They differ on structured extraction. Google's Form Parser lists $30 per 1,000 pages and its Layout Parser $10; Azure's prebuilt models (invoice, receipt, layout and others) list $10 per 1,000 pages and custom extraction $30; Textract's Forms feature is $50.</p>
    <table>
      <thead><tr><th>Service</th><th>Plain OCR, per 1,000 pages</th><th>Structured extraction, per 1,000 pages</th><th>Free tier</th></tr></thead>
      <tbody>
        <tr><td>AWS Textract</td><td>$1.50, then $0.60 above 1M</td><td>Tables $15, Forms $50, Expense $10</td><td>3 months, 1,000 text pages a month</td></tr>
        <tr><td>Google Document AI</td><td>$1.50, then $0.60 above 5M (Enterprise Document OCR)</td><td>Layout Parser $10, Form Parser $30</td><td>See Google's pricing page</td></tr>
        <tr><td>Azure AI Document Intelligence</td><td>$1.50 (Read), then $0.60 at volume</td><td>Prebuilt models $10, custom extraction $30</td><td>500 pages a month (F0 tier)</td></tr>
      </tbody>
    </table>
    <p>The practical rule: pick the one on the cloud you already use unless a feature forces your hand, for example Textract's AnalyzeLending for mortgages, or Azure's and Google's wider language support. Our <a href="/resources/blogs/abbyy-finereader-alternative">ABBYY alternatives guide</a> compares these clouds with on-premise OCR SDKs.</p>

    <h2>How do you move from Textract to another API?</h2>
    <p>Keep Textract running while you test. The work is mostly mapping response formats, not changing the OCR.</p>
    <ol>
      <li><strong>Pick 50 to 100 of your hardest documents</strong>, especially multi-page statements and non-English files.</li>
      <li><strong>Run them through Textract and the candidate</strong> and score the fields you actually use, not character accuracy.</li>
      <li><strong>Write a small mapping layer</strong> from the new response format to the objects your code expects today.</li>
      <li><strong>Run both in parallel</strong> on live traffic for a few weeks and review every difference.</li>
      <li><strong>Move one document type at a time.</strong></li>
    </ol>

    <h2>What to do next</h2>
    <ul>
      <li><strong>On AWS, reading English forms or US IDs:</strong> stay on Textract and switch on only the features each page needs.</li>
      <li><strong>Processing multi-page bank statements or mixed lending packets:</strong> run the same files through Textract and a <a href="/book-demo">DocsAPI trial</a> and compare the joined tables.</li>
      <li><strong>Documents outside Textract's six languages:</strong> test Google Document AI, Azure, PaddleOCR or Tesseract instead.</li>
      <li><strong>Not sure yet:</strong> our <a href="/tools/which-ocr">Which OCR should I use tool</a> asks six questions and suggests an engine.</li>
    </ul>

    <h2>Sources and how we checked this</h2>
    <ul>
      <li>Textract prices: AWS's public price list for Amazon Textract, US West (Oregon), published September 11, 2026 and read on September 28, 2026, matching the <a href="https://aws.amazon.com/textract/pricing/" target="_blank" rel="noopener">Amazon Textract pricing page</a>, which also lists the free tier.</li>
      <li>Textract limits (languages, handwriting, page and size limits, AnalyzeID scope, queries): <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html" target="_blank" rel="noopener">Set quotas in Amazon Textract</a>.</li>
      <li>Google prices: <a href="https://cloud.google.com/document-ai/pricing" target="_blank" rel="noopener">Document AI pricing</a>. Azure prices: Microsoft's public retail prices API for Azure AI Document Intelligence (East US) and the <a href="https://azure.microsoft.com/en-us/pricing/details/ai-document-intelligence/" target="_blank" rel="noopener">Document Intelligence pricing page</a> for the free tier.</li>
      <li>DocsAPI facts come from our own published product information. The Tesseract comparison uses our <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">September 2026 side-by-side test</a>.</li>
    </ul>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Vendor Comparisons",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-10-12T00:00:00.000Z",
  last_updated: "October 12, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "aws textract",
  secondary_keywords: [
    "aws textract pricing per 1000 pages",
    "aws textract pricing per page 2026",
    "textract pricing",
    "aws ocr pricing",
    "textract apis",
    "amazon textract api",
    "aws textract api",
    "amazon textract compare",
    "aws textract vs tesseract",
    "textract vs tesseract",
    "textract alternative",
    "textract vs docsapi",
    "aws textract vs",
  ],
  tags: ["AWS Textract", "DocsAPI", "comparison", "OCR API", "pricing"],
  cluster: "comparison",
  faq: [
    {
      question: "How much does AWS Textract cost per page?",
      answer:
        "Plain text detection costs $0.0015 a page ($1.50 per 1,000) for the first million pages a month and $0.0006 after that. Tables cost $0.015, queries $0.015, forms $0.05, invoices and receipts $0.01, US IDs $0.025 and mortgage packages $0.07 a page, in US West (Oregon).",
    },
    {
      question: "Is there a free tier for AWS Textract?",
      answer:
        "Yes, for three months: 1,000 pages a month of text detection, 100 pages a month of forms, tables or layout, 100 of AnalyzeExpense, 100 of AnalyzeID and 2,000 of AnalyzeLending. After three months every page is billed at the normal rate.",
    },
    {
      question: "What languages does AWS Textract support?",
      answer:
        "English, French, German, Italian, Portuguese and Spanish. Handwriting is only supported in English, vertical text is not supported, and Textract does not tell you which language it detected. For other languages use Google Document AI, Azure, Tesseract or PaddleOCR.",
    },
    {
      question: "Can AWS Textract read multi-page PDFs?",
      answer:
        "Yes, through the asynchronous API, which accepts PDF and TIFF files up to 500 MB and 3,000 pages. Synchronous calls accept only one page of a PDF or TIFF. Tables still come back page by page, so a table that runs across pages has to be joined by your code.",
    },
    {
      question: "Is AWS Textract better than Tesseract?",
      answer:
        "Textract does more: it returns forms, tables, receipt fields and US ID fields, and it scales without servers. Tesseract is free, runs offline and reads over 100 languages against Textract's six. For plain text of clean pages in a supported language, Tesseract is often enough.",
    },
    {
      question: "Is AWS Textract better than DocsAPI overall?",
      answer:
        "Neither wins everywhere. Textract is cheaper for plain text and fits AWS-native teams, forms, US IDs and mortgage packages. DocsAPI, our product, fits lending and fintech documents where you need classification, named fields and tables joined across pages in one call. Test both on your own documents.",
    },
    {
      question: "Why does Textract struggle with bank statements?",
      answer:
        "Because it returns tables page by page. A statement whose transactions run across 5 to 15 pages comes back as separate tables with repeated headers and rows split at page breaks, and your code has to join them and check that running balances still add up. APIs built for statements join the pages for you.",
    },
    {
      question: "Is AWS Textract good for invoices?",
      answer:
        "AnalyzeExpense reads vendor, totals, dates and line items for $10 per 1,000 pages, which is good value for standard invoices and receipts. Matching invoices to purchase orders, checking that line items add up to the total and approving exceptions are left to your own code or AP system.",
    },
    {
      question: "Is AWS Textract HIPAA-eligible?",
      answer:
        "Textract can be used under AWS's business associate agreement when the service and region are on AWS's HIPAA-eligible list, so check that list for your region. DocsAPI is HIPAA-eligible with its own business associate agreement on request.",
    },
    {
      question: "What is the best AWS Textract alternative in 2026?",
      answer:
        "It depends on why you are leaving. For price on structured extraction, compare Azure's $10 prebuilt models and Google's $10 Layout Parser. For other languages, Google, Azure or PaddleOCR. For multi-page statements and lending packets, a document API such as DocsAPI. For offline use, Tesseract or PaddleOCR.",
    },
  ],
}
