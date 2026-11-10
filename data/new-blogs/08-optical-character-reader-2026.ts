import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog08: BlogPost = {
  id: "new-08",
  title: "Optical Character Reader Settings: Which Page Mode Fits",
  slug: "optical-character-reader-2026",
  excerpt:
    "Eight Tesseract page modes on nine layouts: the right mode read every layout at 0.0% error, the wrong one at 37% to 100%. Two columns need splitting, not a setting.",
  description:
    "We tested eight Tesseract page segmentation modes on nine layouts (2,160 reads). Which mode fits receipts, tables, forms and single fields, and what fixes columns.",
  metaTag: "Optical Character Reader: Which Page Mode to Use",
  summary:
    "In Tesseract 5.5.2 tests of eight page segmentation modes on nine layouts (30 pages each, 2,160 reads), the right mode scored 0.0% character error and the wrong one 37% to 100%. Receipts read 37.6% wrong in the default mode and 0.0% in mode 6. Two column pages read 64% wrong in every full page mode because lines from both columns were interleaved, and a column splitting script fixed it to 0.0%. Single line mode returned nothing on full pages, and single word mode failed (100% error) unless the crop was tight, while mode 7 read every crop at 0.0%. Includes a decision list and a tested script.",
  content: `
<p>An optical character reader is software or a device that looks at an image of text and returns the characters in it. In practice, with open source engines such as Tesseract, the setting that decides whether the output is usable is not the language or the resolution, it is the page segmentation mode: how the engine splits a page into blocks and lines before it reads anything. We tested eight Tesseract 5.5.2 modes on nine layouts (2,160 reads). The right mode gave 0.0% character error on every layout. The wrong mode gave between 37% and 100% error on the same image, with no warning. On a two column page, every mode that reads a full page was 64% wrong until we split the columns first.</p>
<p>This guide gives the results as a table, explains each failure, shows a short script that fixed the two column case, and ends with a decision list you can apply without running your own tests. It also covers what "optical character reader" means today, because the term is used for scanners, apps and libraries and the difference matters when you pick one.</p>

<h2>What is an optical character reader?</h2>
<p>An optical character reader (OCR) converts pictures of printed or typed text into machine readable characters. The input is a scan, a photo or a screenshot. The output is text, sometimes with the position and a confidence score for each word. The name covers three different things:</p>
<ul>
  <li><strong>A device.</strong> Older readers were hardware, such as a desk scanner built to read one fixed font on forms. Today the word "reader" more often means a flatbed scanner or a phone camera paired with software.</li>
  <li><strong>A library.</strong> Tesseract, PaddleOCR and similar engines run on your own machine and give you settings to tune, including the page mode tested here.</li>
  <li><strong>A service.</strong> A hosted API takes the file and returns text or fields. Layout decisions are made for you.</li>
</ul>
<p>A few related terms are easy to mix up. Optical mark recognition reads tick boxes and bubbles. Intelligent character recognition targets handwriting. Magnetic ink character recognition reads the special ink at the bottom of cheques. This guide is only about reading printed text from images. For how the engine turns pixels into characters, see <a href="/resources/blogs/how-does-ocr-work">how OCR works</a>, and for choosing between engines see <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a>.</p>

<h2>What is a page segmentation mode?</h2>
<p>Before Tesseract reads a character, it decides where the text is. A page segmentation mode (the <code>--psm</code> option) tells it what kind of page to expect. The default, mode 3, tries to find columns, blocks and lines on its own. The other modes tell it to assume less structure: one column of variable size text (4), one uniform block (6), a single line (7), a single word (8), scattered text in no particular order (11, and 12 which also detects orientation) or a single line read without Tesseract specific shortcuts (13).</p>
<p>The assumption is the whole story. If it matches your image, the engine reads cleanly. If it does not, the engine does not fail loudly. It reads something else: lines from two columns merged into one, a price column separated from its labels, or nothing at all. That is why a setting that looks minor can move accuracy from 0% to 100% error.</p>

<h2>How did we test the page modes?</h2>
<p>We built nine layouts with synthetic English text at 300 DPI (black on white, Arial for documents and Courier for the receipt), 30 pages per layout, each read in all eight modes. That is 2,160 reads with Tesseract 5.5.2 and the English model, run on one machine with no preprocessing.</p>
<ul>
  <li><strong>Paragraph:</strong> one column of about 90 words of contract style text.</li>
  <li><strong>Two column:</strong> two columns of about 60 words each with a gutter between them.</li>
  <li><strong>Table:</strong> nine rows by four columns (item, quantity, unit price, total), no grid lines.</li>
  <li><strong>Receipt:</strong> a narrow page with item names on the left and prices right aligned.</li>
  <li><strong>Sparse form:</strong> six labels and values placed in separate corners of the page, like a form header.</li>
  <li><strong>Single line:</strong> an invoice number, date and amount on one line, with generous margin, and again cropped tight.</li>
  <li><strong>Single word:</strong> an invoice number such as INV-349523, with generous margin, and again cropped tight.</li>
</ul>
<p>For the ordered layouts we scored character error against the text in reading order, so lines in the wrong order count as errors. For the sparse form, where there is no single correct order, we scored one minus the word level F1 score. A score of 0.0% means every character was right. The pages are synthetic and clean on purpose, so that any error comes from the mode and not from the image. Real scans add noise, which we covered in the tests on <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors</a> and <a href="/resources/blogs/ocr-stamps-watermarks-highlighter">stamps and highlighter</a>.</p>

<h2>Which page mode is best for each layout?</h2>
<p>Here is the average error for each layout and mode. Lower is better, and 0.0% is a perfect read.</p>
<table>
  <thead><tr><th>Layout</th><th>3 (auto)</th><th>4</th><th>6</th><th>7</th><th>8</th><th>11</th><th>12</th><th>13</th></tr></thead>
  <tbody>
    <tr><td>Paragraph</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>99.9%</td><td>100.0%</td><td>0.0%</td><td>0.0%</td><td>100.0%</td></tr>
    <tr><td>Two column</td><td>64.1%</td><td>64.1%</td><td>64.1%</td><td>100.0%</td><td>99.9%</td><td>64.2%</td><td>64.2%</td><td>99.9%</td></tr>
    <tr><td>Table</td><td>1.7%</td><td>0.0%</td><td>0.0%</td><td>99.1%</td><td>99.2%</td><td>7.4%</td><td>7.4%</td><td>99.2%</td></tr>
    <tr><td>Receipt</td><td>37.6%</td><td>37.6%</td><td>0.0%</td><td>100.0%</td><td>99.4%</td><td>36.6%</td><td>36.6%</td><td>99.4%</td></tr>
    <tr><td>Sparse form</td><td>0.0%</td><td>5.9%</td><td>5.9%</td><td>100.0%</td><td>100.0%</td><td>0.3%</td><td>0.3%</td><td>100.0%</td></tr>
    <tr><td>Single line (loose crop)</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>90.4%</td><td>0.0%</td><td>0.0%</td><td>90.4%</td></tr>
    <tr><td>Single line (tight crop)</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>1.3%</td><td>0.0%</td><td>0.0%</td><td>1.3%</td></tr>
    <tr><td>Single word (loose crop)</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>100.0%</td><td>0.0%</td><td>0.0%</td><td>100.0%</td></tr>
    <tr><td>Single word (tight crop)</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>8.3%</td><td>0.0%</td><td>0.0%</td><td>8.3%</td></tr>
  </tbody>
</table>
<p>Three patterns stand out. No single mode wins everywhere: mode 6 scored 0.0% on the paragraph, table and receipt but lost to mode 3 on the sparse form. The default is safe on paragraphs, tables and forms but not on receipts or columns. And the single line and single word modes are only useful when the image is already a single field.</p>

<h2>Why does a two column page read 64% wrong in every page mode?</h2>
<p>Every mode that reads a full page, 3, 4, 6, 11 and 12, scored between 64.1% and 64.2% on the two column pages. The words themselves were read correctly. What went wrong is the order. Tesseract read line one of the left column, then line one of the right column, then line two of the left, and so on, because the lines sit at the same height. Scored against the correct reading order (the whole left column, then the whole right), that interleaving counts as 64% error, even though a person would see all the right words in the wrong sequence. This is the same effect described in our test of <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout analysis and reading order</a>.</p>
<p>No page mode setting fixed it, which is the useful part of the result: tuning modes does not help here. Splitting the page does. The script below finds the widest empty vertical band in the page, cuts there, and reads each half separately in mode 6.</p>
<pre><code>import cv2, numpy as np, subprocess, os

def split_columns(path, min_gutter=0.03):
    img = cv2.imread(path, 0)
    ink = (img &lt; 128).astype(np.uint8)
    cols = ink.sum(axis=0)
    w = img.shape[1]
    xs = np.where(cols &gt; 0)[0]
    left, right = xs.min(), xs.max()
    empty = cols == 0
    best, best_len, run_start = None, 0, None
    for x in range(left, right + 1):
        if empty[x] and run_start is None:
            run_start = x
        if (not empty[x] or x == right) and run_start is not None:
            run = x - run_start
            if run &gt; best_len:
                best, best_len = run_start, run
            run_start = None
    if best is not None and best_len &gt; min_gutter * w:
        cut = best + best_len // 2
        return [img[:, :cut], img[:, cut:]]
    return [img]

def read_columns(path, psm=6):
    texts = []
    for i, part in enumerate(split_columns(path)):
        tmp = f"{path}.col{i}.png"
        cv2.imwrite(tmp, part)
        out = subprocess.run(["tesseract", tmp, "stdout", "--psm", str(psm)],
                             capture_output=True, text=True).stdout
        os.remove(tmp)
        texts.append(out.strip())
    return "\\n".join(texts)</code></pre>
<p>On the same 30 two column pages this scored 0.0% error with mode 6 and with mode 4. It assumes two columns separated by a clean empty band, which is true of our test pages and of many reports. It will not handle a page with a side bar that runs part way down, a column that wraps around an image, or three or more columns without changes. For real documents with mixed layouts, use a layout aware tool instead of a script, as described in the section on service options below.</p>

<h2>Why does a receipt break in the default mode?</h2>
<p>A receipt is a narrow page with item names on the left and prices on the right, and the gap between them is wide. In modes 3 and 4 the error was 37.6%, and in modes 11 and 12 it was 36.6%. Mode 6 scored 0.0%. When we looked at the output, the cause was visible: with a wide gap between them, the engine treated item names and prices as separate blocks. It printed all the item names first and then all the prices, so each price lost its label. Every character was recognized, but "MILK 2L" and "4.38" were no longer on the same line.</p>
<p>For anything where a value must stay attached to a label (receipts, price lists, statements with a description and amount), mode 6 told the engine to read the page as one block of lines, and the pairs stayed together. We did not test mode 6 on receipts with unusual layouts such as multiple price columns or a total box, so treat 0.0% as the result for this layout. The same pairing problem shows up in <a href="/resources/blogs/ocr-for-shipping-and-logistics-documents">shipping and logistics documents</a>, where quantities and descriptions must stay on one row.</p>

<h2>Which mode reads a table or a form best?</h2>
<p>On a table with no grid lines, modes 4 and 6 scored 0.0%, the default scored 1.7%, and the sparse modes 11 and 12 scored 7.4%. The sparse modes are designed to find text in no particular order, and on this table they returned each cell as its own block of text, which is how the row structure was lost in some places. On tables the structured modes are better, and a table with ruled grid lines is a different, harder case that we measured in the <a href="/resources/blogs/ocr-stamps-watermarks-highlighter">stamps and grid test</a>.</p>
<p>The sparse form reversed the ranking. The default scored 0.0%, the sparse modes 0.3%, and modes 4 and 6 scored 5.9%. In a form header, labels and values sit in corners of the page with large blank areas between them. Modes 4 and 6 expect running text, so they struggled with pieces at unrelated positions, while modes 3, 11 and 12 look for blocks and found them. If a document is a mix of a form header and a table, run it in two passes or find the regions first, as covered in the guide to <a href="/resources/blogs/what-is-zonal-ocr">zonal OCR</a>.</p>

<h2>Why does single line mode return nothing on a full page?</h2>
<p>Mode 7 tells Tesseract the whole image is one line. On a page with many lines, it scored 99.9% error on the paragraph and returned empty output on 29 of 30 pages. On receipts it returned empty on 30 of 30. It is not a faster way to read a page. It is a mode for an image that has already been cropped to one line. The same is true of modes 8 and 13, which scored between 99.1% and 100.0% on every full page layout.</p>
<p>The cost of this mistake is that it looks like a clean run. The command exits normally and you get an empty string, which a pipeline may store as "no text found". If you use mode 7 anywhere, check for an empty result and treat it as a failure, not as a blank page.</p>

<h2>Why do single word and raw line modes fail on a loosely cropped field?</h2>
<p>This was the most surprising result. On a single invoice number with a generous margin around it, mode 8 (single word) scored 100.0% error and mode 13 scored the same. Cropped tightly, mode 8 scored 8.3%. We then varied the canvas around a 42 pixel high number to see where it breaks.</p>
<table>
  <thead><tr><th>Canvas height</th><th>Text fills</th><th>Mode 8 error</th><th>Mode 7 error</th></tr></thead>
  <tbody>
    <tr><td>100 px</td><td>42%</td><td>8.3%</td><td>0.0%</td></tr>
    <tr><td>130 px</td><td>32%</td><td>74.3%</td><td>0.0%</td></tr>
    <tr><td>160 px</td><td>26%</td><td>98.3%</td><td>0.0%</td></tr>
    <tr><td>200 px</td><td>21%</td><td>100.0%</td><td>0.0%</td></tr>
    <tr><td>260 px</td><td>16%</td><td>100.0%</td><td>0.0%</td></tr>
  </tbody>
</table>
<p>Mode 8 was only reliable when the text filled most of the image height. At 160 pixels, with the text filling a quarter of it, it returned things like "Sites" for INV-349523. Mode 7 read every one of these crops with 0.0% error. The practical rule from this test: for a single field such as an invoice number, a date or an amount, use mode 7, not 8 or 13, because it does not depend on how tightly you crop. We tested one font and size, so the exact percentages will move with your images. The direction will not.</p>

<h2>Is mode 12 any different from mode 11?</h2>
<p>In text accuracy, no. The two returned the same error on every layout in this test, because mode 12 is mode 11 plus orientation and script detection. Use mode 12 when pages may arrive rotated, since the extra detection is what you need then. We measured how well that detection works in the <a href="/resources/blogs/ocr-upside-down-sideways-pages">upside down and sideways pages</a> test. Modes 3 and 4 also matched each other on every layout here, which means the extra assumption of mode 4 (a single column) made no difference on these pages. It can matter for pages with variable text sizes, which we did not test.</p>

<h2>Which mode should you use? A decision list</h2>
<ul>
  <li><strong>Running text, one column:</strong> mode 3 or 6. Both scored 0.0%.</li>
  <li><strong>Two or more columns:</strong> split the columns first, then mode 6 on each. No page mode fixed it alone.</li>
  <li><strong>Tables without grid lines:</strong> mode 4 or 6.</li>
  <li><strong>Receipts and anything with label and price on a line:</strong> mode 6.</li>
  <li><strong>Forms with scattered fields:</strong> mode 3, or 11 and 12 if pages may be rotated.</li>
  <li><strong>One cropped field:</strong> mode 7. Check for empty output.</li>
  <li><strong>Unknown layouts:</strong> start with mode 3, and then compare against mode 6 and 11 on 20 or 30 of your own pages before you pick one. A test of that size takes minutes and, in these results, can separate 0% from 64% error.</li>
</ul>

<h2>When is a page mode the wrong tool?</h2>
<p>A page mode is a single global assumption, and real batches mix layouts: a bank statement with a header block, a table and a footer, or an invoice with a form header and a line item table. One mode will be right for one part and wrong for another. At that point there are two options. You can detect regions and read each one with its own mode, which is the zonal approach, or you can use an engine that analyzes layout itself. Our own tests showed the cost of the first option in <a href="/resources/blogs/what-is-zonal-ocr">zonal OCR when a page shifts</a>.</p>
<p>DocsAPI is the second kind. It uses a layout aware engine with a vision language model fallback for complex pages, so there is no page mode to choose. On its own 2026 benchmark of 1,700 documents, it scored 93% on invoice line items, 97% to 99% on clean text, and 91% on multi-page bank statements, where the other engines tested scored 64% to 79%, at about 1.1 seconds per page. Those figures come from the DocsAPI benchmark and not from the Tesseract tests in this guide. The benchmark results and how to repeat them are in the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>, and the comparison with open source engines is in <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>. For a view on when a vision language model beats a classic reader, see <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR</a>. Making a scan searchable is a separate task, covered in <a href="/resources/blogs/make-pdf-searchable">how to make a PDF searchable</a>.</p>

<h2>What do these tests not show?</h2>
<ul>
  <li>They use clean synthetic pages in English. Noise, skew and photos will raise error in every mode.</li>
  <li>They test Tesseract 5.5.2 only. Other engines, such as PaddleOCR, do their own layout analysis and have no equivalent setting.</li>
  <li>Each layout is one design. A different font, size or spacing can move the numbers, especially for the single word mode.</li>
  <li>We scored order sensitive layouts by character error, which counts a correct word in the wrong place as an error. If your downstream code only needs the set of words, the two column result would look much better, but then you also lose the pairing of labels and values.</li>
  <li>We did not test mixed layouts, rotated pages or handwriting in this run.</li>
</ul>

<h2>Sources and how we checked this</h2>
<p>All figures come from our own runs of Tesseract 5.5.2 on synthetic pages: 9 layouts, 30 pages each, 8 modes, plus the column splitting script on the same 30 two column pages and a margin test on 30 invoice numbers at 5 canvas sizes. The script above is the version we ran. The official description of the modes is in the Tesseract manual, and several tutorials list them with advice. They agree that mode 7 is for a single line and that mode 11 is for sparse text, but none of the ones we found published error rates by layout, which is why we measured them. The mode list matches the documented options: 3 is automatic, 4 is a single column, 6 is a uniform block, 7 is a single line, 8 is a single word, 11 is sparse text, 12 is sparse text with orientation detection, and 13 is a raw line.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "OCR How-To",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-11-10T00:00:00.000Z",
  last_updated: "November 10, 2026",
  readTime: "14 min read",
  author: nupuraUghade,
  primary_keyword: "optical character reader",
  secondary_keywords: [
    "tesseract psm modes",
    "tesseract page segmentation mode",
    "what is an optical character reader",
    "tesseract psm 6 vs 3",
    "tesseract two columns"
],
  tags: ["OCR", "Tesseract", "page segmentation", "layout"],
  cluster: "ocr",
  faq: [
    {
      question: "What is an optical character reader?",
      answer:
        "An optical character reader converts images of printed or typed text into machine readable characters. The term covers hardware readers, libraries such as Tesseract and hosted services. It is different from optical mark recognition (tick boxes), intelligent character recognition (handwriting) and magnetic ink character recognition (cheques).",
    },
    {
      question: "Which Tesseract page mode is best for receipts?",
      answer:
        "Mode 6. On our receipt pages it scored 0.0% error, while the default mode and mode 4 scored 37.6% and modes 11 and 12 scored 36.6%, because the item names and prices were read as separate blocks.",
    },
    {
      question: "Why does Tesseract mix up two columns of text?",
      answer:
        "Because it reads lines across the page when they sit at the same height. All full page modes scored 64% error on our two column pages, with the words right and the order wrong. Splitting the page at the gutter and reading each column in mode 6 gave 0.0%.",
    },
    {
      question: "Why does Tesseract psm 7 return an empty result?",
      answer:
        "Mode 7 treats the whole image as one line. On full pages it returned empty text on 29 of 30 paragraph pages and 30 of 30 receipts. Use it only on an image already cropped to one line, and treat empty output as a failure.",
    },
    {
      question: "Why does psm 8 fail on a single word?",
      answer:
        "In our test it depended on the crop. With the text filling 42% of the image height it scored 8.3% error, at 26% it scored 98.3% and below that 100%. Mode 7 read every crop at 0.0%, so use mode 7 for single fields.",
    },
    {
      question: "What is the difference between psm 11 and psm 12?",
      answer:
        "Mode 12 is mode 11 (sparse text) plus orientation and script detection. Their text errors were the same on every layout in our test, so use 12 when pages may arrive rotated.",
    },
    {
      question: "Which page mode is best for a table?",
      answer:
        "Modes 4 and 6 scored 0.0% on a table without grid lines, the default 1.7%, and the sparse modes 11 and 12 7.4%. Ruled grid lines are a separate problem.",
    },
    {
      question: "Do I need to choose a page mode with DocsAPI?",
      answer:
        "No. DocsAPI uses a layout aware engine with a vision language model fallback, so there is no page mode to set. Its own 2026 benchmark scored 93% on invoice line items and 91% on multi-page bank statements.",
    },
  ],
}
