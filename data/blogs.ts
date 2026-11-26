import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "./authors"
import { newBlogs } from "./new-blogs"
import { eeatMetadataBySlug } from "./blogs-eeat"

const existingBlogsRaw: BlogPost[] = [
  {
    id: "1",
    title: "OCR Document Management: The 5 Layers, Not 1",
    slug: "revolutionizing-document-management-with-ocr-technology",
    excerpt:
      "How to set up OCR document management for a scanned archive: capture settings, text layer checks, which fields to index, retention and access rules, and a test on your own files.",
    content: `<p>OCR document management turns a pile of scanned files into an archive you can search and file by rule. Every page gets a text layer from OCR, every document gets a type and a few index fields, and checks run before anything is filed. Rules then decide where each document goes, who can open it and when it can be deleted. The OCR is the easy part, and most of the work is choosing what to index and proving it worked.</p>
<p>To make one PDF searchable, <a href="/resources/blogs/make-pdf-searchable">making a PDF searchable</a> and the <a href="/resources/blogs/scanned-pdf-searchable">Mac, Windows and Linux steps</a> are quicker. To turn documents into checked data for another system, such as invoice totals, see <a href="/resources/blogs/intelligent-document-processing-the-future-of-automated-data-extraction">intelligent document processing</a> and the <a href="/resources/blogs/idp-vs-ocr-understanding-the-key-differences-for-automation-success">IDP vs OCR comparison</a>.</p>
<h2>What are the five layers of OCR document management?</h2>
<p>An archive uses the same five layers as an extraction pipeline. The difference is the goal: a document someone can find years later, not a number pushed into an ERP.</p>
<table>
  <thead><tr><th>Layer</th><th>Its job in an archive</th><th>What you decide</th></tr></thead>
  <tbody>
    <tr><td>Capture</td><td>Get pages in at a quality people can still read later</td><td>Resolution, color mode and file format.</td></tr>
    <tr><td>OCR</td><td>Add a text layer to every page that lacks one</td><td>What to do with pages that already have text.</td></tr>
    <tr><td>Classification and fields</td><td>Give each document a type and its index fields</td><td>Which fields people will search by.</td></tr>
    <tr><td>Validation</td><td>Check types and fields before filing</td><td>Which failures go to a person.</td></tr>
    <tr><td>Routing</td><td>File the document, start its retention clock, set its access group</td><td>The retention rule per type, and who can open what.</td></tr>
  </tbody>
</table>
<p>A scanner and an OCR tool cover the first two rows. The other three decide whether a search for one customer's statements returns the right files and nothing else.</p>
<h2>Which capture settings matter for an archive?</h2>
<p>Resolution serves two readers: the OCR engine now and a person reading the image later. Tesseract's guide to <a href="https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html" rel="nofollow noopener" target="_blank">improving output quality</a> says the engine "works best on images which have a DPI of at least 300 dpi".</p>
<p>Lower settings can still read clean print. In our <a href="/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts">preprocessing test</a>, synthetic pages at 100 DPI read with 0.2% character error, while 66 DPI text read at 22.9% until it was enlarged. Our <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk OCR test</a> found 150 DPI took 27% less time per page than 300. For an archive that saving is small, because a coarse scan cannot be redone once the paper is gone.</p>
<p>Color mode is next. A black and white scan keeps one bit per pixel, so faint signatures, stamps and pencil notes can drop out for good. Grayscale keeps them, at a larger file size.</p>
<p>Then the format. PDF/A is the ISO 19005 family of PDF made for long-term keeping, and the Library of Congress <a href="https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml" rel="nofollow noopener" target="_blank">format description</a> says it embeds all fonts and disallows encryption. So protection has to come from the storage system, not from a password on the file.</p>
<p>If OCRmyPDF adds your text layer, check what it wrote. Its <a href="https://ocrmypdf.readthedocs.io/en/latest/advanced.html" rel="nofollow noopener" target="_blank">advanced options page</a> says version 17 changed the default output from pdfa to auto, which writes a standard PDF when Ghostscript is missing and conversion fails. Run a PDF/A validator on a few outputs first.</p>
<p>Also switch on the --rotate-pages and --deskew options from OCRmyPDF's <a href="https://ocrmypdf.readthedocs.io/en/latest/cookbook.html" rel="nofollow noopener" target="_blank">cookbook</a>. In our <a href="/resources/blogs/ocr-upside-down-sideways-pages">rotation tests</a>, default Tesseract made about 92% to 94% character errors on pages that were upside down or turned 270 degrees.</p>
<h2>What is a text layer, and how do you check that a file has one?</h2>
<p>A text layer is invisible text placed behind the page image, each word where it appears on the page. Search, copy and screen readers use it, while the image stays as it was.</p>
<p>Checking one page is not enough. In our <a href="/resources/blogs/readable-pdf-vs-image-pdf">test of 390 PDFs</a>, a search for a word on page one passed all 50 files whose second page was a plain scan. A per-page label, which counts extractable characters and measures how much of the page is a picture, sorted every kind of test page correctly in about 12 milliseconds per page.</p>
<p>A text layer can also exist and be wrong, for example one added by an earlier OCR pass on a poor scan. In the same test, poor layers held 93.4% of their words on average, and as few as 67.8%. A fresh OCR read compared with the old layer caught 20 of 22 bad layers at a 0.95 agreement threshold, with no false alarms on 178 good pages.</p>
<p>By default, OCRmyPDF stops without changing a file when a page "seems to have text". Skip mode leaves such pages alone and redo mode replaces old invisible OCR text. Force mode turns every page into an image and also flattens form fields, so keep it for pages your check flagged.</p>
<h2>Which fields should you index?</h2>
<p>Full-text search finds words. It cannot answer "every bank statement for this borrower from 2024", because that question needs fields. Choose them from the questions people ask the archive, and keep one short list that every source uses.</p>
<p>NARA's <a href="https://www.archives.gov/records-mgmt/bulletins/2015/2015-04.html" rel="nofollow noopener" target="_blank">metadata guidance for permanent electronic records</a> sets a useful minimum: file name, record ID, title, description, creator, creation date and rights, meaning access limits. A business archive can start there and add what its own searches need.</p>
<table>
  <thead><tr><th>Field</th><th>Example</th><th>Why it is there</th></tr></thead>
  <tbody>
    <tr><td>Record ID</td><td>A unique number per document</td><td>A stable reference when names change.</td></tr>
    <tr><td>Document type</td><td>bank_statement</td><td>Search, retention and access all depend on it.</td></tr>
    <tr><td>Party</td><td>The customer's legal name, normalized</td><td>The most common search.</td></tr>
    <tr><td>Document date</td><td>Statement period end</td><td>Search by period.</td></tr>
    <tr><td>Reference number</td><td>Account ending 4471</td><td>Tells two documents of one type apart.</td></tr>
    <tr><td>Retention trigger date</td><td>Date of the credit decision</td><td>Starts the retention clock.</td></tr>
    <tr><td>Access group</td><td>lending-ops</td><td>Decides who can open it.</td></tr>
    <tr><td>Source and OCR status</td><td>Scanner 2, OCR added</td><td>Lets you redo one bad source.</td></tr>
    <tr><td>Page count</td><td>3</td><td>Shows lost or extra pages.</td></tr>
  </tbody>
</table>
<p>File names should repeat the main fields so a file makes sense in an export or an email, as in 2024-02-29_example-llc_bank-statement_4471.pdf. Year-first dates sort in order, and lowercase names with hyphens avoid trouble with spaces and case.</p>
<p>Type and party are what a classifier fills, and <a href="/resources/blogs/document-classification-software">document classification software</a> compares how tools make that call. Mixed scans need splitting first. In our <a href="/resources/blogs/split-loan-packet-pdf">loan packet test</a>, splitting wherever the page type changed got 8 of 120 packets right, and a splitter that also read page numbers, account numbers and statement periods got 118. <a href="/resources/blogs/data-normalization-extracted-documents">Normalize names and dates</a> before indexing, or one customer ends up under three spellings.</p>
<h2>How do you check the index before trusting it?</h2>
<p>A wrong index field hides a document as well as a missing file does. Run checks between extraction and filing, and send failures to a person instead of filing them under a guess.</p>
<ul>
  <li>The document date parses, falls in a plausible range and is not later than the scan date.</li>
  <li>The type is on your list, and the page count fits the footer, so "Page 3 of 4" means four pages.</li>
  <li>Reference numbers match their format, and IDs with a check digit pass it. In our <a href="/resources/blogs/how-to-fix-ocr-errors">tests on poor scans</a>, a checksum plus a second read took IBANs from 61% to 92% correct.</li>
  <li>The party name matches a record in your customer or vendor list.</li>
  <li>The file's hash is not already in the archive, which catches the same scan uploaded twice.</li>
  <li>Pages with an old OCR layer pass the agreement check above.</li>
</ul>
<p>Sample some documents that passed, too. A check only catches the errors it was written for, and a random sample is how you find the rest.</p>
<h2>How long should you keep each document, and who can open it?</h2>
<p>Retention rules attach to document types, and most start from an event rather than the scan date. That is why the index carries a trigger date.</p>
<p>For US tax records, the IRS page on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" rel="nofollow noopener" target="_blank">how long to keep records</a> gives 3 years in the general case, and 6 or 7 years in some situations. Employment tax records stay at least 4 years after the tax is due or paid, whichever is later.</p>
<p>Lenders have a separate clock. Regulation B, at <a href="https://www.consumerfinance.gov/rules-policy/regulations/1002/12/" rel="nofollow noopener" target="_blank">12 CFR 1002.12(b)</a>, keeps consumer credit application records for 25 months after the applicant is told of the action taken. For business credit it is 12 months, or 60 days for a business with gross revenues above $1 million unless it asks in writing for reasons or retention. The official interpretation accepts copies "produced by any other accurate retrieval system", which is where a scanned archive fits.</p>
<p>If you plan to shred the paper, read the IRS conditions first. <a href="https://www.irs.gov/pub/irs-irbs/irb97-13.pdf" rel="nofollow noopener" target="_blank">Rev. Proc. 97-22</a>, still cited on the IRS <a href="https://www.irs.gov/businesses/automated-records" rel="nofollow noopener" target="_blank">automated records page</a>, requires an indexing system, controls against unauthorized changes or deletion, and regular checks of stored records. A reader must be able to identify every letter and numeral in a stored copy. Originals may be destroyed only after you have tested the system and set up procedures to keep it compliant.</p>
<p>Give each document type an access group, so payroll records and ID documents are not open to everyone who can search. The revenue procedure also asks for controls on the index itself, since editing an entry can hide a record. Deletion should run on a schedule from the trigger date and the type's rule, paused for any document under a <a href="/resources/blogs/litigation-hold-software">litigation hold</a> or open audit.</p>
<h2>A worked example: indexing one folder of scanned loan files</h2>
<p>This example is a plan, not a measured result. A small lender has loan files scanned from 2019 to 2025, one PDF per borrower mixing statements, pay stubs, tax returns and an application.</p>
<ol>
  <li>Count files and pages per year and per scanner, and run the per-page label on every page.</li>
  <li>Run OCR on the image pages with rotation and deskew on. Write PDF/A, plus a --sidecar text file of the recognized text for the search index. Pages with an old OCR layer get the agreement check.</li>
  <li>Split each borrower PDF into documents, give each a type, and fill the index fields.</li>
  <li>Run the checks, and send failures to a review list with the page image next to the field.</li>
  <li>File each document under its new name and let the retention job set its deletion date.</li>
</ol>
<p>One record might look like this. The borrower name and numbers are made up.</p>
<pre><code>{
  "record_id": "LN-2021-00417-003",
  "file_name": "2021-03-31_example-bakery-llc_bank-statement_4471.pdf",
  "type": "bank_statement",
  "party": "Example Bakery LLC",
  "document_date": "2021-03-31",
  "account_ending": "4471",
  "retention_trigger": { "event": "credit_decision", "date": "2021-05-12" },
  "retention_rule": "loan_file_policy",
  "access_group": "lending-ops",
  "source": "scanner-2, scanned 2021-05-03",
  "text_layer": "ocr added, agreement check passed",
  "pages": 3
}</code></pre>
<p>The record stores a trigger and a rule name, not a deletion date, so a policy change means editing one rule instead of thousands of records. Regulation B sets only a minimum, and your own policy may ask for longer.</p>
<h2>How do you test the setup on your own files?</h2>
<p>Test before converting the whole archive, and again whenever a scanner, source or setting changes. Pick about 50 files across your sources and years, including the worst ones. A sample that size shows whether something is broken but cannot separate two close accuracy figures, as <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> explains.</p>
<ol>
  <li>For each file, note a name, a reference number and an amount someone would search for. Count how many searches lead to the right file.</li>
  <li>Compare every index field with the page and count wrong values per field. Fix the worst field first.</li>
  <li>Run the per-page label on the output. No sampled page should still be a picture with no text.</li>
  <li>Ask someone who did not build the system to retrieve five documents, as an auditor would, and time it.</li>
  <li>Zoom a few pages to 100% and confirm every digit in amounts and account numbers is readable.</li>
</ol>
<p>Record the results with the date and settings, since the IRS procedure asks for a description of the storage and indexing systems and for regular evaluations. For finance documents, see the <a href="/resources/blogs/ocr-finance">OCR in finance guide</a>.</p>
<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI, built by HyperVerge, is a document intelligence API for SMB lending and fintech. In an archive setup it covers the middle layers: reading scans, classifying each document, returning fields and tables as JSON and flagging low-confidence fields for review. It is not a document management system. Documents and extracted data are kept only for a short, configurable retention period and then deleted, so the archive and its index stay in your own storage.</p>
<p>It processes about 4 million pages a month, at about 1.1 seconds per page. In its own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 benchmark on 1,700 real documents</a>, it scored 97 to 99% on clean typed English, 93% on invoice line items and 91% on multi-page bank statement tables. It scored 81% on multilingual pages, 78% on handwritten forms and 76% on phone-photographed receipts.</p>
<p>DocsAPI ran that benchmark itself, so run the test above on your own files. <a href="/pricing">Pricing</a> starts at $0.02 per page with classification and tables included, and volume discounts begin above 100K pages a month. Access starts with a demo, then a free 30-day trial for qualified lenders.</p>`,
    image: "/images/ocr-process.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "May 12, 2025",
    readTime: "9 min read",
    author: nupuraUghade,
    metaTag: "OCR Document Management: The 5 Layers, Not 1",
  },

  {
    id: "3",
    title: "OCR API for Receipts: Why 95% Accuracy Is Not Enough",
    slug: "ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now",
    excerpt:
      "A phone photo of a receipt had 6.4% character error, yet only 42% of receipts came back with merchant, date, tax and total all right. Here is the test and a fix for shadows.",
    content: `
<p>An OCR API is an HTTP endpoint: you send it an image or PDF of a receipt or invoice and it returns the text, and often the fields, as JSON. The number that vendors quote for it is usually character accuracy, and for finance work that number hides the problem. In our test of 300 synthetic receipts read with Tesseract 5.5.2, a phone photo had 6.4% character error, which sounds like 94% accuracy. Only 42% of those receipts came back with the merchant, date, tax and total all correct. A faded thermal receipt had 4.4% character error and 32% fully correct receipts. The gap is the whole story of receipt automation, and this guide shows where it comes from, what fixes part of it, and how to test any OCR API before you commit.</p>
<p>It replaces an earlier version of this page that told a story about a client team and cited a market forecast we could not source. What follows is from tests we ran and can repeat.</p>

<h2>What does an OCR API do for a finance team?</h2>
<p>It replaces typing. For each receipt, invoice or statement, it returns the characters on the page, usually with a position and a confidence score for each word, and a good one also returns named fields: merchant, date, subtotal, tax and total. Your system then posts those fields into an expense report or the ledger. The risk is not that the API is slow, it is that a wrong field looks the same as a right one. A total read as 102.68 instead of 162.68 posts without complaint. That is why finance teams need to measure at the field level and not by the characters on the page. For the invoice side of the same question, see <a href="/resources/blogs/invoice-ocr-api">invoice OCR API</a> and <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR</a>; for the general picture, <a href="/resources/blogs/ocr-finance">OCR in finance</a>.</p>

<h2>How did we test receipts?</h2>
<p>We generated 50 synthetic receipts per condition (a different merchant, date, 3 to 7 items, subtotal, 8.25% tax and total), printed in a typewriter style font at 300 DPI, then applied six capture conditions:</p>
<ul>
  <li><strong>Flat:</strong> a clean scan.</li>
  <li><strong>Phone:</strong> photographed at a slight angle (corners moved by up to 7% of the width), on a gray surface, reduced to about half size and slightly blurred.</li>
  <li><strong>Shadow:</strong> a diagonal shadow darkening part of the receipt to between 45% and 65% brightness.</li>
  <li><strong>Fade:</strong> thermal paper fade, with black text turned into gray between 120 and 165 out of 255 and added noise.</li>
  <li><strong>Crumple:</strong> wave distortion that bends the lines, plus uneven shading.</li>
  <li><strong>Combo:</strong> phone angle, shadow and fade together.</li>
</ul>
<p>We read each image with Tesseract 5.5.2 in single block mode, with no preprocessing ("raw"), and again after a lighting correction step described below ("normalized"). We then pulled four fields by simple rules (merchant is the first line, date is the first date pattern, tax and total are the numbers on the lines that start with TAX and TOTAL) and checked each against what we had printed. A receipt counts as "all four right" only if all four fields match exactly. The receipts are synthetic and English, which we return to in the limits. The flat condition scored 0.2% character error and 100% on every field, which shows the setup itself is sound.</p>

<h2>What does 95% character accuracy mean for receipts?</h2>
<p>Much less than it sounds. This is the raw result for each condition (50 receipts each).</p>
<table>
  <thead><tr><th>Condition</th><th>Character error</th><th>Merchant</th><th>Date</th><th>Total</th><th>Tax</th><th>All four right</th></tr></thead>
  <tbody>
    <tr><td>Flat</td><td>0.2%</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
    <tr><td>Phone</td><td>6.4%</td><td>94%</td><td>98%</td><td>54%</td><td>50%</td><td>42%</td></tr>
    <tr><td>Shadow</td><td>52.4%</td><td>14%</td><td>22%</td><td>46%</td><td>38%</td><td>12%</td></tr>
    <tr><td>Fade</td><td>4.4%</td><td>100%</td><td>100%</td><td>64%</td><td>50%</td><td>32%</td></tr>
    <tr><td>Crumple</td><td>5.4%</td><td>92%</td><td>100%</td><td>82%</td><td>80%</td><td>68%</td></tr>
    <tr><td>Combo</td><td>66.4%</td><td>4%</td><td>22%</td><td>16%</td><td>8%</td><td>0%</td></tr>
  </tbody>
</table>
<p>Look at the phone, fade and crumple rows. Character error was between 4.4% and 6.4%, a figure that a vendor could describe as "94% to 96% accurate". The amount fields were right between 50% and 82% of the time, and the share of receipts with every field right was 32% to 68%. The reason is simple arithmetic. The four fields that matter are a small part of the page, they are mostly digits, and one wrong digit makes a whole field wrong. Digits are also where thin or faded print fails first, in the same way described in our guide to <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors in numbers</a>.</p>

<h2>Which capture problem hurts most?</h2>
<p>Shadow, by a wide margin on character error: 52.4%, which is consistent with a single brightness cutoff failing across a gradient. The lighting step below, which fixed most of it, points the same way. On the combined condition, 66.4%, and none of the 50 receipts had all four fields right. Fade did something different. It left merchant and date at 100% because the large header text stayed legible, and cut total to 64% and tax to 50%: the small digits are the first to fail when contrast drops. The phone angle mostly hit digits as well (total 54%).</p>
<p>The practical reading is that the cause of failure depends on the capture. An app that shows an overlay to guide the user to hold the phone flat and avoid shadows is removing the worst case before OCR starts, and it is cheaper than any engine upgrade.</p>

<h2>Does fixing the lighting first help?</h2>
<p>For shadow, a great deal. We added a step that estimates the page background (a dilation followed by a median blur), divides it out and stretches the contrast. The script below is the one we ran.</p>
<pre><code>import cv2, numpy as np

def normalize(src, dst):
    """Remove uneven lighting before OCR."""
    a = cv2.imread(src, 0)
    k = max(15, (min(a.shape) // 30) | 1)
    bg = cv2.dilate(a, np.ones((k, k), np.uint8))
    bg = cv2.medianBlur(bg, k | 1)
    d = 255 - cv2.absdiff(a, bg)
    d = cv2.normalize(d, None, 0, 255, cv2.NORM_MINMAX)
    cv2.imwrite(dst, d)</code></pre>
<table>
  <thead><tr><th>Condition</th><th>Raw: all four right</th><th>Normalized: all four right</th><th>Raw character error</th><th>Normalized</th></tr></thead>
  <tbody>
    <tr><td>Flat</td><td>100%</td><td>100%</td><td>0.2%</td><td>0.2%</td></tr>
    <tr><td>Phone</td><td>42%</td><td>44%</td><td>6.4%</td><td>6.2%</td></tr>
    <tr><td>Shadow</td><td>12%</td><td>68%</td><td>52.4%</td><td>7.5%</td></tr>
    <tr><td>Fade</td><td>32%</td><td>32%</td><td>4.4%</td><td>4.2%</td></tr>
    <tr><td>Crumple</td><td>68%</td><td>72%</td><td>5.4%</td><td>5.1%</td></tr>
    <tr><td>Combo</td><td>0%</td><td>32%</td><td>66.4%</td><td>16.4%</td></tr>
  </tbody>
</table>
<p>On shadow, receipts with all four fields right went from 12% to 68% and character error fell from 52.4% to 7.5%. The combined condition went from 0% to 32%. Phone angle, fade and crumple barely moved, which makes sense: the step corrects uneven brightness, not perspective, low contrast or bent lines. It also did nothing for the flat page, so it is safe to apply to everything, though we only tested it on these synthetic receipts. For other preprocessing that is worth the effort and what is not, see <a href="/resources/blogs/ocr-stamps-watermarks-highlighter">stamps, watermarks and highlighter</a>, and for pages that arrive rotated, <a href="/resources/blogs/ocr-upside-down-sideways-pages">upside down and sideways pages</a>.</p>

<h2>Why are most failures missing fields and not wrong ones?</h2>
<p>We split the date, tax and total fields (900 across the 300 receipts) into correct, missing and wrong. Read raw, 565 were correct, 317 were missing (the parser could not find the field at all) and only 18 were present but wrong. After normalization, 717 were correct, 160 missing and 23 present but wrong. So most failures were loud: the label or the number was unreadable and the field was empty. A few were quiet: the label was fine but a digit changed. In the faded receipts we checked, a tax of 7.83 came back as 1.83, 12.28 came back as "12-528", and a total of 161.12 came back as "L6Ot 12".</p>
<p>This matters for design. A missing field can be handled by a fallback (a second read, a human check). A wrong field has to be caught by a rule, because nothing about the output says it is wrong.</p>

<h2>Can confidence scores or a math check catch the quiet errors?</h2>
<p>Two checks are cheap. The first is the engine's confidence for the words in the field. We flagged a field when its lowest word confidence was below a threshold, and counted how many of the present but wrong fields were caught and how many correct fields were flagged for nothing.</p>
<table>
  <thead><tr><th>Threshold</th><th>Raw: wrong caught (of 18)</th><th>Raw: correct fields flagged</th><th>Normalized: wrong caught (of 23)</th><th>Normalized: correct flagged</th></tr></thead>
  <tbody>
    <tr><td>Below 70</td><td>10</td><td>24 of 565 (4%)</td><td>8</td><td>19 of 717 (3%)</td></tr>
    <tr><td>Below 90</td><td>12</td><td>48 of 565 (8%)</td><td>10</td><td>40 of 717 (6%)</td></tr>
    <tr><td>Below 95</td><td>14</td><td>152 of 565 (27%)</td><td>12</td><td>161 of 717 (22%)</td></tr>
  </tbody>
</table>
<p>Confidence caught between 8 and 14 of the quiet errors, roughly 35% to 78% depending on the threshold and the read, and pushing the threshold up buys little before the false flags jump (27% of correct fields at 95). It is a useful screen, not a guarantee. The second check is arithmetic: subtotal plus tax should equal the total. Every one of the quiet total errors was caught this way (8 of 8 raw, 10 of 10 normalized), and the check passed 124 of the 127 receipts that were fully correct on the raw read. The arithmetic check does not test merchant or date, which is why it passed 16 of the 173 receipts that had some error. Use both, and add the date and merchant checks your ledger needs, such as a date that falls in the expected period or a merchant that matches a known vendor. For the same idea on bank statements, see <a href="/resources/blogs/ocr-technology-in-banking">OCR in banking</a>.</p>

<h2>How should you test an OCR API before you commit?</h2>
<ol>
  <li><strong>Use your own documents.</strong> Collect 100 receipts or invoices that reflect how they really arrive: phone photos, faded thermal paper, crumpled ones, scans. Do not let a vendor pick the sample. A sample size guide for invoices is in <a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">parallel run sample size</a>.</li>
  <li><strong>Type the answer key once.</strong> Merchant, date, tax and total for each document is enough to start.</li>
  <li><strong>Report three numbers, not one.</strong> Character accuracy, field accuracy for each field, and the share of documents with every field right. The third is the one that decides how many documents a person must still touch.</li>
  <li><strong>Separate missing from wrong.</strong> Missing fields cost review time. Wrong fields cost money. Ask the vendor for both counts.</li>
  <li><strong>Check that confidence is useful.</strong> At the threshold you plan to use, what share of wrong fields does it catch and what share of correct ones does it flag?</li>
  <li><strong>Run the arithmetic and plausibility checks on the output</strong> and count what slips through.</li>
</ol>
<p>The same method works for any engine. Our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> shows how we ran it on 1,700 documents, and <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> explains the metrics. For choosing between engines on your own data, see <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a> and, for free tools, <a href="/resources/blogs/free-online-ocr-tools">free online OCR tools</a>.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI was built by HyperVerge. It is a layout aware engine with a vision language model fallback for complex pages, On its own 2026 benchmark of 1,700 documents it scored 76% on phone receipts, 93% on invoice line items, 97% to 99% on clean text and 78% on handwriting, at about 1.1 seconds per page. Note that 76% on phone receipts is lower than the clean text figure, which is the same direction as our Tesseract test: the capture is the hard part, whatever the engine. Those benchmark figures are separate from the synthetic tests in this guide, and the two should not be compared number to number. Pricing starts from $0.02 per page, with volume discounts above 100,000 pages a month. Access starts with a demo and then a free 30 day trial for qualified lenders. For accounting systems, see <a href="/resources/blogs/ocr-accounting">OCR for accounting</a>, and for foreign currency receipts, <a href="/resources/blogs/multi-currency-invoice-ocr">multi currency invoice OCR</a>.</p>

<h2>What do these tests not show?</h2>
<ul>
  <li>Receipts are synthetic and use one typewriter style font and one layout. Real thermal paper has smudges, logos and varied fonts.</li>
  <li>The capture conditions are our own recipes. A different phone, a different light or a different crease will fail differently.</li>
  <li>The fields were found by simple label rules. A better parser would recover some of the missing fields, and we counted a misread label as a missing field.</li>
  <li>50 receipts per condition means a percentage such as 42% has a margin of several points. Compare the pattern, not the decimals.</li>
  <li>We tested Tesseract 5.5.2 only, in English, with the default model. Merchant names were scored by exact match, which is strict.</li>
</ul>

<h2>Sources and how we checked this</h2>
<p>All figures are from our own runs: 6 conditions, 50 receipts each, read raw and normalized (600 reads). The normalization script above is the version we ran. Public receipt OCR guides mostly quote vendor accuracy figures on clean inputs and note that accuracy drops on crumpled or faded paper; some cite studies that report lower exact match rates on phone photos than on flat scans. We did not find published field level results by capture condition with the method disclosed, which is why we ran these.</p>
    `,
    image: "/images/ocr-api.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "May 12, 2025",
    readTime: "12 min read",
    author: nupuraUghade,
    metaTag: "OCR API for Receipts: What 95% Accuracy Really Means",
  },
  {
    id: "4",
    title: "IDP vs OCR: What's the Real Difference in 2026?",
    slug: "idp-vs-ocr-understanding-the-key-differences-for-automation-success",
    excerpt:
      "OCR reads text. IDP understands documents. The real 2026 difference, including which one your stack actually needs, with numbers from production.",
    content: `<p>The first document AI project I shipped used OCR alone. It stalled on field-level accuracy. The next project used IDP, OCR wrapped with classification, extraction, validation, and routing, and hit 97%. Same OCR engine underneath, 15-point accuracy jump. That gap is the real difference between OCR and IDP: one reads pixels, one runs a workflow. This guide is the honest breakdown of when each wins, with numbers from production and a comparison table you can bring to a vendor meeting.</p>

    <h2>What's the difference between OCR and IDP?</h2>

    <p>OCR (optical character recognition) converts pixels into text, nothing more. IDP (intelligent document processing) bundles OCR with four additional layers: classification (what type of document is this?), field extraction (which values matter?), validation (do totals reconcile?), and routing (where does structured output go?). Every IDP platform contains OCR; no OCR API contains IDP. The practical distinction: OCR sells per-page and hands you raw text; IDP sells per-document or per-workflow and hands you structured, validated fields ready to feed into ERP, AP, or lending systems.</p>

    <h2>How does OCR work on its own?</h2>

    <p>OCR runs a three-step pipeline: image pre-processing (deskew, rotate, adjust contrast), character recognition (a computer vision or neural model converts pixel regions into characters), and text assembly (characters are ordered into words and lines). Modern OCR engines like Tesseract, AWS Textract, and Google Document AI ship 95-99% character accuracy on clean printed documents. The output is a text stream, no field labels, no validation, no routing. What you do with that text is your problem to solve, which is where IDP starts.</p>

    <h2>How does IDP extend OCR?</h2>

    <p>IDP extends OCR with four additional layers stacked on top. Classification decides "this is an invoice" or "this is a bank statement" so the right extraction template runs. Field extraction pulls specific values (vendor, PO number, total, due date) using layout-aware models tuned per document type. Normalization converts dates to ISO 8601, currency to decimal, vendor names to a master list. Validation reconciles extracted totals against document totals and business rules. Finally, routing pushes structured output to downstream systems with confidence scores, sending low-confidence rows to a human review queue.</p>

    <ol>
      <li><strong>OCR:</strong> pixels → raw text</li>
      <li><strong>Classification:</strong> what type of document is this?</li>
      <li><strong>Field extraction:</strong> which values matter and where are they?</li>
      <li><strong>Normalization:</strong> standardize format (dates, currency, names)</li>
      <li><strong>Validation:</strong> do totals reconcile with document totals?</li>
      <li><strong>Routing:</strong> structured output to ERP + confidence scores to review queue</li>
    </ol>

    <h2>OCR vs IDP comparison table (2026)</h2>

    <p>The honest side-by-side across the axes that matter for finance, lending, AP, and KYC teams making the build-vs-buy decision:</p>

    <table>
      <thead><tr><th>Axis</th><th>OCR</th><th>IDP</th></tr></thead>
      <tbody>
        <tr><td>Output</td><td>Raw text stream</td><td>Structured fields + confidence scores</td></tr>
        <tr><td>Document types</td><td>Any (unlabeled)</td><td>Classified (invoice, statement, ID, etc.)</td></tr>
        <tr><td>Field-level accuracy</td><td>N/A (no field labels)</td><td>91-99% depending on doc type (our 2026 benchmark)</td>
</tr>
        <tr><td>Validation</td><td>None</td><td>Totals reconcile, business rules apply</td></tr>
        <tr><td>Pricing model</td><td>Per-page ($0.01-$0.05)</td><td>Per-document ($0.05-$0.50) or per-workflow</td></tr>
        <tr><td>Setup effort</td><td>API call, done</td><td>Template config, ERP integration, review queue</td></tr>
        <tr><td>Best for</td><td>Text digitization, search</td><td>Production workflows with structured downstream</td></tr>
        <tr><td>Named examples</td><td>Tesseract, AWS Textract, Google Document AI, DocsAPI</td><td>Bill.com, Ocrolus, Mindee, Rossum, AvidXchange</td></tr>
      </tbody>
    </table>

    <h2>When should you pick OCR over IDP?</h2>

    <p>Pick pure OCR when documents are highly uniform (a single template you control), downstream systems just need raw searchable text (archival, discovery, compliance PDF search), or you have engineering capacity to build classification + validation + routing layers yourself and want to control every step. Pick OCR API + custom stack when your integration requirements don't match any IDP platform's supported ERP list, or when unit economics matter (10K+ documents/month often makes DIY cheaper).</p>

    <h2>When should you pick IDP over OCR?</h2>

    <p>Pick IDP when document layouts vary (multiple vendors, multiple document types, unpredictable inputs), when you need structured field extraction that feeds directly into an ERP or workflow tool, or when you don't have engineering capacity to build the classification + validation + routing layers. Also pick IDP when compliance, audit trails, or human-in-the-loop review queues are non-negotiable, those are core IDP features that OCR APIs don't provide out of the box.</p>

    <h2>How do OCR and IDP work together in production?</h2>

    <p>In practice, most production document AI stacks use both. OCR is the reading layer at the bottom. Classification + extraction + validation + routing are the layers on top. Vendors like Ocrolus, Bill.com, and AvidXchange build IDP platforms with OCR (often AWS Textract or a proprietary engine) as one component. Builders assembling their own stack use raw OCR APIs (Tesseract, Textract, Google Document AI, DocsAPI) and write the four IDP layers themselves. The choice is not OCR-or-IDP; it's whether you buy the whole stack or build the layers on top of raw OCR.</p>

    <p>For finance workflows specifically, see our <a href="/resources/blogs/ocr-finance">OCR in finance pillar</a>. For AP-specific pipelines, our <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR guide</a> covers the touchless-rate math. For the raw OCR engineering reality, our <a href="/resources/blogs/ocr-pdf-honest-guide">4M-pages-a-month production guide</a>.</p>

    <h2>What I'd do today</h2>

    <p>Under 500 documents/month with multiple document types: buy IDP. The engineering time to build classification + validation + routing dwarfs the vendor fee. Between 500-10,000 documents/month, trial IDP vendors on your real documents, most win on time-to-value. Above 10,000/month, evaluate the DIY path seriously: OCR APIs at $0.01-$0.05/page plus a custom validation layer often beats IDP unit economics at scale, and you get flexibility IDP platforms don't offer. Single document type with uniform templates: pure OCR wins. Multi-type variable layouts with an existing ERP: IDP wins. (<a href="/author/nupura-ughade">More on build-vs-buy decisions here</a>.)</p>`,
    image: "/images/idp-vs-ocr.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "May 27, 2025",
    readTime: "9 min read",
    author: nupuraUghade,
    metaTag: "IDP vs OCR: The Real Difference in 2026 (Comparison)",
  },

  {
    id: "6",
    title: "Intelligent Document Processing: What IDP Actually Fixes",
    slug: "intelligent-document-processing-the-future-of-automated-data-extraction",
    excerpt:
      "IDP classifies a document, pulls out the fields you need, checks them and sends only the failures to a person. One invoice through each stage, where each stage breaks, and when OCR alone is enough.",
    content: `<p>Intelligent document processing (IDP) is software that reads a document, works out what kind of document it is, pulls out the fields and tables you need and checks them against rules. Clean results go straight to the system that uses them, and a person sees only what fails a check. OCR is one step inside that chain. It turns the picture of a page into text, and IDP turns that text into checked data, such as an invoice total that adds up and matches its purchase order.</p>
<p>IDP is worth paying for when documents arrive in many layouts, the data has to land in a system of record, and a wrong number costs money. If all you need is searchable or copyable text, OCR alone does the job. Below, one invoice goes through each stage, followed by where each stage breaks and what to test before you buy.</p>

<h2>How is IDP different from OCR?</h2>
<p>OCR answers one question: what characters are on this page? Everything after that is left to you. IDP keeps the OCR step and adds the questions OCR never asks.</p>
<table>
  <thead><tr><th>Question</th><th>OCR alone</th><th>IDP</th></tr></thead>
  <tbody>
    <tr><td>What text is on the page?</td><td>Text, with its position on the page</td><td>The same OCR text, used as input</td></tr>
    <tr><td>What document is this?</td><td>Not answered</td><td>A type for each document (invoice, bank statement, pay stub) and where each one starts and ends in a file</td></tr>
    <tr><td>Which values matter?</td><td>Your own code has to find them</td><td>Named fields and table rows, each with a confidence score</td></tr>
    <tr><td>Are the values right?</td><td>Not checked</td><td>Arithmetic, format, check digit and lookup rules</td></tr>
    <tr><td>Where does it go next?</td><td>Your decision</td><td>Passing documents move on; failing fields go to a person</td></tr>
  </tbody>
</table>
<p>So the gap is less about reading quality than about what comes out: a page of text, or a total that has been added up. The <a href="/resources/blogs/idp-vs-ocr-understanding-the-key-differences-for-automation-success">IDP vs OCR comparison</a> goes further into pricing and architecture.</p>

<h2>What happens to one invoice, stage by stage?</h2>
<p>Take a common case. A vendor emails a three-page scanned PDF: pages 1 and 2 are an invoice, and page 3 is the delivery note for the same order. The invoice has three lines (the figures are an example).</p>
<table>
  <thead><tr><th>Line</th><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Hex bolts, box of 100</td><td>12</td><td>18.50</td><td>222.00</td></tr>
    <tr><td>2</td><td>Hinge set</td><td>4</td><td>41.25</td><td>165.00</td></tr>
    <tr><td>3</td><td>Delivery</td><td>1</td><td>95.00</td><td>95.00</td></tr>
    <tr><td></td><td>Subtotal</td><td></td><td></td><td>482.00</td></tr>
    <tr><td></td><td>Sales tax, 8%</td><td></td><td></td><td>38.56</td></tr>
    <tr><td></td><td>Total</td><td></td><td></td><td>520.56</td></tr>
  </tbody>
</table>

<h3>1. Classification: what is in this file?</h3>
<p>The first job is to label each page and find where each document begins. Here that means an invoice on pages 1 and 2 and a delivery note on page 3. They need different extraction, and the delivery note matters later as proof of what arrived. <a href="/resources/blogs/document-classification-software">Document classification software</a> compares the ways tools make this call.</p>
<p>Tools differ on whether they split a file at all. Azure Document Intelligence's <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/train/custom-classifier" rel="nofollow noopener" target="_blank">custom classifier</a> returns a page range for each document it finds, but in its v4.0 API it splits a file only when <code>splitMode</code> is set to <code>auto</code>. The default, <code>none</code>, treats the whole file as one document.</p>

<h3>2. Extraction: which values matter?</h3>
<p>Next the invoice pages are read for named fields: vendor, invoice number, invoice date, due date, PO number, currency, subtotal, tax and total. The line items come out as a table with one row per line. Each value usually comes back with a confidence score and its position on the page, which lets a reviewer jump straight to it later.</p>
<p>Now suppose a smudge over line 2 makes the unit price come out as 47.25 instead of 41.25. Nothing at this stage notices. The extractor found a number in the right column and reported it.</p>

<h3>3. Validation: do the numbers agree?</h3>
<p>Validation runs rules that the document itself makes possible. For this invoice:</p>
<ul>
  <li>Quantity times unit price equals the line amount, on every line. Line 2 fails: 4 × 47.25 is 189.00, but the page says 165.00.</li>
  <li>The line amounts add up to the subtotal. 222.00 + 165.00 + 95.00 is 482.00, so this passes, because the misread was in the price and not in the printed amount.</li>
  <li>Subtotal plus tax equals the total. 482.00 + 38.56 is 520.56, so this passes too.</li>
  <li>The due date falls on or after the invoice date and fits the payment terms.</li>
  <li>The vendor and its bank details match the vendor record, and this invoice number has not been paid before.</li>
  <li>The PO is open, its unit prices match, and the delivery note shows the quantities that were billed.</li>
</ul>
<p>The line check catches the bad price, and so does the PO price match if the PO lists unit prices. The two total checks do not. A tool that checked totals alone would pass this invoice with a wrong number in it.</p>

<h3>4. Routing: who sees it?</h3>
<p>Every other field passed its checks and cleared its confidence threshold, so only line 2 goes to a person. The reviewer sees the crop of that line next to the extracted values, fixes one number, and the invoice moves on to approval. The correction is logged with who made it and when, which gives an auditor a record of what was checked. Put together, the output for this file looks something like this (shortened):</p>
<pre><code>{
  "documents": [
    { "type": "invoice", "pages": [1, 2], "route": "review",
      "fields": {
        "invoice_number": { "value": "INV-20471", "confidence": 0.97 },
        "total": { "value": "520.56", "confidence": 0.99 }
      },
      "failed_checks": [
        { "rule": "qty x unit_price = amount", "line": 2,
          "found": "4 x 47.25 = 189.00", "printed": "165.00" }
      ]
    },
    { "type": "delivery_note", "pages": [3], "route": "attach_to_invoice" }
  ]
}</code></pre>
<p>From here the invoice enters the payment side of accounts payable. The <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR guide</a> covers that part, with the six-step pipeline and seven checks to run before an invoice is paid.</p>

<h2>Where does each stage fail?</h2>
<p>Each stage has its own typical failure. The numbers below come from tests published on this site with their scripts, run on generated documents with the open source Tesseract engine. They measure the method around the OCR, not any vendor's IDP product.</p>

<h3>Classification: same-type and unknown documents</h3>
<p>The hardest boundary sits between two documents of the same type, such as two months of statements from one bank. In a <a href="/resources/blogs/split-loan-packet-pdf">test on 120 generated loan packets</a>, splitting wherever the page type changed got 8 packets exactly right and found none of the 229 same-type boundaries. Adding page numbers, a rule for one-page types such as pay stubs, account and period changes, and first-page markers got 118 right.</p>
<p>The second failure is a document the classifier was never taught. Microsoft's documentation says its classifier tries to put every document into one of its trained classes, and it advises a score threshold or an "other" class for anything else. In the packet test, which typed pages by phrase lists, packets in wording those lists had never seen came out 0 of 120 right, but the checks flagged all 120. A flagged miss costs review time; an unflagged one can cost far more.</p>

<h3>Extraction: layouts that move</h3>
<p>Template extraction reads fixed rectangles on the page, so it breaks when the layout moves. In a <a href="/resources/blogs/what-is-zonal-ocr">test on 640 synthetic invoices</a>, fixed zones read 97.2% of fields right on aligned pages. A 1.7 mm shift took tight zones to 0%, and a scan 5% larger or smaller took every zone to 0% or close to it. Finding each field by its label stayed above 96% through the shifts and size changes.</p>
<p>Tables are the other weak spot, mostly where they cross a page break. Microsoft's notes on <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence" rel="nofollow noopener" target="_blank">accuracy and confidence</a> say a row split across two pages can get lower confidence than the rows around it, because it looks different from them. Image quality matters as well. In an <a href="/resources/blogs/extract-invoice-data-to-excel">invoice-to-Excel test on 600 invoices</a>, evening out uneven light alone took phone-quality images from 32.0% to 93.1% of fields right.</p>

<h3>Validation: fields no rule covers</h3>
<p>Checks only protect fields that take part in a rule. In that same invoice test, the checks (subtotal plus tax equals total, dates against payment terms, and an invoice number sanity check) flagged 53 of the 63 wrong invoices, with no false alarm on the 537 right ones. All 10 misses were misread invoice numbers, a field no sum depends on.</p>
<p>Where a check runs matters as much as having one. On <a href="/resources/blogs/bank-statement-ocr-errors-balance-check">400 generated bank statements</a>, a running balance check on every row flagged all 84 statements with a misread number and raised no alarm on the 306 correct ones. A check of the closing balance alone caught 65 and missed all 13 statements whose only error was one balance cell. It is the same lesson as the invoice above: a total can agree while one line is wrong.</p>
<p>IDs with a check digit are the easiest fields to protect. In <a href="/resources/blogs/how-to-fix-ocr-errors">tests on poor-quality scans</a>, a digit-only whitelist, a second read at twice the size and the IBAN mod 97 check took IBANs from 61% to 92% correct, with no wrong value accepted. Format checks on dates and amounts were weaker and let 8 in 300 wrong values through.</p>

<h3>Routing: what a confidence score means</h3>
<p>Confidence scores are the usual way to decide what a person sees. Microsoft defines field confidence as an estimated probability that the value is right, so 0.95 means it is likely correct 19 times out of 20. Accept everything at 0.95 and about one value in twenty at that level can still be wrong. The threshold should depend on what a wrong value costs, and a bank account number deserves a stricter bar than a street address.</p>
<p>The same page says OCR confidence and field confidence are separate scores, so check both. Neither tells you what slipped past every check. Amazon's <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-textract-task-type.html" rel="nofollow noopener" target="_blank">Augmented AI</a> review service for Textract (now closed to new customers) sends documents to people when key confidence falls in a set range, when a key is missing, or at random. That random sample of passed documents is how you measure the errors nobody flagged.</p>

<h2>What should you test before you buy an IDP tool?</h2>
<p>Vendor accuracy figures usually come from the vendor's own test set. Your documents will differ, so the test that counts is a run on your own files.</p>
<ol>
  <li>Collect real documents for each type you handle, including the worst ones: phone photos, faxes, multi-page statements and handwritten forms. Microsoft's guidance for training its custom models is to include every variation, such as digital and scanned PDFs.</li>
  <li>Key in the correct values for the fields you use, and score each field as right or wrong. Character accuracy hides too much. At 99%, a 1,000-character invoice still averages 10 wrong characters, and one of them can sit in the total.</li>
  <li>Include mixed files, such as a loan packet with two statements from the same bank in a row. Check whether the tool splits files by default.</li>
  <li>Sort every result into four groups: right and passed, wrong and flagged, right but flagged, and wrong but passed. The third group is your review cost. The fourth is your risk, and it is the number to ask the vendor about.</li>
  <li>Ask what the price covers. Some tools charge per page and some per document, and classification, tables or review screens may be billed on top.</li>
  <li>Ask where your documents are stored, for how long, and whether they are used to train models.</li>
</ol>

<h2>When is OCR alone enough?</h2>
<p>OCR alone fits when the output is text for people or for search: a searchable archive, page text for a search index or a language model, a paragraph copied out of a scan. Nobody needs a field called "total" for that.</p>
<p>OCR plus your own code fits a narrow, stable job: one layout that rarely changes, low volume, and a developer who can maintain label-based extraction and a few checks. Such scripts can work. The label-aware script in the invoice test read all six header fields right on 537 of 600 invoices, against 77 for a regular expression over the same OCR text. You also own every new layout and every rule.</p>
<p>IDP earns its cost when several of these are true at once. Each one adds work that OCR leaves to you:</p>
<ul>
  <li>Documents come from many senders in many layouts.</li>
  <li>Files arrive as mixed packets that need splitting.</li>
  <li>The values feed an ERP, a loan system or a payment run.</li>
  <li>A wrong value moves money or changes a decision.</li>
  <li>An auditor or regulator will ask what was checked.</li>
</ul>
<p>If only one applies, start with OCR and a few checks, and count the errors before buying more. Fields and checks change a lot by document type, as the guides to <a href="/resources/blogs/insurance-card-ocr">insurance card OCR</a> and <a href="/resources/blogs/contract-ocr">contract OCR</a> show, and that usually decides how much of IDP you need.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI, built by HyperVerge, is a document intelligence API for SMB lending and fintech. It runs classification, field and table extraction, and format checks in one API, and flags low-confidence fields for a person to review. It processes about 4 million pages a month, at about 1.1 seconds per page including the network round trip. In its own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 benchmark on 1,700 real documents</a>, it scored 97 to 99% on clean typed English, 93% on invoice line items and 91% on multi-page bank statement tables.</p>
<p>It scored lower on the hard cases: 81% on multilingual pages, 78% on handwritten forms and 76% on phone-photographed receipts. DocsAPI ran that benchmark itself, so treat it as a starting point and run the test above on your own files. Pricing starts at $0.02 per page with classification and tables included, and volume discounts begin above 100K pages a month. Access starts with a demo, then a free 30-day trial for qualified lenders.</p>`,
    image: "/images/intelligent-document-processing.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "May 28, 2025",
    readTime: "10 min read",
    author: nupuraUghade,
    metaTag: "Intelligent Document Processing: What IDP Fixes",
  },
  {
    id: "7",
    title: "Passport OCR: How It Works and Why Accuracy Varies by Country",
    slug: "passport-ocr-revolutionizing-identity-verification-with-automated-data-extraction",
    excerpt:
      "How passport OCR reads the visual zone and the machine-readable zone, why accuracy varies by country of issue, and what to test before you sign a vendor.",
    content: `      <p>A failed passport read costs more than a retry. Every failed extraction drops the applicant into manual review, and some applicants abandon before an operator gets back to them. The machine-readable zone (MRZ) is the usual culprit, and engines read it less reliably on passports from some regions than others. This guide covers how passport OCR actually works, why regional accuracy gaps exist, what to test before signing a vendor, and the buy-versus-build decision.</p>

      <h2>What is passport OCR?</h2>
      <p>Passport OCR is specialized optical character recognition tuned for the ICAO Document 9303 travel-document standard. Unlike generic OCR, passport OCR reads two distinct zones: the visual inspection zone (VIZ) containing human-readable name, DOB, nationality, and document-number fields, and the machine-readable zone (MRZ), the two 44-character lines at the bottom of the passport data page encoded to a specific format with built-in checksums. Production passport OCR clears 99%+ MRZ extraction accuracy on clean captures and combines that with document-authenticity checks, biometric photo comparison, and against-watchlist screening for the full KYC verification workflow.</p>

      <h2>The ICAO 9303 spec every KYC team should understand</h2>
      <p>ICAO 9303 is the International Civil Aviation Organization standard that defines how machine-readable travel documents are formatted globally. Understanding its structure matters because it's what makes passport OCR fundamentally more reliable than generic ID extraction, the MRZ is checksummed, so an OCR extraction can be validated deterministically. If the checksums pass, you know the extraction is correct; if they fail, you know exactly which character was misread.</p>

      <p>The MRZ contains 88 characters across two lines. Line 1 encodes document type, issuing country, and full name (padded with fillers). Line 2 encodes passport number + check digit, nationality, date of birth + check digit, sex, expiration date + check digit, personal number + check digit, and a composite check digit covering multiple fields. Each check digit is computed as a weighted sum modulo 10. This means every extraction has 5 built-in verification points before it reaches your KYC system.</p>

      <p>Practical implication: any passport OCR vendor whose response payload doesn't include the individual field check-digit results is hiding information you need. Ask for it. Every extraction should return not just the fields but the checksum-verification status on each. Vendors that only return "passport_valid: true/false" are aggregating away the diagnostic detail that lets you distinguish "OCR misread one character" from "the passport is actually invalid."</p>

      <h2>Passport OCR accuracy: MRZ vs VIZ vs document-image quality</h2>
      <p>Passport OCR accuracy in 2026 is not one number. It's three: MRZ accuracy, visual-zone accuracy, and end-to-end verification success rate. MRZ accuracy on clean captures typically hits 99.5-99.9% because checksums catch nearly all errors. VIZ accuracy (the human-readable zone with more variable fonts, backgrounds, and layouts) lands at 93-98%. End-to-end verification success, the metric that actually matters for onboarding, depends on capture quality more than OCR quality; typical range 78-92% depending on whether users capture via app-controlled camera flow (higher) or unrestricted photo upload (lower).</p>

      <p>The regional accuracy gap I mentioned in the opening is real and documented. Passport OCR engines trained heavily on EU/US passports (which most Western vendors ship with) drop 8-15 accuracy points on passports from countries with distinctive font choices, more variable data-page layouts, or higher document-wear rates. Testing on your actual applicant mix, not the vendor's demo passports, is not optional.</p>

      <h2>Best passport OCR software in 2026 (5 evaluated)</h2>
      <p>The best passport OCR software in 2026 depends on integration model, regional passport coverage, and whether you need OCR alone or the full KYC verification stack. For full-stack KYC platforms: Jumio, Onfido, Persona. For OCR-focused APIs that plug into your own orchestration: DocsAPI, Mindee. For high-volume enterprise with air-gap requirements: Regula, ABBYY. Below, honest tradeoffs from real deployments, not demos.</p>

      <table>
        <thead><tr><th>Vendor</th><th>Best for</th><th>Per-verification</th><th>Strength / Weakness</th></tr></thead>
        <tbody>
          <tr><td>Jumio</td><td>Full-service KYC at scale</td><td>$1.50-$3.50</td><td>Strong global coverage / Expensive at high volume</td></tr>
          <tr><td>Onfido</td><td>Fintech + gig-economy KYC</td><td>$1.00-$2.80</td><td>Solid API + SDK / Weaker on non-Western passports</td></tr>
          <tr><td>Persona</td><td>Startup-friendly full stack</td><td>$0.80-$2.50</td><td>Best DX + workflow builder / Higher per-verification at scale</td></tr>
          <tr><td>DocsAPI</td><td>OCR + orchestration DIY</td><td>$0.20-$0.80</td><td>Layout-aware, full MRZ checksums exposed / You build the review queue</td></tr>
          <tr><td>Regula</td><td>Enterprise, gov, on-prem</td><td>Custom</td><td>Deepest doc-auth features / Enterprise-only pricing + setup</td></tr>
        </tbody>
      </table>

      <p>Trial on 20-50 of your real applicant passports before signing, vendor demo passports are always their strongest coverage. Our <a href="/resources/blogs/kyc-document-verification">KYC document verification guide</a> covers the full audit-passing verification pipeline beyond the OCR step alone.</p>

      <h2>Common passport OCR failure modes and how to fix each</h2>

      <h3>Failure mode 1: MRZ character misread from font similarity</h3>
      <p>Characters "0" (zero), "O" (letter), "1" (one), and "I" (letter) are the most common misreads. Modern engines handle these well but older systems fail. Fix: use engines with checksum validation, errors that violate the check-digit are automatically corrected via targeted re-inference on the failed character.</p>

      <h3>Failure mode 2: Glare on the laminate layer</h3>
      <p>Passports have a plastic laminate that reflects light. Phone captures under direct lighting get reflections that obscure MRZ characters. Fix: use SDK-based capture with real-time glare detection that prompts the user to reposition before submitting.</p>

      <h3>Failure mode 3: Angled captures cropping the MRZ</h3>
      <p>Users tilt their phones or hold passports at angles that cut off part of the MRZ. Fix: rectangle detection + auto-crop before OCR. If the MRZ has fewer than 88 characters detected, reject the capture with a retake prompt rather than passing a partial MRZ downstream.</p>

      <h3>Failure mode 4: Damaged or worn passport data pages</h3>
      <p>Older passports from high-turnover countries often have worn or torn data pages. MRZ characters near tears or wear points fail extraction. Fix: fall back to VIZ extraction with the same fields cross-verified. If both zones fail, route to human review with the source images pre-annotated.</p>

      <h3>Failure mode 5: Fake passports that OCR extracts cleanly</h3>
      <p>The scariest failure: a well-crafted synthetic passport where OCR extracts everything cleanly, checksums pass, but the document is a fraud. Fix: OCR alone is insufficient for KYC. Layer document-authenticity checks (UV feature verification, hologram detection, chip NFC read where available) on top of OCR. See our <a href="/resources/blogs/aml-document-checks">AML document checks</a> for the full compliance stack.</p>

      <h2>What I'd do today for passport OCR</h2>
      <p>Under 500 verifications per month across a single jurisdiction: buy a full-service KYC platform (Jumio, Onfido, Persona). The engineering time to build passport-OCR + doc-auth + liveness + watchlist integration exceeds the per-verification cost savings at that volume. 500-5,000 per month with 1-2 jurisdictions: same recommendation, but negotiate volume discounts and own the exception queue. Above 5,000/month or 3+ jurisdictions: hybrid, DocsAPI or similar for the OCR layer, best-of-breed liveness (iProov, Incode), and best-of-breed screening (Refinitiv, ComplyAdvantage), orchestrated by a KYC workflow layer you own. Full-service platforms lock you into their per-jurisdiction pricing at scale; the hybrid path typically saves 40-60% at 10K+ verifications monthly.</p>

      <p>Whichever path, test on YOUR applicant mix, not vendor demos. For deeper context on when to hand off from OCR to human review, see our <a href="/resources/blogs/kyc-document-verification">KYC document verification</a> guide. For the broader identity-verification stack including selfie liveness and watchlist screening, our <a href="/resources/blogs/know-your-customer-documents">know your customer documents playbook</a> is the companion piece. (<a href="/author/nupura-ughade">More on KYC architecture decisions</a>.)</p>`,
    image: "/images/passport-ocr.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "May 28, 2025",
    readTime: "8 min read",
    author: nupuraUghade,
    metaTag: "Passport OCR: MRZ, Accuracy and Common Failures",
  },

  {
    id: "10",
    title: "Legal Document Automation: How It Works, Where It Breaks",
    slug: "legal-document-automation-the-complete-guide-for-modern-law-firms",
    excerpt:
      "Legal document automation builds a draft from an approved template, conditional clauses and intake answers. One engagement letter traced rule by rule under California and New York fee rules, where templates break, and how review tools fit.",
    content: `
<p>Legal document automation is software that drafts a document from a template the firm has already approved and a set of answers about the matter. The template holds the fixed wording, blanks for names, dates and amounts, and rules that put a clause in or leave it out depending on the answers. An intake questionnaire collects those answers once, and the same answers can fill the engagement letter, the conflict check request and the first draft of the agreement.</p>
<p>It works best on documents a firm drafts often from a small set of variations: engagement letters, NDAs, simple wills, standard pleadings, formation papers. It does not replace judgment, because a template can only insert clauses someone wrote and approved in advance. The same label also covers the review side: pulling clauses out of contracts, comparing versions and sorting discovery. Both are covered below, drafting first.</p>

<h2>How does template-based document assembly work?</h2>
<p>Assembly tools are built from four parts, whatever a product calls them. Here they are for an engagement letter.</p>
<table>
  <thead><tr><th>Part</th><th>What it holds</th><th>In an engagement letter</th></tr></thead>
  <tbody>
    <tr><td>Template</td><td>The approved wording, with markers where the text varies.</td><td>The standard letter, with every fee and scope section it might need.</td></tr>
    <tr><td>Variables</td><td>Single values filled in from the answers.</td><td>Client name, matter description, rate, responsible attorney.</td></tr>
    <tr><td>Conditions</td><td>Rules that include, drop or swap a passage.</td><td>The contingency fee section appears only when the fee is contingent.</td></tr>
    <tr><td>Intake questionnaire</td><td>The questions that set the variables, asked once.</td><td>Client type, matter type, fee arrangement, state.</td></tr>
  </tbody>
</table>
<p>In docassemble, an open source assembly system, the template can be an ordinary Word file. Its <a href="https://docassemble.org/docs/documents.html" rel="nofollow noopener" target="_blank">documentation on documents</a> shows variables written as <code>{{ variable_name }}</code> and conditions as <code>{% if %}</code> and <code>{% endif %}</code> tags inside the text. Adding a p, as in <code>{%p if %}</code>, removes the paragraph that holds the tag, so a dropped clause leaves no blank line. Here is part of an engagement letter written that way.</p>
<pre><code>Dear {{ client_name }},

Thank you for asking us to represent you in {{ matter_description }}.

{%p if fee_type == "contingent" %}
Our fee will be {{ fee_percent }}% of the amount recovered.
{%p else %}
Our fee will be billed at {{ hourly_rate }} per hour.
{%p endif %}</code></pre>
<p>The questionnaire, which docassemble calls an interview, asks the questions that set those variables. Commercial tools have their own editors and syntax, but they are built from the same four parts.</p>

<h2>A worked example: one engagement letter from intake answers</h2>
<p>Take a new personal injury client in California on a contingency fee. The statutes cited are real, but the letter shows how conditions fire and is not a form to copy. Check the current rules in your own state before you build one.</p>
<table>
  <thead><tr><th>Intake question</th><th>Answer</th></tr></thead>
  <tbody>
    <tr><td>Client type</td><td>Individual</td></tr>
    <tr><td>State</td><td>California</td></tr>
    <tr><td>Matter type</td><td>Personal injury, not a claim against a health care provider</td></tr>
    <tr><td>Fee arrangement</td><td>Contingent</td></tr>
  </tbody>
</table>
<p>Those four answers decide which rules fire. Rules marked No stay in the template but add nothing here.</p>
<table>
  <thead><tr><th>Rule in the template</th><th>Fires?</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td>Contingent fee in California</td><td>Yes</td><td>Inserts the terms <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=6147" rel="nofollow noopener" target="_blank">Business and Professions Code section 6147</a> requires: the fee rate, how costs affect the fee and recovery, and what the client could owe for related matters.</td></tr>
    <tr><td>Contingent, California, claim not against a health care provider</td><td>Yes</td><td>Adds the statement that the fee "is not set by law but is negotiable between attorney and client" (section 6147(a)(4)).</td></tr>
    <tr><td>Contingent, California, professional negligence claim against a health care provider</td><td>No</td><td>Would replace that statement with one saying the section 6146 rates are maximum limits and a lower rate can be negotiated.</td></tr>
    <tr><td>Signature block for a California contingency contract</td><td>Yes</td><td>Adds attorney and client signature lines and a step to give the client a signed duplicate.</td></tr>
    <tr><td>Hourly or flat fee in California, foreseeable total expense over $1,000</td><td>No</td><td>Would insert the <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=6148" rel="nofollow noopener" target="_blank">section 6148</a> terms: basis of compensation, nature of the services, each side's duties.</td></tr>
    <tr><td>Matter in New York</td><td>No</td><td>Would follow <a href="https://www.nycourts.gov/legal-professional/letters-engagement" rel="nofollow noopener" target="_blank">22 NYCRR Part 1215</a>: scope, fees, expenses, billing practices and, where it applies, the right to arbitrate fee disputes under Part 137.</td></tr>
  </tbody>
</table>
<p>Now change one answer. If the claim were for professional negligence against a health care provider, the second rule switches off, the third switches on, and the fee question needs a ceiling. <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&amp;sectionNum=6146" rel="nofollow noopener" target="_blank">Section 6146</a> caps the fee at 25% of a recovery settled before a complaint or arbitration demand is filed and 33% after. Only a court or arbitrator can allow more, on motion, in a case that is tried or arbitrated.</p>
<p>Other answers move other parts. Section 6148 does not apply when the client is a corporation, so its writing rule drops out of an hourly matter for a company, though the firm can still send a letter. Thresholds differ too: section 6148 starts at a foreseeable total expense over $1,000, while New York's Part 1215 does not apply where the fee is expected to be under $3,000.</p>

<h2>Where does template automation break?</h2>

<h3>Conditions that interact</h3>
<p>Each rule above is simple on its own. The trouble is combinations. Ten yes or no questions give 1,024 possible sets of answers, and no one tests them all by hand.</p>
<p>The worst bugs are quiet. Say the negotiability rule fires on a list of matter types, the 6146 rule fires on medical claims, and the intake list has an "Other" option neither mentions. A contingent case filed under Other gets neither statement, and the letter still looks complete. Test every answer each question allows, and write down which combinations you skipped.</p>

<h3>Rules that differ by state and change over time</h3>
<p>The example already needed separate rules for two states. Rules also change: section 6146 was last amended effective January 1, 2023, so a contingency template built before then needs checking against the current text. Someone has to own that check for each jurisdiction a template covers.</p>

<h3>Templates that drift</h3>
<p>A lawyer spots a weak clause in a generated draft and fixes it in that draft. The fix never reaches the template, and the next fifty letters carry the old wording. The cure is dull: one owner per template, a version number, and a record of which version produced each document. When a problem turns up, that record shows which documents went out with it.</p>

<h3>Answers that are wrong</h3>
<p>The template is only as good as the intake. A client who gives a trade name instead of the company's legal name gets a letter addressed to the wrong party. Check answers as they come in: states from a list, dates in range, fee percentages within any statutory cap.</p>

<h3>Review that gets skipped</h3>
<p>An approved template is not an approved document. A lawyer signed off on the clauses, not on this combination of them with these facts. A tool that uses generative AI to suggest or rewrite clauses adds text no one approved at all.</p>
<p>The State Bar of California's <a href="https://www.calbar.ca.gov/Portals/0/documents/ethics/Generative-AI-Practical-Guidance.pdf" rel="nofollow noopener" target="_blank">2026 practical guidance on generative AI</a> is direct about this. It says an attorney "remains fully responsible for any outputs and work product generated with the assistance of AI," and that competence means reviewing, verifying and correcting those outputs.</p>

<h2>What does the review side cover?</h2>
<p>Review automation works on documents the firm did not draft: the other side's markup, a data room of signed contracts, a discovery production. There are three common jobs, and all of them depend on reading the text correctly first.</p>

<h3>Clause extraction</h3>
<p>Extraction finds and labels clauses across many contracts, such as parties, renewal dates, governing law and assignment. Keyword search is a weak way to do it. A contract can excuse performance for events outside a party's control without using the words "force majeure," as our post on <a href="/resources/blogs/force-majeure-clause-extraction">force majeure clause extraction</a> shows. A <a href="/resources/blogs/governing-law-clause-extraction">governing law clause</a> is a different provision from a forum clause, and <a href="/resources/blogs/nda-clause-extraction">NDA carve-outs</a> can undo most of an NDA's protection.</p>

<h3>Version comparison and redlining</h3>
<p>Comparing two Word files is built in. Word's <a href="https://support.microsoft.com/en-us/office/compare-and-merge-two-versions-of-a-document-f5059749-a797-4db7-a8fb-b3b27eb8b87e" rel="nofollow noopener" target="_blank">Compare Documents</a>, on the Review tab, writes the differences into a new copy as revision marks and leaves the original untouched.</p>
<p>It gets harder when one version comes back as a PDF or a scan, as signed copies often do. The scan has to go through OCR first, and every misread character then shows up as a change. Reflowed paragraphs cause a similar flood of false changes in line-based comparison, which our guide to <a href="/resources/blogs/contract-redlining-software">contract redlining software</a> walks through.</p>

<h3>Discovery review</h3>
<p>Discovery review sorts a production into relevant, not relevant and privileged. <a href="https://www.law.cornell.edu/rules/frcp/rule_26" rel="nofollow noopener" target="_blank">Federal Rule of Civil Procedure 26(b)(1)</a> limits discovery to what is proportional to the needs of the case, weighing burden or expense against likely benefit. So the cost of review is part of the argument over scope.</p>
<p>Technology-assisted review trains a classifier on lawyers' decisions and ranks the rest; our <a href="/resources/blogs/e-discovery-document-review">e-discovery document review</a> post compares the two main ways to run it. Privilege is the risky part. In a federal proceeding, <a href="https://www.law.cornell.edu/rules/fre/rule_502" rel="nofollow noopener" target="_blank">Federal Rule of Evidence 502(b)</a> protects an inadvertent disclosure only if the holder took reasonable steps to prevent it and promptly took reasonable steps to fix it. Rule 502(d) lets a federal court order that disclosure in the case is not a waiver, which is worth asking for before automated review starts.</p>

<h3>Where OCR matters</h3>
<p>Every job above assumes the text is right. Scanned productions, faxed exhibits and signed copies break that assumption, and a signed copy can differ from the last Word draft by an initialed change that exists only on paper. In our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 OCR benchmark</a> on 1,700 real documents, clean typed English was read at 97 to 99% accuracy and handwritten forms at 78%, so a handwritten change needs a person to check it. The guides to <a href="/resources/blogs/contract-ocr">contract OCR</a>, <a href="/resources/blogs/court-docket-ocr">court docket OCR</a> and <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a> cover what to extract and where each document type goes wrong.</p>

<h2>Which document should you automate first?</h2>
<p>Pick a document the firm drafts every week, from a short list of variations, with rules that rarely change and one person willing to own it. Engagement letters are a good candidate. They are drafted at the start of each new matter, and in California and New York the rules above already list much of what goes in.</p>
<p>Do not start with the firm's most complex agreement. A template with dozens of interacting conditions is where testing falls apart, and a failed first project makes the second one harder to approve.</p>
<p>Measure before you build, or there is nothing to compare against. For the next 20 drafts done by hand, record the time from intake to a draft ready for review, and count the corrections the reviewing lawyer makes. Do the same for the first 20 assembled drafts, noting the template version each time.</p>
<p>Corrections matter more than speed. A fast draft that needs ten fixes has moved the work, not removed it, so trace each correction to the rule or answer behind it and fix it there. If the firm bills hourly, settle how assembled work is billed first. California's guidance says, for AI tools, that hourly bills must match the time spent and that flat fees may suit predictable work.</p>

<h2>What should you ask a vendor?</h2>
<p>Demos show the easy path. Ask about the parts that cause trouble later.</p>
<ul>
  <li>Can a lawyer at the firm edit templates and rules, or does every change go through the vendor?</li>
  <li>Can we rerun a saved set of test answers after every template change, and is each document tied to the template version that made it?</li>
  <li>Where are intake answers and documents stored, who at the vendor can see them, how long are they kept, and are they used to train any model?</li>
  <li>Which features use generative AI, and can they be turned off for a matter?</li>
  <li>Which practice management and document systems does it read from and file to?</li>
  <li>For review tools: does it run OCR on scans itself, does it show the source text and its place on the page next to each extracted clause, and what happens with handwriting?</li>
  <li>What is the total yearly cost at our headcount, including the work of building the first templates?</li>
</ul>
<p>On data handling, California's guidance says reasonable efforts "require more than reliance on generalized marketing assurances" from a vendor. It points to the terms of use, privacy policy and vendor documentation as the places to learn how a product collects, uses, stores and discloses client information.</p>
<p>DocsAPI, built by HyperVerge, is a document intelligence API for SMB lending and fintech. It is not a drafting or document assembly tool. Where it fits a legal workflow is the reading step: turning scanned or signed agreements, such as loan agreements, into fields and flagging low-confidence fields for a person to review. Pricing starts at $0.02 per page, and access starts with a demo.</p>
`,
    image: "/images/legal-document-automation.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "June 5, 2025",
    readTime: "10 min read",
    author: nupuraUghade,
    metaTag: "Legal Document Automation: How It Works, Where It Breaks",
  },
  {
    id: "11",
    title: "Document Automation for Financial Services, Tested",
    slug: "transforming-financial-services-the-complete-guide-to-document-automation",
    excerpt:
      "Matching a person across a pay stub and a bank statement is the step that decides if automation is safe. Fuzzy matching accepted every wrong house number. Field rules accepted none.",
    content: `
<p>Document automation for financial services means reading the documents that come with an application or an account (statements, pay stubs, IDs, invoices, forms), checking them, and sending clean data to a decision system. Reading is the part everyone demos. The part that decides whether it is safe is matching: is the person on the pay stub the same person as the one on the bank statement? We tested that step on 570 pairs of documents (1,140 pages) read with Tesseract 5.5.2. Exact string comparison accepted 0 of 300 true matches, because the two documents format the same name and address differently. A common fix, fuzzy matching at a 0.90 similarity score, accepted all 300 true matches and also accepted all 90 pairs where only the house number was different. A field by field rule accepted 300 of 300 true matches and 0 of 270 mismatches.</p>
<p>This guide explains what document automation covers in lending, onboarding and payables, shows the matching test and the script we used, and lists the checks, each measured in our other guides, that make an automated flow safe to run. It replaces an earlier overview on this page that made broad claims we could not source.</p>

<h2>What is document automation for financial services?</h2>
<p>It is a pipeline with five jobs. Capture the document (upload, email, scan). Classify it (a pay stub or a bank statement). Extract its fields (names, dates, amounts). Verify them (do the numbers add up, is the document genuine, do the fields agree with other documents). Route the result (approve, send to a person, ask the customer for a better copy). Most demos stop at extraction. Most losses happen in verification and routing, because a wrong value that looks plausible flows straight through. Where each job is covered in our guides:</p>
<table>
  <thead><tr><th>Job</th><th>What goes wrong</th><th>Guide</th></tr></thead>
  <tbody>
    <tr><td>Capture</td><td>Pages arrive rotated, faxed, stamped or photographed</td><td><a href="/resources/blogs/ocr-upside-down-sideways-pages">Rotated pages</a>, <a href="/resources/blogs/convert-fax-tiff-jpg-png-to-text">fax and TIFF</a>, <a href="/resources/blogs/ocr-stamps-watermarks-highlighter">stamps and highlighter</a></td></tr>
    <tr><td>Classify</td><td>A statement is filed as an invoice</td><td><a href="/resources/blogs/document-classification-software">Document classification</a></td></tr>
    <tr><td>Extract</td><td>Reading order, columns, digits, signs</td><td><a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">Layout analysis</a>, <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors</a>, <a href="/resources/blogs/multilingual-ocr-guide">multilingual OCR</a></td></tr>
    <tr><td>Verify</td><td>Totals, balances, mismatched identity, forged files</td><td><a href="/resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions">Bank statement checks</a>, <a href="/resources/blogs/document-fraud-detection-api">document fraud detection</a>, the matching test below</td></tr>
    <tr><td>Route</td><td>Low confidence values posted anyway</td><td><a href="/resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now">Receipts and review queues</a></td></tr>
  </tbody>
</table>

<h2>Where is document automation used in financial services?</h2>
<p>Three places account for most of the volume. In lending, an application arrives with pay stubs, bank statements, tax forms and an ID, and the lender checks income, cash flow and identity before a decision. The cluster of guides starts at <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a>, with pages on <a href="/resources/blogs/pay-stub-income-verification-ocr">pay stubs</a>, <a href="/resources/blogs/4506-c-tax-transcript-ocr">tax transcripts</a>, <a href="/resources/blogs/cash-flow-underwriting-ocr">cash flow</a> and <a href="/resources/blogs/ecoa-compliance-document-ocr">ECOA compliance</a>. In onboarding, a bank or fintech checks an ID and a proof of address (<a href="/resources/blogs/kyc-document-verification">KYC document verification</a>, <a href="/resources/blogs/proof-of-address-verification">proof of address</a>, <a href="/resources/blogs/aml-document-checks">AML document checks</a>). In payables, invoices and receipts become ledger entries (<a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR</a>, <a href="/resources/blogs/ocr-accounting">OCR for accounting</a>). The first two share one hard step that the third mostly avoids: the same person or business appears in several documents, and the automation has to decide whether they agree.</p>

<h2>Why is matching names and addresses across documents hard?</h2>
<p>Because the same person is written differently in every document. A pay stub might print SMITH, JOHN A over 123 MAPLE AVE APT 4B. A bank statement prints John A. Smith over 123 Maple Avenue Apt 4B. An ID card may have the name in a different order again. All three are the same person. A strict comparison rejects every one of them, so a reviewer gets every file. A loose comparison fixes that, but a loose comparison also accepts a different person: 123 Maple Avenue and 132 Maple Avenue differ by one swapped digit, and one edit apart is exactly what a fuzzy score treats as the same string. The error that costs money is the second one, a false accept, and it is the one that most guides on this topic skip. Vendor documentation we found describes matching name and address fuzzily but exact matching for ID numbers and dates, and notes that the strictness setting for each address part is the most consequential choice. It did not publish false accept rates, so we measured them.</p>

<h2>How did we test cross-document matching?</h2>
<p>We generated pairs of documents. One was a pay stub style page (name as LAST, FIRST M in capitals, abbreviated street type, city and state in capitals). The other was a statement style page (name as First M. Last, street type spelled out, comma before the state). Each pair was one of four types:</p>
<ul>
  <li><strong>Same person (100 pairs):</strong> identical identity, formatted differently in each document.</li>
  <li><strong>Same surname, different person (30 pairs):</strong> a different first name and a different house number in the same city.</li>
  <li><strong>Same name, other house number (30 pairs):</strong> the same name and street but a house number that differs in one digit, like a neighbor or a typo.</li>
  <li><strong>Same address, other person (30 pairs):</strong> a household: the same address with a different first name.</li>
</ul>
<p>Each pair was rendered at three quality levels (clean 300 DPI, a 200 DPI scan with blur and noise, and a rough copy that is rotated slightly, halved in size, blurred and compressed), giving 570 pairs and 1,140 pages. We read each page with Tesseract 5.5.2, took the three lines after the "Employee" or "Account holder" label, and compared them with five methods:</p>
<ul>
  <li><strong>Exact:</strong> the strings are identical.</li>
  <li><strong>Normalized:</strong> after upper casing, removing punctuation, expanding street abbreviations, reordering names and dropping initials, the fields are identical.</li>
  <li><strong>Fuzzy 0.90 and fuzzy 0.85:</strong> the normalized name and address, as one string, have an edit distance similarity of at least 0.90 or 0.85.</li>
  <li><strong>Field rules:</strong> house number and ZIP must match exactly, while the name and the street name need a similarity of at least 0.85.</li>
</ul>

<h2>What did the test show?</h2>
<p>The table shows the share of pairs accepted as a match (read each row as how often the method says "same"). For the true matches, higher is better. For the other three types, lower is better, and 0% is the goal.</p>
<table>
  <thead><tr><th>Pair type (pairs per quality level)</th><th>Exact</th><th>Normalized</th><th>Fuzzy 0.90</th><th>Fuzzy 0.85</th><th>Field rules</th></tr></thead>
  <tbody>
    <tr><td>Same person (100)</td><td>0%</td><td>100%, 100%, 90%</td><td>100%</td><td>100%</td><td>100%</td></tr>
    <tr><td>Same surname, different person (30)</td><td>0%</td><td>0%</td><td>0%</td><td>6.7%</td><td>0%</td></tr>
    <tr><td>Same name, other house number (30)</td><td>0%</td><td>0%</td><td>100%</td><td>100%</td><td>0%</td></tr>
    <tr><td>Same address, other person (30)</td><td>0%</td><td>0%</td><td>20%</td><td>80%</td><td>0%</td></tr>
  </tbody>
</table>
<p>Where one cell has three values, they are clean, 200 DPI and rough copy; the other cells were the same at all three levels. Four results matter.</p>
<ol>
  <li><strong>Exact matching is useless across document types.</strong> It accepted none of the 300 true matches because the formats differ, even when the page was perfectly clean.</li>
  <li><strong>Normalizing fixes the format, but OCR noise still breaks it.</strong> On the rough copy it rejected 10 of 100 true matches, most likely because a letter in a name or a street word was misread, since the formats had already been normalized. Each of those would have gone to a reviewer.</li>
  <li><strong>Fuzzy matching accepts the wrong house number every time.</strong> A 0.90 similarity accepted all 90 pairs (30 at each quality level) that differed by one digit in the house number. 0.85 accepted them too, and also accepted 72 of 90 pairs where a different person lived at the same address, such as a spouse. Both are the false accepts that lending and onboarding teams are paid to stop.</li>
  <li><strong>Field rules removed every false accept without losing a true match.</strong> Treating the house number and the ZIP code as exact fields, and only the words as fuzzy, accepted 300 of 300 true matches and 0 of 270 mismatches across all quality levels.</li>
</ol>

<h2>The matching script</h2>
<p>This is the code we ran. It does not compare the city name, because the ZIP code does that job in our test pages. It would need changes for addresses without a five digit ZIP and for names in other scripts.</p>
<pre><code>import re

ABBR = {"AVENUE": "AVE", "STREET": "ST", "ROAD": "RD", "BOULEVARD": "BLVD",
        "DRIVE": "DR", "LANE": "LN", "COURT": "CT", "APARTMENT": "APT"}

def clean(text):
    return re.sub(r"[^A-Z0-9 ]", "", text.upper().replace(",", " ").replace(".", " "))

def similarity(a, b):
    """1.0 means identical, 0.0 means nothing in common (edit distance based)."""
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return 1 - prev[-1] / max(1, len(a), len(b))

def parse_block(lines):
    """lines: [name line, street line, city/state/zip line] as read by OCR."""
    name, street, rest = lines
    if "," in name:                       # SMITH, JOHN A  -&gt;  JOHN A SMITH
        last, first = name.split(",", 1)
        tokens = clean(first).split() + clean(last).split()
    else:
        tokens = clean(name).split()
    tokens = sorted(t for t in tokens if len(t) &gt; 1)   # drop middle initials
    street_tokens = [ABBR.get(t, t) for t in clean(street).split()]
    number = street_tokens[0] if street_tokens and street_tokens[0].isdigit() else None
    street_name = " ".join(street_tokens[1:] if number else street_tokens)
    return {"name": " ".join(tokens), "number": number, "street": street_name,
            "zip": re.findall(r"\\d{5}", rest)}

def same_person(lines_a, lines_b, name_min=0.85, street_min=0.85):
    a, b = parse_block(lines_a), parse_block(lines_b)
    return bool(a["number"] and a["number"] == b["number"]          # house number must match exactly
                and a["zip"] and a["zip"] == b["zip"]              # so must the ZIP code
                and similarity(a["name"], b["name"]) &gt;= name_min    # names and street words may differ slightly
                and similarity(a["street"], b["street"]) &gt;= street_min)</code></pre>
<p>We ran this version on all 570 pairs and it agreed with our test harness on every one. The key design choice is the last line: numbers are exact and words are fuzzy. House numbers, ZIP codes, dates of birth and ID numbers should never be matched by similarity, because one changed digit is a different value, and OCR errors in digits are better caught by the checks in our guide to <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors</a> (checksums for IDs and account numbers) than by loosening the match.</p>

<h2>What did the OCR errors do to the matches?</h2>
<p>Less than we expected. At the roughest level, the field rules still accepted all 100 true matches, which means no house number or ZIP code digit was misread in 200 pages of large clean text, and the name and street words stayed within the 0.85 tolerance. That is partly because our test text is large (44 pixel type at 300 DPI) and printed in a clean font. Small print on a real scan, a photo or a faded stamp will produce digit errors, and then a strict number rule rejects a true match. That is the right failure: it goes to a person with both documents side by side, and the person can see the digit. It is the opposite of the fuzzy case, where a wrong person is accepted silently.</p>

<h2>What should an automated financial flow check?</h2>
<p>Pulling the measured results of this series into one list, for any flow that takes documents and makes a decision:</p>
<ul>
  <li><strong>Read the page in the right layout.</strong> The wrong page mode turned a 0% result into 64% on two columns (<a href="/resources/blogs/optical-character-reader-2026">page mode tests</a>).</li>
  <li><strong>Keep the sign.</strong> In our bank statement test on poor scans, a lost minus sign was the most common extraction error, and a signed balance check caught it (<a href="/resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions">bank statement analysis</a>).</li>
  <li><strong>Check fields, not characters.</strong> A phone photo with 6.4% character error had 42% of receipts fully right (<a href="/resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now">receipt tests</a>).</li>
  <li><strong>Match identity by field.</strong> Numbers exact, words fuzzy (this guide).</li>
  <li><strong>Verify authenticity separately.</strong> Matching says nothing about whether a file was edited. See <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a> and <a href="/resources/blogs/document-fraud-detection-api">document fraud detection</a>.</li>
  <li><strong>Send doubt to a person with the reason.</strong> A flag such as "house number differs" is quicker to resolve than "low confidence".</li>
</ul>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI was built by HyperVerge. It uses a layout aware engine with a vision language model fallback for complex cases. On its own 2026 benchmark of 1,700 documents it scored 93% on invoice line items, 91% on multi-page bank statements (where the other engines tested scored 64% to 79%), 97% to 99% on clean text and 78% on handwriting, at about 1.1 seconds per page. The matching test above used Tesseract and synthetic documents, and the two should not be compared number to number. DocsAPI is a SOC 2 Type II and ISO 27001 compliant service, is HIPAA eligible with a business associate agreement, does not train on customer documents, and retention is configurable with a short default. Pricing starts from $0.02 per page with volume discounts above 100,000 pages a month. Access starts with a demo and then a free 30 day trial for qualified lenders. For a comparison with other engines, see <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a> and the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>.</p>

<h2>What do these tests not show?</h2>
<ul>
  <li>The documents are synthetic, in English, with two layouts. We did not test ID cards, utility bills or business names.</li>
  <li>People have nicknames, maiden names, transliterated names and two surnames. A name of that kind will fail a 0.85 similarity even when it is the same person, and no OCR change fixes that. Decide the rule for these cases before you automate.</li>
  <li>The addresses have a five digit ZIP and a numeric house number. Addresses in other countries need their own parsing.</li>
  <li>Our rough copy level did not produce a single digit error in a house number or a ZIP code, so we cannot say how a strict number rule behaves when digits are misread. Expect more rejections, not more false accepts.</li>
  <li>Thirty pairs per mismatch type per quality level is small. The 100% and 0% results are clear, but the 20% and 80% figures for household pairs carry a wide margin.</li>
</ul>

<h2>Sources and how we checked this</h2>
<p>All figures are from our own runs of Tesseract 5.5.2 on 570 generated pairs (1,140 pages), and the script above is the code that produced the field rules numbers. Public guides on KYC consistency checks describe the same pipeline of OCR, normalization and comparison, and some vendor documentation separates fuzzy fields from exact fields. We did not find published false accept rates for name and address matching on OCR output, which is why we measured them. For the wider onboarding picture, see <a href="/resources/blogs/know-your-customer-documents">know your customer documents</a>.</p>
    `,
    image: "/images/transforming-financial-services.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "June 9, 2025",
    readTime: "12 min read",
    author: nupuraUghade,
    metaTag: "Financial Services Document Automation: What to Check",
  },

  {
    id: "13",
    title: "Automated Bank Statement Analysis: Where the Sign Gets Lost",
    slug: "revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions",
    excerpt:
      "We read 600 synthetic bank statements in five sign formats. Digits were rarely wrong. The minus sign was, and a signed balance check caught every bad statement.",
    content: `
<p>Automated bank statement analysis means reading a statement into rows of dated, signed transactions, checking that those rows add up, and then computing figures such as monthly deposits, average balance and overdraft counts from them. The reading step is where most people expect the errors to be in the digits. In our test of 600 synthetic statements (7,056 transaction rows) read with Tesseract 5.5.2, it was not. Only 5 rows had a wrong amount. 46 rows had the wrong sign: a debit that came out as a credit. A running balance check that knows about signs caught every one of the 46 bad statements, and one that ignores signs would have missed 45 of the 50 wrong rows.</p>
<p>This guide shows which statement formats lose the sign, how often, what it does to cash flow figures, and a short check you can run on any extraction. It replaces an earlier version of this page that described a lender rollout we could not source. Everything below is from tests we ran and can repeat.</p>

<h2>What is automated bank statement analysis?</h2>
<p>It is a pipeline with three steps. First, extract: turn a PDF or a photo of a statement into rows with a date, a description, an amount and usually a running balance. Second, verify: check that the rows are internally consistent, for example that each balance equals the previous balance plus the amount. Third, analyze: compute the figures an underwriter or accountant uses, such as total deposits, average daily balance, the number of days with a negative balance, and returned or overdraft items. The third step is arithmetic on the first, so any error in extraction carries straight through. See <a href="/resources/blogs/cash-flow-underwriting-ocr">cash flow underwriting</a> and <a href="/resources/blogs/nsf-overdraft-detection-ocr">NSF and overdraft detection</a> for what lenders compute, and <a href="/resources/blogs/real-time-bank-statement-processing">real time statement processing</a> for how fast it can run.</p>

<h2>How did we test the sign problem?</h2>
<p>Banks show the direction of a transaction in at least five ways, and online banking PDFs mix them. We generated the same kind of statement in each of these formats, 12 transactions per statement with an opening balance, a running balance column and a closing balance:</p>
<ul>
  <li><strong>Debit and credit columns:</strong> two amount columns, a positive number in one or the other.</li>
  <li><strong>Minus sign:</strong> one amount column, debits shown as a number with a leading minus.</li>
  <li><strong>Parentheses:</strong> debits shown in brackets, such as (45.20).</li>
  <li><strong>CR and DR suffixes:</strong> the amount followed by DR or CR.</li>
  <li><strong>Color only:</strong> debits printed in red, credits in black, with no sign at all.</li>
</ul>
<p>Each format was rendered at three quality levels: a clean 300 DPI page, a 200 DPI scan with light blur and noise, and a rough copy (rotated slightly, shrunk to half size, blurred, with noise and JPEG quality 45). With 40 statements per cell that is 15 cells and 600 pages. We read each page with Tesseract 5.5.2 in single block mode and parsed the sign the way a simple parser would: from the column position for debit and credit columns, from the leading minus, the brackets or the suffix, and from the direction the balance moved for the color only format. Of the 600 statements, 12 came back with 11 rows instead of 12 and could not be lined up with the source; the other 588 (7,056 rows) are scored below. The figures are synthetic and English, which we cover under limits.</p>

<h2>Which statement format loses the sign?</h2>
<p>On clean and lightly scanned pages almost nothing went wrong. The difference appears on the rough copy.</p>
<table>
  <thead><tr><th>Format</th><th>Clean</th><th>200 DPI scan</th><th>Rough copy</th></tr></thead>
  <tbody>
    <tr><td>Debit and credit columns</td><td>480 of 480 rows</td><td>480 of 480</td><td>455 of 456</td></tr>
    <tr><td>Minus sign</td><td>480 of 480</td><td>478 of 480</td><td>372 of 408</td></tr>
    <tr><td>Parentheses</td><td>480 of 480</td><td>480 of 480</td><td>468 of 468</td></tr>
    <tr><td>CR and DR suffix</td><td>480 of 480</td><td>480 of 480</td><td>467 of 468</td></tr>
    <tr><td>Color only (sign from balance)</td><td>480 of 480</td><td>480 of 480</td><td>446 of 456</td></tr>
  </tbody>
</table>
<p>Each cell shows the rows that were read with the right amount and the right sign, out of the rows from statements that kept all 12 rows. On the rough copy, the minus sign format scored 372 of 408 (91.2%), and only 10 of its 34 aligned statements came out fully right. The other formats were above 97% of rows. Brackets did best, with no error across 1,428 rows. Across all formats, 46 of the 50 wrong rows had a wrong sign and 5 had a wrong amount (one row had both).</p>

<h2>Why does the minus sign get lost?</h2>
<p>A minus sign is a short thin mark in front of a number, and the rough copy shrinks the page to half size, blurs it and compresses it. In the rows we inspected, the minus was either missing from the OCR output or came back as a tilde (~). A parser that looks for a leading minus then treats the amount as positive and the debit becomes a credit. We did not isolate whether the size reduction, the blur or the compression does the most damage, so treat this as a description of what we saw, not a measured cause. The practical lesson is that the format with the least ink in the sign is the one to distrust on poor scans. Brackets and DR or CR letters carry the sign in more strokes, and the two column format carries it in position, which survived in our test.</p>

<h2>What does a wrong sign do to the numbers?</h2>
<p>A debit read as a credit does not change the total by the amount, it changes it by twice the amount: removing $500 and adding $500 is a $1,000 swing. In the 34 statements with a wrong amount or sign, the average error in net cash flow for the month was $6,455.83 and the median was $2,909.89. For comparison, the average absolute net cash flow across all 600 statements was $2,507.64. So when the extraction was wrong, the error was usually larger than the number being measured. Those figures come from synthetic statements with transactions between $5 and $2,400, so the dollar values are only a guide, but the ratio is the point: one lost minus can turn a month of slight negative cash flow into a healthy looking month.</p>
<p>This is why an extraction accuracy figure such as "98% of rows" is not enough for lending. The 2% that are wrong are not random noise around the right answer. A lost sign moves the result in one direction and by a large amount. See <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> for why character level numbers hide this, and <a href="/resources/blogs/dti-calculation-ocr">DTI calculation from documents</a> for where such an error would end up.</p>

<h2>Does a running balance check catch it?</h2>
<p>Yes, if it uses the signed amount. Each row's balance should equal the previous balance plus that row's signed amount, and the opening balance plus all signed amounts should equal the closing balance. We ran both checks on all 600 statements:</p>
<ul>
  <li><strong>34 of 34</strong> statements with a wrong amount or sign had at least one row flagged, and none passed the opening plus transactions equals closing test.</li>
  <li><strong>12 of 12</strong> statements that lost a row were flagged and failed the closing balance test.</li>
  <li><strong>17 of 554</strong> statements that were fully correct (3.1%) were flagged anyway, usually because the balance column was misread, and 8 of 554 (1.4%) failed the closing balance test. These cost a human look, not a wrong number.</li>
</ul>
<p>The version of this check in our <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout analysis guide</a> compares the size of the balance change and ignores direction, because it is built to survive a table where the sign cannot be read. That is the right design for that test, but it cannot see a sign error: if a debit is read as a credit, the balance column still moves by the same amount, so the size matches. In this test, 45 of the 50 wrong rows were sign errors only, so an unsigned check would not have flagged them (this follows from how the check works, we did not run it on this data). If your extraction does produce signs, use the signed check.</p>
<pre><code>def check_statement(opening, closing, rows, expected_rows=None, tol=0.005):
    """rows: (signed_amount, balance) per transaction, in page order.
    Returns a list of flags. An empty list means the statement chains."""
    flags = []
    if expected_rows is not None and len(rows) != expected_rows:
        flags.append("row count %d, expected %d" % (len(rows), expected_rows))
    previous = opening
    for i, (amount, balance) in enumerate(rows):
        if abs(previous + amount - balance) &gt; tol:
            flags.append("row %d breaks the balance chain" % i)
        previous = balance
    if closing is not None and abs(opening + sum(a for a, _ in rows) - closing) &gt; tol:
        flags.append("opening plus transactions does not equal closing")
    return flags</code></pre>
<p>A statement with any flag should go to review, not into the underwriting numbers. We used the same logic in the tests above. For the color only format, where the sign is inferred from the balance, the chain is true by construction, so use the closing balance test and a digit check instead, and prefer a format with a sign when you can choose. When the flag is a misread digit and not a sign, see our test of <a href="/resources/blogs/bank-statement-ocr-errors-balance-check">bank statement OCR errors</a>, which also shows how the break pattern points at the bad cell and how to correct it.</p>

<h2>What if the statement has no running balance column?</h2>
<p>Some statements show only the date, description and amount. Then the chain check is not available, and the sign has to come from the format itself. In that case compare the sums against the statement summary box that most banks print (total deposits and total withdrawals): if the parsed credits and debits do not match those two totals, the sign or an amount is wrong. We did not test statements without a balance column. We can say that it removes the strongest check we had, so on that kind of statement expect more manual review.</p>

<h2>What about multiple accounts and tampered statements?</h2>
<p>Two related problems use the same idea. A packet with several accounts needs each statement checked on its own chain before the totals are combined, which is covered in <a href="/resources/blogs/multi-account-bank-statement-ocr">multi account statement OCR</a>. And a statement that was edited by hand will often break its own balance chain, since the person editing an amount rarely recomputes every balance after it. The chain check is one signal among several for fraud and is described with the others in <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a>. We did not test tampered files here.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI was built by HyperVerge and uses a layout aware engine with a vision language model fallback for complex pages. On its own 2026 benchmark of 1,700 documents it scored 91% on multi-page bank statements, where the other engines tested scored 64% to 79%, at about 1.1 seconds per page. That benchmark is separate from the Tesseract tests in this guide, which use Tesseract as a stand-in for any engine that returns text without a layout model. Access starts with a demo, then a free 30 day trial for qualified lenders, and pricing starts from $0.02 per page with volume discounts above 100,000 pages a month. Whatever you use, run the signed balance check on its output and keep the flags: a sign error does not announce itself. For the cost side, see <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing</a>; for the wider banking picture, <a href="/resources/blogs/ocr-technology-in-banking">OCR in banking</a>.</p>

<h2>What do these tests not show?</h2>
<ul>
  <li>The statements are synthetic, in English, with one layout and one font. Real statements add logos, shaded rows, page breaks and multi-line descriptions.</li>
  <li>The rough copy level is one recipe of rotation, shrinking, blur, noise and compression. A different scanner will fail differently.</li>
  <li>We tested Tesseract 5.5.2 only. Engines that read layout and context may handle signs differently.</li>
  <li>Each cell has 40 statements, so a percentage such as 91.2% has a margin of error of several points. The pattern across formats is clearer than any single number.</li>
  <li>The color only format was parsed with the balance. We did not test the case where the balance column is also missing.</li>
  <li>The dollar impact figures describe our generated amounts, not real borrowers.</li>
</ul>

<h2>Sources and how we checked this</h2>
<p>The numbers come from our own runs: 5 formats, 3 quality levels, 40 statements per cell, 600 pages, 12 transactions each. Public guides to bank statement extraction list the same five sign conventions and describe sign reversal as a silent error that accounting software does not flag, and they suggest checking running balances. We found none that measured how often each convention loses its sign, which is why we ran this. The check function above is the one we used, and we recomputed the flag counts from the saved OCR output before publishing.</p>
    `,
    image: "/images/revolutionizing-finance.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "June 18, 2025",
    readTime: "11 min read",
    author: nupuraUghade,
    metaTag: "Bank Statement Analysis: Where OCR Loses the Sign",
  },
  {
    id: "14",
    title: "SBA Loan Automation: Documents, Workflows and Vendors",
    slug: "the-ultimate-guide-to-small-business-lending-automation-revolutionizing-sba-loans-and-financing",
    excerpt: "What software can and cannot do in an SBA 7(a) file under SOP 50 10 8.1: the documents Appendix 20 requires, a ten-check completeness example on one file, how to time each step, and what to ask vendors.",
    content: `
<p>In an SBA 7(a) file, software can collect the documents, split a mixed upload into separate documents and read the numbers off tax returns, bank statements and personal financial statements. It can also check the file against SBA's document list before an underwriter opens it. It cannot make the calls SBA leaves to the lender: whether credit is available elsewhere, which add-backs are justified, whether equity and collateral are enough, and how to settle a gap between a return and its transcript.</p>
<p>The rules below come from <a href="https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs" rel="nofollow noopener" target="_blank">SOP 50 10 8.1 with Technical Policy Updates</a>, published September 25, 2026 and effective October 1, 2026. SBA's <a href="https://legacy.sba.gov/document/information-notice-5000-880695-issuance-sop-50-10-81" rel="nofollow noopener" target="_blank">Information Notice 5000-880695</a> says it applies to applications issued an SBA loan number on or after that date. The notice also lists nine policy and procedural notices folded into 8.1, seven of them from 2026, so check the current text before you build rules on it.</p>

<h2>What can software do in an SBA file, and what stays with the underwriter?</h2>
<p>Most of what software can take on happens before the credit memo. Here is how each step splits.</p>
<table>
  <thead><tr><th>Step</th><th>What software can do</th><th>What stays with people</th></tr></thead>
  <tbody>
    <tr><td>Collection</td><td>Send a checklist for the loan, track what arrived, ask for what is missing.</td><td>Which exceptions to accept.</td></tr>
    <tr><td>Sorting</td><td>Split a combined PDF and label each part: Form 1919, tax return, bank statement, personal financial statement.</td><td>Pages the classifier is unsure of.</td></tr>
    <tr><td>Completeness</td><td>Compare the file with the SOP list and flag what is missing or too old.</td><td>Owning the checklist and updating it when the SOP changes.</td></tr>
    <tr><td>Extraction</td><td>Read return lines, balance sheets, income statements, debt schedules, bank transactions and PFS totals.</td><td>Low-confidence fields.</td></tr>
    <tr><td>Tax verification</td><td>Compare transcript figures with the returns and financial statements.</td><td>Resolving any significant difference.</td></tr>
    <tr><td>Screens</td><td>Run SAM.gov exclusion and OFAC searches and save the evidence.</td><td>Whether a possible match is the same person.</td></tr>
    <tr><td>Credit analysis</td><td>Spread statements and compute debt service coverage.</td><td>The credit memo and the recommendation.</td></tr>
  </tbody>
</table>
<p>For a loan made under PLP authority, SBA does not review the lender's credit analysis before it issues a loan number. That analysis is open to SBA review when the lender asks SBA to purchase the guaranty, or during lender oversight. A wrong number that slipped through intake can surface late, when the guaranty is at stake.</p>

<h2>What does an SBA 7(a) file contain under SOP 50 10 8.1?</h2>
<p>Appendix 20 of the SOP lists what every 7(a) application must hold. A PLP lender keeps the documents in its own file. A non-delegated lender also uploads the application and attachments to the SBA Loan System, which takes no single upload over 250 MB.</p>
<table>
  <thead><tr><th>Document</th><th>Who or what it covers</th><th>Timing rule</th></tr></thead>
  <tbody>
    <tr><td><a href="https://legacy.sba.gov/document/sba-form-1919-borrower-information-form" rel="nofollow noopener" target="_blank">SBA Form 1919</a>.</td><td>One per co-borrower, signed for the applicant. The purpose amounts across all of them should equal the loan request.</td><td>None stated.</td></tr>
    <tr><td>Personal financial statement (<a href="https://legacy.sba.gov/document/sba-form-413-personal-financial-statement" rel="nofollow noopener" target="_blank">SBA Form 413</a> or the lender's form).</td><td>Every owner of 20% or more, counting a spouse's and minor children's assets, and every proposed guarantor except Supplemental Guarantors.</td><td>Signed and dated within 90 days of submission to SBA.</td></tr>
    <tr><td>Business financial statements or tax returns, last 3 years.</td><td>The applicant and any affiliates, with year-end and interim balance sheets that include a detailed debt schedule.</td><td>Interim statements dated within 120 days before submission.</td></tr>
    <tr><td>IRS tax transcripts, through IVES with Form 4506-C or through Form 8821.</td><td>The applicant: 3 years under a NAICS size standard, 2 under the alternative size standard.</td><td>Obtained and reconciled before first disbursement.</td></tr>
    <tr><td>Credit reports.</td><td>Owners and guarantors.</td><td>Non-delegated loans: a copy dated within 90 days.</td></tr>
    <tr><td>Use of proceeds support.</td><td>Lease, equipment quotes, lists of assets bought and of collateral. A real estate or business purchase adds its own list, from appraisal to seller's statements.</td><td>Seller's statements within 120 days before submission.</td></tr>
    <tr><td>Debt refinancing.</td><td>Each note and security agreement being refinanced.</td><td>12 months of payment history showing the debt is current.</td></tr>
  </tbody>
</table>
<p>The guaranty rule drives several of these rows. Anyone owning 20% or more must give an unlimited full guaranty. So must each spouse owning less than 20% when the spouses and minor children together own 20% or more.</p>
<p>The forms and the SOP do not always agree. Form 413's header says its figures must be current within 120 days of submission for 7(a), while 8.1 says 90. Form 1919 (02/2025) has the applicant certify at least 51% ownership by U.S. citizens or permanent residents, but 8.1 requires every owner and SBA-required guarantor to be a citizen or national. The 8.1 notice says to collect what both require until the forms are updated, so build the checklist from the SOP.</p>
<p>Smaller loans need less. For 7(a) Small loans (up to $350,000) and SBA Express (up to $500,000), equipment quotes and the asset and collateral lists are needed only as far as the use of proceeds and credit analysis require. A 7(a) Small loan also needs the last two months of operating account activity. Our guide to <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for loan underwriting</a> works through its coverage math.</p>

<h2>Which document steps does automation help with?</h2>

<h3>Collecting and sorting the upload</h3>
<p>Borrowers and packagers often send one long PDF. Splitting it is hard because an SBA file is full of same-type neighbors: three years of returns, monthly bank statements, a PFS for each owner. A Tesseract test on 540 generated packets, written up in <a href="/resources/blogs/split-loan-packet-pdf">how to split a loan packet PDF</a>, started a new document wherever the page type changed. That rule caught none of the 229 boundaries between two documents of the same type.</p>

<h3>Tax returns and IRS transcripts</h3>
<p>The SOP gives tax verification two jobs: confirm that the applicant filed business returns, and confirm that its financial statements agree with them. For a sole proprietorship, the lender verifies the Schedule C. An applicant that has not filed required federal returns is not eligible.</p>
<p>The request has rules software can check. <a href="https://www.irs.gov/pub/irs-pdf/f4506c.pdf" rel="nofollow noopener" target="_blank">Form 4506-C</a> (Rev. 10-2022) takes one tax form number per request on line 6, and the IRS must receive it within 120 days of signing. Its instructions say a Return Transcript does not reflect changes made after processing, while a Record of Account combines the Return and Account Transcripts. For Form 8821 requests, the SOP says the transcript type must contain any changes to the original return.</p>
<p>If the IRS has not answered in 10 business days, the SOP says to resubmit marked "Second Request." The <a href="https://www.irs.gov/individuals/income-verification-express-service-for-participants" rel="nofollow noopener" target="_blank">IVES participant page</a> lists a $4 fee per transcript. Our <a href="/resources/blogs/4506-c-tax-transcript-ocr">4506-C transcript guide</a> covers what each transcript type holds, and the <a href="/resources/blogs/w2-1099-tax-form-ocr-underwriting">W-2 and 1099 guide</a> covers owner income.</p>

<h3>Bank statements</h3>
<p>Bank statements appear in two SOP rules. For 7(a) Small loans, two months of operating account activity confirm that every business debt is in the coverage figure. Where SBA requires a cash equity injection, the lender verifies it before disbursement, except on Express loans, with three documents.</p>
<ul>
  <li>A copy of the check or wire, with evidence the funds reached the borrower's account or escrow.</li>
  <li>The latest statement from the source account, covering at least 30 days.</li>
  <li>A statement showing the deposit, or a settlement statement showing how the cash was used.</li>
</ul>
<p>A gift letter or promissory note alone is not enough. Extraction can surface recurring loan payments missing from the debt schedule, and a running balance check catches misreads. A Tesseract test on 400 generated statements, in <a href="/resources/blogs/bank-statement-ocr-errors-balance-check">bank statement OCR errors</a>, found that a row by row check flagged all 84 statements with a misread number. See also <a href="/resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions">where OCR loses the sign</a> and <a href="/resources/blogs/cash-flow-underwriting-ocr">cash flow underwriting metrics</a>.</p>

<h3>Personal financial statements</h3>
<p>Form 413 has its own arithmetic. Total liabilities plus net worth must equal total assets. Sections 2 to 8 itemize what sits behind the summary lines, so a check can tie each section to its line.</p>

<h2>A worked example: checking one file for completeness</h2>
<p>The file is invented. A calendar-year S corporation asks for a $900,000 Standard 7(a) loan under PLP authority, for equipment, working capital and refinancing an equipment note. Ana owns 55% and is president, Ben owns 30%, and Carla, Ben's spouse, owns 15% and is an officer. The lender plans to submit on November 16, 2026.</p>
<table>
  <thead><tr><th>Check</th><th>Rule</th><th>In the file</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td>Form 1919 purposes</td><td>Should equal the loan request.</td><td>$600,000 equipment, $150,000 working capital, $100,000 refinance: $850,000.</td><td>Flag: $50,000 short.</td></tr>
    <tr><td>Ownership</td><td>Must total 100%.</td><td>55 + 30 + 15 = 100.</td><td>Pass.</td></tr>
    <tr><td>PFS coverage</td><td>Every guarantor. Ben and Carla's household owns 45%, so Carla must guarantee.</td><td>PFS from Ana and Ben only.</td><td>Flag: Carla's guaranty and PFS.</td></tr>
    <tr><td>PFS age</td><td>Within 90 days of submission.</td><td>Ana's is dated July 30, 2026, 109 days earlier.</td><td>Flag, though the form allows 120.</td></tr>
    <tr><td>Interim statements</td><td>Within 120 days.</td><td>As of September 30, 2026, 47 days earlier, with debt schedule.</td><td>Pass.</td></tr>
    <tr><td>Transcript years</td><td>3 years. The latest drops out only if its year-end is within 6 months of SBA receiving the application.</td><td>Returns and 4506-C cover 2023 and 2024. December 31, 2025 is more than 6 months back.</td><td>Flag: 2025, or the extension plus proof of estimated tax paid.</td></tr>
    <tr><td>Transcript type</td><td>Should show changes after filing.</td><td>Return Transcript checked on the 4506-C.</td><td>Review: an amended return would not show.</td></tr>
    <tr><td>Refinance</td><td>12 months of payment history.</td><td>6 months.</td><td>Flag.</td></tr>
    <tr><td>Agent fees</td><td>A packager is an Agent, and any Agent needs a Form 159.</td><td>Question 6 on Form 1919 answered yes, packager named, no Form 159.</td><td>Flag before closing.</td></tr>
    <tr><td>SAM.gov evidence</td><td>For a corporation: the applicant, each 20% owner, each officer and director, key employees.</td><td>Saved for the company, Ana, Ben and Carla, the only key employees.</td><td>Pass.</td></tr>
  </tbody>
</table>
<p>Six of ten checks flag and one needs review, before anyone has read a number. The PFS rule is where simple checklists go wrong, because "20% owners" misses Carla. Here is that rule in Python, with the 90-day test.</p>
<pre><code>from datetime import date

# Spouses and minor children share a household; SBA adds their
# ownership together for the 20% guaranty test.
owners = {
    "Ana":   {"pct": 55, "household": "A"},
    "Ben":   {"pct": 30, "household": "B"},
    "Carla": {"pct": 15, "household": "B"},
}
pfs_signed = {"Ana": date(2026, 7, 30), "Ben": date(2026, 10, 2)}
submit = date(2026, 11, 16)

household_pct = {}
for o in owners.values():
    household_pct[o["household"]] = household_pct.get(o["household"], 0) + o["pct"]

for name, o in owners.items():
    if o["pct"] &lt; 20 and household_pct[o["household"]] &lt; 20:
        continue  # no full guaranty required, so no PFS under this rule
    signed = pfs_signed.get(name)
    if signed is None:
        print(name, "needs a guaranty and a personal financial statement")
    elif (submit - signed).days &gt; 90:
        print(name, "PFS is", (submit - signed).days, "days old; the SOP allows 90")

# Ana PFS is 109 days old; the SOP allows 90
# Carla needs a guaranty and a personal financial statement</code></pre>
<p>A real version also needs entity owners, trusts and guarantors who own nothing. It needs the six-month lookback too, which keeps the rule on anyone it covered six months before the application, unless they fully divested.</p>

<h2>How do you measure time per step before and after?</h2>
<p>Measure your own files before you buy anything, or there is nothing to compare against. Log the next 20 SBA files with a timestamp for each event below, then log the first 20 files after automation the same way.</p>
<table>
  <thead><tr><th>Step</th><th>Starts when</th><th>Ends when</th><th>Also count</th></tr></thead>
  <tbody>
    <tr><td>Collection</td><td>First document arrives.</td><td>The checklist shows the file complete.</td><td>Requests sent to the borrower.</td></tr>
    <tr><td>Spreading</td><td>An analyst opens the complete file.</td><td>Spreads and coverage are done.</td><td>Fields typed or corrected by hand.</td></tr>
    <tr><td>Credit memo</td><td>Spreads are done.</td><td>The memo is approved.</td><td>Documents requested after underwriting began.</td></tr>
    <tr><td>Tax verification</td><td>The 4506-C or 8821 is sent.</td><td>Transcripts are reconciled.</td><td>Second requests and open differences.</td></tr>
  </tbody>
</table>
<p>Compare medians, since one stuck file skews a small sample, and watch the counts as closely as the clock. A document requested after underwriting began is a completeness check that failed. A field fixed by hand is extraction work that moved to a person, and a check that flags good files soon gets ignored, so log false alarms too.</p>

<h2>What should you ask a vendor about SBA files?</h2>
<p>Four kinds of product touch an SBA file: loan origination systems with SBA workflows, document extraction tools, IVES participants that pull transcripts, and screening services for SAM.gov, OFAC and <a href="/resources/blogs/kyb-verification">KYB checks</a>. Our <a href="/resources/blogs/smb-lending-automation-document-processing">SMB lending automation comparison</a> covers extraction tools and general vendor questions. These are the SBA-specific ones.</p>
<ul>
  <li>Which SOP version does your checklist follow, and what changed in it for 8.1?</li>
  <li>Does the checklist change with the program and the use of proceeds? A Working Capital CAPLine, for one, needs a sample <a href="/resources/blogs/business-line-of-credit-ocr">borrowing base calculation</a>.</li>
  <li>Does it combine spouse and minor child ownership for the guaranty and PFS rules, and apply the six-month lookback?</li>
  <li>Can it read Form 1919 answers, including the checkboxes and whether question 4 is initialed rather than typed?</li>
  <li>Which transcript type do you request, and how are transcript lines matched to return lines?</li>
  <li>Is every correction to an extracted field logged, so it can be shown in a later SBA review?</li>
</ul>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI, built by HyperVerge, is a document intelligence API for SMB lending and fintech that processes about 4 million pages a month. In an SBA file it does the reading: it classifies each document, returns fields and tables as JSON, joins bank statement tables across pages and validates the results. It is not a loan origination system or an SBA checklist and makes no credit decisions, so the completeness rules stay with the lender.</p>
<p>In our 2026 benchmark on 1,700 real documents, DocsAPI read clean typed English at 97 to 99% accuracy, multi-page bank statement tables at 91% and handwritten forms at 78%. That last figure is why a handwritten PFS still needs a person. Pricing starts at $0.02 per page, with classification and tables included and volume discounts above 100,000 pages a month. Access starts with a demo, then a free 30-day trial for qualified lenders.</p>
`,
    image: "/images/the-ultimate-guide-to-small-business.png",
    featuredImage: "",
    category: "Industry Trends",
    date: "June 27, 2025",
    readTime: "10 min read",
    author: nupuraUghade,
    metaTag: "SBA Loan Automation: Documents, Workflows and Vendors",
  },
]

const existingBlogs: BlogPost[] = existingBlogsRaw.map((b) => {
  const augment = eeatMetadataBySlug[b.slug] ?? {}
  return { ...augment, ...b }
})

export const blogs: BlogPost[] = [...newBlogs, ...existingBlogs]
