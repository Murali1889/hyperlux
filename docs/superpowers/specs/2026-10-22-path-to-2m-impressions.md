# Path to 2M impressions in 2 months (docsapi.co), written 2026-10-22

Source: Search Console API pull of 2026-10-22 (data to Oct 19), X and Reddit monitor, skill file `references/40-community-tips.md`.

## Where we are
- Last 7 days: 3,341 impressions, 3 clicks. Previous 7 days: 1,911. Four weeks ago: about 1,000 a week. Impressions are growing, clicks are not.
- About half of impressions come from five accounts-payable queries at positions 72 to 78 (page 8). Nobody clicks there.
- Index status of 219 sitemap URLs: 153 indexed, 50 crawled not indexed, 13 discovered not indexed, 2 unknown, 1 soft 404 (`/documents/financial-docs`).
- The only clicked query is "abbyy finereader alternative" (position about 28).

## The honest math
2M in 60 days is about 33,000 impressions a day. We are at about 480 a day, so the target is roughly 70 times today's rate.
- If weekly impressions double every week for eight weeks (3.3K, 6.6K, 13K, 26K, 53K, 106K, 212K, 424K), the eight-week total is about 840K.
- Doubling every two weeks gives about 230K.
- One community yardstick: a small dev-tool site reports 137K impressions in six months from comparison pages and engineering blogs (self-reported, unverified).
So 2M is a stretch north star, not a forecast. Track the weekly growth rate, and re-forecast after two weeks of the new data. We do not have search volumes for the target queries, which is the missing input for a real forecast.

## What moves impressions, in order
1. **Get the AP cluster off page 8.** It already holds half of all impressions. Done 2026-10-22: the buyer's guide now has published prices and integrations for BILL, Melio and Tipalti with source links, plus 8 new internal links from the invoice cluster. Next: backlinks to it, and a second pass after Google recrawls.
2. **Get the 63 non-indexed pages indexed.** Each indexed page adds long-tail impressions. Strengthened so far: purchase orders, contract abstraction, financial-docs hub, readable-PDF post.
3. **Be citable in AI answers.** Semrush reports AI Overviews on 96% of "best X for Y" queries and rising on "alternatives" and "vs". The AP guide, the benchmark post and the abbyy alternative page are the ones to keep sharp. llms.txt has almost no measured effect, so do not spend more time there.
4. **Third-party presence.** Reddit is a heavy AI citation source. Real answers in the subreddits where buyers ask (owner posts, we draft). The benchmark chart is the asset to pitch for backlinks.
5. **Comparison pages, only where we have data.** Google Document AI is named in the benchmark but has no per-engine numbers, so a "vs Google Document AI" page needs a new test first. We do not write a page without data.

## Daily and weekly loop
- Daily: `~/docsapi-gsc-monitor/run_daily.sh` (GSC), X and Reddit monitor, digest.
- Weekly: compare impressions, clicks and average position by page cluster; recheck AI visibility; request indexing for changed pages; pick the next page from queries at positions 5 to 20.

## Added after the full X and Reddit read (same day)
- **Yardsticks.** Two self-reported small-site cases land at about 100K to 137K impressions in three to six months. That is strong execution, and 2M in two months is about 20 times that pace.
- **Impressions are a weak target on their own.** Three independent reports say AI Overviews can remove clicks even at a top position (a page at position 4.2 with 100K impressions and 105 clicks). Track clicks, demo requests, and whether DocsAPI is named or cited in AI answers. The prompt set is in `2026-10-22-ai-visibility-prompts.md`.
- **Audit before publishing more.** Consistent facts across pages, schema and files matter more than volume. Done today: two posts showed DocsAPI at $0.01 to $0.05 per page (approved: from $0.02), and several older posts carried unsourced case studies and ROI figures (a global insurer story that implied a DocsAPI customer, an 85% processing-time claim, $148K monthly savings, a 71% to 58% neobank anecdote). All removed or relabelled as illustrations.
- **Pace.** Publish at a human pace. Do not mass-publish or mass-translate.
- **Third-party corroboration** is what finance-type answers lean on. This remains the biggest gap and needs the owner.
- **llms.txt** has four independent reports of negligible measured effect. Keep it accurate, do not invest more.

## Open risks
- `/documents/financial-docs` is a soft 404 in Google even though the live page is fine. About half the text blocks render at opacity 0 until scrolled (framer-motion `whileInView`). Unproven cause. Check with a URL Inspection live test.
- The benchmark post says "8 engines" but names 7.
- Anecdote-style first-person openings in several posts are unverified.
