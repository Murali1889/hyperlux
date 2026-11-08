import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog43: BlogPost = {
  id: "new-43",
  title: "OCR on Upside-Down and Sideways Pages: What Fixes It",
  slug: "ocr-upside-down-sideways-pages",
  excerpt:
    "We turned 680 pages to four orientations and read them four ways. One sideways direction reads fine, the other returns about 92% errors, and the orientation detector was silent rather than wrong.",
  description:
    "Tesseract was never wrong about page rotation in 2,720 tries, only silent. We tested 17 languages and four fixes for sideways and upside-down scans.",
  metaTag: "Fix Upside-Down and Sideways Pages Before OCR, Tested",
  summary:
    "In Tesseract 5.5.2 tests on 17 languages, a page turned 90 degrees clockwise read almost normally, while a page upside down or turned 270 degrees clockwise gave 92% to 94% character errors in the default mode. The orientation detector gave 2,514 correct answers, none wrong and 206 silent (mostly Hindi sideways pages and single lines). The --psm 1 mode, detect-then-turn, and reading all four orientations all recovered the page, and the four-way read matched upright accuracy everywhere. Includes a tested script that fixed 408 rotated pages.",
  content: `
    <p>A page scanned upside down or turned the wrong way can ruin an OCR run, but not every wrong turn is equal. In our tests with Tesseract 5.5.2 on 17 languages, a page turned 90 degrees clockwise was read almost normally, while a page upside down or turned 270 degrees clockwise came back with about 92% to 94% character errors (92.7% on English). The fix is cheap: Tesseract's orientation detector never returned a wrong answer in 2,720 tries, it only sometimes returned none, and reading the page in all four orientations matched the upright result everywhere.</p>
    <p>This guide shows the numbers for each rotation, which setting fixes it for free, where the detector goes quiet, and a short script that handled 408 rotated test pages. It also corrects a habit: people assume a rotated page just gives lower accuracy. In our runs it gave either nearly normal text or almost none, depending on which way it was turned.</p>

    <h2>How did we test rotated pages?</h2>
    <p>We used 680 synthetic invoice-style pages: the 16 languages from our <a href="/resources/blogs/multilingual-ocr-guide">multilingual OCR test</a> (French, German, Spanish, Portuguese, Polish, Turkish, Vietnamese, Czech, Swedish, Russian, Greek, Arabic, Hindi, Chinese, Japanese, Korean) plus English, rendered at 300 DPI with six, three or one line of text. Each page was turned 0, 90, 180 and 270 degrees clockwise, giving 2,720 pages to test the orientation detector on.</p>
    <p>For the accuracy tests we took the first six six-line pages of each language (102 pages) and read every one at all four turns with the matching language pack. We compared four ways of reading: Tesseract's default page mode with no help (<code>--psm 3</code>), the mode that includes orientation detection (<code>--psm 1</code>), detecting the orientation first and turning the page by the answer, and reading the page in all four orientations and keeping the one with the best mean word confidence. Error is characters wrong divided by characters expected, spaces ignored, as in <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>. The orientation detector (OSD) and the <code>osd</code> data file were installed for every run.</p>
    <p>Two conventions to keep straight. We say a page is "turned 90 degrees clockwise" when its top edge now faces right, so the text runs top to bottom. And "Rotate" in Tesseract's output is the clockwise turn needed to put the page right again.</p>

    <h2>What happens if you OCR a rotated page with no fix?</h2>
    <p>You get almost normal text or almost none, depending on the direction. With the default mode, English pages scored 0.0% error at 0 and 90 degrees and 92.7% at 180 and 270. Across all 17 languages the average was 7.4% at 90 degrees, 94.2% at 180 and 92.3% at 270.</p>
    <table>
      <thead><tr><th>Page turned (clockwise)</th><th>No help (<code>--psm 3</code>)</th><th><code>--psm 1</code></th><th>Detect, then turn</th><th>Read all four, keep best</th></tr></thead>
      <tbody>
        <tr><td>0 degrees (upright)</td><td>3.3%</td><td>2.9%</td><td>3.3%</td><td>3.2%</td></tr>
        <tr><td>90 degrees</td><td>7.4%</td><td>6.0%</td><td>3.7%</td><td>3.2%</td></tr>
        <tr><td>180 degrees</td><td>94.2%</td><td>5.3%</td><td>3.3%</td><td>3.2%</td></tr>
        <tr><td>270 degrees</td><td>92.3%</td><td>5.2%</td><td>8.9%</td><td>3.2%</td></tr>
      </tbody>
    </table>
    <p>Each cell is the character error averaged over 102 pages (6 per language, 17 languages). Two things distort the averages and are worth separating out. Korean scores 33% in the default mode even when upright, because that mode segments our Korean pages poorly (the single-block mode gave 2.0% in our multilingual test), so it adds about two points to the upright row. And Hindi has a problem of its own with the detector, covered below. For the nine Latin-script languages the picture is clean: 1.2% or less upright and at 90 degrees, and 88% to 98% errors at 180 and 270.</p>
    <p>We do not know why one sideways direction works and the other does not. It is consistent across all 17 languages, so it looks like a property of how Tesseract's page layout step treats vertical lines of text, but we did not test the cause. What matters in practice is that a pipeline tested on a few scans turned one way will look fine, and the first page turned the other way will fail with nothing more than a very high error rate and no warning.</p>

    <h2>Does <code>--psm 1</code> fix it for free?</h2>
    <p>For most languages, yes. Page mode 1 means automatic page segmentation with orientation and script detection, and with the <code>osd</code> data file installed it handled English and the other eight Latin-script languages at all four orientations: 0.0% error on English and 1.2% or less on the rest, the same as upright. Across all 17 languages it averaged 6.0%, 5.3% and 5.2% at 90, 180 and 270 degrees, against 3.3% (upright, default mode) for the baseline.</p>
    <p>It fell short in two places. Korean stayed poor in this mode (25% upright, then 71%, 68% and 57% at the three turns). And Hindi pages turned 90 or 270 degrees scored 8% against 1% upright. We did not test what <code>--psm 1</code> does when the <code>osd</code> file is missing; every run here had it, and you should check that yours does (<code>tesseract --list-langs</code> shows it).</p>
    <p>So the cheapest fix is a command-line flag you may already have the data for. The next section is about what to do when you want the page itself corrected, for example to save an upright copy, or when the flag is not enough.</p>

    <h2>How reliable is Tesseract's orientation detector?</h2>
    <p>It was never wrong, but it was sometimes silent. We ran the detector (<code>--psm 0</code>) on all 2,720 pages. It returned the correct turn on 2,514 and nothing on 206. It returned a wrong turn on none.</p>
    <table>
      <thead><tr><th>Lines of text on the page</th><th>Runs</th><th>Correct</th><th>No answer</th><th>Wrong</th></tr></thead>
      <tbody>
        <tr><td>Six lines</td><td>1,632</td><td>1,584</td><td>48</td><td>0</td></tr>
        <tr><td>Three lines</td><td>544</td><td>516</td><td>28</td><td>0</td></tr>
        <tr><td>One line</td><td>544</td><td>414</td><td>130</td><td>0</td></tr>
      </tbody>
    </table>
    <p>The silence is concentrated. On six-line pages, all 48 failures were Hindi pages turned 90 or 270 degrees; Hindi upright and upside down were fine. On three-line pages the failures were Hindi (22 of 32) and Arabic (6 of 32). On single lines it gave no answer on every Arabic and Hindi page, on 28 of 32 Chinese pages, 22 of 32 Japanese pages and 16 of 32 Korean pages, but answered every page in English, French, German, Spanish, Portuguese, Polish, Turkish, Vietnamese, Czech, Swedish, Russian and Greek.</p>
    <p>That makes the rule simple. Treat "no answer" as a signal to fall back, not as a sign the page is upright. A page where the detector says nothing might be fine, or it might be turned, and you cannot tell which from the silence.</p>

    <h2>Is the orientation confidence score worth using?</h2>
    <p>Not in our data. Every answer was right at every confidence level, including the lowest. The detector reports a confidence with each answer; here is how the 2,514 correct answers spread, and how many were wrong in each band.</p>
    <table>
      <thead><tr><th>Orientation confidence</th><th>Answers</th><th>Wrong</th></tr></thead>
      <tbody>
        <tr><td>Below 1</td><td>30</td><td>0</td></tr>
        <tr><td>1 to 2</td><td>191</td><td>0</td></tr>
        <tr><td>2 to 5</td><td>389</td><td>0</td></tr>
        <tr><td>5 to 10</td><td>724</td><td>0</td></tr>
        <tr><td>10 and above</td><td>1,180</td><td>0</td></tr>
      </tbody>
    </table>
    <p>Some practitioner write-ups suggest ignoring answers below a confidence of about 2. On our pages that rule would have thrown away 221 correct answers and prevented no errors. We would not generalise that: our pages are clean, black on white, in one typeface, and real scans with speckle, stamps and photos may produce wrong answers at low confidence. If you want a threshold, measure it on your own scans by comparing the detector's answer with a person's on a few hundred pages, rather than copying one from a write-up.</p>

    <h2>What if the detector says nothing?</h2>
    <p>Read the page four ways and keep the best. For every page, we turned it to each of the four orientations, read it, and kept the orientation with the highest mean word confidence from Tesseract's own output. The character error averaged 3.2% at every starting turn, equal to the upright result of 3.3%, and it handled the Hindi pages that the detector could not.</p>
    <p>There is a subtlety. This method optimises for readable text, not for an upright image. Tesseract reads a page turned 90 degrees clockwise about as well as an upright one, so the method often leaves such a page as it is, and on 15 of the 102 upright pages it turned the page away from upright, with the text still reading as well. If you need a page that looks right to a person, use the detector's answer when it gives one and use the confidence method only as the fallback, which is how the script below works.</p>
    <p>The cost is four reads of the page instead of one detection run, so it is worth using only on the pages where the detector gives no answer. If you process high volumes, see our guide to <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk and high-volume OCR processing</a> for how read counts affect throughput; we did not time the two methods in this test.</p>

    <h2>Do photos and phone images need a different fix?</h2>
    <p>Yes, check the EXIF tag first. A phone photo is often stored sideways with a small tag saying which way to turn it, and Tesseract ignores the tag. In our earlier format tests, a sideways JPEG scored 103% error until the tag was applied, as we show in <a href="/resources/blogs/convert-fax-tiff-jpg-png-to-text">converting fax, TIFF, JPG and PNG to text</a>. That is a different problem from a page scanned the wrong way: the pixels are fine and the file only needs to be read correctly.</p>
    <p>The order matters. Apply the EXIF turn, then detect and fix the page orientation, then deskew small tilts, which is the usual order; we did not test the reverse. Our <a href="/resources/blogs/how-does-ocr-work">tests of tilt, blur and shading</a> show how quickly accuracy drops once a page is tilted, and our guide on <a href="/resources/blogs/document-detection-before-ocr">document detection before OCR</a> covers the cropping and straightening steps that come with it.</p>

    <h2>What is the workflow, and can I run it?</h2>
    <p>Apply EXIF, ask the detector, turn the page by its answer, and fall back to the four-way read when it says nothing. The script below does that. It needs Pillow, Tesseract on the path, and the <code>osd</code> and language data files installed. If your pages arrive inside scanned PDFs, our guide to <a href="/resources/blogs/scanned-pdf-searchable">making scanned PDFs searchable</a> covers the file side.</p>
    <pre><code>#!/usr/bin/env python3
"""Straighten a page that was scanned sideways or upside down before OCR.

Order of attack:
1. Apply the EXIF orientation tag (Tesseract ignores it).
2. Ask Tesseract's orientation detector (OSD). In our tests it answered correctly or not at all.
3. If OSD gives no answer, read the page four ways and keep the turn with the best mean word confidence.

Usage: python3 fix_orientation.py in.png out.png [lang]      (lang defaults to eng)
Needs: Pillow, tesseract on PATH, and the osd and language packs installed.
"""
import re
import statistics
import subprocess
import sys
import tempfile
from PIL import Image, ImageOps


def osd_rotation(path):
    """Clockwise degrees needed to make the page upright, or None if OSD cannot tell."""
    r = subprocess.run(["tesseract", path, "stdout", "--psm", "0", "-l", "osd"],
                       capture_output=True)
    m = re.search(r"Rotate: (\\d+)", (r.stdout + r.stderr).decode("utf8", errors="replace"))
    return int(m.group(1)) if m else None


def mean_conf(path, lang):
    r = subprocess.run(["tesseract", path, "stdout", "-l", lang, "--psm", "3", "tsv"],
                       capture_output=True)
    confs = []
    for line in r.stdout.decode("utf8", errors="replace").split("\\n")[1:]:
        f = line.split("\\t")
        if len(f) == 12 and f[10] not in ("-1", "") and f[11].strip():
            confs.append(float(f[10]))
    return statistics.mean(confs) if confs else -1.0


def fix(src, dst, lang="eng"):
    img = ImageOps.exif_transpose(Image.open(src))
    dpi = img.info.get("dpi", (300, 300))
    with tempfile.TemporaryDirectory() as tmp:
        probe = f"{tmp}/probe.png"
        img.save(probe, dpi=dpi)
        turn, how = osd_rotation(probe), "osd"
        if turn is None:
            scores = {}
            for t in (0, 90, 180, 270):
                cand = f"{tmp}/c{t}.png"
                img.rotate(-t, expand=True).save(cand, dpi=dpi)
                scores[t] = mean_conf(cand, lang)
            turn, how = max(scores, key=scores.get), "confidence"
    img.rotate(-turn, expand=True).save(dst, dpi=dpi)
    return turn, how


if __name__ == "__main__":
    t, how = fix(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) &gt; 3 else "eng")
    print(f"rotated {t} degrees clockwise ({how})")</code></pre>
    <p>We ran it on 408 rotated pages: 17 languages, four six-line and four single-line pages each, turned 90, 180 and 270 degrees. On the six-line pages it found the right turn on 202 of 204. Character error fell from 64.6% to 4.0% (from 63.2% to 1.5% if you leave out Korean, whose 33% default-mode baseline sits in every cell). The detector made the call on 196 pages and the confidence fallback on 8, all Hindi.</p>
    <p>Single-line pages are the weak spot. The script found the right turn on 188 of 204; the detector answered 158 and the fallback handled 46. Character error fell from 66.1% to 5.2%. The 16 wrong turns were mostly Arabic, Chinese and Hindi pages where the fallback left a 90-degree page as it was, which Tesseract still reads well, plus a few Korean and Hindi pages that were left badly wrong. The mean error on those 16 pages was 20.9%. A single line of text carries too little signal for any method here, so if you OCR labels, stamps or single-line crops, check the output. Once a page is upright, the next failures are in the figures themselves, which we cover in <a href="/resources/blogs/how-to-fix-ocr-errors">13,800 measured reads on numbers and IDs</a>.</p>

    <h2>What do these tests not show?</h2>
    <p>Seven limits. First, the pages are clean and synthetic, in one typeface per script, with no noise, creases, stamps or photos, and real scans will produce more silence and perhaps some wrong answers. Second, each page was rotated by exact multiples of 90 degrees; a page that is 90 degrees off and also tilted by 5 degrees is a harder case we did not test. Third, we used one orientation of text per page; a scan with a rotated table or a sideways stamp on an upright page needs a layout step, not a page-level turn.</p>
    <p>Fourth, we tested only Tesseract. Other engines and AI models handle orientation differently, and DocsAPI's behaviour on rotated pages is not something we measured here. Fifth, we did not time the methods. Sixth, we did not test vertical writing, where Japanese or Chinese text runs top to bottom on an upright page; an orientation detector may read that as a turned page. Seventh, we did not test what <code>--psm 1</code> does without the <code>osd</code> data file. What we trust is the shape: one sideways direction is fine and the other is not, the detector is silent rather than wrong, and a four-way read recovers what it cannot.</p>

    <h2>Where does DocsAPI fit?</h2>
    <p>DocsAPI is not built on a single OCR engine. It uses a layout-aware proprietary engine with a vision-language model fallback for complex cases, and it extracts fields and tables, runs document checks, and flags low-confidence fields for a person to review. It was built by HyperVerge. In DocsAPI's own 2026 benchmark of 1,700 documents it scored 97 to 99% on clean typed text and 76% on phone-photographed receipts. Those figures come from that benchmark, not from the Tesseract tests in this guide, and we did not run the rotation tests on DocsAPI, so we make no claim about how it behaves on them.</p>
    <p>DocsAPI is available as a demo, then a free 30-day trial for qualified lenders. Pricing starts from $0.02 per page, with volume discounts above 100,000 pages a month. If your intake includes scans from several sources, take 50 pages, turn a handful of them to each of the four orientations, and count how many come back with usable text and how many fail without a flag. The method is in the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 accuracy benchmark</a>.</p>

    <h2>Sources and how we checked this</h2>
    <p>All figures come from our own runs on 8 November 2026 with Tesseract 5.5.2: 2,720 pages for orientation detection, 408 page-turns for the accuracy comparison (102 pages at four turns, four reading methods), and 408 pages for the script test. Language packs came from the official tessdata_fast repository. We found and fixed one bug on the way: the first run of the four-way read used a folder without Tesseract's config files, so its confidence data was empty, and we reran it. Every table was computed from the raw per-page results, and the script in this guide is the one we ran.</p>


  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 8, 2026",
  datePublished: "2026-11-08T00:00:00.000Z",
  dateModified: "2026-11-08T00:00:00.000Z",
  last_updated: "November 8, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "ocr upside down",
  secondary_keywords: [
    "ocr rotated page",
    "tesseract osd",
    "tesseract psm 1",
    "auto rotate before ocr",
    "sideways scan ocr",
  ],
  tags: ["OCR", "Tesseract", "page orientation", "scanning", "preprocessing"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Why does OCR return gibberish on an upside-down page?",
      answer:
        "The engine is reading letters upside down. In our test with Tesseract 5.5.2 in its default page mode, English pages turned 180 degrees scored 92.7% character error, and 17 languages averaged 94.2%. Turn the page upright first, or use a mode that detects orientation.",
    },
    {
      question: "Does Tesseract rotate pages automatically?",
      answer:
        "Only in some modes. The default page mode (--psm 3) read a page turned 90 degrees clockwise fine but failed at 180 and 270 degrees. Page mode 1 (--psm 1), with the osd data file installed, handled all four orientations for English and the other Latin-script languages at 1.2% error or less.",
    },
    {
      question: "Can OCR read a sideways page?",
      answer:
        "It depends which way it is turned. In our tests a page turned 90 degrees clockwise (top edge to the right) read almost normally, while one turned 270 degrees clockwise gave about 92% character errors in the default mode. We did not test why the two directions differ.",
    },
    {
      question: "How accurate is Tesseract's orientation detection?",
      answer:
        "On our clean test pages it gave the correct turn on 2,514 of 2,720 runs, no answer on 206 and a wrong turn on none. The silent cases were mostly Hindi pages turned 90 or 270 degrees and single lines of Arabic, Hindi, Chinese, Japanese and Korean.",
    },
    {
      question: "What should I do when orientation detection returns nothing?",
      answer:
        "Read the page in all four orientations and keep the one with the best mean word confidence. In our test this reached 3.2% average character error at every starting turn, equal to the upright result, and it handled the Hindi pages the detector could not. It costs four reads, so use it only as a fallback.",
    },
    {
      question: "Does the EXIF orientation tag affect OCR?",
      answer:
        "Yes, because Tesseract ignores it. A phone photo stored sideways with an EXIF tag scored 103% error in our earlier format tests until the tag was applied. Apply the EXIF turn first, then detect and correct the page orientation.",
    },
    {
      question: "Is the orientation confidence score reliable?",
      answer:
        "On our pages every answer was correct at every confidence level, including 30 answers below 1 and 191 between 1 and 2. A cutoff of about 2 would have discarded 221 correct answers. Our pages were clean, so measure a threshold on your own scans before relying on one.",
    },
    {
      question: "How do I rotate a scanned page before OCR?",
      answer:
        "Apply the EXIF turn, run Tesseract's orientation detector (--psm 0), and turn the page clockwise by the Rotate value it reports. If it gives no answer, fall back to reading all four orientations. The script in this guide does this and fixed 202 of 204 six-line test pages.",
    },
  ],
}
