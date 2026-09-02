import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd12: BlogPost = {
  id: "md-12",
  title: "Medical Necessity Documentation: The LCD Gap Behind Denials",
  slug: "medical-necessity-documentation",
  excerpt:
    "CMS CERT data shows most PAP device improper payments trace to missing documentation, not failed medical necessity. Here is why, with a worked LCD example.",
  description:
    "Why medical necessity denials usually trace to a documentation gap against an LCD, not a clinical dispute, with a worked CPAP example and CMS citations.",
  metaTag: "Medical Necessity Documentation: The Real LCD Gap",
  content: `
    <p>In 2024, Medicare's Comprehensive Error Rate Testing program measured a 12.5 percent improper payment rate for positive airway pressure devices. Of the payments flagged as improper, 71.2 percent were attributed to insufficient documentation. Only 9 percent were attributed to the claim actually failing medical necessity criteria. Read that gap again: for every claim where a clinician genuinely ordered a device the patient didn't need, there were roughly eight where the patient likely needed it and the paperwork just didn't say so in the way the payer's policy required.</p>
    <p>That gap is the subject of this post. "Medical necessity denial" is the label payers and revenue cycle teams use for both situations, and treating them as the same problem wastes appeal effort, misdiagnoses the root cause, and leaves the actual fix, better <a href="/documents/medical-docs">medical document processing</a> against the specific coverage policy a claim will be checked against, off the table. Most of what gets called a medical necessity dispute is really a documentation match failure against a Local Coverage Determination's stated checklist, and the two require completely different responses.</p>

    <h2>What Medical Necessity Actually Means in Medicare</h2>
    <p>The term has a specific statutory anchor. Section 1862(a)(1)(A) of the Social Security Act excludes from Medicare coverage any expenses "not reasonable and necessary for the diagnosis or treatment of illness or injury or to improve the functioning of a malformed body member." Everything downstream, every LCD, every NCD, every documentation checklist a Medicare Administrative Contractor publishes, exists to translate that broad statutory phrase into something a claims processing system can actually evaluate line by line.</p>
    <p>The problem with the statutory language on its own is that it's a judgment call, not a rule. "Reasonable and necessary" doesn't tell a claims examiner whether a continuous glucose monitor for a specific diabetes diagnosis clears the bar, or how many physical therapy visits a lumbar strain justifies before imaging becomes appropriate. CMS fills that gap two ways: national coverage determinations, which apply everywhere, and local coverage determinations, which apply only within a given contractor's territory. Confusing the two, or assuming they work the same way, is where a lot of denial analysis goes wrong before it even starts.</p>

    <h2>NCD vs LCD: Not a Difference of Degree, a Difference of Origin</h2>
    <p>An NCD is a national policy. CMS issues it directly, typically after an evidence review process that can include public comment, and it binds every Medicare Administrative Contractor in the country the same way. If an NCD says a service is covered under defined circumstances, that determination holds whether the claim is processed in Vermont or Guam.</p>
    <p>An LCD is not that. It's issued by an individual Medicare Administrative Contractor and its authority is bounded to that contractor's jurisdiction. Medicare currently splits fee-for-service claims processing across 12 A/B MAC jurisdictions plus 4 DME MAC jurisdictions, each administered by one of a small number of contractors (Noridian and CGS between them run all four DME MAC jurisdictions, for instance). An LCD written by one of those contractors reflects that contractor's own clinical review process and only governs claims routed through it. Two patients with identical diagnoses, identical treatment plans, and identical documentation, one in a state processed by Noridian's jurisdiction and one processed by a different MAC, can legitimately get different coverage outcomes if the two contractors have published different LCDs for the same service. That is not a system error. It's how the local in "Local Coverage Determination" is designed to work.</p>
    <p>The formal definition sits in federal regulation: 42 CFR 400.202 defines an LCD as a decision by a Medicare Administrative Contractor on whether to cover a particular service on a contractor-wide basis, consistent with the reasonable and necessary standard in section 1862(a)(1)(A). The Medicare Program Integrity Manual, CMS Publication 100-08, Chapter 13, lays out how MACs are required to develop and maintain these policies, including that an LCD cannot be more restrictive than an existing NCD covering the same service and can only fill gaps where no NCD exists or add jurisdiction-specific implementation detail.</p>

    <table>
      <thead><tr><th>Attribute</th><th>NCD</th><th>LCD</th></tr></thead>
      <tbody>
        <tr><td>Issued by</td><td>CMS directly</td><td>Individual Medicare Administrative Contractor</td></tr>
        <tr><td>Geographic reach</td><td>Nationwide, binds every MAC</td><td>Only the issuing contractor's jurisdiction</td></tr>
        <tr><td>Legal basis</td><td>Section 1862(a)(1)(A) of the Social Security Act</td><td>Same statute, implemented per 42 CFR 400.202</td></tr>
        <tr><td>Can it override the other</td><td>Sets the floor; LCDs cannot conflict with it</td><td>Cannot be more restrictive than a governing NCD, can only add detail where no NCD exists</td></tr>
        <tr><td>Development process</td><td>CMS evidence review, often with public comment</td><td>Contractor Advisory Committee input, published under Medicare Program Integrity Manual Ch. 13</td></tr>
        <tr><td>Typical content</td><td>Broad coverage or non-coverage decision for a service or technology</td><td>Detailed clinical criteria, diagnosis code lists, documentation requirements, frequency limits</td></tr>
        <tr><td>Where you find it</td><td>Medicare Coverage Database, NCD manual</td><td>Medicare Coverage Database, filtered to the relevant contractor jurisdiction</td></tr>
      </tbody>
    </table>

    <p>The practical consequence for anyone building or reviewing documentation: an LCD is usually the more operationally important document, because NCDs tend to state broad policy while LCDs carry the granular criteria (specific ICD-10 codes, specific test result thresholds, specific frequency limits) that a claim actually gets checked against. When there's no NCD for a service, which is common, the LCD is the entire coverage rulebook.</p>

    <h2>Why "Medical Necessity Denial" Usually Means Something Narrower</h2>
    <p>Here is where the CERT numbers from the opening matter. The Comprehensive Error Rate Testing program is CMS's independent audit of a statistical sample of Medicare fee-for-service claims, and it categorizes the root cause of every improper payment it finds. For positive airway pressure devices in the 2024 reporting period, the breakdown was insufficient documentation at 71.2 percent, other errors at 19.3 percent, actual medical necessity failure at 9 percent, incorrect coding at 0.3 percent, and no documentation at all at 0.2 percent.</p>
    <p>Sit with that 9 percent versus 71.2 percent split for a second, because it inverts the intuitive assumption. Most billing teams treat a medical necessity denial as a verdict on the patient's clinical picture, something to argue about with the payer's medical director. But CMS's own audit data on this device category says the far more common failure is that the record existed, the treatment was probably appropriate, and the specific pieces of documentation the LCD requires simply weren't captured, or weren't captured in a form a reviewer could verify without inference. Insufficient documentation in CERT's taxonomy means the medical record didn't contain enough information to support that all coverage criteria were met, not that the record contradicted medical necessity. That's a different failure mode with a different fix. You don't win it with a stronger clinical argument. You win it by closing the specific gap between what the LCD requires on paper and what the chart actually shows.</p>

    <h2>Worked Example: A CPAP Denial That Was Never Really About the Diagnosis</h2>
    <p>LCD L33718, Positive Airway Pressure Devices for the Treatment of Obstructive Sleep Apnea, is published across the DME MAC jurisdictions and lays out numeric coverage criteria in a way that makes it a clean example of how a documentation gap gets misread as a clinical dispute. The LCD sets two separate paths to coverage based on the sleep study result:</p>
    <ul>
      <li>An apnea-hypopnea index (AHI) or respiratory disturbance index (RDI) of 15 or greater, with a minimum of 30 qualifying events recorded, on its own is sufficient.</li>
      <li>An AHI or RDI between 5 and 14, with a minimum of 10 qualifying events, is only sufficient if the record also documents at least one of a defined list of symptoms or comorbidities: excessive daytime sleepiness, impaired cognition, mood disorder, insomnia, hypertension, ischemic heart disease, or history of stroke.</li>
    </ul>
    <p>Now walk through a realistic case. A patient completes a home sleep test showing an AHI of 9. That falls squarely in the 5-to-14 band, the one that requires the additional symptom documentation. The physician's note from the visit that ordered the study says the patient reported being "very tired most days" and recommends PAP therapy. Clinically, that's almost certainly excessive daytime sleepiness, exactly the kind of finding the LCD accepts in that AHI band. But "very tired most days" is not the same string, and arguably not even the same clinical concept to an automated or first-pass human reviewer, as the LCD's own language: excessive daytime sleepiness, documented as such. If the note never uses that phrase or an unambiguous clinical equivalent, and never explicitly ties the symptom to the coverage decision, a reviewer working the claim against L33718's checklist has nothing to check the box against. The claim gets denied for failing to establish medical necessity.</p>
    <p>Nothing about that outcome reflects a real dispute over whether the patient has clinically significant sleep apnea. The AHI of 9 with a plausible daytime sleepiness complaint is a textbook borderline-but-covered case under the LCD's own stated criteria. What actually happened is a terminology and completeness gap: the clinical note used ordinary conversational language instead of the specific, checkable language the LCD's second pathway requires, and the required linkage between the AHI band and the qualifying symptom was never made explicit in the chart. An appeal built around "the patient really does have sleep apnea" will underperform an appeal, or better, an initial submission, built around adding an addendum or letter that maps the existing clinical facts directly onto L33718's own two criteria: AHI value with event count, plus the specific qualifying symptom named in the policy's language.</p>
    <p>This is also where the case for automated extraction against the LCD text itself gets concrete. A system that has parsed L33718's coverage logic can flag, at the point of documentation, that a 9 AHI result requires one of seven named symptoms to be present in the chart, and that "very tired most days" needs a coding decision (does it map to excessive daytime sleepiness or not) before the claim goes out, not after a denial comes back. That's a fundamentally different intervention point than appeal writing after the fact.</p>

    <h2>The Documentation Elements an LCD Is Actually Checking</h2>
    <p>Across most LCDs, regardless of the specific service, the required documentation clusters into a few recurring categories. Recognizing the category helps predict what a reviewer is going to look for even before reading the specific LCD text.</p>
    <table>
      <thead><tr><th>Documentation category</th><th>What it establishes</th><th>Common failure pattern</th></tr></thead>
      <tbody>
        <tr><td>Qualifying clinical finding</td><td>The objective test result, measurement, or diagnosis that triggers coverage eligibility</td><td>Result is in the chart but not restated or referenced in the physician's order or note</td></tr>
        <tr><td>Symptom or risk factor documentation</td><td>The subjective or comorbid criteria required alongside a borderline objective finding</td><td>Symptom described in lay language, not mapped to the LCD's named clinical categories</td></tr>
        <tr><td>Face-to-face evaluation</td><td>Confirms a qualified provider assessed the patient before ordering the service</td><td>Evaluation happened but the note doesn't explicitly connect it to the service being ordered</td></tr>
        <tr><td>Treatment history or conservative care trial</td><td>Shows less invasive or lower-cost options were tried first, where the LCD requires step therapy</td><td>Prior treatment occurred but dates, duration, or outcome aren't documented</td></tr>
        <tr><td>Frequency and duration limits</td><td>Confirms the service isn't being billed more often than the LCD allows</td><td>No documentation of prior utilization, so a repeat request looks unjustified on its face</td></tr>
      </tbody>
    </table>
    <p>Every row in that table is a place where the underlying clinical event may have genuinely happened and the record still fails the LCD's check, because the check is about whether the specific required element is present and legible in the documentation, not about whether the treatment was appropriate in some abstract sense. This is also why denial rates for the same clinical scenario can vary by facility or by provider even when clinical practice is identical: it's a documentation habit difference, not a difference in how sick the patients are.</p>

    <h2>Why LCDs Change and What That Does to a Documentation Pipeline</h2>
    <p>LCDs aren't static. Contractors revise them as clinical evidence changes, as CMS issues new guidance, or as a Contractor Advisory Committee, a panel of local physicians the MAC is required to consult, recommends updates. A documentation workflow built around a snapshot of an LCD's criteria at one point in time will start generating avoidable denials the moment the policy is revised, because a chart correctly documented against last year's version of the AHI thresholds or symptom list won't necessarily satisfy this year's version. This is one of the more overlooked operational risks in medical necessity documentation: the target is a moving one, and it moves independently per MAC jurisdiction, which means a multi-state provider or a lender underwriting claims volume across a multi-state practice group is effectively tracking several different, independently revised checklists at once for what looks like the same service.</p>
    <p>For a document processing pipeline, that argues for extraction and validation logic that references the current LCD text directly rather than a hardcoded rule written once and left alone, the same way tax or regulatory compliance software has to track statute changes rather than encode a permanent snapshot.</p>

    <h2>What This Means for Claims Documentation and Underwriting Workflows</h2>
    <p>For a lending or fintech platform working with healthcare provider documentation, revenue-based financing against a practice's claims volume, factoring against receivables, or verification workflows tied to billed and collected amounts, this distinction changes what "risk of denial" should mean in a model. A claim denied because the underlying service genuinely wasn't medically necessary represents real revenue that was never going to convert to cash. A claim denied because a symptom wasn't phrased the way an LCD requires represents revenue that is very likely recoverable through resubmission or appeal, on a delayed timeline, but recoverable. Treating both as equivalent "denial risk" overstates how much billed revenue is actually uncollectible, and understates how much of the visible denial rate is a process fix rather than a clinical one.</p>
    <p>Extracting and structuring the specific documentation elements a claim's governing LCD requires, before the claim goes out the door, is the piece that generic OCR or generic document extraction doesn't do, because it requires knowing which LCD applies to a given service and jurisdiction, what that specific LCD's criteria are, and whether the chart's language actually satisfies them, not just whether the chart contains words related to the diagnosis. Our posts on <a href="/resources/blogs/prior-authorization-automation">prior authorization automation</a> and <a href="/resources/blogs/denial-code-extraction">denial code extraction</a> cover two adjacent pieces of this same problem: catching a documentation gap before a service is even rendered, and correctly parsing the CARC and RARC codes a payer returns when the gap causes a denial anyway. Our post on <a href="/resources/blogs/medical-coding-automation">medical coding automation</a> covers how the ICD-10 and CPT codes referenced throughout this post get validated once extracted, which is the coding half of the same documentation-to-policy matching problem discussed here.</p>

    <h2>The Practical Difference Between an LCD Gap and a Real Denial</h2>
    <p>If there's one operational habit this distinction should change, it's how a denial gets triaged the moment it comes in. Before assuming a medical necessity denial reflects a genuine clinical disagreement worth escalating to a peer-to-peer review, the faster and usually more productive first step is pulling the specific LCD or NCD cited in the denial reason, reading its stated criteria line by line, and checking whether the chart contains language that maps directly onto each required element. In the CPAP example above, that check takes minutes and either turns up a clean documentation fix (an addendum naming the specific qualifying symptom) or confirms the case genuinely doesn't meet the policy's criteria, in which case a peer-to-peer conversation or a different clinical justification is the right next move. Skipping that check and going straight to a general appeal is the most common way documentation-gap denials get treated, and resolved, far more slowly than they need to be.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Healthcare",
  date: "September 10, 2026",
  datePublished: "2026-09-10T00:00:00.000Z",
  dateModified: "2026-09-10T00:00:00.000Z",
  last_updated: "September 10, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "medical necessity documentation",
  secondary_keywords: [
    "LCD vs NCD Medicare",
    "Local Coverage Determination criteria",
    "medical necessity denial reasons",
    "Medicare Administrative Contractor jurisdiction",
    "coverage determination documentation requirements",
    "medical necessity denial appeal",
  ],
  tags: ["healthcare", "medical-necessity", "lcd-ncd", "denial-management", "medical-coding"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is the difference between an LCD and an NCD?",
      answer:
        "A National Coverage Determination (NCD) is issued directly by CMS and applies nationwide to every Medicare Administrative Contractor. A Local Coverage Determination (LCD) is issued by an individual Medicare Administrative Contractor and only applies within that contractor's jurisdiction. LCDs cannot be more restrictive than a governing NCD and typically fill in detailed clinical criteria where no NCD exists.",
    },
    {
      question: "Is a medical necessity denial always a clinical dispute?",
      answer:
        "No. CMS's 2024 CERT audit data for positive airway pressure devices found that 71.2 percent of improper payments were attributed to insufficient documentation, compared to just 9 percent attributed to an actual failure to meet medical necessity criteria. Most denials labeled medical necessity issues trace to a documentation gap against the specific coverage policy's stated checklist, not a genuine clinical disagreement.",
    },
    {
      question: "Where is the legal basis for Medicare's medical necessity standard?",
      answer:
        "Section 1862(a)(1)(A) of the Social Security Act excludes coverage for services not reasonable and necessary for the diagnosis or treatment of illness or injury. 42 CFR 400.202 defines how Local Coverage Determinations implement that standard, and the Medicare Program Integrity Manual (CMS Publication 100-08), Chapter 13, governs how Medicare Administrative Contractors develop and maintain LCDs.",
    },
    {
      question: "How many Medicare Administrative Contractor jurisdictions are there?",
      answer:
        "There are 12 A/B MAC jurisdictions covering professional and institutional Medicare Part A and Part B claims, plus 4 DME MAC jurisdictions covering durable medical equipment. Noridian and CGS between them administer all four DME MAC jurisdictions. Each contractor can publish its own LCDs that only apply within its assigned jurisdiction.",
    },
    {
      question: "What documentation does a Local Coverage Determination typically require?",
      answer:
        "Most LCDs require a qualifying clinical finding (a test result, measurement, or diagnosis), documentation of specific symptoms or risk factors when the finding is borderline, evidence of a face-to-face evaluation, documentation of prior conservative treatment where step therapy applies, and confirmation that frequency or duration limits haven't been exceeded. The specific required elements vary by LCD and by the service being billed.",
    },
    {
      question: "Can an LCD cover something an NCD does not address?",
      answer:
        "Yes. In the absence of a national coverage policy, a Medicare Administrative Contractor can develop its own LCD setting local coverage criteria for that service or item. Where an NCD does exist, an LCD cannot conflict with or be more restrictive than it, and can only add jurisdiction-specific implementation detail.",
    },
  ],
}
