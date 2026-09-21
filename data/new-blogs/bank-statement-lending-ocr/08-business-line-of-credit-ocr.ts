import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogBl08: BlogPost = {
  id: "bl-08",
  title: "Business Line of Credit OCR: What the Base Excludes",
  slug: "business-line-of-credit-ocr",
  excerpt:
    "Lending OCR content covers bank statements and tax returns well. Almost none explain the borrowing base certificate that actually caps an asset-based line.",
  description:
    "Business line of credit OCR: the borrowing base certificate formula, what makes a receivable ineligible, and the overadvance trigger extraction alone misses.",
  metaTag: "Business LOC OCR: What the Borrowing Base Excludes (2026)",
  content: `
    <p>Lending OCR content is thorough on the documents every commercial credit file shares: bank statements, tax returns, financial statements. What it consistently skips is the document specific to an asset-based small business line of credit, the borrowing base certificate, a recurring report that determines how much of the line is actually available to draw, calculated fresh every reporting period against the business's current accounts receivable and inventory, not a fixed number set once at approval.</p>

    <p>This is the actual mechanics of that certificate, what makes a receivable ineligible for the calculation, and why extraction alone, without the eligibility logic underneath it, produces a borrowing base that overstates real availability, a gap sitting squarely inside <a href="/use-cases/loan-verification">automated loan verification</a> for this specific product.</p>

    <h2>Why an asset-based line of credit isn't a fixed number</h2>

    <p>A term loan has a fixed original balance that only goes down. A revolving line of credit secured by business assets works differently: the maximum amount actually available to draw, the borrowing base, moves with the value of the collateral backing it, primarily accounts receivable and, for businesses that carry it, finished goods inventory. As receivables grow, the base grows and more becomes available. As receivables age past a lender's eligibility cutoff or get written off, the base shrinks, sometimes below the amount currently drawn. This is why a borrowing base certificate, a short, recurring report the borrower submits monthly, quarterly, or on whatever cadence the credit agreement specifies, exists at all: the approved credit limit on the line and the actual currently available amount are two different numbers, and only the second one, recalculated from the current certificate, tells a lender what is really safe to advance today.</p>

    <h2>The formula, and the advance rates that shrink raw collateral into usable base</h2>

    <p>The standard calculation: borrowing base equals eligible accounts receivable multiplied by an AR advance rate, plus eligible inventory multiplied by a separate, generally lower inventory advance rate. Advance rates vary by lender and collateral quality, but AR advance rates commonly land around 70 to 80%, and finished-goods inventory advance rates commonly land around 50%, reflecting the fact that inventory is harder and slower to convert to cash than a receivable already owed by a paying customer.</p>

    <table>
      <thead>
        <tr><th>Collateral</th><th>Raw value</th><th>Typical advance rate</th><th>Contribution to base</th></tr>
      </thead>
      <tbody>
        <tr><td>Eligible accounts receivable</td><td>$150,000</td><td>70%</td><td>$105,000</td></tr>
        <tr><td>Eligible finished-goods inventory</td><td>$50,000</td><td>50%</td><td>$25,000</td></tr>
        <tr><td>Total borrowing base</td><td>$200,000 raw collateral</td><td>&nbsp;</td><td>$130,000 available</td></tr>
      </tbody>
    </table>

    <p>Note the word "eligible" doing real work in both rows. The advance rate applies only after ineligible receivables and ineligible inventory have already been stripped out of the raw figures, which is exactly the calculation step most extraction-focused OCR content never explains.</p>

    <h2>The four exclusion categories that make a receivable ineligible</h2>

    <p>Not every dollar on an accounts receivable aging report counts toward the base. Four exclusion categories are standard across most asset-based lending agreements, though exact thresholds vary by lender and are set in the specific credit agreement.</p>

    <p><strong>Aging.</strong> Receivables past a defined age, commonly 90 days from invoice date, are excluded entirely, since a receivable unpaid that long is a meaningfully weaker collateral claim than one still within normal payment terms.</p>

    <p><strong>Concentration.</strong> If a single customer represents more than a defined share of total receivables, commonly in the 20 to 25% range, the excess above that concentration cap is excluded, even if those specific invoices are current and unpaid on time. The logic: a base overly reliant on one customer's continued solvency is a riskier base than one spread across many customers, regardless of any individual invoice's own age or status.</p>

    <p><strong>Affiliate and related-party receivables.</strong> Invoices to a sister company, a parent entity, or an owner-related business are excluded, since these are not arm's-length transactions and cannot be relied on as genuinely independent collateral the way a receivable from an unrelated customer can.</p>

    <p><strong>Contra accounts.</strong> If the business both sells to and buys from the same customer, and that customer could offset what they owe against what the business owes them in a dispute or default scenario, the overlapping amount is typically netted out of the eligible receivable for that customer specifically.</p>

    <h2>Inventory eligibility gets screened the same way, on different criteria</h2>

    <p>Inventory collateral goes through its own eligibility screen, parallel in structure to the receivable rules but built around different risk factors. Raw materials and work-in-progress inventory are commonly excluded entirely, or advanced at a materially lower rate than finished goods, since unfinished inventory is further from being sellable and harder to value if the lender ever needs to liquidate it. Slow-moving or aged inventory, sitting unsold past a defined period, faces the same logic as an aged receivable: the longer it sits, the weaker its claim to represent real, recoverable collateral value. Consigned inventory, goods held on behalf of another party rather than owned outright by the borrower, is typically excluded entirely, since the borrower does not have clear title to pledge it as collateral in the first place. A pipeline that extracts a single inventory total from a balance sheet, the same failure mode as the AR summary-total problem, has no way to apply any of these three inventory-specific exclusions either.</p>

    <h2>A worked example of eligible versus raw</h2>

    <p>A business reports $150,000 in total accounts receivable on its aging schedule. Of that, $18,000 is more than 90 days past invoice date, excluded entirely. Of the remaining $132,000, one customer represents $40,000, against a 25% concentration cap that, applied to the $132,000 eligible pool, caps that single customer's contribution at $33,000, excluding $7,000 above the cap. No affiliate or contra issues this period. Eligible receivables: $132,000 minus $7,000, or $125,000, not the $150,000 the raw aging report shows. Applied at a 70% advance rate, that is $87,500 of actual borrowing base contribution from receivables, meaningfully below the $105,000 a pipeline that skipped the eligibility screening entirely and applied the advance rate to the raw $150,000 figure would have calculated.</p>

    <h2>The overadvance trigger, and why it is a compliance event, not a rounding footnote</h2>

    <p>When the recalculated borrowing base falls below the amount currently drawn on the line, the borrower is in an overadvance position, a real, defined trigger under most credit agreements that typically requires an immediate paydown to bring the drawn balance back within the recalculated base, or additional qualifying collateral to restore it. This is not a soft warning. A pipeline that calculates the base incorrectly, overstating it by skipping eligibility exclusions the way the worked example above shows, can mask a genuine overadvance that the credit agreement actually requires action on, right up until a lender's own audit or field exam recalculates the certificate correctly and finds the borrower already in breach.</p>

    <h2>Dilution: the trend a single certificate can't show, but a sequence can</h2>

    <p>A single borrowing base certificate is a snapshot, but the more useful signal often lives in the trend across several consecutive certificates: dilution, the rate at which a business's receivables get reduced by credits, returns, discounts, or write-offs rather than actually collected in cash. A business with rising dilution, more of its invoiced revenue evaporating into credits and returns each period rather than converting to collected cash, is showing early signs of either a quality problem with what it is selling or a customer base under its own financial stress, well before that shows up as an outright default or an overadvance event. Calculating dilution requires comparing each period's certificate against the prior ones, tracking gross invoiced receivables against actual cash collected over the same window, a genuinely different kind of check than validating any single certificate in isolation, and one that only becomes possible once a pipeline is storing and reconciling certificate data period over period rather than treating each submission as a standalone document to extract and discard.</p>

    <p>This is the practical argument for building borrowing base extraction as a running, comparable dataset rather than a one-off form-reading exercise. A lender that can only answer "is this period's certificate internally consistent" is missing the earlier warning sign that shows up only in the shape of the trend across several periods together.</p>

    <h2>Where extraction needs to route: line-item aging, not a summary total</h2>

    <p>The practical extraction requirement this creates: a borrowing base certificate pipeline needs the full accounts receivable aging schedule, invoice by invoice or at minimum customer by customer with an aging bucket attached, not just the single summary total most bank statement or financial-statement OCR is tuned to pull. Aging-bucket detail is what makes the 90-day exclusion possible to apply at all, and per-customer totals are what makes the concentration cap calculable. A pipeline extracting only "total AR: $150,000" from a balance sheet has nothing to apply either exclusion rule against, and will hand underwriting the raw, overstated figure by default, a different but related version of the credit-limit-versus-balance error covered in our <a href="/resources/blogs/heloc-document-ocr">HELOC document OCR piece</a>, wrong input field, right-looking output.</p>

    <h2>What I would check in your current borrowing base pipeline</h2>

    <p>Ask whether your extraction actually pulls a full aging schedule with per-customer, per-invoice detail, or just a summary AR total that has nowhere to apply eligibility rules against. Then ask whether the 90-day aging exclusion, the concentration cap, and the affiliate exclusion are actually encoded as calculation steps applied to that detail, or whether the advance rate gets applied directly to a raw, unscreened figure. Confirm what happens automatically when a recalculated base falls below the outstanding balance, since an overadvance is a defined credit-agreement event that deserves an explicit, immediate workflow trigger, not something a reviewer needs to notice by comparing two numbers manually every reporting period. And ask whether certificate data actually gets stored and compared period over period to surface dilution trends, or whether each submission is validated and then effectively discarded, the same forward-looking discipline covered from the deposit-pattern angle in our <a href="/resources/blogs/personal-loan-document-ocr">loan stacking detection piece</a>, applied here to a business collateral trend instead of a consumer deposit pattern.</p>
    <p>A borrowing base certificate looks, at a glance, like a simple report to extract: some totals, an advance rate, a resulting number. The eligibility screening underneath those totals is where the real calculation lives, and it is exactly the layer most lending OCR content, focused on getting the raw numbers off the page accurately, never actually reaches. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Lending",
  date: "August 18, 2026",
  datePublished: "2026-08-18T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "business line of credit ocr",
  secondary_keywords: [
    "borrowing base certificate automation",
    "accounts receivable aging ocr",
    "asset based lending document processing",
    "ineligible receivables calculation",
    "overadvance detection lending",
    "small business credit line underwriting",
  ],
  tags: ["lending", "underwriting", "small business", "asset-based lending", "bank statement OCR"],
  cluster: "industry-trends",
  faq: [
    {
      question: "What is a borrowing base certificate?",
      answer:
        "A recurring report, typically submitted monthly or quarterly, that recalculates how much of an asset-based line of credit is actually available to draw, based on current eligible accounts receivable and inventory rather than the original fixed credit limit.",
    },
    {
      question: "What makes a receivable ineligible for the borrowing base?",
      answer:
        "Commonly four categories: receivables aged past roughly 90 days from invoice date, the portion of any single customer's receivables above a concentration cap (typically 20-25%), affiliate or related-party receivables, and contra amounts owed back to a customer who is also a vendor.",
    },
    {
      question: "What are typical advance rates for accounts receivable and inventory?",
      answer:
        "Accounts receivable advance rates commonly land around 70-80% of eligible receivables. Finished-goods inventory advance rates commonly land around 50%, reflecting slower, less certain conversion to cash.",
    },
    {
      question: "What happens when the borrowing base falls below the outstanding balance?",
      answer:
        "This is an overadvance, a defined trigger under most credit agreements typically requiring an immediate paydown or additional qualifying collateral. It is a compliance event, not a routine fluctuation.",
    },
    {
      question: "Why isn't a summary accounts receivable total enough to calculate a borrowing base?",
      answer:
        "The aging exclusion and concentration cap both require line-item or per-customer detail. A single AR total has nowhere to apply either rule, which leads to the advance rate being applied to a raw, unscreened figure.",
    },
    {
      question: "Does the borrowing base calculation apply to a HELOC-style consumer line the same way?",
      answer:
        "No. A consumer HELOC uses a fixed approved credit limit regardless of draw status. A business asset-based line recalculates its actual available base every reporting period against fluctuating collateral.",
    },
  ],
}
