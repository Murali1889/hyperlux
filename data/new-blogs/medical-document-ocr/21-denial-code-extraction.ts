import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd21: BlogPost = {
  id: "md-21",
  title: "Denial Code Extraction: Why CARC and RARC Must Pair Up",
  slug: "denial-code-extraction",
  excerpt:
    "The same CARC code can mean two opposite required actions. Here is the real structural reason automated appeals need both codes read together.",
  description:
    "CARC and RARC codes are not two versions of the same information. A worked denial example shows why automated appeals routing breaks when it reads only one.",
  metaTag: "Denial Code Extraction: Why CARC and RARC Must Pair Up",
  content: `
    <p>Two claims came back from the same payer in the same week carrying the identical adjustment code: CARC 16, "Claim/service lacks information or has submission/billing error(s)." One needed nothing more than a corrected procedure code and a same-day resubmission. The other could not be appealed at all, it had to be thrown out and refiled as a brand new claim. The CARC on both remittance advices was word for word the same. What told the two apart was a second code sitting next to it, three characters long, that a lot of denial management systems don't weight with anywhere near the same rigor: the RARC.</p>
    <p>This post is about that structural distinction, why an automated appeals engine that parses Claim Adjustment Reason Codes without also parsing the accompanying Remittance Advice Remark Codes will misroute a predictable slice of its denial queue, and a worked example, built from the actual published code definitions, showing exactly how that misrouting happens. If you're building extraction across the full range of documents that feed a revenue cycle, our <a href="/documents/medical-docs">medical document processing</a> page covers the broader set this kind of pipeline typically has to handle.</p>

    <h2>What a CARC actually tells you</h2>
    <p>A Claim Adjustment Reason Code explains why the amount a payer paid differs from the amount a provider billed. It's the code that sits in the CAS segment of an ANSI X12 835 remittance advice, and every compliant payer draws from the same centrally maintained list, published through X12's code list infrastructure at x12.org/codes. CARC 1 means a deductible was applied. CARC 45 means the charge exceeds the fee schedule or contracted allowable. CARC 96 means the charge isn't covered under the plan. CARC 197 means required precertification or authorization was missing. Each CARC also carries a Claim Adjustment Group Code, a two-letter prefix, CO for Contractual Obligation, PR for Patient Responsibility, OA for Other Adjustment, PI for Payer Initiated Reductions, that determines who is financially on the hook for the adjusted amount. A CO-16 tells you the provider absorbs the write-off. A PR-16 tells you the balance can be passed to the patient. That single letter pair is doing real financial-routing work.</p>
    <p>What a CARC does not reliably tell you is what specifically to fix. Some CARCs are narrow and self-explanatory. CARC 1, deductible applied, needs no further detail, there's nothing to appeal. But a meaningful share of the CARC list is deliberately broad. CARC 16, the one in the example above, covers everything from a missing modifier to a mismatched date of service to an invalid diagnosis pointer. CARC 251, "the attachment/other documentation that was received was incomplete or deficient," covers everything from a missing signature to an entirely absent chart note. Read in isolation, these catch-all codes tell an automated system that something is wrong and, via the group code, who eventually pays for it, but not what the something is.</p>

    <h2>What a RARC adds that a CARC can't</h2>
    <p>A Remittance Advice Remark Code supplies the detail the CARC leaves out. RARCs come in two flavors. Supplemental RARCs elaborate on a specific adjustment already reported by a CARC, telling you exactly what was wrong or what's needed next. Informational RARCs, prefaced with the word "Alert," carry general processing information not tied to a dollar adjustment at all, things like appeal-rights notices or payment-schedule reminders. RARC M1 flags that an X-ray wasn't taken within the required window before the service. RARC N56 says the procedure code billed isn't correct or valid for the service billed or its date of service. RARC MA130 says the claim contains incomplete or invalid information, is unprocessable, and carries no appeal rights at all, the provider has to submit a fresh claim rather than contest the existing one.</p>
    <p>Notice what those three RARCs have in common: none of them tell you a dollar figure or a group code. They tell you a mechanism. And the mechanism is exactly what determines the next action in an appeals workflow, whether that action is "fix the code and resend," "attach the missing record and appeal," or "don't bother appealing, refile from scratch." A CARC without a RARC gives you the shape of the problem. A RARC without its CARC gives you a fix instruction with no idea what dollar amount or financial responsibility it's attached to. Neither one, alone, is a complete instruction.</p>

    <h2>The rule most denial systems underweight: some CARCs require a RARC</h2>
    <p>This isn't a soft best practice. It's written into the CARC definition itself. X12's published description of CARC 16 includes this sentence: "Claim/service lacks information or has submission/billing error(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)" That sentence is part of the code's official definition, not a footnote some vendor added. A CARC 16 with no accompanying non-alert remark code is, by X12's own usage rule, an incompletely reported denial. CARC 96 (non-covered charges) carries that identical remark-code requirement in its own official text, not just the same spirit of one. CARC 197 (missing precertification) is a similarly broad catch-all category where, even without an identical explicit clause, the remark code is where nearly all the actionable, routable detail actually lives.</p>
    <p>This matters for extraction pipelines because it means the CARC and RARC aren't two independent facts about a denial, they're one compound signal with a defined dependency between them. An extraction system that treats the RARC as an optional enrichment field, nice to capture if present but not load-bearing, is misreading the standard's own intent for codes like 16. The RARC isn't decoration on top of the CARC. For a meaningful subset of denials, it's the only field that carries the information needed to route the claim anywhere useful.</p>

    <h2>CARC and RARC, side by side</h2>
    <table>
      <thead>
        <tr>
          <th>Dimension</th>
          <th>CARC (Claim Adjustment Reason Code)</th>
          <th>RARC (Remittance Advice Remark Code)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>What it answers</td>
          <td>Why the paid amount differs from the billed amount</td>
          <td>Additional detail on that adjustment, or general remittance information</td>
        </tr>
        <tr>
          <td>Carries a group code</td>
          <td>Yes, CO/PR/OA/PI determines who is financially responsible</td>
          <td>No, RARCs carry no financial responsibility designation of their own</td>
        </tr>
        <tr>
          <td>Segment location in 835</td>
          <td>CAS segment, Loop 2100 or Loop 2110</td>
          <td>LQ segment, referenced alongside the CAS or MOA/MIA segments</td>
        </tr>
        <tr>
          <td>Specificity</td>
          <td>Ranges from narrow (deductible applied) to broad catch-all categories</td>
          <td>Usually narrower and more actionable than the CARC it accompanies</td>
        </tr>
        <tr>
          <td>Two subtypes</td>
          <td>No subtypes; one list</td>
          <td>Supplemental (ties to a specific adjustment) and Informational/Alert (general notice)</td>
        </tr>
        <tr>
          <td>Required pairing</td>
          <td>Certain CARCs, CARC 16 explicitly, require at least one non-alert remark code by definition</td>
          <td>Meaningless for routing without the CARC it's attached to</td>
        </tr>
        <tr>
          <td>Maintained by</td>
          <td>X12, published at x12.org/codes</td>
          <td>X12, same registry, same publication cadence</td>
        </tr>
      </tbody>
    </table>
    <p>If you're already extracting the surrounding remittance advice, our post on <a href="/resources/blogs/835-remittance-advice-processing">835 remittance advice processing</a> covers pulling the CLP and CAS loops these codes live inside, and our piece on <a href="/resources/blogs/eob-parsing-automation">EOB parsing automation</a> covers the patient-facing document that describes the same denial in plain language, usually without any CARC or RARC at all.</p>

    <h2>Worked example: same CARC, opposite required action</h2>
    <p>Take a behavioral health clinic billing an established-patient office visit, CPT 99214, to the same commercial payer on two separate dates of service. Both claims come back on the 835 with the same group code and the same CARC.</p>
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Claim A</th>
          <th>Claim B</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Procedure billed</td><td>CPT 99214</td><td>CPT 99214</td></tr>
        <tr><td>Group code</td><td>CO</td><td>CO</td></tr>
        <tr><td>CARC</td><td>16, claim/service lacks information or has submission/billing error(s)</td><td>16, claim/service lacks information or has submission/billing error(s)</td></tr>
        <tr><td>RARC</td><td>N56, procedure code billed is not correct/valid for the services billed or the date of service billed</td><td>MA130, claim contains incomplete and/or invalid information, no appeal rights afforded because the claim is unprocessable, submit a new claim</td></tr>
      </tbody>
    </table>
    <p>Read CARC 16 alone, and Claim A and Claim B look identical: a submission or billing error, provider-side financial responsibility because of the CO group code, and, on the surface, something to fix and appeal. A denial routing engine that only keys off the CARC would send both to the same queue, most likely a general "resubmit with corrected documentation" bucket.</p>
    <p>Bring in the RARC and the two claims split into completely different remediation paths. On Claim A, N56 says specifically that the procedure code doesn't match the service or the date it was billed for, which points to a coding error, likely the wrong CPT was selected for that visit type, or an annual code-set update changed which code applied on that date. The fix is a corrected claim with the right procedure code, resubmitted through the normal claim-correction channel. No formal appeal needed, and treating it as one just adds weeks of turnaround for a five-minute fix.</p>
    <p>On Claim B, MA130 says something categorically different: the claim is "unprocessable," a specific payer term meaning it never entered real adjudication, and there are no appeal rights attached to it at all. Routing this claim into an appeals workflow, attaching supporting documentation, requesting reconsideration, wastes staff time on a process the payer has already told you, in the remark code itself, will not be honored. The only correct action is to submit an entirely new claim with corrected information from scratch.</p>
    <p>A routing engine built to read only the CARC treats both claims the same and gets both wrong in different ways: it over-processes Claim A as a formal appeal it never needed, and it wastes an appeal attempt on Claim B that the payer has explicitly foreclosed. A routing engine that reads only the RARC and drops the CARC has a different failure: it knows what N56 or MA130 means in isolation, but it has lost the group code, and without the group code it can't tell whether the resulting balance, if any survives correction, is a contractual write-off or something billable to the patient. Both codes have to be read as one unit for the routing decision to be right in either direction.</p>

    <h2>Why CARC-only routing fails at scale</h2>
    <p>The Claim A and Claim B pattern isn't a hand-picked edge case, it's the normal shape of the broad CARC codes. CARC 16 is one of the most frequently reported adjustment reasons across commercial and government payers precisely because it's a catch-all, which means the population of claims sitting behind it is unusually diverse in what actually needs to happen next. A team that builds routing logic keyed on CARC value alone will, for narrow codes like CARC 1, get correct behavior almost by accident, there's only one thing a deductible adjustment can mean. For broad codes like 16, 96, and 197, the same CARC-only logic collapses genuinely different remediation paths, a coding fix, a documentation appeal, a prior-authorization backfill, a total refile, into a single bucket and picks one default action for all of them.</p>
    <p>The practical cost shows up as two separate failure modes rather than one obvious error. Claims that needed a fast correction get slow-walked through an appeals process that was never necessary. Claims that had no appeal rights get appealed anyway and simply time out or bounce, burning the calendar days before someone notices the payer already said no and the claim needs to be refiled, not resubmitted. Neither failure looks like a crash. Both look like a denial queue that's technically being worked but is quietly slower and less accurate than it should be.</p>

    <h2>Building extraction that treats CARC and RARC as one signal</h2>
    <p>The fix isn't exotic. It's extracting the CAS segment's adjustment trio, group code, CARC, and dollar amount, together with whatever LQ-segment remark codes are attached to that same adjustment, and keeping them joined as a single record rather than as two independently indexed fields. A few things follow from that:</p>
    <ul>
      <li><strong>Never resolve a CARC to an action without checking for an attached remark code first.</strong> If the CARC's own definition requires one, as CARC 16's does explicitly, the absence of a parsed remark code should be treated as an extraction gap to investigate, not as "no additional detail available."</li>
      <li><strong>Build the routing table on CARC-plus-RARC pairs, not on CARC alone, for the broad catch-all codes.</strong> CARC 16 paired with N56 routes to coding correction. CARC 16 paired with MA130 routes to full refile with no appeal step. CARC 16 paired with a documentation-related remark routes to the appeals team with the missing record attached. The CARC narrows the category; the RARC picks the specific path within it.</li>
      <li><strong>Keep the group code attached through the whole pipeline, not just at ingestion.</strong> Whether a corrected claim, once resolved, leaves a balance the patient can be billed hinges on CO versus PR, and that distinction has to survive into whatever system generates patient statements downstream.</li>
      <li><strong>Treat Alert-prefixed RARCs differently from supplemental ones.</strong> An Alert RARC is general information, an appeal-rights reminder or a payment-schedule note, and shouldn't be parsed as if it were describing the specific defect in the claim the way a supplemental RARC does.</li>
    </ul>
    <p>None of this requires guessing. X12 publishes the full CARC and RARC lists, including which codes are Alert-only, at x12.org/codes, and the CAS and LQ segment structures in the 835 are fixed by the HIPAA-mandated transaction standard, so the join between a CARC and its remark codes is a parsing task against a known schema, not a heuristic. Our post on <a href="/resources/blogs/medical-coding-automation">medical coding automation</a> covers the adjacent problem of getting the original procedure and diagnosis codes right in the first place, which is often the upstream fix that a correctly routed N56-style denial points back to.</p>

    <h2>What this means for an appeals workflow</h2>
    <p>If you're building or evaluating automated denial and appeals routing, the practical takeaway is to stop treating the RARC as a nice-to-have enrichment on top of the CARC. For a large share of real-world denials, especially the broad catch-all CARCs that make up a disproportionate share of the denial queue, the RARC is where the actionable instruction actually lives, and the CARC's group code is where the financial-responsibility answer lives. Extraction that captures one without reliably joining it to the other produces a system that looks like it's automating appeals while actually automating a coin flip between the wrong action and the right one. Get the pairing right, respect the cases where the standard itself says a remark code is required, and the same denial queue that used to need a person reading each remittance advice line by line can be routed correctly without one.</p>
    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/transforming-financial-services.png",
  featuredImage: "/images/transforming-financial-services.png",
  category: "Healthcare",
  date: "September 19, 2026",
  datePublished: "2026-09-19T00:00:00.000Z",
  dateModified: "2026-09-19T00:00:00.000Z",
  last_updated: "September 19, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "denial code extraction",
  secondary_keywords: [
    "CARC RARC codes",
    "denial appeal routing by reason code",
    "remittance advice remark code",
    "automated denial appeals routing",
    "835 denial code parsing",
    "healthcare claims denial management",
  ],
  tags: ["healthcare", "denial management", "CARC RARC", "medical billing", "claims appeals", "revenue cycle"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is the difference between a CARC and a RARC?",
      answer:
        "A Claim Adjustment Reason Code (CARC) explains why a payer paid an amount different from what was billed and carries a group code (CO, PR, OA, or PI) that determines who is financially responsible for the difference. A Remittance Advice Remark Code (RARC) adds specific detail about that adjustment, or conveys general processing information when prefaced with Alert. The CARC gives the category and financial responsibility; the RARC gives the actionable detail.",
    },
    {
      question: "Why do some CARC codes require a RARC to be complete?",
      answer:
        "X12's own published definition for CARC 16 states that at least one non-Alert remark code must be provided alongside it. Broad catch-all CARCs like 16, 96, and 197 cover a wide range of underlying issues, so the remark code is where most of the specific, actionable detail actually lives. Without it, the CARC alone doesn't tell you what to fix.",
    },
    {
      question: "What does CARC 16 mean and why does it show up so often?",
      answer:
        "CARC 16 means the claim or service lacks information or has a submission or billing error. It's broad by design, covering everything from a mismatched procedure code to missing documentation, which is exactly why it appears frequently across payers and why the accompanying remark code is essential to figuring out the specific fix.",
    },
    {
      question: "Can the same CARC code require two completely different fixes?",
      answer:
        "Yes. CARC 16 paired with a remark code like N56, which flags an invalid or mismatched procedure code, points to a straightforward coding correction and resubmission. The same CARC 16 paired with a remark code like MA130, which states the claim is unprocessable with no appeal rights, means the claim cannot be appealed at all and must be refiled as a new claim. The CARC is identical in both cases; the required action is opposite.",
    },
    {
      question: "What do the CO, PR, OA, and PI group codes mean?",
      answer:
        "These two-letter prefixes attached to a CARC assign financial responsibility for the adjustment. CO stands for Contractual Obligation, meaning the provider absorbs the amount and cannot bill the patient. PR stands for Patient Responsibility, meaning the balance can be passed to the patient. OA is Other Adjustment and PI is Payer Initiated Reductions. A fifth code, CR for Corrections and Reversals, is not used in the current 5010 transaction version.",
    },
    {
      question: "Why does automated denial routing built on CARC alone produce errors?",
      answer:
        "Because broad CARC codes collapse genuinely different remediation paths, a coding correction, a documentation appeal, or a full refile with no appeal rights, into a single code value. A routing engine that ignores the accompanying RARC picks one default action for all of them, which either sends fixable claims through an unnecessary appeals process or wastes an appeal attempt on a claim the payer has already stated cannot be appealed.",
    },
  ],
}
