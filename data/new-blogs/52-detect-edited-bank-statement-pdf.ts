import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog52: BlogPost = {
  id: "new-52",
  title: "Detect an Edited Bank Statement PDF: 980 Files Tested",
  slug: "detect-edited-bank-statement-pdf",
  excerpt:
    "Eight checks caught 511 of 600 edited bank statements and raised 7 false alarms on 380 genuine ones, all scans. The 89 edits that got through left no trace of an editing tool, and 82 of them kept the math right.",
  description:
    "We edited 600 generated bank statements 12 ways. Eight checks caught 511, with 7 false alarms on 380 genuine files. Edits that kept the math passed.",
  metaTag: "How to Detect an Edited Bank Statement PDF: 8 Checks Tested",
  summary:
    "In PyMuPDF 1.26.5 and Tesseract 5.5.2 tests on 980 generated bank statement PDFs (380 genuine files in six made-up layouts, and 600 copies edited 12 different ways, 50 per method), eight checks in one Python script caught 511 of the 600 edits and flagged 7 of the 380 genuine files, all of them scans with misread digits. Edits caught per check: producer 214, dates 300, revisions 100, fonts 244, overlap 100, alignment 145, OCR text layer 39, running balance 235. Counting %%EOF markers would have flagged all 40 genuine files from a layout that appends an update after creation; comparing the page content of the first revision with the final file flagged none of them and caught all 100 edits saved on top. A strict list of each bank's known Producer flagged all 40 genuine statements a customer printed to PDF. The balance check caught 229 of 252 edits that broke the math and, apart from 4 misread digits on scans, none of the 255 edits that fixed every later balance and total. The 89 misses left no trace of an editing tool: numbers rewritten in the page's own text commands with metadata restored (26 of 50), a clone of the bank's own template (25 of 50), a painted scan printed and rescanned (31 of 50), and same font edits on layouts with standard fonts (7 of 50). These are generated files and scripted edits, not DocsAPI results.",
  content: `
<p>To find out whether a bank statement PDF was edited, run several checks, because each one sees a different trace. Metadata shows the tool, the file's revision history shows a save on top, fonts and alignment show a replaced number, and the running balance shows broken math.</p>
<p>In our test on 600 edited copies of generated statements, made 12 different ways, eight checks caught 511 between them. They raised 7 false alarms on 380 genuine statements, all of them scans. The 89 edits that got through left no trace of an editing tool, and 82 of them kept the arithmetic right.</p>
<p>No single check came close to that total. The best content check, fonts, caught 244 of the 600, and the balance check caught 235, nearly all of them edits that left the math broken. This guide adds numbers to our earlier pieces: <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a> explains why the file's structure is harder to scrub than its metadata, and <a href="/resources/blogs/document-fraud-detection-api">document fraud detection API</a> lists the checks a fraud pipeline runs. Below are the test, which check caught which edit, the false alarms, the edits nothing caught, and the script.</p>

<h2>How do you tell if a bank statement PDF was edited?</h2>
<p>Read the file in eight ways and look for any one that disagrees with a clean export from a bank. The table lists the checks the script runs, with how many of the 600 edited files each one caught and how many of the 380 genuine files it flagged.</p>
<table>
  <thead><tr><th>Check</th><th>What fires it</th><th>Edited files caught (of 600)</th><th>Genuine files flagged (of 380)</th></tr></thead>
  <tbody>
    <tr><td>Producer</td><td>Producer or Creator names an editing or office tool, or the XMP copy of the metadata disagrees</td><td>214</td><td>0</td></tr>
    <tr><td>Dates</td><td>Modified more than a minute after it was created, or the XMP date disagrees</td><td>300</td><td>0</td></tr>
    <tr><td>Revisions</td><td>An earlier revision inside the file shows different page text, notes or images</td><td>100</td><td>0</td></tr>
    <tr><td>Fonts</td><td>A second copy of a font on one page, a number whose font or size differs from its column, or a font used for only one or two pieces of text</td><td>244</td><td>0</td></tr>
    <tr><td>Overlap</td><td>Text under a box drawn after it, text on top of other text, or an annotation over text</td><td>100</td><td>0</td></tr>
    <tr><td>Alignment</td><td>A number more than 0.6 points off its column's right edge, or more than 0.5 points off its row</td><td>145</td><td>0</td></tr>
    <tr><td>OCR layer</td><td>On a scan, the hidden text says one number and two OCR reads of the image agree on another</td><td>39</td><td>1</td></tr>
    <tr><td>Balance</td><td>Running balance, carried forward balance or summary totals do not add up</td><td>235</td><td>6</td></tr>
    <tr><td>Any of the eight</td><td></td><td>511</td><td>7</td></tr>
  </tbody>
</table>
<p>The first three checks read the file's records about itself, so they are fast and easy to fool. The next three read the text as drawn on the page. The last two compare the page with itself: the hidden text with the image, and each balance with the one before it.</p>
<p>When any check fires, a person should look at the statement with the reason in hand. When none fires, the file is not proven genuine, as the misses below show.</p>

<h2>How did we test it?</h2>
<p>We wrote a generator for six made-up bank layouts, then edited copies of its statements in ways a person might. Every file, change and seed is recorded, and the checks never saw that record. The layouts differ in the ways real exports do:</p>
<ul>
  <li>Fonts: Arial, Georgia, Verdana and Courier New embedded in the file, and Times and Helvetica as standard fonts that are not embedded.</li>
  <li>Design: a dark header band with white text on one layout, light bands and striped rows on others, plain ruled tables on the rest.</li>
  <li>Columns: separate withdrawal and deposit columns on four layouts, one signed amount column on two, with minus signs on one and parentheses on the other.</li>
  <li>Length: 12 to 58 transactions on one or two pages, with an account summary box on page 1.</li>
</ul>
<p>The genuine set held 380 files of four kinds. There were 240 bank exports, 40 per layout, and one layout's process appends a small update to every file after creating it, as a stamping or signing step can.</p>
<p>There were also 40 statements a customer printed to PDF from a browser or viewer, 60 scans with a hidden OCR text layer, and 40 scans with no text at all. Scans were rendered at 300 DPI with light blur, sensor noise and JPEG compression.</p>
<p>The edited set held 600 files, 50 for each of 12 methods, each made from a fresh genuine statement. Each edit made one of three changes.</p>
<p>In 252 files one deposit went up by $500 to $5,000 and nothing else changed, so the math broke. In 255 the same raise came with every later balance and the summary totals fixed. In 93 the account holder's name changed.</p>
<p>We tuned every threshold on a separate development set of 296 files, then froze the script and ran it once on the 980 test files reported here. The tools were PyMuPDF 1.26.5 and Tesseract 5.5.2. These are our own tests with open source tools, not a DocsAPI result.</p>

<h2>What were the 12 ways of editing?</h2>
<p>Ten methods started from a text PDF as a bank exports it and two from a scan. They run from careless to careful. The last column says which traces each method leaves by design, which matters for reading the results.</p>
<table>
  <thead><tr><th>Method</th><th>What the edit does</th><th>Tool traces left by design</th></tr></thead>
  <tbody>
    <tr><td>1. Font swap, appended save</td><td>Removes the number and types the new one in Helvetica at the same start point, then saves the change on top of the original</td><td>Later ModDate, a second revision; Producer unchanged</td></tr>
    <tr><td>2. Font swap, online editor</td><td>The same edit, but the whole file is rewritten</td><td>Editor's name as Producer, later ModDate</td></tr>
    <tr><td>3. Same font, PDF toolkit</td><td>Types the new number in the statement's own font, right aligned, and rewrites the file</td><td>A toolkit Producer no editor list holds, later ModDate</td></tr>
    <tr><td>4. Same font, metadata restored</td><td>As method 3, then copies the original Producer, Creator and dates back</td><td>None</td></tr>
    <tr><td>5. Numbers rewritten in place</td><td>Changes the digits inside the page's own text commands, same font object, right edge kept, metadata restored</td><td>None</td></tr>
    <tr><td>6. White box and text</td><td>Draws a box in the background color over the number and types a new one on top by eye</td><td>Editor's name as Producer, later ModDate</td></tr>
    <tr><td>7. White text box note</td><td>Adds a text box annotation with a filled background over the number, saved on top of the original</td><td>Later ModDate, a second revision</td></tr>
    <tr><td>8. Image rebuild</td><td>Renders each page at 200 DPI, paints over the number, saves the images as a new PDF</td><td>Image tool's name as Producer</td></tr>
    <tr><td>9. Retyped in a word processor</td><td>Rebuilds the whole statement in a different font</td><td>Word processor's name as Producer</td></tr>
    <tr><td>10. Template clone</td><td>Rebuilds the statement with the bank's own layout, fonts, Producer and dates</td><td>None</td></tr>
    <tr><td>11. Scan painted, text layer kept</td><td>Paints the new number onto the scan image and leaves the hidden OCR text as it was</td><td>Later ModDate</td></tr>
    <tr><td>12. Scan painted, printed and rescanned</td><td>Paints the number, then makes a new scan with fresh OCR text and fresh scanner metadata</td><td>None</td></tr>
  </tbody>
</table>
<p>So the producer and dates checks score full marks or zero on most methods because of how we built each method, not because of anything we measured. Real editors differ by product and version, and we did not test any named tool. The content checks are where the counts tell you something.</p>

<h2>Which checks caught which edits?</h2>
<p>Each row is 50 files. The middle column counts the files on which each check fired; checks that never fired on that method are left out.</p>
<table>
  <thead><tr><th>Method</th><th>Checks that fired (files of 50)</th><th>Caught by any</th></tr></thead>
  <tbody>
    <tr><td>1. Font swap, appended save</td><td>dates 50, revisions 50, fonts 42, alignment 35, balance 17</td><td>50</td></tr>
    <tr><td>2. Font swap, online editor</td><td>producer 50, dates 50, fonts 43, alignment 30, balance 25</td><td>50</td></tr>
    <tr><td>3. Same font, PDF toolkit</td><td>dates 50, fonts 29, balance 19, producer 14</td><td>50</td></tr>
    <tr><td>4. Same font, metadata restored</td><td>fonts 33, balance 23</td><td>43</td></tr>
    <tr><td>5. Numbers rewritten in place</td><td>balance 24</td><td>24</td></tr>
    <tr><td>6. White box and text</td><td>producer 50, dates 50, fonts 50, overlap 50, alignment 42, balance 16</td><td>50</td></tr>
    <tr><td>7. White text box note</td><td>dates 50, revisions 50, overlap 50, fonts 47, alignment 38, balance 22</td><td>50</td></tr>
    <tr><td>8. Image rebuild</td><td>producer 50, balance 10</td><td>50</td></tr>
    <tr><td>9. Retyped in a word processor</td><td>producer 50, balance 21</td><td>50</td></tr>
    <tr><td>10. Template clone</td><td>balance 25</td><td>25</td></tr>
    <tr><td>11. Scan painted, text layer kept</td><td>dates 50, OCR layer 38, balance 15</td><td>50</td></tr>
    <tr><td>12. Scan painted, printed and rescanned</td><td>balance 18, OCR layer 1</td><td>19</td></tr>
  </tbody>
</table>
<p>Read the table by asking which trace each method could not avoid. A swap into a standard font leaves a font change, and a white box leaves text under it. Saving on top of the original leaves the first revision in the file, which still shows the old number.</p>
<p>Methods 5, 10 and 12 avoid all of that, so the balance check caught them almost only when the edit broke the math. Method 4 avoids the metadata traces too, but a second copy of an embedded font gave it away in 33 files.</p>
<p>Two counts need a word of caution. The one OCR layer flag on method 12 was a misread, not the edit, because a rescan gives the image and its text layer the same new number. And 6 of the balance flags on edits whose math was kept right also came from misread digits on scans. We count them as caught because a person would open the file, but the reason shown would have been the wrong one.</p>

<h2>Did the checks fire on genuine statements?</h2>
<p>On text PDFs, no. The 240 bank exports and the 40 printed copies passed all eight checks. All seven false alarms were on scans.</p>
<table>
  <thead><tr><th>Genuine kind</th><th>Files</th><th>Flagged by any check</th><th>What fired</th></tr></thead>
  <tbody>
    <tr><td>Bank export, six layouts</td><td>240</td><td>0</td><td>None. A plain count of saves would have flagged all 40 files from the layout that appends an update</td></tr>
    <tr><td>Printed to PDF by the customer</td><td>40</td><td>0</td><td>None. A list of each bank's known Producer would have flagged all 40</td></tr>
    <tr><td>Scan with OCR text layer</td><td>60</td><td>3</td><td>Balance 2, OCR layer 1, all misread digits</td></tr>
    <tr><td>Scan, image only</td><td>40</td><td>4</td><td>Balance 4, all misread digits</td></tr>
  </tbody>
</table>
<p>The update count is the check most worth fixing. The <a href="https://opensource.adobe.com/dc-acrobat-sdk-docs/pdfstandards/PDF32000_2008.pdf" rel="nofollow noopener">PDF specification</a> (ISO 32000-1, section 7.5.6) says a file "can be updated incrementally without rewriting the entire file", with changes appended and each update ending in its own %%EOF marker. A genuine issuer can do that too.</p>
<p>Counting %%EOF markers flagged all 40 files from our layout that appends an update after creation. Comparing the page text, notes and images of the first revision with the final file flagged none of them, and still caught all 100 edits saved that way.</p>
<p>The same section points to the limit. Every method except 1 and 7 wrote its file in one piece, which leaves one revision, so this check never fired on them. The structure argument in our <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection</a> piece holds only for edits saved on top of the original.</p>
<p>Printed copies are the next trap. A statement printed to PDF from a browser carries the browser's or the viewer's name as Producer. Our list of editing tools does not include print engines, so it stayed quiet.</p>
<p>A stricter rule that accepts only each bank's known Producer, learned from the development set, flagged all 40 printed copies. It also caught all 50 files from method 3, against 14 with the editor list alone, because a toolkit name is not an editor's name. Use the strict list for files that claim to come straight from online banking, and expect to explain it to customers who print.</p>
<p>On scans, OCR misreads look like edits. In the development set, before any guard, the OCR layer check alone flagged 7 of 20 genuine scans. The script now reads every number twice, once in the page and once cropped and enlarged, and treats a break as a misread when a low confidence cell or one wrong digit explains it. That left 6 balance and 1 OCR layer false alarms on the 100 genuine scans in the test.</p>
<p>On 15 of those 100 scans the balance check could not read enough of the table to judge, 12 of them on the Courier New layout. It reports those as not checked rather than as passed.</p>

<h2>What does each check catch, and what does it miss?</h2>
<p>Fonts caught every font swap except on the layout that already used Helvetica, the editor's default. There, 15 swaps changed nothing a font check can see. For same font edits, the check caught every file whose bank embedded its fonts, because the editor embedded a second copy of the same font. It caught none of the 38 files from the two layouts with standard fonts, where the edit reused the font already there.</p>
<p>Overlap caught all 100 white box and annotation edits and never fired on a genuine file, even on layouts with shaded bands and striped rows. The rule that makes this work is draw order. A bank draws its shading first and its text on top, so a filled box drawn after the text it covers is a sign of an edit.</p>
<p>Alignment caught most edits placed by eye, and most edits typed at the old start point in a font of a different width. It missed every same font edit, because those were right aligned to the old edge. It also missed swaps between fonts with equal digit widths, such as Arial to Helvetica, unless a new number was longer than the old one, which happened in 10 of 30.</p>
<p>The OCR layer check caught 38 of 50 painted scans that kept their old text layer. Most misses were on the Courier New layout, where Tesseract could not read the numbers well enough to trust, and the guard against misreads stayed quiet. It cannot see an edit that was rescanned, because then the image and its text agree.</p>
<p>Balance caught edits that broke the math, and almost nothing else. Our test of <a href="/resources/blogs/bank-statement-ocr-errors-balance-check">bank statement OCR errors</a> showed the same row by row check finding misread numbers. Here it finds edited ones, with the same blind spot for numbers changed in step.</p>

<h2>Is the balance check enough on its own?</h2>
<p>Only against careless edits. The table splits the 600 edits by what changed.</p>
<table>
  <thead><tr><th>What the edit changed</th><th>Files</th><th>Balance check fired</th><th>Any check fired</th><th>Missed</th></tr></thead>
  <tbody>
    <tr><td>One deposit raised, nothing else</td><td>252</td><td>229</td><td>245</td><td>7</td></tr>
    <tr><td>Deposit raised, later balances and totals fixed</td><td>255</td><td>4</td><td>190</td><td>65</td></tr>
    <tr><td>Account holder's name</td><td>93</td><td>2</td><td>76</td><td>17</td></tr>
  </tbody>
</table>
<p>On the 252 broken edits the balance check fired on 229. On text PDFs it fired on 202 of 208, and the 6 it missed were image rebuilds, 5 of them where OCR could not read enough of the table. The 6 flags among the other 348 edits were misreads.</p>
<p>So arithmetic catches the edits that forgot to fix the math, and the other seven checks catch the tool that made the edit. An edit that fixes the math and leaves no tool trace passes both.</p>

<h2>Which edits got past every check?</h2>
<p>The 89 misses came from four methods. In 82 of them the edit kept the math right:</p>
<ul>
  <li>Numbers rewritten in place: 26 of 50, every one that changed balances in step or changed only the name.</li>
  <li>Template clone: 25 of 50, again every edit with consistent math or a name change.</li>
  <li>Scan painted, printed and rescanned: 31 of 50. That includes 7 that broke the math, where the balance check could not read the table (4) or took a one digit change for a misread (3).</li>
  <li>Same font, metadata restored: 7 of 50, all on the two layouts with standard fonts.</li>
</ul>
<p>Nothing these checks read separates these files from genuine ones, because most of them are clean files carrying false numbers. The template clone is the clearest case. It used the bank's layout, fonts, Producer and dates, so every check that compares the file with the bank's own output agreed with it. Catching these takes evidence from outside the file, such as the bank's own data.</p>

<h2>The script</h2>
<p>One Python file runs all eight checks on a PDF and prints the ones that fired, with the reason. It needs PyMuPDF (<code>pip install pymupdf</code>). The OCR layer check, and the balance check on scans, also need the <code>tesseract</code> command line tool. Run it like this:</p>
<pre><code>python3 check_statement.py statement.pdf
python3 check_statement.py statement.pdf --known producers.json   # strict Producer list per bank
python3 check_statement.py statement.pdf --no-ocr --json          # skip tesseract, print everything</code></pre>
<p>We ran it on one of the test files, edited with a white box over a deposit. It printed this:</p>
<pre><code>statement_edited.pdf: 2 page(s), 0 scanned, 1 revision(s), Producer "EasyPDF Edit 11.0.2"
  FIRED  producer: Producer "EasyPDF Edit 11.0.2" names an editing or office tool
                    Creator "EasyPDF Edit 11.0.2" names an editing or office tool
                    Producer is "EasyPDF Edit 11.0.2" but the XMP copy says "DocGen Core 4.0.2"
                    Creator is "EasyPDF Edit 11.0.2" but the XMP copy says "Dunmore Digital Statements"
  FIRED  dates: modified 10 days, 18:54:28 after it was created (2026-04-04 21:54 to 2026-04-15 16:49)
                    ModDate 2026-04-15 16:49 but the XMP copy says 2026-04-04 21:54
  ok     revisions
  FIRED  fonts: 1 value(s) in the column ending at x=470 use a different font or size than the other 52 (Georgia 8.5): ['3,907.81']
                    font Helvetica is used for only 1 piece(s) of text: ['3,907.81']
  FIRED  overlap: page 1: "2,907.81" is hidden under a filled box drawn after it
  FIRED  alignment: "3,907.81" ends +1.4 pt from its column edge
  n/a    ocr
  FIRED  balance: row "2026-03-18 ACH DEPOSIT PAYROLL CITY OF SPRINGFIELD 3,907.81 ": 5,310.49 +3,907.81 is not 8,218.30
                    summary deposits 13,541.85 but the rows add up to 14,541.85
6 of 8 checks fired: producer, dates, fonts, overlap, alignment, balance</code></pre>
<p>We also ran it on a genuine export from another layout. Every check passed:</p>
<pre><code>statement_genuine.pdf: 1 page(s), 0 scanned, 1 revision(s), Producer "StatementServer 6.1"
  ok     producer
  ok     dates
  ok     revisions
  ok     fonts
  ok     overlap
  ok     alignment
  n/a    ocr
  ok     balance
0 of 8 checks fired</code></pre>
<p>It exits with code 1 when a check fires, so a pipeline can route those files to a person. In our runs a text PDF took about 0.1 seconds and a scanned page about 7 seconds, because of the two OCR passes.</p>
<p>The <code>--known</code> file maps a bank name, as printed on page 1, to the Producer strings its statements carry. Build it from statements you downloaded yourself, not from applicant files. Here is the whole script:</p>
<pre><code>"""Check a bank statement PDF for signs of editing.

Runs eight checks and prints the ones that fired, with the reason:
  producer   Producer or Creator names an editing tool, or the two metadata copies disagree
  dates      ModDate is more than a minute after CreationDate (or before it)
  revisions  the file holds earlier revisions, and the page content differs between them
  fonts      a second copy of a font on one page, a value whose font or size differs from its
             column, or a font family used by one or two pieces of text
  overlap    text drawn under a later filled box, text on top of other text, or an annotation over text
  alignment  a number off its column's right edge or off its row's baseline
  ocr        on scanned pages, the hidden text layer disagrees with what OCR reads on the image
  balance    running balances, carried forward balances and summary totals do not add up

Usage:
  python3 check_statement.py statement.pdf [--known producers.json] [--no-ocr] [--json]
producers.json maps a bank name, as printed on page 1, to the Producer strings its statements use.
Needs PyMuPDF (pip install pymupdf). The ocr check, and balances on scanned pages, need the
tesseract command line tool. Exit code 1 if any check fired, 0 if none did.
"""
import argparse
import datetime as dt
import json
import re
import statistics
import subprocess
import sys

import pymupdf

EDITOR = re.compile(r"(?&lt;!cr)edit|\\bword\\b|excel|powerpoint|photoshop|illustrator|canva|gimp|\\bpaint|"
                    r"inkscape|libreoffice|openoffice|google docs|ilovepdf|smallpdf|sejda|pdfescape|"
                    r"pdffiller|dochub|foxit|nitro|pdf-xchange|pdfelement|wondershare|pdf24", re.I)
MONEY = re.compile(r"^\\(?-?\\$?\\d{1,3}(?:,\\d{3})*\\.\\d{2}\\)?(?:CR|DR)?-?$")
DATE = re.compile(r"^(?:\\d{1,2}/\\d{1,2}(?:/\\d{2,4})?|\\d{4}-\\d{2}-\\d{2})$")
MONTHS = {"jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"}
SUBSET = re.compile(r"^[A-Z]{6}\\+")
DASHES = {"\\u00ad": "-", "\\u2212": "-", "\\u2010": "-", "\\u2011": "-", "\\u2012": "-", "\\u2013": "-"}
STYLE = re.compile(r"[-,]?(?:bold|italic|oblique|regular|roman|book|medium|light)|psmt$|mt$|ps$", re.I)


def family(font):
    name = SUBSET.sub("", font).replace(" ", "")
    return STYLE.sub("", name).rstrip("-,") or name


def amount(s):
    neg = s.startswith("(") or s.startswith("-") or s.endswith("-") or s.endswith("DR")
    v = float(re.sub(r"[^\\d.]", "", s))
    return -v if neg else v


def pdf_time(s):
    m = re.match(r"D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(?:([Z+-])(\\d{2})?'?(\\d{2})?)?", s or "")
    if not m:
        return None
    g = m.groups()
    t = dt.datetime(int(g[0]), int(g[1] or 1), int(g[2] or 1), int(g[3] or 0), int(g[4] or 0), int(g[5] or 0))
    if g[6] in ("+", "-") and g[7]:
        off = dt.timedelta(hours=int(g[7]), minutes=int(g[8] or 0))
        t = t - off if g[6] == "+" else t + off
    return t


def xmp_value(xmp, tag):
    m = re.search(r"&lt;%s&gt;([^&lt;]*)&lt;/%s&gt;|%s=\\"([^\\"]*)\\"" % (tag, tag, tag), xmp or "")
    return (m.group(1) if m.group(1) is not None else m.group(3)).strip() if m else None


def xmp_time(s):
    try:
        t = dt.datetime.fromisoformat(s.replace("Z", "+00:00"))
        return t.astimezone(dt.timezone.utc).replace(tzinfo=None)
    except (AttributeError, ValueError):
        return None


# ---------- reading the page ----------

def words_from_trace(page):
    """Words with font, size, draw order and render mode, built from the characters PyMuPDF traces."""
    out = []
    for span in page.get_texttrace():
        cur = []
        for ch in list(span["chars"]) + [(32, 0, (0, 0), (0, 0, 0, 0))]:
            c = DASHES.get(chr(ch[0]), chr(ch[0]))
            gap = cur and ch[3][0] - cur[-1][3][2] &gt; span["size"] * 0.3
            if c in " \\xa0" or gap:
                if cur:
                    x0 = min(k[3][0] for k in cur)
                    out.append(dict(text="".join(DASHES.get(chr(k[0]), chr(k[0])) for k in cur), x0=x0,
                                    y0=min(k[3][1] for k in cur), x1=max(k[3][2] for k in cur),
                                    y1=max(k[3][3] for k in cur), base=cur[0][2][1], font=span["font"],
                                    size=round(span["size"], 2), seq=span["seqno"],
                                    hidden=span["type"] == 3 or span.get("opacity", 1) == 0))
                cur = [] if c in " \\xa0" else [ch]
            else:
                cur.append(ch)
    return out


def is_image_page(page):
    area = abs(page.rect)
    return any(abs(pymupdf.Rect(i["bbox"]) &amp; page.rect) &gt; 0.85 * area for i in page.get_image_info())


def ocr_words(page, dpi=300):
    """OCR one page with tesseract; boxes come back in PDF points."""
    pix = page.get_pixmap(dpi=dpi, colorspace=pymupdf.csGRAY)
    w, h, sam = pix.width, pix.height, pix.samples
    lut = bytes(1 if i &lt; 128 else 0 for i in range(256))
    dark = [sum(sam[y * w:(y + 1) * w].translate(lut)) &gt; 0.5 * w for y in range(h)]
    y = 0
    while y &lt; h:  # light text on a dark band: invert the band so tesseract can read it
        if dark[y]:
            y1 = y
            while y1 &lt; h and any(dark[y1:y1 + 8]):
                y1 += 1
            while not dark[y1 - 1]:
                y1 -= 1
            mid = sam[y * w:(y + 1) * w]
            xs = [i for i in range(0, w, 4) if mid[i] &lt; 128]
            pix.invert_irect((xs[0], y, xs[-1] + 4, y1))
            y = y1
        y += 1
    png = pix.tobytes("png")
    r = subprocess.run(["tesseract", "stdin", "stdout", "--psm", "6", "--dpi", str(dpi), "tsv"],
                       input=png, capture_output=True, check=True)
    k = 72.0 / dpi
    out = []
    for line in r.stdout.decode("utf-8", "replace").splitlines()[1:]:
        f = line.split("\\t")
        if len(f) == 12 and re.search(r"[A-Za-z0-9]", f[11]) and float(f[10]) &gt;= 0:
            x, y, w, h = (int(v) * k for v in f[6:10])
            text = "".join(DASHES.get(c, c) for c in f[11].strip())
            out.append(dict(text=text, x0=x, y0=y, x1=x + w, y1=y + h, base=y + h,
                            conf=float(f[10])))
    merged = []
    for o in out:  # "17." + "377.87" is one number that OCR split in two
        if merged and re.fullmatch(r"\\d{1,3}[.,]", merged[-1]["text"]) and re.fullmatch(r"\\d{3}\\.\\d{2}", o["text"]) \\
                and abs(o["base"] - merged[-1]["base"]) &lt; 3 and 0 &lt;= o["x0"] - merged[-1]["x1"] &lt; 6:
            m = merged[-1]
            m.update(text=m["text"][:-1] + "," + o["text"], x1=o["x1"], conf=min(m["conf"], o["conf"]))
            continue
        merged.append(o)
    return merged


def overlap_frac(a, b):
    """Share of box a covered by box b."""
    w = min(a["x1"], b["x1"]) - max(a["x0"], b["x0"])
    h = min(a["y1"], b["y1"]) - max(a["y0"], b["y0"])
    area = (a["x1"] - a["x0"]) * (a["y1"] - a["y0"])
    return w * h / area if w &gt; 0 and h &gt; 0 and area &gt; 0 else 0.0


def lines_of(words):
    lines = []
    for w in sorted(words, key=lambda w: (w["base"], w["x0"])):
        tol = max(2.0, (w["y1"] - w["y0"]) * 0.45)
        if lines and abs(statistics.mean(v["base"] for v in lines[-1]) - w["base"]) &lt;= tol:
            lines[-1].append(w)
        else:
            lines.append([w])
    return [sorted(l, key=lambda w: w["x0"]) for l in lines]


# ---------- the checks ----------

def check_producer(meta, xmp, first_text, known, scanned=False):
    why = []
    for key in ("producer", "creator"):
        if EDITOR.search(meta.get(key) or ""):
            why.append(f'{key.title()} "{meta[key]}" names an editing or office tool')
    for key, tag in (("producer", "pdf:Producer"), ("creator", "xmp:CreatorTool")):
        x = xmp_value(xmp, tag)
        if x and meta.get(key) and x != meta[key]:
            why.append(f'{key.title()} is "{meta[key]}" but the XMP copy says "{x}"')
    if known is not None and not scanned:  # a scan carries the scanner's name, not the bank's
        for bank, producers in known.items():
            if bank.lower() in first_text.lower() and meta.get("producer") not in producers:
                why.append(f'Producer "{meta.get("producer")}" is not one {bank} statements use')
    return why


def check_dates(meta, xmp):
    c, m = pdf_time(meta.get("creationDate")), pdf_time(meta.get("modDate"))
    why = []
    if c and m and (m - c).total_seconds() &gt; 60:
        why.append(f"modified {m - c} after it was created ({c:%Y-%m-%d %H:%M} to {m:%Y-%m-%d %H:%M})")
    if c and m and (c - m).total_seconds() &gt; 1:
        why.append("ModDate is earlier than CreationDate")
    xm = xmp_time(xmp_value(xmp, "xmp:ModifyDate"))
    if xm and m and abs((xm - m).total_seconds()) &gt; 60:
        why.append(f"ModDate {m:%Y-%m-%d %H:%M} but the XMP copy says {xm:%Y-%m-%d %H:%M}")
    return why


def page_snapshot(doc):
    snap = []
    for page in doc:
        words = sorted(page.get_text("words"), key=lambda w: (round(w[3]), w[0]))
        snap.append((tuple(w[4] for w in words),
                     tuple(sorted((a.type[1], a.info.get("content", "")) for a in page.annots())),
                     tuple(sorted(i["digest"].hex() for i in page.get_image_info(hashes=True)))))
    return snap


def check_revisions(raw, doc):
    ends = [m.end() for m in re.finditer(rb"startxref\\s+\\d+\\s+%%EOF[\\r\\n]*", raw)]
    info = {"revisions": len(ends), "content_changed": False}
    if len(ends) &lt; 2:
        return [], info
    try:
        first = pymupdf.open("pdf", raw[:ends[0]])
        before, after = page_snapshot(first), page_snapshot(doc)
    except Exception:
        return [f"{len(ends)} revisions; the first one could not be opened"], info
    why = []
    for n, (b, a) in enumerate(zip(before, after), 1):
        if b[0] != a[0]:
            gone = [w for w in b[0] if w not in a[0]][:3]
            new = [w for w in a[0] if w not in b[0]][:3]
            why.append(f"page {n} text changed after the first revision: {gone} became {new}")
        if b[1] != a[1]:
            why.append(f"page {n}: annotations added after the first revision")
        if b[2] != a[2]:
            why.append(f"page {n}: images replaced after the first revision")
    if len(before) != len(after):
        why.append(f"page count changed from {len(before)} to {len(after)}")
    info["content_changed"] = bool(why)
    return why, info


def columns(words):
    """Group money words into columns by right edge."""
    xs = sorted(w["x1"] for w in words)
    groups, cur = [], []
    for x in xs:
        if cur and x - cur[-1] &gt; 8.0:
            groups.append(cur)
            cur = []
        cur.append(x)
    if cur:
        groups.append(cur)
    centers = [statistics.mode(round(x, 1) for x in g) for g in groups if len(g) &gt;= 3]
    cols = {c: [] for c in centers}
    for w in words:
        if centers:
            c = min(centers, key=lambda c: abs(c - w["x1"]))
            if abs(c - w["x1"]) &lt;= 15:
                cols[c].append(w)
    return cols


def check_fonts(doc, pages_words):
    why = []
    for page in doc:
        seen = {}
        for f in page.get_fonts():
            name = SUBSET.sub("", f[3]).replace(" ", "")
            if name in seen and seen[name] != f[0]:
                why.append(f"page {page.number + 1}: two separate copies of font {name}")
            seen.setdefault(name, f[0])
    visible = [w for ws in pages_words for w in ws if not w["hidden"]]
    if not visible:
        return why
    money = [w for w in visible if MONEY.match(w["text"])]
    for c, ws in columns(money).items():
        styles = {}
        for w in ws:
            styles.setdefault((family(w["font"]), round(w["size"], 1)), []).append(w)
        if len(styles) &gt; 1:
            main = max(styles, key=lambda k: len(styles[k]))
            odd = [w["text"] for k, v in styles.items() if k != main for w in v]
            why.append(f"{len(odd)} value(s) in the column ending at x={c:.0f} use a different font or size "
                       f"than the other {len(styles[main])} ({main[0]} {main[1]}): {odd[:3]}")
    med = statistics.median(w["size"] for w in visible)
    fams = {}
    for w in visible:
        if 0.8 * med &lt;= w["size"] &lt;= 1.3 * med:
            fams.setdefault(family(w["font"]), {}).setdefault(w["seq"], []).append(w["text"])
    common = max(fams, key=lambda f: len(fams[f])) if fams else None
    for f, spans in fams.items():
        if len(spans) &lt;= 2 and f != common:
            texts = [" ".join(t) for t in spans.values()]
            why.append(f"font {f} is used for only {len(texts)} piece(s) of text: {texts}")
    return why


def box_of(r):
    return dict(x0=r.x0, y0=r.y0, x1=r.x1, y1=r.y1)


def visible_words(page, words):
    """Drop text hidden under a later filled shape or under later text; add text from FreeText notes."""
    fills = [d for d in page.get_drawings() if d.get("fill") is not None]
    out, why = [], []
    shown = [w for w in words if not w["hidden"]]
    for w in shown:
        covered = [d for d in fills if d["seqno"] &gt; w["seq"] and overlap_frac(w, box_of(d["rect"])) &gt; 0.5]
        if covered:
            why.append(f'page {page.number + 1}: "{w["text"]}" is hidden under a filled box drawn after it')
            continue
        on_top = [v for v in shown if v is not w and v["seq"] &gt; w["seq"] and v["text"] != w["text"]
                  and overlap_frac(w, v) &gt; 0.3]
        if on_top:
            why.append(f'page {page.number + 1}: "{on_top[0]["text"]}" is drawn on top of "{w["text"]}"')
            continue
        out.append(w)
    for a in page.annots():
        if a.type[1] in ("Link", "Widget", "Popup"):
            continue
        r = a.rect
        box = box_of(r)
        under = [w for w in out if overlap_frac(w, box) &gt; 0.3]
        if under:
            why.append(f'page {page.number + 1}: a {a.type[1]} annotation covers "{under[0]["text"]}"')
            out = [w for w in out if w not in under]
        text = (a.info.get("content") or "").split()
        if text:
            step = (r.x1 - r.x0) / len(text)
            for i, t in enumerate(text):
                out.append(dict(text=t, x0=r.x0 + i * step, x1=r.x0 + (i + 1) * step, y0=r.y0, y1=r.y1,
                                base=r.y1 - 2, font="annotation", size=0, seq=10**9, hidden=False))
    return out, why


def check_alignment(pages_words):
    why = []
    money = [w for ws in pages_words for w in ws
             if not w["hidden"] and MONEY.match(w["text"]) and w["font"] != "annotation"]
    for c, ws in columns(money).items():
        for w in ws:
            if abs(w["x1"] - c) &gt; 0.6:
                why.append(f'"{w["text"]}" ends {w["x1"] - c:+.1f} pt from its column edge')
    for ws in pages_words:
        for line in lines_of([w for w in ws if not w["hidden"] and w["font"] != "annotation"]):
            if not DATE.match(line[0]["text"]) and line[0]["text"].lower()[:3] not in MONTHS:
                continue
            for w in line:
                if MONEY.match(w["text"]) and abs(w["base"] - line[0]["base"]) &gt; 0.5:
                    why.append(f'"{w["text"]}" sits {w["base"] - line[0]["base"]:+.1f} pt off its row')
    return why[:5] + ([f"and {len(why) - 5} more"] if len(why) &gt; 5 else [])


def norm(t):
    return re.sub(r"[^0-9]", "", t) if re.search(r"\\d", t) else re.sub(r"[^A-Z]", "", t.upper())


def reread(page, words):
    """Read each word again on its own, enlarged. All crops go on one sheet: one tesseract call."""
    if not words:
        return []
    sheet = pymupdf.open()
    cols, sw, sh = 3, 220, 34
    sp = sheet.new_page(width=cols * sw, height=((len(words) + cols - 1) // cols) * sh + 20)
    for i, w in enumerate(words):
        r = pymupdf.Rect(w["x0"] - 2, w["y0"] - 2, w["x1"] + 2, w["y1"] + 2) &amp; page.rect
        k = min(2.0, (sw - 30) / max(r.width, 1), (sh - 10) / max(r.height, 1))
        x, y = (i % cols) * sw + 10, (i // cols) * sh + 10
        sp.show_pdf_page(pymupdf.Rect(x, y, x + r.width * k, y + r.height * k), page.parent, page.number, clip=r)
    out = [[] for _ in words]
    for o in ocr_words(sp):
        cx, cy = (o["x0"] + o["x1"]) / 2, (o["y0"] + o["y1"]) / 2
        i = int((cy - 10) // sh) * cols + int(cx // sw)
        if 0 &lt;= i &lt; len(words):
            out[i].append(o)
    return ["".join(o["text"] for o in sorted(ws, key=lambda o: o["x0"])) for ws in out]


def readings(w):
    return [t for t in (w["text"], w.get("alt")) if t]


def values(w):
    return sorted({amount(t) for t in readings(w) if MONEY.match(t)})


def unsure(w):
    """A scanned cell OCR is not sure of: low confidence and the two reads disagree or are malformed."""
    reads = readings(w)
    return w.get("conf", 100) &lt; 85 and (len(values(w)) != 1 or not all(MONEY.match(t) for t in reads))


def distance(a, b):
    row = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        prev, row[0] = row[0], i
        for j, cb in enumerate(b, 1):
            prev, row[j] = row[j], min(row[j] + 1, row[j - 1] + 1, prev + (ca != cb))
    return row[-1]


def check_ocr(layer, ocr, pno, trusted):
    """Hidden text layer against the page image. A number counts only if two OCR reads of the image agree
    and the layer's own arithmetic holds at that cell (else the scanner's OCR misread it). A word counts
    only if it differs from the image by two or more letters."""
    why = []
    for w in layer:
        money = bool(MONEY.match(w["text"]))
        if not money and not re.fullmatch(r"[A-Za-z]{3,}", w["text"]):
            continue
        best = max(ocr, key=lambda o: overlap_frac(w, o) + overlap_frac(o, w), default=None)
        if best is None or "alt" not in best or best["conf"] &lt; 60:
            continue
        if overlap_frac(w, best) + overlap_frac(best, w) &lt; 0.6:
            continue
        seen = {norm(t) for t in readings(best)}
        if len(seen) != 1 or norm(w["text"]) in seen:
            continue
        shown = best["text"]
        if money:
            a, b = norm(w["text"]), norm(shown)
            cut = a.endswith(b) or b.endswith(a) or a.startswith(b) or b.startswith(a)  # OCR dropped digits
            ok = all(MONEY.match(t) for t in readings(best)) and (
                id(w) in trusted if trusted is not None else distance(a, b) &gt;= 2 and not cut)
        else:
            ok = all(re.fullmatch(r"[A-Za-z]{3,}", t) for t in readings(best)) and \\
                distance(norm(w["text"]), norm(shown)) &gt;= 2
        if ok:
            why.append(f'page {pno + 1}: text layer says "{w["text"]}", the image shows "{shown}"')
    return why


def parse_statement(pages_words):
    """Read summary, opening, transactions, carried and closing balances from word lines.
    Each number keeps every reading OCR gave it, so one misread digit does not look like an edit."""
    st = dict(summary={}, rows=[], opening=None, skipped=0)
    header_seen = False
    for pno, ws in enumerate(pages_words):
        heads = None
        for line in lines_of(ws):
            low = " ".join(w["text"] for w in line).lower()
            names = {}
            for w in line:
                t = re.sub(r"[^a-z]", "", w["text"].lower())
                for k in ("withdrawal", "deposit", "debit", "credit", "amount", "balance"):
                    if k in t or min(distance(t, k), distance(t, k + "s")) &lt;= 1:  # allow one misread letter
                        names.setdefault(k, w)
            signed = "amount" in names or (bool({"withdrawal", "debit"} &amp; set(names))
                                           and bool({"deposit", "credit"} &amp; set(names)))
            if "balance" in names and signed and len(line) &lt;= 8:
                heads = {k: w["x1"] for k, w in names.items()}
                header_seen = True
                continue
            vals = [w for w in line if values(w)]
            if not vals:
                continue
            if not header_seen:
                if DATE.match(line[0]["text"]) or line[0]["text"].lower()[:3] in MONTHS:
                    st["skipped"] += 1  # a transaction row before any readable column headings
                    continue
                for key, pat in (("opening", r"(opening|beginning|previous|starting) balance"),
                                 ("deposits", r"deposits|credits"), ("withdrawals", r"withdrawals|debits"),
                                 ("closing", r"(closing|ending|new) balance")):
                    if re.search(pat, low) and key not in st["summary"]:
                        if not unsure(vals[-1]):  # skip a summary figure OCR could not read twice the same
                            st["summary"][key] = [abs(v) for v in values(vals[-1])]
                        break
                continue
            first = line[0]["text"]
            dated = DATE.match(first) or first.lower()[:3] in MONTHS
            if heads is None:
                st["skipped"] += 1 if dated else 0  # a table page whose column headings could not be read
                continue
            col, colw = {}, {}
            for v in vals:
                k = min(heads, key=lambda k: abs(heads[k] - v["x1"]))
                col[k], colw[k] = values(v), v
            if not dated:
                if re.search(r"opening|beginning|previous|forward", low) and "balance" in col:
                    st["rows"].append(dict(kind="carry" if st["rows"] or st["opening"] is not None else "open",
                                           balance=col["balance"], page=pno, words=vals))
                    if st["opening"] is None:
                        st["opening"] = col["balance"]
                elif re.search(r"closing|ending|new balance", low) and "balance" in col:
                    st["rows"].append(dict(kind="close", balance=col["balance"], page=pno, words=vals))
                continue
            amt = col.get("amount")
            if amt is None:
                ins = col.get("deposit", col.get("credit"))
                outs = col.get("withdrawal", col.get("debit"))
                if ins or outs:
                    amt = sorted({abs(a) - abs(b) for a in (ins or [0.0]) for b in (outs or [0.0])})
            st["rows"].append(dict(kind="tx", amount=amt, balance=col.get("balance"), page=pno, words=vals,
                                   bw=colw.get("balance"), aw=[w for k, w in colw.items() if k != "balance"],
                                   text=" ".join(w["text"] for w in line)[:60]))
    return st


def one_digit(x, y):
    a, b = f"{abs(x):,.2f}", f"{abs(y):,.2f}"
    return len(a) == len(b) and sum(c != d for c, d in zip(a, b)) == 1


def misread(r, prev):
    """On a scan, a break that an unsure cell, or one wrong digit in a low-confidence cell, explains
    is an OCR misread, not an edit."""
    low = [w for w in r["aw"] + [r["bw"]] if w and w.get("conf", 100) &lt; 85]
    p0 = min(prev)
    if r["bw"] and unsure(r["bw"]):
        return r["amount"][0], round(p0 + r["amount"][0], 2)
    if any(unsure(w) for w in r["aw"]):
        return round(r["balance"][0] - p0, 2), r["balance"][0]
    for p in prev:
        if r["bw"] in low:
            for a in r["amount"]:
                if any(one_digit(b, p + a) for b in r["balance"]):
                    return a, round(p + a, 2)
        if any(w in low for w in r["aw"]):
            for b in r["balance"]:
                if any(one_digit(a, b - p) for a in r["amount"]):
                    return round(b - p, 2), b
    return None


def check_balance(st):
    """Running balance chain, carried and closing balances, and the summary box."""
    tx = [r for r in st["rows"] if r["kind"] == "tx"]
    unread = [r for r in tx if not r["amount"] or not r["balance"]] + [None] * st["skipped"]
    if len(tx) &lt; 3 or len(unread) &gt; 0.2 * len(tx):
        return None  # too little of the table could be read to judge
    why, used = [], []
    prev = set(st["opening"] or [])
    for r in st["rows"]:
        if r["kind"] == "tx":
            if not r["amount"] or not r["balance"]:
                prev = set(r["balance"] or [])  # unreadable row: restart at the next printed balance
                continue
            fits = [(a, b) for p in prev for a in r["amount"] for b in r["balance"] if abs(p + a - b) &lt;= 0.005]
            r["fit"] = bool(fits)
            fix = misread(r, prev) if prev and not fits else None
            if fix:
                fits = [fix]
            if prev and not fits:
                p = min(prev)
                why.append(f'row "{r["text"]}": {p:,.2f} {r["amount"][0]:+,.2f} is not {r["balance"][0]:,.2f}')
            used.append(fits[0][0] if fits else r["amount"][0])
            prev = {b for a, b in fits} or set(r["balance"])
        elif r["kind"] in ("carry", "close"):
            r["fit"] = bool(prev) and any(abs(p - b) &lt;= 0.005 for p in prev for b in r["balance"])
            if prev and not r["fit"]:
                kind = "carried forward" if r["kind"] == "carry" else "closing"
                why.append(f"{kind} balance {r['balance'][0]:,.2f} does not match "
                           f"the running balance {min(prev):,.2f}")
            prev = set(r["balance"])
    s = st["summary"]
    dep = round(sum(a for a in used if a &gt; 0), 2)
    wd = round(-sum(a for a in used if a &lt; 0), 2)

    def near(xs, v):
        return any(abs(x - v) &lt;= 0.005 for x in xs)
    if not unread and "deposits" in s and not near(s["deposits"], dep):
        why.append(f"summary deposits {s['deposits'][0]:,.2f} but the rows add up to {dep:,.2f}")
    if not unread and "withdrawals" in s and not near(s["withdrawals"], wd):
        why.append(f"summary withdrawals {s['withdrawals'][0]:,.2f} but the rows add up to {wd:,.2f}")
    if all(k in s for k in ("opening", "deposits", "withdrawals", "closing")):
        if not any(near(s["closing"], o + d - w)
                   for o in s["opening"] for d in s["deposits"] for w in s["withdrawals"]):
            why.append("summary: opening + deposits - withdrawals does not equal closing")
    if not unread and "closing" in s and prev and not any(near(s["closing"], p) for p in prev):
        why.append(f"summary closing {s['closing'][0]:,.2f} but the last running balance is {min(prev):,.2f}")
    if "opening" in s and st["opening"] and not any(near(s["opening"], o) for o in st["opening"]):
        why.append("summary opening balance differs from the table's opening balance")
    return why


def analyze(path, known=None, use_ocr=True):
    raw = open(path, "rb").read()
    doc = pymupdf.open("pdf", raw)
    meta, xmp = doc.metadata or {}, doc.get_xml_metadata()
    res = {}
    first_text = " ".join(doc[0].get_text().split()) if doc.page_count else ""  # also turns no-break spaces into spaces
    res["producer"] = check_producer(meta, xmp, first_text, known, doc.page_count and is_image_page(doc[0]))
    res["dates"] = check_dates(meta, xmp)
    res["revisions"], rev = check_revisions(raw, doc)
    text_pages, seen_pages, overlap, ocr_why, layer_pages = [], [], [], [], []
    scanned, layered = 0, 0
    for page in doc:
        words = words_from_trace(page)
        if is_image_page(page):
            scanned += 1
            if not use_ocr:
                continue
            ocr = ocr_words(page)
            again = [w for w in ocr if sum(c.isdigit() for c in w["text"]) &gt;= 3 or
                     (page.number == 0 and w["y1"] &lt; 0.4 * page.rect.height and len(norm(w["text"])) &gt;= 3)]
            for w, alt in zip(again, reread(page, again)):
                w["alt"] = alt
            if words:
                layered += 1
                layer_pages.append((page.number, words, ocr))
            seen_pages.append(ocr)
            continue
        shown, why = visible_words(page, words)
        overlap += why
        text_pages.append(words)
        seen_pages.append(shown)
    res["fonts"] = check_fonts(doc, text_pages) if text_pages else None
    res["overlap"] = overlap if text_pages else None
    res["alignment"] = check_alignment(text_pages) if text_pages else None
    if layer_pages:
        lst = parse_statement([w for _, w, _ in layer_pages])
        trusted = None
        if check_balance(lst) is not None:  # the layer's own arithmetic: which cells it vouches for
            trusted = {id(w) for r in lst["rows"] if r.get("fit") for w in r["words"]}
        for pno, words, ocr in layer_pages:
            ocr_why += check_ocr(words, ocr, pno, trusted)
    res["ocr"] = ocr_why if layered else None
    res["balance"] = None if (scanned and not use_ocr) else check_balance(parse_statement(seen_pages))
    return dict(file=path, pages=doc.page_count, scanned_pages=scanned, revisions=rev["revisions"],
                producer=meta.get("producer"), checks=res)


def main():
    ap = argparse.ArgumentParser(description="Check a bank statement PDF for signs of editing.")
    ap.add_argument("pdf")
    ap.add_argument("--known", help="JSON file: bank name -&gt; list of Producer strings its statements use")
    ap.add_argument("--no-ocr", action="store_true", help="skip tesseract (no ocr check, no balances on scans)")
    ap.add_argument("--json", action="store_true", help="print the full result as JSON")
    a = ap.parse_args()
    known = json.load(open(a.known)) if a.known else None
    r = analyze(a.pdf, known, not a.no_ocr)
    if a.json:
        print(json.dumps(r, indent=2))
    else:
        fired = [k for k, v in r["checks"].items() if v]
        print(f'{a.pdf}: {r["pages"]} page(s), {r["scanned_pages"]} scanned, {r["revisions"]} revision(s), '
              f'Producer "{r["producer"]}"')
        for k, v in r["checks"].items():
            if v is None:
                print(f"  n/a    {k}")
            elif v:
                print(f"  FIRED  {k}: " + "\\n                    ".join(v[:4]))
            else:
                print(f"  ok     {k}")
        print(f"{len(fired)} of {len(r['checks'])} checks fired" + (": " + ", ".join(fired) if fired else ""))
    sys.exit(1 if any(r["checks"].values()) else 0)


if __name__ == "__main__":
    main()</code></pre>

<h2>What can this test not tell you?</h2>
<ul>
  <li>How real editors behave. We wrote each edit method ourselves. Real tools differ in whether they write their name, update ModDate, save on top or embed a font again, and that decides what the metadata, revision and font checks see.</li>
  <li>How skilled forgers work. Our edits came from scripts. A person matching noise in a scan or kerning in a font could beat checks that caught our versions.</li>
  <li>How real statements look. Six made-up layouts are far fewer than the formats a lender sees. Real exports can carry several fonts in one column, bold totals or late saves, which would raise false alarms our layouts did not.</li>
  <li>How a different OCR engine would do. Our scans' text layers came from Tesseract, and so did the check's reads. A scanner's own OCR engine would disagree with Tesseract more often.</li>
  <li>Digital signatures and pixel forensics. We did not test either. A valid signature from the bank proves the file unchanged, so check it first where one exists, as our <a href="/resources/blogs/bank-statement-fraud-detection">fraud detection guide</a> explains.</li>
</ul>

<h2>What should a lender do with this?</h2>
<p>Run every check, not the one that seems strongest. Fonts, balance, producer and dates each caught edits that no other check caught, and together the eight raised no false alarms on text PDFs in this test. The other four earn their place by pointing at the changed number, such as the value under a box or the old value in an earlier revision.</p>
<p>Send any file that fires to a person along with the reason, and keep the reason in the loan file. A reviewer who sees which number moved can ask the right question.</p>
<p>Then measure the checks on your own traffic before trusting the counts here. Take statements you downloaded from a few banks' websites yourself and count false alarms, especially printed copies and scans. Build the known Producer list from those files. Treat a scan as weaker evidence than a direct download, since a rescan erases most traces.</p>
<p>For the edits nothing caught, ask for evidence from outside the file. That means a statement downloaded during a screen share, a bank data connection, or a check of deposits against <a href="/resources/blogs/pay-stub-income-verification-ocr">pay stub income</a>.</p>
<p>If statements arrive inside one long packet, <a href="/resources/blogs/split-loan-packet-pdf">split the loan packet</a> first, because these checks expect one statement per file. Our guide to <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDFs vs image PDFs</a> shows how to tell a text page from a scan, which decides which checks can run. The <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for lending and underwriting</a> guide covers what else to read from each loan document.</p>

<h2>Where does DocsAPI fit?</h2>
<p>DocsAPI is HyperVerge's document intelligence API for SMB lending and fintech. It classifies each document, extracts fields and tables, and checks extracted data against format rules before it moves on. On its own 2026 benchmark of 1,700 real documents it read multi-page bank statement tables with 91% accuracy, and it processes about 4 million pages a month. That benchmark is separate from the tests here, which used Tesseract and PyMuPDF, so the numbers are not comparable.</p>
<p>The balance check works best on clean extracted tables, and the other seven checks read the PDF file itself, whoever extracts the rows. Pricing starts from $0.02 per page. Access starts with a demo, then a free 30 day trial for qualified lenders, and our <a href="/use-cases/loan-verification">loan verification</a> page covers the rest of the workflow.</p>

  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Lending",
  date: "November 27, 2026",
  datePublished: "2026-11-27T00:00:00.000Z",
  dateModified: "2026-11-27T00:00:00.000Z",
  last_updated: "November 27, 2026",
  readTime: "17 min read",
  author: nupuraUghade,
  primary_keyword: "detect edited bank statement pdf",
  secondary_keywords: [
    "bank statement fraud detection",
    "fake bank statement detection",
    "pdf tampering detection",
    "fraud detection api",
    "altered bank statement check",
    "pdf incremental update forensics"
  ],
  tags: ["lending", "fraud detection", "bank statement OCR", "document forensics"],
  cluster: "industry-trends",
  faq: [
    {
      question: "How can you tell if a bank statement PDF has been edited?",
      answer:
        "Run several checks, because each sees a different trace: metadata, earlier revisions inside the file, fonts, text hidden under boxes, column alignment, the OCR layer of a scan and the running balance. In our test of 600 edited statements, eight checks together caught 511. The best single content check, fonts, caught 244.",
    },
    {
      question: "Is PDF metadata enough to spot a fake bank statement?",
      answer:
        "No. The Producer and date checks fire only when the editing tool writes its name or a later date. In our test, three of the 12 edit methods kept or restored the bank's own metadata. Two of them were caught only when the math broke, and the third only by fonts or math.",
    },
    {
      question: "Does a PDF with two %%EOF markers mean it was edited?",
      answer:
        "Not by itself. The PDF specification lets any writer append an update, and one of our genuine layouts did that on every file, so counting markers flagged all 40. Comparing the page text, notes and images of the first revision with the final file flagged none of them and caught all 100 edits saved on top.",
    },
    {
      question: "Does the running balance check catch edited bank statements?",
      answer:
        "Only edits that break the math. It caught 229 of 252 edits that raised one deposit and changed nothing else. It caught none of the 255 that also fixed every later balance and total; the 4 flags it raised on those were misread digits on scans.",
    },
    {
      question: "Why do scanned bank statements cause false alarms?",
      answer:
        "Because OCR misreads digits, and a misread digit breaks the balance just like an edit. All 7 false alarms in our test were on scans, after a guard that reads each number twice and treats a break explained by an unsure cell or one wrong digit as a misread.",
    },
    {
      question: "What kind of edit gets past every check?",
      answer:
        "One that keeps the math right and leaves no trace of the tool. Numbers rewritten inside the page's own text commands with the metadata restored, a clone of the bank's template, and a painted scan that was printed and rescanned made up 82 of our 89 misses. Catching those takes evidence from outside the file, such as a bank data connection.",
    },
  ],
}
