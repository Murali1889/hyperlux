import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogBl13: BlogPost = {
  id: "bl-13",
  title: "DTI Calculation OCR: What Actually Counts as Debt",
  slug: "dti-calculation-ocr",
  excerpt:
    "DTI calculators explain the formula clearly. Almost none cover the debt-inclusion rules, like the student loan default that can overstate a payment by 3x.",
  description:
    "DTI calculation OCR: the student loan 1% default versus the actual documented payment, and the 12-month proof needed to exclude a debt someone else pays.",
  metaTag: "DTI Calculation OCR: What Counts as Debt (2026)",
  content: `
    <p>Debt-to-income calculators are everywhere, and the formula itself is simple: total monthly debt divided by gross monthly income. What almost none of that content covers is the harder, upstream question the formula depends on entirely, which debts actually belong in that numerator, and under what specific documented conditions a debt that technically exists can be legitimately excluded. Getting the formula right on the wrong set of inputs produces a precise, confidently wrong DTI.</p>

    <p>This is the actual debt-classification logic underneath DTI calculation as part of <a href="/use-cases/loan-verification">automated loan verification</a>, sourced from published underwriting guidance, and where document extraction determines the outcome more than the arithmetic does.</p>

    <h2>Front-end and back-end DTI, briefly, because the formula is not the hard part</h2>

    <p>Front-end DTI measures housing costs alone against gross monthly income. Back-end DTI measures every recurring monthly debt obligation, housing included, against the same income figure. Automated underwriting systems typically allow a materially higher back-end DTI ceiling than manual underwriting does, commonly up to 50% through an automated system versus a lower ceiling, often 36%, extendable to 45% with strong compensating factors, for a manually underwritten file. None of that ceiling matters if the numerator feeding into it was built from the wrong set of debts to begin with, which is the actual, harder problem underneath the simple division.</p>

    <h2>The student loan default that can overstate a real payment by three times or more</h2>

    <p>When a credit report shows a student loan in deferment or on an income-driven repayment plan with no current payment amount reported, standard guidance requires using either a payment equal to 1% of the outstanding balance, or the actual, fully amortizing payment from the documented repayment plan terms, whichever the file can actually support with real documentation. The gap between these two options is not trivial. A borrower with a $60,000 student loan balance on an income-driven repayment plan might have a real, documented monthly payment of $180, based on their actual income and family size under the plan's formula, while the 1% default would instead assign a $600 monthly payment to the exact same debt, more than three times the real, documented figure.</p>

    <p>A pipeline that defaults to the 1% calculation whenever no payment shows on the credit report, without checking whether the applicant's file actually contains repayment plan documentation supporting a lower, real figure, systematically overstates DTI for a population that includes a meaningful share of all borrowers, most income-driven repayment plans are specifically designed around a percentage of discretionary income rather than the loan balance, which routinely produces a documented payment well under the flat 1% default.</p>

    <h2>The "someone else pays this" exclusion, and why it is a bank statement problem</h2>

    <p>A debt the applicant is legally obligated on, a co-signed auto loan, a jointly held credit card, can be excluded from the applicant's own DTI calculation if someone else, obligated on the same debt, has actually been making the payments. This exclusion is not available on the applicant's say-so. It requires documentation: the most recent 12 months of canceled checks or bank statements from the other party, the person actually making the payments, showing a consistent, on-time payment history with no delinquencies during that period. This is a document-extraction requirement pointed at a completely different party's financial records than the applicant's own file, a distinct verification target most DTI-focused content simply does not mention, since it treats DTI as a calculation problem rather than a document-sourcing problem with its own separate evidentiary trail to build.</p>

    <table>
      <thead>
        <tr><th>Scenario</th><th>What is required</th><th>What happens if missing</th></tr>
      </thead>
      <tbody>
        <tr><td>Co-signed auto loan, parent actually pays</td><td>12 months of the parent's own bank statements or canceled checks showing the payment, with no delinquencies</td><td>Debt counts fully in the applicant's DTI, regardless of who actually pays it</td></tr>
        <tr><td>Deferred student loan, income-driven plan documented</td><td>Actual repayment plan documentation showing the real monthly payment amount</td><td>Falls back to the 1%-of-balance default, often materially higher than the real payment</td></tr>
        <tr><td>Installment loan with 8 payments remaining, small monthly impact</td><td>Confirmation the remaining payments do not significantly affect ability to meet other obligations</td><td>Included in DTI if the payment amount is judged significant despite the short remaining term</td></tr>
      </tbody>
    </table>

    <h2>The short-term debt rule, and the judgment call most pipelines skip entirely</h2>

    <p>Installment debts and other mortgage debts with more than 10 monthly payments remaining count in DTI without exception. Debts with 10 or fewer payments remaining are not automatically excluded, they still count if the payment amount is large enough to meaningfully affect the borrower's ability to meet their other credit obligations during those remaining months. This is a judgment-based exception, not a flat rule, and a pipeline treating "10 or fewer payments remaining" as an automatic, unconditional exclusion is applying a simpler rule than the one that actually exists, potentially excluding a debt that should have stayed in the calculation because its monthly payment is large enough to matter regardless of how few payments remain.</p>

    <h2>Alimony and child support: a debt with its own documentation requirement</h2>

    <p>Court-ordered alimony and child support obligations count toward DTI on the same logic as the installment-debt threshold: an obligation continuing for more than 10 months counts, while one ending sooner is subject to the same significance-based judgment call. What makes this category distinct is where the payment amount actually comes from. It is not extracted from a credit report line item the way most other debts are, since support obligations often do not appear on a credit report at all. The figure has to come from the underlying legal document itself, a divorce decree, separation agreement, or court order, which means the extraction target for this specific debt category is a legal document rather than a financial statement, a genuinely different document type than every other debt category in the DTI calculation and one that requires its own extraction template rather than reusing whatever logic handles credit-report-sourced debts.</p>

    <h2>Revolving debt: minimum payment as reported, not a percentage estimate</h2>

    <p>Credit card and other revolving debt generally uses the actual minimum payment reported on the credit report or account statement, not an estimated percentage of the balance, whenever that reported minimum is actually available. A pipeline defaulting to a flat percentage-of-balance estimate for every revolving account, rather than checking for and using the actual reported minimum payment first, introduces the same category of error as the student loan default: a plausible-looking number that does not match what the applicant is actually obligated to pay each month, in either direction depending on how the estimate compares to the real minimum.</p>

    <h2>A worked example combining more than one rule on the same file</h2>

    <p>An applicant's credit report shows three debts relevant to this analysis: a $45,000 student loan in deferment with no reported payment, a co-signed $18,000 auto loan the applicant's sibling has been paying for the past two years, and a personal loan with 6 payments remaining at $410 per month. Applying the rules correctly: the student loan requires either documented IDR payment terms or the 1% default, $450 per month absent documentation. The auto loan is excludable entirely if the sibling's 12 months of bank statements confirming the payment history are obtained and show no delinquencies; without that documentation, the full loan payment counts. The personal loan, despite having only 6 payments remaining, still counts if $410 per month is judged significant relative to the applicant's overall obligations, which at most income levels it would be. A pipeline defaulting to the simplest version of each rule, always the 1% student loan figure, always excluding sub-10-payment debts, always requiring the applicant to separately request the co-signed exclusion rather than prompting for it, arrives at a materially different, generally overstated DTI than one that actually applies each rule's real conditions. None of the three individual errors looks dramatic in isolation, but stacked together on a single file, they can move an applicant from comfortably qualified to declined on paper, without any actual change in what the applicant can afford to pay each month.</p>

    <h2>Where this needs to live in a DTI pipeline</h2>

    <p>Practically, debt classification needs to happen as a distinct step before the DTI formula runs at all, not folded into it as an afterthought: flag every deferred or income-driven student loan and check for supporting repayment plan documentation before defaulting to the 1% calculation, flag every co-signed or jointly held debt and prompt for the other party's 12-month payment history before including it by default, and apply the 10-payment threshold as a conditional check against payment significance rather than an automatic cutoff. This classification step is where the real DTI accuracy work happens, and it depends entirely on extracting the right supporting documents, repayment plan terms, another party's bank statements, not on the arithmetic that follows, the same document-sourcing discipline covered from a different angle in our <a href="/resources/blogs/verification-of-assets-ocr">verification of assets guide</a>, where documentation quality determined the real usable figure rather than the raw total.</p>

    <h2>What I would check in your current DTI calculation pipeline</h2>

    <p>Ask whether your pipeline checks for actual income-driven repayment documentation before defaulting every deferred student loan to the 1%-of-balance figure, since that default alone can overstate DTI by a meaningful margin for a large share of applicants. Then ask whether co-signed and jointly held debts are automatically flagged for the other-party documentation exclusion, or whether that exclusion only happens if an applicant or loan officer thinks to request it manually. Confirm the 10-payments-remaining rule is applied as the conditional, significance-based test it actually is, not as an automatic exclusion regardless of payment size. And check whether alimony and child support obligations are being extracted from the actual legal document, rather than assumed absent simply because they do not appear on the applicant's credit report the way most other debts do, the same off-credit-report documentation discipline covered from a different angle in our <a href="/resources/blogs/4506-c-tax-transcript-ocr">4506-C tax transcript piece</a>, where the relevant figure similarly did not live in the credit pull at all.</p>
    <p>The DTI formula has not changed in decades and is not the part worth spending engineering effort on. The debt classification feeding into it, what counts, what can be documented away, and what depends on a judgment call rather than a fixed threshold, is where the real accuracy work lives, and it is exactly the layer most DTI-focused content skips on the way to explaining the division. A precise answer to the wrong question is still the wrong answer, however cleanly it was computed. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Lending",
  date: "August 20, 2026",
  datePublished: "2026-08-20T00:00:00.000Z",
  dateModified: "2026-08-20T00:00:00.000Z",
  last_updated: "August 20, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "dti calculation ocr",
  secondary_keywords: [
    "student loan dti 1 percent rule",
    "debt to income ratio automation",
    "co-signed debt exclusion documentation",
    "income driven repayment dti calculation",
    "back end dti ratio underwriting",
    "debt classification lending pipeline",
  ],
  tags: ["lending", "underwriting", "DTI", "mortgage documents", "bank statement OCR"],
  cluster: "industry-trends",
  noindex: true,
  faq: [
    {
      question: "What is the difference between front-end and back-end DTI?",
      answer:
        "Front-end DTI measures housing costs alone against gross monthly income. Back-end DTI measures every recurring monthly debt obligation, including housing, against the same income figure.",
    },
    {
      question: "How is a deferred student loan payment calculated for DTI if no payment is reported?",
      answer:
        "Either 1% of the outstanding balance or the actual, fully amortizing payment from documented income-driven repayment plan terms. The documented figure is often materially lower than the 1% default.",
    },
    {
      question: "How can a co-signed debt be excluded from an applicant's DTI?",
      answer:
        "By documenting that another party obligated on the debt has actually been making the payments, verified through 12 months of that other party's own bank statements or canceled checks showing no delinquencies.",
    },
    {
      question: "Are debts with 10 or fewer remaining payments automatically excluded from DTI?",
      answer:
        "No. They are excluded only if the payment amount does not significantly affect the borrower's ability to meet other credit obligations during the remaining months.",
    },
    {
      question: "Why does DTI accuracy depend more on documentation than on the calculation formula?",
      answer:
        "The formula is simple division. The real determination is which debts belong in the numerator and at what amount, which depends on repayment plan documentation and another party's bank statements.",
    },
    {
      question: "What happens if a pipeline defaults to the simplest version of every DTI rule?",
      answer:
        "It generally overstates DTI, using the higher 1% student loan default instead of documented payments, and missing available debt exclusions that require proactive documentation requests.",
    },
  ],
}
