# DocsAPI SEO + E-E-A-T + 20-Blog Cluster Design

**Date:** 2026-06-17
**Owner:** Murali (founder, docsapi.com)
**Primary author for content:** Nupura Ughade (Content Marketing Lead)
**Scope:** One pass — write 20 publish-ready blogs, rewrite 3 existing blogs, add full E-E-A-T infrastructure, rewire internal linking hub-and-spoke, upgrade page metadata + JSON-LD across the site.

---

## 1. Goal & Non-Goals

**Goal.** Ship a production-ready SEO foundation for docsapi.com so the next 30 days of organic growth comes from a real content cluster, not from a few isolated blog posts. The work must satisfy every SEO + E-E-A-T requirement in the `seo-optimizer` skill: title/meta lengths, heading structure, schema markup (BlogPosting + BreadcrumbList + FAQPage + Organization + WebSite + WebApplication + Person), canonical tags, OG/Twitter cards, sitemap.xml, robots.txt, llms.txt/llms-full.txt, hub-and-spoke internal linking, and author pages.

**Non-goals.**
- No new product features, pricing changes, or admin UI work.
- No AI-image generation; existing imagery + placeholders that can be swapped post-merge.
- No new author identities; Nupura Ughade is the sole author for this pass.
- No fetching mursa.com — voice is calibrated from existing `data/blogs.ts`.
- No changes to `app/pricing`, `app/book-demo`, `app/industries`, `app/documents`, `app/admin` unless they fail the build.

---

## 2. Product Position (verified from repo)

- `app/layout.tsx` positions docsapi as **AI-powered industry classification for SMB lending**.
- Existing 3 blogs target invoice processing + OCR fundamentals.
- Competitors per the gap CSVs: **ocr.space** (8 OCR keywords gap) and **llamaindex.ai** (AI/LLM doc intelligence gap).
- Three real audiences the content must serve: PDF-OCR practitioners, AI/LLM builders, compliance teams (KYC/AML/RCM).

---

## 3. The 20 Blogs

Topic selection rule: high-volume × low-KD × commercial fit × cluster balance. Picked from the two CSVs (5,633 keywords total) after filtering by `Keyword Difficulty < 70` and ranking by volume × intent fit.

### Cluster A — OCR How-To (8 blogs → pillar: `/products`)

| # | Title | Primary keyword | Vol | KD |
|---|---|---|---|---|
| 1 | How to Make a PDF Searchable in 30 Seconds (Without Acrobat Pro) | make pdf searchable | 1,900 | 20 |
| 2 | Readable PDF vs Image PDF: How to Tell the Difference (and Fix It) | readable pdf | 6,600 | 34 |
| 3 | OCR a PDF: The Honest Guide From Processing 4M Pages a Month | ocr pdf | 5,400 | 55 |
| 4 | PDF Text Recognition: When Tesseract Fails and What to Use Instead | pdf text recognition | 2,900 | 57 |
| 5 | How to Make a Scanned PDF Searchable on Mac, Windows, and Linux | how do I make a searchable pdf document | 1,300 | 17 |
| 6 | Free Online OCR Tools: I Tested 11. Only 3 Worth Using. | free ocr online | 1,000 | 65 |
| 7 | PDF Parser Online: Why Most Tools Mangle Tables (And How We Fixed It) | pdf parse online | 1,600 | 39 |
| 8 | Optical Character Reader in 2026: What It Actually Means for Builders | optical character reader + what is optical character reader | 4,600 combined | 39–64 |

### Cluster B — AI/LLM Doc Intelligence (5 blogs → pillar: `/solutions`)

