# DocsAPI Backlink & Authority Plan

**Created:** 2026-07-31
**Owner:** Murali (docsapi.co)
**Status:** Draft, ready to execute
**Grounded in:** seo-optimizer skill, reference 16 (link building)

---

## Why this plan exists now

Content depth got docsapi.co ranking. The GSC data proves it: 30+ pages rank, positions climbed from ~78 to ~44-57 average, first clicks arrived. But the pages with real traffic potential are stuck at the page-1 ceiling on authority, not content:

- `smarter-invoice-processing`: 1,566 impressions over 90 days, still position 88
- The entire AP OCR cluster: 500+ impressions/week at positions 85-90
- These pages have 2,000-3,000 words of genuinely good content and still cannot break page 1

The reason is off-page authority. Backlinks are roughly 13% of Google's algorithm weight and the single biggest factor separating a page-8 result from a page-1 result once content quality is equal. docsapi.co almost certainly has a very low domain rating and few referring domains, which caps every page's ceiling regardless of on-page quality.

This plan is the authority layer. It is founder-executable, mostly zero-budget, and targeted at the document-AI / OCR / fintech niche rather than generic SaaS.

---

## Current state (fill in before starting)

- [ ] Domain rating (check Ahrefs free / Moz free): ______
- [ ] Total referring domains (GSC Links report): ______
- [ ] Existing backlinks worth noting: ______
- [ ] Brand search volume for "docsapi" (GSC): a few per week, low

Action: pull the GSC Links report (Search Console left nav, bottom) and the Moz free Link Explorer number before week 1 so we have a baseline to measure against.

---

## The niche reframe

The skill's reference is written for a productivity SaaS. docsapi.co is a document-AI / OCR API for financial services and lending. The tactics are the same; the targets change. Our niche is actually strong for links because:

- Developers actively write "OCR tool comparison" and "best document API" posts
- Fintech and lending blogs cite document-automation vendors
- The dev community (Dev.to, Hashnode, HN, Reddit) discusses OCR engines constantly
- There is a real linkable-asset opportunity: original OCR accuracy benchmarks, which the blog already contains

---

## Phase 1: Foundation (Weeks 1-4, ~5 hours/week)

Goal: claim every easy, permanent link and set up the systems that pay off later. Almost all zero-effort or zero-budget.

### 1a. Directory and profile submissions (one-time, ~20-30 links)

Submit docsapi.co to every relevant directory. These are dofollow or entity-signal links, permanent, and take an afternoon total.

Developer and API directories (highest relevance):
- [ ] ProgrammableWeb / API directories
- [ ] RapidAPI (list the API)
- [ ] Public APIs lists (github.com/public-apis and forks, via PR)
- [ ] API tracker / apilist.fun
- [ ] Nordic APIs directory

SaaS and product directories:
- [ ] Product Hunt (launch or upcoming page)
- [ ] G2 (create the DocsAPI listing)
- [ ] Capterra / GetApp
- [ ] AlternativeTo (list as an alternative to ABBYY, AWS Textract, Ocrolus)
- [ ] SaaSHub
- [ ] StackShare (list the tech stack, list DocsAPI as a tool)
- [ ] Crunchbase (company profile)
- [ ] BetaList (if positioning as newer)
- [ ] Slant.co (add to "best OCR API" questions)

AI-specific directories (we have AI/document-AI features):
- [ ] There's An AI For That
- [ ] Futurepedia
- [ ] AI tool aggregators (aixploria, etc.)

OCR / document-AI specific:
- [ ] AlternativeTo entries for "Tesseract alternative", "ABBYY alternative", "AWS Textract alternative" (our blogs already target these keywords, so the listings reinforce the entity)

Expected: 20-30 referring domains, DR baseline established.

### 1b. Testimonial links (highest conversion, ~50%)

We use tools that have testimonial/customer pages. Give a genuine testimonial, get a dofollow link from a high-DR domain. This is the single highest-ROI tactic.

Tools DocsAPI's stack likely uses (confirm which, then pitch):
- [ ] Vercel (hosting) - customer stories, very high DR
- [ ] Next.js showcase
- [ ] Whatever OCR/ML infra is used (cloud provider case studies)
- [ ] Payment provider (Stripe/Dodo) customer stories
- [ ] Email provider (Resend/Postmark) customer page
- [ ] Any database/backend provider (Supabase, Neon, etc.)
- [ ] Tailwind / shadcn showcase

