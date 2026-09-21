import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd19: BlogPost = {
  id: "md-19",
  title: "Medical Fax Automation: Why Referrals Still Run on Fax",
  slug: "medical-fax-automation",
  excerpt:
    "A perfectly legible referral fax is still a worse OCR source than a phone photo. Here is the resolution math and the real adoption numbers behind it.",
  description:
    "Medical fax automation explained through the real ITU-T fax resolution standard, sourced CAQH data, and the specific reasons faxed referrals resist OCR.",
  metaTag: "Medical Fax Automation: The Real Resolution Problem",
  content: `
    <p>A referral fax that looks perfectly readable to the front desk staffer who pulls it off the machine is, mathematically, a worse source image for automated extraction than a slightly blurry photo taken on a five-year-old phone. That sounds backwards until you look at what the fax transmission standard actually specifies for image resolution, which almost nobody outside telecom engineering ever has reason to check. Most medical fax automation content skips straight past this and talks about "AI that reads messy faxes," as if the messiness were incidental rather than a direct, documented consequence of a compression and resolution standard written in the 1980s and still governing how a huge share of <a href="/documents/medical-docs">medical documents</a> move between providers and payers today.</p>

    <p>This post is about that specific gap: how much of US healthcare communication genuinely still runs over fax in 2026, why referrals and prior authorizations in particular are the document types least likely to have moved off it despite HL7 FHIR and X12 electronic standards existing for both, and what actually happens at the pixel level that makes a faxed medical document harder to extract structured data from than an equivalent scanned or digitally generated one.</p>

    <h2>How much of healthcare communication still runs on fax</h2>

    <p>The most frequently repeated figure in this space traces back to a 2017 Vox investigation by Sarah Kliff, which reported that, by one private firm's estimate, fax accounted for about 75 percent of all medical communication in the United States. That number has been requoted constantly since, not because anyone has replaced it with something more rigorous, but because nothing more rigorous has displaced it. It's an estimate, attributed honestly as an estimate, and it has aged into something close to industry consensus simply by not being contradicted.</p>

    <p>Better-anchored numbers come from actual surveys. MGMA Stat, the polling arm of the Medical Group Management Association, asked healthcare leaders directly in a November 5, 2019 poll with 1,581 applicable responses whether their organization still used a fax machine. Eighty-nine percent said yes. The top reasons given, in order, were record sharing, referrals, communicating labs and test results, payer communication, and pharmacy communication, which is a fairly complete list of exactly the document types this cluster covers. Federal data points the same direction: the Office of the National Coordinator for Health IT, now folded into the Assistant Secretary for Technology Policy, found in its National Electronic Health Record Survey that roughly 35 percent of office-based physicians who shared patient information externally did so using only fax, mail, or e-fax, no other channel, and that only about 43 percent of hospitals routinely engaged in all four interoperability domains the survey tracked: send, receive, find, and integrate.</p>

    <table>
      <thead>
        <tr><th>Source</th><th>Finding</th><th>What it measures</th></tr>
      </thead>
      <tbody>
        <tr><td>Vox / private industry estimate, 2017</td><td>~75% of medical communication conducted by fax</td><td>Broad estimate, widely requoted since, never formally superseded</td></tr>
        <tr><td>MGMA Stat poll, Nov. 2019 (n=1,581)</td><td>89% of practices still use a fax machine</td><td>Direct survey of healthcare leaders on active fax usage</td></tr>
        <tr><td>ONC/ASTP National EHR Survey</td><td>~35% of physicians share records externally using only fax, mail, or e-fax</td><td>Federal data on which channel practices default to for external sharing</td></tr>
        <tr><td>ONC/ASTP National EHR Survey</td><td>~43% of hospitals engage in all four interoperability domains</td><td>Send, receive, find, and integrate, the full round-trip of interoperable data exchange</td></tr>
      </tbody>
    </table>

    <p>None of these numbers say fax is growing. It isn't. What they establish is that, despite more than a decade of EHR certification requirements, Meaningful Use incentives, and now FHIR API mandates, fax has proven unusually resistant to displacement for a specific subset of document types, and referrals and prior authorization requests sit right at the center of that subset.</p>

    <h2>Why referrals and prior auth specifically, and not everything else</h2>

    <p>Lab results and imaging reports have moved off fax faster than referrals and prior authorizations, and the reason is structural rather than about willingness to adopt new tools. A lab result is generated inside a system, LIS or EHR, that already speaks HL7 or FHIR internally, so exporting it electronically is a relatively short hop. A referral or a prior authorization request is different: it has to travel between two organizations that frequently run different EHR platforms with no guaranteed interoperability between them, be reviewed and acted on by a human at both ends, and often needs supporting clinical documentation attached in whatever format the sending system happens to produce it in. When the sending EHR and the receiving EHR can't talk to each other directly, and a growing majority genuinely can't for the specific pair of systems involved in any given referral, fax remains the lowest-common-denominator channel that every practice, regardless of its EHR vendor, is guaranteed to be able to receive on.</p>

    <p>Industry estimates converge on roughly half or more of patient referrals still traveling by fax for exactly this reason, even in practices with modern EHR systems on both ends, because the referral management modules those EHRs ship with frequently don't interoperate across vendors the way a shared HL7 lab interface does. Prior authorization has an added structural wrinkle on top of the interoperability gap: even where an electronic channel exists, payers vary in whether they actually support it for a given plan or procedure, which pushes practices back toward fax as the fallback that works regardless of which payer's specific technical stack is on the other end.</p>

    <h2>The standard that exists, and the adoption numbers behind it</h2>

    <p>The HIPAA-mandated electronic standard for prior authorization, the X12 278 transaction, has existed for years, and our <a href="/resources/blogs/prior-authorization-automation">prior authorization automation</a> piece covers its loop structure and the CMS-0057-F FHIR mandate in detail. What's worth adding here is what the CAQH Index, the industry's longest-running annual benchmark for administrative transaction automation, actually shows about adoption trending over time, because the trajectory matters as much as the snapshot.</p>

    <table>
      <thead>
        <tr><th>CAQH Index year</th><th>Fully electronic (X12 278)</th><th>Partially electronic</th><th>Fully manual</th><th>Cost avoidance from automation reported</th></tr>
      </thead>
      <tbody>
        <tr><td>Baseline, cited via 2019 MGMA reporting</td><td>~12% of an estimated 182 million commercial transactions</td><td>not separately broken out</td><td>~51% via phone or fax</td><td>not reported at this granularity</td></tr>
        <tr><td>2024 Index</td><td>95 million transactions, 35% of volume</td><td>123 million transactions, 43% of volume</td><td>54 million transactions</td><td>$966 million</td></tr>
        <tr><td>2025 Index</td><td>102 million transactions, 38% of volume</td><td>126 million transactions, 46% of volume</td><td>44 million transactions</td><td>$1.2 billion</td></tr>
      </tbody>
    </table>

    <p>Read across the rows and the shift is real: fully manual prior authorization volume dropped from an estimated majority of transactions before the CMS-0057-F push to under a fifth of tracked volume by the 2025 Index, and cost avoidance from the electronic share grew by roughly a quarter year over year. Read the columns instead, though, and the more relevant fact for this post is that "partially electronic" is the largest single category in both recent years, not "fully electronic." A transaction counted as partially electronic in the CAQH methodology typically means some portion of the exchange happened through a standard channel while another portion, very often the supporting clinical documentation, still moved as an attached document image rather than as structured data. That's the fax problem hiding inside an adoption statistic that looks, at first glance, like good news. The 2024 CAQH Index report itself names the total administrative opportunity across all transaction types at $20 billion annually against roughly $90 billion in current spend, with prior authorization specifically representing one of the two highest-value automation targets in the report.</p>

    <h2>Where the FHIR mandate stops covering fax</h2>

    <p>CMS-0057-F requires impacted payers to implement a FHIR-based Prior Authorization API by January 2027, and CMS has already granted enforcement discretion around the older X12 278 transaction for entities using the FHIR path instead. That's a real, dated regulatory shift, and it will move a meaningful share of the structured request-and-response portion of prior authorization off both fax and the older X12 format over the next several years. What it does not cover is the attachment problem. No companion federal standard mandates how the supporting clinical documentation, chart notes, imaging reports, prior treatment history, gets transmitted alongside a FHIR-based request. That documentation still has to arrive somehow, and for a large share of referring providers whose systems can't produce a structured attachment their receiving payer's FHIR endpoint will accept, fax remains the path of least resistance for exactly the piece of the transaction that the API mandate leaves untouched. A faster, better-structured request wrapper around a faxed PDF is still, underneath, a faxed PDF.</p>

    <h2>What actually makes a faxed document harder to OCR</h2>

    <p>This is the part almost no vendor content explains, because it requires engaging with a telecom standard rather than a healthcare one. Group 3 fax, the format essentially every fax machine and fax-over-IP service still in use today implements, is defined by ITU-T Recommendation T.4, with the call setup and negotiation handled by T.30. T.4 specifies two vertical resolutions: a standard mode of 3.85 scan lines per millimeter, which works out to roughly 98 dots per inch vertically, and an optional fine mode of 7.7 lines per millimeter, roughly 196 dpi vertically. Horizontal resolution is fixed independently of that choice, at 1,728 picture elements across a standard 215-millimeter scan line width, which comes out to about 204 dpi horizontally. Put those together and standard-mode Group 3 fax transmits at approximately 204 by 98 dpi: more than twice as much resolution horizontally as vertically, with non-square pixels baked directly into the wire format.</p>

    <p>That asymmetry matters for OCR in a very specific way. Text characters have more vertical structure than horizontal in most fonts, the difference between a comma and a period, an "8" and a "3," a checked box and an unchecked one is frequently a matter of a handful of vertical pixels. At 98 dpi vertical, an 8-point font, common on older referral and PA forms, resolves to roughly ten or eleven pixel rows for full character height, well below what most OCR engines are tuned against, since the general guidance for reliable OCR on modern flatbed or scanner input is 300 dpi minimum, with 400 to 600 dpi recommended for small or degraded text. Fine-mode fax at 196 dpi vertical gets closer but still sits below that recommended floor, and a large share of fax traffic, particularly from older machines and analog lines still common in smaller referring practices, defaults to standard mode rather than fine mode unless a sender manually selects otherwise.</p>

    <p>Layered on top of the resolution problem is the encoding itself. Group 3 fax is fundamentally a bitonal, one-bit-per-pixel format: every pixel is either fully black or fully white, with no grayscale information transmitted in the baseline mode that the overwhelming majority of real-world fax traffic still uses. The binarization threshold, the decision about which shade of gray on the original page becomes black versus white, gets made once, by the sending machine's scanner hardware, at transmission time, and that decision cannot be recovered or adjusted later by anything downstream. A referral form with light pencil annotations, a faded thermal-paper signature, or a photocopy-of-a-photocopy already sitting at low contrast before it ever reaches the fax machine loses that information permanently at the moment of transmission, not at the moment someone tries to OCR it. Compression compounds it further: T.4 uses Modified Huffman run-length coding, and many implementations use the more efficient Modified READ scheme from T.6, both optimized for large uniform white regions punctuated by clean black text, which is exactly what a typed form is and exactly what a handwritten annotation, a signature, or a hand-drawn checkmark is not. Those irregular regions compress less efficiently and are disproportionately where transmission-line noise and dropped scan lines show up as speckling, which most classic OCR engines misread as stray punctuation or merge into adjacent characters.</p>

    <h2>A worked example: the same referral, two source qualities</h2>

    <p>Take a two-page referral letter, generated as a clean PDF by a referring specialist's EHR, printed once, and faxed to the receiving primary care office in standard mode. The physician's typed clinical summary text sits at roughly 10-point font. On a 300 dpi scan of the original PDF, that text would render at around 40 to 42 pixel rows of vertical character height, comfortably inside the range where a modern OCR engine reads it at well above 99 percent character accuracy with no special handling. The same text, having gone through fax transmission at 204 by 98 dpi and been received and rescanned by the office's own fax-to-PDF gateway, arrives at closer to 13 to 14 pixel rows of vertical character height, non-square pixels, no grayscale, with whatever line noise the phone connection introduced baked in as permanent black-or-white artifacts. At that resolution, ascenders and descenders on adjacent lines of text can visually merge, a lowercase "e" and a lowercase "c" become genuinely ambiguous at the pixel level, and a handwritten insurance authorization number scrawled in the margin, common on referrals that get annotated by staff before being re-faxed onward, is close to the hardest case in the whole document: low contrast, irregular strokes, and a fraction of the pixel density the typed sections have. This is also why a referral faxed a second time, forwarded from one office to another rather than sent from the original source, degrades further. Each additional generation compounds the same binarization and compression losses on top of an already-degraded image, since the sending machine's scanner is now capturing a printout of an already-lossy fax rather than the original document.</p>

    <p>The practical consequence is that fax-quality documents genuinely need a different processing path than scanned or digital-native documents, not just a more tolerant confidence threshold on the same model. Effective medical fax automation generally has to combine image-level preprocessing, deskewing pages that came through a manual feed tray at a slight angle, despeckling to remove line-noise artifacts without erasing genuine fine detail, and adaptive contrast correction on faded regions, with document-level logic that splits multi-patient fax batches into individual records, matches each one to a patient using at least two identifiers, and routes anything below a defined confidence threshold to a human review queue rather than silently accepting a low-confidence guess on a field like a units count or an authorization number that a downstream claim will later depend on.</p>

    <h2>Where even good fax automation still needs a human in the loop</h2>

    <p>Handwriting layered on top of a pre-printed form is the case that breaks the most tooling, and it shows up constantly on referral and prior auth documents specifically, since both are frequently partly typed and partly filled in by hand: a checkbox ticked, a CPT code amended in the margin, a start date changed with a strikethrough and a rewritten date next to it. Machine-printed text and handwriting behave completely differently under the same bitonal, low-resolution fax encoding, and a strikethrough correction is functionally indistinguishable, at fax resolution, from a stray line-noise artifact unless the extraction system is specifically built to flag ambiguous edits for review rather than pick one reading and move on silently. The honest position for any vendor in this space is that automation should dramatically reduce the volume of documents a human has to look at directly, not claim to eliminate human review of edge cases entirely, because a wrong guess on an authorized units count or a procedure code, silently accepted instead of flagged, is exactly the kind of error that surfaces weeks later as a claim denial rather than getting caught at intake where it's cheap to fix.</p>

    <h2>What to check in your own fax intake process</h2>

    <p>Start by checking what resolution mode your inbound fax line or e-fax service actually negotiates by default, since standard mode versus fine mode is frequently a configuration setting nobody has touched since the line was installed, and moving to fine mode where senders support it is a genuinely free quality improvement that costs nothing to implement. Next, check whether your extraction tool exposes confidence scores per field rather than a single document-level score, since a referral can be 95 percent extractable overall while the one field that matters most, a handwritten authorization number or an amended CPT code, is exactly the field sitting in the low-confidence tail that a document-level average will hide. Third, check whether structured fields extracted from an inbound referral or PA fax actually flow into scheduling and billing workflows automatically, connecting to the reconciliation problem covered in our <a href="/resources/blogs/prior-authorization-automation">prior authorization automation</a> piece, or whether the fax gets converted to a searchable PDF and then someone still retypes the key fields by hand into the practice management system, which defeats most of the point. And track how much of your inbound volume is genuinely still fax versus a FHIR or Direct Secure Message channel your EHR already supports but which referring providers simply aren't using yet, a distinction covered in more depth in our <a href="/resources/blogs/hl7-fhir-document-processing">HL7 FHIR document processing</a> piece, since the fix for that gap is sometimes a conversation with a referral partner rather than a technology purchase at all.</p>

    <h2>The gap that's closing, and the one that isn't</h2>

    <p>The regulatory and adoption trend lines are genuinely moving the right direction: X12 278 electronic adoption climbed from roughly 12 percent to 38 percent of tracked commercial volume across the years the CAQH Index has measured it, and the FHIR mandate under CMS-0057-F will push that further by 2027. What isn't closing at the same pace is the attachment and documentation gap sitting underneath those transaction-level numbers, the part of a referral or a prior authorization that still arrives as an image of a fax rather than as structured data, because no mandate currently reaches that layer. Until it does, or until enough referring and receiving systems interoperate directly that fax stops being the lowest common denominator, the documents will keep arriving at roughly 204 by 98 dots per inch, bitonal, sometimes for the second or third time, and the systems that read them reliably will be the ones built around that specific, well-documented technical reality rather than around a generic claim that AI can handle any messy scan. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-medical-documents">OCR for medical documents</a>.</p>
  `,
  image: "/images/idp-vs-ocr.png",
  featuredImage: "/images/idp-vs-ocr.png",
  category: "Healthcare",
  date: "September 17, 2026",
  datePublished: "2026-09-17T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "medical fax automation",
  secondary_keywords: [
    "fax to EHR automation",
    "referral fax processing",
    "prior authorization fax",
    "CAQH Index prior authorization",
    "healthcare interoperability fax",
    "OCR for faxed medical documents",
  ],
  tags: ["healthcare", "fax automation", "referral management", "prior authorization", "medical OCR", "interoperability"],
  cluster: "healthcare",
  faq: [
    {
      question: "How much of US healthcare communication still happens by fax?",
      answer:
        "A widely cited 2017 industry estimate reported by Vox put fax at roughly 75% of all medical communication. A November 2019 MGMA Stat poll of 1,581 healthcare leaders found 89% of practices still used a fax machine, and federal ONC/ASTP survey data found about 35% of physicians who share records externally do so using only fax, mail, or e-fax.",
    },
    {
      question: "Why do referrals and prior authorizations rely on fax more than other document types?",
      answer:
        "Referrals and prior authorizations travel between organizations that often run different, non-interoperable EHR systems, and require supporting clinical documentation that has no universally mandated electronic attachment standard. Fax remains the one channel every practice can reliably receive on regardless of which EHR or payer system is on the other end.",
    },
    {
      question: "What makes faxed medical documents technically harder to OCR than scanned documents?",
      answer:
        "Group 3 fax, defined by ITU-T Recommendation T.4, transmits at approximately 204 by 98 dots per inch in standard mode, non-square pixels, well below the 300 dpi typically recommended for reliable OCR. It also encodes images as bitonal, black-or-white only with no grayscale, and uses compression optimized for clean typed text, so handwriting, signatures, and multi-generation faxes lose information permanently at transmission time.",
    },
    {
      question: "What is the CAQH Index and what does it show about prior authorization automation?",
      answer:
        "The CAQH Index is the healthcare industry's longest-running annual benchmark for administrative transaction automation. The 2025 Index reported 38% of prior authorization volume fully electronic via the X12 278 standard, 46% partially electronic, and 16% fully manual, with automation avoiding $1.2 billion in costs that year, up from $966 million in the 2024 Index.",
    },
    {
      question: "Will CMS's FHIR mandate eliminate medical fax by 2027?",
      answer:
        "No. CMS-0057-F requires impacted payers to implement a FHIR-based Prior Authorization API by January 2027, which addresses the structured request-and-response portion of the transaction, but no companion federal standard mandates how supporting clinical documentation gets attached, so faxed attachments are likely to persist even as the request format itself modernizes.",
    },
    {
      question: "How does medical fax automation extract structured data from a faxed referral reliably?",
      answer:
        "Effective systems combine image-level preprocessing such as deskewing and despeckling with document-level logic that splits multi-patient batches, matches records to patients using multiple identifiers, and routes low-confidence fields, especially handwritten annotations or amended codes, to human review rather than silently accepting an uncertain extraction.",
    },
  ],
}