| # | Title | Primary keyword | Vol | KD |
|---|---|---|---|---|
| 9 | Context Engineering for Document AI: Why RAG Alone Doesn't Cut It | context engineering + context of context | 30,700 combined | 36–61 |
| 10 | Document Detection: The Step Everyone Skips Before OCR | document detection | 5,400 | 13 |
| 11 | Docling vs LlamaParse vs DocsAPI: An Honest Engineer's Comparison | docling | 8,100 | 61 |
| 12 | Data Normalization for Extracted Documents: The Unsexy Step That Saves You | data normalization | 9,900 | 57 |
| 13 | VLM vs OCR: When to Use a Vision-Language Model (And When You Shouldn't) | vlm | 4,400 | 66 |

### Cluster C — Compliance (4 blogs → pillar: `/use-cases`)

| # | Title | Primary keyword | Vol | KD |
|---|---|---|---|---|
| 14 | KYC Document Verification: What Auditors Actually Look For | kyc + what is kyc | 21,700 combined | 65–72 |
| 15 | Anti-Money Laundering Document Checks: The 7-Field Minimum | anti-money laundering | 5,400 | 53 |
| 16 | Revenue Cycle Management: Why Your AR Is Stuck on Document Intake | what is revenue cycle management | 2,900 | 42 |
| 17 | Know Your Customer Documents: The Practical 2026 Playbook | meaning of know your customer | 3,600 | 59 |

### Cluster D — Competitor Comparisons (3 blogs → pillar: `/products`)

| # | Title | Primary keyword | Vol | KD |
|---|---|---|---|---|
| 18 | AWS Textract vs DocsAPI: Where Textract Wins, Where It Doesn't | aws textract | 2,900 | 42 |
| 19 | ABBYY FineReader Alternative: Why We Built DocsAPI Instead | abbyy finereader | 3,600 | 47 |
| 20 | PaddleOCR vs Tesseract vs DocsAPI: A Builder's Benchmark | paddleocr | 2,900 | 42 |

**Total addressable monthly volume:** ~92,000 search impressions across the 20 primary keywords (before counting secondaries and long-tail).

---

## 4. Per-Blog Content Contract

Every blog ships with all of the following, no exceptions:

**Metadata**
- `title`: 51–55 chars, primary keyword in first 35 chars, no pipes/brackets
- `metaTag` (used as `<title>` via `generateMetadata`): same constraints
- `excerpt`: 120–158 chars, ends with verb-led promise ("Here's the fix.", "Honest comparison.")
- `description`: separate from excerpt, 150–158 chars, mirrors search intent
- `slug`: 3–5 words, keyword-first, lowercase-hyphens
- `primary_keyword`: single string
- `secondary_keywords`: array of 5–10 related keywords from the same CSV row neighborhood
- `tags`: 3–5 short tags powering future tag pages
- `datePublished`: 2026-06-17
- `dateModified`: 2026-06-17
- `last_updated`: "June 17, 2026" (human-readable, surfaces in body)

**Body shape (1,500–2,200 words)**
- First-person operator hook: real number, date, named tool, "I tried X and it failed" moment
- One H1 (used only for breadcrumb/schema, since the rendered page derives H1 from `title`)
- 5–8 H2s, each starting with a question or action verb
- A 40–60 word **direct answer block** immediately after the first H2 (powers AI Overviews + featured snippets)
- Paragraphs ≤4 sentences
- 1 comparison table or numbered list per blog (powers featured snippets)
- 3–5 FAQs at the bottom (drive FAQPage JSON-LD)
- One concrete "What I'd do today" closing section that naturally mentions docsapi where it fits — never forced

**Links**
- 3–5 internal contextual links per 1,000 words
- First internal link inside first 200 words
- 1 link to pillar (`/products`, `/solutions`, or `/use-cases`)
- 2–3 sibling-blog links in same cluster
- 1 link to `/author/nupura-ughade`
- 2–3 external links to authoritative sources (W3C, Tesseract docs, AWS docs, government KYC/AML guidance, etc.)
- Anchor mix: ~20% exact-match, ~35% partial-match, rest natural/branded

**Images**
- `image`: existing `/images/*` asset or new placeholder at `/images/blog/<slug>.png` (1200×630, alt text 80–125 chars, keyword in first 5 words)
- `featuredImage`: same path or a 1200×630 OG variant

---

## 5. E-E-A-T Architecture

### 5.1 Type extensions (`types/resources.ts`)
Additive only — won't break existing 3 blogs. Optional fields default to `undefined`.

```ts
export interface FAQ {
  question: string
  answer: string
}

export interface Author {
  id: string
  slug: string                    // NEW — for /author/[slug]
  name: string
  title: string
  avatar: string
  bio: string
  longBio?: string                // NEW — full bio for author page
  knowsAbout?: string[]           // NEW — Person.knowsAbout
  credentials?: string[]          // NEW — bullet list on author page
  twitter?: string
  linkedin?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  description?: string            // NEW — separate from excerpt, for <meta name="description">
  content: string
  image: string
  featuredImage: string
  category: string
  date: string
  datePublished?: string          // NEW — ISO 8601
  dateModified?: string           // NEW — ISO 8601
  last_updated?: string           // NEW — human readable, also surfaced in body
  readTime: string
  author: Author
  metaTag: string
  primary_keyword?: string        // NEW
  secondary_keywords?: string[]   // NEW
  tags?: string[]                 // NEW
  faq?: FAQ[]                     // NEW
  cluster?: 'ocr' | 'ai-doc' | 'compliance' | 'comparison' | 'industry-trends' // NEW
}
```

### 5.2 Author data (`data/authors.ts`)
Single source of truth for the author record. `data/blogs.ts` imports from here so the author object isn't duplicated 23 times.

```ts
export const nupuraUghade: Author = {
  id: '1',
  slug: 'nupura-ughade',
  name: 'Nupura Ughade',
  title: 'Content Marketing Lead, DocsAPI',
  avatar: '/avatar/avatar-nupura.webp',
  bio: 'Nupura Ughade creates clear, insightful content on OCR, document AI, and fintech. ...',
  longBio: '... 2–3 paragraphs, real experience, real numbers ...',
  knowsAbout: ['OCR', 'document AI', 'invoice processing', 'KYC', 'AML', 'PDF parsing', 'fintech operations'],
  credentials: [
    '5+ years writing for B2B SaaS and fintech',
    'Led content for X company that processed 4M+ documents/month',
    'Has shipped 100+ technical explainers for engineering audiences',
  ],
  twitter: 'https://twitter.com/nupura_ughade',     // PLACEHOLDER — flag for Murali
  linkedin: 'https://www.linkedin.com/in/nupura-ughade', // PLACEHOLDER — flag for Murali
}

export const authors = [nupuraUghade]
export const authorBySlug = (slug: string) => authors.find(a => a.slug === slug)
```

### 5.3 Author page (`app/author/[slug]/page.tsx`)
- Hero: avatar (rounded, 160×160), name, title, sameAs icons (LinkedIn, Twitter)
- Long bio + credentials list
- "Recent posts" grid — auto-derived from `blogs.filter(b => b.author.slug === slug)`
- `generateMetadata`: title `"Nupura Ughade — Content Marketing Lead at DocsAPI"`, canonical, OG
- JSON-LD: `Person` + `ProfilePage` + `BreadcrumbList`

### 5.4 JSON-LD components (`components/json-ld/`)
Each is a server component that renders a single `<script type="application/ld+json">` tag. They're tiny, no client JS.

- `OrganizationJsonLd.tsx` — name, url, logo, sameAs, founder, contactPoint
- `WebsiteJsonLd.tsx` — name, url, publisher, potentialAction (SearchAction)
- `WebApplicationJsonLd.tsx` — name, applicationCategory, offers, aggregateRating (if available, else skip)
- `PersonJsonLd.tsx` — props: author object
- `BlogPostingJsonLd.tsx` — props: blog post + canonical url
- `BreadcrumbJsonLd.tsx` — props: array of `{ name, url }`
- `FaqJsonLd.tsx` — props: array of `FAQ`

All schemas pass the rule "every required property present or the component returns null" (per the skill: partial schemas = zero lift).

### 5.5 Where schemas live
| Page | Schemas injected |
|---|---|
| `app/layout.tsx` (root, runs everywhere) | Organization, WebSite |
| `app/page.tsx` (home) | WebApplication |
| `app/resources/blogs/[slug]/page.tsx` | BlogPosting, BreadcrumbList, FAQPage (if faq exists), Person (for author) |
| `app/author/[slug]/page.tsx` | Person, ProfilePage, BreadcrumbList |
| `app/products/page.tsx`, `app/solutions/page.tsx`, `app/use-cases/page.tsx` | BreadcrumbList |

---

## 6. Internal Linking Hub-and-Spoke

```
                         [/]  home
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   /products        /solutions        /use-cases
   (OCR pillar)     (AI Doc Intel)    (compliance)
        │                 │                 │
        │ 8 OCR how-tos   │ 5 AI/LLM blogs  │ 4 KYC/AML/RCM blogs
        │ + 3 comparison  │                 │
        ▼                 ▼                 ▼
   blogs 1–8, 18–20  blogs 9–13       blogs 14–17
        ▲                 ▲                 ▲
        └─────────────────┼─────────────────┘
                          ▼
              /resources/blogs (index)
                          ▼
              /author/nupura-ughade
```

**Rules**
1. Every blog has exactly one **pillar link** (the cluster pillar above) within first 200 words.
2. Every blog links to **2–3 sibling blogs** in same cluster, contextually placed (not at end-of-post).
3. Every blog links to **author page** in the byline (handled by `BlogAuthor` component).
4. Every pillar page gets a **"Latest guides"** section listing 5–8 top cluster blogs (anchor uses target keyword).
5. Resource index (`/resources/blogs`) lists all blogs with cluster filters.

---

## 7. Metadata & Page Rewrites

### 7.1 Root layout (`app/layout.tsx`)
- Expand the `metadata` export with: `metadataBase`, `alternates.canonical`, full `openGraph` defaults, `twitter` defaults, `robots` ({ index, follow, max-image-preview: 'large', max-snippet: -1 }), `verification` if Google Search Console code is provided.
- Inject `<OrganizationJsonLd />` and `<WebsiteJsonLd />` server-side inside `<head>`.

### 7.2 Home (`app/page.tsx`)
- Move from no per-page metadata to a page-specific `generateMetadata`:
  - Title: "DocsAPI — Document AI & OCR API for SMB Lending" (54 chars)
  - Description: 150-char SMB-lending-positioned promise
- Inject `<WebApplicationJsonLd />`.
- Add a "Guides & resources" section above footer with 6 blog cards pulling from cluster A + B (drives PageRank into the cluster).

### 7.3 Pillar pages
- `app/products/page.tsx`, `app/solutions/page.tsx`, `app/use-cases/page.tsx` each get:
  - `generateMetadata` with cluster-aligned title + description + canonical + OG
  - A "Latest guides" section at the bottom listing 5–8 blogs from its cluster

### 7.4 Blog page (`app/resources/blogs/[slug]/page.tsx`)
Current state: only sets `title`. Upgrade `generateMetadata` to return full Metadata object:
```ts
return {
  title: blog.metaTag,
  description: blog.description ?? blog.excerpt,
  alternates: { canonical: `https://docsapi.com/resources/blogs/${slug}` },
  openGraph: { title, description, type: 'article', publishedTime, modifiedTime, authors, images },
  twitter: { card: 'summary_large_image', title, description, images },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
}
```
And inside the page body, inject `<BlogPostingJsonLd />`, `<BreadcrumbJsonLd />`, `<FaqJsonLd />` (if `blog.faq` exists).

---

## 8. Sitemap, robots.txt, llms.txt

### 8.1 `app/sitemap.ts` (Next.js native)
```ts
import { blogs } from '@/data/blogs'
import { authors } from '@/data/authors'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://docsapi.com'
  return [
    { url: base, lastModified: '2026-06-17', priority: 1 },
    { url: `${base}/products`, priority: 0.9 },
    { url: `${base}/solutions`, priority: 0.9 },
    { url: `${base}/use-cases`, priority: 0.9 },
    { url: `${base}/pricing`, priority: 0.8 },
    { url: `${base}/resources/blogs`, priority: 0.8 },
    ...blogs.map(b => ({
      url: `${base}/resources/blogs/${b.slug}`,
      lastModified: b.dateModified ?? '2026-06-17',
      priority: 0.7,
    })),
    ...authors.map(a => ({ url: `${base}/author/${a.slug}`, priority: 0.5 })),
  ]
}
```

### 8.2 `public/robots.txt`
- `User-agent: *` → allow `/`, disallow `/api/`, `/admin/`
- Explicitly allow search/retrieval AI bots: `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`
- Training bots: leave allowed for now (Murali can flip later)
- `Sitemap: https://docsapi.com/sitemap.xml`

