import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog37: BlogPost = {
  id: "new-37",
  title: "Bulk OCR Processing: Speed, Cost and Review Time, Measured",
  slug: "bulk-and-high-volume-ocr-processing",
  excerpt:
    "To OCR thousands of documents, queue the files, run workers in parallel, make every job safe to retry and send low-confidence results to a person. We measured the scaling on a 10-core Mac: 10 workers gave 7.8 times the speed of one, and 8 gave 90 percent of that.",
  description:
    "Bulk OCR processing measured: pages per second at 1 to 10 workers, time per page by DPI, a tested pipeline script, and cost and review time per 100,000 pages.",
  metaTag: "Bulk OCR Processing: Speed and Cost per 100,000 Pages",
  summary:
    "Bulk OCR is a queue problem more than an accuracy problem. On a 10-core Mac, Tesseract went from 0.28 pages per second with one worker to 2.21 with ten, so 100,000 dense pages took 12.6 hours. Dropping from 300 to 150 DPI saved 27 percent of the time. Review hours, not processing hours, usually decide the schedule.",
  content: `
    <p>To OCR thousands of documents, put each file on a queue, process many pages in parallel, give every job an ID so a failed job can be retried without creating a duplicate, and send low-confidence results to a person instead of trusting them. Speed is the easy half. We measured it on a 10-core Mac: <strong>ten workers ran 7.8 times faster than one, eight workers already gave 90 percent of that, and 100,000 dense pages took 12.6 hours.</strong> The harder half is what happens when 400 files out of 50,000 are corrupt, upside down or in a language nobody planned for.</p>

    <p>This guide has the measured numbers, a tested pipeline script, and the planning math for cloud and local processing. The numbers in the first sections come from Tesseract 5.5.2, a free engine, so you can repeat them. They are not DocsAPI numbers, which are covered later and come from our own benchmark.</p>

    <h2>How we measured</h2>

    <ul>
      <li><strong>Pages:</strong> 60 synthetic full letter pages, each with 40 lines of 10 point text, rendered at 300 DPI. These are dense pages, denser than most invoices.</li>
      <li><strong>Machine:</strong> a 10-core Apple M5 Mac with 16 GB of memory, running one Tesseract process per worker.</li>
      <li><strong>Method:</strong> the same 60 pages for every worker count, timed from the first page started to the last page finished. Time per page by resolution used a single process and the mean of 6 pages.</li>
      <li><strong>Limits:</strong> one machine, one engine, English text. Treat the shape of the curves as the finding and time your own files for your own numbers.</li>
    </ul>

    <h2>How does speed scale with more workers?</h2>

    <table>
      <thead>
        <tr><th>Workers</th><th>Pages per second</th><th>Speedup over one worker</th><th>Hours for 100,000 pages</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>0.28</td><td>1.0x</td><td>97.8</td></tr>
        <tr><td>2</td><td>0.57</td><td>2.0x</td><td>48.4</td></tr>
        <tr><td>4</td><td>1.15</td><td>4.1x</td><td>24.1</td></tr>
        <tr><td>6</td><td>1.70</td><td>6.0x</td><td>16.3</td></tr>
        <tr><td>8</td><td>1.99</td><td>7.0x</td><td>14.0</td></tr>
        <tr><td>10</td><td>2.21</td><td>7.8x</td><td>12.6</td></tr>
      </tbody>
    </table>

    <p>Scaling was almost perfectly linear up to 4 workers, then flattened. Going from 8 to 10 workers, a 25 percent increase, bought only 11 percent more throughput. Eight workers captured 90 percent of what ten delivered. The practical rule: size your pool to a little under the core count, not above it, and measure the last step before paying for it. A single Tesseract process gave 0.29 pages per second whether or not its threads were capped, so a script that loops over files one at a time leaves most of a modern machine idle.</p>

    <h2>Does a higher DPI make bulk OCR slower?</h2>

    <table>
      <thead>
        <tr><th>Resolution</th><th>Seconds per page (one process)</th></tr>
      </thead>
      <tbody>
        <tr><td>100 DPI</td><td>1.91</td></tr>
        <tr><td>150 DPI</td><td>2.77</td></tr>
        <tr><td>200 DPI</td><td>3.10</td></tr>
        <tr><td>300 DPI</td><td>3.79</td></tr>
        <tr><td>400 DPI</td><td>3.98</td></tr>
        <tr><td>600 DPI</td><td>4.75</td></tr>
      </tbody>
    </table>

    <p>Yes, but far less than you would expect. From 100 to 600 DPI the page has 36 times as many pixels and took only 2.5 times as long. Time followed how much text there was to read more than how many pixels there were. The useful number is the saving from sensible downsampling: scanning or converting at 150 DPI instead of 300 cut the time per page by 27 percent. Whether that is safe depends on character height. In our <a href="/resources/blogs/how-does-ocr-work">accuracy tests</a>, 10 point text read perfectly down to about 21 pixels per character, which 150 DPI gives, and failed below about 10. So 150 DPI is fine for 8 to 10 point print and too coarse for small footnotes. Test your smallest text before you downsample a whole archive.</p>

    <h2>Is limiting OCR threads worth it?</h2>

    <p>A common tip says to cap each Tesseract process at one thread, because its OpenMP threading can oversubscribe the CPU when you run many workers. We tested it with 10 workers on 40 pages. With the cap, 2.29 pages per second. Without it, 2.38. Single worker: 0.29 either way. On this build and machine the setting made no measurable difference. It costs nothing to try once on your own hardware, but do not expect it to rescue a slow batch. Our test cannot speak for other builds, other operating systems or other engines.</p>

    <h2>Three speeds, and why none of them is yours</h2>

    <p>Three different per-page times appear in our own material, and all are correct for their own pages:</p>

    <ul>
      <li><strong>3.5 seconds</strong> for Tesseract on a dense full letter page in the test above, one process on an M5.</li>
      <li><strong>1.8 seconds</strong> for Tesseract on a mid-tier laptop CPU in our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">1,700-document benchmark</a>, on a mix of real documents.</li>
      <li><strong>About 1.1 seconds</strong> for DocsAPI in the same benchmark, including the network round trip.</li>
    </ul>

    <p>They differ because the pages differ, the hardware differs and one includes a network call. The benchmark was run by DocsAPI, so cite it as DocsAPI's own. What matters for planning is that page density moves the number by a factor of two or more, so a sparse invoice and a crowded bank statement are different workloads. That is why every plan below starts with a sample of your own files.</p>

    <h2>How long will a cloud batch take?</h2>

    <p>For a hosted API, use this formula: <strong>hours = total pages x seconds per page / parallel requests / 3,600</strong>. At about 1.1 seconds per page:</p>

    <table>
      <thead>
        <tr><th>Total pages</th><th>1 request at a time</th><th>10 in parallel</th><th>50 in parallel</th></tr>
      </thead>
      <tbody>
        <tr><td>10,000</td><td>3.1 hours</td><td>18 minutes</td><td>4 minutes</td></tr>
        <tr><td>100,000</td><td>30.6 hours</td><td>3.1 hours</td><td>37 minutes</td></tr>
        <tr><td>1,000,000</td><td>12.7 days</td><td>30.6 hours</td><td>6.1 hours</td></tr>
      </tbody>
    </table>

    <p>Two cautions. A 40-page statement counts as 40 pages. And the parallel columns assume your plan allows that many simultaneous requests, so ask what concurrency and rate limits apply before you build a deadline on them. Do not compare this table with the local one above as if the workloads matched: the local test used dense pages on one 10-core machine, and this uses benchmark averages and a network.</p>

    <h2>What will it cost?</h2>

    <p>DocsAPI pricing starts at $0.02 per page, with volume discounts above 100,000 pages a month, and table extraction and classification are included. At list price that is $2,000 for 100,000 pages and $20,000 for 1,000,000 pages before any discount. Access starts with a demo, then a free 30-day trial for qualified lenders. Current terms are on the <a href="/pricing">pricing page</a>. A local engine has no per-page fee, and its cost is the machines and the engineering time to keep them running. For other pricing structures, see <a href="/resources/blogs/invoice-ocr-pricing-models">invoice OCR pricing models</a>, and for bank statements specifically, <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing</a>.</p>

    <h2>A worked planning example: 250,000 pages</h2>

    <p>These are illustrative numbers built from the measurements above, so replace them with your own sample results. Suppose a backlog of 250,000 pages, and an assumed two minutes of human time for each page that needs review.</p>

    <table>
      <thead>
        <tr><th>Item</th><th>Calculation</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>Cloud processing time, 20 parallel requests</td><td>250,000 x 1.1 s / 20</td><td>3.8 hours</td></tr>
        <tr><td>Local processing time, 10 workers, dense pages</td><td>250,000 / 2.21 pages per second</td><td>31.4 hours</td></tr>
        <tr><td>Cloud cost at list price</td><td>250,000 x $0.02</td><td>$5,000</td></tr>
        <tr><td>Review at a 5% review rate</td><td>12,500 pages x 2 min</td><td>417 hours</td></tr>
        <tr><td>Review at a 3% review rate</td><td>7,500 pages x 2 min</td><td>250 hours</td></tr>
      </tbody>
    </table>

    <p>The machine work finishes in hours and the people work takes weeks. Two points of review rate are worth 167 hours, more than any rounding in the processing time. So the lever that decides the schedule is how many pages a person has to touch, which depends on clean scans, sensible thresholds and per-field confidence. The measured trade-off for confidence thresholds, including the fact that some wrong values arrive with high scores, is in <a href="/resources/blogs/how-does-ocr-work">how OCR works</a>.</p>

    <h2>A pipeline script we ran</h2>

    <p>This is the shape of what we used for the scaling test, extended with the three things a real batch needs: a content-hash job ID, retries, and a failed list. We ran it on five good pages, one exact duplicate and one corrupt file.</p>

    <pre><code>import hashlib, subprocess, time, sys
from multiprocessing import Pool

def job_id(path):
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()[:16]

def ocr_one(path):
    jid, last = job_id(path), ""
    for attempt in range(3):
        r = subprocess.run(["tesseract", path, "stdout", "--psm", "3", "-l", "eng"],
                           capture_output=True, text=True)
        if r.returncode == 0 and r.stdout.strip():
            return jid, path, "done", r.stdout
        last = r.stderr.strip() or "empty output"
        time.sleep(2 ** attempt)             # growing delay between retries
    return jid, path, "failed", last

if __name__ == "__main__":
    paths = sys.argv[1:]
    seen, unique = set(), []
    for p in paths:                          # skip exact duplicate files
        j = job_id(p)
        if j not in seen:
            seen.add(j)
            unique.append(p)
    done, failed = {}, {}
    with Pool(8) as pool:
        for jid, path, status, payload in pool.imap_unordered(ocr_one, unique):
            (done if status == "done" else failed)[jid] = (path, payload)
    print("received", len(paths), "unique", len(unique), "done", len(done), "failed", len(failed))</code></pre>

    <p>The output on our test: received 7, unique 6, done 5, failed 1. The duplicate was skipped, and the corrupt file went to the failed list with its error attached instead of stopping the run. In production, persist the two dictionaries to a database so a restart resumes where it stopped, and cap the pool at what your hardware or plan allows.</p>

    <h2>The six parts of a pipeline that survives bad files</h2>

    <ol>
      <li><strong>A queue.</strong> Workers pull from it. A loop over a folder in one script loses its place on a crash.</li>
      <li><strong>A job ID per file.</strong> A hash of the contents means the same file arriving twice is visible, and a retry updates the same record.</li>
      <li><strong>Retries with backoff.</strong> Network errors and rate limits are normal at volume. Retry a few times with growing delays, then give up.</li>
      <li><strong>A failed list.</strong> Corrupt, encrypted and empty files end up here with the error, and a person looks once.</li>
      <li><strong>A confidence gate.</strong> Fields below your threshold go to review. <a href="/resources/blogs/how-to-measure-ocr-accuracy">How to measure OCR accuracy</a> shows how to choose it from a sample.</li>
      <li><strong>Counters.</strong> Files received should always equal done plus failed plus in review. If it does not, files are going missing.</li>
    </ol>

    <h2>Prepare the files before you send them</h2>

    <ul>
      <li><strong>Split combined scans.</strong> One 80-page scan is often 12 documents. Split at document boundaries so one bad page does not cost the other 79.</li>
      <li><strong>Fix orientation and tilt.</strong> A tilt past about 5 degrees collapsed accuracy in our tests, and straightening restored it. See <a href="/resources/blogs/document-detection-before-ocr">document detection before OCR</a>.</li>
      <li><strong>Drop blank pages.</strong> Duplex scanners create blank backs that add cost and noise.</li>
      <li><strong>Catch locked files.</strong> Password protected or corrupt PDFs fail every time, so move them to the failed list before the queue.</li>
      <li><strong>Keep the source path</strong> next to the content hash so a person can always find the original.</li>
    </ul>

    <h2>What to store, and how to keep review from becoming the bottleneck</h2>

    <table>
      <thead>
        <tr><th>Column</th><th>Why you need it</th></tr>
      </thead>
      <tbody>
        <tr><td>job_id (content hash) and source_path</td><td>Dedupe, safe retries, finding the original</td></tr>
        <tr><td>document_type and page_number</td><td>Report accuracy by type, trace a value to a page</td></tr>
        <tr><td>field_name, value and confidence</td><td>The data, and the basis for routing to review</td></tr>
        <tr><td>status</td><td>done, in_review, failed or accepted_by_reviewer</td></tr>
        <tr><td>reviewer_correction</td><td>Your best data for tuning thresholds</td></tr>
      </tbody>
    </table>

    <p>Design the review screen on purpose, because at volume it is where the hours go. Show the page image beside the value. Sort the riskiest items first. Group by document type so a reviewer builds speed on one layout. Let a reviewer accept a whole page in one click. And sample a small share of automatically accepted items, since that is how you find a quiet problem confidence scores do not reveal. Mixed streams need classification first, as in <a href="/resources/blogs/document-classification-software">document classification software</a>, and exact copies are only half of duplicates, as <a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection</a> explains.</p>

    <h2>Five numbers to watch while a batch runs</h2>

    <ul>
      <li><strong>Pages per minute:</strong> a sudden drop means a limit, a slow network or a stuck worker. Compare against the flat part of your own scaling curve.</li>
      <li><strong>Failure rate:</strong> a jump from 1 percent to 8 percent usually means a bad folder or a changed file source.</li>
      <li><strong>Review rate:</strong> a rise means a new document type or a worse scanner entered the stream.</li>
      <li><strong>Queue age:</strong> the oldest waiting job. If it keeps growing, workers cannot keep up.</li>
      <li><strong>Received versus accounted for:</strong> alert on any gap.</li>
    </ul>

    <h2>Local engine or cloud API for a large batch?</h2>

    <table>
      <thead>
        <tr><th>Question</th><th>Local engine (Tesseract, PaddleOCR)</th><th>Cloud API</th></tr>
      </thead>
      <tbody>
        <tr><td>Who sets the speed limit?</td><td>Your hardware: 2.21 pages per second on our 10-core Mac</td><td>Your plan's concurrency</td></tr>
        <tr><td>Cost shape</td><td>Servers and engineering time</td><td>Per page, from $0.02 for DocsAPI</td></tr>
        <tr><td>Tables and handwriting</td><td>Weaker: 64% for Tesseract on bank statement tables in our benchmark</td><td>Built for them: 91% for DocsAPI on the same test</td></tr>
        <tr><td>Where the data goes</td><td>Stays inside your environment</td><td>Sent to the provider, so check retention</td></tr>
      </tbody>
    </table>

    <p>If documents must never leave your environment, that points to a local engine. DocsAPI runs as a cloud API, and self-hosting is a question for the demo. The two free engines are compared in <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>, and the wider build-or-buy question for invoices is in <a href="/resources/blogs/build-vs-buy-invoice-ocr">build vs buy invoice OCR</a>. Large organizations often add requirements around access control and audit, which <a href="/resources/blogs/enterprise-document-ocr">enterprise document OCR</a> covers.</p>

    <h2>Security and retention for large batches</h2>

    <ul>
      <li>Know where files sit while they wait in your queue and who can read that storage.</li>
      <li>Ask how long documents and extracted data are kept. DocsAPI keeps them for a short, configurable retention period, then deletes them, and does not train on customer documents.</li>
      <li>Delete your own temporary copies when a batch completes, automatically.</li>
      <li>Keep an audit trail of job ID, time and reviewer without keeping the document longer than needed.</li>
      <li>If health data is involved, confirm a business associate agreement first. DocsAPI is HIPAA-eligible with a BAA.</li>
    </ul>

    <h2>Run a pilot before the full batch</h2>

    <p>Pull a random sample of 200 to 500 files from the real batch, including the ugly ones, and run them through the full pipeline with real reviewers. Record seconds per page, failure rate, review rate and cost, then scale up with the tables above. A scanner that produced upside-down pages for a month shows up in a sample of 500 and costs a day. It shows up in a full run of 500,000 and costs a rerun. <a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">Parallel-run sample size</a> explains how big a sample you need to trust the result. For invoice workloads, <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR</a> has a fill-in cost model, and <a href="/resources/blogs/month-end-ap-close-bottleneck">the month-end close bottleneck</a> shows where the hours go.</p>

    <p>DocsAPI processes about 4 million pages a month, so if your volume is in that range, raise concurrency, retention and support expectations in the demo. To see how engines compare by document type before you commit, read the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">benchmark</a>, and for how tables and fields fail and how to catch it, <a href="/resources/blogs/ocr-layout-analysis-and-key-value-extraction">OCR layout analysis, tested</a>.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 3, 2026",
  datePublished: "2026-11-03T00:00:00.000Z",
  dateModified: "2026-11-03T00:00:00.000Z",
  last_updated: "November 3, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "bulk ocr processing",
  secondary_keywords: [
    "batch ocr",
    "how to ocr thousands of documents",
    "high volume ocr",
    "ocr large number of pdfs",
    "bulk document ocr",
  ],
  tags: ["OCR", "bulk processing", "throughput", "pipeline", "cost"],
  cluster: "ai-doc",
  faq: [
    {
      question: "How do I OCR thousands of documents at once?",
      answer:
        "Put the files on a queue, process many pages in parallel, give each file an ID based on a hash of its contents so retries are safe, move files that keep failing to a separate list, and send low-confidence fields to a person for review.",
    },
    {
      question: "How many parallel workers should I run?",
      answer:
        "In our test on a 10-core Mac, throughput scaled almost linearly to 4 workers, reached 7.0 times a single worker at 8, and 7.8 times at 10. Eight workers delivered 90 percent of the ten-worker speed, so size the pool a little under your core count and measure the last step.",
    },
    {
      question: "How long does it take to OCR 100,000 pages?",
      answer:
        "On our 10-core Mac, Tesseract took 12.6 hours with 10 workers on dense full pages. For a cloud API at about 1.1 seconds per page, it is about 3.1 hours with 10 parallel requests and 37 minutes with 50. Page density moves these figures by a factor of two or more, so time a sample of your own files.",
    },
    {
      question: "Does scanning at a higher DPI slow OCR down?",
      answer:
        "Somewhat. In our test, seconds per page rose from 1.91 at 100 DPI to 3.79 at 300 and 4.75 at 600, so 36 times the pixels took 2.5 times as long. Dropping from 300 to 150 DPI saved 27 percent, which is safe for 8 to 10 point print but not for tiny footnotes.",
    },
    {
      question: "How much does bulk OCR cost?",
      answer:
        "DocsAPI starts at $0.02 per page, with volume discounts above 100,000 pages a month, so 100,000 pages is $2,000 at list price. Table extraction and classification are included. Add the cost of people reviewing the pages that fall below your confidence threshold, which usually outweighs the processing cost.",
    },
    {
      question: "What happens when some files in a batch fail?",
      answer:
        "A well-built pipeline retries a few times with growing delays, then moves the file to a failed list with the error attached. In our test run a corrupt file went to that list and the other files finished normally. You review the list once instead of rerunning the batch.",
    },
    {
      question: "How do I avoid processing the same document twice?",
      answer:
        "Use a hash of each file's contents as the job ID so exact copies match and are skipped. Near-duplicates, such as the same invoice scanned twice, need field-level matching on values like invoice number, date and total.",
    },
    {
      question: "Can DocsAPI handle high volumes?",
      answer:
        "DocsAPI processes about 4 million pages a month. Access starts with a demo, then a free 30-day trial for qualified lenders. Ask in the demo about concurrency, rate limits and retention for your volume.",
    },
  ],
}
