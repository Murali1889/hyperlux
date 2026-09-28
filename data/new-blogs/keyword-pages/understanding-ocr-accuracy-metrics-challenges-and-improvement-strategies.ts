import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "5",
  title: "How Accurate Is OCR? Real Numbers and Why It Is Never 100%",
  slug: "understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies",
  excerpt:
    "No OCR is 100% accurate. Here is what 1,900 real documents measured, why 99% per character still gives wrong fields, and a checklist to raise your own accuracy.",
  description:
    "No OCR is 100% accurate. Clean print reads at 97-99% per character, hard documents at 58-91% in our test. See why 99% still breaks fields and how to fix it.",
  metaTag: "How Accurate Is OCR? Real Numbers (It Is Never 100%)",
  summary:
    "No OCR is 100% accurate: clean printed text reads at about 97-99% per character, but tables, handwriting and phone photos scored 58-91% in our benchmark. Even 99% means about 10 wrong characters per 1,000, which hurts most at field level, where one wrong digit ruins a whole number.",
  content: `
    <p>No OCR (optical character recognition, software that turns pictures of text into text) is 100 percent accurate. Clean printed pages read at about 97-99% per character, while tables, handwriting and phone photos scored 58-91% in our benchmark. Even 99% leaves about 10 wrong characters per 1,000, which breaks whole fields more often than the number suggests. Below: the numbers, what lowers accuracy, and how to raise it.</p>

    <h2>How accurate is OCR on real documents?</h2>

    <p>It depends on the document far more than on the engine. In our benchmark of 1,900 real documents, clean typed English scored 97-99% character accuracy on all three OCR engines we compared. Scanned bank statements, phone-photographed receipts, multilingual pages and handwriting scored between 58% and 91%, and the best engine changed by category.</p>

    <table>
      <thead><tr><th>Document category</th><th>Tesseract 5.x</th><th>PaddleOCR</th><th>DocsAPI</th></tr></thead>
      <tbody>
        <tr><td>Typed English (clean)</td><td>97-99%</td><td>97-99%</td><td>97-99%</td></tr>
        <tr><td>Scanned bank statements (multi-page tables)</td><td>64%</td><td>79%</td><td>91%</td></tr>
        <tr><td>Phone-photographed receipts (low quality)</td><td>58%</td><td>82%</td><td>76%</td></tr>
        <tr><td>Multilingual (English + Mandarin/Spanish)</td><td>71%</td><td>89%</td><td>81%</td></tr>
        <tr><td>Handwritten forms (mixed neatness)</td><td>61%</td><td>73%</td><td>78%</td></tr>
      </tbody>
    </table>

    <p>These are character-level scores on the 500-document engine comparison set in our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark for 2026</a>, scored against hand-labeled ground truth (an answer key a person made by hand). DocsAPI is our product, and we report where it loses: it trails PaddleOCR on phone-photographed receipts and multilingual pages.</p>

    <p>On clean print the engines tie, so accuracy there should not decide your purchase. On the hard categories the gap between the best and worst engine is 17 to 27 points (91% against 64% on bank statements), so engine choice and input quality decide the outcome. Your real accuracy blends the easy and hard rows by your own document mix.</p>

    <h2>Is OCR 100 percent accurate?</h2>

    <p>No. No OCR engine reads scanned or photographed documents with 100 percent accuracy. The software estimates the most likely character for each shape, and look-alikes such as 0 and O or 1 and l, blur and stray marks mean some guesses are wrong. Even the U.S. National Archives says its OCR-built 1950 census name index is not 100-percent accurate.</p>

    <p>OCR has nothing to check a guess against except the pixels. If a smudge makes a 5 look like an S, nothing else in the image says which is right, and a serial number or an amount has no surrounding words to help.</p>

    <h3>Can OCR be 100 percent accurate in any situation?</h3>

    <p>For recognizing pictures of text, no: any engine can misread a smudged or look-alike character. Two situations get you to effectively 100%, though, and neither is a better engine. One avoids recognition altogether, and the other catches errors after recognition.</p>

    <ul>
      <li><strong>The PDF already contains text.</strong> Files exported from Word or an accounting system usually carry a text layer, so the characters can be copied out exactly and nothing is recognized or misread. A few have broken font encodings and still need OCR. See <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDF vs image PDF</a> for a 2-second test.</li>
      <li><strong>A pipeline with checks.</strong> Rules the data must satisfy (totals add up, check digits pass) plus a person reviewing low-confidence fields can make the data you keep very reliable. That is a property of the process, not the engine, and it costs review time.</li>
    </ul>

    <h3>Is there an OCR that is 100 percent accurate? Why vendor claims differ</h3>

    <p>No. Anyone advertising 100% accurate OCR is measuring something narrower than your job: clean pages, characters instead of fields, or output after a human fixed it. A 99% claim can be true on a clean demo file and still tell you little about your documents. Five differences explain most of it.</p>

    <table>
      <thead><tr><th>What differs</th><th>Effect on the number</th><th>What to ask</th></tr></thead>
      <tbody>
        <tr><td>What is counted</td><td>At 99% per character, about 1 in 10 ten-digit account numbers still has an error.</td><td>Character, word or field accuracy?</td></tr>
        <tr><td>Which documents</td><td>Clean print scored 97-99% on every engine we compared. The hard categories scored 58-91%.</td><td>Which document types?</td></tr>
        <tr><td>Before or after correction</td><td>A figure taken after human review or validation describes a process, not an engine.</td><td>Is this raw engine output?</td></tr>
        <tr><td>Confidence or measured accuracy</td><td>Confidence is the engine's own estimate. D-Lib Magazine (2009) says true accuracy can only be determined by a human.</td><td>Measured against what answer key?</td></tr>
        <tr><td>Average or worst case</td><td>A blended average hides the hard categories where errors bunch up.</td><td>What is the accuracy on my worst documents?</td></tr>
      </tbody>
    </table>

    <p>Our benchmark write-up says the gap between a vendor headline number and production performance is often 15 to 30 points on hard document types.</p>

    <h2>What does an OCR accuracy percentage actually measure?</h2>

    <p>An OCR accuracy percentage is the share of items the engine got right, checked against an answer key a person made by hand. The item can be a character, a word or a whole field, and the same output scores differently on each. Character accuracy is the most flattering. Field accuracy is the most useful.</p>

    <table>
      <thead><tr><th>Measure</th><th>Formula</th><th>Score for the example below</th></tr></thead>
      <tbody>
        <tr><td>Character error rate (CER)</td><td>(insertions + deletions + substitutions) / characters in the answer key</td><td>1 wrong of 66 characters: CER 1.52%, accuracy 98.48%</td></tr>
        <tr><td>Word error rate (WER)</td><td>(substituted + deleted + inserted words) / words in the answer key</td><td>1 wrong of 10 words: WER 10%, accuracy 90%</td></tr>
        <tr><td>Field accuracy</td><td>fields fully correct / total fields</td><td>Total due is wrong, so that field scores 0%</td></tr>
      </tbody>
    </table>

    <pre><code>Answer key: Invoice INV-20458 dated 2026-03-14 total due $1,250.00 net 30 days
OCR output: Invoice INV-20458 dated 2026-03-14 total due $7,250.00 net 30 days</code></pre>

    <p>One digit was misread (1 read as 7). We computed the scores with a short Python script using standard edit distance. The line is 98.48% right by character and 90% right by word, yet the amount is 5.8 times too large and would pass any check that only looks at format.</p>

    <p>Microsoft's OCR documentation defines word error rate as (S + D + I) / N: substituted, deleted and inserted words over the words in the reference. One scale rates 98-99% as good, 90-98% as average and below 90% as poor (Holley, D-Lib Magazine, 2009, on digitized newspapers), and her 45-page sample ranged from 71% to 98.02%.</p>

    <h2>The math: how 99% per character becomes wrong fields</h2>

    <p>A field is read perfectly only if every character in it is. If each character is right with probability p, a field of N characters is perfect with probability p to the power of N. At 99% per character that gives 92.3% for an 8-character invoice number, 90.4% for a 10-digit account number and 81.8% for a 20-character name.</p>

    <p>Formula: chance a field is perfect = p^N. We computed every value below in Python 3.</p>

    <table>
      <thead><tr><th>Accuracy per character</th><th>Wrong characters per 1,000</th><th>8-character invoice number</th><th>10-digit account number</th><th>20-character name</th><th>Whole 1,000-character page</th></tr></thead>
      <tbody>
        <tr><td>99.9%</td><td>1</td><td>99.2%</td><td>99.0%</td><td>98.0%</td><td>36.8%</td></tr>
        <tr><td>99%</td><td>10</td><td>92.3%</td><td>90.4%</td><td>81.8%</td><td>under 0.01%</td></tr>
        <tr><td>98%</td><td>20</td><td>85.1%</td><td>81.7%</td><td>66.8%</td><td>under 0.01%</td></tr>
        <tr><td>97%</td><td>30</td><td>78.4%</td><td>73.7%</td><td>54.4%</td><td>under 0.01%</td></tr>
        <tr><td>95%</td><td>50</td><td>66.3%</td><td>59.9%</td><td>35.8%</td><td>under 0.01%</td></tr>
      </tbody>
    </table>

    <pre><code>for p in (0.999, 0.99, 0.98, 0.97, 0.95):
    print(p, [round(p ** n * 100, 1) for n in (8, 10, 20)])</code></pre>

    <p>Working backward, to get 99% of 10-digit account numbers fully right you need 99.900% per character (p = 0.99 to the power of 1/N). For an 8-character invoice number it is 99.874%, and for a 20-character name 99.950%. Moving from 99% to 99.9% per character cuts wrong 10-digit account numbers from 9.6% to 1.0%, a tenfold change.</p>

    <p>A whole page is far harsher: at 99% per character, a 1,000-character page is error-free about 0.0043% of the time, so design for catching errors, not avoiding them all. One caveat: real errors bunch up on smudged or skewed pages instead of arriving independently, so read the table as a guide to how fast field accuracy falls, not a forecast. For the same idea across every field on a multi-page statement, see our <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing analysis</a>.</p>

    <h2>Why is OCR inaccurate on some documents?</h2>

    <p>OCR does not read the way you do. It converts pixels into the most likely characters with no knowledge of what the document is about. Anything that blurs, tilts, crops or hides a letter raises the chance of a wrong guess, and complex layouts such as multi-page tables add errors that have nothing to do with letter shapes.</p>

    <p>What affects OCR accuracy comes down to the seven inputs below. Most are in your control before the file reaches the engine.</p>

    <table>
      <thead><tr><th>What lowers accuracy</th><th>What goes wrong</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>Low resolution or small text</td><td>Letters made of too few pixels lose their shapes. Amazon Textract needs text at least 15 pixels tall (8-point at 150 DPI).</td><td>Scan at 300 DPI or higher. 8-point text at 300 DPI is about 33 pixels tall (8/72 inch x 300).</td></tr>
        <tr><td>Skew and rotation</td><td>Tesseract's documentation says line segmentation drops significantly on a page that is too skewed.</td><td>Rotate upright and deskew (straighten the text lines) before OCR.</td></tr>
        <tr><td>Low contrast, shadows, noise</td><td>Faded print, uneven lighting and speckle confuse the step that turns the image into black and white.</td><td>Use even light with no flash glare. Boost contrast and remove speckle.</td></tr>
        <tr><td>Fonts and busy backgrounds</td><td>Tiny or decorative type and text over images or patterns give the engine less to work with.</td><td>Ask for the original file when one exists. Avoid photos of screens.</td></tr>
        <tr><td>Handwriting</td><td>Shapes vary between writers. Handwritten forms scored 61-78% in our benchmark.</td><td>Ask for typed or block-capital entries. Send handwritten amounts to review (<a href="/resources/blogs/handwritten-faxed-invoice-ocr">handwritten and faxed invoice data</a>).</td></tr>
        <tr><td>Tables and layout</td><td>Multi-page tables and merged cells split engines most: 64% to 91% on bank statements in our benchmark.</td><td>Use a layout-aware engine and check row counts and totals (<a href="/resources/blogs/invoice-line-item-ocr">invoice line-item extraction</a>).</td></tr>
        <tr><td>Language and script</td><td>Mixed English, Mandarin and Spanish pages scored 71-89% in our benchmark. Textract text detection covers six languages.</td><td>Set the language to match the page and check the engine's supported list.</td></tr>
      </tbody>
    </table>

    <p>The engine matters too, but mostly on hard documents, so fix the input first and choose the engine second.</p>

    <h2>How to improve OCR accuracy: a 10-step checklist</h2>

    <p>Fix the image first (300 DPI, straight, cropped, high contrast), then the engine settings (language, dictionaries, an engine tested on your document type), then add checks on the fields that matter and send low-confidence results to a person. The 10 steps below follow that order.</p>

    <ol>
      <li><strong>Check whether you need OCR at all.</strong> If the PDF has selectable text, extract it directly.</li>
      <li><strong>Send the original file.</strong> Amazon Textract's guidance is not to convert or downsample a supported file before upload.</li>
      <li><strong>Scan at 300 DPI or higher.</strong> Tesseract's documentation says it works best at 300 DPI or more, and the D-Lib article on newspaper digitization recommends the same.</li>
      <li><strong>Photograph flat and square-on, in even light.</strong> Fill the frame so small print is at least 15 pixels tall, and avoid flash glare and shadows.</li>
      <li><strong>Crop and rotate upright.</strong> Cut away the desk around a phone photo and turn sideways pages. Tesseract recommends a border of about 10 pixels. Our <a href="/resources/blogs/document-detection-before-ocr">document detection guide</a> covers these steps.</li>
      <li><strong>Deskew.</strong> Straighten tilted text lines before recognition. Heavy skew severely hurts Tesseract's output.</li>
      <li><strong>Raise contrast and remove noise.</strong> Converting to black and white can go wrong on uneven pages, so use adaptive thresholding and remove speckle first.</li>
      <li><strong>Rescale small images up to about 300 DPI.</strong> It helps the engine but cannot restore detail the camera never captured.</li>
      <li><strong>Set the language, and turn off dictionaries for codes.</strong> Tesseract's documentation says turning off its dictionaries should help when most of the text is not dictionary words, as with part numbers and IDs.</li>
      <li><strong>Validate, route and measure.</strong> Check that totals add up and check digits pass, and send low-confidence fields to review. Then score 50 of your own documents against a hand-checked answer key (<a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>).</li>
    </ol>

    <p>Handwriting and multi-page tables respond less to pre-processing. Phone photos respond more: our benchmark write-up says deskew, rotation correction and page boundary detection close most of the gap on phone-photographed receipts.</p>

    <h2>How reliable is OCR technology for financial documents?</h2>

    <p>Reliable enough to do most of the typing, not reliable enough to run unchecked. In our benchmark the best result on multi-page bank statement tables was 91% and on invoice line items 93%, and the best of eight accounts-payable tools passed 81% of 200 real invoices with no human review. Plan for review, not perfection.</p>

    <table>
      <thead><tr><th>Test in our benchmark</th><th>Weakest result</th><th>Strongest result</th></tr></thead>
      <tbody>
        <tr><td>Scanned bank statements, multi-page tables (OCR engines)</td><td>64% (Tesseract 5.x)</td><td>91% (DocsAPI)</td></tr>
        <tr><td>Invoices, line-item extraction (document parsers)</td><td>81% (Docling)</td><td>93% (DocsAPI)</td></tr>
        <tr><td>Scanned receipts, mobile quality (document parsers)</td><td>58% (Docling)</td><td>78% (LlamaParse)</td></tr>
        <tr><td>Touchless rate on 200 real invoices (8 accounts-payable tools)</td><td>65% (Melio)</td><td>81% (DocsAPI, tuned pipeline)</td></tr>
      </tbody>
    </table>

    <p>The tests score differently: character level for the OCR engines, extraction accuracy for the parsers, and touchless rate (the share of invoices needing no human review) for accounts-payable tools. DocsAPI's 81% comes from a tuned pipeline with a validation layer we built, and out of the box it lands closer to 65%. No tool reached the 99% touchless rate that marketing claims. The realistic ceiling on a real invoice mix was the low 80s.</p>

    <p>OCR turns an image into text and fields. It does not decide whether an applicant qualifies, an invoice should be paid or a document is genuine. Those decisions need your rules and, in regulated work such as lending, tax or identity checks, a person and your compliance process. This page is not legal, tax or lending advice.</p>

    <h3>Make errors detectable with check digits</h3>

    <p>The cheapest way to catch an OCR mistake is a rule the data must satisfy. US bank routing numbers have 9 digits, and the last is a check digit. Multiply the digits by 3, 7, 1, 3, 7, 1, 3, 7, 1, add the products, and the total must divide evenly by 10 (Apache Commons Validator documents the same weights).</p>

    <p>Take the valid example number 021000021. The sum is 3(0+0+0) + 7(2+0+2) + 1(1+0+1) = 0 + 28 + 2 = 30, so it passes. If OCR reads the last 1 as 7, the sum becomes 36 and the number fails. We tried all 81 single-digit misreads of this number (9 positions times 9 wrong digits) in Python, and every one failed. Swapped neighbor digits are caught in most cases, but not when the two digits differ by exactly 5.</p>

    <p>Amounts, dates and names have no check digit, so the $1,250.00 read as $7,250.00 earlier would pass a format check. For those, use reconciliation: line items sum to the subtotal, subtotal plus tax equals the total, running balances carry from row to row. Our guides to <a href="/resources/blogs/invoice-line-item-ocr">invoice line-item extraction</a> and <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a> cover those rules, and the <a href="/resources/blogs/mrz-passport-verification">passport MRZ checksum guide</a> shows the same idea on identity documents.</p>

    <h2>What should you expect from an OCR API?</h2>

    <p>Expect text with a confidence score for each word or field, published limits on file and text size, and worse results on poor input. Do not expect 100%. Expect to set a confidence threshold, send everything below it to review, and test on your own documents before you commit.</p>

    <p>Amazon Textract returns confidence as a number from 0 to 100, and Azure's OCR service returns a value between 0 and 1 for each word. Both are the engine's own estimates, so Microsoft tells customers to scan a sample of their own content before choosing a threshold. Textract's guidance says archival uses might go as low as 50%, while business processes involving financial decisions might need 90% or higher.</p>

    <table>
      <thead><tr><th>Published input limit</th><th>Amazon Textract</th><th>Azure Document Intelligence (Read)</th></tr></thead>
      <tbody>
        <tr><td>Minimum text height</td><td>15 pixels (8-point at 150 DPI)</td><td>12 pixels on a 1024 x 768 image (about 8-point at 150 DPI)</td></tr>
        <tr><td>Quality advice</td><td>Ideally at least 150 DPI; do not downsample supported files</td><td>One clear photo or high-quality scan per document</td></tr>
        <tr><td>Image size</td><td>10,000 pixels or less on all sides</td><td>50 x 50 to 10,000 x 10,000 pixels</td></tr>
      </tbody>
    </table>

    <p>We read both pages on September 21, 2026. Limits change, so re-check them. If in doubt, 300 DPI clears every number here.</p>

    <h2>What to do next</h2>

    <ul>
      <li><strong>Your files are digital PDFs:</strong> check for a text layer first and skip OCR if it is there.</li>
      <li><strong>You scan or photograph documents yourself:</strong> apply steps 3 to 8 of the checklist.</li>
      <li><strong>You are choosing a vendor:</strong> ask the five questions in the claims table, test 50 of your own documents, and start from the <a href="/resources/blogs/best-ocr-software-2026">best OCR software 2026 guide</a>. The free <a href="/tools/which-ocr">Which OCR selector</a> shortlists engines for your document mix. DocsAPI is our product and has a free tier of 100 pages a month for evaluation.</li>
      <li><strong>You use Tesseract or PaddleOCR:</strong> see <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>.</li>
      <li><strong>You handle handwriting, faxes or money fields:</strong> budget for review and add check digits, reconciliation and thresholds (see the <a href="/resources/blogs/handwritten-faxed-invoice-ocr">handwritten invoice accuracy data</a>).</li>
      <li><strong>You are weighing AI vision models:</strong> read <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR</a>.</li>
    </ul>

    <h2>Sources and how we checked this</h2>

    <p>Numbers described as ours come from the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark 2026</a> (1,900 real, anonymized documents), quoted as published there. Everything else comes from these pages, opened on September 21, 2026.</p>

    <ul>
      <li><a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html" rel="noopener">Amazon Textract quotas</a>: text height, image limit, handwriting, languages.</li>
      <li><a href="https://docs.aws.amazon.com/textract/latest/dg/textract-best-practices.html" rel="noopener">Amazon Textract best practices</a>: 150 DPI, confidence thresholds.</li>
      <li><a href="https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/computer-vision/ocr-characteristics-and-limitations" rel="noopener">Microsoft Learn, OCR capabilities and limitations</a>: word error rate, confidence values.</li>
      <li><a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/read?view=doc-intel-4.0.0" rel="noopener">Microsoft Learn, Document Intelligence Read model</a>: text height, image size.</li>
      <li><a href="https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html" rel="noopener">Tesseract documentation, improving the quality of the output</a>: 300 DPI, skew, borders, dictionaries.</li>
      <li><a href="https://www.dlib.org/dlib/march09/holley/03holley.html" rel="noopener">Rose Holley, How Good Can It Get?, D-Lib Magazine, 2009</a>: accuracy scale, newspaper sample.</li>
      <li><a href="https://www.archives.gov/research/census/1950" rel="noopener">U.S. National Archives, 1950 Census records</a>: the accuracy statement.</li>
      <li><a href="https://commons.apache.org/proper/commons-validator/apidocs/org/apache/commons/validator/routines/checkdigit/ABANumberCheckDigit.html" rel="noopener">Apache Commons Validator, ABANumberCheckDigit</a>: the routing number check.</li>
    </ul>

    <p>Limits of this page. Our benchmark is one document mix, and yours will differ, so test your own files. The p^N table assumes independent errors, which real documents do not follow exactly. The probability table, edit-distance example and routing-number test were run in Python 3. We left out any claim we could not tie to a page we opened. DocsAPI is our product.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Industry Trends",
  date: "May 28, 2025",
  datePublished: "2025-05-28T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
  last_updated: "September 28, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "how accurate is ocr",
  secondary_keywords: [
    "ocr accuracy rate",
    "100% accurate ocr",
    "is ocr 100 percent accurate",
    "ocr accuracy percentage",
    "why is ocr inaccurate",
    "how to improve ocr accuracy",
    "what affects ocr accuracy",
    "how reliable is ocr technology",
    "can ocr be 100 percent accurate",
    "is there an ocr that is 100 percent accurate",
  ],
  tags: ["OCR accuracy", "OCR", "accuracy", "benchmark", "document processing"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is a good OCR accuracy percentage?",
      answer:
        "There is no official cutoff. One scale used for digitized newspapers calls 98-99% good, 90-98% average and below 90% poor. For data extraction, judge by whole fields instead: at 99% per character, about 1 in 10 ten-digit account numbers still contains an error, and finance workflows usually need better than that.",
    },
    {
      question: "Is 95% OCR accuracy good enough?",
      answer:
        "It can be fine for searching a scanned archive, where a few misread characters rarely hide a page. For pulling out amounts, dates or IDs it is rarely enough. At 95% per character there are about 50 wrong characters per 1,000, and only 59.9% of 10-digit numbers would come out fully right (0.95 to the power of 10).",
    },
    {
      question: "Does a higher DPI always improve OCR accuracy?",
      answer:
        "No. DPI matters because it sets how many pixels make up each letter. The sources on this page point to 150 to 300 DPI as the range to aim for, and Tesseract suggests resizing anything below 300 DPI. A blurry, skewed or low-contrast image stays hard at any DPI, and upscaling cannot add detail that was never captured.",
    },
    {
      question: "Can AI or a vision-language model make OCR 100 percent accurate?",
      answer:
        "No. A vision-language model can understand meaning and adapt to odd layouts, but it costs more per page, can vary from run to run and still makes mistakes. Many teams use dedicated OCR for the bulk of pages and a model for the hard few. Our VLM vs OCR guide compares cost, speed and repeatability.",
    },
    {
      question: "Can running two OCR engines and comparing them reach 100 percent?",
      answer:
        "Not on its own. When two engines disagree on a field, that is a useful signal to send it for review. But when they agree, both can still be wrong, especially on look-alike characters such as 0 and O, so agreement lowers the error rate without removing it. Pair it with rules such as check digits and totals.",
    },
    {
      question: "Do I need to deskew images before sending them to an OCR API?",
      answer:
        "It depends on the engine. Amazon Textract's quotas page says it supports all in-plane document rotations, while Tesseract's documentation warns that heavy skew severely hurts its output. Read your engine's documentation, and test a deliberately tilted sample from your own documents before you decide to skip the step.",
    },
    {
      question: "Why is my Tesseract OCR not accurate?",
      answer:
        "Usually the input. Tesseract's documentation says it works best at 300 DPI or more and suffers from heavy skew, noise and large borders. On hard documents the engine itself is also weaker: in our benchmark Tesseract scored 58-71% on the four hard categories, against 73-89% for PaddleOCR. Clean typed English was a tie at 97-99%.",
    },
    {
      question: "Does language or script change OCR accuracy?",
      answer:
        "Yes. In our benchmark, pages mixing English with Mandarin or Spanish scored 71% on Tesseract, 89% on PaddleOCR and 81% on DocsAPI. Engines also list the languages they support: Amazon Textract text detection covers six, and its handwriting recognition is English only. Set the language to match the page and check support before you buy.",
    },
    {
      question: "How many documents should I test before trusting an OCR engine?",
      answer:
        "Our benchmark advice is 50 real documents from your own workflow, including the messy ones, scored against a hand-labeled answer key. It takes a few hours and predicts your results better than any published benchmark, including ours. Count errors per field, not just per character, and look at your worst documents separately.",
    },
    {
      question: "Is OCR accurate on photos taken with a phone?",
      answer:
        "Less than on flatbed scans. In our benchmark, phone-photographed receipts scored 58% on Tesseract, 82% on PaddleOCR and 76% on DocsAPI. The benchmark write-up says pre-processing such as deskew, rotation correction and page boundary detection closes most of that gap, so shoot flat, in even light, and crop before OCR.",
    },
    {
      question: "What is a good OCR accuracy rate?",
      answer:
        "For clean printed documents, 97 to 99% character accuracy is normal for modern engines in our benchmark. Judge the OCR accuracy rate at field level, though: with 20 fields per document and 99% accuracy per field, 1 minus 0.99 to the power of 20 means about 18% of documents have at least one wrong field.",
    },
  ],
}
