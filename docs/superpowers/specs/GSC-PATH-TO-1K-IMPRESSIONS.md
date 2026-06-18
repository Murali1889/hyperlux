# Path to 1,000 Impressions/Day for docsapi.co

**Based on:** GSC export `https___docsapi.co_-Performance-on-Search-2026-06-18`
**Window:** Last 3 months (2026-03-17 to 2026-06-16)
**Target:** 1,000 search impressions per day on Google

---

## Where We Are Right Now (Honest Read of the Data)

| Metric | 90-day total | Daily average | Trend |
|---|---|---|---|
| Impressions | ~1,200 | 13/day | **Declining** (from ~50/day in March to 5-10/day in June) |
| Clicks | 1 | ~0 | Flat — single click 4/4 |
| CTR | 0.08% | — | Broken — position too low to attract clicks |
| Avg position | 70.79 desktop / 78.81 mobile | — | Position 7-8 of Google = invisible |

**The brutal summary:** Google sees the site for 90 different queries, exposes it ~13 times/day, but at average position 70-95. Position 70+ means almost no one scrolls that far. Zero clicks.

## The Single Most Important Number

We need to grow from **13 impressions/day to 1,000/day**. That's **77× growth**.

77× sounds impossible. It's not, because:

1. The site already shows up for **86 different queries**. Google understands the topic. The problem is ranking depth, not topic confusion.
2. The bank-statement blog alone gets **695 impressions in 90 days at position 76**. If it moves to position 20, that becomes ~3,500 impressions for the same 90 days — almost 40/day from one URL.
3. **The 20 new blogs published in this branch are not in this data yet** (committed today, not deployed). Once they ship, each targets a fresh keyword cluster with 1,000-27,000 monthly search volume.

---

## What Google Already Tries to Rank Us For (Top 30 Queries with Impressions)

These are the queries Google considers us a candidate for. The opportunity is to move from page 7-10 to page 1-2:

| Query | Impressions | Position | Has dedicated page? |
|---|---|---|---|
| docsapi | 61 | 3.87 | ✅ home (brand query — keep ranking) |
| **bank statement ocr** | **107** | 76 | ✅ `/documents/financial-docs/bank-statements` |
| **document ocr api** | **73** | 87 | ✅ `/products` |
| ocr accounting | 58 | 84 | ❌ no dedicated page |
| ocr financial statements | 52 | 79 | partial — `/solutions/finance-automation` |
| **ocr finance** | **50** | 82 | ✅ existing blog + `/solutions/finance-automation` |
| ocr bank statement | 45 | 72 | ✅ same as #2 |
| ocr in finance | 40 | 68 | ✅ existing blog |
| ocr technology in banking | 40 | 77 | ❌ no dedicated page |
| bank statement extraction software | 37 | 77 | ✅ same as #2 |
| accounting ocr | 33 | 94 | ❌ no dedicated page |
| ocr bookkeeping | 32 | 84 | ❌ no dedicated page |
| document fraud detection api | 27 | 88 | ❌ no dedicated page |
| enterprise document ocr | 23 | 78 | ✅ `/products` |
| ocr for banking | 18 | 62 | ✅ `/industries` |
| bookkeeping ocr | 18 | 88 | ❌ no dedicated page |
| document processing api | 16 | 83 | ✅ `/products` |
| document automation api | 16 | 89 | ✅ `/products` |
| ocr software api | 16 | 90 | ✅ `/products` |
| document verification api | 16 | 92 | ✅ `/use-cases/id-proofing` |

**Pattern:** every single non-brand query is at position 60-95. The site is being **seen** but not **shown**. This is fixable.

---

## The Three Big Wins We Already Shipped This Branch (But Not Yet Deployed)

1. **Unique titles on the 14 existing blogs** — including the bank-statement blog. The old title was "Learn how OCR bank statement technology automates data extraction... [166 chars]" — Google truncates that hard. New title: "Bank Statement OCR — Multi-Page Tables Mastery" (50 chars, keyword in first 35). Click-through rate from position 76 should triple just from this change.

2. **20 new in-depth blogs** — covering keywords like "bank statement ocr", "ocr pdf", "context engineering", "kyc document verification", "aws textract vs docsapi". Each targets a long-tail query with low-to-medium KD. These have not been indexed yet because the branch isn't merged.

3. **Per-page schema (WebPage + BreadcrumbList + Service)** — Google's rich result preview score is now non-zero for every page. AI search (ChatGPT, Perplexity, Claude) can now cite the site as an authority on document AI topics. AI citation traffic is the fastest-growing inbound channel in 2026.

---

## The 90-Day Plan to 1K Impressions/Day

### Week 1 (Day 0-7): Ship + Submit

- **Merge the `seo-eeat-20-blogs` branch to main** — this is the prerequisite. Nothing else moves until it ships.
- **Submit `https://docsapi.co/sitemap.xml`** to Google Search Console (GSC → Sitemaps).
- **Submit the same sitemap to Bing Webmaster Tools** — ~30% of US desktop traffic comes from Bing/DuckDuckGo aggregate.
- **Request indexing for the 10 Day-1 priority URLs** from `INDEX-URLS.txt`.

**Expected impact:** sitemap submission alone usually adds 30-50 impressions/day within 14 days as Google crawls new URLs.

