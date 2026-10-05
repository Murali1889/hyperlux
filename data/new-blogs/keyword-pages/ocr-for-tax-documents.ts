import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-21",
  title: "OCR for Tax Forms: How to Verify W-2, 1099, GST, PAN, Aadhaar",
  slug: "ocr-for-tax-documents",
  excerpt:
    "Can OCR read W-2s, 1099s, GST invoices, PAN and Aadhaar cards? Yes, but you must verify what it read. IRS box tables, check digit code we ran, and the Aadhaar privacy limits.",
  description:
    "OCR can read W-2, 1099, GST invoices, PAN and Aadhaar, but verify it. IRS box tables, check-digit code we ran, and Aadhaar privacy limits.",
  metaTag: "OCR for Tax Forms: Verify W-2, 1099, GST, PAN, Aadhaar",
  summary:
    "Yes, OCR can read W-2s, 1099s, GST invoices, PAN cards and Aadhaar cards, but it only reads. Check every value against rules the form supplies: box arithmetic on US forms, and format rules plus check digits on Indian identifiers. Anything that fails goes to a person.",
  content: `
    <p>Tax season does not care that half your W-2s arrived as phone photos. OCR can read W-2s, 1099s, GST invoices, PAN cards and Aadhaar cards; the harder job is proving that what it read is right before a return or a loan depends on it. US forms give you box arithmetic to check. Indian identifiers give you format rules and check digits. Below: the IRS box tables, Python checks we ran, and the Aadhaar privacy limits. Not tax or legal advice.</p>

    <h2>Can OCR read tax forms like W-2s and 1099s?</h2>

    <p>Yes. OCR for tax forms works well on W-2s and 1099s because the layouts are fixed and every box has a printed number and label. The real risks are reading the wrong tax year's layout, pairing an amount with the wrong box, and accepting a misread digit. All three can be checked, so most of this page is about checks.</p>

    <p>The tax year matters. For 2026 the IRS splits W-2 Box 14 into 14a and 14b, and the 1099-NEC turns Box 1 into Box 1a with new boxes 1b to 1d. The IRS also gave the W-2 a new OMB control number, 1545-0029, starting with the 2025 forms. A reader that classifies by template or printed number needs the tax year first.</p>

    <p>We have not benchmarked tax forms. Our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">1,900-document accuracy benchmark</a> covered categories such as typed English, bank statements, multilingual pages and handwritten forms. On handwritten forms, character-level accuracy was 61% for Tesseract, 73% for PaddleOCR and 78% for DocsAPI, against 97-99% on clean typed English. Read that as a sign of how much harder handwriting is, not as a W-2 score.</p>

    <h2>What is on a W-2, and which boxes does OCR misread most?</h2>

    <p>A W-2 has an identity block (boxes a to f), money boxes in side-by-side pairs, a coded box 12, three checkboxes in box 13, free text in box 14 and state and local boxes 15 to 20. OCR for W2 forms goes wrong where digits are dense, neighbors look alike, or a letter code shares a cell with an amount.</p>

    <p>The table follows the IRS General Instructions for Forms W-2 and W-3 (2026) and the 2026 form. The last column is our reasoning from the layout, not a measured error rate.</p>

    <table>
      <thead><tr><th>Box</th><th>IRS rule or format</th><th>Why OCR trips here</th></tr></thead>
      <tbody>
        <tr><td>a Employee's SSN</td><td>000-00-0000. Employee copies may truncate it to ***-**-1234 (asterisks or the letter X). Copy A never does</td><td>Nine digits, like an EIN, so only the hyphens tell them apart. Masked digits are symbols, not digits</td></tr>
        <tr><td>b Employer's EIN</td><td>00-0000000, never truncated. The IRS lists an SSN entered as the EIN as a common error</td><td>Sits right under Box a, so one shifted read swaps the two</td></tr>
        <tr><td>1 and 2 Wages; federal tax withheld</td><td>Box 1 excludes elective deferrals such as 401(k). Cents shown after a decimal point on Copy A</td><td>Neighbors in one row. A lost decimal turns 806.00 into 80600</td></tr>
        <tr><td>3 and 4 Social security wages and tax</td><td>Box 3 plus Box 7 cannot exceed $184,500 for 2026. Box 4 should not exceed $11,439 ($184,500 x 6.2%)</td><td>Capped, so Box 3 can sit below Box 5 for high earners</td></tr>
        <tr><td>5 and 6 Medicare wages and tax</td><td>No cap. Box 5 must equal or exceed Box 3 plus Box 7. Box 6 is 1.45%, plus 0.9% Additional Medicare Tax above $200,000</td><td>Box 5 is often above Box 1 because pre-tax deferrals count. That is normal, not an error</td></tr>
        <tr><td>7, 8, 10, 11 Tips and benefits</td><td>Filled in only when they apply</td><td>Blank cells beside filled ones shift a reader that follows text order instead of box position</td></tr>
        <tr><td>12a to 12d Codes</td><td>Capital letter code, then amount, such as D 5300.00 for 401(k) deferrals. Copy A holds at most four entries</td><td>Letter and number share a cell, so D reads as 0 and B as 8</td></tr>
        <tr><td>13 Checkboxes</td><td>Statutory employee, retirement plan, third-party sick pay</td><td>A mark, not text. The IRS lists a wrongly checked Retirement plan box as a common error at the source</td></tr>
        <tr><td>14 to 20 Other, state, local</td><td>The 2026 forms split Box 14 into 14a and 14b. Boxes 15 to 20 hold up to two states and two localities, split by a broken line</td><td>Free text with employer-chosen labels, then two near-identical state rows with formats that differ by state</td></tr>
      </tbody>
    </table>

    <p>The IRS rules for black ink, 12-point Courier, no dollar signs or commas and a decimal point with cents apply to Copy A, the copy filed with the Social Security Administration. Copies B and C can be approved substitute forms, so their layout and number formatting can differ. Hand-marked copies still turn up even though the IRS discourages hand entries on Copy A. Our <a href="/resources/blogs/handwritten-faxed-invoice-ocr">handwritten and faxed document accuracy data</a> shows how wide the engine gap is there.</p>

    <h2>What is on a 1099, and what changed in the 2026 layout?</h2>

    <p>There is no single 1099. The IRS issues one form per income type, each with its own box numbers, so OCR for 1099 forms starts with reading the form name and revision. For lending and tax prep the usual four are 1099-NEC (contract pay), 1099-MISC (rents, royalties, other income), 1099-INT (interest) and 1099-DIV (dividends).</p>

    <table>
      <thead><tr><th>Form</th><th>Boxes that matter most</th><th>Layout note</th></tr></thead>
      <tbody>
        <tr><td>1099-NEC, April 2025 revision (tax year 2025)</td><td>1 Nonemployee compensation. 2 Direct sales of $5,000 or more (checkbox). 3 Excess golden parachute payments. 4 Federal income tax withheld. 5 to 7 State</td><td>Box 1 is the income figure</td></tr>
        <tr><td>1099-NEC, December 2026 revision (tax year 2026)</td><td>1a Nonemployee compensation. 1b Cash tips. 1c Tipped occupation codes. 1d Overtime compensation. Boxes 2 to 7 as above</td><td>Boxes 1b and 1d are already included in 1a</td></tr>
        <tr><td>1099-MISC, December 2026 instructions</td><td>1 Rents. 2 Royalties. 3 Other income. 4 Federal income tax withheld. 10 Gross proceeds paid to an attorney. 13a Cash tips. 13b Tipped occupation codes. 14 Overtime. 15 Nonqualified deferred compensation</td><td>Box 13 was the FATCA checkbox in the April 2025 revision. Boxes 13a and 14 are included in Box 3</td></tr>
        <tr><td>1099-INT and 1099-DIV, instructions dated 01/2024</td><td>INT: 1 Interest income. 3 Interest on U.S. savings bonds and Treasury obligations. 4 Federal income tax withheld. DIV: 1a Total ordinary dividends. 1b Qualified dividends. 2a Total capital gain distributions. 4 Federal income tax withheld</td><td>INT Box 1 excludes Box 3. DIV Box 1a includes 1b, and 2a includes 2b to 2d and 2f</td></tr>
      </tbody>
    </table>

    <p>Four traps follow from the IRS text:</p>

    <ol>
      <li>Do not add every number on the page. On the 1099-NEC the IRS recipient instructions say of box 1b (cash tips) and box 1d (overtime): "This amount has been included in the amount reported in box 1a." Summing them double counts.</li>
      <li>Know the revision. A reader built for the 2025 layout looks for NEC Box 1, which is Box 1a on the 2026 form.</li>
      <li>No form does not mean no income. For tax years beginning after 2025 the IRS raised the minimum reporting threshold for certain payments to $2,000, so small payments can arrive without a 1099.</li>
      <li>Read VOID and CORRECTED. A checked VOID box tells IRS scanning equipment to skip the form. A corrected form fixes an earlier one, so match the two instead of counting both. Recipient copies may also show only the last four digits of the TIN.</li>
    </ol>

    <h2>How does OCR for tax document verification work?</h2>

    <p>OCR for tax document verification is layered. Confirm the form type and tax year, check each identifier's format, check the arithmetic the IRS rules imply, then tie the numbers to a second source such as a pay stub or IRS transcript. Send failures to a person. A forged form can still add up, so OCR alone proves nothing.</p>

    <table>
      <thead><tr><th>Layer</th><th>What you check</th><th>Catches</th><th>Misses</th></tr></thead>
      <tbody>
        <tr><td>1. Form and year</td><td>Title, tax year, revision, VOID and CORRECTED boxes</td><td>Wrong layout, voided forms</td><td>A genuine form with false numbers</td></tr>
        <tr><td>2. Identifier shape</td><td>SSN 000-00-0000, EIN 00-0000000</td><td>Swapped boxes, dropped hyphens</td><td>A well-formed wrong number</td></tr>
        <tr><td>3. Arithmetic</td><td>Box 5 at least Box 3 plus Box 7. Box 4 about 6.2% of Box 3 plus Box 7. Box 6 about 1.45% of Box 5, plus 0.9% above $200,000</td><td>Misread digits, lost decimals</td><td>Consistent fabrications</td></tr>
        <tr><td>4. Second source</td><td>Box 1 against pay stub year-to-date, deposits or an IRS transcript</td><td>Altered or invented forms</td><td>Income the payer never reported</td></tr>
        <tr><td>5. Review</td><td>Flags and low-confidence fields go to a person</td><td>What layers 1 to 4 flagged</td><td>What nobody looked at</td></tr>
      </tbody>
    </table>

    <p>A worked example with the IRS's own numbers. Its deceased-employee example shows Box 3 and Box 5 at 13,000.00, Box 4 at 806.00 and Box 6 at 188.50. Check: 13,000 x 6.2% is 806.00 and 13,000 x 1.45% is 188.50, so nothing is flagged. Now suppose OCR reads Box 3 as 18,000.00. Box 5 is below Box 3, and 18,000 x 6.2% is 1,116.00, not 806.00. Two rules fail, so a person looks. Allow a dollar of slack and treat the rules as soft, because uncollected tax on tips and employer-paid employee share are real exceptions.</p>

    <p>Layer 4 is where authenticity gets tested. See our pages on <a href="/resources/blogs/4506-c-tax-transcript-ocr">4506-C tax transcripts</a> and the <a href="/resources/blogs/pay-stub-income-verification-ocr">pay stub cross-check</a>, and <a href="/resources/blogs/ein-verification-kyc">EIN verification</a> for checking an employer's EIN. Passports use the same idea: our <a href="/resources/blogs/mrz-passport-verification">MRZ checksum walkthrough</a> shows check digits catching OCR errors.</p>

    <h2>What should tax preparers and lenders check before trusting OCR?</h2>

    <p>A wrong box on a W-2 does not look wrong. It looks like a perfectly normal number, which is why these checks exist. Tax preparers should tie every imported value to its source form, avoid double counting corrected and duplicate forms, and protect client data under the FTC Safeguards Rule. Lenders should treat OCR output as a claim and verify income against pay stubs, deposits and an IRS transcript. Neither should skip human review of a failed check.</p>

    <h3>OCR for tax preparers: what to tie out and protect</h3>

    <ul>
      <li>Tie totals. After import, the sum of Box 1 and Box 2 across forms should match a control total keyed separately. A payer missing from last year's return is either new income or a misread EIN.</li>
      <li>Corrections and duplicates. In the IRS example, a W-2c shows amounts under both "Previously reported" and "Correct information", so use the correct column. And an employer can issue more than one W-2 to an employee, for example to report more than four Box 12 items, so do not dedupe on EIN alone.</li>
      <li>Judgment stays human. OCR reads a box. It does not decide whether an amount is taxable, deductible or reportable. That is the preparer's call.</li>
      <li>Security is a duty. IRS Publication 4557 says the FTC Safeguards Rule requires preparers to have a security plan, a qualified individual in charge and multi-factor authentication, and to pick service providers that keep safeguards, require them by contract and oversee them. An OCR service that touches SSNs is one.</li>
      <li>Disclosure is a separate rule. Treasury regulation 301.7216-2 requires consent under 301.7216-3 before return information goes to a preparer located outside the United States. Whether a given OCR vendor counts, and where it processes files, are questions for counsel.</li>
    </ul>

    <h3>For lenders: reading is not qualifying</h3>

    <p>OCR extracts a number. Qualifying income is a separate calculation, covered in <a href="/resources/blogs/w2-1099-tax-form-ocr-underwriting">W-2 vs 1099 income qualification</a>. To verify the number, compare W-2 Box 1 with the pay stub's year-to-date figure and with bank deposits, then confirm against an IRS transcript. The wider workflow is in our guide to <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a>.</p>

    <h2>Does OCR for regional tax forms work outside the US?</h2>

    <p>It can, but the regional work is the rules, not the OCR. Each tax authority sets its own layout, identifiers and check rules. This page covers four regions: US federal forms, US state forms as a category, Canada's T4 and India's GST invoice, PAN and Aadhaar. It does not cover the UK, EU VAT, Australia or others.</p>

    <table>
      <thead><tr><th>Region</th><th>Documents</th><th>What is specific</th></tr></thead>
      <tbody>
        <tr><td>US federal</td><td>W-2, 1099-NEC, 1099-MISC, 1099-INT, 1099-DIV</td><td>SSN 000-00-0000, EIN 00-0000000. Boxes and revisions change by tax year</td></tr>
        <tr><td>US states</td><td>W-2 boxes 15 to 20, state return forms</td><td>Each state assigns its own employer ID. Delaware requires forms in tax software to receive its OCR approval, and its guidance says the form must match the state's layout</td></tr>
        <tr><td>Canada</td><td>T4 slip (CRA)</td><td>Box 12 SIN (nine zeros if unknown), 14 employment income, 22 income tax deducted, 24 EI insurable earnings, 26 CPP/QPP pensionable earnings, 54 payroll account number (CRA and employer copies only)</td></tr>
        <tr><td>India</td><td>GST invoice, PAN, Aadhaar</td><td>Public format rules for all three, legal handling rules for Aadhaar. See the next section</td></tr>
      </tbody>
    </table>

    <p>For any other region, get the authority's own field list and current revision, list which identifiers have a public check rule, then test on 50 real samples using the method in our guide to <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>.</p>

    <h2>Can OCR read GST invoices, PAN cards and Aadhaar cards?</h2>

    <p>Yes, and Indian identifiers are easy to verify because each has a public format rule. A GSTIN has a check character you can compute, a PAN has a fixed pattern, and an Aadhaar number has a Verhoeff check digit. The limit is privacy. Aadhaar numbers carry strict handling rules, so mask them at extraction and do not store them casually.</p>

    <h3>OCR for GST invoices: what to read and check</h3>

    <p>Rule 46 of the CGST Rules lists what a tax invoice carries: supplier name, address and GSTIN; a serial number of up to 16 characters, unique for the financial year; date; recipient details; HSN code; description and quantity; taxable value; rate and amount of each tax; place of supply; reverse charge flag; and, for invoices issued the e-invoice way, a QR code with the Invoice Reference Number (IRN). The government's e-invoice API adds checks you can copy:</p>

    <table>
      <thead><tr><th>Check</th><th>Rule from the NIC e-invoice documentation</th></tr></thead>
      <tbody>
        <tr><td>GSTIN shape</td><td>2 digits, then 13 letters or digits</td></tr>
        <tr><td>State code</td><td>The first two digits of the supplier's and recipient's GSTIN match the state code in their details (exports use 96 for the recipient)</td></tr>
        <tr><td>Document number</td><td>1 to 16 characters from letters, digits, "/" and "-". Must not start with 0, "/" or "-"</td></tr>
        <tr><td>Tax type</td><td>Supplier state code equal to place of supply means CGST plus SGST. Different means IGST</td></tr>
        <tr><td>Date, HSN</td><td>DD/MM/YYYY in the API. HSN code of at least 4 digits</td></tr>
      </tbody>
    </table>

    <p>Add plain arithmetic. Take a taxable value of 10,000.00 at an 18% rate, used only as an illustration. In the same state that is CGST 900.00 plus SGST 900.00, total 11,800.00. Across states it is IGST 1,800.00, total 11,800.00. If the extracted total does not equal taxable value plus taxes, or the tax type contradicts the two state codes, flag it.</p>

    <p>For e-invoices the portal returns a digitally signed QR code and an IRN, a SHA-256 hash built from the supplier's GSTIN, document number, document type and financial year. When a QR code is present, decode it and compare it with the OCR text. Rule 46 asks for the QR code only on invoices issued in the e-invoice manner, and B2C invoices are not sent for IRN, so many invoices carry none.</p>

    <p>A GSTIN is 15 characters: a 2-digit state code (NIC's list has 07 Delhi, 27 Maharashtra, 29 Karnataka, 33 Tamil Nadu), the holder's 10-character PAN, a registration count for that PAN in that state, the letter Z, and a check character. In the constructed 27ABCPS0000D1ZF those are 27, ABCPS0000D, 1, Z and F. The GST Council's flyer calls positions 13 and 14 the entity code. The 1 and Z reading comes from practitioner documentation and matches all six NIC sandbox test GSTINs. One PAN gets one GSTIN per state, so one PAN inside several GSTINs is normal.</p>

    <h3>OCR for PAN card: pattern, holder type and limits</h3>

    <p>A PAN is 10 characters: five letters, four digits, one letter. Letters 1 to 3 are a series. Letter 4 is the holder type: P individual, C company, H Hindu undivided family, F firm or LLP, A association of persons, T trust, B body of individuals, L local authority, J artificial juridical person, G government. Letter 5 is the first letter of the surname (individuals) or of the entity's name. Digits 6 to 9 run from 0001 to 9999, and the last letter is a check letter. A PAN arrives as a laminated card or as an e-PAN, a password-protected PDF with a QR code, so a pipeline may need to unlock the file before it can read it.</p>

    <p>You can check the pattern, confirm letter 4 is on the list, and compare letter 5 with the printed name as a soft check that goes to review, not rejection. You cannot check the last letter offline: the python-stdnum documentation calls the PAN checksum undocumented. Whether a PAN exists and belongs to the named person needs a lookup with the issuer, which OCR cannot do.</p>

    <h3>OCR for Aadhaar card: check digit and privacy limits</h3>

    <p>An Aadhaar number has 12 digits, does not begin with 0 or 1, and ends in a Verhoeff check digit. Verhoeff detects all single-digit errors and all swaps of adjacent digits, but it is a typo filter, not proof. A masked Aadhaar shows only the last four digits. UIDAI tells offline verifiers to verify with the QR code on the letter, e-Aadhaar, mAadhaar or PVC card instead of accepting the card or an image as proof, so OCR of the printed number is a convenience, not verification. Which rules bind you depends on your role:</p>

    <table>
      <thead><tr><th>Source</th><th>What it says</th><th>Who it binds</th></tr></thead>
      <tbody>
        <tr><td>Sharing of Information Regulations 2016, reg 6</td><td>Numbers must not be published, displayed or posted publicly. Keep them and any database holding them secure. No database goes public unless redacted. Transmit only securely and encrypted. Keep no longer than the purpose given at consent needs</td><td>Any entity holding numbers</td></tr>
        <tr><td>UIDAI Circular No. 14 of 2025</td><td>Store numbers only in an Aadhaar Data Vault. Business systems keep a reference key. Hashing is not allowed as a reference key</td><td>Requesting entities, meaning those that send numbers to UIDAI for authentication</td></tr>
        <tr><td>UIDAI guidance, PIB release of 10 Jan 2023</td><td>Generally do not collect, use or store the number after offline verification. If a copy is kept, redact or mask it irretrievably. Get explicit consent and keep a record</td><td>Offline verification seeking entities</td></tr>
      </tbody>
    </table>

    <p>A December 2025 law firm note on UIDAI's 2025 vault circular and FAQs says the vault rules apply to requesting entities, not to offline verifiers or firms holding employee copies for internal use. Confirm your role with counsel. A safer default for any OCR pipeline: check the digit in memory, mask at once, store only the masked form, keep images out of logs and training data, record consent and purpose, and set a deletion date. We did not review any PAN-specific storage rule, so treat PAN as sensitive too. For other IDs see <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">OCR for passports, ID cards and driver's licences</a> and <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification</a>.</p>

    <h3>What to look for in OCR software for Indian documents</h3>

    <ul>
      <li>Scripts, in writing. Indian documents can carry Hindi or another regional script next to English. Ask for the supported list and test your samples. Our benchmark's multilingual set was English with Mandarin and Spanish, so we have no numbers for Indian scripts.</li>
      <li>Validators for the GSTIN check character, PAN pattern and Verhoeff digit, built in or addable.</li>
      <li>Masking at extraction, so full Aadhaar numbers are not stored or logged by default, and <strong>QR reading</strong> for Aadhaar and e-invoices.</li>
      <li>Processing location and retention, in writing.</li>
      <li>Field-level confidence, a review queue, and accuracy measured per field on your own files.</li>
    </ul>

    <p>On our own product: our <a href="/solutions/finance-automation">finance automation page</a> mentions GST e-invoices. Our public product manifest lists W-2, 1099, W-8BEN, W-9 and 4506-C among tax forms and passport, driver's license, national ID and mDL among identity documents. It does not name GST invoices, PAN cards or Aadhaar cards. Treat support for those three as unconfirmed until you test your own files.</p>

    <h2>Python checks for GSTIN, PAN and Aadhaar (code we ran)</h2>

    <p>This is one short Python 3 script, standard library only, that we ran on Python 3.9.6. It checks GSTIN, PAN and Aadhaar, and repairs one common OCR slip: an O read where a digit belongs, accepted only if the checksum then passes. Every identifier is constructed or a published test value, never a real person's number.</p>

    <pre><code>import re

# Aadhaar: 12 digits, first digit 2-9, last digit is a Verhoeff check digit.
# Verhoeff tables are built from the D5 (dihedral group) rule and match the published tables.
D = [[(i + j) % 5 if i &lt; 5 and j &lt; 5 else
      (i + j) % 5 + 5 if i &lt; 5 else
      (i-j) % 5 + 5 if j &lt; 5 else (i-j) % 5
      for j in range(10)] for i in range(10)]
p1 = [1, 5, 7, 6, 2, 8, 3, 0, 9, 4]
P = [list(range(10))]
for _ in range(7):
    P.append([p1[x] for x in P[-1]])
INV = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9]

def verhoeff_valid(number):
    c = 0
    for i, ch in enumerate(reversed(number)):
        c = D[c][P[i % 8][int(ch)]]
    return c == 0

def verhoeff_check_digit(payload):
    c = 0
    for i, ch in enumerate(reversed(payload)):
        c = D[c][P[(i + 1) % 8][int(ch)]]
    return str(INV[c])

def repair_digits(s):   # only for fields the spec says are all digits
    return s.translate(str.maketrans("OoIlSBZ", "0011582"))

def check_aadhaar(text):
    digits = re.sub(r"[ -]", "", text)
    if not re.fullmatch(r"[2-9][0-9]{11}", digits):
        return "bad format"
    return "ok" if verhoeff_valid(digits) else "bad check digit"

def mask_aadhaar(text):
    return "**** **** " + re.sub(r"[ -]", "", text)[-4:]

# PAN: 5 letters, 4 digits, 1 letter. The 4th letter is the holder type.
PAN_TYPES = {"P": "Individual", "C": "Company", "H": "HUF", "F": "Firm or LLP",
             "A": "AOP", "T": "Trust", "B": "BOI", "L": "Local authority",
             "J": "Artificial juridical person", "G": "Government"}

def check_pan(pan, name=None):
    pan = pan.upper()
    if not re.fullmatch(r"[A-Z]{3}[ABCFGHJLPT][A-Z][0-9]{4}[A-Z]", pan):
        return "bad format"
    out = "ok, " + PAN_TYPES[pan[3]]
    if name:   # 5th letter: surname initial (individual) or first letter of the entity name
        w = name.upper().split()
        wanted = {w[0][0], w[-1][0]} if pan[3] == "P" else {w[0][0]}
        if pan[4] not in wanted:
            out += ", 5th letter does not match the name (send to review)"
    return out

# GSTIN: state code, 10-character PAN, entity number, Z, check character (Luhn mod 36)
B36 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def gstin_check_char(first14):
    total, factor = 0, 2
    for ch in reversed(first14):
        v = B36.index(ch) * factor
        total += v // 36 + v % 36
        factor = 1 if factor == 2 else 2
    return B36[-total % 36]

def check_gstin(g):
    g = g.upper()
    if not re.fullmatch(r"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]", g):
        return "bad format"
    if g[14] != gstin_check_char(g[:14]):
        return "bad check character"
    return "ok, state %s, PAN %s" % (g[:2], g[2:12])

if __name__ == "__main__":
    nic = ["33GSPTN1882G1Z3", "27GSPMH1881G1ZH", "27GSPMH1882G1ZG",
           "33GSPTN3381G1Z5", "33GSPTN3382G1Z4", "27GSPMH3381G1ZI"]
    print("NIC sandbox GSTINs ok:", sum(check_gstin(g).startswith("ok") for g in nic), "of", len(nic))
    base = "27ABCPS0000D1Z"
    g = base + gstin_check_char(base)
    print(g, "-&gt;", check_gstin(g))
    print("27ABCPS0800D1ZF -&gt;", check_gstin("27ABCPS0800D1ZF"))
    a = "23456789012"
    a += verhoeff_check_digit(a)
    print(a, "-&gt;", check_aadhaar(a), "| masked:", mask_aadhaar(a))
    print("2345 6789 O124 -&gt;", check_aadhaar("2345 6789 O124"), "| after repair:", check_aadhaar(repair_digits("2345 6789 O124")))
    print("ABCPS0000D -&gt;", check_pan("ABCPS0000D", "Ravi Sharma"))
    print("ABCPK0000D -&gt;", check_pan("ABCPK0000D", "Ravi Sharma"))
    print("Verhoeff check digit for 236:", verhoeff_check_digit("236"))
    one = sum(not verhoeff_valid(a[:i] + d + a[i+1:]) for i in range(12) for d in "0123456789" if d != a[i])
    swaps = sum(not verhoeff_valid(a[:i] + a[i+1] + a[i] + a[i+2:]) for i in range(11) if a[i] != a[i+1])
    print("single-digit changes caught:", one, "of 108 | adjacent swaps caught:", swaps, "of 11")
    import random
    random.seed(21)
    hits = sum(verhoeff_valid(random.choice("23456789") + "".join(random.choice("0123456789") for _ in range(11))) for _ in range(100000))
    print("random 12-digit numbers that still pass Verhoeff:", hits, "of 100000")</code></pre>

    <p>Output:</p>

    <pre><code>NIC sandbox GSTINs ok: 6 of 6
27ABCPS0000D1ZF -&gt; ok, state 27, PAN ABCPS0000D
27ABCPS0800D1ZF -&gt; bad check character
234567890124 -&gt; ok | masked: **** **** 0124
2345 6789 O124 -&gt; bad format | after repair: ok
ABCPS0000D -&gt; ok, Individual
ABCPK0000D -&gt; ok, Individual, 5th letter does not match the name (send to review)
Verhoeff check digit for 236: 3
single-digit changes caught: 108 of 108 | adjacent swaps caught: 11 of 11
random 12-digit numbers that still pass Verhoeff: 10164 of 100000</code></pre>

    <ul>
      <li>The Verhoeff tables are built by rule and equal the published tables. The check digit for 236 is 3, the reference example on the Verhoeff algorithm's Wikipedia page. The PAN examples use 0000 as the running number, which the PAN series does not issue.</li>
      <li>The GSTIN check character matched all six sandbox test GSTINs listed on the NIC e-invoice portal. An independent Luhn mod 36 routine in the python-stdnum library also accepted all six and our constructed one.</li>
      <li>Three of the six sandbox GSTINs have M in the PAN holder-type position, which is not a listed holder type. Our GSTIN check tests only the PAN's shape, like NIC's own schema, because a strict PAN check would reject official test data.</li>
      <li>On the constructed Aadhaar-format number, all 108 single-digit changes and all 11 adjacent swaps failed the check. Random wrong 12-digit numbers still passed 10,164 times in 100,000 seeded trials, about 1 in 10.</li>
      <li>A wrong GSTIN check character passes by chance 1 time in 36, which is 2.8%. Neither check tells you the number is issued or belongs to the person in front of you.</li>
    </ul>

    <h2>Before the next filing season</h2>
    <p>Run the box checks before anyone signs anything.</p>

    <ul>
      <li>If you prepare taxes: use OCR for import, run the tie-outs above, keep a written security plan, and ask counsel about disclosure if any processing happens outside the US.</li>
      <li>If you lend: treat extracted numbers as claims, verify against a source the applicant cannot edit, and keep qualification math separate from extraction.</li>
      <li>If you onboard users in India: validate GSTIN, PAN and Aadhaar in code, verify Aadhaar by QR where you can, mask on extraction, and get advice on which UIDAI rule binds you.</li>
      <li>If you want to test extraction on your own files: DocsAPI is our product, and its <a href="/use-cases/loan-verification">loan verification page</a> covers income documents. Bring real samples, including any GST, PAN or Aadhaar files, and hold the results to the checks on this page.</li>
    </ul>

    <h2>How we checked this</h2>

    <p>Checked on September 21, 2026. IRS and NIC pages change with each tax year and API release, so confirm current versions before you build.</p>

    <ul>
      <li>IRS: <a href="https://www.irs.gov/instructions/iw2w3">General Instructions for Forms W-2 and W-3 (2026)</a>, <a href="https://www.irs.gov/pub/irs-pdf/fw2.pdf">2026 Form W-2</a>, <a href="https://www.irs.gov/instructions/i1099mec">1099-MISC and 1099-NEC instructions (12/2026)</a>, the <a href="https://www.irs.gov/pub/irs-prior/i1099mec--2025.pdf">April 2025 revision</a>, the <a href="https://www.irs.gov/pub/irs-pdf/f1099nec.pdf">1099-NEC form</a>, <a href="https://www.irs.gov/instructions/i1099int">1099-INT</a>, <a href="https://www.irs.gov/instructions/i1099div">1099-DIV</a>, <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf">Publication 4557</a> and <a href="https://www.law.cornell.edu/cfr/text/26/301.7216-2">26 CFR 301.7216-2</a>.</li>
      <li>Other regions: Microsoft Learn, <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/tax-document?view=doc-intel-4.0.0">US tax documents</a>. CRA, <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/completing-filing-information-returns/t4-information-employers/t4-slip.html">T4 slip</a>. Delaware Division of Revenue, <a href="https://revenue.delaware.gov/software-developers/approval-process/">approval process</a>.</li>
      <li>GST: CBIC <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter6/rule46_v1.00.html">CGST Rule 46</a>, GST Council <a href="https://gstcouncil.gov.in/sites/default/files/e-version-gst-flyers/Registration_under_GST_Law_new.pdf">registration flyer</a>, NIC e-invoice <a href="https://einv-apisandbox.nic.in/version1.03/generate-irn.html">Generate IRN</a>, <a href="https://einv-apisandbox.nic.in/">test GSTINs</a> and <a href="https://einvoice1.gst.gov.in/Others/MasterCodes">state code list</a>.</li>
      <li>PAN and check digits: Protean <a href="https://www.proteantech.in/articles/pan-card-number-10-characters-meaning/">PAN structure</a>, python-stdnum for <a href="https://arthurdejong.org/python-stdnum/doc/1.20/stdnum.in_.aadhaar">Aadhaar</a>, <a href="https://arthurdejong.org/python-stdnum/doc/1.20/stdnum.in_.gstin">GSTIN</a> and <a href="https://arthurdejong.org/python-stdnum/doc/1.20/stdnum.in_.pan">PAN</a>, and <a href="https://en.wikipedia.org/wiki/Verhoeff_algorithm">Verhoeff algorithm</a>.</li>
      <li>Aadhaar: UIDAI <a href="https://uidai.gov.in/images/Circular-No.14_of-2025.pdf">Circular No. 14 of 2025</a> and <a href="https://uidai.gov.in/images/The_Aadhaar_Sharing_of_information_regulation_2016.pdf">Sharing of Information Regulations</a> (updated 21.08.2025), PIB <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1889996&amp;reg=48&amp;lang=2">guidance to verification entities</a> and <a href="https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1829162&amp;reg=48&amp;lang=2">May 2022 clarification</a>, and the Khaitan &amp; Co <a href="https://www.khaitanco.com/sites/default/files/2025-12/ERGO%20-%20Aadhaar%20Data%20Vault%20-%2010%20December%202025.pdf">Aadhaar Data Vault note</a>.</li>
    </ul>

    <p>Limits. The Income Tax Department site and older UIDAI FAQ pages would not load for our fetches, so the PAN structure comes from Protean, an authorized PAN service provider. The "last four digits" definition of a masked Aadhaar comes from a PIB clarification that also withdrew an earlier regional advisory, and we use it only for the definition. We did not test any vendor's OCR on tax forms, and our benchmark has no tax forms or Indian scripts. Points for a human check before you rely on this: whether your Aadhaar role is a requesting entity or an offline verifier, whether an OCR vendor counts under section 7216, and current GST rates and e-invoicing thresholds. None of this is tax or legal advice.</p>
  `,
  image: "/images/ocr-in-finance.png",
  featuredImage: "/images/ocr-in-finance.png",
  category: "Lending",
  date: "October 5, 2026",
  datePublished: "2026-10-05T00:00:00.000Z",
  dateModified: "2026-10-05T00:00:00.000Z",
  last_updated: "October 5, 2026",
  readTime: "20 min read",
  author: nupuraUghade,
  primary_keyword: "OCR for tax forms",
  secondary_keywords: [
    "tax return ocr",
    "ocr software for tax forms",
    "ocr tax software",
    "ocr for w2 forms",
    "ocr for 1099 forms",
    "ocr for tax document verification",
    "ocr for regional tax forms",
    "ocr for tax preparers",
    "ocr for gst invoices",
    "ocr for pan card",
    "ocr for aadhaar card",
    "ocr software for indian documents",
  ],
  tags: ["OCR", "tax forms", "W-2", "1099", "GST invoice", "PAN card", "Aadhaar", "document verification"],
  cluster: "compliance",
  faq: [
    {
      question: "Can OCR tell whether a W-2 or 1099 is fake?",
      answer:
        "No. OCR reads the printed values. Arithmetic checks catch misreads, but a forged form can be internally consistent. To test authenticity, compare against a source the applicant cannot edit, such as an IRS transcript, plus pay stubs and bank deposits. Treat a match as strong evidence and a mismatch as a reason for review, not proof of fraud.",
    },
    {
      question: "How should OCR handle a corrected W-2c?",
      answer:
        "Classify it as its own form type. In the IRS example, a W-2c shows amounts under Previously reported and Correct information. Use the correct column, link the form to the original by employer and employee, and never add the two columns together. Otherwise the same wages are counted twice or the old figure is used.",
    },
    {
      question: "How many tax forms should I test before choosing OCR software?",
      answer:
        "Start with about 50 real forms, including the worst ones: phone photos, faded copies and any handwriting. Score per field, not per page, and note which failures your own checks caught. Numbers measured on a vendor's sample forms tell you little about your mix. Our guide to measuring OCR accuracy walks through the method.",
    },
    {
      question: "Do I need a separate model for each 1099 type?",
      answer:
        "Treat each 1099 as its own form. Boxes differ by form and year, and some boxes are sub-amounts of others. Microsoft's Document Intelligence v4.0 model list has 23 separate 1099 model IDs, from 1099-A to 1099-SSA. Start with NEC, MISC, INT and DIV, then add forms as your real document mix shows them.",
    },
    {
      question: "What is the difference between a GSTIN and a PAN?",
      answer:
        "A PAN is a 10-character tax identifier for a person or entity. A GSTIN is a 15-character GST registration number that embeds the PAN in positions 3 to 12. One PAN gets one GSTIN per state, so a business operating in several states holds several GSTINs that share the same PAN.",
    },
    {
      question: "Can I validate a GSTIN without calling the GST portal?",
      answer:
        "You can check the shape, the state code and the check character offline. That catches typos and misreads. It cannot tell you whether the GSTIN is registered, active or belongs to the named business. The e-invoice system checks that a recipient GSTIN is registered and active or suspended, so only a portal lookup answers that.",
    },
    {
      question: "Is it legal to store an Aadhaar number my OCR extracted?",
      answer:
        "It depends on your role, so ask counsel. The 2016 sharing regulations bar publishing numbers and limit retention to what consent covers. UIDAI's 2025 circular tells requesting entities to keep numbers in an Aadhaar Data Vault. Offline verifiers are told not to store the number, or to mask it irretrievably. Masking at extraction is the safest default.",
    },
    {
      question: "Can OCR read Aadhaar or PAN photos taken on a phone?",
      answer:
        "Sometimes, with more errors. In our benchmark, phone-photographed receipts scored 58% for Tesseract, 82% for PaddleOCR and 76% for DocsAPI at character level, against 97-99% on clean typed English. That is a different document type, so read it as a warning, not a forecast. Run the check digit and ask for a retake when it fails.",
    },
    {
      question: "What should happen when a check fails?",
      answer:
        "Do not fix it silently. Show a person the image with the field highlighted and the rule that failed. The one safe automatic repair is position-aware: replace an O with 0 in a digit-only field, then accept it only if the checksum passes. Log every change so an auditor can see what was corrected and why.",
    },
    {
      question: "What should OCR software for tax forms handle?",
      answer:
        "At minimum W-2s, 1099s and Form 1040 with its schedules, plus IRS transcripts. Tax return OCR is harder than single-form OCR because schedules vary and figures must agree across pages, so good OCR tax software checks totals between the 1040 and its schedules and flags any mismatch.",
    },
  ],
}
