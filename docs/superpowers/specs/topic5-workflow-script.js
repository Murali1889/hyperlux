export const meta = {
  name: 'medical-document-ocr-cluster',
  description: 'Research, write, and verify 21 Medical/Healthcare Document OCR blog posts for docsapi.co',
  phases: [
    { title: 'Draft', detail: 'competitive audit + concrete asset + 2000+ word draft per post, 21 in parallel' },
  ],
}

const CONCEPTS = [
  { n: '01', slug: 'hl7-fhir-document-processing', pk: 'hl7 fhir document processing', concept: 'HL7 FHIR clinical document interoperability: what FHIR resources actually are (structured, discrete data elements like Patient, Observation, DocumentReference), the real technical gap between a FHIR-native EHR export and a scanned/faxed clinical document that has no FHIR structure at all, and why "FHIR-compliant" claims from document AI vendors often mean something much narrower than true interoperability.' },
  { n: '02', slug: 'hipaa-deidentification-automation', pk: 'hipaa deidentification automation', concept: 'HIPAA Safe Harbor de-identification: the actual 18 specific identifiers the Safe Harbor method requires removing (names, geographic subdivisions smaller than state, all dates except year, etc.), why automated redaction commonly misses several of the 18 because they are not obviously PII-shaped (like a rare disease that identifies someone in a small population), and the real technical difference between Safe Harbor and Expert Determination de-identification.' },
  { n: '03', slug: 'medical-coding-automation', pk: 'medical coding automation', concept: 'ICD-10-CM and CPT medical coding extraction: the real structural difference between diagnosis codes (ICD-10-CM, up to 7 characters with laterality/episode-of-care specificity) and procedure codes (CPT, 5-digit AMA-maintained), why automated coding from clinical notes is fundamentally a classification problem not an extraction problem, and a worked example of a coding ambiguity that changes reimbursement.' },
  { n: '04', slug: 'eob-parsing-automation', pk: 'eob parsing automation', concept: 'Explanation of Benefits (EOB) parsing: the real structural difference between an EOB (sent to the patient, not a bill) and a remittance advice (sent to the provider), why EOB layouts vary enormously by payer with no standardized format the way claim forms do, and the specific fields that actually matter for automated reconciliation against a provider\'s billed charges.' },
  { n: '05', slug: 'cms-1500-form-processing', pk: 'cms-1500 form processing', concept: 'CMS-1500 and UB-04 standardized claim form processing: the real structural difference between the CMS-1500 (professional/physician claims) and UB-04 (institutional/facility claims) forms, the specific numbered fields that map to reimbursement-critical data, and why generic form OCR fails on these forms\' box-based layout in ways layout-aware extraction has to specifically handle.' },
  { n: '06', slug: 'npi-verification-api', pk: 'npi verification api', concept: 'NPI (National Provider Identifier) verification: the real Luhn-based check-digit algorithm used to validate an NPI number (the same check-digit family used for credit card numbers, applied to a specific prefixed 10-digit healthcare identifier), a worked example computing a valid check digit, and why NPI validation alone does not confirm a provider is actually authorized to bill for a given service.' },
  { n: '07', slug: 'prior-authorization-automation', pk: 'prior authorization automation', concept: 'Prior authorization document processing: the real administrative burden data (documented physician time spent on PA requests), why prior auth requirements vary by payer and by specific procedure code with no standardized submission format, and the specific document-matching problem of reconciling a PA approval against the actual claim submitted later.' },
  { n: '08', slug: 'hcc-risk-adjustment-coding', pk: 'hcc risk adjustment coding', concept: 'HCC risk adjustment coding for Medicare Advantage: how the CMS-HCC model actually maps ICD-10-CM diagnosis codes to Hierarchical Condition Categories for risk scoring, the real technical concept of hierarchies (why a more severe HCC in the same category suppresses a less severe one), and why documentation specificity directly changes a plan\'s risk-adjusted payment.' },
  { n: '09', slug: 'ccda-document-processing', pk: 'ccda document processing', concept: 'C-CDA clinical document processing: what a Consolidated Clinical Document Architecture file actually is structurally (an XML document with a required set of sections like Problems, Medications, Allergies), why C-CDA documents are notorious for being technically valid but practically unreadable ("CDA soup"), and the real extraction challenge of pulling clean structured data out of a compliant-but-messy C-CDA export.' },
  { n: '10', slug: 'dea-number-verification', pk: 'dea number verification', concept: 'DEA number verification for prescriptions: the actual DEA registration number check-digit algorithm (a specific weighted-sum formula applied to the second through eighth digits), a fully worked example computing and verifying a check digit, and why this verification step is a specific, checkable fraud control against forged prescriptions.' },
  { n: '11', slug: 'ndc-code-extraction', pk: 'ndc code extraction', concept: 'NDC (National Drug Code) extraction: the real 10-digit to 11-digit NDC structure (labeler code, product code, package code segments) and the specific, well-documented conversion problem between the FDA-registered 10-digit format and the 11-digit billing format pharmacies and payers actually require, a common, concrete source of claim rejections.' },
  { n: '12', slug: 'medical-necessity-documentation', pk: 'medical necessity documentation', concept: 'Medical necessity and LCD/NCD coverage documentation: the real distinction between a Local Coverage Determination (LCD, Medicare Administrative Contractor specific) and a National Coverage Determination (NCD, nationwide), why medical necessity denials often trace back to a documentation gap against a specific LCD\'s stated criteria rather than a genuine clinical dispute, and a worked example of a documentation gap that triggered a denial.' },
  { n: '13', slug: 'hipaa-minimum-necessary-redaction', pk: 'hipaa minimum necessary redaction', concept: 'HIPAA minimum necessary standard for redaction: the real regulatory distinction between the minimum necessary standard (limiting disclosure to what is needed for the specific purpose) and full de-identification (removing identifiers entirely), why these get conflated in vendor marketing, and what a redaction pipeline actually has to know about the requesting party\'s specific purpose to apply the right standard.' },
  { n: '14', slug: '835-remittance-advice-processing', pk: '835 remittance advice processing', concept: 'ANSI X12 835 remittance advice EDI processing: the real structured segments of an 835 transaction (claim payment information, CAS adjustment segments), why 835 files are the single richest source of denial-reason data in the entire healthcare billing chain, and why so many providers still manually re-key 835 data that arrived in a fully structured EDI format to begin with.' },
  { n: '15', slug: 'eligibility-verification-automation', pk: 'eligibility verification automation', concept: 'ANSI X12 270/271 eligibility verification EDI processing: what a 270 eligibility inquiry and 271 eligibility response transaction actually contain structurally, why real-time eligibility checks still fail silently on coverage details beyond a simple active/inactive flag (specific service-type-code coverage, copay/coinsurance detail), and a worked example of an eligibility check that said "active" but still resulted in a denial.' },
  { n: '16', slug: 'release-of-information-processing', pk: 'release of information processing', concept: 'Medical record release of information (ROI) processing: the real HIPAA-governed authorization requirements for a valid ROI request (specific required elements under 45 CFR 164.508), why ROI requests are notoriously fax and mail heavy even in 2026, and the specific document-matching challenge of fulfilling a request against the right patient\'s full longitudinal record without over-disclosing.' },
  { n: '17', slug: 'advance-beneficiary-notice-processing', pk: 'advance beneficiary notice processing', concept: 'Advance Beneficiary Notice (ABN) processing: what CMS Form R-131 actually requires structurally, the real financial-liability consequence of a missing or improperly executed ABN (provider cannot bill the patient for a denied service), and why ABN document quality control is a genuine revenue-protection control most practices under-invest in.' },
  { n: '18', slug: 'loinc-code-extraction', pk: 'loinc code extraction', concept: 'LOINC lab result code extraction: what LOINC (Logical Observation Identifiers Names and Codes) actually standardizes (the test/observation itself, distinct from the result value), the real technical challenge of mapping a lab\'s local, often unstandardized result codes to LOINC codes, and why this mapping gap is a genuine interoperability bottleneck for lab result exchange.' },
  { n: '19', slug: 'medical-fax-automation', pk: 'medical fax automation', concept: 'Referral and prior-auth fax processing: the real, well-documented statistic on how much of US healthcare communication still runs over fax in 2026 despite HL7/FHIR standards existing, why fax remains dominant for specific document types (referrals, prior auth), and the specific technical problem of extracting structured data reliably from a genuinely low-quality faxed medical document.' },
  { n: '20', slug: 'insurance-card-ocr', pk: 'insurance card ocr', concept: 'Insurance card OCR (payer ID, group/member number): the real structural inconsistency problem across payer card layouts (no standardized format the way a driver\'s license has AAMVA), the specific fields that actually matter for claims routing (payer ID, not just plan name), and why front-of-card and back-of-card data both need to be captured and cross-checked.' },
  { n: '21', slug: 'denial-code-extraction', pk: 'denial code extraction', concept: 'CARC/RARC denial code extraction and appeals: the real structural distinction between Claim Adjustment Reason Codes (CARC, why an adjustment was made) and Remittance Advice Remark Codes (RARC, additional explanation), why automated appeals routing depends on correctly parsing both codes together rather than either alone, and a worked example of a denial that required both codes to diagnose correctly.' },
]

