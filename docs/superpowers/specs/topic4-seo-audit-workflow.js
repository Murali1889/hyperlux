export const meta = {
  name: 'legal-cluster-seo-audit',
  description: 'Deep per-post audit of the 21 Legal Document OCR posts: content overlap vs full site, keyword strategy, emotional/E-E-A-T voice, on-page SEO',
  phases: [
    { title: 'Audit', detail: 'one agent per post, full read + site-wide overlap + SEO checklist' },
  ],
}

const LEGAL_DIR = 'data/new-blogs/legal-document-ocr'
const SITE_INVENTORY = '/private/tmp/claude-501/-Users-muralivvrsn-Developer-hyperlux/b80d0037-1ab1-49ba-a4f6-4920fd243840/scratchpad/site_inventory.json'
const CLUSTER_INVENTORY = '/private/tmp/claude-501/-Users-muralivvrsn-Developer-hyperlux/b80d0037-1ab1-49ba-a4f6-4920fd243840/scratchpad/legal_cluster_inventory.json'

const FILES = [
  '01-contract-redlining-software.ts', '02-e-discovery-document-review.ts', '03-litigation-hold-software.ts',
  '04-legal-citation-checker.ts', '05-privilege-log-automation.ts', '06-ledes-billing-format.ts',
  '07-chain-of-custody-documentation.ts', '08-force-majeure-clause-extraction.ts', '09-governing-law-clause-extraction.ts',
  '10-remote-online-notarization-verification.ts', '11-due-diligence-data-room-software.ts', '12-deposition-transcript-ocr.ts',
  '13-patent-claim-extraction.ts', '14-nda-clause-extraction.ts', '15-arbitration-clause-extraction.ts',
  '16-court-docket-ocr.ts', '17-cap-table-document-automation.ts', '18-legal-hold-custodian-tracking.ts',
  '19-title-document-ocr.ts', '20-legal-document-translation-ocr.ts', '21-legal-deadline-extraction.ts',
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
    onpage_seo_issues: { type: 'array', items: { type: 'string' } },
    recommendation: { type: 'string', enum: ['ship_as_is', 'minor_fix', 'needs_rework'] },
    recommendation_detail: { type: 'string' },
  },
  required: ['file', 'slug', 'overlap_risk', 'keyword_strategy_grade', 'voice_grade', 'onpage_seo_issues', 'recommendation'],
}

function buildPrompt(filename) {
  return `You are doing a rigorous SEO and content-overlap audit of one blog post for docsapi.co (a document intelligence/OCR API for SMB lending and fintech). This is a real quality gate before the post ships, not a rubber stamp, be genuinely critical.

POST TO AUDIT: ${LEGAL_DIR}/${filename}
(repo root: /Users/muralivvrsn/Developer/hyperlux)

## Step 1: Read the post

Read the full file. Note its title, slug, primary_keyword, secondary_keywords, excerpt, description, and the full content HTML.

## Step 2: Content overlap check (the most important step)

Read ${SITE_INVENTORY} (115 existing posts on the site: title, slug, primary_keyword, excerpt, category, secondary_keywords) and ${CLUSTER_INVENTORY} (the other 20 posts in this same 21-post Legal Document OCR cluster).

For EACH of these two lists, do not just string-match slugs or keywords (that was already checked mechanically and passed). Actually reason about CONTENT overlap: does an existing post already substantively cover the same mechanism, concept, or angle as this post, even if it uses different words? Two posts can have completely different slugs and keywords and still be redundant if they teach the reader the same thing.

Pay special attention to:
- Posts in the same general subject area (legal, compliance, fraud detection, document processing) that might unknowingly cover the same doctrine, algorithm, or worked example
- Sibling posts in this same cluster that might have drifted onto each other's territory during independent parallel drafting (this is a real risk since all 21 were written by different agents in parallel without seeing each other's output)
- Generic OCR/IDP concept posts elsewhere on the site (document classification, OCR accuracy, IDP fundamentals) that this post might redundantly re-explain instead of linking to

Report overlap_risk as none/low/medium/high with specific file names and a one-sentence reason. "None" is a valid and expected answer if you genuinely find nothing, don't manufacture a false positive just to have something to report, but don't wave off a real overlap either.

## Step 3: Keyword strategy check

Assess primary_keyword and secondary_keywords against real SEO practice:
- Is primary_keyword a realistic, specific long-tail phrase a practitioner would actually search, or is it too generic/broad (competing against high-authority pages with no realistic chance to rank) or too narrow (near-zero search volume, not worth a dedicated page)?
- Do secondary_keywords mix short-tail (broad category terms) and long-tail (specific, lower-competition phrases) appropriately, or are they redundant restatements of the primary keyword?
- Does the keyword set match a coherent search intent (informational/how-it-works vs comparison vs transactional), and does the actual content deliver on that intent?
- Would this keyword cannibalize an existing page's ranking for the same query (check against the site inventory)?

## Step 4: Emotional resonance / E-E-A-T / human-voice check

Read the actual prose, not just the metadata. Assess:
- Does the opening hook feel like a specific, concrete moment/scenario/fact, or does it feel like generic SEO-filler ("In today's fast-paced legal industry...")?
- Is there real expertise signal (specific named regulations, cases, algorithms, worked numbers) or does it read like a summary of summaries?
- Does sentence rhythm vary, or does every paragraph follow the identical structural pattern?
- Are there any of these generic-AI tells: "moreover", "furthermore", "in conclusion", "delve into", "unlock", "seamless", "robust" (as filler), "landscape" (as metaphor), "game-changer", "revolutionize", or repeated em/en dash-adjacent hedging like "not just X, but Y" used more than twice?
- Does it feel like it was written by someone who understands the underlying legal/technical mechanism, or someone paraphrasing a Wikipedia summary?

## Step 5: On-page SEO checklist

Check against these standards (the project's own established field-length convention, which is slightly different from generic SEO defaults, respect the project's convention as the source of truth, not the generic defaults):
- title: 47-60 characters, primary keyword present
- excerpt: 120-158 characters
- description: 145-160 characters
- metaTag: 47-60 characters
- H2 count: 5-10, ideally phrased to mirror real user questions where natural
- At least one concrete worked example or comparative table
- Internal links: pillar link + 2-3 sibling/related links + author link, all pointing to real, existing slugs
- FAQ: exactly 6 entries, matching content actually covered in the post, no duplicate inline FAQ heading in the content HTML

List every real issue found in onpage_seo_issues (empty array if genuinely none).

## Step 6: Verdict

Return structured output: file, slug, overlap_risk, overlap_details, keyword_strategy_grade, keyword_strategy_notes, voice_grade, voice_notes, onpage_seo_issues, recommendation (ship_as_is / minor_fix / needs_rework), recommendation_detail (if minor_fix or needs_rework, be specific about exactly what to change).

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
