import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd08: BlogPost = {
  id: "sd-08",
  title: "Container Number Verification: The ISO 6346 Check Digit",
  slug: "container-number-verification",
  excerpt:
    "A container arrives stenciled HLXU 659847. The manifest says HLXU 659347. One digit apart, and the check digit catches it instantly. Here is the exact math.",
  description:
    "The full ISO 6346 check digit algorithm for container number verification, a worked example, and why it catches OCR misreads before they become tracking errors.",
  metaTag: "Container Number Verification: ISO 6346 Explained",
  content: `
    <p>Two container numbers, one digit apart: HLXU 659347 and HLXU 659847. A human glancing at a scanned bill of lading would probably not notice the swap, a 3 that got read as an 8 in a slightly smudged stencil photo. But run either string through the ISO 6346 check digit calculation and the difference stops being subtle. The real container's check digit is 7. The misread version demands a check digit of 9. Nothing about the two strings looks obviously wrong to a person, and everything about them is distinguishable to an algorithm that takes eleven characters seriously. That gap, between what looks fine and what actually validates, is the entire reason container number verification exists as a discrete step in a shipping document pipeline rather than something you assume OCR gets right because the text extraction confidence score said 98 percent.</p>

    <p>This post walks through the actual published algorithm behind that check digit, computes it by hand on a real container number, then breaks it deliberately to show what a single misread digit does to the math. If you are building or evaluating a system that extracts container numbers from bills of lading, container gate receipts, or terminal EDI messages as part of a broader <a href="/documents/shipping-docs">shipping document processing</a> pipeline, this is the layer that turns "we extracted some text" into "we extracted a container number we can trust downstream."</p>

    <h2>What an ISO 6346 container number actually contains</h2>

    <p>Every standard shipping container carries an eleven character identifier defined by ISO 6346, the international standard governing freight container coding, identification, and marking. The identifier is not a random serial number. It is built from four distinct fields, each with a fixed length and a fixed job.</p>

    <table>
      <thead>
        <tr><th>Field</th><th>Length</th><th>Content</th><th>Example (CSQU3054383)</th></tr>
      </thead>
      <tbody>
        <tr><td>Owner code</td><td>3 letters</td><td>Registered with the Bureau International des Containers, uniquely identifies the leasing or operating company</td><td>CSQ</td></tr>
        <tr><td>Category identifier</td><td>1 letter</td><td>Always U for freight containers, J for detachable freight container-related equipment, or Z for trailers and chassis</td><td>U</td></tr>
        <tr><td>Serial number</td><td>6 digits</td><td>Assigned by the owner, unique within that owner's fleet</td><td>305438</td></tr>
        <tr><td>Check digit</td><td>1 digit</td><td>Computed from the ten characters before it, used to verify the whole string was read or transcribed correctly</td><td>3</td></tr>
      </tbody>
    </table>

    <p>The owner code plus category identifier form what the industry calls the BIC code, and the registry behind it is what makes a container number globally unique rather than just unique within one shipping line's own numbering scheme. But the field that matters for this post is the last one. The check digit is not part of the container's identity in any meaningful sense, an owner could not choose it and it carries no information about the box itself. It exists purely as a mathematical fingerprint of the ten characters that came before it, and that is precisely what makes it useful for catching errors that a spell checker, a format regex, or a human proofreader would miss.</p>

    <h2>The letter to number conversion table</h2>

    <p>The check digit calculation needs every character in the container number to be a number, but the first four characters are letters. ISO 6346 solves this with a fixed conversion table that assigns each letter of the alphabet a numeric equivalent, starting at 10 for A and counting upward, but deliberately skipping every multiple of 11 along the way.</p>

    <table>
      <thead>
        <tr><th>Letter</th><th>Value</th><th>Letter</th><th>Value</th><th>Letter</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr><td>A</td><td>10</td><td>J</td><td>20</td><td>S</td><td>30</td></tr>
        <tr><td>B</td><td>12</td><td>K</td><td>21</td><td>T</td><td>31</td></tr>
        <tr><td>C</td><td>13</td><td>L</td><td>23</td><td>U</td><td>32</td></tr>
        <tr><td>D</td><td>14</td><td>M</td><td>24</td><td>V</td><td>34</td></tr>
        <tr><td>E</td><td>15</td><td>N</td><td>25</td><td>W</td><td>35</td></tr>
        <tr><td>F</td><td>16</td><td>O</td><td>26</td><td>X</td><td>36</td></tr>
        <tr><td>G</td><td>17</td><td>P</td><td>27</td><td>Y</td><td>37</td></tr>
        <tr><td>H</td><td>18</td><td>Q</td><td>28</td><td>Z</td><td>38</td></tr>
        <tr><td>I</td><td>19</td><td>R</td><td>29</td><td></td><td></td></tr>
      </tbody>
    </table>

    <p>Notice what is missing from that sequence: 11, 22, and 33 never appear as a letter value. That is not an oversight, it is deliberate. The final step of the algorithm divides by 11, and if a letter value were itself a multiple of 11, it could interact with that division in a way that produces ambiguous or degenerate results for certain character combinations. Skipping those three values keeps every letter's contribution to the final sum mathematically well behaved under a modulo 11 check. It is a small design choice, but it is the kind of detail that separates a standard someone actually stress tested against edge cases from one that just seemed to work on the examples someone happened to try.</p>

    <h2>The weighted sum algorithm, step by step</h2>

    <p>With every character converted to a number, ISO 6346 assigns each of the ten positions, four letters and six digits, a weight equal to 2 raised to that position's index, counting left to right starting at zero.</p>

    <table>
      <thead>
        <tr><th>Position</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th><th>10th</th></tr>
      </thead>
      <tbody>
        <tr><td>Exponent</td><td>2^0</td><td>2^1</td><td>2^2</td><td>2^3</td><td>2^4</td><td>2^5</td><td>2^6</td><td>2^7</td><td>2^8</td><td>2^9</td></tr>
        <tr><td>Weight</td><td>1</td><td>2</td><td>4</td><td>8</td><td>16</td><td>32</td><td>64</td><td>128</td><td>256</td><td>512</td></tr>
      </tbody>
    </table>

    <p>The full procedure is four steps. First, convert each of the four owner and category letters to its numeric equivalent using the table above, and take each of the six serial number digits at face value. Second, multiply each of those ten values by the weight assigned to its position, so the first character is multiplied by 1, the second by 2, the third by 4, and so on, doubling each time up through the tenth character multiplied by 512. Third, add all ten products together into a single sum. Fourth, divide that sum by 11 and keep the remainder. That remainder is the check digit, with one exception: if the remainder comes out to exactly 10, the check digit is written as 0 instead, because a single digit position cannot hold a two digit value.</p>

    <h2>A full worked example: CSQU 305438</h2>

    <p>Take the container number CSQU3054383, a commonly cited real world example of a correctly formatted ISO 6346 identifier. Strip off the check digit and work through the first ten characters, CSQU305438, one position at a time.</p>

    <table>
      <thead>
        <tr><th>Character</th><th>C</th><th>S</th><th>Q</th><th>U</th><th>3</th><th>0</th><th>5</th><th>4</th><th>3</th><th>8</th></tr>
      </thead>
      <tbody>
        <tr><td>Numeric value</td><td>13</td><td>30</td><td>28</td><td>32</td><td>3</td><td>0</td><td>5</td><td>4</td><td>3</td><td>8</td></tr>
        <tr><td>Weight</td><td>1</td><td>2</td><td>4</td><td>8</td><td>16</td><td>32</td><td>64</td><td>128</td><td>256</td><td>512</td></tr>
        <tr><td>Product</td><td>13</td><td>60</td><td>112</td><td>256</td><td>48</td><td>0</td><td>320</td><td>512</td><td>768</td><td>4096</td></tr>
      </tbody>
    </table>

    <p>Add the ten products: 13 + 60 + 112 + 256 + 48 + 0 + 320 + 512 + 768 + 4096 equals 6185. Divide 6185 by 11: 11 goes into 6185 exactly 562 times with a remainder of 3, since 562 times 11 is 6182 and 6185 minus 6182 is 3. The remainder is 3, it is not 10, so no substitution is needed. The check digit is 3, which matches the published check digit on CSQU3054383 exactly. That is the whole algorithm, run on a real number, arriving at the real answer.</p>

    <h2>A second example, run in the verification direction</h2>

    <p>The first example computed a check digit from scratch. In an actual document pipeline, verification usually runs the other direction: you already have all eleven characters from an OCR pass or an EDI message, and you need to confirm the eleventh matches what the first ten predict. Take a constructed but algorithmically genuine example, MSCU6652830.</p>

    <p>Converting and weighting MSCU665283 the same way: M is 24, S is 30, C is 13, U is 32, then the digits 6, 6, 5, 2, 8, 3 stay as written. Multiplying by weights 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 in order gives products of 24, 60, 52, 256, 96, 192, 320, 256, 2048, and 1536. Summed, those come to 4840. Divide 4840 by 11: 11 times 440 is 4840 exactly, a remainder of 0. The check digit is 0, so MSCU6652830 is internally consistent, an OCR engine or EDI parser that extracted exactly those eleven characters can trust the extraction was clean. If the extracted string had instead read MSCU6652831 or any other trailing digit besides 0, the verification step would flag it immediately, before that container number ever reached a tracking system, a customs filing, or a terminal appointment booking.</p>

    <h2>Why this catches OCR misreads before they become tracking errors</h2>

    <p>Go back to the pair from the opening: HLXU659347 as the correct container number, and HLXU659847 as what an OCR engine might output if the printed 3 in the eighth position has degraded stenciling, glare, or a paint chip that makes it resemble an 8. Running the algorithm on the correct string, HLXU659347, converts H to 18, L to 23, X to 36, U to 32, then the digits 6, 5, 9, 3, 4, 7. Weighted and summed, that comes to 6288, and 6288 divided by 11 is 571 with a remainder of 7. The correct check digit is 7. Running the same algorithm on the misread string, HLXU659847, changes only the eighth character's contribution, from 3 times weight 128 (384) to 8 times weight 128 (1024), a difference of 640. The new sum is 6928, and 6928 divided by 11 is 629 with a remainder of 9. The misread version demands a check digit of 9.</p>

    <p>If the container's actual stenciled check digit is 7, and the OCR engine also correctly read that final digit as 7 while misreading the eighth character as an 8, the mismatch between the computed check digit (9, based on the misread serial) and the extracted check digit (7, correctly read) is immediate and unambiguous. The system does not need a second photo, a manual review queue, or a human glancing at the image to catch that something is wrong. The arithmetic itself flags it, in the time it takes to run ten multiplications and a division.</p>

    <table>
      <thead>
        <tr><th>Scenario</th><th>Extracted serial digits</th><th>Extracted check digit</th><th>Computed check digit</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>Clean read</td><td>659347</td><td>7</td><td>7</td><td>Match, accept</td></tr>
        <tr><td>OCR misread 3 as 8</td><td>659847</td><td>7</td><td>9</td><td>Mismatch, reject and re-verify</td></tr>
        <tr><td>OCR misread 0 as 8 (owner code letter unaffected, digit only)</td><td>659340 read as 659348</td><td>varies</td><td>varies</td><td>Mismatch, reject and re-verify</td></tr>
      </tbody>
    </table>

    <p>This matters more in shipping documents than in most other OCR use cases because a container number does not travel alone. The same eleven characters get keyed, scanned, or transmitted at the port of loading, at the ocean carrier's booking system, in an EDI 315 or CODECO status message, at the customs entry filing, and again at the destination terminal's gate system. An error introduced at any one of those points and not caught propagates into every downstream system that trusts the record it inherited. A container that gets mis-tracked because one system has HLXU659347 and another has HLXU659847 is not a minor inconvenience, it can mean a demurrage clock running against the wrong box, a customs hold triggered on a number that does not match the manifest, or a warehouse team searching a yard for a container that technically does not exist under the number they were given.</p>

    <h2>What a checksum field changes about an OCR pipeline</h2>

    <p>Most fields on a shipping document have no built in error detection. A consignee name, a port of discharge, a commodity description, all of these can be misread by OCR and the only way to catch the error is a downstream mismatch against another document, a human review, or the error simply persisting silently. A container number is structurally different, and a document intelligence pipeline should treat it differently.</p>

    <table>
      <thead>
        <tr><th>Field type</th><th>Self-validating</th><th>How an error surfaces</th><th>Detection latency</th></tr>
      </thead>
      <tbody>
        <tr><td>Container number (ISO 6346)</td><td>Yes, via check digit</td><td>Computed check digit disagrees with extracted check digit</td><td>Immediate, at extraction time</td></tr>
        <tr><td>Bill of lading number</td><td>No standard checksum</td><td>Cross-document mismatch or downstream rejection</td><td>Hours to days later</td></tr>
        <tr><td>HS code</td><td>Partially, via chapter/heading structure but no arithmetic check digit</td><td>Customs system rejection</td><td>At filing, often after other processing has occurred</td></tr>
        <tr><td>Consignee name or address</td><td>No</td><td>Delivery failure or manual review</td><td>Delivery attempt, days later</td></tr>
      </tbody>
    </table>

    <p>That difference is the whole argument for running the check digit calculation as a mandatory validation step immediately after OCR extraction, not as an optional data quality check run later in a batch job. A container number is one of the few fields on a shipping document where the document format itself hands you a free error detector, and skipping it means throwing away verification that costs a handful of arithmetic operations and catching nothing that the check digit would have caught for free.</p>

    <h2>What check digit verification does not catch</h2>

    <p>It is worth being precise about the limits here, because a check digit is not a spell checker for the entire container number. The algorithm verifies internal mathematical consistency among the eleven characters, nothing more. If an OCR engine misreads two characters in a way that happens to produce the same check digit as the correct string, and that can happen, a check digit collision is mathematically possible, the error passes through undetected. Similarly, if a container's stenciled digits are correctly read but the container itself is the wrong one entirely, a legitimate, internally consistent number belonging to a different box, the check digit offers no help, because ISO 6346 has no way to know which specific physical container a given valid number should be attached to. Check digit verification is a necessary filter against transcription and OCR errors within a single field. It is not a substitute for cross-referencing the container number against a booking confirmation, a bill of lading, or a gate transaction to confirm the right container is actually the one in question.</p>

    <h2>Building this into a document pipeline</h2>

    <p>In practice, container number verification belongs as one narrow, deterministic rule sitting right after OCR extraction and right before that extracted value gets written anywhere else, a database, an EDI outbound message, a customs filing draft. The logic itself is small, a lookup table, a weighted sum, a modulo operation, but the discipline of always running it, on every container number pulled from a <a href="/resources/blogs/bill-of-lading-processing">bill of lading</a>, a container gate receipt, or a <a href="/resources/blogs/shipment-status-edi-processing">shipment status EDI message</a>, is what turns it from a nice-to-have into a real quality gate. The same logic applies wherever container numbers get re-keyed or cross-checked, including alongside a <a href="/resources/blogs/vgm-declaration-processing">VGM declaration</a>, where the container number has to match exactly across the weighing record and the shipping instruction for the declaration to be valid at all.</p>

    <p>What makes this worth automating rather than leaving to a reviewer's eye is exactly what the HLXU example demonstrated: a one digit OCR error does not look wrong to a person skimming a scanned document, and it should not have to. The check digit exists so that a system does not need a human to notice a subtle glyph confusion. It needs ten multiplications, an addition, and a division, run every time, on every extracted container number, before that number gets trusted anywhere downstream.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/passport-ocr.png",
  featuredImage: "/images/passport-ocr.png",
  category: "Logistics",
  date: "September 6, 2026",
  datePublished: "2026-09-06T00:00:00.000Z",
  dateModified: "2026-09-06T00:00:00.000Z",
  last_updated: "September 6, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "container number verification",
  secondary_keywords: [
    "ISO 6346 check digit",
    "container check digit calculator",
    "BIC container code",
    "container number OCR",
    "ISO 6346 algorithm",
    "freight container identification standard",
  ],
  tags: ["logistics", "OCR", "document AI", "container tracking", "ISO 6346", "shipping"],
  cluster: "logistics",
  faq: [
    {
      question: "What is the ISO 6346 check digit algorithm?",
      answer:
        "It converts the four owner and category letters of a container number to numeric values using a fixed table, converts the six serial digits directly, multiplies each of the ten resulting values by a weight of 2 raised to its position (1, 2, 4, 8, 16, 32, 64, 128, 256, 512), sums the products, and divides by 11. The remainder is the check digit, except a remainder of 10 becomes 0.",
    },
    {
      question: "Why do the letter values skip 11, 22, and 33?",
      answer:
        "ISO 6346's conversion table assigns letters values starting at 10 for A and counting up, but deliberately omits every multiple of 11 so that no letter value interacts ambiguously with the modulo 11 division used in the final check digit calculation.",
    },
    {
      question: "What is the check digit for CSQU3054383?",
      answer:
        "Converting and weighting the first ten characters, CSQU305438, produces a sum of 6185. Dividing by 11 gives a remainder of 3, which is the correct check digit, matching the published number CSQU3054383.",
    },
    {
      question: "Can a check digit catch every OCR error in a container number?",
      answer:
        "No. It reliably catches single-character misreads and most multi-character misreads because they almost always change the computed remainder. It cannot catch the rare case where two errors happen to cancel out and still produce the correct check digit, and it cannot detect that a correctly read number belongs to the wrong physical container.",
    },
    {
      question: "What does the fourth letter in a container number mean?",
      answer:
        "The first three letters are the owner code, registered through the BIC registry. The fourth letter is the category identifier, which is U for standard freight containers, J for detachable freight container-related equipment, or Z for trailers and chassis.",
    },
    {
      question: "Why does container number verification matter more than validating other shipping document fields?",
      answer:
        "Most shipping document fields, like a consignee name or a bill of lading number, have no built-in error detection, so an OCR mistake only surfaces later through a mismatch or a failed delivery. A container number carries its own check digit, so an extraction error can be caught immediately, before it propagates into booking systems, EDI messages, or customs filings.",
    },
  ],
}
