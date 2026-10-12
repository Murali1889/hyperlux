import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd03: BlogPost = {
  id: "sd-03",
  title: "Advance Ship Notice Processing: Inside the EDI 856 Tree",
  slug: "advance-ship-notice-processing",
  excerpt:
    "A $50,000 PO ships correctly and still costs $2,000 in chargebacks, because the ASN's hierarchy, not the freight, was wrong.",
  description:
    "Advance ship notice processing explained through the real EDI 856 HL hierarchy, why a broken level slows receiving, and the retailer chargeback math behind it.",
  metaTag: "ASN Meaning: Advance Ship Notice Processing and EDI 856",
  summary:
    "An advance ship notice (ASN) is the EDI 856 message a supplier sends before goods arrive, describing the shipment, orders, packs and items as a tree of HL loops. Retailers measure ASN accuracy and charge back for mismatches, so the tree must match exactly what was shipped.",
  content: `
    <p>A vendor ships a $50,000 purchase order to an Amazon fulfillment center. The correct products, correct quantities, correct cartons, all physically present and undamaged. The electronic document that described that shipment ahead of its arrival, the EDI 856 advance ship notice, had an accuracy compliance rate sitting somewhere between 70 and 95 percent over the trailing measurement period. That single fact triggers a chargeback of roughly $2,000 on that one PO, before any other deduction is even considered. Nothing about the freight was wrong. Something about the data structure describing the freight was.</p>

    <p>That gap, between a physically correct shipment and a financially penalized one, is where most advance ship notice processing content stops short. Plenty of guides explain that an ASN is "sent before the shipment arrives" and that errors "can result in chargebacks." Far fewer walk through what actually sits inside an EDI 856 transaction set, the nested hierarchical loop structure that connects a shipment to its purchase orders, its cartons, and its individual line items, or why a defect at one specific level of that hierarchy is what breaks a distribution center's receiving process and, downstream, what generates the chargeback in the first place. This is a deeper look at both halves of that chain: the real structure of an 856, and the real, sourced penalty math that major retailers attach to getting it wrong. For the broader document set this sits inside, see our <a href="/documents/shipping-docs">shipping document processing overview</a>.</p>

    <h2>What an ASN actually is, mechanically</h2>

    <p>An advance ship notice is the EDI 856 transaction set, part of the ANSI ASC X12 standard, transmitted by a shipper to a receiving trading partner after goods leave the shipping dock but before they arrive at the destination. It is not a packing list and it is not an invoice. A packing list is a physical document that may or may not travel with the freight. An invoice, the EDI 810, requests payment and typically follows the shipment. The 856 exists purely to give the receiving party structured, machine-readable advance visibility: what shipped, against which purchase order, packed how, and arriving when, so the receiving facility can plan dock labor, pre-stage putaway, and reconcile what physically arrives against what was promised electronically.</p>

    <p>The 856 is built around a nested tree, not a flat list of fields, and that tree is the part most explanations gloss over.</p>

    <h2>The real hierarchical structure: HL loops, not a flat record</h2>

    <p>Every EDI 856 is built from repeating HL, hierarchical level, segments. Each HL segment establishes one node in a parent-child tree, and everything that follows an HL segment, up until the next HL segment appears, belongs to that node's level. Four data elements do the actual structural work:</p>

    <ul>
      <li><strong>HL01</strong>, the hierarchical ID number: a simple sequential counter, unique within the transaction (1, 2, 3, and so on).</li>
      <li><strong>HL02</strong>, the hierarchical parent ID number: points back to the HL01 value of this node's parent. Blank at the shipment root, since the shipment level has no parent.</li>
      <li><strong>HL03</strong>, the hierarchical level code: the letter that says what kind of node this is. S for shipment, O for order, P for pack (carton or pallet), I for item. Some implementation guides also use T for a tare or outer pallet level sitting between pack and item.</li>
      <li><strong>HL04</strong>, the hierarchical child code: a flag, 1 if this node has children beneath it, 0 if it is a leaf with nothing nested inside.</li>
    </ul>

    <p>A second field, buried in the BSN beginning segment near the top of the transaction, determines which levels actually appear. BSN05 is the hierarchical structure code, and it is arguably the single most consequential field in the entire document because it tells the receiving system's parser what tree shape to expect before it reads a single HL segment. Common values include 0001 for a full shipment, order, pack, item structure, 0002 for a shorter shipment, pack, item structure with no explicit order level, and 0007 for shipment, order, item with no intermediate pack level at all. A trading partner's implementation guide specifies exactly which code it requires, and a vendor generating the wrong structure code, or omitting a level the partner's guide mandates, produces a transaction that may pass basic EDI syntax validation while still failing the receiving system's business logic entirely.</p>

    <p>Here is what a minimal, full four-level 856 looks like in raw segment form, illustrating the nesting rather than a production-ready message:</p>

    <table>
      <thead>
        <tr><th>Segment</th><th>What it does</th></tr>
      </thead>
      <tbody>
        <tr><td>ST*856*0001~</td><td>Opens the transaction set</td></tr>
        <tr><td>BSN*00*SHIP8842*20260901*1200*0001~</td><td>Shipment ID, ship date and time, hierarchical structure code 0001 (S/O/P/I)</td></tr>
        <tr><td>HL*1**S~</td><td>Node 1, no parent, level code S (shipment root)</td></tr>
        <tr><td>HL*2*1*O~</td><td>Node 2, parent is node 1, level code O (order, child of shipment)</td></tr>
        <tr><td>PRF*PO55214~</td><td>Purchase order reference, applies to this order-level node</td></tr>
        <tr><td>HL*3*2*P~</td><td>Node 3, parent is node 2, level code P (pack, child of this order)</td></tr>
        <tr><td>MAN*GM*100614141512345678~</td><td>SSCC-18 carton barcode, applies to this pack-level node</td></tr>
        <tr><td>HL*4*3*I~</td><td>Node 4, parent is node 3, level code I (item, child of this carton)</td></tr>
        <tr><td>LIN**UP*049000028911~</td><td>Item identifier (UPC), applies to this item-level node</td></tr>
        <tr><td>SN1**24*EA~</td><td>Quantity shipped at this item node: 24 each</td></tr>
        <tr><td>CTT*4~</td><td>Transaction total: 4 HL loops</td></tr>
        <tr><td>SE*11*0001~</td><td>Closes the transaction set</td></tr>
      </tbody>
    </table>

    <p>Read that tree from the bottom up and the receiving logic becomes obvious: node 4 (24 units of UPC 049000028911) belongs to node 3 (a specific carton, identified by its SSCC-18 barcode), which belongs to node 2 (purchase order PO55214), which belongs to node 1 (this shipment). A scanner at the dock that reads the physical SSCC-18 barcode on the carton is really asking one question of this tree: which HL node has an MAN segment matching this exact 18-digit code, and what items and quantities are declared as children of that node. If the HL02 parent pointer on the item-level node is wrong, or a pack-level HL is skipped entirely when the partner's BSN05 code requires one, that lookup fails or returns the wrong answer, and it fails at the exact moment a physical carton is sitting on a receiving dock waiting to be scanned in.</p>

    <h2>Why hierarchy accuracy is a receiving efficiency problem, not a paperwork one</h2>

    <p>The mechanism connecting ASN structure to receiving speed is direct. A modern DC that supports scan-based receiving does not manually count and key in every carton. It scans the SSCC-18 barcode on the physical carton, looks up that code against the MAN segment inside the pack-level HL node of the ASN already on file, and if it finds a match, auto-receives the declared contents without a human touching a keyboard. That workflow only functions if the tree the ASN describes matches the tree the receiving system expects, both in shape (the right levels, in the right order, matching the BSN05 code) and in content (the right SSCC on the right carton node, the right item quantities nested underneath it).</p>

    <p>When that lookup fails, whether because a pack-level loop is missing, an HL02 pointer references the wrong parent, or the SN102 quantity at the item level does not match what a dock worker actually counts, the carton drops out of automated receiving and into a manual exception queue. Someone has to physically open it, count contents, and key the discrepancy into the system by hand, the exact labor cost the ASN existed to eliminate. Multiply that across a shipment with dozens of pack-level nodes and the aggregate effect on dock throughput, not just on any single chargeback, is the real operational cost of a structurally broken 856.</p>

    <h2>The chargeback penalty structures, with real sourced numbers</h2>

    <p>Every major retailer that requires EDI 856 transmission backs that requirement with a documented financial penalty for non-compliance, and the specifics differ meaningfully by retailer.</p>

    <p><strong>Walmart</strong> enforces ASN compliance through its Supplier Quality Excellence Program, or SQEP. Penalties apply at the purchase order header level and accumulate across any PO where the requirement is not met, under named defect types including "ASN Not Downloaded" (no valid ASN submitted, most commonly a timing failure where the ASN arrives after the trailer has already gated in at the DC), "ASN Late," and "ASN Inaccurate" (item numbers or quantities that do not match what was physically received). Reported penalty ranges for these defects fall roughly between $100 and $500 per purchase order or shipment, and disputes require documentation including a copy of the transmitted ASN, the BSN02 shipment identification field, and the EDI 997 functional acknowledgment proving Walmart's system actually received it in time.</p>

    <p><strong>Target</strong> runs a Compliance Policy, in effect since fiscal year 2022, that explicitly tracks EDI 856 ASN Availability and EDI 856 ASN Accuracy as named supplier performance metrics alongside fill rate and on-time delivery. As of a May 2025 update, ASN violations are assessed at $0.75 per carton, with a $100 minimum per incident, layered on top of separate per-incident penalties in the roughly $75 to $500 range reported for broader ASN accuracy failures depending on severity. Target's own vendor guidance is explicit that the ASN must match the physical shipment exactly, and lists Department, Class, and Item (DPCI) codes at the item level as a specific accuracy requirement distinct from Walmart's UPC-based item identification.</p>

    <p><strong>Amazon Vendor Central</strong> takes a different, tiered approach rather than a flat per-incident fee. ASN accuracy is scored as a rolling compliance rate, the percentage of shipments with accurate, timely ASNs over the measurement period, and the chargeback rate itself scales against that rate rather than staying fixed. For unit count mismatches specifically, on consumable goods, the published tiers are 2 percent of product cost when the vendor's compliance rate sits above 95 percent, rising to 4 percent between 70 and 95 percent, and 6 percent below 70 percent. Non-consumable goods carry a comparable but lower tier structure of 1, 3, and 5 percent respectively across the same three compliance bands. Separately, missing or incorrect single shipment identifiers and on-time shipment failures are assessed flat at 3 percent of cost of goods sold against a 95 percent compliance threshold that, as of a January 2026 update, rose from a previous 90 percent bar.</p>

    <table>
      <thead>
        <tr><th>Retailer</th><th>Program</th><th>Structure</th><th>Representative figure</th></tr>
      </thead>
      <tbody>
        <tr><td>Walmart</td><td>SQEP</td><td>Flat fee per PO, by named defect type</td><td>Roughly $100 to $500 per PO for ASN Not Downloaded, Late, or Inaccurate defects</td></tr>
        <tr><td>Target</td><td>Compliance Policy</td><td>Per-carton fee with a floor, plus broader per-incident tiers</td><td>$0.75 per carton, $100 minimum, effective May 2025; $75 to $500 per incident for accuracy failures generally</td></tr>
        <tr><td>Amazon Vendor Central</td><td>ASN Accuracy scorecard</td><td>Tiered percentage of product cost, scaled by rolling compliance rate</td><td>2%/4%/6% of cost (consumables) at above 95%, 70 to 95%, and below 70% compliance</td></tr>
      </tbody>
    </table>

    <p>The tiered structure is worth sitting with, because it means the same underlying defect costs a different amount depending entirely on how consistently it recurs. A single missed or inaccurate ASN, viewed in isolation, might look like an isolated $2,000 hit on one $50,000 PO. The same defect repeated enough times to pull a vendor's rolling compliance rate below 70 percent turns every subsequent shipment, including ones with a perfectly structured ASN, into a 6 percent chargeback exposure until the rolling average recovers. A vendor shipping $500,000 in monthly PO value who slips into that 70 to 95 percent band faces roughly $20,000 in monthly ASN accuracy chargebacks on the consumables tier, before any other deduction category is added on top. That is the actual mechanism by which a document structure defect, something that never touches the physical product at all, becomes a material line item against margin.</p>

    <h2>The specific structural defects that trigger these penalties</h2>

    <p>Four categories of defect account for most real-world ASN chargebacks, and each one maps to a specific place in the HL tree described above rather than being a vague "data quality" issue.</p>

    <p>A missing or wrong hierarchical level happens when the transmitted BSN05 structure code does not match what the trading partner's implementation guide requires, or when a required pack-level loop is omitted for shipments the guide says must carry carton-level detail. A broken parent pointer happens when an HL02 value on a child node references an HL01 that does not exist, or references the wrong parent entirely, breaking the tree traversal a receiving system runs when it tries to answer "what belongs inside this carton." A quantity mismatch happens when the SN102 value at an item-level node does not equal what is actually packed inside the physical carton it is nested under, the single most common cause of "ASN Inaccurate" defects at both Walmart and Target. And a label mismatch happens when the SSCC-18 value inside the pack-level MAN segment does not identically match the barcode printed on the physical carton label, which causes the DC scanner's lookup to return "SSCC not found" and drop that carton into manual receiving regardless of how correct every other field in the ASN happens to be.</p>

    <h2>Where non-EDI documents complicate ASN accuracy</h2>

    <p>Large, EDI-mature suppliers generate their 856 directly from a warehouse management system, populated by what physically scanned onto the outbound truck, which is why Walmart's own implementation guidance stresses building the ASN from actual shipped data rather than from what was merely picked or planned. Smaller and mid-market suppliers, and the growing population of businesses selling into Amazon Vendor Central without a full WMS integration, frequently do not have that direct system-to-system pipeline. The shipment data that eventually becomes HL nodes and SN1 quantities often starts life as a commercial invoice, a 3PL-generated packing slip, or a scanned pallet manifest emailed over as a PDF or image, and someone has to correctly extract carton counts, item quantities, and SSCC assignments from that document before it can be mapped into a valid 856 tree at all. Every one of the structural defects described above, a missing pack level, a mismatched quantity, a wrong SSCC, can originate here just as easily as inside a WMS integration, and it is a step most ASN compliance content skips entirely by assuming the data is already structured and EDI-native by the time anyone is thinking about the 856. Document intelligence tooling that can reliably pull carton counts and item quantities out of a packing slip or manifest, feeding directly into ASN generation rather than a manual re-keying step, closes exactly that gap, and pairs naturally with the reconciliation work covered in our <a href="/resources/blogs/packing-list-reconciliation">packing list reconciliation guide</a>.</p>

    <h2>What does an EDI 856 sample look like?</h2>
    <p>An 856 EDI document is the X12 Ship Notice/Manifest transaction set. The EDI 856 format is a header (BSN) followed by nested HL loops, one per shipment, order, pack and item. Here is a trimmed, illustrative sample of one carton with one item, using BSN05 code 0001 (shipment, order, pack, item):</p>
    <pre><code>ST*856*0001~
BSN*00*SHP12345*20260928*1430*0001~
HL*1**S~
HL*2*1*O~
PRF*PO4501~
HL*3*2*P~
MAN*GM*00012345678901234567~
HL*4*3*I~
LIN**UP*012345678905~
SN1**24*EA~
CTT*4~
SE*12*0001~</code></pre>
    <p>Read it top down: HL 1 is the shipment, HL 2 the order (PO 4501) inside it, HL 3 a carton identified by its 18-digit SSCC label in the MAN segment, and HL 4 the item (UPC 012345678905, 24 each) inside that carton. Real files add carrier, dates, addresses and weights, and each retailer's own specification decides which segments are required.</p>

    <h2>Building an ASN process that actually holds up</h2>

    <p>The practical takeaway from both halves of this, the tree structure and the penalty math, is that ASN accuracy work has to happen before transmission, not after a chargeback arrives. That means validating the HL hierarchy against the specific trading partner's BSN05 requirement and implementation guide rather than a generic template, confirming every SN1 quantity at the item level equals what physically shipped rather than what was merely planned, matching every MAN segment's SSCC-18 value against the barcode actually printed on the carton label, and monitoring the EDI 997 and 824 acknowledgments to confirm the transaction was not just sent but accepted before the freight gates in. Given how connected this is to the physical arrival event itself, it is worth reading alongside our <a href="/resources/blogs/warehouse-receipt-processing">warehouse receipt processing guide</a> and our <a href="/resources/blogs/bill-of-lading-processing">bill of lading processing guide</a>, since all three documents describe overlapping pieces of the same shipment and are frequently reconciled against each other during a receiving dispute.</p>

    <p>None of this is really about EDI syntax for its own sake. A well-formed 856 is what lets a distribution center trust its own automated receiving process enough to skip a manual count, and a broken one is what forces that count back onto a person standing at a dock with a clipboard, at exactly the moment the vendor was trying to prove the shipment could be trusted without one. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-shipping-and-logistics-documents">OCR for shipping and logistics documents</a>.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Logistics",
  date: "September 1, 2026",
  datePublished: "2026-09-01T00:00:00.000Z",
  dateModified: "2026-10-12T00:00:00.000Z",
  last_updated: "October 12, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "advance ship notice processing",
  secondary_keywords: [
    "edi 856 sample",
    "edi 856 format",
    "856 edi document type",
    "what is an edi 856",
    "856 edi api",
    "amazon edi 856 specification",
    "EDI 856 hierarchical structure",
    "ASN accuracy chargebacks",
    "advance ship notice EDI",
    "warehouse receiving efficiency ASN",
    "Walmart SQEP ASN compliance",
    "Amazon ASN accuracy chargeback",
  ],
  tags: ["logistics", "EDI", "advance ship notice", "warehouse receiving", "retail compliance", "chargebacks"],
  cluster: "logistics",
  faq: [
    {
      question: "What is an advance ship notice (EDI 856)?",
      answer:
        "The EDI 856 is an ANSI X12 transaction set sent by a shipper to a receiving trading partner after goods leave the dock but before they arrive, describing the shipment's contents, purchase order references, packaging, and carton identifiers as a structured, machine-readable document rather than a physical packing list or invoice.",
    },
    {
      question: "What are HL segments in an EDI 856, and what do HL01 through HL04 mean?",
      answer:
        "HL segments build the ASN's nested hierarchy. HL01 is a sequential node ID, HL02 points to that node's parent HL01, HL03 is the level code (S for shipment, O for order, P for pack, I for item), and HL04 flags whether the node has children. Together they define the shipment to order to pack to item tree.",
    },
    {
      question: "What does the BSN05 hierarchical structure code control?",
      answer:
        "BSN05 tells the receiving system which levels to expect in the HL tree before it parses a single HL segment. Common codes include 0001 for shipment, order, pack, item, 0002 for shipment, pack, item, and 0007 for shipment, order, item. It must match the trading partner's implementation guide exactly.",
    },
    {
      question: "Why does an ASN structure error slow down warehouse receiving?",
      answer:
        "Scan-based receiving looks up a scanned carton's SSCC-18 barcode against the MAN segment inside the matching pack-level HL node. A missing pack level, a wrong HL02 parent pointer, or a mismatched SSCC breaks that lookup, dropping the carton out of automated receiving and into a manual exception queue.",
    },
    {
      question: "What penalties do Walmart, Target, and Amazon charge for ASN non-compliance?",
      answer:
        "Walmart's SQEP program charges roughly $100 to $500 per PO for ASN defects. Target charges $0.75 per carton with a $100 minimum, effective May 2025, plus broader per-incident penalties. Amazon uses a tiered percentage of product cost, 2%, 4%, or 6% for consumables depending on the vendor's rolling ASN accuracy compliance rate.",
    },
    {
      question: "Can an ASN be structurally valid EDI but still trigger a chargeback?",
      answer:
        "Yes. A transaction can pass basic EDI syntax validation while still using the wrong hierarchical structure code, omitting a required level, or containing quantities and SSCC values that do not match the physical shipment, all of which trigger accuracy-based chargebacks regardless of syntactic validity.",
    },
    {
      question: "How does an 856 EDI API integration work?",
      answer:
        "An 856 EDI API integration usually works like this: your system sends shipment data as JSON to an EDI provider or integration platform through a REST API; the provider builds the HL hierarchy, validates it against each trading partner's specification, such as the Amazon EDI 856 specification, and transmits the X12 file over AS2 or a VAN.",
    },
  ],
}
