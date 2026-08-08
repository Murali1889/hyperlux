# DocsAPI: Solutions, Convenience, Feelings

**Created:** 2026-07-31
**Owner:** Murali (docsapi.co)
**Framework:** Every build must serve at least one of the three buying motivations. Solutions (remove pain), Convenience (faster and better), Feelings (the experience). Prioritize by which motivation is strongest for the target buyer, then define how to test it.
**No em/en dashes anywhere.**

---

## The framework, applied to a document-AI API

People do not buy OCR. They buy the removal of a pain, an easier way to do a job they already do, or the feeling of being safe and smart. DocsAPI is a developer API, so it is tempting to sell only features (accuracy, speed, price). That is a mistake. The buyer is a human with a pain, a workload, and a fear of being blamed. This document maps what DocsAPI actually sells in each of the three motivations, who buys it, the evidence from our own GSC data, and how to test each one.

The strongest signal we have for real motivation is Google Search Console, because a search query is a person telling us what they want in their own words. The whole SEO effort has been building the demand map; this document reads that map through the three-motivation lens.

---

## 1. Solutions (remove the pain)

The buyer has a hurt and wants it gone. This is the strongest motivation for DocsAPI because our biggest-demand queries are pain-shaped: someone searching "accounts payable ocr" is not curious, they are bleeding money and time on manual invoice processing.

### The pains we remove, by buyer

| Buyer | The pain (their words) | What we sell as the solution |
|---|---|---|
| AP / finance team | "$14 per invoice, manual keying, chasing POs, duplicate payments caught weeks late" | Stop the manual keying. Touchless invoices. No more duplicate payments. |
| Lending / underwriting | "Two hours per applicant reading bank statements, 4-day loan decisions, losing deals to faster lenders" | Cut decision time to 90 minutes. Underwrite more, faster. |
| Compliance / KYC | "Failed the audit, could not prove which document drove which decision, weeks assembling exam docs" | Pass the audit. Every extraction has a queryable trail. |
| Controller / bookkeeper | "Saturdays reconciling, two weeks per quarter on statements, month-end close is a fire drill" | Get your weekends back. Close faster. |
| Enterprise ops | "Nine months and $2M into a tool that cannot prove compliance to regulators" | Governance built in. Survive the exam. |

### GSC evidence

The highest-impression queries are pain queries: "accounts payable ocr software" (207/wk), "ocr accounts payable" (174/wk), "bank statement ocr", "kyc verification", "legal document automation". These people have a problem and are shopping for relief. The pages that pull the most impressions (smarter-invoice, ocr-meaning-in-finance, kyc-document-verification) are all pain pages.

### The Solutions message

Lead with the pain and its cost, then the removal. "$14 per invoice to $2.70 in 90 days" works because it names the pain (the cost) and the relief (the drop). "You will pass your next OCR audit" works because the fear of a failed audit is real and specific.

---

## 2. Convenience (faster and better than what they have)

The buyer is not in acute pain but wants ease. They have a working thing (Textract, ABBYY, a Tesseract pipeline, manual review) and want something faster, simpler, or better. This is the developer's motivation.

### The conveniences we sell, by buyer

| Buyer | What they have now | What we sell as the upgrade |
|---|---|---|
| Developer / builder | "Building on Textract, the multi-page tables broke, I maintain fragile stitching code" | We stitch tables for you. One API call, not a pipeline you babysit. |
| Developer picking a tool | "Evaluating Textract vs ABBYY vs open-source, want the easy path" | 5-minute setup, HTTP call, no infra to run. Classification plus extraction in one call. |
| Team on a hyperscaler | "AnalyzeForm upcharges, async polling, slow" | Bundled pricing, sync endpoint, no upcharge surprises. |
| Team running open-source | "PaddleOCR works but I keep up with releases and run the compute" | Pay per page, zero maintenance, we own the release cycle. |

### GSC evidence

Comparison and alternative queries are convenience queries: "textract alternative", "abbyy alternative", "paddleocr vs tesseract", "docling vs llamaparse", "best ocr api". These people already have a working option and are looking for the easier or better one. Our comparison blogs (now the highest-ranked pages on the site at pos 13-44) serve exactly this motivation.

### The Convenience message

Lead with the friction they have and the ease we offer. "You are maintaining table-stitching code that breaks on every new bank format. We handle it." "5 minutes to first extraction, no CUDA, no infra." The comparison content already does this well; the product and pricing pages should too.

---

## 3. Feelings (the experience)

