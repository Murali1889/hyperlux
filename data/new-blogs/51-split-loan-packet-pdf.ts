import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog51: BlogPost = {
  id: "new-51",
  title: "Split a Loan Packet PDF Into Documents: 540 Packets Tested",
  slug: "split-loan-packet-pdf",
  excerpt:
    "Splitting a loan packet wherever the document type changed got 8 of 120 fresh test packets right, because same type documents sit back to back. Adding a one page rule for pay stubs and W-2s, page numbers, account and period keys and first page markers got 118, and checks flagged both misses.",
  description:
    "We split 540 generated loan packets with Tesseract. Type change splitting got 8 of 120 right; one page types plus page, account and first page cues got 118.",
  metaTag: "How to Split a Loan Packet PDF Into Separate Documents",
  summary:
    "In Tesseract 5.5.2 tests on 540 generated loan packets (8,419 pages, 4,136 documents, eight document types, four image qualities), splitting a packet wherever the page's document type changed got 8 of 120 fresh packets exactly right and found none of the 229 boundaries between two documents of the same type, such as consecutive bank statements or pay stubs. Text similarity got 2 and page numbers plus type changes got 25. A script that starts a new document on \"Page 1\", a type change, a one page type (pay stub, W-2, ID, letter), a new account number or statement period, or a first page marker, and that attaches blank and untyped pages to the page before, got 118 of 120, and its seven checks (unrecognized type, footer page count, page order, missing first page, one page types with extra pages, same account and period twice, untyped pages unlike the page before) flagged both packets it got wrong, with 3 false alarms in 118. On 120 packets using wording its phrase lists had never seen it got 0 right but flagged all 120, so the phrase lists must come from your own documents.",
  content: `
<p>To split a loan packet PDF into separate documents, label every page with a document type, then start a new document when a page says "Page 1", when the type changes, when a pay stub, W-2, ID or letter follows another one, when the account number or statement period changes, or when a page carries something only a first page has, such as an account summary. Keep blank pages and pages with no type with the page before them, and check each result before it reaches an underwriter. In our test on 120 generated loan packets (1,874 pages, 913 documents), splitting wherever the document type changed got 8 packets exactly right. The script at the end of this guide, which uses all of those signals, got 118, and its checks flagged both packets it got wrong.</p>
<p>Type labels alone fail for one plain reason: loan packets are full of documents of the same type in a row. Three months of statements from the same bank, two pay stubs, two W-2s. The 120 packets held 229 of those boundaries, and splitting by type change found none of them. Below are the test, four methods side by side, what each signal adds, what happened when the documents used wording our rules had never seen, the checks, and the script. It continues our tests on <a href="/resources/blogs/bank-statement-ocr-errors-balance-check">bank statement OCR errors</a> and <a href="/resources/blogs/extract-invoice-data-to-excel">invoice data to Excel</a>.</p>

<h2>How do you split a loan packet into separate documents?</h2>
<p>Six steps. The first two give every page a label, the next two decide where documents start and end, and the last two keep a bad split away from the underwriter.</p>
<ol>
  <li><strong>Get each page as text.</strong> If it is a scan, render each page at 200 DPI and OCR it. A PDF with a real text layer can be read directly instead, though the script below OCRs every page, which works for both. Our guide to <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDFs vs image PDFs</a> shows how to tell the two apart page by page.</li>
  <li><strong>Label each page with a type, or with no type.</strong> Score each page against the phrases a document type always prints: "Beginning Balance" and "Statement Period" for a bank statement, "Net Pay" and "Pay Date" for a pay stub, "Wage and Tax Statement" for a W-2. A page that matches fewer than two phrases gets no type. That is normal: the middle pages of a bank statement are mostly rows of transactions.</li>
  <li><strong>Decide where each document starts.</strong> Use the signals in the table below, in that order.</li>
  <li><strong>Attach blank pages and untyped pages to the page before.</strong> Blank pages are usually the back sides of single sided sheets in a duplex scan. Untyped pages are usually continuation pages.</li>
  <li><strong>Check every document.</strong> Compare the page count with the "of 3" in the footer, look for page numbers out of order, missing first pages, one page documents with extra pages, two statements for the same account and month, and attached pages that share few words with the page before.</li>
  <li><strong>Write one file per document and route flagged packets to a person.</strong> The script writes one PDF per document and a CSV with the type, page range and flags of each.</li>
</ol>
<table>
  <thead><tr><th>Signal, in the order the script checks it</th><th>Example</th><th>What it catches</th></tr></thead>
  <tbody>
    <tr><td>Blank page</td><td>Fewer than 25 confident letters or digits</td><td>Duplex back sides, which would otherwise look like a new document</td></tr>
    <tr><td>Page number</td><td>"Page 1 of 3" starts, "Page 2 of 3" continues; "Page 11 of 3" is ignored</td><td>Statements and forms that number their pages</td></tr>
    <tr><td>Type change</td><td>Statement page, then a pay stub page</td><td>Different documents next to each other</td></tr>
    <tr><td>One page types</td><td>Pay stub, W-2, ID, letter</td><td>Two pay stubs or two W-2s in a row</td></tr>
    <tr><td>Account key</td><td>Account ending 4471 vs 9032</td><td>Two statements or bills from different accounts</td></tr>
    <tr><td>Statement period</td><td>"Sep 1, 2026 through Sep 30, 2026" vs October</td><td>Back to back months from the same account</td></tr>
    <tr><td>First page marker</td><td>"Account Summary", "Amount Due", "Individual Income Tax Return"</td><td>A new document whose footer and key were not readable</td></tr>
  </tbody>
</table>

<h2>How did we test loan packet splitting?</h2>
<p>We generated 540 loan packets as page images, 8,419 pages and 4,136 documents in all, with fictional borrowers, banks and employers. Each packet mixed up to eight document types the way an applicant uploads them: bank statements (2 to 4 pages each, usually two or three consecutive months from one bank), pay stubs (usually two in a row), W-2s, a driver's license or ID card, utility bills, a two page Form 1040, letters of explanation or gift letters, and a three page loan application. The IDs, W-2s and tax returns were marked as specimens. Packets ran from 7 to 33 pages, about 16 on average.</p>
<p>We built in the cases that break simple splitters. About half of all statements had a header on their continuation pages and half did not. About 45% of statements printed "Page k of n" in the footer, 15% printed only "Page k" and 40% printed nothing. About 30% of packets were scanned duplex, so a blank back side followed about half of their pages. About 20% of packets had their documents in random order instead of grouped by type, although pages inside each document stayed in order.</p>
<p>Every packet came in one of four image qualities: a clean 200 DPI render, a scan with noise and up to 0.8 degrees of tilt, a fine mode fax (200 DPI black and white with noise and specks), and a phone photo 1,200 pixels wide with up to 2 degrees of tilt, uneven light and JPEG compression. We read every page once with Tesseract 5.5.2 in its default page mode. Phone photos got the light correction and enlargement from our <a href="/resources/blogs/extract-invoice-data-to-excel">invoice test</a>, which took phone photos there from 32.0% to 96.4% of fields right.</p>
<table>
  <thead><tr><th>Set</th><th>Packets</th><th>Pages</th><th>Documents</th><th>Used for</th></tr></thead>
  <tbody>
    <tr><td>Tuning</td><td>60</td><td>877</td><td>454</td><td>Setting thresholds, nothing else</td></tr>
    <tr><td>Test</td><td>240</td><td>3,812</td><td>1,855</td><td>Comparing methods and signals</td></tr>
    <tr><td>Fresh</td><td>120</td><td>1,874</td><td>913</td><td>Measuring the final script, after its final fixes</td></tr>
    <tr><td>Unseen wording</td><td>120</td><td>1,856</td><td>914</td><td>Wording our phrase lists had never seen</td></tr>
  </tbody>
</table>
<p>A packet counts as right only if every document boundary in it is right. We also counted the two ways a split goes wrong separately, because they cost different things. A missed boundary merges two documents, so October's statement disappears inside September's and an underwriter sees one month where there were two. An extra boundary cuts one document in two, which is annoying but visible.</p>

<h2>Which way of splitting a PDF by document type works best?</h2>
<p>On the 120 fresh packets, which had 793 boundaries between documents:</p>
<table>
  <thead><tr><th>Method</th><th>Packets exactly right</th><th>Documents merged</th><th>Documents cut in two</th><th>Same type boundaries found</th><th>Boundaries after a blank page found</th></tr></thead>
  <tbody>
    <tr><td>New document when the type changes</td><td>8 of 120</td><td>230</td><td>0</td><td>0 of 229</td><td>86 of 126</td></tr>
    <tr><td>New document when the text changes</td><td>2 of 120</td><td>277</td><td>85</td><td>0 of 229</td><td>77 of 126</td></tr>
    <tr><td>Page numbers first, then type changes</td><td>25 of 120</td><td>147</td><td>0</td><td>84 of 229</td><td>103 of 126</td></tr>
    <tr><td><strong>The script (all signals and checks)</strong></td><td><strong>118 of 120</strong></td><td><strong>1</strong></td><td><strong>1</strong></td><td><strong>229 of 229</strong></td><td><strong>126 of 126</strong></td></tr>
  </tbody>
</table>
<p>The 240 test packets ranked the four the same way: 26, 6, 53 and 236 packets right, the last with the script before its final fixes (the final script gets 238). All four methods skip pages the blank detector catches, so the boundaries the simple methods missed after a blank page were same type boundaries, counted a second time.</p>
<p>Splitting by type change never cut a document in two, but it merged every pair of same type documents. Text similarity compares each page's words with the page before and starts a new document when they share too little. We set its threshold to the value that scored best on the tuning set, and it still failed both ways. Two pay stubs from the same employer share almost every word (an average similarity of 0.90 against a threshold of 0.22), so they merged. The three pages of a loan application ask different questions and share few words, so applications were cut apart 54 times, and two page utility bills 28 times. Page numbers helped where they existed, but 40% of statements had none and pay stubs never do.</p>

<h2>Why does splitting merge two bank statements into one?</h2>
<p>Because a type label cannot see the line between them. The 229 same type boundaries in the fresh set were 138 statement to statement, 74 pay stub to pay stub and 17 W-2 to W-2. Each needs a different signal. Pay stubs, W-2s, IDs and letters are one page documents, so every page of those types starts a new document. Statements need something on the page itself: "Page 1 of 3", an account summary that only the first page prints, or a change in the account number or statement period.</p>
<p>To see what each signal adds, we switched them off one and two at a time on the 240 test packets, using the script before its final fixes:</p>
<table>
  <thead><tr><th>Signals used</th><th>Packets right of 240</th><th>Same type boundaries found of 447</th></tr></thead>
  <tbody>
    <tr><td>All signals</td><td>236</td><td>447</td></tr>
    <tr><td>Without page numbers</td><td>238</td><td>447</td></tr>
    <tr><td>Without account and period keys</td><td>236</td><td>447</td></tr>
    <tr><td>Without first page markers</td><td>230</td><td>440</td></tr>
    <tr><td>Without the one page rule</td><td>214</td><td>424</td></tr>
    <tr><td>Without page numbers and first page markers</td><td>217</td><td>424</td></tr>
    <tr><td>Without keys and first page markers</td><td>139</td><td>337</td></tr>
    <tr><td>Without page numbers, keys and first page markers</td><td>32</td><td>193</td></tr>
  </tbody>
</table>
<p>The one page rule mattered most on its own: without it 22 more packets went wrong, because two pay stubs or two W-2s in a row look like one document to every other signal. First page markers came next. With the markers removed, keys and page numbers alone still got 230 packets right, and with the keys removed as well the count fell to 139, so the keys are the markers' backup. Page numbers and keys could each be dropped without loss while everything else was there. That overlap is the point: on a real scan any one signal can be missing or misread, so most boundaries need a second way to be found.</p>
<p>Page numbers were the surprise. Removing them improved the result from 236 to 238, because in two packets OCR read a statement's "Page 1 of 3" as "Page 1l of 3" and "Page1iof3", and the script's own rule that reads a lowercase l or i as the digit 1 turned both into page 11. The script took page 11 as a continuation and merged the new statement into the document before it, a tax return in one packet and a utility bill in the other. The published script now ignores a page number larger than the page count, and lets a first page marker overrule a page number when the type, account or statement period differs from the document before. Those fixes were made after looking at the test set's errors, so we measured the final script on the 120 fresh packets instead of reusing the test set.</p>

<h2>What should you do with blank pages and pages with no header?</h2>
<p>Attach both to the page before. A blank page has no type and no words, so a splitter that treats it as a page either breaks a document's run of pages or hides the next boundary. All the methods we tested skipped pages the blank detector caught, so blank pages caused almost none of the errors here, as long as the detector found them. The script treats a page with fewer than 25 confident letters and digits as blank. In the test set it marked 560 of the 570 blank pages as blank and no real page as blank. The other 10 were phone photos of blank pages with enough shading and noise to look like text, but with no type they stayed with the page before anyway, which is where they belonged.</p>
<p>Untyped pages are the bigger group. In the fresh set the phrase lists gave a type to 1,364 of 1,622 pages that were not blank and never gave a page the wrong type. The 258 pages with no type were almost all statement continuation pages: 254 pages that were only rows of dates, descriptions and amounts. On their own those pages could belong to anything. Attached to the page before, all 254 landed in the right statement. This is also why per page classification accuracy tells you little about splitting. A page that cannot be classified alone can still be split correctly.</p>

<h2>What happens when the documents use different wording?</h2>
<p>The script broke, loudly. We generated 120 more packets in two sets of 60, with the same documents and layouts but the wording our phrase lists had never seen: "Opening Balance" and "Closing Balance" instead of "Beginning" and "Ending", "Check Date" instead of "Pay Date", "Direct Deposit Advice" as a pay stub title, "Please Pay" on the utility bill, "Part A: About You" on the loan application, "Regards" at the end of the letter.</p>
<p>Page typing collapsed to 257 of 1,611 pages. 228 of those were W-2s and Form 1040s, whose government wording never changes, and every bank statement, pay stub, utility bill and loan application page went untyped. The script split 0 of the 120 packets correctly and found 38% of the boundaries. Splitting by type change found 8% to 10%, and text similarity, which does not depend on wording, found 65% to 69% but still got only 5 of the 120 packets right. The checks flagged all 120 packets, most often for an untyped page that shared few words with the page before (117 packets) and for a document type not recognized (112), so nothing would have reached an underwriter as if it were fine.</p>
<p>We tried one fix: start a new document whenever an untyped page shares few words with the page before. On the first unseen wording set, which we had already looked at, it raised the boundaries found from 38% to 76% and got 8 of 60 packets right. On the second set it went from 38% to 69%, and 3 of 60. On the 240 test packets with known wording it cost 10 packets, mostly phone photos, where OCR noise makes continuation pages look unlike each other. So the published script uses that test as a flag for a person, not as a reason to split.</p>
<p>The lesson is that the phrase lists are the part you have to own. Before you run any rules on your own packets, collect 20 to 30 real examples of each document type you receive, copy the phrases that appear on every one of them and the ones that appear only on a first page, and run the script on a batch where you already know the right answer.</p>

<h2>Which checks catch a bad split before underwriting?</h2>
<p>Seven checks run on every document the script produces. None of them needs the right answer, only the pages themselves.</p>
<ul>
  <li><strong>Page count against the footer.</strong> The footer says "of 3" but the document has four pages. This catches most merges into a numbered document.</li>
  <li><strong>Document type not recognized.</strong> No page in the document matched two phrases of any type, so nothing about the split can be trusted.</li>
  <li><strong>Page numbers out of order.</strong> A document reads page 3 and then page 2: usually a misread number, or two documents run together.</li>
  <li><strong>First page marker missing.</strong> A statement or bill whose first page has no account summary or amount due. Either the real first page was merged into the previous document, or a continuation page was cut off as a new one.</li>
  <li><strong>Extra pages on a one page type.</strong> A pay stub with two pages means something else got attached to it.</li>
  <li><strong>Same account and month twice.</strong> Two statements with the same account and statement period usually mean one statement was cut in two.</li>
  <li><strong>An untyped page that does not look like the page before.</strong> An attached page with no type that shares fewer words with the page before than a continuation page would. This catches a letter swallowed by the statement in front of it.</li>
</ul>
<p>On the 120 fresh packets the checks flagged both wrong packets and 3 of the 118 right ones. All three false alarms were phone photos: a blank back side read as a page, which broke a footer count, or a continuation page whose OCR noise left it sharing few words with the page before. In the 240 test packets, before the final fixes, the checks flagged 3 of the 4 wrong packets. The one they missed was a phone photo of a one page letter of explanation where OCR read "To Whom It May Concern" as "Concer", so the page matched only one letter phrase and got no type. It was attached to the bank statement before it, and that statement had no page footer to count against. The last check above was added because of that packet. The test set had a second swallowed letter, read as "To Whom It. May Concern:", and the footer count caught that one. In the fresh set the same thing happened to a letter on a fax, read as "Dear. Underwriter," with a stray period, and both the footer count and the new check flagged it.</p>
<p>Underwriting adds checks of its own after the split. Two months of statements should cover consecutive periods, the pay stub dates should be recent, and every document should belong to the same borrower. Those depend on a split you can trust, which is why the splitting checks come first. The balance checks in our <a href="/resources/blogs/bank-statement-ocr-errors-balance-check">bank statement OCR test</a> are the next step for each statement.</p>

<h2>Does scan quality change how well a packet splits?</h2>
<p>Less than you would expect, once the light on phone photos is evened out. On the fresh packets the script got 30 of 30 clean renders, 30 of 30 scans, 28 of 30 faxes and 30 of 30 phone photos right. Both misses were faxes. In one, OCR read the account number with a different last digit on the statement's first page than on its continuation header, so the two looked like different accounts and the statement was cut in two (flagged: first page marker missing). The other was the letter with the stray period. On the 240 test packets the final script got 60, 60, 59 and 59 of 60.</p>
<p>Speed is all OCR. Each Tesseract call ran on a single core, with nine pages read in parallel on a 10 core laptop, and took about 0.8 seconds a page for clean renders and faxes and about 1.35 seconds for scans and phone photos. Labeling and splitting took a quarter of a millisecond per page. A 16 page packet takes 13 to 22 seconds read one page at a time, and pages can be read in parallel.</p>

<h2>What is the script?</h2>
<p>It needs Tesseract 5 and three Python packages. PyMuPDF is only needed to read and write PDFs.</p>
<pre><code>brew install tesseract          # or: sudo apt-get install tesseract-ocr
pip install opencv-python-headless numpy pymupdf
python split_packet.py packet.pdf</code></pre>
<p>For a PDF it writes a folder with one PDF per document (01_bank_statement.pdf, 02_pay_stub.pdf and so on) and a CSV with each document's type, first and last page, page count and flags. For a folder of page images or multi-page TIFFs it writes only the CSV. We ran it end to end on three packets from the fresh set, two as PDFs and one as a folder of images, and its page ranges matched the true documents exactly. Edit TYPES, ONE_PAGE, FIRST_PAGE, KEYS and PERIOD with the wording of your own documents before you trust it. The account key expects a masked number such as XXXXXX1234. If your statements print the full number, change the pattern and test it on your own scans: when we let it take the last four digits of any number, OCR's stray extra digits cut two statements in two.</p>
<pre><code>"""Split a scanned loan packet into separate documents.

Usage:
  python split_packet.py packet.pdf            # writes packet_split/ with one PDF per document
  python split_packet.py pages_folder/         # page images (or multi-page TIFFs) in page order; CSV only

Needs: Tesseract 5 on PATH, opencv-python, numpy; PyMuPDF (pip install pymupdf) for PDF input.
Every page is OCRed, even in PDFs with a text layer, and labeled with a document type. A new
document starts when the page says "Page 1", the type changes, a one page type repeats, the
account or statement period changes, or a first page marker appears. Blank pages and pages
with no known type stay with the page before. Checks flag documents a person should look at
before the packet goes to underwriting. Edit TYPES, ONE_PAGE, FIRST_PAGE, KEYS and PERIOD with
the wording of your own documents.
"""
import csv, math, os, re, subprocess, sys, tempfile
from collections import Counter
import cv2
import numpy as np

TYPES = {  # phrases that identify each document type (lowercase, OCR text)
    "bank_statement": [r"statement period", r"beginning balance", r"ending balance", r"account summary",
                       r"transaction details", r"deposits and credits", r"withdrawals", r"member fdic", r"account ending"],
    "pay_stub": [r"earnings statement", r"pay statement", r"payroll advice", r"pay date", r"pay period",
                 r"net pay", r"gross pay", r"year to date"],
    "w2": [r"\\bw-?2\\b", r"wage and tax statement", r"employer identification", r"wages, tips", r"social security wages",
           r"medicare wages"],
    "id": [r"driver licen[sc]e", r"identification card", r"\\bdob\\b", r"\\bexp\\b", r"\\bclass\\b", r"\\bsex\\b"],
    "utility_bill": [r"amount due", r"service address", r"billing date", r"usage history", r"\\bkwh\\b", r"due date"],
    "tax_return": [r"form 1040", r"individual income tax return", r"adjusted gross income", r"taxable income",
                   r"total income", r"sign here", r"amount you owe"],
    "letter": [r"to whom it may concern", r"dear (loan officer|underwriter)", r"sincerely", r"letter of explanation",
               r"gift letter", r"no repayment"],
    "loan_application": [r"loan application", r"borrower information", r"declarations", r"assets and liabilities",
                         r"residential loan"],
}
ONE_PAGE = {"pay_stub", "w2", "id", "letter"}  # each page of these types is its own document
FIRST_PAGE = {  # markers that appear only on a document's first page
    "bank_statement": r"account summary|beginning balance|account statement",
    "utility_bill": r"amount due",
    "tax_return": r"individual income tax return",
    "loan_application": r"section 1\\b|borrower information",
}
KEYS = {  # what must stay the same across pages of one document
    "bank_statement": r"(?:account (?:number|ending)|acct)\\D{0,14}(\\d{4})\\b",  # expects a masked number: XXXXXX1234
    "pay_stub": r"pay date\\W{0,3}(\\d{1,2}/\\d{1,2}/\\d{4})",
    "w2": r"\\b(\\d{2}-\\d{7})\\b",
    "utility_bill": r"account(?: number)?\\W{0,3}(\\d{4} ?\\d{4} ?\\d{2})\\b",
}
PERIOD = r"statement period\\W{0,3}([a-z]{3}) ?\\d{1,2},? ?(\\d{4})"
DIGIT = str.maketrans({"l": "1", "i": "1", "|": "1", "o": "0"})
FEW_SHARED = 0.35  # an untyped page sharing less than this with the page before gets flagged


def ocr(img):
    """Tesseract TSV words for one page image (grayscale array)."""
    bg = cv2.GaussianBlur(cv2.morphologyEx(img, cv2.MORPH_CLOSE, np.ones((25, 25), np.uint8)), (0, 0), 15)
    if np.percentile(bg, 95) - np.percentile(bg, 5) &gt; 40:  # uneven light, as in phone photos
        img = cv2.divide(img, bg, scale=255)
    args = []
    if img.shape[1] &lt; 1300:  # small images read better enlarged
        img = cv2.resize(img, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
        args = ["--dpi", str(int(img.shape[1] / 8.5))]
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as f:
        cv2.imwrite(f.name, img)
    run = subprocess.run(["tesseract", f.name, "stdout", "--psm", "3"] + args + ["tsv"],
                         capture_output=True, text=True)
    os.unlink(f.name)
    if run.returncode != 0:
        raise RuntimeError("tesseract failed: " + run.stderr.strip()[-300:])
    out = run.stdout
    words = []
    for row in out.splitlines()[1:]:
        c = row.split("\\t")
        if len(c) == 12 and c[11].strip() and float(c[10]) &gt;= 0:
            words.append({"line": (c[2], c[3], c[4]), "top": int(c[7]), "h": int(c[9]),
                          "conf": float(c[10]), "text": c[11]})
    return words, img.shape[0]


def features(words, height):
    """Type, page number, key and markers for one page."""
    lines = {}
    for w in words:
        lines.setdefault(w["line"], []).append(w)
    lines = [(min(w["top"] for w in ws), " ".join(w["text"] for w in ws).lower()) for ws in lines.values()]
    text = " ".join(t for _, t in sorted(lines))
    edge = " ".join(t for y, t in lines if y &lt; 0.12 * height or y &gt; 0.85 * height)
    solid = sum(len(re.sub(r"[^a-z0-9]", "", w["text"].lower())) for w in words if w["conf"] &gt;= 40)
    f = {"blank": solid &lt; 25, "type": None, "page": None, "of": None, "key": None, "first": False, "period": None,
         "words": Counter(re.findall(r"[a-z]{3,}", text))}
    if f["blank"]:
        return f
    scores = {t: sum(bool(re.search(p, text)) for p in ps) for t, ps in TYPES.items()}
    best = max(scores, key=scores.get)
    if scores[best] &gt;= 2:
        f["type"] = best
    m = re.search(r"page\\s*([0-9lio|]{1,2})\\s*(?:of|/)\\s*([0-9lio|]{1,2})\\b", edge) or \\
        re.search(r"\\b([0-9lio|]{1,2})\\s+of\\s+([0-9lio|]{1,2})\\b", edge)
    if m:
        f["page"], f["of"] = int(m.group(1).translate(DIGIT)), int(m.group(2).translate(DIGIT))
    else:
        m = re.search(r"page\\s*([0-9lio|]{1,2})\\b", edge)
        if m:
            f["page"] = int(m.group(1).translate(DIGIT))
    if f["of"] and f["page"] &gt; f["of"]:  # "Page 11 of 3" is a misread "Page 1 of 3"
        f["page"] = f["of"] = None
    t = f["type"]
    if t in KEYS:
        m = re.search(KEYS[t], text)
        f["key"] = m.group(1).replace(" ", "") if m else None
    if t == "bank_statement":
        m = re.search(PERIOD, text)
        f["period"] = m.group(1) + m.group(2) if m else None
    if t in FIRST_PAGE:
        f["first"] = bool(re.search(FIRST_PAGE[t], text))
    return f


def differs(f, cur, k):
    return bool(f[k] and cur[k] and f[k] != cur[k])


def overlap(a, b):
    dot = sum(n * b[w] for w, n in a.items() if w in b)
    na, nb = math.sqrt(sum(n * n for n in a.values())), math.sqrt(sum(n * n for n in b.values()))
    return dot / (na * nb) if na and nb else 0.0


def split(pages):
    """pages: list of feature dicts in packet order. Returns documents with page indexes and flags."""
    docs = []
    prev = None  # last non-blank page
    for i, f in enumerate(pages):
        cur = docs[-1] if docs else None
        if cur is None:
            start = True
        elif f["blank"]:
            start = False  # blank back side: keep with the page before it
        elif f["page"] == 1:
            start = True
        elif f["page"] and f["page"] &gt; 1:
            # a first page of a different type, account or period outranks a page number OCR may have misread
            start = f["first"] and bool(cur["type"]) and (
                f["type"] != cur["type"] or differs(f, cur, "key") or differs(f, cur, "period"))
        elif f["type"] is None:
            start = False  # unreadable or untyped page: attach, and let the checks speak
        elif f["type"] != cur["type"]:
            start = cur["type"] is not None or f["first"]  # an untyped start takes the type of its next page
        elif f["type"] in ONE_PAGE:
            start = True
        elif differs(f, cur, "key") or differs(f, cur, "period"):
            start = True
        else:
            start = f["first"]
        if start:
            docs.append({"pages": [i], "type": f["type"], "key": f["key"], "period": f["period"],
                         "of": f["of"], "first": f["first"], "odd": []})
        else:
            cur["pages"].append(i)
            for k in ("type", "key", "period", "of"):
                cur[k] = cur[k] or f[k]
            if not f["blank"] and f["type"] is None and not f["page"] and prev is not None \\
                    and overlap(f["words"], prev["words"]) &lt; FEW_SHARED:
                cur["odd"].append(i)  # attached, but it does not look like the page before it
        if not f["blank"]:
            prev = f
    for d in docs:
        d["flags"] = checks(d, pages)
    seen = {}
    for d in docs:
        if d["type"] == "bank_statement" and d["key"] and d["period"]:
            k = (d["key"], d["period"])
            if k in seen:
                d["flags"].append("same account and period as an earlier statement")
            seen[k] = True
    return docs


def checks(d, pages):
    flags = []
    real = [i for i in d["pages"] if not pages[i]["blank"]]
    nums = [pages[i]["page"] for i in real if pages[i]["page"]]
    if d["type"] is None:
        flags.append("document type not recognized")
    if d["of"] and len(real) != d["of"]:
        flags.append(f"footer says {d['of']} pages, found {len(real)}")
    if nums and nums != sorted(nums):
        flags.append("page numbers out of order")
    if real and d["type"] in FIRST_PAGE and not pages[real[0]]["first"]:
        flags.append("first page marker missing")
    if d["type"] in ONE_PAGE and len(real) &gt; 1:
        flags.append(f"{len(real)} pages for a one page document")
    for i in d["odd"]:
        flags.append(f"page {i + 1} has no known type and shares few words with the page before")
    return flags


def load_pages(src):
    if src.lower().endswith(".pdf"):
        import pymupdf
        for pg in pymupdf.open(src):
            pix = pg.get_pixmap(dpi=200, colorspace=pymupdf.csGRAY)
            yield np.frombuffer(pix.samples, np.uint8).reshape(pix.height, pix.width)
    else:
        order = lambda n: [int(x) if x.isdigit() else x for x in re.split(r"(\\d+)", n)]  # page2 before page10
        for name in sorted(os.listdir(src), key=order):
            path = os.path.join(src, name)
            if name.lower().endswith((".tif", ".tiff")):  # fax TIFFs often hold several pages
                ok, frames = cv2.imreadmulti(path, flags=cv2.IMREAD_GRAYSCALE)
                if not ok:
                    raise ValueError(f"cannot read {name}")
                yield from frames
            elif name.lower().endswith((".png", ".jpg", ".jpeg")):
                img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
                if img is None:
                    raise ValueError(f"cannot read {name}")
                yield img


def main(src):
    pages = [features(*ocr(img)) for img in load_pages(src)]
    if not pages:
        sys.exit(f"no pages found in {src}")
    docs = split(pages)
    is_pdf = src.lower().endswith(".pdf")
    base = os.path.splitext(src)[0] if is_pdf else os.path.abspath(src).rstrip("/")
    with open(base + "_split.csv", "w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["document", "type", "first_page", "last_page", "pages", "flags"])
        for n, d in enumerate(docs, 1):
            w.writerow([n, d["type"] or "unknown", d["pages"][0] + 1, d["pages"][-1] + 1, len(d["pages"]),
                        "; ".join(d["flags"])])
    if is_pdf:
        import pymupdf
        pdf = pymupdf.open(src)
        folder = base + "_split"
        os.makedirs(folder, exist_ok=True)
        for old in os.listdir(folder):  # clear this script's files from an earlier run
            if re.fullmatch(r"\\d{2}_[a-z_0-9]+\\.pdf", old):
                os.remove(os.path.join(folder, old))
        for n, d in enumerate(docs, 1):
            out = pymupdf.open()
            out.insert_pdf(pdf, from_page=d["pages"][0], to_page=d["pages"][-1])
            out.save(os.path.join(folder, f"{n:02d}_{d['type'] or 'unknown'}.pdf"))
    flagged = sum(bool(d["flags"]) for d in docs)
    print(f"{len(pages)} pages, {len(docs)} documents, {flagged} flagged for review -&gt; {base}_split.csv")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: python split_packet.py packet.pdf | pages_folder/")
    main(sys.argv[1])</code></pre>

<h2>What did this test not cover?</h2>
<ul>
  <li><strong>Real documents.</strong> Every page was generated, with eight document types and a few layouts each. Real packets have more types, more layouts, handwriting and stamps, so expect more untyped pages and more flags than we saw.</li>
  <li><strong>Shuffled or rotated pages.</strong> Pages inside each document were in order and upright. A page scanned upside down needs an orientation step first, covered in our guide to <a href="/resources/blogs/ocr-upside-down-sideways-pages">OCR on upside down and sideways pages</a>.</li>
  <li><strong>Interleaved documents.</strong> We never put a page of one document in the middle of another.</li>
  <li><strong>Documents that break the one page rule.</strong> Every ID and letter we generated was one page. An ID scanned front and back, a two page letter, or a W-2 file holding Copies B, C and 2 on separate pages will be flagged or cut apart. Move those types out of ONE_PAGE if your packets contain them.</li>
  <li><strong>Two borrowers.</strong> Pay stubs from two co-borrowers would still split, because each pay stub is one page, but nothing here checks which borrower a document belongs to.</li>
  <li><strong>A comparison with language models.</strong> We did not run one on these packets. In AWS's <a href="https://arxiv.org/abs/2602.15958" rel="nofollow noopener">DocSplit benchmark</a>, the best of five models tested put 0.7855 of pages in both the right type and the right document on in order packets of mixed business documents, and 0.6286 when pages were shuffled, and grouping pages, not ordering them, was the hard part. Those were RVL-CDIP business documents with no bank statements, pay stubs, W-2s or IDs, and a page with the wrong type counts as wrong there. The script's 99.4% of pages in exactly the right document with the right type on our fresh set came from generated, in order packets with wording the rules knew, so the two numbers are not comparable.</li>
</ul>

<h2>What should you do with this?</h2>
<p>If packets reach your team as one PDF, split them before anything else reads them, because every later step assumes one document per file. Start with the script and your own phrase lists, keep every signal even when one seems redundant, attach blank and untyped pages to the page before, and send flagged packets to a person rather than lowering the bar. Measure it on a few dozen of your own packets where you know the answer, and count merged documents separately from cut ones. A merged statement hides a month, and that is the error an underwriter will not see.</p>
<p>Then check what comes out of each document: <a href="/resources/blogs/pay-stub-income-verification-ocr">pay stub income verification</a>, <a href="/resources/blogs/w2-1099-tax-form-ocr-underwriting">W-2 and 1099 checks for underwriting</a>, and the <a href="/resources/blogs/proof-of-address-verification">proof of address checks</a> for utility bills. Our guide to <a href="/resources/blogs/document-classification-software">document classification software</a> covers the labeling step on its own, and the <a href="/resources/blogs/mortgage-ocr">mortgage OCR guide</a> covers the larger packets that mortgages bring.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI is HyperVerge's document intelligence API for SMB lending and fintech. Its classification identifies the type of each document, such as a bank statement, invoice, pay stub or ID, and it is included in the base per page price, which starts from $0.02 per page with volume discounts above 100,000 pages a month. On its own 2026 benchmark of 1,700 real documents it scored 91% on multi-page bank statement tables. That benchmark is separate from the tests in this guide, which use Tesseract, so the numbers are not comparable. Whichever classifier labels your pages, ours included, the rules and checks here still decide where each document starts and ends. Access starts with a demo, then a free 30 day trial for qualified lenders. Bring real documents to the demo, and see our <a href="/use-cases/loan-verification">loan verification</a> page for the rest of the workflow.</p>

  `,
  image: "/images/ocr-in-finance.png",
  featuredImage: "/images/ocr-in-finance.png",
  category: "OCR How-To",
  date: "November 25, 2026",
  datePublished: "2026-11-25T00:00:00.000Z",
  dateModified: "2026-11-25T00:00:00.000Z",
  last_updated: "November 25, 2026",
  readTime: "18 min read",
  author: nupuraUghade,
  primary_keyword: "split loan packet pdf",
  secondary_keywords: [
    "split pdf into separate documents",
    "document splitting ocr",
    "split pdf by document type",
    "loan packet processing",
    "separate documents in a scanned pdf"
  ],
  tags: ["OCR", "lending", "document classification", "bank statements"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How do I split a PDF into separate documents automatically?",
      answer:
        "OCR each page, label it with a document type from phrases that type always prints, and start a new document on \"Page 1\", a type change, a one page document type, a new account number or period, or a first page marker. Attach blank and untyped pages to the page before. In our test on 120 generated loan packets this split 118 exactly, against 8 for splitting on type changes alone.",
    },
    {
      question: "Why does splitting by document type merge my bank statements?",
      answer:
        "Because two statements in a row have the same type, so a type label cannot see the line between them. In our test, splitting on type changes found 0 of 229 boundaries between same type documents. Use the statement period, the account number, \"Page 1 of N\" and first page markers such as the account summary instead.",
    },
    {
      question: "Can I split a loan packet using page numbers alone?",
      answer:
        "No. Many documents print no page numbers (none of our generated pay stubs did, though some real ones print \"Page 1 of 1\"), and OCR can misread \"Page 1\" as \"Page 11\". Page numbers followed by type changes got 25 of 120 fresh packets right. They work as one signal among several, with a check that ignores impossible numbers.",
    },
    {
      question: "What should I do with blank pages in a scanned loan packet?",
      answer:
        "Attach them to the page before. In duplex scans they are the back sides of single sided pages. Treated as their own pages they hide boundaries or cut documents apart. Our script treats a page with fewer than 25 confident characters as blank and found every boundary that followed a blank page in the fresh test set.",
    },
    {
      question: "How do I know a loan packet was split correctly?",
      answer:
        "Check each document: does the page count match the footer's \"of N\", are page numbers in order, does a statement start with its first page, does a one page document have extra pages, does an account and month appear twice, and do attached untyped pages look like the page before. These checks flagged both wrong packets in our fresh set of 120.",
    },
    {
      question: "Will keyword rules work on my lender's documents?",
      answer:
        "Only if the phrases come from your documents. With wording our rules had never seen, such as \"Opening Balance\" and \"Check Date\", the script split 0 of 120 packets correctly, though its checks flagged all 120. Collect 20 to 30 real examples of each document type and build the phrase lists from them.",
    },
  ],
}