Template (from the skill, adapted):
```
Subject: Testimonial for [Tool] from a happy customer

Hi [Team],

I'm the founder of DocsAPI, a document-AI and OCR API for financial
services. We have been building on [Tool] since [timeframe] and it has
been [specific positive impact].

I'd be glad to provide a testimonial for your site:

"[2-3 sentence genuine testimonial]"

Happy to have it featured with a link to docsapi.co.

Best,
Murali
```

Expected: 3-6 links, DR 60-90 domains, permanent.

### 1c. Set up the listening and outreach systems (one-time)

- [ ] Google Alerts for "docsapi", "docsapi.co", "DocsAPI" (brand mention reclamation)
- [ ] Profiles on journalist-request platforms: Source of Sources (SOS), Qwoted, Featured, Help a B2B Writer. List expertise as: OCR, document AI, IDP, KYC/AML document verification, fintech document automation, lending underwriting automation.

Expected: 0 links now, but the pipeline for Phase 2.

**Phase 1 target: 25-35 referring domains, DR moves off zero.**

---

## Phase 2: Content-driven links + outreach (Weeks 5-12, ~6-8 hours/week)

Goal: earn editorial links from the document-AI and fintech niche.

### 2a. Turn the OCR benchmark into a linkable asset (highest long-term ROI)

The blog already contains original benchmark data: the 500-document PaddleOCR vs Tesseract test, the 1,200-document Docling vs LlamaParse test, the 200-invoice AP OCR trial. Original data is the most linkable content type that exists, because developers and bloggers cite benchmark numbers.

Action:
- [ ] Package the benchmarks as a standalone, citable "2026 OCR Accuracy Benchmark" page or report, with a clear methodology section and shareable comparison charts.
- [ ] Add an explicit "cite this" line and an embeddable chart.
- [ ] Pitch it to developers writing OCR comparison content (see 2b).

Why this works: "OCR accuracy comparison" is a query developers research before choosing a tool, and there is very little independent benchmark data. Being the source of the number is what earns the link.

### 2b. Developer-community distribution (entity signal + some dofollow)

Our niche lives on developer platforms. These build entity authority (which matters for AI search) and drive traffic; some are dofollow.

- [ ] Dev.to: publish a technical version of the OCR benchmark or "how we built multi-page table stitching" (dofollow on Dev.to)
- [ ] Hashnode: cross-post technical content (dofollow)
- [ ] Hacker News: "Show HN" for the API or a "Show HN" for the benchmark data (nofollow but very high entity signal, can drive a spike of natural links)
- [ ] Reddit: r/MachineLearning, r/programming, r/webdev, r/datascience, r/fintech. Provide genuine value in OCR/document-processing threads, mention DocsAPI only when directly relevant. Never spam. (nofollow but traffic + mentions)
- [ ] Lobsters, if the content is technical enough

### 2c. Guest posts (Tier 2-3 in our niche)

Pitch guest posts to document-AI, developer, and fintech blogs. Precision over volume: 2-3 per month.

Target publications for docsapi.co:
- Dev-focused: Dev.to (also accepts originals), Nordic APIs blog, API-focused newsletters
- Fintech: fintech blogs that cover lending automation and KYC
- OCR/IDP adjacent: blogs of complementary (non-competing) tools
- Founder/SaaS: Indie Hackers (building-in-public post about the OCR pipeline)

Pitch angle: lead with the benchmark data or a specific technical lesson (multi-page table stitching, why generic OCR fails on bank statements). Data-led pitches convert best.

### 2d. Broken link building (15-25% conversion)

Many OCR tools shut down (older OCR SaaS, deprecated APIs). Find dead links on "best OCR tools" roundups and offer our relevant blog as the replacement.

- [ ] Find "best OCR API" / "OCR tools" roundups with 404 outbound links (Check My Links Chrome extension)
- [ ] Offer the matching DocsAPI blog (e.g., our Textract or ABBYY comparison) as the replacement
- [ ] 20 emails/month

### 2e. Resource page outreach

Google operators for our niche:
```
"OCR tools" inurl:resources
"document processing" intitle:"resources"
"best OCR api" intitle:"tools"
site:.edu "OCR" resources
"intelligent document processing" inurl:links
```
- [ ] 15 emails/month suggesting DocsAPI for relevant lists

### 2f. Brand mention reclamation (30-50% conversion)

As Google Alerts surface unlinked "DocsAPI" mentions, email and ask for a link. Highest conversion because they already mentioned us.

**Phase 2 target: 8-15 new referring domains/month, DR climbing to 20-30.**

---

