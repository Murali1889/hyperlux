import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa01: BlogPost = {
  id: "ka-01",
  title: "Passport MRZ Verification: The Actual Checksum Math",
  slug: "mrz-passport-verification",
  excerpt:
    "KYC vendor pages explain why MRZ checksums matter in general terms. Almost none walk through the algorithm itself or show a fully worked example.",
  description:
    "Passport MRZ verification: the actual ICAO 9303 checksum algorithm, a fully computed worked example, and why it also catches OCR errors, not just fraud.",
  metaTag: "Passport MRZ Verification: The Real Algorithm (2026)",
  summary:
    "A passport's machine-readable zone (MRZ) protects the document number, birth date and expiry date with check digits: convert each character to a number, multiply by the repeating weights 7, 3, 1, add the results and keep the remainder after dividing by 10. A mismatch means a misread or an altered field.",
  content: `
    <p>KYC vendor content is consistent and confident on one point: the Machine Readable Zone on a passport contains checksums, and validating them catches document tampering. What that content almost never does is show the actual algorithm, the exact letter-to-number conversion, the weighting pattern, or a real, fully computed example proving the math genuinely works the way it is described. "The math is non-trivial" is a true statement that explains nothing.</p>

    <p>This is the complete, real ICAO 9303 checksum algorithm, worked through carefully with real numbers from start to finish, the specific technical mechanics sitting underneath <a href="/use-cases/id-proofing">automated identity proofing</a>, and why it actually does more than just catch fraud. It sits alongside the broader document-verification pipeline covered in our <a href="/resources/blogs/kyc-document-verification">KYC document verification guide</a>.</p>

    <h2>Why the MRZ is more reliable to extract than the printed page above it</h2>

    <p>The Machine Readable Zone, the two or three lines of dense, fixed-width text sitting at the bottom of a passport's data page, is printed in OCR-B, a typeface specifically designed for reliable machine reading, distinct from whatever font the document's visual header data uses. This is a genuine, structural reason MRZ extraction is more dependable than reading a passport's printed name or issuing-authority fields: the character shapes themselves were chosen to minimize ambiguity for automated recognition, not for human readability or design consistency with the rest of the page.</p>

    <h2>The actual algorithm, step by step</h2>

    <p>Every numeric or alphanumeric field the MRZ checksums, document number, date of birth, expiry date, and an optional personal-number field, follows the exact same identical procedure every single time, with no field-specific variation in the underlying math itself. First, convert every character to a numeric value: digits 0 through 9 keep their own value, letters A through Z map to 10 through 35 in alphabetical order, and the filler character, a less-than sign used to pad short fields to their fixed length, maps to 0. Second, multiply each character's value by a weight that repeats in the sequence 7, 3, 1 across the field from left to right, position one gets weight 7, position two gets weight 3, position three gets weight 1, position four cycles back to weight 7, and so on. Third, sum every product. Fourth, divide that sum by 10 and take the remainder, that remainder is the check digit, printed as the single character immediately following the field it validates.</p>

    <table>
      <thead>
        <tr><th>Step</th><th>What happens</th></tr>
      </thead>
      <tbody>
        <tr><td>1. Convert</td><td>0-9 stay as-is, A-Z become 10-35, filler "&lt;" becomes 0</td></tr>
        <tr><td>2. Weight</td><td>Multiply each value by the repeating pattern 7, 3, 1, left to right</td></tr>
        <tr><td>3. Sum</td><td>Add every product together</td></tr>
        <tr><td>4. Mod 10</td><td>The remainder after dividing the sum by 10 is the check digit</td></tr>
      </tbody>
    </table>

    <h2>A fully worked example, computed field by field</h2>

    <p>Take a document number of AB1234567. Converting each character: A=10, B=11, then 1, 2, 3, 4, 5, 6, 7 as themselves. Applying weights 7, 3, 1 repeating across the nine positions gives products of 70, 33, 1, 14, 9, 4, 35, 18, and 7. Summing those: 191. The remainder after dividing by 10 is 1, so the check digit for this document number is 1, and the full field prints as AB12345671.</p>

    <p>Take a date of birth of 850315 (March 15, 1985). Values 8, 5, 0, 3, 1, 5 with weights 7, 3, 1, 7, 3, 1 produce products of 56, 15, 0, 21, 3, and 5. Summing: 100. The remainder is 0, so the check digit is 0, and the field prints as 8503150.</p>

    <p>Take an expiry date of 300420 (April 20, 2030). Values 3, 0, 0, 4, 2, 0 with the same repeating weights produce products of 21, 0, 0, 28, 6, and 0. Summing: 55. The remainder is 5, so the check digit is 5, printing as 3004205.</p>

    <p>With no personal-number data, that 14-character field is entirely filler characters, each valued at 0 regardless of weight, producing a sum of 0 and a check digit of 0.</p>

    <h2>The composite check digit that ties every field together</h2>

    <p>A final composite check digit runs the identical algorithm over a concatenation of specific character ranges pulled from across the line: the document number and its own check digit, the date of birth and its check digit, and the expiry date, its check digit, the personal-number field, and that field's check digit, all strung together into one 39-character string. Running our four computed fields through that concatenation, "AB12345671" plus "8503150" plus "3004205" plus fourteen filler characters plus a final "0", and applying the same weight-multiply-sum-mod-10 procedure across all 39 positions produces a sum of 298. The remainder after dividing by 10 is 8, the composite check digit, a single character validating that every other checksummed field on the line is internally consistent with every other one, not just individually correct on its own.</p>

    <h2>What a single-digit tampering attempt actually looks like under this math</h2>

    <p>Suppose a forger, working from a genuine document as a template, alters the printed date of birth from 850315 to 850305, changing the day from 15 to 05, without recalculating the field's check digit, which remains the original 0. Recomputing the checksum on the altered value: 8, 5, 0, 3, 0, 5 with weights 7, 3, 1, 7, 3, 1 gives products of 56, 15, 0, 21, 0, and 5, summing to 97. The remainder is 7. The document now shows a printed check digit of 0 sitting next to a field whose actual, recalculated check digit is 7, an immediate, unambiguous mismatch. This is the entire mechanism by which the checksum catches tampering: altering the visible data without correctly recalculating and re-printing the corresponding check digit, a step a forger working from a template or a doctored image frequently gets wrong or skips entirely.</p>

    <h2>Why the check digit is also a free OCR-error detector, not only a fraud check</h2>

    <p>This same mechanism catches something with nothing to do with fraud at all: an OCR misread. If an extraction pipeline reads a single character of the MRZ incorrectly, a smudge turning a 3 into an 8, a scan artifact turning an O into a 0, the recalculated check digit will almost certainly no longer match the printed one, exactly the same signature a tampered document produces. This means checksum validation should run on every genuine, unaltered document too, not only as a fraud screen, since a checksum failure on a document that is actually legitimate is frequently telling you the extraction step itself made an error, not that the document is fake, a distinction worth building explicit routing for rather than treating every checksum failure as an automatic fraud flag.</p>

    <h2>Why document-type classification has to happen before checksum validation can even run</h2>

    <p>ICAO 9303 defines multiple machine-readable document formats, TD1 for ID cards, TD2 for certain official travel documents, TD3 for standard passports, each with a different field layout, length, and line count. The specific character ranges the composite check digit concatenates differ by format. A pipeline that tries to apply TD3 field-position logic to a TD1 document, or vice versa, will compute checksums against the wrong character ranges entirely and fail validation on genuinely correct documents, an error that looks identical to a tampering flag unless the document type was correctly classified first, before any checksum math runs at all.</p>

    <h2>The filler-character rule that trips up short document numbers and personal numbers</h2>

    <p>Document number fields and the personal-number field are fixed-length, nine and fourteen characters respectively on a TD3 passport, but the actual values they hold are frequently shorter, since not every country issues document numbers or national identifiers that fill the entire allotted width. The remaining, unused positions are padded with the filler character, which the algorithm treats as a value of 0 regardless of position or weight. An extraction pipeline that fails to correctly identify filler characters, misreading a faint or partially obscured "&lt;" as some other character, or, conversely, treating genuine leading or trailing data as filler by mistake, corrupts the checksum calculation before it even runs, producing a validation failure on a document whose actual data was extracted correctly everywhere except the filler boundary itself.</p>

    <h2>Why this deserves more scrutiny than a document type with fewer checksummed fields</h2>

    <p>A passport MRZ checksums four separate fields plus a composite, five distinct opportunities for the algorithm to catch either tampering or an extraction error, compared to simpler machine-readable formats that checksum only one or two fields. This makes a passport's MRZ a genuinely richer verification signal than many other machine-readable document types, but only if a pipeline actually implements and checks all five, not just the composite alone. A pipeline that only validates the composite check digit and skips the four individual field checksums still catches most tampering, since tampering with any field breaks the composite too, but it loses the more specific diagnostic value of knowing exactly which individual field failed, information that matters directly for deciding whether a failure looks like an OCR error concentrated in one field or a deliberate alteration.</p>

    <h2>What I would check in your current MRZ verification pipeline</h2>

    <p>Ask whether your pipeline actually recomputes every field checksum, including the composite, or only extracts the MRZ text and trusts it without validation, since extraction accuracy and checksum validity are two different claims and only the second one actually catches tampering or misreads. Then ask whether a checksum failure routes differently depending on likely cause, a probable OCR misread on an otherwise-consistent document versus a genuine tampering signal, or whether every failure gets treated identically regardless of context. Confirm document-type classification, TD1, TD2, or TD3, runs before checksum logic, using the correct field-position rules for that specific format rather than a single hardcoded layout. And check specifically how filler characters are handled during extraction, since a misread filler boundary corrupts the checksum before the algorithm itself ever gets a chance to run correctly.</p>
    <p>Explaining that MRZ checksums catch tampering is true and, on its own, not particularly useful to anyone building or evaluating a verification pipeline. The actual algorithm is simple enough to compute by hand, as the worked example above shows, arithmetic a person could genuinely check with pencil and paper in a couple of minutes, and understanding it is the difference between trusting a vendor's claim and actually knowing what your own pipeline is, or is not, checking. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guides: <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification</a> and <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">OCR for passports, ID cards and driver's licenses</a>.</p>
  `,
  image: "/images/passport-ocr.png",
  featuredImage: "/images/passport-ocr.png",
  category: "Compliance",
  date: "August 23, 2026",
  datePublished: "2026-08-23T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
  last_updated: "September 28, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "mrz passport verification",
  secondary_keywords: [
    "mrz checker",
    "mrz reader api",
    "mrz passport checker",
    "mrz code passport",
    "icao 9303 check digit algorithm",
    "passport checksum validation",
    "mrz composite check digit",
    "passport ocr fraud detection",
    "machine readable zone verification",
    "td1 td2 td3 mrz format",
  ],
  tags: ["compliance", "KYC", "passport OCR", "identity verification", "fraud detection"],
  cluster: "compliance",
  faq: [
    {
      question: "What is the ICAO 9303 MRZ checksum algorithm?",
      answer:
        "Convert each character to a number (digits as themselves, A-Z as 10-35, filler as 0), multiply by a repeating 7-3-1 weight pattern left to right, sum the products, and take the remainder after dividing by 10. That remainder is the check digit.",
    },
    {
      question: "What does the composite check digit on a passport MRZ actually validate?",
      answer:
        "It runs the same algorithm over a concatenation of the document number, date of birth, and expiry date fields along with their individual check digits, confirming every field is internally consistent with every other one.",
    },
    {
      question: "Does a failed MRZ checksum always mean the document is fraudulent?",
      answer:
        "No. A checksum failure can also indicate an OCR misread during extraction rather than actual tampering. Both produce the identical mismatch signature and need different handling.",
    },
    {
      question: "Why is the MRZ more reliable to extract than the rest of a passport's data page?",
      answer:
        "It is printed in OCR-B, a typeface specifically designed for reliable machine reading, unlike the fonts used for the document's other printed fields.",
    },
    {
      question: "Why does document type need to be classified before checksum validation runs?",
      answer:
        "ICAO 9303 defines different formats, TD1, TD2, TD3, with different field layouts and lengths. Applying the wrong format's field-position rules produces checksum failures on genuinely valid documents.",
    },
    {
      question: "What happens to a checksum if a forger changes a digit but doesn't update the check digit?",
      answer:
        "The recalculated check digit no longer matches the printed one. A worked example altering a date of birth by one digit shows the check digit shifting from 0 to 7, an immediate, detectable mismatch.",
    },
    {
      question: "How do I use an MRZ checker?",
      answer:
        "An MRZ checker recomputes each check digit from the MRZ characters using the repeating 7, 3, 1 weights and compares it with the printed digit; any mismatch flags a misread or an altered field. You can run the steps on this page by hand, or call an MRZ reader API that returns both the parsed fields and the check results.",
    },
    {
      question: "Where is the MRZ code on a passport?",
      answer:
        "At the bottom of the passport data page: two lines of 44 characters printed in the OCR-B font, with the < character as filler. Line one holds the document type, issuing country and name; line two holds the document number, nationality, date of birth, sex, expiry date and their check digits.",
    },
  ],
}
