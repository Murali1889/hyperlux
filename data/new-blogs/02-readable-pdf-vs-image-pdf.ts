import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog02: BlogPost = {
  id: "new-02",
  title: "Readable PDF vs Image PDF: How to Tell, Tested",
  slug: "readable-pdf-vs-image-pdf",
  excerpt:
    "A search that finds a word on page one passed all 50 two-page files whose page two was a plain scan. We tested 390 PDFs to see what each check can and cannot tell you.",
  description:
    "A readable PDF has text, an image PDF has a picture, and one file can be both. We tested 390 PDFs for per-page checks and ways to catch wrong OCR text.",
  metaTag: "Readable PDF vs Image PDF: A Page-by-Page Test (2026)",
  content: `
<p>A readable PDF stores its text as characters, so you can search, select and copy it. An image PDF stores each page as a picture, so you cannot. The catch is that one file can be both: text on page one, a plain scan on page two, or a picture with an invisible OCR text layer that may be right or may be wrong. In our test of 390 generated PDFs, a search that found a word on page one passed all 50 two-page files whose second page was a plain scan.</p>
<p>This guide gives the two-second check, then the numbers behind what each check can and cannot tell you: 440 pages across nine kinds of PDF, a short script that labels every page, and a second check for text layers that exist but are wrong. We ran everything with PyMuPDF 1.26.5 and Tesseract 5.5.2. The test pages are synthetic, and the limits are listed near the end.</p>

<h2>What is the difference between a readable PDF and an image PDF?</h2>
<p>A readable PDF (also called text-based or searchable) has a text layer: the letters on the page are stored as characters with positions. An image PDF has no text layer; the page is a picture, usually one picture per page, and your computer sees pixels. Search, copy, screen readers, form filling and text extraction all work on characters, so they work on the first kind and find nothing on the second.</p>
<p>Two other states hide inside "looks like a normal PDF". A scan can carry an invisible text layer added by an OCR program, and that layer can be accurate or full of misread words. And a page can show crisp text that is really drawn as vector shapes, with no characters and no picture behind it. We measured both, along with plain text pages, plain scans, phone-style photos and mixed files.</p>

<h2>How do I check one PDF in two seconds?</h2>
<p>Open the PDF, press Ctrl+F (Cmd+F on a Mac), type a word you can see on the page and press Enter. If the word is highlighted, that page has a text layer. If you get no results, try dragging across a single word: if you can select that one word, the page has text, and if the selection is a big rectangle over the whole page, it is a picture.</p>
<p>This check answers one question: does this page have text? It does not tell you whether every page has text, and it does not tell you whether the text is correct. The next sections show where each of those gaps is.</p>

<h2>How did we test 390 PDFs?</h2>
<p>Every test page started as the same kind of page: a US letter page with 40 lines of 11-point Helvetica, about 440 words per page. The words came from a system dictionary, with some amounts (such as 8,386.62) and invoice-style numbers (INV-48213) mixed in, so a page carries both words and figures. We then turned each page into nine kinds of PDF.</p>
<table>
  <thead><tr><th>Kind</th><th>How we made it</th><th>Files</th></tr></thead>
  <tbody>
    <tr><td>Native text</td><td>Text written straight into the PDF</td><td>50</td></tr>
    <tr><td>Scan</td><td>Page rendered at 300 DPI, shrunk to 200 DPI, slight blur and noise, stored as one picture</td><td>50</td></tr>
    <tr><td>Phone-style photo</td><td>Rotated up to 1.5 degrees, 150 DPI, blur, heavier noise, JPEG quality 45</td><td>50</td></tr>
    <tr><td>Scan with a good OCR layer</td><td>The 200 DPI scan run through Tesseract's PDF output</td><td>50</td></tr>
    <tr><td>Scan with a poor OCR layer</td><td>The page shrunk to 30% to 55% of 300 DPI with blur, heavy noise and JPEG quality 45, then Tesseract's PDF output</td><td>50</td></tr>
    <tr><td>Text drawn as shapes</td><td>Letter outlines traced from a 300 DPI render and drawn as one vector path</td><td>50</td></tr>
    <tr><td>Mixed file</td><td>Native text page followed by a plain scan page</td><td>50 (100 pages)</td></tr>
    <tr><td>Blank page</td><td>An empty page</td><td>20</td></tr>
    <tr><td>Ruled form</td><td>Lines and a border, no text</td><td>20</td></tr>
  </tbody>
</table>
<p>That is 390 files and 440 pages. We kept the true text of every page, so we could measure how much of it each PDF's text layer actually held.</p>

<h2>Which label does each kind of PDF get?</h2>
<p>We labelled every page with a short rule: count the characters of extractable text, and measure how much of the page a picture covers. Text with little picture is "text". A picture covering most of the page with no text is "image". Both together is "image+text layer". The script is in the next section; here are the results.</p>
<table>
  <thead><tr><th>Kind</th><th>Pages</th><th>Characters of text found</th><th>Label</th></tr></thead>
  <tbody>
    <tr><td>Native text</td><td>50</td><td>Over 25 on 50 of 50</td><td>text, 50 of 50</td></tr>
    <tr><td>Scan</td><td>50</td><td>0 on 50 of 50</td><td>image, 50 of 50</td></tr>
    <tr><td>Phone-style photo</td><td>50</td><td>0 on 50 of 50</td><td>image, 50 of 50</td></tr>
    <tr><td>Scan with good OCR layer</td><td>50</td><td>Over 25 on 50 of 50</td><td>image+text layer, 50 of 50</td></tr>
    <tr><td>Scan with poor OCR layer</td><td>50</td><td>Over 25 on 50 of 50</td><td>image+text layer, 50 of 50</td></tr>
    <tr><td>Mixed file, page 1</td><td>50</td><td>Over 25 on 50 of 50</td><td>text, 50 of 50</td></tr>
    <tr><td>Mixed file, page 2</td><td>50</td><td>0 on 50 of 50</td><td>image, 50 of 50</td></tr>
  </tbody>
</table>
<p>Two things stand out. First, a plain scan and a phone-style photo both returned zero characters on all 100 pages, so "is there any text at all" cleanly separates pictures from text. Second, the 50 scans with a good OCR layer and the 50 with a poor one received the same label, because both have a picture and a text layer. The label says a text layer exists. It does not say the text layer is right.</p>

<h2>Why is checking one page not enough?</h2>
<p>Because the file passes if any page passes, in the way people usually test. In the 50 mixed files, page one had text and page two was a plain scan. A search for any word on page one succeeds on every file, and nothing about that search touches page two. The per-page label caught all of it: page one "text", page two "image", 50 of 50 each.</p>
<p>This matters in practice for packets that are assembled from different sources, such as a typed form with a scanned signature page or a statement with an inserted scan. It also matters for extraction pipelines, where a file-level "has text" flag sends the whole file down the text path and the picture pages come out empty. For those pipelines, label each page, then route the pages. Our guide on <a href="/resources/blogs/document-detection-before-ocr">document detection before OCR</a> covers the routing side.</p>

<h2>What is the script that labels every page?</h2>
<p>This is the script we ran, unchanged. <code>classify_page</code> is the per-page label; <code>layer_agreement</code> is the second check, described below. It needs <code>pip install pymupdf</code> and the <code>tesseract</code> command on your path (only for <code>layer_agreement</code>).</p>
<pre><code>import os, re, subprocess, sys, tempfile
import fitz  # PyMuPDF: pip install pymupdf

def classify_page(page, min_chars=25):
    text = page.get_text().strip()
    has_text = len(text) &gt;= min_chars
    page_area = page.rect.width * page.rect.height
    image_area = 0
    for img in page.get_image_info():
        r = fitz.Rect(img["bbox"]) &amp; page.rect
        image_area += r.width * r.height
    mostly_image = image_area &gt; 0.8 * page_area
    if has_text and not mostly_image:
        return "text"
    if not has_text and mostly_image:
        return "image"
    if has_text and mostly_image:
        return "image+text layer"      # a scan that already has OCR text on it
    if sum(len(d["items"]) for d in page.get_drawings()) &gt; 2000:
        return "vector shapes only"    # text drawn as outlines: no text layer, no picture
    return "blank/other"

def words(s):
    return re.findall(r"[A-Za-z0-9][A-Za-z0-9,.\\-]*", s)

def layer_agreement(page):
    """Share of the page's text-layer words that a fresh Tesseract read of the page also finds."""
    layer = [w.lower() for w in words(page.get_text())]
    fd, png = tempfile.mkstemp(suffix=".png"); os.close(fd)
    try:
        page.get_pixmap(dpi=200, colorspace=fitz.csGRAY).save(png)
        out = subprocess.run(["tesseract", png, "stdout", "--psm", "6"], capture_output=True, text=True).stdout
    finally:
        os.remove(png)
    fresh = {w.lower() for w in words(out)}
    return sum(w in fresh for w in layer) / max(1, len(layer))

if __name__ == "__main__":
    for path in sys.argv[1:]:
        doc = fitz.open(path)
        print(path, [classify_page(p) for p in doc])</code></pre>
<p>The 25-character floor and the 80% picture coverage are our choices. A page that is mostly stamps or logos may need different values, and a page with only a few words of real text may fall under the floor.</p>

<h2>What if the PDF has text, but the text is wrong?</h2>
<p>Then the label "image+text layer" is where you stop trusting the file and start measuring it. We measured how many of each page's true words appeared in its text layer. The 50 scans with a good OCR layer held 100% of their words on every page. The 50 with a poor layer, made from low-resolution noisy scans, held 93.4% on average, with the worst page at 67.8%. Of those 50, 22 pages were below 95%, and 28 were at or above it.</p>
<p>Nothing in the label separates these two groups, and Ctrl+F will not either: a search for a word that was read correctly succeeds on a page where a third of the other words are wrong. The signal we tried is cheap to state. Read the page again with a fresh OCR pass, then check what share of the existing layer's words the new read also finds. We call that agreement. A layer that agrees with a second read is probably fine, and a layer that does not is worth a closer look.</p>

<h2>How well does the agreement check catch bad text layers?</h2>
<p>We ran <code>layer_agreement</code> on the 200 pages that had a text layer: the 50 native pages, the 50 page-one halves of the mixed files, the 50 good OCR layers and the 50 poor ones. A page counted as bad when under 95% of its true words were in the layer. That made 22 bad pages and 178 good ones.</p>
<table>
  <thead><tr><th>Flag a page when agreement is under</th><th>Bad layers caught (of 22)</th><th>Good layers flagged (of 178)</th></tr></thead>
  <tbody>
    <tr><td>0.90</td><td>11</td><td>0</td></tr>
    <tr><td>0.95</td><td>20</td><td>0</td></tr>
    <tr><td>0.97</td><td>22</td><td>7</td></tr>
    <tr><td>0.98</td><td>22</td><td>14</td></tr>
  </tbody>
</table>
<p>At 0.95 the check caught 20 of 22 bad layers and flagged no good ones. The two it missed had 94.7% and 94.3% of their words right, so they were close to the line we drew. At 0.97 it caught all 22 and flagged 7 good pages, about 4%, which a person would clear in a minute each. We chose the thresholds after seeing the first run, so we also split the files in half by seed: on seeds 0 to 24 the 0.95 setting caught 10 of 10 and flagged 0 of 90, and on seeds 25 to 49 it caught 10 of 12 and flagged 0 of 88. The split gives the same picture, but it is the same kind of synthetic page, not a new test set.</p>
<p>One honest caveat: the second read uses the same page image, so a mistake that Tesseract makes both times will look like agreement. On our pages the poor layers came from blurred, shrunken scans, so a read of the stored image at 200 DPI usually disagreed with them. A layer produced by a different engine, or from a different scan, would be a better comparison. If you already pay for an OCR service, compare against that instead.</p>

<h2>What about text that is drawn as shapes?</h2>
<p>Some PDFs show crisp text that is not text at all. Design tools can export letters as outlines, so the page has neither characters nor a picture. Our first version of the script had no rule for this and labelled all 50 of these pages "blank/other", which would send a full page of text to a person as if it were empty.</p>
<p>In the PDF's drawing data these pages look nothing like a blank page. Each of our 50 held a single path with between 128,000 and 133,000 line segments. A ruled form, with 26 line segments, is the other extreme. The final script counts path segments and calls the page "vector shapes only" above 2,000, a threshold we chose to sit well between the two. With it, all 50 outlined pages got that label, and all 20 blank pages and all 20 ruled forms stayed "blank/other". A page labelled "vector shapes only" needs OCR on a rendered image, because there is no text to extract.</p>

<h2>How long do the checks take?</h2>
<p>The page label is cheap. Opening the PDF, extracting text, reading the image boxes and labelling a page took about 12 milliseconds per page on our laptop. The agreement check is a full OCR pass: between 2.2 and 2.7 seconds per page at 200 DPI on one Tesseract thread.</p>
<p>The cost difference sets the order of operations. Label every page first. Run the agreement check only on pages labelled "text" or "image+text layer", and for a large archive, run it on a sample of each source instead of every page. If a sample from one scanner or vendor fails, run the full check on that source. Our guide on <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk OCR processing</a> covers throughput.</p>

<h2>What should I do with each label?</h2>
<table>
  <thead><tr><th>Label</th><th>What it means</th><th>What to do</th></tr></thead>
  <tbody>
    <tr><td>text</td><td>Characters on the page, little or no picture</td><td>Extract the text directly. No OCR needed.</td></tr>
    <tr><td>image</td><td>A picture and no text</td><td>Run OCR. See <a href="/resources/blogs/make-pdf-searchable">how to make a PDF searchable</a>.</td></tr>
    <tr><td>image+text layer</td><td>A picture with text on top, from a past OCR run</td><td>Run the agreement check. Under your threshold, redo the OCR.</td></tr>
    <tr><td>vector shapes only</td><td>Text drawn as outlines</td><td>Render the page to an image and run OCR.</td></tr>
    <tr><td>blank/other</td><td>Nothing readable detected</td><td>Look at it. It may be truly blank, a form template or a stamp-only page.</td></tr>
  </tbody>
</table>
<p>For images that come out of the OCR step poorly, the cause is usually the picture, not the PDF. We measured what helps and what hurts in <a href="/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts">our preprocessing tests</a>, and the fixes for sideways pages are in <a href="/resources/blogs/ocr-upside-down-sideways-pages">upside-down and sideways pages</a>.</p>

<h2>Where do image PDFs come from?</h2>
<p>Image PDFs start whenever something captures a page as pixels. A scanner or a phone camera produces a picture, and the PDF wraps it. Saving a JPG or PNG as a PDF makes a one-picture PDF. Fax output is a picture by nature. Our test files stand in for these: the scan kind for a flatbed scan, the phone-style kind for a camera, and the layered kinds for a scanner or app that ran OCR on the way out. The formats inside such files, such as TIFF and JPG, are the subject of <a href="/resources/blogs/convert-fax-tiff-jpg-png-to-text">converting fax, TIFF, JPG and PNG to text</a>.</p>
<p>If image PDFs keep arriving from one source, the cheapest fix is at the source: switch on text recognition in the scanner or scanning app, or ask the sender for the original export. Where that is not possible, add the page label at intake so those files are routed before anything downstream reads them as empty.</p>

<h2>What did we not test?</h2>
<p>Our pages are synthetic: one font, English dictionary words, no tables, no columns, no stamps, no handwriting, no non-Latin scripts. Real documents are messier, and a scan of a real invoice will behave differently from our pages. The thresholds (25 characters, 80% coverage, 2,000 segments, 0.95 agreement) are our choices and are worth re-tuning on your own files.</p>
<p>We also did not test a fourth failure that exists in the wild: native text whose font map is broken, so the page looks right and copying it gives garbled characters. The agreement check would likely flag such a page, because a fresh read of the rendered page would not match the garbled layer, but we have not measured it. We also did not test encrypted or password-protected files. Finally, the agreement check used Tesseract on both sides of the comparison for the OCR-layered pages, so it measures consistency, not truth.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI reads scans and photographed pages and returns structured data. In our 2026 benchmark of 1,700 documents it read clean typed text at 97% to 99% and about 1.1 seconds per page. Pricing starts at $0.02 per page, and access begins with a demo. The page label above is a routing step you can run before any engine, ours or someone else's. See <a href="/products">the products page</a> for what DocsAPI reads, and <a href="/pricing">pricing</a> for the per-page rate.</p>
<p>If you are deciding how much of this to build, start with the 12-millisecond label on every page. It tells you which pages are pictures, which are text and which need a closer look, and it costs almost nothing to run.</p>
  `,
  image: "/images/idp-vs-ocr.png",
  featuredImage: "/images/idp-vs-ocr.png",
  category: "OCR How-To",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-11-13T00:00:00.000Z",
  last_updated: "November 13, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "readable pdf vs image pdf",
  secondary_keywords: [
    "image pdf vs readable pdf",
    "searchable pdf",
    "pdf text layer",
    "how to tell if a pdf is scanned",
    "pdf not searchable",
    "scanned pdf with text layer",
  ],
  tags: ["PDF", "OCR", "diagnostics"],
  cluster: "ocr",
  faq: [
    {
      question: "What is the difference between a readable PDF and an image PDF?",
      answer:
        "A readable PDF stores its text as characters, so you can search, select and copy it. An image PDF stores each page as a picture, so none of that works. A file can mix both, with text on some pages and pictures on others, and a picture can carry an invisible OCR text layer that may be accurate or wrong.",
    },
    {
      question: "How do I check if a PDF is searchable?",
      answer:
        "Press Ctrl+F (Cmd+F on a Mac), type a word you can see and press Enter. If it is highlighted, that page has a text layer. This checks one page only. In our test, a search that found a word on page one passed all 50 mixed files whose second page was a plain scan, so check each page when it matters.",
    },
    {
      question: "Can a PDF be partly readable and partly an image?",
      answer:
        "Yes. In our test of 50 two-page mixed files, page one had text and page two was a plain scan. A per-page label gave 'text' for page one and 'image' for page two on all 50 files, while a search for a page-one word succeeded on every file.",
    },
    {
      question: "Can a scanned PDF have text that is wrong?",
      answer:
        "Yes. In our test, 50 scans carried OCR text made from low-resolution noisy images. On average 93.4% of each page's true words were in the text layer, and the worst page held 67.8%. 22 of the 50 pages were under 95%. Ctrl+F cannot tell you this, because a search for a correctly read word still succeeds.",
    },
    {
      question: "How do I find image-only pages in a folder of PDFs?",
      answer:
        "Label every page, not just every file. Count the characters of text and measure how much of the page a picture covers: a page with no text and a full-page picture is an image page. The post includes a PyMuPDF script that does this in about 12 milliseconds per page in our tests and also flags pages whose text is drawn as shapes.",
    },
    {
      question: "How do I check if an OCR text layer is accurate?",
      answer:
        "Read the page again with a fresh OCR pass and measure what share of the existing layer's words the new read also finds. In our test, flagging pages under 0.95 agreement caught 20 of 22 bad layers and flagged none of 178 good ones. The check costs about 2.2 to 2.7 seconds per page on one Tesseract thread, so run it on a sample for large archives.",
    },
  ],
}
