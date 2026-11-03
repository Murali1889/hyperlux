import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog37: BlogPost = {
  id: "new-37",
  title: "Bulk OCR: How to Process Thousands of Documents Without Losing Track",
  slug: "bulk-and-high-volume-ocr-processing",
  excerpt:
    "To OCR thousands of documents, run many pages in parallel, give every job an ID so it can be retried safely, and route low-confidence results to a person. Here is the throughput math, the cost math, and a checklist for a pipeline that survives bad files.",
  description:
    "How to OCR thousands of documents fast: throughput and cost math at 1.1 seconds and $0.02 per page, a parallel worker sketch, and a checklist for retries and review.",
  metaTag: "Bulk OCR: Process Thousands of Documents (2026 Guide)",
  summary:
    "Bulk OCR is a queue problem more than an accuracy problem. Run pages in parallel, make every job safe to retry, and send low-confidence fields to review. At about 1.1 seconds per page, 100,000 pages take roughly 3 hours with 10 parallel requests.",
  content: `
    <p>To OCR thousands of documents quickly, put each file in a queue, process many pages in parallel, give every job a unique ID so a failed job can be retried without creating duplicates, and send low-confidence results to a person instead of trusting them. At about 1.1 seconds per page, 100,000 pages take roughly 3 hours with 10 requests running at once. The rest of this guide shows the math and the parts that break first.</p>

    <p>Speed is the easy half of bulk OCR. The harder half is what happens when 400 files out of 50,000 are corrupt, password protected, upside down or in a language nobody planned for, and you need to know which ones, without rerunning the whole batch. A pipeline that processes fast but loses track of failures is worse than a slow one that does not.</p>

    <h2>How long will my batch take?</h2>

    <p>Use this formula: <strong>hours = total pages x seconds per page / parallel requests / 3,600</strong>. Our benchmark measured about 1.1 seconds per page for DocsAPI, including the network round trip. Treat that as a planning number and time a sample of your own files, since page complexity changes it.</p>

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

    <p>Two cautions on these numbers. First, they assume pages are independent, so a 40-page statement counts as 40 pages. Second, the parallel columns assume your plan allows that many simultaneous requests. Ask what concurrency and rate limits apply to you before you plan a deadline around them. Local engines have a different ceiling: in our benchmark Tesseract took about 1.8 seconds per page on a mid-tier laptop CPU, and PaddleOCR 0.4 seconds with a GPU, so the same batch is limited by your own hardware.</p>

    <h2>What will it cost?</h2>

    <p>DocsAPI pricing starts at $0.02 per page, with volume discounts above 100,000 pages a month. Table extraction and classification are included in that price. At list price that is $2,000 for 100,000 pages and $20,000 for 1,000,000 pages, before any volume discount. Access starts with a demo, then a free 30-day trial for qualified lenders. Current terms are on the <a href="/pricing">pricing page</a>.</p>

    <p>Cost per page is not the whole bill. Add the people cost of reviewing exceptions: if 5 percent of pages need a person for two minutes, 100,000 pages is 5,000 reviews, about 167 hours. Cutting the review rate by one point saves more than a small price difference between vendors. The <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR guide</a> has a fill-in cost model you can copy for your own numbers.</p>

    <h2>The six parts of a pipeline that survives bad files</h2>

    <ol>
      <li><strong>A queue.</strong> Files go onto a queue first and workers pull from it. Do not loop over a folder in one script, because one crash loses your place.</li>
      <li><strong>A job ID per file.</strong> Use a hash of the file contents. If the same file arrives twice, you can see it and skip it, and a retry updates the same record instead of creating a second one.</li>
      <li><strong>Retries with backoff.</strong> Network errors and rate limits are normal at volume. Retry a few times with growing delays, then move the job to a failed list.</li>
      <li><strong>A dead-letter list.</strong> Files that keep failing go here with the error attached. Corrupt, encrypted and empty files end up here, and a person looks at them once instead of the pipeline stalling.</li>
      <li><strong>A confidence gate.</strong> Fields below your threshold go to review. See <a href="/resources/blogs/how-to-measure-ocr-accuracy">how to measure OCR accuracy</a> for choosing a threshold from a real sample instead of a guess.</li>
      <li><strong>Counters.</strong> Track files received, processed, failed and in review. At any moment, received should equal the other three added together. If it does not, files are going missing.</li>
    </ol>

    <h2>A parallel worker sketch</h2>

    <p>This shows the shape of the loop. <code>extract</code> is a placeholder for whichever OCR call you use, so swap in your own.</p>

    <pre><code>import hashlib
from concurrent.futures import ThreadPoolExecutor, as_completed

def job_id(path):
    with open(path, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()

def run(path):
    jid = job_id(path)
    for attempt in range(4):
        try:
            return jid, extract(path)          # your OCR call
        except Exception as err:
            last = err
    return jid, {"failed": str(last)}

done, failed = {}, {}
with ThreadPoolExecutor(max_workers=10) as pool:
    futures = [pool.submit(run, p) for p in paths]
    for fut in as_completed(futures):
        jid, result = fut.result()
        (failed if "failed" in result else done)[jid] = result</code></pre>

    <p>In production add a delay between retries, persist <code>done</code> and <code>failed</code> to a database so a restart resumes where it stopped, and cap the worker count at what your plan allows.</p>

    <h2>What breaks first at volume</h2>

    <ul>
      <li><strong>Mixed document types.</strong> A folder of 50,000 files is rarely one type. Classify first, then route, as covered in <a href="/resources/blogs/document-classification-software">document classification software</a>.</li>
      <li><strong>Duplicates.</strong> The same invoice arrives by email and by upload. Hashing catches exact copies. Near-duplicates need field-level matching, covered in <a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection</a>.</li>
      <li><strong>Bad scans hiding in the average.</strong> A 96 percent average can hide a batch of faded receipts at 60 percent. Track accuracy by document type, not overall. Our benchmark shows the gap: phone-photographed receipts scored 58% to 82% across engines, against 97-99% on clean typed text.</li>
      <li><strong>Sensitive data sitting in your queue.</strong> Know how long documents are kept. DocsAPI does not train on customer documents, and keeps documents and extracted data only for a short, configurable retention period before deleting them.</li>
    </ul>

    <h2>Run a pilot before the full batch</h2>

    <p>Pull a random sample of 200 to 500 files from the real batch, not the cleanest ones. Run them through the full pipeline, including failures and review. Measure time per page, failure rate, review rate and cost, then scale the figures up with the table above. Our <a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">guide to parallel-run sample size</a> explains how big a sample you need to trust the result.</p>

    <p>For a comparison of which engine suits which document type before you commit to a large run, see <a href="/resources/blogs/ocr-accuracy-benchmark-2026">our 1,700-document benchmark</a>. DocsAPI processes about 4 million pages a month, and if your volume is in that range, raise concurrency, retention and support expectations in the demo.</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "AI Document Intelligence",
  date: "November 3, 2026",
  datePublished: "2026-11-03T00:00:00.000Z",
  dateModified: "2026-11-03T00:00:00.000Z",
  last_updated: "November 3, 2026",
  readTime: "8 min read",
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
      question: "How long does it take to OCR 100,000 pages?",
      answer:
        "At about 1.1 seconds per page, including the network round trip, it takes about 30.6 hours one request at a time, about 3.1 hours with 10 requests in parallel and about 37 minutes with 50 in parallel. Time a sample of your own files, since page complexity changes the figure.",
    },
    {
      question: "How much does bulk OCR cost?",
      answer:
        "DocsAPI starts at $0.02 per page, with volume discounts above 100,000 pages a month, so 100,000 pages is $2,000 at list price before any discount. Table extraction and classification are included. Add the cost of people reviewing the pages that fall below your confidence threshold.",
    },
    {
      question: "Should I run OCR locally or use a cloud API for large batches?",
      answer:
        "Locally, the limit is your own hardware: in our benchmark Tesseract took about 1.8 seconds per page on a mid-tier laptop CPU and PaddleOCR 0.4 seconds with a GPU. A cloud API removes the hardware work and charges per page, but your plan sets the concurrency, so ask for the limits.",
    },
    {
      question: "What happens when some files in a batch fail?",
      answer:
        "A well-built pipeline retries a few times with growing delays, then moves the file to a failed list with the error attached. Corrupt, encrypted and empty files usually end up there. You review that list once instead of rerunning the whole batch.",
    },
    {
      question: "How do I avoid processing the same document twice?",
      answer:
        "Compute a hash of each file's contents and use it as the job ID. Exact copies then match and can be skipped. Near-duplicates, such as the same invoice scanned twice, need field-level matching on values like invoice number, date and total.",
    },
    {
      question: "How do I know the batch results are accurate?",
      answer:
        "Do not rely on one overall average. Track accuracy by document type, and use a sample of real files with known correct values. Route fields below a confidence threshold to review and count how many pages that is.",
    },
    {
      question: "Can DocsAPI handle high volumes?",
      answer:
        "DocsAPI processes about 4 million pages a month. Access starts with a demo, then a free 30-day trial for qualified lenders. Ask in the demo about concurrency, rate limits and retention for your volume.",
    },
  ],
}
