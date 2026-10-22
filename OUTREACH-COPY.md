# DocsAPI Outreach Copy

**Created:** 2026-07-31
**Purpose:** Ready-to-send templates for the Phase 1 backlink push (testimonials + directories + benchmark promotion).
**Rule:** No em/en dashes. Sound human. Personalize the bracketed parts before sending.

Send everything from a real personal email (murali.g@hyperverge.co or a founder address), not a noreply. Personalization is what makes these convert. Never send in bulk from the same template without editing the specifics.

---

## 1. Testimonial outreach (highest conversion, ~50%)

Send one of these to each tool in the DocsAPI stack that has a customer/testimonial/showcase page. Fill in the real tool and the real impact. Write a genuine 2-3 sentence quote; do not exaggerate.

### Template A: hosting / infra / dev tools

```
Subject: Testimonial for [Tool] from a happy customer

Hi [team or name],

I'm Murali, founder of DocsAPI, a document-AI and OCR API for financial
services and lending. We have been building on [Tool] since [timeframe],
and it has genuinely made [specific thing: our deploys faster / our
infra simpler / our team ship quicker].

If it is useful, I'd be glad to give you a testimonial for your site.
Here is a quote you can use:

"[Two or three honest sentences about what the tool does well for you.
Be specific: name the feature, name the outcome.]"

Happy to have it featured with a link back to docsapi.co. Let me know if
you want a headshot or logo to go with it.

Thanks for building something we rely on,
Murali
```

### Template B: payment / email / database providers

```
Subject: Quick testimonial for [Tool]

Hi [name],

Founder of DocsAPI here (a document-AI and OCR API for fintech and
lending). We have used [Tool] for [timeframe] and it has been [specific
positive].

Would you like a customer testimonial for your site? Here is one ready
to go:

"[Two or three specific, honest sentences.]"

Fine to publish with a link to docsapi.co. Glad to help, you have earned
it.

Best,
Murali
```

**Targets to try (confirm which the DocsAPI stack actually uses):** Vercel, Next.js showcase, the cloud/ML infra provider, Stripe or Dodo Payments, Resend or Postmark, Supabase or Neon, Tailwind or shadcn showcase.

---

## 2. Directory submission copy (reuse across listings)

Most directories ask for a short description, a longer description, and category tags. Paste these and adjust length per site. Keep the entity descriptor consistent everywhere: "a document-AI and OCR API for financial services."

### Short description (one line, ~120 chars)

```
DocsAPI is a document-AI and OCR API for financial services: bank
statement, invoice, and ID extraction with validation built in.
```

### Medium description (~50 words)

```
DocsAPI is a document-AI and OCR API built for financial and lending
workflows. It reads invoices, bank statements, receipts, tax forms, and
IDs, then classifies, extracts, and validates the data before it reaches
your system. Multi-page table stitching and field-level confidence
scores are the core differentiators.
```

### Long description (~120 words)

```
DocsAPI is a document-intelligence and OCR API designed for financial
services, lending, and compliance teams. Unlike generic OCR that just
returns text, DocsAPI runs the full pipeline: classification (what type
of document is this), field extraction (vendor, total, dates, line
items), validation (do the totals reconcile), and structured output
ready for your accounting, lending, or KYC systems.

It is built for the documents that break generic tools: multi-page bank
statements with transaction tables that span 10+ pages, invoices with
line-item detail, and IDs that need MRZ verification. Field-level
confidence scores let you route low-confidence extractions to human
review. Pay per page or per document, with a free tier to test on your
real documents before committing.
```

### Category tags to select

```
OCR, Document AI, IDP, Intelligent Document Processing, Fintech, API,
Developer Tools, Document Automation, KYC, Data Extraction
```

**Directories to submit to (Phase 1):** RapidAPI, ProgrammableWeb, Public APIs (GitHub PR), G2, Capterra, GetApp, AlternativeTo (as an alternative to ABBYY, AWS Textract, Ocrolus, Tesseract), SaaSHub, StackShare, Crunchbase, Slant.co, There's An AI For That, Futurepedia.

---

## 3. Benchmark promotion outreach (the linkable asset)

Once the "OCR Accuracy Benchmark 2026" page is live, use it to earn editorial links. The data is the hook. Send to people who write OCR/document-AI comparison content.

