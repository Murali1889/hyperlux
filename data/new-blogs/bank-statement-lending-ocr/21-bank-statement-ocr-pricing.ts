import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogBl21: BlogPost = {
  id: "bl-21",
  title: "Bank Statement OCR Pricing: What 99% Actually Means",
  slug: "bank-statement-ocr-pricing",
  excerpt:
    "Pricing pages list per-page costs and headline accuracy numbers clearly. Almost none explain what 99% field accuracy actually means once it compounds.",
  description:
    "Bank statement OCR pricing: why a 99% field-accuracy claim can mean barely one in five documents is actually fully clean, and the math behind that gap.",
  metaTag: "Bank Statement OCR Pricing: The Real Math (2026)",
  content: `
    <p>Bank statement OCR pricing content is genuinely clear about the numbers everyone asks first: per-page cost, typically a fraction of a cent to a few cents for raw extraction, and a headline accuracy figure, commonly 97 to 99%-plus for clean digital statements from major banks. What that content does not explain is what that headline accuracy number actually means once it compounds across every field on a real, multi-page bank statement, a gap between the marketed number and the practical, document-level reality that gets more consequential as volume scales up, not less.</p>

    <p>This is the actual math behind that gap, relevant to anyone evaluating vendors for <a href="/use-cases/loan-verification">automated loan verification</a>, and why a vendor's 99% claim and a 99.9% claim are not a rounding difference but a completely different operational reality at real lending volume.</p>

    <h2>The pricing structure itself is the well-covered part</h2>

    <p>Raw OCR extraction specifically on bank statements typically runs from a fraction of a cent to a few cents per page depending on the vendor and extraction depth, with more sophisticated field-level and table-structure extraction commanding a premium over basic text recognition. Enterprise platforms with human-in-the-loop review layered on top often price differently again, sometimes per document rather than per page, sometimes with volume tiers that step down meaningfully above certain monthly thresholds. This structure is genuinely well documented across vendor comparison content, and it is the number most buyers focus on first, reasonably enough, since it is the most visible, easiest-to-compare line item sitting right there on an invoice or a pricing page, well before anyone gets to the harder question of what the accompanying accuracy claim actually means once real volume moves through it.</p>

    <h2>What "99% accuracy" actually measures, and why the question matters</h2>

    <p>A 99% accuracy claim, printed confidently on a pricing or comparison page, can actually describe at least three genuinely different things: character-level accuracy, the share of individual characters read correctly; field-level accuracy, the share of discrete data fields, a date, an amount, a transaction description, extracted correctly as a whole; or document-level accuracy, the share of entire documents extracted with zero errors anywhere on the page. Vendors overwhelmingly and consistently quote the first two, since both reliably produce flattering, high-percentage headline numbers. Almost none lead with the third one, because that third number, once you actually go and compute it from the first two, looks dramatically less impressive on a pricing page.</p>

    <h2>The compounding math that turns 99% into something much smaller</h2>

    <p>A typical multi-page bank statement, once you count every transaction row's date, description, and amount alongside header fields, running balance figures, and account details, commonly contains somewhere in the range of 100 to 200 individual extracted fields. If each field is independently correct 99% of the time, the probability that an entire document comes through with zero errors anywhere on it is 0.99 raised to the power of the field count, not 99% itself. At 150 fields, that works out to roughly 22%, meaning fewer than one in four documents is actually fully clean, even though the field-level accuracy number being advertised is a genuinely impressive-sounding 99%.</p>

    <table>
      <thead>
        <tr><th>Field-level accuracy</th><th>Fields per statement</th><th>Probability the full document is error-free</th></tr>
      </thead>
      <tbody>
        <tr><td>99.0%</td><td>150</td><td>Approximately 22%</td></tr>
        <tr><td>99.5%</td><td>150</td><td>Approximately 47%</td></tr>
        <tr><td>99.9%</td><td>150</td><td>Approximately 86%</td></tr>
      </tbody>
    </table>

    <p>The jump from 99% to 99.9% field-level accuracy sounds like a marginal, almost cosmetic improvement, a difference of nine-tenths of one percentage point. At the document level, across a realistic field count, it is the difference between roughly one in five documents actually being fully clean and nearly nine in ten being fully clean, a completely different operational reality that the headline percentage alone gives absolutely no indication of at all.</p>

    <h2>Where the 150-field estimate actually comes from</h2>

    <p>That field count is not an arbitrary round number chosen to make the math look dramatic. A typical three-page monthly statement with 35 to 40 transactions per page, a realistic volume for an active checking account, produces roughly three extracted fields per transaction row, date, description, and amount, before counting anything else. Thirty-five transactions per page across three pages, at three fields each, is already over 300 individual transaction-level fields, before adding account number, statement period, opening balance, closing balance, and any per-page subtotal figures on top. A conservative estimate lands well within, and often above, the 100 to 200 range used in the table above, which means the illustrative numbers are, if anything, understating the real compounding effect for a genuinely busy account.</p>

    <h2>What this actually means for review-queue staffing, not just vendor comparison</h2>

    <p>The practical consequence of a roughly 22% document-level clean rate is not abstract. It means a review or exception-handling process built around the assumption that only a small minority of documents need any human attention at all is sized for a reality that does not match the actual error distribution. If closer to three-quarters of documents contain at least one field error somewhere on the page, even at a headline-impressive 99% field accuracy, a review process needs to be built and staffed around checking most documents at some level, not treating manual review as a rare exception path reserved for the visibly obvious failures. Underestimating this, based on trusting the field-level headline number as if it described document-level reality, is a common, avoidable staffing and workflow-design mistake that only becomes visible once real volume starts moving through the pipeline and the review queue backs up further than anyone budgeted for.</p>

    <h2>The honest caveat: real errors are not always independent</h2>

    <p>The compounding calculation above assumes each field's error probability is independent of every other field's, a simplifying assumption worth stating plainly rather than glossing over. In practice, extraction errors often cluster rather than scattering randomly: a single smudged or low-contrast section of a scanned page can cause several adjacent fields to fail together, while a clean, well-formatted digital PDF can produce long stretches of perfectly extracted fields in a row. Real-world clustering can push the actual document-level clean rate either higher or lower than the naive independent-probability calculation, depending on whether a given document's errors, when they happen, tend to be isolated or concentrated. The independence assumption is still the right starting point for a conservative estimate and for comparing vendors on a like-for-like basis, but it is a model, not a guarantee, and testing against your own actual document population remains the only way to know your real number rather than assuming the theoretical one applies exactly.</p>

    <h2>Why bank statements make this worse than most other document types</h2>

    <p>This compounding effect scales directly with field count, which is exactly why bank statements are a particularly unforgiving case, more so than a single-page ID document or a simple form with a handful of fields. A multi-page statement with a dense transaction table has meaningfully more individual fields than most other document types this series has covered, which means the same field-level accuracy percentage produces a lower document-level clean rate on a bank statement than it would on a shorter document, a real, structural reason accuracy claims need more scrutiny specifically for this document type rather than less.</p>

    <h2>What this means for how a vendor's accuracy claim should actually be evaluated</h2>

    <p>The practical question to ask is not "what is your accuracy number" but "what is your accuracy number measuring, and what does that imply at the document level for a statement with our typical field count." A vendor quoting 99% field accuracy without volunteering the document-level implication is not necessarily being dishonest, field-level accuracy is a real, legitimate metric, but the number alone answers a narrower question than most buyers assume it does when comparing it against their own volume and error tolerance. The same discipline applies here that matters for evaluating any statistical accuracy claim before trusting it at real volume, the sample-size and confidence-interval reasoning covered from a different angle in our <a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">parallel-run sample size piece</a>, where a headline percentage similarly needed unpacking before it could be trusted for a real decision.</p>

    <h2>The volume-commitment cliff worth watching in a lending-specific contract</h2>

    <p>A pricing structure separate from the accuracy question entirely, but still genuinely worth flagging for lending specifically: many vendor contracts step pricing down at higher committed monthly volume tiers, which works well for a business with steady, predictable document flow but creates a real risk for mortgage or refinance-heavy lending volume, which is genuinely cyclical and can swing sharply with interest rate movements. A lender that commits to a high-volume pricing tier during a refinance boom and then sees volume drop meaningfully when rates rise can end up paying a per-page rate calculated against a commitment level current volume no longer supports, an avoidable cost risk worth negotiating flexibility around specifically because lending volume, unlike many other document-processing use cases, is not steady by nature.</p>

    <h2>What I would check before signing a bank statement OCR contract at scale</h2>

    <p>Ask the vendor directly whether their headline accuracy number is character-level, field-level, or document-level, and if it is not document-level, ask them to compute or estimate the document-level implication against your own typical statement's field count, using the same math above. Then ask specifically how confidence-based routing to human review is priced, since low-confidence pages requiring manual review carry a real cost that a flat per-page rate can obscure until volume reveals how often it actually triggers. Confirm your own review-queue staffing plan reflects the real document-level clean rate rather than the field-level headline, and that someone has actually run the vendor's number against your own document's field count rather than trusting the marketed percentage at face value, the same discipline covered from the running-balance angle in our <a href="/resources/blogs/nsf-overdraft-detection-ocr">NSF and overdraft detection piece</a>, where a plausible-looking summary number similarly needed a closer, more granular look before it could be trusted for a real decision. Finally, if your volume is meaningfully cyclical, negotiate contract flexibility around volume-tier commitments rather than locking into a rate structure built for steady-state volume a lending business rarely actually has.</p>
    <p>A 99% accuracy number is a real, legitimate figure, and it is also answering a narrower question than the confident, round percentage suggests. Knowing which question it actually answers, and doing the compounding math against a real document's field count, is the difference between an informed vendor comparison and one built on a number that sounds far more reassuring than it turns out to be in practice once real volume starts moving through the pipeline every single day. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Lending",
  date: "August 22, 2026",
  datePublished: "2026-08-22T00:00:00.000Z",
  dateModified: "2026-08-22T00:00:00.000Z",
  last_updated: "August 22, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "bank statement ocr pricing",
  secondary_keywords: [
    "document level ocr accuracy",
    "field level vs character level accuracy",
    "ocr accuracy compounding error",
    "bank statement extraction cost",
    "ocr vendor accuracy claims",
    "lending document processing pricing",
  ],
  tags: ["lending", "bank statement OCR", "pricing", "vendor evaluation", "accuracy benchmarking"],
  cluster: "comparison",
  noindex: true,
  faq: [
    {
      question: "What is the difference between field-level and document-level OCR accuracy?",
      answer:
        "Field-level accuracy measures the share of individual extracted fields correct on their own. Document-level accuracy measures the share of entire documents with zero errors anywhere on the page.",
    },
    {
      question: "Why does a 99% field accuracy claim not mean 99% of documents are error-free?",
      answer:
        "Document-level accuracy compounds field-level accuracy across every field on the page. At roughly 150 fields per statement, 99% field accuracy produces only about 22% of documents fully error-free.",
    },
    {
      question: "Why does the gap between field and document accuracy matter more for bank statements?",
      answer:
        "Multi-page statements with dense transaction tables contain meaningfully more individual fields than most other document types, which makes the same accuracy percentage compound to a lower document-level clean rate.",
    },
    {
      question: "How much does going from 99% to 99.9% field accuracy actually matter?",
      answer:
        "At 150 fields, it is the difference between roughly 22% and 86% of documents being fully clean, a dramatically different operational reality despite sounding like a marginal improvement.",
    },
    {
      question: "What should a lender actually ask a vendor about their accuracy claim?",
      answer:
        "Whether the number is character-level, field-level, or document-level, and if not document-level, what the document-level implication is against the lender's own typical statement field count.",
    },
    {
      question: "Why is volume-tiered pricing risky specifically for lending?",
      answer:
        "Lending volume, particularly mortgage and refinance volume, is genuinely cyclical and can swing sharply with interest rates, risking a pricing commitment current activity no longer supports.",
    },
  ],
}
