import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog28: BlogPost = {
  id: "new-28",
  title: "Real-Time Document Validation API: What It Checks and How Fast It Must Be",
  slug: "real-time-document-validation-api",
  excerpt:
    "A real-time document validation API returns a verdict while the user is still on the screen. Here are the eight checks, a latency budget for each, and how to keep the total under a few seconds.",
  description:
    "What a real-time document validation API checks, the latency each step can afford, and the design choices that keep the total fast. Budgets are targets, not measurements.",
  metaTag: "Real-Time Document Validation API: Checks and Latency",
  content: `
    <p>A real-time document validation API checks an uploaded document and returns a verdict while the user is still waiting on the screen. For most products that means under 5 seconds, for payments under 2, and for in-line fraud checks under 1. The verdict covers whether the file is valid, what type of document it is, what it says, whether the fields agree with each other, and whether it looks tampered with.</p>
    <p>This guide lists the eight checks, gives each a latency budget, and explains the design choices that keep the total inside the window. The budgets are targets to plan against. They are not measurements of any one product, so test a real vendor on your own documents before you trust a number.</p>

    <h2>How fast does a document validation API need to be?</h2>
    <p>It depends on what the user is doing while they wait. The table shows the windows we plan against and what happens past each one.</p>

    <table>
      <thead><tr><th>Total time</th><th>What the user feels</th><th>Typical use</th></tr></thead>
      <tbody>
        <tr><td>Under 1 second</td><td>Instant</td><td>In-line fraud check, a step inside a wizard</td></tr>
        <tr><td>1 to 3 seconds</td><td>Fast</td><td>Customer onboarding, payment verification</td></tr>
        <tr><td>3 to 10 seconds</td><td>Acceptable with a progress indicator</td><td>Mortgage qualification, multi-document KYC</td></tr>
        <tr><td>Over 10 seconds</td><td>People start to think it is broken</td><td>Treat it as a background job, not real-time</td></tr>
      </tbody>
    </table>

    <p>For reference, DocsAPI's published speed is about 1.1 seconds per page, including the network round trip. That figure is for reading a page. Every extra check you run on top of it, such as fraud or sanctions screening, adds its own time, which is why the budget below matters.</p>

    <h2>What are the eight checks in a validation pipeline?</h2>
    <p>Real-time validation is a pipeline of small checks, not one check. Each step below has a target budget. Add them up before you promise a total to your users.</p>

    <h3>1. File integrity</h3>
    <p>Is this a valid image or PDF? Check the file signature, the size limit and run a malware scan. Target: under 50 milliseconds.</p>

    <h3>2. Pre-processing</h3>
    <p>Straighten skewed scans, fix rotation and find the page edges. See the <a href="/resources/blogs/document-detection-before-ocr">document detection guide</a> for why this comes before reading. Target: under 200 milliseconds.</p>

    <h3>3. Classification</h3>
    <p>What is this: a driver's license, a bank statement, a W-2? The answer decides which fields to look for next. See <a href="/resources/blogs/document-classification-software">document classification</a>. Target: under 150 milliseconds.</p>

    <h3>4. OCR and field extraction</h3>
    <p>Read the text and pull the fields that belong to that document type. This is usually the slowest step. Target: 300 to 800 milliseconds, depending on how complex the document is.</p>

    <h3>5. Field-level validation</h3>
    <p>Are the fields filled in, and in the expected format? Do the built-in checksums pass, such as the machine-readable zone on a passport? Target: under 100 milliseconds.</p>

    <h3>6. Cross-field consistency</h3>
    <p>Do the fields agree with each other? Is the issue date before today, and does the date of birth fit the expiry date? Target: under 50 milliseconds.</p>

    <h3>7. Fraud detection</h3>
    <p>Look for tampering, template mismatches and image artifacts. The <a href="/resources/blogs/document-fraud-detection-api">document fraud detection guide</a> covers what these checks look for. Target: 200 to 400 milliseconds.</p>

    <h3>8. External reference checks</h3>
    <p>Sanctions lists, politically exposed person lists and fraud databases. These depend on outside services, so they vary the most. Target: 200 to 500 milliseconds. See <a href="/resources/blogs/real-time-sanctions-screening">real-time sanctions screening</a> for the difference between transaction speed and list freshness.</p>

    <p>If you ran all eight one after another at the top of each range, the total would be about 2.25 seconds. Running some of them in parallel brings the wait down to roughly the length of the slowest chain.</p>

    <h2>Worked example: the budget for an onboarding upload</h2>
    <p>Here is the arithmetic for one upload, using the top of each budget above. These are the targets from this guide, not measured numbers.</p>
    <table>
      <thead><tr><th>Step</th><th>Starts at</th><th>Ends at</th></tr></thead>
      <tbody>
        <tr><td>File integrity</td><td>0 ms</td><td>50 ms</td></tr>
        <tr><td>Pre-processing</td><td>50 ms</td><td>250 ms</td></tr>
        <tr><td>Classification</td><td>250 ms</td><td>400 ms</td></tr>
        <tr><td>OCR and extraction</td><td>400 ms</td><td>1,200 ms</td></tr>
        <tr><td>Fraud detection (runs alongside, once the image is ready)</td><td>250 ms</td><td>650 ms</td></tr>
        <tr><td>Field validation, then cross-field checks</td><td>1,200 ms</td><td>1,350 ms</td></tr>
        <tr><td>External reference checks (alongside field checks)</td><td>1,200 ms</td><td>1,700 ms</td></tr>
      </tbody>
    </table>
    <p>The verdict is ready at about 1.7 seconds, because the external checks are the last to finish. That is inside the 2-second payment window, with only 300 milliseconds to spare. If the external checks slow down, they are the ones to move to a webhook.</p>

    <h2>How do you keep the total under a few seconds?</h2>

    <h3>Run independent checks in parallel</h3>
    <p>Steps 1 to 4 depend on each other, so they run in order. After extraction, field validation, cross-field checks and external lookups can run at the same time, and fraud detection can start as soon as the image is ready. The wait is set by the slowest chain, not by the sum of all of them.</p>

    <h3>Stop early when a step fails</h3>
    <p>If the file is not a valid PDF, do not spend time reading it. If classification fails, skip the field checks that depend on it. Each step gates the next, and a failure returns right away with a clear reason.</p>

    <h3>Give every step a deadline</h3>
    <p>If reading takes too long, stop it and ask the user to re-upload a clearer copy. Most users prefer a fast retry to a slow success.</p>

    <h3>Move slow checks to a webhook</h3>
    <p>Some checks, such as a full sanctions screening with a list refresh, cannot finish in two seconds. Return the fast results at once, mark the slow check as pending, and deliver its result by webhook when it completes.</p>

    <h3>Return the same answer for the same file</h3>
    <p>If a user uploads the same document twice because of a retry or an error, return the stored result instead of running the pipeline again.</p>

    <h2>What makes a real-time validation pipeline slow?</h2>
    <ul>
      <li><strong>Everything runs in sequence.</strong> Checks that could run together wait in a line, and the total grows by the sum of the steps.</li>
      <li><strong>No per-step timing.</strong> Without median and 95th-percentile times for each step, you cannot see which one is the problem. A pipeline that feels slow usually has one step that occasionally takes many seconds.</li>
      <li><strong>All-or-nothing failure.</strong> If one check fails and the whole request fails with it, the user gets nothing. Return what you have, mark what failed, and route the rest to human review.</li>
    </ul>

    <h2>What should a pipeline return?</h2>
    <p>A useful response has three parts: a verdict (pass, review or reject), the extracted fields with a confidence for each, and a list of which checks ran and which are still pending. A pending webhook check should show up as pending, not as passed.</p>

    <h2>Should you build or buy a real-time validation pipeline?</h2>
    <p>For most teams, buy. Getting eight checks under a few seconds needs ongoing work on extraction speed, fraud models and external data feeds. If you want to compare buying against building, the <a href="/resources/blogs/build-vs-buy-invoice-ocr">build vs buy guide</a> shows the same trade-off for invoices.</p>
    <p>When you evaluate vendors, ask for median and 95th-percentile latency on a document like yours, and ask which checks run before the answer comes back and which arrive later by webhook. A vendor who cannot answer in seconds is probably not built for real-time. For the accuracy side of the same question, see the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>, and for identity documents see <a href="/resources/blogs/kyc-document-verification">KYC document verification</a>.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "AI Document Intelligence",
  date: "June 18, 2026",
  datePublished: "2026-06-18T00:00:00.000Z",
  dateModified: "2026-10-29T00:00:00.000Z",
  last_updated: "October 29, 2026",
  readTime: "6 min read",
  author: nupuraUghade,
  primary_keyword: "real-time document validation api",
  secondary_keywords: [
    "automated document verification software api",
    "real-time automated document validation api for payroll",
    "document validation api",
    "real-time kyc api",
    "instant document verification",
    "automated document verification",
  ],
  tags: ["validation", "API", "real-time", "KYC"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is a real-time document validation API?",
      answer:
        "A real-time document validation API takes an uploaded document and returns a verdict while the user waits. The verdict covers file validity, document type, extracted fields, consistency between fields, fraud signals and external list checks. Most products aim for under 5 seconds, and payment flows aim for under 2.",
    },
    {
      question: "How fast does real-time need to be?",
      answer:
        "It depends on the workflow. In-line fraud checks need under 1 second, payment verification under 2, and onboarding can tolerate 5 to 10 seconds with a progress indicator. Past 10 seconds, treat it as a background job.",
    },
    {
      question: "Can a real-time API replace human review?",
      answer:
        "Not fully. The API can pass documents that clear every check, but low-confidence, ambiguous or flagged documents still need a person. Route those to review instead of forcing a pass or a reject.",
    },
    {
      question: "How much time does fraud detection add?",
      answer:
        "We plan for 200 to 400 milliseconds for fraud checks, and we run them in parallel with extraction so they do not add to the wait. This is a planning target, not a measured result for any one product.",
    },
    {
      question: "Should I build or buy a real-time validation pipeline?",
      answer:
        "For most teams, buy. Keeping eight checks inside a few seconds takes ongoing work on extraction speed, fraud models and external data. Ask vendors for median and 95th-percentile latency on a document like yours.",
    },
    {
      question: "How does this compare to a payroll-specific validation API?",
      answer:
        "The pipeline is the same. Payroll validation uses different field templates, for pay stubs, tax withholding forms and direct deposit instructions, but the same checks and latency budget apply.",
    },
  ],
}
