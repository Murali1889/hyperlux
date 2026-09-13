import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd15: BlogPost = {
  id: "md-15",
  title: "Eligibility Verification Automation and the 270/271 Gap",
  slug: "eligibility-verification-automation",
  excerpt:
    "A 270/271 eligibility check came back active. The claim still denied. The reason is buried in a segment most front desk software never parses.",
  description:
    "A technical look at ANSI X12 270/271 eligibility transactions: why real-time checks return active status but miss service-specific coverage detail.",
  metaTag: "Eligibility Verification Automation: The 270/271 Gap",
  content: `
    <p>A physical therapy front desk runs an eligibility check before a patient's first visit. The system returns a green badge: active. The patient is seen. Twelve visits later, a claim comes back denied with reason code 119, benefit maximum reached. The plan capped physical therapy at ten visits a year, and the patient had already used six visits at a different clinic in January. Nothing about that limitation was wrong or hidden on the payer's end. It was sitting in the eligibility response the whole time, in a segment the front desk software never displayed, because the software was built to answer one question, is this patient active, and the payer's answer to that question was true.</p>

    <p>This is the structural gap in most <a href="/documents/medical-docs">medical document processing</a> that touches eligibility. Real time eligibility checks, run through the ANSI X12 270 and 271 transaction pair, carry far more data than active or inactive. But the transaction being technically capable of carrying that data and a practice's software actually parsing, storing, and surfacing it are two different things, and the gap between them is where these denials come from.</p>

    <h2>What a 270 eligibility inquiry is actually structured to ask</h2>

    <p>The X12 270 is not a free text question. It is a hierarchically structured transaction, built from nested loops identified by HL segments, and what gets returned in the 271 response depends entirely on what was specified in the request. Loop 2000A identifies the information source, the payer being queried, through an NM1 segment. Loop 2000B identifies the information receiver, the provider or clearinghouse sending the request. Loop 2000C identifies the subscriber, the actual patient or policyholder, again through NM1, with demographic detail carried in a DMG segment when needed to disambiguate the member. If the person receiving care is a dependent rather than the subscriber, a separate Loop 2000D carries that detail.</p>

    <p>The part of the 270 that determines everything about the quality of the 271 response is the EQ segment, the eligibility or benefit inquiry segment. EQ01 carries a service type code, a value from an X12-maintained code list that specifies exactly what kind of coverage is being asked about. A 270 can include multiple EQ segments in a single inquiry, each asking about a different service type, or it can include a single EQ segment carrying the generic code 30, health benefit plan coverage. Most practice management systems, by default, send only code 30. That single decision, made once at software configuration time and rarely revisited, is the root of most of these silent failures. The system is asking the payer a broad question, not the specific one that actually matters for the service about to be billed.</p>

    <h2>What the 271 response actually contains, segment by segment</h2>

    <p>The 271 mirrors the loop structure of the request and answers it through repeating EB segments, eligibility or benefit information segments, nested inside Loop 2110C for the subscriber or 2110D for a dependent. A 271 response to a single inquiry can, and often does, contain many EB segments, one for each combination of service type and benefit category the payer chooses to return. EB01 carries the eligibility or benefit information code, the field that answers active or inactive. EB03 carries the service type code that specific EB segment applies to, mirroring the EQ01 codes from the request. EB06 through EB10 carry the actual financial detail: a time period qualifier, a monetary amount for a dollar figure like a copay or deductible balance, a percentage for coinsurance, and quantity fields for visit or unit limits.</p>

    <p>When a payer answers a generic code 30 inquiry, it is only obligated to return benefit information at that generic level. It is not required to walk through every specific service type the subscriber's plan might treat differently. A payer that returns a single EB segment with EB01 as active coverage and EB03 as code 30 has answered the question asked, completely and correctly, while saying nothing at all about whether physical therapy, specifically, is capped, has a separate copay, or requires prior authorization. The 271 is not hiding that information. It was never asked for it.</p>

    <table>
      <thead>
        <tr><th>EB01 code</th><th>Meaning</th><th>What it actually tells you</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Active Coverage</td><td>The subscriber has active coverage for the service type in that specific EB segment, nothing broader</td></tr>
        <tr><td>6</td><td>Inactive</td><td>Coverage for that service type is not currently in force</td></tr>
        <tr><td>A</td><td>Co-Insurance</td><td>Paired with EB08, a percentage the patient owes after the deductible is met</td></tr>
        <tr><td>B</td><td>Co-Payment</td><td>Paired with EB07, a fixed dollar amount owed per visit or encounter</td></tr>
        <tr><td>C</td><td>Deductible</td><td>Paired with EB07, the remaining deductible amount, often specific to that service type</td></tr>
        <tr><td>G</td><td>Out of Pocket (Stop Loss)</td><td>The maximum the patient pays before the plan covers 100%</td></tr>
        <tr><td>D</td><td>Benefit Description</td><td>Free text plan detail that doesn't map to a numeric field at all</td></tr>
      </tbody>
    </table>

    <p>Notice that active coverage and copay or coinsurance detail arrive as entirely separate EB segments, each scoped to a service type code, not as fields on one master status line. A practice management system that parses only EB01 for the first EB segment it finds and stops there will show a true, accurate, and functionally useless answer.</p>

    <h2>Service type codes: why the payer answered a different question than the one that mattered</h2>

    <p>The X12 service type code list is long, running past two hundred values, covering everything from ambulance transport to vision care. In practice, a relatively small set of codes covers most outpatient billing, and this is where the disconnect between what gets asked and what gets billed shows up most often.</p>

    <table>
      <thead>
        <tr><th>Service type code</th><th>Description</th><th>Common billing scenario it governs</th></tr>
      </thead>
      <tbody>
        <tr><td>30</td><td>Health Benefit Plan Coverage</td><td>The generic, blanket code most systems default to querying</td></tr>
        <tr><td>1</td><td>Medical Care</td><td>General outpatient physician services</td></tr>
        <tr><td>98</td><td>Professional (Physician) Visit, Office</td><td>Standard office visit copay, distinct from the plan-wide figure</td></tr>
        <tr><td>47</td><td>Hospital</td><td>Facility charges, often carrying a separate deductible track from professional services</td></tr>
        <tr><td>86</td><td>Emergency Services</td><td>Frequently has its own copay structure, sometimes waived if admitted</td></tr>
        <tr><td>88</td><td>Pharmacy</td><td>Drug benefit, often administered by a separate pharmacy benefit manager entirely</td></tr>
        <tr><td>33</td><td>Chiropractic</td><td>Commonly visit-capped annually, independent of medical visit limits</td></tr>
        <tr><td>MH</td><td>Mental Health</td><td>Often carries different copay and visit-limit rules than general medical, even within the same plan</td></tr>
      </tbody>
    </table>

    <p>A physical therapy claim doesn't map cleanly to any single generic code in every payer's implementation, it is billed against physical medicine or a specific CPT range, and plenty of front-desk workflows never send a 270 with a service-type-specific EQ segment for it at all. The inquiry asks about code 30, gets back an active status tied to code 30, and the software displays that as the answer to a question it was never actually equipped to ask.</p>

    <h2>Where copay and coinsurance detail gets lost even when the payer does return it</h2>

    <p>Some payers are more generous than the minimum requirement and return several EB segments per response, covering multiple service types and their associated cost-sharing detail without being explicitly asked for each one. This is where a second, quieter failure shows up. Front-end eligibility tools are frequently built around a single status display, a green or red badge, because that's what a front desk person glances at between patients. Building a UI that surfaces every EB segment, its associated service type, its copay, coinsurance, deductible remaining, and any visit or dollar caps, is meaningfully more engineering work than parsing EB01 off the first segment and calling it done. Plenty of clearinghouse portals and practice management modules do exactly that: they parse the whole 271 file internally, discard everything past the first active flag, and store only the summary. The data existed in the transaction. It didn't survive the software's own processing pipeline.</p>

    <p>This matters because it means the failure isn't really about the X12 standard being insufficient. The standard, when used correctly on both the request and response side, can carry copay amounts, coinsurance percentages, deductible balances, and visit caps down to the specific service type. The failure is upstream, in software that queries the wrong scope and downstream, in software that discards detail the payer actually sent back.</p>

    <h2>Worked example: an active eligibility check that still ended in denial</h2>

    <p>Walk through the physical therapy scenario with the actual transaction detail filled in. The clinic's practice management system fires a 270 the morning of the patient's first visit. Loop 2000A identifies the payer. Loop 2000C identifies the subscriber by member ID and date of birth. The only EQ segment included carries EQ01 equal to 30, the generic health benefit plan coverage code, because that is the software's default and nobody on staff configured it otherwise.</p>

    <p>The payer's 271 comes back within seconds. It contains one EB segment relevant to that inquiry: EB01 equal to 1, active coverage, EB03 equal to 30, matching the generic code asked about. The practice management system parses EB01, sees the value 1, renders a green active badge on the patient's chart, and the front desk collects the office's standard copay amount, unaware that this plan also carries a physical therapy specific benefit line elsewhere in the payer's system, one that a service-type-specific inquiry against code 33 or 65 could have surfaced but that the generic code 30 inquiry never touched. That line caps physical therapy at ten visits per calendar year and the subscriber had already used six visits at a different provider in January, information visible to the payer's adjudication system at claim time but never requested at eligibility time.</p>

    <p>The patient is treated. Claims for the first several visits process normally, since visits seven through ten still fall under the cap. The claim for what would have been the eleventh visit denies with CARC 119, whose exact published text is "Benefit maximum for this time period or occurrence has been reached." Nothing was misrepresented at any point. The 270 asked a real question and got a true answer. The 271 correctly reported active coverage for the generic benefit category it was asked about. The claim correctly denied once the plan's actual, service-specific limit was reached. The failure sits entirely in the gap between what the front desk asked and what the biller needed to know, a gap the active or inactive flag never signaled because it was never designed to.</p>

    <h2>Why this fails silently instead of loudly</h2>

    <p>A silent failure is worse operationally than an outright rejection, because nothing in the workflow prompts anyone to look closer. If the 270 had come back rejected, an AAA segment would have flagged the reason, and someone would have had to investigate before scheduling the visit. Instead, the transaction succeeds, the payer answers accurately, and the software presents a clean, confident, wrong-for-this-purpose status. There's no error to chase down until the remittance advice arrives weeks later, by which point the clinic has already delivered eleven visits' worth of uncompensated physical therapy and has to either write it off or appeal, and an appeal against a correctly applied benefit maximum rarely succeeds because there was never a payer error to appeal against. Our piece on <a href="/resources/blogs/denial-code-extraction">denial code extraction</a> covers how these downstream CARC and RARC codes get parsed once a denial actually lands, but by that point the more useful intervention point, the eligibility check itself, has already passed.</p>

    <table>
      <thead>
        <tr><th>What the active badge tells staff</th><th>What it does not tell staff</th></tr>
      </thead>
      <tbody>
        <tr><td>The subscriber's policy is currently in force</td><td>Whether the specific service type being billed has its own visit cap, separate copay, or exclusion</td></tr>
        <tr><td>The generic health benefit plan coverage status</td><td>Coinsurance percentage or deductible remaining for that specific service category</td></tr>
        <tr><td>A response was received within the expected turnaround window</td><td>Whether prior authorization is required for the specific procedure, a separate transaction entirely, the X12 278</td></tr>
        <tr><td>The payer and subscriber IDs matched correctly</td><td>Year to date utilization against a capped benefit, since a single eligibility snapshot doesn't total prior claims elsewhere</td></tr>
      </tbody>
    </table>

    <p>That last row is worth sitting with. Even a well-configured 270 that correctly specifies a service-type-specific EQ segment and receives a full EB response back with a visit cap listed cannot, on its own, tell the clinic how many of those visits the patient has already used somewhere else. The 271 reports the benefit structure, not always the running utilization against it, and utilization tracking depends on the payer's own systems being current, which introduces its own lag. A clean eligibility response and an accurate remaining-benefit count are not automatically the same thing, which is a separate and harder problem than parsing the transaction correctly in the first place.</p>

    <h2>What eligibility verification automation actually needs to check</h2>

    <p>Fixing this doesn't require a different standard, the X12 270/271 pair already carries the necessary structure. It requires three specific changes to how the transaction gets built and processed. First, the 270 needs to include service-type-specific EQ segments matched to the actual CPT or procedure category being scheduled, not just the generic code 30 blanket inquiry, which means the scheduling or intake system has to know what service is being billed before the eligibility check fires, not just that a visit is happening. Second, the parsing layer on the 271 side needs to walk every EB segment in the response, not stop at the first active flag, and needs to associate each one with its service type code so a physical therapy specific benefit line doesn't get discarded in favor of the generic one. Third, the financial detail in EB06 through EB10, the actual copay amounts, coinsurance percentages, and quantity caps, needs to reach whoever is collecting payment at the front desk and whoever is building the claim later, as structured data both can act on, not as a badge that only answers a yes or no question neither of them actually asked.</p>

    <p>This connects to two other document-processing gaps we've covered in this cluster. Getting an accurate eligibility read matters most for services that also require separate prior authorization, since a plan that requires PA for physical therapy past a certain visit count will deny for CARC 197, precertification absent, on top of any benefit maximum issue, a scenario our piece on <a href="/resources/blogs/prior-authorization-automation">prior authorization automation</a> covers from the request side. And whether a denial like the one in this example is even appealable, or whether it reflects a correctly applied plan limit with no path forward, often comes down to documentation that should have been checked before the service was rendered, which is the same underlying discipline covered in our piece on <a href="/resources/blogs/medical-necessity-documentation">medical necessity documentation</a>.</p>

    <h2>What to check in your own eligibility workflow</h2>

    <p>Ask first whether your 270 requests include service-type-specific EQ segments for the procedures your practice actually bills most, or whether every inquiry defaults to the generic code 30. Ask second whether your eligibility software parses and stores every EB segment in the 271 response, including the service-type-specific ones with copay, coinsurance, and cap detail, or whether it discards everything past the first active flag it finds. Ask third whether that structured detail actually reaches the front desk at check-in and the billing team at claim submission, since data that's technically parsed but never surfaced anywhere a human or a downstream system can act on it produces the exact same denial as data that was never parsed at all. An eligibility check that says active is true. It just isn't the whole answer, and the gap between those two things is where a lot of preventable denials quietly live. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-in-finance.png",
  featuredImage: "/images/ocr-in-finance.png",
  category: "Healthcare",
  date: "September 13, 2026",
  datePublished: "2026-09-13T00:00:00.000Z",
  dateModified: "2026-09-13T00:00:00.000Z",
  last_updated: "September 13, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "eligibility verification automation",
  secondary_keywords: [
    "X12 270 271 eligibility transaction",
    "EDI eligibility verification",
    "real time eligibility check denial",
    "EB segment eligibility response",
    "service type code eligibility",
    "eligibility denial prevention",
  ],
  tags: ["healthcare", "eligibility verification", "EDI", "medical billing", "claims processing"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is the difference between an X12 270 and 271 transaction?",
      answer:
        "The 270 is the eligibility inquiry a provider sends to a payer, specifying the subscriber and, through EQ segments, the service types being asked about. The 271 is the payer's response, returning EB segments that report coverage status and benefit detail for each service type included in the inquiry.",
    },
    {
      question: "Why can an eligibility check show active coverage and the claim still gets denied?",
      answer:
        "The 271 response is scoped to whatever service type codes the 270 actually requested. A generic inquiry using code 30, health benefit plan coverage, returns a generic active status without revealing service-specific limits like visit caps, separate copays, or exclusions that only surface when a service-type-specific EQ segment is included in the request.",
    },
    {
      question: "What does the EB01 field in a 271 response actually mean?",
      answer:
        "EB01 is the eligibility or benefit information code, the field that indicates active coverage, code 1, or inactive coverage, code 6, for the specific service type reported in that EB segment. Other EB01 values indicate copay, coinsurance, deductible, or out of pocket detail rather than a status flag at all.",
    },
    {
      question: "What are service type codes in eligibility verification?",
      answer:
        "Service type codes are an X12-maintained list of values, over two hundred in total, that specify what kind of coverage is being asked about in a 270 inquiry or reported in a 271 response, such as code 30 for generic health benefit plan coverage, code 88 for pharmacy, or code 98 for a professional office visit.",
    },
    {
      question: "Does a 271 eligibility response include copay and coinsurance amounts?",
      answer:
        "It can. Copay amounts are carried in EB07 paired with an EB01 code of B, and coinsurance percentages are carried in EB08 paired with an EB01 code of A, but only for the service type codes the EB segment applies to. Many practice management systems parse only the active or inactive flag and never surface this financial detail to staff.",
    },
    {
      question: "Can eligibility verification automation prevent benefit maximum denials?",
      answer:
        "It can reduce them significantly by sending service-type-specific inquiries and surfacing visit caps and remaining benefit detail before the visit, but a single eligibility snapshot cannot always reflect utilization against a shared cap that occurred at a different provider, since that depends on the payer's own systems being current at the moment of the check.",
    },
  ],
}
