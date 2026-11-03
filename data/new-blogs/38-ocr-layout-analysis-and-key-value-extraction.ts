import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog38: BlogPost = {
  id: "new-38",
  title: "OCR Layout Analysis and Key-Value Extraction: How Fields Get Found",
  slug: "ocr-layout-analysis-and-key-value-extraction",
  excerpt:
    "Reading characters is only half of document OCR. The other half is knowing which text is a table cell, which is a label, and which value belongs to it. This guide explains layout analysis, table recognition and key-value extraction, and where each one breaks.",
  description:
    "How OCR finds tables, labels and values: layout analysis, table structure and key-value extraction explained, with benchmark table accuracy and a field-level test sheet.",
  metaTag: "OCR Layout Analysis and Key-Value Extraction Explained",
  summary:
    "Layout analysis finds regions and reading order. Table recognition rebuilds rows and columns. Key-value extraction links a label to its value. Tables are where engines differ most: 64% to 91% on multi-page bank statements in our benchmark.",
  content: `
    <p>Layout analysis is the step where OCR decides what kind of thing each piece of text is: a heading, a paragraph, a table cell, a label or a value. Key-value extraction then links a label such as "Invoice date" to its value. Plain OCR gives you a stream of text. These two steps turn it into fields a system can use, and they are where engines differ most.</p>

    <p>Here is the gap in numbers. In our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">1,700-document benchmark</a>, three engines tied at 97-99% on clean typed English. On multi-page bank statement tables they scored 64%, 79% and 91%. Recognizing characters was never the difference. Finding the structure was.</p>

    <h2>What does layout analysis do?</h2>

    <p>It splits a page image into regions and gives each a type and an order. A typical result lists a header block, a two-column body, a table, a footer and a stamp, with coordinates for each. Three jobs matter most:</p>

    <ul>
      <li><strong>Region detection:</strong> where the text blocks, tables and images are on the page.</li>
      <li><strong>Reading order:</strong> which block comes first. A two-column page read straight across mixes the columns.</li>
      <li><strong>Region typing:</strong> table, paragraph, heading, list, or something to ignore such as a logo or a margin note.</li>
    </ul>

    <p>If this step fails, a correct character recognizer still produces wrong results. That is why we call it out as step 3 in <a href="/resources/blogs/how-does-ocr-work">how OCR works</a>.</p>

        <p>Reading order is easiest to see on a two-column page. A person reads the whole left column and then the right one. A naive reader scans left to right across the full width, so line 1 of the left column is followed by line 1 of the right column, and the sentences interleave. Every word is correct and the page is unreadable. Layout analysis prevents this by detecting the two columns as separate regions first and reading them one after the other. Forms add another case: a label and its value can sit in different regions, so order alone does not tell you which value belongs to which label. That is the job of key-value extraction below.</p>

    <h2>How does OCR read a table?</h2>

    <p>A table is a grid, and the engine has to rebuild it from the positions of the text. Table recognition normally does four things: finds the table region, finds the rows and columns, assigns each piece of text to a cell, and handles cells that span several rows or columns. Then it outputs rows and columns, for example as CSV or JSON, instead of lines of text.</p>

    <p>Tables break in predictable ways:</p>

    <table>
      <thead>
        <tr><th>Table problem</th><th>What goes wrong</th></tr>
      </thead>
      <tbody>
        <tr><td>No ruling lines</td><td>Columns have to be inferred from spacing, so values drift into the neighboring column</td></tr>
        <tr><td>A table that continues over several pages</td><td>Each page is read alone, so headers are missing on page two and rows are not joined</td></tr>
        <tr><td>Wrapped text in a cell</td><td>One long description is split into two rows</td></tr>
        <tr><td>Merged or spanning cells</td><td>A total or a group heading is assigned to one column only</td></tr>
        <tr><td>Numbers with symbols or negatives</td><td>A minus sign, a bracket or a currency mark is dropped or moved</td></tr>
      </tbody>
    </table>

    <p>Multi-page statements combine several of these at once, which is why they separate the engines in the benchmark: 64% for Tesseract, 79% for PaddleOCR and 91% for DocsAPI. On invoices, where line items are the table, the same test gave 81% for Docling, 87% for LlamaParse and 93% for DocsAPI. We cover line items in detail in <a href="/resources/blogs/invoice-line-item-ocr">invoice line item OCR</a>.</p>

        <h2>A running balance check for bank statements</h2>

    <p>Tables are easier to trust when they check themselves. A bank statement has a built-in test: each row's balance should equal the previous balance plus the credit minus the debit. If a digit is misread or a row lands in the wrong place, the chain breaks at that row, and you know exactly where to look.</p>

    <pre><code>def check_running_balance(rows, opening_balance, tolerance=0.01):
    """rows: list of dicts with credit, debit and balance as floats."""
    previous = opening_balance
    problems = []
    for i, row in enumerate(rows):
        expected = previous + row["credit"] - row["debit"]
        if abs(expected - row["balance"]) &gt; tolerance:
            problems.append((i, expected, row["balance"]))
        previous = row["balance"]
    return problems</code></pre>

    <p>Rows that fail are the ones to send to review, and a clean pass across 200 rows is strong evidence the table was read correctly, stronger than any average confidence. The same idea works on invoices, where line items should add up to the subtotal, and the subtotal plus tax should equal the total.</p>

    <h2>Joining a table that continues across pages</h2>

    <p>A long statement or invoice repeats its header row on every page and splits a table in two at the page break. If each page is processed alone, page two starts with no header, and a row may be cut in half. A reliable approach has three rules: treat a table on page N as a continuation of page N-1 if the column positions match and the first rows have no header; drop repeated header rows when merging; and run the running balance check across the join, which exposes any row that was lost or duplicated at the break. This is one reason multi-page statements score so much lower than single pages on plain OCR.</p>

    <h2>What is key-value extraction?</h2>

    <p>It pulls out a labeled field and its value from a page, such as "Total due" and "1,240.00". There are two broad ways to do it:</p>

    <ul>
      <li><strong>Template or rule based:</strong> you tell the system where a field sits or what text surrounds it. This works well for one fixed form and fails when a vendor changes its layout.</li>
      <li><strong>Learned or model based:</strong> a model reads the page and finds the field by meaning and position. It copes with layouts it has not seen, at the price of less predictable mistakes. We compare the approaches for invoices in <a href="/resources/blogs/rules-based-vs-ai-invoice-extraction">rules-based vs AI invoice extraction</a>.</li>
    </ul>

    <p>The hard cases are where a label and value are not next to each other. A label above a value, a value two columns to the right, a label that appears twice (a "Date" for the invoice and a "Date" for the ship date), or a field with no label at all, like a vendor name that is just a logo.</p>

        <h2>How models find the right field: three signals</h2>

    <p>When a system finds "Total due" without a fixed template, it usually combines three kinds of evidence:</p>

    <ul>
      <li><strong>Text:</strong> the words near the value, such as "Total", "Amount due" or "Balance".</li>
      <li><strong>Position:</strong> where on the page the value sits, such as bottom right on an invoice, and how it lines up with the label.</li>
      <li><strong>Appearance:</strong> bold type, a box around the number, or a larger font, which often marks the field that matters.</li>
    </ul>

    <p>Any one signal alone is easy to fool. Text alone confuses a "Date" label that appears twice. Position alone fails when vendors lay out the page differently. Combining them is why newer models cope with layouts they were not given in advance, and it is also why they can fail in ways a fixed template never would, for example by picking the wrong "Total" on a page that shows both a subtotal and a grand total.</p>

    <h2>Confidence works at the cell and field level too</h2>

    <p>A single score for the whole page hides problems. What you want is one score per field or per table cell, so a person only reviews the cell that is uncertain. A statement with 300 values and 3 low-confidence cells should send 3 items to review, not the whole document. Ask any tool you test whether it gives scores at that level, because it changes how much human time the workflow costs.</p>

    <h2>Checkboxes and signatures</h2>

    <p>Forms add two element types that are not text. A checkbox is either marked or empty, and the result should be a true or false, not a character. A signature is a region that is present or missing. Detecting that a signature exists is a different job from verifying who signed it, and OCR does not do the second one. Check how any tool you evaluate handles both, because they are easy to overlook in a demo. If you need this for your documents, raise it in a demo with your own samples.</p>

            <h2>A walk-through of how a page break breaks a table</h2>

    <p>Here is an illustrative case. A three-page statement has 90 transaction rows, 30 per page. Page one has a header row with Date, Description, Debit, Credit and Balance. Page two repeats the header. Page three starts mid-table with no header because the bank's template only printed it once on the first page of that section.</p>

    <ol>
      <li>Each page is read alone. Page three has no header, so the engine cannot tell which number is a debit and which is a credit, and it guesses from position.</li>
      <li>The last row of page one wraps its description onto a second line that lands on page two, so one transaction becomes a row on page one and a stray fragment on page two.</li>
      <li>The balance column drifts left by a few pixels on page two because the scan was slightly rotated. Some balances are assigned to the Credit column.</li>
    </ol>

    <p>None of these is a character error. The characters are right and the structure is wrong, which is why a character-level score can look good while the data is unusable. The running balance check above would flag every one of these rows. This is the pattern behind the gap between 64% and 91% on multi-page statements.</p>

    <h2>Where layout analysis still fails</h2>

    <ul>
      <li><strong>Stamps and signatures over text:</strong> the overlap confuses both region detection and recognition.</li>
      <li><strong>Handwritten notes in the margins of a table:</strong> they can be read as part of a row.</li>
      <li><strong>Rotated or skewed tables:</strong> a few degrees is manageable, but a table photographed at an angle bends the columns.</li>
      <li><strong>Nested tables and unusual forms:</strong> a table inside a cell, or a form with overlapping boxes, breaks assumptions about a clean grid.</li>
      <li><strong>Very small print:</strong> footnotes and fine-print terms fall below the size where region detection works reliably.</li>
    </ul>

    <p>Knowing these limits helps you decide what to review by hand. If your documents often have stamps over tables, put that in your test set. For the broader chain these steps sit in, see <a href="/resources/blogs/how-does-ocr-work">how OCR works</a>, and for fixing the data after extraction, <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a>.</p>

    <h2>Questions to ask a vendor about layout and fields</h2>

    <ul>
      <li>Does it rebuild tables that have no ruling lines, and tables that continue over several pages?</li>
      <li>Do I get rows and columns as structured output, or only text?</li>
      <li>Is there a confidence score per field or per cell?</li>
      <li>What happens when a label appears twice on a page?</li>
      <li>How are checkboxes and signatures returned?</li>
      <li>Can I test it on my own worst multi-page documents before I decide?</li>
    </ul>

    <p>Notice that none of these questions is about character accuracy. On clean text every serious engine is close. The questions that separate vendors are all about structure.</p>

    <h2>A field-level test sheet</h2>

    <p>Document-level accuracy hides structure errors. Test at the field level instead. Pick 30 real documents, list the fields that matter, and fill in a sheet like this for each tool:</p>

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

    <p>The last column matters most. A value that was found but landed under the wrong label is worse than one that was missed, because it looks right. Count "found but wrong" separately. For how to turn this into a pass mark, see <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>.</p>

    <h2>Choosing a tool by structure, not by headline accuracy</h2>

    <ul>
      <li><strong>Clean text only:</strong> free engines such as Tesseract and PaddleOCR are enough. See <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>.</li>
      <li><strong>Tables and fields at volume:</strong> use a document AI API and test it on your worst multi-page files. In our benchmark Docling led on academic papers at 94%, while DocsAPI led on bank statements at 91% and invoices at 93%. Compare the parsers in <a href="/resources/blogs/docling-vs-llamaparse-vs-docsapi">Docling vs LlamaParse vs DocsAPI</a>.</li>
      <li><strong>Mixed document streams:</strong> classify first so each type goes to the right extraction, as described in <a href="/resources/blogs/document-classification-software">document classification software</a>.</li>
    </ul>

    <p>DocsAPI extracts fields and tables, flags low-confidence fields for a person to review, and includes table extraction and classification in its price of $0.02 per page and up. The benchmark was run by DocsAPI, so cite it as DocsAPI's own benchmark and check the result on your own documents.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 3, 2026",
  datePublished: "2026-11-03T00:00:00.000Z",
  dateModified: "2026-11-03T00:00:00.000Z",
  last_updated: "November 3, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "ocr layout analysis",
  secondary_keywords: [
    "key value extraction ocr",
    "ocr table extraction",
    "document layout analysis",
    "how ocr reads tables",
    "key value pair extraction from documents",
  ],
  tags: ["OCR", "layout analysis", "table extraction", "key-value", "explainer"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is layout analysis in OCR?",
      answer:
        "The step that splits a page into regions such as headings, paragraphs, tables and images, gives each a type, and works out the reading order. It decides what to read and in what order before any characters are recognized.",
    },
    {
      question: "What is key-value extraction?",
      answer:
        "Finding a labeled field and its value in a document, for example the label Invoice date and the value 14 March. It turns a page of text into named fields a system can use.",
    },
    {
      question: "How does OCR extract tables from a document?",
      answer:
        "It finds the table region, works out the rows and columns from the positions of the text, assigns each piece of text to a cell, and handles cells that span several rows or columns. The result is rows and columns, such as CSV or JSON, not lines of text.",
    },
    {
      question: "Why do tables cause so many OCR errors?",
      answer:
        "Tables combine several hard cases: missing ruling lines, wrapped text in cells, merged cells and tables that continue across pages. In our benchmark, multi-page bank statement tables scored 64%, 79% and 91% on three engines that all scored 97-99% on clean typed text.",
    },
    {
      question: "Is template-based or AI-based extraction better?",
      answer:
        "Templates are predictable and work well for one fixed form but fail when the layout changes. Model-based extraction handles layouts it has not seen but can make less predictable mistakes. Many teams test both on their own documents.",
    },
    {
      question: "Can OCR detect checkboxes and signatures?",
      answer:
        "A checkbox should come back as marked or empty, and a signature as present or missing. Detecting that a signature exists is not the same as verifying who signed it, and OCR does not verify identity. Test any tool on your own forms to see how it handles both.",
    },
    {
      question: "How do I test table and field accuracy?",
      answer:
        "Use 30 or more real documents and check each field one by one: was it found, was the value right, and did it land under the right label. Count values that were found but wrong separately, because they look correct and are harder to catch than missing ones.",
    },
    {
      question: "Which OCR is best for bank statements and invoices?",
      answer:
        "In our own 2026 benchmark, DocsAPI scored 91% on multi-page bank statement tables and 93% on invoice line items, ahead of the other engines we compared. The benchmark was run by DocsAPI, so cite it as DocsAPI's own and test on your documents.",
    },
  ],
}
