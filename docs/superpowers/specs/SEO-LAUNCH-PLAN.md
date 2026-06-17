# DocsAPI SEO Launch Plan

**Date created:** 2026-06-17
**Owner:** Murali
**Domain:** https://docsapi.co
**Branch shipping the work:** `seo-eeat-20-blogs`

This plan covers everything that happens AFTER the PR is merged: indexing, monitoring, refresh cadence, and what to do in the first 90 days.

---

## Day 0 — Pre-deploy Checklist (do BEFORE merging the PR)

| Check | How | Why |
|---|---|---|
| Confirm prod domain is `docsapi.co` (not .com) | DNS check | Avoids canonical/sitemap pointing to wrong domain |
| Confirm Vercel/host project is connected to `docsapi.co` | Vercel dashboard | Otherwise the deploy serves no one |
| `npm run build` passes locally | Terminal | Catches issues before deploy |
| GTM container `GTM-MMLTFQL4` and GA4 `G-K5PD9TF5DE` still valid | GTM/GA dashboards | Tracking won't work otherwise |
| robots.txt deploys to `https://docsapi.co/robots.txt` | After deploy: visit the URL | If 404s, search bots can't read it |
| sitemap.xml deploys to `https://docsapi.co/sitemap.xml` | After deploy: visit the URL | Same |
| `https://docsapi.co/llms.txt` reachable | After deploy: visit | AI search engines look here |

---

## Day 1 — Deploy and Verify

### 1. Merge PR + deploy
Merge `seo-eeat-20-blogs` → `main` on GitHub. Vercel auto-deploys.

### 2. Smoke-test live URLs (manual)
Pick 3 URLs and visit each in incognito:
- `https://docsapi.co` — title says "DocsAPI — Document AI & OCR API for SMB Lending"
- `https://docsapi.co/resources/blogs/make-pdf-searchable` — blog renders, FAQ accordion works
- `https://docsapi.co/author/nupura-ughade` — author page renders with avatar + posts grid

If any of those 404 or look broken, stop and fix before requesting indexing.

