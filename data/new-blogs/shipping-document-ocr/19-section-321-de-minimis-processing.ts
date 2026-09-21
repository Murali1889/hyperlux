import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd19: BlogPost = {
  id: "sd-19",
  title: "Section 321 De Minimis Processing After the 2025 Suspension",
  slug: "section-321-de-minimis-processing",
  excerpt:
    "Split a $2,000 order into three $667 packages and each clears duty free on paper. The rule was written to catch exactly that, and most systems still miss it.",
  description:
    "The real Section 321 threshold and one-person-one-day rule under 19 CFR 10.151, the 2025 suspension, and why identity matching across shipments is hard.",
  metaTag: "Section 321 De Minimis Processing After the 2025 Suspension",
  content: `
    <p>Here is a number worth sitting with: de minimis shipments entering the United States grew from roughly 140 million a year to more than one billion a year over the space of a decade, driven largely by direct-to-consumer e-commerce out of China. Every one of those packages, in theory, had to pass a legal test before it could clear duty free. Almost none of them were actually tested against the full rule. They were tested against one part of it, the declared value, because that is the only part a simple parsing pipeline can check without linking a shipment to every other shipment moving under the same importer's name that day.</p>

    <p>That gap between "check the value" and "check eligibility" is the entire subject of this post. It is part of a cluster on <a href="/documents/shipping-docs">shipping document processing</a>, and this piece covers Section 321 of the Tariff Act, codified at 19 U.S.C. § 1321, the regulation that implements it at 19 CFR § 10.151, why the real eligibility test was never just a dollar figure, and what changed in 2025 that most existing guides on this topic have not caught up with.</p>

    <h2>What Section 321 actually says</h2>

    <p>Section 321 is the administrative exemption provision of the Tariff Act. It authorizes U.S. Customs and Border Protection to waive duty and tax collection on shipments below a value threshold, on the theory that the government spends more collecting a few dollars of duty on a low-value parcel than it would ever recover. The statute, 19 U.S.C. § 1321(a)(2)(C), sets that threshold at $800 for the general case, a figure raised from $200 in 2016 under the Trade Facilitation and Trade Enforcement Act. The implementing regulation, 19 CFR § 10.151, is where the operative language actually lives, and it is worth quoting directly because most summaries paraphrase it into something looser than what it says: the port director "shall pass free of duty and tax any shipment of merchandise imported by one person on one day having a fair retail value in the country of shipment...not exceeding $800."</p>

    <p>Read that sentence carefully and the eligibility test has three parts, not one. Fair retail value under $800. Imported by one person. On one day. A pipeline that checks only the first condition is implementing roughly a third of the actual rule, and it is implementing the third that is easiest to automate and least protective against the kind of abuse the exemption was designed to guard against.</p>

    <h2>The one-person-one-day rule and why it exists</h2>

    <p>19 CFR § 10.151 does not stop at defining the threshold. It includes explicit anti-abuse language directed at exactly the scenario a naive value check invites: the exemption does not apply if the port director has reason to believe the shipment is "one of several lots covered by a single order or contract, and that such lots have been forwarded separately for the express purpose of securing free entry of the merchandise or of avoiding compliance with any pertinent law or regulation." In plain terms, if a buyer orders $2,000 of merchandise and the seller splits it into three parcels of roughly $667 each so each one individually clears under $800, that is not three legitimate de minimis shipments. It is one $2,000 import artificially disaggregated to defeat the threshold, and the regulation says so directly rather than leaving it to inference.</p>

    <p>The "one person on one day" framing is what makes that anti-splitting language enforceable at all. Value alone cannot distinguish a legitimate $600 gift from three coordinated $600 shipments to the same recipient on the same day that are really one $1,800 order. Only aggregation, tracking every shipment tied to a given importer of record or consignee within a given calendar day, catches the pattern. That is also why the regulation requires informal entry procedures rather than a blanket automatic pass: informal entry still generates enough manifest data (consignee name, address, value, shipper) for CBP to run exactly this kind of cross-shipment check, at least in principle.</p>

    <h2>Why "one person" is a harder data problem than it sounds</h2>

    <p>The statute says "one person," but a person, for aggregation purposes, is whatever combination of consignee name, delivery address, and importer identifier the entry data actually contains, and none of those fields are guaranteed to be clean or consistent across shipments from the same buyer. A single individual placing three separate low-value orders in one day might show up in manifest data as "J. Martinez," "Jose Martinez," and "J Martinez Jr" depending on which fulfillment platform generated the shipping label, at three subtly different but geographically identical addresses due to unit-number formatting differences, apartment abbreviations, or a missing suite number. A document processing system built to flag same-day aggregation has to resolve those three text strings to the same underlying person before the $800 test can even be applied correctly, and that resolution problem, fuzzy identity matching across inconsistent, freeform manifest text at high volume, is a fundamentally different technical challenge than reading a declared value off a commercial invoice.</p>

    <p>This is the specific place where document intelligence work on Section 321 diverges from ordinary customs data entry. Extracting "$650" from a shipment record is trivial. Determining that this $650 shipment, that $610 shipment, and a third $590 shipment filed four hours apart are legally the same importer's split order, using only the noisy text fields available on commercial invoices, air waybills, and carrier manifests, is the actual engineering problem, and it scales with shipment volume in a way that per-document value extraction does not. At a few hundred parcels a day, a human reviewer can plausibly catch obvious duplicates. At the volumes de minimis shipping actually reached before 2025, well over a million parcels a day industry-wide, that kind of manual cross-referencing was never realistic, which is part of why the exemption became a known avoidance vector rather than a narrow convenience provision.</p>

    <h2>Section 321 threshold at a glance</h2>

    <table>
      <thead>
        <tr><th>Element of the rule</th><th>What it requires</th><th>What a value-only check misses</th></tr>
      </thead>
      <tbody>
        <tr><td>Fair retail value</td><td>Must not exceed $800 in the country of shipment, per 19 U.S.C. § 1321(a)(2)(C)</td><td>N/A, this is the part most systems do check</td></tr>
        <tr><td>One person</td><td>All merchandise must belong to a single importer or consignee, not an artificially split group of related shipments</td><td>Requires identity resolution across inconsistent name and address fields</td></tr>
        <tr><td>One day</td><td>Aggregation window is a single calendar day per 19 CFR § 10.151</td><td>Requires timestamped cross-referencing of all shipments to the same resolved person</td></tr>
        <tr><td>No order-splitting intent</td><td>Exemption does not apply if lots from a single order were forwarded separately to secure free entry</td><td>Requires linking shipment records back to a common order or contract, rarely present on the entry data itself</td></tr>
        <tr><td>Entry type</td><td>Must be entered under informal entry procedures</td><td>A formal entry filed by mistake or by design can bypass some de minimis screening logic entirely</td></tr>
        <tr><td>2016 threshold change</td><td>Raised from $200 to $800 under the Trade Facilitation and Trade Enforcement Act</td><td>Historical context, not itself an eligibility check</td></tr>
      </tbody>
    </table>

    <h2>Worked example: how order splitting defeats a value-only filter</h2>

    <p>Take a straightforward case. A buyer places a single $2,100 order with an overseas seller for a mix of electronics accessories. The seller's fulfillment system, whether deliberately or simply because it batches orders by carrier pickup window, generates three separate shipments: Parcel A valued at $790, Parcel B valued at $720, Parcel C valued at $590. Each ships the same afternoon from the same warehouse, addressed to the same buyer, though Parcel B's shipping label reads "Apt 4B" while Parcels A and C read "Unit 4B."</p>

    <p>A document pipeline built around per-shipment value extraction processes all three records independently, confirms each is under $800, confirms each looks like a standalone informal entry, and clears all three duty free. Total declared value cleared under the exemption: $2,100, well over the $800 per-person, per-day ceiling the statute actually allows, and precisely the "several lots covered by a single order...forwarded separately" scenario 19 CFR § 10.151 names outright as disqualifying.</p>

    <p>Now run the same three records through a pipeline that resolves consignee identity across minor address-formatting differences and groups shipments by resolved person and calendar day before applying the value test. The address normalization step treats "Apt 4B" and "Unit 4B" as the same unit given identical street number, street name, city, and ZIP. That single normalization step is what surfaces the pattern: three shipments, one resolved consignee, one calendar day, combined value $2,100. The system does not need to prove the seller intentionally split the order to flag it, the aggregation condition in the statute triggers on the pattern itself, and the correct outcome is to route the combined shipment for formal entry and duty assessment rather than clear it duty free three separate times.</p>

    <h2>What changed in 2025 and why most guides on this topic are already out of date</h2>

    <p>For years, Section 321 processing content online treated the $800 threshold as a stable, evergreen fact. It is not, and treating it that way as of this writing produces materially wrong guidance. On May 2, 2025, an executive order ended de minimis duty-free treatment specifically for shipments from China and Hong Kong, the single largest source of de minimis volume by a wide margin. On August 29, 2025, a further executive order extended that elimination to all countries, closing what the order's own text described as a tariff avoidance mechanism. Separately, legislation enacted in 2025 goes further still: it schedules the outright repeal of 19 U.S.C. § 1321(a)(2)(C), the statutory de minimis provision itself, effective July 1, 2027, removing the exemption from the books entirely rather than leaving it suspended by executive action alone.</p>

    <p>The result is a layered legal picture that a single-sentence summary cannot capture accurately. The statute authorizing the $800 exemption remains in force today but is scheduled for repeal in 2027. The implementing regulation, 19 CFR § 10.151, still describes the one-person-one-day mechanics and the anti-splitting condition in detail, because that regulatory text has not been rewritten, but its current published form also notes that the exemption itself is suspended for merchandise arriving other than through the international postal network, pending a CBP determination that applying it is no longer inconsistent with the statute's purpose. Executive action in 2025 has already halted duty-free de minimis treatment in practice for the large majority of commercial import volume that used to rely on it.</p>

    <p>For document processing purposes, this matters in a very concrete way. The eligibility test, one person, one day, under $800, no order splitting, has not gone away as a piece of regulatory logic. It is still the framework CBP's own implementing rule describes, and it is the framework any system handling low-value shipment data needs to understand to interpret entry records correctly, distinguish legitimately exempt historical shipments from ones that should have been flagged, and be ready for whatever narrower version of the exemption, if any, survives past 2027. A team building or buying document intelligence for e-commerce shipment clearance in 2026 needs software that models the actual multi-part rule, not a hardcoded "$800, pass" check that was already technically incomplete even before the exemption was suspended.</p>

    <h2>Where this connects to broader entry and classification work</h2>

    <p>Section 321 eligibility does not operate in isolation from the rest of a customs entry. A shipment that fails the de minimis test does not just lose its duty-free status, it typically has to be reclassified under the correct <a href="/resources/blogs/hs-code-classification">HS code</a> and processed through the same kind of formal customs entry documentation covered in our piece on <a href="/resources/blogs/customs-entry-summary-processing">customs entry summary processing</a>, with duty calculated against the applicable tariff schedule rate rather than waived entirely. And because so much de minimis volume moves through parcel and small-package channels rather than full container loads, the underlying carrier manifest and <a href="/resources/blogs/advance-ship-notice-processing">advance ship notice</a> data that feeds the aggregation check is often the same data stream used for routine shipment tracking, meaning the identity-resolution logic built for Section 321 compliance frequently reuses infrastructure a logistics document pipeline already needs for other purposes.</p>

    <h2>What a compliant pipeline actually needs to do</h2>

    <p>Pulling this together, a document processing system built to handle high-volume, low-value e-commerce clearance correctly needs to do more than parse a value field. It needs consignee name and address normalization robust enough to resolve minor formatting variance, a same-day aggregation window keyed to the resolved identity rather than the raw text on any single shipment record, a check for shared order or contract references across shipments even when they arrive as separate documents, and awareness that entry type (informal versus formal) is itself part of the eligibility condition, not a downstream detail. None of that is exotic engineering. It is, however, meaningfully more than what a template built around "extract value, compare to $800" delivers, and that gap is exactly where the exemption was being exploited at scale before 2025, and exactly where the residual version of the rule, however it survives past 2027, will still need to be checked correctly.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-shipping-and-logistics-documents">OCR for shipping and logistics documents</a>.</p>
  `,
  image: "/images/ocr-in-finance.png",
  featuredImage: "/images/ocr-in-finance.png",
  category: "Logistics",
  date: "September 17, 2026",
  datePublished: "2026-09-17T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "section 321 de minimis processing",
  secondary_keywords: [
    "de minimis threshold customs",
    "19 CFR 10.151",
    "one person one day rule",
    "low value shipment clearance",
    "de minimis suspension 2025",
    "Section 321 entry eligibility",
  ],
  tags: ["logistics", "de minimis", "customs entry", "e-commerce shipping", "OCR", "shipping documents"],
  cluster: "logistics",
  faq: [
    {
      question: "What is the Section 321 de minimis threshold?",
      answer:
        "Section 321, codified at 19 U.S.C. Section 1321(a)(2)(C), authorizes duty-free entry for shipments with a fair retail value not exceeding $800, imported by one person on one day. The threshold was raised from $200 to $800 in 2016 under the Trade Facilitation and Trade Enforcement Act.",
    },
    {
      question: "Is Section 321 de minimis still in effect in 2026?",
      answer:
        "The statute and its implementing regulation, 19 CFR Section 10.151, remain on the books, but executive orders in 2025 suspended duty-free de minimis treatment in practice, first for China and Hong Kong shipments on May 2, 2025, then extended to all countries on August 29, 2025. Separate 2025 legislation schedules the statutory provision itself for repeal effective July 1, 2027.",
    },
    {
      question: "Why isn't declared value alone enough to determine de minimis eligibility?",
      answer:
        "19 CFR Section 10.151 requires three conditions together: value under $800, one person, and one day. It also disqualifies shipments that are part of a single order deliberately split into separate parcels to stay under the threshold. A system that checks only declared value implements roughly a third of the actual rule and cannot catch order-splitting.",
    },
    {
      question: "What does the one-person-one-day aggregation rule require in practice?",
      answer:
        "It requires tracking every shipment tied to the same resolved consignee identity within a single calendar day and summing their combined value, rather than evaluating each shipment record in isolation. This depends on matching names and addresses that are often formatted inconsistently across shipping labels and manifest records from the same buyer.",
    },
    {
      question: "How does order splitting defeat a simple de minimis value check?",
      answer:
        "A seller can divide one order that exceeds $800 into multiple parcels each individually valued under $800, so each one passes a per-shipment value check even though the combined order does not qualify. 19 CFR Section 10.151 explicitly disqualifies shipments that are lots from a single order forwarded separately to secure free entry, but catching this requires cross-shipment identity resolution, not just value extraction.",
    },
    {
      question: "What data does a document processing pipeline need to correctly apply Section 321 rules at scale?",
      answer:
        "It needs consignee name and address normalization to resolve minor formatting variance, a same-day aggregation window keyed to resolved identity rather than raw manifest text, detection of shared order or contract references across separate shipment records, and recognition that entry type, informal versus formal, is itself part of the eligibility test.",
    },
  ],
}