const IMAGES = [
  "idp-vs-ocr.png","intelligent-document-processing.png","invoice-processing.png","legal-document-automation.png",
  "ocr-accuracy.png","ocr-api.png","ocr-bank-statement-technology.png","ocr-in-finance.png","ocr-process.png",
  "passport-ocr-revolutionizing.png","passport-ocr.png","revolutionizing-finance.png",
  "the-ultimate-guide-to-small-business.png","transforming-financial-services.png",
]
CONCEPTS.forEach((c, i) => { c.image = IMAGES[(i + 7) % IMAGES.length] })

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
  return `You are writing one blog post for docsapi.co, a document intelligence API for SMB lending and fintech, as part of a 21-post "Medical/Healthcare Document OCR" cluster (Topic 5 of a 6-topic content project). The repo is at /Users/muralivvrsn/Developer/hyperlux.

YOUR ASSIGNED CONCEPT: ${c.concept}
PRIMARY KEYWORD: "${c.pk}"
SLUG: ${c.slug}
FILE PATH TO WRITE: data/new-blogs/medical-document-ocr/${c.n}-${c.slug}.ts

## Non-negotiable requirements (this project has zero tolerance for violations)

1. **Zero em dashes or en dashes anywhere** (— or –). Use commas, periods, or "and"/"but" instead. Regular hyphens in compound words or number ranges (e.g. "2000-2026", "well-documented") are fine. Before finishing, run: grep -c "[–—]" <your file> and confirm it prints 0. If it doesn't, fix every instance before returning.
2. **Minimum 2000 words** in the content field (HTML tags stripped). Word-padding with filler is not acceptable, add genuine additional technical depth, a worked example, or an additional real sourced fact instead. Check with: node -e 'const fs=require("fs");const s=fs.readFileSync("<path>","utf8");const m=s.match(/content: \`([\\s\\S]*?)\`,\\n\\s*image:/);const t=m[1].replace(/<[^>]+>/g," ").replace(/\\s+/g," ").trim();console.log(t.split(" ").filter(Boolean).length)'
3. **Full 5-step competitive audit before drafting**: WebSearch the primary keyword, identify 2-3 real competitor pages ranking for it, WebFetch each with an extraction prompt asking what they explain and what they DON'T explain technically, diff your planned angle against what you found, and only proceed if you have genuine differentiation. If the topic turns out to be commodity content with no differentiation angle available, say so in your final report rather than shipping a shallow post.
4. **One genuinely real, sourced concrete asset per post.** A real regulation citation (with section/CFR number), a real standard's actual technical structure (HL7 FHIR, C-CDA, LOINC, NDC, CARC/RARC, ANSI X12), a real checksum algorithm (NPI Luhn-based, DEA weighted-sum, both fully worked with real example numbers), or independently verifiable/computable math. NEVER fabricate a statistic, a company name, a court case, or a specific number. If you cannot verify a specific fact via WebSearch, do not state it as fact, describe the mechanism qualitatively instead. For the NPI and DEA checksum posts specifically, verify the exact algorithm via WebSearch before writing a worked example, these are real published algorithms, get the arithmetic right.
5. **No duplicate FAQ section.** Do NOT include an inline "<h3>Frequently asked questions</h3>" block inside the content HTML. The site renders FAQs from the separate structured \`faq\` array field only (a different component handles display). Putting FAQ content in both places causes it to render twice on the page, a bug already fixed once on this site, do not reintroduce it.
6. **Human, non-repetitive voice.** Prior batches of this project mostly opened with "X content explains Y well, almost none explain Z" as the hook. That pattern is fine used sparingly but reads mechanically repetitive across many posts. For THIS post, pick a genuinely different opening style based on what fits your specific concept best: (a) a concrete worked-example teaser that states the surprising outcome before explaining why, (b) a stat-led hook citing a real number from your research, (c) a direct claim/correction hook ("X is not the same as Y, and treating them as interchangeable creates Z risk"), (d) a scenario hook describing a specific situation and its consequence. Vary sentence length within the post, avoid starting more than two consecutive paragraphs with the same structural pattern, and avoid the words "moreover", "furthermore", "in conclusion", "delve into", "unlock", "seamless", "robust", "leverage" (as a verb), "landscape" (as a metaphor), "game-changer", "revolutionize". Write like a knowledgeable practitioner explaining something to a smart colleague, not like marketing copy.

## Required TypeScript structure (match this exactly, adapting content)

\`\`\`typescript
import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd${c.n}: BlogPost = {
  id: "md-${c.n}",
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
  category: "Healthcare",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "${c.pk}",
  secondary_keywords: ["...", "...", "...", "...", "...", "..."], // 6 real related phrases
  tags: ["healthcare", "..."],
  cluster: "healthcare",
  faq: [
    { question: "...", answer: "..." },
    // exactly 6 entries, matching genuine questions the post's content actually answers
  ],
}
\`\`\`

## Internal linking (required)

Include exactly one pillar link to /documents/medical-docs in the opening section, plus 2-3 sibling links to other posts in this same cluster where genuinely relevant, plus the author link at the end. Do NOT link to a sibling post slug unless you are confident it exists (the slugs listed for this cluster are: hl7-fhir-document-processing, hipaa-deidentification-automation, medical-coding-automation, eob-parsing-automation, cms-1500-form-processing, npi-verification-api, prior-authorization-automation, hcc-risk-adjustment-coding, ccda-document-processing, dea-number-verification, ndc-code-extraction, medical-necessity-documentation, hipaa-minimum-necessary-redaction, 835-remittance-advice-processing, eligibility-verification-automation, release-of-information-processing, advance-beneficiary-notice-processing, loinc-code-extraction, medical-fax-automation, insurance-card-ocr, denial-code-extraction, all under /resources/blogs/), when in doubt link only to the pillar and the author.

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