### Template C: to a blogger who wrote an OCR comparison

```
Subject: OCR accuracy data for your [topic] article

Hi [name],

I read your piece on [their article title / topic] and found the
[specific thing you actually liked] section useful.

We just published an OCR accuracy benchmark: eight engines
(Tesseract, PaddleOCR, AWS Textract, Google Document AI, Docling,
LlamaParse, and DocsAPI) tested on 1,700 real production documents, with
the full per-category numbers and methodology. It is free to cite:

docsapi.co/resources/blogs/ocr-accuracy-benchmark-2026

If it is useful for your article, feel free to reference the numbers. The
multi-page bank statement result (91% best vs 64% worst) is the one most
people find surprising.

Either way, thanks for writing a genuinely helpful comparison.

Murali
```

### Template D: to a "best OCR tools" roundup author

```
Subject: OCR benchmark data you might want for your roundup

Hi [name],

Your "[roundup title]" list is one of the better OCR resources out there.

We ran an accuracy benchmark across eight engines on 1,700
real documents and published the full numbers, free to cite:

docsapi.co/resources/blogs/ocr-accuracy-benchmark-2026

One thing your readers might find useful: the per-category winners (no
single engine wins everything).

If you update the roundup, the data is there to reference. Thanks for
maintaining such a useful list.

Best,
Murali
```

---

## 4. Broken link building (for OCR roundups with dead links)

Find "best OCR tools" or "OCR API" roundups with 404 outbound links (Check My Links Chrome extension), then send this.

```
Subject: Broken link on your [page topic] page

Hi [name],

I was reading your article on [topic] and noticed the link to [dead
tool or dead URL] returns a 404, looks like that tool shut down.

We recently published a comparison that covers the same ground, if you
want a live replacement:

[most relevant DocsAPI comparison URL, e.g. the Textract or ABBYY
comparison, or the benchmark page]

Either way, thought you would want to know about the broken link so the
page stays current.

Cheers,
Murali
```

---

## 5. Brand mention reclamation (highest conversion, 30-50%)

When Google Alerts surfaces an unlinked "DocsAPI" mention, send this.

```
Subject: Thanks for mentioning DocsAPI

Hi [name],

I noticed you mentioned DocsAPI in [article title]. Thanks for the
mention, that means a lot.

Would you be open to adding a link to docsapi.co so readers can find us
easily? Happy to share your article with our audience as well.

Best,
Murali
```

---

## 6. Guest post pitch (data-led, to dev/fintech blogs)

```
Subject: Guest post idea for [Publication]: [specific data-led topic]

Hi [editor name],

I'm Murali, founder of DocsAPI (a document-AI and OCR API for financial
services). I have been reading [Publication] for [genuine specific
reason].

I'd like to contribute a piece backed by original data we collected: an
benchmark of eight OCR engines on 1,700 real documents.
Possible angles:

- Why generic OCR fails on bank statements (the multi-page table problem)
- The honest state of OCR accuracy in 2026, what vendors claim vs what
  real documents show
- How to actually benchmark an OCR tool for your own workflow

This would complement your recent piece on [their related article].

Happy to send an outline or draft first. The data is ours and unpublished
elsewhere.

Best,
Murali
```

---

## Sending cadence (Phase 1, weeks 1-4)

| Week | Action | Volume |
|---|---|---|
| 1 | Directory submissions + 6-8 testimonial emails | one afternoon + 8 emails |
| 2 | Benchmark promotion (template C/D) to 15 comparison authors | 15 emails |
| 3 | Broken link building on OCR roundups | 20 emails |
| 4 | Resource pages + any brand mentions that surfaced | 15 emails |

Track replies and placements in a simple sheet: target, template used, date sent, replied Y/N, link live Y/N. Follow up once after 5-7 days on anything unanswered, then move on.

---

## What I (Claude) can still draft on request

- Individual, fully-personalized versions of any of these once you name the specific tool/blog/person
- The Dev.to and Hashnode technical posts that distribute the benchmark
- A guest post full draft once a publication says yes
- The free "which OCR should I use" comparison tool, if you want the passive link magnet built

Just point me at the target and I will write the specific version.
