export const meta = {
  name: 'shipping-document-ocr-cluster',
  description: 'Research, write, and verify 21 Shipping/Logistics Document OCR blog posts for docsapi.co',
  phases: [
    { title: 'Draft', detail: 'competitive audit + concrete asset + 2000+ word draft per post, 21 in parallel' },
  ],
}

const CONCEPTS = [
  { n: '01', slug: 'bill-of-lading-processing', pk: 'bill of lading processing', concept: 'Bill of lading types and legal effect: the real legal distinction between a straight (non-negotiable, consigned to a named party) and an order/negotiable bill of lading (a document of title that can be transferred by endorsement), why automated extraction has to correctly classify which type it is looking at since it changes who can legally claim the goods, and a worked example of the consequence of misclassifying one as the other.' },
  { n: '02', slug: 'hs-code-classification', pk: 'hs code classification', concept: 'HS code classification automation: the real hierarchical structure of the Harmonized System (2-digit chapter, 4-digit heading, 6-digit subheading, extended nationally to 8-10 digits), why classification is a genuinely hard judgment call rather than a lookup (General Rules of Interpretation, essential character tests for composite goods), and a worked example of a product that could plausibly classify under two different headings with different duty rates.' },
  { n: '03', slug: 'advance-ship-notice-processing', pk: 'advance ship notice processing', concept: 'Advance Ship Notice (EDI 856) processing: the real hierarchical structure of an 856 transaction (shipment, order, pack, item levels), why ASN accuracy directly drives warehouse receiving efficiency, and the specific, well-documented penalty structure major retailers impose for ASN non-compliance (chargebacks).' },
  { n: '04', slug: 'freight-invoice-automation', pk: 'freight invoice automation', concept: 'Freight invoice (EDI 210) processing: the real structural difference between a freight invoice and a standard commercial invoice (accessorial charges, fuel surcharges, weight/class-based rating), why freight bill errors are notoriously common and hard to catch manually, and a worked example of an accessorial charge that was billed incorrectly against the actual bill of lading terms.' },
  { n: '05', slug: 'customs-entry-summary-processing', pk: 'customs entry summary processing', concept: 'CBP Form 7501 customs entry summary processing: the real structural fields on the form that determine duty liability (entered value, HTS classification, country of origin), why reconciling the entry summary against the actual commercial invoice and bill of lading is where errors get caught, and the real financial consequence (CBP penalties under 19 U.S.C. 1592) of a mismatch that looks like negligence.' },
  { n: '06', slug: 'certificate-of-origin-verification', pk: 'certificate of origin verification', concept: 'Certificate of origin and rules of origin verification: the real technical difference between where a product was shipped from and where it legally originates under a trade agreement\'s rules of origin (regional value content, tariff shift rules), why a certificate of origin document alone does not prove origin without the underlying qualification analysis, and a worked example under USMCA rules.' },
  { n: '07', slug: 'dangerous-goods-declaration-processing', pk: 'dangerous goods declaration processing', concept: 'Dangerous goods declaration processing: the real structural requirements of an IATA DGR or IMDG dangerous goods declaration (UN number, proper shipping name, hazard class, packing group), why a single transposed UN number is a real, checkable, high-consequence error, and why this document category tolerates essentially zero automated-extraction ambiguity given the safety stakes.' },
  { n: '08', slug: 'container-number-verification', pk: 'container number verification', concept: 'ISO 6346 container number verification: the actual published check-digit algorithm (a weighted-sum calculation over the 4 letters and 6 digits of a container number, using specific letter-to-number conversion values), a fully worked example computing and verifying a real check digit, and why this verification catches OCR misreads of a container number before they propagate into a shipment-tracking error.' },
  { n: '09', slug: 'packing-list-reconciliation', pk: 'packing list reconciliation', concept: 'Packing list and commercial invoice reconciliation: the real technical challenge that these two documents describe the same shipment from different angles (physical packaging/weight vs commercial value) and routinely disagree in ways that matter, why naive line-item matching by description text fails when the two documents use different product descriptions for the same item, and a worked reconciliation example.' },
  { n: '10', slug: 'incoterms-clause-extraction', pk: 'incoterms clause extraction', concept: 'Incoterms 2020 clause extraction: the real 11 defined terms and what specifically changes between them (risk transfer point, cost allocation, who arranges insurance), why extracting the wrong Incoterm from a contract creates real, quantifiable cost/risk exposure, and a worked comparison of two Incoterms that look similar (FCA vs FOB) but allocate risk very differently.' },
  { n: '11', slug: 'letter-of-credit-document-compliance', pk: 'letter of credit document compliance', concept: 'Letter of credit document compliance under UCP 600: the real strict compliance doctrine (documents must comply exactly with the LC\'s terms, not just substantially), why a single discrepancy can result in a bank refusing payment regardless of whether the underlying goods were actually shipped correctly, and a worked example of a common discrepancy that triggers non-payment.' },
  { n: '12', slug: 'proof-of-delivery-processing', pk: 'proof of delivery processing', concept: 'Proof of delivery (POD) processing: the real technical challenge of matching a POD (often a scanned signature on a delivery receipt) back to the correct shipment and bill of lading among thousands of similar documents, why POD quality directly determines whether a carrier can collect payment on a disputed freight bill, and the specific data fields that make a POD actually usable as evidence.' },
  { n: '13', slug: 'freight-bill-audit-automation', pk: 'freight bill audit automation', concept: 'Freight bill audit and payment automation: the real, well-documented error rate range in freight invoicing that makes freight bill audit a standard cost-recovery function, the specific categories of overcharge that automated audit actually catches (rate application errors, duplicate billing, incorrect accessorials), and why this differs technically from generic invoice OCR.' },
  { n: '14', slug: 'shipment-status-edi-processing', pk: 'shipment status edi processing', concept: 'EDI 214 shipment status processing: the real structured status-code system in a 214 transaction (specific codes for pickup, in-transit, delivered, exception events), why real-time visibility platforms are built on parsing these codes correctly rather than free-text tracking updates, and a worked example of a status code sequence that signals a real delivery exception.' },
  { n: '15', slug: 'warehouse-receipt-processing', pk: 'warehouse receipt processing', concept: 'Warehouse receipt processing for inventory financing: the real legal distinction between a negotiable and non-negotiable warehouse receipt (a document of title under UCC Article 7 in the negotiable case), why lenders extending inventory-backed financing depend on correctly verifying receipt authenticity and negotiability, and a worked example of fraud that exploited a non-negotiable receipt treated as if it were negotiable.' },
  { n: '16', slug: 'air-waybill-verification', pk: 'air waybill verification', concept: 'Air waybill (AWB) number verification: the real IATA-standardized 11-digit AWB numbering structure (3-digit airline prefix, 7-digit serial, 1 check digit computed via modulo 7), a fully worked example computing and verifying a real check digit, and why AWB verification matters for catching a specific fraud/error pattern in air cargo document processing.' },
  { n: '17', slug: 'vgm-declaration-processing', pk: 'vgm declaration processing', concept: 'SOLAS VGM (Verified Gross Mass) declaration processing: the real 2016 SOLAS regulatory requirement that container weight be verified before loading (Method 1 weighing the packed container, Method 2 calculating from certified component weights), why a missing or inaccurate VGM leads carriers to refuse loading, and the specific document-matching challenge of reconciling a VGM declaration against the actual shipping instruction.' },
  { n: '18', slug: 'customs-power-of-attorney-processing', pk: 'customs power of attorney processing', concept: 'Customs broker power of attorney processing: the real CBP regulatory requirement (19 CFR 141.31/141.32) for a valid customs power of attorney, the specific required elements that make a POA legally sufficient for a broker to act on an importer\'s behalf, and why an expired or improperly executed POA is a genuine compliance exposure that document verification exists to catch.' },
  { n: '19', slug: 'section-321-de-minimis-processing', pk: 'section 321 de minimis processing', concept: 'Section 321 de minimis shipment processing: the real regulatory threshold and eligibility rules for duty-free de minimis entry, why de minimis eligibility depends on more than just declared value (one-shipment-per-person-per-day aggregation rules), and the specific document-processing challenge of high-volume, low-value e-commerce shipment clearance at this scale.' },
  { n: '20', slug: 'demurrage-detention-documentation', pk: 'demurrage detention documentation', concept: 'Demurrage and detention documentation: the real technical and contractual distinction between demurrage (container sitting at the port/terminal past free time) and detention (container sitting outside the terminal past free time), why these charges are frequently disputed and require documentary proof of the actual timeline, and a worked example of a dispute resolved by container-movement documentation.' },
  { n: '21', slug: 'master-house-bill-of-lading-reconciliation', pk: 'master house bill of lading reconciliation', concept: 'Master vs house bill of lading reconciliation: the real operational relationship between a master B/L (carrier to freight forwarder) and a house B/L (freight forwarder to actual shipper/consignee) covering the same cargo, why these two documents can disagree in ways that create real liability gaps, and a worked example of a master/house B/L mismatch that caused a cargo release dispute.' },
]

