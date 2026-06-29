# SEO Plan: 5,000 impressions/day, avg position 10, 0.2% CTR (10 clicks/day)

**Created:** 2026-06-29
**Owner:** Murali (docsapi.co)
**Status:** Active

---

## Current state (last 7 days, ending 2026-06-27)

| Metric | Current | Target | Multiplier |
|---|---|---|---|
| Impressions/day (avg) | 75 | 5,000 | **67x** |
| Impressions/day (peak) | 137 | 5,000+ | 36x |
| Avg position | ~70 | 10 | -60 spots |
| CTR | 0% | 0.2% | first-click milestone |
| Clicks/day | 0 | 10 | first signal |
| Page-1 rankings | 11 | ~100 | 9x |
| Indexed pages | ~80 | ~150 | 1.9x |

**Velocity reality:** sustained 2.4x WoW for 2 weeks running. Realistic decay to 1.6-1.8x/week as low-hanging fruit exhausts. At 1.7x/week sustained: **8-9 weeks to 5K/day**. With 1-2 weeks of buffer for content production and ranking lag: **plan for 12 weeks**.

---

## The math (three-axis multiplication)

```
impressions/day = (# page-1 pages) × (avg impressions per page)
                                                                 
75/day today  = 11 pages × ~7 imp/day each
5,000/day     = ~100 pages × ~50 imp/day each
```

Two levers to multiply:
1. **More page-1 pages** (11 → 100): push existing page-2-7 pages up + ship new pages targeting unowned high-impression queries
2. **More impressions per page** (7 → 50): rank for more long-tail terms per page via passage discipline + information gain

Three CTR levers (separately, to hit 0.2%):
1. Number/year-led titles (already started — 7 blogs done across rounds 1 + 2)
2. Stat-led meta descriptions (same commits)
3. SERP feature mining: FAQ schema, BreadcrumbList (now fixed), HowTo where applicable

---

## 12-week phased plan

### Phase 1 — UNLOCK (Weeks 1-2: 75 → 200/day)

**Goal:** First clicks. Prove CTR rescue works. Establish baseline.

**Week 1 (6/29-7/5):**
- [ ] Merge PR #31 (10 commits including CTR rescues + ocr-finance pillar)
- [ ] Request indexing for the 16 URLs (split across Day 1 + Day 2)
- [ ] Resubmit sitemap to GSC
- [ ] Validate Breadcrumbs fix in GSC Enhancements
- [ ] Monitor GSC daily for first clicks

**Week 2 (7/6-7/12):**
- [ ] Push 4 closest page-2 pages to page 1 (passage discipline + information gain):
  - `ocr-accounting` (pos 42, 111 imp/week)
  - `abbyy-finereader-alternative` (pos 48, 54 imp/week)
  - `paddleocr-vs-tesseract-vs-docsapi` (pos 26, 9 imp/week)
  - `document-fraud-detection-api` (pos 72, 18 imp/week)
- [ ] CTR rescue: any new page-1 rankings (use weekly GSC report)
- [ ] Refresh dateModified on top-15 ranking pages (real metadata work, not date gaming)

**Checkpoint W2:** 200 imp/day, 1-5 clicks/day. If still 0 clicks → CTR titles need another iteration.

---

### Phase 2 — EXPAND CLUSTERS (Weeks 3-4: 200 → 600/day)

**Goal:** Build topic authority via hub-and-spoke. Two biggest demand clusters first.

**Week 3 (7/13-7/19) — KYC cluster expansion:**
GSC shows 42 imp/week on KYC-family terms across 11 query variants. Currently only 2 pages targeting.

- [ ] Rewrite `kyc-document-verification` with passage discipline (pos 87 → target page 1)
- [ ] New: **"KYC Verification Documents Checklist (2026)"** → "kyc documents" (8 imp/wk)
- [ ] New: **"KYC Audit Trail: Compliance Docs in 2026"** → "kyc audit" (2 imp/wk)
- [ ] New: **"Documents Required for KYC Verification (2026)"** → "documents for kyc verification" + variants
- [ ] Build `/resources/kyc-hub` linking all KYC content + landing pages