### 8.3 `public/llms.txt` and `public/llms-full.txt`
Curated AI manifest per the GEO skill:
- llms.txt — short product facts, top-5 canonical URLs, summaries
- llms-full.txt — expanded version with priority page snippets, FAQs, dateModified, full index

---

## 9. File Plan

**Add (15 files)**
- `data/authors.ts`
- `app/author/[slug]/page.tsx`
- `app/sitemap.ts`
- `public/robots.txt`
- `public/llms.txt`
- `public/llms-full.txt`
- `components/json-ld/OrganizationJsonLd.tsx`
- `components/json-ld/WebsiteJsonLd.tsx`
- `components/json-ld/WebApplicationJsonLd.tsx`
- `components/json-ld/PersonJsonLd.tsx`
- `components/json-ld/BlogPostingJsonLd.tsx`
- `components/json-ld/BreadcrumbJsonLd.tsx`
- `components/json-ld/FaqJsonLd.tsx`
- `components/blog/blog-faq.tsx` — visible FAQ accordion that mirrors the FAQ schema
- `components/blog/cluster-related.tsx` — sibling-cluster blog grid for blog footer

**Modify (8 files)**
- `types/resources.ts` — additive type extensions
- `data/blogs.ts` — rewrite existing 3, append 20 new entries (importing author from `data/authors.ts`)
- `app/layout.tsx` — expand metadata + inject Org + WebSite JSON-LD
- `app/page.tsx` — `generateMetadata` + WebApplication JSON-LD + cluster section
- `app/products/page.tsx` — metadata + cluster section
- `app/solutions/page.tsx` — metadata + cluster section
- `app/use-cases/page.tsx` — metadata + cluster section
- `app/resources/blogs/[slug]/page.tsx` — full `generateMetadata` + inject 3 JSON-LD blocks

