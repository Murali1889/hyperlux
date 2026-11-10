import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog45: BlogPost = {
  id: "new-45",
  title: "OCR Preprocessing: Which Steps Help and Which Hurt",
  slug: "ocr-image-preprocessing-what-helps-what-hurts",
  excerpt:
    "We tested 12 preprocessing steps on 14 image problems (6,480 Tesseract reads). Most steps did nothing or hurt. A check-first recipe cut mean error from 12.2% to 1.1%.",
  description:
    "We tested 12 preprocessing steps on 14 image problems in 6,480 reads. Most did nothing or hurt; a check-first recipe cut mean error from 12.2% to 1.1%.",
  metaTag: "OCR Image Preprocessing: What Helps and What Hurts",
  summary:
    "In Tesseract 5.5.2 tests of 12 preprocessing steps on 14 image problems (5,040 reads, 30 pages each), eight problems cost under 0.5% error with no cleanup, and six needed one specific fix: median blur for heavy noise (8.2% to 0.1%), background normalization or adaptive thresholding for uneven lighting (45.1% to 0.1%), a 2x enlargement for 66 DPI text (22.9% to 0.4%), and deskewing for an 8 degree tilt (5.2% to 1.3%). Adaptive thresholding, CLAHE and Otsu hurt three to seven conditions each. On 30 new pages and 16 conditions (1,440 reads), a recipe that measures the page first scored 1.1% mean error, against 12.2% with no cleanup and 12.0% for an always-on enlarge, Otsu, median and deskew pipeline. Includes the tested script.",
  content: `
<p>For most pages, Tesseract does not need preprocessing, and the steps that popular guides call standard (enlarge, binarize, denoise, sharpen) often make results worse. We ran 12 preprocessing steps against 14 image problems, 6,480 reads in all with Tesseract 5.5.2. Eight of the 14 problems cost under 0.5% error with no cleanup at all, including 100 DPI scans, blur, a 3 degree tilt and low contrast. Six problems did need help, and each had one fix that worked: a median filter for heavy noise (8.2% to 0.1%), background normalization or adaptive thresholding for uneven lighting (45.1% to 0.1%), a 2x enlargement for tiny text (22.9% to 0.4%), and deskewing for an 8 degree tilt (5.2% to 1.3%). On 30 fresh pages, a recipe that checks the page first and applies only the steps it needs cut mean error from 12.2% to 1.1%, while the common always-on pipeline scored 12.0%.</p>
<p>This guide shows the full results, which steps hurt and by how much, the short script that decides which steps to run, and how to check your own pages in about ten minutes. It is complementary to our guide on <a href="/resources/blogs/how-does-ocr-work">how OCR works</a>, which measures what each problem costs. Here the question is which fix is worth running.</p>

<h2>Does preprocessing improve OCR accuracy?</h2>
<p>Only when the page has the specific problem the step fixes. Across 14 conditions and 12 steps, no step helped everywhere, and some of the most recommended ones hurt more conditions than they helped. This table counts the conditions out of 14 where a step changed error by more than one percentage point compared with doing nothing.</p>
<table>
  <thead><tr><th>Step</th><th>Helped</th><th>Hurt</th><th>Mean error over the 14 conditions</th></tr></thead>
  <tbody>
    <tr><td>None (baseline)</td><td>0</td><td>0</td><td>6.7%</td></tr>
    <tr><td>Background normalization</td><td>1 (uneven lighting)</td><td>0</td><td>3.5%</td></tr>
    <tr><td>Sharpen</td><td>2</td><td>3</td><td>4.6%</td></tr>
    <tr><td>Pad with a border</td><td>1</td><td>0</td><td>6.3%</td></tr>
    <tr><td>Deskew</td><td>1 (8 degree tilt)</td><td>0</td><td>6.4%</td></tr>
    <tr><td>Non-local means denoise</td><td>0</td><td>2</td><td>7.3%</td></tr>
    <tr><td>Otsu binarize</td><td>0</td><td>3</td><td>9.1%</td></tr>
    <tr><td>Upscale 2x</td><td>2</td><td>2</td><td>10.0%</td></tr>
    <tr><td>CLAHE contrast</td><td>2</td><td>3</td><td>11.2%</td></tr>
    <tr><td>Median blur 3</td><td>1 (noise)</td><td>4</td><td>11.6%</td></tr>
    <tr><td>Thicken text (erode)</td><td>1</td><td>4</td><td>13.0%</td></tr>
    <tr><td>Adaptive threshold</td><td>1 (uneven lighting)</td><td>7</td><td>16.6%</td></tr>
  </tbody>
</table>
<p>Three steps never hurt in our test: background normalization, deskewing and adding a border. Three steps that are in almost every checklist, Otsu binarization, CLAHE and adaptive thresholding, helped two conditions at most and hurt between three and seven. Adaptive thresholding was the worst: it fixed uneven lighting and damaged seven other conditions, including a page with only light noise.</p>

<h2>How did we test OCR preprocessing?</h2>
<p>We generated English pages of eight lines each, about 11 words per line, with words, amounts such as 8,871.01, invoice numbers and dates, in four fonts at 300 DPI (letters about 22 pixels tall). We then applied one problem at a time, 14 in all:</p>
<ul>
  <li><strong>Problems we expected to be easy:</strong> 100 DPI (letters about 8 pixels tall), blur with a sigma of 2 pixels, a 3 degree tilt, low contrast (gray text 150 on 225), JPEG quality 20 at half size, and light noise (sigma 12).</li>
  <li><strong>Problems we expected to be hard:</strong> heavy noise (sigma 28 plus salt and pepper), a shadow gradient across the page (45% to 100% brightness), 66 DPI text (letters about 6 pixels tall), blur with a sigma of 3.5, an 8 degree tilt, very low contrast (190 on 215) and JPEG quality 8 at about a third of the size.</li>
  <li>A clean page as the control.</li>
</ul>
<p>The 12 steps were applied alone, one at a time: upscale 2x (cubic), Otsu binarization, adaptive Gaussian threshold (block 31), 3 by 3 median blur, non-local means denoising, unsharp mask, deskewing by projection search, a 30 pixel border, CLAHE, background normalization (the divide-out-the-background step from our receipt tests) and thickening the dark text. We read every page in single block mode and scored character error against the known text. The analysis used 30 pages per condition and step, 5,040 reads. We then wrote a recipe from what we saw and tested it on a second set of 30 new pages with different text, 16 conditions (the 14 plus two combinations) and three methods, another 1,440 reads. Pages are synthetic and clean text on white, so the results describe the effect of the problem and the fix, not a real scanner.</p>

<h2>Which problems does Tesseract handle without help?</h2>
<p>Eight of the 14 conditions were read with 0.4% error or less before any cleanup: the clean page (0.1%), 100 DPI (0.2%), blur with a sigma of 2 (0.1%), a 3 degree tilt (0.4%), low contrast (0.1%), JPEG quality 20 (0.1%), light noise (0.1%) and very low contrast (0.1%). That is the main finding for a team deciding whether to build a cleanup stage: on moderately degraded pages, the engine already copes. A 3 degree tilt cost 0.4%, and in the same test deskewing only brought it to 0.1%. Very low contrast at 190 gray on 215 cost nothing. Our test of fax and TIFF files looks at the same question for one common source: whether to <a href="/resources/blogs/convert-fax-tiff-jpg-png-to-text">clean and enlarge a fax before OCR</a>.</p>
<p>It matters for cost too. Every extra step adds time per page and a way to break a page that was fine. In the eight easy conditions, adaptive thresholding raised error in three of them (92.3% on light noise, 1.5% on very low contrast and 1.3% on JPEG quality 20), and median blur broke the 100 DPI page (0.2% to 16.7%).</p>

<h2>Which problems break it, and what fixes each one?</h2>
<p>Six conditions had real error without cleanup. This table shows the error for each, with every step applied alone. The best result in each column is in the text below the table.</p>
<table>
  <thead><tr><th>Step</th><th>Heavy noise</th><th>Uneven light</th><th>66 DPI text</th><th>8 degree tilt</th><th>Blur sigma 3.5</th><th>JPEG q8</th></tr></thead>
  <tbody>
    <tr><td>None</td><td>8.2%</td><td>45.1%</td><td>22.9%</td><td>5.2%</td><td>4.2%</td><td>7.2%</td></tr>
    <tr><td>Upscale 2x</td><td>88.8%</td><td>30.3%</td><td>0.4%</td><td>5.9%</td><td>6.0%</td><td>7.0%</td></tr>
    <tr><td>Otsu</td><td>8.6%</td><td>45.0%</td><td>35.4%</td><td>5.9%</td><td>14.2%</td><td>15.0%</td></tr>
    <tr><td>Adaptive</td><td>67.9%</td><td>0.1%</td><td>30.9%</td><td>6.1%</td><td>7.2%</td><td>22.8%</td></tr>
    <tr><td>Median 3</td><td>0.1%</td><td>46.1%</td><td>75.6%</td><td>4.6%</td><td>5.2%</td><td>13.2%</td></tr>
    <tr><td>Non-local means</td><td>8.9%</td><td>44.8%</td><td>23.3%</td><td>5.2%</td><td>9.0%</td><td>6.8%</td></tr>
    <tr><td>Sharpen</td><td>9.6%</td><td>8.5%</td><td>27.7%</td><td>5.5%</td><td>1.7%</td><td>9.9%</td></tr>
    <tr><td>Deskew</td><td>8.2%</td><td>45.1%</td><td>22.9%</td><td>1.3%</td><td>4.2%</td><td>7.2%</td></tr>
    <tr><td>Border</td><td>8.2%</td><td>40.0%</td><td>22.6%</td><td>4.8%</td><td>4.2%</td><td>7.1%</td></tr>
    <tr><td>CLAHE</td><td>92.9%</td><td>19.3%</td><td>20.1%</td><td>5.3%</td><td>6.7%</td><td>10.9%</td></tr>
    <tr><td>Background normalize</td><td>8.2%</td><td>0.1%</td><td>23.3%</td><td>5.2%</td><td>4.1%</td><td>7.2%</td></tr>
    <tr><td>Thicken text</td><td>100.0%</td><td>20.6%</td><td>38.8%</td><td>5.2%</td><td>5.3%</td><td>10.4%</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>Heavy noise:</strong> a 3 by 3 median blur took error from 8.2% to 0.1%. The fancier non-local means denoiser did nothing (8.9%).</li>
  <li><strong>Uneven lighting:</strong> adaptive thresholding and background normalization both reached 0.1% from 45.1%. Sharpening got 8.5% and CLAHE 19.3%. This is the same fix that worked for shadows on receipts in our <a href="/resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now">receipt OCR tests</a>, and background normalization is the safer choice because it never hurt anywhere else.</li>
  <li><strong>Tiny text:</strong> a 2x cubic enlargement took 66 DPI text from 22.9% to 0.4%. Nothing else came close, and several steps made it worse.</li>
  <li><strong>An 8 degree tilt:</strong> deskewing reached 1.3%. The remaining error is probably the page edges and rotation interpolation, which we did not test further. Pages that are turned by 90 degrees or more are a separate problem, tested in <a href="/resources/blogs/ocr-upside-down-sideways-pages">upside down and sideways pages</a>.</li>
  <li><strong>Heavy blur:</strong> sharpening took 4.2% to 1.7%, the only step that helped, but it hurt noisy, tiny and heavily compressed pages. Use it only when you know the page is blurred.</li>
  <li><strong>Heavy JPEG compression (quality 8):</strong> nothing helped. The best result was 6.8% against 7.2% unprocessed, which is within noise for 30 pages. Compression artifacts are damage you cannot easily undo, so ask for a better source file instead.</li>
</ul>

<h2>Which steps make OCR worse?</h2>
<p>Seven results are large enough to remember. Enlarging a noisy page 2x took error from 8.2% to 88.8%, and CLAHE took it to 92.9%, both probably because the noise is amplified along with the text, though we did not isolate the mechanism. Adaptive thresholding on the same noisy page produced 67.9%, and on the light noise page (where nothing was needed) it produced 92.3%. Thickening the text on the noisy page gave 100.0%. On the other side, the median blur that fixes noise cut tiny text to pieces: 16.7% error on the 100 DPI page and 75.6% on the 66 DPI page, most likely because a 3 by 3 filter removes thin strokes when the letters are only 6 to 8 pixels tall. Otsu binarization raised blur from 4.2% to 14.2% and heavy JPEG from 7.2% to 15.0%.</p>
<p>The pattern is that steps which assume a problem (noise to remove, a background to flatten, small text to enlarge) do harm on a page that has a different problem. That is why the order and the conditions matter more than the list. For the problems that make a page worse in other ways, see our tests of <a href="/resources/blogs/ocr-stamps-watermarks-highlighter">stamps, watermarks and highlighter</a>, where a dark cutoff fixed one problem and broke dark pages in the same way.</p>

<h2>Why does the usual preprocessing pipeline fail?</h2>
<p>The most common advice is a fixed sequence applied to every page. We tested one: enlarge 2x, Otsu binarize, 3 by 3 median blur, deskew. On the 30 held-out pages it did not beat doing nothing. Mean error across 16 conditions was 12.0% for the fixed pipeline and 12.2% with no preprocessing at all.</p>
<table>
  <thead><tr><th>Condition (30 new pages)</th><th>No preprocessing</th><th>Check-first recipe</th><th>Fixed pipeline</th></tr></thead>
  <tbody>
    <tr><td>Clean</td><td>0.0%</td><td>0.0%</td><td>0.1%</td></tr>
    <tr><td>100 DPI</td><td>0.1%</td><td>0.1%</td><td>0.7%</td></tr>
    <tr><td>Heavy noise</td><td>9.8%</td><td>0.0%</td><td>12.1%</td></tr>
    <tr><td>Uneven light</td><td>47.2%</td><td>0.0%</td><td>47.8%</td></tr>
    <tr><td>66 DPI text</td><td>28.4%</td><td>0.6%</td><td>10.5%</td></tr>
    <tr><td>Blur sigma 3.5</td><td>4.9%</td><td>4.9%</td><td>18.0%</td></tr>
    <tr><td>8 degree tilt</td><td>5.3%</td><td>1.0%</td><td>1.2%</td></tr>
    <tr><td>JPEG q8</td><td>9.7%</td><td>9.7%</td><td>10.5%</td></tr>
    <tr><td>Uneven light, light noise and 3 degree tilt</td><td>58.4%</td><td>0.1%</td><td>76.6%</td></tr>
    <tr><td>66 DPI text with light noise</td><td>31.3%</td><td>1.2%</td><td>13.2%</td></tr>
    <tr><td><strong>Mean of all 16 conditions</strong></td><td><strong>12.2%</strong></td><td><strong>1.1%</strong></td><td><strong>12.0%</strong></td></tr>
  </tbody>
</table>
<p>The fixed pipeline helped the tiny text and tilted pages, did nothing for uneven lighting (Otsu is one global cutoff, so it cannot flatten a gradient) and badly hurt blurred pages (18.0%) and the combined shadow, noise and tilt page (76.6%). The table shows 10 of the 16 conditions; the other six (low contrast, very low contrast, light noise, blur sigma 2, JPEG q20 and a 3 degree tilt alone) were 0.4% or less for every method.</p>

<h2>What does the check-first recipe do?</h2>
<p>It measures the page, then applies only what the measurements call for. Four measurements decide the steps: the tilt angle (projection search, applied if it is 1 degree or more), the range of the background brightness (normalize if it spans more than 40 out of 255), the noise level (Immerkaer's estimate; median blur if above 20), and the height of the letters (enlarge 2x if under 7 pixels, and not on a noisy page). We chose these thresholds from the first set of pages. On three pages per condition the measurements separated the cases clearly: noise estimates were 23.7 for heavy noise and 8.6 for light noise; the background range was 126 for the shadow page and 0 to 2 for all others; letter height was 6.3 pixels for the 66 DPI text and 7.7 for the 100 DPI text, which is the tightest margin, so check that threshold on your own pages. The code is below, and the held-out figures come from exactly this version.</p>
<pre><code>import cv2, numpy as np

def noise_sigma(a):
    """Immerkaer noise estimate: close to the noise standard deviation, text edges add a little."""
    k = np.array([[1, -2, 1], [-2, 4, -2], [1, -2, 1]], np.float32)
    h, w = a.shape
    conv = cv2.filter2D(a.astype(np.float32), -1, k)[1:-1, 1:-1]
    return float(np.sqrt(np.pi / 2) / 6 * np.abs(conv).sum() / ((w - 2) * (h - 2)))

def background_range(a):
    k = max(15, (min(a.shape) // 30) | 1)
    bg = cv2.medianBlur(cv2.dilate(a, np.ones((k, k), np.uint8)), k | 1)
    return float(np.percentile(bg, 95) - np.percentile(bg, 5))

def text_height(a):
    """Median height in pixels of dark connected shapes (roughly the letter height)."""
    _, ink = cv2.threshold(a, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    n, _, stats, _ = cv2.connectedComponentsWithStats(ink)
    hs = [s[3] for s in stats[1:] if s[4] &gt;= 6]
    return float(np.median(hs)) if hs else 0.0

def skew_angle(a):
    small = cv2.resize(a, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA) if a.shape[1] &gt; 1500 else a
    ink = (small &lt; 128).astype(np.uint8) * 255
    if ink.sum() == 0: return 0.0
    h, w = ink.shape; best, bs = 0.0, -1
    for ang in np.arange(-10, 10.01, 0.25):
        M = cv2.getRotationMatrix2D((w / 2, h / 2), ang, 1.0)
        s = np.var(cv2.warpAffine(ink, M, (w, h)).sum(axis=1))
        if s &gt; bs: bs, best = s, ang
    return float(best)

def prep(a, noise_max=20, bg_max=40, min_height=7, max_angle=1.0):
    """a: 8-bit grayscale page. Returns the cleaned page. Each step runs only if the page needs it."""
    ang = skew_angle(a)
    if abs(ang) &gt;= max_angle:
        h, w = a.shape
        M = cv2.getRotationMatrix2D((w / 2, h / 2), ang, 1.0)
        a = cv2.warpAffine(a, M, (w, h), borderValue=int(np.median(a)))
    if background_range(a) &gt; bg_max:
        k = max(15, (min(a.shape) // 30) | 1)
        bg = cv2.medianBlur(cv2.dilate(a, np.ones((k, k), np.uint8)), k | 1)
        a = cv2.normalize(255 - cv2.absdiff(a, bg), None, 0, 255, cv2.NORM_MINMAX)
    noisy = noise_sigma(a) &gt; noise_max
    if noisy:
        a = cv2.medianBlur(a, 3)
    if text_height(a) &lt; min_height and not noisy:
        a = cv2.resize(a, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
    return a</code></pre>
<p>Use it with <code>prep(cv2.imread(path, 0))</code> and write the result before OCR. It took about 0.05 seconds per page on our 2,100 by 760 pixel test pages. A full letter page at 300 DPI has about five times as many pixels, so expect more, mostly for the tilt search. It leaves clean pages alone: the clean page scored 0.0% with it, the same as with no cleanup. On the held-out pages it brought mean error from 12.2% to 1.1%. The two conditions it did not fix, blur with a sigma of 3.5 (4.9%) and JPEG quality 8 (9.7%), are the ones where we found no safe step. Combinations we did not test, such as heavy noise on tiny text, will need a look: the recipe skips the enlargement on noisy pages because enlarging noise was the worst result in the whole test.</p>

<h2>How do you check whether your own pages need preprocessing?</h2>
<ol>
  <li><strong>Take 20 to 30 real pages</strong> that look the way your worst inputs do, and type or copy the true text for a few lines of each.</li>
  <li><strong>Read them with no cleanup</strong> and record the error. If it is already below 1%, stop: a cleanup stage will cost more than it saves. Our <a href="/resources/blogs/how-to-measure-ocr-accuracy">guide to measuring OCR accuracy</a> explains the scoring.</li>
  <li><strong>Find the problem by measurement.</strong> Compute the noise estimate, the background range, the letter height and the tilt for the bad pages. The functions in the script above do that.</li>
  <li><strong>Add one step at a time</strong> for the problem you found and compare against the baseline on the same pages, including a few clean ones to see whether the step harms them.</li>
  <li><strong>Keep the step only if it helps without hurting the clean pages.</strong> Re-run the check when the scanner, the camera or the source changes.</li>
</ol>
<p>If the page is a photograph of a receipt or a form with perspective, see <a href="/resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now">receipts under phone, shadow and fade conditions</a>. If the output has the right words in the wrong order, that is a layout problem and not a cleanup problem: see <a href="/resources/blogs/optical-character-reader-2026">optical character reader settings</a>. For digits that are swapped, see <a href="/resources/blogs/how-to-fix-ocr-errors">how to fix OCR errors</a>, and for other languages, <a href="/resources/blogs/multilingual-ocr-guide">multilingual OCR</a>.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI was built by HyperVerge. It uses a layout aware engine with a vision language model fallback for complex pages, which is a different design from the classic engine in these tests. On its own 2026 benchmark of 1,700 documents it scored 97% to 99% on clean text, 93% on invoice line items, 91% on multi-page bank statements and 76% on phone receipts, at about 1.1 seconds per page. Those are DocsAPI benchmark results and are not comparable to the synthetic Tesseract tests in this guide. If you use any hosted engine, ask which cleanup it applies and test it on your own worst pages first. See the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> and <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a> for how we compare engines, and <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a> for choosing one. Pricing starts from $0.02 per page, and access starts with a demo and then a free 30 day trial for qualified lenders.</p>

<h2>What do these tests not show?</h2>
<ul>
  <li>The pages are synthetic: black text on white in four common fonts, at one size. Real scans have varied paper, stains, curved pages, logos and mixed layouts.</li>
  <li>Each problem was applied alone, plus two combinations in the held-out set. Real pages combine problems in many more ways.</li>
  <li>We tested Tesseract 5.5.2 in English with its standard model. Other engines, and engines with their own cleanup, may react differently, and some neural engines are less sensitive to noise and small text.</li>
  <li>The thresholds in the recipe were chosen from the first 30 pages and checked on 30 new ones from the same generator, so the 1.1% is a fair test of the method but not of different kinds of pages. The letter height threshold had only a small gap between the two cases it separates.</li>
  <li>We scored character error against the text in reading order. Cleanup that changes layout, such as cropping, was not tested.</li>
  <li>Color photographs, handwriting, stamps and other languages were not part of this run.</li>
</ul>

<h2>Sources and how we checked this</h2>
<p>All results are from our own runs: 5,040 reads for the step by condition matrix (12 steps, 14 conditions, 30 pages) and 1,440 reads for the held-out comparison (3 methods, 16 conditions, 30 pages), 6,480 in total, with Tesseract 5.5.2 in single block mode. The script above is the version we ran for the held-out test. Public guides to improving Tesseract accuracy, including a vendor guide that lists contrast, binarization, noise removal and deskewing as standard steps, give advice and a few illustrative figures but, in the ones we read, no measured error rates by step and condition, which is why we measured them.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 10, 2026",
  datePublished: "2026-11-10T00:00:00.000Z",
  dateModified: "2026-11-10T00:00:00.000Z",
  last_updated: "November 10, 2026",
  readTime: "15 min read",
  author: nupuraUghade,
  primary_keyword: "ocr preprocessing",
  secondary_keywords: [
    "tesseract image preprocessing",
    "improve ocr accuracy",
    "ocr deskew binarization denoise",
    "does preprocessing improve ocr",
    "preprocess image for ocr"
],
  tags: ["OCR", "Tesseract", "preprocessing", "accuracy"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Does preprocessing improve OCR accuracy?",
      answer:
        "Only for the specific problem a step fixes. In our test of 12 steps on 14 image problems, eight problems cost under 0.5% error with no cleanup, and an always-on pipeline (enlarge, Otsu, median blur, deskew) scored 12.0% mean error against 12.2% with none.",
    },
    {
      question: "Which preprocessing steps are safe to use on every page?",
      answer:
        "In our test, background normalization, deskewing and adding a border never made any of the 14 conditions worse by more than one percentage point. Adaptive thresholding hurt seven conditions, and median blur, Otsu and CLAHE hurt three or four each.",
    },
    {
      question: "How do I fix noisy scans before OCR?",
      answer:
        "A 3 by 3 median blur took heavy noise from 8.2% to 0.1% error. Enlarging or CLAHE on the same page raised error to 88.8% and 92.9%, so measure the noise first and do not enlarge a noisy page.",
    },
    {
      question: "How do I fix uneven lighting or shadows for OCR?",
      answer:
        "Background normalization (dividing out an estimate of the background) or adaptive thresholding took a shadowed page from 45.1% to 0.1% error. Background normalization never hurt another condition, adaptive thresholding hurt seven.",
    },
    {
      question: "Should I upscale images before OCR?",
      answer:
        "Only when the letters are tiny. A 2x enlargement took 66 DPI text (letters about 6 pixels tall) from 22.9% to 0.4%, but a 100 DPI page with letters about 8 pixels tall was already at 0.2% error. Enlarging a noisy page raised error to 88.8%.",
    },
    {
      question: "Does deskewing help OCR?",
      answer:
        "For a large tilt, yes: an 8 degree tilt went from 5.2% to 1.3%. A 3 degree tilt cost only 0.4% without help, so deskewing mattered little there.",
    },
    {
      question: "What did the test not show?",
      answer:
        "It used synthetic English pages, one problem at a time plus two combinations, Tesseract 5.5.2 only, and thresholds chosen from the first 30 pages. Heavy blur (4.9%) and heavy JPEG compression (9.7%) were not fixed by any step we tried.",
    },
  ],
}
