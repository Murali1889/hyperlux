export const meta = {
  name: 'medical-cluster-seo-audit',
  description: 'Deep per-post audit of the 21 Medical/Healthcare Document OCR posts: content overlap vs full site, keyword strategy, emotional/E-E-A-T voice, on-page SEO, factual verification',
  phases: [
    { title: 'Audit', detail: 'one agent per post, full read + site-wide overlap + SEO checklist' },
  ],
}

const MED_DIR = 'data/new-blogs/medical-document-ocr'
const SITE_INVENTORY = '/private/tmp/claude-501/-Users-muralivvrsn-Developer-hyperlux/b80d0037-1ab1-49ba-a4f6-4920fd243840/scratchpad/site_inventory_pre_medical.json'
const CLUSTER_INVENTORY = '/private/tmp/claude-501/-Users-muralivvrsn-Developer-hyperlux/b80d0037-1ab1-49ba-a4f6-4920fd243840/scratchpad/medical_cluster_inventory.json'

const FILES = [
  '01-hl7-fhir-document-processing.ts', '02-hipaa-deidentification-automation.ts', '03-medical-coding-automation.ts',
  '04-eob-parsing-automation.ts', '05-cms-1500-form-processing.ts', '06-npi-verification-api.ts',
  '07-prior-authorization-automation.ts', '08-hcc-risk-adjustment-coding.ts', '09-ccda-document-processing.ts',
  '10-dea-number-verification.ts', '11-ndc-code-extraction.ts', '12-medical-necessity-documentation.ts',
  '13-hipaa-minimum-necessary-redaction.ts', '14-835-remittance-advice-processing.ts', '15-eligibility-verification-automation.ts',
  '16-release-of-information-processing.ts', '17-advance-beneficiary-notice-processing.ts', '18-loinc-code-extraction.ts',
  '19-medical-fax-automation.ts', '20-insurance-card-ocr.ts', '21-denial-code-extraction.ts',
]

const AUDIT_SCHEMA = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    slug: { type: 'string' },
    overlap_risk: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
    overlap_details: { type: 'string', description: 'Specific existing post(s) or sibling(s) this could overlap with, and why, or "no genuine overlap found" with a one-line justification' },
    keyword_strategy_grade: { type: 'string', enum: ['strong', 'adequate', 'weak'] },
    keyword_strategy_notes: { type: 'string', description: 'Long-tail vs short-tail balance, search intent match, whether primary_keyword and secondary_keywords are realistic, well-differentiated from sibling posts, and actually supported by body content' },
    voice_grade: { type: 'string', enum: ['strong', 'adequate', 'weak'] },
    voice_notes: { type: 'string', description: 'Does it read human and specific, or generic/AI-flavored? Any repeated phrasing patterns, robotic transitions, or emotional flatness?' },
    factual_verification_notes: { type: 'string', description: 'For any post making a specific numeric/algorithmic/regulatory claim (NPI/DEA checksums, HIPAA 45 CFR citations, CPT/ICD-10 codes, dollar figures), state whether you independently verified it and how' },
    onpage_seo_issues: { type: 'array', items: { type: 'string' } },
    recommendation: { type: 'string', enum: ['ship_as_is', 'minor_fix', 'needs_rework'] },
    recommendation_detail: { type: 'string' },
  },
  required: ['file', 'slug', 'overlap_risk', 'keyword_strategy_grade', 'voice_grade', 'onpage_seo_issues', 'recommendation'],
}

