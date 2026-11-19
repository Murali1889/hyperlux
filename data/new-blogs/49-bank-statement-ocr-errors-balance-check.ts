import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog49: BlogPost = {
  id: "new-49",
  title: "Bank Statement OCR Errors: 400 Statements Tested",
  slug: "bank-statement-ocr-errors-balance-check",
  excerpt:
    "A running balance check flagged all 84 statements with a misread number and a script fixed 64 of them. Tested on 400 generated statements read with Tesseract.",
  description:
    "We read 400 generated bank statements with Tesseract. A running balance check flagged all 84 with a wrong number, and a script fixed 64 of them.",
  metaTag: "How to Find and Fix Bank Statement OCR Errors, Tested",
  summary:
    "In Tesseract 5.5.2 tests on 400 generated bank statements (25 rows each, four image quality levels, 19,890 numbers checked on the 390 that kept their row count), 84 statements had at least one misread number. A row by row running balance check flagged all 84 and raised no alarm on 306 correct statements, while a closing balance check caught 65 and missed all 13 statements whose only error was one balance cell. The break pattern fit the bad cell in all 45 single error statements (39 without ambiguity), and a script that accepts fixes within one character corrected 64 of the 84. The script is included.",
  content: `
<p>To find a misread number on an OCR'd bank statement, check every row against the balance before it: the previous balance plus this row's amount must equal this row's balance. In our test of 400 generated statements read with Tesseract, 84 of the 390 that kept their row count had at least one wrong number. The row by row check flagged all 84 and raised no alarm on the 306 statements whose numbers were all right. A short script then corrected 64 of the 84 with no person involved. A check that only compares the opening and closing balance caught 65 of the 84, and it missed all 13 statements where a single balance cell was the only mistake.</p>
<p>The check also tells you where to look. A misread amount breaks one link in the chain, and a misread balance breaks two in a row, so the break pattern usually points at the cell. Below are the test, the error types we saw, how often each check works, the script, and what the test did not cover. This is a companion to our earlier test on <a href="/resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions">lost minus signs in bank statement OCR</a>. That one asks which statement formats lose the sign. This one asks what to do when a digit is wrong.</p>

<h2>How do you find a wrong number on an OCR'd bank statement?</h2>
<p>Use the arithmetic the statement already contains. A statement with a running balance column is a chain: each balance is the one before it, plus a credit or minus a debit. If OCR misreads any number in that chain, the sum stops matching at that row. You do not need to know what the right answer was, only that two numbers on the page cannot both be right.</p>
<p>The guides we read describe this check in words. None of the three we read closely gave a measured count of how often it catches an error or raises a false alarm, and none tested a repair of a misread digit. We ran the test to get those numbers. If you only need the one-line version, the answer is yes, it works well, and the closing balance alone is not enough.</p>

<h2>How did we test OCR errors on bank statements?</h2>
<p>We generated 400 one page statements. Each had a header, an opening balance row and 25 transactions, with date, description, debit, credit and balance columns, set in an 8.5 point font. Debits ran from $5 to $2,500, credits from $5 to $3,000, and every balance was kept positive. The 400 pages were split into four quality levels of 100 statements each:</p>
<ul>
  <li><strong>Clean:</strong> a 300 DPI render with no damage.</li>
  <li><strong>Scan:</strong> 200 DPI with light blur and noise and a tilt of up to 0.7 degrees.</li>
  <li><strong>Mid:</strong> 170 DPI with more blur and noise and a tilt of up to 1 degree.</li>
  <li><strong>Phone:</strong> 150 DPI with blur, heavier noise, a lighting gradient across the page and a tilt of up to 1.5 degrees.</li>
</ul>
<p>We straightened each page, then read it with Tesseract 5.5.2 in single block mode and kept the word positions. Because we generated the layout, we knew where each column sat, so we assigned each number to the debit, credit or balance column by its right edge. A real pipeline has to find the columns first, which we covered in <a href="/resources/blogs/extract-tables-from-scanned-pdf">extracting tables from scanned PDFs</a>.</p>
<p>A statement counts as aligned when the read came back with the 27 expected lines (header, opening balance and 25 rows). We checked and repaired only aligned statements. That left 390 statements, because 10 of the 100 phone pages came back with a different number of lines. Each aligned statement has 51 numbers that matter: the opening balance, plus the amount and the balance on each of 25 rows. Over 390 statements that is 19,890 numbers. We compared every one with the value we generated. These are our own tests with open source tools, not a DocsAPI result.</p>

<h2>How often does OCR misread the numbers on a statement?</h2>
<p>Rarely on a good scan, and often on a bad one. The gap between the second and third quality level is large, and the jump from the mid to the phone level, where several settings change at once, is the biggest one.</p>
<table>
  <thead><tr><th>Quality</th><th>Statements read in 27 lines</th><th>Wrong numbers (of 51 per statement)</th><th>Statements with at least one wrong number</th></tr></thead>
  <tbody>
    <tr><td>Clean, 300 DPI</td><td>100 of 100</td><td>0 of 5,100</td><td>0</td></tr>
    <tr><td>Scan, 200 DPI</td><td>100 of 100</td><td>1 of 5,100</td><td>1</td></tr>
    <tr><td>Mid, 170 DPI</td><td>100 of 100</td><td>17 of 5,100</td><td>14</td></tr>
    <tr><td>Phone, 150 DPI</td><td>90 of 100</td><td>138 of 4,590</td><td>69</td></tr>
  </tbody>
</table>
<p>On the phone level that is 3% of numbers wrong, and 69 of 90 statements with at least one. Nobody reviewing a statement can accept a 77% chance that something on the page is wrong, which is why the check matters most where the image is worst. An average per-character accuracy figure would hide this, since one wrong digit in a balance is a wrong balance.</p>
<p>The result looks different from our earlier bank statement test, where digits were rarely wrong and lost signs were the main problem. The two tests differ in font size and in how the pages were damaged. We did not isolate which of those matters, but do not read the two results as a contradiction. Here the print is small (8.5 point text at 150 DPI leaves digits only about 12 pixels tall), and the errors cluster at the lowest quality levels. Either way, the check below sees the error, because it looks at the arithmetic and not at the type of mistake.</p>

<h2>What do the wrong numbers look like?</h2>
<p>Most were one character swapped for another. Of the 153 wrong amounts and balances across the scan, mid and phone levels, 90 had one character replaced, 35 had a character dropped, 25 had an extra character and 3 were something else. The other 3 of the 156 wrong numbers were opening balances. The five most common swaps were these:</p>
<ul>
  <li>A decimal point read as a comma, 22 times, which turns "974.53" into "974,53".</li>
  <li>A 3 read as a 9, 17 times.</li>
  <li>A 5 read as the section sign (§), 10 times.</li>
  <li>A 5 read as an 8, 10 times.</li>
  <li>A 1 read as a 4, 10 times.</li>
</ul>
<p>The classic look-alike pairs, such as the letter O for a zero, do not appear, because these cells hold only digits and punctuation. Pairs like 3 and 9 or 1 and 4 are not on any usual list of look-alikes, so a fixed list of confusable characters would not have predicted them. That is one reason we repair from the arithmetic and not from a list of look-alikes. For the preprocessing side of this problem, see <a href="/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts">what helps and what hurts when preparing images for OCR</a>.</p>

<h2>Is the row by row check better than checking the closing balance?</h2>
<p>Yes, and the difference is not small. The closing balance check adds the opening balance and every amount, and compares the result with the last balance. We ran both checks on all 390 aligned statements, using the last balance we read as the closing balance.</p>
<table>
  <thead><tr><th>Check</th><th>Statements with a wrong number caught (of 84)</th><th>Alarms on statements with all numbers right (of 306)</th></tr></thead>
  <tbody>
    <tr><td>Row by row balance chain</td><td>84</td><td>0</td></tr>
    <tr><td>Opening plus amounts equals closing</td><td>65</td><td>not counted</td></tr>
  </tbody>
</table>
<p>The closing check misses any statement where the only mistake is a balance in the middle of the page, because no balance but the last one enters its sum. That was 13 statements in our test with a single wrong balance cell, and the closing check caught none of them (0 of 13). The row check caught all 13. We did not count alarms for the closing check on the clean statements because the point of the comparison is the misses.</p>
<p>The row check is also cheap to trust. Its zero false alarms on 306 correct statements is a result on our data, where the only way to break the chain was a misread number. On a real statement, a wrapped description or a page carry-forward line can also upset a parser, and those would show up as alarms.</p>

<h2>Can the check tell you which cell is wrong?</h2>
<p>Yes, from the pattern of broken links. Number the rows from 0. Row i is a link in the chain, from the balance above it to its own balance.</p>
<ul>
  <li>One isolated broken link, at row i, means the amount in row i is wrong. The balances on both sides are fine, so the right amount is the gap between them.</li>
  <li>Two adjacent broken links, at rows i and i+1, mean the balance in row i is wrong. It is used by both neighbours, so both break.</li>
  <li>The last row is the exception: its balance is used by no row below it, so a wrong balance there breaks only one link. A break only at the first row can also be the opening balance, and a break only at the last row can also be the last balance. These two ends are ambiguous.</li>
</ul>
<p>We tested this on the 45 statements that had exactly one wrong number: 31 amounts, 13 balances and 1 opening balance. In all 45 the broken links matched the pattern for the actual bad cell. For 39 of them (26 amounts and 13 balances away from the ends) the pattern pointed at one cell and nothing else. The other 6 were an amount in the first or last row or the opening balance, where the pattern fits two possible cells. And this is a result on single errors. As the next section shows, with several errors close together the patterns overlap and the answer gets harder.</p>

<h2>Can a script fix the wrong number, not just flag it?</h2>
<p>Often, yes. For a single misread amount, take the gap between the two surrounding balances. For a single misread balance, take the previous balance plus the row's amount, and accept it only if it also fits the next row. Then, and this is the safety rule, accept a fix only if it is within one character of what OCR read. A fix that differs by more than that is more likely to be a second error than a correction.</p>
<p>The script is below. Here it is on the two kinds of error, using real rows from our phone level. In the first, the balance 28,485.85 was read as 26,485.85. In the second, a debit of 1,321.35 was read as 1,221.35.</p>
<pre><code>from balance_check import check_chain, repair

opening = "30,782.81"
rows = [
    {"debit": "262.24",   "credit": "", "balance": "30,520.57"},
    {"debit": "2,034.72", "credit": "", "balance": "26,485.85"},   # balance should be 28,485.85
    {"debit": "2,225.75", "credit": "", "balance": "26,260.10"},
    {"debit": "2,497.88", "credit": "", "balance": "23,762.22"},
]
print(check_chain(opening, rows))            # which links break
fixed, review = repair(opening, rows)
print(fixed[1]["balance"], review)           # the repaired cell, and rows left for a person

opening = "12,902.79"
rows = [
    {"debit": "19.86",   "credit": "", "balance": "12,882.93"},
    {"debit": "1,221.35", "credit": "", "balance": "11,561.58"},   # amount should be 1,321.35
    {"debit": "1,643.18", "credit": "", "balance": "9,918.40"},
]
print(check_chain(opening, rows))
fixed, review = repair(opening, rows)
print(fixed[1]["debit"], review)</code></pre>
<p>It printed <code>[1, 2]</code> and <code>28,485.85 []</code> for the first statement, and <code>[1]</code> and <code>1,321.35 []</code> for the second. The empty list means nothing was left for a person. Across the 84 statements with a wrong number:</p>
<ul>
  <li>64 were fully corrected (76%), and the 156 wrong numbers fell to 44.</li>
  <li>Of the 45 with a single wrong number, 43 were fully corrected.</li>
  <li>Of the 39 with two or more wrong numbers, 21 were fully corrected and 33 improved.</li>
  <li>The script changed 124 numbers, and 118 of those changes were right (95%).</li>
</ul>
<p>The six changes that were wrong all overwrote a number that OCR had read correctly, and all six were in statements that had three to five wrong numbers. When the errors sit close together, the chain cannot always say which cell is the bad one, and the script can guess wrong. Three of the six were in the first or last row, the ambiguous ends described above.</p>

<h2>How close should a fix be before you accept it?</h2>
<p>Within one character, in our data. We tried four limits on the number of characters a fix may change:</p>
<table>
  <thead><tr><th>Largest change accepted</th><th>Statements fully corrected (of 84)</th><th>Statements made worse</th></tr></thead>
  <tbody>
    <tr><td>0 characters (no change possible)</td><td>9</td><td>0</td></tr>
    <tr><td>1 character</td><td>64</td><td>1</td></tr>
    <tr><td>2 characters</td><td>66</td><td>1</td></tr>
    <tr><td>Any size</td><td>67</td><td>1</td></tr>
  </tbody>
</table>
<p>One statement came out worse at every setting above zero, and going from one character to two bought only two more fully corrected statements. We stopped at one, because a larger change is more likely to be a second error than a correction, and a repair you cannot trust is worse than a flag. The zero row is a floor and not a real setting. The distance ignores commas, so at zero the script can only remove a stray comma, such as "198.55,", and the 9 statements there were exactly those.</p>
<p>The script also has an option, <code>review_ends</code>, that sends the ambiguous first row and last row to a person instead of guessing. We measured it. It cut the wrong changes from 6 to 4, and it also cut the fully corrected statements from 64 to 55, because the end rows were right 10 times out of 12. On our data guessing was the better trade, but a lender that would rather see a flag than a wrong guess should switch it on.</p>

<h2>What happens when a row is dropped or merged?</h2>
<p>The chain breaks there too, but you cannot locate it by position. Ten of the 100 phone statements came back with the wrong number of lines: six with 26, one with 25, two with 28 and one with 32. We set them aside from the counts above, and then ran the chain on the lines as read. It flagged 9 of the 10. We did not try to repair them, because once a row is missing or split, the rows after it shift by one and the script has no way to match them with the page.</p>
<p>The practical rule is to check the row count first. If you know how many transactions the statement should have (from a printed count, or from the dates), a different count means send the page to review before you spend effort on repair. The earlier lost sign test used the same row count check for the same reason.</p>

<h2>What does the balance check not catch?</h2>
<p>Anything that does not touch the arithmetic. A misread date or description changes no balance, so the chain stays quiet. In our test 111 of the 390 statements had a wrong date or description and nothing else wrong, and the chain, correctly, said nothing about any of them. If a date matters, for example when you count overdrafts in a month for <a href="/resources/blogs/nsf-overdraft-detection-ocr">NSF and overdraft detection</a>, you need a separate check, such as dates that must not go backwards.</p>
<p>It also cannot see two errors that cancel out. We did not see that happen in this test, but it is possible in principle: a wrong amount and a wrong balance that agree with each other. And it assumes the statement itself is right. A statement that someone edited by hand can break its own chain, which is a useful signal for <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud checks</a>, but it is a different question from OCR error. Last, the descriptions in our test were pairs of random words, so the description error counts do not tell you much about real merchant names.</p>

<h2>What is the script?</h2>
<p>This is the script we ran for every result above, with the check, the repair and the one character rule. It needs no libraries. Run it on the rows you extracted: each row is a dict with debit, credit and balance as the strings you read, and the opening balance is a string as well.</p>
<pre><code>import re

def to_cents(s):
    """'1,234.56' or '$1,234.56' -&gt; 123456. Returns None if the cell is not a clean amount."""
    s = s.replace("$", "").replace(" ", "")
    if not re.fullmatch(r"\\d{1,3}(,\\d{3})*\\.\\d{2}|\\d+\\.\\d{2}", s):
        return None
    return int(s.replace(",", "").replace(".", ""))

def fmt(cents):
    return f"{cents / 100:,.2f}"

def edits(a, b):
    """Edit distance between two amount strings, ignoring commas."""
    a, b = a.replace(",", ""), b.replace(",", "")
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]

def signed(row):
    """Row amount in cents: credits positive, debits negative. None if unreadable."""
    d, c = row["debit"].strip(), row["credit"].strip()
    if d and c:
        return None
    if not d and not c:
        return 0
    v = to_cents(d or c)
    return None if v is None else (-v if d else v)

def check_chain(opening, rows):
    """Return the list of broken links. Link i is broken when balance[i-1] + amount[i] != balance[i].
    Link 0 uses the opening balance. A link with an unreadable cell counts as broken."""
    bals = [to_cents(opening)] + [to_cents(r["balance"]) for r in rows]
    broken = []
    for i, r in enumerate(rows):
        amt = signed(r)
        if bals[i] is None or bals[i + 1] is None or amt is None or bals[i] + amt != bals[i + 1]:
            broken.append(i)
    return broken

def repair(opening, rows, max_edits=1, review_ends=False):
    """Fix single misreads that the chain can pin down. Returns (fixed_rows, review_rows).
    bals[k] is the balance after row k-1, so bals[0] is the opening balance.
    - One isolated broken link i: the amount in row i is wrong. Rebuild it from the balances on both sides.
    - Two adjacent broken links i and i+1: the balance in row i is wrong. Rebuild it from the previous
      balance and row i's amount, and accept it only if it also satisfies link i+1.
    A repair is accepted only when it is within max_edits characters of what was read.
    An isolated break at the first or last row is ambiguous (opening or last balance versus the amount),
    so with review_ends=True it goes to review (off by default). Anything else that cannot be fixed is returned in review."""
    rows = [dict(r) for r in rows]
    bals = [to_cents(opening)] + [to_cents(r["balance"]) for r in rows]
    broken = set(check_chain(opening, rows))
    review, skip = [], set()
    for i in sorted(broken):
        if i in skip:
            continue
        if i + 1 in broken:                                   # adjacent pair: balance of row i
            amt, nxt = signed(rows[i]), signed(rows[i + 1])
            ok = bals[i] is not None and amt is not None and nxt is not None and bals[i + 2] is not None
            if ok and bals[i] + amt + nxt == bals[i + 2] and edits(rows[i]["balance"], fmt(bals[i] + amt)) &lt;= max_edits:
                rows[i]["balance"] = fmt(bals[i] + amt); skip.update({i, i + 1})
            else:
                review.append(i); skip.add(i + 1)            # both links stay unresolved
            continue
        if bals[i] is None or bals[i + 1] is None:           # isolated, but a neighbour is unreadable
            review.append(i); continue
        if review_ends and i in (0, len(rows) - 1):          # ambiguous at the ends of the statement
            review.append(i); continue
        diff = bals[i + 1] - bals[i]                          # isolated break: amount of row i
        col, other = ("credit", "debit") if diff &gt; 0 else ("debit", "credit")
        old = (rows[i]["debit"] or rows[i]["credit"]).replace("$", "").strip()
        if diff != 0 and edits(old, fmt(abs(diff))) &lt;= max_edits:
            rows[i][col], rows[i][other] = fmt(abs(diff)), ""
        else:
            review.append(i)
    return rows, review</code></pre>
<p>Three details matter. First, <code>to_cents</code> turns an amount into whole cents before any comparison, so rounding never causes a false alarm. Second, a number that cannot be parsed (the "2,237,57" case) counts as a broken link, so a decimal point read as a comma is flagged and then repaired. Third, the script only knows positive balances in a plain format. Overdrawn balances, parentheses and CR or DR suffixes need a parser in front of it, which is the territory of our sign test.</p>

<h2>What did this test not cover?</h2>
<ul>
  <li>The statements are generated: English, one layout, one font, one page of 25 rows. Real statements add logos, shaded rows, page breaks, carried forward lines and wrapped descriptions.</li>
  <li>We assigned numbers to columns using the known layout. A real pipeline has to find the columns first, and column mistakes would add errors this test does not have. In our data one amount landed in the wrong column, and its digits were also wrong.</li>
  <li>We tested Tesseract 5.5.2 only. A model that reads layout and context will make different mistakes, so the error rates here are for this engine, not for any other.</li>
  <li>Each quality level has 100 statements, and the phone level has 90 aligned ones, so every percentage carries a margin of several points.</li>
  <li>Balances were always positive, and every statement used separate debit and credit columns. Signs are covered in the earlier test.</li>
  <li>The 8.5 point font is small, on purpose, to get enough errors to study. A larger font would have produced fewer.</li>
</ul>

<h2>What should you do with this?</h2>
<p>Run the row check on every statement you extract, before any figure goes into an income or cash flow calculation. Accept automatic fixes only when they are within one character, and keep a log of what the script changed so a reviewer can see it. Send the rest to a person, along with any page whose row count is off. The checks in this guide also fit the validation step of a wider pipeline, such as the one in our guide to <a href="/resources/blogs/data-normalization-extracted-documents">normalizing extracted data</a>, and for common error patterns beyond statements, see <a href="/resources/blogs/how-to-fix-ocr-errors">how to fix OCR errors</a>.</p>
<p>If your statements are mostly good scans, the chain will rarely fire, and that is the right outcome. The value is on the pages you cannot see an error on by eye.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI was built by HyperVerge and uses a layout aware engine with a vision language model fallback for complex pages. On its own 2026 benchmark of 1,700 documents it scored 91% on multi-page bank statements, at about 1.1 seconds per page. That benchmark is separate from the Tesseract tests in this guide, which use Tesseract as a stand-in for any engine that returns text without a layout model. A balance check is still worth running on top of any engine, ours included. Access starts with a demo, then a free 30 day trial for qualified lenders, and pricing starts from $0.02 per page with volume discounts above 100,000 pages a month.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "OCR How-To",
  date: "November 19, 2026",
  datePublished: "2026-11-19T00:00:00.000Z",
  dateModified: "2026-11-19T00:00:00.000Z",
  last_updated: "November 19, 2026",
  readTime: "15 min read",
  author: nupuraUghade,
  primary_keyword: "bank statement ocr errors",
  secondary_keywords: [
    "bank statement ocr accuracy",
    "fix bank statement ocr errors",
    "bank statement reconciliation ocr",
    "running balance check",
    "bank statement extraction errors"
],
  tags: ["OCR", "bank statements", "reconciliation", "lending"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How do you find errors in OCR'd bank statements?",
      answer:
        "Check each row against the balance before it: the previous balance plus this row's amount must equal this row's balance. In our test of 400 generated statements this row by row check flagged all 84 statements that had a misread number and raised no alarm on 306 statements whose numbers were all right.",
    },
    {
      question: "Is checking the closing balance enough?",
      answer:
        "No. Adding the opening balance and every amount and comparing the result with the last balance caught 65 of the 84 statements with a wrong number. It missed all 13 statements where the only mistake was a single balance cell in the middle of the page, because no balance but the last one enters the sum.",
    },
    {
      question: "Can a balance check fix OCR errors automatically?",
      answer:
        "Often, for single errors. Rebuilding a misread amount from the two balances around it, or a misread balance from the balance above plus the row's amount, fully corrected 64 of 84 statements, including 43 of the 45 that had one wrong number. Accept a fix only when it is within one character of what OCR read.",
    },
    {
      question: "What bank statement OCR errors are most common?",
      answer:
        "In our test, one character swapped for another (90 of 153 wrong amounts and balances), then a dropped character (35) and an extra character (25). The most common swap was a decimal point read as a comma, 22 times, followed by a 3 read as a 9, 17 times.",
    },
    {
      question: "What does a running balance check miss?",
      answer:
        "Anything that does not touch the arithmetic, such as a wrong date or description, and two errors that cancel each other out. In our test 111 of 390 statements had only a date or description error, and the check was silent on all of them, so dates need their own check.",
    },
    {
      question: "What should happen to a statement that fails the balance check?",
      answer:
        "Check the row count first, since a dropped or merged row breaks the chain and shifts every row after it. Then accept only small automatic fixes, log each one, and send everything else to a person before any figure goes into an income or cash flow calculation.",
    },
  ],
}
