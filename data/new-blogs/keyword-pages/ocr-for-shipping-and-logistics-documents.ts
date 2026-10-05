import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-24",
  title: "OCR for Logistics: What It Reads and Where It Fails (2026)",
  slug: "ocr-for-shipping-and-logistics-documents",
  excerpt:
    "OCR reads bills of lading, air waybills, customs forms, labels and delivery receipts well. What breaks is look-alike digits, handwriting and legal meaning, and this guide shows the check that catches each one.",
  description:
    "Which shipping, customs and freight documents OCR can read, what it extracts, where it goes wrong, and the check digits that catch a misread number.",
  metaTag: "OCR for Logistics: Documents It Reads and Where It Fails",
  summary:
    "OCR can read almost every shipping, customs and freight document: bills of lading, air waybills, invoices, customs forms, labels and delivery receipts. It fails on look-alike digits, handwriting and legal meaning, so pair it with check digits and cross-document matching.",
  content: `
    <p>One digit. That is all it takes for a container number or an air waybill to point at someone else's cargo, and a 3 and an 8 look alike on a faded carbon copy. OCR for logistics reads bills of lading, air waybills, commercial invoices, packing lists, customs forms and labels. The setups that hold up treat check digits and cross-document matching as part of the job. Below: a document map, worked check digits, and one ocean shipment in order.</p>

    <h2>Which shipping and customs documents can OCR read?</h2>

    <p>Almost all of them, because they are printed or typed forms. OCR (optical character recognition) turns the image into text, then a document model finds fields such as shipper, consignee, container number, weight and value. Reading the words is the easy part. Catching one wrong digit, and knowing what the words legally mean, needs checks outside the OCR engine.</p>

    <p>Take OCR for bills of lading: it reads parties, container and seal numbers, package counts, weight and cargo description. The risky field is the consignee box. On an order bill it often holds the words "to order of" a bank, not a name, and that wording decides who can claim the cargo. An extractor that treats the box as a name quietly turns a negotiable bill into a plain one. Our <a href="/resources/blogs/bill-of-lading-processing">bill of lading guide</a> explains the legal difference.</p>

    <h2>Document map: OCR for international shipping documents, field by field</h2>

    <p>The fourth column matters most: it is a test that turns an OCR misread into a visible error. Rows come from our logistics guides (linked below) and the sources at the end. Labels and vehicle registration have their own sections.</p>

    <table>
      <thead>
        <tr><th>Document</th><th>Issued by</th><th>Fields OCR must get right</th><th>Check that catches an error</th><th>Typical failure</th></tr>
      </thead>
      <tbody>
        <tr><td>Commercial invoice and packing list</td><td>Seller (invoice), shipper (packing list)</td><td>Parties, description, quantity, unit price, currency, origin; carton counts, weights, marks</td><td>Line totals add up; quantities match exactly; weights agree within a set tolerance</td><td>Same goods, no shared words between the two, so text matching fails</td></tr>
        <tr><td>Ocean bill of lading</td><td>Carrier (master), forwarder (house)</td><td>Parties, notify party, container and seal numbers, pieces, weight, "to order" wording, originals</td><td>Scan the consignee box for order or bearer wording; container check digit; house pieces sum to master</td><td>"To order of [bank]" read as a name; one count mismatch holding a whole container</td></tr>
        <tr><td>Air waybill</td><td>Airline (master), forwarder (house)</td><td>11-digit number, parties, pieces, weight</td><td>Modulo 7 on the 7-digit serial; prefix is a real airline code</td><td>0/7, 1/8 and 2/9 misreads still pass</td></tr>
        <tr><td>Dangerous goods declaration</td><td>Shipper</td><td>UN number (4-digit hazard ID), proper shipping name, class, packing group</td><td>Cross-check the UN number against the proper shipping name</td><td>UN1203 (gasoline) read as UN1230 (methanol), both valid</td></tr>
        <tr><td>Verified gross mass (VGM) declaration</td><td>Shipper</td><td>Verified gross mass, container number, method, signatory</td><td>Match container and booking to the shipping instruction</td><td>Correct weight rejected because the container would not match</td></tr>
        <tr><td>Certificate of origin</td><td>Exporter, producer or importer</td><td>Goods, HS (Harmonized System) number, origin rule claimed, signatory, date</td><td>Recompute the rule (regional value content or tariff shift)</td><td>Signed certificate treated as proof, not a claim</td></tr>
        <tr><td>Entry summary (CBP Form 7501)</td><td>Importer or licensed broker, filed with US Customs and Border Protection (CBP)</td><td>Entered value, HTS (US tariff) number, origin, duty</td><td>Entered value reconciles to the invoice after adjustments</td><td>Duty figured on the raw invoice total</td></tr>
        <tr><td>Customs power of attorney (CBP Form 5291)</td><td>Importer or other principal</td><td>Principal, agent, signer's authority, dates</td><td>In date (a partnership's runs 2 years at most), not revoked</td><td>Broker files on an expired power of attorney</td></tr>
        <tr><td>Proof of delivery</td><td>Driver, signed by receiver</td><td>PRO (carrier reference), bill of lading or load number, date, pieces, exceptions, signature</td><td>Match on reference number plus date, weight and lane</td><td>Reference number off by one digit, so the receipt attaches to nothing</td></tr>
        <tr><td>Freight invoice</td><td>Carrier</td><td>Base charge, weight and class, accessorials, fuel surcharge, total</td><td>Lines add up to the total; accessorials supported by the bill of lading</td><td>Total read, line items skipped</td></tr>
        <tr><td>Warehouse receipt</td><td>Warehouse</td><td>Depositor, goods, order or bearer wording, nonnegotiable legend</td><td>Look for order or bearer wording and a nonnegotiable legend in any phrasing</td><td>Non-negotiable receipt financed as if negotiable</td></tr>
      </tbody>
    </table>

    <p>Three failure patterns repeat.</p>

    <ul>
      <li>Look-alike digits. 3 and 8, 0 and 7, 1 and 8. Check digits catch most swaps, not all.</li>
      <li>Meaning and matching, not text. "To order of" wording, a nonnegotiable stamp or a signed certificate can be read perfectly and still be judged wrong, and a delivery receipt can be read correctly and still fail to join to its shipment.</li>
      <li>Handwriting and phone photos. Our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> measured character accuracy on handwritten forms at 61% (Tesseract), 73% (PaddleOCR) and 78% (DocsAPI, our product), and on phone-photographed receipts at 58%, 82% and 76%. It had no shipping documents, so read these as stand-ins.</li>
    </ul>

    <h2>How do check digits catch a misread container or air waybill number?</h2>

    <p>A check digit is computed from the other digits, so a misread usually breaks the math. Container numbers follow ISO 6346: 4 letters, 6 digits and 1 check digit, computed with powers of 2 and modulo 11 (the remainder after dividing by 11). Air waybills use an unweighted modulo 7 on a 7-digit serial. Run it right after OCR.</p>

    <p><strong>Container example.</strong> Take CSQU305438, the published ISO 6346 example. Letters become numbers (C is 13, S 30, Q 28, U 32; the table skips 11, 22 and 33). Multiply the ten values by 1, 2, 4, 8, 16, 32, 64, 128, 256 and 512. The products (13, 60, 112, 256, 48, 0, 320, 512, 768, 4096) sum to 6,185. Divide by 11 and the remainder is 3, so the full number is CSQU3054383.</p>

    <p>Now say OCR reads the 3 in the example number HLXU659347 as an 8. The correct check digit is 7, but the misread HLXU659847 needs a 9, so the printed 7 no longer fits and the error is caught at once. All 54 single-digit substitutions in the serial of CSQU305438 changed the result. Our <a href="/resources/blogs/container-number-verification">container number verification guide</a> has the full algorithm.</p>

    <p><strong>Air waybill example.</strong> Take AWB 020-5871748-1: prefix 020 (the airline), serial 5871748, check digit 1. The serial divided by 7 leaves 1, matching the printed check digit. If OCR reads the 4 as a 9 (5871798), the remainder becomes 2 and the number is flagged. If it reads the 1 as an 8 (5878748), the remainder is still 1 and the wrong number passes.</p>

    <p>Of all 63 single-digit substitutions on that serial, 58 are caught. The 5 misses are all swaps of digits 7 apart (0/7 or 1/8 here, 2/9 elsewhere), which change the number by a multiple of 7. Our <a href="/resources/blogs/air-waybill-verification">air waybill verification guide</a> covers the prefix check and the rest.</p>

    <p>The container check has a blind spot too: in a brute-force run over 3,000 random container numbers we generated, every missed single-digit serial error swung the remainder between 10 and 0, which both print as check digit 0. Neither check proves the number belongs to the right box or shipment, so match it against the booking or bill.</p>

    <p>Code we ran (Python 3, standard library only):</p>

    <pre><code>def iso6346_check(first10):
    values, v = {}, 10
    for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
        if v % 11 == 0:
            v += 1
        values[letter], v = v, v + 1
    total = sum((values[c] if c.isalpha() else int(c)) * 2 ** i
                for i, c in enumerate(first10))
    return total % 11 % 10

def awb_check(serial7):
    return int(serial7) % 7

for n in ("CSQU305438", "HLXU659347", "HLXU659847"):
    print(n, iso6346_check(n))
for s in ("5871748", "5871798", "5878748"):
    print(s, awb_check(s))</code></pre>

    <p>Output: 3, 7, 9, then 1, 2, 1, matching the hand arithmetic.</p>

    <h2>What does OCR for freight forwarders need to digitize on one ocean shipment?</h2>

    <p>For one ocean shipment into the US, digitize documents in the order they appear, because each is checked against the one before: shipping instructions, invoice and packing list, special-cargo papers, security filing data, container and VGM, house and master bills, letter of credit papers, customs entry, demurrage records, delivery receipt and freight invoice.</p>

    <p>This assumes the forwarder issues the house bill and the goods enter the US. Other lanes change the customs steps, not the logic.</p>

    <ol>
      <li>Shipping instructions and booking. These feed the bill of lading, so every later document is checked against them. <a href="/resources/blogs/incoterms-clause-extraction">Incoterms clause extraction</a> shows what the 11 Incoterms 2020 rules change and why FCA and FOB move risk at different points.</li>
      <li>Commercial invoice and packing list. Quantities must tie out even when descriptions share no words (19 CFR 141.86 lists what an invoice must state). <a href="/resources/blogs/packing-list-reconciliation">Packing list reconciliation</a> shows what to match on instead of text.</li>
      <li>Special-cargo and origin papers. A dangerous goods declaration if needed, a certificate of origin if a trade agreement is claimed. <a href="/resources/blogs/dangerous-goods-declaration-processing">Dangerous goods declaration processing</a> shows how a transposed UN number stays valid, and <a href="/resources/blogs/certificate-of-origin-verification">certificate of origin verification</a> shows the math behind a US-Mexico-Canada Agreement claim.</li>
      <li>Security filing (ISF) data. Due 24 hours before loading at the foreign port (19 CFR 149.2). Manufacturer, ship-to party, origin and the six-digit HTS number come off the invoice. <a href="/resources/blogs/hs-code-classification">HS code classification</a> explains why choosing the code is not a lookup.</li>
      <li>Container loading. Read the container number and seal, and run the check digit. The VGM must reach the carrier and terminal before loading. <a href="/resources/blogs/vgm-declaration-processing">VGM declaration processing</a> covers how a valid weight still gets a container rolled.</li>
      <li>House and master bills. Reconcile container, seal, total pieces and weight, and check negotiability on each layer. <a href="/resources/blogs/master-house-bill-of-lading-reconciliation">Master and house bill reconciliation</a> shows how one wrong piece count can hold an entire container.</li>
      <li>Letter of credit papers, if used. The bank checks documents, not goods. <a href="/resources/blogs/letter-of-credit-document-compliance">Letter of credit document compliance</a> walks through the UCP 600 (the letter of credit rulebook) 21-day presentation rule.</li>
      <li>Customs entry. CBP Form 3461 requests release, and the entry summary (Form 7501) follows within ten working days. <a href="/resources/blogs/customs-entry-summary-processing">Entry summary processing</a> covers the fields that set duty, and <a href="/resources/blogs/customs-power-of-attorney-processing">customs power of attorney processing</a> explains why a partnership's lapses after two years.</li>
      <li>Container pickup and return. Gate records and hold codes decide who owes demurrage and detention. <a href="/resources/blogs/demurrage-detention-documentation">Demurrage and detention documentation</a> lists the records that prove the timeline.</li>
      <li>Delivery. <a href="/resources/blogs/proof-of-delivery-processing">Proof of delivery processing</a> shows how a receipt with a misread PRO number still matches on date, weight and lane.</li>
      <li>Billing. Carrier invoices carry accessorial charges (extras such as liftgate or detention) the bill of lading may not authorize. <a href="/resources/blogs/freight-invoice-automation">Freight invoice automation</a> covers EDI 210, and <a href="/resources/blogs/freight-bill-audit-automation">freight bill audit automation</a> covers the overcharges an audit catches and the 180-day dispute window.</li>
    </ol>

    <h2>How does OCR for customs forms work, and who decides the classification?</h2>

    <p>Customs is where a confident wrong answer costs real money, so it is also where OCR should be most modest. OCR reads customs forms and the papers behind them. It does not decide what the goods are, what they are worth for duty, or whether an origin claim holds. In the US, entries are typically filed electronically in ACE (CBP's Automated Commercial Environment), so OCR mostly reads the invoices, bills and certificates the filing is built from.</p>

    <p>Three forms to know: CBP Form 3461 (Entry/Immediate Delivery), Form 7501 (the entry summary) and Form 5291 (the customs power of attorney). On the 7501, get entered value right, not the invoice total: it starts from the invoice, removes non-dutiable charges such as international freight and insurance, and adds dutiable items such as assists.</p>

    <p>The importer of record is legally responsible for the entry summary, including the classification and value it states, even when a licensed broker files it. And 19 CFR 111.1 defines customs business to include preparing documents intended for CBP, "whether or not signed or filed by the preparer." Reading text off an invoice is one thing. Deciding classification or value for someone else's filing may raise the licensed-broker question. This is not legal advice, so ask a licensed customs broker or trade counsel.</p>

    <p>For small parcels, the duty-free de minimis rules changed in 2025. Our <a href="/resources/blogs/section-321-de-minimis-processing">Section 321 guide</a> explains what changed and why order splitting is hard to spot.</p>

    <h2>Does OCR for shipping labels replace barcode scanning?</h2>

    <p>No. Read the barcode first and use OCR for what it does not carry. A barcode gives you a tracking number or pallet code with a built-in check digit. OCR is for the printed ship-to address, reference lines, and labels whose barcode is torn, faded or missing.</p>

    <p>A UPS MaxiCode symbol (a 2D barcode) carries the postal code, country code and service class in its structured part, so the street address and recipient name usually still come from printed text. Pallet and carton labels in the GS1 system carry an SSCC (Serial Shipping Container Code): 18 digits made of an extension digit, company prefix, serial reference and check digit.</p>

    <p>The SSCC check digit is modulo 10. Take the 17-digit base 12345678901234567 and multiply digits from the right by 3, 1, 3, 1 and so on. The products sum to 155, and (10 minus 155 mod 10) mod 10 is 5, giving 123456789012345675, which matches a published example. At the dock, a scanned SSCC is matched to the advance ship notice, and a broken match sends the carton to manual exceptions (see our <a href="/resources/blogs/advance-ship-notice-processing">advance ship notice guide</a>). If the barcode will not scan, OCR the digits printed under it and run the same check.</p>

    <h2>Can OCR for vehicle registration read a VIN reliably?</h2>

    <p>Yes for the printed fields, with a check. OCR can read the VIN, plate, make, year, owner and expiry date from a registration card. In North America the VIN's ninth character is a check digit, so most misreads fail the math. OCR cannot tell you a registration is current or genuine. Only the issuing agency can.</p>

    <p>It comes up when carriers register trucks and when vehicles are shipped. Layouts differ by state and country, so test per issuer. A VIN has 17 characters and never contains I, O or Q (49 CFR 565), so any of those in OCR output is a misread: an O is almost certainly a 0, an I a 1.</p>

    <p>The check digit sits at position 9. Convert letters with the table in 49 CFR 565.15, multiply each position by its weight (8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2), add, and divide by 11. The remainder is the check digit, with 10 written X. For the example VIN 1M8GDM9AXKP042788 the sum is 351, 351 divided by 11 leaves 10, and the ninth character is X. The check is compulsory in North America and China but not Europe, so do not reject a European VIN for failing it. Registrations carry the owner's name and address, so treat the images as personal data.</p>

    <h2>Does OCR for warehouses replace barcode scanners?</h2>

    <p>No. Barcode scanners and EDI already cover structured data. OCR earns its place on paper and PDFs that arrive from outside: packing slips, bills of lading, delivery receipts and warehouse receipts. It struggles with handwriting and unfamiliar formats, so plan human review for low-confidence fields.</p>

    <p>OCR for supply chain work splits by format. If a partner sends EDI (electronic data interchange), such as an advance ship notice (856), carrier status message (214) or freight invoice (210), the data is already structured, so parse it instead of running OCR. Our <a href="/resources/blogs/shipment-status-edi-processing">EDI 214 guide</a> shows why status code D1 does not always mean delivered. OCR is for suppliers who still send paper or PDFs.</p>

    <p>Warehouse receipts need one extra check: a negotiable receipt (order or bearer wording) transfers the right to the goods by endorsement and a non-negotiable one does not, which matters to any inventory lender. See our <a href="/resources/blogs/warehouse-receipt-processing">warehouse receipt guide</a>.</p>

    <p>OCR for shipping companies (carriers, truckers, parcel firms) hits the same wall. Printed bills of lading read easily, handwritten delivery receipts do not, and the bigger bottleneck is joining each receipt to one shipment. Pallet, a vendor selling an AI product for freight documents, argues template-based OCR breaks on format variety, and its author describes a mid-sized carrier needing 500 bill of lading templates. Read that as one vendor's view, and test any tool on your own documents.</p>

    <h2>Where to start on your shipments</h2>
    <p>Begin with the numbers that carry check digits. That accuracy is free.</p>

    <ul>
      <li><strong>Freight forwarder or NVOCC (a non-vessel-operating carrier that issues house bills):</strong> start with shipping instructions, house and master bills and the container check digit.</li>
      <li>Carrier, trucker or parcel company: fix delivery receipt matching and freight invoice lines first, because those drive payment.</li>
      <li>Warehouse operator: keep barcodes for labels and pallets, and point OCR at supplier packing slips and driver paperwork.</li>
      <li>Trade or inventory lender: classify negotiable versus non-negotiable wording first, then see <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a>.</li>
      <li>Choosing a tool: score field-level accuracy on your own sample (see <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>), and ask whether it validates container and air waybill numbers or only reads them.</li>
    </ul>

    <p>To try your own files, DocsAPI (our product) lists bills of lading, proofs of delivery and packing lists on its <a href="/documents/shipping-docs">shipping documents page</a>. We have not tested any vendor's shipping tools for this page.</p>

    <h2>Sources</h2>

    <p>We checked these on September 21, 2026.</p>

    <ul>
      <li><a href="https://en.wikipedia.org/wiki/ISO_6346">ISO 6346 (Wikipedia)</a>: code structure, check digit steps and the CSQU305438 example. The paid ISO standard itself was not available to us.</li>
      <li><a href="https://dgautocheck.iata.org/help/AirWaybillnumbervalidation.html">IATA DG AutoCheck</a>: the 11-digit air waybill format and unweighted modulus 7.</li>
      <li><a href="https://www.law.cornell.edu/cfr/text/49/565.15">49 CFR 565.15</a> and <a href="https://en.wikipedia.org/wiki/Vehicle_identification_number">VIN (Wikipedia)</a>: VIN check digit rules, excluded letters, and where the check is compulsory.</li>
      <li><a href="https://www.law.cornell.edu/cfr/text/19/141.86">19 CFR 141.86</a>, <a href="https://www.law.cornell.edu/cfr/text/19/149.2">149.2</a>, <a href="https://www.law.cornell.edu/cfr/text/19/111.1">111.1</a>, <a href="https://www.cbp.gov/document/forms/form-3461-entryimmediate-delivery-ace">CBP Form 3461</a> and <a href="https://www.law.cornell.edu/cfr/text/15/30.37">15 CFR 30.37</a>: invoice contents, ISF timing, customs business, the entry form and the export filing exemption.</li>
      <li><a href="https://en.wikipedia.org/wiki/MaxiCode">MaxiCode</a>, <a href="https://en.wikipedia.org/wiki/Serial_Shipping_Container_Code">SSCC</a> and <a href="https://www.barcoderesource.com/sscc_gtin_mod10.shtml">a published SSCC example</a>. The GS1 specification returned an access error, so we checked our modulo 10 code against that example.</li>
      <li><a href="https://www.pallet.com/blog/why-ocr-systems-break">Pallet, why OCR systems break</a>: one vendor's account of template OCR problems.</li>
    </ul>

    <p>Limits: apart from the published examples, the numbers used for arithmetic are made up, and the brute-force counts are our own runs, not industry statistics. US rules (CBP, ACE) shape the customs parts, and other countries differ. Nothing here is legal or customs advice. Facts about each document type come from the 21 logistics guides linked above, which cite their own sources.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "Logistics",
  date: "October 5, 2026",
  datePublished: "2026-10-05T00:00:00.000Z",
  dateModified: "2026-10-05T00:00:00.000Z",
  last_updated: "October 5, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "OCR for logistics",
  secondary_keywords: [
    "ocr for bills of lading",
    "ocr for shipping labels",
    "ocr for customs forms",
    "ocr for vehicle registration",
    "ocr for shipping companies",
    "ocr for freight forwarders",
    "ocr for supply chain",
    "ocr for warehouses",
    "ocr for international shipping documents",
  ],
  tags: [
    "logistics",
    "OCR",
    "shipping documents",
    "freight forwarding",
    "customs",
    "bill of lading",
    "supply chain",
    "warehouse",
  ],
  cluster: "logistics",
  faq: [
    {
      question: "How accurate is OCR on bills of lading and other shipping documents?",
      answer:
        "We found no independent public benchmark for shipping documents, and vendor figures are usually measured on the vendor's own samples. Our own benchmark has no shipping documents either. Accuracy depends on scan quality, handwriting and format variety, so score field-level accuracy on a sample of your own documents and count the errors that reach downstream systems, not just characters read.",
    },
    {
      question: "How do I test an OCR tool on my own shipping documents?",
      answer:
        "Collect a sample of real documents for each type, including the ugly ones: handwritten delivery receipts, faxes and phone photos. Label the correct values by hand for the fields that matter, such as container number, consignee and weight. Score each field as right or wrong, and report accuracy per field and per document type. Also count how many wrong values your check digits and matching rules catch.",
    },
    {
      question: "Do I still need a licensed customs broker if OCR fills in my customs forms?",
      answer:
        "OCR does not change who may file. Under 19 CFR 111.1, customs business includes preparing documents intended to be filed with CBP, whether or not the preparer signs or files them, and the importer of record stays responsible for the entry summary. Where a tool's role ends and a broker's begins is a legal question, so ask a licensed customs broker or trade counsel.",
    },
    {
      question: "Should I use template-based OCR or an AI model for shipping documents?",
      answer:
        "Templates work when you see a few stable formats, because coordinates and labels rarely change. They struggle when many carriers and forwarders send different layouts, since each new layout needs setup and upkeep. AI models handle layout variety better but can read a wrong digit with full confidence. With either, add validation such as check digits, and route low-confidence fields to a person.",
    },
    {
      question: "Is a house air waybill number checked the same way as a master air waybill?",
      answer:
        "Not necessarily. A master air waybill is issued by the airline and carries a real IATA prefix, so the modulo 7 check applies. A house air waybill comes from the forwarder's own numbering block and need not follow the 3-plus-7-plus-1 structure. Confirm which type you have before applying the check, or you may reject a legitimate house number.",
    },
    {
      question: "Which extra document does a US export need?",
      answer:
        "Exporters or their forwarders file Electronic Export Information (EEI) in the Automated Export System. Shipments valued at $2,500 or less per Schedule B number, from one U.S. principal party in interest to one ultimate consignee on a single conveyance, are generally exempt under 15 CFR 30.37(a), but license requirements and other rules can still force a filing. Check the current Census Foreign Trade Regulations before relying on the exemption.",
    },
    {
      question: "What is the difference between an SSCC and a tracking number?",
      answer:
        "An SSCC (Serial Shipping Container Code) is an 18-digit GS1 code that identifies a logistics unit such as a pallet or carton, and it ends in a modulo 10 check digit. A tracking number is assigned by a carrier to follow a shipment, and formats vary by carrier. A label can carry both, so software should read the barcode type before deciding what a number means.",
    },
    {
      question: "Can OCR tell whether a shipping document is genuine?",
      answer:
        "No. OCR reads what is printed. A check digit can show that a number was misread, but a forged document can carry perfectly valid numbers: a real waybill serial paired with a made-up airline prefix passes the modulo 7 test. Genuineness needs checks against the issuer, the carrier's own records or the other documents in the shipment.",
    },
    {
      question: "Do I need OCR for documents that already arrive as EDI?",
      answer:
        "Usually not. EDI messages such as the 856 advance ship notice, the 214 status message and the 210 freight invoice are already structured, so you parse the fields directly. Use OCR for the partners who send paper, scans, PDFs or photos. If some partners send EDI and others send paper, you will need both, and you should reconcile the two streams against each other.",
    },
  ],
}
