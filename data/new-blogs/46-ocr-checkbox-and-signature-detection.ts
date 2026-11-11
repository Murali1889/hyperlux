import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog46: BlogPost = {
  id: "new-46",
  title: "Checkboxes and Signatures: Detecting Marks on Forms",
  slug: "ocr-checkbox-and-signature-detection",
  excerpt:
    "Tesseract's text for a checkbox was a coin flip on checked versus empty. Measuring the ink inside the box got 100% on clean forms. Tested on 1,440 boxes and 480 signature blocks.",
  description:
    "We tested checkbox and signature detection on 1,920 form elements. OCR text was a coin flip; a fill ratio check hit 100% on clean forms. Two tested scripts.",
  metaTag: "OCR Checkbox and Signature Detection on Forms, Tested",
  summary:
    "In Tesseract 5.5.2 and OpenCV tests on 1,440 checkboxes (40 forms, 3 quality levels), the characters Tesseract returned for a box told checked from empty 51% to 56% of the time, which is chance. A fill ratio threshold of 0.10 scored 480 of 480 on clean forms, 480 of 480 on 200 DPI scans and 418 of the 424 boxes found on rough copies, though box finding failed on 56 of 480 rough boxes; a per-page automatic threshold scored 50% to 55%. A review rule (empty below 0.09, marked above 0.14) sent 1% to 12% of boxes to a person. For 480 signature blocks, an ink check above the signature line judged 155 of 160 clean forms correctly, and 156 of 160 rough copies once the page was straightened first (the line was not found on 77 of 160 without it). Cursive e-signature fonts were sometimes read as a typed name. Includes both tested scripts.",
  content: `
<p>OCR engines read text, not marks, and a checkbox is a mark. In our test of 1,440 checkboxes, the characters Tesseract returned in front of each label told checked from empty about as well as a coin flip: 51% to 56% right. Measuring the dark share of pixels inside the box did far better. With one threshold of 10%, it got 480 of 480 right on clean forms, 480 of 480 on 200 DPI scans, and 418 of the 424 boxes it could find on rough copies. Signatures behaved the same way: a short check for ink above the signature line got 155 of 160 forms right on clean pages, and 156 of 160 on rough copies once the page was straightened first. Without straightening, the line itself was not found on 77 of the 160 rough copies.</p>
<p>This guide shows the numbers behind each step, two short scripts we ran, a review rule that sends doubtful boxes to a person, and the limits of a mark check. It is aimed at loan applications, medical forms, KYC forms and anything else where a tick or a signature changes what happens next.</p>

<h2>How should OCR handle checkboxes?</h2>
<p>Treat each box as a small image to measure, not as text to read. A checkbox on a form is a printed square. A person ticks it, crosses it, fills it or leaves it alone. The OCR engine sees a square outline and, if there is a mark, some ink inside. It has no concept of "checked", so whatever character it prints for the box is its best guess at a letter. A reliable pipeline therefore does three things: find the boxes, measure how much ink is inside each, and compare that to a threshold. The same approach, with a different measurement, works for the signature area. Both are layout jobs, not recognition jobs, which is why they sit next to <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout analysis and key-value extraction</a> and <a href="/resources/blogs/what-is-zonal-ocr">zonal OCR</a>. Our guide on layout analysis states in one paragraph that a checkbox should come back as marked or empty and a signature as present or missing. This guide measures how to do that.</p>

<h2>How did we test checkbox and signature detection?</h2>
<p>For checkboxes, we generated 40 forms with 12 labelled boxes each (loan application questions such as "Self employed" and "Own home"), at 300 DPI, with box sizes from 32 to 44 pixels. Each form had two boxes in each of six states: empty, an X, a tick mark (which can overshoot the box), a solid fill, hatching, and a stray speck or short pen stroke, which is not a mark. The first four count as checked, empty and speck count as unchecked. We rendered each form at three quality levels: clean, a 200 DPI scan with blur and light noise, and a rough copy (rotated up to 1.5 degrees, halved in size, blurred, with noise and JPEG compression). That is 1,440 boxes, 240 per state across the three levels. Pages were returned to full size before detection, as a normal pipeline would do.</p>
<p>For signatures, we generated 40 signature blocks in each of four states, at each of the same three levels (480 images): a blank line, a hand drawn scribble made of several smooth strokes, a name in a cursive font (the kind used by e-signature tools), and a typed name in a serif font above the line. The scribble and cursive count as signed, the blank line and the typed name do not. We used Tesseract 5.5.2 for text and OpenCV for the measurements. Everything is synthetic, which we return to in the limits.</p>

<h2>Can OCR text tell you whether a box is checked?</h2>
<p>No. We read each form in single block mode and looked at what came before the label on each line. A box was always "read" as something, whether it was ticked or not, and the something was seldom a clear X or tick. This table shows the clean forms.</p>
<table>
  <thead><tr><th>Box state</th><th>Lines with a leading character</th><th>Most common reads</th></tr></thead>
  <tbody>
    <tr><td>Empty</td><td>100%</td><td>L], [], [_], [-]</td></tr>
    <tr><td>X</td><td>39%</td><td>nothing, XX], [X], Xl</td></tr>
    <tr><td>Tick</td><td>99%</td><td>A, |, MM, Wi</td></tr>
    <tr><td>Solid fill</td><td>99%</td><td>MM, [Ml, Ml</td></tr>
    <tr><td>Hatching</td><td>65%</td><td>nothing, 7], Y]|, ¥]</td></tr>
    <tr><td>Speck (not a mark)</td><td>59%</td><td>nothing, [-], [.], L-]</td></tr>
  </tbody>
</table>
<p>The one simple rule you could build, "if there is a character in front of the label the box is checked", was right 56.0% of the time on clean forms, 51.2% on 200 DPI scans and 54.5% on rough copies, which is chance. An empty box produced a leading character 100% of the time, so the rule calls every empty box checked, and a plain X often produced no character at all. Some rows could not be matched to a label (21 of 480 on the clean forms, up to 32 on the rough copies). You can write a lookup of the strings Tesseract returns for your own forms, but it will break when the scan quality, font size or box size changes.</p>

<h2>How does the fill ratio of a box separate marked from empty?</h2>
<p>The fill ratio is the share of dark pixels in the middle of the box, with the printed outline trimmed away. We found boxes as square-ish connected shapes of 26 to 62 pixels near the left edge, trimmed 7 pixels off each side, and counted dark pixels. These are the measured ratios on the clean forms (80 boxes per state):</p>
<table>
  <thead><tr><th>State</th><th>Lowest</th><th>Median</th><th>Highest</th></tr></thead>
  <tbody>
    <tr><td>Empty</td><td>0.000</td><td>0.000</td><td>0.000</td></tr>
    <tr><td>Speck (not a mark)</td><td>0.012</td><td>0.039</td><td>0.094</td></tr>
    <tr><td>Hatching</td><td>0.128</td><td>0.294</td><td>0.482</td></tr>
    <tr><td>Tick</td><td>0.255</td><td>0.343</td><td>0.476</td></tr>
    <tr><td>X</td><td>0.291</td><td>0.346</td><td>0.549</td></tr>
    <tr><td>Solid fill</td><td>1.000</td><td>1.000</td><td>1.000</td></tr>
  </tbody>
</table>
<p>The groups separate cleanly: no unchecked box was above 0.094 and no real mark was below 0.128. The gap is narrow for the lightest hatching, and our specks were small, so the exact numbers will differ on real forms. Still, a threshold near 0.10 sits in the gap, and that is what the next section tests.</p>

<h2>Which threshold works, and how much does it matter?</h2>
<p>We tried six fixed thresholds on the boxes that were found. Each cell shows the share of boxes classified correctly.</p>
<table>
  <thead><tr><th>Threshold</th><th>Clean (480 boxes)</th><th>200 DPI scan (480)</th><th>Rough copy (424 found)</th></tr></thead>
  <tbody>
    <tr><td>0.05</td><td>93.8% (30 false marks)</td><td>93.8% (30 false marks)</td><td>94.8%</td></tr>
    <tr><td>0.10</td><td>100.0%</td><td>100.0%</td><td>98.6%</td></tr>
    <tr><td>0.15</td><td>97.7% (11 marks missed)</td><td>99.6%</td><td>98.3%</td></tr>
    <tr><td>0.20</td><td>95.6% (21 missed)</td><td>97.5%</td><td>96.9%</td></tr>
    <tr><td>0.25</td><td>92.7% (35 missed)</td><td>96.9%</td><td>95.5%</td></tr>
    <tr><td>0.30</td><td>85.2% (71 missed)</td><td>90.8%</td><td>91.7%</td></tr>
  </tbody>
</table>
<p>Too low a threshold calls stray specks marks (30 false marks at 0.05). Too high a threshold misses light ticks and hatching (71 missed marks at 0.30, which sits in the 25 to 30 range that at least one vendor tutorial suggests for mixed marking styles). The usable window was narrow, roughly 0.10 to 0.15, and it was set by the thinnest mark and the largest speck in our data. Treat 0.10 as a starting value to test on your own forms, not a constant.</p>

<h2>Why does an automatic per-page threshold fail?</h2>
<p>A tempting fix is to let each page choose its own threshold: split the box ratios into two groups and take the midpoint. On our forms that was right only 50.2% of the time on clean pages, 53.8% on scans and 55.2% on rough copies. The likely reason is that solid fills (ratio 1.0) and empty boxes (0.0) pull the midpoint to about 0.5, above every X and tick (medians 0.34), so ticks and crosses are called empty. We did not test other clustering rules, but the lesson holds: an adaptive threshold needs to know which mark styles to expect, and a fixed value chosen from the lightest real mark is more dependable than a page level guess.</p>

<h2>What breaks box finding on rough scans?</h2>
<p>Finding the boxes was the weak step, not classifying them. On clean and 200 DPI forms all 480 boxes were found. On the rough copies, 424 of 480 (88.3%) were found, because noise broke some of the outlines into pieces. We also saw 3.0 to 4.9 extra square-ish shapes per form beyond the 12 real boxes (197, 120 and 157 over 40 forms for the three levels). We assumed these were the first letters of the labels, which sit near the left edge, but we did not verify that. Our matching step ignored them by lining shapes up with known row positions, which a real pipeline cannot do, so on real forms expect to filter candidates by position, by spacing or against a template of where boxes should be. The same layout work appears in <a href="/resources/blogs/what-is-zonal-ocr">zonal OCR</a>, where we tested how far a page can shift before fixed zones fail.</p>

<h2>Which boxes should go to a person?</h2>
<p>Instead of one threshold, use three outcomes: empty below 0.09, marked above 0.14, and review between them or when no box was found. This is the rule we ran.</p>
<table>
  <thead><tr><th>Level</th><th>Decided automatically</th><th>Wrong among decided</th><th>Sent to review</th></tr></thead>
  <tbody>
    <tr><td>Clean</td><td>471 of 480</td><td>0</td><td>9 (1.9%)</td></tr>
    <tr><td>200 DPI scan</td><td>475 of 480</td><td>0</td><td>5 (1.0%)</td></tr>
    <tr><td>Rough copy</td><td>423 of 480</td><td>6</td><td>57 (11.9%)</td></tr>
  </tbody>
</table>
<p>On clean and scanned forms nothing that was decided was wrong, and about 1% to 2% went to a person. On rough copies 11.9% went to review, mostly boxes that were not found at all, and 6 of the 423 decided boxes were wrong. That is the number to watch: if wrong decisions must be zero, the gray zone has to be wider or the rough copies need a better source. The code is below, and the counts above come from this version.</p>
<pre><code>import cv2, numpy as np

def find_boxes(page, x_max=220, size=(26, 62)):
    """page: 8-bit grayscale, normalised to 300 DPI. Returns square-ish ink shapes as (x, y, w, h), top to bottom."""
    ink = (page &lt; 140).astype(np.uint8)
    n, _, stats, _ = cv2.connectedComponentsWithStats(ink, connectivity=8)
    boxes = []
    for i in range(1, n):
        x, y, w, h, _ = stats[i]
        if size[0] &lt;= w &lt;= size[1] and size[0] &lt;= h &lt;= size[1] and 0.75 &lt;= w / h &lt;= 1.3 and x &lt; x_max:
            boxes.append((x, y, w, h))
    return sorted(boxes, key=lambda b: b[1])

def fill_ratio(page, box, margin=7):
    """Share of dark pixels inside the box, ignoring the printed outline."""
    x, y, w, h = box
    inner = page[y + margin:y + h - margin, x + margin:x + w - margin]
    return float((inner &lt; 140).mean()) if inner.size else 0.0

def decide(ratio, empty_below=0.09, marked_above=0.14):
    if ratio &lt; empty_below:
        return "empty"
    if ratio &gt; marked_above:
        return "marked"
    return "review"</code></pre>
<p>Run <code>find_boxes</code> on a page normalised to about 300 DPI, call <code>fill_ratio</code> for each box and then <code>decide</code>. The <code>x_max</code> value limits the search to boxes near the left margin, which suited our forms and will not suit forms with boxes elsewhere. Pages that arrive tilted or turned should be straightened first, as shown in our tests of <a href="/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts">image preprocessing</a> and <a href="/resources/blogs/ocr-upside-down-sideways-pages">upside down and sideways pages</a>.</p>

<h2>How do you detect a signature?</h2>
<p>Find the signature line, look at the area just above it, and measure how much ink is there. A blank line has none. For the four states, the ink ratio was 0.000 for blank, 0.011 to 0.017 for the typed name, 0.035 to 0.060 for the cursive e-signature and 0.030 to 0.119 for the hand drawn scribble on the clean pages. A threshold of 0.4% of the area separated blank from anything with ink on all 120 blank lines. This is the share of forms each state was judged correctly, at three levels, using the script below (a blank line and a typed name count as not signed):</p>
<table>
  <thead><tr><th>Level</th><th>Signed forms caught (of 80)</th><th>Unsigned called signed (of 80)</th><th>Forms judged correctly (of 160)</th></tr></thead>
  <tbody>
    <tr><td>Clean</td><td>75</td><td>0</td><td>155 (96.9%)</td></tr>
    <tr><td>200 DPI scan</td><td>74</td><td>0</td><td>154 (96.3%)</td></tr>
    <tr><td>Rough copy, page straightened first</td><td>77</td><td>1</td><td>156 (97.5%)</td></tr>
  </tbody>
</table>
<p>A blank signature line was recognised as blank on all 120 forms with a straightened page. Every scribble was caught on all three levels. The misses were cursive e-signatures, which the next section explains.</p>

<h2>Can OCR tell a typed name from a signature?</h2>
<p>Partly. We ran Tesseract on the signature area and treated a result with at least two words, six letters and a confidence of 80 or more as a typed name. Printed names were read with a mean confidence of 96.4 (range 95.8 to 96.8) on the clean pages, so all 40 were identified as typed. Scribbles were read with a mean confidence of 43.0 and were never taken for a name. The problem is the cursive font: its mean confidence was 55.0 but the range ran from 0 to 94, and in 5 of 40 clean forms Tesseract read the name correctly at a confidence of 80 or more (for example "Maria Garcia" at 92 and "Priya Patel" at 94). Those forms were then judged typed and not signed, which is the 5 missed forms at the clean level (6 at 200 DPI). Many e-signature tools draw the signer's name in a script font, so an OCR check that says "this is readable text" cannot by itself say "this is not a signature". If your forms contain e-signatures, read the text but also check how the signature was applied, or accept that a readable cursive name may need a human look.</p>
<p>In our data the ink ratio alone also separated typed names (at most 0.017) from cursive and scribbled signatures (at least 0.030). We would not rely on that: it depends on one typed font and size, and a larger or bold printed name will overlap.</p>

<h2>Why must you straighten the page before looking for the line?</h2>
<p>Because the line finder looks for a long horizontal run, and a tilted line is not one. On the rough copies (tilted by up to 1.5 degrees, which moves a 1,000 pixel line by about 26 pixels) the line was not found on 77 of the 160 forms, so the check could not run at all. Straightening the page first with a projection search, the same method as in our <a href="/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts">preprocessing tests</a>, brought that to 0 and the correct judgements to 156 of 160. The first version of this check on the unstraightened rough copies had been right on 77 of the 83 forms where it ran, which would have looked fine had we not counted the forms where it did not run. The practical rule: report how often a check could not run, not only how often it was right.</p>
<pre><code>import os, subprocess, tempfile
import cv2, numpy as np

def skew_angle(page):
    """Tilt in degrees, found by rotating until the dark rows line up best."""
    small = cv2.resize(page, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA) if page.shape[1] &gt; 1500 else page
    ink = (small &lt; 128).astype(np.uint8) * 255
    if ink.sum() == 0:
        return 0.0
    h, w = ink.shape
    best, best_score = 0.0, -1
    for angle in np.arange(-10, 10.01, 0.25):
        M = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1.0)
        score = np.var(cv2.warpAffine(ink, M, (w, h)).sum(axis=1))
        if score &gt; best_score:
            best, best_score = angle, score
    return float(best)

def straighten(page, min_angle=0.5):
    angle = skew_angle(page)
    if abs(angle) &lt; min_angle:
        return page
    h, w = page.shape
    M = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1.0)
    return cv2.warpAffine(page, M, (w, h), borderValue=255)

def find_signature_line(page):
    ink = (page &lt; 140).astype(np.uint8) * 255
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (max(60, page.shape[1] // 6), 1))
    lines = cv2.morphologyEx(ink, cv2.MORPH_OPEN, kernel)
    if not lines.any():
        return None
    y = int(np.argmax(lines.sum(axis=1)))
    xs = np.where(lines[y] &gt; 0)[0]
    return int(xs.min()), int(xs.max()), y

def read_text(region):
    """OCR one line of text with Tesseract (single line mode). Returns the words and their mean confidence."""
    fd, path = tempfile.mkstemp(suffix=".png")
    os.close(fd)
    cv2.imwrite(path, region)
    out = subprocess.run(["tesseract", path, "stdout", "--psm", "7", "tsv"], capture_output=True, text=True).stdout
    os.remove(path)
    words, confs = [], []
    for row in out.splitlines()[1:]:
        cols = row.split("\\t")
        if len(cols) &gt;= 12 and cols[0] == "5" and cols[11].strip():
            words.append(cols[11]); confs.append(float(cols[10]))
    return words, (sum(confs) / len(confs) if confs else 0.0)

def classify(page, height=150, ink_min=0.004):
    """Returns 'no line', 'blank', 'typed' (a clearly readable printed name) or 'signature'."""
    page = straighten(page)
    line = find_signature_line(page)
    if line is None:
        return "no line"
    x0, x1, y = line
    region = page[max(0, y - height):y - 4, x0:x1]
    if float((region &lt; 140).mean()) &lt; ink_min:
        return "blank"
    words, conf = read_text(region)
    letters = "".join(c for c in " ".join(words) if c.isalpha())
    if len(letters) &gt;= 6 and conf &gt;= 80 and len(words) &gt;= 2:
        return "typed"
    return "signature"</code></pre>
<p>Call <code>classify(page)</code> with an 8-bit grayscale page normalised to about 300 DPI. The result is one of four words: no line, blank, typed or signature. The Tesseract command line must be on the path. We ran exactly this code on all 480 images and it gave the same answers as the results reported above.</p>

<h2>What does a mark check not prove?</h2>
<p>That a box is ticked or a line has ink is not the same as the document being valid. It does not show that the right person signed, that the signature matches one on file, that the ink was added after the form was printed or that a tick was not added later. Signature verification and tamper checks are separate jobs: see <a href="/resources/blogs/document-fraud-detection-api">document fraud detection</a> for the signals that exist, and <a href="/resources/blogs/remote-online-notarization-verification">remote online notarization</a> for how signing itself is verified. For the rest of the automation chain, matching the person across documents and checking amounts, see <a href="/resources/blogs/transforming-financial-services-the-complete-guide-to-document-automation">document automation for financial services</a>.</p>

<h2>Where do these checks matter?</h2>
<p>Wherever a mark changes a decision. A loan application has self-employment and residency tick boxes that can change how the file is handled (see <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a> and <a href="/resources/blogs/auto-loan-document-ocr">auto loan documents</a>). A W-2 has three checkboxes in box 13 (<a href="/resources/blogs/ocr-for-tax-documents">OCR for tax documents</a>). Claim and authorization forms depend on boxes and signatures (<a href="/resources/blogs/cms-1500-form-processing">CMS-1500 forms</a> and <a href="/resources/blogs/prior-authorization-automation">prior authorization</a>). In each case, a wrong mark is a quiet error of the kind our <a href="/resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now">receipt tests</a> describe: nothing in the output marks it as wrong, so the review rule above matters more than the average accuracy.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI was built by HyperVerge. It uses a layout aware engine with a vision language model fallback for complex pages. On its own 2026 benchmark of 1,700 documents it scored 97% to 99% on clean text, 93% on invoice line items, 91% on multi-page bank statements and 76% on phone receipts, at about 1.1 seconds per page. That benchmark did not measure checkbox or signature detection, and it is not comparable to the synthetic Tesseract tests here, so test a sample of your own forms with the demo before you rely on any engine for marks. Pricing starts from $0.02 per page, and access starts with a demo and then a free 30 day trial for qualified lenders. See the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> and <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a> for how we compare engines.</p>

<h2>What do these tests not show?</h2>
<ul>
  <li>The forms are synthetic, with one layout, one font, boxes on the left and drawn marks. Real people use ticks that overshoot, circles, tiny dots, pencil, strike-throughs and corrections.</li>
  <li>Thresholds were chosen from the same kind of data they were tested on, and the gap between the lightest mark and the largest speck was narrow. Expect to retune.</li>
  <li>The signatures are scribbles made from smooth strokes and one cursive font, not real handwriting, and the typed name used one font and size.</li>
  <li>We tested Tesseract 5.5.2 and OpenCV only. Engines with a trained mark detector will behave differently, and we did not test any.</li>
  <li>The rough copy level is one recipe of tilt, shrinking, blur, noise and compression.</li>
  <li>40 forms per level means small differences, such as 98.3% against 98.6%, are within noise.</li>
</ul>

<h2>Sources and how we checked this</h2>
<p>All results are from our own runs: 1,440 boxes (40 forms, 12 boxes, 3 levels) and 480 signature blocks (40 per state, 4 states, 3 levels). Both scripts above are the versions we ran. We checked the published checkbox code against all 1,440 boxes (471, 475 and 423 decided automatically, with 0, 0 and 6 wrong) and the signature code against all 480 images. Public guidance on checkbox detection, including OMR documentation from vendors and open source write-ups, suggests fill percentage thresholds and contour detection. In the pages we found, the thresholds were suggested values without published error rates for a Tesseract and OpenCV approach, which is why we measured them.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 11, 2026",
  datePublished: "2026-11-11T00:00:00.000Z",
  dateModified: "2026-11-11T00:00:00.000Z",
  last_updated: "November 11, 2026",
  readTime: "16 min read",
  author: nupuraUghade,
  primary_keyword: "ocr checkbox detection",
  secondary_keywords: [
    "checkbox detection opencv",
    "detect signature on form",
    "tesseract checkbox",
    "ocr tick mark detection",
    "signature present detection"
],
  tags: ["OCR", "checkboxes", "signatures", "forms"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Can Tesseract tell if a checkbox is checked?",
      answer:
        "Not reliably. In our test of 1,440 boxes, the characters Tesseract printed in front of each label separated checked from empty 51% to 56% of the time, which is about chance. An empty box produced a leading character 100% of the time on clean forms.",
    },
    {
      question: "How do I detect a checked checkbox with OpenCV?",
      answer:
        "Find the square outlines, measure the share of dark pixels inside each box with the outline trimmed away, and compare it to a threshold. A threshold of 0.10 scored 480 of 480 on clean and 200 DPI forms and 418 of the 424 boxes found on rough copies. Retune it on your own forms.",
    },
    {
      question: "What fill ratio threshold should I use for checkboxes?",
      answer:
        "In our data, real marks were at least 0.128 and unchecked boxes with stray specks were at most 0.094, so 0.10 worked. At 0.05 specks became false marks (30 of 480), and at 0.30 71 marks were missed. The usable window was narrow.",
    },
    {
      question: "Why does an automatic threshold fail on checkboxes?",
      answer:
        "Splitting each page's fill ratios into two groups was right only 50% to 55% of the time. Solid fills and empty boxes likely pull the midpoint to about 0.5, above every X and tick mark, which sit near 0.34.",
    },
    {
      question: "How do I detect whether a signature is present on a form?",
      answer:
        "Find the signature line, then measure the dark pixels just above it. A threshold of 0.4% separated blank lines from lines with ink on all 120 blank lines, and judged 155 of 160 clean forms correctly. Straighten the page first: on rough copies the line was not found on 77 of 160 forms until we did.",
    },
    {
      question: "Can OCR tell a typed name from a signature?",
      answer:
        "Partly. Printed names were read with a mean confidence of 96.4 and scribbles with 43.0, but a cursive font used by e-signature tools was read as a clear name in 5 of 40 clean forms. Readable text alone does not prove a signature is missing.",
    },
    {
      question: "Does a mark check prove a form is valid?",
      answer:
        "No. It shows ink is present, not who signed, whether the signature matches one on file or whether the mark was added later. Those are separate verification and tamper checks.",
    },
  ],
}