**Week 4 (7/20-7/26) — Abbyy alternative cluster:**
GSC shows 13+ Abbyy queries with 30+ combined imp/week. Only 1 page covering.

- [ ] Expand `abbyy-finereader-alternative` into pillar with comparison table covering Abbyy products
- [ ] New: **"Abbyy FlexiCapture Alternatives (2026)"** → "abbyy flexicapture alternatives" (3 imp/wk, pos 70)
- [ ] New: **"Kofax vs Abbyy: Honest 2026 Comparison"** → "kofax vs abbyy" (1 imp/wk, pos 70)
- [ ] New: **"Abbyy PDF SDK Alternatives: 2026 Buyer Guide"** → "abbyy pdf sdk alternative" (11 imp/wk, pos 26)
- [ ] New: **"Abbyy FineReader vs OmniPage vs DocsAPI"** → "abbyy finereader vs omnipage" + "omnipage vs finereader"

**Checkpoint W4:** 600 imp/day, 5-15 clicks/day. KYC + Abbyy clusters contributing ~30% of new impressions.

---

### Phase 3 — VERTICAL EXPANSION (Weeks 5-6: 600 → 1,300/day)

**Goal:** Open new query surfaces in medical, shipping, legal, and tax verticals. Documents/ landing pages already getting impressions — supporting blogs unlock the demand.

**Week 5 (7/27-8/2) — Medical + Shipping vertical content:**
- [ ] **"Medical Record OCR (HIPAA-Safe Patterns, 2026)"** → "medical record ocr" + "ocr for medical records"
- [ ] **"OCR in Clinical Workflows: Production Patterns (2026)"** → "ocr in clinical workflows"
- [ ] **"Medical Document OCR: From Intake to EHR (2026)"** → "medical document ocr" + "medical ocr"
- [ ] **"Bill of Lading OCR: Logistics Extraction (2026)"** → "bill of lading ocr" + "ocr bill of lading"
- [ ] **"Shipping Document OCR: BOL, Invoice, Manifest"** → "ocr shipping" + "ocr in shipping"
- [ ] **"Logistics Documents OCR (2026)"** → "logistics documents ocr"

**Week 6 (8/3-8/9) — Legal + Tax vertical content:**
- [ ] **"Contract OCR: Extraction Patterns for Legal Teams (2026)"** → "contract ocr" + "ocr contract management"
- [ ] **"OCR for Tax Forms: W-2, 1099, K-1 (2026)"** → "ocr tax" + "ocr for tax forms" + "tax return ocr"
- [ ] **"OCR Software for Tax Forms: 2026 Comparison"** → "ocr software for tax forms"
- [ ] Rewrite `/documents/medical-docs`, `/documents/shipping-docs`, `/documents/legal-docs` with passage discipline + supporting blog links

**Checkpoint W6:** 1,300 imp/day, 15-30 clicks/day. Multi-vertical content unlocking new geographies (Germany, Brazil, AU).

---

### Phase 4 — LEGACY REBUILD + COMPARISON ARSENAL (Weeks 7-8: 1,300 → 2,200/day)

**Goal:** Refresh remaining 5 legacy blogs + ship high-intent comparison blogs that convert.

**Week 7 (8/10-8/16) — Legacy Phase-3 rewrites round 2:**
- [ ] id 13: `revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions`
- [ ] id 11: `revolutionizing-document-management-with-ocr-technology`
- [ ] id 10: `smarter-invoice-processing-the-ocr-advantage-for-finance-departments`
- [ ] id 9: `intelligent-document-processing-the-future-of-automated-data-extraction`
- [ ] id 8: `understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies`

