import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa09: BlogPost = {
  id: "ka-09",
  title: "SAR Filing: The Deadline Math and the 2025 Change",
  slug: "suspicious-activity-report-filing",
  excerpt:
    "AML content mentions SAR workflows and the 30-day deadline in passing. Almost none cover the exact timeline mechanics or a real 2025 regulatory clarification.",
  description:
    "Suspicious activity report filing: the $5,000 threshold, the 30-plus-30-day deadline mechanics, and FinCEN's October 2025 continuing-activity clarification.",
  metaTag: "SAR Filing: The Real Deadline Mechanics Explained (2026)",
  content: `
    <p>AML content routinely mentions SAR workflows only in passing, extraction feeds a monitoring system, a monitoring system triggers a SAR, decision-making requires human judgment. What that content consistently skips is the actual, specific timeline mechanics governing when a SAR has to be filed, the dollar threshold that actually applies, and a real, recent regulatory clarification from October 2025 that corrected a documented, years-long industry misconception about what happens after a SAR gets filed.</p>

    <p>This is the actual threshold and deadline math, a real piece of <a href="/solutions/compliance-risk">compliance risk automation</a>, and the specific 2025 change most existing content has not caught up to yet. It sits alongside the disposition-tracking discipline covered in our <a href="/resources/blogs/watchlist-screening-automation">watchlist screening piece</a>.</p>

    <h2>The actual threshold, and why "suspicion, not dollar amount" is true but incomplete</h2>

    <p>A SAR obligation for a bank is genuinely triggered by knowledge, suspicion, or reason to suspect certain violations, not simply by a transaction crossing some specific dollar figure entirely on its own, an accurate point that gets widely and correctly repeated throughout most AML content. What that framing leaves out is that the obligation only applies once a transaction involves or aggregates at least $5,000, a specific, real floor set under 31 CFR 1020.320. Below that floor, a bank generally is not required to file a SAR regardless of how suspicious the activity looks; above it, suspicion, not the specific dollar amount itself, determines whether filing is actually required. Both halves of this rule matter, the floor and the suspicion standard above it, and most content states only the second half.</p>

    <h2>The deadline mechanics: 30 days, with one specific extension</h2>

    <p>A bank must file a completed SAR no later than 30 calendar days after the exact date it first initially detects facts that may reasonably constitute a basis for filing at all. A specific, narrow extension exists: if no suspect has been identified as of the date of detection, the bank may delay filing for an additional 30 calendar days specifically to work on identifying one, but reporting cannot be delayed more than 60 calendar days total from the date of initial detection under any circumstance, suspect identified or not.</p>

    <table>
      <thead>
        <tr><th>Scenario</th><th>Filing deadline</th></tr>
      </thead>
      <tbody>
        <tr><td>Suspect identified at time of detection</td><td>30 calendar days from date of initial detection</td></tr>
        <tr><td>No suspect identified at time of detection</td><td>Up to 30 additional days to identify one, but never more than 60 calendar days total from detection</td></tr>
      </tbody>
    </table>

    <p>The 60-day figure functions as a hard, absolute ceiling in every case, never a target to aim for by default. A pipeline tracking only "30 days from detection" as a single, universal deadline will file too early in cases where the extension genuinely applies and more time to identify a suspect is both permitted and useful, while a pipeline that treats 60 days as the default deadline for every case, rather than the specific extension scenario it actually is, risks missing the standard 30-day deadline for the far more common case where a suspect was already identifiable at detection.</p>

    <h2>A worked example with actual calendar dates</h2>

    <p>An automated monitoring system running normal, everyday overnight batch processing flags an unusual transaction pattern on March 3, and a compliance analyst reviews and confirms it as warranting SAR consideration on March 5, the actual date of initial detection for regulatory purposes, not March 3 when the system first surfaced it and not the date of the underlying transactions themselves, which may have occurred over the preceding several weeks. If a suspect is identifiable as of March 5, the SAR must be filed no later than April 4, 30 calendar days out. If no suspect is identifiable as of March 5, the bank may take up to an additional 30 days specifically to identify one, but the absolute filing deadline remains May 4, 60 calendar days from the March 5 detection date, regardless of whether a suspect was ever successfully identified during that extension window.</p>

    <h2>Why SAR filings carry legal protection, and why that protection exists</h2>

    <p>Federal law provides a specific, real safe harbor for financial institutions that file a SAR in good faith and in the ordinary course of their reporting obligations, protecting the institution from civil liability to the customer even if the underlying suspicion turns out to be unfounded or the SAR is later shown to have been based on a mistaken read of the transaction pattern. This protection exists specifically because the entire SAR system depends on institutions filing when suspicion genuinely exists, not only when a violation has already been definitively proven, and a system that exposed filers to liability for good-faith false positives would predictably chill legitimate filing activity exactly where the regulatory framework needs it least chilled.</p>

    <h2>The confidentiality requirement that runs alongside the filing deadline</h2>

    <p>A SAR filing itself, and even the bare fact that one was filed at all, is treated as strictly confidential under federal law, and disclosing that a SAR exists or was filed regarding a specific customer to that customer or to an unauthorized third party is itself a separate violation, commonly referred to as tipping off. This confidentiality requirement runs on its own timeline independent of the 30-and-60-day filing deadlines, applying indefinitely to the fact of the filing itself, not just during the filing window. A document and workflow pipeline handling SAR-related records needs access controls reflecting this distinct, ongoing confidentiality obligation, separate from and in addition to whatever access controls govern the underlying transaction and customer data the SAR itself was built from.</p>

    <h2>What actually counts as "the date of initial detection"</h2>

    <p>The 30-day clock starts from the date facts are detected that may constitute a basis for filing, not from the date of the underlying suspicious transaction itself, which can be a meaningfully earlier date if a transaction sits unreviewed for some period before anyone actually notices the pattern warranting a SAR. This distinction matters directly for a document and transaction-monitoring pipeline: the detection date needs to be tracked as its own distinct, recorded event, timestamped when a human or an automated system actually flags the activity as warranting review, not silently inferred from the underlying transaction date, since the two can differ and only the detection date is what the regulatory clock actually runs against.</p>

    <h2>The October 2025 clarification most existing content has not caught up to</h2>

    <p>For a considerable number of years, industry practice around continuing suspicious activity operated under a specific, widespread, and quite persistent misconception: that after filing an initial SAR, a bank was required to conduct a dedicated, separate review of the account roughly every 90 days specifically to determine whether the suspicious activity had continued, triggering a follow-up SAR if it had. In October 2025, FinCEN issued clarifying guidance directly addressing this misconception, confirming that banks are not required to conduct a separate, dedicated review following a SAR filing at all. Instead, banks may rely on their existing, risk-based ongoing monitoring, procedures, and controls to identify and report continuing suspicious activity as it is surfaced through normal operations, rather than running a distinct, SAR-triggered review cycle layered on top of standard monitoring.</p>

    <h2>Why this distinction matters operationally, not just as a compliance footnote</h2>

    <p>A bank running a dedicated, entirely separate 90-day post-SAR review process, sincerely believing all along it was regulatorily required, was doing genuinely more manual work than the actual rule demands, work that could instead be consolidated into the same risk-based ongoing monitoring infrastructure already covering the rest of the customer population. This is a real, practical operational simplification opportunity for any institution whose current SAR workflow still includes a standalone continuing-activity review step built specifically because of the pre-2025 misconception, not because the underlying regulation actually required it. The continuing-SAR filing cadence itself, commonly every 90 to 120 days for genuinely ongoing suspicious activity, still applies once continuing activity is actually identified; what changed is only the mechanism by which that continuing activity gets surfaced in the first place, standard risk-based monitoring rather than a mandated, separate dedicated review.</p>

    <h2>What I would check in your current SAR filing pipeline</h2>

    <p>Ask whether your system tracks the date of initial detection as its own distinct, timestamped event, separate from the underlying transaction date, since the 30-day clock runs from detection, not the transaction itself, and conflating the two risks miscalculating the actual deadline. Then confirm your process correctly distinguishes the standard 30-day deadline from the narrow, suspect-identification-specific extension capped at 60 days total, rather than treating one figure as a universal default for every case. Confirm your access controls actually reflect the ongoing, indefinite confidentiality obligation around the fact of a filing itself, not just the standard access restrictions already applied to the underlying customer and transaction data. Finally, if your program still runs a dedicated, standalone post-SAR continuing-activity review specifically because of the pre-October-2025 industry practice, confirm whether that separate process remains genuinely necessary under the updated guidance or whether it can now be consolidated into your existing risk-based ongoing monitoring instead, the same kind of stale rule worth periodically re-auditing against current regulatory guidance covered from the escrow-interest angle in our <a href="/resources/blogs/state-mortgage-document-requirements">state mortgage document requirements piece</a>.</p>

    <h3>Frequently asked questions</h3>

    <p><strong>What dollar threshold triggers a SAR filing obligation for a bank?</strong><br />
    Transactions involving or aggregating at least $5,000, combined with knowledge, suspicion, or reason to suspect certain violations. Below that floor, a SAR generally is not required regardless of suspicion level.</p>

    <p><strong>How many days does a bank have to file a SAR?</strong><br />
    30 calendar days from the date of initial detection of facts that may constitute a basis for filing. If no suspect was identified at detection, up to 30 additional days are allowed specifically to identify one, capped at 60 days total.</p>

    <p><strong>What date does the SAR filing deadline actually run from?</strong><br />
    The date facts are detected that may warrant filing, not the date of the underlying suspicious transaction itself. These can differ if activity goes unreviewed for a period before detection.</p>

    <p><strong>What changed with FinCEN's October 2025 SAR guidance?</strong><br />
    FinCEN clarified that banks are not required to conduct a separate, dedicated account review following a SAR filing to check for continuing activity. Existing risk-based ongoing monitoring can identify and report it instead.</p>

    <p><strong>Does the October 2025 clarification eliminate continuing SAR filings entirely?</strong><br />
    No. The continuing-SAR filing cadence, commonly every 90 to 120 days once continuing activity is identified, still applies. What changed is how that activity gets surfaced, standard monitoring rather than a mandated separate review.</p>

    <p><strong>Why does the detection-date distinction matter for a compliance pipeline?</strong><br />
    Because the 30-day clock legally runs from detection, not the transaction date. A pipeline inferring the deadline from the transaction date alone risks calculating an incorrect filing deadline, sometimes by weeks, depending on how long the underlying activity actually sat unreviewed before someone noticed it.</p>

    <p>The safe harbor protection and the tipping-off prohibition are not footnotes to the filing deadline mechanics above, they are the two structural features that make the whole system function the way it is actually designed to. The safe harbor is what lets an institution file promptly on genuine suspicion without waiting for certainty, since certainty is rarely available within a 30-day window and the entire framework depends on filing before certainty exists, not after. The confidentiality requirement is what keeps a filed SAR from tipping off exactly the person it was filed about, undermining any investigation the filing might otherwise support. Neither one is optional or a matter of institutional preference; both are structural requirements a document and workflow pipeline needs to actively support, not simply avoid violating by accident.</p>

    <p>The 30-day SAR deadline gets mentioned constantly and precisely explained rarely, the specific $5,000 floor underneath the suspicion standard, the narrow 60-day-maximum extension, and the exact date the clock actually starts from. The October 2025 clarification on continuing-activity review is exactly the kind of recent, real regulatory update that a pipeline built on older assumptions can keep running past without anyone noticing the extra work it no longer needs to do. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Compliance",
  date: "August 8, 2026",
  datePublished: "2026-08-08T00:00:00.000Z",
  dateModified: "2026-08-08T00:00:00.000Z",
  last_updated: "August 8, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "suspicious activity report filing",
  secondary_keywords: [
    "sar filing deadline 30 days",
    "fincen sar threshold 5000",
    "sar continuing activity review",
    "31 cfr 1020.320 requirements",
    "sar detection date deadline",
    "fincen october 2025 sar guidance",
  ],
  tags: ["compliance", "AML", "SAR filing", "BSA", "FinCEN"],
  cluster: "compliance",
  faq: [
    {
      question: "What dollar threshold triggers a SAR filing obligation for a bank?",
      answer:
        "Transactions involving or aggregating at least $5,000, combined with knowledge, suspicion, or reason to suspect certain violations. Below that floor, a SAR generally is not required.",
    },
    {
      question: "How many days does a bank have to file a SAR?",
      answer:
        "30 calendar days from the date of initial detection. If no suspect was identified at detection, up to 30 additional days are allowed to identify one, capped at 60 days total.",
    },
    {
      question: "What date does the SAR filing deadline actually run from?",
      answer:
        "The date facts are detected that may warrant filing, not the date of the underlying suspicious transaction itself, since the two can differ if activity goes unreviewed before detection.",
    },
    {
      question: "What changed with FinCEN's October 2025 SAR guidance?",
      answer:
        "FinCEN clarified that banks are not required to conduct a separate, dedicated account review following a SAR filing. Existing risk-based ongoing monitoring can identify continuing activity instead.",
    },
    {
      question: "Does the October 2025 clarification eliminate continuing SAR filings entirely?",
      answer:
        "No. The continuing-SAR filing cadence, commonly every 90 to 120 days once continuing activity is identified, still applies. What changed is how that activity gets surfaced.",
    },
    {
      question: "Why does the detection-date distinction matter for a compliance pipeline?",
      answer:
        "The 30-day clock legally runs from detection, not the transaction date. Inferring the deadline from the transaction date alone risks calculating an incorrect filing deadline.",
    },
  ],
}