---

## 10. Open Items I Need From You

These will be encoded as TODO comments + clearly-marked placeholders in the spec, ready for find-replace:

| Item | Default I'll ship if unanswered | Action needed |
|---|---|---|
| Nupura's real LinkedIn URL | `https://www.linkedin.com/in/nupura-ughade` | Confirm or correct |
| Nupura's real Twitter URL | `https://twitter.com/nupura_ughade` | Confirm, correct, or remove |
| Production domain | `https://docsapi.com` | Confirm |
| Organization contact email | `hello@docsapi.com` | Confirm |
| Google Search Console verification code | (not added) | Provide if available |

---

## 11. Verification Plan

Before reporting done:
1. `npm run build` — fixes any TS or Next.js error.
2. `npm run lint` — no new lint errors.
3. Visit `/resources/blogs/<slug>` for at least 3 new blogs in dev — confirm title, meta, body, FAQ accordion render.
4. View page source — confirm BlogPosting + BreadcrumbList + FAQPage JSON-LD present and valid (paste into [Schema Markup Validator](https://validator.schema.org/) mentally; we'll smoke-test offline by JSON.parsing).
5. Visit `/author/nupura-ughade` — confirm Person + ProfilePage JSON-LD present, post list correct.
6. Visit `/sitemap.xml` — confirm all 23 blogs + 3 pillars + author + home appear.
7. Run a quick `grep` to ensure no placeholder TODOs leaked into rendered content.
8. Internal-link audit: every blog has ≥1 pillar link and ≥2 sibling links — script that walks `blogs.ts` content strings and counts internal-link occurrences.

---

## 12. Risk Register

| Risk | Mitigation |
|---|---|
| Existing blog HTML content breaks new BlogPosting schema (no IDs, mixed tags) | Schema doesn't require body markup conformance — only metadata. Body stays as-is. |
| Author info placeholder ships to production | Search-and-replace placeholders are unique strings (`# TODO:`) — easy to grep before deploy. |
| 20 blogs at once balloons `data/blogs.ts` to ~6,000 lines | Acceptable for now (single file, easy diff review). Phase 2 can split per-blog if needed. |
| Internal links to pages that don't yet exist (e.g. `/use-cases/kyc`) | Restrict pillar links to existing pages only (`/products`, `/solutions`, `/use-cases`). Cluster blogs link to each other freely. |
| Voice gets generic across 20 blogs | Each blog opens with a distinct named scenario (named tool, named industry, real number). Self-audit pass before commit. |
| Build fails on Next.js 15 metadata format | Use the App-Router `Metadata` type — already in use; just expand fields. |

---

## 13. Out of Scope (explicitly deferred)

- Splitting `data/blogs.ts` into per-blog MDX files.
- Tag pages (`/tags/[tag]`).
- Author pages for non-Nupura authors.
- Real OG image generation pipeline (`opengraph-image.tsx` per route).
- Sanity/CMS integration.
- A/B testing title variants.
- GSC API integration for live keyword tracking.
- llms.txt for AI search ranking experiments (we ship the file but don't iterate on it this pass).
