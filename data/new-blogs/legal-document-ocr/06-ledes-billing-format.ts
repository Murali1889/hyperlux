import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd06: BlogPost = {
  id: "ld-06",
  title: "LEDES Billing Format: Why Law Firm Invoices Get Rejected",
  slug: "ledes-billing-format",
  excerpt:
    "LEDES 1998B has exactly 24 fields in a fixed order. Get one wrong and the invoice bounces. The real structure, the UTBMS codes, and the validation rules.",
  description:
    "A field-by-field breakdown of LEDES 1998B and LEDES XML, the UTBMS codes they carry, and the validation rules that actually reject law firm e-billing invoices.",
  metaTag: "LEDES Billing Format: The Real Field Structure Explained",
  content: `
    <p>A law firm sends a perfectly correct invoice: the hours are right, the rate is right, the narrative is honest, the client agreed to every dollar on it. The client's e-billing system rejects it anyway, not because anything about the legal work is wrong, but because line 14 of the file has 23 pipe-delimited fields instead of 24. Nobody misspelled anything. A comma-separated export tool dropped one blank field at the end of a row, and a format built in 1998 has no tolerance for that. This happens constantly in legal billing, and it is the reason the phrase "ledes billing format" shows up in support tickets more often than in marketing copy. Firms that process high volumes of legal invoices, or build document intelligence into their <a href="/documents/legal-docs">legal document workflows</a>, eventually have to understand LEDES at the field level, not the marketing-page level, because that is the level where files actually fail.</p>

    <h2>LEDES is a family of formats, not one file type</h2>

    <p>LEDES stands for Legal Electronic Data Exchange Standard, and it did not start as a legal-industry committee project. It began in 1995 as an initiative coordinated by Price Waterhouse (before the PwC merger), building a common file format so corporate legal departments could pull invoice data out of law firm billing systems without a human retyping every line. The organization that maintains it today, the LEDES Oversight Committee, incorporated as a California nonprofit in 2001 and still governs the spec through a small board.</p>

    <p>Since then the standard has split into two lineages that solve different problems. The flat-file lineage (LEDES 1998B, and its expense-heavy sibling LEDES 1998BI) is a plain ASCII text file, pipe-delimited, one line per invoice header or line item. The XML lineage (LEDES XML 2000, then XML 2.0, then 2.1, then 2.2) is a hierarchical, schema-validated format built for richer data: multi-currency invoices, tax handling, credit notes, and international billing that the flat file was never designed to carry. Each XML revision added structure. XML 2.0, released in 2006, defined 15 segments and 156 data elements. XML 2.1, in 2008, expanded that to 16 segments and 194 elements to support withholding tax and credit notes. XML 2.2, ratified in 2020, reached 18 segments and 206 elements, adding tiered tax support for jurisdictions where a single flat tax rate does not apply. Despite all that, LEDES 1998B remains the format most US law firms and e-billing platforms actually exchange day to day, because it is simple enough that almost every practice management system can export it, and most corporate legal departments still accept it as the baseline.</p>

    <h2>Inside a LEDES 1998B file: the 24 fields in exact order</h2>

    <p>This is the part almost nothing written about LEDES actually shows: what the 24 fields are, in the order the spec defines them. A LEDES 1998B file opens with a literal header line, <code>LEDES1998B[]</code>, followed by the field names in brackets separated by pipes, and every subsequent line is data in that same field order, separated by pipes. Get the count or the order wrong on any line and a compliant parser rejects the whole file, not just the bad line, because the header line is the contract for every row that follows.</p>

    <table>
      <thead><tr><th>#</th><th>Field name</th><th>What it carries</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>INVOICE_DATE</td><td>Date the invoice was issued</td></tr>
        <tr><td>2</td><td>INVOICE_NUMBER</td><td>Law firm's unique invoice identifier</td></tr>
        <tr><td>3</td><td>CLIENT_ID</td><td>Corporate client's ID for the billing party</td></tr>
        <tr><td>4</td><td>LAW_FIRM_MATTER_ID</td><td>The matter number as the firm tracks it</td></tr>
        <tr><td>5</td><td>INVOICE_TOTAL</td><td>Sum of all line items on the invoice</td></tr>
        <tr><td>6</td><td>BILLING_START_DATE</td><td>First date of the billing period</td></tr>
        <tr><td>7</td><td>BILLING_END_DATE</td><td>Last date of the billing period</td></tr>
        <tr><td>8</td><td>INVOICE_DESCRIPTION</td><td>Free-text summary of the invoice</td></tr>
        <tr><td>9</td><td>LINE_ITEM_NUMBER</td><td>Sequential line number within the invoice</td></tr>
        <tr><td>10</td><td>EXP/FEE/INV_ADJ_TYPE</td><td>Whether the line is a fee, expense, or adjustment</td></tr>
        <tr><td>11</td><td>LINE_ITEM_NUMBER_OF_UNITS</td><td>Hours (fees) or quantity (expenses)</td></tr>
        <tr><td>12</td><td>LINE_ITEM_ADJUSTMENT_AMOUNT</td><td>Any write-down or write-up applied to the line</td></tr>
        <tr><td>13</td><td>LINE_ITEM_TOTAL</td><td>Billed amount for the line, after adjustment</td></tr>
        <tr><td>14</td><td>LINE_ITEM_DATE</td><td>Date the work or expense occurred</td></tr>
        <tr><td>15</td><td>LINE_ITEM_TASK_CODE</td><td>UTBMS task code (e.g. L110)</td></tr>
        <tr><td>16</td><td>LINE_ITEM_EXPENSE_CODE</td><td>UTBMS expense code (e.g. E106), blank on fee lines</td></tr>
        <tr><td>17</td><td>LINE_ITEM_ACTIVITY_CODE</td><td>UTBMS activity code (e.g. A102), blank on expense lines</td></tr>
        <tr><td>18</td><td>TIMEKEEPER_ID</td><td>Law firm's internal ID for the person who did the work</td></tr>
        <tr><td>19</td><td>LINE_ITEM_DESCRIPTION</td><td>The narrative explaining what was done</td></tr>
        <tr><td>20</td><td>LAW_FIRM_ID</td><td>The firm's identifier in the client's system</td></tr>
        <tr><td>21</td><td>LINE_ITEM_UNIT_COST</td><td>Hourly rate (fees) or unit price (expenses)</td></tr>
        <tr><td>22</td><td>TIMEKEEPER_NAME</td><td>Name of the timekeeper</td></tr>
        <tr><td>23</td><td>TIMEKEEPER_CLASSIFICATION</td><td>Role, e.g. Partner, Associate, Paralegal</td></tr>
        <tr><td>24</td><td>CLIENT_MATTER_ID</td><td>The matter number as the client's own system tracks it</td></tr>
      </tbody>
    </table>

    <p>Notice how much of a single invoice line is actually about identity matching rather than the work itself: fields 3, 4, 18, 20, and 24 all exist to reconcile the law firm's internal IDs against the client's internal IDs. That reconciliation, not the narrative text, is where a large share of real rejections originate, because LAW_FIRM_MATTER_ID and CLIENT_MATTER_ID have to match values the client's e-billing system already has on file, exactly, including case sensitivity in some platforms.</p>

    <h2>What UTBMS task and activity codes actually encode</h2>

    <p>UTBMS, the Uniform Task-Based Management System, is the coding layer that rides inside fields 15 through 17. It was developed jointly by the American Bar Association's Section of Litigation and the Association of Corporate Counsel (then the American Corporate Counsel Association), with Price Waterhouse coordinating the original effort, so that legal spend could be compared across firms doing the same category of work. In April 2006 a separate UTBMS Update Initiative merged into the LEDES Oversight Committee, which now maintains the full code set as the single reference at utbms.com. The codes are not one flat list. They are organized into separate code sets for different practice areas, and a line item's task code has to come from the set that actually matches the matter type.</p>

    <table>
      <thead><tr><th>Code set</th><th>Practice area</th><th>Range</th></tr></thead>
      <tbody>
        <tr><td>L100-L500</td><td>Litigation: case assessment, pre-trial, discovery, trial prep, appeal</td><td>Core litigation phases</td></tr>
        <tr><td>L600-L690</td><td>eDiscovery (identification, collection, review, production)</td><td>Ratified in 2011</td></tr>
        <tr><td>B100-B400</td><td>Bankruptcy: administration, operations, claims/plan, advice</td><td>Bankruptcy matters</td></tr>
        <tr><td>C100-C400</td><td>Counseling: fact gathering, research, analysis, communication</td><td>Advisory/non-litigation</td></tr>
        <tr><td>P100-P800</td><td>Project: administration through maintenance tasks</td><td>Corporate/project work</td></tr>
        <tr><td>PA100-PA700</td><td>Patent prosecution, domestic and international</td><td>IP: patent</td></tr>
        <tr><td>TR100-TR799</td><td>Trademark prosecution and maintenance</td><td>IP: trademark</td></tr>
      </tbody>
    </table>

    <p>Activity codes describe the action taken, independent of subject matter, so the same activity code set applies across all the task code sets above. The core activity codes are A101 (plan and prepare for), A102 (research), A103 (draft/revise), A104 (review/analyze), A105 (communicate, in firm), A106 (communicate, with client), A107 (communicate, with other outside counsel), A108 (communicate, other external), and A109 (appear for/attend), with additional codes covering more specialized functions like document review culling and quality control on larger e-discovery matters. Expense codes follow the same pattern in field 16: E101 is copying, E106 is online research, E110 is out-of-town travel, E112 is court fees, E119 is experts, and the range runs up through E131 for late fees, with a few IP-specific codes (E125-E131) added later for patent and trademark filing costs like drawings and official fees. A single fee line item needs exactly one task code and one activity code from a set that matches the matter type. An expense line needs an expense code and leaves the activity code blank. Get the wrong set (using a litigation L-code on a bankruptcy matter) and the file can be perfectly well-formed and still fail a client's coding rules.</p>

    <h2>A worked example: building one valid LEDES 1998B line and checking the math</h2>

    <p>Take a single fee entry: an associate spent 2.5 hours researching case precedent. Task code L110 (fact investigation and development, under the L100 case-assessment series), activity code A102 (research), rate $450 per hour. The line item total field is not free text, it is a computed value the parser checks: LINE_ITEM_NUMBER_OF_UNITS multiplied by LINE_ITEM_UNIT_COST, adjusted by LINE_ITEM_ADJUSTMENT_AMOUNT, has to equal LINE_ITEM_TOTAL exactly. Here, 2.5 times $450.00 is $1,125.00, so if the adjustment amount is 0.00, LINE_ITEM_TOTAL must read exactly 1125.00. If the firm's billing software rounds hours to two decimal places internally but the LEDES export truncates to one decimal, the computed total can come out a cent or two off from what a strict validator recomputes, and that mismatch alone is a common, entirely avoidable rejection.</p>

    <p>The same check runs one level up. INVOICE_TOTAL (field 5) has to equal the sum of every LINE_ITEM_TOTAL on the invoice. On an invoice with 40 line items, if one line is accidentally coded as an adjustment type instead of a fee type, it can get excluded from the client system's line-item sum while still being counted in the firm's own INVOICE_TOTAL calculation, producing a total that is off by exactly that one line's value. That kind of mismatch is trivial to spot once you know to recompute both sums independently and compare them, which is exactly what a validation pipeline has to do before a file ever reaches a human reviewer.</p>

    <h2>Why law firm invoices actually get rejected</h2>

    <p>Rejections split into three layers, and they get progressively harder to catch. The first layer is file structure: the header line has to be the literal string <code>LEDES1998B[]</code> with the field names in brackets, every data row needs exactly 24 pipe-delimited values in the defined order, and dates need to parse in the format the receiving system expects. A dropped field, an extra pipe inside a narrative that was not escaped, or a header that does not match the field list exactly will bounce the file before anyone even looks at the content. This layer is almost entirely mechanical and is the easiest to automate away.</p>

    <p>The second layer is code validity. The task code has to exist in the code set that matches the matter type, the activity code has to be a real UTBMS code, and increasingly, the specific task-activity combination has to be one the client's outside counsel guidelines actually permit. Some corporate legal departments explicitly block certain codes, for example refusing to pay for A105 (communicate, in firm) above a capped percentage of total hours, on the theory that internal law-firm coordination time should not be billed to the client at full rate. A file can be structurally perfect and still fail here because the codes are valid UTBMS codes, just not codes this particular client will pay for.</p>

    <p>The third layer is referential and business-rule validation, and it is the layer human reviewers still catch things a parser cannot. CLIENT_ID, LAW_FIRM_MATTER_ID, and CLIENT_MATTER_ID all have to match records the receiving e-billing platform already has on file for that matter, which means a new associate added to a matter without their TIMEKEEPER_ID being pre-approved in the client's system will cause every line that timekeeper touched to reject, even though nothing about the invoice format is wrong. This is also where rate validation lives: TIMEKEEPER_CLASSIFICATION and LINE_ITEM_UNIT_COST get checked against the rate the client agreed to for that classification, and a rate that drifted above the approved cap, even by a dollar, fails here.</p>

    <h2>Block billing and narrative rules: the layer nobody's parser catches</h2>

    <p>One rejection reason is worth calling out separately because it lives entirely in field 19, LINE_ITEM_DESCRIPTION, and no amount of structural validation will find it. Block billing is when a single line item's narrative describes several distinct activities compressed into one time entry and one number of hours, for example "Reviewed discovery documents, drafted motion to compel, and communicated with client regarding strategy, 4.5 hours" tagged under one task and activity code. The problem is not that the format is wrong. Every field parses fine. The problem is that the narrative describes review work (A104), drafting work (A103), and client communication (A106) as if they were one activity, which makes it impossible for the client to see how much of that 4.5 hours went to each. Most outside counsel guidelines explicitly prohibit block billing and require each distinct activity to get its own line item with its own accurate code, and e-billing platforms increasingly run narrative text through pattern checks looking for multiple activity verbs, vague phrases like "various" or "miscellaneous," or narratives under a minimum character length, flagging entries for manual audit even when the file itself is fully valid LEDES.</p>

    <h2>LEDES 1998B versus LEDES XML: when the flat file breaks down</h2>

    <p>The flat file works well until an invoice needs to carry information the 24-field structure was never built for. A few concrete limits: LEDES 1998B has no native field for tax on legal fees, which matters for firms billing clients in jurisdictions with VAT or GST on professional services. It also repeats invoice-level fields (INVOICE_DATE, INVOICE_TOTAL, CLIENT_ID, and others) on every single line item row, which is redundant but was a deliberate simplicity tradeoff so each line could be parsed independently. LEDES XML fixes both, at the cost of needing a schema-aware parser instead of a simple split-on-pipe read.</p>

    <table>
      <thead><tr><th>Format</th><th>Structure</th><th>Tax support</th><th>Best fit</th></tr></thead>
      <tbody>
        <tr><td>LEDES 1998B</td><td>Flat, pipe-delimited, 24 fields</td><td>None</td><td>Domestic US fee and expense billing</td></tr>
        <tr><td>LEDES 1998BI</td><td>Flat, expanded expense detail</td><td>Limited</td><td>Firms with heavy itemized expenses</td></tr>
        <tr><td>LEDES XML 2.1</td><td>16 segments, 194 elements</td><td>Withholding tax, credit notes</td><td>Cross-border billing</td></tr>
        <tr><td>LEDES XML 2.2</td><td>18 segments, 206 elements</td><td>Tiered tax</td><td>Multi-jurisdiction, complex tax regimes</td></tr>
      </tbody>
    </table>

    <p>In practice, most firms only move to XML when a specific client's e-billing platform requires it, because the flat file remains cheaper to generate from standard practice management exports. For a broader look at how legal documents get processed beyond billing, our <a href="/resources/blogs/contract-ocr">contract OCR guide</a> covers the extraction side of legal document intelligence, since a firm's billing narratives and its underlying contracts are often processed by related tooling.</p>

    <h2>What a real LEDES processing pipeline has to enforce</h2>

    <p>Building or evaluating a LEDES processing pipeline means implementing checks at each of the three layers described above, in order, because later checks are wasted effort if earlier ones fail.</p>

    <ol>
      <li><strong>Structural parse:</strong> verify the header line matches <code>LEDES1998B[]</code> with the exact 24 field names, confirm every data row has 24 pipe-delimited values, and reject (with a specific line number) any row that does not.</li>
      <li><strong>Type and format checks:</strong> dates parse correctly, numeric fields (units, unit cost, totals, adjustment amount) are actually numeric, and TIMEKEEPER_CLASSIFICATION matches an allowed value set.</li>
      <li><strong>Math validation:</strong> recompute LINE_ITEM_TOTAL from units, unit cost, and adjustment for every line, recompute INVOICE_TOTAL as the sum of all line totals, and flag any mismatch beyond a defined rounding tolerance.</li>
      <li><strong>Code validity:</strong> confirm each task code belongs to the code set appropriate for the matter type, each activity code is a real UTBMS code, expense lines carry an expense code and blank activity code, and fee lines carry activity and task codes with blank expense code.</li>
      <li><strong>Referential match:</strong> confirm CLIENT_ID, LAW_FIRM_MATTER_ID, CLIENT_MATTER_ID, LAW_FIRM_ID, and TIMEKEEPER_ID against records already on file for that matter, since these are the fields most often stale after staffing changes.</li>
      <li><strong>Guideline and narrative rules:</strong> apply the client's specific outside counsel guidelines, rate caps by classification, blocked or capped task-activity combinations, minimum narrative length, and block-billing pattern detection.</li>
    </ol>

    <p>Each of those six steps produces a specific, actionable rejection reason rather than a generic "invalid file" message, which is the difference between a pipeline a billing team can actually use and one that just adds another opaque failure point between the firm and getting paid.</p>

    <h2>Where OCR and document intelligence fit into LEDES processing</h2>

    <p>Not every invoice a corporate legal department receives arrives as clean LEDES data. Smaller firms, solo practitioners, and firms using older practice management systems still send PDF invoices, sometimes scanned, sometimes generated straight from a word processor with no export capability at all. Getting that invoice into valid LEDES 1998B or XML means first extracting the same structured data the LEDES fields expect (timekeeper names, dates, hours, rates, narratives, and, if the firm coded it internally, task and activity codes) out of an unstructured document layout that varies firm to firm. That extraction step is document OCR and layout parsing, not billing logic, and it has to run before any of the validation described above is even possible. A document intelligence pipeline built for legal invoices has to combine layout-aware OCR to read the source document with a mapping layer that places extracted values into the correct LEDES fields and, where the source invoice never had UTBMS codes at all, a classification step that assigns them based on the narrative text. Getting that mapping right up front avoids exactly the kind of field-count and math mismatches described earlier, since a pipeline that extracts LINE_ITEM_NUMBER_OF_UNITS and LINE_ITEM_UNIT_COST directly from the source document, rather than having a person retype them, cannot introduce the rounding drift that causes so many LINE_ITEM_TOTAL mismatches in practice, the same line-item math validation problem covered from the vendor-invoice side in our <a href="/resources/blogs/invoice-line-item-ocr">invoice line item OCR</a> guide. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a>.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Legal",
  date: "September 4, 2026",
  datePublished: "2026-09-04T00:00:00.000Z",
  dateModified: "2026-09-28T00:00:00.000Z",
  last_updated: "September 28, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "ledes billing format",
  secondary_keywords: [
    "ledes billing software",
    "LEDES 1998B format",
    "UTBMS task codes",
    "LEDES XML",
    "legal e-billing validation",
    "law firm invoice rejection",
    "UTBMS activity codes",
  ],
  tags: ["legal", "billing", "LEDES", "UTBMS", "e-billing", "OCR"],
  cluster: "legal",
  faq: [
    {
      question: "What is the LEDES billing format?",
      answer:
        "LEDES (Legal Electronic Data Exchange Standard) is a family of file formats law firms use to submit invoices electronically to corporate legal departments and e-billing platforms. The most common version, LEDES 1998B, is a plain-text, pipe-delimited file with exactly 24 fields per line covering invoice totals, line items, timekeeper details, and UTBMS billing codes. Newer XML versions (2.0, 2.1, 2.2) add support for tax, multi-currency, and credit notes that the flat file cannot carry.",
    },
    {
      question: "How many fields does a LEDES 1998B file have?",
      answer:
        "Exactly 24, in a fixed order: from INVOICE_DATE and CLIENT_ID through line-item details like LINE_ITEM_TASK_CODE, LINE_ITEM_ACTIVITY_CODE, TIMEKEEPER_ID, and ending with CLIENT_MATTER_ID. The header line must read LEDES1998B[] followed by the field names, and every data row must contain all 24 pipe-delimited values in that same order or the file is rejected.",
    },
    {
      question: "What are UTBMS task and activity codes?",
      answer:
        "UTBMS (Uniform Task-Based Management System) codes classify legal work so spend can be compared across matters and firms. Task codes describe the phase of work and come from a set matched to the matter type, for example L100-L500 for litigation or B100-B400 for bankruptcy. Activity codes describe the specific action taken, such as A102 for research or A104 for review and analysis, and apply across all task code sets. A valid fee line needs one task code and one activity code from matching sets.",
    },
    {
      question: "Why do law firm invoices get rejected by e-billing systems?",
      answer:
        "Rejections happen at three layers. Structural failures come from field-count mismatches, a malformed header line, or bad date formats. Code-validity failures come from using a task code outside the correct practice-area set or a task-activity combination the client's billing guidelines block. Referential failures come from IDs (client, matter, timekeeper) that do not match records already on file, often after staffing changes. A file can pass one layer and still fail another.",
    },
    {
      question: "What is block billing and why does it cause rejections?",
      answer:
        "Block billing is combining several distinct activities, such as document review, drafting, and a client call, into one time entry with one number of hours and one task or activity code. It parses as valid LEDES, but it hides how time was actually allocated, and most outside counsel guidelines explicitly prohibit it. E-billing platforms flag narratives that describe multiple activity verbs or fall under a minimum length for manual audit, separate from any structural validation.",
    },
    {
      question: "How is LEDES XML different from LEDES 1998B?",
      answer:
        "LEDES 1998B is a flat, pipe-delimited file with 24 fields and no native tax support, which keeps it simple but repeats invoice-level data on every line. LEDES XML is hierarchical and schema-validated: XML 2.1 defines 16 segments and 194 data elements with withholding tax and credit note support, and XML 2.2 expands to 18 segments and 206 elements with tiered tax support for multi-jurisdiction billing. Most US firms still default to 1998B unless a specific client requires XML.",
    },
    {
      question: "What does LEDES billing software do?",
      answer:
        "It exports a law firm's invoices in a LEDES format, most often LEDES 1998B, so a corporate client's e-billing system can check each line against the client's billing guidelines. Many time-billing and practice management tools include LEDES export; confirm which LEDES version each client requires before you switch tools.",
    },
  ],
}