const IMAGES = [
  "idp-vs-ocr.png","intelligent-document-processing.png","invoice-processing.png","legal-document-automation.png",
  "ocr-accuracy.png","ocr-api.png","ocr-bank-statement-technology.png","ocr-in-finance.png","ocr-process.png",
  "passport-ocr-revolutionizing.png","passport-ocr.png","revolutionizing-finance.png",
  "the-ultimate-guide-to-small-business.png","transforming-financial-services.png",
]
CONCEPTS.forEach((c, i) => { c.image = IMAGES[(i + 3) % IMAGES.length] })

const RESULT_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    file_path: { type: 'string' },
    word_count: { type: 'number' },
    dash_count: { type: 'number' },
    differentiation_verdict: { type: 'string' },
    concrete_asset_summary: { type: 'string' },
    opening_hook_style: { type: 'string' },
    status: { type: 'string', enum: ['success', 'failed'] },
    notes: { type: 'string' },
  },
  required: ['slug', 'file_path', 'word_count', 'dash_count', 'status'],
}

function buildPrompt(c) {
  return `You are writing one blog post for docsapi.co, a document intelligence API for SMB lending and fintech, as part of a 21-post "Shipping/Logistics Document OCR" cluster (Topic 6 of a 6-topic content project). The repo is at /Users/muralivvrsn/Developer/hyperlux.

YOUR ASSIGNED CONCEPT: ${c.concept}
PRIMARY KEYWORD: "${c.pk}"
SLUG: ${c.slug}
FILE PATH TO WRITE: data/new-blogs/shipping-document-ocr/${c.n}-${c.slug}.ts

## Non-negotiable requirements (this project has zero tolerance for violations)

1. **Zero em dashes or en dashes anywhere** (— or –). Use commas, periods, or "and"/"but" instead. Regular hyphens in compound words or number ranges (e.g. "2000-2026", "well-documented") are fine. Before finishing, run: grep -c "[–—]" <your file> and confirm it prints 0. If it doesn't, fix every instance before returning.
2. **Minimum 2000 words** in the content field (HTML tags stripped). Word-padding with filler is not acceptable, add genuine additional technical depth, a worked example, or an additional real sourced fact instead. Check with: node -e 'const fs=require("fs");const s=fs.readFileSync("<path>","utf8");const m=s.match(/content: \`([\\s\\S]*?)\`,\\n\\s*image:/);const t=m[1].replace(/<[^>]+>/g," ").replace(/\\s+/g," ").trim();console.log(t.split(" ").filter(Boolean).length)'
3. **Full 5-step competitive audit before drafting**: WebSearch the primary keyword, identify 2-3 real competitor pages ranking for it, WebFetch each with an extraction prompt asking what they explain and what they DON'T explain technically, diff your planned angle against what you found, and only proceed if you have genuine differentiation. If the topic turns out to be commodity content with no differentiation angle available, say so in your final report rather than shipping a shallow post.
4. **One genuinely real, sourced concrete asset per post.** A real regulation citation (with section/CFR number), a real standard's actual technical structure (Incoterms 2020, UCP 600, ANSI X12 EDI transactions, ISO 6346, IATA AWB numbering), a real checksum algorithm (ISO 6346 container check digit, IATA AWB modulo-7 check digit, both fully worked with real example numbers), or independently verifiable/computable math. NEVER fabricate a statistic, a company name, a court case, or a specific number. If you cannot verify a specific fact via WebSearch, do not state it as fact, describe the mechanism qualitatively instead. For the container-number and air-waybill checksum posts specifically, verify the exact algorithm via WebSearch before writing a worked example, these are real published algorithms, get the arithmetic right.
5. **No duplicate FAQ section.** Do NOT include an inline "<h3>Frequently asked questions</h3>" block inside the content HTML. The site renders FAQs from the separate structured \`faq\` array field only (a different component handles display). Putting FAQ content in both places causes it to render twice on the page, a bug already fixed once on this site, do not reintroduce it.
6. **Human, non-repetitive voice.** Prior batches of this project mostly opened with "X content explains Y well, almost none explain Z" as the hook. That pattern is fine used sparingly but reads mechanically repetitive across many posts. For THIS post, pick a genuinely different opening style based on what fits your specific concept best: (a) a concrete worked-example teaser that states the surprising outcome before explaining why, (b) a stat-led hook citing a real number from your research, (c) a direct claim/correction hook ("X is not the same as Y, and treating them as interchangeable creates Z risk"), (d) a scenario hook describing a specific situation and its consequence. Vary sentence length within the post, avoid starting more than two consecutive paragraphs with the same structural pattern, and avoid the words "moreover", "furthermore", "in conclusion", "delve into", "unlock", "seamless", "robust", "leverage" (as a verb), "landscape" (as a metaphor), "game-changer", "revolutionize". Write like a knowledgeable practitioner explaining something to a smart colleague, not like marketing copy.

## Required TypeScript structure (match this exactly, adapting content)

\`\`\`typescript
import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd${c.n}: BlogPost = {
  id: "sd-${c.n}",
  title: "...", // 47-60 characters, specific and concrete, not generic
  slug: "${c.slug}",
  excerpt: "...", // 120-158 characters
  description: "...", // 145-160 characters
  metaTag: "...", // 47-60 characters
  content: \`
    <p>...</p>
    <h2>...</h2>
    <p>...</p>
    ... (5-10 H2 sections, at least one <table> with real comparative data, one worked example)
    <p>...Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  \`,
  image: "/images/${c.image}", // pre-assigned for variety across the batch, use this exact one
  featuredImage: "/images/${c.image}",
  category: "Logistics",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "${c.pk}",
  secondary_keywords: ["...", "...", "...", "...", "...", "..."], // 6 real related phrases
  tags: ["logistics", "..."],
  cluster: "logistics",
  faq: [
    { question: "...", answer: "..." },
    // exactly 6 entries, matching genuine questions the post's content actually answers
  ],
}
\`\`\`

## Internal linking (required)

Include exactly one pillar link to /documents/shipping-docs in the opening section, plus 2-3 sibling links to other posts in this same cluster where genuinely relevant, plus the author link at the end. Do NOT link to a sibling post slug unless you are confident it exists (the slugs listed for this cluster are: bill-of-lading-processing, hs-code-classification, advance-ship-notice-processing, freight-invoice-automation, customs-entry-summary-processing, certificate-of-origin-verification, dangerous-goods-declaration-processing, container-number-verification, packing-list-reconciliation, incoterms-clause-extraction, letter-of-credit-document-compliance, proof-of-delivery-processing, freight-bill-audit-automation, shipment-status-edi-processing, warehouse-receipt-processing, air-waybill-verification, vgm-declaration-processing, customs-power-of-attorney-processing, section-321-de-minimis-processing, demurrage-detention-documentation, master-house-bill-of-lading-reconciliation, all under /resources/blogs/), when in doubt link only to the pillar and the author.

## Before you finish

1. Verify word count >= 2000 using the command above.
2. Verify zero em/en dashes using the grep command above.
3. Verify the file has exactly one FAQ representation (the faq array only, no inline HTML FAQ heading).
4. Return your result via the required structured output: slug, file_path, word_count, dash_count, differentiation_verdict (one sentence on what makes this post's angle genuinely different from what competitors publish), concrete_asset_summary (one sentence naming the specific real fact/standard/regulation this post is built around), opening_hook_style, status, and any notes.`
}

phase('Draft')
const results = await pipeline(
  CONCEPTS,
  (c) => agent(buildPrompt(c), { label: `draft:${c.slug}`, phase: 'Draft', schema: RESULT_SCHEMA, effort: 'high' })
)

const succeeded = results.filter(Boolean).filter(r => r.status === 'success')
const failed = results.filter(Boolean).filter(r => r.status !== 'success')
const missing = CONCEPTS.filter((c, i) => !results[i])

log(`${succeeded.length}/21 succeeded, ${failed.length} failed, ${missing.length} missing`)

return { results, succeeded, failed, missing }