## Phase 3: Scale and compound (Month 4+, ~8-10 hours/week)

- [ ] Quarterly "State of OCR Accuracy" or "State of Document AI" benchmark report (refresh the numbers, re-pitch). Each report is a fresh link magnet.
- [ ] Build one free tool as a passive link magnet: an OCR accuracy comparison tool, a "which OCR should I use" decision tool, or a document-type identifier demo. Free tools earn links from roundups passively.
- [ ] Integration/partner links: if DocsAPI integrates with accounting systems (QuickBooks, Xero, NetSuite) or lending platforms, get listed in their app directories (dofollow, permanent).
- [ ] G2 / Capterra reviews: gather real customer reviews (review-site pages rank and link).
- [ ] Digital PR: pitch fintech and dev journalists with the benchmark data when there is a news hook.

**Phase 3 target: 15-30 new referring domains/month, DR 35-50.**

---

## Priority stack (ranked by ROI for docsapi.co)

1. **Testimonial links** - highest conversion, easiest, high-DR domains. Start week 1.
2. **Directory + API-directory submissions** - one-time, foundational, 20-30 links.
3. **The OCR benchmark as a citable asset** - our unique data, highest long-term ROI.
4. **Developer-community distribution** (Dev.to, HN, Reddit) - entity signals for AI search, traffic.
5. **Brand mention reclamation** - very high conversion as mentions appear.
6. **Broken link building** on OCR roundups - good conversion, niche-specific.
7. **Guest posts** (data-led) on dev/fintech blogs - reliable, builds relationships.
8. **Resource page outreach** - steady trickle.
9. **Journalist outreach** (SOS/Qwoted/Help a B2B Writer) - high-DR editorial links.
10. **Free tool** - passive magnet once built.
11. **Integration directory links** - as the product matures.

---

## The AI-search angle (do not skip)

For AI search (ChatGPT, Perplexity, Google AI Overviews), brand mentions now matter roughly as much as backlinks. Every time "DocsAPI" appears next to "OCR API" or "document AI" or "bank statement OCR" in a trusted source, it teaches AI systems what DocsAPI is. So:

- Pair every mention with a consistent descriptor: "DocsAPI, a document-AI and OCR API for financial services."
- Get into structured databases AI systems weight heavily: G2, Crunchbase, Product Hunt, AlternativeTo.
- The blog's markdown twins (already shipped) help AI crawlers cite us; the benchmark data gives them a specific number to cite.

Unlinked mentions still build entity authority. Chase the mention first, convert to a link second.

---

## Metrics to track (monthly)

| Metric | Source | 6-month target |
|---|---|---|
| Referring domains | GSC Links / Moz | 50-80 |
| Domain rating | Ahrefs / Moz free | 25-35 |
| New referring domains/month | manual | 10-20 by month 4 |
| % from dev/fintech/OCR sites | manual audit | over 50% |
| Brand mentions (linked + unlinked) | Google Alerts | growing MoM |
| Position of `smarter-invoice` | GSC | 88 to under 40 |
| Total impressions/day | GSC | current ~200 to 500+ |

The leading indicator that this is working: the high-impression stuck pages (smarter-invoice at pos 88, the AP cluster) start climbing. Content cannot move them further; links can.

---

## Budget

Zero-budget path (founder time only): the entire Phase 1 and most of Phase 2 cost nothing but ~5-8 hours/week. The only paid tools worth adding when revenue allows:

| Tool | Cost | When |
|---|---|---|
| Ahrefs Lite | $99/mo | Month 3+ (competitor backlink gaps, tracking) |
| Hunter.io | $49/mo | Month 2+ (finding outreach emails) |
| Mention / BrandMentions | $29-49/mo | Month 4+ |

Until then, Google Search Console (free), Moz free tier, and Check My Links (free) cover the essentials.

---

## What I (Claude) can do vs what needs the founder

I can draft: the benchmark asset page, guest post drafts, all outreach email copy, the Dev.to/Hashnode technical posts, the free-tool spec, and the directory submission copy. I can also build the free tool and the citable benchmark page in the codebase.

The founder must do: send the outreach emails (from a real person), create the directory/review profiles (need a login and a human), respond to journalist queries, and participate authentically in communities. Links come from relationships and real accounts, which cannot be automated without looking spammy.

Suggested first move: I build the citable "2026 OCR Accuracy Benchmark" asset page from the data already in the blogs, and draft the testimonial + directory outreach copy. The founder spends one afternoon on directory submissions and testimonials. That combination produces the first 25-35 referring domains within two weeks.
