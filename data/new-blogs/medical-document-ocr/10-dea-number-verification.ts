import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd10: BlogPost = {
  id: "md-10",
  title: "DEA Number Verification: The Check Digit Formula, Worked",
  slug: "dea-number-verification",
  excerpt:
    "Two DEA numbers that look equally plausible. One passes a nine-second arithmetic check, the other fails it. Here is the exact formula and why it matters.",
  description:
    "The real DEA number check digit algorithm, a full worked example computing and verifying it, and why this weighted-sum check is a checkable fraud control.",
  metaTag: "DEA Number Verification: The Check Digit Formula",
  content: `
    <p>Write down two DEA registration numbers: AR5281477 and AR5281479. To a pharmacist glancing at a faxed prescription at 11 p.m., both look like plausible, well-formed identifiers, two letters and seven digits, nothing visually off about either one. Run each through a specific arithmetic formula that takes about the same time as reading this sentence, and one of them fails immediately. Not because it looks wrong, but because it is wrong, in a way that a piece of paper and a person's eyes cannot detect on their own. That formula, the DEA check digit algorithm, is the actual mechanism behind the phrase "DEA number verification," and almost nothing published about it walks through the math with real numbers from start to finish.</p>

    <p>This post does that. It covers the exact weighted-sum formula the DEA uses to embed a checksum into every registration number, a full worked example computing that checksum from scratch, a second worked example showing what happens when someone fabricates or garbles a number, and, just as important, what this specific check can and cannot tell you about a prescription's legitimacy. If you're building or evaluating a system that processes prescriptions, referrals, or any document carrying a prescriber's DEA number, this is the mechanism worth understanding in detail rather than skimming, and it's one piece of the broader document-verification problem covered across our <a href="/documents/medical-docs">medical document processing</a> resources.</p>

    <h2>What a DEA number is actually built from</h2>

    <p>A DEA registration number is nine characters: two letters followed by seven digits. It is not an arbitrary identifier assigned in sequence. The structure carries information, and the final digit carries a mathematical check.</p>

    <p>The first letter denotes the registrant's category. Practitioner registrations, physicians, dentists, veterinarians, and similar individual prescribers, generally begin with A, B, or F. Mid-level practitioners, nurse practitioners and physician assistants prescribing under their own authority, use M. Other letters cover manufacturers, distributors, researchers, narcotic treatment programs, and Department of Defense contractors, among other categories, and the DEA has reused and reassigned some of these letters over the decades as combinations ran out, which matters for anyone tempted to hardcode a single permanent meaning per letter.</p>

    <p>The second letter is, almost always, the first letter of the registrant's last name. A physician named Dr. Feelgood registered under the A category would typically get a number starting AF. When the registrant's name begins with a number rather than a letter, or in certain entity registrations, the DEA substitutes a 9 for the second character instead. There's a documented exception worth knowing about here too: the DEA has, on rare occasions, issued a second character of 9 to individual practitioners whose last names don't start with a number at all, deviating from the standard rule for reasons that aren't publicly documented. That single fact matters more than it looks. It means a mismatch between the second letter and the prescriber's actual last name is a signal worth investigating, not a rule you can enforce as an automatic hard fail.</p>

    <p>The seven digits that follow the two letters are where the checksum lives. The first six are effectively free digits assigned as part of the registration sequence. The seventh, the last character in the whole number, is not free at all. It's computed from the other six using a fixed formula, and that's what makes it checkable without contacting the DEA.</p>

    <h2>The check digit algorithm, step by step</h2>

    <p>Label the six digits that precede the check digit as positions 1 through 6, in order. The formula that produces the seventh digit, the check digit, works like this:</p>

    <ol>
      <li>Add the digits in positions 1, 3, and 5 (the first, third, and fifth digits).</li>
      <li>Add the digits in positions 2, 4, and 6 (the second, fourth, and sixth digits), then multiply that sum by two.</li>
      <li>Add the two results together.</li>
      <li>Take the rightmost digit of that total, meaning the total modulo 10. That is the check digit, and it must equal the seventh and final digit of the DEA number.</li>
    </ol>

    <p>It's a weighted-sum, modulo-10 checksum, structurally similar in spirit to the Luhn algorithm used on credit cards and, as it happens, on National Provider Identifiers, though the specific weighting is different. If the computed value doesn't match the number's actual seventh digit, the DEA number is not internally consistent. It was mistyped, misread, fabricated by someone who didn't know or bother to apply the formula, or altered somewhere along the way from prescriber to pharmacy.</p>

    <h2>A fully worked example: computing a check digit from scratch</h2>

    <p>Say a physician named Dr. Alan Reyes is being issued a new practitioner registration. The category letter is A, and the second letter is R, for Reyes. The DEA assigns the six-digit base sequence 528147. Here is how the seventh digit gets computed.</p>

    <p>Digits in positions 1, 3, and 5 are 5, 8, and 4. Their sum is 5 + 8 + 4 = 17.</p>

    <p>Digits in positions 2, 4, and 6 are 2, 1, and 7. Their sum is 2 + 1 + 7 = 10, and doubled that's 20.</p>

    <p>Add the two results: 17 + 20 = 37.</p>

    <p>The rightmost digit of 37 is 7. That's the check digit. Dr. Reyes's complete, valid DEA number is AR5281477.</p>

    <p>Anyone with the six base digits and a calculator can reproduce that seventh digit in a few seconds. That's the entire point of the design. It doesn't require a live connection to a DEA database, it requires arithmetic, which is exactly what makes it usable at the moment a prescription is being read, whether by a pharmacist, an intake technician, or an automated extraction system.</p>

    <h2>A fully worked example: catching a fabricated number</h2>

    <p>Now take the fraud scenario directly. Someone forging a prescription, or reusing a stolen prescription pad, writes down a DEA number that looks structurally right but wasn't generated by the actual formula, because they don't know it exists. Say the forged prescription lists AR1234567, attached to a name that's supposed to pass as a legitimate prescriber.</p>

    <p>Run the same check. Digits in positions 1, 3, and 5 are 1, 3, and 5. Their sum is 1 + 3 + 5 = 9. Digits in positions 2, 4, and 6 are 2, 4, and 6. Their sum is 2 + 4 + 6 = 12, doubled is 24. Add the two results: 9 + 24 = 33. The rightmost digit is 3. The number as written ends in 7, not 3. The check fails.</p>

    <p>That mismatch, computed value 3 against stated digit 7, is the entire signal, and it's produced without ever looking up whether AR1234567 exists in any DEA record. Someone inventing a plausible-looking seven-digit tail has, roughly, a one-in-ten chance of accidentally landing on a value where the formula happens to check out, since the check digit is a single base-10 digit. Nine times out of ten, a number fabricated without knowledge of the formula fails this test instantly. That's a meaningfully specific, verifiable, checkable fraud control, not a vague heuristic. It's the same reason credit card processors run Luhn validation before ever authorizing a charge against the actual account: catching a malformed number locally, in milliseconds, is cheaper and faster than discovering the problem downstream.</p>

    <h2>A fully worked example: catching a transposition error</h2>

    <p>Fraud isn't the only thing this catches, and it's worth separating the two cases because they matter differently to a document-processing system. Take Dr. Reyes's real, valid number again, AR5281477, and imagine it gets copied onto a referral form by hand, or read by an OCR engine off a low-quality fax, and two adjacent digits get transposed. The 8 and the 1 in positions three and four swap, producing AR5218477 instead of AR5281477, with the check digit left unchanged at 7 because whoever or whatever introduced the error didn't recompute anything.</p>

    <p>Recheck it. The six base digits are now 5, 2, 1, 8, 4, 7. Positions 1, 3, and 5 are 5, 1, and 4, summing to 10. Positions 2, 4, and 6 are 2, 8, and 7, summing to 17, doubled to 34. Add the results: 10 + 34 = 44. The rightmost digit is 4. The stated check digit is still 7. Mismatch, and the transposed number gets flagged even though nobody intended fraud at all.</p>

    <p>This is exactly the failure mode that matters most in a high-volume document intake pipeline, where DEA numbers are being extracted from scanned prescriptions, referral letters, or fax transmissions at scale. Digit transposition and character misreads are common, ordinary OCR failure modes, not exotic ones. A checksum that runs automatically the instant a number is extracted catches both the honest data-entry error and the dishonest fabrication with the identical piece of math, and routes either case to a human for a second look instead of letting a broken number silently flow into a claim, a dispensing record, or an EHR field.</p>

    <h2>What the check digit proves, and what it deliberately does not</h2>

    <p>This is the part that gets skipped most often in explanations of DEA number verification, and it's the difference between a checksum and full verification. A passing check digit tells you exactly one thing: the number is internally consistent with the DEA's issuance formula. It does not tell you that the number was ever actually assigned to anyone. It does not tell you the registration is currently active rather than expired, retired, or surrendered. And critically, it does not tell you that the number belongs to the person whose name is attached to this particular prescription.</p>

    <p>That last gap is a real, documented fraud pattern, not a theoretical one. A forger who copies a legitimate, currently active DEA number off an old prescription, a stolen pad, or a leaked record produces a number that passes the check digit test perfectly, because it's a real number, correctly formed, just attached to the wrong transaction. The checksum can't distinguish "this number was legitimately issued" from "this number is legitimately issued to someone else and is being used without authorization." Catching that second case requires cross-referencing against the actual DEA registrant record, confirming the registration is active, confirming it's authorized for the specific drug schedule being prescribed, and in a well-run pharmacy workflow, checking the state prescription drug monitoring program for a pattern that doesn't match the prescriber's normal activity.</p>

    <table>
      <thead>
        <tr><th>What the check digit catches</th><th>What it cannot catch</th></tr>
      </thead>
      <tbody>
        <tr><td>Randomly invented or guessed digit sequences</td><td>A real, active DEA number stolen or copied from a legitimate registrant</td></tr>
        <tr><td>Typos and manual data entry mistakes</td><td>A registration that has expired, been surrendered, or been revoked</td></tr>
        <tr><td>OCR misreads and digit transpositions from scanned documents</td><td>A number correctly formed but issued for a different drug schedule than what's being prescribed</td></tr>
        <tr><td>Structurally malformed numbers (wrong length, wrong character types)</td><td>Whether the name attached to the number actually matches the registrant of record</td></tr>
      </tbody>
    </table>

    <p>Put plainly, the check digit is a fast, free, offline first filter. It's the thing you run before you spend the time or the API call on a lookup against DEA's registrant data or a state PDMP. It should never be the last check in a system that dispenses controlled substances, but skipping it entirely and going straight to a slower, external lookup for every single prescription wastes a fast, cheap, deterministic signal that could have rejected the obviously broken ones first.</p>

    <h2>DEA check digit versus other healthcare identifier checksums</h2>

    <p>DEA numbers aren't the only healthcare identifier built with an embedded self-check. It's worth knowing how the mechanism compares, because the differences affect how a document-processing system should treat each one.</p>

    <table>
      <thead>
        <tr><th>Identifier</th><th>Check digit mechanism</th><th>Where it's checked automatically</th></tr>
      </thead>
      <tbody>
        <tr><td>DEA registration number</td><td>Weighted sum of six base digits (odd positions summed, even positions summed and doubled), modulo 10, against the 7th digit</td><td>Rarely built into general EHR or pharmacy intake fields; often left to manual or vendor-specific validation</td></tr>
        <tr><td>National Provider Identifier (NPI)</td><td>Luhn "double-add-double" algorithm applied to the first 9 digits prefixed with 80840, against the 10th digit</td><td>Increasingly standard in claims clearinghouses and provider directories, covered in our <a href="/resources/blogs/npi-verification-api">NPI verification API</a> piece</td></tr>
        <tr><td>NDC (National Drug Code)</td><td>No embedded check digit at all; validity depends entirely on the code existing in FDA's registered NDC directory</td><td>Requires an external lookup every time, since there's no arithmetic self-check possible, discussed further in our <a href="/resources/blogs/ndc-code-extraction">NDC code extraction</a> piece</td></tr>
      </tbody>
    </table>

    <p>The contrast with NDC codes is instructive. A DEA number or an NPI can be flagged as malformed instantly, offline, using nothing but arithmetic. An NDC code can look perfectly plausible in format and still be entirely fictional, because there's no embedded math to check against, only an external registry. That difference should shape how much weight a document-processing pipeline puts on format validation for each field. For DEA numbers and NPIs, a failed checksum is a strong, immediate signal. For NDC codes, format alone tells you almost nothing, and the lookup is mandatory rather than optional.</p>

    <h2>Where this belongs in an automated prescription workflow</h2>

    <p>In a manual pharmacy workflow, a pharmacist mentally or manually applies this check, if they apply it at all, which in a busy setting under time pressure is inconsistent at best. In an automated document intake pipeline, the check digit calculation is trivial to run on every single extracted DEA number, every single time, with zero marginal cost per document and zero chance of a tired human skipping it during a rush.</p>

    <p>A practical implementation runs the checksum as the very first validation step immediately after OCR extraction pulls the DEA number field off a prescription, referral, or intake form, before that field ever gets written into a downstream system. A passing checksum lets the document proceed to the next validation layer, matching the registrant type letter against the prescriber's known credentials, confirming active registration status, and checking schedule authorization for the specific drug being prescribed. A failing checksum stops the document immediately and routes it to a human reviewer with the specific mismatch flagged, computed digit versus stated digit, rather than a vague "review this prescription" flag that gives the reviewer no starting point. That specificity is what separates a genuinely checkable control from a box-ticking compliance step, and it's the same design principle that shows up in verification workflows across other structured healthcare identifiers, including the <a href="/resources/blogs/npi-verification-api">NPI checksum</a> and the structured fields inside <a href="/resources/blogs/cms-1500-form-processing">CMS-1500 claim forms</a>.</p>

    <p>None of this replaces the DEA's own registrant lookup, and it shouldn't be sold as if it does. What it does is cheap, fast, and deterministic in a way that a registrant database call is not: it turns a plausible-looking nine-character string into either a mathematically consistent number worth checking further, or a number that's already, provably, wrong, before anyone has to pick up a phone or wait on an external API. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-medical-documents">OCR for medical documents</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Healthcare",
  date: "September 8, 2026",
  datePublished: "2026-09-08T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "dea number verification",
  secondary_keywords: [
    "DEA check digit algorithm",
    "DEA registration number format",
    "verify DEA number formula",
    "prescription fraud detection",
    "DEA number checksum",
    "controlled substance prescription verification",
  ],
  tags: ["healthcare", "DEA verification", "prescription fraud", "medical OCR", "controlled substances"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is the DEA number check digit algorithm?",
      answer:
        "Add the digits in positions 1, 3, and 5 of the six base digits. Add the digits in positions 2, 4, and 6 and multiply that sum by two. Add both results together. The rightmost digit of that total must equal the seventh and final digit of the DEA number.",
    },
    {
      question: "How do you verify a DEA number is valid?",
      answer:
        "Apply the weighted-sum formula to the six digits following the two letters, take the result modulo 10, and compare it to the actual seventh digit. If they match, the number is internally consistent. If they don't match, the number is malformed, whether from a typo, an OCR misread, or fabrication.",
    },
    {
      question: "Can a fabricated DEA number pass the check digit test?",
      answer:
        "It's possible but unlikely by chance, since the check digit is a single base-10 digit, meaning roughly a 1-in-10 probability of an arbitrary guess matching. A far more common fraud pattern is using a real, valid, correctly formed DEA number that was stolen or copied from an actual registrant, which the check digit alone cannot detect.",
    },
    {
      question: "What can the DEA check digit not catch?",
      answer:
        "It cannot confirm the registration is currently active, that it authorizes the specific drug schedule being prescribed, or that the number actually belongs to the prescriber named on the document. A real, active DEA number used without authorization by someone other than its registrant will pass the checksum every time.",
    },
    {
      question: "What does the first letter of a DEA number mean?",
      answer:
        "It denotes the registrant category. Individual practitioner registrations typically start with A, B, or F, mid-level practitioners use M, and other letters cover manufacturers, distributors, researchers, and narcotic treatment programs. The DEA has reused and reassigned some letters over time as combinations ran out.",
    },
    {
      question: "How is a DEA number different from an NPI for verification purposes?",
      answer:
        "Both carry an embedded checksum, but the algorithms differ. DEA numbers use a weighted sum of six digits modulo 10. NPIs use the Luhn double-add-double algorithm applied to the first nine digits prefixed with 80840. Both can be validated instantly offline, unlike NDC drug codes, which have no embedded check digit at all.",
    },
  ],
}
