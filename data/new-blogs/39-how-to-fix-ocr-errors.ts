import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog39: BlogPost = {
  id: "new-39",
  title: "How to Fix OCR Errors in Numbers and IDs, Measured",
  slug: "how-to-fix-ocr-errors",
  excerpt:
    "OCR number errors are fixed by checking the result and reading again, not by guessing. We ran 13,800 reads on 3,000 amounts, dates, invoice numbers, codes and IBANs: a checksum plus a retry took IBANs from 61% to 92% correct with no silent errors.",
  description:
    "Fix OCR errors in numbers and IDs: which characters swap, what a whitelist and re-reading recover, and how a checksum plus retry took IBANs from 61% to 92%.",
  metaTag: "How to Fix OCR Errors in Numbers and IDs, With Test Data",
  summary:
    "To fix OCR errors in numbers and IDs, validate every field and re-read only the ones that fail. In our Tesseract tests on 3,000 synthetic fields, a digit-only whitelist, a 2x re-read and an IBAN mod 97 check took poor-quality IBANs from 61% to 92% correct with zero wrong values accepted. Format checks on dates and amounts let 8 in 300 wrong values through.",
  content: `
    <p>The reliable way to fix OCR errors in numbers and IDs is to check every field against a rule and read again only the ones that fail. Retrying everything wastes time, and trusting every read lets wrong values through. In our tests, an IBAN read once on a poor scan was right 61% of the time. Add a checksum test and up to three re-reads with different settings, and 92% came out right with no wrong IBAN accepted. The other 8% were flagged for a person.</p>
    <p>That result holds only for fields that carry a checksum. Dates and amounts have no checksum, and for them a format check was not enough: 8 wrong values out of 300 still looked valid. This guide shows the numbers behind each fix, which characters actually get swapped, and a short script you can run on your own images. It sits next to our guides on <a href="/resources/blogs/how-does-ocr-work">how OCR works</a> and <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout and tables</a>, and stays on one problem: a field that was read, and read wrong.</p>

    <h2>What fixes OCR errors in numbers and IDs?</h2>
    <p>Four fixes were worth using, and they are not equal. Here is what each did on the poor-quality set, out of 300 fields per type. The first column is a plain Tesseract read; the others are the best single fix for that field.</p>
    <table>
      <thead><tr><th>Field type</th><th>Plain read</th><th>Best cheap fix</th><th>Validate and retry</th></tr></thead>
      <tbody>
        <tr><td>IBAN (22 characters)</td><td>183 (61%)</td><td>238 with a 3-way vote</td><td>277 (92%), 0 wrong accepted</td></tr>
        <tr><td>Amount ($18,914.17 style)</td><td>281 (94%)</td><td>289 with a digit whitelist</td><td>291 (97%), 8 wrong accepted</td></tr>
        <tr><td>Date (MM/DD/YYYY)</td><td>261 (87%)</td><td>273 with a 3-way vote</td><td>285 (95%), 8 wrong accepted</td></tr>
        <tr><td>Invoice number (INV-2026-04817)</td><td>260 (87%)</td><td>269 with a 3-way vote</td><td>280 (93%), 1 wrong accepted</td></tr>
        <tr><td>Mixed 8-character code</td><td>94 (31%)</td><td>115 with a 2x re-read</td><td>No rule to validate against</td></tr>
      </tbody>
    </table>
    <p>Two lessons sit in that table. A field with a checksum can be repaired almost safely, and a field without one cannot. The rest of this guide explains why, one fix at a time, and ends with a workflow and a script.</p>

    <h2>How did we test this?</h2>
    <p>We rendered 3,000 short text fields, 300 of each of five types, at two quality levels, and read each with Tesseract 5.5.2 on a Mac. The same 1,500 fields appear at both levels. We rotated four fonts (Arial, Times New Roman, Courier New and Verdana) at 10 point. Every field had a known correct value, so a read was either exactly right or wrong. Spaces were ignored when comparing, because stray spaces turned out to be a common artifact.</p>
    <ul>
      <li><strong>Fair:</strong> 150 DPI, light blur, light noise, JPEG quality 50. Think of a decent office scan.</li>
      <li><strong>Poor:</strong> 120 DPI with the same blur, noise and compression. Think of a fax-quality scan or a downscaled phone photo.</li>
      <li><strong>Reads per field:</strong> a plain read, a read with a character whitelist (for fields where one makes sense), 2x and 3x enlarged reads, and a single-line mode. That is 13,800 reads in all.</li>
    </ul>
    <p>The limits matter. These are synthetic images of Tesseract, not DocsAPI, and not your documents. Real scans add stamps, creases, handwriting and bad lighting that make everything below look better than it will be. We use the results to compare fixes against each other, not to promise an accuracy figure. Our guide to <a href="/resources/blogs/how-to-measure-ocr-accuracy">measuring OCR accuracy</a> shows how to repeat the comparison on your own files.</p>

    <h2>Which characters does OCR swap?</h2>
    <p>Digits turn into letters far more often than letters turn into digits. Across all 3,000 plain reads, these were the most common confusions, with the share of times the true character was read that way.</p>
    <table>
      <thead><tr><th>True character</th><th>Read as</th><th>Times</th><th>Share of that character</th></tr></thead>
      <tbody>
        <tr><td>5</td><td>S</td><td>142</td><td>5.4%</td></tr>
        <tr><td>0</td><td>O</td><td>131</td><td>3.2%</td></tr>
        <tr><td>1</td><td>I</td><td>37</td><td>1.5%</td></tr>
        <tr><td>9</td><td>O</td><td>17</td><td>0.8%</td></tr>
        <tr><td>7</td><td>T</td><td>16</td><td>0.7%</td></tr>
        <tr><td>8</td><td>B</td><td>13</td><td>0.6%</td></tr>
        <tr><td>8</td><td>S</td><td>14</td><td>0.6%</td></tr>
        <tr><td>J</td><td>I</td><td>28</td><td>20.3%</td></tr>
        <tr><td>F</td><td>E</td><td>7</td><td>4.9%</td></tr>
      </tbody>
    </table>
    <p>The textbook pairs showed up (0 and O, 1 and I, 5 and S), but the rates are small for any one digit. The damage comes from length: a 22-character IBAN has 22 chances to be hit. The letter J was read as I once in five times, which is the sort of thing you only learn by testing your own ID format.</p>
    <p>The mixed 8-character codes show the imbalance clearly. Counting every character involved in a mistake, 28.4% of the digits (405 of 1,426) were affected, against 3.1% of the letters (105 of 3,374). The code alphabet left out I and O, as many ID schemes do, so the letter figure would be higher if they were allowed. That is the case for removing look-alike letters from any code you design.</p>
    <p>The second class of error is stray marks. Tesseract invented a character that was not there 41 times as a "1", 20 times as a comma, and others as quotation marks and parentheses. Most came from the edge of the crop. Examples from the IBAN set: 1DE24150296645584064546 for DE24150296645584064546, and (0E13395182450429866701 for DE13395182450429866701, where the D also became a zero. Strip anything outside the field's alphabet before you validate, and expect a leading mark.</p>

    <h2>How much do quality and font matter?</h2>
    <p>On fair scans most fields were already read correctly, and on poor scans accuracy dropped quickly for anything long. This is the plain read out of 300 per cell.</p>
    <table>
      <thead><tr><th>Field type</th><th>Fair (150 DPI)</th><th>Poor (120 DPI)</th><th>Wrong reads that changed the length</th></tr></thead>
      <tbody>
        <tr><td>Amount</td><td>300</td><td>281</td><td>10 of 19</td></tr>
        <tr><td>Date</td><td>299</td><td>261</td><td>19 of 39</td></tr>
        <tr><td>Invoice number</td><td>296</td><td>260</td><td>15 of 40</td></tr>
        <tr><td>IBAN</td><td>282</td><td>183</td><td>60 of 117</td></tr>
        <tr><td>Mixed code</td><td>166</td><td>94</td><td>25 of 206</td></tr>
      </tbody>
    </table>
    <p>The last column is the useful one. Roughly half of the wrong reads on the structured fields were not a swapped character but an added or dropped one. A substitution table cannot fix those, which is why the cheaper fixes below stall and why re-reading helps.</p>
    <p>Font mattered more on poor scans than on fair ones. On fair scans all four fonts landed between 88.5% and 91.7% of fields correct. On poor scans, Verdana held at 85.3% while Arial fell to 74.7%, Times New Roman to 65.9% and Courier New to 61.9%. Wide, open letterforms survive low resolution; thin serifs and typewriter faces do not. If you receive documents in a few known templates, check them one at a time instead of assuming one accuracy figure.</p>

    <h2>Does a digit-only whitelist help?</h2>
    <p>Yes, for fields that can only contain digits, and it was the cheapest fix to apply. Tesseract accepts a list of allowed characters. Telling it that an IBAN body is digits stops a 5 from becoming an S, because S is no longer an option.</p>
    <table>
      <thead><tr><th>Field</th><th>Plain, fair</th><th>Whitelist, fair</th><th>Plain, poor</th><th>Whitelist, poor</th></tr></thead>
      <tbody>
        <tr><td>IBAN, allowed D, E and digits</td><td>282</td><td>299</td><td>183</td><td>219</td></tr>
        <tr><td>Amount, allowed digits and $ , .</td><td>300</td><td>300</td><td>281</td><td>289</td></tr>
        <tr><td>Date, allowed digits and /</td><td>299</td><td>299</td><td>261</td><td>266</td></tr>
      </tbody>
    </table>
    <p>The IBAN gained 36 correct fields on poor scans, the biggest single jump from any one-line change. The gain is smaller where the plain read was already close. A whitelist does nothing for mixed codes or invoice numbers, which contain letters by design. It also makes the engine confident about a forced guess: when the image really holds a letter, the whitelist will return the nearest digit and give you no sign that anything went wrong. Treat it as a way to get a better first read, never as a check.</p>

    <h2>Does swapping look-alike characters afterwards help?</h2>
    <p>Less than a whitelist did. Position-aware mapping means you decide, from the field's template, which positions must be digits and replace O with 0, I or l with 1, S with 5, B with 8 and Z with 2 in those positions only. We applied it to the plain read.</p>
    <table>
      <thead><tr><th>Field</th><th>Plain, poor</th><th>Mapped, poor</th><th>Whitelist, poor</th></tr></thead>
      <tbody>
        <tr><td>IBAN</td><td>183</td><td>211</td><td>219</td></tr>
        <tr><td>Invoice number (digits after INV-)</td><td>260</td><td>263</td><td>not applicable</td></tr>
        <tr><td>Amount</td><td>281</td><td>281</td><td>289</td></tr>
        <tr><td>Date</td><td>261</td><td>261</td><td>266</td></tr>
      </tbody>
    </table>
    <p>Mapping is worth having when you cannot control the engine, for example when you only receive text back from a vendor. It is the right tool for mixed fields such as invoice numbers, where a whitelist is impossible and the template still tells you which part is numeric. It gave 3 more correct invoice numbers, a small gain. Its weakness is the one in the length column above: it can repair a swapped character but not a missing one. Our guide to <a href="/resources/blogs/data-normalization-extracted-documents">normalizing extracted data</a> covers the formatting rules that belong after this step.</p>

    <h2>Does reading the image again help?</h2>
    <p>Sometimes a lot, and sometimes it hurts. We re-read the same degraded image enlarged 2x and 3x with cubic interpolation, and once in single-line mode. Counts are correct fields out of 300 on the poor set, with the plain read for comparison.</p>
    <table>
      <thead><tr><th>Field</th><th>Plain</th><th>2x enlarged</th><th>3x enlarged</th><th>Single-line mode (13)</th><th>Any of the four was right</th></tr></thead>
      <tbody>
        <tr><td>IBAN</td><td>183</td><td>233</td><td>228</td><td>0</td><td>261</td></tr>
        <tr><td>Mixed code</td><td>94</td><td>115</td><td>102</td><td>2</td><td>138</td></tr>
        <tr><td>Invoice number</td><td>260</td><td>260</td><td>261</td><td>26</td><td>281</td></tr>
        <tr><td>Date</td><td>261</td><td>262</td><td>266</td><td>89</td><td>289</td></tr>
        <tr><td>Amount</td><td>281</td><td>277</td><td>270</td><td>102</td><td>296</td></tr>
      </tbody>
    </table>
    <p>Enlarging was the best single fix for IBANs (183 to 233) and for mixed codes (94 to 115), and slightly worse for amounts (281 to 277 and 270). Single-line mode was a trap: it scored near zero on most fields and should not be used as a fallback here. The last column is a ceiling, not a result. It says how many fields at least one of the four reads got right, so a smart way to choose between the reads could reach 261 of 300 IBANs but no better, and 138 of 300 mixed codes.</p>
    <p>Combining the readings did better. A simple per-character vote across the plain, 2x and 3x reads (used only when all three have the same length) reached 238 for IBANs, 115 for codes, 273 for dates and 269 for invoice numbers. That beat the plain read everywhere except amounts, where it matched it at 281. Voting costs three reads per field. It is worth it on fields you cannot validate, and unnecessary on fields you can.</p>

    <h2>Why is a checksum the strongest fix?</h2>
    <p>Because it tells you whether a read is wrong, which nothing else here does. An IBAN carries two check digits. Move the first four characters to the end, turn letters into numbers (A is 10, B is 11, and so on), read the result as one big integer and divide by 97. A valid IBAN leaves a remainder of 1. Change one digit anywhere and the remainder changes, which is plain arithmetic: the value moves by a digit difference times a power of ten, and that is never a multiple of the prime 97. Random garbage still passes about once in 97 tries, so the check is strong, not absolute.</p>
    <p>We applied one rule: the read must look like DE followed by 20 digits and pass the mod 97 test. If a read failed, we tried the whitelist read, then the 2x read, then the 3x read, and accepted the first one that passed. Any rule you can write down works the same way. Our guide to <a href="/resources/blogs/mrz-passport-verification">MRZ passport verification</a> shows the equivalent check for passports, with a worked example.</p>
    <table>
      <thead><tr><th>Field and quality</th><th>Right on first read</th><th>Fixed by retry</th><th>Still flagged</th><th>Wrong but accepted</th><th>Right with no human</th></tr></thead>
      <tbody>
        <tr><td>IBAN, fair</td><td>282</td><td>18</td><td>0</td><td>0</td><td>300 of 300</td></tr>
        <tr><td>IBAN, poor</td><td>183</td><td>94</td><td>23</td><td>0</td><td>277 of 300</td></tr>
      </tbody>
    </table>
    <p>On the poor set, 117 first reads were wrong and the check caught every one of them. It also accepted every one of the 183 correct reads, so there were no false alarms. Retries recovered 94 of the 117, and 23 went to a person. Of the 94, the whitelist read fixed 36, the 2x read 50 and the 3x read 8. The single-line mode we tested earlier added nothing, so the script below leaves it out and reproduces these counts exactly.</p>

    <h2>Is a format check enough for dates and amounts?</h2>
    <p>No. Dates and amounts have no checksum, so the best rule is a format test: a calendar-valid date, an amount shaped like $12,345.67, an invoice number matching INV-20xx-xxxxx. That still helped, and it still failed in a specific way.</p>
    <table>
      <thead><tr><th>Field, poor quality</th><th>Right on first read</th><th>Fixed by retry</th><th>Still flagged</th><th>Wrong but accepted</th><th>Right with no human</th></tr></thead>
      <tbody>
        <tr><td>Date</td><td>261</td><td>24</td><td>7</td><td>8</td><td>285 of 300</td></tr>
        <tr><td>Amount</td><td>281</td><td>10</td><td>1</td><td>8</td><td>291 of 300</td></tr>
        <tr><td>Invoice number</td><td>260</td><td>20</td><td>19</td><td>1</td><td>280 of 300</td></tr>
      </tbody>
    </table>
    <p>The wrong-but-accepted column is the number to worry about. A date with one swapped digit is usually still a real date: 6 of the 39 wrong dates on the poor set were valid. Amounts are worse because a plausible wrong amount is invisible. Real examples from the run: $8,115.24 read as $6,115.24, $70,490.93 read as $70,499.93, and $10,609.93 read as $20,609.93. All three are well-formed amounts. Nothing in the field itself says they are wrong.</p>
    <p>The way out is a cross-field rule, not a better read. Line items should sum to the subtotal, the subtotal plus tax should equal the total, and a running balance should move by the amount shown. We measured the last one on bank statements in <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">our layout guide</a>, where it flagged 85 of 91 statements with errors. For invoices, see how line items are checked in <a href="/resources/blogs/invoice-line-item-ocr">invoice line item OCR</a>.</p>

    <h2>Can a checksum repair a wrong IBAN instead of just flagging it?</h2>
    <p>Not in our test, and the reason is useful. The idea is to try plausible single-digit swaps at each position and keep the result if exactly one passes the checksum. We built the table of plausible swaps from the first half of the fields and tested on the second half, so the table never saw the fields it was repairing.</p>
    <p>On the 150 test IBANs at poor quality, 100 were already right and 50 were wrong. Of the 50, 3 were repaired correctly and none wrongly. Seven had no candidate, and 40 could not be attempted because the read had the wrong length or lost the DE prefix. The learning half had seen only 8 digit-for-digit swaps, so the table was thin, but the bigger reason is the one from the length column: most of the damage was a character added or dropped, and single-swap repair cannot touch that. Retrying with a different read repaired far more (94 of 117) because a fresh read can also change the length.</p>
    <p>So treat repair-by-guessing as a last step at best. It is safe, because the checksum guards it, but it rescued 6% of the wrong reads here.</p>

    <h2>What do you do about IDs that have no rule?</h2>
    <p>This was the hardest group. Plain reads of the mixed 8-character code were right 55% of the time on fair scans and 31% on poor ones. Re-reading at 2x lifted the poor figure to 38% (115 of 300), and even an oracle that always picked the best of four reads reached 46% (138 of 300). No cheap trick closes that gap, because there is nothing to test the answer against.</p>
    <ul>
      <li><strong>Design out the ambiguity.</strong> If you issue the IDs, drop O, I, 0 and 1 from the alphabet, and add a check character. A code with a check character becomes a validatable field.</li>
      <li><strong>Match against a list.</strong> If the ID must exist in your system (customer number, PO number, policy number), look up the read and the closest few candidates. A single close match is far more trustworthy than the raw read.</li>
      <li><strong>Capture it twice.</strong> If an ID appears twice on a page (a header and a footer, a form and its barcode), read both and compare. Two matching independent reads are a stronger signal than one confident read.</li>
      <li><strong>Send it to a person.</strong> For high-value IDs with no rule, a human check on every one may cost less than a wrong one. Our <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk processing guide</a> works through what review time costs at volume.</li>
    </ul>
    <p>Confidence scores are a poor substitute for any of these. In the test behind <a href="/resources/blogs/how-does-ocr-work">our OCR guide</a>, 14% of word errors still carried a score of 95 or above, so a score alone cannot decide which fields to check.</p>

    <h2>What is the workflow, and can I run it?</h2>
    <p>Read the field once, validate it, retry with changed settings only when validation fails, and route what is still failing to a person. This script does that for the IBAN case. It needs Tesseract, OpenCV and a cropped single-line image. We ran it on the 300 poor IBAN images and it produced the 277 right, 23 flagged and 0 wrong shown above.</p>
    <pre><code>import os, re, subprocess, tempfile
import cv2

def iban_ok(text):
    s = text.replace(" ", "").upper()
    if not re.fullmatch(r"DE\\d{20}", s):
        return False
    moved = s[4:] + s[:4]
    return int("".join(str(int(c, 36)) for c in moved)) % 97 == 1

def tess(img, whitelist=None):
    fd, path = tempfile.mkstemp(suffix=".png")
    os.close(fd)
    cv2.imwrite(path, img)
    cmd = ["tesseract", path, "stdout", "--psm", "7", "-l", "eng"]
    if whitelist:
        cmd += ["-c", "tessedit_char_whitelist=" + whitelist]
    text = subprocess.run(cmd, capture_output=True, text=True).stdout
    os.remove(path)
    return text.strip().replace(" ", "")

def read_iban(img):
    big = lambda k: cv2.resize(img, None, fx=k, fy=k,
                               interpolation=cv2.INTER_CUBIC)
    attempts = [
        lambda: tess(img),
        lambda: tess(img, "DE0123456789"),
        lambda: tess(big(2)),
        lambda: tess(big(3)),
    ]
    for n, attempt in enumerate(attempts, start=1):
        text = attempt()
        if iban_ok(text):
            return text, n
    return None, 0          # send to a person</code></pre>
    <p>Three design choices carry over to any field. The validation is a function you can test alone. The retries run from cheap to costly and stop at the first pass. And the failure path returns nothing instead of a best guess, so a wrong value cannot slip through as an answer. Add a line that logs which attempt succeeded: if the third attempt starts rescuing most fields, your scans have changed and the problem is upstream. For many pages at once, put this inside the job runner from the bulk guide.</p>

    <h2>What do these tests not show?</h2>
    <p>Four things. First, the images are clean renders with added blur and noise, and real scans fail in worse ways (folds, stamps over digits, shadow). Second, we tested one engine, Tesseract; a modern layout and language model reads these fields differently and the swap table above would not carry over. Third, the fields were cropped and isolated, while a real page needs the field found first, which is a separate source of error covered in the <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout guide</a>. Fourth, we tested English-language Latin characters only, in four fonts.</p>
    <p>Treat the percentages as a way to rank fixes on your own documents, not as expected accuracy. The ranking is the part we trust: validate first, retry second, whitelist where the field allows it, and never accept a format check as proof of a correct read.</p>

    <h2>Where does DocsAPI fit?</h2>
    <p>DocsAPI reads documents, extracts fields and tables, runs format and document checks, and flags low-confidence fields for a person to review. It was built by HyperVerge. In DocsAPI's own 2026 benchmark of 1,700 documents it scored 93% on invoice line items and 91% on multi-page bank statements, against 64 to 79% for other tools on the statements. Those figures come from that benchmark, not from the Tesseract tests above, and the two should not be compared. The benchmark is described in <a href="/resources/blogs/ocr-accuracy-benchmark-2026">our 2026 accuracy benchmark</a>.</p>
    <p>If you want to see how it handles your own difficult fields, the path is a demo, then a free 30-day trial for qualified lenders. Pricing starts from $0.02 per page, with volume discounts above 100,000 pages a month. Whatever tool you choose, run the same test: take 50 of your worst fields, count how many are right on the first read, and count how many wrong values the tool lets through without a flag. The second number is the one that costs money. The <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR, Tesseract and DocsAPI comparison</a> has a method for doing this side by side.</p>

    <h2>Sources and how we checked this</h2>
    <p>All figures in the tables come from our own runs on 3,000 synthetic fields (13,800 Tesseract reads) on 4 November 2026, checked against the raw output. Counts are out of 300 per cell unless stated. Fair and poor are defined above. The IBAN rule uses the ISO 13616 mod 97 method. The script above was run on all 300 poor IBAN images and its counts match the table. DocsAPI figures are from its own 2026 benchmark of 1,700 documents.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 4, 2026",
  datePublished: "2026-11-04T00:00:00.000Z",
  dateModified: "2026-11-04T00:00:00.000Z",
  last_updated: "November 4, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "how to fix ocr errors",
  secondary_keywords: [
    "ocr misreading numbers",
    "ocr 0 and o confusion",
    "fix ocr errors in numbers",
    "validate ocr output",
    "ocr checksum validation",
  ],
  tags: ["OCR", "OCR errors", "validation", "checksum", "data quality"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Why does OCR confuse 0 and O, or 5 and S?",
      answer:
        "The shapes are close at low resolution and the engine picks the likelier character from context. In our tests, 5 became S 5.4% of the time and 0 became O 3.2%. Digits were affected far more than letters in mixed codes: 28.4% of digits against 3.1% of letters.",
    },
    {
      question: "How do I fix OCR errors in numbers?",
      answer:
        "Validate each field with a rule, such as a checksum or a cross-field total, and re-read only the fields that fail. For digit-only fields, add a digit whitelist to the first read. In our test, this took poor-quality IBANs from 61% to 92% correct with no wrong value accepted.",
    },
    {
      question: "Does a character whitelist improve OCR accuracy?",
      answer:
        "For fields that can only hold certain characters, yes. It raised poor-quality IBANs from 183 to 219 correct out of 300. It does not help mixed fields, and it can force a wrong digit with no warning, so use it for a better first read and keep a separate check.",
    },
    {
      question: "Can OCR errors be detected automatically?",
      answer:
        "Only if the field has a rule. An IBAN mod 97 check caught all 117 wrong IBAN reads in our poor-quality set with no false alarms. Date and amount format checks missed 8 wrong values out of 300 each, so add cross-field checks such as line items summing to the total.",
    },
    {
      question: "Is re-reading an image at a larger size worth it?",
      answer:
        "Often, but not always. A 2x enlargement raised IBANs from 183 to 233 and mixed codes from 94 to 115 correct out of 300, but lowered amounts slightly, from 281 to 277. Retry only when a validation check fails, instead of re-reading every field.",
    },
    {
      question: "Why are mixed letter and digit IDs so hard for OCR?",
      answer:
        "Nothing can confirm the answer, and look-alike characters are allowed. Plain reads of our 8-character codes were right 31% of the time on poor scans, and even the best of four reads reached only 46%. Remove look-alike letters, add a check character, or match against a list of valid IDs.",
    },
    {
      question: "Should I trust the OCR confidence score to find errors?",
      answer:
        "Not on its own. In the test behind our OCR guide, 14% of word errors still had a confidence of 95 or higher. Use a validation rule first, and use confidence only to decide which failing fields a person should see first.",
    },
    {
      question: "Do these results apply to DocsAPI?",
      answer:
        "No. The tests used Tesseract on synthetic images. DocsAPI's own 2026 benchmark of 1,700 documents scored 93% on invoice line items and 91% on multi-page bank statements. To compare tools fairly, run the same 50 hard fields through each and count wrong values that pass without a flag.",
    },
  ],
}
