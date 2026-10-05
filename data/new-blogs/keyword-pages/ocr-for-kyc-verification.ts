import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-23",
  title: "OCR for KYC Verification: What It Proves and What It Misses",
  slug: "ocr-for-kyc-verification",
  excerpt:
    "OCR reads a KYC document. Verification is the set of checks you run on what it read. Here are the nine layers, what each catches and misses, a checksum you can verify by hand, and what to keep for auditors.",
  description:
    "OCR for KYC verification only reads the document. See the 9 checks that verify it, what each catches and misses, a worked MRZ checksum and what auditors keep.",
  metaTag: "OCR for KYC Verification: What It Proves (2026)",
  summary:
    "OCR only reads a KYC document: it turns the image into text. Verification is the checks you run on that text, such as checksums, expiry rules, cross-document matching, face match and screening. OCR proves what a document says, not that it is genuine or that the applicant is its owner.",
  content: `
    <p>A new customer is signing up on their phone late at night. The ID photo has glare across the date of birth, and if you ask them to retake it twice, they are gone. OCR's job in KYC is to read that document well enough, and fast enough, that the checks after it can do theirs. This guide walks through the nine layers of checks, what each one catches and misses, and what auditors will ask you to show.</p>

    <h2>How do companies verify documents automatically?</h2>

    <p>They run each document through a fixed sequence of checks and send anything unusual to a person. The sequence is: confirm the image is usable, read the fields with OCR, test the values with math and rules, compare them with the application and other documents, match the face, screen the name, and log every result.</p>

    <p>OCR for KYC verification is step two of that sequence. The Financial Action Task Force (FATF), the international anti-money laundering standard setter, lists similar actions as examples of identity proofing in its 2020 digital identity guidance: collect the evidence, validate that the document is authentic and its data accurate, de-duplicate, and verify the person with facial recognition and liveness detection.</p>

    <p>The rule to hold onto: OCR (optical character recognition) reads the document, and verification is everything you do with what it read. That verification is the core of KYC, or know your customer. When a vendor says its OCR verifies IDs, ask which checks it runs and what each misses.</p>

    <h2>What does OCR prove in a KYC check, and what does it not?</h2>

    <p>It proves one thing: that certain characters appear in the image you supplied, read with some error rate. It does not prove the document is genuine, still valid or issued to the person applying. Each claim needs its own check, and each check has blind spots, listed layer by layer below.</p>

    <table>
      <thead>
        <tr><th>Claim</th><th>Does OCR prove it?</th><th>What actually tests it</th></tr>
      </thead>
      <tbody>
        <tr><td>The image shows this name and date of birth</td><td>Yes, within the engine's error rate</td><td>A second read, or a check digit</td></tr>
        <tr><td>The document number was read correctly</td><td>No</td><td>Check digits in the passport's machine readable zone (MRZ), or a second source such as the barcode</td></tr>
        <tr><td>The document is genuine</td><td>No</td><td>Security feature checks and, for a passport chip, its digital signature</td></tr>
        <tr><td>The document belongs to this person</td><td>No</td><td>Liveness detection and face match</td></tr>
        <tr><td>The person is real and not on a sanctions list</td><td>No</td><td>Data checks beyond the document, and list screening</td></tr>
      </tbody>
    </table>

    <p>One thing proves more than the printed page: a passport's chip. The International Civil Aviation Organization (ICAO) says the chip's data is protected by digital signatures (Passive Authentication), so verifying the chip tells you something OCR of the page cannot.</p>

    <p>Reads also carry error. If each character is read right 99% of the time and errors are independent (an assumption, used only for the arithmetic), a 9-character document number is fully right 0.99 multiplied by itself 9 times, about 91% of the time, and a 44-character MRZ line about 64%. In our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>, clean typed English scored 97 to 99% for three engines and phone-photographed receipts 58 to 82%. That test had no ID documents, so read it as a warning about capture quality.</p>

    <h2>Automated KYC document check, layer by layer</h2>

    <p>Run the layers in this order: cheap checks that stop bad input come first.</p>

    <table>
      <thead>
        <tr><th>Layer and what it checks</th><th>What it catches</th><th>What it misses</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Capture quality.</strong> Blur, glare, cropping.</td>
          <td>Unreadable images and hidden fields.</td>
          <td>Fakes. A sharp photo of a forged card passes.</td>
        </tr>
        <tr>
          <td><strong>2. OCR read.</strong> Name, date of birth, document number, expiry, MRZ lines.</td>
          <td>Nothing about authenticity. It creates the text the later layers test.</td>
          <td>Its own mistakes. A 0 read as an O looks like any other value.</td>
        </tr>
        <tr>
          <td><strong>3. MRZ or barcode check.</strong> Recompute MRZ check digits, or compare a US licence's barcode with its printed text.</td>
          <td>Misreads, and edits made without recalculating the check digits.</td>
          <td>A forger who recomputes them, because the algorithm is public. Some letter swaps too, such as A for K.</td>
        </tr>
        <tr>
          <td><strong>4. Expiry and issuer rules.</strong> Accepted type, expiry beyond your buffer, dates that can be true.</td>
          <td>Expired, unsupported and impossible-date documents.</td>
          <td>Cancelled or stolen documents that still look valid. Misparsed dates such as 03/04/26 (March 4 or April 3).</td>
        </tr>
        <tr>
          <td><strong>5. Template and security features.</strong> Layout, fonts, photo position, visible security features.</td>
          <td>Crude fakes, a wrong template for the issuer and year, obvious edits.</td>
          <td>Features a photo cannot show: FATF notes UV-only features and physical construction may be hard or impossible to validate remotely, though most features can be checked. New card designs can cause false rejects.</td>
        </tr>
        <tr>
          <td><strong>6. Data consistency.</strong> Name, date of birth and address across the ID, proof of address and application.</td>
          <td>Mismatched identities and careless forgeries. FinCEN lists inconsistent documents as a red flag.</td>
          <td>A synthetic identity built to be consistent. Strict matching also flags Robert against Bob.</td>
        </tr>
        <tr>
          <td><strong>7. Liveness and face match.</strong> A live person is present and matches the ID photo.</td>
          <td>A photo of a photo, and a genuine ID used by the wrong person.</td>
          <td>Injection attacks that bypass the camera. Match scores trade false accepts against false rejects.</td>
        </tr>
        <tr>
          <td><strong>8. Sanctions, PEP and watchlist screening.</strong> Politically exposed person (PEP) lists included.</td>
          <td>Listed people and entities, and PEPs who need enhanced review.</td>
          <td>Identity itself. A misread letter can turn a hit into a miss.</td>
        </tr>
        <tr>
          <td><strong>9. Audit trail.</strong> Image, values, results, decision, who and when.</td>
          <td>Not a check. It proves what you did and lets anyone re-perform it.</td>
          <td>A weak process, and an editable log undermines the record.</td>
        </tr>
      </tbody>
    </table>

    <h3>Go deeper on each layer</h3>

    <ul>
      <li><a href="/resources/blogs/mrz-passport-verification">Passport MRZ verification</a>: the composite digit, and why a failure is not always fraud.</li>
      <li><a href="/resources/blogs/national-id-verification-ocr">National ID verification</a>: why a US licence's barcode beats its printed text.</li>
      <li><a href="/resources/blogs/kyc-document-expiry-automation">KYC document expiry automation</a>: why next month's expiry can count as expired today.</li>
      <li><a href="/resources/blogs/biometric-face-match-kyc">Biometric face match</a>: what a match score means and how its two error rates trade off.</li>
      <li><a href="/resources/blogs/sanctions-screening-ocr">Sanctions screening</a>, <a href="/resources/blogs/pep-screening-kyc">PEP screening</a> and <a href="/resources/blogs/watchlist-screening-automation">watchlist screening</a>: why name matching needs more than one threshold, when PEP status ends, and how a careless false-positive list hides real matches.</li>
      <li><a href="/resources/blogs/perpetual-kyc-monitoring">Perpetual KYC monitoring</a>: which customer changes should trigger a review.</li>
    </ul>

    <h2>How does an MRZ checksum work? A worked example you can check</h2>

    <p>The MRZ is the two or three lines of text at the bottom of a passport's data page. Each key field is followed by a check digit: multiply every character by the repeating weights 7, 3, 1, add the products, and keep the remainder after dividing by 10. ICAO Doc 9303 Part 3, section 4.9 defines it.</p>

    <p>Digits keep their value, letters A to Z count as 10 to 35, and the filler character &lt; counts as 0. ICAO's own date example, 27 July 1952, is written 520727. The sum is 5 × 7 + 2 × 3 + 0 × 1 + 7 × 7 + 2 × 3 + 7 × 1 = 35 + 6 + 0 + 49 + 6 + 7 = 103. The remainder after dividing by 10 is 3, so the field prints as 5207273.</p>

    <p>Now a whole passport line: the second line of the sample passport data page in ICAO's appendix, HA672242&lt;6YTO5802254M9601086&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;08. We ran this Python 3 code on it:</p>

    <pre><code>def check_digit(field):
    total = 0
    for i, c in enumerate(field):
        value = 0 if c == "&lt;" else int(c, 36)
        total += value * (7, 3, 1)[i % 3]
    return total % 10

line2 = "HA672242&lt;6YTO5802254M9601086&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;08"
print("document number", check_digit(line2[0:9]), "printed", line2[9])
print("date of birth", check_digit(line2[13:19]), "printed", line2[19])
composite = line2[0:10] + line2[13:20] + line2[21:43]
print("composite", check_digit(composite), "printed", line2[43])
print("date of birth edited to 580325", check_digit("580325"), "printed 4")</code></pre>

    <pre><code>document number 6 printed 6
date of birth 4 printed 4
composite 8 printed 8
date of birth edited to 580325 1 printed 4</code></pre>

    <p>The computed digits match, and the composite, 8, matches ICAO's published answer. It covers the document number, date of birth, expiry date and personal number fields with their check digits (positions 1 to 10, 14 to 20 and 22 to 43). In the last line we changed the date of birth from 580225 to 580325 and left the printed digit alone: the recomputed digit is 1, not 4, so the field fails, and the composite recomputes to 1 against a printed 8.</p>

    <p>A forger who also recomputes gets 1 for the date of birth and 2 for the composite, and the edited line passes. Any single wrong digit in a numeric field is always caught (we tried all 54 single-digit changes to the six-digit date). But letters whose values differ by a multiple of 10, such as A and K, give the same check digit, and so do A and the filler.</p>

    <p>ICAO says the check digits permit readers to verify that the data in the MRZ is correctly interpreted. They detect reading errors first and careless edits second. When one fails, suspect your read and recapture once before you suspect the document. Our <a href="/resources/blogs/mrz-passport-verification">MRZ verification guide</a> works a second example.</p>

    <h2>How do I automate KYC document verification, step by step?</h2>

    <p>Write the rules first, build the layers in the order above, and send every failure to a retry or a person, never a silent reject. Let clean cases pass end to end. Keep people on exceptions and screening hits, and log each decision with its reason.</p>

    <ol>
      <li>Write the policy as checkable rules: accepted documents per country and risk tier, and when verification must finish (the US and EU rules below differ on timing).</li>
      <li>Capture with guidance and reject bad images at the door.</li>
      <li>Classify the document before reading it (passport, ID card or licence, and format such as ICAO's TD1, TD2 or TD3) so the right field positions and checksum rules apply.</li>
      <li>Read with OCR and prefer machine readable sources (MRZ, barcode, chip) over printed text. Keep a confidence score per field. If a vision language model does the read, check its output the same way (see <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR</a>).</li>
      <li>Validate and cross-check: check digits, dates parsed with an explicit format per document type, expiry with a forward buffer, then names and addresses against the application and other documents after normalizing.</li>
      <li>Run liveness and face match, with thresholds set by what a wrong accept would cost.</li>
      <li>Screen against sanctions, PEP and watchlists, and re-screen when lists or customer data change.</li>
      <li>Route the result with the table below, then store the evidence and start the retention clocks.</li>
    </ol>

    <table>
      <thead>
        <tr><th>Signal</th><th>Likely cause</th><th>Route</th></tr>
      </thead>
      <tbody>
        <tr><td>Blurred, cropped or glare</td><td>Capture problem</td><td>Ask for a new photo, stop other checks</td></tr>
        <tr><td>One MRZ check digit fails</td><td>Most likely a misread</td><td>Recapture once, then human review</td></tr>
        <tr><td>Check digits pass, printed name differs from MRZ name</td><td>Transliteration, or an edit</td><td>Human review</td></tr>
        <tr><td>Name differs between ID and proof of address</td><td>Nickname, middle name, or another person</td><td>Reconcile and record the reason</td></tr>
        <tr><td>Face match below threshold</td><td>Old photo, poor selfie, or another person</td><td>One retry, then human review</td></tr>
        <tr><td>Screening hit on a name</td><td>Often a namesake</td><td>Analyst review using date of birth and nationality</td></tr>
      </tbody>
    </table>

    <h2>Does OCR for fraud detection in documents work?</h2>

    <p>Forged documents rarely fail the OCR step. They pass it cleanly, which is exactly the problem. OCR does not detect fraud by itself. It supplies clean text to checks that do: does the number satisfy its checksum, do the fields agree with each other, does the name match the application. Fraud signals come from those checks plus image and file forensics, and they can miss anything built to be consistent.</p>

    <p>Here is what slips through:</p>

    <ul>
      <li>A genuine document used by the wrong person. Only liveness and face match address this, and content-only liveness can be beaten by injected video (see <a href="/resources/blogs/liveness-detection-kyc">liveness detection</a>).</li>
      <li>AI-generated or altered images. FinCEN's alert of November 13, 2024 says criminals have used generative AI to alter or create images for IDs such as driver's licences and passports, and institutions often found them by re-reviewing account opening documents. Red flags include a photo that does not fit the stated date of birth, identity documents that disagree with each other, and a third-party webcam plugin during a live check.</li>
      <li>A synthetic identity. The documents can look real while the person never existed (see <a href="/resources/blogs/synthetic-identity-fraud-detection">synthetic identity fraud</a>).</li>
      <li>An edited proof of address. A PDF's metadata can show an edit that is invisible on the page (see <a href="/resources/blogs/proof-of-address-verification">proof of address verification</a>).</li>
    </ul>

    <p>Beyond IDs, see <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a>, <a href="/resources/blogs/invoice-fraud-detection">invoice fraud detection</a> and the <a href="/resources/blogs/document-fraud-detection-api">document fraud detection API guide</a>.</p>

    <h2>Where does OCR for AML compliance and other regulatory paperwork fit?</h2>

    <p>KYC is one part of anti-money laundering (AML). OCR for AML compliance turns the paperwork around it, such as wire instructions, source of funds statements, ownership forms and screening records, into structured fields that screening and monitoring rules can use. It does not decide whether activity is suspicious. A person or a documented rule makes that call.</p>

    <p>The same holds for OCR for regulatory compliance documents in general: it makes filings, forms and statements searchable, and the judgement stays with your team. OCR for compliance teams therefore means less retyping, one consistent exception queue and evidence for every decision.</p>

    <table>
      <thead>
        <tr><th>Paperwork</th><th>What OCR gives you</th><th>What still needs a decision</th></tr>
      </thead>
      <tbody>
        <tr><td>Beneficial ownership form</td><td>Owner names and percentages</td><td>Whether the ownership and control tests are met (<a href="/resources/blogs/beneficial-ownership-verification">guide</a>)</td></tr>
        <tr><td>Certificate of good standing</td><td>Legal name, status and dates</td><td>What good standing does and does not prove (<a href="/resources/blogs/kyb-verification">guide</a>)</td></tr>
        <tr><td>EIN letter or tax form</td><td>Names and numbers</td><td>What an IRS TIN match compares (<a href="/resources/blogs/ein-verification-kyc">guide</a>)</td></tr>
        <tr><td>Wire instructions, source of funds</td><td>Parties, amounts, currency</td><td>Whether it needs a suspicious activity report, and the filing deadlines (<a href="/resources/blogs/suspicious-activity-report-filing">guide</a>)</td></tr>
      </tbody>
    </table>

    <p>Our <a href="/resources/blogs/aml-document-checks">AML document checks guide</a> lists fields worth capturing from this paperwork, and the <a href="/resources/blogs/customer-due-diligence-process">customer due diligence guide</a> shows how a weighted risk score can hide a real risk.</p>

    <h2>What do auditors and regulators expect you to keep?</h2>

    <p>Rules differ by country and licence, but the pattern holds: keep what you collected, the document you relied on, how you verified it, the result, and how you resolved any discrepancy. This summarizes public rules and is not legal advice. Confirm what applies to you with your regulator or counsel.</p>

    <ul>
      <li>US banks (31 CFR 1020.220, the Customer Identification Program or CIP rule). Collect name, date of birth, address and an identification number, and verify within a reasonable time after the account is opened. Keep the identifying information for five years after the account is closed. Keep a description of each document relied on, the methods and results of verification, and how each substantive discrepancy was resolved, for five years after the record is made.</li>
      <li>EU (Regulation 2024/1624, the AMLR, applying from 10 July 2027). Verify identity before the relationship starts, using an identity document plus reliable, independent sources where relevant, or qualifying electronic identification (Articles 22 and 23). Keep copies of the due diligence documents, unredacted, for five years from the end of the relationship, then delete personal data unless other law says otherwise. References can replace copies if the information can be produced immediately and cannot be modified (Article 77).</li>
      <li>FATF. Identify and verify customers using reliable, independent source documents, data or information, with a risk-based approach.</li>
    </ul>

    <p>OCR for audit trail documentation is mostly a data design question. This record fits the wording above. The last row is our suggestion, not a requirement.</p>

    <table>
      <thead>
        <tr><th>Record</th><th>Why keep it</th></tr>
      </thead>
      <tbody>
        <tr><td>Original image or immutable reference, with capture time</td><td>The evidence the decision rested on</td></tr>
        <tr><td>Extracted values with per-field confidence</td><td>Shows what the system read and how sure it was</td></tr>
        <tr><td>Each check that ran, and its result</td><td>The CIP rule asks for methods and results of verification</td></tr>
        <tr><td>Each discrepancy, who resolved it, and why</td><td>The CIP rule asks how each substantive discrepancy was resolved</td></tr>
        <tr><td>Rule and model versions used (our suggestion)</td><td>Explains a decision made under last year's settings</td></tr>
      </tbody>
    </table>

    <p>OCR for auditors comes down to showing your work. Pick a closed file at random and check that a stranger could rebuild the decision from the record alone. A step that lives only in someone's memory is not in the trail. For how long to keep each record, see <a href="/resources/blogs/kyc-record-retention-requirements">KYC record retention</a>.</p>

    <h2>Where to begin with KYC</h2>
    <p>Start small and a little boring: the checks that catch the most problems are usually the cheapest ones.</p>

    <ul>
      <li>Starting from nothing: pick the documents to accept (see <a href="/resources/blogs/know-your-customer-documents">know your customer documents</a>), build layers 1 to 5 for passports and licences first, and test on your own documents (see <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>).</li>
      <li>Extracting fields but running no checks: add check digits, expiry rules and cross-document matching, then log every result.</li>
      <li>An audit is coming: pick 20 closed files, try to rebuild each decision from the record alone, and fix the gaps. <a href="/resources/blogs/kyc-document-verification">KYC document verification</a> gives an auditor's view of the same pipeline.</li>
      <li>Mostly identity documents, lending files or contracts: see <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">passports, ID cards and driver's licenses</a>, <a href="/resources/blogs/ocr-for-lending-and-underwriting">lending and underwriting</a> or <a href="/resources/blogs/ocr-for-legal-documents">legal documents</a>.</li>
      <li>Want a product built for this: DocsAPI is our product, so weigh this accordingly. Its <a href="/solutions/compliance-risk">compliance and risk page</a> covers KYC, AML and audit trail use cases.</li>
    </ul>

    <h2>Sources and what we checked</h2>

    <ul>
      <li>ICAO, <a href="https://www.icao.int/sites/default/files/publications/DocSeries/9303_p3_cons_en.pdf">Doc 9303 Part 3, 8th edition (2021)</a>: section 4.9, Appendix A and the chip statement. We reproduced examples 1 and 3 in code and matched ICAO's answers of 3 and 8.</li>
      <li>Cornell LII, <a href="https://www.law.cornell.edu/cfr/text/31/1020.220">31 CFR 1020.220</a>, the CIP rule for banks.</li>
      <li>FinCEN, <a href="https://www.fincen.gov/sites/default/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf">Alert FIN-2024-Alert004 on deepfake media</a>, November 13, 2024.</li>
      <li>EUR-Lex, <a href="https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng">Regulation (EU) 2024/1624</a>: Articles 22, 23, 77 and the application date.</li>
      <li>FATF, <a href="https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-on-Digital-Identity.pdf">Guidance on Digital Identity (March 2020)</a>. The FATF site refused automated access, so we read a copy hosted by Luxembourg's Ministry of Justice.</li>
      <li>HHS, <a href="https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/audit/index.html">OCR's HIPAA Audit Program</a>, the other meaning of OCR. The page blocked automated access, so we relied on its search listing.</li>
    </ul>

    <p>Limits: we checked these sources on September 21, 2026, and rules change. We did not open ICAO Parts 4 to 7, which define each format's field layout, so the composite positions are the ones that reproduce ICAO's answer. The regulation notes cover the US bank rule, the EU AMLR and FATF only. The 91% and 64% figures are arithmetic under a stated assumption, not measurements.</p>
  `,
  image: "/images/passport-ocr-revolutionizing.png",
  featuredImage: "/images/passport-ocr-revolutionizing.png",
  category: "Compliance",
  date: "October 5, 2026",
  datePublished: "2026-10-05T00:00:00.000Z",
  dateModified: "2026-10-05T00:00:00.000Z",
  last_updated: "October 5, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "ocr for kyc verification",
  secondary_keywords: [
    "ocr for kyc documents",
    "ocr for aml compliance",
    "ocr for fraud detection in documents",
    "ocr for regulatory compliance documents",
    "ocr for audit trail documentation",
    "ocr for auditors",
    "ocr for compliance teams",
    "how do i automate kyc document verification",
    "how do companies verify documents automatically",
  ],
  tags: ["KYC", "AML", "compliance", "OCR", "identity verification", "audit trail", "document fraud"],
  cluster: "compliance",
  faq: [
    {
      question: "What does OCR stand for in compliance, and is it the HHS Office for Civil Rights?",
      answer:
        "In this guide OCR means optical character recognition, software that reads text from images. In US healthcare the same three letters also stand for the HHS Office for Civil Rights, which runs HIPAA audits. Those audits are a different topic. If you searched for a HIPAA audit, the HHS website is the place to look, not an OCR engine.",
    },
    {
      question: "Is OCR accurate enough for KYC verification?",
      answer:
        "It depends on the document and the photo, so no single number applies. In our benchmark, clean typed English scored 97 to 99% and phone-photographed receipts 58 to 82%, and we did not test IDs. Design for misreads instead: use check digits, keep per-field confidence, and send low-confidence fields to a person.",
    },
    {
      question: "Do I still need a human reviewer if I automate KYC document verification?",
      answer:
        "Yes, for exceptions. Clean cases can pass automatically, but blurred captures, check digit failures, mismatched names, low face match scores and screening hits need a person, and the reviewer's reason should go into the record. The goal of automation is to shrink the queue a person sees, not to remove the person.",
    },
    {
      question: "What is the difference between KYC and AML?",
      answer:
        "KYC (know your customer) is the process of identifying and verifying who a customer is. AML (anti-money laundering) is the wider set of controls, including screening, transaction monitoring and reporting suspicious activity. KYC feeds AML. OCR helps most at the KYC end and in turning AML paperwork into structured data.",
    },
    {
      question: "Does OCR work on IDs in non-Latin scripts?",
      answer:
        "The printed area of an ID can be in any script, so your engine has to support it. The MRZ on a passport is different: ICAO says the name field can only use the letters A to Z and the filler character, so national characters are converted to Latin. Expect the MRZ name to differ from the printed name and build name matching that tolerates it.",
    },
    {
      question: "Can an AI vision model replace OCR for KYC documents?",
      answer:
        "It can read fields, but a generative model can return a plausible value that is not on the page, and it will not warn you. Treat its output like OCR output: run the check digits, date rules and cross-checks on it. Reading is only the first layer, whichever tool does it.",
    },
    {
      question: "How do I test that my automated KYC checks work?",
      answer:
        "Change one thing at a time in a test harness and confirm the right layer flags it: flip a digit in an MRZ string, set an expiry date in the past, swap a name, degrade the image. Use specimen or synthetic test data, not forged physical documents or real customer files, and keep the results as evidence that you tested.",
    },
    {
      question: "Does verification stop after onboarding?",
      answer:
        "No. Documents expire, customers change their details, and sanctions and PEP lists are updated, so checks need to run again on a schedule and when something changes. Our guides on KYC document expiry automation and perpetual KYC monitoring cover what to re-check and when.",
    },
    {
      question: "Can I store customer ID images, and for how long?",
      answer:
        "Usually you must keep records of what you verified for a period set by your regulator, then delete personal data when it ends. The US bank CIP rule and the EU AMLR both use five-year periods, counted from different events. This is not legal advice, so confirm your own rule before you set a delete date.",
    },
    {
      question: "What if the customer presents a digital ID instead of a photo of a card?",
      answer:
        "Then there is nothing to OCR. You verify the credential itself. The EU AMLR accepts electronic identification at the substantial or high assurance levels defined in the eIDAS regulation as a way to verify identity, alongside identity documents. Your pipeline needs a separate path for these, with the same logging.",
    },
  ],
}
