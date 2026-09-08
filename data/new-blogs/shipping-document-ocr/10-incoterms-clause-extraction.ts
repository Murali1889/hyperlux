import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd10: BlogPost = {
  id: "sd-10",
  title: "Incoterms Clause Extraction: The 11 Terms, Correctly Read",
  slug: "incoterms-clause-extraction",
  excerpt:
    "FCA and FOB look interchangeable on a purchase order. They are not. Here is what the 11 Incoterms 2020 rules actually change, and what a wrong read costs.",
  description:
    "A walkthrough of the 11 Incoterms 2020 rules, why misreading one on a contract creates real cost and risk exposure, and a worked FCA vs FOB comparison.",
  metaTag: "Incoterms Clause Extraction: All 11 Terms Explained",
  content: `
    <p>Picture a shipment of containerized electronics leaving a factory outside Shenzhen. The purchase order says "FOB Shenzhen." The goods get trucked to a container freight station, loaded into a container, and handed to the carrier six days before that container is physically lifted onto a vessel. Somewhere in that six day gap, the container gets damaged in a forklift accident at the CFS. Under the actual Incoterms 2020 definition of FOB, risk transfers to the buyer only when the goods pass over the ship's rail, on board the vessel. The damage happened before that point. Legally, it is still the seller's risk and the seller's insurance claim to file, not the buyer's. But if the purchase order had said "FCA Shenzhen" instead, risk would have transferred the moment the container was handed to the carrier at the CFS, before the accident, making it the buyer's exposure from that point forward. Two three-letter codes, one word of difference in outcome: whose insurer pays.</p>

    <p>That is the entire argument for treating Incoterms clause extraction as a precise, deterministic task rather than a keyword match. A document intelligence system that extracts "FOB" from a contract and a system that extracts "FCA" from the same contract are not extracting two flavors of the same fact. They are extracting two different legal allocations of risk, cost, and insurance obligation, and if the extraction is wrong, the downstream decision built on it, an insurance certificate, a landed cost calculation, a customs valuation, a dispute over who pays for damaged goods, is built on the wrong foundation. This post is a field-by-field walkthrough of what the 11 Incoterms 2020 rules actually define, why the FCA/FOB pair specifically trips up both humans and extraction systems, and what getting this one clause wrong costs in practice. If you are building or evaluating extraction for <a href="/documents/shipping-docs">shipping and logistics documents</a>, this is one of the highest-leverage single fields to get right, because almost nothing else on the page changes the legal outcome as sharply as three letters do.</p>

    <h2>The 11 Incoterms 2020 rules, precisely</h2>

    <p>Incoterms are published and maintained by the International Chamber of Commerce. The current version, Incoterms 2020, defines exactly 11 rules, no more, no fewer, and each one answers three questions in a fixed, non-negotiable way: where does risk transfer from seller to buyer, who pays for carriage to that point and beyond, and who is obligated to arrange cargo insurance. Seven of the 11 apply to any mode of transport, including multimodal shipments. The remaining four apply only to sea and inland waterway transport, because they are built around the specific mechanics of vessel loading.</p>

    <table>
      <thead>
        <tr><th>Code</th><th>Full name</th><th>Mode</th><th>Risk transfers to buyer</th><th>Main carriage arranged by</th><th>Insurance arranged by</th></tr>
      </thead>
      <tbody>
        <tr><td>EXW</td><td>Ex Works</td><td>Any</td><td>At seller's premises, before loading</td><td>Buyer</td><td>Buyer</td></tr>
        <tr><td>FCA</td><td>Free Carrier</td><td>Any</td><td>When goods are handed to the carrier at the named place</td><td>Buyer</td><td>Buyer</td></tr>
        <tr><td>CPT</td><td>Carriage Paid To</td><td>Any</td><td>When goods are handed to the first carrier</td><td>Seller</td><td>Buyer</td></tr>
        <tr><td>CIP</td><td>Carriage and Insurance Paid To</td><td>Any</td><td>When goods are handed to the first carrier</td><td>Seller</td><td>Seller, minimum Institute Cargo Clauses (A)</td></tr>
        <tr><td>DAP</td><td>Delivered at Place</td><td>Any</td><td>At destination, before unloading</td><td>Seller</td><td>Buyer</td></tr>
        <tr><td>DPU</td><td>Delivered at Place Unloaded</td><td>Any</td><td>At destination, after unloading</td><td>Seller</td><td>Buyer</td></tr>
        <tr><td>DDP</td><td>Delivered Duty Paid</td><td>Any</td><td>At destination, duty paid, before unloading</td><td>Seller</td><td>Buyer</td></tr>
        <tr><td>FAS</td><td>Free Alongside Ship</td><td>Sea and inland waterway</td><td>When goods are placed alongside the vessel</td><td>Buyer</td><td>Buyer</td></tr>
        <tr><td>FOB</td><td>Free on Board</td><td>Sea and inland waterway</td><td>When goods are loaded on board the vessel</td><td>Buyer</td><td>Buyer</td></tr>
        <tr><td>CFR</td><td>Cost and Freight</td><td>Sea and inland waterway</td><td>When goods are loaded on board the vessel</td><td>Seller</td><td>Buyer</td></tr>
        <tr><td>CIF</td><td>Cost, Insurance and Freight</td><td>Sea and inland waterway</td><td>When goods are loaded on board the vessel</td><td>Seller</td><td>Seller, minimum Institute Cargo Clauses (C)</td></tr>
      </tbody>
    </table>

    <p>Look at that table again and notice what actually varies across the 11 rows: it is never the goods, never the price, never the product description. It is always one of three things, the physical point where risk crosses from seller to buyer, who is contractually on the hook for freight, and whether cargo insurance is mandatory for one party. Every Incoterm is, functionally, a compact answer to those three questions, and an extraction system that pulls the three-letter code but does not map it to those three answers has extracted a label, not the information the label carries.</p>

    <h2>The four historical groupings, still worth knowing</h2>

    <p>Before the 2020 restructuring around transport mode, Incoterms 2010 and earlier editions grouped the rules into four families by first letter, and practitioners still reference this grouping constantly even though the ICC's own 2020 documentation leads with the any-mode versus sea-only split shown above. E terms (EXW) mean departure, the seller's obligation ends at their own door. F terms (FCA, FAS, FOB) mean the seller delivers to a carrier the buyer has arranged, and the buyer pays main carriage. C terms (CPT, CIP, CFR, CIF) mean the seller arranges and pays for main carriage but risk still transfers early, at origin, which is the single most misunderstood feature of the C group: paying for freight is not the same as bearing risk during it. D terms (DAP, DPU, DDP) mean delivery, the seller bears risk and cost all the way to a named destination. If an extraction system or a trained reviewer has one mental model to fall back on when a three-letter code looks unfamiliar, this grouping is it, because it predicts the shape of the obligation even before you look up the specific rule.</p>

    <h2>Why a wrong extraction here is not a cosmetic error</h2>

    <p>Most fields on a shipping contract, when misread, create friction that a downstream system eventually catches: a misspelled consignee name bounces at delivery, a wrong quantity gets flagged at a three-way match against the packing list. Incoterms clauses are different, because the error does not necessarily surface until something goes wrong physically, at which point the question of who was on the hook has already been answered incorrectly for weeks or months. Consider what depends on the Incoterm extracted from a purchase order or sales contract being correct:</p>

    <table>
      <thead>
        <tr><th>Downstream process</th><th>What depends on the correct Incoterm</th><th>Consequence of misreading it</th></tr>
      </thead>
      <tbody>
        <tr><td>Cargo insurance placement</td><td>Whether the buyer or seller is contractually obligated to insure, and from what point</td><td>A gap in coverage if both parties assume the other is insuring, or a claim denied because the loss occurred outside the insured party's risk period</td></tr>
        <tr><td>Landed cost calculation</td><td>Which cost components (freight, insurance, duty) are already included in the unit price versus billed separately</td><td>Double paying for freight already included in price, or underestimating true landed cost by omitting a cost the seller was never obligated to cover</td></tr>
        <tr><td>Customs valuation</td><td>Incoterms affect what is included in the declared transaction value for duty calculation</td><td>Under or over-declared customs value, triggering a valuation query or a compliance penalty</td></tr>
        <tr><td>Cargo damage dispute</td><td>Which party bore risk at the moment and location the damage occurred</td><td>Filing a claim with the wrong insurer, or a dispute over liability that could have been resolved by reading one clause correctly</td></tr>
        <tr><td>Letter of credit compliance</td><td>Incoterm referenced in the LC must match the Incoterm on the commercial invoice and transport document exactly</td><td>Document discrepancy, payment delay, or an issuing bank rejecting the presentation</td></tr>
      </tbody>
    </table>

    <p>That last row matters more than it looks. Anyone who has reviewed a <a href="/resources/blogs/letter-of-credit-document-compliance">letter of credit compliance</a> package knows that banks check documents against each other for exact consistency, not approximate consistency, and an Incoterm is one of the fields they check. A system that extracts "FOB" from the commercial invoice and "FCA" from the transport document, because the underlying text used the two terms loosely or because extraction misread one of them, has created a discrepancy that stalls payment on a shipment that has already left the dock.</p>

    <h2>FCA versus FOB, worked in full</h2>

    <p>Of all 11 rules, FCA and FOB get confused with each other more than any other pair, for a reason that is almost entirely historical rather than logical: before containerization was the dominant mode of ocean shipping, FOB was the default term for any goods loaded onto a vessel, and habit carried the term forward into container trade even after the ICC introduced FCA specifically to fix the problem FOB creates for containers. Both terms allocate freight cost to the buyer and put the seller's delivery obligation at an early point in the journey. Where they diverge is exactly where it matters most: the physical location and moment risk transfers.</p>

    <p>FOB requires the goods to be loaded on board the vessel before risk passes to the buyer. That definition made sense when cargo was loaded piece by piece, crane by crane, directly from dock to ship, and a clear physical moment, goods crossing the ship's rail, existed to anchor the transfer. It makes very little sense for a sealed container, because a container is almost never loaded onto the vessel by the seller. Containers are stuffed at a container freight station or the seller's warehouse, trucked to the port, and handed over to the carrier's custody days, sometimes a week or more, before the vessel that will carry them is even loaded. Under a literal reading of FOB, the seller retains risk for that entire gap, custody with the carrier notwithstanding, because the contractual risk transfer point is still "on board," not "handed to carrier."</p>

    <p>FCA fixes exactly this mismatch. Risk transfers under FCA the moment goods are handed to the carrier the buyer nominated, at the named place, whether that is the seller's own premises, a container freight station, or a terminal. There is no gap between custody transfer and risk transfer under FCA, because the ICC designed the rule specifically to align the two for modern, containerized, multimodal cargo.</p>

    <table>
      <thead>
        <tr><th>Dimension</th><th>FCA (Free Carrier)</th><th>FOB (Free on Board)</th></tr>
      </thead>
      <tbody>
        <tr><td>Applicable transport</td><td>Any mode, including multimodal and containerized</td><td>Sea and inland waterway only, vessel-to-vessel style loading</td></tr>
        <tr><td>Risk transfer point</td><td>Handover to carrier at the named place</td><td>Goods loaded on board the vessel</td></tr>
        <tr><td>Gap between custody and risk transfer</td><td>None, custody and risk transfer together</td><td>Often days, custody passes at CFS handover, risk stays with seller until vessel loading</td></tr>
        <tr><td>Correct use for a sealed container</td><td>Yes, this is the rule the ICC recommends for containerized cargo</td><td>Not recommended, condition of goods cannot be verified at the ship's rail for a sealed container</td></tr>
        <tr><td>Documentary flexibility for letters of credit</td><td>2020 revision allows the buyer to instruct the carrier to issue an on-board bill of lading to the seller, letting FCA work with LC terms that require an on-board notation</td><td>Naturally produces an on-board bill of lading, since loading is the delivery point itself</td></tr>
      </tbody>
    </table>

    <h2>Quantifying the exposure window</h2>

    <p>Go back to the opening scenario and put numbers on the gap, using assumptions typical of a mid-size containerized shipment so the mechanism is concrete rather than abstract. Say the shipment is worth 80,000 dollars, the container is stuffed and handed to the carrier at a CFS on day one, and the vessel it is booked on does not actually load that container until day seven, a six day dwell that is unremarkable for congested port schedules. If the contract terms are genuinely FOB, as written, the seller carries the full 80,000 dollars of risk for that entire six day window, because risk has not yet transferred under the rule's own definition. If the seller's cargo insurance policy was purchased on the assumption that risk (and therefore their insurable interest) ended at CFS handover, following the common but legally incorrect shorthand that FOB behaves like FCA for containers, that policy may not actually cover a loss in days two through seven, leaving the seller exposed with no insurance behind the exposure at all. Flip the terms to FCA and the same six days sit entirely on the buyer's side of the ledger from day one, with the buyer's insurance, if properly aligned to the FCA risk period, covering it. The dollar amount at stake did not change. Which balance sheet it sits on, and whether an insurance policy actually covers it, changed entirely based on three letters extracted correctly or incorrectly from one clause.</p>

    <p>This is also why FOB should not be treated as a synonym for "the seller loads it" in casual contract language. Parties frequently write "FOB" into a purchase order out of habit, meaning something closer to FCA in practice, custody transfer at origin, without updating the term to match. An extraction system reading the literal text correctly extracts "FOB." A system, or a human, evaluating the actual risk allocation the parties intended needs to recognize that the named place in the clause, a CFS or inland facility rather than a port of loading, is itself a signal that the term may be functionally mismatched to what FOB actually requires, and that mismatch is worth flagging rather than passing through silently.</p>

    <h2>The insurance line worth reading twice: CIP versus CIF</h2>

    <p>FCA and FOB are the pair most often assigned as a comparison, but there is a second pair worth knowing for the same reason, because it shows the same pattern, two similar-looking codes with a materially different obligation buried in one word. CIP and CIF both require the seller to arrange and pay for cargo insurance, unlike every other Incoterm where insurance is left to whichever party wants it. But the minimum coverage level differs. Under the 2020 revision, CIP requires the seller to purchase insurance meeting Institute Cargo Clauses (A), the broadest, all-risk tier, at a minimum of 110 percent of the contract value. CIF still only requires Institute Cargo Clauses (C), the narrowest, named-perils tier, covering a much shorter list of insured events. A contract that says "CIF" and one that says "CIP" both guarantee the buyer will receive an insurance certificate, but the CIF buyer's default coverage is meaningfully thinner, and an extraction pipeline that treats "CIF" and "CIP" as interchangeable variants of "seller insures" misses a distinction the buyer's risk team would care about immediately.</p>

    <h2>Where extraction actually breaks on this clause</h2>

    <p>In practice, Incoterms clauses fail extraction for reasons that have nothing to do with OCR accuracy on the three letters themselves, those are almost always printed cleanly. The failures cluster around three patterns. First, the named place gets separated from the code, either across a line break in a scanned PDF or because the place name appears in a different field entirely, "Incoterm: FOB" in one box and "Port of Loading: Shanghai" in another, leaving a system that only captures the code with an incomplete clause, since FOB Shanghai and FOB Ningbo are functionally the same rule but a materially different logistics and cost picture. Second, older or non-standard contracts still reference retired terms, DAT, DEQ, or DDU, which existed in earlier Incoterms editions and were consolidated or removed in 2010 and 2020, and a rules table built only for the current 11 will either miscategorize these or silently drop them. Third, and most subtly, many commercial documents state an Incoterm without the ICC's own qualifying language, "FOB" with no reference to Incoterms 2020 or any edition at all, which technically leaves the term open to interpretation under whichever trade custom or prior edition the parties may have intended, a detail that matters in a dispute even though it rarely changes day-to-day processing.</p>

    <h2>What correct extraction actually requires</h2>

    <p>Given all of that, correct Incoterms clause extraction from a contract, purchase order, or commercial invoice needs to capture more than a three-letter string. It needs the code, the named place paired with it, and ideally the stated or inferred edition, because "FOB" alone answers none of the three questions that actually matter, risk transfer point, cost allocation, and insurance obligation, without the place attached. It also benefits from a validation layer that flags mismatches the same way a human reviewer would: a sea-only term like FOB or CIF applied to a shipment that the rest of the document describes as multimodal or trucked, an F-term or D-term paired with an insurance clause that contradicts what that Incoterm actually requires, or a named place that looks like an inland facility attached to a code that is only supposed to be used for vessel loading. None of that requires machine learning sophistication. It requires treating the 11 rules as a fixed, known reference table, the same way <a href="/resources/blogs/bill-of-lading-processing">bill of lading fields</a> or <a href="/resources/blogs/freight-invoice-automation">freight invoice line items</a> get validated against known formats, rather than treating a three-letter code as free text to be captured and forwarded without a second check.</p>

    <p>The upside of getting this right is proportionate to how much sits on top of one clause. An Incoterm extracted correctly, with its named place and its actual risk, cost, and insurance implications resolved, feeds a landed cost calculation that is right instead of approximately right, an insurance placement that actually covers the exposure window it is meant to cover, and a letter of credit presentation that matches across documents instead of triggering a discrepancy notice. An Incoterm extracted as a bare string, correct characters but no resolved meaning, is a label sitting on top of a decision nobody actually verified.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/the-ultimate-guide-to-small-business.png",
  featuredImage: "/images/the-ultimate-guide-to-small-business.png",
  category: "Logistics",
  date: "September 8, 2026",
  datePublished: "2026-09-08T00:00:00.000Z",
  dateModified: "2026-09-08T00:00:00.000Z",
  last_updated: "September 8, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "incoterms clause extraction",
  secondary_keywords: [
    "Incoterms 2020 rules",
    "FCA vs FOB",
    "incoterms risk transfer",
    "incoterms cost allocation",
    "CIP vs CIF insurance",
    "incoterms contract clause",
  ],
  tags: ["logistics", "OCR", "document AI", "Incoterms", "trade compliance", "shipping"],
  cluster: "logistics",
  faq: [
    {
      question: "How many Incoterms 2020 rules are there?",
      answer:
        "Exactly 11. Seven apply to any mode of transport (EXW, FCA, CPT, CIP, DAP, DPU, DDP), and four apply only to sea and inland waterway transport (FAS, FOB, CFR, CIF).",
    },
    {
      question: "What is the main difference between FCA and FOB?",
      answer:
        "FCA transfers risk from seller to buyer when goods are handed to the carrier at a named place, which can be an inland facility. FOB transfers risk only when goods are loaded on board the vessel. For containerized cargo, this creates a gap under FOB, since containers are typically handed to the carrier days before vessel loading, and the seller retains risk during that gap.",
    },
    {
      question: "Why is FOB not recommended for containerized shipments?",
      answer:
        "FOB's risk transfer point is loading on board the vessel, but a sealed container's condition cannot be verified at that point, and the seller rarely has physical control over the goods at the moment of loading anyway. The ICC recommends FCA instead, since it aligns risk transfer with the actual handover of custody to the carrier.",
    },
    {
      question: "Which Incoterms require the seller to arrange insurance?",
      answer:
        "Only CIP and CIF. Every other Incoterm leaves insurance arrangement to whichever party wants coverage. CIP requires a minimum of Institute Cargo Clauses (A), the broadest all-risk tier, while CIF only requires Institute Cargo Clauses (C), a narrower named-perils tier, both at a minimum of 110 percent of contract value.",
    },
    {
      question: "Why does extracting the wrong Incoterm from a contract matter?",
      answer:
        "The Incoterm determines who bears risk, who pays for freight, and who insures the cargo at every point in transit. A misread or incomplete extraction can produce an incorrect landed cost calculation, a mismatched insurance placement that does not actually cover the risk period, or a letter of credit discrepancy that delays payment.",
    },
    {
      question: "What is the E/F/C/D grouping of Incoterms?",
      answer:
        "It is the historical classification still widely used in practice. E terms (EXW) mean the seller's obligation ends at their own premises. F terms (FCA, FAS, FOB) mean the buyer arranges main carriage. C terms (CPT, CIP, CFR, CIF) mean the seller pays for main carriage but risk still transfers early. D terms (DAP, DPU, DDP) mean the seller bears risk and cost all the way to a named destination.",
    },
  ],
}
