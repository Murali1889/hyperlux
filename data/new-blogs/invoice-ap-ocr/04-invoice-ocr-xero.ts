import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogAp04: BlogPost = {
  id: "ap-04",
  title: "Invoice OCR to Xero: The Real API Field Mapping (2026)",
  slug: "invoice-ocr-xero",
  excerpt:
    "Xero invoice OCR guides stay at the marketing level. Here is the real Invoices API field map, the ACCPAY status workflow, and where sync breaks.",
  description:
    "The real Xero Invoices API field mapping for invoice OCR: ACCPAY vs ACCREC, the DRAFT to AUTHORISED status workflow, and where automation actually breaks.",
  metaTag: "Xero Invoice OCR: The Real ACCPAY Field Map (2026)",
  summary:
    "To post OCR-read supplier invoices into Xero, create them as Type ACCPAY through the Invoices API, reference the supplier by ContactID, and choose the status on purpose: DRAFT for review, AUTHORISED only after approval. Most sync problems come from mapping and status, not from the OCR.",
  content: `
    <p>A bookkeeper managing eleven client organizations on Xero told me she had "automated" invoice entry for all of them, then spent an hour every Friday manually fixing bills that synced as AUTHORISED before anyone had actually approved them. The OCR tool she used had defaulted every posted bill straight to the AUTHORISED status because that was the simplest integration path to build, not because that was the right workflow for a firm managing client money on someone else's behalf. Nobody had told her the status field was even a choice, and by the time she noticed the pattern, three months of client bills had gone through with zero human review before hitting each client's actual books.</p>

    <p>This is the real Xero Invoices API field mapping for <a href="/solutions/finance-automation">invoice automation</a>, the ACCPAY versus ACCREC distinction, the status workflow that decides whether a bill is a safe draft or a posted liability, and where the sync actually breaks for bookkeepers and accounting firms running multiple client organizations.</p>

    <h2>ACCPAY vs. ACCREC: Xero's invoice type field decides everything</h2>

    <p>Xero uses a single Invoices endpoint for both money owed and money owing, distinguished by the Type field. ACCPAY is a bill, an invoice you owe a supplier, the type relevant to invoice OCR and accounts payable. ACCREC is a sales invoice you have issued to a customer. Getting this field wrong does not throw an obvious error in every case, it can post a supplier bill as a customer invoice, which corrupts both your payables and receivables reporting simultaneously. Any OCR pipeline extracting vendor invoices must hard-code Type to ACCPAY and never infer it from document content alone, since a badly formatted invoice gives no clean signal for which direction the money flows.</p>

    <h2>The real Invoices API field mapping</h2>

    <p>This is what an OCR-extracted bill needs to become to post correctly through Xero's Accounting API, based on the Invoices endpoint's actual field structure.</p>

    <table>
      <thead>
        <tr><th>OCR-extracted field</th><th>Maps to Xero Invoices field</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td>Invoice direction</td><td>Type = "ACCPAY"</td><td>Must be hard-coded for supplier bills, never inferred, since the consequence of getting it wrong corrupts both AP and AR</td></tr>
        <tr><td>Vendor/supplier name</td><td>Contact.ContactID (preferred) or Contact.Name</td><td>Matching by ContactID avoids creating duplicate contact records; matching by raw name string does not</td></tr>
        <tr><td>Invoice date</td><td>Date</td><td>The transaction date on the document</td></tr>
        <tr><td>Due date</td><td>DueDate</td><td>Independent field, not auto-derived unless payment terms are configured on the contact</td></tr>
        <tr><td>Invoice/reference number</td><td>InvoiceNumber, Reference</td><td>Xero does not block duplicate invoice numbers across different contacts by default; your duplicate check needs ContactID plus InvoiceNumber together</td></tr>
        <tr><td>Line item description, qty, price</td><td>LineItems[].Description, Quantity, UnitAmount</td><td>Table structure across page breaks is where extraction most commonly drops or duplicates a row</td></tr>
        <tr><td>GL account per line</td><td>LineItems[].AccountCode</td><td>Required per line. OCR has no inherent knowledge of your chart of accounts; this needs a separate coding layer.</td></tr>
        <tr><td>Tax treatment</td><td>LineItems[].TaxType</td><td>Overrides the account's default tax code when set explicitly, and jurisdiction-specific tax types (GST, VAT, sales tax) vary by Xero organization region</td></tr>
        <tr><td>Posting state</td><td>Status ("DRAFT", "SUBMITTED", "AUTHORISED")</td><td>This is the field the bookkeeper above did not realize she could control. Only AUTHORISED posts to the ledger as a real liability.</td></tr>
      </tbody>
    </table>

    <h2>Why the Status field matters more in Xero than in most ERPs</h2>

    <p>Most invoice OCR guidance treats "posting the bill" as a single step. Xero splits it explicitly: a bill can exist as DRAFT (visible, editable, not affecting any ledger balance), SUBMITTED (pending approval in a workflow, still not posted), or AUTHORISED (a real liability on the books). An integration that always sets Status to AUTHORISED is choosing zero-review automation whether or not that is what the business actually wants. An integration that always sets Status to DRAFT is choosing full manual review of every single bill regardless of confidence level. Neither is correct for every use case, and most vendor integrations pick one default and do not expose the choice.</p>

    <p>The right pattern for most AP teams: set Status based on extraction confidence. High-confidence extractions (clean invoice, high-confidence field match, known vendor) can go to AUTHORISED directly if your risk tolerance allows it. Low-confidence extractions should land as DRAFT with the uncertain fields flagged, so a human reviews before the liability hits the books rather than after. This is a genuinely different design decision from QuickBooks or NetSuite, where the API either accepts or rejects a post outright rather than offering a middle state; Xero's three-state workflow gives you a review gate the other platforms do not have natively, and most integrations waste it by picking one status and hard-coding it.</p>

    <h2>Tracking categories: the field most OCR pipelines skip entirely</h2>

    <p>Beyond AccountCode, Xero supports up to two Tracking Categories per organization (common examples: Region, Department, Project, Cost Centre), and each line item can carry a tracking option value alongside its account code. This is a genuinely useful reporting dimension for businesses that need to slice AP spend by project or location, but it is also the field almost every invoice OCR integration ignores, because OCR extraction has no natural way to infer "this expense belongs to Project Falcon" from an invoice that never mentions the project by name. In practice, tracking category assignment for AP either comes from a vendor-to-project mapping rule (a specific recurring vendor always bills the same cost center) or requires a human decision at review time. Pipelines that silently drop tracking data leave a gap in every downstream project-cost report that nobody notices until someone asks why a project's actual spend does not match its invoiced total.</p>

    <p>If tracking categories matter to your reporting, build the mapping logic explicitly rather than assuming OCR will infer it, and flag any line item where no mapping rule matches for human assignment instead of posting it uncategorized. This is a small design decision that compounds significantly at scale, since a steady trickle of silently dropped tracking values can quietly erode confidence in an entire project-cost reporting system over the course of a year, long after anyone remembers why the numbers stopped matching.</p>

    <h2>Attachments and the audit trail</h2>

    <p>Xero supports attaching the source document to an invoice record through a separate Attachments endpoint, distinct from the Invoice creation call itself, the same two-step pattern QuickBooks and NetSuite both use. For a bookkeeping firm, this attachment is often the single most important artifact in the entire pipeline, because when a client questions a bill six months later, or an accountant needs to verify a number during year-end review, the original PDF attached to the transaction record is what actually resolves the question. An integration that posts the invoice data successfully but silently fails the attachment upload leaves clean numbers with no way to verify them against the source, which matters more in a client-services context than almost anywhere else this field mapping gets used.</p>

    <h2>Multi-organization sync: the bookkeeper's actual failure mode</h2>

    <p>Xero's API is organization-scoped, every API call operates against one specific Xero organization identified by a tenant ID, which matters enormously for bookkeepers and accounting firms managing multiple client books. A pipeline built assuming a single organization connection will either require re-authentication chaos across dozens of clients or, if built carelessly, risk posting a bill extracted from Client A's invoice into Client B's organization because the tenant ID was not explicitly re-validated per request. This is not a hypothetical, it is the single most damaging failure mode for firms running invoice OCR across a client portfolio, because unlike a wrong GL code, a bill posted to the wrong client's books is a trust-breaking error that surfaces at the worst possible time, during that client's own reconciliation.</p>

    <p>Any OCR integration built for accounting-firm use needs an explicit, tested check that the tenant ID on the API call matches the client the invoice was actually extracted for, on every single request, not just at initial setup. Rate limiting compounds this at scale: Xero enforces API call limits per organization connection, and a firm processing invoices across dozens of client organizations in parallel needs to queue and throttle requests per tenant rather than treating the whole batch as one undifferentiated stream, or legitimate traffic to one client's organization can get throttled by volume spikes on an unrelated client's batch.</p>

    <h2>Where extraction accuracy actually shows up in Xero specifically</h2>

    <p>LineItems is where accuracy matters most, because Xero validates that line amounts reconcile with the invoice total before AUTHORISED status can apply, similar in spirit to QuickBooks and NetSuite's total validation. Our own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">accuracy benchmark</a> measured layout-aware line-item extraction at 93% versus 81 to 87% for engines with weaker multi-page table handling, and on Xero specifically, a dropped or duplicated line item does not just create a reconciliation nuisance, it blocks the AUTHORISED transition entirely until someone manually corrects the line items. We built <a href="/products">DocsAPI</a> to handle multi-page table stitching for exactly this reason: a bookkeeping firm managing dozens of client organizations cannot afford a line-item error rate that creates a manual-fix queue at every single client.</p>

    <h2>What I would check before scaling Xero invoice automation</h2>

    <p>First, confirm what Status your current integration defaults to and whether that matches your actual risk tolerance, not just what was easiest to build. Second, if you manage more than one Xero organization, test explicitly that a batch run cannot cross-post between tenants under load, not just in a single-client demo. Third, pull 15 real invoices and check whether vendor matching resolves to ContactID correctly rather than creating near-duplicate contacts, the same failure pattern that shows up across every accounting platform we have covered in this <a href="/resources/blogs/accounts-payable-ocr">accounts payable OCR series</a>.</p>

    <p>For a bookkeeping or accounting firm specifically, add a fourth check: confirm that whatever review queue your team uses actually separates by client organization, rather than presenting one undifferentiated list of pending bills across every client. A shared queue with no client-level filtering is how the tenant-mismatch failure mode above compounds into a real incident, someone approves a bill quickly without checking which client's name is attached, because the interface never made that distinction obvious in the first place.</p>
    <p>Sources: field structure verified against the Xero Accounting API Invoices endpoint documentation and independent technical references. Extraction accuracy figures from our own <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a>. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guides: <a href="/resources/blogs/smarter-invoice-processing-the-ocr-advantage-for-finance-departments">OCR for invoices, receipts and purchase orders</a>, <a href="/resources/blogs/ocr-integration-with-accounting-crm-erp">how to connect OCR to accounting, CRM and ERP systems</a> and <a href="/resources/blogs/best-ocr-software-for-accounts-payable">best OCR software for accounts payable</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Accounts Payable",
  date: "August 10, 2026",
  datePublished: "2026-08-10T00:00:00.000Z",
  dateModified: "2026-10-22T00:00:00.000Z",
  last_updated: "October 22, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "invoice ocr xero",
  secondary_keywords: [
    "xero invoices api",
    "xero accpay vs accrec",
    "xero bill status draft authorised",
    "xero api invoice line items",
    "xero multi organization invoice sync",
    "xero bookkeeper invoice automation",
  ],
  tags: ["Xero", "invoice OCR", "accounts payable", "API integration", "bookkeeping"],
  cluster: "industry-trends",
  faq: [
    {
      question: "What is the difference between ACCPAY and ACCREC in the Xero API?",
      answer:
        "ACCPAY is a bill, an invoice you owe a supplier, relevant to accounts payable and invoice OCR. ACCREC is a sales invoice issued to a customer. The Type field must be set explicitly and never inferred from document content.",
    },
    {
      question: "What does the Status field control on a Xero invoice created via API?",
      answer:
        "Status determines whether the bill is DRAFT (not posted to the ledger), SUBMITTED (pending approval), or AUTHORISED (a posted liability). A confidence-based approach that routes low-confidence extractions to DRAFT for review is safer than defaulting every bill to AUTHORISED.",
    },
    {
      question: "Why did my invoice OCR post a bill to the wrong Xero organization?",
      answer:
        "This typically happens when a multi-client integration does not explicitly re-validate the tenant ID on every API call. Xero's API is organization-scoped, and without a per-request check, a batch process risks cross-posting invoices between client organizations.",
    },
    {
      question: "Can Xero invoice OCR assign GL account codes automatically?",
      answer:
        "Not from optical extraction alone. AccountCode is required per line item, and OCR has no inherent knowledge of a specific organization's chart of accounts, requiring a separate rules engine or mapping layer.",
    },
    {
      question: "Does Xero block duplicate invoices automatically?",
      answer:
        "Not by default across all contacts. Duplicate detection needs to check ContactID combined with InvoiceNumber, since Xero does not prevent the same invoice number from being used across different suppliers.",
    },
    {
      question: "Can invoice OCR assign Xero tracking categories automatically?",
      answer:
        "Only through an explicit vendor-to-category mapping rule, not from extraction alone. Tracking categories like project or cost center have no natural signal on most invoices, so unmatched line items should route to human assignment.",
    },
  ],
}
