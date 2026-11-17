import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog47: BlogPost = {
  id: "new-47",
  title: "Extract Tables From Scanned PDFs: 300 Tables Tested",
  slug: "extract-tables-from-scanned-pdf",
  excerpt:
    "Erasing ruled lines before OCR was the difference between 99.7% and 0.0%. We scanned 300 tables and scored 34,680 cells to see which extraction methods hold up.",
  description:
    "How to extract a table from a scanned PDF: we tested 300 tables and 34,680 cells. Table tools on the OCR layer failed. Word positions and a sum check worked.",
  metaTag: "How to Extract Tables From a Scanned PDF, Tested (2026)",
  summary:
    "In Tesseract 5.5.2, PyMuPDF 1.26.5 and OpenCV tests on 300 generated tables (6,936 rows, 34,680 cells; ruled, plain, merged header and multi-page; native, scan and phone photo), a word position script read 99.9% of cells on native files, 99.6% on scans and 97.5% on phone photos. PyMuPDF's table finder on a Tesseract text layer read 14.3% of scan cells and 5.8% of phone cells. Erasing ruled lines before OCR was worth 99.7% versus 0.0% on ruled scans. A quantity times price and total check flagged tables holding 118 of the 120 wrong numbers, and could not see wrong item codes or descriptions.",
  content: `
<p>To get a table out of a scanned PDF, read the page with OCR and keep the position of every word, remove any ruled lines first, then rebuild the rows and columns yourself from where the words sit. Running a table tool over the OCR text layer did not work in our test. We built 300 invoice style tables, scanned or photographed 200 of them, and scored 34,680 cells. The word position approach got 99.6% of cells right on scans and 97.5% on phone photos. PyMuPDF's table finder, run on the OCR text layer, got 14.3% and 5.8%.</p>
<p>The same test shows two more things most guides skip. Erasing the table's lines before OCR was the difference between 99.7% and 0.0% on ruled tables. And a cheap arithmetic check (quantity times price equals amount, amounts add up to the total) caught 118 of the 120 wrong numbers, though it cannot see a misread product name. Below are the numbers, the full script, and what the test did not cover.</p>

<h2>How do you extract a table from a scanned PDF?</h2>
<p>Do five things in order. First, deskew the page, because a table that is tilted by one degree puts the end of a row at a different height than its start. Second, erase the ruled lines, so the OCR engine does not try to read them as characters. Third, run OCR and keep the box of every word, not just the text. Fourth, group words into rows by their vertical position, and find the column breaks from the gaps that run down the whole table. Fifth, check the result with whatever arithmetic the table allows.</p>
<p>The steps that most guides describe, "run OCR to make the PDF searchable, then use a table library", leave out the part that matters. A table library such as PyMuPDF's finder reads the text layer a scan has been given. That layer comes from a reading tool that is built for lines of prose, so the spacing that marks a column is often gone. Our numbers for this are in the next sections. If you are new to the difference between a page that has text and a page that is a picture, start with our guide to <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDFs and image PDFs</a>.</p>

<h2>How did we test table extraction?</h2>
<p>We generated 300 tables, each with the columns Item, Description, Qty, Unit price and Amount, plus a total row. Every table had a known right answer. In all there were 6,936 body rows and 34,680 cells. The descriptions were one to four random dictionary words, and the numbers were random, with the amount always equal to quantity times price.</p>
<p>There were four layouts, with 25 tables of each at each quality level:</p>
<ul>
<li><strong>Ruled:</strong> a grid of lines around every cell and a shaded header.</li>
<li><strong>Plain:</strong> the same table with no lines at all, only white space between columns.</li>
<li><strong>Merged:</strong> ruled, with a "Pricing" heading that spans the Qty and Unit price columns.</li>
<li><strong>Multi-page:</strong> plain, 40 rows, with the header only on page one, 28 rows on page one and the rest plus the total on page two.</li>
</ul>
<p>There were three quality levels. <strong>Native</strong> files kept their real text. <strong>Scan</strong> files were rendered to a picture at 200 DPI, with blur, noise, a tilt of up to 0.7 degrees and JPEG at quality 70. <strong>Phone</strong> files were 150 DPI, blurrier and noisier, tilted up to 1.5 degrees, with uneven lighting and JPEG at quality 50. That is 4 layouts, 3 quality levels and 25 tables each, or 300 tables.</p>
<p>We scored a cell as right only if it matched the truth exactly, character for character. A table counts as fully right only when every cell is right. We used Tesseract 5.5.2, PyMuPDF 1.26.5 and OpenCV 5.0.0. These are our own tests with open source tools, not a DocsAPI result.</p>

<h2>Which extraction method got the cells right?</h2>
<p>The word position script, which is shown below, won on every quality level. The table finder in PyMuPDF did well on native files with lines and badly everywhere else. Splitting OCR text lines on spaces, the simplest approach, got the item code right about half the time and almost nothing else.</p>
<table>
  <thead><tr><th>Method</th><th>Files it read</th><th>Cells right</th><th>Tables fully right</th></tr></thead>
  <tbody>
    <tr><td>PyMuPDF table finder, native text</td><td>100 native</td><td>75.8%</td><td>70 of 100</td></tr>
    <tr><td>Word position script, native text</td><td>100 native</td><td>99.9%</td><td>97 of 100</td></tr>
    <tr><td>PyMuPDF table finder on a Tesseract text layer</td><td>100 scans</td><td>14.3%</td><td>3 of 100</td></tr>
    <tr><td>Split each OCR text line on spaces</td><td>100 scans</td><td>24.7%</td><td>0 of 100</td></tr>
    <tr><td>Word position script</td><td>100 scans</td><td>99.6%</td><td>63 of 100</td></tr>
    <tr><td>PyMuPDF table finder on a Tesseract text layer</td><td>100 phone photos</td><td>5.8%</td><td>1 of 100</td></tr>
    <tr><td>Split each OCR text line on spaces</td><td>100 phone photos</td><td>24.1%</td><td>0 of 100</td></tr>
    <tr><td>Word position script</td><td>100 phone photos</td><td>97.5%</td><td>11 of 100</td></tr>
  </tbody>
</table>
<p>Two readings of this table matter. First, the per cell number looks high even where the table level number is low. A table of 100 cells at 99% will have one wrong cell, and one wrong cell is a wrong table if the cell is an amount. Second, the phone photos cost the script about 2 points of cell accuracy but dropped fully right tables from 63 of 100 to 11 of 100. Plan on a review step for anything that comes from a camera.</p>

<h2>Why does a table tool fail on the OCR text layer?</h2>
<p>We ran PyMuPDF's find_tables on the invisible text layer that Tesseract adds to a scanned PDF. On ruled and merged scans it got 0.0% of the cells. In the file we opened, the layer was there and held words, but the finder returned a header row split into fragments such as "I", "t e m" and "D e s c", followed by empty rows. Our reading is that the grid lines are part of the picture and not drawn objects, so the finder has none to follow, and the invisible words are placed for searching, not for rebuilding a grid. We did not test that explanation any further.</p>
<p>On plain scans the same approach reached 27.2%, and on plain phone photos 8.7%. This is one table tool paired with one OCR engine, so treat it as a warning about the pairing and not a ranking of tools. We did not test Camelot, pdfplumber or Tabula. All three, like PyMuPDF's finder, are built for PDFs that already hold real text and real drawn lines. When your input is a picture, the work is in the steps before the table tool.</p>

<h2>Do you need to remove the ruled lines before OCR?</h2>
<p>Yes. This was the biggest single effect in the test. We ran the same word position script with and without a line removal step on the 100 ruled and merged scans and phone photos. With the lines erased it read 99.7% of cells on ruled scans and 97.3% on ruled phone photos. Without erasing them it read 0.0% on all 100 files.</p>
<p>What happens without it is easy to see. Tesseract reads the grid as characters, and the output for one row looked like this: "[cases [27220 | | sephicvreweer taagbetorspooresrap |S | 198 |". The vertical lines are read as bars and brackets, they join neighbouring cells into one string of text, and the gaps that tell you where a column ends are filled with ink. The script finds long horizontal and vertical runs of dark pixels with a morphological open, widens them a little and paints them white. Our post on <a href="/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts">which preprocessing steps help and which hurt</a> covers the other cleanup steps.</p>

<h2>Why do tables in real, searchable PDFs fail too?</h2>
<p>Native PDFs were not safe either. PyMuPDF's finder read every ruled and merged native table right (50 of 50), but only 16 of 25 plain tables and 4 of 25 multi-page tables, which is 71.8% and 56.3% of cells. In the plain files we opened, it put the boundary between Qty and Unit price in the middle of the heading text, giving cells such as "Qty Un" and "it price". In the multi-page files page two has no header, which probably left it with nothing to anchor its columns to.</p>
<p>The reason is the same as for scans. With no lines, a table tool has to guess where columns are from the text alone. The guess works when the spacing is regular and fails when it is not. The word position script makes the same kind of guess, but it does it with a rule that does not depend on a header: a column break is a stretch of at least 1.2 word heights that is empty in at least 90% of the rows. That rule works on page two of a table as well as on page one, because it never looks for a heading.</p>

<h2>How does the word position script work?</h2>
<p>The script below is the one we ran, unchanged. It needs Tesseract on your path and three Python packages (opencv-python-headless, numpy and pymupdf). It uses the real text layer when a page has one, and renders and reads the page when it does not.</p>
<pre><code>import os, subprocess, tempfile
import cv2, numpy as np, fitz  # pip install opencv-python-headless numpy pymupdf; Tesseract must be on PATH

def deskew(gray):
    small = cv2.resize(gray, None, fx=0.25, fy=0.25, interpolation=cv2.INTER_AREA)
    ink = (small &lt; 160).astype(np.float32)
    h, w = ink.shape
    best, best_score = 0.0, -1.0
    for a in np.arange(-3, 3.01, 0.25):
        m = cv2.getRotationMatrix2D((w / 2, h / 2), float(a), 1.0)
        score = cv2.warpAffine(ink, m, (w, h)).sum(axis=1).var()
        if score &gt; best_score: best, best_score = float(a), score
    H, W = gray.shape
    m = cv2.getRotationMatrix2D((W / 2, H / 2), best, 1.0)
    return cv2.warpAffine(gray, m, (W, H), flags=cv2.INTER_LINEAR, borderValue=255)

def remove_rules(gray):
    bw = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]
    h, w = bw.shape
    horiz = cv2.morphologyEx(bw, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_RECT, (w // 20, 1)))
    vert = cv2.morphologyEx(bw, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_RECT, (1, h // 40)))
    lines = cv2.dilate(cv2.bitwise_or(horiz, vert), np.ones((3, 3), np.uint8))
    out = gray.copy(); out[lines &gt; 0] = 255
    return out

def ocr_words(gray):
    fd, png = tempfile.mkstemp(suffix=".png"); os.close(fd); cv2.imwrite(png, gray)
    tsv = subprocess.run(["tesseract", png, "stdout", "--psm", "6", "--dpi", "200", "tsv"],
                         capture_output=True, text=True).stdout
    os.remove(png); words = []
    for line in tsv.splitlines()[1:]:
        f = line.split("\\t")
        if len(f) == 12 and f[11].strip() and float(f[10]) &gt;= 0:
            x, y, w, h = int(f[6]), int(f[7]), int(f[8]), int(f[9])
            words.append((x, y, x + w, y + h, f[11].strip()))
    return words

def page_words(page, clean_rules=True):
    if len(page.get_text().strip()) &gt;= 25:                 # real text layer: use it
        return [(w[0], w[1], w[2], w[3], w[4]) for w in page.get_text("words")]
    pix = page.get_pixmap(dpi=200, colorspace=fitz.csGRAY)  # image page: OCR it
    gray = np.frombuffer(pix.samples, np.uint8).reshape(pix.h, pix.w).copy()
    gray = deskew(gray)
    if clean_rules: gray = remove_rules(gray)
    return ocr_words(gray)

def words_to_rows(words):
    mh = sorted(w[3] - w[1] for w in words)[len(words) // 2]      # median word height
    words = sorted(words, key=lambda w: (w[1] + w[3]) / 2)
    lines, cur = [], []
    for w in words:                                                # group words into text lines by y
        y = (w[1] + w[3]) / 2
        if cur and abs(y - np.mean([(v[1] + v[3]) / 2 for v in cur])) &gt; 0.6 * mh:
            lines.append(cur); cur = []
        cur.append(w)
    if cur: lines.append(cur)
    width = int(max(w[2] for w in words)) + 2                      # where is ink in most lines? gaps = column breaks
    cover = np.zeros(width)
    for ln in lines:
        mask = np.zeros(width, bool)
        for w in ln: mask[int(w[0]):int(w[2]) + 1] = True
        cover += mask
    empty = cover &lt; 0.1 * len(lines)
    inked = np.where(~empty)[0]; first, last = int(inked[0]), int(inked[-1])   # ignore page margins
    cuts, run = [], 0
    for x in range(first, last + 1):
        run = run + 1 if empty[x] else 0
        if run == int(1.2 * mh): cuts.append(x - run // 2)         # a gap wider than ~1.2 word heights
    edges = [0] + cuts + [width + 1]
    rows = []
    for ln in lines:
        cells = [[] for _ in range(len(edges) - 1)]
        for w in sorted(ln, key=lambda w: w[0]):
            c = next(i for i in range(len(edges) - 1) if edges[i] &lt;= (w[0] + w[2]) / 2 &lt; edges[i + 1])
            cells[c].append(w[4])
        rows.append([" ".join(c) for c in cells])
    return rows

def table_rows(pdf_path, clean_rules=True):
    rows = []
    for page in fitz.open(pdf_path):
        w = page_words(page, clean_rules)
        if w: rows += words_to_rows(w)
    return [r for r in rows if any(ch.isdigit() for ch in "".join(r))]   # drops header and title lines

def check_invoice_rows(rows):
    """Cheap sanity check: qty x unit price must equal amount, and amounts must add up to the total."""
    num = lambda s: float(s.replace(",", "").replace("$", ""))
    bad, amounts, total = [], [], None
    for r in rows:
        try:
            if "total" in r[1].lower(): total = num(r[-1]); continue
            q, p, a = num(r[2]), num(r[3]), num(r[4])
            amounts.append(a)
            if abs(q * p - a) &gt; 0.005: bad.append(r)
        except (ValueError, IndexError):
            bad.append(r)
    if total is not None and abs(sum(amounts) - total) &gt; 0.005: bad.append(["total", str(total)])
    return bad</code></pre>
<p>Three details do most of the work. The text lines are found by grouping words whose centres lie within 0.6 of a median word height of each other, so a tilted page needs the deskew step first. Column breaks come from a count, over all lines, of how many have ink at each horizontal position, so one stray mark or one wide heading does not bridge two columns. And a word belongs to the column that holds its centre, which keeps a long description from leaking into the next column as long as the gap is there.</p>
<p>The "Pricing" heading that spans two columns did not break this, which is why merged tables scored the same as ruled ones (99.7% on scans). A merged heading could have joined the Qty and Unit price columns if we had looked for gaps line by line, because the heading covers the space between them. Counting over all lines, and requiring the gap to be empty in 90% of them, ignores a single line that spans a break.</p>

<h2>How accurate is each layout at each quality level?</h2>
<p>The layout mattered less than the quality of the image. This table is the word position script on all 12 combinations, with the number of fully right tables out of 25.</p>
<table>
  <thead><tr><th>Layout</th><th>Native</th><th>Scan</th><th>Phone</th></tr></thead>
  <tbody>
    <tr><td>Ruled</td><td>100.0% (25)</td><td>99.7% (19)</td><td>97.3% (4)</td></tr>
    <tr><td>Plain</td><td>100.0% (25)</td><td>99.5% (16)</td><td>97.4% (5)</td></tr>
    <tr><td>Merged header</td><td>100.0% (25)</td><td>99.7% (19)</td><td>97.4% (2)</td></tr>
    <tr><td>Multi-page</td><td>99.9% (22)</td><td>99.5% (9)</td><td>97.6% (0)</td></tr>
  </tbody>
</table>
<p>The multi-page tables are the weakest because they are twice as long. A 40 row table has 200 cells, so the same per cell error rate leaves fewer tables untouched. None of the 25 phone photos of a multi-page table came out fully right, even though 97.6% of their cells did.</p>

<h2>Which cells go wrong?</h2>
<p>Words and codes went wrong far more often than numbers. Across all 300 tables the script got 351 cells wrong. 172 were descriptions, 59 were item codes, 57 were quantities, 51 were unit prices and 12 were amounts. Native files had 6 wrong cells in all. Scans had 51 and phone photos had 294, an average of 2.9 wrong cells per phone table.</p>
<p>The errors are the usual look-alike ones. Some examples from the phone photos: "D-6582" read as "0-6582", "E-7425" read as an euro sign followed by "-7425", "cycloid" as "cycioid", "rubify" as "rubity", "53,150.52" read with a section sign in place of the 5, and "433.90" read as "433,90". A comma for a full stop is the kind of error that passes a glance and breaks a number parser. Our guide to <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors</a> goes through these look-alike pairs.</p>

<h2>Can you catch wrong cells automatically?</h2>
<p>For the numbers, yes. A table of line items has arithmetic built in, and the script includes a short check for it: quantity times unit price must equal the amount on each row, and the amounts must add up to the total row. Any row that does not parse as numbers is also flagged.</p>
<p>Across the 300 tables, 129 had at least one wrong cell and the check flagged 88 of them. Of the 120 wrong numbers (quantities, prices and amounts together), 118 were in a table the check flagged. The 41 tables it missed had a different problem. In 39 of them every error was in an item code or a description, which no arithmetic can see. Only 2 had a wrong number the check let through. The check also flagged 3 of the 171 tables that were fully right, a false alarm rate of 1.8%.</p>
<p>By quality level, it flagged 3 of the 3 wrong native tables, 32 of 37 wrong scans and 53 of 89 wrong phone photos. Across all levels, the tables it missed were almost all ones with only code or description errors, which it cannot see. Treat the check as a way to catch wrong money, not as proof that the whole table is right.</p>

<h2>What should you do with tables that span pages?</h2>
<p>Run the same column rule on every page and join the rows, as the script does. Do not depend on a repeated header, because many documents print the header once. Check the total on the last page against the sum of all the pages, and not page by page. In our multi-page files the total sat on page two, and the sum check ran over all 40 rows.</p>

<h2>What did this test not cover?</h2>
<p>The tables were synthetic. They used one font (Helvetica at 10 points), five columns, English dictionary words and at least 28 points between columns. Real invoices have logos, stamps, merged body cells, columns that run close together and descriptions that wrap onto a second line. Tighter columns would make the gap rule fail first, and wrapped rows would need a rule for joining a line with no number to the row above it. We tested only PyMuPDF's table finder, and not Camelot, pdfplumber or Tabula. We tested no handwriting and no skew above 1.5 degrees. And the check we ran is specific to line item tables with a quantity, a price and an amount.</p>
<p>These results are from open source tools, and they are not DocsAPI's accuracy. DocsAPI's own 2026 benchmark of 1,700 real documents scored 93% on invoice line items and 91% on multi-page bank statement tables. That benchmark used real documents and a different method, so do not compare it to the numbers above.</p>

<h2>What is a sensible way to handle scanned tables in practice?</h2>
<p>Start with the three checks that cost nothing. Label each page as text or image, because a native page can use the real words directly and a scan cannot. Erase lines and deskew before OCR. And run an arithmetic check on every table that has numbers that must add up. Then send what fails, and any table from a phone photo, to a person for a quick look. For the wider job of reading columns, tables and fields, see our guide to <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">OCR layout analysis and key-value extraction</a>, and for fixed templates, <a href="/resources/blogs/what-is-zonal-ocr">zonal OCR</a>.</p>
<p>If you would rather not maintain this yourself, DocsAPI extracts fields and tables and stitches tables across pages, and it flags low confidence fields for review. Pricing starts at $0.02 per page, and qualified lenders can start with a demo and a free 30-day trial.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "OCR How-To",
  date: "November 16, 2026",
  datePublished: "2026-11-16T00:00:00.000Z",
  dateModified: "2026-11-16T00:00:00.000Z",
  last_updated: "November 16, 2026",
  readTime: "15 min read",
  author: nupuraUghade,
  primary_keyword: "extract tables from scanned pdf",
  secondary_keywords: [
    "ocr table extraction",
    "pdf table to excel",
    "extract table from image",
    "scanned table ocr",
    "multi-page table extraction"
  ],
  tags: ["OCR", "table extraction", "scanned PDF", "invoices"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How do I extract a table from a scanned PDF?",
      answer:
        "Deskew the page, erase any ruled lines, run OCR and keep the position of every word, group the words into rows by height, find the column breaks from gaps that run down the table, and check the numbers with arithmetic. In our test of 300 tables this read 99.6% of cells on scans and 97.5% on phone photos.",
    },
    {
      question: "Can I just OCR the PDF and then use a table library?",
      answer:
        "In our test it did not work. PyMuPDF's table finder run on a Tesseract text layer read 14.3% of cells on scans and 5.8% on phone photos, and 0.0% on scans with ruled lines. We did not test Camelot, pdfplumber or Tabula, which are built for PDFs that already hold real text.",
    },
    {
      question: "Why does OCR fail on tables with lines?",
      answer:
        "Tesseract reads the grid as characters. In our test, the same script read 0.0% of cells on 100 ruled and merged header scans and phone photos when the lines were left in, and 99.7% on ruled scans when they were erased first.",
    },
    {
      question: "How accurate is table extraction from a phone photo?",
      answer:
        "In our test the word position script read 97.5% of cells on phone photos, but only 11 of 100 tables had every cell right, an average of 2.9 wrong cells per table. Send photographed tables to a person for review.",
    },
    {
      question: "How do I check that an extracted table is right?",
      answer:
        "For line items, check that quantity times unit price equals the amount on every row and that the amounts add up to the total. In our test this flagged tables holding 118 of the 120 wrong numbers, with 3 false alarms on 171 correct tables. It cannot see a misread item code or description.",
    },
    {
      question: "How do I extract a table that runs over several pages?",
      answer:
        "Run the same column rule on each page and join the rows, instead of relying on a repeated header. In our 40 row, two page tables with the header on page one only, the script read 99.9% of cells on native files and 99.5% on scans, and the total on page two was checked against all 40 rows.",
    },
  ],
}
