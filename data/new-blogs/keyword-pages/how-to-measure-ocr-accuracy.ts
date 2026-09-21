import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-5",
  title: "How to Measure OCR Accuracy: CER, WER and Field Scores (2026)",
  slug: "how-to-measure-ocr-accuracy",
  excerpt:
    "Plain definitions of character error rate, word error rate and field level accuracy, a Python script with real output, what score counts as good, and how to test on your own documents.",
  description:
    "How to measure OCR accuracy with CER, WER and field level scoring, what score is good, plus a Python script we ran and a 50 document test plan.",
  metaTag: "How to Measure OCR Accuracy: CER, WER, Field Level",
  summary:
    "CER is the share of characters wrong, WER the share of words wrong, and field level accuracy the share of whole fields exactly right. Score fields for invoices and statements, CER and WER for search and reading. A commonly cited bar for printed text is a CER of 1 to 2% or better.",
  content: `
    <p>Character error rate (CER) is the share of characters the OCR got wrong, word error rate (WER) is the share of words wrong, and field level accuracy is the share of whole fields, like an invoice total, that are exactly right. Score fields for invoices, statements and IDs. Score CER and WER for search and reading. Below: formulas, a script we ran, good scores, and a 50 document test plan.</p>

    <h2>What are CER, WER and field level accuracy, and which one should you use?</h2>

    <p>OCR character error rate (CER) counts wrong characters, OCR word error rate (WER) counts wrong words, and field level OCR accuracy counts whole fields that match the truth exactly. Use CER and WER when the goal is readable or searchable text. Use field level accuracy when the output feeds a database, because one wrong digit makes the whole value wrong.</p>

    <p>All three measure the OCR error rate: how often the output differs from the page. You count against a ground truth, the correct values a person typed from the original.</p>

    <table>
      <thead><tr><th>Metric</th><th>What it counts</th><th>Blind spot</th></tr></thead>
      <tbody>
        <tr><td>CER</td><td>Wrong, missing and extra characters, over characters in the truth</td><td>Counts a wrong digit in a total like a wrong letter in a footer</td></tr>
        <tr><td>WER</td><td>The same edits on words</td><td>One wrong character ruins the word</td></tr>
        <tr><td>Field level accuracy</td><td>Fields exactly right, over all fields</td><td>Ignores text outside the fields</td></tr>
        <tr><td>Document level accuracy</td><td>Documents with every key field right</td><td>Falls fast as fields are added</td></tr>
      </tbody>
    </table>

    <p>With S substitutions, D deletions and I insertions, and N characters in the truth, CER = (S + D + I) / N. WER is the same on words, and accuracy is 100% minus the error rate. Plain CER can pass 100% when the OCR adds extra text, so the OCR-D project, which evaluates OCR for libraries, also uses a version divided by (S + D + I + correct characters).</p>

    <h3>Why a low CER can still hide wrong fields</h3>

    <p>A 99% character accuracy sounds safe. On a 10 character amount, if errors were independent, the whole amount is right 0.99 to the power of 10, or 90.4%, of the time. Errors are not fully independent, so read that as intuition. Across a whole invoice of 15 fields:</p>

    <table>
      <thead><tr><th>Accuracy per field</th><th>Chance all 15 fields are right</th></tr></thead>
      <tbody>
        <tr><td>95%</td><td>46.3%</td></tr>
        <tr><td>99%</td><td>86.0%</td></tr>
        <tr><td>99.9%</td><td>98.5%</td></tr>
      </tbody>
    </table>

    <p>Each row is the field accuracy to the power of 15. So when a vendor says "99% accurate", ask for the unit: characters, words, fields, pages or documents. Our primer on <a href="/resources/blogs/understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies">why 99% OCR accuracy still means wrong data</a> covers the same trap.</p>

    <h2>What OCR error rate counts as good?</h2>

    <p>A commonly cited rule of thumb for printed text, from a National Library of Australia digitization article, calls a CER of 1 to 2% good, 2 to 10% average and over 10% poor. For invoices and structured fields there is no universal number: set it from what one wrong value costs, and send doubtful values to a person.</p>

    <table>
      <thead><tr><th>CER</th><th>Label (Holley, D-Lib Magazine, 2009)</th></tr></thead>
      <tbody>
        <tr><td>1 to 2% (98 to 99% accurate), or better</td><td>Good</td></tr>
        <tr><td>2 to 10% (90 to 98% accurate)</td><td>Average</td></tr>
        <tr><td>Over 10% (below 90% accurate)</td><td>Poor</td></tr>
      </tbody>
    </table>

    <p>These bands come from historic newspaper scans at the National Library of Australia, not invoices, and Holley notes her group did not agree whether they meant characters or words. Its test of 45 pages found raw OCR accuracy between 71% and 98.02%. For search, a simulation study found significant retrieval impacts starting at a 5% error rate, counted on words.</p>

    <p>For business fields, use one rule: send a field to review when the chance it is wrong, times the cost of fixing it later, is bigger than the cost of checking it now. A payment amount and a memo line should not share a threshold. As a document level reality check, the best touchless rate (invoices processed with no human review) in our accounts payable trial on 200 real invoices was 81%, from our own tuned pipeline, with the next best tool at 80%. See the <a href="/resources/blogs/best-ocr-software-for-accounts-payable">accounts payable OCR buyer guide</a>.</p>

    <h2>How to measure OCR accuracy: a Python script you can run</h2>

    <p>To measure OCR accuracy, write the correct text for a sample of documents, run the OCR, then count edits with Levenshtein distance: the fewest insertions, deletions and substitutions that turn one string into the other. Divide by the truth length for CER, count words for WER, and compare whole fields for field accuracy. This script does all three.</p>

    <p>We ran it with Python 3.9.6 on September 21, 2026, using only the standard library. It is one file, ocr_metrics.py, shown in four parts with outputs pasted as printed. The invoice line is invented, with look-alike errors: an l for a capital I, an O for a zero, an l for a 1, and a dropped comma.</p>

    <h3>Part 1: CER and WER on one line</h3>

    <pre><code># ocr_metrics.py (Python 3.8+, standard library only)
from decimal import Decimal
from math import sqrt

# ---------- Part 1: CER and WER from Levenshtein edit distance ----------
def edit_distance(a, b):
    """Fewest insertions, deletions and substitutions to turn a into b.
    Works on strings (characters) or lists (words)."""
    prev = list(range(len(b) + 1))
    for i, x in enumerate(a, 1):
        cur = [i]
        for j, y in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[-1] + 1, prev[j-1] + (x != y)))
        prev = cur
    return prev[-1]

def cer(truth, ocr):
    return edit_distance(truth, ocr) / len(truth)

def wer(truth, ocr):
    return edit_distance(truth.split(), ocr.split()) / len(truth.split())

truth = "Invoice INV-2026-0412 dated 04/12/2026 Total due $12,847.50 Net 30"
ocr   = "lnvoice INV-2O26-0412 dated 04/l2/2026 Total due $12847.50 Net 30"

print("Part 1: CER and WER")
print("truth chars:", len(truth), "| truth words:", len(truth.split()))
print("char edits :", edit_distance(truth, ocr))
print("word edits :", edit_distance(truth.split(), ocr.split()))
print(f"CER = {cer(truth, ocr):.1%}   WER = {wer(truth, ocr):.1%}")
print(f"CER can pass 100%: {cer('AB', 'ABCDEF'):.0%}")</code></pre>

    <pre><code>Part 1: CER and WER
truth chars: 66 | truth words: 9
char edits : 4
word edits : 4
CER = 6.1%   WER = 44.4%
CER can pass 100%: 200%</code></pre>

    <p>Four character edits over 66 characters is a CER of 6.1%, so by characters the line looks 93.9% accurate. But 4 of 9 words are wrong (WER 44.4%), and under strict exact match the invoice number, date and total are all wrong (0 of 3 fields). If your rules compare amounts as numbers, 12847.50 equals 12,847.50 and the total counts as right (1 of 3). Same line, three honest numbers. The last output line shows CER passing 100%: AB against ABCDEF is 4 insertions over 2 characters.</p>

    <h3>Part 2: field level scoring on three invoices</h3>

    <pre><code># ---------- Part 2: field level exact match on three invoices ----------
NAMES = ["invoice_no", "date", "vendor", "total", "po_number"]
KINDS = ["id", "date", "text", "money", "id"]

def to_money(s):
    try:
        return Decimal(s.replace("$", "").replace(",", ""))
    except Exception:
        return None

def same(kind, t, o):
    """Rules are set BEFORE scoring: IDs and dates exact, money numeric, text loose."""
    if o is None:
        return False
    if kind == "money":
        return to_money(t) == to_money(o)
    if kind == "text":
        clean = lambda s: " ".join(s.lower().split()).rstrip(".")
        return clean(t) == clean(o)
    return t == o

pairs = [  # (truth, ocr) in the order of NAMES
    (("INV-2026-0412", "2026-04-12", "Acme Supply Co.", "12,847.50", "PO-7781"),
     ("INV-2026-0412", "2026-04-12", "Acme Supply Co", "12847.50", "PO-7781")),
    (("INV-2026-0413", "2026-04-13", "Northwind Traders", "980.00", "PO-7790"),
     ("INV-2O26-0413", "2026-04-13", "Northwind Traders", "980.00", "PO-7790")),
    (("INV-2026-0414", "2026-04-15", "Acme Supply Co.", "3,410.00", "PO-7802"),
     ("INV-2026-0414", "2026-04-15", "Acme Supply Co.", "3,140.00", None)),
]

print("\\nPart 2: field level accuracy")
strict = loose = docs_ok = 0
for t, o in pairs:
    res = [same(k, a, b) for k, a, b in zip(KINDS, t, o)]
    strict += sum(a == b for a, b in zip(t, o))
    loose += sum(res)
    docs_ok += all(res)
    for name, ok, a, b in zip(NAMES, res, t, o):
        if not ok:
            print(f"  WRONG {name}: truth={a!r} ocr={b!r}")
n = len(pairs) * len(NAMES)
print(f"strict exact match: {strict}/{n} = {strict/n:.1%}")
print(f"with field rules  : {loose}/{n} = {loose/n:.1%}")
print(f"documents with every field right: {docs_ok}/{len(pairs)}")</code></pre>

    <pre><code>Part 2: field level accuracy
  WRONG invoice_no: truth='INV-2026-0413' ocr='INV-2O26-0413'
  WRONG total: truth='3,410.00' ocr='3,140.00'
  WRONG po_number: truth='PO-7802' ocr=None
strict exact match: 10/15 = 66.7%
with field rules  : 12/15 = 80.0%
documents with every field right: 1/3</code></pre>

    <p>Three lessons. First, the score moved from 66.7% to 80.0% only because we decided that a missing comma in an amount and a trailing period on a vendor name are harmless. Write the rules before you score, and apply them to every engine (see <a href="/resources/blogs/data-normalization-extracted-documents">data normalization for extracted documents</a>). Second, document level accuracy (1 of 3) sits far below field level accuracy (80.0%). Third, count missing and wrong separately: an empty purchase order (PO) number is caught by a required field check, but the transposed total (3,140.00 for 3,410.00) looks valid and slips through.</p>

    <h2>How do you build a 50 document test set?</h2>

    <p>Pick 50 real documents from production, including the ugly ones. Have two people key every field independently from the original image and a third resolve differences. Run each engine on the same files, then count correct fields, correct documents, and missing versus wrong values. Fifty documents screen out clear failures but cannot settle close calls.</p>

    <ol>
      <li><strong>Fix the fields and rules first.</strong> Pick 5 to 15 fields. For each, write how a match is judged: exact for IDs and dates, numeric for amounts, loose for names.</li>
      <li><strong>Sample from production, not your best files.</strong> Pick at random within each group (clean PDFs, scans, phone photos, faxes, multi-page), give each hard group at least 5 documents, and cap any one vendor at a few files.</li>
      <li><strong>Build the truth from the image, not from the OCR.</strong> Correcting OCR output is faster but can bias labels toward the engine's mistakes. In the clinical review cited below, double data entry had the lowest pooled error rate of the methods compared.</li>
      <li><strong>Run every engine on the same files with fixed settings.</strong> Save raw output and confidence values so you can re-score later.</li>
      <li><strong>Count.</strong> Field accuracy is correct fields over all fields. Document accuracy is documents with every key field right. Keep missing and wrong apart, and add CER and WER if you transcribed a text region.</li>
      <li><strong>Report by group, with an interval.</strong> A blended score can hide a large gap between clean PDFs and phone photos.</li>
    </ol>

    <p>Part 3 of the script shows what a set that size can prove:</p>

    <pre><code># ---------- Part 3: how far to trust a small test set ----------
def wilson(k, n, z=1.96):
    """95% Wilson score interval for k successes out of n."""
    p = k / n
    d = 1 + z*z/n
    mid = (p + z*z/(2*n)) / d
    half = z * sqrt(p*(1-p)/n + z*z/(4*n*n)) / d
    return mid-half, mid+half

print("\\nPart 3: how far to trust a small test set")
for k, n in ((46, 50), (460, 500)):
    lo, hi = wilson(k, n)
    print(f"{k}/{n} correct = {k/n:.0%}, 95% interval {lo:.1%} to {hi:.1%}")</code></pre>

    <pre><code>Part 3: how far to trust a small test set
46/50 correct = 92%, 95% interval 81.2% to 96.8%
460/500 correct = 92%, 95% interval 89.3% to 94.1%</code></pre>

    <p>If 46 of 50 documents are fully right you observed 92%, but the 95% Wilson interval (a standard range for where the true rate probably lies) runs from 81.2% to 96.8%. At 500 documents it narrows to 89.3% to 94.1%. So 50 documents can show an engine is broken on your files, not tell 92% from 88%. For sample sizes behind a go-live decision, read <a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">how long an invoice OCR parallel run should really be</a>.</p>

    <h2>OCR confidence score explained: what it tells you and what it does not</h2>

    <p>An OCR confidence score is the engine's own estimate that a word or field is right, not a measured accuracy. Use it to decide what a person should check, and set the cut-off from your own labeled data: count the wrong values that slip through above each threshold, then pick the lowest threshold whose miss rate you can accept.</p>

    <h3>How engines report it</h3>

    <p>Microsoft's Document Intelligence docs describe field confidence as an estimated probability between 0 and 1 that the prediction is correct, so 0.95 means likely correct 19 times out of 20. The Amazon Textract Block object documents a Confidence float from 0 to 100. Tesseract's tab-separated (TSV) output gives each word a confidence and shows -1 on page, block, paragraph and line rows. A 0.9 from one engine and a 90 from another are different statements, and neither is a promise.</p>

    <h3>What it is not</h3>

    <p>Rose Holley's 2009 paper notes that OCR contractors "often talk about OCR confidence levels and OCR accuracy as if they were the same thing", and that true accuracy "can only be determined by an independent arbiter, a human." A 2024 study of confidence scores and error rates found that confidence improves error detection, and that commercial and open-source engines differ significantly in performance. Do not assume one engine's scores behave like another's.</p>

    <h3>How to pick a threshold from your own data</h3>

    <p>Use the labeled set above. For every extracted field keep the confidence and whether the value was correct, then build this table (Part 4 of the script):</p>

    <pre><code># ---------- Part 4: pick a confidence threshold from your own labeled data ----------
# (confidence, was the field correct?) for 20 fields. Toy numbers to show the method.
rows = [(.99, 1), (.99, 1), (.98, 1), (.98, 1), (.97, 1), (.97, 0), (.96, 1),
        (.95, 1), (.94, 1), (.93, 1), (.91, 1), (.90, 0), (.88, 1), (.85, 0),
        (.82, 1), (.78, 0), (.70, 0), (.66, 1), (.55, 0), (.40, 0)]
print("\\nPart 4: threshold table (toy data)")
print("threshold  auto-accepted  wrong-in-accepted  error-rate  sent-to-review")
for th in (0.99, 0.95, 0.90, 0.80):
    acc = [ok for c, ok in rows if c &gt;= th]
    wrong = len(acc)-sum(acc)
    print(f"{th:&gt;9.2f}  {len(acc):&gt;13}  {wrong:&gt;17}  {wrong/len(acc):&gt;10.1%}  {len(rows)-len(acc):&gt;14}")</code></pre>

    <pre><code>Part 4: threshold table (toy data)
threshold  auto-accepted  wrong-in-accepted  error-rate  sent-to-review
     0.99              2                  0        0.0%              18
     0.95              8                  1       12.5%              12
     0.90             12                  2       16.7%               8
     0.80             15                  3       20.0%               5</code></pre>

    <p>The 20 fields are made up, only to show the method. At 0.99 nothing wrong gets through, but 18 of 20 fields go to a person. At 0.80 only 5 go to review, but 3 wrong values are auto-accepted, 20.0% of accepted fields. The data includes a wrong value at 0.97, because engines can be confidently wrong. So set thresholds per field type, and add rule checks that ignore the engine's opinion, such as line items summing to the total. With real data you want hundreds of fields before trusting the table, and you should redo it when the mix or engine version changes.</p>

    <h2>OCR accuracy vs human accuracy: who makes fewer errors?</h2>

    <p>Careful people are not error free. A meta-analysis of 93 clinical research papers found pooled error rates of 0.29% per field for single data entry and 0.14% for double entry (two people key, differences resolved). In our search we found no credible head-to-head of modern OCR against people on invoices, so measure both on your own documents.</p>

    <table>
      <thead><tr><th>Method (pooled, per field)</th><th>Error rate</th><th>95% interval</th></tr></thead>
      <tbody>
        <tr><td>Medical record abstraction</td><td>6.57%</td><td>5.51% to 7.72%</td></tr>
        <tr><td>Optical scanning (OCR and mark recognition)</td><td>0.74%</td><td>0.21% to 1.60%</td></tr>
        <tr><td>Single data entry</td><td>0.29%</td><td>0.24% to 0.35%</td></tr>
        <tr><td>Double data entry</td><td>0.14%</td><td>0.08% to 0.20%</td></tr>
      </tbody>
    </table>

    <p>Source: Garza and colleagues, a systematic review of papers published from 1978 to 2008, where error rate is errors divided by data values inspected. Do not read the optical row as a verdict on 2026 engines: the papers are old, the forms are clinical, and the row mixes OCR with checkbox reading. The table shows that the human baseline is not zero, and that how you organize people changes it by about a factor of two.</p>

    <p>To measure your own baseline, have your usual data entry staff key the same 50 documents without seeing OCR output, and score and time them with the same field scorer. Then score the combination: OCR for everything, people for fields below your confidence threshold. That final error rate is what your customers and auditors experience. Failure patterns also differ: people tend to make scattered slips such as a transposed digit, while an engine tends to repeat the same misreading whenever the same shape appears, such as O for 0 in every serial number. That is why a rule check after OCR is cheap and effective.</p>

    <h2>What is the most accurate OCR software available?</h2>

    <p>There is no single most accurate OCR software, because accuracy depends on the document type. In our OCR accuracy benchmark of 1,900 real documents, Tesseract, PaddleOCR and DocsAPI tied at 97-99% on clean typed English, while the winner changed on tables, handwriting, phone photos, other languages and academic papers.</p>

    <p>Disclosure: DocsAPI is our product, and the benchmark reports where it loses. Scoring was character-level or field-level against hand-labeled ground truth depending on document type, so two 91% scores in different rows are not the same unit. Read the method on the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">full OCR accuracy benchmark</a> before comparing rows.</p>

    <h3>Most accurate OCR engine 2026, by document type</h3>

    <table>
      <thead><tr><th>Document type</th><th>Best in our test</th><th>Score</th><th>Next best</th></tr></thead>
      <tbody>
        <tr><td>Clean typed English</td><td>Tesseract, PaddleOCR, DocsAPI (tied)</td><td>97-99%</td><td>Tied</td></tr>
        <tr><td>Scanned bank statements (multi-page tables)</td><td>DocsAPI</td><td>91%</td><td>PaddleOCR 79%, Docling 76%, LlamaParse 71%, Tesseract 64%</td></tr>
        <tr><td>Invoices (line items)</td><td>DocsAPI</td><td>93%</td><td>LlamaParse 87%, Docling 81%</td></tr>
        <tr><td>Handwritten forms</td><td>DocsAPI</td><td>78%</td><td>PaddleOCR 73%, Tesseract 61%</td></tr>
        <tr><td>Phone-photographed receipts</td><td>PaddleOCR</td><td>82%</td><td>DocsAPI 76%, Tesseract 58%</td></tr>
        <tr><td>Scanned receipts (mobile quality, parser set)</td><td>LlamaParse</td><td>78%</td><td>DocsAPI 74%, Docling 58%</td></tr>
        <tr><td>Multilingual (English plus Mandarin or Spanish)</td><td>PaddleOCR</td><td>89%</td><td>DocsAPI 81%, Tesseract 71%</td></tr>
        <tr><td>Academic papers</td><td>Docling</td><td>94%</td><td>LlamaParse 89%, DocsAPI 87%</td></tr>
      </tbody>
    </table>

    <p>All numbers are quoted from the benchmark page. Rows that name both engines and parsers combine its engine comparison (500 documents) and parser comparison (1,200 documents), which used different sets. It was run by a vendor and gives set sizes but not a count per category, so treat gaps of a few points as ties. For head-to-heads, see <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>, <a href="/resources/blogs/docling-vs-llamaparse-vs-docsapi">Docling vs LlamaParse vs DocsAPI</a> and <a href="/resources/blogs/aws-textract-vs-docsapi">AWS Textract vs DocsAPI</a>. For picks by use case, see <a href="/resources/blogs/best-ocr-software-2026">best OCR software in 2026</a>.</p>

    <h2>What goes wrong when you measure OCR accuracy?</h2>

    <p>Most measurement mistakes come from an unfair test, not a bad engine: labels built from the OCR output, matching rules that change per engine, tuning and testing on the same files, and metrics that punish harmless differences such as reading order. Fix those four before you trust any score.</p>

    <ul>
      <li><strong>Reading order.</strong> On multi-column pages, an engine that reads the right column first is punished by CER even if every character is right. Score fields, or align text by region.</li>
      <li><strong>Tuning and testing on the same files.</strong> If you adjust a pipeline until it scores well, test it on documents it never saw.</li>
    </ul>

    <h2>What to do next</h2>

    <ul>
      <li><strong>If you need searchable text or an archive:</strong> transcribe 20 pages, score CER and WER, and use a CER of 1 to 2% as a starting bar, with a WER under 5% if search quality matters.</li>
      <li><strong>If you extract fields from invoices, statements or IDs:</strong> build the 50 document set, score field and document level accuracy, and set thresholds per field. Score handwriting and faxes as their own group (see the <a href="/resources/blogs/handwritten-faxed-invoice-ocr">handwritten and faxed invoice accuracy data</a>), and read <a href="/resources/blogs/invoice-line-item-ocr">where the invoice line item accuracy gap is</a> for tables.</li>
      <li><strong>If you are choosing an engine:</strong> shortlist two or three by document type from the table above, then test them on your set. Our free <a href="/tools/which-ocr">Which OCR should I use selector</a> asks six questions and maps your document mix to the engines that won those categories in our benchmark. For vision-language models, see <a href="/resources/blogs/vlm-vs-ocr">VLM vs OCR</a>.</li>
      <li><strong>If you are already live:</strong> sample a few dozen documents a month with frozen rules, per document group. Our <a href="/resources/blogs/ocr-pdf-honest-guide">production lessons from OCR at scale</a> cover the failures that show up first.</li>
    </ul>

    <h2>Sources and how we checked this</h2>

    <p>We opened each source on September 21, 2026 and took only the facts noted. The script outputs come from running the code shown, and the compounding numbers were checked in Python.</p>

    <ul>
      <li><a href="https://www.dlib.org/dlib/march09/holley/03holley.html" target="_blank" rel="noopener noreferrer">Holley, "How Good Can It Get?", D-Lib Magazine, 2009</a>: CER bands, 45 page test, confidence versus accuracy.</li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10775420/" target="_blank" rel="noopener noreferrer">Garza et al., error rates of data processing methods in clinical research</a> (preprint; a peer-reviewed version appeared in the International Journal of Medical Informatics): pooled error rates.</li>
      <li><a href="https://ocr-d.de/en/spec/ocrd_eval.html" target="_blank" rel="noopener noreferrer">OCR-D evaluation specification</a>: CER and WER formulas, normalized CER.</li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7148068/" target="_blank" rel="noopener noreferrer">Bazzo et al., impact of OCR errors in information retrieval, ECIR 2020</a>: the 5% finding, from simulated errors.</li>
      <li><a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence" target="_blank" rel="noopener noreferrer">Microsoft Learn, accuracy and confidence scores</a>: 0 to 1 range, 19 in 20 example.</li>
      <li><a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html" target="_blank" rel="noopener noreferrer">Amazon Textract API reference, Block</a>: Confidence, a float from 0 to 100.</li>
      <li><a href="https://tesseract-ocr.github.io/tessdoc/Command-Line-Usage.html" target="_blank" rel="noopener noreferrer">Tesseract documentation, command line usage</a>: per-word conf in TSV output, -1 on structure rows.</li>
      <li><a href="https://arxiv.org/abs/2409.04117" target="_blank" rel="noopener noreferrer">Hemmer et al., confidence-aware OCR error detection, arXiv 2024</a> (abstract).</li>
      <li><a href="/resources/blogs/ocr-accuracy-benchmark-2026">DocsAPI, OCR Accuracy Benchmark 2026</a>: every benchmark number above and the 81% touchless rate.</li>
    </ul>

    <p>Limits. The human error rates come from clinical data entry studies published 18 to 48 years ago, not from invoices. The Holley bands come from historic newspapers. The 5% search finding uses simulated errors. The confidence table uses invented fields. Our benchmark was run by a vendor and not independently replicated. We did not verify how other vendors define their published accuracy figures.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "AI Document Intelligence",
  date: "September 22, 2026",
  datePublished: "2026-09-22T00:00:00.000Z",
  dateModified: "2026-09-22T00:00:00.000Z",
  last_updated: "September 22, 2026",
  readTime: "16 min read",
  author: nupuraUghade,
  primary_keyword: "how to measure ocr accuracy",
  secondary_keywords: [
    "ocr accuracy benchmark",
    "ocr error rate",
    "most accurate ocr engine 2026",
    "ocr confidence score explained",
    "ocr character error rate",
    "ocr word error rate",
    "field level ocr accuracy",
    "ocr accuracy vs human accuracy",
    "what is the most accurate ocr software available",
  ],
  tags: ["OCR", "accuracy", "CER", "WER", "benchmark", "metrics", "confidence score"],
  cluster: "ai-doc",
  noindex: true,
  faq: [
    {
      question: "Do I divide the errors by the length of the truth or of the OCR output?",
      answer:
        "By the truth, the correct reference text. CER is substitutions plus deletions plus insertions, divided by the number of characters in the ground truth. Dividing by the OCR length would make a rambling output look better than it is. The same rule applies to WER, using the number of words in the truth.",
    },
    {
      question: "Should I ignore case, punctuation and extra spaces when scoring?",
      answer:
        "Only where the difference cannot change the meaning, and decide before you run any engine. Ignoring extra spaces in names or a trailing period on a company name is usually safe. Ignoring a comma in an amount is safe only if you compare it as a number. Never loosen matching on IDs, account numbers or dates, because one wrong character is a wrong value.",
    },
    {
      question: "How do I average CER over many documents?",
      answer:
        "The safest way is total edits across all documents divided by total characters in all the truths, so a long page counts for more than a short line. Averaging each document's CER separately gives a short line the same weight as a full page. Whichever you pick, state it, and report it per document type instead of as one blended number.",
    },
    {
      question: "How do I measure OCR accuracy on handwriting?",
      answer:
        "Score handwriting as its own group and use CER to compare engines, then field level accuracy for the business decision. WER can look terrible even when most letters are right, because one wrong letter ruins a word. In our benchmark, character-level accuracy on handwritten forms ranged from 61% to 78% across three engines, so a blended score would hide the gap.",
    },
    {
      question: "Which is better for OCR quality, CER or WER?",
      answer:
        "Neither is better, they answer different questions. CER is finer grained, so it separates engines that are close, and it suits IDs and codes. WER matches how search and text mining work, where whole words are matched. If the output feeds a database, skip both as your headline number and use field level accuracy.",
    },
    {
      question: "Can I trust a vendor's 99% accuracy claim?",
      answer:
        "Only after you know what was counted and on which files. Ask whether 99% means characters, words, fields or documents, and whether the documents were real production files. Our benchmark page notes that the gap between a vendor headline number and production performance is often 15 to 30 points on hard document types. Test 50 of your own documents.",
    },
    {
      question: "Do CER and WER work for large language model (LLM) or vision-language model extraction?",
      answer:
        "Field level scoring works for any extractor, because it only compares the final value with the truth. CER and WER fit less well when a model rewrites, reorders or normalizes text instead of copying it. If a model reports its own confidence, check that number the same way you would an OCR score: against labeled data, not on trust.",
    },
    {
      question: "Why does the same engine score differently in different benchmarks?",
      answer:
        "The documents, the unit (characters, words, fields, documents), the matching rules and the engine version can all differ. In our benchmark, Tesseract scored 97-99% on clean typed English and 58% on phone-photographed receipts, a gap of about 40 points from the document type alone. Compare scores only when the documents and rules resemble yours.",
    },
    {
      question: "How often should I re-measure OCR accuracy?",
      answer:
        "Whenever your document mix changes, a vendor or engine version changes, or you change your matching rules, and on a regular schedule even when nothing changes. A monthly sample of a few dozen documents per group, scored with frozen rules, is enough to spot drift early. Keep the old ground truth so that you can re-score later.",
    },
    {
      question: "Can you measure OCR accuracy without ground truth?",
      answer:
        "Not properly. Without a ground truth you can only track proxies: confidence scores, how often two engines disagree, and how many documents fail validation rules such as line items adding up to the total. These show where errors are likely, but they do not give you the error rate. Even a small labeled sample of 50 documents beats no truth at all.",
    },
  ],
}
