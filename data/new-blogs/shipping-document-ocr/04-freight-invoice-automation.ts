import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd04: BlogPost = {
  id: "sd-04",
  title: "Freight Invoice Automation and the Real EDI 210 Gap",
  slug: "freight-invoice-automation",
  excerpt:
    "A freight invoice runs on EDI 210, not 810, with accessorial charges and class based rating a commercial invoice never carries.",
  description:
    "How EDI 210 differs structurally from a commercial invoice, why accessorial billing errors are so common, and a worked example billed against the BOL terms.",
  metaTag: "Freight Invoice Automation: The EDI 210 Difference",
  content: `
    <p>A freight factoring company can advance cash against a carrier's invoice within a day of pickup, sometimes before the shipper has even seen the bill. In one routine less than truckload shipment, the carrier's invoice carried a $95 liftgate charge and a $65 limited access delivery charge. Neither one appeared anywhere on the bill of lading, which specified a standard dock to dock delivery with no special equipment and no access restrictions at either end. The factoring company advanced against the full invoice amount anyway. Nobody caught the $160 difference until an audit weeks later, because nothing in the funding process actually cross checked the freight invoice's line items against the bill of lading terms at the moment the money moved.</p>

    <p>That gap, an invoice that says one thing while the source document it should be built from says another, is the real problem freight invoice automation needs to solve. It is not primarily an OCR problem of reading text off a scanned PDF faster. Most vendors selling <a href="/documents/shipping-docs">shipping document processing</a> treat a freight invoice as a slightly messier version of a commercial invoice, something you throw a generic invoice model at and extract line items, totals, and a vendor name. That framing misses the part that actually causes financial exposure: a freight invoice is built on an entirely different data structure than a commercial invoice, priced by an entirely different logic, and validated against a document the invoice itself never contains.</p>

    <h2>A freight invoice and a commercial invoice are not the same document</h2>

    <p>A standard commercial invoice, the kind that moves through accounts payable for goods or services, states what was sold, the agreed unit price, quantity, and total due. It is a bilateral record between a buyer and a seller, and everything on it traces back to a purchase order or a contract. The EDI transaction set behind it, X12 810, reflects that simplicity.</p>

    <p>A freight invoice is structurally different because it is not pricing a product, it is pricing a service performed under conditions that were not fully known when the shipment was booked. According to the X12 standards body, transaction set 210, Motor Carrier Freight Details and Invoice, exists to "provide detail information for charges for services rendered by a motor carrier," and is used "both as a motor carrier invoice to request payment or as details pertaining to motor freight shipment charges." That framing matters: the 210 is a detailed accounting of shipment specific charges, built to carry rating detail, weight information, and accessorial line items that a standard invoice format has no fields for at all.</p>

    <table>
      <thead>
        <tr><th>Attribute</th><th>Commercial invoice (EDI 810)</th><th>Freight invoice (EDI 210)</th></tr>
      </thead>
      <tbody>
        <tr><td>What it prices</td><td>Goods or services against a purchase order</td><td>Transportation service against a bill of lading and a rate agreement</td></tr>
        <tr><td>Base pricing logic</td><td>Fixed unit price times quantity</td><td>Weight and freight class times a rate per hundredweight (cwt), or a contracted flat rate</td></tr>
        <tr><td>Variable charges</td><td>Rare, usually just tax or shipping as a single line</td><td>Accessorial charges added per shipment based on conditions at pickup or delivery</td></tr>
        <tr><td>Surcharges</td><td>Not typically present</td><td>Fuel surcharge tied to a public diesel price index, recalculated on a rolling basis</td></tr>
        <tr><td>Source document it must match</td><td>Purchase order</td><td>Bill of lading, rate confirmation, and often a delivery receipt</td></tr>
        <tr><td>Who can dispute a line item</td><td>Buyer, against agreed price</td><td>Shipper or factoring company, against BOL terms and carrier tariff rules</td></tr>
      </tbody>
    </table>

    <h2>What the accessorial line items actually are</h2>

    <p>An accessorial charge is a fee for a service outside the base transportation move: the truck showed up, but something about the pickup or delivery required extra labor, equipment, or time. Liftgate service, when there is no dock to load or unload a pallet mechanically. Detention or layover, when the driver waits beyond a free time allowance at a shipper or consignee's facility. Residential delivery, when the destination is a home rather than a commercial address. Limited access delivery, for locations like schools, military bases, or construction sites that require extra time or clearance to reach. Redelivery, when a first delivery attempt fails through no fault of the carrier. Inside delivery, when freight has to move past the dock into a building. Reweigh and reclassification, when the carrier's scale or inspection produces a different weight or freight class than what the shipper declared on the bill of lading.</p>

    <p>Every one of these is a legitimate charge when the underlying condition actually existed. The problem is that none of them are verifiable from the invoice alone. A liftgate charge on an invoice is just a line item and a dollar amount; whether a liftgate was actually needed is a fact that lives on the bill of lading, the delivery receipt, or the driver's notes, not on the invoice itself. Auditing a freight invoice properly means holding it up against a different document for every disputable line, which a commercial invoice essentially never requires.</p>

    <h2>Fuel surcharges add a moving target on top of a fixed base</h2>

    <p>Fuel surcharges compound the difficulty because they are not a flat percentage negotiated once. Carriers commonly tie the surcharge to a public diesel price benchmark, recalculating it on a weekly or periodic basis so that it tracks fuel cost rather than staying fixed while diesel prices move. That means the correct fuel surcharge on any given invoice depends on which index value applied on the ship date, and a manual reviewer checking whether a fuel surcharge line is correct has to know not just the contracted formula but which week's index number to apply it against. Get the date wrong by even a few days during a period of price movement and the surcharge that looks correct at a glance is actually off, in either direction.</p>

    <h2>Weight and freight class based rating: the part almost nobody outside logistics understands</h2>

    <p>The base freight charge itself, before any accessorial or surcharge is added, is not a simple lookup. For less than truckload shipments in the United States, base rating commonly runs on the National Motor Freight Classification system, maintained by the National Motor Freight Traffic Association. The NMFC assigns every commodity a freight class from 50 to 500, and that classification is determined by four characteristics of the freight itself: density, how heavy it is relative to the space it occupies; stowability, how effectively it can be packed into a trailer alongside other freight; handling, how easily it moves across a dock and in or out of a trailer; and liability, how likely it is to cause damage to other freight or be damaged itself.</p>

    <table>
      <thead>
        <tr><th>NMFC factor</th><th>What it measures</th><th>Effect on class and rate</th></tr>
      </thead>
      <tbody>
        <tr><td>Density</td><td>Weight relative to volume occupied</td><td>Denser freight generally receives a lower class number and a lower rate</td></tr>
        <tr><td>Stowability</td><td>How well it packs alongside other freight in a trailer</td><td>Awkward shapes or freight requiring separation raise the class</td></tr>
        <tr><td>Handling</td><td>Ease of moving across a dock or into and out of a trailer</td><td>Freight needing special handling raises the class</td></tr>
        <tr><td>Liability</td><td>Risk of damage caused or sustained, including value and fragility</td><td>Higher risk freight raises the class</td></tr>
      </tbody>
    </table>

    <p>Lower classes mean lower rates, higher classes mean higher rates, across the same weight. A shipper declares a class on the bill of lading when the shipment is booked, based on their own knowledge of the commodity. A carrier, at its own terminal, can and often does reweigh and reinspect the shipment, and if the actual weight or characteristics do not match the declared class, the carrier reclassifies and rerates the shipment, which changes the total charge on the invoice from what the shipper expected when they booked it. That reclassification is sometimes correct and sometimes a revenue driven overcorrection, and distinguishing the two requires knowing the actual freight, not just reading two numbers off a page.</p>

    <h2>Why freight bill errors are so common, and so hard to catch by hand</h2>

    <p>A single freight invoice can carry a base charge plus several accessorial lines plus a fuel surcharge, each one independently sourced from a different document or a different pricing mechanism, and each one changeable based on conditions the invoice itself does not describe. Verifying one line requires the bill of lading. Verifying another requires the rate confirmation or the carrier's published tariff. Verifying a reweigh requires knowing what the shipper actually declared versus what the carrier's scale recorded. A reviewer working through this by hand has to pull three or four separate documents per invoice and manually cross reference line by line, and a company processing a meaningful volume of LTL or truckload freight simply cannot do that exhaustively for every invoice without an unmanageable headcount, so most freight bill review in practice samples a subset of invoices rather than checking every line on every bill.</p>

    <p>That sampling gap is exactly where errors, both accidental and deliberate, survive. An accessorial charge added for a service that never happened is easy to bill and easy to miss, because catching it requires a specific comparison, invoice line against BOL term, that most workflows never perform systematically. A fuel surcharge calculated against the wrong week's index produces a small, plausible looking discrepancy that a human reviewer skimming a total is unlikely to flag without recalculating it themselves. A reclassification at the carrier's dock changes the total in a way that looks entirely legitimate on the invoice and only reveals itself as questionable when set next to the shipper's original declared class on the BOL. None of these are dramatic, obviously wrong numbers. They are small, plausible looking line items that individually pass a glance test and collectively cost real money at volume.</p>

    <h2>The worked example: a liftgate and a limited access charge that the BOL never authorized</h2>

    <p>Return to the shipment from the opening. The bill of lading specified a shipment of 2,400 pounds, freight class 100, moving dock to dock between two commercial addresses, no special equipment requested, no limited access notation, no residential delivery box checked. The contracted base rate was $28.50 per hundredweight.</p>

    <table>
      <thead>
        <tr><th>Line item</th><th>BOL terms say</th><th>Invoice billed</th><th>Correct amount</th></tr>
      </thead>
      <tbody>
        <tr><td>Base freight charge</td><td>2,400 lbs at class 100</td><td>Reweighed to 2,600 lbs at pickup terminal</td><td>26 cwt x $28.50 = $741.00 (legitimate reweigh adjustment)</td></tr>
        <tr><td>Liftgate charge</td><td>Not requested, dock to dock delivery</td><td>$95.00 billed</td><td>$0.00, should not have been charged</td></tr>
        <tr><td>Limited access charge</td><td>Standard commercial address, no access restriction</td><td>$65.00 billed</td><td>$0.00, should not have been charged</td></tr>
        <tr><td>Total</td><td></td><td>$901.00</td><td>$741.00</td></tr>
      </tbody>
    </table>

    <p>The reweigh itself was legitimate. Carriers are entitled to reweigh at their own terminal and rerate against the actual weight, and a jump from 2,400 to 2,600 pounds is well within normal shipping tolerance, so the base charge correctly moves from $684.00 to $741.00. The two accessorial charges are the actual error: nothing on the bill of lading indicates a liftgate was needed, and nothing indicates the delivery address had any access restriction. The correct invoice total was $741.00. The billed total was $901.00, a $160.00 overcharge sitting inside two line items that each look, in isolation, like a completely ordinary accessorial fee. Neither line item is unusual on its own. A liftgate charge and a limited access charge both show up on legitimate freight invoices constantly. What makes these two wrong is not the dollar amount, it is that the bill of lading, the one document that should authorize them, does not.</p>

    <p>This is the specific failure mode that generic invoice automation misses. A model trained to extract vendor, line items, and total from an invoice will read this bill perfectly, every field, every number, correctly captured. It will still be wrong, in the sense that matters for anyone paying or funding against it, because accuracy on the invoice's own fields says nothing about whether those fields are true against the shipment that actually happened. Catching this specific error requires comparing the invoice against the bill of lading automatically, matching delivery address type against the limited access flag, matching requested services against the liftgate line, matching declared weight and class against the rerated figures, on every invoice, not a sampled subset.</p>

    <h2>Why this matters more for lenders and factoring companies than for shippers</h2>

    <p>A shipper who gets overbilled $160 on one freight invoice has an accounting problem and a dispute to file with the carrier. A freight factoring company or asset based lender that advances cash against the face value of that same invoice has a different, sharper problem: the money already moved before anyone checked whether the invoice matched the underlying shipment. Factoring runs on speed, that is the entire value proposition to a trucking company, cash same day or next day instead of net 30 or net 60 from the shipper. Speed and manual document cross referencing do not coexist well, which is exactly why this category of error is more dangerous in a factoring context than in a standard accounts payable one. An automated check that pulls the BOL terms, the rate confirmation, and the invoice line items into one comparison before funding releases does not need to slow the funding decision down meaningfully, but it does need to actually exist as a systematic step rather than an occasional manual sample, which is the gap most freight invoice workflows still have.</p>

    <p>The same logic applies to freight bill audit generally, whether the reviewer is a shipper's logistics team or a lender's underwriting process. Related workflows worth understanding alongside this one include <a href="/resources/blogs/bill-of-lading-processing">bill of lading processing</a>, since the BOL is the source document every freight invoice line item ultimately has to reconcile against, and <a href="/resources/blogs/freight-bill-audit-automation">freight bill audit automation</a>, which covers the broader systematic review process this post's worked example is one instance of. Detention and layover charges specifically, one of the more disputed accessorial categories, get their own deeper treatment in our piece on <a href="/resources/blogs/demurrage-detention-documentation">demurrage and detention documentation</a>.</p>

    <h2>What accurate freight invoice automation actually requires</h2>

    <p>Reading the invoice correctly is table stakes and the easy 80 percent of the problem. The harder, more valuable 20 percent is structural: recognizing that a freight invoice's line items are claims that need a second document to verify, not self contained facts. That means extracting the invoice's own fields alongside the corresponding fields from the bill of lading, matching them against each other systematically (declared weight against invoiced weight, declared class against invoiced class, requested accessorial services against billed accessorial charges, delivery address type against any access or residential surcharge), and flagging every mismatch for review rather than assuming every invoice was billed correctly and sampling a subset to check.</p>

    <p>It also means treating a reweigh adjustment differently from an unauthorized accessorial charge, since conflating the two either rejects legitimate weight based rerating as an error or, worse, lets an unauthorized accessorial charge through by treating all discrepancies the same way. The freight invoice and the bill of lading are, functionally, one workflow that happens to arrive as two separate documents from two separate parties. Automation that treats them as two unrelated extraction jobs will read every field accurately and still miss the exact category of error that costs the most money. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-shipping-and-logistics-documents">OCR for shipping and logistics documents</a>.</p>
  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Logistics",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
  last_updated: "September 28, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "freight invoice automation",
  secondary_keywords: [
    "edi 210 motor carrier freight invoice",
    "EDI 210 freight invoice processing",
    "accessorial charge validation",
    "BOL invoice reconciliation",
    "freight factoring invoice verification",
    "NMFC freight classification",
    "fuel surcharge invoice automation",
  ],
  tags: ["logistics", "freight invoice", "EDI 210", "freight audit", "accessorial charges", "freight factoring"],
  cluster: "logistics",
  faq: [
    {
      question: "What is EDI 210 and how is it different from a standard invoice?",
      answer:
        "EDI 210 is the X12 Motor Carrier Freight Details and Invoice transaction set, used by carriers to bill for freight services, which is why people often call it the EDI 210 motor carrier freight invoice. Unlike EDI 810, the standard commercial invoice format, it is built to carry shipment specific rating detail, weight information, and accessorial charge line items that a commercial invoice format has no fields for.",
    },
    {
      question: "What are accessorial charges on a freight invoice?",
      answer:
        "Accessorial charges are fees for services outside the base transportation move, such as liftgate service, detention, residential delivery, limited access delivery, redelivery, inside delivery, and reweigh or reclassification. Each one is only verifiable by checking it against the bill of lading or delivery receipt, not the invoice alone.",
    },
    {
      question: "How does NMFC freight classification affect freight invoice rating?",
      answer:
        "The National Motor Freight Classification system assigns freight a class from 50 to 500 based on density, stowability, handling, and liability. The base freight charge is calculated as weight times a rate tied to that class, so a reclassification at the carrier's terminal changes the total charge even when nothing else about the shipment changed.",
    },
    {
      question: "Why are freight bill errors difficult to catch manually?",
      answer:
        "Each line item on a freight invoice, base charge, accessorial charges, and fuel surcharge, is sourced from a different document or pricing mechanism. Verifying one line requires the bill of lading, another requires the rate confirmation, and a reviewer has to cross reference several documents per invoice, which most teams cannot do exhaustively at volume.",
    },
    {
      question: "How are fuel surcharges calculated on freight invoices?",
      answer:
        "Carriers commonly tie fuel surcharges to a public diesel price index, recalculating the surcharge on a rolling basis so it tracks fuel cost rather than staying fixed. Verifying a fuel surcharge line requires knowing which index value applied on the actual ship date.",
    },
    {
      question: "Why does freight invoice accuracy matter for freight factoring and lenders?",
      answer:
        "Freight factoring companies advance cash against a freight invoice's face value quickly, often before a shipper has reviewed the bill. If accessorial charges or reclassifications on the invoice do not match the bill of lading terms, the funded amount can be wrong before anyone catches it, unlike standard accounts payable where the error is caught before payment.",
    },
  ],
}
