export const meta = {
  name: 'legal-document-ocr-cluster',
  description: 'Research, write, and verify 21 Legal Document OCR blog posts for docsapi.co',
  phases: [
    { title: 'Draft', detail: 'competitive audit + concrete asset + 2000+ word draft per post, 21 in parallel' },
  ],
}

const CONCEPTS = [
  { n: '01', slug: 'contract-redlining-software', pk: 'contract redlining software', concept: 'Contract redlining and version-diff mechanics: how document diffing algorithms actually detect changes across contract versions (e.g. Myers diff / LCS-based text alignment), why naive line-diff breaks on reflowed legal prose, and what a real redlining tool has to do differently.' },
  { n: '02', slug: 'e-discovery-document-review', pk: 'e-discovery document review', concept: 'E-discovery technology-assisted review: the real difference between TAR 1.0 (simple active learning, train-then-review) and TAR 2.0 / continuous active learning (CAL), which one actually reduces review cost, and the EDRM stages most vendor content skips over.' },
  { n: '03', slug: 'litigation-hold-software', pk: 'litigation hold software', concept: 'Litigation hold tracking and FRCP 37(e) spoliation risk: what the rule actually requires (reasonable steps to preserve, intent-to-deprive standard for severe sanctions), why custodian acknowledgment tracking is the real compliance gap, and a worked example of a hold that failed and why.' },
  { n: '04', slug: 'legal-citation-checker', pk: 'legal citation checker', concept: 'Legal citation extraction and Bluebook format verification: the actual structural rules a citation-checking system has to encode (case name italicization, reporter abbreviations, pincite formats), why regex alone fails, and what a real citation-parsing pipeline looks like.' },
  { n: '05', slug: 'privilege-log-automation', pk: 'privilege log automation', concept: 'Privilege log automation and redaction mechanics: the real technical difference between attorney-client privilege and work-product doctrine as applied to automated classification, FRE 502(d) clawback provisions, and why keyword-only privilege screening both over-redacts and under-redacts.' },
  { n: '06', slug: 'ledes-billing-format', pk: 'ledes billing format', concept: 'LEDES legal billing format processing: what LEDES 1998B and LEDES XML actually specify (UTBMS task/activity codes), why law firm invoices get rejected by e-billing systems, and the specific validation rules a real LEDES processing pipeline has to enforce.' },
  { n: '07', slug: 'chain-of-custody-documentation', pk: 'chain of custody documentation', concept: 'Chain of custody documentation for legal evidence: what actually has to be tracked under the Federal Rules of Evidence for admissibility (FRE 901 authentication), the real gap between physical and digital evidence custody logging, and a worked example of a custody gap that got evidence excluded.' },
  { n: '08', slug: 'force-majeure-clause-extraction', pk: 'force majeure clause extraction', concept: 'Force majeure and indemnification clause extraction: why these clauses cannot be reliably found by keyword search alone (contracts often omit the literal term "force majeure" while still containing the concept), the real semantic-classification approach, and a worked comparison of two clauses that look similar but have very different legal effect.' },
  { n: '09', slug: 'governing-law-clause-extraction', pk: 'governing law clause extraction', concept: 'Governing law and choice of law clause detection: the real legal distinction between choice of law and choice of forum/venue clauses (often conflated), why extracting the wrong one creates real risk, and how a detection pipeline should actually disambiguate them.' },
  { n: '10', slug: 'remote-online-notarization-verification', pk: 'remote online notarization verification', concept: 'Power of attorney and remote online notarization (RON) verification: the real MISMO/state RON standards for verifying a notarial act happened correctly, what a tamper-evident notarial certificate actually contains, and the specific fraud pattern RON verification exists to catch.' },
  { n: '11', slug: 'due-diligence-data-room-software', pk: 'due diligence data room software', concept: 'M&A due diligence data room document processing: the real technical challenge of organizing thousands of unstructured documents into a due diligence index, why naive folder-based classification fails at scale, and the concrete red-flag clause patterns automated review actually catches.' },
  { n: '12', slug: 'deposition-transcript-ocr', pk: 'deposition transcript ocr', concept: 'Deposition and court transcript OCR: the real technical challenges specific to transcript formatting (line numbering, Q&A speaker tagging, page/line citation format), why generic OCR mangles these, and what a transcript-aware extraction pipeline has to do differently.' },
  { n: '13', slug: 'patent-claim-extraction', pk: 'patent claim extraction', concept: 'Patent claim extraction and classification: the real structural rules of patent claims (independent vs dependent claims, claim preamble/transitional phrase/body structure, means-plus-function claims under 35 U.S.C. 112(f)), and why naive text extraction breaks claim dependency chains.' },
  { n: '14', slug: 'nda-clause-extraction', pk: 'nda clause extraction', concept: 'NDA clause extraction: the real structural differences between mutual and one-way NDAs that automated extraction has to detect, common carve-out clauses (residuals clause, independently developed information), and a worked example of a carve-out that silently guts the NDA\'s protection.' },
  { n: '15', slug: 'arbitration-clause-extraction', pk: 'arbitration clause extraction', concept: 'Arbitration and dispute resolution clause extraction: the real legal distinction between binding and non-binding arbitration clauses, class-action waiver detection, and why the Federal Arbitration Act\'s severability doctrine matters for automated clause classification.' },
  { n: '16', slug: 'court-docket-ocr', pk: 'court docket ocr', concept: 'Court docket and structured filing extraction: the real technical challenge of PACER/state e-filing docket formats, why docket entries are structured very differently from the documents they reference, and what a docket-monitoring pipeline actually needs to track deadlines correctly.' },
  { n: '17', slug: 'cap-table-document-automation', pk: 'cap table document automation', concept: 'Cap table and corporate minute book document processing for law firms: the real technical challenge of reconciling a cap table against the underlying stock issuance documents (board consents, stock purchase agreements), why cap tables silently drift out of sync with the actual paper record, and a worked example of a reconciliation gap.' },
  { n: '18', slug: 'legal-hold-custodian-tracking', pk: 'legal hold custodian tracking', concept: 'Legal hold custodian acknowledgment tracking: why a sent hold notice is not the same as a confirmed hold, the real operational gap between IT-level data preservation and custodian-level behavioral compliance, and what actually has to be tracked to defend a hold process in court.' },
  { n: '19', slug: 'title-document-ocr', pk: 'title document ocr', concept: 'Title and closing document processing for real estate, from the title company/law firm side: the real technical challenge of extracting and reconciling title commitment exceptions against the actual recorded deed history, distinct from lender-side mortgage document processing, and a worked example of an unresolved title exception.' },
  { n: '20', slug: 'legal-document-translation-ocr', pk: 'legal document translation ocr', concept: 'Cross-border contract translation and localization: the real technical/legal problem of translated contracts having no independent legal effect without a governing-language clause, why back-translation verification matters, and a worked example of a translation discrepancy that created a real dispute.' },
  { n: '21', slug: 'legal-deadline-extraction', pk: 'legal deadline extraction', concept: 'Statute of limitations and legal deadline extraction: the real technical challenge that limitations periods depend on jurisdiction-specific tolling rules (not just a fixed date-plus-N-years calculation), why naive deadline extraction gets the date wrong even when it reads the trigger date correctly, and a worked example of a tolling rule that changes the real deadline.' },
]