The Starbucks motivation. The buyer wants to feel a certain way: safe, competent, trusted, unblamed. For a B2B API this is real but subtle, and it is the hardest to sell with features. It is sold with voice, honesty, and trust signals.

### The feelings we sell, by buyer

| Buyer | The feeling they want | How we deliver it |
|---|---|---|
| Developer | "I picked the right tool and I will not get blamed when it ships" | Honest benchmarks, "here is where we lose" disclosure, a founder who has been in their seat |
| Finance leader | "I look good to the CFO, I am the one who fixed this" | Case studies where the controller got promoted, clear ROI they can present |
| Compliance officer | "I can sleep at night, the auditor will not catch me" | Governance, audit trails, "you will pass the exam" |
| Buyer of any B2B tool | "This vendor is honest and will not screw me" | First-person operator voice, disclosed bias, no hype, real numbers |

### The evidence

This is why the blog voice works. Every post is first-person, honest, discloses when DocsAPI loses, and reads like a founder who has run 4M pages a month. That voice is not a style choice, it is the Feelings product: it makes the reader trust us, and trust is what de-risks a B2B purchase. The "cite this benchmark, free, here is where we lose" honesty is a feelings play as much as a links play. It makes DocsAPI feel like the honest vendor in a category full of 99% marketing claims.

### The Feelings message

Sell trust and competence, not features. "The honest OCR benchmark, including where we lose." "Written by someone who has shipped this, not a marketer." "You will not get blamed for this pick." The feeling is: calm, confidence, being the smart one who chose the vendor that tells the truth.

---

## Priority

Ranked by strength of motivation for DocsAPI's actual demand, based on the GSC data and where the money is.

1. **Solutions first.** The largest, most valuable demand is pain-driven finance and lending teams. The pain is acute (money and time bleeding), the buyer has budget, and the message converts because the cost of the pain is quantifiable. Every high-impression page is a pain page. This is where the revenue is.

2. **Convenience second.** Developers evaluating tools are high-intent and close to a decision, and our comparison content already ranks best here (pos 13-44). Convenience is the fastest path to a trial signup because the friction of switching is low and the buyer is already shopping. This is where the near-term conversions are.

3. **Feelings third, but as the multiplier on both.** Feelings do not sell on their own for a B2B API, but they de-risk every Solutions and Convenience purchase. Trust is why the developer signs up and why the finance leader champions us internally. So Feelings is not a separate campaign, it is the voice and honesty layer applied to everything in the first two. It is already our differentiator; protect it and make it louder.

The build rule that follows: prioritize Solutions content and product framing (biggest revenue), keep investing in Convenience content (fastest conversions), and never ship anything that breaks the Feelings layer (honesty, no hype, no em-dash AI slop).

---

## How to test each motivation

The framework is only useful if we test whether the motivation actually lands. Here is how to test each, from cheapest to most rigorous.

### Test 1: GSC intent classification (free, already have the data)

Tag every ranking query as Solutions, Convenience, or Feelings, then look at which bucket drives impressions and clicks. Prediction: Solutions dominates impressions, Convenience dominates click-through (higher intent). If Convenience queries convert to book-demo at a higher rate than Solutions queries, that changes the priority. Run this against the next GSC export.

### Test 2: Landing-page message testing (cheap, high signal)

On the homepage and product page, test three headline variants for the same offer:
- Solutions headline: names the pain and its cost ("Stop losing $14 per invoice to manual data entry")
- Convenience headline: names the friction and the ease ("Document OCR in one API call, no pipeline to maintain")
- Feelings headline: names the trust ("The honest document-AI API, benchmarks and all")

Measure book-demo clicks and trial signups per variant. Whichever wins tells us which motivation the actual buyer responds to. This is the single most valuable test because it uses real conversion behavior, not opinion.

### Test 3: Book-demo and signup conversion by motivation (real behavior)

Attribute every book-demo and signup to the motivation of the page or query that drove it. Over a month, this shows which motivation actually produces revenue conversations, not just traffic. Solutions may pull the most impressions while Convenience produces the most signups; the data decides.

### Test 4: Customer interviews (most rigorous, slowest)

Ask the last 10 people who signed up or booked a demo: what were you trying to fix, what were you using before, and what made you trust us enough to try. Their answers map directly to Solutions, Convenience, and Feelings. This is the ground truth the other tests approximate. Ten conversations is enough to see the pattern.

### The testing sequence

Run Test 1 now (free, we have the data). Set up Test 2 next (needs the landing pages built with variants). Track Test 3 continuously once book-demo is instrumented. Do Test 4 as soon as there are 10 signups to interview. The cheap tests point the direction; the interviews confirm it.

