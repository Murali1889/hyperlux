import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-20",
  title: "OCR for Healthcare: Medical Documents, Accuracy, HIPAA",
  slug: "ocr-for-medical-documents",
  excerpt:
    "What OCR can read in medical records, insurance cards, prescriptions, lab reports and claims, how accurate it is, and what decides whether it is HIPAA safe.",
  description:
    "OCR reads medical records, insurance cards, prescriptions, lab reports and claims. See what it extracts, how accurate it is, and what makes it HIPAA safe.",
  metaTag: "OCR for Healthcare: Medical Documents, Accuracy, HIPAA",
  summary:
    "OCR can turn scanned or photographed medical records, insurance cards, prescriptions, lab reports and claims into usable fields. Clean print reads well, but handwriting, faxes and medical codes need checking. Software is not HIPAA compliant by itself: the vendor agreement (BAA) and controls decide.",
  content: `
    <p>OCR for healthcare reads the text in scanned, faxed or photographed medical documents, and extraction software then pulls out fields such as member ID, drug name, test name and diagnosis code. Clean print reads well. Handwriting, fax quality and code mapping are where errors hide. HIPAA safety depends on your vendor agreement and controls, not on the OCR itself. Not legal advice.</p>

    <h2>What can OCR do with medical documents?</h2>

    <p>OCR turns a scan, fax or photo of a medical document into text a computer can search. Extraction software then picks out fields such as member ID, drug, test result and diagnosis code, and checks them against code lists. OCR does not decide what a record means or whether a claim gets paid.</p>

    <p>Most failures happen after the reading step. Software must decide which text is the member ID and which is the group number, then validate values against code lists, check digits and arithmetic, and send doubtful fields to a person. Here is how that plays out for the five document families people search for most.</p>

    <ul>
      <li><strong>OCR for medical records</strong> turns charts and outside records into searchable text and splits multi-report PDFs.</li>
      <li><strong>OCR for insurance cards</strong> reads member ID, group number, payer ID and pharmacy numbers from both sides.</li>
      <li><strong>OCR for prescriptions</strong> reads drug, strength, quantity, directions and prescriber identifiers.</li>
      <li><strong>OCR for lab reports</strong> reads tests, results, units and reference ranges, then maps tests to LOINC codes.</li>
      <li><strong>OCR for insurance claims</strong> reads claim forms such as the CMS-1500, plus EOBs and remittance advice.</li>
    </ul>

    <p>A naming trap: in HIPAA writing, "OCR" usually means the HHS Office for Civil Rights, which enforces the HIPAA rules. This page is about optical character recognition, the software. The two meet in the HIPAA section below.</p>

    <h2>Medical document cheat sheet: fields, codes and the failure to watch</h2>

    <p>Eight document types, what OCR pulls from each, the codes and identifiers involved, and how each goes wrong. We checked the code details on September 21, 2026 against CMS, the FDA, the NUCC (which maintains the CMS-1500), X12, the CDC ICD-10-CM guidelines, NCPDP, the AMA and LOINC.</p>

    <table>
      <thead>
        <tr><th>Document</th><th>What OCR extracts</th><th>Codes and identifiers</th><th>The specific failure</th><th>Read more</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Insurance card (both sides)</td>
          <td>Member ID, group number, plan name, payer ID, pharmacy numbers, claims address</td>
          <td>Payer ID, RxBIN (6 digits), RxPCN, RxGRP</td>
          <td>Plan name captured instead of payer ID. A front-only photo misses the pharmacy numbers on the back</td>
          <td><a href="/resources/blogs/insurance-card-ocr">Insurance card OCR</a>, <a href="/resources/blogs/eligibility-verification-automation">eligibility verification</a></td>
        </tr>
        <tr>
          <td>Prescription</td>
          <td>Drug, strength, quantity, directions, prescriber, NPI, DEA number</td>
          <td>NDC (10 digits on the label, 11 for billing), NPI (10 digits), DEA number (2 letters, 7 digits)</td>
          <td>A zero added in the wrong NDC segment. A misread NPI or DEA digit that nobody checks</td>
          <td><a href="/resources/blogs/ndc-code-extraction">NDC extraction</a>, <a href="/resources/blogs/npi-verification-api">NPI verification</a>, <a href="/resources/blogs/dea-number-verification">DEA verification</a></td>
        </tr>
        <tr>
          <td>Lab report</td>
          <td>Test, result, unit, reference range, specimen, date</td>
          <td>LOINC (names the test, not the result), local lab codes</td>
          <td>A bare "Glucose" hides the specimen. LOINC 2345-7 is serum or plasma, 2339-0 is whole blood</td>
          <td><a href="/resources/blogs/loinc-code-extraction">LOINC code extraction</a></td>
        </tr>
        <tr>
          <td>Medical record or referral</td>
          <td>Diagnoses, medications, dates, providers</td>
          <td>ICD-10-CM (3 to 7 characters), CPT (5). C-CDA or FHIR if structured</td>
          <td>A code missing its 7th character is invalid. A valid C-CDA file can hold an empty list</td>
          <td><a href="/resources/blogs/medical-coding-automation">Medical coding</a>, <a href="/resources/blogs/ccda-document-processing">C-CDA</a>, <a href="/resources/blogs/hl7-fhir-document-processing">FHIR</a></td>
        </tr>
        <tr>
          <td>Claim form (CMS-1500, UB-04)</td>
          <td>Patient, insured, up to 12 diagnoses (Item 21), service lines (Item 24)</td>
          <td>ICD-10-CM without the decimal point in Item 21, CPT or HCPCS, pointer letters A to L in 24E, NPI</td>
          <td>A pointer letter mistaken for a modifier in the crowded Item 24 grid</td>
          <td><a href="/resources/blogs/cms-1500-form-processing">CMS-1500 processing</a></td>
        </tr>
        <tr>
          <td>Explanation of benefits</td>
          <td>Billed, allowed, plan paid, deductible, copay, coinsurance</td>
          <td>No standard layout or codes</td>
          <td>Right number under the wrong label. Check the arithmetic</td>
          <td><a href="/resources/blogs/eob-parsing-automation">EOB parsing</a></td>
        </tr>
        <tr>
          <td>Remittance or denial</td>
          <td>Paid amount, adjustments, group code, reason codes</td>
          <td>CARC, RARC, group codes such as CO and PR</td>
          <td>CARC 16 read without its remark code. RARC MA130 means no appeal rights, so refile</td>
          <td><a href="/resources/blogs/835-remittance-advice-processing">835 remittance</a>, <a href="/resources/blogs/denial-code-extraction">denial codes</a></td>
        </tr>
        <tr>
          <td>Prior authorization or referral fax</td>
          <td>Patient, provider, CPT, units, dates, authorization number</td>
          <td>CPT, ICD-10-CM, NPI</td>
          <td>Standard fax is about 204 by 98 dots per inch and black or white only, so fine print and handwriting are lost</td>
          <td><a href="/resources/blogs/prior-authorization-automation">Prior authorization</a>, <a href="/resources/blogs/medical-fax-automation">medical fax</a></td>
        </tr>
      </tbody>
    </table>

    <h2>How accurate is OCR on medical documents?</h2>

    <p>There is no single number. In our benchmark, clean printed English scored 97 to 99% on every engine, but that benchmark did not include medical documents. Handwriting and phone photos scored much lower, and a correct read can still be a wrong code. Measure accuracy on your own worst documents before you trust any headline figure.</p>

    <h3>What our benchmark measured, and what it did not</h3>

    <p>We tested eight engines on 1,900 real documents, including invoices, bank statements, receipts, handwritten forms and academic papers, but no medical documents. These rows show what clean print, handwriting and phone photos do. DocsAPI is our product. Method: <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>.</p>

    <table>
      <thead>
        <tr><th>Document category</th><th>Tesseract 5.x</th><th>PaddleOCR</th><th>DocsAPI</th></tr>
      </thead>
      <tbody>
        <tr><td>Typed English (clean)</td><td>97-99%</td><td>97-99%</td><td>97-99%</td></tr>
        <tr><td>Handwritten forms (mixed neatness)</td><td>61%</td><td>73%</td><td>78%</td></tr>
        <tr><td>Phone-photographed receipts</td><td>58%</td><td>82%</td><td>76%</td></tr>
      </tbody>
    </table>

    <p>Handwritten forms are not handwritten prescriptions, so read this as direction, not a forecast. Going from clean print to handwritten forms cost every engine 19 to 38 points (97-99% minus 78%, 73% or 61%).</p>

    <h3>What published medical studies found</h3>

    <ul>
      <li><strong>Mayo Clinic, JAMIA Open, 2026.</strong> OCR plus a large language model processed 1,303 scanned outside-record PDFs from 116 institutions (breast cancer care). F1 scores (1.0 is perfect) were 0.95 for splitting multi-report PDFs, 0.96 for classifying documents and 0.90 for extracting study dates. In a pilot of 45 records, clinicians reported 2 classification errors and 1 date error, and estimated review time fell 40%.</li>
      <li><strong>PLoS One, 2024.</strong> 38 volunteers recorded medication lists from photos of pharmacy notebooks, by OCR and by typing on a smartphone. Errors (characters omitted or misread) were 0.62% for OCR (30 of 4,814) and 1.10% for typing (53 of 4,814). A six-medication list took 18 seconds by OCR and 144 by typing, 8 times faster (144 ÷ 18 = 8). It used only six photos in a simulation, and several authors were paid by the OCR tool's maker.</li>
    </ul>

    <p>The useful comparison is against typing, not perfection. Both studies are small and narrow, so neither predicts your mix of documents. Character accuracy can also look excellent while a claim bounces: a correct read of "Glucose" still needs the right specimen code. Our post on <a href="/resources/blogs/understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies">why 99% accuracy can still mean wrong data</a> explains the gap, and <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> shows how to score your own documents.</p>

    <h2>How do you catch OCR errors before they reach a claim?</h2>

    <p>Use checks that do not depend on the OCR engine: check digits for identifiers, official code lists, arithmetic on payment documents, and a person for low-confidence fields. A wrong value that looks right is worse than a blank field, so send doubts to review instead of guessing.</p>

    <ol>
      <li><strong>Identifiers.</strong> NPI and DEA numbers carry check digits. A failed check catches a misread digit. A pass does not prove the person exists, can prescribe or can bill.</li>
      <li><strong>Drug codes.</strong> Convert a 10-digit NDC to the 11-digit 5-4-2 billing form by adding a zero to the short segment, not to the front of the string.</li>
      <li><strong>Diagnosis codes.</strong> An ICD-10-CM code has 3 to 7 characters and is invalid without a required 7th. CMS says new codes take effect October 1, 2026, so check the list for the date of service.</li>
      <li><strong>Payment arithmetic.</strong> On an EOB, allowed amount minus plan payment should equal what the patient owes.</li>
      <li><strong>Reason codes in pairs.</strong> X12 says CARC 16 requires at least one remark code.</li>
      <li><strong>Fields, not pages.</strong> Score each field, and score 50 of your messiest real documents against hand-typed answers before you scale.</li>
    </ol>

    <p>Here is a check for items 1 and 2, in plain Python 3. The NPI rule and its example (1234567893) come from the CMS check digit document. The NDC rule, adding a leading zero to the appropriate segment, comes from the FDA's March 2026 final rule text.</p>

    <pre><code>def npi_ok(npi):
    if len(npi) != 10 or not npi.isdigit():
        return False
    total = 0
    for i, ch in enumerate(reversed("80840" + npi)):
        d = int(ch)
        if i % 2 == 1:
            d *= 2
            if d &gt; 9:
                d -= 9
        total += d
    return total % 10 == 0

def ndc_to_11(ndc):
    labeler, product, package = ndc.split("-")
    return labeler.zfill(5) + "-" + product.zfill(4) + "-" + package.zfill(2)</code></pre>

    <p>We ran it. Output:</p>

    <pre><code>npi_ok("1234567893")  True
npi_ok("1234567890")  False
0574-4072-05  to  00574-4072-05
51655-089-52  to  51655-0089-52
58118-1397-3  to  58118-1397-03
0 of 90 single-digit misreads pass</code></pre>

    <p>The last line tries every one-digit misread of that NPI (10 positions times 9 other digits). None pass. The NDC strings only show the pattern, so confirm real labeler codes in the FDA directory. See <a href="/resources/blogs/npi-verification-api">NPI verification</a> and <a href="/resources/blogs/dea-number-verification">DEA number verification</a> for what these checks cannot prove.</p>

    <h2>Is OCR for healthcare HIPAA safe?</h2>

    <p>OCR software is not HIPAA compliant or non-compliant by itself. HIPAA applies to covered entities and their business associates, and HHS does not endorse or certify products. What matters is the signed business associate agreement (BAA), the vendor's safeguards, how long files are kept, and what is done with them. This is not legal advice.</p>

    <p>Every document on this page is protected health information (PHI) once it ties a patient's identity to health care or payment. HHS's examples are a medical record, a laboratory report and a hospital bill. HHS's Office for Civil Rights (the other OCR) says it "does not endorse, certify, or recommend specific technology or products," so ask what a "HIPAA compliant" badge rests on. Five things decide the answer.</p>

    <ol>
      <li><strong>The BAA.</strong> A vendor that creates, receives, maintains or transmits PHI for you is a business associate, even if it stores only encrypted data and holds no key. HHS says using a cloud provider to maintain ePHI without a BAA is a violation. Under 45 CFR 164.504(e) the contract must limit use of the data, require safeguards and, where feasible, return or destroy PHI at the end.</li>
      <li><strong>Access controls and logs.</strong> The Security Rule requires administrative, physical and technical safeguards, including access control, audit controls (records of who touched what), authentication and transmission security. Ask who at the vendor can open your documents and how that is logged.</li>
      <li><strong>Retention and deletion.</strong> HIPAA does not set how long medical records must be kept. HHS says state law generally does. Ask how long the vendor keeps a file after processing, whether you can delete on demand, and whether your documents train models. A business associate may use PHI only as its contract permits.</li>
      <li><strong>De-identification.</strong> HHS recognizes Expert Determination and Safe Harbor, which removes 18 listed identifiers. De-identified data is no longer PHI, but redaction that misses a name in a margin note has not de-identified anything. A business associate may de-identify for you only if the BAA authorizes it. See <a href="/resources/blogs/hipaa-deidentification-automation">HIPAA de-identification automation</a>.</li>
      <li><strong>Minimum necessary.</strong> Send and keep only what the job needs. It is a different standard from de-identification and has exceptions, such as treatment disclosures and signed authorizations. See <a href="/resources/blogs/hipaa-minimum-necessary-redaction">HIPAA minimum necessary redaction</a>.</li>
    </ol>

    <p>Running an open source engine yourself, such as Tesseract or PaddleOCR, means no outside company holds the data. The Security Rule duties, including a risk assessment of your ePHI, are then entirely yours.</p>

    <h2>What do hospitals, pharmacies and claims adjusters digitize?</h2>

    <p>They digitize whatever still arrives on paper, fax or photo. Hospitals handle referrals, outside records, lab results and claim forms. Pharmacies handle prescriptions, insurance cards and drug labels. Claims adjusters handle the claim file: forms, photos, estimates, reports and bills. Each group reads different fields, so OCR is set up per document type, not per industry.</p>

    <h3>OCR for hospitals</h3>

    <p>In a November 2019 Medical Group Management Association poll (1,581 responses), 89% of healthcare leaders said their organization still used a fax machine, citing record sharing, referrals, lab results, payer communication and pharmacy communication. The poll is old, but it shows which documents keep arriving as images. Hospital teams also scan release of information requests (<a href="/resources/blogs/release-of-information-processing">release of information processing</a>), Medicare Advance Beneficiary Notices (<a href="/resources/blogs/advance-beneficiary-notice-processing">ABN processing</a>), and the chart documentation behind denials and risk scores (<a href="/resources/blogs/medical-necessity-documentation">medical necessity documentation</a>, <a href="/resources/blogs/hcc-risk-adjustment-coding">HCC risk adjustment coding</a>).</p>

    <h3>OCR for pharmacies</h3>

    <p>Prescriptions arrive electronically or as paper, fax or photo. For Part D controlled substances, CMS counts a prescriber as compliant at a 70% electronic rate and notes that e-prescribing reduces pharmacy calls to clarify written prescriptions, so paper does not vanish by rule. The pharmacy-side identifiers are the NDC, the prescriber's NPI and DEA number, and the RxBIN, RxPCN and RxGRP on the card. Pharmacy claims use NCPDP, separate from medical claims, so scan both sides of the card.</p>

    <h3>OCR for claims adjusters</h3>

    <p>The NAIC handbook defines an adjuster as a person who investigates claims, determines coverage, examines relevant documents and inspects property damage. Some states limit adjusters to a specialty such as auto, homeowner or workers' compensation. NAIC consumer guides list what fills the file: photos, damage lists, receipts, repair bids, police report numbers and proof of insurance. Where a claim involves an injury, the file can also hold the medical documents above. OCR speeds the reading. Coverage stays with the adjuster and the policy.</p>

    <h2>How do insurance companies process claims documents?</h2>

    <p>Insurers check who is covered, review the claim and its documents, decide what to pay, and send a written explanation. Health claims follow HIPAA standard transactions: an 837 claim goes in and an 835 remittance comes back. Paper forms are scanned with OCR. Auto and property claims add an adjuster who inspects the loss and examines the documents.</p>

    <h3>Health insurance, step by step</h3>

    <ol>
      <li><strong>The claim arrives.</strong> Providers send an ASC X12 837 (professional, institutional, dental) or NCPDP (retail pharmacy) claim, usually through a clearinghouse. Some send paper: the CMS-1500 or UB-04. CMS says Medicare takes the CMS-1500 from providers with a waiver from the electronic requirement, most paper claims to carriers are scanned with OCR, and photocopies are not accepted by all carriers because they cannot be scanned.</li>
      <li><strong>Checks before payment.</strong> The payer verifies eligibility (270/271), and some services need prior authorization. See <a href="/resources/blogs/eligibility-verification-automation">eligibility verification automation</a> and <a href="/resources/blogs/prior-authorization-automation">prior authorization automation</a>.</li>
      <li><strong>Adjudication.</strong> This is the payer's decision process. Plan rules and coverage policies are applied to each service line coded with the HIPAA standard code sets (ICD-10-CM, CPT and HCPCS, NDC). Each line can be paid, reduced or denied.</li>
      <li><strong>The explanation.</strong> The provider gets an 835 remittance advice with CARC and RARC codes. The patient gets an EOB or, in Original Medicare, a Medicare Summary Notice. Private insurers called Medicare Administrative Contractors process Medicare claims.</li>
    </ol>

    <h3>Auto and property insurance, and where OCR fits</h3>

    <p>The NAIC's guides describe a shorter path: report the loss, the insurer assigns an adjuster, and the adjuster assesses the damage to set the settlement amount. OCR sits at intake, reading scanned claim forms, attachments and remittances into data. The payment decision stays with the payer's rules and its people. Our post on <a href="/resources/blogs/revenue-cycle-management-document-intake">revenue cycle management document intake</a> explains why slow intake delays billing and shows a 20-transaction check for timing your own.</p>

    <h2>What to do next</h2>

    <ul>
      <li><strong>Clinic or hospital front desk:</strong> start with insurance cards and faxed referrals. Score 50 real ones and read the payer ID and authorization numbers yourself.</li>
      <li><strong>Pharmacy:</strong> start with the prescription and both sides of the card. Run the NPI, DEA and NDC checks and send doubtful drug fields to a pharmacist.</li>
      <li><strong>Billing team:</strong> start with remittances and denials. Read CARC and RARC as a pair (<a href="/resources/blogs/denial-code-extraction">denial code extraction</a>).</li>
      <li><strong>Adjuster or insurer:</strong> start with the documents that fill the file, and keep the coverage decision with people.</li>
      <li><strong>Anyone handling patient data:</strong> get the BAA first, and test with synthetic or de-identified samples.</li>
    </ul>

    <p>To test a document API, DocsAPI (our product) lists prescriptions, lab reports and claims on its <a href="/documents/medical-docs">medical documents page</a>. Its published policy says HIPAA-eligible with a BAA on request, SOC 2 Type II, and content deleted after processing and not used for training. Confirm that in the contract, as with any vendor. For contracts or IDs instead, see <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a>, <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification</a> or <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">OCR for passports, ID cards and driver's licenses</a>.</p>

    <h2>Sources and how we checked this</h2>

    <p>We opened each source September 20 to 21, 2026. hhs.gov blocks automated fetching, so we read archived 2024 and 2025 copies of the HHS pages, which may have changed. The payer ID description relies on our <a href="/resources/blogs/insurance-card-ocr">insurance card OCR</a> post. Our benchmark has no medical documents, and we found no published head-to-head engine test on them. Nothing here is legal, medical or coding advice.</p>

    <ul>
      <li>HHS: <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html">Business Associates</a>, <a href="https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html">Cloud Computing guidance</a>, <a href="https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html">De-identification</a>, <a href="https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html">Security Rule summary</a>, <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html">Minimum Necessary</a>, <a href="https://www.hhs.gov/hipaa/for-professionals/faq/580/does-hipaa-require-covered-entities-to-keep-medical-records-for-any-period/index.html">FAQ 580</a>, <a href="https://www.hhs.gov/ocr/about-us/index.html">Office for Civil Rights</a>.</li>
      <li>eCFR: <a href="https://www.ecfr.gov/current/title-45/section-164.504">45 CFR 164.504</a>, <a href="https://www.ecfr.gov/current/title-45/section-162.1002">162.1002</a>, <a href="https://www.ecfr.gov/current/title-45/section-162.1102">162.1102</a>.</li>
      <li>Forms and codes: <a href="https://www.cms.gov/medicare/billing/electronicbillingeditrans/1500">CMS on the CMS-1500</a>, <a href="https://www.nucc.org/images/stories/PDF/1500_claim_form_instruction_manual_2020_07-v8.pdf">NUCC 1500 manual</a>, <a href="https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf">CMS NPI check digit</a>, <a href="https://www.govinfo.gov/content/pkg/FR-2026-03-05/pdf/2026-04368.pdf">FDA NDC final rule</a>, <a href="https://loinc.org/2345-7">LOINC 2345-7</a>, <a href="https://loinc.org/2339-0">2339-0</a>, <a href="https://x12.org/codes/claim-adjustment-reason-codes">X12 CARC</a>, <a href="https://x12.org/codes/remittance-advice-remark-codes">X12 RARC</a>, <a href="https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2025-Update/ICD-10-CM-April-1-FY25-Guidelines.pdf">ICD-10-CM guidelines</a>, <a href="https://www.cms.gov/medicare/coding-billing/icd-10-codes">CMS ICD-10</a>, <a href="https://www.ama-assn.org/practice-management/cpt/cpt-overview-and-code-approval">AMA CPT</a>, <a href="https://www.ncpdp.org/NCPDP/media/pdf/WhitePaper/OverviewMedicarePartDPrescriptionDrugCOBProcess.pdf">NCPDP white paper</a>.</li>
      <li>Claims: <a href="https://www.cms.gov/medicare/coverage/summary-notice">Medicare Summary Notice</a>, <a href="https://www.cms.gov/medicare/coding-billing/medicare-administrative-contractors-macs">MACs</a>, <a href="https://content.naic.org/sites/default/files/inline-files/Chapter%2018.pdf">NAIC adjuster handbook</a>, <a href="https://content.naic.org/article/navigating-claims-process-recover-and-rebuild">NAIC property claims</a>, <a href="https://content.naic.org/article/what-you-should-know-about-filing-auto-claim">NAIC auto claims</a>.</li>
      <li>Prescribing, fax, accuracy: <a href="https://www.cms.gov/medicare/e-health/eprescribing/cms-eprescribing-for-controlled-substances-program">CMS EPCS</a>, <a href="https://www.mgma.com/mgma-stats/time-warp-the-lingering-legacy-of-fax-in-medical-practices">MGMA fax poll</a>, <a href="https://datatracker.ietf.org/doc/html/rfc1314">RFC 1314</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/41924015/">Mayo study</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/38241403/">PLoS One study</a>, our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">benchmark</a>.</li>
    </ul>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "Healthcare",
  date: "September 23, 2026",
  datePublished: "2026-09-23T00:00:00.000Z",
  dateModified: "2026-09-23T00:00:00.000Z",
  last_updated: "September 23, 2026",
  readTime: "14 min read",
  author: nupuraUghade,
  primary_keyword: "ocr for healthcare",
  secondary_keywords: [
    "ocr for medical records",
    "ocr for insurance cards",
    "ocr for prescriptions",
    "ocr for lab reports",
    "ocr for hospitals",
    "ocr for pharmacies",
    "ocr for insurance claims",
    "ocr for claims adjusters",
    "how do insurance companies process claims documents",
  ],
  tags: ["OCR", "healthcare", "medical documents", "HIPAA", "insurance claims", "medical records"],
  cluster: "healthcare",
  noindex: true,
  faq: [
    {
      question: "What does OCR mean in HIPAA?",
      answer:
        "In HIPAA writing, OCR almost always means the HHS Office for Civil Rights, the agency that enforces the HIPAA Privacy, Security and Breach Notification Rules. It has nothing to do with optical character recognition software, although the two meet when a hospital scans records. Search results for this topic mix both meanings, so check which one a page is using.",
    },
    {
      question: "What is the most accurate OCR for medical documents?",
      answer:
        "We could not verify a published head-to-head test on medical documents, and our own benchmark did not include them. In that benchmark the winner changed by document type, so no engine led everywhere. Pick two or three candidates, run 50 of your own worst documents through them, and score the results against hand-typed answers.",
    },
    {
      question: "Can OCR read handwritten prescriptions?",
      answer:
        "Sometimes, with more errors than printed text. In our benchmark, handwritten forms scored 61% to 78% against 97% to 99% for clean print, and forms are not prescriptions. CMS notes that e-prescribing reduces pharmacy calls to clarify written prescriptions. Send any doubtful drug, strength or quantity to a pharmacist rather than accepting it from OCR.",
    },
    {
      question: "What scanner works best for insurance cards?",
      answer:
        "We did not test scanners, so we cannot name one. The card layout gives one rule: capture both sides, because pharmacy routing numbers and the claims address usually sit on the back. Scan a few real cards and read the small print on the result, especially the payer ID, before you buy. A fax-quality image is too coarse for small print.",
    },
    {
      question: "Can I upload patient records to a free online OCR site?",
      answer:
        "Only if the provider will sign a business associate agreement. HHS says a cloud service that processes or stores ePHI for you is a business associate, and that using one without a BAA violates the HIPAA Rules. If a site will not sign one, do not upload documents with patient identifiers. This is not legal advice.",
    },
    {
      question: "Can a vendor use my scanned records to train its models?",
      answer:
        "A business associate may use PHI only for what its contract with you permits, and HHS says a business associate may de-identify data for you only if the agreement authorizes it. So the answer is in the BAA. Ask for the use and retention terms in writing, and get a plain yes or no on model training.",
    },
    {
      question: "Does OCR replace medical coders?",
      answer:
        "No. A clinical note rarely contains the code itself. It contains a description that someone must match to the best ICD-10-CM or CPT code under the coding guidelines, which is a classification decision, not a reading task. OCR gets the words into the system. Our medical coding automation post explains why accuracy stalls when coding is treated as extraction.",
    },
    {
      question: "What is the difference between an EOB and a remittance advice?",
      answer:
        "An EOB goes to the patient and explains what was billed, what the plan covered and what the patient may owe, in a layout each payer chooses. A remittance advice goes to the provider, usually as a standard 835 file with coded adjustment reasons. They describe the same claim for different readers.",
    },
    {
      question: "What happens if OCR misreads a code on a claim?",
      answer:
        "It depends on the field. A wrong payer ID typically gets the claim rejected by the clearinghouse before a person sees it, with a reason that does not point back to intake. A wrongly padded drug code can produce an invalid NDC denial that looks like a coverage problem. Both are found late, which is why the checks belong at capture.",
    },
    {
      question: "Are my scanned documents PHI?",
      answer:
        "If a document links a patient's identity to health care, payment for care or a health condition, yes. HHS gives a medical record, a laboratory report and a hospital bill as examples, because each carries the patient's name or other identifying information. An insurance card in a provider's patient file is tied to payment for care, so treat it as PHI too, and ask your privacy officer if unsure.",
    },
  ],
}
