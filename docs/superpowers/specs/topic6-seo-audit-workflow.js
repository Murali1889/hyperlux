export const meta = {
  name: 'shipping-cluster-seo-audit',
  description: 'Deep per-post audit of the 21 Shipping/Logistics Document OCR posts: content overlap vs full site, keyword strategy, emotional/E-E-A-T voice, on-page SEO',
  phases: [
    { title: 'Audit', detail: 'one agent per post, full read + site-wide overlap + SEO checklist' },
  ],
}

const SHIP_DIR = 'data/new-blogs/shipping-document-ocr'
const SITE_INVENTORY = '/private/tmp/claude-501/-Users-muralivvrsn-Developer-hyperlux/b80d0037-1ab1-49ba-a4f6-4920fd243840/scratchpad/site_inventory_pre_shipping.json'
const CLUSTER_INVENTORY = '/private/tmp/claude-501/-Users-muralivvrsn-Developer-hyperlux/b80d0037-1ab1-49ba-a4f6-4920fd243840/scratchpad/shipping_cluster_inventory.json'

const FILES = [
  '01-bill-of-lading-processing.ts', '02-hs-code-classification.ts', '03-advance-ship-notice-processing.ts',
  '04-freight-invoice-automation.ts', '05-customs-entry-summary-processing.ts', '06-certificate-of-origin-verification.ts',
  '07-dangerous-goods-declaration-processing.ts', '08-container-number-verification.ts', '09-packing-list-reconciliation.ts',
  '10-incoterms-clause-extraction.ts', '11-letter-of-credit-document-compliance.ts', '12-proof-of-delivery-processing.ts',
  '13-freight-bill-audit-automation.ts', '14-shipment-status-edi-processing.ts', '15-warehouse-receipt-processing.ts',
  '16-air-waybill-verification.ts', '17-vgm-declaration-processing.ts', '18-customs-power-of-attorney-processing.ts',
  '19-section-321-de-minimis-processing.ts', '20-demurrage-detention-documentation.ts', '21-master-house-bill-of-lading-reconciliation.ts',
]

const AUDIT_SCHEMA = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    slug: { type: 'string' },
    overlap_risk: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
    overlap_details: { type: 'string', description: 'Specific existing post(s) or sibling(s) this could overlap with, and why, or "no genuine overlap found" with a one-line justification' },
    keyword_strategy_grade: { type: 'string', enum: ['strong', 'adequate', 'weak'] },
    keyword_strategy_notes: { type: 'string', description: 'Long-tail vs short-tail balance, search intent match, whether primary_keyword and secondary_keywords are realistic and well-differentiated from sibling posts' },
    voice_grade: { type: 'string', enum: ['strong', 'adequate', 'weak'] },
    voice_notes: { type: 'string', description: 'Does it read human and specific, or generic/AI-flavored? Any repeated phrasing patterns, robotic transitions, or emotional flatness?' },
    factual_verification_notes: { type: 'string', description: 'For any post making a specific numeric/algorithmic claim (checksums, statutory citations, worked examples), state whether you independently verified it and how' },
    onpage_seo_issues: { type: 'array', items: { type: 'string' } },
    recommendation: { type: 'string', enum: ['ship_as_is', 'minor_fix', 'needs_rework'] },
    recommendation_detail: { type: 'string' },
  },
  required: ['file', 'slug', 'overlap_risk', 'keyword_strategy_grade', 'voice_grade', 'onpage_seo_issues', 'recommendation'],
}

