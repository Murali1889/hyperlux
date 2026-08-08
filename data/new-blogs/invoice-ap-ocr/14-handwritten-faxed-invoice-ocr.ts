import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogAp14: BlogPost = {
  id: "ap-14",
  title: "Handwritten and Faxed Invoices: The Real Accuracy Data",
  slug: "handwritten-faxed-invoice-ocr",
  excerpt:
    "Vendors call handwriting accuracy 'reasonable.' Here is what we actually measured across engines on real handwritten and faxed invoices.",
  description:
    "Real, named-engine accuracy data for handwritten and faxed invoices from small vendors, not vague 'reasonable accuracy' marketing claims from vendors.",
  metaTag: "Handwritten Invoice OCR: Real Accuracy Data (2026)",
  content: `
    <p>Every enterprise AP automation demo runs on clean, typed, digitally-generated PDF invoices, because that is what makes a demo look good. It is also not what a lot of real AP volume actually looks like. Small vendors, a local electrician, an HVAC repair shop, an independent contractor, still routinely send handwritten invoices, and older-relationship vendors still fax them in exactly the same format they have used for a decade. "Handwriting accuracy is reasonable" is the most specific claim most OCR vendors will actually commit to in writing, which tells you almost nothing about whether it will work on your specific long tail of small vendors sending exactly this kind of document every week.</p>

    <p>This is real, named-engine accuracy data on handwritten and faxed documents from our own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>, for teams building <a href="/solutions/finance-automation">invoice automation</a> that has to handle more than the clean-PDF case.</p>

    <h2>The real numbers, by engine, on handwritten forms</h2>

    <table>
      <thead>
        <tr><th>Engine</th><th>Handwritten forms accuracy</th></tr>
      </thead>
      <tbody>
        <tr><td>Tesseract 5.x</td><td>61%</td></tr>
        <tr><td>PaddleOCR</td><td>73%</td></tr>
        <tr><td>DocsAPI</td><td>78%</td></tr>
      </tbody>
    </table>

    <p>This is character-level accuracy on mixed-neatness handwritten forms from our 500-document engine-comparison set. The spread is large, 17 points between the weakest and strongest engine tested, which matters enormously if your actual vendor mix includes a meaningful share of handwritten documents, since the difference between 61% and 78% is the difference between "unusable without heavy manual correction" and "usable with a normal exception-review rate." Neither number is a headline vendor would put on a landing page, which is exactly why they rarely appear anywhere at all.</p>

    <h2>What "field-level" accuracy actually means for a handwritten amount</h2>

    <p>Character-level accuracy on handwriting is a slightly misleading number for AP purposes, because the field that matters most, the dollar amount, is short (typically 4 to 8 characters) and unforgiving of even a single-character error. A 78% character-level accuracy score sounds close to acceptable until you consider that a single misread digit in a 6-character amount field is a 100% wrong dollar figure, not a 17% error. This is why field-level accuracy (did we get the whole field right, not just most of the characters in it) is the more decision-relevant number for amount fields specifically, even though character-level accuracy is what most vendors report because it produces a more favorable-looking headline number.</p>

    <p>Practically, this means the validation check matters more on handwritten invoices than on any other document type in your pipeline: reconciling the extracted amount against a line-item sum, a PO amount, or simply flagging any handwritten-source amount field below a stricter confidence threshold than you would apply to a typed document, since the cost of a wrong amount slipping through is identical regardless of source, but the probability of it happening is meaningfully higher here.</p>

    <h2>Why the spread is this wide specifically on handwriting</h2>

    <p>Printed text has a small, well-defined set of glyph shapes per character, which is why every modern engine clears 97%+ on clean typed text, the problem is essentially solved. Handwriting has enormous shape variance for the same character across different writers, and even for the same writer across different words, which means an engine's handwriting accuracy depends heavily on how much genuinely diverse handwritten training data it saw, not just on general OCR quality. This is why the gap between engines widens so much more on handwriting than on any other document category in our benchmark, general-purpose OCR engines optimized primarily for printed text see a much smaller slice of handwritten training data than a system built with financial-document handwriting specifically in mind.</p>

    <h2>Faxed documents: a different degradation pattern entirely</h2>

    <p>Fax and handwriting are often grouped together as "hard documents," but they degrade for different reasons and need different handling. Fax transmission at standard resolution (commonly 150 to 200 DPI, well below the 300 DPI generally considered clean for OCR) introduces line-based artifacts from the scanning mechanism itself, horizontal banding, dropped pixel rows, and compression artifacts around text edges, distinct from the shape-variance problem that makes handwriting hard. A fax of a clean typed invoice can still degrade meaningfully from resolution loss alone; a fax of a handwritten invoice compounds both problems at once, low resolution on top of high shape variance, which is the single worst-case combination in the entire document set.</p>

    <p>The practical implication: if your vendor mix includes faxed handwritten invoices specifically (common with older, smaller trade vendors who have not updated their intake process in years), budget for the highest manual-review rate in your entire pipeline on that specific subset, rather than averaging it into a blended accuracy expectation that looks fine on paper but hides where the real exception volume concentrates. This subset is usually small in dollar terms and disproportionately time-consuming per invoice, a combination worth naming explicitly rather than absorbing silently into overall AP team workload.</p>

    <h2>What actually helps before extraction even runs</h2>

    <p>Preprocessing narrows the gap more than most teams expect. Deskewing (correcting rotation), contrast enhancement, and resolution upscaling on genuinely low-resolution faxes each recover real accuracy points before the extraction model ever sees the image, and they are comparatively cheap to apply automatically as a standard first step rather than something invoked only when a document already failed. For handwriting specifically, preprocessing helps less, since the core problem is shape ambiguity rather than image quality, but it still helps at the margin on documents that combine poor scan quality with handwritten content.</p>

    <p>Resolution upscaling in particular is worth calling out because it is easy to misuse. Naive upscaling (simply enlarging a low-resolution image) does not add information and can make text look sharper without actually being more legible to an extraction model. The preprocessing that genuinely helps uses interpolation and denoising specifically tuned for text recovery, not a generic image-resize operation, and the difference between the two shows up clearly in accuracy testing even though both produce a visually "bigger" image to a human glancing at it.</p>

    <h2>What actually moves the number beyond picking a better engine</h2>

    <p>Engine choice is not the only lever, and for a lot of teams it is not even the most practical one to pull first. A repeat vendor who always sends handwritten invoices in roughly the same layout, a hand-filled generic invoice pad, for example, is a better candidate for a lightweight template that tells extraction where to expect specific fields (date in this corner, amount in that box) than for pure general-purpose handwriting recognition working from nothing. This is the inverse of the "template-free is always better" marketing claim common across invoice OCR vendors: template-free genuinely wins on the long tail of unfamiliar layouts, but a known, stable, repeat vendor with consistently messy handwriting is exactly the case where a little bit of layout-specific structure helps more than a smarter general model would on its own.</p>

    <p>A phone-call verification threshold is the other practical lever worth building explicitly rather than leaving implicit. Below a certain confidence score on a handwritten amount field specifically (not just any field, since a misread amount on a handwritten invoice is the highest-consequence error type), route to a quick vendor callback to confirm the number rather than either guessing from a low-confidence extraction or manually re-keying from the image with no verification at all. This is slower per-invoice than pure automation but faster and safer than discovering a misread amount after payment has already gone out.</p>

    <h2>Vendor digitization as the alternative to fighting the OCR problem</h2>

    <p>For your highest-volume handwritten-invoice vendors specifically, the actual highest-leverage fix is sometimes not better extraction at all, it is asking the vendor to switch to a free digital invoicing tool for your account, since a $200/month local vendor sending three handwritten invoices a year is not worth engineering effort, but a vendor sending twenty a month is. Many small vendors are receptive to this ask specifically because a free invoicing app is genuinely easier for them too, not just for you, and it eliminates the accuracy problem at the source rather than working around it downstream. This will not work for every vendor and should not be treated as a substitute for solid handwriting OCR, but it is worth trying before assuming every handwritten invoice is a permanent extraction challenge to engineer around.</p>

    <h2>Setting review expectations honestly instead of by vendor claim</h2>

    <p>If handwritten and faxed documents make up even 5 to 10% of your invoice volume, and they land at 78% accuracy rather than the 93% your clean-PDF invoices get, that specific subset needs a meaningfully higher manual-review rate than your blended average suggests. Building a single confidence threshold across your entire document mix under-flags this subset for review (since the threshold gets calibrated against the easier majority) unless document quality itself feeds into the confidence score, not just field-level extraction certainty within a single document. A field extracted at 85% confidence on a clean PDF and the same 85% confidence on a faxed handwritten form are not equally trustworthy, even though the number looks identical.</p>

    <h2>What I would check before trusting a vendor's handwriting claim</h2>

    <p>Ask for the actual accuracy number on handwriting specifically, not a qualitative claim like "reasonable" or "good," and ask whether that number is character-level or field-level, the same distinction that matters for <a href="/resources/blogs/invoice-line-item-ocr">line-item extraction generally</a>. Then pull 15 real handwritten and faxed invoices from your own worst vendors and test directly, since this is exactly the category where a vendor's clean-demo number and your real-world number are most likely to diverge sharply.</p>

    <p>Count how many of your total invoices this category actually represents before investing heavily in solving it. A team with 2% handwritten-and-faxed volume should spend proportionally less engineering effort here than a team with 20%, even though the accuracy numbers and failure modes are identical either way; the right level of investment scales with volume, not with how interesting the technical problem is to solve.</p>

    <h3>Frequently asked questions</h3>

    <p><strong>How accurate is OCR on handwritten invoices?</strong><br />
    In our own benchmark testing across engines, accuracy on handwritten forms ranged from 61% (Tesseract) to 78% (DocsAPI), a meaningfully wider spread than on typed documents, where most modern engines clear 97% or better.</p>

    <p><strong>Why is faxed invoice accuracy different from handwritten invoice accuracy?</strong><br />
    They degrade for different reasons. Fax transmission at low resolution (commonly 150-200 DPI) introduces line-based scanning artifacts and compression damage, while handwriting is hard because of shape variance between writers, not image quality. A faxed handwritten invoice compounds both problems simultaneously and is typically the hardest single document type to extract accurately.</p>

    <p><strong>Does image preprocessing improve handwritten invoice OCR accuracy?</strong><br />
    It helps more for faxed and low-resolution documents (deskewing, contrast enhancement, resolution upscaling) than for handwriting specifically, since handwriting's core difficulty is shape ambiguity rather than image quality, though preprocessing still helps at the margin on documents combining both issues.</p>

    <p><strong>How should AP teams set review expectations for handwritten vendor invoices?</strong><br />
    If handwritten and faxed documents make up a meaningful share of total volume, budget for a distinctly higher manual-review rate on that subset than your blended average accuracy suggests, since a single confidence threshold calibrated against the easier majority of documents will under-flag this harder subset for review.</p>

    <p><strong>What accuracy number should I ask an OCR vendor for on handwritten documents?</strong><br />
    A specific, quantified number (not "reasonable" or "good"), broken out separately from typed-document accuracy, and clarified as character-level or field-level. Then test it directly on 15 real handwritten invoices from your own vendors before trusting the vendor's own number.</p>

    <p><strong>Is it worth asking small vendors to switch away from handwritten invoices?</strong><br />
    For your highest-volume handwritten-invoice vendors, yes, often more effective than better extraction engineering. Many small vendors are receptive to a free digital invoicing tool since it is genuinely easier for them too, and it removes the accuracy problem at the source rather than working around it downstream.</p>

    <p>None of this means handwriting is unsolvable, and it does not mean the category should be ignored either. It means the honest number is worse than the marketing language suggests, and planning around the real number beats discovering the gap after go-live.</p>

    <p>Sources: accuracy figures from our own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Accounts Payable",
  date: "August 8, 2026",
  datePublished: "2026-08-08T00:00:00.000Z",
  dateModified: "2026-08-08T00:00:00.000Z",
  last_updated: "August 8, 2026",
  readTime: "9 min read",
  author: nupuraUghade,
  primary_keyword: "handwritten invoice ocr",
  secondary_keywords: [
    "faxed invoice ocr accuracy",
    "handwritten invoice accuracy",
    "small vendor invoice processing",
    "ocr accuracy by document type",
    "fax invoice extraction",
    "handwriting recognition invoice",
  ],
  tags: ["accounts payable", "invoice OCR", "OCR accuracy", "benchmark", "small vendors"],
  cluster: "industry-trends",
  faq: [
    {
      question: "How accurate is OCR on handwritten invoices?",
      answer:
        "In our own benchmark testing across engines, accuracy on handwritten forms ranged from 61% (Tesseract) to 78% (DocsAPI), a meaningfully wider spread than on typed documents, where most modern engines clear 97% or better.",
    },
    {
      question: "Why is faxed invoice accuracy different from handwritten invoice accuracy?",
      answer:
        "Fax transmission at low resolution introduces line-based scanning artifacts and compression damage, while handwriting is hard because of shape variance between writers. A faxed handwritten invoice compounds both problems and is typically the hardest document type to extract.",
    },
    {
      question: "Does image preprocessing improve handwritten invoice OCR accuracy?",
      answer:
        "It helps more for faxed and low-resolution documents than handwriting specifically, since handwriting's core difficulty is shape ambiguity rather than image quality, though preprocessing still helps at the margin on documents combining both issues.",
    },
    {
      question: "How should AP teams set review expectations for handwritten vendor invoices?",
      answer:
        "Budget for a distinctly higher manual-review rate on handwritten and faxed documents than your blended average accuracy suggests, since a single confidence threshold calibrated against easier documents will under-flag this harder subset.",
    },
    {
      question: "What accuracy number should I ask an OCR vendor for on handwritten documents?",
      answer:
        "A specific, quantified number, not a qualitative claim, broken out separately from typed-document accuracy and clarified as character-level or field-level. Then test on 15 real handwritten invoices from your own vendors.",
    },
    {
      question: "Is it worth asking small vendors to switch away from handwritten invoices?",
      answer:
        "For your highest-volume handwritten-invoice vendors, often yes, more effective than better extraction engineering. Many small vendors are receptive to a free digital invoicing tool since it removes the accuracy problem at the source.",
    },
  ],
}
