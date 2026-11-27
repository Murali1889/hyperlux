import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd21: BlogPost = {
  id: "md-21",
  title: "Denial Code Extraction: Why CARC and RARC Must Pair Up",
  slug: "denial-code-extraction",
  excerpt:
    "Denial code extraction has to keep the group code, CARC and remark codes together. CARC 96 alone can mean bill the patient or refund the patient, depending on the other two.",
  description:
    "Denial code extraction: why CARC 96 can mean bill the patient or refund them, and how to read the group code, CARC and RARC together to route denials.",
  metaTag: "Denial Code Extraction: Why CARC and RARC Must Pair Up",
  content: `
    <p>Denial code extraction means pulling three codes for every adjustment on a remittance: the group code, the claim adjustment reason code (CARC) and any remittance advice remark codes (RARCs). Store them as one record. The same CARC can call for opposite actions, and only the other two codes tell you which one applies.</p>
    <p>Medicare's own rules give the clearest case. CARC 96 with group code PR and remark code N124 means the patient agreed in writing to pay and can be billed. CARC 96 with CO and N125 means the patient cannot be billed and any money collected must be refunded within 30 days.</p>

    <h2>What do the three codes on a denial mean?</h2>
    <p>A CARC says why a claim or service line was paid differently than it was billed. The <a href="https://x12.org/codes/claim-adjustment-reason-codes" rel="nofollow noopener" target="_blank">X12 reason code list</a> had 298 active codes on November 27, 2026, plus 110 deactivated ones. CARC 1 is a deductible, CARC 45 is a charge above the fee schedule or contracted rate, and CARC 16 is a claim with missing information or a billing error.</p>
    <p>The group code says who carries the adjusted amount. The valid ones are CO (contractual obligation), OA (other adjustment), PI (payer initiated reduction) and PR (patient responsibility). A fifth, CR, is not to be used in version 005010 and later. CMS's <a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/clm104c22.pdf" rel="nofollow noopener" target="_blank">remittance advice manual chapter</a> calls CO amounts "generally" a write-off that is "not billed to the patient," and says PR amounts "may be billed to the patient."</p>
    <p>A RARC adds the detail a CARC cannot. Most are supplemental and explain an adjustment a CARC already reported. The rest start with "Alert:" and, in X12's words, "are never related to a specific adjustment or CARC." Of the 1,145 active codes on the <a href="https://x12.org/codes/remittance-advice-remark-codes" rel="nofollow noopener" target="_blank">X12 remark code list</a>, 194 are alerts.</p>
    <p>The lists have different owners. CMS's manual says CMS maintains the remark codes and a separate committee maintains the reason codes. Both change three times a year, around March 1, July 1 and November 1.</p>
    <table>
      <thead>
        <tr><th>Code</th><th>What it answers</th><th>Example</th><th>Where it sits in an 835</th></tr>
      </thead>
      <tbody>
        <tr><td>Group code</td><td>Who carries the amount.</td><td>CO, PR</td><td>CAS01.</td></tr>
        <tr><td>CARC</td><td>Why payment differs from the charge.</td><td>96, non-covered charge(s)</td><td>CAS02, then CAS05, CAS08 and on.</td></tr>
        <tr><td>RARC</td><td>What exactly is wrong, or a general notice.</td><td>N125, MA130</td><td>LQ for a line; MOA or MIA for a whole claim.</td></tr>
      </tbody>
    </table>

    <h2>Where do denial codes sit in an 835 and on paper?</h2>
    <p>In an 835 electronic remittance, each adjustment goes in a CAS segment. CAS01 holds the group code, followed by up to six sets of reason code, amount and quantity, from CAS02 to CAS04 through CAS17 to CAS19. An <a href="https://x12.org/resources/requests-for-interpretation/rfi-1811-837-multi-cas-wsame-group" rel="nofollow noopener" target="_blank">X12 interpretation</a> quotes that rule. <a href="https://x12.org/resources/requests-for-interpretation/rfi-2353-can-cas03-be-zero" rel="nofollow noopener" target="_blank">Another one</a> confirms that claim-level adjustments use the CAS segment in loop 2100 and line-level ones use loop 2110.</p>
    <p>Remark codes live elsewhere. CMS's manual puts line-level remark codes in the LQ segment and claim-level ones in the MOA segment, or MIA for inpatient claims. So a remark code belongs to a line or a claim, not to one reason code. If the extractor drops the line it came from, the pairing is gone. Our post on <a href="/resources/blogs/835-remittance-advice-processing">835 remittance advice processing</a> walks through the CLP and CAS loops.</p>
    <p>On a paper remittance or a payer PDF, the group code and CARC can print as one token. X12's reason code page gives "PR32" and "CO286" as examples of what a provider might see. The OCR step has to split off the two letters, then find the remark codes, which may print in their own column or in a code glossary. The guide to <a href="/resources/blogs/eob-parsing-automation">EOB parsing automation</a> covers the patient-facing version of the same document.</p>

    <h2>Worked example: one CARC, opposite actions</h2>
    <p>Take three lines from a hypothetical Medicare remittance to a medical equipment supplier. Lines 1 and 2 use the notices CMS prescribes for certain denied equipment and supply claims in <a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/clm104c30.pdf" rel="nofollow noopener" target="_blank">chapter 30, section 150.8</a> of its claims processing manual. Line 3 uses codes that CGS, a Medicare contractor, lists for claims it returns.</p>
    <table>
      <thead>
        <tr><th>Field</th><th>Line 1</th><th>Line 2</th><th>Line 3</th></tr>
      </thead>
      <tbody>
        <tr><td>What happened</td><td>Billed with modifier GA: signed advance notice on file.</td><td>Billed with modifier GZ: no signed advance notice.</td><td>HCPCS code not valid on the date of service.</td></tr>
        <tr><td>Group code</td><td>PR</td><td>CO</td><td>CO</td></tr>
        <tr><td>CARC</td><td>96, non-covered charge(s).</td><td>96, non-covered charge(s).</td><td>16, missing information or billing error.</td></tr>
        <tr><td>RARCs</td><td>N124</td><td>N125</td><td>M20, MA130</td></tr>
        <tr><td>What the RARC says</td><td>The patient is liable, having been told in writing and agreed to pay.</td><td>Refund anything collected from the patient within 30 days.</td><td>Invalid HCPCS; no appeal rights, submit a new claim.</td></tr>
        <tr><td>Next action</td><td>Bill the patient.</td><td>Do not bill; refund; decide on an appeal.</td><td>Fix the code and send a new claim.</td></tr>
      </tbody>
    </table>
    <p>Lines 1 and 2 carry the same CARC and need opposite handling. On line 1, PR and N124 say the patient owes the amount, so it goes to patient billing. On line 2, CO and N125 say the supplier owns the loss, and any payment taken from the patient goes back. The post on <a href="/resources/blogs/advance-beneficiary-notice-processing">advance beneficiary notice processing</a> covers the signed notice that decides which line you get.</p>
    <p>Line 2 also has a clock. The section 150.8 notice says an appeal filed within 30 days lets the supplier hold the refund until the decision, and an appeal can be filed any time within 120 days. If the appeal fails, the refund is due within 15 days. A router keyed on CARC 96 alone either bills a protected patient or writes off money a patient agreed to pay.</p>
    <p>Line 3 shows a remark code that removes options. MA130 reads "no appeal rights are afforded because the claim is unprocessable." The <a href="https://cgsmedicare.com/partb/education/cse_data.html" rel="nofollow noopener" target="_blank">CGS page on returned claims</a> says such claims cannot be fixed through a redetermination or a reopening and must be sent as new claims. CMS instructions for returned claims, such as <a href="https://www.cms.gov/regulations-and-guidance/guidance/transmittals/downloads/r3475cp.pdf" rel="nofollow noopener" target="_blank">transmittal 3475</a>, pair CARC 16 with group code CO.</p>
    <p>Sending line 3 to appeals also burns time. Under <a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/clm104c01.pdf" rel="nofollow noopener" target="_blank">chapter 1 of the same manual</a>, a Medicare claim generally must be filed within 12 months of the date of service. A submission with an invalid procedure code does not count as a claim, so the corrected one still has to beat that deadline.</p>

    <h2>Which CARCs need a remark code?</h2>
    <p>X12 writes the rule into some definitions. CARC 16 says "at least one Remark Code must be provided," and that it can be an NCPDP reject reason code or any RARC that is not an alert. CMS's manual explains why: some CARCs "are so generic that the reason for adjustment cannot be communicated clearly without at least one remark code," so the remark code carries the meaning.</p>
    <p>A count of the X12 list as published on November 27, 2026 finds the same requirement in 15 of the 298 active CARCs. They are 16, 96, 129, 148, 201, 226, 227, 234, 237, 250, 251, 252, 267, 307 and A1. Separately, 23 active CARCs limit which group code goes with them. CARC 18, an exact duplicate, takes OA unless state workers' compensation rules require CO, and CARC 45 takes CO or PR "depending upon liability."</p>
    <p>Usage notes also rule things out. CARC 16 says "Do not use this code for claims attachment(s)/other documentation." Attachments have their own codes: 252 when one is needed, 251 when the one received was incomplete, and 250 when it was the wrong document. A rule that sends every CO-16 to a "send the records" queue reads the code against its own definition.</p>

    <h2>Where does automated denial routing go wrong?</h2>
    <p>Keying on the CARC alone is the obvious failure. Five others show up once the basic pairing works.</p>
    <h3>Remark codes on the wrong line</h3>
    <p>Flatten every remark code on a claim into one list and a code from line 3 can land beside line 1's CARC. Keep the claim and line identity on every adjustment. Apply MOA or MIA remark codes to the whole claim and LQ codes only to their own line.</p>
    <h3>Alerts read as reasons</h3>
    <p>MA01 is an alert telling the provider it may appeal within 120 days. It sets a deadline, but it never explains why money was cut. MA13, another alert, warns: "You may be subject to penalties if you bill the patient for amounts not reported with the PR (patient responsibility) group code." Wire that rule into any patient billing step.</p>
    <h3>OCR misreads that still look valid</h3>
    <p>On printed remittances, the letter O and the digit 0 swap easily, and so do I and 1. A misread I turns the group code PI into P1, which is itself a valid CARC for property and casualty claims. A "letters then digits" pattern check lets that through. Check the group code against the four valid values and the reason code against the list, separately.</p>
    <h3>Stale code lists</h3>
    <p>Codes start and stop. N29, "Missing documentation/orders/notes/summary/report/chart," stopped on March 1, 2016. Validate each code against the list as it stood on the remittance date, and refresh the list after each update.</p>
    <h3>Medicare rules applied to every payer</h3>
    <p>The 30-day refund, the 120-day appeal and the MA130 rule are Medicare rules. Commercial payers use the same codes, but their appeal windows and corrected claim rules come from contracts and companion guides. The CAQH CORE operating rule limits which code combinations a health plan may use for each business scenario, per CMS <a href="https://www.cms.gov/regulations-and-guidance/guidance/transmittals/downloads/r1281otn.pdf" rel="nofollow noopener" target="_blank">transmittal 1281</a>. It does not say what the provider should do next.</p>

    <h2>What should a denial code extractor check?</h2>
    <ul>
      <li>Store one record per adjustment: claim, line, group code, CARC, amount and quantity, plus the RARCs for that line and for the claim.</li>
      <li>Accept only CO, OA, PI or PR as group codes, and only CARCs and RARCs that were active on the remittance date.</li>
      <li>Flag any of the 15 remark-required CARCs that arrives with no supplemental RARC at the line or claim. It is either a missed field or a payer error.</li>
      <li>Check the group code rules written into the CARC text, such as OA for CARC 18. A mismatch usually means a misread.</li>
      <li>Keep alerts in their own field for notices and deadlines, never as the reason.</li>
      <li>Route on the full combination of group code, CARC and supplemental RARCs. Send combinations missing from the routing table to a person, not a default queue.</li>
      <li>Pull patient balances from PR amounts only.</li>
      <li>Put dates on the record: the refund deadline for an N125, the appeal window, and the filing limit for any claim that must be sent again.</li>
    </ul>
    <p>Before trusting the router, replay a past quarter of remittances through it and compare each routed action with what the billing team did. Each disagreement is a missing combination, a misread code or a human error worth knowing about. For returns like line 3, the fix usually sits upstream, in the codes covered in our post on <a href="/resources/blogs/medical-coding-automation">medical coding automation</a>.</p>
    <p>When remittances arrive as scans or PDFs instead of 835 files, the codes have to be read off the page first. DocsAPI, built by HyperVerge, is a document intelligence API that classifies documents such as EOBs and remittance advice and extracts their fields and tables. In its own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 benchmark on 1,700 real documents</a>, it read clean typed English at 97 to 99% and multi-page bank statement tables at 91%, so the code checks above still apply. Pricing starts at $0.02 per page, and access starts with a demo. The <a href="/documents/medical-docs">medical documents</a> page lists the other files it reads.</p>
    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-medical-documents">OCR for medical documents</a>.</p>
  `,
  image: "/images/transforming-financial-services.png",
  featuredImage: "/images/transforming-financial-services.png",
  category: "Healthcare",
  date: "September 19, 2026",
  datePublished: "2026-09-19T00:00:00.000Z",
  dateModified: "2026-11-27T00:00:00.000Z",
  last_updated: "November 27, 2026",
  readTime: "10 min read",
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
        "A CARC (claim adjustment reason code) says why a claim or service line was paid differently than it was billed, and it always comes with a group code such as CO or PR that says who carries the amount. A RARC (remittance advice remark code) adds detail about that adjustment. Remark codes that start with \"Alert:\" are general notices and never explain a specific adjustment.",
    },
    {
      question: "Can the same CARC call for opposite actions?",
      answer:
        "Yes. In Medicare's notices for certain denied equipment and supply claims, CARC 96 with group code PR and RARC N124 means the patient agreed in writing to pay and can be billed. CARC 96 with group code CO and RARC N125 means the patient cannot be billed and anything collected must be refunded within 30 days. An appeal filed within those 30 days lets the supplier hold the refund until the decision.",
    },
    {
      question: "Which CARCs require a remark code?",
      answer:
        "On the X12 list as published on November 27, 2026, 15 of the 298 active CARCs say at least one remark code that is not an alert must be provided: 16, 96, 129, 148, 201, 226, 227, 234, 237, 250, 251, 252, 267, 307 and A1. If one of these arrives with no supplemental remark code, either a field was missed or the payer made an error.",
    },
    {
      question: "Can you appeal a claim returned with CARC 16 and MA130?",
      answer:
        "Not in Medicare. MA130 says no appeal rights are afforded because the claim is unprocessable. Medicare contractor CGS says these claims cannot be fixed through a redetermination or a reopening and must be corrected and sent as new claims, and the new claim still has to meet Medicare's 12-month filing limit.",
    },
    {
      question: "Where are CARC and RARC codes in an 835 file?",
      answer:
        "Adjustments are in CAS segments. CAS01 is the group code, followed by up to six sets of reason code, amount and quantity. Claim-level CAS segments sit in loop 2100 and line-level ones in loop 2110. Remark codes for a service line go in the LQ segment, and remark codes for a whole claim go in the MOA segment, or MIA for inpatient claims.",
    },
  ],
}