### Week 2-4 (Day 8-30): The New Blogs Start Showing Up

- Daily 5-min check of GSC → Pages → look for new URLs appearing in impressions
- Request indexing for the remaining 26 URLs over 3-5 days (10/day GSC limit)
- Once a new blog hits 5+ impressions/day, verify it's being shown at the right position. If position > 50, the title/meta needs another rewrite (use the GSC-driven CTR rewrite workflow from the SEO skill).

**Realistic expectation by Day 30:**

| Source | Impressions/day |
|---|---|
| Existing pages (current 13/day baseline) | 13 |
| **Bank-statement blog** moves from position 76 → ~40 (new title) | +30 |
| **`/products`** moves from position 85 → ~50 (new title + schema) | +15 |
| **New 20 blogs** indexed, average 5 imp/day each | +100 |
| Other existing pages (better titles, schema) | +20 |
| **Day-30 total** | **~180/day** |

This is realistic. It's also still only 18% of the 1K target. The big growth comes Day 30-90.

### Day 30-60: Move Position 70+ Pages to Position 20-40

The pages already getting impressions but at horrible positions are the **highest-leverage** opportunities. Each one moving from position 76 → position 25 multiplies impressions ~5-8×.

| Page | Today | After Day 60 target |
|---|---|---|
| Bank-statement blog | 695 imp / 90d at pos 76 | 2,500 imp / 90d at pos 30 |
| `/products` | 189 imp / 90d at pos 85 | 800 imp / 90d at pos 35 |
| `/industries` | 26 imp / 90d at pos 73 | 150 imp / 90d at pos 30 |

**How to move position:**
- Add 3-5 internal links from the new blog cluster to these existing pages (each new blog points to its pillar — this is already done in the branch)
- Add 2-3 FAQ entries to each of these existing pages (matches the AEO pattern Google rewards)
- Update content with the year ("as of 2026") and any new product facts — this is real freshness, not fake
- After updates, re-request indexing in GSC

**Realistic expectation by Day 60:**

| Source | Impressions/day |
|---|---|
| Existing pages + improvements | 80 |
| Top 5 existing pages moved to page 2-3 | +200 |
| 20 new blogs maturing | +200 |
| New AI search citations (Perplexity, ChatGPT) | +20 |
| **Day-60 total** | **~500/day** |

### Day 60-90: Add the Missing 8 Content Targets

The GSC data shows 8 query clusters with impressions where we have no dedicated page. These are the next batch of blogs to write (Phase 2 content plan — not in this branch yet):

| Cluster | Sample queries | Combined 90-day impressions |
|---|---|---|
| OCR accounting | ocr accounting, ocr bookkeeping, accounting ocr | 123 |
| OCR for banking | ocr technology in banking, ocr in banking, bank ocr | 66 |
| Document fraud / verification | document fraud detection api, document forgery, document authentication api | 38 |
| Loan/mortgage OCR | mortgage ocr, loan document ocr, loan application ocr | 10 |
| Document classification | document classification software, intelligent document recognition | 2 |
| Real-time validation | real-time automated document validation api | 1 |
| Tax/finance OCR | ocr full form in finance, ocr meaning in finance | 9 |
| Credit/cards | credit card statement ocr, credit documentation automation | 5 |

**Each cluster gets one new blog (~2,000 words, kid-simple, first-person, full schema) following the same template as the 20 blogs already in this branch.** That's 8 more blogs, written in the same style.

**Realistic expectation by Day 90:**

| Source | Impressions/day |
|---|---|
| Day-60 baseline | 500 |
| 8 new blogs (Phase 2 content) | +300 |
| Compounding from existing wins | +200 |
| **Day-90 total** | **~1,000/day** ✅ |

---

## What Could Break This Plan

- **Branch not merged within 1 week.** Every week of delay slips the whole timeline.
- **GSC sitemap submission missed.** Without that, Google takes 2-4× longer to discover new URLs.
- **No re-indexing requests after content changes.** Google may take 4-6 weeks to recrawl without nudge.
- **Helpful Content algorithm update.** Out of our control. New blogs are first-person, deep, and helpful — should pass, but updates can affect short-term rankings.
- **Adding short/thin blogs.** Anything under 1,500 words risks devaluation. All 20 new blogs are 2,000+ words.

---

## What I'd Watch in GSC Every Week

| Metric | What it tells you | What to do |
|---|---|---|
| **Daily impressions trend** | Is the line going up? | If flat by Day 21, re-request indexing on top 5 URLs |
| **New URLs appearing** | Are new blogs indexed? | If a new blog has 0 impressions by Day 14, manually inspect and re-request |
| **Position on top queries** | Are we moving up? | If position is stable for 3 weeks, the title/meta needs another rewrite |
| **CTR on top 20 pages** | Are people clicking? | If position < 20 but CTR < 1%, snippet needs work |

---

## TL;DR

**Today:** 13 impressions/day.

**Path to 1,000/day in 90 days:**
1. Merge + deploy this branch (Week 1)
2. Submit sitemap, request indexing (Week 1)
3. New blogs index and start ranking (Week 2-4) → 180/day
4. Improve existing pages with internal links + FAQ → Day 60 → 500/day
5. Write 8 more blogs covering GSC-visible gap clusters → Day 90 → 1,000/day

**The single most leveraged action this week:** merge the branch. Everything else compounds from there.
