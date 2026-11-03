import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog36: BlogPost = {
  id: "new-36",
  title: "How Does OCR Work? Six Steps From Scanned Pixels to Usable Text",
  slug: "how-does-ocr-work",
  excerpt:
    "OCR turns an image of text into characters a computer can search and copy. It does this in six steps, and almost every OCR error can be traced to one of them. Here is each step, what breaks, and how to tell which one failed.",
  description:
    "How does OCR work? Six steps from image to text: capture, clean-up, layout, recognition, post-processing and output, with a table to find which step failed.",
  metaTag: "How Does OCR Work? 6 Steps From Scan to Text (2026)",
  summary:
    "OCR reads an image in six steps: capture, clean-up, layout analysis, character recognition, post-processing and output. Most errors come from the first three steps, not from the recognition engine itself.",
  content: `
    <p>OCR (optical character recognition) works by taking an image of a page, cleaning it up, finding where the text sits, recognizing each character or word, checking the result against rules, and writing out text with a confidence score for each piece. Six steps, in that order. When OCR gives a wrong answer, the cause is usually in the first three steps, not in the recognition engine.</p>

    <p>That matters because the usual reaction to bad OCR output is to switch engines. Often the engine was fine and the scan was crooked, too dark, or read as one column when it was two. Knowing the steps lets you fix the right thing. This guide walks through each one and ends with a table that maps a symptom to the step that caused it.</p>

    <h2>What are the six steps of OCR?</h2>

    <ol>
      <li><strong>Capture:</strong> a scanner, camera or PDF export produces an image.</li>
      <li><strong>Clean-up (preprocessing):</strong> straighten, remove noise, fix contrast.</li>
      <li><strong>Layout analysis:</strong> find the text regions, columns, tables and reading order.</li>
      <li><strong>Recognition:</strong> turn each line or word image into characters.</li>
      <li><strong>Post-processing:</strong> fix likely mistakes using dictionaries, formats and field rules.</li>
      <li><strong>Output:</strong> write text, positions and confidence, as plain text, searchable PDF or structured data.</li>
    </ol>

    <h2>Step 1: Capture decides the ceiling</h2>

    <p>Nothing later in the chain can recover detail that was never captured. A 300 DPI flatbed scan of a printed page gives the engine sharp edges to work with. A phone photo taken at an angle, in shadow, of a creased receipt does not. That is why the same engine can look excellent on one document and poor on another. In our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">1,700-document benchmark</a>, clean typed English scored 97-99% on every engine, while phone-photographed receipts scored between 58% and 82% depending on the engine. The engines did not change. The input did.</p>

    <p>If a PDF came from a scanner it is usually just a picture of a page, which is why it needs OCR at all. We explain how to tell the difference in <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDF vs image PDF</a>.</p>

    <h2>Step 2: Clean-up straightens and sharpens the image</h2>

    <p>Preprocessing makes the image easier to read without changing what it says. The common operations are:</p>

    <ul>
      <li><strong>Deskewing:</strong> rotating a page that was scanned a few degrees crooked so the lines run level.</li>
      <li><strong>Denoising:</strong> removing specks, scanner dust and fax artifacts.</li>
      <li><strong>Binarization:</strong> converting to black and white with a threshold so text stands out from the background. A fixed threshold fails on uneven lighting, so many tools pick the threshold per region.</li>
      <li><strong>Scaling:</strong> resizing so characters are large enough to read. Text that is only a few pixels tall is a common cause of misreads.</li>
    </ul>

    <p>Over-cleaning can hurt. Aggressive binarization can erase thin strokes, faint grey text and stamps, which are exactly what you lose on faded thermal receipts.</p>

    <h2>Step 3: Layout analysis finds what to read, and in what order</h2>

    <p>Before reading any character, the software has to decide where the text is. It splits the page into regions such as paragraphs, headings, tables, images and margins, then works out the reading order. This is the step that gets multi-column pages and tables wrong. If a two-column page is read straight across, the output interleaves sentences from the left and right columns, and every word can be correct while the text is unusable.</p>

    <p>Layout is also where tables go wrong. A table is a grid, and plain OCR returns lines of text, not rows and columns. Rebuilding the grid is a separate job from reading characters. That is the main reason accuracy on multi-page bank statements in our benchmark ran from 64% for Tesseract to 91% for DocsAPI, on the same page images. We go deeper on this in <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout analysis and key-value extraction</a>.</p>

    <p>Sending the wrong kind of page into this step causes its own problems, such as a photo of a desk with a document somewhere in it. <a href="/resources/blogs/document-detection-before-ocr">Document detection before OCR</a> covers cropping to the page first.</p>

    <h2>Step 4: Recognition turns image fragments into characters</h2>

    <p>This is the step most people mean by OCR. Older engines compared each character shape against stored templates. Modern engines use neural networks that read a whole line or word image and output the most likely sequence of characters. Tesseract 5 uses an LSTM (a kind of recurrent neural network) for this. PaddleOCR uses its own detection and recognition models.</p>

    <p>The engine does not "know" a letter. It assigns probabilities, for example 90% that a shape is an "8" and 8% that it is a "B", and picks the most likely one. Those probabilities become the confidence scores you see in the output, and they are the most useful thing OCR gives you for deciding what to trust. A recognizer that returned the top guess with no score would force you to either trust everything or check everything.</p>

    <h2>Step 5: Post-processing catches mistakes the recognizer cannot see</h2>

    <p>Recognition works one line at a time and does not know what the line means. Post-processing adds that knowledge. Typical checks:</p>

    <ul>
      <li><strong>Dictionary and language checks:</strong> "rn" read as "m", or "0" read as "O" in the middle of a word.</li>
      <li><strong>Format rules:</strong> a date must be a valid date, an invoice total must be a number, a postcode must match the country pattern.</li>
      <li><strong>Cross-field checks:</strong> line items should add up to the subtotal; the subtotal plus tax should equal the total.</li>
    </ul>

    <p>The cross-field check is the strongest one for financial documents, because an arithmetic mismatch flags an error even when every individual character looked confident. It is the idea behind the checks in <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a>.</p>

    <h2>Step 6: Output decides how useful the result is</h2>

    <p>OCR output comes in three common forms:</p>

    <ul>
      <li><strong>Plain text:</strong> good for search and copy-paste, loses layout.</li>
      <li><strong>Searchable PDF:</strong> the original image with an invisible text layer on top, so the page looks the same but can be searched. See <a href="/resources/blogs/make-pdf-searchable">how to make a PDF searchable</a>.</li>
      <li><strong>Structured data:</strong> fields, tables and values as JSON or CSV, with positions and confidence. This is what a business system needs, and it requires layout analysis and field rules, not only recognition.</li>
    </ul>

    <h2>See the steps for yourself in ten lines</h2>

    <p>Tesseract can print the word, position and confidence it assigns to each piece of text. This shows steps 3 to 6 in one call.</p>

    <pre><code>import pytesseract
from PIL import Image

img = Image.open("invoice.png")
data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)

for i, word in enumerate(data["text"]):
    if word.strip():
        print(word, data["conf"][i], data["left"][i], data["top"][i])</code></pre>

    <p>Each row gives the recognized word, a confidence value, and where it sits on the page. Run it on your worst document, sort by confidence, and the low-confidence words are the ones to look at first. This costs nothing and shows the pattern in your own files better than any benchmark.</p>

    <h2>Which step failed? A diagnosis table</h2>

    <table>
      <thead>
        <tr><th>What you see</th><th>Likely step</th><th>What to try</th></tr>
      </thead>
      <tbody>
        <tr><td>Garbled text across the whole page</td><td>1 Capture or 2 Clean-up</td><td>Rescan at higher DPI, check focus and lighting, deskew</td></tr>
        <tr><td>Words fine, sentences scrambled</td><td>3 Layout</td><td>Split columns before OCR, use an engine with layout analysis</td></tr>
        <tr><td>Table values in the wrong columns</td><td>3 Layout</td><td>Use table extraction, not plain text OCR</td></tr>
        <tr><td>One character swapped, such as 0 and O or 1 and l</td><td>4 Recognition</td><td>Check confidence, add format rules for that field</td></tr>
        <tr><td>Handwriting unreadable</td><td>4 Recognition</td><td>Expect lower accuracy: 78% for DocsAPI and 61% for Tesseract in our benchmark; plan human review</td></tr>
        <tr><td>Totals that do not add up</td><td>5 Post-processing</td><td>Add arithmetic checks between fields</td></tr>
        <tr><td>Looks right but cannot be searched</td><td>6 Output</td><td>Export as searchable PDF or structured data</td></tr>
      </tbody>
    </table>

    <h2>Where traditional OCR ends and AI extraction begins</h2>

    <p>The six steps describe classic OCR. Newer systems based on vision language models read the page image directly and answer questions about it, which blurs steps 3 to 5. They can handle messy layouts well, and they can also produce confident wrong numbers, which is a serious problem for finance. We compare the two approaches in <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR</a>. Whichever you use, the same rule holds: measure it on your own documents, using the method in <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>.</p>

    <p>If you only need clean text from a file or two, a free tool is enough, and our <a href="/resources/blogs/free-online-ocr-tools">free OCR tools review</a> covers which ones are worth using. If you need tables and fields from documents at volume, that is the case document AI APIs exist for, and the engine comparison is in <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a>.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 3, 2026",
  datePublished: "2026-11-03T00:00:00.000Z",
  dateModified: "2026-11-03T00:00:00.000Z",
  last_updated: "November 3, 2026",
  readTime: "8 min read",
  author: nupuraUghade,
  primary_keyword: "how does ocr work",
  secondary_keywords: [
    "how does optical character recognition work",
    "ocr process steps",
    "how ocr works step by step",
    "ocr pipeline",
    "what is ocr and how does it work",
  ],
  tags: ["OCR", "explainer", "how it works", "preprocessing", "layout analysis"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How does OCR work in simple terms?",
      answer:
        "OCR takes a picture of a page, cleans it up, finds where the text and tables are, recognizes each character or word, checks the result against rules such as valid dates and totals that add up, and outputs text with a confidence score for each piece.",
    },
    {
      question: "What are the main steps in the OCR process?",
      answer:
        "Six steps: capture the image, clean it up (deskew, denoise, binarize), analyze the layout, recognize the characters, post-process using dictionaries and field rules, and output text, a searchable PDF or structured data.",
    },
    {
      question: "Why does OCR make mistakes?",
      answer:
        "Most mistakes come from the early steps: a low-quality scan, a crooked or dark image, or a layout that was read in the wrong order. Characters can also be confused when they look alike, such as 0 and O or 1 and l. Checking confidence scores and adding field rules catches most of them.",
    },
    {
      question: "Does OCR use AI?",
      answer:
        "Modern OCR engines use neural networks for the recognition step. Tesseract 5 uses an LSTM network, and PaddleOCR uses its own detection and recognition models. Newer document AI systems go further and read the page with vision language models.",
    },
    {
      question: "How accurate is OCR?",
      answer:
        "It depends on the document. In our 1,700-document benchmark, clean typed English scored 97-99% on every engine tested. Multi-page bank statement tables ranged from 64% to 91%, and handwritten forms from 61% to 78%. Test on your own documents before relying on any figure.",
    },
    {
      question: "What is the difference between OCR and a searchable PDF?",
      answer:
        "OCR is the process of reading the text. A searchable PDF is one possible output: the original page image with an invisible text layer added so you can search and copy from it.",
    },
    {
      question: "What is a confidence score in OCR?",
      answer:
        "A number the engine attaches to each recognized word or character showing how sure it is. Low scores point to the pieces most likely to be wrong, so you can review those and skip the rest.",
    },
    {
      question: "Can OCR read tables?",
      answer:
        "Plain OCR returns lines of text, not rows and columns. Reading a table needs layout analysis that rebuilds the grid, which is a separate step from recognizing characters. Table accuracy varies far more between engines than clean text does.",
    },
  ],
}