const IMAGES = [
  "idp-vs-ocr.png","intelligent-document-processing.png","invoice-processing.png","legal-document-automation.png",
  "ocr-accuracy.png","ocr-api.png","ocr-bank-statement-technology.png","ocr-in-finance.png","ocr-process.png",
  "passport-ocr-revolutionizing.png","passport-ocr.png","revolutionizing-finance.png",
  "the-ultimate-guide-to-small-business.png","transforming-financial-services.png",
]
CONCEPTS.forEach((c, i) => { c.image = IMAGES[i % IMAGES.length] })

const RESULT_SCHEMA = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    file_path: { type: 'string' },
    word_count: { type: 'number' },
    dash_count: { type: 'number' },
    differentiation_verdict: { type: 'string' },
    concrete_asset_summary: { type: 'string' },
    opening_hook_style: { type: 'string', description: 'which opening style was used, to check variety across the batch' },
    status: { type: 'string', enum: ['success', 'failed'] },
    notes: { type: 'string' },
  },
  required: ['slug', 'file_path', 'word_count', 'dash_count', 'status'],
}

function buildPrompt(c) {
  return `You are writing one blog post for docsapi.co, a document intelligence API for SMB lending and fintech, as part of a 21-post "Legal Document OCR" cluster (Topic 4 of a 6-topic content project). The repo is at /Users/muralivvrsn/Developer/hyperlux.

YOUR ASSIGNED CONCEPT: ${c.concept}
PRIMARY KEYWORD: "${c.pk}"
SLUG: ${c.slug}
FILE PATH TO WRITE: data/new-blogs/legal-document-ocr/${c.n}-${c.slug}.ts

## Non-negotiable requirements (this project has zero tolerance for violations)

1. **Zero em dashes or en dashes anywhere** (— or –). Use commas, periods, or "and"/"but" instead. Regular hyphens in compound words or number ranges (e.g. "2000-2026", "well-documented") are fine. Before finishing, run: grep -c "[–—]" <your file> and confirm it prints 0. If it doesn't, fix every instance before returning.
2. **Minimum 2000 words** in the content field (HTML tags stripped). Word-padding with filler is not acceptable, add genuine additional technical depth, a worked example, or an additional real sourced fact instead. Check with: node -e 'const fs=require("fs");const s=fs.readFileSync("<path>","utf8");const m=s.match(/content: \`([\\s\\S]*?)\`,\\n\\s*image:/);const t=m[1].replace(/<[^>]+>/g," ").replace(/\\s+/g," ").trim();console.log(t.split(" ").filter(Boolean).length)'
3. **Full 5-step competitive audit before drafting**: WebSearch the primary keyword, identify 2-3 real competitor pages ranking for it, WebFetch each with an extraction prompt asking what they explain and what they DON'T explain technically, diff your planned angle against what you found, and only proceed if you have genuine differentiation (a specific mechanism, standard, or fact that competitor content gestures at vaguely but never actually explains). If the topic turns out to be commodity content with no differentiation angle available, say so in your final report rather than shipping a shallow post.
4. **One genuinely real, sourced concrete asset per post.** A real regulation citation (with section number), a real standard's actual technical structure, a real algorithm, a real named legal doctrine, or independently verifiable/computable math. NEVER fabricate a statistic, a company name, a court case, or a specific number. If you cannot verify a specific fact via WebSearch, do not state it as fact, describe the mechanism qualitatively instead.
5. **No duplicate FAQ section.** Do NOT include an inline "<h3>Frequently asked questions</h3>" block inside the content HTML. The site renders FAQs from the separate structured \`faq\` array field only (a different component handles display). Putting FAQ content in both places causes it to render twice on the page, a bug already fixed once on this site, do not reintroduce it.
6. **Human, non-repetitive voice.** This project already shipped 63 posts that mostly opened with "X content explains Y well, almost none explain Z" as the hook. That pattern is fine used sparingly but reads mechanically repetitive across many posts. For THIS post, pick a genuinely different opening style from this list based on what fits your specific concept best: (a) a concrete worked-example teaser that states the surprising outcome before explaining why, (b) a stat-led hook citing a real number from your research, (c) a direct claim/correction hook ("X is not the same as Y, and treating them as interchangeable creates Z risk"), (d) a scenario hook describing a specific situation and its consequence. Vary sentence length within the post, avoid starting more than two consecutive paragraphs with the same structural pattern, and avoid the words "moreover", "furthermore", "in conclusion", "delve into", "unlock", "seamless", "robust", "leverage" (as a verb), "landscape" (as a metaphor), "game-changer", "revolutionize". Write like a knowledgeable practitioner explaining something to a smart colleague, not like marketing copy.

## Required TypeScript structure (match this exactly, adapting content)

\`\`\`typescript
import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd${c.n}: BlogPost = {
  id: "ld-${c.n}",
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
  category: "Legal",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "${c.pk}",
  secondary_keywords: ["...", "...", "...", "...", "...", "..."], // 6 real related phrases
  tags: ["legal", "..."],
  cluster: "legal",
  faq: [
    { question: "...", answer: "..." },
    // exactly 6 entries, matching genuine questions the post's content actually answers
  ],
}
\`\`\`

## Internal linking (required)

Include exactly one pillar link to /documents/legal-docs (or /use-cases/contract-abstraction if more contextually relevant) in the opening section, plus 2-3 sibling links to other posts in this same cluster or to /resources/blogs/contract-ocr where genuinely relevant, plus the author link at the end. Do NOT link to a sibling post slug unless you are confident it exists, when in doubt link only to the pillar and the author.

## Before you finish

1. Verify word count >= 2000 using the command above.
2. Verify zero em/en dashes using the grep command above.
3. Verify the file has exactly one FAQ representation (the faq array only, no inline HTML FAQ heading).
4. Return your result via the required structured output: slug, file_path, word_count, dash_count, differentiation_verdict (one sentence on what makes this post's angle genuinely different from what competitors publish), concrete_asset_summary (one sentence naming the specific real fact/standard/regulation this post is built around), opening_hook_style (which of the 4 styles above you used), status, and any notes.`
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
