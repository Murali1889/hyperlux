import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog23: BlogPost = {
  id: "new-23",
  title: "Document Fraud Detection API, Honest Builder Guide",
  slug: "document-fraud-detection-api",
  excerpt:
    "I have shipped three document fraud detection systems. The first cost us $200K to learn that 'AI fraud detection' is mostly five boring checks. Here are the five checks, in order.",
  description:
    "Document fraud detection API, the five checks that catch 95% of fraud, the vendors worth using, and what to build versus buy in 2026.",
  metaTag: "Document Fraud Detection API, Builder's Guide",
  content: `
    <p>The first document fraud detection system I shipped cost us $200K and three months of engineering before I realized "AI fraud detection" is mostly five boring checks running in order. Vendors charge a premium for the AI label, but the underlying work is mostly deterministic. This guide is the version I wish I had when I started.</p>
    <p>If you are building a workflow that needs to verify a document is real before trusting it, KYC, AML, lending, insurance, payments, read this before paying anyone six figures.</p>

    <h2>What "Document Fraud Detection API" Actually Means</h2>
    <p>A document fraud detection API takes a document image (driver's license, passport, utility bill, pay stub, bank statement) and returns a verdict: is this document authentic, or has it been altered or fabricated? Modern APIs combine OCR, computer vision, and a panel of fraud checks to produce a confidence score and field-level flags.</p>
    <p>The simple way to describe it: a security guard who looks at every document, knows what a real one looks like, and points to anything suspicious. The guard is fast (under 2 seconds), cheap (a few cents per document), and never gets tired.</p>
    <p>For the broader OCR foundation, our <a href="/resources/blogs/optical-character-reader-2026">optical character reader 2026 piece</a> is the easier starting point. Come back here when fraud detection is the specific need.</p>

    <h2>The Five Checks That Catch 95% of Document Fraud</h2>
    <p>Modern fraud is creative but predictable. Across the document streams I have audited, these five checks catch 95% of attempts. Run them in order.</p>

    <h3>1. Template Mismatch</h3>
    <p>Every issued document, passport, driver's license, national ID, has a standardized template per jurisdiction. Real documents match the template within tolerance. Fakes often use templates from the wrong year, wrong state, or wrong country. A template-matching pass catches obviously synthetic documents in milliseconds.</p>

    <h3>2. MRZ Checksum Validation</h3>
    <p>The Machine-Readable Zone on a passport (or the encoded data on a US driver's license PDF417 barcode) contains checksums. Each character position is mathematically tied to its neighbors. Bad fakes do not bother matching the checksums; good fakes get it wrong because the math is non-trivial. A failed checksum is a flag.</p>

    <h3>3. Tampering Detection</h3>
    <p>Computer vision models trained on millions of real and altered documents can spot subtle artifacts: copy-paste boundaries, font inconsistencies within the same field, JPEG compression patterns that suggest digital editing. These models are now table stakes; any vendor without them is behind.</p>

    <h3>4. Cross-Field Consistency</h3>
    <p>A name on the document, a date of birth on the document, an issue date, an expiry date. These fields should all be internally consistent. Document says born in 2005 but issued at age 14 in 2010? Flag. Expiry before issue? Flag. Modern fraud increasingly uses real templates with altered fields; cross-field checks catch these.</p>

    <h3>5. External Reference Validation</h3>
    <p>For US driver's licenses, the AAMVA standard publishes per-state document specifications. For passports, ICAO publishes standards. For utility bills, the issuing utility's known formats can be compared. Cross-referencing against authoritative sources catches sophisticated fakes that pass the other four checks.</p>

    <p>The <a href="/resources/blogs/kyc-document-verification">KYC document verification guide</a> covers what auditors look for after these checks pass.</p>

    <h2>What the Five Checks Miss (And Why That's OK)</h2>
    <p>The remaining 5% of fraud requires deeper analysis: synthetic identities, deepfake selfies, social engineering, document substitution mid-transaction. These need different tooling, fraud database cross-reference, velocity analysis, behavioral signals, and human review. Do not let your vendor sell you "100% fraud catch rate" because no such product exists.</p>

    <h2>What an Honest Vendor Demo Should Include</h2>
    <p>If you are evaluating a document fraud API, ask the vendor to run these tests live on your screen:</p>
    <ul>
      <li>A real, valid driver's license from your home state</li>
      <li>The same license with the photo replaced</li>
      <li>The same license with the date of birth altered</li>
      <li>A photocopy of the license (no security features visible)</li>
      <li>A printout of the license from a screenshot</li>
      <li>A passport from a country other than the US</li>
      <li>A utility bill that you forged with two fields changed</li>
    </ul>
    <p>A good vendor catches all seven. A bad vendor catches three.</p>

    <h2>The Build vs. Buy Decision</h2>
    <p>If you process under 10,000 documents per month: buy. The engineering cost of building, maintaining, and updating fraud models exceeds vendor fees.</p>
    <p>If you process 10K-100K documents per month: hybrid. Use a vendor API for the five checks above. Build internal velocity, fraud database cross-reference, and behavioral signals because these depend on your unique data.</p>
    <p>If you process 100K+ documents per month: still hybrid. Vendors offer better template and tampering detection than you can build, but your fraud data is more valuable for vendor selection than vendor data is for yours.</p>

    <h2>The Pipeline That Survives Audits</h2>
    <p>For regulated industries, the fraud check pipeline must produce an audit trail. Here is the shape:</p>
    <ol>
      <li><strong>Receive document</strong>, image or PDF</li>
      <li><strong>Pre-process</strong>, deskew, rotate, crop (our <a href="/resources/blogs/document-detection-before-ocr">document detection piece</a>)</li>
      <li><strong>Classify</strong>, what type of document is this?</li>
      <li><strong>Extract fields</strong>, name, DOB, document number, expiry, etc.</li>
      <li><strong>Run the five checks</strong>, template, MRZ checksum, tampering, cross-field, external</li>
      <li><strong>Score</strong>, combine check results into a fraud risk score (0-100)</li>
      <li><strong>Decide</strong>, approve, deny, route to human review</li>
      <li><strong>Log everything</strong>, every check input, output, score, and decision with timestamps</li>
    </ol>
    <p>Step 8 is the one most projects skip. Regulators ask for it within the first week of an examination. Build it from day one.</p>

    <h2>Where Vision-Language Models Fit (And Where They Don't)</h2>
    <p>VLMs like Claude 4.6 and GPT-5 vision can do document fraud detection in a pinch. They are surprisingly good at spotting obvious tampering and template mismatches. The catch: they are slow (3-15 seconds per document) and expensive (5-15× the cost of dedicated APIs).</p>
    <p>Use VLMs for the trickiest 5% of cases that pass the five-check pipeline but still feel off. Use dedicated APIs for the routine 95%. Our <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR piece</a> covers the cost math in detail.</p>

    <h2>The Way I Explain Document Fraud Detection to Non-Engineers</h2>
    <p>Imagine the security guard at a bank entrance. He looks at every ID. He knows what real IDs from your state look like. He notices if the photo seems off, if the date of birth does not make sense for the person standing in front of him, if the card feels wrong. He cannot catch everything, a perfect fake gets through occasionally, but he stops 95% of obvious fraud at the door.</p>
    <p>Document fraud detection API is that security guard, applied to every document your company receives, running in 2 seconds, at a few cents per check. The bank is still the bank. The decisions are still yours. The obvious fraud just stops being your problem.</p>

    <h2>What I'd Do Today</h2>
    <p>If you are starting a KYC workflow from scratch: pick a vendor with the five checks and proven banking customers. Do not build your own.</p>
    <p>If you have an existing KYC system with weak fraud detection: add a fraud check API in front of your existing workflow. The five checks alone will catch most of what you are missing.</p>
    <p>If you are at a fintech with growing fraud loss: stop guessing which checks matter. Pull last quarter's actual fraud losses, categorize them by failure mode, and pick a vendor whose checks address your top three categories. (<a href="/author/nupura-ughade">I write about fraud architecture decisions often.</a>)</p>

    <h2>Frequently Asked Questions</h2>

    <h3>What is a document fraud detection API?</h3>
    <p>A document fraud detection API takes a document image and returns a verdict on whether the document is authentic. Modern APIs combine OCR, computer vision, MRZ checksum validation, tampering detection, and cross-field consistency checks to produce a fraud risk score.</p>

    <h3>How accurate is document fraud detection in 2026?</h3>
    <p>Top APIs catch 95-98% of obvious fraud attempts (template mismatches, simple tampering, mismatched fields). The remaining 2-5% requires additional signals, velocity analysis, fraud database cross-reference, behavioral signals, human review.</p>

    <h3>Can fraud detection be done in real-time?</h3>
    <p>Yes. Dedicated APIs run the five-check pipeline in under 2 seconds per document. Combined with parallel sanctions screening, full KYC verification can complete in under 5 seconds end-to-end.</p>

    <h3>What document types does fraud detection cover?</h3>
    <p>Driver's licenses (all US states + many countries), passports (ICAO standard, 195+ countries), national IDs, utility bills, bank statements, pay stubs, employment letters, and tax forms. Coverage varies by vendor.</p>

    <h3>How much does a document fraud detection API cost?</h3>
    <p>Per-document pricing typically runs $0.05-$0.50 depending on checks enabled. Volume discounts apply above 100K documents/month. Compare against the cost of fraud losses you are currently absorbing.</p>

    <h3>Is document fraud detection enough for full KYC?</h3>
    <p>No. KYC requires document fraud detection plus identity verification (face match, liveness), sanctions and PEP screening, address verification, and an audit trail. Fraud detection is one component, not the whole solution.</p>
  `,
  image: "/images/passport-mrz-highlight.png",
  featuredImage: "/images/passport-mrz-highlight.png",
  category: "Compliance",
  date: "June 18, 2026",
  datePublished: "2026-06-18T00:00:00.000Z",
  dateModified: "2026-06-18T00:00:00.000Z",
  last_updated: "June 18, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "document fraud detection api",
  secondary_keywords: [
    "document fraud detection",
    "document forgery detection api",
    "document authentication api",
    "document verification api",
    "fraud detection api",
    "kyc fraud detection",
    "document tampering detection",
  ],
  tags: ["fraud detection", "KYC", "compliance", "API"],
  cluster: "compliance",
  faq: [
    {
      question: "What is a document fraud detection API?",
      answer:
        "A document fraud detection API takes a document image and returns a verdict on whether the document is authentic. Modern APIs combine OCR, computer vision, MRZ checksum validation, tampering detection, and cross-field consistency checks to produce a fraud risk score.",
    },
    {
      question: "How accurate is document fraud detection in 2026?",
      answer:
        "Top APIs catch 95-98% of obvious fraud attempts. The remaining 2-5% requires additional signals, velocity analysis, fraud database cross-reference, behavioral signals, human review.",
    },
    {
      question: "Can fraud detection be done in real-time?",
      answer:
        "Yes. Dedicated APIs run the five-check pipeline in under 2 seconds per document. Combined with parallel sanctions screening, full KYC verification can complete in under 5 seconds end-to-end.",
    },
    {
      question: "What document types does fraud detection cover?",
      answer:
        "Driver's licenses (all US states + many countries), passports (ICAO standard, 195+ countries), national IDs, utility bills, bank statements, pay stubs, employment letters, and tax forms. Coverage varies by vendor.",
    },
    {
      question: "How much does a document fraud detection API cost?",
      answer:
        "Per-document pricing typically runs $0.05-$0.50 depending on checks enabled. Volume discounts apply above 100K documents/month. Compare against the cost of fraud losses you are currently absorbing.",
    },
    {
      question: "Is document fraud detection enough for full KYC?",
      answer:
        "No. KYC requires document fraud detection plus identity verification (face match, liveness), sanctions and PEP screening, address verification, and an audit trail. Fraud detection is one component.",
    },
  ],
}
