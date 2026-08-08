import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogAp11: BlogPost = {
  id: "ap-11",
  title: "Why AP Is the Real Bottleneck at Month-End Close (2026)",
  slug: "month-end-ap-close-bottleneck",
  excerpt:
    "Every close guide says accrue unprocessed invoices without saying how. Here is the actual estimation method, and why AP is usually the real bottleneck.",
  description:
    "Why accounts payable is usually the real month-end close bottleneck, and the actual three-method methodology for accruing invoices not yet received.",
  metaTag: "AP Month-End Close: The Real Accrual Math (2026)",
  content: `
    <p>Every month-end close guide I read while researching this piece lists "post accruals for unprocessed invoices" as a step, and not one of them explains how to actually estimate that number. It gets treated as if the accrual amount is simply known, when in practice it is one of the more judgment-heavy calculations in the whole close, and getting it wrong in either direction (over-accruing or under-accruing) distorts the period's financials in a way that quietly compounds if nobody notices, month after month, until a variance shows up that nobody can immediately explain.</p>

    <p>This is the actual accrual methodology, plus the reason <a href="/solutions/finance-automation">accounts payable</a> specifically, more than any other close workstream, ends up as the pacing bottleneck for the whole close.</p>

    <h2>Why AP is structurally the slowest workstream to close</h2>

    <p>Most close workstreams close on data your company already has: bank transactions are already posted, payroll runs on a known schedule, revenue recognition works off contracts and delivery dates you control. AP close depends on data you do not control at all, when a vendor actually sends an invoice for services already rendered. A vendor who provides a service in month N but does not invoice until three weeks into month N+1 creates a structural gap: the expense belongs in month N's financials, but the source document that would let you record it precisely does not exist yet when you are trying to close month N's books. Every other close workstream can move as fast as your own team works. AP close is gated by other companies' invoicing habits, which is why it is so often the thing everyone is waiting on.</p>

    <h2>The accrual estimation methodology nobody writes down</h2>

    <p>There are three practical methods, matched to how much visibility you actually have into the underlying spend, ranked from most precise to most estimated.</p>

    <table>
      <thead>
        <tr><th>Method</th><th>When to use it</th><th>How it works</th></tr>
      </thead>
      <tbody>
        <tr><td>Received-not-invoiced (RNI) direct tracking</td><td>PO-backed spend with goods receipts on file</td><td>For every open PO with a goods receipt but no matching invoice yet, accrue the receipt amount directly. This is exact, not estimated, because you have the actual quantity and price from the receiving document.</td></tr>
        <tr><td>Recurring-vendor carryforward</td><td>Non-PO recurring spend (utilities, subscriptions, retainers)</td><td>Accrue the prior period's actual invoiced amount for that vendor, adjusted for any known rate change. A vendor that billed $4,200 last month with no known change gets accrued at $4,200 this month, even before their invoice arrives.</td></tr>
        <tr><td>Statistical lag estimation</td><td>High-volume, lower-dollar, non-PO spend not worth tracking line by line</td><td>Multiply average historical invoice lag (days between service date and invoice receipt, tracked per vendor category) by average daily spend rate for that category, to estimate the dollar value of services rendered but not yet invoiced.</td></tr>
      </tbody>
    </table>

    <p>A worked example of the third method: a company averages $18,000/day in a spend category (say, contract labor) where invoices historically arrive an average of 12 days after the service period ends. At month-end, roughly 12 days of that category's spend is sitting in the gap, uninvoiced. Estimated accrual: $18,000 × 12 = $216,000. This is not exact, real invoice timing varies vendor to vendor, but it is a defensible, repeatable estimate grounded in your own historical data rather than a guess, and it converges toward accuracy as you refine the per-category lag figure over successive months.</p>

    <h2>Why over-accruing is just as damaging as under-accruing</h2>

    <p>The instinct under close-deadline pressure is to accrue generously, better to overstate the liability than understate it. This is wrong in a way that matters. Over-accrual overstates expenses in the current period and understates them when the accrual reverses against the real invoice next month, creating an artificial expense pattern that makes trend analysis and budget-to-actual comparison unreliable across periods, not just wrong in one direction. A consistently biased accrual method, even if conservative, is worse for decision-making than an unbiased method with more period-to-period variance, because at least the unbiased method's errors average out over time instead of compounding in one direction.</p>

    <h2>Refining lag estimates instead of guessing fresh every month</h2>

    <p>The statistical lag method above is only as good as the lag figure feeding it, and that figure should improve every month rather than staying static. Track actual invoice lag per vendor category as invoices arrive, service period end date versus invoice receipt date, and maintain a rolling average rather than a fixed assumption set once and never revisited. A vendor category that used to average 10 days of lag but has drifted to 18 days (a vendor that changed billing systems, for instance) will produce a systematically wrong accrual every month until someone notices the drift, and nobody notices a drift they are not tracking.</p>

    <p>This is also where the accrual process doubles as an early-warning signal for vendor relationship problems. A sudden, sustained increase in invoice lag from a specific vendor is worth investigating on its own merits, not just as an input to the accrual formula, since it can indicate anything from a vendor's internal billing dysfunction to a genuine service delivery problem that predates the invoice ever showing up. Treat a persistent lag change as a signal worth a phone call to the vendor, not just a spreadsheet adjustment.</p>

    <h2>The cross-team cost of a slow AP close</h2>

    <p>AP is rarely the last workstream anyone is waiting on by coincidence. FP&A cannot finalize a variance analysis against budget until expense numbers are final, which means a slow AP close delays every downstream report that depends on it, board materials, investor updates, department budget reviews. This cascading effect is easy to underestimate because AP's own delay looks small in isolation (two extra days to finalize accruals) while its downstream cost is not small at all (an entire finance team's reporting calendar compresses into the days remaining after AP finally closes). Treating AP close speed as an AP-team metric alone undercounts its actual organizational cost.</p>

    <h2>Where invoice processing speed actually helps close, and where it does not</h2>

    <p>Faster invoice OCR and extraction shrinks the population of invoices still sitting in a processing queue when close starts, which reduces the accrual estimation burden directly, fewer invoices need to be estimated because more of them have already been processed with real numbers. What faster extraction cannot fix is the upstream gap, invoices vendors have not sent yet regardless of how fast you could process them if they arrived today. This is why AP automation genuinely accelerates close (shrinking the "received but not yet processed" bucket) without eliminating the accrual problem entirely (the "not yet received at all" bucket persists no matter how fast your own pipeline runs). Both buckets need attention; solving only one leaves the other as the new pacing constraint.</p>

    <p>Our own <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR guide</a> covers the processing-speed side of this in depth; the accrual methodology above is specifically the part that speed alone does not solve, and it is worth budgeting time for even after your extraction pipeline is already fast.</p>

    <h2>Materiality: not every accrual is worth the same rigor</h2>

    <p>Applying the direct RNI method to every single open PO, down to a $40 office-supplies order, is real effort with almost no payoff, since the aggregate error from skipping small-dollar items is immaterial to the financial statements. A practical threshold: apply direct RNI tracking to POs above a set dollar amount (calibrated to your company's own materiality threshold, commonly a fraction of a percent of monthly revenue or expense), use recurring-vendor carryforward for known repeat vendors regardless of size, and let statistical lag estimation absorb the long tail of small, one-off, non-PO spend that would otherwise consume disproportionate close-team time for negligible accuracy gain.</p>

    <p>This tiered approach is also where a lot of "AP close takes too long" complaints actually originate: a team treating every invoice with the same manual rigor regardless of dollar size is spending real hours achieving precision on amounts too small to matter, time that would close the books faster if redirected entirely toward the handful of large-dollar items where getting the number right actually changes anything material.</p>

    <h2>Building a close-ready AP calendar</h2>

    <p>A practical structure that works across most close cycles: days 1 through 3 before close, freeze new vendor onboarding changes so master-data-driven exceptions do not spike right before you need clean numbers. Day of close minus 1, pull the RNI report from open POs with receipts, and pull the recurring-vendor carryforward list. Day of close, calculate statistical-lag accruals for remaining categories and post all three accrual types together. Days 1 through 5 after close, reconcile actual invoices as they arrive against the prior month's accruals and true up the variance, which is also your feedback loop for refining next month's lag estimates. Documenting this calendar once and following it consistently, rather than reinventing the sequence under deadline pressure every month, is itself one of the highest-leverage changes a team can make without buying anything new.</p>

    <h2>What I would check in your current close process</h2>

    <p>Ask whoever owns the AP accrual line item to explain, specifically, how this period's number was derived. If the honest answer is "similar to last month" without a documented method behind it, you have no real estimation process, just an informal habit that happens to produce a plausible-looking number. Build the three-method structure above even in a spreadsheet before investing in tooling to automate it, since the methodology matters more than the automation and a good spreadsheet process beats a fast, undocumented guess.</p>

    <p>Also check how the accrual reversal is handled the following month. A common, quiet error: the prior month's accrual gets reversed on schedule, but the real invoice that eventually arrives gets coded to the current period as a fresh expense rather than matched against the reversal, effectively double-counting the cost across two periods. This is easy to catch with a simple reconciliation step (does every reversed accrual have a corresponding real invoice within the following month or two) and easy to miss without one, since neither number looks obviously wrong in isolation, only the trend across several months reveals the pattern.</p>

    <h3>Frequently asked questions</h3>

    <p><strong>Why does accounts payable usually take the longest to close each month?</strong><br />
    Because AP close depends on data outside your own company's control, when vendors actually send invoices for services already rendered. Other close workstreams (payroll, bank reconciliation) run on data you already have; AP is gated by other companies' invoicing habits.</p>

    <p><strong>How do you calculate an accrual for invoices not yet received at month-end?</strong><br />
    Three methods depending on visibility: direct received-not-invoiced tracking for PO-backed spend with goods receipts, prior-period carryforward for recurring non-PO vendors, and statistical lag estimation (average daily spend times average invoice lag days) for high-volume spend not worth tracking individually.</p>

    <p><strong>Is it safer to over-accrue than under-accrue at month-end?</strong><br />
    No. Both directions distort financials, and a consistently biased method in either direction creates an artificial expense pattern that makes period-over-period trend analysis unreliable, even if the bias feels conservative. An unbiased estimation method is preferable even with more period-to-period variance.</p>

    <p><strong>Does faster invoice processing eliminate the need for month-end accruals?</strong><br />
    No. Faster processing shrinks the population of invoices sitting unprocessed in your queue at close time, reducing the estimation burden, but it does not affect invoices vendors have not sent yet at all, which remains a gap regardless of your own processing speed.</p>

    <p><strong>What is received-not-invoiced (RNI) accrual?</strong><br />
    Accruing the exact dollar amount from a goods receipt document for a PO where the invoice has not yet arrived, using the actual received quantity and price rather than an estimate, since the receiving record already contains the real numbers.</p>

    <p><strong>How often should invoice lag estimates be updated for accrual calculations?</strong><br />
    Every month, using a rolling average of actual lag (service period end date to invoice receipt date) per vendor category. A static lag assumption set once and never revisited will drift out of accuracy as vendor billing practices change, producing a systematically wrong accrual until someone notices the drift.</p>

    <p>None of this requires new software to start. Write the methodology down, apply it consistently, and refine the lag figures every month. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Accounts Payable",
  date: "August 8, 2026",
  datePublished: "2026-08-08T00:00:00.000Z",
  dateModified: "2026-08-08T00:00:00.000Z",
  last_updated: "August 8, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "month end ap close",
  secondary_keywords: [
    "accounts payable accrual methodology",
    "received not invoiced accrual",
    "ap close bottleneck",
    "month end close checklist ap",
    "accrual estimation invoices",
    "ap close process",
  ],
  tags: ["accounts payable", "invoice OCR", "month-end close", "AP automation", "accrual accounting"],
  cluster: "industry-trends",
  faq: [
    {
      question: "Why does accounts payable usually take the longest to close each month?",
      answer:
        "Because AP close depends on data outside your own company's control, when vendors actually send invoices for services already rendered. Other close workstreams run on data you already have; AP is gated by other companies' invoicing habits.",
    },
    {
      question: "How do you calculate an accrual for invoices not yet received at month-end?",
      answer:
        "Three methods depending on visibility: direct received-not-invoiced tracking for PO-backed spend, prior-period carryforward for recurring non-PO vendors, and statistical lag estimation (average daily spend times average invoice lag days) for high-volume spend.",
    },
    {
      question: "Is it safer to over-accrue than under-accrue at month-end?",
      answer:
        "No. Both directions distort financials, and a consistently biased method creates an artificial expense pattern that makes period-over-period trend analysis unreliable, even if the bias feels conservative.",
    },
    {
      question: "Does faster invoice processing eliminate the need for month-end accruals?",
      answer:
        "No. Faster processing shrinks the population of invoices sitting unprocessed at close time, but does not affect invoices vendors have not sent yet at all, which remains a gap regardless of processing speed.",
    },
    {
      question: "What is received-not-invoiced (RNI) accrual?",
      answer:
        "Accruing the exact dollar amount from a goods receipt document for a PO where the invoice has not yet arrived, using the actual received quantity and price rather than an estimate.",
    },
    {
      question: "How often should invoice lag estimates be updated for accrual calculations?",
      answer:
        "Every month, using a rolling average of actual lag per vendor category. A static lag assumption set once and never revisited will drift out of accuracy as vendor billing practices change.",
    },
  ],
}
