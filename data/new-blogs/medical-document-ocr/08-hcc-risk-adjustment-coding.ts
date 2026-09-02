import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd08: BlogPost = {
  id: "md-08",
  title: "HCC Risk Adjustment Coding: Why Hierarchies Change Pay",
  slug: "hcc-risk-adjustment-coding",
  excerpt:
    "A CKD stage 3b versus stage 4 diagnosis moves a real CMS-HCC coefficient by 0.387. Here is how hierarchies and ICD-10 mapping actually work.",
  description:
    "How CMS-HCC coding maps ICD-10-CM codes to Hierarchical Condition Categories, why hierarchies suppress less severe codes, and how V28 changed the math.",
  metaTag: "HCC Risk Adjustment Coding: The Real V28 Hierarchy Logic",
  content: `
    <p>Two chart notes, six months apart, for the same Medicare Advantage patient. In January, a primary care note reads "chronic kidney disease, stage 3b." In June, a nephrology note reads "chronic kidney disease, stage 4, eGFR 22." Both are technically correct descriptions of a progressing condition. But under the CMS-HCC V28 model, that second note is worth 0.387 more in a patient's risk adjustment factor than the first, using CMS's own published relative factor coefficients for the community non-dual aged population (0.514 for stage 4 versus 0.127 for stage 3b). Multiply that gap across a health plan's full risk pool and you start to understand why risk adjustment coding teams obsess over documentation specificity that would look like pedantry to almost anyone else in healthcare.</p>

    <p>This post is about the actual mechanics behind that gap: how ICD-10-CM codes become Hierarchical Condition Categories, why a more severe HCC in the same category chain wipes out a less severe one instead of stacking with it, and why the V28 model introduced a second suppression mechanism that most explainers still describe as if it were the same thing. If your team processes intake records, referral notes, or scanned charts before coding even starts, our <a href="/documents/medical-docs">medical document processing</a> page covers how structured extraction feeds that front end.</p>

    <h2>What a RAF score actually pays for</h2>

    <p>CMS pays Medicare Advantage organizations a capitated amount per enrollee per month. That base rate gets multiplied by a risk adjustment factor, or RAF score, that reflects how expensive CMS expects that specific enrollee to be to care for over the coming year, relative to an average beneficiary. A RAF of 1.0 is average. A RAF of 2.3 says CMS expects this person's care to cost roughly 2.3 times the average, and pays the plan accordingly. The legal basis for adjusting MA payments this way sits in 42 CFR 422.308, which requires CMS to announce the risk factors used to set capitation rates each year, and the underlying model, CMS-HCC, has been in continuous use since 2004 and moved to its current V28 version for the full 2026 payment year.</p>

    <p>The RAF is built from two kinds of inputs added together: demographic factors (age, sex, Medicaid dual-eligibility status, disability origin of entitlement) and disease factors, one for each qualifying HCC a member carries into that payment year. The demographic piece is close to fixed. The disease piece is where documentation, coding, and therefore risk adjustment coding as a discipline actually lives, because disease factors are not automatic. They exist only if a qualifying diagnosis was documented by an eligible provider type, in a face-to-face encounter, during that calendar year, and was coded.</p>

    <h2>How ICD-10-CM codes actually become HCCs</h2>

    <p>Not every ICD-10-CM code carries risk adjustment weight. Out of the roughly 74,719 billable ICD-10-CM codes, V28 recognizes 7,770 of them as risk-adjustable, down from 9,797 under the prior V24 model, a net reduction of just over 2,000 codes even as the number of category groupings expanded from 86 to 115. CMS built this mapping by clinically grouping diagnoses that predict similar future costs into a single category, then assigning each category a coefficient derived from actual claims cost data. A code that maps to no HCC at all, an unspecified or historical diagnosis, for instance, contributes nothing to the RAF regardless of how accurately it describes the patient.</p>

    <p>This is a many-to-one relationship. Multiple distinct ICD-10-CM codes can map into the same HCC. Under V28, for example, both N18.30 (CKD stage 3, unspecified) and N18.31 (CKD stage 3a) map into HCC 329, while N18.32 (CKD stage 3b) maps into a separate category, HCC 328, even though clinically stage 3a and stage 3b are adjacent points on the same eGFR scale. The coding granularity CMS built into the ICD-10-CM code set does not always line up one-to-one with the granularity of the HCC categories built on top of it, and that mismatch is exactly where hierarchy logic starts to matter.</p>

    <h2>The real mechanism: why a more severe HCC suppresses a less severe one</h2>

    <p>Here is the part most coding guides gloss over with a single sentence like "the more severe condition takes precedence." What actually happens is that CMS groups related HCCs into hierarchy chains, and within a chain, only the single highest-coefficient category a member qualifies for contributes to the RAF. Every lower category in that same chain is zeroed out for scoring purposes, even if the diagnosis codes for the lower-severity condition are present and correctly coded in the claims data. The suppression happens at the model level, not the coding level. Coders are not instructed to omit the lower-severity code; the model itself discards its contribution once a higher-severity match exists.</p>

    <p>Chronic kidney disease is one of the cleanest examples of a full hierarchy chain in V28, and it is a good one because the four categories map directly to a familiar clinical staging scale.</p>

    <table>
      <thead>
        <tr><th>HCC</th><th>Category</th><th>ICD-10-CM example</th><th>V28 coefficient (community non-dual aged)</th></tr>
      </thead>
      <tbody>
        <tr><td>HCC 326</td><td>CKD, Stage 5</td><td>N18.5, N18.6 (ESRD, pre-dialysis)</td><td>0.815</td></tr>
        <tr><td>HCC 327</td><td>CKD, Severe (Stage 4)</td><td>N18.4</td><td>0.514</td></tr>
        <tr><td>HCC 328</td><td>CKD, Moderate (Stage 3B)</td><td>N18.32</td><td>0.127</td></tr>
        <tr><td>HCC 329</td><td>CKD, Moderate (Stage 3, except 3B)</td><td>N18.30, N18.31</td><td>0.127</td></tr>
      </tbody>
    </table>

    <p>Stage 5 sits at the top of the chain. If a member has documented codes supporting both HCC 326 and HCC 327 in the same payment year, which happens routinely as CKD progresses and a patient sees both a primary care provider and a nephrologist, the model applies only HCC 326's 0.815 coefficient. HCC 327 is excluded, not added on top. A coder or biller who assumes hierarchy chains work additively, and reports both, is not committing fraud, since the raw codes are accurate, but they are misunderstanding how the RAF actually gets computed, and any manual RAF estimate built that way will overstate the real number.</p>

    <p>The clinical logic behind why CMS designed it this way is straightforward: a patient with stage 5 CKD is, by definition, also managing whatever cost burden stage 4 CKD implies. Adding a second, smaller coefficient on top for the less severe version of the same organ dysfunction would double-count a cost driver that is already captured, once, at its most severe documented level. Hierarchies exist specifically to prevent that kind of double counting within a single clinical dimension.</p>

    <h2>Hierarchies are not the only suppression mechanism in V28, and conflating the two costs you accuracy</h2>

    <p>This is the part almost no HCC explainer separates out clearly, and it matters because it changes what "documentation specificity" actually buys you depending on which condition you are coding. V28 introduced a second, distinct technique called constraining, and it behaves differently from hierarchy exclusion even though the surface effect looks similar: a lower number of HCCs end up mattering than the raw diagnosis list would suggest.</p>

    <p>Diabetes is the clearest example. In V28, HCC 36 (diabetes with severe acute complications), HCC 37 (diabetes with chronic complications), and HCC 38 (diabetes with no, glycemic, or unspecified complications) all carry the identical coefficient of 0.166 for the community non-dual aged population. Under the prior V24 model, complicated diabetes carried a meaningfully higher coefficient, up around 0.3, than uncomplicated diabetes. CMS's own rationale for constraining these coefficients together in V28 was that the complication-specific diabetes codes had become vulnerable to coding-intensity gaming, where documentation specificity was being chased for RAF benefit that did not track real cost differences between the groups. So CMS gave all three diabetes HCCs the same weight, which means capturing diabetes at all now matters far more than which specific diabetes HCC you land in.</p>

    <p>That is a fundamentally different mechanism from hierarchy exclusion. With CKD, the hierarchy chain still rewards precise staging, because 326, 327, 328, and 329 keep meaningfully different coefficients and only the top one in a chain counts. With diabetes, constraining flattened the coefficients across the whole family, so chasing a more specific diabetes complication code no longer buys additional RAF once you have any qualifying diabetes HCC documented. A risk adjustment coding program that treats "document more specifically, always" as a universal instruction is leaving CKD-type accuracy gains on the table in some categories while wasting coder time chasing precision that V28 already made irrelevant in others.</p>

    <h2>A worked RAF calculation, in numbers</h2>

    <p>To see how the pieces combine, take a hypothetical enrollee: a 74-year-old woman, community non-dual, with a demographic base factor plus two documented, qualifying conditions for the payment year, stage 4 CKD and diabetes with chronic complications.</p>

    <table>
      <thead>
        <tr><th>Component</th><th>Value</th><th>Source</th></tr>
      </thead>
      <tbody>
        <tr><td>Demographic factor (illustrative, age/sex band)</td><td>≈ 0.40</td><td>CMS age-sex factor table, varies by exact age and status, not a fixed constant</td></tr>
        <tr><td>HCC 327, CKD Stage 4</td><td>0.514</td><td>V28 relative factor table, CNA population</td></tr>
        <tr><td>HCC 37, Diabetes with chronic complications</td><td>0.166</td><td>V28 relative factor table, CNA population</td></tr>
        <tr><td>Total RAF (sum)</td><td>≈ 1.08</td><td>Demographic + disease factors, additive</td></tr>
      </tbody>
    </table>

    <p>Now change one fact: the CKD documentation only ever specified "stage 3b" for the whole year, never stage 4, because the progression note from nephrology never made it into the coding queue. Swap HCC 327 (0.514) for HCC 328 (0.127) and the same patient's RAF drops to roughly 0.69, a difference of about 0.39 in the score, purely from a documentation gap, with the clinical reality of the patient's kidney function unchanged either way. Scale that gap across a health plan's full Medicare Advantage membership and the aggregate revenue impact of consistently capturing the correct hierarchy level, versus consistently missing it, becomes the entire economic argument for risk adjustment coding as a function.</p>

    <h2>Why documentation specificity is the whole game, and why it resets every January</h2>

    <p>HCC risk adjustment does not carry a diagnosis forward automatically. Every qualifying condition has to be documented again, in a face-to-face encounter, by an eligible provider, within the current calendar year, or it drops off the RAF calculation for the following payment year even if the condition itself has not changed or improved. This is usually called the annual recapture requirement, and it is the single most common reason chronic, stable conditions, well-controlled diabetes, treated depression, documented CKD, quietly fall out of a plan's risk score even though nothing about the patient's health actually got better.</p>

    <p>CMS also requires that a diagnosis be supported under what coders generally call MEAT criteria: evidence that the condition was Monitored, Evaluated, Assessed, or Treated during that encounter, not simply listed in a problem list carried forward from a prior visit without clinical engagement that year. A diagnosis sitting untouched on an EHR problem list does not, by itself, satisfy documentation requirements for risk adjustment purposes even if it is technically accurate. That distinction is why risk adjustment coding teams spend so much of their time chasing specific chart language rather than just confirming a diagnosis exists somewhere in the record.</p>

    <h2>RADV audits raised the stakes on getting the hierarchy right</h2>

    <p>Coding a chart into the wrong HCC, or over-reading MEAT support that is not really there, is not just a lost-revenue problem in the other direction, it is now an active audit exposure. In February 2023, CMS finalized a Risk Adjustment Data Validation rule permitting extrapolated overpayment recovery from Medicare Advantage contracts back to payment year 2018, and removing the fee-for-service adjuster that had previously discounted findings to account for documentation differences between MA and traditional Medicare. CMS estimated the change would recover roughly $4.7 billion in overpayments over a ten-year window.</p>

    <p>That rule's status is not settled. On September 25, 2025, a federal judge in the Northern District of Texas ruled for the plaintiff in Humana Inc. et al. v. Becerra et al. and vacated the rule's extrapolation methodology on procedural grounds under the Administrative Procedure Act, finding CMS had not given adequate notice of changes made between the 2018 proposed version and the 2023 final rule. The court did not rule on whether extrapolation itself is a lawful audit method, only on how CMS adopted it. CMS appealed that decision on November 26, 2025, so the underlying question of whether large-scale extrapolated RADV recovery survives is still working through the courts as of this writing. Either way, the direction is clear: HCC coding accuracy, including correct hierarchy application rather than just correct diagnosis capture, sits closer to audit and legal exposure than it did even a few years ago.</p>

    <h2>Where this actually breaks in production coding workflows</h2>

    <p>The mechanics above assume the right diagnosis language reaches a coder in a form they can act on. In practice, the hierarchy logic and coefficient math are the easy part, they are deterministic, published, and software handles them without error. The hard part is upstream: pulling the specific staged, qualified diagnosis language, "CKD stage 4," not "CKD," out of scanned referral letters, faxed specialist notes, discharge summaries, and PDF chart exports that never entered a structured EHR field in the first place. A nephrologist's dictated note that says "kidney function continues to worsen, now consistent with stage 4" carries real HCC value, but only if something actually extracts that staging language and routes it to coding before the calendar year closes.</p>

    <p>This is where document processing quality has a direct line to RAF accuracy, beyond just workflow efficiency. A system that reliably distinguishes "CKD, unspecified" from "CKD, stage 4" inside unstructured clinical text, across scanned faxes and inconsistent note formats, is doing work that translates directly into the 0.387-point gap in the worked example above. Our <a href="/resources/blogs/medical-coding-automation">medical coding automation</a> post covers how structured extraction feeds a coding queue, and our <a href="/resources/blogs/ccda-document-processing">C-CDA document processing</a> post covers the structured-data side of the same problem when records arrive as C-CDA rather than scanned PDFs. For the documentation-support question specifically, that is, what counts as sufficient evidence a condition was actually addressed, see our <a href="/resources/blogs/medical-necessity-documentation">medical necessity documentation</a> post.</p>

    <h2>What to check if you are evaluating an HCC coding or extraction workflow</h2>

    <p>Pull a sample of charts for members with progressive chronic conditions, CKD, heart failure, COPD, and check whether the coding output reflects the most recent, most severe staged diagnosis documented that year, or whether it is still coding off an earlier, less specific note that never got updated. Then check whether your extraction or coding tool can tell the difference between a diagnosis that was monitored, evaluated, assessed, or treated at a visit versus one that was simply copied forward on a problem list, since only the former satisfies risk adjustment documentation requirements. Neither check requires deep familiarity with the RAF formula itself. Both require confidence that the specific clinical language in a chart, not just the presence of a diagnosis code, is being read correctly and consistently.</p>

    <p>Sources: HCC category numbers, ICD-10-CM mappings, and V28 relative factor coefficients checked against CMS-HCC V28 model documentation and published relative factor tables. RADV rule and litigation details checked against CMS's February 2023 final rule announcement and reporting on Humana Inc. et al. v. Becerra et al. (N.D. Tex., ruling September 25, 2025; CMS appeal filed November 26, 2025). Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/idp-vs-ocr.png",
  featuredImage: "/images/idp-vs-ocr.png",
  category: "Healthcare",
  date: "September 6, 2026",
  datePublished: "2026-09-06T00:00:00.000Z",
  dateModified: "2026-09-06T00:00:00.000Z",
  last_updated: "September 6, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "hcc risk adjustment coding",
  secondary_keywords: [
    "cms-hcc model v28",
    "hierarchical condition category coding",
    "icd-10 to hcc mapping",
    "risk adjustment factor score",
    "medicare advantage risk adjustment",
    "radv audit hcc coding",
  ],
  tags: ["healthcare", "risk adjustment", "medical coding", "HCC coding", "Medicare Advantage", "ICD-10"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is HCC risk adjustment coding?",
      answer:
        "It is the process of translating documented ICD-10-CM diagnoses into Hierarchical Condition Categories under the CMS-HCC model, which CMS uses to calculate a risk adjustment factor (RAF) score that determines how much a Medicare Advantage plan gets paid for each enrollee.",
    },
    {
      question: "How do ICD-10-CM codes map to HCCs?",
      answer:
        "CMS maintains a mapping in which multiple related ICD-10-CM codes can map to a single HCC. Under the V28 model, only 7,770 of the roughly 74,719 billable ICD-10-CM codes carry risk-adjustable weight, grouped into 115 HCC categories, each assigned a coefficient based on expected future cost.",
    },
    {
      question: "Why does a more severe HCC suppress a less severe one in the same category?",
      answer:
        "CMS groups related conditions into hierarchy chains so a patient is scored once, at their highest documented severity level, rather than having the model add a smaller coefficient for a less severe version of the same underlying condition on top. For chronic kidney disease, for example, HCC 326 (Stage 5) suppresses HCC 327 (Stage 4), which in turn sits above HCC 328 and HCC 329 (Stage 3).",
    },
    {
      question: "Is hierarchy exclusion the same thing as constraining in the V28 model?",
      answer:
        "No. Hierarchy exclusion means only the top HCC in a chain counts toward the RAF, with distinct coefficients still assigned to each level. Constraining, introduced in V28, assigns identical coefficients across a family of related HCCs, as it does for the three diabetes categories, so documenting a more specific complication no longer adds RAF value once any qualifying HCC in that family is captured.",
    },
    {
      question: "Why do chronic conditions need to be redocumented every year for risk adjustment?",
      answer:
        "The CMS-HCC model requires a qualifying diagnosis to be documented in a face-to-face encounter by an eligible provider during the current payment year, evidenced by monitoring, evaluation, assessment, or treatment. A condition that is not re-addressed that year drops out of the following year's RAF calculation even if it has not clinically resolved.",
    },
    {
      question: "What is a RADV audit and why does it matter for HCC coding accuracy?",
      answer:
        "A Risk Adjustment Data Validation audit checks whether documented HCCs are actually supported by the medical record. CMS's 2023 final rule allowed extrapolated overpayment recovery from MA contracts back to 2018, though a federal court vacated that extrapolation methodology on procedural grounds in September 2025, a decision CMS is currently appealing.",
    },
  ],
}