function buildPrompt(filename) {
  return `You are doing a rigorous SEO and content-overlap audit of one blog post for docsapi.co (a document intelligence/OCR API for SMB lending and fintech). This is a real quality gate before the post ships, not a rubber stamp, be genuinely critical. The person requesting this audit explicitly emphasized: every post's topic, terms, and keywords must be genuinely distinct from every other post on the site and from its own cluster siblings, even though all 21 posts in this cluster share the same broad subject (medical/healthcare documents).

POST TO AUDIT: ${MED_DIR}/${filename}
(repo root: /Users/muralivvrsn/Developer/hyperlux)

## Step 1: Read the post

Read the full file. Note its title, slug, primary_keyword, secondary_keywords, excerpt, description, and the full content HTML.

## Step 2: Content overlap check (the most important step)

Read ${SITE_INVENTORY} (152 existing posts on the site) and ${CLUSTER_INVENTORY} (the other 20 posts in this same 21-post Medical/Healthcare Document OCR cluster).

Do not just string-match slugs or keywords (already checked mechanically and passed). Reason about CONTENT overlap: does an existing post already substantively cover the same mechanism, code system, form, or worked example as this post, even if it uses different words?

Pay special attention to:
- Sibling posts drafted in parallel that might have drifted onto each other's territory. This domain has several document types that legitimately reference the same underlying standard in passing (e.g. several posts might mention HIPAA, several might mention CMS forms) — that's fine as a passing reference, but flag it if two posts are actually explaining the SAME mechanism as their core payload.
- The checksum/algorithm posts (npi-verification-api's Luhn-based checksum, dea-number-verification's weighted-sum checksum) should be distinct algorithms with distinct worked examples, confirm they don't converge to the point of feeling repetitive.
- CMS-1500 form processing (05) vs 835 remittance advice processing (14) vs EOB parsing (04) vs denial code extraction (21) — these four all touch medical claims/billing and could easily blur into each other if not carefully scoped; check whether each has a genuinely distinct technical core (form structure vs EDI 835 segments vs payer-generated EOB vs CARC/RARC codes) or whether two of them are teaching the same thing.
- HIPAA de-identification (02) vs HIPAA minimum necessary redaction (13) — both are HIPAA-privacy-adjacent, check they are actually different legal standards (Safe Harbor/Expert Determination de-identification vs the minimum necessary access standard) and not redundant.
- Prior authorization (07) vs medical necessity documentation (12) vs advance beneficiary notice (17) — these three could easily overlap since all relate to whether/how a service gets covered; verify each has a distinct regulatory or document mechanism as its core.
- Generic OCR/IDP concept posts elsewhere on the site that this post might redundantly re-explain instead of linking to.
- Posts in the Legal or Shipping/Logistics clusters that might overlap on adjacent ground (unlikely, but check).

Report overlap_risk as none/low/medium/high with specific file names and a one-sentence reason. "None" is valid and expected if genuinely nothing overlaps.

## Step 3: Keyword strategy check

Assess primary_keyword and secondary_keywords: realistic long-tail phrase a healthcare RCM/billing/compliance practitioner would search, not too generic or too narrow, good short-tail/long-tail mix, matches search intent the content delivers, no cannibalization against the site inventory or cluster siblings, and every secondary_keyword actually supported by body content (not just sitting unused in the metadata array).

## Step 4: Emotional resonance / E-E-A-T / human-voice check

Read the actual prose. Concrete specific opening hook vs generic SEO filler, real expertise signal (named regulations/codes/worked numbers) vs summary-of-a-summary, varied sentence rhythm, zero AI tells (moreover, furthermore, in conclusion, delve into, unlock, seamless, robust-as-filler, landscape-as-metaphor, game-changer, revolutionize, "not just X" used more than twice).

## Step 5: Factual verification spot-check

This cluster makes many specific regulatory and coding claims (45 CFR citations, CPT/ICD-10-CM/HCPCS codes, NPI Luhn checksum, DEA checksum, LOINC/NDC formats, CMS forms, ANSI X12 835/270/271 EDI structure, CARC/RARC codes). Where you can, do a lightweight independent sanity check (WebFetch a primary source like cms.gov, hhs.gov, x12.org, or verify arithmetic yourself for any checksum/math claim). Note in factual_verification_notes exactly what you checked and found. Flag anything unverifiable or suspicious rather than assuming it's fine because the file's own internal notes claim it was checked.

## Step 6: On-page SEO checklist

Check against the project's established convention: title 47-60 chars with primary keyword present, excerpt 120-158 chars, description 145-160 chars, metaTag 47-60 chars, H2 count 5-10, at least one worked example or comparative table, internal links (pillar /documents/medical-docs + 2-3 sibling/related links + author link, all pointing to real existing slugs, verify sibling slugs actually exist as files in ${MED_DIR}), FAQ exactly 6 entries matching content covered with no duplicate inline FAQ heading.

List every real issue found in onpage_seo_issues (empty array if genuinely none).

## Step 7: Verdict

Return structured output: file, slug, overlap_risk, overlap_details, keyword_strategy_grade, keyword_strategy_notes, voice_grade, voice_notes, factual_verification_notes, onpage_seo_issues, recommendation (ship_as_is / minor_fix / needs_rework), recommendation_detail.

Be honest and specific. This audit only has value if it catches real problems, don't grade everything "strong" and "none" by default.`
}

phase('Audit')
const results = await pipeline(
  FILES,
  (f) => agent(buildPrompt(f), { label: `audit:${f}`, phase: 'Audit', schema: AUDIT_SCHEMA, effort: 'high' })
)

const valid = results.filter(Boolean)
const overlapFlags = valid.filter(r => r.overlap_risk === 'medium' || r.overlap_risk === 'high')
const needsWork = valid.filter(r => r.recommendation !== 'ship_as_is')

log(`${valid.length}/21 audited. ${overlapFlags.length} with medium/high overlap risk. ${needsWork.length} need fixes.`)

return { results: valid, overlapFlags, needsWork }
