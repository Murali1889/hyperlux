import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog42: BlogPost = {
  id: "new-42",
  title: "Does OCR Read Non-English Text? 16 Languages Tested",
  slug: "multilingual-ocr-guide",
  excerpt:
    "We read 384 invoice-style pages in 16 languages three ways. English alone dropped accents and failed on other scripts, language packs fixed the text but broke digits in Greek and Hindi.",
  description:
    "With English alone, Tesseract made 89.8% character error on non-Latin scripts and dropped accents on Latin ones. We tested 16 languages and their packs.",
  metaTag: "Multilingual OCR Guide: 16 Languages Tested With Data",
  summary:
    "English-only Tesseract 5.5.2 made 8.4% character error on nine Latin-script languages (accents dropped) and 89.8% on seven other scripts. The matching language pack cut those to 0.2% and 2.6%, but the Greek and Hindi packs alone misread digits and lost 46% and 34% of amounts; English plus the pack kept all 584 amounts. A wrong Latin pack often did no better than English. Script detection named the script on 369 of 384 six-line pages but cannot tell French from German, and currency symbols such as the rupee, lira, ruble and won were lost. Includes a tested routing script.",
  content: `
    <p>OCR reads non-English documents well only when you load the right language pack. We tested 16 languages with Tesseract 5.5.2: with the English model alone, character errors were 8.4% on nine Latin-script languages (accents quietly dropped) and 89.8% on seven other scripts, where the output was noise. The matching language pack cut those to 0.2% and 2.6%. The surprise was numbers. English alone kept every amount intact, while the Greek and Hindi packs alone misread digits and lost a third or more of the amounts in those two languages.</p>
    <p>That makes the practical question less "does OCR support my language" and more "which pack, loaded how". This guide gives the measured answer for 16 languages, shows what the wrong setup does to names and totals, and ends with a short script that picks packs from script detection and that we ran on every test page.</p>

    <h2>How did we test OCR on 16 languages?</h2>
    <p>We rendered invoice-style text in 16 languages: French, German, Spanish, Portuguese, Polish, Turkish, Vietnamese, Czech, Swedish, Russian, Greek, Arabic, Hindi, Chinese (simplified), Japanese and Korean. Each language had a pool of ten lines covering the things an invoice carries: a date, a company name and street address, a delivery location, a service description, payment terms, subtotal, tax and total with currency, a contact name and a late-payment clause. Each test page held six lines drawn from that pool, 24 pages per language, 384 pages in all.</p>
    <p>Pages were rendered at 300 DPI in a browser, so Arabic joined correctly and right-to-left lines ran the right way, in system fonts for each script. We read every page three ways with Tesseract 5.5.2 and the fast language packs from the official tessdata_fast repository: the English model alone, the matching language pack alone, and the two together (written <code>eng+fra</code> and so on). Error is measured as characters wrong divided by characters expected, with spaces ignored, the same measure we explain in <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>. That is 1,152 page reads. Two more tests ran on the same images: script detection on 640 pages (six, three and one line) and a wrong-language-pack matrix.</p>
    <p>Two further tests used English-language amount lines: six number formats with 80 amounts each, and 14 currency symbol cases with 40 lines each. They are in the sections on numbers and symbols below. The setup mirrors our earlier <a href="/resources/blogs/how-does-ocr-work">DPI, tilt and blur tests</a>: synthetic pages, one engine, every number checked against the raw output. The limits are at the end of this guide.</p>

    <h2>What does English-only OCR do to accented Latin text?</h2>
    <p>It drops the accents and sometimes the letter underneath. English-only Tesseract averaged 8.4% character error on the nine Latin-script languages, against 0.2% for the matching pack. The cost depends on how many accented letters the language uses: French and German lost only a few characters, while Vietnamese, which stacks tone marks on vowels, reached 24.2%.</p>
    <table>
      <thead><tr><th>Language</th><th>English model only</th><th>Language pack only</th><th>English plus pack</th></tr></thead>
      <tbody>
        <tr><td>French</td><td>3.6%</td><td>0.0%</td><td>0.6%</td></tr>
        <tr><td>German</td><td>3.4%</td><td>0.0%</td><td>0.4%</td></tr>
        <tr><td>Spanish</td><td>4.2%</td><td>0.4%</td><td>0.7%</td></tr>
        <tr><td>Portuguese</td><td>5.1%</td><td>0.0%</td><td>0.2%</td></tr>
        <tr><td>Polish</td><td>6.0%</td><td>0.0%</td><td>0.4%</td></tr>
        <tr><td>Turkish</td><td>11.8%</td><td>1.0%</td><td>1.1%</td></tr>
        <tr><td>Vietnamese</td><td>24.2%</td><td>0.2%</td><td>1.3%</td></tr>
        <tr><td>Czech</td><td>14.7%</td><td>0.0%</td><td>0.1%</td></tr>
        <tr><td>Swedish</td><td>3.7%</td><td>0.5%</td><td>2.5%</td></tr>
        <tr><td><strong>All nine, weighted by characters</strong></td><td><strong>8.4%</strong></td><td><strong>0.2%</strong></td><td><strong>0.8%</strong></td></tr>
      </tbody>
    </table>
    <p>Character error understates the damage, because a missing accent is one character in a word that otherwise looks right. A better view is how many accented letters survived. With the English model alone, German, Polish, Turkish, Vietnamese, Czech and Swedish kept none of theirs (0.0%), Spanish kept 9.6%, Portuguese 3.7%, and French 56.5%, which is the only language where the English model recognised a good share of the accents. The matching pack kept 91.1% to 100%.</p>
    <p>The raw output shows what that means for names. On German pages the English model returned "Nurnberg" for Nürnberg, "Forderanlage" for Förderanlage, "S6hne" for Söhne, "KGnigsallee" for Königsallee, and "Std" for Süd, which loses a letter as well as the dot. On Turkish pages it turned "Çankaya" into "Gankaya", "sipariş" into "siparig" and "parçaların" into "pargalarin". A supplier name that comes back as "Muller & S6hne" will not match the vendor record it should, which is the failure that matters in accounts payable, not the missing dots.</p>

    <h2>What happens on Russian, Greek, Arabic, Hindi, Chinese, Japanese and Korean?</h2>
    <p>The English model has nothing to match, so it returns noise. Character error averaged 89.8% across the seven non-Latin languages with English alone, and 2.6% with the matching pack. For Korean, error passed 100% because the English model produced more garbage characters than the page had real ones.</p>
    <table>
      <thead><tr><th>Language (script)</th><th>English model only</th><th>Language pack only</th><th>English plus pack</th></tr></thead>
      <tbody>
        <tr><td>Russian (Cyrillic)</td><td>91.7%</td><td>0.3%</td><td>0.3%</td></tr>
        <tr><td>Greek</td><td>90.3%</td><td>2.9%</td><td>1.7%</td></tr>
        <tr><td>Arabic</td><td>95.0%</td><td>3.6%</td><td>4.6%</td></tr>
        <tr><td>Hindi (Devanagari)</td><td>84.8%</td><td>1.0%</td><td>1.5%</td></tr>
        <tr><td>Chinese (simplified)</td><td>79.2%</td><td>5.0%</td><td>6.0%</td></tr>
        <tr><td>Japanese</td><td>82.6%</td><td>6.9%</td><td>6.1%</td></tr>
        <tr><td>Korean</td><td>102.1%</td><td>2.0%</td><td>2.9%</td></tr>
        <tr><td><strong>All seven, weighted by characters</strong></td><td><strong>89.8%</strong></td><td><strong>2.6%</strong></td><td><strong>2.7%</strong></td></tr>
      </tbody>
    </table>
    <p>Two details are worth noting. Greek is a trap: the English model returned Latin letters that resemble Greek ones. "Συντήρηση" came back as "ZUVTAPNON", and "Τιμολόγιο" as "TioAdyio". Anyone skimming a log would see letters and assume the page was read. And Arabic, with the pack loaded, finished at 3.6% on clean text in a regular font, which is the best case: our pages used one clean typeface, and joined scripts in stamps, handwriting or faxes will do worse.</p>
    <p>Adding English to the pack cost a little on most scripts (Arabic 3.6% to 4.6%, Chinese 5.0% to 6.0%) and helped slightly on Greek (2.9% to 1.7%) and Japanese (6.9% to 6.1%). We did not test why. The reason to pair them is not accuracy on the text, it is numbers, as the next section shows.</p>

    <h2>Do language packs misread numbers?</h2>
    <p>Some do, and English alone does not. We checked 584 amounts across the 14 languages whose test lines carried decimal amounts (the Japanese and Korean lines used whole yen and won, so they were left out of this count). Each amount was scored as right only if the exact string came back, separators included. The English model got all 584 right, even on pages where every word around the amounts was noise. The matching pack alone got 551, because it failed on two languages.</p>
    <table>
      <thead><tr><th>Setup</th><th>Greek amounts right (of 41)</th><th>Hindi amounts right (of 41)</th><th>All other 12 languages</th></tr></thead>
      <tbody>
        <tr><td>English model only</td><td>41</td><td>41</td><td>All right</td></tr>
        <tr><td>Language pack only</td><td>22 (53.7%)</td><td>27 (65.9%)</td><td>All right</td></tr>
        <tr><td>English plus pack</td><td>41</td><td>41</td><td>All right</td></tr>
      </tbody>
    </table>
    <p>The examples are specific. In one Greek page the total "5.230,94 € έως 30 Απριλίου" came back from the Greek pack as "9.230,94 Ε έως 90 Απριλίου": a 5 and a 3 both read as a 9, and the euro sign read as a capital Epsilon. In one Hindi page the invoice number "2024-0318" came back as "2024-038" and the date "12 मार्च" as "१2 मार्च", where the first digit became a Devanagari numeral. These are errors a spell-checker never sees, and the Hindi invoice number lost a digit entirely.</p>
    <p>Our guess, which we did not test, is that the English model reads digits well because digits are shared by every language and it has seen a lot of them. The pairing <code>eng+hin</code> fixed both cases in our run (41 of 41 in each). So for invoices, bank statements and anything where a figure matters, load English with the language pack. Latin-script packs did not show this problem: all of them read every amount correctly on their own, so for French or German the pack alone is cleaner, at 0.0% against 0.6% and 0.4% for the pair.</p>
    <p>Whichever setup you use, treat the figures as claims to be checked, not facts. Total equals the sum of lines, tax equals rate times subtotal, a date lies in a plausible range: those rules catch the misread 3 and the dropped digit, as we show in <a href="/resources/blogs/how-to-fix-ocr-errors">13,800 measured reads on numbers and IDs</a>.</p>

    <h2>Does loading the wrong language pack still help?</h2>
    <p>Often not, and sometimes it is worse than English alone. We read the French, German, Polish, Turkish and Vietnamese pages with every one of five packs plus English, 24 pages each. The table shows character error; the correct pack is on the diagonal.</p>
    <table>
      <thead><tr><th>Page language</th><th>English</th><th>French pack</th><th>German pack</th><th>Polish pack</th><th>Turkish pack</th><th>Vietnamese pack</th></tr></thead>
      <tbody>
        <tr><td>French</td><td>3.6%</td><td><strong>0.0%</strong></td><td>7.9%</td><td>8.2%</td><td>9.1%</td><td>0.6%</td></tr>
        <tr><td>German</td><td>3.4%</td><td>1.2%</td><td><strong>0.0%</strong></td><td>3.7%</td><td>1.3%</td><td>2.0%</td></tr>
        <tr><td>Polish</td><td>6.0%</td><td>6.3%</td><td>6.5%</td><td><strong>0.0%</strong></td><td>7.2%</td><td>5.7%</td></tr>
        <tr><td>Turkish</td><td>11.8%</td><td>8.2%</td><td>3.2%</td><td>11.9%</td><td><strong>1.0%</strong></td><td>9.5%</td></tr>
        <tr><td>Vietnamese</td><td>24.2%</td><td>20.8%</td><td>24.8%</td><td>24.0%</td><td>25.1%</td><td><strong>0.2%</strong></td></tr>
      </tbody>
    </table>
    <p>Polish pages scored 6.0% on the English model and between 5.7% and 7.2% on the four other packs, so a "close enough" European pack bought almost nothing. French pages read with the Polish or Turkish pack did worse than with English (8.2% and 9.1% against 3.6%). There were helpful accidents: Turkish pages improved from 11.8% to 3.2% with the German pack, and French pages read well on the Vietnamese pack (0.6%). Our guess, which we did not test, is that these pairs share accented letters such as ü, ö and é. Do not build on it: a language you did not test will not behave the same way.</p>
    <p>The takeaway is simple. If you do not know a page's language, do not guess a neighbour. Either find out, or read with English plus the one pack you are sure of and expect to lose the accents on everything else.</p>

    <h2>Can Tesseract tell you which language a page is in?</h2>
    <p>Not the language, but it can tell the script, which is enough to route most non-Latin pages. Tesseract ships an orientation and script detector (OSD, run with <code>--psm 0</code>). On six-line pages it named the script correctly for 15 of the 16 languages on all 24 pages each. The exception was Japanese: 9 of 24 pages came back "Japanese" and the other 15 came back "Han", the label for Chinese characters.</p>
    <table>
      <thead><tr><th>Page size</th><th>Correct script</th><th>No answer</th><th>Wrong script</th></tr></thead>
      <tbody>
        <tr><td>Six lines (384 pages)</td><td>369</td><td>0</td><td>15 (all Japanese, labelled Han)</td></tr>
        <tr><td>Three lines (128 pages)</td><td>121</td><td>3 (Hindi)</td><td>4 (3 Japanese as Han, 1 Chinese as Japanese)</td></tr>
        <tr><td>One line (128 pages)</td><td>88</td><td>33 (all Arabic, Hindi and Chinese pages, most Japanese, some Korean)</td><td>7</td></tr>
      </tbody>
    </table>
    <p>Two rules fall out of this. First, give the detector at least three lines: on a single line it returned nothing at all for Arabic, Hindi and Chinese, and nothing for most Japanese. Second, when it says "Han", load Chinese and Japanese together. On the pages we tested, the <code>chi_sim</code> pack alone scored 5.0% on Chinese and 38.9% on Japanese, the <code>jpn</code> pack alone scored 6.9% on Japanese and 35.7% on Chinese, and the pair scored 7.3% and 6.2%.</p>
    <p>The limit is that all nine Latin-script languages came back as "Latin", every time. The detector cannot tell French from German from Polish, and the packs for those do different things to accents, as the matrix above shows. For Latin-script pages the language has to come from somewhere else: the customer's country, the document type, a field on your upload form or the sender's domain. We did not build a language identifier, so we do not claim one works.</p>

    <h2>Which currency symbols and number formats survive?</h2>
    <p>Number formats survive. We read six formats with the English model, 80 amounts each from 100 to 9,999,999, and got all 480 exactly right: 12,345.67; 12.345,67; 12 345,67; 12'345.67; the Indian grouping 1,23,456.78; and 12345,67 with no grouping. The characters are plain digits and punctuation, and clean text reads cleanly. The problem comes after OCR, when software has to decide whether "1.234" means one point two three four or one thousand two hundred thirty-four. That is a parsing question you answer from the document's locale, covered in <a href="/resources/blogs/data-normalization-extracted-documents">normalizing extracted amounts</a>.</p>
    <p>Currency symbols are less safe. We placed each symbol before or after an amount on 40 lines and checked whether the symbol came back on the same line as the amount. The amount itself was found on all 560 lines.</p>
    <table>
      <thead><tr><th>Symbol</th><th>Symbol kept (of 40 lines)</th><th>What English-only OCR returned instead</th></tr></thead>
      <tbody>
        <tr><td>$, €, £, ¥, CHF, R$, kr</td><td>40 each</td><td>Correct</td></tr>
        <tr><td>€ and £ after the amount</td><td>40 each</td><td>Correct</td></tr>
        <tr><td>₹ (rupee)</td><td>0</td><td>¥ on 15 lines, $ on 6, % on 6, a star on 2, § on 1, nothing on 10</td></tr>
        <tr><td>₺ (lira)</td><td>0</td><td>Nothing on 24 lines, otherwise $, 6, £ or 4</td></tr>
        <tr><td>₽ (ruble)</td><td>0</td><td>The letter P on all 40</td></tr>
        <tr><td>₩ (won)</td><td>0</td><td>Mostly a 4 or ¥4, never ₩</td></tr>
        <tr><td>zł (zloty)</td><td>0</td><td>"zt" on all 40</td></tr>
      </tbody>
    </table>
    <p>The first four are common currencies and read perfectly. The rest fail in different ways: some disappear, some become a different currency, and "zł" becomes "zt", which looks like a typo and not like a currency. A rupee amount that comes back with a yen sign on 15 of 40 lines is a worse failure than a missing symbol, because it parses cleanly. The safe rule is to take the currency from context rather than the glyph: the invoice's currency field, its country, or the ISO code ("INR", "TRY") if it is printed. For more on mixed-currency documents, see our guide to <a href="/resources/blogs/multi-currency-invoice-ocr">multi-currency invoice OCR</a>.</p>

    <h2>What is the workflow, and can I run it?</h2>
    <p>Detect the script, pick the packs, read with English plus the pack for non-Latin scripts, and verify the figures. The script below does the first three steps. It needs the <code>osd</code>, <code>eng</code> and routed language packs installed (<code>tesseract --list-langs</code> shows what you have). For Latin-script pages you pass the language yourself, because OSD cannot name it.</p>
    <pre><code>#!/usr/bin/env python3
"""Read a page with the right Tesseract language packs.

1. Ask Tesseract's orientation and script detector (OSD) which script the page uses.
2. Non-Latin script: read with English plus the matching pack (English keeps the digits safe).
3. Latin script: OSD cannot tell French from German, so you pass the language yourself.

Usage: python3 ocr_route.py page.png [latin_pack]     e.g. python3 ocr_route.py page.png fra
Needs the packs installed (tesseract --list-langs): osd, eng and the ones you route to.
"""
import re
import subprocess
import sys

SCRIPT_TO_PACK = {
    "Cyrillic": "rus",
    "Greek": "ell",
    "Arabic": "ara",
    "Devanagari": "hin",
    "Han": "chi_sim+jpn",   # OSD often calls Japanese "Han", so load both
    "Japanese": "jpn",
    "Korean": "kor",
}


def detect_script(path):
    r = subprocess.run(["tesseract", path, "stdout", "--psm", "0", "-l", "osd"],
                       capture_output=True)
    text = (r.stdout + r.stderr).decode("utf8", errors="replace")
    m = re.search(r"Script: (\\w+)", text)
    return m.group(1) if m else None        # None on pages with too little text


def pick_langs(script, latin_pack=None):
    pack = SCRIPT_TO_PACK.get(script)
    if pack:
        return "eng+" + pack
    return latin_pack if latin_pack else "eng"


def read(path, latin_pack=None):
    script = detect_script(path)
    langs = pick_langs(script, latin_pack)
    r = subprocess.run(["tesseract", path, "stdout", "-l", langs, "--psm", "6"],
                       capture_output=True)
    return script, langs, r.stdout.decode("utf8", errors="replace")


if __name__ == "__main__":
    script, langs, text = read(sys.argv[1], sys.argv[2] if len(sys.argv) &gt; 2 else None)
    print(f"# script={script} langs={langs}", file=sys.stderr)
    print(text)</code></pre>
    <p>We ran it on all 384 test pages, passing the true language for the nine Latin-script ones and nothing for the rest. Character error was 0.2% on the Latin-script languages and 2.7% on the seven others (Russian 0.3%, Greek 1.7%, Arabic 4.6%, Hindi 1.5%, Chinese 6.8%, Japanese 5.4%, Korean 2.9%). The script picked <code>eng+chi_sim+jpn</code> for Chinese, for Japanese when OSD said "Han", and <code>eng+jpn</code> for the pages it labelled Japanese. These sit close to the English-plus-pack column in the tables above, which is expected because the routing came from them. It is also the main caveat: the test pages reuse a pool of ten lines per language, so this shows the script works as written, not that it will score 0.2% on your documents.</p>
    <p>Two practical notes. The script reads one page image at a time; split PDFs first. And OSD needs text to work with, so a page with a logo and one line will return no script and fall through to the language you passed. When that happens, flag the page for a person rather than reading it as English.</p>

    <h2>How does this compare with DocsAPI's own benchmark?</h2>
    <p>The numbers are not directly comparable, but the direction agrees. In DocsAPI's own 2026 benchmark of 1,700 real documents, the multilingual category (English with Mandarin and Spanish) scored 71% for Tesseract 5.x, 89% for PaddleOCR and 81% for DocsAPI. Our tests used clean synthetic pages and a character error measure; the benchmark used real production documents and its own scoring, so a 0.2% error here and a 71% score there describe different things. What they share is that multilingual text is where engines differ most: Tesseract scored 71% there in the benchmark, against 97 to 99% on clean typed English. The benchmark's method and per-category numbers are in the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 accuracy benchmark</a>, and an engine-by-engine view is in <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>.</p>
    <p>One more point on vendor claims, since language lists are the usual selling point. A language count tells you which scripts a tool accepts, not how accurately it reads each one. AWS Textract, for example, documents a short list of supported languages (six, as we list in <a href="/resources/blogs/aws-textract-vs-docsapi">AWS Textract vs DocsAPI</a>). Whichever tool you consider, test it on 20 to 50 of your own pages in each language, with the accents, the amounts and the currency signs, and count the wrong figures, not the wrong words.</p>

    <h2>What do these tests not show?</h2>
    <p>Eight limits. First, the pages are synthetic and clean: one typeface per script, 300 DPI, black on white. Real scans add noise, skew and low resolution; our <a href="/resources/blogs/how-does-ocr-work">tilt and blur results on English text</a> show what that does, and we would expect scripts with small marks (Vietnamese tones, Arabic dots) to be hit harder, but we did not measure it. Second, we used the small "fast" models; the larger "best" models may score differently, in either direction. Third, each language had a pool of only ten lines, so names and phrases repeat across pages.</p>
    <p>Fourth, the lines were written by us to look like invoices, not taken from real ones, and the Japanese and Korean lines had no decimal amounts, so we could not score those. Fifth, Arabic and Hindi were rendered correctly joined, but we did not test mixed lines, such as an Arabic sentence containing an English company name. Sixth, handwriting, stamps and tables were not tested. Seventh, we only measured Tesseract; other engines and AI models behave differently, and PaddleOCR wins multilingual in DocsAPI's benchmark. Eighth, the scores are accuracy on text, not on meaning: none of this tests whether a field was extracted into the right place.</p>
    <p>What we trust is the shape: the English-only model fails differently on Latin and non-Latin text, language packs can break digits, and a wrong pack is a gamble. If you run Tesseract on documents in another language, those are the three things to check first.</p>

    <h2>Where does DocsAPI fit?</h2>
    <p>DocsAPI is not built on a single OCR engine. It uses a layout-aware proprietary engine with a vision-language model fallback for complex cases, and it extracts fields and tables, runs document checks, and flags low-confidence fields for a person to review. It was built by HyperVerge. In DocsAPI's own 2026 benchmark of 1,700 documents it scored 97 to 99% on clean typed text and 81% on the multilingual category (English with Mandarin and Spanish). Those figures come from that benchmark, not from the Tesseract tests in this guide, and we did not run the language-pack, script-detection or currency tests on DocsAPI, so we make no claim about how it behaves on them.</p>
    <p>DocsAPI is available as a demo, then a free 30-day trial for qualified lenders. Pricing starts from $0.02 per page, with volume discounts above 100,000 pages a month. If your documents arrive in several languages, take 20 pages per language, include the amounts and the currency signs, and count the wrong figures that come back without a flag. For ID documents with mixed scripts, see our guide to <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">OCR for passports, ID cards and driver's licenses</a>.</p>

    <h2>Sources and how we checked this</h2>
    <p>All figures come from our own runs on 7 November 2026 with Tesseract 5.5.2: 384 synthetic pages in 16 languages read three ways (1,152 reads), 640 pages for script detection, 120 pages for the wrong-pack matrix (24 each in five languages, six models), 60 pages for number formats and 70 for currency symbols. The English model came with the Homebrew install of Tesseract 5.5.2 and the other packs from the official tesseract-ocr tessdata_fast repository; by file size they are all the small "fast" models. Every table was computed from the raw outputs, and the quoted errors (Nurnberg, S6hne, Gankaya, zt and the Greek and Hindi digits) were copied from them. The script in this guide is the one we ran. The benchmark figures are DocsAPI's own, from the 2026 benchmark linked above.</p>


  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 7, 2026",
  datePublished: "2026-11-07T00:00:00.000Z",
  dateModified: "2026-11-07T00:00:00.000Z",
  last_updated: "November 7, 2026",
  readTime: "16 min read",
  author: nupuraUghade,
  primary_keyword: "multilingual ocr",
  secondary_keywords: [
    "multilingual ocr",
    "ocr for non english documents",
    "tesseract language packs",
    "ocr accents missing",
    "ocr currency symbols",
  ],
  tags: ["OCR", "multilingual OCR", "Tesseract", "language packs", "invoices"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Can OCR read text in other languages?",
      answer:
        "Yes, if the engine has the language loaded. In our test of 16 languages with Tesseract 5.5.2, the matching language pack gave 0.2% character error on nine Latin-script languages and 2.6% on seven other scripts. The English model alone gave 8.4% and 89.8%.",
    },
    {
      question: "Why are the accents missing from my OCR output?",
      answer:
        "Most likely the English model read an accented page. In our test it kept none of the accented letters in German, Polish, Turkish, Vietnamese, Czech and Swedish, and returned Nurnberg for Nürnberg. Load the language pack for the page, for example fra for French or deu for German.",
    },
    {
      question: "Does Tesseract work without a language pack?",
      answer:
        "It runs, but it only knows what the loaded model knows. With the English model alone, Latin-script pages lost their accents (8.4% character error) and pages in Russian, Greek, Arabic, Hindi, Chinese, Japanese and Korean came back as noise (89.8%). It does not stop with an error, so the failure is easy to miss.",
    },
    {
      question: "Should I use eng+fra or just fra?",
      answer:
        "For Latin-script languages the pack alone was cleaner in our test (French 0.0% against 0.6% with English added). For Greek and Hindi, use English plus the pack: the packs alone misread digits and kept only 22 of 41 and 27 of 41 amounts, while the pair kept all 41.",
    },
    {
      question: "Can Tesseract detect which language a document is in?",
      answer:
        "It detects the script, not the language. Its orientation and script detector named the script on 369 of 384 six-line pages, but all nine Latin-script languages came back as Latin, so it cannot separate French from German. Give it at least three lines, because on one line it returned nothing for Arabic, Hindi and Chinese.",
    },
    {
      question: "Does OCR misread numbers in other languages?",
      answer:
        "It can. English alone kept all 584 amounts across 14 languages, but the Greek pack misread a 5 and a 3 as 9s in one total, and the Hindi pack dropped a digit from an invoice number. Always check totals against the line items and read non-Latin pages with English plus the pack.",
    },
    {
      question: "Which currency symbols does OCR miss?",
      answer:
        "In our test the English model read $, €, £, ¥, CHF, R$ and kr on every line, and lost the rupee, lira, ruble and won signs. The ruble became the letter P on all 40 lines, zł became zt, and the rupee came back as a yen sign on 15 of 40. Take the currency from context or the ISO code, not the glyph.",
    },
    {
      question: "Does a wrong language pack still help?",
      answer:
        "Rarely. On Polish pages the English model scored 6.0% and the four other packs scored between 5.7% and 7.2%. Some pairs helped (Turkish pages with the German pack: 3.2% against 11.8%), but we could not predict which, so find out the language instead of guessing a neighbour.",
    },
    {
      question: "How accurate is OCR on Chinese, Japanese and Korean?",
      answer:
        "With the right pack loaded, our clean test pages scored 5.0% character error for Chinese, 6.9% for Japanese and 2.0% for Korean. Real scans will score lower. If script detection says Han, load Chinese and Japanese together, because it often labels Japanese as Han.",
    },
  ],
}
