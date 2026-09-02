import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd07: BlogPost = {
  id: "sd-07",
  title: "Dangerous Goods Declaration Processing: No Room for Error",
  slug: "dangerous-goods-declaration-processing",
  excerpt:
    "Swap two digits in a UN number and gasoline becomes methanol on paper. Both look like valid entries. Here is why that gap can't survive automation.",
  description:
    "The real structural requirements of an IATA DGR and IMDG dangerous goods declaration, plus a worked UN number transposition example showing the actual risk.",
  metaTag: "Dangerous Goods Declaration Processing: Zero Ambiguity",
  content: `
    <p>Swap two digits in a UN number and gasoline becomes methanol. UN1203 is gasoline, Class 3, Packing Group II. UN1230 is methanol, also Class 3, also Packing Group II, but carrying a subsidiary risk of 6.1, toxic, that gasoline does not carry at all. Transpose the last two digits of one and you land exactly on the other, a real, valid, currently assigned entry in the hazardous materials table, not a nonsense string a validation script would catch on format alone. A system checking only "is this four digits, does it start with a plausible prefix, does it match the pattern of a UN number" would wave either version through without hesitation. That gap, between a string that looks structurally fine and a string that is actually correct, is the entire problem with dangerous goods declaration processing, and it is why this particular document category cannot be approached the same way an invoice or a packing list can.</p>

    <p>This post walks through what a dangerous goods declaration actually requires structurally under IATA's Dangerous Goods Regulations and the IMDG Code, works through that UN1203/UN1230 transposition in detail, and explains why the tolerance for extraction ambiguity here is not just lower than other <a href="/documents/shipping-docs">shipping documents</a>, it is effectively zero.</p>

    <h2>What a dangerous goods declaration is actually declaring</h2>

    <p>A dangerous goods declaration is not a description of a shipment in the way a commercial invoice describes one. It is a shipper's signed, legal statement that a specific set of regulatory facts about the cargo are true: what the substance is, how hazardous it is, how severely, and how it has been packaged, marked, and labeled to control that hazard in transit. Under the IATA Dangerous Goods Regulations, which implement the ICAO Technical Instructions for air transport, and under the IMDG Code for sea transport, the declaration exists specifically so that everyone downstream, the carrier's acceptance staff, the loading crew, and critically, emergency responders if something goes wrong, can act correctly on a document without needing to independently verify the chemistry themselves. That last point is the one general shipping-document content tends to skip past. A dangerous goods declaration is read, under time pressure, by people making immediate operational decisions based on what it says, not by an accounts team reconciling numbers days later.</p>

    <h2>The four core elements, and the order they have to appear in</h2>

    <p>Both the IATA DGR and the IMDG Code trace back to the same source, the UN Model Regulations on the Transport of Dangerous Goods, which is why the core structural elements are consistent across air, sea, and, in the United States, ground transport under 49 CFR. The basic hazard description on a shipping paper has to contain four elements, and it has to contain them in a fixed sequence, with nothing else interspersed between them. This is not a style preference, it is a regulatory requirement. Under 49 CFR 172.202(a) and (b), the US Department of Transportation's own hazardous materials regulations specify the sequence explicitly and give a worked example: the basic description "must be shown in sequence with no additional information interspersed," formatted as <em>UN2744, Cyclobutyl chloroformate, 6.1, (8, 3), PG II</em>, meaning identification number, then proper shipping name, then hazard class with any subsidiary risks in parentheses, then packing group.</p>

    <table>
      <thead>
        <tr><th>Element</th><th>What it is</th><th>Why it can't be approximated</th></tr>
      </thead>
      <tbody>
        <tr><td>UN number</td><td>A four digit identifier assigned to a specific substance or article, drawn from the UN Model Regulations and reproduced in Column 4 of the 49 CFR 172.101 Hazardous Materials Table</td><td>It is the lookup key every downstream system, including emergency responder references, uses to identify the actual substance. A wrong digit points to a wrong, but often equally valid-looking, substance</td></tr>
        <tr><td>Proper shipping name</td><td>The specific regulatory name for the substance, drawn from Column 2 of the same table, not a trade name or a generic description the shipper prefers</td><td>Generic or trade names can describe multiple regulated substances, or none. Only the proper shipping name is guaranteed to map to exactly one hazard class and packing group combination</td></tr>
        <tr><td>Hazard class or division</td><td>A number from 1 through 9 (with subdivisions, like 2.1 or 6.1) indicating the primary nature of the hazard, plus any subsidiary risks in parentheses</td><td>Determines which handling, segregation, and labeling rules apply. Missing a subsidiary risk means missing an entire category of required precaution, not just an entire label</td></tr>
        <tr><td>Packing group</td><td>Roman numeral I, II, or III, indicating the degree of danger, from greatest (I) to least (III), from Column 5 of the table</td><td>Governs the specific packaging performance standard required. The wrong packing group means the wrong packaging was legally required and possibly used</td></tr>
      </tbody>
    </table>

    <h2>IATA DGR versus IMDG: same four elements, different surrounding structure</h2>

    <p>Because both systems descend from the same UN Model Regulations, the four core elements above are consistent whether the shipment is moving by air or by sea. What differs is the additional data that has to accompany them, which is exactly the kind of detail that gets flattened into "fill out the dangerous goods declaration correctly" in most guides without ever specifying what "correctly" requires beyond the core four fields.</p>

    <table>
      <thead>
        <tr><th>Requirement</th><th>IATA DGR (air, Shipper's Declaration)</th><th>IMDG Code (sea, Dangerous Goods Declaration)</th></tr>
      </thead>
      <tbody>
        <tr><td>Core four elements</td><td>UN number, proper shipping name, class/division, packing group, in fixed sequence</td><td>UN number, proper shipping name, class, subsidiary risk, packing group, in fixed sequence within the Dangerous Goods List entry format</td></tr>
        <tr><td>Quantity field</td><td>"Q" value, net quantity per package, expressed in the specific unit required for that hazard class</td><td>Gross mass and, where applicable, net explosive mass, plus flashpoint for flammable liquids where relevant</td></tr>
        <tr><td>Packing detail</td><td>Packing instruction number referencing the specific IATA packing instruction applied, plus number and type of packages</td><td>Reference to the applicable packing method under the IMDG Code, plus EmS (Emergency Schedule) code identifying the fire and spillage response procedure</td></tr>
        <tr><td>Transport limitation</td><td>Explicit statement of whether the shipment is Cargo Aircraft Only (CAO) or permitted on passenger aircraft</td><td>Marine pollutant designation where applicable, and stowage category affecting where on the vessel the cargo can be placed</td></tr>
        <tr><td>Emergency contact</td><td>24 hour emergency contact telephone number, a mandatory field on the declaration itself</td><td>Emergency contact information, though format and placement vary by flag state and carrier requirements</td></tr>
        <tr><td>Certification statement</td><td>Signed shipper's certification that the consignment is "fully and accurately described" and is "in all respects in proper condition for transport"</td><td>Equivalent signed shipper's declaration of compliance, required under SOLAS Chapter VII</td></tr>
      </tbody>
    </table>

    <p>Notice what stays constant across both columns: the four core elements never move, and the sequence never relaxes. Everything that differs between the two regimes is additional context layered around that fixed core, not a substitute for it. A document intelligence system built for one mode and pointed at the other will get the extra fields wrong, but if it gets the core four elements wrong on either, the error is categorically more serious, because those four fields are what determine physical handling, not paperwork routing.</p>

    <h2>The worked example: UN1203 becomes UN1230</h2>

    <p>Go back to the opening pair. UN1203, gasoline, is a Class 3 flammable liquid, Packing Group II, with no subsidiary risk listed. UN1230, methanol, is also a Class 3 flammable liquid, also Packing Group II, but it carries a 6.1 subsidiary risk, toxic by ingestion, inhalation, and skin contact, which changes both the labeling requirement (a second, subsidiary risk label alongside the primary flammable label) and the operational handling assumptions for anyone dealing with a spill or a leak. Transposing the third and fourth digits of one produces the other exactly: 1-2-0-3 becomes 1-2-3-0.</p>

    <table>
      <thead>
        <tr><th>Field</th><th>UN1203</th><th>UN1230</th></tr>
      </thead>
      <tbody>
        <tr><td>Proper shipping name</td><td>Gasoline</td><td>Methanol</td></tr>
        <tr><td>Hazard class</td><td>3 (flammable liquid)</td><td>3 (flammable liquid)</td></tr>
        <tr><td>Subsidiary risk</td><td>None</td><td>6.1 (toxic)</td></tr>
        <tr><td>Packing group</td><td>II</td><td>II</td></tr>
      </tbody>
    </table>

    <p>Now consider what a routine, format-only validation check sees in each case. UN1203 is four digits, present in the hazardous materials table, formatted correctly. UN1230 is also four digits, also present in the table, also formatted correctly. Neither string trips a regex, neither fails a "does this UN number exist" lookup, and a human proofreader skimming a stack of declarations has no visual cue to catch a transposition that produces another real, valid number. If the shipment physically contains gasoline but the declaration was keyed, misread, or mistyped as UN1230, the paperwork now describes an entirely different substance with a hazard profile the actual cargo does not match. Emergency responders arriving at an incident involving that shipment would consult a guide keyed to methanol's toxic exposure risk for a cargo that is actually gasoline, or the reverse: treat a genuinely toxic methanol spill using the response profile for a straightforward flammable liquid, missing the exposure precautions the situation actually requires. Either direction of that error is the same category of problem: the paperwork and the physical reality have silently diverged, and nothing about the document's own internal structure reveals that they have.</p>

    <p>This is the specific reason a UN number cannot be treated as free text with a format check. It has to be validated against the authoritative substance table, cross-referenced against the proper shipping name on the same declaration, because a self-consistent-looking four digit number and a self-consistent-looking chemical name can each individually pass a shallow check while together describing something that does not actually match the shipment in front of anyone.</p>

    <h2>Why this differs from an invoice or a packing list, structurally</h2>

    <p>Most document types in a logistics pipeline have a built in tolerance for a small extraction error, not because errors are acceptable but because the downstream process has some capacity to catch and correct them before real consequences follow. A freight invoice with a transposed digit in a line item amount produces a total that fails to reconcile against the purchase order, caught by an accounting control before payment goes out. A packing list with a miscounted carton produces a discrepancy at receiving, caught by a warehouse team doing a physical count. Both are real problems, but both have a natural second checkpoint downstream that surfaces the error before it causes irreversible harm.</p>

    <p>A dangerous goods declaration does not have that same safety net in the same way, because the primary consumer of a wrong UN number is not a reconciliation process, it is a person making an immediate, physical decision, sometimes in an emergency, based on what the document says. There is no equivalent of "the total doesn't reconcile" for a UN number that describes the wrong substance but is internally well formed. The error only surfaces if someone happens to independently verify the substance against the declaration, which is exactly the check the declaration exists to make unnecessary in the first place. That is the structural reason this document category cannot be handled with the same ambiguity tolerance as most other shipping paperwork: the failure mode is not "gets caught later, at some cost," it is "may not get caught until the moment the information was needed most."</p>

    <h2>What zero ambiguity actually requires from an extraction pipeline</h2>

    <p>Saying a system needs "zero ambiguity" on dangerous goods fields is easy to state and specific to build. In practice it breaks down into three distinct, checkable requirements, and a pipeline that does all three has meaningfully different reliability than one that does only the first.</p>

    <table>
      <thead>
        <tr><th>Requirement</th><th>What it catches</th><th>What it misses on its own</th></tr>
      </thead>
      <tbody>
        <tr><td>OCR confidence thresholding on the four core fields</td><td>Low quality scans, degraded characters, obvious extraction failures</td><td>A confidently, cleanly read wrong digit, since OCR confidence measures how sure the model is about what it read, not whether what it read is correct</td></tr>
        <tr><td>Cross-reference against the authoritative UN number table</td><td>UN numbers that do not exist at all, or that exist but do not match the hazard class and packing group also stated on the same declaration</td><td>A transposition that lands on another real, valid entry, since the check passes if the number exists and the fields on the declaration are internally consistent with each other</td></tr>
        <tr><td>Cross-reference of proper shipping name against UN number</td><td>A mismatch between the stated chemical name and what that UN number actually maps to in the authoritative table, which catches most transposition errors because the wrong number's proper shipping name will not match what the shipper actually wrote</td><td>The rare case where a shipper transcribed both the wrong UN number and a correspondingly wrong shipping name consistently, which shifts the error back to a human classification mistake rather than an extraction failure</td></tr>
      </tbody>
    </table>

    <p>The middle and third rows are the ones general OCR accuracy claims routinely gloss over. A 99% character-level accuracy rate sounds close to perfect, but on a four digit UN number field, a 1% character error rate is not a rounding error, it is a meaningful chance of landing on a different, valid, wrong number rather than an obviously broken one. The only way to close that gap is cross-referencing the extracted UN number against the extracted proper shipping name and confirming both point to the same table entry, not trusting either field in isolation, because the whole danger of a transposition error is that it produces two individually plausible fields that happen to disagree with each other.</p>

    <h2>What getting this wrong actually costs</h2>

    <p>Under 49 CFR 107.329, the US civil penalty structure for hazardous materials transportation violations sets a maximum penalty of $102,348 per violation in the general case, rising to $238,809 per violation if the violation results in death, serious illness, severe injury, or substantial property destruction. There is generally no minimum penalty except for training-related violations, which carry a $617 minimum. Those figures apply per violation, and a single incorrectly declared shipment can constitute more than one violation depending on what specifically was wrong, misclassification, mismarking, and improper documentation can each be assessed separately.</p>

    <p>Beyond the direct regulatory penalty, a rejected or incorrect dangerous goods declaration has an operational cost most content in this space treats as an afterthought: carrier acceptance staff who catch an inconsistency at the point of tender will refuse the shipment outright rather than accept it and sort out the discrepancy later, because the acceptance check exists specifically to prevent an unsafe or non-compliant shipment from ever entering the transport chain. That means a shipment that fails an acceptance check does not proceed on a delayed timeline, it does not proceed at all until the declaration is corrected and resubmitted, which for a time sensitive shipment is a meaningfully worse outcome than a processing delay on an invoice or a bill of lading correction.</p>

    <h2>Where extraction ambiguity is acceptable, and where it categorically is not</h2>

    <p>It is worth being precise about scope here, because not every field on a dangerous goods declaration carries the same stakes. A shipper's internal reference number, a freight forwarder's booking code, or a formatting variation in how the emergency contact number is punctuated are fields where a small extraction error is genuinely low consequence, catchable through normal downstream processes, and not worth building specialized cross-referencing logic for. The four core elements, UN number, proper shipping name, hazard class with any subsidiary risk, and packing group, sit in a different category entirely, because they are the fields the entire safety function of the document depends on, and because, as the UN1203/UN1230 example shows, an error in any of them does not reliably produce something that looks wrong. A well built extraction pipeline for this document type should apply that same tiered logic explicitly: standard confidence thresholding on most fields, and mandatory cross-reference validation, not just confidence scoring, on the four fields where an error can be simultaneously well formed and wrong.</p>

    <h2>How this connects to the rest of the shipment's paperwork</h2>

    <p>A dangerous goods declaration rarely travels alone. For air shipments it accompanies an <a href="/resources/blogs/air-waybill-verification">air waybill</a>, and the two documents need to agree on the shipment they describe, since a discrepancy between the declared cargo on the dangerous goods paperwork and the general cargo description on the waybill is itself a red flag an acceptance check is designed to catch. For sea shipments moving in a container, the dangerous goods declaration has to correspond to the specific <a href="/resources/blogs/container-number-verification">container number</a> the substance is actually loaded into, since IMDG stowage and segregation rules are applied per container, and a declaration that references the wrong box is functionally the same failure as a declaration with the wrong UN number, the paperwork and the physical cargo have diverged.</p>

    <h2>What to check in a current dangerous goods document process</h2>

    <p>Ask specifically whether your current extraction or review process validates the UN number against the authoritative table and cross-checks it against the extracted proper shipping name on the same declaration, or whether it only confirms the UN number field is present and formatted correctly. Those are meaningfully different levels of verification, and only the first catches a transposition that lands on another valid entry. Then confirm whether hazard class and packing group are being validated as a set against what the UN number's table entry actually specifies, rather than accepted independently as long as each individually looks like a plausible value.</p>

    <p>None of the four core fields on a dangerous goods declaration are complicated to define. The difficulty is entirely in the fact that a wrong value in any of them tends to look exactly like a right one, and the consequence of missing that is not a reconciliation delay, it is paperwork that no longer describes what is actually in the shipment. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/intelligent-document-processing.png",
  featuredImage: "/images/intelligent-document-processing.png",
  category: "Logistics",
  date: "September 5, 2026",
  datePublished: "2026-09-05T00:00:00.000Z",
  dateModified: "2026-09-05T00:00:00.000Z",
  last_updated: "September 5, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "dangerous goods declaration processing",
  secondary_keywords: [
    "IATA dangerous goods regulations",
    "IMDG dangerous goods declaration",
    "UN number verification",
    "shipper's declaration for dangerous goods",
    "hazardous materials shipping paper requirements",
    "dangerous goods classification errors",
  ],
  tags: ["logistics", "OCR", "document AI", "dangerous goods", "compliance", "shipping"],
  cluster: "logistics",
  faq: [
    {
      question: "What are the four required elements on a dangerous goods declaration?",
      answer:
        "The UN number, the proper shipping name, the hazard class or division (with any subsidiary risk), and the packing group. Under 49 CFR 172.202, these four must appear in that exact sequence with no additional information interspersed between them, and the same core structure carries through IATA DGR and IMDG Code declarations.",
    },
    {
      question: "Why is a transposed UN number a serious error rather than a minor typo?",
      answer:
        "Many four digit transpositions land on another real, currently assigned UN number rather than an invalid string, so a format check or existence check passes without catching the error. UN1203 (gasoline) and UN1230 (methanol) are a real example: transposing the third and fourth digits turns one valid entry into a different valid entry with a different hazard profile.",
    },
    {
      question: "How is IATA DGR different from IMDG for dangerous goods documentation?",
      answer:
        "Both derive from the same UN Model Regulations and share the same core four elements. IATA DGR, for air transport, adds a Q value net quantity field, a packing instruction reference, and a cargo-aircraft-only or passenger-aircraft designation. IMDG, for sea transport, adds an EmS emergency schedule code, marine pollutant designation, and vessel stowage category.",
    },
    {
      question: "Can OCR confidence scores alone catch dangerous goods declaration errors?",
      answer:
        "No. A confidence score reflects how certain the model is about what character it read, not whether the resulting UN number is correct. A cleanly, confidently read wrong digit that happens to form another valid UN number will pass a confidence threshold check. Catching it requires cross-referencing the extracted UN number and proper shipping name against the authoritative hazardous materials table.",
    },
    {
      question: "What are the civil penalties for hazardous materials documentation violations?",
      answer:
        "Under 49 CFR 107.329, the maximum civil penalty is $102,348 per violation in general cases, rising to $238,809 per violation if the violation results in death, serious illness, severe injury, or substantial property destruction. Training-related violations carry a $617 minimum.",
    },
    {
      question: "Does every field on a dangerous goods declaration need this level of validation?",
      answer:
        "No. Fields like an internal reference number or a freight forwarder's booking code are low consequence and catchable through normal downstream processes. The UN number, proper shipping name, hazard class with subsidiary risk, and packing group are the fields that determine physical handling and safety response, and those are the ones that warrant mandatory cross-reference validation rather than confidence-score checking alone.",
    },
  ],
}