**Week 8 (8/17-8/23) — Comparison arsenal (high commercial intent):**
- [ ] **"Ocrolus vs DocsAPI vs Plaid CRA (Lending OCR, 2026)"**
- [ ] **"Bill.com vs AvidXchange vs Tipalti (AP OCR, 2026)"**
- [ ] **"Mindee vs Rossum vs DocsAPI (Document AI APIs, 2026)"**
- [ ] **"AWS Textract vs Google Document AI vs DocsAPI: 2026 Benchmark"**
- [ ] **"Best OCR API 2026: Tested 8 Vendors on Real Documents"**

**Checkpoint W8:** 2,200 imp/day, 30-50 clicks/day. ~30-40 page-1 rankings.

---

### Phase 5 — AUTHORITY + INTERNAL LINKING (Weeks 9-10: 2,200 → 3,500/day)

**Goal:** Build site-wide authority flow. Make weak pages rank by linking from strong pages.

**Week 9 (8/24-8/30) — Internal linking surge:**
- [ ] Build 5 pillar hubs (KYC, AP, Lending, Medical, Legal) — each links to 6-12 cluster blogs
- [ ] Audit top-20 ranking pages → ensure each links to 3-5 weaker pages in same cluster
- [ ] Add "Related guides" section to every blog (auto-generated by cluster tag)
- [ ] Rebuild `/resources/blogs/` index page with cluster-grouped layout

**Week 10 (8/31-9/6) — Backlink push round 1:**
- [ ] Outreach to 20 productivity/SaaS/dev blogs (target: 5 backlinks)
- [ ] Submit to relevant directories (G2, Capterra, Product Hunt, Pinecone, AlternativeTo)
- [ ] Build 3 free tools (OCR demo, PDF extractor, KYC checklist generator) as link bait
- [ ] Post in 5 relevant subreddits with genuine value (no spam) — r/fintech, r/aws, r/dataengineering

**Checkpoint W10:** 3,500 imp/day, 50-80 clicks/day. First backlinks from referring domains.

---

### Phase 6 — POLISH + COMPOUND (Weeks 11-12: 3,500 → 5,000/day)

**Goal:** Hit 5K/day. Stabilize. Set up Q3 growth runway.

**Week 11 (9/7-9/13) — Long-tail saturation:**
- [ ] Ship 10 long-tail blogs targeting remaining query gaps from GSC:
  - "Free OCR API (2026)" → "free ocr api"
  - "OCR Trial: Compare Top Vendors" → "ocr trial"
  - "OCR Errors: Common Causes + Fixes" → "ocr errors"
  - "OCR Quickbooks Integration (2026)" → "ocr quickbooks"
  - "OCR Document Management Software (2026)" → "ocr document management software"
  - "Drivers License OCR API (2026)" → "drivers license ocr" + "ocr driver's license"
  - "Passport OCR Software (2026)" → "passport ocr software"
  - "OCR Software Free Trial Guide (2026)" → "ocr software free trial"
  - "Invoice Processing API (2026)" → "invoice processing api"
  - "Invoice OCR API: Top Choices (2026)" → "invoice ocr api"

**Week 12 (9/14-9/20) — Stabilize + measure:**
- [ ] Refresh all top-30 pages with current date + new internal links
- [ ] Submit all new blogs for indexing
- [ ] Run full SEO audit checklist (per seo-optimizer skill)
- [ ] Build out hreflang for top 5 countries (US, IN, UK, FR, DE)
- [ ] Document what worked / what didn't for Q3 plan

**Checkpoint W12:** **5,000 imp/day, 10+ clicks/day at 0.2% CTR. Avg position ~10. TARGET HIT.**

---

## Content production rate (must hit)

| Phase | Weeks | New blogs | Rewrites | Total | Per-week |
|---|---|---|---|---|---|
| 1 | 1-2 | 0 | 4 | 4 | 2/wk |
| 2 | 3-4 | 8 | 1 | 9 | 4-5/wk |
| 3 | 5-6 | 9 | 3 | 12 | 6/wk |
| 4 | 7-8 | 5 | 5 | 10 | 5/wk |
| 5 | 9-10 | 0 | 5 hubs | 5 | 2-3/wk |
| 6 | 11-12 | 10 | 30 refreshes | 40 | varies |
| **Total** | 12 wk | **32 new** | **48 changes** | **80** | **~6-7/wk avg** |