function buildPrompt(filename) {
  return `You are doing a rigorous SEO and content-overlap audit of one blog post for docsapi.co (a document intelligence/OCR API for SMB lending and fintech). This is a real quality gate before the post ships, not a rubber stamp, be genuinely critical. The person requesting this audit explicitly emphasized: every post's topic, terms, and keywords must be genuinely distinct from every other post on the site and from its own cluster siblings, even though all 21 posts in this cluster share the same broad subject (shipping/logistics documents). Do not wave off a real overlap just because the general subject area is expected to be similar.

POST TO AUDIT: ${SHIP_DIR}/${filename}
(repo root: /Users/muralivvrsn/Developer/hyperlux)

## Step 1: Read the post

Read the full file. Note its title, slug, primary_keyword, secondary_keywords, excerpt, description, and the full content HTML.

## Step 2: Content overlap check (the most important step)

Read ${SITE_INVENTORY} (152 existing posts on the site: title, slug, primary_keyword, excerpt, category, secondary_keywords) and ${CLUSTER_INVENTORY} (the other 20 posts in this same 21-post Shipping/Logistics Document OCR cluster).

For EACH of these two lists, do not just string-match slugs or keywords (that was already checked mechanically and passed). Actually reason about CONTENT overlap: does an existing post already substantively cover the same mechanism, document type, regulation, or worked example as this post, even if it uses different words? Two posts can have completely different slugs and keywords and still be redundant if they teach the reader the same thing.

Pay special attention to:
- Sibling posts in this same cluster that might have drifted onto each other's territory during independent parallel drafting (this is a real risk since all 21 were written by different agents in parallel without seeing each other's output). Shipping/logistics is a dense domain where several document types legitimately touch the same regulation (e.g. multiple posts could all mention CBP, multiple could mention Incoterms in passing) — that is fine as a passing reference, but flag it if two posts are actually explaining the SAME mechanism as their core payload (e.g. two posts both centering their worked example on the same statute, checksum, or document field).
- The two checksum/algorithm posts (container-number-verification's ISO 6346 check digit, air-waybill-verification's modulo-7 check digit) should be distinct algorithms with distinct worked examples — confirm they are not reusing the same numbers or converging on the same explanation style to the point of feeling repetitive.
- Generic OCR/IDP concept posts elsewhere on the site (document classification, OCR accuracy, IDP fundamentals) that this post might redundantly re-explain instead of linking to.
- Posts in the Legal Document OCR cluster that might overlap on adjacent ground (e.g. letter-of-credit-document-compliance vs. any legal contract-clause post, customs-power-of-attorney-processing vs. any legal power-of-attorney content).

Report overlap_risk as none/low/medium/high with specific file names and a one-sentence reason. "None" is a valid and expected answer if you genuinely find nothing, don't manufacture a false positive just to have something to report, but don't wave off a real overlap either.

## Step 3: Keyword strategy check

Assess primary_keyword and secondary_keywords against real SEO practice:
- Is primary_keyword a realistic, specific long-tail phrase a logistics/trade-compliance/freight-finance practitioner would actually search, or is it too generic/broad or too narrow?
- Do secondary_keywords mix short-tail (broad category terms) and long-tail (specific, lower-competition phrases) appropriately, or are they redundant restatements of the primary keyword?
- Does the keyword set match a coherent search intent, and does the actual content deliver on that intent?
- Would this keyword cannibalize an existing page's ranking for the same query (check against the site inventory)?
- Is every secondary_keyword actually supported by content in the post body (not just sitting in the metadata array with nothing in the text backing it up)?

## Step 4: Emotional resonance / E-E-A-T / human-voice check

Read the actual prose, not just the metadata. Assess:
- Does the opening hook feel like a specific, concrete moment/scenario/fact, or does it feel like generic SEO-filler?
- Is there real expertise signal (specific named regulations, statutes, checksums, worked numbers) or does it read like a summary of summaries?
- Does sentence rhythm vary, or does every paragraph follow the identical structural pattern?
- Are there any of these generic-AI tells: "moreover", "furthermore", "in conclusion", "delve into", "unlock", "seamless", "robust" used as pure marketing filler (not as a genuine technical requirement adjective), "landscape" (as metaphor), "game-changer", "revolutionize", or repeated "not just X, but Y" hedging used more than twice?
- Does it feel like it was written by someone who understands the underlying trade/logistics/regulatory mechanism, or someone paraphrasing a summary?

## Step 5: Factual verification spot-check

If the post makes a specific numeric, statutory, or algorithmic claim (a checksum algorithm, a cited CFR/USC section, a court case, a dollar figure, a chargeback percentage), do a lightweight independent sanity check where you can (WebFetch a primary source, or verify arithmetic yourself if it's a checksum/math claim). Note in factual_verification_notes what you checked and what you found. If something looks unverifiable or suspicious, flag it clearly rather than assuming it's fine because the file's own internal notes claim it was checked.

## Step 6: On-page SEO checklist

Check against these standards (the project's own established field-length convention):
- title: 47-60 characters, primary keyword present
- excerpt: 120-158 characters
- description: 145-160 characters
- metaTag: 47-60 characters
- H2 count: 5-10, ideally phrased to mirror real user questions where natural
- At least one concrete worked example or comparative table
- Internal links: pillar link (/documents/shipping-docs) + 2-3 sibling/related links + author link, all pointing to real, existing slugs (verify sibling slugs actually exist as files in ${SHIP_DIR} before treating a link as valid)
- FAQ: exactly 6 entries, matching content actually covered in the post, no duplicate inline FAQ heading in the content HTML

List every real issue found in onpage_seo_issues (empty array if genuinely none).

## Step 7: Verdict

Return structured output: file, slug, overlap_risk, overlap_details, keyword_strategy_grade, keyword_strategy_notes, voice_grade, voice_notes, factual_verification_notes, onpage_seo_issues, recommendation (ship_as_is / minor_fix / needs_rework), recommendation_detail (if minor_fix or needs_rework, be specific about exactly what to change).

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
