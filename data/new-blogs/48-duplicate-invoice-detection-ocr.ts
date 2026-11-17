import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog48: BlogPost = {
  id: "new-48",
  title: "Duplicate Invoice Detection With OCR: 1,800 Reads Tested",
  slug: "duplicate-invoice-detection-ocr",
  excerpt:
    "Exact matching caught 28% of re-sent invoices, normalizing caught 97.5%, and an 85% fuzzy rule flagged 503 of 1,200 good invoices. Tested on 1,800 OCR reads.",
  description:
    "We tested six duplicate invoice rules on 1,800 OCR reads. Exact matching caught 28%, normalizing with folding 97.5%, and 85% fuzzy flagged good ones.",
  metaTag: "How to Detect Duplicate Invoices From OCR Reads, Tested",
  summary:
    "In Tesseract 5.5.2 tests on 1,800 generated invoice reads (40 vendors, a 1,000 invoice ledger, 600 re-sent invoices and 1,200 good invoices across clean, scan and phone quality), exact matching on raw fields caught 170 of 600 re-sends. Normalizing the vendor and number caught 527, adding letter and digit folding caught 585 with no false alerts, and an 85% fuzzy rule caught 592 but flagged 503 of 1,200 good invoices, 98% of those from vendors with seven character numbers. The script is included.",
  content: `
<p>To catch duplicate invoices from OCR reads, normalize the invoice number and total before comparing, fold look-alike letters and digits in the number, and require the total to match to the cent. In our test of 1,800 OCR reads, that rule caught 585 of 600 re-sent invoices (97.5%) and raised no false alert on 1,200 good ones. Exact matching on the raw fields caught 170 of 600 (28%). A fuzzy rule with an 85% similarity threshold caught 592, but flagged 503 of the 1,200 good invoices as duplicates.</p>
<p>The fuzzy result is the one that surprised us. The same threshold flagged 98% of the new invoices from vendors whose invoice numbers were seven characters long once cleaned, and none from vendors with shorter numbers. Below are the six rules we tested, the results by image quality, the script, and what the test did not cover.</p>

<h2>How do you detect a duplicate invoice from OCR text?</h2>
<p>Compare three fields on each incoming invoice with the ones already on file: the vendor, the invoice number and the total. If they agree after cleanup, hold the invoice for review before it is paid. The work is in the cleanup, because the same invoice rarely arrives looking the same twice. A vendor re-sends it with a space where there was a dash, a "#" in front, a leading zero, or the total with and without a dollar sign. OCR then adds its own errors, such as a letter O read as a zero.</p>
<p>Most explanations stop at "normalize, then use fuzzy matching with a threshold around 85% to 90%". That is a rule of thumb, and our test shows how it can go wrong: the right threshold depends on how long your invoice numbers are. For how a duplicate check fits with the other accounts payable checks (invoice maths, vendor, purchase order), see our guide to <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR</a>.</p>

<h2>How did we test duplicate invoice rules?</h2>
<p>We generated 40 vendors with 25 invoices each, a ledger of 1,000 invoices. Invoice numbers rose by 1 to 3 from one invoice to the next, as they often do when a vendor numbers its invoices in order. The vendors used four number styles in equal shares: "INV-" plus five digits, five digits alone, "SI-" plus five digits, and two letters plus five digits (for example "OS83561"). Fourteen of the 40 vendors were recurring, with the same total on every invoice, such as rent or a subscription. The other 26 had random totals.</p>
<p>At each of three image quality levels (clean render, 200 DPI scan with blur and noise, and a noisier 150 DPI phone photo with a tilt), we made 200 re-sent invoices and 400 new, good invoices. Each re-send was a copy of a ledger invoice. In 30% of them the vendor had changed the number's format (a space for a dash, a "#" in front, the prefix dropped, or a leading zero), and in 60% the total was printed differently (with a dollar sign, or without the comma). The 400 good invoices were the next ones in each vendor's sequence, so 10 per vendor, including the recurring vendors, whose totals matched the last invoice exactly.</p>
<p>That is 600 images per quality level and 1,800 in all. We read each with Tesseract 5.5.2 in single block mode and took the vendor from the first line, the number from the second and the total from the fourth. All 1,800 images gave four lines of text, so nothing was unreadable. We counted a re-send as caught if the rule matched it to its true original, and a good invoice as a false alert if the rule matched it to any ledger invoice. These are our own tests with open source tools, not a DocsAPI result.</p>

<h2>Which duplicate rule caught the most re-sent invoices?</h2>
<p>Normalizing was the big step, folding look-alike characters was the next, and fuzzy matching added little on top. This table shows the six rules, with the number of the 200 re-sends caught at each quality level, the total out of 600, and false alerts out of 1,200 good invoices.</p>
<table>
  <thead><tr><th>Rule</th><th>Clean</th><th>Scan</th><th>Phone</th><th>Caught (of 600)</th><th>False alerts (of 1,200)</th></tr></thead>
  <tbody>
    <tr><td>Exact match on the raw vendor, number and total</td><td>56</td><td>56</td><td>58</td><td>170</td><td>0</td></tr>
    <tr><td>Normalized vendor and number, total equal</td><td>179</td><td>179</td><td>169</td><td>527</td><td>0</td></tr>
    <tr><td>Normalized with letter and digit folding</td><td>193</td><td>199</td><td>193</td><td>585</td><td>0</td></tr>
    <tr><td>Fuzzy number, 90% similar</td><td>194</td><td>199</td><td>197</td><td>590</td><td>0</td></tr>
    <tr><td>Fuzzy number, 85% similar</td><td>196</td><td>199</td><td>197</td><td>592</td><td>503</td></tr>
    <tr><td>Fuzzy number 85% plus total within 1%</td><td>195</td><td>199</td><td>196</td><td>590</td><td>151</td></tr>
  </tbody>
</table>
<p>The fuzzy rules also required the vendor name to be 90% similar. The first two fuzzy rules ignored the total. The 90% rule caught 5 more re-sends than the folding rule, and the 85% rule 7 more, at the cost of the false alerts described below.</p>

<h2>Why does exact matching miss most duplicates?</h2>
<p>Because duplicates are rarely identical on the page. In our test 413 of the 600 re-sends were printed with a different number format or total format than the ledger copy, and exact matching caught none of them (0 of 413). It caught 170 of the 187 re-sends whose printed number and total were the same text as the original, which is 91%. All 17 it missed had at least one field misread by OCR.</p>
<p>The reformatted share in our test is our own choice (30% for the number, 60% for the total), so do not read 28% as a general figure. What carries over is the pattern: an exact rule works when the vendor re-sends the same file, and fails when it re-sends a different document, a different export or a retyped copy. This is also why a check that compares a few fields for exact equality can miss a duplicate over a single character.</p>

<h2>Does OCR itself cause missed duplicates?</h2>
<p>Yes, and one cheap step fixes most of it. Tesseract read the invoice number differently from what was printed on 17 of the 200 clean renders, 20 of the 200 scans and 30 of the 200 phone photos, 67 in all. The vendor name was misread 5 times and the total 2 times in 600. Plain normalization (no spaces, dashes or leading zeros) rescued only 5 of the 67 misread numbers. Folding the letters O, I, S, B and Z into the digits 0, 1, 5, 8 and 2 before comparing rescued 60 of them, which lifted the catch rate from 527 to 585 of 600.</p>
<p>The reason is that a number such as "OS83561" is a mix of letters and digits, and OCR cannot tell an O from a zero when the font is small or the image is noisy. If you compare the two forms after folding both, the O and the 0 become the same character. The cost is a small risk of two different numbers folding into one, which our test did not produce but a large ledger might. Our guide to <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors</a> lists the common look-alike pairs.</p>

<h2>Why does an 85% fuzzy match flag good invoices?</h2>
<p>Because consecutive invoice numbers from the same vendor are, by nature, similar. A similarity score of 85% sounds strict, but a change in one character out of seven scores 0.857, which passes. Our vendors with two-letter prefixes or "SI-" prefixes had numbers of seven characters once cleaned, and the next invoice differs from the last by 1 to 3 in the final digit. At the 85% threshold, 503 of the 511 good invoices with seven-character numbers were flagged as duplicates (98%). None of the other 689 good invoices were flagged, because a one-digit change in a five or six-character number scores 0.80 or 0.83.</p>
<p>At 90% the rule flagged none of the 1,200 good invoices. That looks like the answer, but it is a property of our data, not of the threshold. A one-character change scores (n minus 1) divided by n, so it reaches 0.90 at ten characters. Invoice numbers like "INV-2026-000451" are longer than anything we generated, and a 90% rule would flag consecutive invoices from those vendors. We did not test numbers over seven characters. Pick the threshold by running your own good invoices through the rule, not by copying a figure from a guide.</p>

<h2>What happens when you add the total to a fuzzy rule?</h2>
<p>Adding a requirement that the total be within 1% cut the false alerts from 503 to 151, and then the recurring vendors took over. The 151 were almost all invoices from the 14 recurring vendors, whose totals are the same every month. Of the good invoices from recurring vendors with seven-character numbers, 140 of 140 were flagged. For non-recurring vendors with seven-character numbers it was 11 of 371, and for everyone else 0 of 689.</p>
<p>A recurring vendor with a fixed total and a similar number is the case where a fuzzy rule is weakest, and rent, retainers and subscriptions are common in accounts payable. A rule that ignores the total is worse, but a rule that matches on a near total is still wrong for them. The folded exact rule had no such problem, because two different invoice numbers never matched.</p>

<h2>Does image quality matter more than the rule?</h2>
<p>Less than you might expect. With the folding rule, the catch counts were 193 on clean renders, 199 on scans and 193 on phone photos, so the noisiest images cost only a few re-sends. The clean renders did not beat the scans, because Tesseract misread the number on 17 of 200 clean images too, only slightly fewer than the 20 it misread on scans. What moved the result by far the most was how the number was printed and how the rule treated it: from 28% for exact matching to 97.5% for normalization with folding, on the same images.</p>
<p>That has a practical consequence. Before you spend effort on better scans or a better OCR engine for duplicate control, check whether your rule normalizes at all. The gap between exact and normalized matching was 357 re-sends out of 600, and the gap between plain and folded normalization was 58. Image quality accounted for at most 10 re-sends between the best and worst level of any rule that normalized.</p>

<h2>How should flagged invoices be handled?</h2>
<p>Treat a match as a reason to look, not as proof. A person needs to see the two invoices side by side, with the vendor, the number, the total and the date, and choose one of three outcomes: not a duplicate, a duplicate, or a corrected invoice that replaces the first. Keep that decision on the invoice, so the same pair is not flagged again next month. Our test counted false alerts per 1,200 good invoices because in a real queue each one costs a person's time, and a rule that cries wolf gets switched off.</p>

<h2>What is the script?</h2>
<p>This is the script we ran, unchanged. It has no dependencies beyond the Python standard library. The function takes two records, each with the vendor, the number and the total as read, and the name of a rule.</p>
<pre><code>import re
from difflib import SequenceMatcher

CONFUSABLE = str.maketrans("OISBZ", "01582")           # letters OCR often swaps for digits
SUFFIXES = ("inc", "llc", "ltd", "co", "corp")

def norm_number(s, fold=False):
    s = re.sub(r"[^A-Za-z0-9]", "", s or "").upper()      # drop spaces, dashes, hashes
    if fold: s = s.translate(CONFUSABLE)
    s = re.sub(r"^(INV|1NV)", "", s)                        # drop a common prefix
    return s.lstrip("0")                                    # drop leading zeros

def norm_vendor(s):
    s = re.sub(r"[^a-z0-9 ]", "", (s or "").lower()).split()
    while s and s[-1] in SUFFIXES: s.pop()
    return "".join(s)

def to_amount(s):
    s = re.sub(r"[^0-9.]", "", s or "")
    try: return round(float(s), 2)
    except ValueError: return None

def sim(a, b):
    return SequenceMatcher(None, a, b).ratio()

def is_duplicate(new, old, rule):
    """new, old: dicts with vendor, number, amount (strings as read). Returns True if the rule says same invoice."""
    if rule == "exact":
        return (new["vendor"], new["number"], new["amount"]) == (old["vendor"], old["number"], old["amount"])
    na, oa = to_amount(new["amount"]), to_amount(old["amount"])
    if rule == "normalized":
        return (norm_vendor(new["vendor"]) == norm_vendor(old["vendor"])
                and norm_number(new["number"]) == norm_number(old["number"]) and na is not None and na == oa)
    vendor_ok = sim(norm_vendor(new["vendor"]), norm_vendor(old["vendor"])) &gt;= 0.9
    n1, n2 = norm_number(new["number"], fold=True), norm_number(old["number"], fold=True)
    if rule == "normalized_fold":
        return vendor_ok and n1 == n2 and n1 != "" and na is not None and na == oa
    if rule.startswith("fuzzy"):                            # fuzzy85 / fuzzy90: vendor + similar number, amount ignored
        return vendor_ok and sim(n1, n2) &gt;= int(rule[5:]) / 100
    if rule.startswith("amtfuzzy"):                         # amtfuzzy85: similar number AND amount within 1%
        return (vendor_ok and sim(n1, n2) &gt;= int(rule[8:]) / 100 and na is not None and oa
                and abs(na - oa) &lt;= 0.01 * oa)
    raise ValueError(rule)</code></pre>
<p>For a production check, use the "normalized_fold" rule as the automatic hold, and treat any fuzzy match as a prompt for a person to look, not as a block. Run it against every invoice on file for that vendor, not only the open ones. Some ERP duplicate checks compare only open items, so once the first copy is paid and closed the second has nothing to collide with. Store the result on the invoice (none, suspected, confirmed) so a person's decision is kept.</p>

<h2>What did this test not cover?</h2>
<p>The invoices were generated: a four-line header, one font, English vendor names, and fields read by line position. Real invoices have more than one number on the page (purchase order, delivery note, customer number) and a misread of which one is the invoice number is a different failure from the ones above. We did not test invoice numbers longer than seven characters, which is where the fuzzy thresholds change behaviour. We did not test credit notes, corrected invoices that keep the same number with a new total, the same invoice from a vendor listed under two names, or a clerk retyping an invoice with a typo. Each ledger invoice had a re-send chance of one in five, which is far higher than any real duplicate rate, so the false alert counts matter more than the catch rates here.</p>
<p>DocsAPI's own 2026 benchmark of 1,700 real documents is a separate test: it scored 93% on invoice line items. The tests in this post used Tesseract and our own script, so they say nothing about the accuracy of any product.</p>

<h2>What should you do about duplicate invoices?</h2>
<p>Start with three steps that cost almost nothing. Normalize the number and the total before any comparison. Fold the letters that OCR confuses with digits. Hold on an exact match of the folded number and the total, and compare against the whole history for that vendor. Then, if you want a fuzzy rule as a second net, calibrate it: run a month of known good invoices through it, count the false alerts for each number length, and set the threshold above the point where good invoices start to flag. See also our posts on <a href="/resources/blogs/data-normalization-extracted-documents">normalizing extracted data</a> and on <a href="/resources/blogs/document-fraud-detection-api">document fraud detection</a>.</p>
<p>DocsAPI returns invoice fields such as the vendor, the invoice number and the total as structured data, and flags low-confidence fields for review, so a check like the one above can run on its output. Pricing starts at $0.02 per page, and qualified lenders can start with a demo and a free 30-day trial.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "OCR How-To",
  date: "November 17, 2026",
  datePublished: "2026-11-17T00:00:00.000Z",
  dateModified: "2026-11-17T00:00:00.000Z",
  last_updated: "November 17, 2026",
  readTime: "14 min read",
  author: nupuraUghade,
  primary_keyword: "duplicate invoice detection",
  secondary_keywords: [
    "detect duplicate invoices",
    "duplicate invoice detection ocr",
    "duplicate payment detection",
    "invoice duplicate check",
    "fuzzy matching invoice numbers"
],
  tags: ["OCR", "duplicate invoices", "accounts payable", "invoices"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How do you detect duplicate invoices with OCR?",
      answer:
        "Compare the vendor, invoice number and total against invoices already on file after cleaning them: drop spaces, dashes and leading zeros, fold look-alike letters and digits in the number, and require the total to match to the cent. In our test of 1,800 OCR reads this caught 585 of 600 re-sent invoices with no false alerts.",
    },
    {
      question: "Why does exact matching miss duplicate invoices?",
      answer:
        "Because the same invoice is often printed differently. In our test 413 of 600 re-sends had a different number or total format, and exact matching caught none of them. It caught 170 of the 187 re-sends whose printed text matched the original.",
    },
    {
      question: "What fuzzy matching threshold should I use for invoice numbers?",
      answer:
        "Test it on your own good invoices. At 85% similarity our rule flagged 503 of 1,200 good invoices, 98% of those with seven character numbers, because consecutive numbers differ by one character. A one character change scores 0.90 at ten characters, so longer numbers can trip a 90% threshold too.",
    },
    {
      question: "How does OCR cause missed duplicate invoices?",
      answer:
        "OCR can read an O as a zero or an S as a 5. Tesseract misread the invoice number on 67 of 600 re-sends in our test. Plain normalization rescued 5 of them, and folding the letters O, I, S, B and Z into digits rescued 60.",
    },
    {
      question: "Can fuzzy matching flag recurring invoices as duplicates?",
      answer:
        "Yes. A recurring vendor, such as rent or a subscription, sends invoices with the same total and a similar number. In our test an 85% fuzzy rule with a total within 1% flagged 140 of 140 good invoices from recurring vendors with seven character numbers.",
    },
    {
      question: "What should happen to a suspected duplicate invoice?",
      answer:
        "Hold it for a person to compare with the first. They choose not a duplicate, a duplicate, or a corrected invoice, and the decision is stored on the invoice so the same pair is not flagged again.",
    },
  ],
}
