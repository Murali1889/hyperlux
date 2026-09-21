import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-16",
  title: "OCR for Passports, ID Cards and Licenses: Formats and Limits",
  slug: "ocr-for-passports-id-cards-and-drivers-licenses",
  excerpt:
    "How OCR reads a passport, an ID card or a driver's license, what data each one gives you, and how far you can trust it. Includes the ICAO and AAMVA format tables and a worked check-digit example we recomputed.",
  description:
    "Passports and most ID cards carry an MRZ that OCR reads and checks with check digits. US licenses carry a PDF417 barcode. Formats, a worked example, limits.",
  metaTag: "OCR for Passports, ID Cards and Licenses (2026 Guide)",
  summary:
    "OCR reads a passport or most ID cards from the machine readable zone (MRZ), 2 or 3 lines of text it can verify with check digits. US driver's licenses carry a PDF417 barcode. Everything else falls back to printed text, which has no built-in check.",
  content: `
    <p>Passports and most ID cards carry a machine readable zone (MRZ): fixed-width lines of text that OCR reads and checks with check digits. US driver's licenses carry a PDF417 barcode with the same kind of data in a standard layout. Anything else, birth certificates included, is read as plain printed text, which is less reliable. Below: formats, a worked example, and fixes for bad captures.</p>

    <h2>How does OCR read a passport, ID card or driver's license?</h2>

    <p>It reads the most reliable machine-readable part first: the MRZ on passports and most ID cards, the PDF417 barcode on US and Canadian licenses. It verifies that data with check digits or barcode error correction, then compares it with the printed text. Documents with neither fall back to printed text alone.</p>

    <table>
      <thead><tr><th>Source</th><th>Found on</th><th>Built-in check</th></tr></thead>
      <tbody>
        <tr><td>MRZ</td><td>Passport data page, ID cards</td><td>Check digits</td></tr>
        <tr><td>PDF417 barcode</td><td>Back of US and Canadian licenses</td><td>Barcode error correction</td></tr>
        <tr><td>Chip</td><td>Most passports, EU ID cards since 2021</td><td>Issuer's digital signature</td></tr>
        <tr><td>Printed text (visual inspection zone, VIZ)</td><td>Every document</td><td>None</td></tr>
      </tbody>
    </table>

    <p>OCR for ID cards therefore means several reads, not one. Strictly, a barcode is decoded rather than OCRed and a chip is read over NFC, but ID products commonly combine them. The MRZ is printed in OCR-B, a typeface ICAO specifies for machine reading, using only capital letters, digits and a filler character. Trust the sources that check themselves, and use the printed text to cross-check them.</p>

    <h2>Format spec: MRZ layouts and the AAMVA barcode</h2>

    <p>This section comes from the standards themselves: ICAO Doc 9303 (8th edition, 2021) and the 2025 AAMVA DL/ID Card Design Standard. The second table shows what data each document gives you and where it sits. Positions count from 1.</p>

    <table>
      <thead><tr><th>Format</th><th>Used for</th><th>Layout</th><th>Source</th></tr></thead>
      <tbody>
        <tr><td>TD3</td><td>Passports and booklets</td><td>2 lines x 44 characters</td><td>Doc 9303 Part 4</td></tr>
        <tr><td>TD1</td><td>ID cards, bank-card size</td><td>3 lines x 30 characters</td><td>Doc 9303 Part 5</td></tr>
        <tr><td>TD2</td><td>Some other official documents</td><td>2 lines x 36 characters</td><td>Doc 9303 Part 6</td></tr>
        <tr><td>AAMVA PDF417</td><td>US and Canadian licenses and ID cards</td><td>Header, subfile index, 3-letter element codes</td><td>AAMVA 2025, Annex D</td></tr>
      </tbody>
    </table>

    <table>
      <thead><tr><th>Field</th><th>Passport MRZ (TD3)</th><th>ID card MRZ (TD1)</th><th>US license barcode</th></tr></thead>
      <tbody>
        <tr><td>Name</td><td>Line 1, 6 to 44</td><td>Line 3, 1 to 30</td><td>DCS family, DAC first, DAD middle</td></tr>
        <tr><td>Document number</td><td>Line 2, 1 to 9, check digit at 10</td><td>Line 1, 6 to 14, check digit at 15</td><td>DAQ, up to 25 characters</td></tr>
        <tr><td>Date of birth</td><td>Line 2, 14 to 19, check digit at 20</td><td>Line 2, 1 to 6, check digit at 7</td><td>DBB</td></tr>
        <tr><td>Date of expiry</td><td>Line 2, 22 to 27, check digit at 28</td><td>Line 2, 9 to 14, check digit at 15</td><td>DBA</td></tr>
        <tr><td>Sex, nationality</td><td>Line 2, 21 and 11 to 13</td><td>Line 2, 8 and 16 to 18</td><td>DBC, DCG</td></tr>
        <tr><td>Address, height, eye color</td><td>Not in the MRZ</td><td>Not in the MRZ</td><td>DAG, DAI, DAJ, DAK, DAU, DAY</td></tr>
        <tr><td>Composite check digit</td><td>Line 2, 44</td><td>Line 2, 30</td><td>None</td></tr>
      </tbody>
    </table>

    <p>Dates are YYMMDD in an MRZ, MMDDCCYY in a US barcode and CCYYMMDD in a Canadian one. Date of issue (DBD in the barcode), issuing authority, place of birth and the signature are printed on a passport but are not in its MRZ (Part 4). Three rules trip up parsers most often:</p>

    <ul>
      <li>The filler (&lt;) pads unused positions and counts as 0 in a check digit.</li>
      <li>In names, a double filler separates surname from given names. Apostrophes are dropped, hyphens become fillers and accents are not allowed, so D'ARTAGNAN prints as DARTAGNAN and MARIE-ELISE as MARIE&lt;ELISE.</li>
      <li>On a TD1 card, a document number over 9 characters puts a filler at position 15 and continues in the optional data field.</li>
    </ul>

    <h2>How do MRZ check digits work, with a real example?</h2>

    <p>Each protected field gets one check digit. Turn letters into 10 to 35 (A is 10, Z is 35) and the filler into 0. Multiply each value by a repeating 7, 3, 1 pattern, add the products and keep the remainder after dividing by 10. If OCR misreads a character, the digit almost always stops matching.</p>

    <p>The example is the specimen passport in ICAO Doc 9303 Part 3. Its lower line is <code>L898902C36UTO7408122F1204159ZE184226B&lt;&lt;&lt;&lt;&lt;10</code>. Take the birth date, 740812:</p>

    <table>
      <thead><tr><th>Digit</th><th>7</th><th>4</th><th>0</th><th>8</th><th>1</th><th>2</th></tr></thead>
      <tbody>
        <tr><td>Weight</td><td>7</td><td>3</td><td>1</td><td>7</td><td>3</td><td>1</td></tr>
        <tr><td>Product</td><td>49</td><td>12</td><td>0</td><td>56</td><td>3</td><td>2</td></tr>
      </tbody>
    </table>

    <p>The products add up to 122, which leaves 2, and the line prints a 2 after the date. The document number L898902C3 (L is 21, C is 12) sums to 316, digit 6. The expiry date sums to 49 (digit 9), the personal number to 401 (digit 1) and the 39-character composite (positions 1 to 10, 14 to 20 and 22 to 43) to 880 (digit 0). All five match. The same arithmetic in Python 3, plus a repair step:</p>

    <pre><code>def check_digit(field):
    values = [0 if ch == "&lt;" else int(ch, 36) for ch in field]   # A=10 ... Z=35, filler=0
    return sum(v * (7, 3, 1)[i % 3] for i, v in enumerate(values)) % 10

line2 = "L898902C36UTO7408122F1204159ZE184226B&lt;&lt;&lt;&lt;&lt;10"
print("birth date", check_digit(line2[13:19]), "printed", line2[19])
composite = line2[0:10] + line2[13:20] + line2[21:43]
print("composite", check_digit(composite), "printed", line2[43])

LOOKALIKE = dict(zip("O0I1B8S5Z2", "0O1I8B5S2Z"))

def repair(field, printed_digit):
    fixes = []
    for i, c in enumerate(field):
        if c in LOOKALIKE:
            candidate = field[:i] + LOOKALIKE[c] + field[i + 1:]
            if check_digit(candidate) == int(printed_digit):
                fixes.append(candidate)
    return fixes

print(repair("L8989O2C3", "6"))                            # 0 misread as the letter O
print(check_digit("G12345678"), check_digit("612345678"))  # G and 6 look the same to the math</code></pre>

    <p>Output when we ran it: <code>birth date 2 printed 2</code>, <code>composite 0 printed 0</code>, <code>['L898902C3']</code>, then <code>6 6</code>.</p>

    <p>Brute force shows what the digit misses. Any single wrong digit is caught (7, 3 and 1 share no factor with 10): none of the 54 single-digit changes to the birth date slips through. But a letter and a digit whose values differ by a multiple of 10 look identical, such as G (16) and 6, S (28) and 8, or the filler and K (20). And neighbouring digits that differ by 5 can swap unnoticed: the dates 500115 and 050115 both give 0.</p>

    <p>Passing check digits do not prove a passport is real, because a forger can compute them. Our <a href="/resources/blogs/mrz-passport-verification">MRZ passport verification post</a> walks through a tampered date. The chip is stronger: its data is signed by the issuing country, and software can verify the signature (ICAO Part 11 calls it passive authentication).</p>

    <h2>How do UK, European, national and birth documents differ?</h2>

    <p>UK passports and European ID cards follow ICAO formats, so the MRZ method works the same way. Other national IDs vary by country: some carry an MRZ, a barcode or a QR code, some only printed text. Birth certificates have no global standard, so OCR reads them as plain text with variable results.</p>

    <h3>OCR for UK passports</h3>

    <p>A British passport is a standard TD3 passport, so the 2 x 44 MRZ and check digits above apply. The Home Office says four passport styles (issued 2006, 2010, 2015 and 2020) are valid at once, so the printed page varies while the MRZ does not: read the MRZ first. Standard British citizen passports use the issuing state code GBR, but ICAO lists other codes for other British categories, such as GBD (Overseas Territories citizen) and GBN (National Overseas). Recent UK passports have a chip, which the Home Office says needs the MRZ details to scan.</p>

    <h3>OCR for European ID cards</h3>

    <p>Since 2 August 2021, EU Regulation 2019/1157 requires new national ID cards to be ID-1 size, carry an MRZ that follows ICAO Doc 9303 (Part 5, the TD1 layout) and hold a contactless chip with a face image and two fingerprints. Older cards linger: Article 5 lets cards that do not meet the rules stay valid until they expire or 3 August 2031, whichever is earlier, and set 3 August 2026 as the last day for cards without a functional MRZ, so expect mixed generations.</p>

    <h3>OCR for national ID cards</h3>

    <p>There is no single national ID format, so start by asking what machine-readable data the card carries. Three cases are worth separating:</p>

    <ol>
      <li>An ICAO-style MRZ, as on every current EU card: read it and verify the check digits.</li>
      <li>A code the issuer signs. India's Aadhaar secure QR code holds demographic details and a photograph and is digitally signed by UIDAI.</li>
      <li>Printed text only: OCR with a per-country layout plus any rule the number has. Spain's DNI ends in a control letter, the remainder of the 8-digit number divided by 23 looked up in TRWAGMYFPDXBNJZSQVHLCKE. The Interior Ministry's example, 12345678, leaves 14, which gives Z (we recomputed it).</li>
    </ol>

    <p>Date order also differs by country (see our <a href="/resources/blogs/kyc-document-expiry-automation">KYC document expiry post</a>), and some documents use other calendars, such as the Japanese era and Thai solar calendars Regula lists. Our <a href="/resources/blogs/national-id-verification-ocr">national ID verification OCR post</a> covers when per-country layouts are still needed.</p>

    <h3>OCR for birth certificates</h3>

    <p>Expect the least standard, least checkable document here: no MRZ, no barcode standard, no photo. The CDC says US standard certificate forms are developed and recommended for state use, and certified copies come from state or territory vital records offices, so layouts differ between issuers and over time. CIEC Convention No. 16 defines a multilingual standard extract for birth records, but only 21 states are bound by it.</p>

    <p>OCR for birth certificates is therefore plain printed-text reading, and accuracy varies with layout, print quality and, on older records, handwriting. Our benchmark had no birth certificates, but on handwritten forms of mixed neatness engines scored 61% to 78% (<a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>). Confirm anything important with the issuing registry. Insurance cards share the problem (see <a href="/resources/blogs/insurance-card-ocr">insurance card OCR</a>).</p>

    <h2>How does OCR for US driver's license cards work?</h2>

    <p>OCR for driver's license cards should start with the PDF417 barcode on the back. On a US card that follows the AAMVA standard, it holds name, birth date, license number, address and expiry in fixed 3-letter fields, whatever the state's design. Use the printed front as a cross-check, not the primary source.</p>

    <p>AAMVA's 2025 standard makes PDF417 the minimum machine-readable technology on compliant cards, and says some estimates put valid card designs among its members well above 200, so reading the printed side across states is hard. The codes are in the table above. Before you parse one:</p>

    <ul>
      <li>The data stream starts with @, a line feed, a record separator, a carriage return and ANSI, then the issuer's 6-digit ID number and a version (00 to 11). Many jurisdictions still issue 2020-edition cards, so read the version first.</li>
      <li>A mandatory element with no data is written NONE (or unavl).</li>
      <li>The standard requires the data to be unencrypted and does not require a signature on it, so a fake card can often carry a matching barcode. Barcode-versus-print matching catches careless edits, not a well-made fake.</li>
      <li>The barcode address is what the issuer holds. Whether it counts as proof of address is a policy question, see our <a href="/resources/blogs/proof-of-address-verification">proof of address verification post</a>.</li>
    </ul>

    <h2>What do you do when the MRZ is damaged or the photo has glare?</h2>

    <p>Recompute the check digits first, because they tell you which fields failed. Try the usual look-alike characters (0 and O, 1 and I, 8 and B, 5 and S, 2 and Z) and accept a fix only if exactly one version passes. If that fails, cross-check the printed page, read the chip, or ask for a new photo.</p>

    <ol>
      <li>Check each field's digit and the composite. One failing field suggests a local misread. Several suggest glare, blur or a crop.</li>
      <li>Fix by field type. A letter O inside a date can only be a 0. For alphanumeric fields, apply look-alike swaps and keep a fix only if exactly one candidate passes (the repair function above). Otherwise, or if the printed page disagrees, a person should look.</li>
      <li>If the passport has a chip, read it over NFC. Its key comes from the MRZ document number, birth date and expiry date (ICAO Part 11), which can be typed in, and some passports print a 6-digit card access number that opens it without the MRZ.</li>
      <li>Otherwise ask for a new capture and say why, or send the case to a person with the image and the failed field.</li>
    </ol>

    <p>Glare mostly comes from laminated surfaces, and <a href="https://regulaforensics.com/blog/drivers-license-ocr/">Regula</a> lists it among its driver's license pitfalls. At capture, tilt the card until the reflection leaves the text and keep both ends of the MRZ in frame. Each MRZ line has a known length (44, 30 or 36 characters), so a short line means a cropped or blurred capture, not a strange document.</p>

    <h2>How reliable is OCR on identity documents, and what is the best tool?</h2>

    <p>On a clean capture, MRZ and barcode reads are dependable and self-checking, because failures show up as bad check digits or unreadable symbols. Printed text is less reliable and has no built-in check. No trustworthy universal accuracy figure exists for IDs, so test tools on your own captures instead of trusting a vendor number.</p>

    <h3>How reliable is it, in numbers?</h3>

    <p>We have no ID-document benchmark of our own, but our 1,900-document benchmark shows what a bad capture costs: phone-photographed receipts scored 58% to 82% across engines, against 97 to 99% on clean typed English. IDs are not receipts, so read that as a warning about capture quality, not a forecast.</p>

    <p>Vendor figures are claims. Mindee's page says accuracy is generally above 95% for most fields and Veryfi's says 99.4%. Neither states its test set, so they cannot be compared. The PassportEye README says it recognizes a clearly visible MRZ in around 80% of cases, mostly failing on badly blurred scans. Our guide to <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> shows how to run your own test.</p>

    <p>OCR also does not decide whether the document is genuine, whether the holder is the person presenting it, or whether the identity is real. Those are separate checks: <a href="/resources/blogs/liveness-detection-kyc">liveness detection</a>, <a href="/resources/blogs/biometric-face-match-kyc">biometric face match</a> and <a href="/resources/blogs/synthetic-identity-fraud-detection">synthetic identity signals</a>.</p>

    <h3>What is the best OCR for verifying passports?</h3>

    <p>There is no single best one. Look for a tool that classifies TD1 versus TD3 first, reads the MRZ, validates every check digit, reports which field failed and compares with the printed page. Then run 3 or 4 candidates on 20 to 50 of your own worst captures and compare MRZ pass rate and field errors. Our <a href="/resources/blogs/passport-ocr-revolutionizing-identity-verification-with-automated-data-extraction">passport OCR guide</a> covers testing vendors on your own applicant mix.</p>

    <h3>What tool can extract data from ID cards automatically?</h3>

    <p>Several cloud APIs and open-source libraries do. This table lists what each vendor page states, checked on 21 September 2026.</p>

    <table>
      <thead><tr><th>Tool</th><th>What its page says</th></tr></thead>
      <tbody>
        <tr><td><a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/id-document?view=doc-intel-4.0.0">Azure AI Document Intelligence</a>, ID model (v4.0)</td><td>Passport books and cards worldwide. Driver licenses and IDs for the US, India, Australia and other regions.</td></tr>
        <tr><td><a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-identity.html">Amazon Textract</a>, AnalyzeID</td><td>Passports, driver licenses and other IDs issued by the US Government.</td></tr>
        <tr><td><a href="https://www.veryfi.com/drivers-license-ocr-api/">Veryfi</a> driver's license API</td><td>All 50 US states, federal and UK IDs. Decodes the PDF417 barcode.</td></tr>
        <tr><td><a href="https://www.mindee.com/product/international-id-ocr-api">Mindee</a> international ID API</td><td>National IDs, residence permits, voter cards. Returns the raw MRZ string.</td></tr>
        <tr><td><a href="https://github.com/konstantint/PassportEye">PassportEye</a> (open source, MIT)</td><td>Recognizes the MRZ in scanned IDs. Needs Tesseract.</td></tr>
      </tbody>
    </table>

    <h2>How should you handle privacy and retention?</h2>

    <p>Read only the fields you need, store extracted fields and check results rather than raw images unless a rule requires them, and delete the rest on a schedule. This is not legal advice: rules differ by country and state, so your compliance team should set retention. Three examples show why.</p>

    <ul>
      <li>EU: GDPR Article 5 asks for data minimisation and storage limitation, while Directive (EU) 2015/849 Article 40 requires customer due diligence copies to be kept for 5 years after the relationship ends, with national law setting the details. Keep what the rule requires, delete the rest.</li>
      <li>Face images: matching a selfie to the ID photo is biometric processing, a special category under GDPR Article 9 when it identifies a person uniquely.</li>
      <li>US: California Civil Code 1798.90.1 lists the reasons a business may scan a DMV-issued license and bars retaining or using the data for other purposes.</li>
    </ul>

    <p>Our <a href="/resources/blogs/kyc-document-verification">KYC document verification post</a> covers what auditors look for, and our <a href="/resources/blogs/know-your-customer-documents">know your customer documents playbook</a> covers which documents to accept.</p>

    <h2>What to do next</h2>

    <ul>
      <li>Passports and EU ID cards: read the MRZ, verify every check digit, and add a chip read if you can.</li>
      <li>US driver's licenses: decode the PDF417 first, compare with the printed text, and send a mismatch to review.</li>
      <li>National IDs and birth certificates: list the formats you actually receive, find out what machine-readable data each carries, and route unknown ones to a person.</li>
      <li>Choosing a tool: test on your own captures. Our <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification guide</a> covers the wider onboarding flow.</li>
      <li>To try extraction on these documents with our API, see <a href="/documents/identity-docs">identity document extraction</a>. DocsAPI is our product and our public manifest lists KYC document verification for passports, driver's licenses and IDs. We have not published an ID accuracy benchmark, so test it as you would any other tool.</li>
    </ul>

    <h2>Sources and how we checked this</h2>

    <p>We read the standards and laws themselves, recomputed ICAO's examples, and rebuilt AAMVA's sample barcode data in Python (278 bytes, the length its own header declares, every field parsed as printed).</p>

    <ul>
      <li>ICAO Doc 9303, 8th edition: <a href="https://www.icao.int/sites/default/files/publications/DocSeries/9303_p3_cons_en.pdf">Part 3</a>, <a href="https://www.icao.int/sites/default/files/publications/DocSeries/9303_p4_cons_en.pdf">Part 4</a>, <a href="https://www.icao.int/sites/default/files/publications/DocSeries/9303_p5_cons_en.pdf">Part 5</a>, <a href="https://www.icao.int/sites/default/files/publications/DocSeries/9303_p6_cons_en.pdf">Part 6</a>, <a href="https://www.icao.int/sites/default/files/publications/DocSeries/9303_p11_cons_en.pdf">Part 11</a>.</li>
      <li><a href="https://www.aamva.org/getmedia/81af105d-8b1b-45e1-aa46-f1800a259ed1/AAMVADLIDCardDesignStandard2025.pdf">AAMVA DL/ID Card Design Standard, 2025</a>.</li>
      <li>EU law: <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R1157">Regulation 2019/1157</a>, <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015L0849">Directive 2015/849</a>, <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679">GDPR</a>. US: <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&amp;sectionNum=1798.90.1">California Civil Code 1798.90.1</a>.</li>
      <li>UK Home Office: <a href="https://www.gov.uk/government/publications/recognising-fraudulent-identity-documents/guidance-on-examining-identity-documents-accessible">guidance on examining identity documents</a> (updated 15 July 2025) and its <a href="https://design.homeoffice.gov.uk/design-system/patterns/ask-users-for/passport-details/scan-chip">passport chip pattern</a>.</li>
      <li>National IDs and birth records: <a href="https://www.interior.gob.es/opencms/ca/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/">Spain's DNI control letter</a>, <a href="https://uidai.gov.in/en/qr-code-reader">UIDAI QR code</a>, <a href="https://ciec1.org/en/convention/convention-no-16-on-the-issue-of-multilingual-extracts-from-civil-status-records/">CIEC Convention 16</a>, <a href="https://www.cdc.gov/nchs/hus/sources-definitions/nvss.htm">CDC vital statistics</a>, <a href="https://www.usa.gov/birth-certificate">USAGov</a>.</li>
    </ul>

    <p>Limits: we did not test any ID tool on real images, so we make no accuracy claim for them. The legal points are pointers to the texts we opened, not advice, and we checked no law beyond the EU texts and California.</p>
  `,
  image: "/images/passport-ocr.png",
  featuredImage: "/images/passport-ocr.png",
  category: "Compliance",
  date: "September 23, 2026",
  datePublished: "2026-09-23T00:00:00.000Z",
  dateModified: "2026-09-23T00:00:00.000Z",
  last_updated: "September 23, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "ocr for passports",
  secondary_keywords: [
    "ocr for driver's license",
    "ocr for id cards",
    "ocr for national id",
    "ocr for birth certificates",
    "what is the best ocr for verifying passports",
    "what tool can extract data from id cards automatically",
    "ocr for european id cards",
    "ocr for uk passports",
    "ocr for us driver's license",
  ],
  tags: [
    "OCR",
    "passport OCR",
    "ID card OCR",
    "driver's license OCR",
    "MRZ",
    "ICAO 9303",
    "AAMVA",
    "KYC",
    "identity verification",
  ],
  cluster: "compliance",
  noindex: true,
  faq: [
    {
      question: "Does OCR prove that a passport or ID is genuine?",
      answer:
        "No. OCR reads the data and check digits show it is internally consistent, but a forger can compute valid digits. Genuineness comes from other checks: verifying the chip signature, inspecting security features, liveness and face match. Treat OCR as the extraction step, not the verdict.",
    },
    {
      question: "Do all ID cards have an MRZ?",
      answer:
        "No. ICAO-style cards do, including every current EU ID card. US driver's licenses and ID cards use a PDF417 barcode instead. Some national IDs carry neither and are read from printed text with a per-country layout, which is less reliable and has no built-in check.",
    },
    {
      question: "How does OCR know the century of an MRZ date?",
      answer:
        "It cannot read it, because the MRZ stores only a 2-digit year. Software has to infer it. A workable rule is to pick the century that keeps the birth date in the past and puts the expiry date in a plausible window for that document type, then check against the printed dates.",
    },
    {
      question: "Can OCR read a driver's license barcode from a phone photo?",
      answer:
        "Often, if the barcode is sharp. PDF417 has built-in error correction, and AAMVA requires level 3 or higher, so minor damage is survivable. Blur, glare or heavy wear can still defeat it. When the barcode fails, fall back to the printed text and mark the result as lower confidence.",
    },
    {
      question: "What is the difference between reading the MRZ and reading the chip?",
      answer:
        "OCR reads the MRZ from an image. The chip is read over NFC and holds the same data plus a face image, digitally signed by the issuing country. To unlock it, software needs the document number, birth date and expiry date from the MRZ, or a printed access number when the issuer provides one.",
    },
    {
      question: "Can OCR handle IDs printed in other alphabets?",
      answer:
        "Partly. The MRZ is Latin letters only, so it always gives a Latin transliteration. ICAO also requires a Latin transcription for mandatory printed fields that use another script. The printed side may still use national characters or other calendars, which need country-specific parsing.",
    },
    {
      question: "How many IDs should I test before choosing a tool?",
      answer:
        "Use 20 to 50 of your worst real captures per document type, not clean samples. Measure how often the MRZ passes all check digits, and count field-level errors on the rest. That gives you numbers you can compare, which vendor accuracy claims do not.",
    },
    {
      question: "Is it legal to scan and store a customer's ID?",
      answer:
        "It depends on where you operate and why you scan. GDPR asks for minimisation and limited storage, EU anti-money-laundering rules set a 5-year record period, and some US states restrict what you may do with license data. Ask your compliance team, and keep only what a rule or process needs.",
    },
  ],
}
