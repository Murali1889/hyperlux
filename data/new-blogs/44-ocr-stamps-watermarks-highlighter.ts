import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog44: BlogPost = {
  id: "new-44",
  title: "OCR With Stamps, Watermarks and Highlighter: Tested",
  slug: "ocr-stamps-watermarks-highlighter",
  excerpt:
    "We added stamps, watermarks, highlighter, grids and tinted backgrounds to 24 invoice pages and read them 4,900 times. Tints were harmless; highlighter, dark watermarks and grids were not.",
  description:
    "Tinted backgrounds cost OCR nothing, highlighter and grids did. We tested 20 stamp, watermark and background cases and a cleaning script that fixed 17.",
  metaTag: "Stamps, Watermarks and Highlighter in OCR: What Breaks",
  summary:
    "In Tesseract 5.5.2 tests on 24 invoice pages and 20 conditions, tinted and dark gray backgrounds cost 0.0% error, while highlighter behind two of six lines cost 33.6%, a dark gray watermark 24.7%, a ruled grid 54.7% and a blue stamp 16.4%. Taking the brightest color channel removed red and blue stamps (to 0.0%), a darkness cutoff removed the watermark, and removing long lines cut the grid to 3.6%. A black stamp over text could not be fixed (7.5% to 9.3%). Includes a tested cleaning script that scored 0.0% on 17 of 20 conditions.",
  content: `
    <p>Most things that make a page look messy do not hurt OCR. Some do, badly. In our tests with Tesseract 5.5.2 on 24 invoice pages and 20 conditions, tinted and even dark gray backgrounds cost nothing (0.0% character error), while yellow or pink highlighter behind two of six lines cost about two lines' worth of text (33.6% error), a gray watermark at the wrong darkness cost 24.7%, a table grid drawn across the text cost 54.7%, and a blue rubber stamp cost 16.4%. A short cleaning step brought almost all of that back to 0.0%. A black stamp printed over text is the one thing it could not fix.</p>
    <p>This guide shows the numbers for each case, which cleanup works for which problem, and a short script that we ran on every condition. It also corrects a common assumption. Some guides to OCR failures put colored backgrounds near the top of the causes. In our test the background color was the least of the problems; what mattered was ink that overlapped the text, and highlighter.</p>

    <h2>How did we test stamps, watermarks and backgrounds?</h2>
    <p>We took 24 synthetic English invoice pages (six lines each, 300 DPI, black text on white) and added one problem at a time: 18 conditions, each applied to the same 24 pages, and later two darker backgrounds. Stamps were drawn as rotated text with a heavy border and blended into the page the way ink does, so the text underneath still shows through: a red "PAID", a blue "RECEIVED 12 MAR 2024" and a black "COPY", each placed across two or three lines of text. Watermarks were a large diagonal "CONFIDENTIAL" in four shades of gray. Backgrounds were flat tints (yellow, blue, and gray at 170 and 110 out of 255, then 90 and 70). We also added yellow and pink highlighter bars behind two of the lines, lines under each text line, a grid of ruled lines through the text, a wavy security-paper pattern, and one page with a red stamp, a gray watermark, a highlighted line and a grid all at once.</p>
    <p>Each page was read with Tesseract 5.5.2 and the English model in single-block mode (<code>--psm 6</code>), and we measured characters wrong divided by characters expected, spaces ignored, as defined in <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>. We compared eight ways of preparing the page: no help, no help in the default page mode, grayscale with Otsu thresholding, the brightest color channel with Otsu, background flattening with Otsu, flattening plus brightest channel plus line removal, a fixed darkness cutoff, and the cutoff plus line removal. The 18 conditions with eight methods make 3,456 reads. A further 1,440 reads covered all 20 conditions (with the two dark backgrounds) for no help, a fixed cutoff and the final script, for about 4,900 reads in total. The page images are clean renders, which is the main limit, covered near the end.</p>

    <h2>Which of these problems actually hurt OCR?</h2>
    <p>Highlighter, grids, strong watermarks and colored stamps hurt. Tinted backgrounds, underlines and pale watermarks did not. The table shows character error when the page is read as it is, and again after the cleaning script in this guide.</p>
    <table>
      <thead><tr><th>What is on the page</th><th>Read as it is</th><th>After cleaning</th></tr></thead>
      <tbody>
        <tr><td>Nothing (clean page)</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Red "PAID" stamp over the text</td><td>5.8%</td><td>0.0%</td></tr>
        <tr><td>Blue "RECEIVED" stamp over the text</td><td>16.4%</td><td>0.0%</td></tr>
        <tr><td>Black "COPY" stamp over the text</td><td>7.5%</td><td>9.3%</td></tr>
        <tr><td>Gray watermark, very pale (235 of 255)</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Gray watermark, pale (215)</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Gray watermark, medium (180)</td><td>1.3%</td><td>0.0%</td></tr>
        <tr><td>Gray watermark, dark (140)</td><td>24.7%</td><td>0.0%</td></tr>
        <tr><td>Tinted background: yellow, blue, gray 170, 110, 90 or 70</td><td>0.0% each</td><td>0.0% each</td></tr>
        <tr><td>Yellow or pink highlighter behind two lines</td><td>33.6% each</td><td>0.0% each</td></tr>
        <tr><td>Lines under each text line</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Grid of ruled lines through the text</td><td>54.7%</td><td>3.6%</td></tr>
        <tr><td>Wavy security-paper pattern</td><td>2.3%</td><td>0.0%</td></tr>
        <tr><td>Red stamp, watermark, highlighter and grid together</td><td>61.8%</td><td>3.5%</td></tr>
      </tbody>
    </table>
    <p>The tinted backgrounds are the surprise. Even black text on a dark gray page (70 of 255) read with no errors at all, so a colored background on its own is not what breaks OCR in a clean scan. We would expect low-contrast text, gray on gray or pale print on color, to be a different story, but we did not test it. What broke the read in our pages was anything that was dark and overlapped the letters, plus one thing that was neither: highlighter.</p>
    <p>The default page mode made the stamps worse. In the same read with <code>--psm 3</code>, the red stamp cost 12.4%, the blue stamp 21.3% and the black stamp 24.9%, against 5.8%, 16.4% and 7.5% in single-block mode. If you read stamped pages, check which page mode you use before you blame the stamp.</p>

    <h2>Why does a highlighter make lines disappear?</h2>
    <p>We do not know, but the effect is clear. With yellow or pink bars behind two of the six lines, the read scored 33.6% error, which is about the share two lines out of six would give, and the default page mode scored the same. Converting the page to grayscale and thresholding it ourselves brought it to 0.0% for both colors, so the text was legible; Tesseract's own handling of the color image lost it. Our guess, untested, is that the engine's built-in thresholding treats the colored bar as a separate region.</p>
    <p>The lesson is practical. If your documents have highlighter, do not hand the color image straight to the engine. Convert to grayscale and threshold first. Every method in the next table that did this scored 0.0% on both highlighter colors.</p>

    <h2>Can you remove a colored stamp before OCR?</h2>
    <p>Yes, if the stamp is not black. Take the brightest of the three color channels for each pixel, instead of the usual grayscale mix. Black text is dark in all three channels and stays dark. Red, blue, yellow and pink ink are bright in at least one channel, so they turn light. On our pages, this took the red stamp from 5.8% to 0.0% and the blue stamp from 16.4% to 0.0%.</p>
    <table>
      <thead><tr><th>Condition</th><th>No help</th><th>Default page mode</th><th>Gray + Otsu</th><th>Brightest channel + Otsu</th><th>Flatten + Otsu</th><th>Flatten + brightest + Otsu + lines</th><th>Cutoff 100</th><th>Cutoff 100 + lines</th></tr></thead>
      <tbody>
        <tr><td>Red stamp</td><td>5.8%</td><td>12.4%</td><td>7.0%</td><td>0.0%</td><td>6.9%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Blue stamp</td><td>16.4%</td><td>21.3%</td><td>17.8%</td><td>0.0%</td><td>17.8%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Black stamp</td><td>7.5%</td><td>24.9%</td><td>8.4%</td><td>8.4%</td><td>8.4%</td><td>9.6%</td><td>8.6%</td><td>9.4%</td></tr>
        <tr><td>Dark watermark (140)</td><td>24.7%</td><td>32.1%</td><td>26.1%</td><td>26.1%</td><td>27.1%</td><td>34.8%</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Highlighter (yellow)</td><td>33.6%</td><td>33.6%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td><td>0.0%</td></tr>
        <tr><td>Ruled grid</td><td>54.7%</td><td>38.9%</td><td>54.7%</td><td>54.7%</td><td>54.7%</td><td>4.1%</td><td>53.1%</td><td>3.6%</td></tr>
        <tr><td>Everything at once</td><td>61.8%</td><td>52.1%</td><td>26.1%</td><td>53.4%</td><td>29.0%</td><td>3.9%</td><td>53.4%</td><td>3.5%</td></tr>
      </tbody>
    </table>
    <p>Every cell averages 24 pages. Two things stand out. First, the plain grayscale and the flatten methods did nothing for the colored stamps (7.0% and 6.9% on red, against 5.8% unprocessed), because converting color to gray keeps the stamp fairly dark. Second, the black stamp stayed at 8.4% to 9.6% under every method. When the ink that covers the text is the same color as the text, there is nothing to separate on color or on darkness, and cleaning slightly raised the error (7.5% to 9.3%). That needs a different tool, such as a layout step or a model that reads through the overlap. Our guide to <a href="/resources/blogs/proof-of-delivery-processing">proof of delivery processing</a> covers stamped reference numbers on delivery documents.</p>

    <h2>What does a gray watermark cost, and what fixes it?</h2>
    <p>Pale watermarks are harmless and dark ones are not, and the usual thresholding methods do not help. A "CONFIDENTIAL" watermark at 235 or 215 out of 255 cost nothing, at 180 it cost 1.3%, and at 140 it cost 24.7% unprocessed. Otsu thresholding, with or without flattening the background, left it at 26.1% to 27.1%, and flattening plus line removal made it worse, at 34.8%.</p>
    <p>A fixed darkness cutoff fixed it: keep only pixels darker than 100 out of 255, and the 140 watermark vanished (24.7% to 0.0%) while the black text stayed. Our explanation, which we did not test, is that Otsu picks its threshold from the shade mix on the page, and a large mid-gray watermark pulls that threshold toward the watermark. A fixed cutoff does not move. That only works if the text is darker than the watermark by a clear margin. A watermark darker than about 100 would be treated as text, and a page of pale gray text would vanish.</p>
    <p>The cutoff has a second trap, which is the page itself. A fixed cutoff of 100 turned a dark gray page (background 90 or 70) entirely black, and the read returned 100% error. Setting the cutoff from the page's own brightness, half the median pixel value up to a maximum of 100, fixed that: 0.0% on both dark backgrounds. The script below does this.</p>

    <h2>How do you handle table lines and grids?</h2>
    <p>Remove long thin lines from the page after thresholding. Lines drawn under each text line cost nothing, which is why a lined invoice usually reads fine. A grid whose lines cross the letters is a different matter: it cost 54.7% unprocessed, and the default page mode did only a little better at 38.9%. Removing every horizontal or vertical run longer than 0.4 inch (120 pixels at 300 DPI) brought the grid page to 3.6%, and the combined page to 3.5%.</p>
    <p>The residual 3.6% is the cost of that method. Taking out a line that passes through the middle of a letter takes some of the letter's strokes with it, and we think that is the likely source of the remaining errors, though we did not trace them. If your tables carry text that sits right on the lines, the better answer is to find the table structure first and read cell by cell, which our guide to <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">layout analysis and key-value extraction</a> covers with its own tests.</p>

    <h2>What is the workflow, and can I run it?</h2>
    <p>Fix the orientation, clean the page with the script below, then read it. Orientation comes first: our tests of <a href="/resources/blogs/ocr-upside-down-sideways-pages">upside-down and sideways pages</a> show that a page turned the wrong way fails regardless of cleaning. After cleaning, read the page with <code>--psm 6</code> or whichever mode suits your layout, and check the figures as in <a href="/resources/blogs/how-to-fix-ocr-errors">fixing OCR errors in numbers and IDs</a>. The script needs <code>opencv-python</code> and <code>numpy</code>.</p>
    <pre><code>#!/usr/bin/env python3
"""Clean a scanned page before OCR: drop colored stamps and highlighter, gray watermarks and ruled lines.

Steps:
1. Take the brightest of the three color channels per pixel. Black text stays dark; red, blue,
   yellow or pink ink and highlighter turn light.
2. Keep only pixels darker than a cutoff set from the page's own paper brightness (at most 100
   out of 255). Gray watermarks and tinted backgrounds fall above it and turn white.
3. Remove long thin horizontal and vertical runs (ruled lines and table grids).
A black stamp printed over text cannot be separated this way.

Usage: python3 clean_page.py in.png out.png [dpi]       then:  tesseract out.png stdout --psm 6 --dpi 300
Needs: opencv-python and numpy.
"""
import sys

import cv2
import numpy as np


def clean(src, dst, dpi=300):
    img = cv2.imread(src, cv2.IMREAD_COLOR)
    page = img.max(axis=2)
    cutoff = min(100, 0.5 * float(np.median(page)))
    ink = (page &lt; cutoff).astype(np.uint8) * 255
    run = int(0.4 * dpi)                        # 0.4 inch: longer than any letter
    for w, h in ((run, 1), (1, run)):
        lines = cv2.morphologyEx(ink, cv2.MORPH_OPEN,
                                 cv2.getStructuringElement(cv2.MORPH_RECT, (w, h)))
        lines = cv2.dilate(lines, np.ones((3, 3), np.uint8))
        ink = cv2.bitwise_and(ink, cv2.bitwise_not(lines))
    cv2.imwrite(dst, 255 - ink)


if __name__ == "__main__":
    clean(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) &gt; 3 else 300)</code></pre>
    <p>We ran it on all 20 conditions, 24 pages each. It scored 0.0% on 17 of them, including all six tinted backgrounds, both highlighter colors, the red and blue stamps and every watermark. The three that stayed above zero were the ruled grid (3.6%), the combined page (3.5%) and the black stamp (9.3%). The same pipeline with a fixed cutoff of 100 and no adjustment for page brightness scored within a tenth of a point of the script on every condition except the two dark backgrounds, where it returned 100% error, so the brightness rule is not optional.</p>
    <p>A caution on scope. The script suits scans of mostly white paper with dark print. It is a poor fit for photographs with uneven lighting or shadows, where a single cutoff across the page will lose text in the dark corners, and for documents printed in light gray ink. For old faxes with speckle, the median and despeckle steps in <a href="/resources/blogs/convert-fax-tiff-jpg-png-to-text">our fax cleaning tests</a> are the better starting point.</p>

    <h2>What do these tests not show?</h2>
    <p>Eight limits. First, the pages are clean renders with ideal black text, and real scans add noise, JPEG artifacts, uneven lighting and fading, which will make every number here worse. Second, our stamps and watermarks are drawn and blended by us. Real stamps vary in ink density, bleed through paper and sometimes blot the text, and a faded red stamp may be darker or lighter than ours. Third, we used one typeface and one text size, about 11 points. Fourth, we tested only English and only Tesseract; other engines handle color and overlap differently, and we did not test DocsAPI on these conditions.</p>
    <p>Fifth, the stamps and watermarks sat in the same place on every page. Sixth, we did not test colored text on colored backgrounds, gray text, or reversed text, which are the cases where background color probably does matter. Seventh, we measured characters, not fields: a few wrong characters can still ruin a total or an invoice number, and our <a href="/resources/blogs/how-does-ocr-work">tests of DPI, tilt and blur</a> show how quickly clean-page accuracy falls once a scan degrades. Eighth, the cleaning script has parameters (the cutoff, the line length) we chose by hand, and we did not tune them. What we trust is the pattern: ink that overlaps the text is the problem, tints are not, and a few lines of preprocessing recover most of it.</p>

    <h2>Where does DocsAPI fit?</h2>
    <p>DocsAPI is not built on a single OCR engine. It uses a layout-aware proprietary engine with a vision-language model fallback for complex cases, and it extracts fields and tables, runs document checks, and flags low-confidence fields for a person to review. It was built by HyperVerge. In DocsAPI's own 2026 benchmark of 1,700 documents it scored 97 to 99% on clean typed text, 91% on multi-page bank statement tables and 76% on phone-photographed receipts. Those figures come from that benchmark, not from the Tesseract tests in this guide, and we did not run the stamp, watermark or highlighter tests on DocsAPI, so we make no claim about how it behaves on them.</p>
    <p>DocsAPI is available as a demo, then a free 30-day trial for qualified lenders. Pricing starts from $0.02 per page, with volume discounts above 100,000 pages a month. If your intake includes stamped or watermarked pages, collect 30 of the worst ones, read them as they are, and count the wrong figures and the pages that return a clean-looking wrong answer without a flag. The method behind the benchmark figures is in the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 accuracy benchmark</a>.</p>

    <h2>Sources and how we checked this</h2>
    <p>All figures come from our own runs on 9 November 2026 with Tesseract 5.5.2: 24 synthetic English pages, 18 conditions read with eight preparation methods (3,456 reads), then 20 conditions (adding two dark backgrounds) read three ways (1,440 reads). Every table was computed from the raw per-page results, and the script in this guide is the file we ran. An earlier version of the cutoff used a fixed value of 100 with no adjustment for page brightness; it failed on the two dark backgrounds, which is why the final script scales the cutoff and why we report that failure above.</p>


  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 9, 2026",
  datePublished: "2026-11-09T00:00:00.000Z",
  dateModified: "2026-11-09T00:00:00.000Z",
  last_updated: "November 9, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "ocr stamps watermarks",
  secondary_keywords: [
    "ocr watermark removal",
    "ocr colored background",
    "ocr highlighted text",
    "remove stamp before ocr",
    "tesseract preprocessing",
  ],
  tags: ["OCR", "Tesseract", "stamps", "watermarks", "preprocessing"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Do colored backgrounds break OCR?",
      answer:
        "Not in our test. Black text on yellow, blue and gray backgrounds (down to 70 out of 255) read with 0.0% character error in Tesseract 5.5.2. Low-contrast text on color is a different case that we did not test. Overlapping ink and highlighter did the damage instead.",
    },
    {
      question: "Does a watermark affect OCR accuracy?",
      answer:
        "It depends on the shade. A gray CONFIDENTIAL watermark at 235 or 215 out of 255 cost 0.0%, at 180 it cost 1.3%, and at 140 it cost 24.7%. Otsu thresholding did not fix the dark one, but a fixed darkness cutoff of 100 brought it to 0.0%.",
    },
    {
      question: "How do you remove a stamp before OCR?",
      answer:
        "For a red, blue or other colored stamp, take the brightest of the three color channels per pixel. Black text stays dark and the colored ink turns light. On our pages this took a red stamp from 5.8% to 0.0% and a blue stamp from 16.4% to 0.0%. A black stamp over the text cannot be removed this way.",
    },
    {
      question: "Why does OCR miss highlighted text?",
      answer:
        "We do not know the cause, but in our test yellow or pink highlighter behind two of six lines cost 33.6% character error when the color page was read directly. Converting the page to grayscale and thresholding it first brought the error to 0.0% for both colors.",
    },
    {
      question: "Can OCR read text under a black stamp?",
      answer:
        "Poorly. A black COPY stamp over the text cost 7.5% error, and every cleaning method we tried left it between 8.4% and 9.6%, because the stamp and the text are the same color. In the default page mode the error was 24.9%.",
    },
    {
      question: "How do you remove table lines before OCR?",
      answer:
        "Threshold the page, then delete horizontal and vertical runs longer than about 0.4 inch (120 pixels at 300 DPI). This cut a ruled-grid page from 54.7% to 3.6% error. Lines drawn under the text lines cost nothing, so only grids that cross the letters need this.",
    },
    {
      question: "What cutoff removes a gray watermark?",
      answer:
        "Keep only pixels darker than about 100 out of 255, but set the cutoff from the page's own brightness (half the median, up to 100). A fixed 100 removed the 140 watermark but turned dark gray pages (background 90 or 70) fully black and returned 100% error.",
    },
    {
      question: "Should I clean pages before OCR?",
      answer:
        "Only when the page has overlapping ink, highlighter, a dark watermark or a grid. On clean pages and on tinted backgrounds, cleaning changed nothing in our test. The script in this guide scored 0.0% on 17 of 20 conditions and is a poor fit for photos with uneven lighting.",
    },
  ],
}