### 3. Validate JSON-LD on 3 pages
Paste each URL into the [Google Rich Results Test](https://search.google.com/test/rich-results):
- Home → should detect Organization + WebSite + WebApplication
- `/resources/blogs/make-pdf-searchable` → should detect BlogPosting + BreadcrumbList + FAQPage
- `/author/nupura-ughade` → should detect Person + ProfilePage

Fix any "missing required property" errors before requesting indexing.

### 4. Submit sitemap to Google Search Console
- Go to https://search.google.com/search-console
- Pick the docsapi.co property (or add it if not yet verified)
- Sitemaps → Add new sitemap → enter `sitemap.xml`
- Submit
- Same for Bing: https://www.bing.com/webmasters/sitemaps

### 5. Submit sitemap to IndexNow
IndexNow gets you Bing + Yandex + Seznam indexing for free. Two ways:
- **Easy:** use the [IndexNow tool](https://www.bing.com/indexnow) to submit your sitemap URL
- **Better:** add an IndexNow key file to `/public/` and ping the API from your deploy hook

---

## Day 2-7 — Indexing Requests

Google Search Console's "Request Indexing" feature has a soft daily limit (~10 URLs per property per day). Don't waste it on URLs Google already knows. Use the priority order below.

### Priority Tier 1 — Submit these FIRST (Day 2)
Highest value. Submit one per slot. These are new pages or pages with fresh content.

```
https://docsapi.co
https://docsapi.co/products
https://docsapi.co/use-cases
https://docsapi.co/pricing
https://docsapi.co/author/nupura-ughade
https://docsapi.co/resources/blogs
https://docsapi.co/resources/blogs/document-detection-before-ocr
https://docsapi.co/resources/blogs/make-pdf-searchable
https://docsapi.co/resources/blogs/scanned-pdf-searchable
https://docsapi.co/resources/blogs/readable-pdf-vs-image-pdf
```

*Why these first:* the 4 blogs in this list are the lowest-KD picks (KD 13-34). They rank fastest. The pillars and author page anchor the cluster's E-E-A-T.

### Priority Tier 2 — High-volume / high-intent (Day 3)
```
https://docsapi.co/resources/blogs/context-engineering-document-ai
https://docsapi.co/resources/blogs/kyc-document-verification
https://docsapi.co/resources/blogs/aml-document-checks
https://docsapi.co/resources/blogs/data-normalization-extracted-documents
https://docsapi.co/resources/blogs/ocr-pdf-honest-guide
https://docsapi.co/resources/blogs/docling-vs-llamaparse-vs-docsapi
https://docsapi.co/resources/blogs/know-your-customer-documents
https://docsapi.co/resources/blogs/optical-character-reader-2026
https://docsapi.co/resources/blogs/pdf-parser-online
https://docsapi.co/resources/blogs/vlm-vs-ocr
```

### Priority Tier 3 — Commercial intent + remaining new blogs (Day 4)
```
https://docsapi.co/resources/blogs/aws-textract-vs-docsapi
https://docsapi.co/resources/blogs/abbyy-finereader-alternative
https://docsapi.co/resources/blogs/paddleocr-vs-tesseract-vs-docsapi
https://docsapi.co/resources/blogs/pdf-text-recognition
https://docsapi.co/resources/blogs/free-online-ocr-tools
https://docsapi.co/resources/blogs/revenue-cycle-management-document-intake
```

### Priority Tier 4 — Existing 14 blogs (Day 5-7, optional)
These are probably already indexed. Re-request only if you want Google to re-crawl them after the `dateModified` change. Otherwise just let the natural recrawl handle it.

```
https://docsapi.co/resources/blogs/revolutionizing-document-management-with-ocr-technology
https://docsapi.co/resources/blogs/smarter-invoice-processing-the-ocr-advantage-for-finance-departments
https://docsapi.co/resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now
https://docsapi.co/resources/blogs/idp-vs-ocr-understanding-the-key-differences-for-automation-success
https://docsapi.co/resources/blogs/understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies
https://docsapi.co/resources/blogs/intelligent-document-processing-the-future-of-automated-data-extraction
https://docsapi.co/resources/blogs/passport-ocr-revolutionizing-identity-verification-with-automated-data-extraction
https://docsapi.co/resources/blogs/ocr-in-finance-transforming-document-processing-for-modern-financial-operations
https://docsapi.co/resources/blogs/passport-ocr-revolutionizing-document-processing-with-intelligent-solutions
https://docsapi.co/resources/blogs/legal-document-automation-the-complete-guide-for-modern-law-firms
https://docsapi.co/resources/blogs/transforming-financial-services-the-complete-guide-to-document-automation
https://docsapi.co/resources/blogs/ocr-bank-statement-technology-revolutionizing-financial-data-processing
https://docsapi.co/resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions
https://docsapi.co/resources/blogs/the-ultimate-guide-to-small-business-lending-automation-revolutionizing-sba-loans-and-financing
```

### What "Request Indexing" actually does
- Tells Google "look at this URL soon" (priority crawl, usually within 24-72 hours)
- Does NOT guarantee ranking — only that Google sees the page
- Re-requesting an indexed URL is rarely needed; do it only after a real content change

---

## Week 2 — Monitor and React

### Daily check (5 min/day)
- GSC → Performance → Pages → filter to last 7 days
- Look for new URLs appearing in impressions
- If a blog has 0 impressions after 7 days, the page probably isn't indexed yet (re-request)

### Weekly check (30 min/week)
- GSC → Coverage → make sure no "Crawled — currently not indexed" or "Discovered — currently not indexed" errors on new blogs
- GSC → Performance → Queries → look for which keywords are starting to show impressions
- Search Console → URL Inspection → spot-check 2-3 new URLs to confirm they're "URL is on Google"

### Key metrics to track (in a simple sheet)

| Metric | How to read it | What to do |
|---|---|---|
| **Impressions per blog (7-day)** | GSC → Performance → Pages | Aim for any impressions in week 2; meaningful impressions by week 4 |
| **CTR per blog** | GSC → Performance → Pages | <1% with position <10 = bad meta. Rewrite title/description. |
| **Average position per blog** | GSC → Performance → Pages | Position 11-20 in week 4 = expand content + add internal links |
| **Sitemap coverage** | GSC → Sitemaps → submitted vs indexed | All 47 URLs should be indexed within 4 weeks; chase the gap |
| **Core Web Vitals** | GSC → Core Web Vitals | LCP <2.5s, INP <200ms, CLS <0.1. Fix any "poor" pages immediately. |

---

## Month 2 — Content Refresh and Internal Linking Tuning

### Identify winners and losers
- Pull GSC export of all 34 blog URLs after 30-40 days
- Sort by impressions × CTR
- Top 5 by impressions: invest in (refresh, expand, add internal links pointing TO them)
- Bottom 5 by impressions: diagnose (low impressions = ranking problem, not CTR problem)

### What to do for position 11-20 pages
- Expand content (add a new H2 with 200-300 words)
- Add 2-3 internal links from cluster siblings TO the weak page
- Update `dateModified` and `last_updated` only after real content change
- Re-request indexing

### What to do for position 1-10 with low CTR
- Rewrite title with a number, year, or specific outcome
- Rewrite meta description with a stat + promise + specific outcome
- DON'T touch the content itself — ranking is fine, snippet is the issue
- Re-request indexing

---

## Month 3 — Backlinks and Authority

Indexing is the floor. Backlinks are the ceiling. After your content has been indexed for 60+ days:

### Easy wins
- Submit to relevant directories: G2, Capterra, SourceForge, AlternativeTo, GitHub Marketplace
- List on Product Hunt (one-time, big impression spike)
- Get on aggregator newsletters in fintech/OCR

### Medium wins
- Guest posts on 3-5 fintech / dev blogs (one per month)
- Comparison pages on competitor alternatives (we already have 3 — AWS, ABBYY, PaddleOCR)
- Free tools / calculators that earn natural backlinks

### Hard wins
- Original research with a public report (e.g., "OCR Accuracy Benchmark 2026")
- Open-source contributions back to Tesseract, PaddleOCR
- Industry conference talks → speaker bio links

---

## Tools You'll Need

| Tool | Purpose | URL |
|---|---|---|
| Google Search Console | Monitor index, queries, CTR | search.google.com/search-console |
| Bing Webmaster Tools | Same for Bing | bing.com/webmasters |
| Google Rich Results Test | Validate JSON-LD | search.google.com/test/rich-results |
| PageSpeed Insights | Core Web Vitals per page | pagespeed.web.dev |
| Schema.org Validator | Independent JSON-LD check | validator.schema.org |
| IndexNow | Push to Bing/Yandex/Seznam | bing.com/indexnow |

---

## Common Mistakes to Avoid

1. **Requesting indexing on every URL every week.** Waste of the daily quota. Re-request only after real content changes.
2. **Updating `dateModified` without changing content.** Google detects fake freshness signals and demotes pages over time.
3. **Buying backlinks.** Almost certainly hurts in 2026. Google's Spam Brain is aggressive.
4. **Stuffing keywords retroactively.** Adding the target keyword 20 more times across the page hurts more than it helps. Semantic relevance beats density.
5. **Ignoring CTR.** A page on position 5 with 0.3% CTR is failing. Rewrite the snippet, not the content.
6. **Treating the existing 14 blogs as priority.** They're already indexed; the new 20 are where the growth comes from.

---

## 90-Day Target

Realistic numbers for a fresh content cluster on a domain with existing authority:

| Week | Indexed blogs | Impressions/day | Clicks/day |
|---|---|---|---|
| Week 1 | 5-10 | <50 | 0-2 |
| Week 2 | 15-25 | 100-300 | 5-15 |
| Week 4 | 30-34 | 500-1,500 | 25-60 |
| Week 8 | 34 | 2,000-5,000 | 100-200 |
| Week 12 | 34 | 4,000-10,000 | 200-500 |

If you hit these targets, the cluster is healthy. If you're significantly below, the diagnosis is usually one of: indexing problem (re-request), thin content (expand), weak CTR (rewrite snippets), or domain trust (build backlinks).

---

## Quick Reference — All URLs in One List

The flat list of every URL to submit is in `docs/superpowers/specs/INDEX-URLS.txt`. Copy-paste-friendly.
