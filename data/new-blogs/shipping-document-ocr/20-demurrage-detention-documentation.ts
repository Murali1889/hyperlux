import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd20: BlogPost = {
  id: "sd-20",
  title: "Demurrage vs Detention: Documentation That Wins Disputes",
  slug: "demurrage-detention-documentation",
  excerpt:
    "Demurrage and detention are different charges under different agreements. Disputes get settled by whoever can produce the container's actual movement record.",
  description:
    "The real contractual difference between demurrage and detention, why invoices get disputed often, and what the FMC's invoice rule requires to make one valid.",
  metaTag: "Demurrage vs Detention: Proving the Real Timeline",
  content: `
    <p>A trucking company once received an invoice for four days of detention on a container that had already been returned empty, gate scanned back into the terminal three days before the invoice was even generated. The bill was wrong, and the proof that it was wrong already existed. An Equipment Interchange Receipt with a timestamped gate in, sitting in a system nobody had checked before the invoice went out on autopilot. That kind of error happens constantly enough that federal regulators eventually wrote a rule specifically about what a demurrage or detention invoice has to contain before a customer is even obligated to pay it. It points at something most explanations of these two charges skip past entirely: demurrage and detention are not the same charge, they arise under different agreements, and the only thing that reliably settles a dispute between a carrier and a customer over either one is documented proof of where the container physically was and when.</p>

    <p>This post lays out the real distinction between the two charges, why the invoices for them get disputed so routinely, what the Federal Maritime Commission actually requires a demurrage or detention invoice to contain, and a full worked example of a dispute resolved because someone could produce the container's actual movement history. If you are building or evaluating a system that extracts and reconciles <a href="/documents/shipping-docs">shipping documents</a> across a freight operation, this is the layer where document quality directly decides whether a charge gets paid or successfully contested.</p>

    <h2>Demurrage and detention are not the same charge</h2>

    <p>Demurrage is what a container owner charges for a container sitting inside a marine terminal or port facility beyond the free time granted for that location. It is fundamentally a charge for occupying terminal space, and it arises under the free time and tariff terms tied to the bill of lading and the carrier's service contract with the terminal. Detention is what a container owner charges for a container sitting outside the terminal, in the customer's or trucker's physical custody, beyond the free time granted for use of the equipment itself. It arises under a completely different document, the equipment interchange agreement, the contract a trucker or consignee signs when they take physical custody of the carrier's box and chassis and agree to return it by a certain date.</p>

    <p>Most explanations of this distinction reduce it to who sends the bill: the terminal charges demurrage, the carrier charges detention. That rule of thumb is unreliable in practice, because ocean carriers routinely bill demurrage themselves, passing through terminal storage costs under their own tariff even though the container never left the terminal's custody. What actually differs between the two charges is not who mails the invoice, it is which agreement created the payment obligation and which physical location the container was in when the clock was running.</p>

    <table>
      <thead>
        <tr><th>Aspect</th><th>Demurrage</th><th>Detention</th></tr>
      </thead>
      <tbody>
        <tr><td>Where the container is</td><td>Inside the marine terminal or port facility</td><td>Outside the terminal, in the customer's or trucker's custody</td></tr>
        <tr><td>What is being paid for</td><td>Use of terminal space</td><td>Use of the carrier's equipment (container and often chassis)</td></tr>
        <tr><td>Governing agreement</td><td>Free time terms under the bill of lading and carrier or terminal tariff</td><td>Equipment interchange agreement signed at gate out</td></tr>
        <tr><td>Typical clock start</td><td>Vessel discharge or terminal's "available for pickup" notice</td><td>Gate out of the terminal into the customer's custody</td></tr>
        <tr><td>Typical clock stop</td><td>Gate out to the trucker, or vessel loading for exports</td><td>Gate in of the empty container at an authorized return location, or loaded vessel interchange</td></tr>
        <tr><td>Who commonly invoices it</td><td>Terminal directly, or the ocean carrier passing through terminal costs</td><td>Ocean carrier, or the equipment lessor if the box is leased</td></tr>
      </tbody>
    </table>

    <h2>Where the free time clock actually starts and stops</h2>

    <p>The mechanics matter because a single container often runs both clocks in sequence, and getting the handoff point wrong is where a lot of billing errors originate. On an import, the demurrage clock typically starts at vessel discharge or at the moment the terminal's system posts the container as available for pickup, whichever the carrier's tariff specifies. Free time is usually a small number of calendar days, often somewhere in the range of three to five for standard dry containers, though it varies by port, carrier, and negotiated service contract. The demurrage clock stops the moment the container is gated out to the trucker's custody. At that instant, if the customer still has the box, the detention clock starts, governed by an entirely separate free time allowance under the equipment interchange terms, often longer than demurrage free time, and it does not stop until the empty container is gated back in at a location the carrier has authorized for returns.</p>

    <p>Exports run the sequence in the opposite order. A trucker picks up an empty container from a depot, and detention exposure begins immediately under the equipment interchange agreement, well before the box ever reaches the terminal. Demurrage on that same container does not begin until the loaded box is delivered to the terminal, gated in, and whatever free time applies to export storage before vessel loading has expired. A shipper who only tracks one clock, assuming demurrage risk starts and ends at the terminal gate on both legs of the trip, will misjudge exactly when a detention charge is accruing on equipment that has not yet come anywhere near a port.</p>

    <h2>Why these charges get disputed as often as they do</h2>

    <p>Several structural reasons make demurrage and detention among the most contested line items in ocean freight billing. Automated invoicing systems generate charges by comparing two dates in the carrier's own records, typically a discharge or gate out date and a gate in or return date, without any visibility into whether the customer could actually retrieve or return the container during the intervening period. A customs hold, a chassis shortage, a terminal appointment system that had no open slots, or a physical yard congestion problem can all make a container practically unreachable while the carrier's system keeps counting free time as if nothing were wrong.</p>

    <p>Rate and tariff confusion adds another layer. Free time allowances change by carrier, by port, by contract, and by season, and a customer working from an outdated arrival notice or an old service contract can genuinely believe they have more free time than the current tariff actually grants. Verbal extensions granted by a carrier representative during a phone call, promising an extra day or two because of a known port disruption, frequently never make it into the billing system that generates the invoice, so the charge shows up as if the conversation never happened. And because demurrage and detention often appear on the same combined invoice or the same per diem line item, it becomes genuinely difficult for a billed party to tell which clock actually ran against them, and for how long, without going back to the underlying movement records.</p>

    <p>Federal regulators have also weighed in on what makes a charge defensible in the first place. Guidance addressing the reasonableness of these practices under U.S. shipping law has focused on whether a charge actually serves its stated purpose, encouraging cargo and equipment to keep moving, rather than functioning as a penalty for delay the customer had no ability to control. A charge tied to a window when the container was demonstrably not retrievable, because of a hold, a closed gate, or an equipment shortage, is a harder charge to defend than one tied to ordinary customer inaction, and that distinction only gets adjudicated by looking at documented timestamps, not by looking at the invoice total.</p>

    <h2>What the FMC's invoice rule actually requires</h2>

    <p>The Federal Maritime Commission's Demurrage and Detention Billing Requirements rule, codified at 46 CFR Part 541, sets minimum content standards for any invoice issued by an ocean carrier, marine terminal operator, or non-vessel-operating common carrier seeking to collect demurrage or detention charges. The rule does not set the rates or the free time periods themselves, those remain governed by each carrier's tariff and service contracts, but it does set strict rules about who can be billed and what information a valid invoice has to contain before that bill creates any obligation to pay.</p>

    <table>
      <thead>
        <tr><th>Section</th><th>What it covers</th></tr>
      </thead>
      <tbody>
        <tr><td>541.4</td><td>Restricts who can be billed to either the party that contracted for the transportation or storage, or the consignee, not both and not any other party</td></tr>
        <tr><td>541.5</td><td>States that failure to include any required minimum information on the invoice eliminates the billed party's obligation to pay it</td></tr>
        <tr><td>541.6</td><td>Sets the required content of the invoice across four categories: identifying information, timing information, rate information, and dispute information</td></tr>
        <tr><td>541.7</td><td>Requires the invoice to be issued within a defined window from when the charge was incurred, or no payment is required</td></tr>
        <tr><td>541.8</td><td>Establishes a fee mitigation request process, giving the billed party a defined window to contest charges and the billing party a defined window to resolve the request</td></tr>
      </tbody>
    </table>

    <p>Section 541.6 is where the documentation requirement becomes explicit. Identifying information must include the bill of lading or booking number and the container number, so the invoice can be tied to a specific shipment and a specific box rather than an estimate. Timing information must include the free time terms that applied, the date the container became available for pickup on an import or the date it was returned on an export, and the specific dates the charge covers, not just a total day count. Rate information must reference the specific tariff or service contract provision the charge is billed under, not a generic per diem figure. Dispute information must include contact details and a defined process for requesting mitigation. Section 541.5's consequence for missing any of that is blunt: an invoice that omits required information is not just incomplete, it creates no payment obligation at all. That single provision turns invoice completeness itself into the first and sometimes the only question in a dispute, before anyone even argues about whether the underlying delay was the customer's fault.</p>

    <h2>The documents that actually prove the timeline</h2>

    <p>Because the FMC's own invoice rule hinges on dates and container-specific detail, the records that resolve a demurrage or detention dispute are the same records that a compliant invoice is supposed to reference in the first place. In practice, a handful of documents carry almost all of the evidentiary weight.</p>

    <table>
      <thead>
        <tr><th>Document</th><th>What it proves</th></tr>
      </thead>
      <tbody>
        <tr><td>Equipment Interchange Receipt (EIR)</td><td>Timestamped gate in and gate out events, the definitive record of when custody of the container actually changed hands</td></tr>
        <tr><td>Terminal gate transaction log</td><td>Appointment attempts, hold flags, and reason codes for any gate transaction that was denied or delayed</td></tr>
        <tr><td>Vessel discharge or loading confirmation</td><td>The date the container physically came off or went onto the vessel, the anchor point for the demurrage clock</td></tr>
        <tr><td>Customs release timestamp</td><td>When a hold that made the container physically unavailable was actually lifted, distinct from when it was nominally discharged</td></tr>
        <tr><td>Carrier's availability or empty return notice</td><td>The date the carrier itself represented the container as ready for pickup, or the authorized location and date for empty returns</td></tr>
        <tr><td>Appointment system confirmation or failed-attempt receipt</td><td>Evidence that the customer tried to act within free time and was turned away for reasons outside their control</td></tr>
      </tbody>
    </table>

    <p>None of these documents individually settle a dispute. What settles a dispute is lining several of them up against each other and showing that the gap between when a container was billed as available and when it was actually retrievable does not match the carrier's invoice.</p>

    <h2>A worked example: a customs hold that erased a demurrage charge</h2>

    <p>Consider a representative scenario built around ordinary calendar math, the kind of dispute that plays out on real terminals every week. A loaded import container, call it TCLU 447192, discharges from the vessel on Monday, June 1, at 2:00 PM, and the terminal's system immediately posts it as available for pickup the same day. The carrier's tariff grants four calendar days of free time on this trade lane, so free time runs June 2 through June 5, making June 5 the last free day and June 6 the first day demurrage begins accruing.</p>

    <p>What the terminal's initial availability posting did not reflect was a customs hold placed on the entry the same day, June 1, that made the container physically ineligible for release regardless of what the terminal's gate system said. The trucking company scheduled a pickup appointment for June 4 at 9:40 AM, arrived on time, and was turned away. The terminal's own gate transaction log recorded the denial at 9:42 AM with the reason code "hold, not released." The customs hold was actually lifted on June 4 at 6:00 PM, a timestamp visible in the entry release record. The trucking company rebooked the earliest available appointment, and the container was finally gated out, per the EIR, on June 7 at 7:15 AM.</p>

    <p>The carrier's automated billing system, working only from the discharge date and the four-day tariff free time, charged two days of demurrage for June 6 and June 7 at 150 dollars per day, a total of 300 dollars. The invoice reflected the tariff's nominal schedule accurately. It did not reflect that the container was not actually retrievable for roughly three and a half of the days the clock was supposedly running against the customer.</p>

    <p>The dispute was resolved by assembling four documents: the terminal's own gate log showing the denied appointment and its hold reason code, the customs entry system's release timestamp, the carrier's original availability posting that the hold contradicted, and the EIR showing the actual gate out. Laid against each other, the documents showed that the container was not genuinely available until the evening of June 4, roughly three days later than the terminal's initial system posting claimed. Recalculating four days of free time from actual availability on June 4 evening rather than from the nominal discharge date pushed a defensible last free day out to June 8, comfortably covering the June 7 pickup. Facing that documentation, the carrier's billing team credited the full 300 dollars. No part of that outcome depended on anyone's account of what happened. It depended entirely on four timestamped records that already existed before the dispute began, and on someone bothering to pull all four before accepting the invoice as written.</p>

    <h2>What documentation cannot do</h2>

    <p>It is worth being honest about the limits here. Documentation proves what actually happened, it does not rewrite the terms of the underlying agreement. If a tariff genuinely grants three days of free time and a container sat for six days for reasons that had nothing to do with the terminal, the carrier, or any documented obstruction, producing a complete movement record will not make that charge go away, because the record will simply confirm the delay was the customer's own. Documentation also cannot manufacture evidence that was never captured. If a terminal's appointment system does not log failed attempts, or a customs broker does not retain entry release timestamps, there is no retroactive way to reconstruct that gap, and a dispute resting on an undocumented claim of unavailability is a much weaker dispute than one resting on a logged hold code. And an informal waiver, an extra day promised verbally by a carrier representative and never entered into the billing system, remains functionally unenforceable no matter how clearly someone remembers the phone call, because there is nothing on paper for a billing dispute team to act on.</p>

    <h2>Building demurrage and detention documentation into a shipping operation</h2>

    <p>None of the individual documents involved in a demurrage or detention dispute are exotic. EIRs, gate transaction logs, discharge confirmations, and customs release records already exist in some system somewhere for nearly every container that moves through a port. The operational failure is almost never that the evidence does not exist, it is that nobody assembled it before the invoice was accepted or paid on autopilot. A document intelligence pipeline that extracts container numbers, dates, and hold or reason codes consistently across EIRs, terminal logs, and carrier invoices, and cross-references them by container number, turns a dispute that would otherwise take days of manually pulling records from three different portals into a comparison that can happen automatically, before a payment goes out.</p>

    <p>That same extraction discipline pays off well beyond disputes. Getting the container number right on every document in the chain matters enough that it is worth verifying independently, the way <a href="/resources/blogs/container-number-verification">container number verification</a> against the ISO 6346 check digit catches a misread digit before it ever causes a document mismatch. The free time terms that anchor a demurrage clock in the first place usually trace back to language on the <a href="/resources/blogs/bill-of-lading-processing">bill of lading</a>, so extracting that document accurately is part of the same chain of proof. And once a demurrage or detention charge is on an invoice, checking it against the underlying movement documents is functionally the same exercise as any other <a href="/resources/blogs/freight-bill-audit-automation">freight bill audit</a>, comparing what was billed against what the records actually support, line by line, before payment goes out rather than after.</p>

    <p>Section 541.5 of the FMC's rule effectively makes invoice completeness itself an automatable check. An invoice missing a required timing element, a container number, or a tariff reference is not just sloppy, it is legally non-payable, and a system that flags those gaps automatically is doing something a manual accounts payable review would frequently miss under normal invoice volume. Combined with a routine practice of pulling the EIR, the gate log, and the discharge confirmation for any charge that looks contestable, that turns demurrage and detention disputes from a reactive scramble into a comparison two systems can run against each other in seconds.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-shipping-and-logistics-documents">OCR for shipping and logistics documents</a>.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "Logistics",
  date: "September 18, 2026",
  datePublished: "2026-09-18T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "demurrage detention documentation",
  secondary_keywords: [
    "demurrage vs detention",
    "free time last free day",
    "equipment interchange receipt",
    "container detention dispute",
    "FMC demurrage detention rule",
    "container gate out timestamp",
  ],
  tags: ["logistics", "OCR", "document AI", "demurrage", "detention", "shipping"],
  cluster: "logistics",
  faq: [
    {
      question: "What is the real difference between demurrage and detention?",
      answer:
        "Demurrage is a charge for a container sitting inside a marine terminal or port facility beyond its free time, governed by the free time terms in the bill of lading and the carrier's tariff. Detention is a charge for a container sitting outside the terminal, in the customer's custody, beyond its free time, governed by the equipment interchange agreement signed at gate out. The distinction is about the container's physical location and which agreement applies, not simply about who sends the invoice.",
      },
    {
      question: "Does the terminal always bill demurrage and the carrier always bill detention?",
      answer:
        "No. That is a common oversimplification. Ocean carriers frequently bill demurrage themselves, passing through terminal storage costs under their own tariff, even though the container never left the terminal's physical custody. What actually differs between the two charges is the governing agreement and the container's location, not the identity of the party issuing the invoice.",
    },
    {
      question: "What does the FMC's demurrage and detention rule require on an invoice?",
      answer:
        "Under 46 CFR Part 541, an invoice must include identifying information such as the bill of lading and container number, timing information including free time terms and specific charge dates, rate information referencing the applicable tariff provision, and dispute information with contact details and a mitigation process. Under section 541.5, an invoice missing any required element creates no obligation for the billed party to pay it.",
    },
    {
      question: "What documents prove the actual timeline in a demurrage or detention dispute?",
      answer:
        "The Equipment Interchange Receipt showing timestamped gate in and gate out events, the terminal's gate transaction log including any hold or denial codes, the vessel discharge or loading confirmation, the customs release timestamp if a hold was involved, and the carrier's own availability or empty return notice. Lining these up against the invoice's claimed dates is what typically resolves a dispute.",
    },
    {
      question: "Can documentation always get a demurrage or detention charge waived?",
      answer:
        "No. Documentation proves what actually happened, it does not change the underlying free time terms. If a container genuinely sat beyond its free time for reasons unrelated to any documented hold, congestion, or carrier delay, complete records will confirm the charge is valid rather than dispute it. Documentation only helps when the records themselves show the container was not actually available or returnable during part of the billed period.",
    },
    {
      question: "Why do demurrage and detention charges get disputed so frequently?",
      answer:
        "Automated billing systems often generate these charges from two dates in the carrier's own records without visibility into whether the container was actually retrievable, so a customs hold, chassis shortage, or terminal congestion can trigger a charge that does not reflect the customer's real ability to act. Combined billing of demurrage and detention on the same invoice, outdated free time information, and undocumented verbal extensions add further sources of dispute.",
    },
  ],
}
