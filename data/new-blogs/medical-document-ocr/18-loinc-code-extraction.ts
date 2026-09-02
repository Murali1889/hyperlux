import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd18: BlogPost = {
  id: "md-18",
  title: "LOINC Code Extraction: Why Local Lab Codes Don't Map Cleanly",
  slug: "loinc-code-extraction",
  excerpt:
    "A LOINC code identifies what a lab test measures, not the result value, and mapping a lab's own internal codes onto it is harder than it looks.",
  description:
    "What LOINC codes standardize, the six axes defining a lab observation, and why mapping local lab codes to LOINC remains a real interoperability bottleneck.",
  metaTag: "LOINC Code Extraction: The Local-to-Standard Mapping Gap",
  content: `
    <p>A LOINC code does not tell you what a patient's glucose level was. It tells you, precisely and unambiguously, that the number sitting next to it is a glucose measurement, drawn from serum or plasma, reported as a quantitative mass concentration at a single point in time. The result, the actual milligrams per deciliter, lives in a completely separate field. Conflating the two, treating LOINC as if it labels the value rather than the observation, is a small conceptual error that turns into a large practical one the moment a document intelligence system has to read a lab report and decide what test is actually being reported.</p>
    <p>That distinction, between the identity of a measurement and the value it produced, is the whole reason LOINC exists as a separate standard from the result itself. It is also the reason extracting LOINC codes from real-world lab documents, and mapping the local codes labs actually use in their own systems onto the correct LOINC term, is a genuinely unsolved problem at scale rather than a lookup table you build once. For teams building or evaluating <a href="/documents/medical-docs">medical document processing</a> for lab reports, referral packets, or claims attachments, understanding exactly where that mapping breaks down matters more than knowing that LOINC exists.</p>

    <h2>What LOINC actually standardizes</h2>
    <p>LOINC, the Logical Observation Identifiers Names and Codes system, is maintained by the Regenstrief Institute, an Indiana University affiliated nonprofit research organization that has published and updated the terminology since the mid 1990s. Its job is narrow and specific: give every distinct laboratory or clinical observation a single, permanent identifier so that two different systems referring to "the same test" are provably referring to the same thing, and two systems referring to different tests are provably distinguishable, even when the underlying analyte name looks identical on paper.</p>
    <p>What LOINC does not do is standardize results. A glucose reading of 95 is not a LOINC code and never has one. The LOINC code identifies the question being asked (what was measured, from what specimen, under what conditions), and the answer to that question, the numeric or coded result, travels alongside it in a separate data element, typically an HL7 or FHIR observation value paired with the LOINC code as its identifying key. Losing sight of that separation is the single most common source of confusion in how people talk about LOINC, and it matters technically because a system that extracts "the code" and "the number" as one undifferentiated blob has no way to validate either one independently.</p>

    <h2>The six axes that define a single LOINC term</h2>
    <p>Every LOINC term is built from six defined parts, sometimes called axes, and a term only counts as fully specified when all six are set. The formal structure looks like this:</p>
    <table>
      <thead><tr><th>Axis</th><th>What it captures</th><th>Example values</th></tr></thead>
      <tbody>
        <tr><td>Component</td><td>The analyte or thing being measured</td><td>Glucose, Hemoglobin A1c/Hemoglobin.total</td></tr>
        <tr><td>Property</td><td>The kind of quantity reported</td><td>MCnc (mass concentration), MFr (mass fraction)</td></tr>
        <tr><td>Time</td><td>Whether the measurement is a single point or a timed interval</td><td>Pt (point in time), 24H (24 hour collection)</td></tr>
        <tr><td>System</td><td>The specimen type the measurement was taken from</td><td>Ser/Plas (serum or plasma), Bld (blood), Urine</td></tr>
        <tr><td>Scale</td><td>The type of value reported</td><td>Qn (quantitative), Ord (ordinal), Nom (nominal)</td></tr>
        <tr><td>Method</td><td>The technique used, included only when it changes clinical meaning</td><td>Immunoassay, HPLC, blank when method is irrelevant</td></tr>
      </tbody>
    </table>
    <p>Method is the odd one out on that list, and it's worth explaining why it's optional rather than always present. LOINC's own guidance is that method belongs in the code only when the other five axes don't already distinguish measurements that carry genuinely different reference ranges, sensitivities, or specificities. If two ways of running the same test on the same specimen produce results a clinician would interpret identically, they share one LOINC code. If they don't, because one method is more sensitive, or produces systematically different numbers, they get separate codes even though every other axis matches. That judgment call, made once by LOINC's editors for each term, is exactly the kind of clinical nuance that a naive text-matching or keyword-based mapping approach has no way to reproduce.</p>

    <h2>A worked example: three real LOINC codes for a "simple" test</h2>
    <p>Glucose looks like the simplest possible lab value, a single number, a single well-known analyte. It is a good test case precisely because it shows how far apart three LOINC codes for "glucose" can be once you look at the axes instead of the component name alone.</p>
    <table>
      <thead><tr><th>LOINC code</th><th>Fully specified name</th><th>Component</th><th>System</th><th>Scale</th></tr></thead>
      <tbody>
        <tr><td>2345-7</td><td>Glucose:MCnc:Pt:Ser/Plas:Qn</td><td>Glucose</td><td>Serum or plasma</td><td>Quantitative</td></tr>
        <tr><td>2339-0</td><td>Glucose:MCnc:Pt:Bld:Qn</td><td>Glucose</td><td>Whole blood</td><td>Quantitative</td></tr>
        <tr><td>4548-4</td><td>Hemoglobin A1c/Hemoglobin.total:MFr:Pt:Bld:Qn</td><td>Hemoglobin A1c ratio</td><td>Blood</td><td>Quantitative</td></tr>
      </tbody>
    </table>
    <p>Look at the first two rows closely. Same component, same property, same time aspect, same scale. The only axis that differs is System, serum or plasma against whole blood, and that single difference is enough to make them two entirely separate, non-interchangeable LOINC codes. A central lab analyzer running a chemistry panel on separated plasma and a point-of-care glucometer reading whole blood from a fingerstick are, from a coding standpoint, reporting different observations, even though a patient reading their chart would see both labeled simply "glucose." A mapping system that treats "glucose" as a single concept and picks whichever LOINC code shows up first in a lookup will get the specimen source wrong on every point-of-care result it processes, which matters clinically because whole blood and plasma glucose values are not numerically equivalent.</p>
    <p>The third row, hemoglobin A1c, illustrates the Property axis doing real work. It isn't reported as a mass concentration like glucose. It's a mass fraction, a ratio of glycated hemoglobin to total hemoglobin, because that's the clinically meaningful quantity, not an absolute amount. A local lab system that stores A1c results next to glucose results under a shared internal "chemistry result" code type, which is extremely common in older lab information systems, is hiding a real structural difference between the two tests that LOINC's Property axis makes explicit.</p>

    <h2>Why local lab codes don't map onto this cleanly</h2>
    <p>Here is the actual mapping problem, stated plainly: every lab, hospital, and reference lab operates its own internal test catalog, built up over years by lab directors, LIS administrators, and billing staff, using short internal codes and abbreviated names that were never designed with LOINC's six axes in mind. A local code like "GLUP" might mean glucose, plasma, on one system's instrument panel. On another system, the same four letters might be reused for an entirely different assay because the original author of that code table wasn't thinking about interoperability, they were thinking about what fit in an eight character field on a 1990s order entry screen.</p>
    <p>Mapping that local catalog to LOINC means answering, for every single local code, the same six-axis question a LOINC editor already answered once for the standard term: what exactly is the component, under what property, from what system, at what scale, and does the method matter. The information needed to answer that question correctly, specimen type, reagent method, whether the assay is quantitative or a qualitative positive/negative call, frequently isn't recorded anywhere machine-readable in the lab's own system. It lives in the head of whoever originally validated that assay, in a paper test-menu binder, or nowhere at all. Regenstrief's own mapping guidance, built around its free RELMA mapping tool, walks lab staff through importing a sample of their actual order and result messages, then manually searching and confirming a LOINC match for each distinct local term, specifically because there is no reliable automated shortcut around that specimen-and-method disambiguation step.</p>
    <p>This is a different category of problem from OCR misreading a character. The text extraction can be perfect, the local code and the analyte name can both be read off the document correctly, and the mapping can still be wrong, because the document itself doesn't state the information the mapping decision actually depends on. A requisition that says "Glucose" with no further qualifier gives a human reviewer, or an automated system, no direct way to know whether the intended LOINC code is 2345-7, 2339-0, or a third code entirely, without inferring specimen type from context: the ordering department, the test panel it's grouped under, or the units the result is reported in.</p>

    <h2>Local code chaos versus LOINC's structured approach</h2>
    <table>
      <thead><tr><th>Aspect</th><th>Typical local lab code</th><th>LOINC term</th></tr></thead>
      <tbody>
        <tr><td>Uniqueness</td><td>Unique only within one lab's own system; the same string can mean different things across labs</td><td>Globally unique, one code per fully specified observation, never reused</td></tr>
        <tr><td>Specimen information</td><td>Often implied by department or panel, not encoded in the code itself</td><td>Explicit System axis on every term</td></tr>
        <tr><td>Method sensitivity</td><td>Rarely distinguished unless billing requires it</td><td>Explicit Method axis, included only when clinically material</td></tr>
        <tr><td>Longevity</td><td>Can be renamed, reused, or retired as lab systems change</td><td>Codes are never deleted and their meaning never changes once published</td></tr>
        <tr><td>Cross-institution portability</td><td>Meaningless outside the originating lab</td><td>Interpretable identically by any system that recognizes LOINC</td></tr>
      </tbody>
    </table>
    <p>That last row is the entire point of the standard. A LOINC code carries its meaning with it regardless of which lab, EHR, or state health information exchange is reading it. A local code carries meaning only inside the four walls of the system that issued it, which is exactly why every inbound lab feed a hospital or health information exchange receives needs its own mapping table, maintained separately, for every sending lab.</p>

    <h2>The regulatory push that made this unavoidable</h2>
    <p>This isn't a theoretical tidiness argument. Federal certification rules for health IT require it directly. Under 45 CFR 170.207, the ONC Health IT Certification Criteria regulation, paragraph (c) names the LOINC database, version 2.72 published February 16, 2022, as the required vocabulary standard for identifying laboratory test results in certified electronic health record technology, with version 2.52 also referenced for backward compatibility with earlier certified systems. Certified EHRs are required to be capable of representing lab results using LOINC. That requirement sits at the EHR layer. It does not reach backward into the originating lab's own information system and force every internal test code to already be LOINC-native at the point of testing, which is precisely the gap that mapping work exists to close: a regulatory requirement on the receiving side of the data exchange, and no equivalent requirement forcing standardized codes at the point where the result is generated.</p>
    <p>In practice this produces a translation layer sitting between every lab and every system downstream of it: hospital EHRs, referring physician systems, payer claims platforms, and health information exchanges. Reference labs and large hospital systems, with dedicated informatics staff, generally maintain reasonably current LOINC mappings for their own catalogs. Smaller independent labs, physician-office labs, and specialty testing labs often don't, either because the mapping work is expensive relative to their volume or because their test menu changes faster than anyone keeps the mapping table current. Those are exactly the labs whose results are most likely to arrive at a downstream system as a scanned PDF or fax with local codes still attached, rather than a structured HL7 feed with LOINC already resolved.</p>

    <h2>What this means for documents, specifically</h2>
    <p>Everything above describes the mapping problem inside structured data pipelines, lab information systems talking to EHRs over HL7 or FHIR. Document intelligence sits one step further upstream, and further from the clean case. A scanned lab report, a faxed results page from a reference lab, or a PDF attached to a prior authorization or claims packet frequently carries only the lab's own printed test name and local code, with no LOINC code anywhere on the page at all, because LOINC is an interoperability standard for electronic transactions, not a labeling convention labs are required to print on paper reports.</p>
    <p>Extracting a usable LOINC code from that kind of document means doing the mapping step described above, but starting from weaker signal than a structured HL7 message provides: a printed test name, sometimes a units string, sometimes a reference range, and rarely an explicit specimen type or method. A system built for this has to combine several things: locating the test name and any adjacent context on the page, checking that context (units, reference range, panel grouping) against the disambiguating signals the six axes actually depend on, matching against a maintained local-code-to-LOINC reference table where one exists for that specific lab, and routing anything genuinely ambiguous, a bare "Glucose" with no specimen indicator being the clearest example, to a review step rather than guessing. That last step matters because a wrong but confident LOINC assignment is worse than a flagged gap: it produces a chart or a claims record that looks correctly coded and isn't, which is a harder error to catch later than an obvious blank field. The same axis-by-axis disambiguation discipline shows up in adjacent standardized code work in the same document set, covered in our posts on <a href="/resources/blogs/ndc-code-extraction">NDC code extraction</a> and <a href="/resources/blogs/medical-coding-automation">medical coding automation</a>, where a superficially matching code is frequently the wrong code once you check the specific axis or segment that actually distinguishes it.</p>

    <h2>Why the mapping gap is a genuine interoperability bottleneck, not a solved detail</h2>
    <p>It's worth being precise about what kind of problem this is, because "LOINC mapping" gets described casually as a solved, mechanical step, and it isn't. Three things make it structurally hard rather than merely tedious. First, the information a correct mapping decision depends on, specimen type and clinically relevant method, is frequently absent from the source document or source system entirely, so no amount of better matching logic can recover data that was never recorded. Second, the decision genuinely requires domain judgment: whether a method difference is clinically material enough to warrant a separate code is a call LOINC's own editors make deliberately, term by term, and a generic synonym-matching approach has no principled way to reproduce that judgment. Third, the mapping isn't a one-time project. Labs add new tests, retire old ones, and switch instrument platforms and reagent methods on an ongoing basis, and each change potentially shifts which LOINC code is correct, so a mapping table built once and left alone degrades quietly over time.</p>
    <p>That combination, missing source information, judgment-dependent decisions, and continuous drift, is why LOINC mapping remains a persistent line item in health IT interoperability work rather than a problem that got fully automated away after nearly three decades of the standard existing. Any team building document extraction for lab results, whether for clinical use, claims adjudication, or underwriting documentation in lending workflows that rely on medical records, should expect to budget for an ongoing mapping maintenance process, a documented handling path for local codes that don't yet have a confirmed LOINC match, and a review queue for genuinely ambiguous cases, rather than a lookup table that ships once and stays correct.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/passport-ocr.png",
  featuredImage: "/images/passport-ocr.png",
  category: "Healthcare",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "loinc code extraction",
  secondary_keywords: [
    "LOINC lab result mapping",
    "LOINC code structure",
    "local lab code to LOINC mapping",
    "LOINC six axes component property system",
    "lab data interoperability standard",
    "LOINC versus result value",
  ],
  tags: ["healthcare", "loinc", "lab-interoperability", "clinical-data-standards", "medical-document-ocr"],
  cluster: "healthcare",
  faq: [
    {
      question: "What does a LOINC code actually identify?",
      answer:
        "A LOINC code identifies the observation itself, what was measured, from what specimen, under what conditions, not the result value it produced. A glucose reading of 95 mg/dL is not a LOINC code. The LOINC code (for example 2345-7) identifies that the accompanying number is a quantitative glucose measurement from serum or plasma. The result travels alongside the code as a separate data element.",
    },
    {
      question: "What are the six axes of a LOINC code?",
      answer:
        "Every fully specified LOINC term is built from six parts: Component (the analyte measured), Property (the kind of quantity, such as mass concentration), Time (point in time or a timed interval), System (the specimen type, such as serum, plasma, or blood), Scale (quantitative, ordinal, nominal, or narrative), and Method (the technique used, included only when it changes clinical interpretation).",
    },
    {
      question: "Why can't a lab's local test codes be mapped to LOINC automatically?",
      answer:
        "Mapping requires knowing all six axes for each local code, especially specimen type and whether the method is clinically material. That information is frequently missing from the lab's own records or the document itself, so no matching algorithm can recover it. Regenstrief's own mapping guidance, built around its RELMA tool, recommends manual review of each distinct local term against sample result data for exactly this reason.",
    },
    {
      question: "Are all glucose tests assigned the same LOINC code?",
      answer:
        "No. LOINC 2345-7 (glucose in serum or plasma) and LOINC 2339-0 (glucose in whole blood) share the same component, property, time aspect, and scale, but differ on the System axis alone, and are entirely separate, non-interchangeable codes. A point-of-care glucometer reading and a central lab chemistry panel result are coded differently even though both are labeled 'glucose' on a report.",
    },
    {
      question: "Is LOINC legally required for lab results?",
      answer:
        "Under 45 CFR 170.207(c), ONC's Health IT Certification Criteria regulation, LOINC database version 2.72 (with version 2.52 referenced for backward compatibility) is the required standard for identifying laboratory test results in certified electronic health record technology. That requirement applies to certified EHRs receiving and displaying results, not to every originating lab's internal test catalog, which is the source of the ongoing mapping gap.",
    },
    {
      question: "Why does LOINC mapping stay a problem instead of getting solved once?",
      answer:
        "Because the source information a correct mapping depends on is often absent, because deciding whether a method difference warrants a separate code requires clinical judgment, and because labs continuously add, retire, and change tests and instrument methods. Each change can shift which LOINC code is correct, so a mapping table built once and left unmaintained degrades over time rather than staying accurate.",
    },
  ],
}
