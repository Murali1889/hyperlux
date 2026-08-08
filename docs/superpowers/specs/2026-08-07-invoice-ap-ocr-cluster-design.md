# Invoice/AP-OCR 21-Post Cluster Design (Topic 1 of 3)

**Date:** 2026-08-07
**Owner:** Murali (founder, docsapi.co)
**Scope:** First of a 3-topic, 63-blog content push. Publish cadence is 3/day, one topic per week (21 posts), so each topic compounds topical-relevance signal before the next starts.

## 1. Goal & non-goals

**Goal.** Build genuine topical depth on Invoice/AP OCR by covering 21 long-tail concepts the site does not yet touch, each with a real competitive edge, so the cluster earns impressions Google isn't already giving the 4 existing AP/invoice posts (`accounts-payable-ocr`, `best-ocr-software-for-accounts-payable`, `ocr-accounting`, legacy `smarter-invoice-processing`).

**Non-goals.** No new head-term posts (all head terms in this space are already covered — see keyword-collision check below). No new images generated — reuse the existing `/images/*` pool. No CMS/scheduling feature — "publishing" means the founder deploys the batch on their own cadence; my job is to ship verified, committed content.

## 2. Why these 21 and not others

Mined both `gap.keywords_*.csv` files (5,633 rows, docsapi vs ocr.space / docsapi vs llamaindex.ai) for invoice/AP-relevant rows: 39 matches with real volume/KD data. Cross-referenced against all 255 keywords already targeted across the 47 live blogs (13 legacy + 34 in `data/new-blogs/`). No head term is open — "invoice ocr", "accounts payable ocr", "ocr for accounts payable", "ap automation ocr", "invoice data extraction", etc. are all already primary or secondary keywords on a live post.

The 21 concepts below go long-tail by dimension (ERP/platform, specific workflow pain, document format, persona, technical approach, decision-support) rather than by keyword-phrase variation, per the user's explicit requirement that the 21 be **completely different concepts**, not reworded duplicates. Each was checked against the 255-keyword list for zero collision.

## 3. The 21 concepts

| # | Concept | Primary keyword | Concrete asset (real, not fabricated) |
|---|---|---|---|
| 1 | Invoice OCR → QuickBooks sync: what maps cleanly, what breaks | invoice ocr quickbooks integration | QuickBooks API field-mapping table (sourced from Intuit docs) |
| 2 | Invoice OCR → NetSuite bill records | invoice ocr netsuite | NetSuite SuiteTalk field-mapping table |
| 3 | Invoice OCR → SAP MM/FI posting | invoice ocr sap | SAP posting-field table |
| 4 | Invoice OCR → Xero for bookkeepers/accountants | invoice ocr xero | Xero API field-mapping table |
| 5 | 3-way matching: PO + receipt + invoice, where it breaks | 3-way match invoice automation | Exception-handling decision table (our framework) |
| 6 | Duplicate invoice / duplicate payment detection | duplicate invoice detection | Fuzzy-match criteria table |
| 7 | Invoice line-item extraction (table extraction, not header fields) | invoice line item ocr | Real accuracy data from our benchmark (blog34) |
| 8 | Early payment discounts missed to slow processing | early payment discount capture | Worked discount-value calculation (2/10 net 30) |
| 9 | Non-PO invoice exception routing | non po invoice processing | Exception-routing decision tree |
| 10 | Fake vendor / invoice fraud detection | invoice fraud detection | Red-flag checklist, links to `document-fraud-detection-api` |
| 11 | Why AP is the bottleneck at month-end close | month end ap close | Day-by-day AP close calendar checklist |
| 12 | Multi-currency / international vendor invoices | multi currency invoice ocr | Locale invoice-format comparison table |
| 13 | Email invoice parsing (inbox → ERP, not scanned paper) | email invoice parsing | Inbox-to-ERP pipeline checklist |
| 14 | Handwritten / faxed invoices from small vendors | handwritten invoice ocr | Real handwriting-accuracy data from our benchmark |
| 15 | What "99% accurate" invoice OCR claims actually mean | invoice ocr accuracy claims | Full benchmark table, myth-busting angle |
| 16 | AP clerk's day before/after OCR | ap clerk workflow automation | Time-per-invoice breakdown table |
| 17 | The CFO's ROI case for invoice OCR | invoice ocr roi calculator | ROI calculator (labor + error + late-fee formula) |
| 18 | Build vs. buy: in-house OCR pipeline vs. API | build vs buy invoice ocr | Engineering cost/time comparison table |
| 19 | What invoice OCR actually costs per invoice at volume | invoice ocr pricing comparison | Real pricing-tier table (researched from vendor sites) |
| 20 | Rules-based OCR vs. AI/LLM extraction for invoices | ai invoice extraction vs rules based ocr | Technical tradeoff table |
| 21 | A real invoice-OCR rollout, week by week | invoice ocr implementation timeline | Week-by-week rollout checklist |

## 4. Per-post contract