---

## What to build next, ranked by this framework

1. **Solutions:** the highest-pain, highest-demand pages are already deep. Next is instrumenting book-demo conversion by intent (Test 3) so we know which pain actually converts, then sharpening the homepage and product page around the winning pain.
2. **Convenience:** the comparison cluster ranks best. Build the free "which OCR should I use" comparison tool (a pure Convenience product: it makes the buyer's decision faster and easier) and the developer-quickstart content that reduces time-to-first-call.
3. **Feelings:** protect and amplify the honest-vendor voice. The benchmark asset (free to cite, discloses where we lose) is already a Feelings play. Keep every new page in that voice, no hype, no dashes, real numbers.

Before building anything, name which motivation it serves and for whom. If it serves none, do not build it.

---

## Test 1 results (GSC intent classification, run 2026-08-01)

Classified all 503 ranking queries from the 3-month GSC export into the three motivations and aggregated impressions and clicks. The result reshapes the priority.

| Bucket | Impressions | Share | Clicks | CTR | Queries |
|---|---|---|---|---|---|
| Solutions | 4,703 | 77.4% | 0 | 0.00% | 289 |
| Convenience | 893 | 14.7% | 1 | 0.11% | 131 |
| Feelings | 83 | 1.4% | 4 | 4.82% | 23 |
| Generic | 400 | 6.6% | 0 | 0.00% | 60 |

### What the data actually says

1. **Solutions is the biggest prize but blocked by authority, not content.** 77% of all demand is pain-driven finance and lending queries (accounts payable ocr, ocr finance, legal document automation, bank statement ocr). But it produced zero clicks because those pages rank at position 84 to 90, page 8 to 9. Google shows us for the pain queries and buries us. Content cannot fix this; the pages are already deep. Only off-page authority (the backlink plan) moves them. This is simultaneously the biggest opportunity and the current wall.

2. **Convenience is where we actually rank today.** The comparison and alternative queries rank far better than Solutions: paddleocr vs tesseract at pos 17, tesseract vs paddleocr at pos 10.7, idp vs ocr at pos 66, abbyy alternative at pos 61. And the only non-brand click in the entire dataset came from Convenience (paddleocr vs tesseract). Convenience content ranks; Solutions content does not, yet. This is the fastest near-term path to clicks.

3. **Feelings converts at 34x everything else, but has almost no volume.** The brand query "docsapi" at position 3 produced 4 of the 5 total clicks. Feelings CTR was 4.82% versus roughly 0.1% for the other buckets. When someone already knows and trusts us (a brand search is a Feelings and relationship signal), they click at dramatically higher rates. But brand demand is tiny because the site is new. Building brand and trust is what turns impressions into clicks.

### Revised priority based on the data

The pre-test priority ranked Solutions first for revenue. The test refines this into a sequenced plan rather than a single ranking:

1. **Near-term clicks: double down on Convenience.** The comparison cluster already ranks (pos 10 to 27) and is the only thing producing non-brand clicks. Pushing those pages onto page 1 is the fastest revenue path available right now, and it is what recent work has been doing.

2. **Unlock the big prize: backlinks for Solutions.** 77% of demand sits in Solutions at pos 84 to 90. Content has taken it as far as it goes. Only authority moves it onto page 1, where the pain-driven finance and lending buyers convert. The backlink plan targets exactly this, and it is the single highest-value initiative because it unblocks three quarters of the demand.

3. **Compound everything: build brand and trust (Feelings).** The 4.82% brand CTR proves that when people know us, they click at 34x the rate. Every brand mention from the backlink, PR, and community work raises the Feelings bucket, which is the highest-converting of the three. Feelings is not a separate campaign; it is what makes the other two convert.

### The one-line takeaway

Convenience is winning the clicks we can get today, Solutions is the buried prize that only backlinks unlock, and Feelings (brand trust) converts at 34x but needs the brand-building work to have volume. Do all three, in that sequence of urgency, and the backlink plan is the linchpin because it serves Solutions (authority) and Feelings (brand mentions) at the same time.

---

## Note on the deep research

The most rigorous version of this is empirical: the landing-page test and the ten customer interviews are the real research, because they measure what actual buyers do and say rather than what we assume. The GSC intent classification is the free first pass we can run immediately. If you want external market grounding as well (how fintech and AP buyers evaluate document-AI vendors, what language competitors use for each motivation), I can run the deep-research harness on that specific question. But the highest-value research is Test 2 and Test 4, on our own buyers, because Starbucks did not learn the feelings motivation from a report, they learned it from what people actually paid for.
