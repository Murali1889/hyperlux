import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog10: BlogPost = {
  id: "new-10",
  title: "Document Detection: The Step Everyone Skips Before OCR",
  slug: "document-detection-before-ocr",
  excerpt:
    "Our OCR accuracy jumped four percentage points the day we stopped feeding rotated junk into the engine. Document detection is the cheapest, most-skipped accuracy win in the field.",
  description:
    "Document detection is the pre-OCR step that recovers the most accuracy. Here is what it is, why teams skip it, and how to add it in an afternoon.",
  metaTag: "Document Detection: The Step Everyone Skips Before OCR",
  content: `
    <p>Our OCR accuracy jumped four percentage points the day we stopped feeding rotated junk into the engine. Not by switching engines. Not by tuning models. We added a single pre-processing step. It took an afternoon to implement and recovered more accuracy than the previous quarter of model tuning.</p>
    <p>This guide is about that step, document detection, and why almost every team skips it until it costs them too much to ignore.</p>

    <h2>What "Document Detection" Means in Plain English</h2>
    <p>Document detection is the work of looking at a page and figuring out what kind of object it is and how it is oriented before you try to read it.</p>
    <p>A page might be:</p>
    <ul>
      <li>A flat scanned page (good, OCR can read it directly)</li>
      <li>A photo of a document on a desk (bad, there is desk around the edges, the document is slightly tilted, and shadows make some text harder to see)</li>
      <li>A photo of a passport (different, needs different OCR than a contract)</li>
      <li>An invoice (vs a bank statement, different downstream rules)</li>
      <li>A page rotated 90 degrees (broken, OCR will read it as gibberish without rotation first)</li>
      <li>A multi-page document split incorrectly (broken, table on page 7 may continue on page 8)</li>
    </ul>
    <p>Document detection answers these questions before OCR runs. The OCR engine then gets a clean, properly oriented page with metadata about what type of document it is. Accuracy goes up. Downstream rules get applied correctly. Bugs disappear.</p>
    <p>If you are brand new to OCR, our <a href="/resources/blogs/optical-character-reader-2026">optical character reader 2026 guide</a> is the easier starting point. This article assumes you have run OCR and want to know why your accuracy is lower than the marketing claims.</p>

    <h2>The Four Document Detection Tasks That Matter Most</h2>

    <h3>1. Page Boundary Detection</h3>
    <p>If the input is a photo, the document does not fill the frame. There is desk, hand, shadow. Page boundary detection finds the four corners of the actual document and crops to just that. OCR accuracy on a properly cropped document is dramatically higher than on the full photo.</p>
    <p>How: edge detection (Canny in OpenCV is the classic), contour finding, four-point perspective transform. About 20 lines of code if you use OpenCV.</p>

    <h3>2. Rotation Correction</h3>
    <p>Pages scanned sideways or upside-down. OCR engines read top-to-bottom. A sideways page produces sideways gibberish. Rotation correction detects which way is up and rotates the page before OCR.</p>
    <p>How: small classifier that takes a thumbnail and predicts orientation (0°, 90°, 180°, 270°). Trains fast. Free packages (Tesseract has built-in <code>--rotate-pages</code>) make this a one-flag fix.</p>

    <h3>3. Skew Correction (Deskew)</h3>
    <p>A page scanned at a 3-degree tilt. Looks fine to a person; OCR accuracy drops 5-10 points. Deskewing rotates the page to perfectly horizontal.</p>
    <p>How: Hough line transform finds the dominant text line angle, then rotate by the negative of that angle. <code>ocrmypdf --deskew</code> does this automatically.</p>

    <h3>4. Document Classification</h3>
    <p>Is this an invoice, a bank statement, a passport, a contract? Different document types need different OCR settings, different validation rules, different downstream routing.</p>
    <p>How: small image classifier or layout-based heuristic. Production systems usually train a model on tens of thousands of labeled documents per class. Open source classifiers exist for common types.</p>

    <h2>Why Teams Skip Document Detection</h2>
    <p>Most teams skip document detection because they assume the OCR vendor handles it, the marketing budget is concentrated on the OCR engine itself, and clean demo documents hide the failures that real-world documents produce. The result is a pipeline that hits 85% accuracy on production data instead of 95%+, then spends months building manual review workflows to catch the gap that one pre-processing pass would have closed.</p>

    <h3>"The vendor said it was built in"</h3>
    <p>Some vendors include document detection. Some claim they do but it is shallow (only handles 0/90/180/270 rotation, not arbitrary skew, not page boundaries). Read the docs carefully.</p>

    <h3>"It's not where the magic is"</h3>
    <p>The OCR engine and the LLM get the marketing budget. Pre-processing gets ignored. So teams pour effort into model tuning and ignore the cheap fix in front of them.</p>

    <h3>"We thought our documents were clean"</h3>
    <p>Every team thinks their documents are clean until they look. Run a sample of your real production documents and you will find tilted pages, rotated pages, photos with desks around the edges, and faded scans. The documents in your inbox right now are not clean.</p>

    <h3>"We'll get to it later"</h3>
    <p>"Later" is when you have spent six months building review workflows to fix the errors you could have prevented with one afternoon of pre-processing. Add the pre-processing first.</p>

    <h2>The Pipeline I Run Today</h2>
    <p>This is the production pre-processing pipeline I run before every OCR call. Each step is cheap. Each step recovers accuracy. Together they recovered about 6 percentage points of accuracy from our pre-cleanup baseline.</p>
    <ol>
      <li><strong>File-type check.</strong> Is this actually a PDF/image? Confirm by magic bytes, not extension.</li>
      <li><strong>Page extraction.</strong> Convert PDF pages to images at 300 DPI.</li>
      <li><strong>Page boundary detection.</strong> If the image is a photo with margins, crop to the document.</li>
      <li><strong>Rotation correction.</strong> Detect orientation and rotate to upright.</li>
      <li><strong>Deskew.</strong> Correct for small tilts.</li>
      <li><strong>Adaptive thresholding.</strong> Boost contrast in low-contrast regions without crushing high-contrast text.</li>
      <li><strong>Document classification.</strong> Predict document type. Route to type-specific OCR settings.</li>
      <li><strong>OCR.</strong> Run the engine. Now it has a clean, oriented, classified document.</li>
    </ol>
    <p>The whole pre-processing pipeline runs in under a second per page on commodity hardware. The accuracy gain is permanent and applies to every downstream document. (Detailed walk-through in our <a href="/resources/blogs/ocr-pdf-honest-guide">honest guide from 4M pages a month</a>.)</p>

    <h2>The Five Failure Modes Document Detection Catches</h2>
    <p>These are the failures that document detection prevents. If you see any of these in your output, you are skipping detection somewhere:</p>
    <ol>
      <li><strong>Gibberish on specific pages.</strong> Rotated page. Add rotation correction.</li>
      <li><strong>Wrong document type routing.</strong> Bank statement routed as invoice. Add classification.</li>
      <li><strong>Margin text picked up as part of the document.</strong> Photo with desk around the edges. Add page boundary detection.</li>
      <li><strong>Lower accuracy on hand-photographed documents than scanned ones.</strong> Skew + photo edges. Add boundary detection and deskew.</li>
      <li><strong>Multi-page tables breaking on page boundaries.</strong> Page splitting logic ignored continuation tables. Add cross-page table linking.</li>
    </ol>

    <h2>How to Add Document Detection in an Afternoon</h2>
    <p>If you have a Tesseract-based pipeline today and want to add detection cheaply:</p>
    <pre><code>brew install ocrmypdf
ocrmypdf --deskew --rotate-pages --remove-background input.pdf output.pdf</code></pre>
    <p>Those three flags handle deskew, rotation, and background removal. Page boundary detection requires a few extra lines of OpenCV. Document classification requires a small model or a heuristic ruleset.</p>
    <p>If you are on a cloud OCR API, check whether detection is included. Most modern APIs (DocsAPI, AWS Textract, Google Document AI) handle the basic detection steps automatically. If yours doesn't, file a feature request, it is a baseline expectation in 2026.</p>

    <h2>The Way I Explain This to Non-Tech Folks</h2>
    <p>Imagine you ask a friend to read every label on a shelf in your basement. If you hand her a clean shelf with labels facing forward and lights on, she reads them all correctly. If you hand her a dusty shelf with some labels upside-down, some sideways, some in the shadows, she will misread some.</p>
    <p>Document detection is the work you do before handing her the shelf. Brush off the dust. Turn the labels right-side up. Turn the lights on. The shelf is now an easy read. Your friend reads everything correctly.</p>
    <p>The shelf is your PDF. The friend is the OCR engine. The dusting and turning is document detection. People skip it because it sounds boring. The accuracy gain from doing it is the biggest single improvement available.</p>

    <h2>What I'd Do Today</h2>
    <p>If you have a working OCR pipeline that disappoints: add deskew and rotation correction first. Two flags in ocrmypdf or a few lines of code in your own pipeline. The accuracy lift is typically 4-8 points.</p>
    <p>If you are starting a new pipeline: do not write the OCR step until you have written the pre-processing. The pre-processing is what makes the OCR work.</p>
    <p>If you are evaluating a vendor: ask what document detection they do. The answer should be specific, boundary detection, rotation, deskew, classification. Not just "yes". (<a href="/author/nupura-ughade">I write about this gap a lot</a>.)</p>

    <h2>Frequently Asked Questions</h2>

    <h3>What is document detection in OCR?</h3>
    <p>Document detection is the pre-processing step that identifies and prepares pages before OCR runs. It includes page boundary detection, rotation correction, deskew, and document classification. Skipping it costs accuracy on real-world (non-clean) documents.</p>

    <h3>Is document detection included in modern OCR APIs?</h3>
    <p>Mostly yes. AWS Textract, Google Document AI, Azure Form Recognizer, and DocsAPI all include basic detection. Tesseract requires you to add it via flags or external tools. Always check the docs for which specific detection steps are included.</p>

    <h3>How much does document detection improve OCR accuracy?</h3>
    <p>Typical accuracy gain: 4-8 percentage points on real-world (non-clean) documents. The gain is larger on photos taken with a phone, scanned at angles, or faded. Clean scans benefit less because they were already easy.</p>

    <h3>Can I add document detection without an engineer?</h3>
    <p>Partially. Tools like ocrmypdf include detection flags you can run from the command line. For full pipeline integration (page boundaries, classification), an engineer is helpful. Many cloud OCR APIs handle detection automatically.</p>

    <h3>What is the difference between rotation correction and deskew?</h3>
    <p>Rotation correction handles 90-degree turns (sideways or upside-down pages). Deskew handles small tilts (a 3-degree angle off horizontal). Both are needed. Rotation correction is binary (4 possible orientations). Deskew is continuous (any small angle).</p>

    <h3>Does document detection help with handwritten content?</h3>
    <p>It helps with everything, typed, handwritten, mixed. Handwriting benefits especially from page boundary detection (photos of handwritten notes often include desk edges) and deskew (handwritten pages are rarely perfectly aligned).</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "AI Document Intelligence",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-06-22T00:00:00.000Z",
  last_updated: "June 22, 2026",
  readTime: "9 min read",
  author: nupuraUghade,
  primary_keyword: "document detection",
  secondary_keywords: [
    "document detection ocr",
    "pre-processing ocr",
    "ocr accuracy",
    "page boundary detection",
    "deskew",
    "rotation correction",
    "ocr pipeline",
  ],
  tags: ["document detection", "OCR", "pre-processing", "accuracy"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is document detection in OCR?",
      answer:
        "Document detection is the pre-processing step that identifies and prepares pages before OCR runs. It includes page boundary detection, rotation correction, deskew, and document classification. Skipping it costs accuracy on real-world documents.",
    },
    {
      question: "Is document detection included in modern OCR APIs?",
      answer:
        "Mostly yes. AWS Textract, Google Document AI, Azure Form Recognizer, and DocsAPI include basic detection. Tesseract requires you to add it via flags or external tools. Always check the docs for which specific steps are included.",
    },
    {
      question: "How much does document detection improve OCR accuracy?",
      answer:
        "Typical accuracy gain: 4-8 percentage points on real-world documents. The gain is larger on photos taken with a phone, scanned at angles, or faded. Clean scans benefit less because they were already easy.",
    },
    {
      question: "Can I add document detection without an engineer?",
      answer:
        "Partially. Tools like ocrmypdf include detection flags you can run from command line. For full pipeline integration (page boundaries, classification), an engineer helps. Many cloud OCR APIs handle detection automatically.",
    },
    {
      question: "What is the difference between rotation correction and deskew?",
      answer:
        "Rotation correction handles 90-degree turns (sideways or upside-down pages). Deskew handles small tilts (a 3-degree angle off horizontal). Both are needed. Rotation correction is binary; deskew is continuous.",
    },
    {
      question: "Does document detection help with handwritten content?",
      answer:
        "It helps with everything, typed, handwritten, mixed. Handwriting benefits especially from page boundary detection (photos often include desk edges) and deskew (handwritten pages are rarely perfectly aligned).",
    },
  ],
}