**Word count.** 2,000-2,800 words, hard floor 2,000 (user's explicit requirement; skill default is 1,500-2,500).

**Mandatory pre-write competitive audit** (per `references/35-competitive-audit-before-writing.md`, run in full for every post, no sampling — this was an explicit founder decision given the "unique asset every post, full audit every post" answer):
1. WebSearch the primary keyword, identify top 3 organic competitors (skip Google's own docs, Wikipedia, brand-owner homepages).
2. WebFetch each of the 3, extract headings, unique features/data, content angle, citability.
3. Diff into table-stakes / one-competitor-unique / our-unique-angle / overclaim-to-remove / gap-to-close.
4. Verdict: `strong_differentiation` / `moderate_differentiation` / `commodity_content_needs_rewrite`.
5. If `commodity_content_needs_rewrite`: stop, rework the angle, do not write. Log the decision in the post's task.

**Concrete asset ship-gate** (mandatory, no exceptions per founder decision): every post ships with the specific real asset listed in the table above — not a prose description of one. Every `%`-shaped or stat-shaped claim gets a linkable named source in the same paragraph, or gets deleted.

**Voice.** First-person founder/operator, matches existing site voice (see `data/new-blogs/34-ocr-accuracy-benchmark-2026.ts` as the calibration example). No em/en dashes anywhere (site-wide rule, already enforced — see commit f5b5b12).

**Structure.** H1 (title, different phrasing from `<title>` tag), 5-8 H2s as questions/actions, 40-60 word direct-answer block after the first H2, 1 comparison table or numbered list minimum (the asset itself usually covers this), 3-5 FAQs, paragraphs ≤4 sentences.

**Metadata.** `title` 51-55 chars, `metaTag` same, `excerpt` 120-158 chars, `description` 150-158 chars, `slug` 3-5 words, `primary_keyword`, 5-10 `secondary_keywords` (checked against the running 255+ list to avoid collision), 3-5 `tags`, `datePublished`/`dateModified`/`last_updated`, `cluster: "industry-trends"` (matches existing AP-adjacent posts) or new `"ap-invoice"` value if warranted.

**Links.** 1 link to `/solutions/finance-automation` (pillar) in the first 200 words, 2-3 sibling links (existing AP posts + other posts in this 21), 1 link to `/author/nupura-ughade`, 2-3 external links to authoritative sources (ERP vendor docs, IRS/regulatory where relevant).

**Images.** Reuse existing `/images/*` pool (`invoice-processing.png` and finance-adjacent images), no new generation.

## 5. File architecture

New subfolder to keep this batch navigable separately from the existing 34 flat files:

```
data/new-blogs/invoice-ap-ocr/
  01-invoice-ocr-quickbooks.ts
  02-invoice-ocr-netsuite.ts
  ...
  21-invoice-ocr-implementation-timeline.ts
```

Each file exports a `BlogPost` the same shape as existing `new-blogs/*.ts` files. `data/new-blogs.ts` gets 21 new import lines + array entries appended (same pattern as the existing 34, just importing from the subfolder). No changes to `types/resources.ts`, routing, sitemap, or JSON-LD components needed — all already generic over the `blogs` array.

## 6. Production pipeline

One post at a time (explicit founder instruction: "go one by one and build it properly"):
1. Run the competitive audit.
2. Research/verify the concrete asset (real data — from our own benchmark post, real vendor API docs, or researched pricing — never invented).
3. Draft the full post to the per-post contract.
4. Verify (Section 7).
5. Move to the next post.

Post #1 (3-way matching, concept #5) is being built now as a calibration sample, shown to the founder before the remaining 20 are mass-produced, so any format/voice correction happens once instead of 21 times.

## 7. Verification gates

**Per post:**
- [ ] Word count ≥ 2,000
- [ ] Title/meta/excerpt/description lengths in range
- [ ] `primary_keyword` and all `secondary_keywords` checked against the running used-keyword list (starts at 255, grows by each shipped post) — zero collisions
- [ ] Competitive audit verdict recorded, strong/moderate only
- [ ] Concrete asset present and real (not prose description of a nonexistent asset)
- [ ] Every stat has a linkable source in the same paragraph, or is deleted
- [ ] 3-5 FAQs present
- [ ] No em/en dashes (`grep -n '[—–]'`)
- [ ] 1 pillar link + 2-3 sibling links + 1 author link present in rendered HTML
- [ ] Valid TS (file compiles, object shape matches `BlogPost`)

**Per batch (after all 21 for this topic):**
- [ ] `npm run build` clean
- [ ] `npm run lint` clean
- [ ] JSON-LD smoke test: every post's schema fields present (script extracts and validates)
- [ ] Sitewide keyword-collision script: no duplicate primary/secondary keyword across all 68 posts (47 existing + 21 new)
- [ ] Sitemap includes all 21 new URLs
- [ ] Spot-check 3 random posts by visiting `/resources/blogs/<slug>` in dev

## 8. Open items (deferred, not blocking)

- Topics 2 and 3 (proposed: Bank Statement/Lending OCR, then KYC/AML/Compliance OCR) — confirm with founder before starting topic 2.
- Whether `cluster` needs a new `"ap-invoice"` enum value vs reusing `"industry-trends"` — decide during implementation, additive type change either way.
