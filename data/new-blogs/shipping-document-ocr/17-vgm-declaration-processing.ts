import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd17: BlogPost = {
  id: "sd-17",
  title: "VGM Declaration Processing: Matching VGM to the SI",
  slug: "vgm-declaration-processing",
  excerpt:
    "A container can carry a compliant VGM certificate and still get rolled, because the number never reconciled against the shipping instruction.",
  description:
    "How SOLAS VGM requirements actually work, Method 1 versus Method 2, and the document-matching problem that gets a technically valid VGM rejected anyway.",
  metaTag: "VGM Declaration Processing: SOLAS Method 1 vs Method 2",
  content: `
    <p>A container shows up at the terminal gate with a VGM certificate attached to the booking paperwork. The weight was captured two days earlier on a calibrated scale, the certificate is signed, and by SOLAS's own definition the number is compliant. The box still gets rolled to the next sailing. Not because the weight is wrong, and not because anyone forgot to weigh the container. It gets rolled because the container number on the VGM certificate reads three digits differently from the container number on the shipping instruction, and the terminal operating system that matches VGM records against loading data has no way to know those two documents describe the same box. This is the part of VGM compliance that almost nobody outside of terminal operations and carrier documentation teams ever has to think about, and it is the part that actually decides whether a compliant weight ends up doing anyone any good.</p>

    <p>This post is part of a cluster on <a href="/documents/shipping-docs">shipping document processing</a>. Most VGM content, and there is a lot of it, walks through the two weighing methods and the 2016 effective date and stops there, as if getting a compliant number is the hard part. It rarely is. The hard part is getting that number to survive contact with every other document describing the same shipment.</p>

    <h2>What SOLAS actually requires</h2>

    <p>The requirement traces back to a real, specific amendment to the International Convention for the Safety of Life at Sea. SOLAS Chapter VI, Regulation 2 was amended by the IMO's Maritime Safety Committee and became mandatory on July 1, 2016, following a string of container ship stability incidents and stack collapses that investigators traced back to inaccurate declared weights feeding directly into stowage planning software. Before the amendment, the weight used to plan where a container sat on a vessel, and how much lashing force it needed, was often whatever the shipper wrote on the shipping instruction, unverified and sometimes wildly off from the actual packed weight. The regulation closed that gap by making verification a precondition of loading rather than a paperwork afterthought: a packed container cannot be loaded aboard a ship subject to SOLAS unless its verified gross mass has been obtained and communicated to the master or the master's representative, and separately to the terminal representative, in time for that number to be used in the vessel's stowage plan.</p>

    <p>The obligation sits with the shipper, defined for this purpose as the party named as shipper on the bill of lading or sea waybill, or the entity that concluded a contract of carriage with the ocean carrier. That single detail matters more than it looks like it should, because in a booking chain running from a factory through a freight forwarder to an NVOCC to the ocean carrier, more than one party could plausibly claim to be "the shipper" for VGM purposes, and only one of them carries the SOLAS obligation. Carriers generally treat the party named on their own bill of lading as the responsible one regardless of how many intermediaries handled the actual cargo.</p>

    <h2>Method 1 and Method 2, and why they produce different document trails</h2>

    <p>SOLAS gives shippers two ways to arrive at a verified gross mass, and the choice of method changes what kind of paper trail exists behind the number, which matters enormously once you're trying to reconcile that number against other shipment documents.</p>

    <p><strong>Method 1</strong> is the straightforward approach: weigh the entire packed container, seal and all, on calibrated and certified weighing equipment after it has been packed. This is typically done at a port facility, a container yard, or a certified weighbridge, and it produces one number backed by one weighing event, tied to one specific container by its equipment number at the moment of weighing. The document trail is simple, a weighbridge ticket or certificate referencing a single container number and a single timestamp.</p>

    <p><strong>Method 2</strong> works differently: instead of weighing the finished container, the shipper (or a party acting on the shipper's behalf) weighs every individual package and item of cargo going into the container, plus pallets, dunnage, and other packing material, sums those individual masses, and adds the container's own tare weight, which is stenciled on the container door. This calculation-based approach requires the shipper's process to be approved by the competent authority of the country where the container was packed, and it produces a very different document trail: a set of individual weighing records, a packing list showing what and how many, a tare weight pulled from the container's own markings, and an arithmetic sum that becomes the VGM. That's several documents feeding one number instead of one weighbridge ticket, which is exactly why Method 2 declarations carry more room for a transcription or unit error to slip through undetected.</p>

    <table>
      <thead>
        <tr><th>Attribute</th><th>Method 1</th><th>Method 2</th></tr>
      </thead>
      <tbody>
        <tr><td>What is weighed</td><td>The fully packed, sealed container</td><td>Individual packages and cargo items, plus dunnage and packing material</td></tr>
        <tr><td>Equipment needed</td><td>Calibrated, certified weighbridge or container scale</td><td>Certified scales for individual items; container tare taken from door markings</td></tr>
        <tr><td>Regulatory precondition</td><td>Weighing equipment must be calibrated and certified per national requirements</td><td>The shipper's weighing and calculation method must be approved by the competent authority of the packing country</td></tr>
        <tr><td>Source documents behind the number</td><td>One weighbridge ticket or scale certificate</td><td>Multiple item-level weight records plus a packing list plus tare data, summed</td></tr>
        <tr><td>Where errors typically enter</td><td>Miscalibrated equipment, or weighing before final packing is complete</td><td>Omitted items, double-counted pallets, wrong tare figure, or a unit conversion mistake in the sum</td></tr>
        <tr><td>Typical users</td><td>Full-container-load shippers packing at a terminal or dedicated weighing point</td><td>Shippers packing at their own facility with itemized cargo, common in consolidated or LCL-adjacent full-container shipments</td></tr>
      </tbody>
    </table>

    <h2>Why "sufficiently in advance" is the whole ballgame</h2>

    <p>SOLAS doesn't fix a single universal cutoff time. It requires the verified gross mass to reach the carrier and the terminal representative early enough to be incorporated into the vessel's stowage plan, and that timing requirement is what each carrier and terminal translates into their own operational VGM cutoff, usually expressed as a number of hours before the vessel's stated loading window. Miss that cutoff, whether because the VGM never arrived, arrived attached to the wrong booking, or arrived but didn't match the container it was supposed to describe, and the terminal has no basis for including that container in the stow plan. The practical consequence is a rolled booking: the container gets pulled from the current sailing and rebooked onto the next available one, with all the downstream costs that implies, a missed delivery window, demurrage exposure while the container sits, and in consolidated shipments, a knock-on delay for every other party whose cargo shared that container or that sailing slot.</p>

    <p>This is where the regulation's plain intent, verify the weight before it goes on a ship, quietly turns into a document integration problem. The VGM itself isn't submitted in isolation. It has to land against a specific booking, referencing a specific container number, and it has to match what the shipping instruction says about that same container, or the terminal system treats it as an orphaned data point rather than a completed compliance record.</p>

    <h2>The actual matching problem: VGM declaration versus shipping instruction</h2>

    <p>The shipping instruction is the document the shipper (or their forwarder) sends the carrier specifying what's being shipped, under which booking number, in which container, with what cargo description, weight, and consignee details, so the carrier can generate the bill of lading. The VGM declaration is a separate submission, sometimes filed through a different portal or by a different party (a weighing terminal, a forwarder, a warehouse), that has to be tied back to that exact same container and booking before it counts as satisfied. Reconciling the two sounds trivial. In practice, it fails in a handful of specific, recurring ways:</p>

    <p><strong>Container number formatting mismatches.</strong> A container number is a four-letter owner prefix, a six-digit serial number, and a single check digit, for example MSCU1234565. If the VGM system captures it as "MSCU 123456-5" with a space and a hyphen, or drops the check digit entirely, or a data-entry step introduces a transposed digit, an automated matcher doing an exact string comparison against the shipping instruction's container field will fail to link the two records even though a human glancing at both would recognize them instantly as the same box.</p>

    <p><strong>Booking or SI reference mismatches.</strong> When the VGM is submitted by a party other than whoever filed the shipping instruction, most often a container freight station, a weighing terminal, or a trucking company handling drayage, that party sometimes references an internal job number or a delivery order number instead of the carrier's booking number, and the carrier's system has no field mapping to connect the two identifiers automatically.</p>

    <p><strong>Weight unit and rounding discrepancies.</strong> A Method 2 calculation performed by a shipper working in pounds, then converted to kilograms for the VGM submission, can round differently depending on whether the conversion happens before or after summing individual item weights. The difference is often small enough to be operationally meaningless but large enough to trip an automated tolerance check comparing the VGM figure against a cargo weight independently stated on the shipping instruction or packing list.</p>

    <p><strong>Responsible-party mismatches.</strong> SOLAS requires the VGM to be attributable to the shipper of record, but the entity that actually performs the weighing, a third-party logistics warehouse, a consolidator, a trucking yard with a certified scale, is frequently a different legal entity from the shipper named on the bill of lading. A VGM certificate correctly stating a weight but naming the weighing party rather than the shipper as the "authorized person" creates an attribution gap that a strict compliance check should flag, even though the number itself may be entirely accurate.</p>

    <h2>Worked example: a compliant weight, a rejected declaration</h2>

    <p>Consider a full-container shipment of machine parts booked under carrier booking number CGMU0091234. The shipping instruction lists the container as MEDU7654321, gross cargo weight 18,400 kg, shipper "Acme Components Ltd." The exporter uses Method 2, weighing at their own warehouse: 214 individual crates, summed at 18,246 kg, plus a container tare of 2,200 kg stenciled on the door, giving a declared VGM of 20,446 kg. That number is accurate, the weighing equipment was certified, and the calculation is correct arithmetic.</p>

    <p>The warehouse's freight forwarder submits the VGM through the carrier's web portal two days before the stated cutoff, well within the required window. But the forwarder's staff, working from a drayage manifest rather than the original shipping instruction, enters the container number as MEDU7654321 correctly, yet references the booking as "BK-0091234" rather than the carrier's actual booking format "CGMU0091234." The carrier's VGM intake system, matching submissions primarily against booking number rather than container number, cannot locate a booking record matching "BK-0091234" and the submission sits unlinked. Nobody notices until the terminal's pre-loading exception report flags the container as having no matched VGM, forty hours before the vessel's berth window, close enough to the operational cutoff that there's no time left to trace the mismatch, correct the reference, and get it re-linked. The container rolls to the next sailing, not because the weight was wrong, not because the method was invalid, but because a reference field used a locally familiar shorthand instead of the carrier's expected format, and the matching logic on the receiving end had no fallback path through the container number itself.</p>

    <p>The fix for this specific failure mode, and it is a common one, is matching logic that treats the container number as the primary reconciliation key rather than the booking reference alone, since the container number is standardized (ISO 6346 format, letters plus digits plus a computable check digit) in a way that internal booking shorthand never will be, and normalizing whitespace, hyphenation, and case before any comparison happens.</p>

    <h2>What automated VGM reconciliation actually has to check</h2>

    <p>A document intelligence layer sitting between VGM submissions and shipping instructions needs to run through a specific set of checks before treating a VGM as satisfied for a given container, rather than trusting that a record exists somewhere with a plausible-looking weight attached:</p>

    <ul>
      <li>Normalize the container number from both documents (strip spaces, hyphens, and inconsistent casing) before comparing, and validate the check digit on both to catch a transcription error rather than just a formatting difference.</li>
      <li>Match on container number as the primary key, falling back to booking reference only when the container field is missing or unreadable, since booking references vary in format across shippers, forwarders, and internal systems in a way container numbers do not.</li>
      <li>Confirm the "shipper" or "authorized person" named on the VGM record maps to the same legal entity named as shipper on the shipping instruction and bill of lading, flagging cases where a different name appears (a warehouse, a consolidator, a trucking company) for manual confirmation that the responsible party's authorization was actually obtained.</li>
      <li>Cross-check the declared VGM against the cargo weight stated on the shipping instruction or packing list, applying a reasonable tolerance for tare weight and dunnage rather than an exact-match requirement, since the two figures are legitimately expected to differ by roughly the container's own tare weight, and flag deviations outside that expected range rather than treating any difference as an error.</li>
      <li>Verify the method indicated (Method 1 or Method 2) is consistent with the supporting documentation attached, a Method 1 declaration should reference a single weighbridge certificate, while a Method 2 declaration should be traceable to itemized weight records and a packing list.</li>
      <li>Timestamp the VGM against the carrier's or terminal's stated cutoff for that specific vessel and booking, since "sufficiently in advance" is operationally defined per sailing, not as a fixed universal window, and a VGM that clears every other check but arrives after cutoff still needs to be flagged before it becomes a rolled-container surprise.</li>
    </ul>

    <h2>Where the industry is standardizing this</h2>

    <p>The reconciliation problem described above is well known enough in the industry that the Digital Container Shipping Association, the standards body formed by the major ocean carriers, has published a formal VGM data standard intended to replace the current patchwork of carrier portals, PDF certificates, and email submissions with a consistent, API-based exchange format. The stated goal is exactly the failure mode in the worked example above: inconsistent or late VGM data causing shipment delays, fines, and container roll-overs, addressed by giving every party in the chain, shipper, forwarder, weighing facility, carrier, terminal, a single structured format keyed consistently to container and booking identifiers rather than free-text fields interpreted differently by each system that touches them. Carriers adopting that standard are, in effect, formalizing the same matching logic described above: container number as the anchor, structured fields instead of free text, and automated validation instead of a human noticing a mismatch on an exception report forty hours before a vessel sails.</p>

    <p>Until that kind of standardization is universal across carriers and terminals, and much of the industry still runs VGM through legacy portals and PDF certificates, the reconciliation burden falls on whoever is trying to process shipping documents at scale: confirming that a compliant weight, correctly obtained under Method 1 or Method 2, actually gets linked to the right container, the right booking, and the right shipper before that link becomes the difference between a container loading on schedule and getting rolled over a formatting mismatch nobody meant to create.</p>

    <h2>Where VGM fits into the broader shipping document set</h2>

    <p>VGM reconciliation rarely happens in isolation from the rest of a shipment's paperwork. The container number that has to match between the VGM and the shipping instruction is the same identifier that needs independent validation against the bill of lading and the terminal's equipment interchange records, a check digit problem covered in more depth in the piece on <a href="/resources/blogs/container-number-verification">container number verification</a>. The cargo weight the VGM is meant to correspond to should also tie back to the itemized quantities and weights on the packing list, which is its own reconciliation exercise described in the post on <a href="/resources/blogs/packing-list-reconciliation">packing list reconciliation</a>. And because the shipper named on the VGM has to match the shipper named on the transport document for the compliance record to hold up, VGM checks connect directly to the broader classification and extraction problem covered in <a href="/resources/blogs/bill-of-lading-processing">bill of lading processing</a>.</p>

    <p>None of these checks are individually hard. A container number check digit is a deterministic calculation. A weight tolerance comparison is arithmetic. A shipper name match is a string comparison against a known entity. What makes VGM reconciliation genuinely difficult in production is that it requires all of them to run consistently, across documents submitted by different parties, through different channels, on a clock that closes well before the vessel actually sails, and the cost of getting it wrong isn't a data quality footnote. It's a rolled container sitting on a dock because a compliant weight never made it onto the record that mattered.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Logistics",
  date: "September 15, 2026",
  datePublished: "2026-09-15T00:00:00.000Z",
  dateModified: "2026-09-15T00:00:00.000Z",
  last_updated: "September 15, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "vgm declaration processing",
  secondary_keywords: [
    "verified gross mass SOLAS",
    "SOLAS VGM requirement",
    "VGM Method 1 Method 2",
    "container weight verification",
    "VGM shipping instruction matching",
    "VGM cutoff container rollover",
  ],
  tags: ["logistics", "VGM", "SOLAS", "container shipping", "document reconciliation"],
  cluster: "logistics",
  faq: [
    {
      question: "What is a VGM declaration in shipping?",
      answer:
        "A VGM (Verified Gross Mass) declaration is a document confirming the total weight of a packed shipping container, obtained through one of two SOLAS-approved methods, and submitted to the ocean carrier and terminal before loading. It has been mandatory under SOLAS Chapter VI, Regulation 2 since July 1, 2016.",
    },
    {
      question: "What is the difference between Method 1 and Method 2 for VGM?",
      answer:
        "Method 1 weighs the entire packed container on calibrated, certified weighing equipment after it's sealed. Method 2 weighs each individual package and cargo item, sums those weights, and adds the container's own tare weight, using a calculation method that must be approved by the competent authority of the country where the container was packed.",
    },
    {
      question: "Who is legally responsible for providing the VGM?",
      answer:
        "The shipper, defined as the party named as shipper on the bill of lading or sea waybill, or whoever concluded the contract of carriage with the ocean carrier. In multi-party booking chains this is not always the same entity that physically weighs the container.",
    },
    {
      question: "What happens if a container's VGM is missing or doesn't match the shipping instruction?",
      answer:
        "The carrier or terminal cannot include that container in the vessel's stowage plan, so it gets rolled to a later sailing. This happens even when the underlying weight is accurate, if the VGM record can't be reliably matched to the correct container and booking before the operational cutoff.",
    },
    {
      question: "Is there a tolerance allowed between the declared VGM and other weight figures on shipment documents?",
      answer:
        "SOLAS itself doesn't set a numeric tolerance for reconciling VGM against other documents. In practice, a VGM should differ from the cargo weight stated on a shipping instruction or packing list by roughly the container's tare weight, and automated checks should flag deviations outside that expected range rather than requiring an exact match.",
    },
    {
      question: "Why does container number formatting cause VGM matching failures?",
      answer:
        "A VGM submission and a shipping instruction are often filed by different parties through different systems. If one records the container number with extra spacing, a dropped check digit, or a transposed character, an automated matcher doing an exact string comparison can fail to link two records that describe the same container, even though the underlying weight and container are correct.",
    },
  ],
}
