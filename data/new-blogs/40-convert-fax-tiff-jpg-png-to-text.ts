import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog40: BlogPost = {
  id: "new-40",
  title: "Convert Fax, TIFF, JPG and PNG to Text, Tested",
  slug: "convert-fax-tiff-jpg-png-to-text",
  excerpt:
    "We ran 3,360 reads across 14 image formats, 7 DPI tags and three fax modes. Format barely matters. A wrong DPI tag, a sideways EXIF photo and an uncleaned fax do.",
  description:
    "Convert fax, TIFF, JPG and PNG to text: format barely matters, but a wrong DPI tag cost up to 92.5% of words and a fax needs cleaning before enlarging.",
  metaTag: "Convert Fax, TIFF, JPG and PNG to Text, With Test Data",
  summary:
    "File format barely changes OCR accuracy: at 300 DPI, 12 of 14 formats scored 0.00 to 0.02% words wrong. A wrong DPI tag cost far more (3.3% at 300, 92.5% at 600 on a 150 DPI page), and noisy faxes read best when cleaned before enlarging (15.1% to 7.4%). Tesseract 5.5.2, 3,360 page reads, plus a tested script.",
  content: `
    <p>The file format barely changes OCR accuracy. What does is the resolution of the pixels, the DPI number written inside the file, whether the image is stored sideways, and, for faxes, how the page is cleaned before it is read. In our tests across 14 formats, every lossless format and every JPEG down to quality 25 read within 0.05% of each other on 10 point text at 300 DPI. A file that claimed to be 300 DPI when it was really 150 cost 3.3% of the words. One that claimed 600 DPI lost 92.5%.</p>
    <p>Faxes are the case worth planning for. A clean standard-mode fax lost 3.0% of words, a clean fine-mode fax lost 0.1%, and a noisy standard-mode fax lost 15.1%. The common fix of enlarging the page before reading it made the noisy fax much worse, 44.6%. Removing the specks first and enlarging second brought it down to 7.4%. This guide shows the numbers behind each of those claims, a script that applies the fixes, and the limits of the test. Everything here is Tesseract 5.5.2 on synthetic pages, so treat the percentages as a way to rank fixes, not as expected accuracy on your files.</p>

    <h2>How did we test this?</h2>
    <p>We rendered pages of English business text (invoice numbers, dates, amounts and common words) in Arial on a page 8.5 inches wide, so the true answer was known exactly. We then saved them in different ways and read them with Tesseract 5.5.2 in its default page mode. The score is the share of words that came out wrong, counted with the same word-level edit distance we describe in <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a>. Lower is better, and 0% means every word was right.</p>
    <ul>
      <li><strong>Format test:</strong> 14 formats, each at 300 and 150 DPI, each on a clean page and a scanned-looking page (light blur plus noise), 20 different pages per cell. That is 1,120 reads.</li>
      <li><strong>DPI tag test:</strong> the same scanned-looking page at 4 true resolutions, saved with 7 different DPI tags (including none), 20 pages per cell. That is 560 reads.</li>
      <li><strong>Fax test:</strong> pages at 8, 10 and 12 points, turned into 1-bit images at three fax resolutions, clean and with simulated line noise, read with three kinds of preparation, 20 pages per cell. That is 1,080 reads, plus 600 more to compare cleaning methods.</li>
      <li><strong>Odd-file checks:</strong> one page saved ten unusual ways, plus a 3-page TIFF, to see which files break the reader outright.</li>
      <li><strong>Script test:</strong> 30 files (10 faxes, 10 sideways phone-style JPEGs, 10 images with a wrong DPI tag) read once with plain Tesseract and once with the script below.</li>
    </ul>
    <p>We got one thing wrong along the way, and it is the reason the DPI section exists. Our first format run wrote a 300 DPI tag into the 150 DPI files by mistake. PNG and TIFF looked worse than BMP and GIF for no visible reason, because only the formats that carry the tag were affected. Chasing that difference led to the DPI result below. We threw that run away and repeated it with correct tags, and every table here comes from the repeat.</p>
    <p>The limits matter and have their own section near the end. In short: synthetic pages, one engine, one font, English only, and a fax noise model we made up. The 12 point fax pages were also redone once, because our first version overflowed the page and the answer key listed lines that were never drawn.</p>

    <h2>Does the file format change OCR accuracy?</h2>
    <p>Almost never, as long as the pixels are good. At 300 DPI, 12 of the 14 formats scored between 0.00% and 0.02% words wrong on scanned-looking pages. The two 1-bit formats scored 0.05%. At 150 DPI the lossless formats and JPEG quality 25 and above all landed between 0.02% and 0.05%, and only one setting stood out: JPEG at quality 10 reached 0.32%. The format changed the file size by a factor of 80, and the accuracy by almost nothing.</p>
    <table>
      <thead>
        <tr><th>Format</th><th>Size at 300 DPI</th><th>Words wrong at 300 DPI</th><th>Size at 150 DPI</th><th>Words wrong at 150 DPI</th></tr>
      </thead>
      <tbody>
        <tr><td>BMP</td><td>4,113 KB</td><td>0.02%</td><td>1,029 KB</td><td>0.03%</td></tr>
        <tr><td>TIFF, uncompressed</td><td>4,109 KB</td><td>0.02%</td><td>1,027 KB</td><td>0.03%</td></tr>
        <tr><td>TIFF, LZW</td><td>2,863 KB</td><td>0.02%</td><td>784 KB</td><td>0.03%</td></tr>
        <tr><td>GIF</td><td>2,878 KB</td><td>0.02%</td><td>795 KB</td><td>0.03%</td></tr>
        <tr><td>PNG</td><td>2,634 KB</td><td>0.02%</td><td>704 KB</td><td>0.03%</td></tr>
        <tr><td>WebP, lossless</td><td>2,392 KB</td><td>0.02%</td><td>640 KB</td><td>0.03%</td></tr>
        <tr><td>JPEG, quality 95</td><td>2,174 KB</td><td>0.00%</td><td>589 KB</td><td>0.02%</td></tr>
        <tr><td>JPEG, quality 75</td><td>828 KB</td><td>0.00%</td><td>240 KB</td><td>0.03%</td></tr>
        <tr><td>WebP, lossy 75</td><td>781 KB</td><td>0.00%</td><td>236 KB</td><td>0.05%</td></tr>
        <tr><td>JPEG, quality 50</td><td>491 KB</td><td>0.00%</td><td>149 KB</td><td>0.05%</td></tr>
        <tr><td>JPEG, quality 25</td><td>285 KB</td><td>0.02%</td><td>93 KB</td><td>0.05%</td></tr>
        <tr><td>JPEG, quality 10</td><td>169 KB</td><td>0.00%</td><td>54 KB</td><td>0.32%</td></tr>
        <tr><td>PNG, 1-bit</td><td>78 KB</td><td>0.05%</td><td>28 KB</td><td>10.34%</td></tr>
        <tr><td>TIFF, 1-bit Group 4</td><td>51 KB</td><td>0.05%</td><td>24 KB</td><td>10.34%</td></tr>
      </tbody>
    </table>
    <p>These are the scanned-looking pages, averaged over 20 pages per row. On the clean renders every row, including the 1-bit ones, stayed within 0.2% at 150 DPI and between 0.00% and 0.02% at 300 DPI. The size column is inflated for lossless formats because the noise we added does not compress; real scans of clean paper will be smaller.</p>
    <p>Two practical readings. First, the folk advice that JPEG ruins OCR did not hold in this test: quality 75 was 69% smaller than PNG at 300 DPI and read just as well, and quality 25 was 89% smaller with the same score. That agrees with what we found in <a href="/resources/blogs/how-does-ocr-work">our test of how OCR works</a>, where compression alone did nothing to a clean page until the DPI dropped. Second, if you are choosing a storage format for scans you will OCR, the format is the least important decision. Resolution is the one that counts, and we measured where it collapses in the same guide.</p>

    <h2>Why did 1-bit files fail at 150 DPI?</h2>
    <p>The two 1-bit rows are the only ones that broke, and they broke badly: 10.34% of words wrong against 0.03% for the same page saved as a grayscale PNG. At 300 DPI the same two formats were fine at 0.05%. The cause is how we made the 1-bit files, which is also how most scanners and fax-style exports make them. We turned every pixel black or white with a single cutoff at mid-gray, after the blur and noise had already been added.</p>
    <p>At 150 DPI a letter stroke is only one to two pixels wide, so a single cutoff snaps thin strokes into broken pieces and joins neighbouring letters. At 300 DPI the strokes are thick enough to survive. This is our reading of the result, not a tested mechanism, but the pattern fits: the same data was fine at the higher resolution and clean pages were mostly fine at both.</p>
    <p>The takeaway is not that 1-bit formats are bad. Group 4 TIFF was the smallest file in every column, 51 KB for a full page at 300 DPI, and it read as well as anything. The takeaway is that the conversion to 1-bit is where information is lost, not the file container. If you control the scanner, keep grayscale for anything below 300 DPI and let the OCR engine do its own thresholding. Our earlier test showed that a smarter adaptive cutoff beats a single global one on pages with uneven light, which is covered in the same guide.</p>

    <h2>Does the DPI number stored in the file matter?</h2>
    <p>Yes, and this was the biggest surprise. Tesseract appears to use the resolution tag in the file to decide how large the text is. When the tag is lower than the truth or missing, nothing happens. When the tag is higher than the truth, accuracy falls, and when it is far higher, it collapses. Here is the share of words wrong, by the real resolution of the pixels and the number written into the PNG:</p>
    <table>
      <thead>
        <tr><th>Real DPI of the pixels</th><th>No tag</th><th>Tag 72</th><th>Tag 150</th><th>Tag 300</th><th>Tag 600</th></tr>
      </thead>
      <tbody>
        <tr><td>300</td><td>0.02%</td><td>0.02%</td><td>0.02%</td><td>0.02%</td><td>0.02%</td></tr>
        <tr><td>200</td><td>0.00%</td><td>0.00%</td><td>0.00%</td><td>0.00%</td><td>0.12%</td></tr>
        <tr><td>150</td><td>0.03%</td><td>0.03%</td><td>0.03%</td><td>3.29%</td><td>92.50%</td></tr>
        <tr><td>100</td><td>1.32%</td><td>1.32%</td><td>1.32%</td><td>10.17%</td><td>98.08%</td></tr>
      </tbody>
    </table>
    <p>Read the 150 DPI row. A page with the correct tag, a low tag, or no tag at all lost 0.03% of its words. The same pixels labelled 300 DPI lost 3.29%, and labelled 600 DPI lost 92.5%. The 100 DPI row is the same story with a worse starting point. In the 300 DPI row nothing moved, even with a tag of 600, so the pixels were large enough that the wrong number did not matter. At 200 DPI the 600 tag started to cost a little (0.12%).</p>
    <p>The practical risk is silent. A pipeline that resizes or converts images and keeps the old metadata can end up with a tag that does not match the pixels, and the OCR result simply looks bad with no error. We did not survey how often real files carry a wrong tag, so we cannot say how common this is. What we can say is how cheap the check is: tell the engine the resolution yourself with its <code>--dpi</code> option, or strip the tag, and the wrong-tag cases disappear. The script later in this guide does that and recovered all 10 of our wrong-tag test files, from 94.4% wrong to 0.0%.</p>

    <h2>Which unusual files break OCR?</h2>
    <p>We saved one 300 DPI page (314 words) in ten unusual ways and read each once. This is a single page per row, so it shows what breaks outright, not by how much on average.</p>
    <table>
      <thead>
        <tr><th>File</th><th>Words wrong</th><th>Note</th></tr>
      </thead>
      <tbody>
        <tr><td>Plain PNG (baseline)</td><td>0%</td><td></td></tr>
        <tr><td>PNG with a transparent background, black text</td><td>0%</td><td>No flattening needed here</td></tr>
        <tr><td>PNG saved as RGBA, fully opaque</td><td>0%</td><td></td></tr>
        <tr><td>16-bit grayscale PNG</td><td>0%</td><td>Engine printed "Estimating resolution as 387"</td></tr>
        <tr><td>CMYK JPEG</td><td>0%</td><td></td></tr>
        <tr><td>White text on black</td><td>0%</td><td></td></tr>
        <tr><td>PNG with no DPI tag</td><td>0%</td><td>Engine estimated the resolution itself</td></tr>
        <tr><td>PNG tagged 72 DPI, pixels really 300</td><td>0%</td><td>A low tag is harmless</td></tr>
        <tr><td>JPEG stored sideways, with a correct EXIF rotation tag</td><td>103%</td><td>Output was nonsense</td></tr>
        <tr><td>Upright JPEG carrying a rotate tag</td><td>0%</td><td>The tag was ignored</td></tr>
        <tr><td>3-page TIFF</td><td>0%</td><td>All 955 of 955 words came back</td></tr>
      </tbody>
    </table>
    <p>The one real break is orientation. Phones and many cameras store a photo in its sensor orientation and add an EXIF tag that says how to turn it for display. Image viewers obey the tag. Tesseract did not: a sideways JPEG with the correct tag read as nonsense, with more wrong words than the page contained (103%), while an upright image carrying a rotate tag read perfectly, which shows the tag was never applied. Any pipeline that accepts phone photos should apply the tag, or detect rotation, before OCR. Our tests of tilt, which is a different problem from a stored rotation, are in the same guide, and finding the page itself in a photo is the subject of <a href="/resources/blogs/document-detection-before-ocr">document detection before OCR</a>.</p>
    <p>The multi-page TIFF is the pleasant surprise. A forum thread from 2008 that we found while researching advises splitting fax TIFFs into single pages first. With Tesseract 5.5.2 we did not need to: it read all three pages and returned them in one stream, separated by form feed characters. It is still worth knowing which page each chunk came from, so the script below reads one page at a time.</p>

    <h2>What does fax do to OCR accuracy?</h2>
    <p>A fax is a 1-bit image at a low, uneven resolution. The commonly quoted figures are 204 by 98 dots per inch for standard mode, 204 by 196 for fine and 408 by 391 for superfine. Standard mode has half as many lines per inch as fine, which is why a letter shrinks vertically more than horizontally. We simulated each mode by shrinking our 600 DPI pages to those sizes and applying a fixed black and white cutoff.</p>
    <p>To see what line noise does, we also made noisy versions. Our noise model flips 0.3% of pixels at random and shifts 1% of rows sideways by one or two pixels. That is our own guess at what a poor phone line does, not a measurement of real faxes, so the noisy columns are best read as a stress test. Results are averaged over 60 pages per cell (20 pages each at 8, 10 and 12 points) and read directly, with no preparation:</p>
    <table>
      <thead>
        <tr><th>Fax mode</th><th>Resolution (x by y)</th><th>Clean page</th><th>With line noise</th></tr>
      </thead>
      <tbody>
        <tr><td>Standard</td><td>204 by 98</td><td>3.0%</td><td>15.1%</td></tr>
        <tr><td>Fine</td><td>204 by 196</td><td>0.1%</td><td>10.4%</td></tr>
        <tr><td>Superfine</td><td>408 by 391</td><td>0.0%</td><td>2.0%</td></tr>
      </tbody>
    </table>
    <p>Fine mode is the difference between a clean fax that reads perfectly and one that does not. The cost of standard mode depends on the text size: on clean pages it lost 4.8% of words at 8 points and about 2% at 10 and 12 points. Small print on a standard-mode fax is where the damage lands, which matters for terms and conditions, drug names and footnotes. If you can ask the sender for fine mode, our test says that is worth more than anything you do afterwards, because the information is gone before your system sees the file.</p>
    <p>Noise raises every mode, and at fine and standard resolutions it is the larger problem. A noisy fine fax lost 10.4%, far more than the same page without noise. That is where preparation matters, and the next section shows which kind helps.</p>

    <h2>Should you clean and enlarge a fax before OCR?</h2>
    <p>Clean it first, then enlarge it. The order is the whole result. We tried five ways of preparing the noisy fax pages, 60 per cell. "Enlarge" means scaling to 300 DPI in both directions. "Median" means a small smoothing filter that replaces each pixel with the middle value of its neighbours. "Despeckle" means deleting isolated black dots and filling isolated white holes at the original size.</p>
    <table>
      <thead>
        <tr><th>Preparation</th><th>Standard mode</th><th>Fine mode</th></tr>
      </thead>
      <tbody>
        <tr><td>None (read directly)</td><td>15.1%</td><td>10.4%</td></tr>
        <tr><td>Enlarge only</td><td>44.6%</td><td>37.9%</td></tr>
        <tr><td>Enlarge, then median</td><td>19.2%</td><td>0.7%</td></tr>
        <tr><td>Despeckle only</td><td>10.9%</td><td>0.8%</td></tr>
        <tr><td>Despeckle, enlarge, then median</td><td>7.4%</td><td>0.8%</td></tr>
      </tbody>
    </table>
    <p>Enlarging a noisy fax with nothing else was the worst option in both modes, three to four times worse than doing nothing. Our reading, which we did not isolate in the test, is that scaling turns a one-pixel speck into a blob about the size of a stroke, so the noise becomes harder to tell from text. Cleaning before enlarging avoided that. On fine-mode pages, despeckling alone took the error from 10.4% to 0.8%. On standard-mode pages the full sequence halved the error from 15.1% to 7.4%, and we did not find a method that went lower. Our guess is that the remaining errors are letters that lost too much detail at 98 lines per inch, but we did not test that.</p>
    <p>A median filter by itself, applied after enlarging, helped fine mode a great deal (0.7%) and hurt standard mode slightly (19.2% against 15.1% for no preparation). That is an example of why we test a fix on a sample before putting it in a pipeline. A step that works on one fax setting can make another one worse.</p>
    <p>If what you need from a fax is a number, such as an amount, a policy number or an IBAN, the cleaning step is only half the job. Checking the value after the read is what catches the rest, and <a href="/resources/blogs/how-to-fix-ocr-errors">our guide to fixing OCR errors in numbers and IDs</a> measured that on fax-quality scans.</p>
    <p>One caution about the clean fax rows. Without noise, enlarging helped standard mode (3.0% to 1.4% on average). If your faxes are clean, the plain read is already fine in fine mode and superfine, and the preparation only earns its keep when speckle is present. You can tell by looking at a few pages, or by counting isolated dots on each page and sending only the speckled ones through the cleaning step.</p>

    <h2>What should you check before OCR on any image file?</h2>
    <p>These six checks come straight from the results above. Each one is cheap to automate, and the order roughly follows how much damage each problem caused in our tests.</p>
    <ol>
      <li><strong>Is the image stored sideways?</strong> Apply the EXIF orientation tag before OCR. A sideways page was 103% wrong.</li>
      <li><strong>Does the DPI tag match the pixels?</strong> Pass the resolution yourself or ignore the tag. A tag of 600 on a 150 DPI page was 92.5% wrong.</li>
      <li><strong>Is it a fax or other 1-bit file with specks?</strong> Remove isolated dots at the original size, then enlarge. Enlarging first made a noisy standard fax 44.6% wrong.</li>
      <li><strong>Are the dots per inch high enough?</strong> Below 150 DPI even good formats start to fail, and a 1-bit conversion at 150 DPI lost 10.34% of words. Prefer 300 DPI and grayscale.</li>
      <li><strong>Is it a multi-page file?</strong> Read one page at a time so each result stays tied to its page number.</li>
      <li><strong>Which format?</strong> Pick for storage and compatibility. JPEG at 75 was 69% smaller than PNG with no measurable loss at 300 DPI, and Group 4 TIFF was the smallest of all for black and white pages at 300 DPI.</li>
    </ol>
    <p>If you read many files a day, run the checks in this order and log which ones fire. The log tells you where your files come from and which sender or scanner is causing the problems, which is more useful than a single accuracy number. Throughput and queueing for large batches are covered in <a href="/resources/blogs/bulk-and-high-volume-ocr-processing">bulk and high-volume OCR processing</a>.</p>

    <h2>Is there a script that applies these fixes?</h2>
    <p>Yes, and we ran it. The script below uses Pillow, OpenCV and the Tesseract command line. It applies the EXIF rotation, flattens transparency, trusts the pixel width instead of the DPI tag (using the tag only to spot the uneven resolution of a fax), despeckles 1-bit pages at their original size, enlarges to about 300 DPI in each direction, smooths 1-bit pages after enlarging, and reads every page of a multi-page file. It assumes the page is 8.5 inches wide; change the constant for A4.</p>
    <pre><code>import os, subprocess, sys, tempfile
import cv2
import numpy as np
from PIL import Image, ImageOps, ImageSequence

PAGE_WIDTH_IN = 8.5      # assumption: US Letter width; change for A4 (8.27)


def to_gray(frame):
    frame = ImageOps.exif_transpose(frame)          # honour the camera's rotation tag
    if frame.mode in ("RGBA", "LA", "P"):           # flatten transparency onto white
        rgba = frame.convert("RGBA")
        bg = Image.new("RGBA", rgba.size, "white")
        bg.alpha_composite(rgba)
        frame = bg
    return np.array(frame.convert("L"))


def despeckle(a):
    """Remove isolated black dots and fill isolated white holes in a 1-bit page."""
    for value, conn, max_area in ((0, 8, 2), (255, 4, 1)):
        mask = (a == value).astype(np.uint8)
        n, labels, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=conn)
        for i in range(1, n):
            if stats[i, cv2.CC_STAT_AREA] &lt;= max_area:
                a[labels == i] = 255 - value
    return a


def prepare(a, dpi_tag):
    h, w = a.shape
    is_bilevel = len(np.unique(a)) &lt;= 2
    xdpi, ydpi = [float(v) for v in dpi_tag] if dpi_tag else (None, None)
    if xdpi and ydpi and abs(xdpi - ydpi) / max(xdpi, ydpi) &gt; 0.2:
        fx, fy = 300 / xdpi, 300 / ydpi            # fax-style uneven resolution
    else:
        eff = w / PAGE_WIDTH_IN                    # ignore the tag, trust the pixels
        f = 300 / eff if eff &lt; 250 else 1.0
        fx = fy = f
    if is_bilevel:
        a = despeckle(a.copy())                    # clean at native size, before enlarging
    if fx != 1 or fy != 1:
        a = cv2.resize(a, None, fx=fx, fy=fy, interpolation=cv2.INTER_CUBIC)
    if is_bilevel:
        a = cv2.medianBlur(a, 3)                   # smooth stair-steps left by the enlargement
    return a


def ocr_pages(path):
    im = Image.open(path)
    tag = im.info.get("dpi")
    texts = []
    for frame in ImageSequence.Iterator(im):       # every page of a multi-page TIFF
        a = prepare(to_gray(frame), tag)
        tmp = tempfile.NamedTemporaryFile(suffix=".png", delete=False)
        tmp.close()
        cv2.imwrite(tmp.name, a)
        out = subprocess.run(["tesseract", tmp.name, "stdout", "--dpi", "300",
                              "--psm", "3", "-l", "eng"], capture_output=True).stdout.decode("utf-8", "replace")
        os.remove(tmp.name)
        texts.append(out.strip())
    return "\\n\\n".join(texts)


if __name__ == "__main__":
    print(ocr_pages(sys.argv[1]))</code></pre>
    <p>We tested it on 30 files, 10 of each kind, and compared it with running plain Tesseract on the same file. These are mean shares of words wrong:</p>
    <table>
      <thead>
        <tr><th>File type</th><th>Plain Tesseract</th><th>With the script</th></tr>
      </thead>
      <tbody>
        <tr><td>3-page standard-mode fax TIFF with line noise</td><td>14.3%</td><td>5.0%</td></tr>
        <tr><td>JPEG stored sideways, EXIF tag set</td><td>104.6%</td><td>0.0%</td></tr>
        <tr><td>150 DPI scan tagged as 600 DPI</td><td>94.4%</td><td>0.0%</td></tr>
      </tbody>
    </table>
    <p>The fax result of 5.0% differs from the 7.4% in the cleaning table because these are 3-page files at 10 points, not the mix of text sizes behind that table. One more limit: the script finds the uneven fax resolution from the TIFF's own resolution tags, which our test files carried. A fax file with no tags would be treated as evenly spaced and would not be stretched correctly. Our first version of this script used the enlarge-then-median order and scored 16.3% on the fax files, worse than plain Tesseract at 14.3%. We changed it to despeckle first after the cleaning test above showed why. The script that is printed here is the second version, and the table is its result.</p>

    <h2>What about PDF and CSV output?</h2>
    <p>We did not test PDF in this round. A scanned PDF is usually an image or several images inside a PDF wrapper, so the checks above apply to the images inside it, and how to tell which kind of PDF you have is explained in <a href="/resources/blogs/readable-pdf-vs-image-pdf">readable PDF versus image PDF</a>. For pulling fields from a fixed form, how far a page can move before fixed zones fail is measured in <a href=\"/resources/blogs/what-is-zonal-ocr\">what is zonal OCR</a>. For converting to CSV, the file format is not the hard part. Finding the table, its rows and its columns is, and that is where results varied most in our earlier work. See <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">OCR layout analysis and key-value extraction</a> for the table results. If you are just trying a tool on a single file today, <a href="/resources/blogs/free-online-ocr-tools">our review of free online OCR tools</a> covers which ones are safe to upload to.</p>

    <h2>What do these tests not show?</h2>
    <p>Six things. First, the pages are clean renders of Arial text with added blur and noise, and real scans bring folds, stamps, colour backgrounds and shadows that are worse than anything we simulated. Second, we tested one engine. A newer engine that uses a language model could react very differently to a wrong DPI tag or to a noisy fax, and the ranking of fixes could change. Third, the fax noise is our own model, and real line noise varies by phone line and machine. Fourth, we tested English only, so none of this says anything about other scripts. Fifth, the odd-file table is one page per row. Sixth, we tested a 10 point font family at 8, 10 and 12 points on an 8.5 inch page, and we did not test handwriting, stamps, photographs of paper, JPEG 2000, HEIC or PDF.</p>
    <p>What we do trust is the ranking: check orientation and the DPI number first, clean a fax before enlarging it, and stop worrying about whether the file is a PNG or a JPEG. If you compare a different engine, run the same four tests on 50 of your own files before changing anything. For how our own engine compares with others on real documents, see <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a> and the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">2026 accuracy benchmark</a>.</p>

    <h2>Where does DocsAPI fit?</h2>
    <p>DocsAPI reads documents, extracts fields and tables, runs document checks, and flags low-confidence fields for a person to review. It was built by HyperVerge. In DocsAPI's own 2026 benchmark of 1,700 documents it scored 97 to 99% on clean typed text, 93% on invoice line items and 76% on phone-photographed receipts. Those figures come from that benchmark, not from the Tesseract tests in this guide, and no fax or DPI-tag tests were run on DocsAPI for this article, so we make no claim about how it handles those cases.</p>
    <p>If faxes or odd image files are a large part of your volume, the useful step is to put your own worst files in front of the tool. DocsAPI is available as a demo, then a free 30-day trial for qualified lenders. Pricing starts from $0.02 per page, with volume discounts above 100,000 pages a month. Ask in the demo which file types and fax-quality scans your documents need, because we have not listed supported formats here. Take 50 of your files, including the sideways, tagged-wrong and noisy ones, and count how many come back right on the first read and how many wrong values come back without a flag.</p>

    <h2>Sources and how we checked this</h2>
    <p>All figures in the tables come from our own runs on 5 November 2026 using Tesseract 5.5.2, checked against the raw output files. The format table is the repeat run with corrected DPI tags. The 12 point fax pages were re-run after a page-overflow error was found in the first version; the 8 and 10 point pages were not affected. The fax cleaning comparison and the script test are separate runs on fresh pages. The fax resolutions are the commonly quoted values for standard, fine and superfine modes. The script above is the file we ran, copied unchanged. DocsAPI figures are from its own 2026 benchmark on 1,700 documents. Search results we reviewed while checking the topic were vendor help pages and forum threads, none of which we found published measured accuracy by file format or fax mode, which is why we ran these tests ourselves.</p>

  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 5, 2026",
  datePublished: "2026-11-05T00:00:00.000Z",
  dateModified: "2026-11-06T00:00:00.000Z",
  last_updated: "November 6, 2026",
  readTime: "16 min read",
  author: nupuraUghade,
  primary_keyword: "convert fax to text",
  secondary_keywords: [
    "tiff to text ocr",
    "jpg to text converter",
    "png to text converter",
    "best image format for ocr",
    "ocr dpi metadata",
    "fax ocr accuracy",
  ],
  tags: ["OCR", "fax", "TIFF", "image formats", "preprocessing"],
  cluster: "ai-doc",
  faq: [
    {
      question: "Which image format is best for OCR?",
      answer:
        "For accuracy, the format barely matters. At 300 DPI, 12 of 14 formats scored between 0.00% and 0.02% words wrong, and the two 1-bit formats scored 0.05%. Choose by file size and compatibility, and keep the resolution at 300 DPI or higher.",
    },
    {
      question: "Is JPG worse than PNG for OCR?",
      answer:
        "Not in our test. At 300 DPI, JPEG at quality 75 was 69% smaller than PNG and scored 0.00% words wrong, against 0.02% for PNG. Quality 10 was the only setting that cost anything measurable, 0.32% at 150 DPI.",
    },
    {
      question: "Does DPI metadata in an image affect OCR?",
      answer:
        "Yes, when the number is too high. A 150 DPI page tagged 300 DPI lost 3.29% of words, and tagged 600 DPI lost 92.5%. A missing or lower tag cost nothing, so pass the resolution to the engine yourself or strip the tag.",
    },
    {
      question: "How do I convert a fax to text?",
      answer:
        "Ask the sender for fine mode if you can, remove isolated specks at the original size, enlarge the page to about 300 DPI, smooth it lightly, then run OCR. On noisy standard-mode faxes this cut words wrong from 15.1% to 7.4% in our test.",
    },
    {
      question: "Why is enlarging a fax before OCR a bad idea?",
      answer:
        "Enlarging a noisy fax with no cleaning raised words wrong from 15.1% to 44.6% in standard mode and from 10.4% to 37.9% in fine mode. Clean the specks first and enlarge second.",
    },
    {
      question: "Can OCR read a multi-page TIFF?",
      answer:
        "Tesseract 5.5.2 read all three pages of a test TIFF and returned all 955 words, separated by form feed characters. Reading one page at a time keeps each result tied to its page number.",
    },
    {
      question: "Why does my phone photo read as gibberish?",
      answer:
        "The photo may be stored sideways with an EXIF tag that tells viewers to rotate it. Tesseract did not apply the tag in our test and scored 103% words wrong. Apply the EXIF rotation before OCR.",
    },
    {
      question: "Does PNG or TIFF give better OCR results for scans?",
      answer:
        "They read the same in our test: 0.02% words wrong at 300 DPI for PNG, uncompressed TIFF and LZW TIFF. A 1-bit Group 4 TIFF was the smallest file at 51 KB and read fine at 300 DPI, but lost 10.34% of words at 150 DPI.",
    },
  ],
}
