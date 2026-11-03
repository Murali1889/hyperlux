import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog36: BlogPost = {
  id: "new-36",
  title: "How Does OCR Work? Six Steps, and What Breaks Each One",
  slug: "how-does-ocr-work",
  excerpt:
    "OCR works in six steps: capture, clean-up, layout, recognition, checks and output. We broke each step on purpose, with more than 2,500 test runs, and measured where text goes from near perfect to unreadable. It happens as a cliff, not a slope.",
  description:
    "How does OCR work? Six steps, plus data from 2,500+ tests: the DPI, tilt, blur and shadow limits where accuracy collapses, and how far to trust confidence.",
  metaTag: "How Does OCR Work? 6 Steps With Measured Error Rates",
  summary:
    "OCR captures an image, cleans it, finds the text regions, recognizes characters, checks the result and outputs text with confidence scores. In our tests accuracy stayed near perfect until a defect crossed a threshold, then collapsed: a 5 degree tilt cost almost nothing, an 8 degree tilt cost almost everything.",
  content: `
    <p>OCR (optical character recognition) works in six steps: capture an image of the page, clean it up, find where the text is, recognize the characters, check the result against rules, and write out text with a confidence score for each word. Most explanations stop there. We went further and broke each step on purpose, running more than 2,500 OCR passes on pages whose correct text we knew exactly, to see where it fails.</p>

    <p>The result changes how you should think about bad OCR output. <strong>OCR does not degrade gradually. It stays almost perfect until a defect crosses a threshold, then collapses.</strong> A 5 degree tilt cost about 3 percent of words. An 8 degree tilt cost 90 percent. A blur of 2 pixels cost nothing, and 3 pixels cost a quarter of the words. Below, each step comes with the measured threshold, so you can tell how much margin your own scans have.</p>

    <p>One caveat before the numbers. These are tests of Tesseract 5.5.2, a free engine, on clean synthetic pages, not tests of DocsAPI. We used a free engine so that anyone can repeat every figure. Real scans fail earlier than synthetic ones, so read the shape of each curve and treat the exact cutoffs as best-case.</p>

    <h2>What are the six steps of OCR?</h2>

    <ol>
      <li><strong>Capture:</strong> a scanner, camera or PDF export produces an image.</li>
      <li><strong>Clean-up (preprocessing):</strong> straighten the page, remove noise, even out the lighting.</li>
      <li><strong>Layout analysis:</strong> find text regions, columns, tables and the reading order.</li>
      <li><strong>Recognition:</strong> turn each line or word image into characters, with a probability for each guess.</li>
      <li><strong>Post-processing:</strong> catch likely mistakes with dictionaries, field formats and cross-field arithmetic.</li>
      <li><strong>Output:</strong> write plain text, a searchable PDF, or structured data with positions and confidence.</li>
    </ol>

    <h2>How we tested</h2>

    <ul>
      <li><strong>Pages:</strong> synthetic pages, 8.5 by 5.5 inches, 20 lines of 10 point Arial, rendered at 600 DPI so we could downsample cleanly. The text is random business wording with invoice numbers, dates and dollar amounts mixed in, so the correct answer is known exactly.</li>
      <li><strong>Sample:</strong> 20 different pages for every condition, more than 2,500 OCR runs in total across all our experiments, on a 10-core Apple M5 Mac with 16 GB of memory.</li>
      <li><strong>Scores:</strong> <em>words wrong</em> is word error rate: the edit distance between the correct words and the OCR words, divided by the number of correct words. <em>Numbers read right</em> is the share of tokens containing a digit that came back exactly correct, because a wrong digit is the error that costs money.</li>
      <li><strong>Limits:</strong> one engine, one font, English, one defect at a time. With 20 pages per condition, differences of a point or two are noise.</li>
    </ul>

    <h2>Step 1, capture: how small is too small?</h2>

    <p>Nothing later can recover detail that was never captured, so the first question is how many pixels each character gets. We rendered the same 10 point page at different resolutions and measured what happened.</p>

    <table>
      <thead>
        <tr><th>Resolution</th><th>Character size (em height)</th><th>Words wrong</th><th>Numbers read right</th></tr>
      </thead>
      <tbody>
        <tr><td>72 DPI</td><td>10 px</td><td>17.4%</td><td>76.1%</td></tr>
        <tr><td>100 DPI</td><td>14 px</td><td>0.8%</td><td>98.5%</td></tr>
        <tr><td>150 DPI</td><td>21 px</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>200 DPI</td><td>28 px</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>300 DPI</td><td>42 px</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>600 DPI</td><td>83 px</td><td>0.1%</td><td>99.8%</td></tr>
      </tbody>
    </table>

    <p>The cliff sits between 72 and 100 DPI, and going above 150 bought nothing. Resolution is only a proxy, though. What the engine sees is how many pixels tall each character is. To find that threshold directly, we rendered the same page at different character sizes.</p>

    <table>
      <thead>
        <tr><th>Character size (em height)</th><th>Words wrong</th><th>Numbers read right</th></tr>
      </thead>
      <tbody>
        <tr><td>6 px</td><td>100%</td><td>0.0%</td></tr>
        <tr><td>7 px</td><td>99.6%</td><td>2.0%</td></tr>
        <tr><td>8 px</td><td>91.5%</td><td>19.4%</td></tr>
        <tr><td>9 px</td><td>48.4%</td><td>49.9%</td></tr>
        <tr><td>10 px</td><td>17.4%</td><td>76.1%</td></tr>
        <tr><td>11 px</td><td>4.7%</td><td>90.8%</td></tr>
        <tr><td>12 px</td><td>2.3%</td><td>95.8%</td></tr>
        <tr><td>14 px</td><td>0.3%</td><td>99.1%</td></tr>
        <tr><td>16 px</td><td>0.1%</td><td>99.8%</td></tr>
        <tr><td>20 px</td><td>0.0%</td><td>99.9%</td></tr>
      </tbody>
    </table>

    <p>Text went from unreadable at 8 px to nearly clean at 14 px. Beyond 16 px nothing improved (one 24 px run came out noisier at 3.2% words wrong, which we did not investigate). The formula to remember is <strong>character size in pixels = font size in points x DPI / 72</strong>. Keep that at 14 or more and you are on the safe side of the cliff. For 8 point print that means at least 126 DPI. For a 6 point footnote it means 168 DPI.</p>

    <p>This is also why 300 DPI is the standard advice, including Tesseract's own guidance. It is not that 300 is a cliff edge. For 10 point text it puts you at 42 px, roughly three times above the point where our test started failing, and that spare room is what absorbs the other defects below. If you photograph pages with a phone instead of scanning them, a 12 megapixel photo of an A4 page works out to roughly 250 to 340 DPI, depending on how much of the frame the page fills, so resolution is rarely the problem. Tilt, shadow and blur are.</p>

    <p>If you do not know whether a PDF was scanned in the first place, <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDF vs image PDF</a> shows how to tell in under a minute.</p>

    <h2>Step 2, clean-up: what straightening, blur, noise and shadow cost</h2>

    <p>Preprocessing is where most fixable errors live. We tested each defect on its own, at 300 DPI.</p>

    <h3>Tilt: harmless until it suddenly is not</h3>

    <table>
      <thead>
        <tr><th>Tilt</th><th>Words wrong</th><th>Numbers read right</th><th>After deskewing: words wrong</th><th>After deskewing: numbers right</th></tr>
      </thead>
      <tbody>
        <tr><td>0 degrees</td><td>0.0%</td><td>100%</td><td>not needed</td><td>not needed</td></tr>
        <tr><td>1 degree</td><td>0.3%</td><td>99.1%</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>2 degrees</td><td>1.0%</td><td>97.2%</td><td>0.0%</td><td>99.9%</td></tr>
        <tr><td>3 degrees</td><td>1.4%</td><td>95.8%</td><td>0.0%</td><td>99.9%</td></tr>
        <tr><td>5 degrees</td><td>2.8%</td><td>91.0%</td><td>0.0%</td><td>99.9%</td></tr>
        <tr><td>8 degrees</td><td>89.8%</td><td>7.6%</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>12 degrees</td><td>98.1%</td><td>3.2%</td><td>0.0%</td><td>99.9%</td></tr>
      </tbody>
    </table>

    <p>Two things stand out. First, the cliff: the engine shrugged off 5 degrees, then lost nearly everything at 8. Second, on tilt, numbers fail before words. At 5 degrees, 2.8 percent of words were wrong but 9 percent of number tokens were. A damaged word can often be rescued by what the engine knows about language, and a damaged digit has nothing to be rescued by. We did not test that explanation, but a wrong digit is also the error a spell check never flags.</p>

    <p>The fix is cheap. Straightening the page before recognition took every tilt from 1 to 12 degrees back to essentially perfect. This is the version we used: it rotates a shrunken copy of the page through a range of angles and keeps the angle at which the text lines pile up into the sharpest horizontal bands.</p>

    <pre><code>import cv2
import numpy as np

def deskew(gray):
    small = cv2.resize(gray, None, fx=0.25, fy=0.25, interpolation=cv2.INTER_AREA)
    ink = (small &lt; 160).astype(np.float32)
    h, w = ink.shape

    def score(angle):
        m = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1.0)
        return cv2.warpAffine(ink, m, (w, h)).sum(axis=1).var()

    coarse = max(np.arange(-15, 15.01, 0.5), key=score)
    best = max(np.arange(coarse - 0.5, coarse + 0.51, 0.1), key=score)
    m = cv2.getRotationMatrix2D((gray.shape[1] / 2, gray.shape[0] / 2), best, 1.0)
    return cv2.warpAffine(gray, m, (gray.shape[1], gray.shape[0]), borderValue=255), best</code></pre>

    <p>It searches plus or minus 15 degrees. On a 20 degree tilt it left about 5 degrees of error, which the engine tolerated at 2.7 percent words wrong. Tilt beyond 15 degrees needs a wider search, or an orientation check first, as described in <a href="/resources/blogs/document-detection-before-ocr">document detection before OCR</a>.</p>

    <h3>Blur and noise: specks hurt more than grain</h3>

    <table>
      <thead>
        <tr><th>Defect</th><th>Level</th><th>Words wrong</th><th>Numbers read right</th></tr>
      </thead>
      <tbody>
        <tr><td>Blur</td><td>2 px</td><td>0.0%</td><td>99.8%</td></tr>
        <tr><td>Blur</td><td>3 px</td><td>27.1%</td><td>78.5%</td></tr>
        <tr><td>Blur</td><td>4 px</td><td>48.0%</td><td>52.5%</td></tr>
        <tr><td>Grain (Gaussian noise)</td><td>40 of 255</td><td>0.0%</td><td>100%</td></tr>
        <tr><td>Grain (Gaussian noise)</td><td>60 of 255</td><td>44.6%</td><td>61.4%</td></tr>
        <tr><td>Specks (black and white dots)</td><td>1% of pixels</td><td>6.9%</td><td>92.0%</td></tr>
        <tr><td>Specks</td><td>3% of pixels</td><td>21.7%</td><td>71.8%</td></tr>
        <tr><td>Specks</td><td>6% of pixels</td><td>48.6%</td><td>56.2%</td></tr>
        <tr><td>Specks</td><td>12% of pixels</td><td>100%</td><td>0.0%</td></tr>
      </tbody>
    </table>

    <p>Smooth grain was tolerated until it got severe, while a light dusting of isolated dots, only 1 percent of pixels, already cost 7 percent of words. Isolated dots resemble full stops and ink strokes, which may be why they confuse the engine more than an even haze does. If your scans come from dusty glass or a fax, a median filter is worth testing before anything else.</p>

    <p>Two results surprised us. JPEG compression alone did nothing: quality 95, 75, 50, 30, 15 and even 8 all scored 0.0 percent words wrong on a clean 300 DPI page. And fading barely mattered: squeezing the contrast down to 15 percent of the original still read perfectly. We tested defects one at a time, and real photos stack them, so do not read these as permission to compress aggressively. The stacked case is in our <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout analysis tests</a>, where a tilted, blurred, noisy, compressed bank statement fell to 69 percent of rows correct, and straightening it first brought that back to 93 percent.</p>

    <h3>Uneven light: the cleaning step that made things worse</h3>

    <p>Clean-up has a trap. The usual advice is to convert the page to pure black and white first. We shaded the page so brightness fell from full at the left edge to a fraction of that at the right, then compared three versions of each page: untouched, thresholded with one global cutoff (Otsu), and thresholded per neighborhood (adaptive).</p>

    <table>
      <thead>
        <tr><th>Right edge brightness</th><th>Untouched</th><th>One global threshold</th><th>Adaptive threshold</th></tr>
      </thead>
      <tbody>
        <tr><td>60% of left edge</td><td>0.0% wrong</td><td>0.0% wrong</td><td>0.1% wrong</td></tr>
        <tr><td>45% of left edge</td><td>0.2% wrong</td><td>27.9% wrong</td><td>0.0% wrong</td></tr>
        <tr><td>30% of left edge</td><td>36.2% wrong</td><td>38.7% wrong</td><td>0.0% wrong</td></tr>
      </tbody>
    </table>

    <p>At 45 percent shading the untouched page read fine, and the global threshold turned it into a failing page, because the dim side went solid black. Preprocessing made a working page unusable. At the extreme the adaptive threshold was the only version that survived, and on a well-lit page it cost a hair (0.3 percent words wrong at no shading). So clean-up is not free. Test it on your worst page, with and without, before you add it to a pipeline.</p>

    <pre><code>import cv2

gray = cv2.imread("page.png", cv2.IMREAD_GRAYSCALE)
gray = cv2.GaussianBlur(gray, (3, 3), 0)

# One cutoff for the whole page: fails on shadows
_, global_bw = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# A cutoff per 31 pixel neighborhood: survives uneven light
local_bw = cv2.adaptiveThreshold(
    gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 15
)</code></pre>

    <h2>Step 3, layout: right words, wrong order</h2>

    <p>Layout analysis decides which regions to read and in what order, and its failures are invisible to a character score. On a two-column page, one wrong setting made 88 percent of words wrong while every word was still present in the output. The measured detail, plus tables and the field-finding step that follows, is in <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">OCR layout analysis, tested</a>. We kept it out of this guide so the two do not repeat each other.</p>

    <h2>Step 4, recognition: the same engine on different kinds of text</h2>

    <p>Recognition is where neural networks come in. Tesseract 5 reads a whole line image with an LSTM network and outputs the likeliest character sequence, and each choice carries a probability. How well it does depends on what the text is. These figures come from our 1,700-document <a href="/resources/blogs/ocr-accuracy-benchmark-2026">benchmark</a>, which DocsAPI ran itself, so cite it as DocsAPI's own result.</p>

    <table>
      <thead>
        <tr><th>Document type</th><th>Tesseract</th><th>PaddleOCR</th><th>DocsAPI</th></tr>
      </thead>
      <tbody>
        <tr><td>Clean typed English</td><td>97 to 99%</td><td>97 to 99%</td><td>97 to 99%</td></tr>
        <tr><td>Multi-page bank statement tables</td><td>64%</td><td>79%</td><td>91%</td></tr>
        <tr><td>Phone-photographed receipts</td><td>58%</td><td>82%</td><td>76%</td></tr>
        <tr><td>Multilingual pages</td><td>71%</td><td>89%</td><td>81%</td></tr>
        <tr><td>Handwritten forms</td><td>61%</td><td>73%</td><td>78%</td></tr>
      </tbody>
    </table>

    <p>The point of the table is the first row against the others: every engine ties on clean print, and the gaps open up on everything else. That is why a score on clean text tells you almost nothing about your handwritten forms. For a head-to-head on the two free engines with code, see <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>.</p>

    <h2>Step 5, post-processing: how far to trust a confidence score</h2>

    <p>Recognition reads one line at a time and does not know what the line means. Post-processing adds meaning: dictionary checks, field formats such as a valid date, and cross-field arithmetic such as line items adding up to the total. The most practical output of the whole process is the confidence score on each word, so we measured how trustworthy it is.</p>

    <p>We pooled 276,564 words from the tilt, blur, noise, speck, resolution and shading runs above, scored each word as right or wrong against the truth, and grouped them by the confidence Tesseract reported. The pool includes badly damaged pages, so 5.6 percent of words were wrong overall. The absolute rates are a property of our mix. The pattern is the lesson.</p>

    <table>
      <thead>
        <tr><th>Reported confidence</th><th>Words</th><th>Actually wrong</th><th>Share of all errors</th></tr>
      </thead>
      <tbody>
        <tr><td>Under 50</td><td>6,734</td><td>74.5%</td><td>32.6%</td></tr>
        <tr><td>50 to 69</td><td>4,969</td><td>45.4%</td><td>14.6%</td></tr>
        <tr><td>70 to 79</td><td>3,745</td><td>42.2%</td><td>10.2%</td></tr>
        <tr><td>80 to 89</td><td>6,972</td><td>29.8%</td><td>13.5%</td></tr>
        <tr><td>90 to 94</td><td>36,442</td><td>6.3%</td><td>14.8%</td></tr>
        <tr><td>95 to 97</td><td>217,702</td><td>1.0%</td><td>14.2%</td></tr>
      </tbody>
    </table>

    <p>Three findings. Confidence ranks risk well: error rates fall steadily as the score rises. It is not a probability: words scored 80 to 89 were wrong 30 percent of the time, not 15. And it has a blind spot: 14 percent of all errors sat in the top band, with scores of 95 or more. Those are confident mistakes, and no threshold on the score will find them.</p>

    <p>What a person should review follows from that:</p>

    <table>
      <thead>
        <tr><th>Send to review</th><th>Share of words reviewed</th><th>Share of errors caught</th></tr>
      </thead>
      <tbody>
        <tr><td>Confidence below 70</td><td>4.2%</td><td>47.2%</td></tr>
        <tr><td>Confidence below 80</td><td>5.6%</td><td>57.4%</td></tr>
        <tr><td>Confidence below 90</td><td>8.1%</td><td>70.9%</td></tr>
        <tr><td>Confidence below 95</td><td>21.3%</td><td>85.8%</td></tr>
      </tbody>
    </table>

    <p>Reviewing the lowest 8 percent of words catches 71 percent of the errors. Pushing to 95 gets you 86 percent but sends 21 percent of words to a person, more than two and a half times the work, and still leaves the confident mistakes. Closing that last gap takes a second signal that does not depend on the engine's own certainty, which is arithmetic. On the bank statement tests, a running-balance check flagged every statement that had an OCR error at 150 DPI, with no false alarms on clean ones. The numbers are in <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">the layout post</a>.</p>

    <p>Where you draw the line should come from your own data, not ours. Run 200 real documents, compare against the correct values, and count errors per confidence band. <a href="/resources/blogs/how-to-measure-ocr-accuracy">How to measure OCR accuracy</a> has the script, and <a href="/resources/blogs/understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies">OCR accuracy metrics and improvement strategies</a> explains why 99 percent per character can still mean wrong fields. Other engines calibrate their scores differently, so repeat the exercise for any engine you evaluate.</p>

    <h2>Step 6, output: three forms, three uses</h2>

    <ul>
      <li><strong>Plain text:</strong> good for search and copy-paste, and the layout is gone.</li>
      <li><strong>Searchable PDF:</strong> the original image with an invisible text layer. It looks identical but can be searched. See <a href="/resources/blogs/make-pdf-searchable">how to make a PDF searchable</a> and <a href="/resources/blogs/scanned-pdf-searchable">making a scanned PDF searchable</a>.</li>
      <li><strong>Structured data:</strong> fields, tables, positions and confidence as JSON or CSV. This is what a business system needs, and it depends on steps 3 and 5, not only recognition.</li>
    </ul>

    <p>To see steps 3 to 6 on your own file in one call, run Tesseract and print each word with its position and confidence. Sort by confidence and the first rows are where a person should look first.</p>

    <pre><code>tesseract invoice.png stdout --psm 3 -l eng tsv</code></pre>

    <h2>Which step failed? A diagnosis table with measured limits</h2>

    <table>
      <thead>
        <tr><th>What you see</th><th>Likely step</th><th>What to check, with our measured limit</th></tr>
      </thead>
      <tbody>
        <tr><td>Whole page garbled</td><td>1 Capture</td><td>Character height under about 12 px. Compute points x DPI / 72</td></tr>
        <tr><td>Fine at a glance, collapses on some pages</td><td>2 Clean-up</td><td>Tilt past 5 degrees, blur past 2 px, speckle at 1% or more. Deskew first</td></tr>
        <tr><td>Left side reads, right side does not</td><td>2 Clean-up</td><td>Uneven light plus a global threshold. Try an adaptive threshold</td></tr>
        <tr><td>Every word right, sentences scrambled</td><td>3 Layout</td><td>Wrong page segmentation setting, or columns read across</td></tr>
        <tr><td>Table values in the wrong columns</td><td>3 Layout</td><td>Use table extraction, not plain text</td></tr>
        <tr><td>One digit swapped</td><td>4 Recognition</td><td>Look at the confidence. Add a format rule for the field</td></tr>
        <tr><td>Confident but wrong</td><td>5 Post-processing</td><td>14% of our errors scored 95 or higher. Add arithmetic checks</td></tr>
        <tr><td>Looks right, cannot be searched</td><td>6 Output</td><td>Export a searchable PDF or structured data</td></tr>
      </tbody>
    </table>

    <h2>What these tests do not show</h2>

    <p>We want to be plain about the limits. The pages were synthetic: a clean sans-serif font on white. Real documents have stamps, folds, show-through and unusual fonts, so they fail at milder defect levels than ours. We tested one engine, one language, and one defect at a time. We did not test handwriting here, and we did not run DocsAPI on these synthetic sweeps. For how DocsAPI does on real documents, use the benchmark figures above, and test any engine on your own worst pages before you rely on a number from anyone, including us.</p>

    <h2>Where AI extraction fits in</h2>

    <p>The six steps describe classic OCR. Vision language models read the page image directly and blur steps 3 to 5 together. They cope well with messy layouts and can also return confident wrong numbers, which is a serious problem for finance. We compare the approaches in <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR</a>. If you only need clean text from a file or two, <a href="/resources/blogs/free-online-ocr-tools">free OCR tools</a> are enough. For tables and fields at volume, see <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a>, and for running it across thousands of files, <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk OCR processing</a>. For a plain-language overview of the technology itself, start with <a href="/resources/blogs/optical-character-reader-2026">what an optical character reader is</a>.</p>
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
  primary_keyword: "how does ocr work",
  secondary_keywords: [
    "how does optical character recognition work",
    "ocr process steps",
    "how ocr works step by step",
    "ocr pipeline",
    "what is ocr and how does it work",
  ],
  tags: ["OCR", "explainer", "how it works", "preprocessing", "confidence scores"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How does OCR work in simple terms?",
      answer:
        "OCR takes a picture of a page, cleans it up, finds where the text and tables are, recognizes each word with a probability, checks the result against rules such as valid dates and totals that add up, and outputs text with a confidence score for each word.",
    },
    {
      question: "What are the main steps in the OCR process?",
      answer:
        "Six steps: capture the image, clean it up (deskew, denoise, fix lighting), analyze the layout, recognize the characters, post-process with dictionaries and field rules, and output text, a searchable PDF or structured data.",
    },
    {
      question: "What resolution do you need for OCR?",
      answer:
        "What matters is character height in pixels, which is font size in points times DPI divided by 72. In our tests with Tesseract, 10 point text was unreadable at 8 pixels, nearly clean at 14, and perfect from 21. 300 DPI is the usual advice because it leaves about three times the margin for 10 point text.",
    },
    {
      question: "How much tilt can OCR handle?",
      answer:
        "In our tests Tesseract coped with up to 5 degrees, losing about 3 percent of words, and failed almost completely at 8 degrees, with 90 percent of words wrong. Straightening the page first fixed every tilt from 1 to 12 degrees.",
    },
    {
      question: "Why does OCR make mistakes?",
      answer:
        "Most mistakes come from the early steps: too few pixels per character, a tilted or blurred page, uneven lighting, or a layout read in the wrong order. In our tests accuracy stayed near perfect until a defect crossed a threshold and then collapsed, so a page can look fine and still fail.",
    },
    {
      question: "How reliable are OCR confidence scores?",
      answer:
        "They rank risk well but are not probabilities. In our test of 276,564 words, words scored 80 to 89 were wrong 30 percent of the time, and 14 percent of all errors had a score of 95 or higher. Review the low scores and add arithmetic checks for the confident mistakes.",
    },
    {
      question: "Does OCR use AI?",
      answer:
        "Modern OCR engines use neural networks for recognition. Tesseract 5 uses an LSTM network, and PaddleOCR uses its own detection and recognition models. Newer document AI systems read the whole page with vision language models.",
    },
    {
      question: "What is the difference between OCR and a searchable PDF?",
      answer:
        "OCR is the process of reading the text. A searchable PDF is one possible output: the original page image with an invisible text layer added so you can search and copy from it.",
    },
  ],
}
