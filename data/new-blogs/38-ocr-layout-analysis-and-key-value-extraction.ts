import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog38: BlogPost = {
  id: "new-38",
  title: "OCR Layout Analysis: How Columns and Tables Break, Measured",
  slug: "ocr-layout-analysis-and-key-value-extraction",
  excerpt:
    "Layout analysis decides what text is a column, a table cell or a field, and it is where OCR goes wrong without anyone noticing. We tested it on 560 bank statement rows per condition: one setting moved the same image from 0% to 100% correct, and a balance check caught most errors.",
  description:
    "OCR layout analysis tested: one setting took a table from 0% to 100% correct, a wrong column mode scrambled 88% of words, and a balance check flagged errors.",
  metaTag: "OCR Layout Analysis: How Tables and Columns Break",
  summary:
    "Layout analysis finds regions, reading order and table structure before characters are read. In our tests the same table image scored 0% or 100% depending on one segmentation setting, a two-column page came back with every word present and 88% of them misplaced, and a running-balance check flagged 85 of 91 statements with errors and none of 69 clean ones.",
  content: `
    <p>Layout analysis is the step where OCR decides what each piece of text is: a column, a heading, a table cell, a label or a value. Key-value extraction then links a label such as "Invoice date" to its value. Plain OCR gives you a stream of words. These two steps turn it into rows and fields a system can use, and in our tests they are where results swing hardest.</p>

    <p>Three measured results, all from Tesseract 5.5.2 on pages with known answers. <strong>First,</strong> a two-column page came back with 100 percent of its words present and 88 percent of them in the wrong place, one setting away from a perfect read. <strong>Second,</strong> the same bank statement table scored 0 percent or 100 percent of rows correct depending on a single page segmentation setting, and which setting worked depended on whether the table had grid lines. <strong>Third,</strong> a running-balance check flagged 85 of the 91 statements that had an OCR error, with no false alarms on 69 clean ones. The rest of this guide shows how we got those numbers and what to do about them.</p>

    <p>Context from our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">1,700-document benchmark</a>, which DocsAPI ran itself: three engines tied at 97 to 99 percent on clean typed English, then scored 64, 79 and 91 percent on multi-page bank statement tables. Recognizing characters was never the difference. Finding the structure was. These tests show why, on the free engine anyone can repeat.</p>

    <h2>How we tested</h2>

    <ul>
      <li><strong>Two-column pages:</strong> 20 synthetic pages with two 3.3 inch columns of 10 point text, at 300 DPI. The correct reading order is left column first, then right.</li>
      <li><strong>Tables:</strong> 20 synthetic bank statements per condition, each with 28 rows of date, description, debit, credit and a running balance, so 560 rows per condition. Some had ruled grid lines and some had none.</li>
      <li><strong>Engine:</strong> Tesseract 5.5.2, English model, on a 10-core Apple M5 Mac. We did not run DocsAPI on these synthetic pages.</li>
      <li><strong>Page segmentation mode (PSM):</strong> Tesseract's setting for how to split a page into regions before reading. Mode 3 is automatic, 4 assumes a single column, 6 assumes a single block, and 11 reads sparse text with no structure.</li>
      <li><strong>Limits:</strong> one font, clean backgrounds, English. Real statements are messier, so use the pattern, not the exact percentages. We test every engine we evaluate on real files for that reason.</li>
    </ul>

    <h2>What does layout analysis do?</h2>

    <p>It splits a page image into regions and gives each a type and an order. A typical result lists a header block, a body in two columns, a table, a footer and a stamp, with coordinates for each. Three jobs matter most: region detection (where the text blocks and tables are), reading order (which block comes first), and region typing (table, paragraph, heading, or something to ignore such as a logo). A failure here is invisible to a character score, as the next test shows.</p>

    <h2>Reading order: every word right, the page unreadable</h2>

    <p>On the 20 two-column pages we ran four approaches and scored each against the correct left-then-right order.</p>

    <table>
      <thead>
        <tr><th>Approach</th><th>Words wrong (in order)</th><th>Words present (any order)</th></tr>
      </thead>
      <tbody>
        <tr><td>Automatic segmentation (mode 3)</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>Find the gap between columns, read each half (mode 6)</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>Single column mode (mode 4)</td><td>88.2%</td><td>100%</td></tr>
        <tr><td>Single block mode (mode 6 on the whole page)</td><td>88.2%</td><td>100%</td></tr>
      </tbody>
    </table>

    <p>The last two rows are the trap. Told the page is one block, the engine read straight across both columns, interleaving a line from the left with a line from the right. Every word was recognized correctly, so a check that asks "did the words come out?" scores 100 percent, while a check of the order scores 12 percent. This is the failure that makes <a href="/resources/blogs/how-to-measure-ocr-accuracy">character-level accuracy</a> a poor guide to whether a document is usable.</p>

    <p>Automatic mode did fine on a clean two-column page. The second approach is worth knowing because it is simple and does not depend on the engine guessing: find the widest empty vertical band near the middle of the page, cut there, and read each half alone.</p>

    <pre><code>import numpy as np

def find_gutter(gray):
    ink = (gray &lt; 160).sum(axis=0)      # dark pixels per pixel column
    w = gray.shape[1]
    lo, hi = int(w * 0.35), int(w * 0.65)
    best_len = best_start = run = start = 0
    for i, v in enumerate(ink[lo:hi]):
        if v == 0:
            if run == 0:
                start = i
            run += 1
            if run &gt; best_len:
                best_len, best_start = run, start
        else:
            run = 0
    return lo + best_start + best_len // 2

cut = find_gutter(gray)
left, right = gray[:, :cut], gray[:, cut:]   # OCR each half separately</code></pre>

    <p>On real scans a few specks will cross the gap, so count a column as empty when it has a handful of dark pixels or fewer, not exactly zero.</p>

    <h2>Tables: the same image scored 0% or 100%</h2>

    <p>For tables we scored a row as correct only if one line of output held both the amount and the running balance, exactly right. That is the minimum for a row you can use. Here is the share of the 560 rows that passed, by segmentation mode and table style.</p>

    <table>
      <thead>
        <tr><th>Mode</th><th>No grid lines</th><th>Ruled grid</th><th>Grid erased first</th></tr>
      </thead>
      <tbody>
        <tr><td>3, automatic</td><td>0%</td><td>100%</td><td>0%</td></tr>
        <tr><td>4, single column</td><td>100%</td><td>100%</td><td>not tested</td></tr>
        <tr><td>6, single block</td><td>100%</td><td>0%</td><td>100%</td></tr>
        <tr><td>11, sparse text</td><td>0%</td><td>0%</td><td>not tested</td></tr>
      </tbody>
    </table>

    <p>There is no gradual middle here. Each cell is all or nothing, and the winner changes with the table style. We looked at the output to see why:</p>

    <ul>
      <li><strong>Automatic mode on a borderless table</strong> read each column as its own block: all the dates, then all the descriptions. The values from one row ended up in different blocks, so no line held an amount and a balance together.</li>
      <li><strong>Sparse mode</strong> reads words with no line structure, so rows never form.</li>
      <li><strong>Single block mode on a ruled table</strong> turned the text into unreadable strings. The grid lines were read as characters, and the text around them came out as unreadable strings.</li>
      <li><strong>Erasing the grid first</strong> (we removed long horizontal and vertical lines with a morphological filter) fixed single block mode on the ruled table. It also broke automatic mode, which then scored 0 percent, the same as on a borderless table.</li>
    </ul>

    <p>Single column mode was the one setting that passed both table styles in this test. That is a result about synthetic tables in one font, not a rule to copy, but the lesson carries: <strong>the segmentation choice is a layout decision, and a wrong one fails completely rather than partly.</strong> A pipeline that handles several table styles has to pick per region, not once for the whole job. That region-by-region choice is what a layout-aware engine does for you, and it is why tables separate engines by 64 to 91 percent in the benchmark while clean text does not.</p>

    <h2>Plain text loses the column</h2>

    <p>Even when the rows come out right, text output drops something a bank statement depends on: which column a number sat in. These are two real lines from our generated statements, as plain OCR returns them.</p>

    <pre><code>10 Feb GROCERY Fuel 11.99 6,821.27
07 Dec PHARMACY Subscription 68.59 6,741.31</code></pre>

    <p>The first is a debit and the second is a credit. In text they have the same shape, because the empty cell leaves no trace. Two things recover the direction. One is position: assign each amount to the nearest column header by its horizontal coordinate. On our clean borderless statements that got the direction right on 560 of 560 rows. The other is arithmetic, which is the next section. Either way you need the positions, not only the text, which is why structured output with coordinates matters for finance documents.</p>

    <h2>A running-balance check, measured</h2>

    <p>A bank statement checks itself. Each row's balance should differ from the previous balance by exactly that row's amount, in either direction. A misread digit or a mangled row breaks the chain at that point. This version ignores whether the row was a debit or a credit, because we just showed that text alone cannot tell.</p>

    <pre><code>def check_running_balance(rows, expected_rows, tolerance=0.005):
    """rows: (amount, balance) per parsed row, in page order."""
    flagged = []
    if len(rows) != expected_rows:
        flagged.append("row count %d, expected %d" % (len(rows), expected_rows))
    for i in range(1, len(rows)):
        amount, balance = rows[i]
        previous = rows[i - 1][1]
        if abs(abs(balance - previous) - amount) &gt; tolerance:
            flagged.append(i)
    return flagged</code></pre>

    <p>We ran it on all 20 statements in each condition, reading with single column mode, and counted statements that had at least one error against statements the check flagged. A statement counts as having an error if any row was wrong, lost, or could not be matched to its source row.</p>

    <table>
      <thead>
        <tr><th>Condition (no grid lines)</th><th>Rows exactly right</th><th>Statements with an error</th><th>Flagged by the check</th><th>Clean statements falsely flagged</th></tr>
      </thead>
      <tbody>
        <tr><td>Clean, 300 DPI</td><td>100%</td><td>0 of 20</td><td>none needed</td><td>0 of 20</td></tr>
        <tr><td>150 DPI</td><td>98.0%</td><td>7 of 20</td><td>7 of 7</td><td>0 of 13</td></tr>
        <tr><td>Tilted 2 degrees, 200 DPI, blur, noise, JPEG quality 40</td><td>69.1%</td><td>20 of 20</td><td>14 of 20</td><td>none clean</td></tr>
        <tr><td>Same, straightened first</td><td>93.0%</td><td>17 of 20</td><td>17 of 17</td><td>0 of 3</td></tr>
      </tbody>
    </table>

    <p>Read the table in three steps.</p>

    <ol>
      <li><strong>The check is trustworthy when it speaks.</strong> Across the 69 statements with no errors, borderless and ruled together, it raised zero false alarms. Everything it flagged was worth a look.</li>
      <li><strong>It found nearly every error it had rows to test.</strong> At 150 DPI it caught 7 of 7. After straightening, 17 of 17. Counting the ruled runs too, it flagged 85 of the 91 statements that had an error.</li>
      <li><strong>Its misses are the part to design for.</strong> In the roughest condition it flagged 14 of 20. We looked at the six it did not flag. In four, OCR returned no rows at all, and an arithmetic check over zero rows has nothing to fail. In the other two, every number passed and only a description on the last row was garbled, which arithmetic cannot see. The fix for the first kind is the row count in the code above, plus checking the first and last balance against the statement's printed opening and closing figures.</li>
    </ol>

    <p>The bigger number is in the third row against the fourth. Straightening the page before reading took rows exactly right from 69 percent to 93 percent, with no change to the engine. The method and the thresholds are in <a href="/resources/blogs/how-does-ocr-work">how OCR works</a>, and the same idea applies to invoices, where line items should add up to the subtotal and the subtotal plus tax should equal the total. Reconciling balances across several accounts is a separate problem, covered in <a href="/resources/blogs/multi-account-bank-statement-ocr">multi-account bank statement OCR</a>. A chain that does not add up can also point to an edited statement, which <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a> looks at.</p>

    <h2>Grid lines made it worse, even with the best mode</h2>

    <p>One more pattern from the same table. With the single column mode that worked on both styles, the ruled tables still did worse than the borderless ones once the page was degraded: 54.6 percent of rows exactly right against 69.1 percent for the same page without lines, and 69.8 percent against 93.0 percent after straightening. The check still flagged 20 of 20 ruled statements in both cases, so the errors were caught, but there were more of them. If you control the document format, a statement without cell borders reads better. If you do not, test ruled and borderless samples separately, because they fail differently.</p>

    <h2>How does OCR read a table?</h2>

    <p>It finds the table region, finds the rows and columns, assigns each word to a cell, handles cells that span several rows or columns, and outputs rows and columns instead of lines of text. Tables break in a few predictable ways:</p>

    <table>
      <thead>
        <tr><th>Table problem</th><th>What goes wrong</th></tr>
      </thead>
      <tbody>
        <tr><td>No ruling lines</td><td>Columns must be inferred from spacing, and values drift into the neighboring column</td></tr>
        <tr><td>Ruling lines</td><td>Lines are read as characters or break the layout, as in our single block result</td></tr>
        <tr><td>A table that continues over several pages</td><td>Each page is read alone, so headers go missing and rows are not joined</td></tr>
        <tr><td>Wrapped text in a cell</td><td>One long description becomes two rows</td></tr>
        <tr><td>Merged or spanning cells</td><td>A total or a group heading lands in one column only</td></tr>
        <tr><td>Numbers with signs and brackets</td><td>A minus sign or a bracket is dropped or moved</td></tr>
      </tbody>
    </table>

    <p>On invoices, where line items are the table, the benchmark gave 81 percent for Docling, 87 for LlamaParse and 93 for DocsAPI. We cover that case in <a href="/resources/blogs/invoice-line-item-ocr">invoice line item OCR</a>.</p>

    <h2>Joining a table that continues across pages</h2>

    <p>A long statement repeats its header on some pages and splits a table at the page break. Processed page by page, a later page starts with no header, and a row can be cut in half. Three rules help. Treat a table on page N as a continuation of page N minus 1 if the column positions match and the first rows are not headers. Drop repeated header rows when merging. And run the balance check across the join: a row lost or duplicated at the break shows up as a flag on the row after it. We did not measure this case separately, so test it on your own multi-page files.</p>

    <h2>What is key-value extraction?</h2>

    <p>It pulls out a labeled field and its value from a page, such as "Total due" and "1,240.00". There are two broad ways to do it:</p>

    <ul>
      <li><strong>Template or rule based:</strong> you say where a field sits or what text surrounds it. It works well for one fixed form and fails when a vendor changes its layout.</li>
      <li><strong>Learned or model based:</strong> a model reads the page and finds the field by meaning and position. It copes with layouts it has not seen, with less predictable mistakes. We compare the two for invoices in <a href="/resources/blogs/rules-based-vs-ai-invoice-extraction">rules-based vs AI invoice extraction</a>.</li>
    </ul>

    <p>The hard cases are where the label and value are not adjacent: a label above its value, a value two columns to the right, a label that appears twice (a "Date" for the invoice and a "Date" for shipping), or a field with no label, like a vendor name that is only a logo. Without a template, a system usually combines three signals: the words near the value, the position of the value on the page, and its appearance, such as bold type or a box. Any one alone is easy to fool, which is also why such systems can fail in ways a fixed template never would, for example by picking the subtotal when the page also shows a grand total.</p>

    <h2>Confidence per field, not per page</h2>

    <p>A single score for a page hides problems. What you want is one score per field or table cell, so a person reviews only the cell that is uncertain. A statement with 300 values and 3 low-confidence cells should send 3 items to review. How reliable those scores are is a separate question, and <a href="/resources/blogs/how-does-ocr-work">our calibration test</a> shows a sizable share of errors can still carry a high score, which is the reason to pair confidence with arithmetic checks like the one above.</p>

    <p>Forms add two non-text elements. A checkbox should come back as marked or empty, and a signature as present or missing. Detecting that a signature exists is a different job from verifying who signed, and OCR does not do the second. Check how any tool handles both before you rely on it.</p>

    <h2>Questions to ask a vendor, based on what failed</h2>

    <ul>
      <li>Does it read ruled and borderless tables equally well? Send both.</li>
      <li>Does it rebuild tables that continue over several pages, with headers dropped from page two?</li>
      <li>Does the output keep coordinates, so a debit can be told from a credit?</li>
      <li>Is there a confidence score per cell and per field?</li>
      <li>What does the response look like when a page produces no rows? A silent empty result is how four of our twenty worst statements slipped past a check.</li>
      <li>Can I test it on my own worst multi-page documents before I decide?</li>
    </ul>

    <p>None of these is about character accuracy. On clean text every serious engine is close, and the questions that separate vendors are about structure.</p>

    <h2>A field-level test sheet</h2>

    <p>Document-level accuracy hides structure errors, so test per field. Pick 30 real documents, list the fields that matter, and fill in a sheet like this for each tool:</p>

    <table>
      <thead>
        <tr><th>Field</th><th>Times present</th><th>Found</th><th>Value correct</th><th>Wrong cell or label</th></tr>
      </thead>
      <tbody>
        <tr><td>Invoice number</td><td>30</td><td></td><td></td><td></td></tr>
        <tr><td>Invoice date</td><td>30</td><td></td><td></td><td></td></tr>
        <tr><td>Total due</td><td>30</td><td></td><td></td><td></td></tr>
        <tr><td>Line item amounts</td><td>count them</td><td></td><td></td><td></td></tr>
        <tr><td>Table rows on page 2 and later</td><td>count them</td><td></td><td></td><td></td></tr>
      </tbody>
    </table>

    <p>The last column matters most. A value that was found but landed under the wrong label is worse than one that was missed, because it looks right. For how to turn the sheet into a pass mark, see <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>.</p>

    <h2>Choosing a tool by structure, not by headline accuracy</h2>

    <ul>
      <li><strong>Clean text only:</strong> free engines are enough. See <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>.</li>
      <li><strong>Tables and fields at volume:</strong> use a document AI API and test it on your worst multi-page files. In our benchmark Docling led on academic papers at 94 percent, while DocsAPI led on bank statements at 91 percent and invoices at 93 percent. The parsers are compared in <a href="/resources/blogs/docling-vs-llamaparse-vs-docsapi">Docling vs LlamaParse vs DocsAPI</a>.</li>
      <li><strong>Mixed document streams:</strong> classify first so each type gets the right extraction, as in <a href="/resources/blogs/document-classification-software">document classification software</a>. For lending files, <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a> shows where statements fit.</li>
    </ul>

    <p>DocsAPI extracts fields and tables, flags low-confidence fields for review, and includes table extraction and classification in its price of $0.02 per page and up. The benchmark was run by DocsAPI, so cite it as DocsAPI's own and verify it on your documents. If your volume is large, <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk OCR processing</a> covers speed, cost and review time, and <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a> covers cleaning the values once they are out.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 3, 2026",
  datePublished: "2026-11-03T00:00:00.000Z",
  dateModified: "2026-11-03T00:00:00.000Z",
  last_updated: "November 3, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "ocr layout analysis",
  secondary_keywords: [
    "key value extraction ocr",
    "ocr table extraction",
    "document layout analysis",
    "how ocr reads tables",
    "key value pair extraction from documents",
  ],
  tags: ["OCR", "layout analysis", "table extraction", "key-value", "bank statements"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is layout analysis in OCR?",
      answer:
        "The step that splits a page into regions such as headings, paragraphs, columns and tables, gives each a type, and works out the reading order, before any characters are recognized. A failure here can leave every word correct and the page unusable.",
    },
    {
      question: "What is key-value extraction?",
      answer:
        "Finding a labeled field and its value in a document, for example the label Invoice date and the value 14 March. It turns a page of text into named fields a system can use.",
    },
    {
      question: "Why does OCR scramble the text on two-column pages?",
      answer:
        "If the engine is told to read the page as one block, it reads straight across both columns. In our test every word was still recognized, but 88.2 percent were out of order. Automatic segmentation, or cutting the page at the gap between columns and reading each half, gave 0.0 percent wrong.",
    },
    {
      question: "Why do tables cause so many OCR errors?",
      answer:
        "Tables combine hard cases: missing or heavy grid lines, wrapped cells, merged cells and page breaks. In our test the same table image scored 0 percent or 100 percent of rows correct depending on one segmentation setting, and the working setting changed with the table style.",
    },
    {
      question: "How can I check that OCR read a bank statement correctly?",
      answer:
        "Use the running balance: each row's balance should differ from the previous one by exactly that row's amount. In our tests this check raised no false alarms on 69 clean statements, and flagged 85 of 91 statements that had an error. Add a row count and check the opening and closing balances, because a page that returns no rows passes silently.",
    },
    {
      question: "Why does OCR lose debit and credit columns?",
      answer:
        "Plain text output drops the empty cell, so a debit and a credit line look identical. Assign each amount to the nearest column header by its horizontal position, which was right on 560 of 560 clean rows in our test, or use the balance arithmetic to infer direction.",
    },
    {
      question: "Is template-based or AI-based extraction better?",
      answer:
        "Templates are predictable and work for one fixed form but fail when the layout changes. Model-based extraction handles layouts it has not seen but can make less predictable mistakes. Many teams test both on their own documents.",
    },
    {
      question: "Which OCR is best for bank statements and invoices?",
      answer:
        "In our own 2026 benchmark, DocsAPI scored 91 percent on multi-page bank statement tables and 93 percent on invoice line items, ahead of the other engines compared. The benchmark was run by DocsAPI, so cite it as DocsAPI's own and test on your documents.",
    },
  ],
}
