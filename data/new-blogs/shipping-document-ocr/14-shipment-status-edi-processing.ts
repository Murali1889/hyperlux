import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd14: BlogPost = {
  id: "sd-14",
  title: "EDI 214 Shipment Status Processing: Reading the Real Codes",
  slug: "shipment-status-edi-processing",
  excerpt:
    "A shipment shows 'arrived at delivery' and a lender releases a collateral hold. Three EDI events later, the load is marked returned to shipper.",
  description:
    "How EDI 214 shipment status codes actually work, why visibility platforms parse AT7 codes instead of free text, and a worked delivery exception sequence.",
  metaTag: "EDI 214 Shipment Status Processing: Reading the Codes",
  content: `
    <p>An asset-based lender monitoring a borrower's inventory in transit watches a shipment tracker flip to "arrived at delivery location" on a Tuesday afternoon. The system treats that as good news: goods pledged as collateral have reached the buyer, the sale is about to complete, and the borrowing base can be adjusted accordingly. What the tracker does not surface, because nobody built the parsing logic to look for it, is that the same shipment generates three more EDI status events over the following two days: an attempted delivery that failed, a hold for a missed appointment, and finally a refusal by the consignee that sends the trailer back to the shipper's dock. The inventory never changed hands. It is now sitting exactly where it started, and the lender's system still shows it as delivered, because "arrived" was the last status code anyone's dashboard actually rendered.</p>

    <p>This is not a hypothetical edge case in freight EDI, it is the ordinary behavior of the ANSI X12 214 transaction set when a pipeline treats it as a single delivered/not-delivered flag instead of what it actually is: a running sequence of coded events, each with its own status code, reason code, and timestamp, that has to be read in order to know what actually happened to a shipment. This post is part of a cluster on <a href="/documents/shipping-docs">shipping document processing</a>, and it covers the part of EDI-based shipment tracking that most explanations skip over: the exact structure of the 214's status code system, why a real-time visibility platform has to be built around parsing that structure rather than trusting free-text carrier updates, and a full worked sequence showing how a delivery exception actually looks inside the data.</p>

    <h2>What the EDI 214 transaction set actually is</h2>

    <p>The 214, formally the Transportation Carrier Shipment Status Message, is the EDI transaction a motor carrier sends to report what is happening to a shipment as it moves. It follows the load tender and its acceptance, typically exchanged as a 204 and a 990, and it continues firing throughout the shipment's life, from dispatch through pickup, transit, and delivery, with a separate 210 handling the freight invoice only after the movement is done. A single shipment under active transit commonly generates somewhere between five and ten separate 214 transactions before it closes out, each one representing a discrete event rather than a continuous status.</p>

    <p>The transaction is built from a small set of segments, and almost all of the operational meaning lives in one of them:</p>

    <table>
      <thead>
        <tr><th>Segment</th><th>Name</th><th>What it carries</th></tr>
      </thead>
      <tbody>
        <tr><td>ST</td><td>Transaction Set Header</td><td>Identifies the transaction as a 214 and assigns a control number</td></tr>
        <tr><td>B10</td><td>Beginning Segment for Transportation Carrier Shipment Status</td><td>The shipment identification number (SID) and the carrier's SCAC code</td></tr>
        <tr><td>L11</td><td>Business Instructions and Reference Number</td><td>PRO number, bill of lading number, purchase order number tying the status to the underlying shipment</td></tr>
        <tr><td>LX</td><td>Assigned Number</td><td>A loop counter separating multiple status events reported in one transaction</td></tr>
        <tr><td>AT7</td><td>Shipment Status Details</td><td>The status code, reason code, and event date and time. This is the segment that matters</td></tr>
        <tr><td>MS1</td><td>Equipment, Shipment, or Real Property Location</td><td>The city, state, and country where the event occurred</td></tr>
        <tr><td>MS2</td><td>Equipment or Container Owner and Type</td><td>The trailer or equipment number reporting the event</td></tr>
        <tr><td>SE</td><td>Transaction Set Trailer</td><td>Closes out the transaction and confirms segment count</td></tr>
      </tbody>
    </table>

    <p>Everything a downstream system needs to reconstruct what physically happened to a shipment is packed into the AT7 loop, and a 214 can carry more than one AT7 if the carrier is batching several events into a single transmission rather than sending one 214 per event. Reading a 214 correctly means reading every AT7 loop it contains, in the order the events occurred, not just pulling the last one and discarding the rest.</p>

    <h2>The AT7 segment: where the actual status codes live</h2>

    <p>The AT7 segment has seven possible elements, and the first two are the ones that carry the entire meaning of the event:</p>

    <table>
      <thead>
        <tr><th>Element</th><th>X12 data element</th><th>Name</th><th>What it means</th></tr>
      </thead>
      <tbody>
        <tr><td>AT701</td><td>1650</td><td>Shipment Status Code</td><td>The milestone that occurred, e.g. arrived, departed, delivered, delayed</td></tr>
        <tr><td>AT702</td><td>1651</td><td>Shipment Status or Appointment Reason Code</td><td>Why the status happened, e.g. normal status, consignee held, refused</td></tr>
        <tr><td>AT703</td><td>1652</td><td>Shipment Appointment Status Code</td><td>Whether the event relates to a pickup or delivery appointment</td></tr>
        <tr><td>AT704</td><td>1651</td><td>Appointment Reason Code</td><td>Reason tied specifically to an appointment change, if applicable</td></tr>
        <tr><td>AT705</td><td>373</td><td>Date</td><td>Event date, CCYYMMDD format</td></tr>
        <tr><td>AT706</td><td>337</td><td>Time</td><td>Event time, HHMM in 24-hour format</td></tr>
        <tr><td>AT707</td><td>623</td><td>Time Code</td><td>Time zone qualifier; absent means the carrier's local time, not UTC</td></tr>
      </tbody>
    </table>

    <p>AT701 alone tells you what happened. AT702 tells you why. A code pair of X1 (arrived at delivery location) with no reason code attached is a routine milestone. The same X1 followed shortly by an AH (attempted delivery) with an AT702 of B5 (held per consignee) is the first signal that the delivery is not going to close cleanly. Neither element means much read alone, and a pipeline that only captures AT701 and discards AT702 is throwing away exactly the field that distinguishes a normal event from an exception.</p>

    <h2>The status code vocabulary: pickup, transit, delivery, exception</h2>

    <p>Element 1650, the code list behind AT701, defines a few dozen values, and carriers implement subsets of it. The core lifecycle codes that appear across nearly every implementation guide are these:</p>

    <table>
      <thead>
        <tr><th>Code</th><th>Meaning</th><th>Lifecycle stage</th></tr>
      </thead>
      <tbody>
        <tr><td>X3</td><td>Arrived at pickup location</td><td>Pre-pickup</td></tr>
        <tr><td>AF</td><td>Carrier departed pickup location with shipment</td><td>Pickup confirmed</td></tr>
        <tr><td>P1</td><td>Departed terminal location</td><td>Linehaul / transit</td></tr>
        <tr><td>X6</td><td>En route to delivery location</td><td>In transit</td></tr>
        <tr><td>X4</td><td>Arrived (on hand) at terminal location</td><td>Terminal handling</td></tr>
        <tr><td>X1</td><td>Arrived at delivery location</td><td>Pre-delivery</td></tr>
        <tr><td>AV</td><td>Available for delivery</td><td>Pre-delivery, at destination terminal</td></tr>
        <tr><td>AH</td><td>Attempted delivery</td><td>Delivery attempt, not necessarily successful</td></tr>
        <tr><td>D1</td><td>Completed unloading at delivery location</td><td>Delivery, carrier-dependent gloss</td></tr>
        <tr><td>J1</td><td>Delivered to a connecting line</td><td>Interline handoff, not final delivery</td></tr>
        <tr><td>A7</td><td>Refused by consignee</td><td>Exception</td></tr>
        <tr><td>A3</td><td>Returned to shipper</td><td>Exception, terminal</td></tr>
        <tr><td>SD</td><td>Shipment delayed</td><td>Exception</td></tr>
        <tr><td>CA</td><td>Shipment cancelled</td><td>Exception, terminal</td></tr>
        <tr><td>K1</td><td>Arrived at customs</td><td>Cross-border hold</td></tr>
        <tr><td>PR</td><td>Customs hold</td><td>Cross-border exception</td></tr>
        <tr><td>ZZ</td><td>Customs cleared</td><td>Cross-border, resolved</td></tr>
      </tbody>
    </table>

    <p>Two entries in that table deserve more attention than the rest, because they are the two most common sources of a system silently reporting a delivery that never happened. The first is D1. Its literal element 1650 definition is "completed unloading at delivery location," which is close to but not identical to "delivered." Some carriers, including large LTL carriers, use D1 in their own implementation guides as a plain stand-in for delivered. Others treat it strictly as the unload-complete milestone and expect a downstream system to combine it with the absence of any later exception code before calling the shipment closed. A pipeline that hardcodes "D1 means delivered" across every carrier will get it right for some and wrong for others, and the two are indistinguishable without checking that carrier's specific implementation guide.</p>

    <p>The second is J1, delivered to a connecting line. This code means the shipment changed custody to an interline partner carrier, not that it reached the consignee. Freight is still moving, a different carrier now controls it, and the location in MS1 identifies the terminal where the handoff happened, not the final destination. Treating J1 as proof of delivery, which a naive keyword match on "delivered" in the code's own description would do, produces a false delivery confirmation on every interline shipment a system processes.</p>

    <h2>The reason code layer: what actually distinguishes routine from exception</h2>

    <p>AT702 draws from element 1651, a separate code list from AT701's element 1650, and it is the layer that most tracking dashboards discard because they only render the milestone, not the context. The most important entry in that list is one that means nothing is wrong: NS, normal status, which shows up attached to routine AT7 events like X6 to confirm the shipment is proceeding as expected. A pipeline that alerts on every AT702 value indiscriminately will generate noise on every single in-transit update, since most of them carry NS. The entries that actually warrant a workflow action are the exception reasons:</p>

    <table>
      <thead>
        <tr><th>Code</th><th>Meaning</th><th>Typical pairing</th></tr>
      </thead>
      <tbody>
        <tr><td>NS</td><td>Normal status, nothing to flag</td><td>X6, X3, AF routine events</td></tr>
        <tr><td>B5</td><td>Held per consignee</td><td>AH, SD</td></tr>
        <tr><td>HB</td><td>Held pending appointment</td><td>SD, X9</td></tr>
        <tr><td>BS</td><td>Refused by customer</td><td>A7</td></tr>
        <tr><td>BE</td><td>Road conditions</td><td>SD</td></tr>
        <tr><td>A2</td><td>Incorrect address</td><td>AH, SD</td></tr>
        <tr><td>A1</td><td>Missed delivery</td><td>AH, SD</td></tr>
        <tr><td>AG</td><td>Consignee related delay</td><td>SD</td></tr>
        <tr><td>CA</td><td>Customs, import or export</td><td>K1, PR</td></tr>
      </tbody>
    </table>

    <p>The pairing matters more than either code alone. An SD (shipment delayed) with a reason of BE (road conditions) is operationally different from an SD with a reason of B5 (held per consignee): one resolves itself once weather clears, the other requires someone to actually contact the consignee. A rules engine that only stores AT701 loses this distinction entirely and routes both to the same generic "delayed" bucket.</p>

    <h2>Why real-time visibility runs on parsing codes, not free-text updates</h2>

    <p>It is worth being precise about why the entire freight visibility industry, from TMS platforms to load boards to lender monitoring tools, is architected around parsing AT701/AT702 pairs rather than ingesting whatever free-text status string a carrier's own tracking portal happens to display. A free-text update, "shipment delayed due to weather in the midwest," carries the same underlying event as an SD/BE pair, but it requires natural language interpretation to extract, it is inconsistent across carriers in wording and detail, and it cannot be reliably matched, deduplicated, or aggregated across thousands of shipments a day without a model in the loop guessing at meaning every single time. A coded AT701/AT702 pair is deterministic. X3 means the same specific thing whether it comes from a national LTL carrier or a regional truckload carrier implementing the same X12 element 1650 code list, and a rules engine can match it exactly, every time, with zero interpretation risk.</p>

    <p>The practical difference shows up at scale. A lender or 3PL platform tracking a few dozen shipments a day could plausibly get away with a human reading free-text updates. A platform tracking tens of thousands of active shipments across hundreds of carriers cannot, because the volume makes manual reading impossible and free-text parsing with a language model introduces a nonzero error rate on every single event, compounding across every shipment in the portfolio. Structured EDI status codes are what make automated exception routing, SLA tracking, and collateral monitoring actually reliable at that scale: a system can define a fixed rule, "route to a human reviewer any shipment where the sequence includes AH followed by SD or A7 without a subsequent D1 or X1 within 48 hours," and that rule executes identically across every shipment, every carrier, every day, because the underlying codes are fixed by the X12 standard rather than reworded by whichever carrier happens to be reporting.</p>

    <p>There is a second, quieter reason structured parsing matters specifically for lending and trade finance use cases. A carrier's own tracking portal, and even the SMS or email notifications many consumer-facing platforms generate from that portal, is optimized to answer "where is my package," a single current-state question. It is not built to preserve the full sequence of prior events, which is exactly what a lender needs when reconciling a shipment against a borrowing base: not just where the goods are right now, but whether the delivery that the system logged three days ago actually completed cleanly or was quietly reversed by an exception nobody surfaced. The 214's AT7 loop is an append-only event log by design. A portal's current-status display is not, and reconstructing history from it after the fact is often not possible at all.</p>

    <h2>Worked example: a status sequence that signals a real delivery exception</h2>

    <p>Consider an inventory finance lender monitoring a truckload shipment of finished goods pledged as collateral under a borrowing-base facility. The lender's platform ingests every 214 transaction tied to the shipment's PRO number as it arrives. Here is the actual sequence of AT7 events the carrier transmits over four days, each with its status code, reason code, and event timestamp:</p>

    <table>
      <thead>
        <tr><th>Day</th><th>Time</th><th>AT701 (status)</th><th>AT702 (reason)</th><th>What it means</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>08:15</td><td>X3</td><td>NS</td><td>Carrier arrived at pickup location</td></tr>
        <tr><td>1</td><td>09:40</td><td>AF</td><td>NS</td><td>Carrier departed with shipment, pickup confirmed</td></tr>
        <tr><td>1</td><td>18:00</td><td>X6</td><td>NS</td><td>En route to delivery location, routine transit update</td></tr>
        <tr><td>2</td><td>14:20</td><td>X1</td><td>NS</td><td>Arrived at delivery location</td></tr>
        <tr><td>2</td><td>15:05</td><td>AH</td><td>B5</td><td>Attempted delivery, held per consignee, first exception signal</td></tr>
        <tr><td>2</td><td>15:10</td><td>SD</td><td>HB</td><td>Shipment delayed, held pending appointment</td></tr>
        <tr><td>3</td><td>10:30</td><td>X9</td><td>NA</td><td>Delivery appointment requested, carrier contacted consignee</td></tr>
        <tr><td>3</td><td>16:45</td><td>AH</td><td>BS</td><td>Second attempted delivery, refused by customer this time</td></tr>
        <tr><td>4</td><td>09:00</td><td>A7</td><td>BS</td><td>Formally refused by consignee</td></tr>
        <tr><td>4</td><td>13:15</td><td>A3</td><td>NS</td><td>Returned to shipper, final status</td></tr>
      </tbody>
    </table>

    <p>A system reading only the last-known status field, or one that treats "arrived at delivery location" as a stopping point because it superficially reads as complete, closes this shipment out as delivered at the day 2, 14:20 event and never looks again. Under that read, the lender's borrowing base treats the pledged inventory as sold and in the buyer's possession, and the collateral value tied to that shipment gets released from the active monitoring pool.</p>

    <p>The actual sequence tells a different story entirely. The X1 at 14:20 was never followed by a D1 or any other successful-delivery code. Instead it was followed by an AH with reason B5 (held per consignee), then an SD held pending appointment, then a second failed attempt this time refused outright (AH/BS), then a formal refusal (A7/BS), and finally A3, returned to shipper. The goods are physically back where they started. A correctly built parsing rule watches for exactly this pattern: any X1 or AV event not followed within a defined window by a D1, CB, or equivalent completed-delivery code, especially if it is instead followed by AH, SD, A7, or A3, gets flagged and routed to a human reviewer rather than auto-closed. That single rule, built on the AT701/AT702 pair rather than on any single code read in isolation, is the difference between a lender correctly holding the collateral flag on inventory that just came back to the shipper's dock and a lender who released a hold on inventory that no longer exists anywhere near the buyer.</p>

    <h2>Building the parsing rules that actually catch this</h2>

    <p>Getting this right does not require modeling the entire X12 element 1650 and 1651 code lists in full generality on day one. It requires a small number of deterministic rules applied consistently: define a fixed set of "delivery-complete" codes per carrier, since D1's meaning varies by implementation guide, rather than assuming one global definition; treat J1 as an interline handoff event, never as a final delivery signal, regardless of how its own description reads; watch for any exception-family code, AH, SD, A7, A3, CA, appearing after an X1 or AV event, since that sequence specifically indicates a delivery that started but did not complete cleanly; and preserve the full AT7 sequence per shipment rather than overwriting a "last known status" field with each new event, because the sequence itself, not any single snapshot, is what reveals an exception pattern. None of this requires guessing at carrier intent. It requires reading AT701 and AT702 together, in order, for every event a shipment generates, rather than treating the 214 as a single-value status flag.</p>

    <h2>Where this fits with the rest of the shipment paper trail</h2>

    <p>Shipment status data from EDI 214s rarely stands alone in a lending or logistics finance workflow. An advance ship notice, transmitted as an 856, tells a receiver what to expect before the shipment arrives, and the 214's status sequence is what confirms or contradicts that expectation as the shipment actually moves; the mismatch between the two is covered in more depth in the piece on <a href="/resources/blogs/advance-ship-notice-processing">advance ship notice processing</a>. Once a delivery genuinely completes, the physical proof, a signed receipt or electronic signature capture, becomes the document that should independently confirm what the 214's final status codes already indicated, a cross-check discussed in the post on <a href="/resources/blogs/proof-of-delivery-processing">proof of delivery processing</a>. And because the 214 is also what typically triggers freight invoice eligibility under a 210, an exception sequence that a pipeline misreads as a clean delivery does not just create a collateral monitoring gap, it can also trigger premature invoice approval, which is covered separately in the post on <a href="/resources/blogs/freight-invoice-automation">freight invoice automation</a>.</p>

    <p>The common failure across all of these is the same one: treating an EDI transaction as a single answer to a yes-or-no question when it is actually a structured, ordered record of everything that happened. A 214 with ten AT7 events is not noise to be collapsed into one status field, it is the entire audit trail of a shipment's life, and the exceptions that matter most to a lender or logistics operator are almost never the first event or the last one in isolation. They are the pattern in between.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Logistics",
  date: "September 12, 2026",
  datePublished: "2026-09-12T00:00:00.000Z",
  dateModified: "2026-09-12T00:00:00.000Z",
  last_updated: "September 12, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "shipment status edi processing",
  secondary_keywords: [
    "EDI 214 status codes",
    "transportation carrier shipment status message",
    "AT7 segment shipment status",
    "freight visibility EDI",
    "shipment delivery exception tracking",
    "EDI 214 delivery exception codes",
  ],
  tags: ["logistics", "EDI", "document AI", "shipment tracking", "OCR", "supply chain finance"],
  cluster: "logistics",
  faq: [
    {
      question: "What is an EDI 214 transaction used for?",
      answer:
        "An EDI 214, the Transportation Carrier Shipment Status Message, is how a motor carrier reports what is happening to a shipment as it moves, from pickup through transit to delivery. It follows the 204 load tender and precedes the 210 freight invoice, and a single shipment typically generates five to ten separate 214 transactions over its life.",
    },
    {
      question: "What is the AT7 segment in an EDI 214?",
      answer:
        "AT7 is the Shipment Status Details segment, and it carries the actual status code (AT701), a reason code (AT702), and the date and time of the event. It is the segment that holds the operational meaning of a 214; the surrounding segments mostly identify the shipment and where the event occurred.",
    },
    {
      question: "Does the code D1 always mean a shipment was delivered?",
      answer:
        "Not reliably. The X12 element 1650 definition of D1 is 'completed unloading at delivery location,' and some carriers use it in their own implementation guides as a plain synonym for delivered while others treat it strictly as the unload-complete milestone. A pipeline processing multiple carriers should check each carrier's specific guide rather than assume D1 means the same thing everywhere.",
    },
    {
      question: "Why does J1 not count as a completed delivery?",
      answer:
        "J1 means the shipment was delivered to a connecting line, an interline partner carrier, not to the consignee. Custody of the freight changed hands but the shipment is still moving. Treating J1 as proof of final delivery produces a false delivery confirmation on any shipment that changes carriers mid-route.",
    },
    {
      question: "Why do visibility platforms parse EDI status codes instead of using carrier tracking websites?",
      answer:
        "Structured AT701 and AT702 codes are deterministic and mean the same thing regardless of which carrier sent them, since they draw from a shared X12 code list. Free-text tracking updates vary in wording across carriers and require interpretation to extract meaning, which does not scale reliably across thousands of shipments a day the way a fixed rule matched against a known code does.",
    },
    {
      question: "How can a system detect a delivery exception from a 214 sequence rather than a single status update?",
      answer:
        "By watching the full ordered sequence of AT7 events rather than just the most recent one, specifically flagging any case where an arrival code like X1 or AV is followed by an exception-family code such as AH, SD, A7, or A3 instead of a completed-delivery code, since that pattern indicates a delivery that started but did not close cleanly.",
    },
  ],
}