---

## What success looks like at each checkpoint

| Week | Imp/day | Clicks/day | Page-1 pages | Notable |
|---|---|---|---|---|
| 0 | 75 | 0 | 11 | Baseline (this week) |
| 2 | 200 | 1-5 | 15 | First clicks. PR #31 merged. |
| 4 | 600 | 5-15 | 25 | KYC + Abbyy clusters live. |
| 6 | 1,300 | 15-30 | 40 | Medical/shipping content compounding. |
| 8 | 2,200 | 30-50 | 55 | All legacy rewritten. Comparison arsenal shipping. |
| 10 | 3,500 | 50-80 | 75 | Internal linking + first backlinks. |
| **12** | **5,000** | **10+** | **~100** | **TARGET HIT.** Pos 10 avg. 0.2% CTR. |

(Note: "Clicks 10+" at W12 reflects the 0.2% CTR target literally. With number-led titles + FAQ schema, realistic CTR at avg pos 10 is closer to 1-2% = 50-100 clicks/day. Plan for the floor, celebrate the ceiling.)

---

## Risks + mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Growth velocity decays below 1.5x/wk | High | High | Multi-cluster strategy spreads risk; new verticals reset clock |
| PR #31 not merged | Resolved on merge | Critical | User-controlled; ping if not merged by W1 end |
| Click drought continues past W2 | Medium | High | Iterate titles again; check SERP for AI Overview eating clicks |
| Google algorithm update | Low-Medium | High-Critical | Can't prevent; diversify across query clusters reduces blast radius |
| Content production slips | Medium | Medium | Build template + first-paragraph framework; reuse across blogs |
| Vercel/build breakage | Low | Medium | Always tsc check before commit; PR previews catch issues |

---

## What doesn't make this plan (intentionally)

- **Paid SEO tools** (Ahrefs/SEMrush) — GSC data is sufficient for this stage
- **Programmatic SEO** — quality over quantity until we have 100+ ranking pages
- **Translation/full localization** — hreflang in W12 is the test; full localization later
- **Outsourced content** — voice + technical depth need founder-led writing
- **Backlink purchase / PBNs** — long-term penalty risk; outreach + tools only
- **PageSpeed / Core Web Vitals rebuild** — current scores good enough; revisit only if regression

---

## Weekly cadence

Every Monday:
1. Pull fresh GSC export (last 7 days)
2. Diff vs previous week (impressions, position, query gaps)
3. Update this plan's checkpoint table
4. Surface any new page-1 rankings for CTR rescue
5. Surface any page-2-7 pages for ranking push
6. Pick that week's content based on Phase

Every Friday:
1. Ship that week's blogs (commit + PR)
2. Request indexing for new/changed URLs
3. Validate any GSC errors flagged that week

---

## Open questions / decisions needed

- [ ] Approve content production rate (~6-7 blogs/wk avg over 12 wk = 80 pieces). If not, plan must extend to 16-20 weeks.
- [ ] Approve backlink outreach in Week 10 (~20 hours of effort). Could be done by you, contractor, or skip.
- [ ] Decide on hreflang priority countries (default: US, IN, UK, FR, DE).
- [ ] Confirm CTR target stays at 0.2% (modest) or push to 1% in plan (would change content focus).

---

## Reference data sources

- **GSC exports:** stored at `/Users/muralivvrsn/Downloads/https___docsapi.co_-Performance-on-Search-YYYY-MM-DD/`
- **Current PR:** https://github.com/Muralivvrsn/hyperlux/pull/31
- **Existing 2K plan checkpoints:** in chat history (06-22 data point)
- **SEO skill reference:** `seo-optimizer` skill at `~/.claude/skills/seo-optimizer/`
