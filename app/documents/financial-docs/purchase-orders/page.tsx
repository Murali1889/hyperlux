import type { Metadata } from "next"
import PurchaseOrderHero from "@/components/documents/financial-docs/purchase-orders/purchase-order-hero"
import FieldReference from "@/components/documents/financial-docs/purchase-orders/field-reference"
import AccuracyBenchmarks from "@/components/documents/financial-docs/purchase-orders/accuracy-benchmarks"
import AutomationWorkflow from "@/components/documents/financial-docs/purchase-orders/automation-workflow"
import TimeCostSavings from "@/components/documents/financial-docs/purchase-orders/time-cost-savings"
import DeveloperOutput from "@/components/documents/financial-docs/purchase-orders/developer-output"
import PurchaseOrderFAQ from "@/components/documents/financial-docs/purchase-orders/purchase-order-faq"
import PurchaseOrderCta from "@/components/documents/financial-docs/purchase-orders/purchase-order-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"

const PATH = "/documents/financial-docs/purchase-orders"
const TITLE = "Purchase Order OCR: Automated PO Processing"
const DESCRIPTION =
  "Extract PO numbers, vendor codes, SKUs, line items, and quantities, with unclear fields flagged for review. Built for three-way match against invoices."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "Purchase order OCR reads a PO (PDF, scan, or photo) and returns its header fields and line items as structured data, usually JSON, so your ERP or AP software can match it against the goods receipt and the supplier invoice. Extraction is the easy half. Most PO automation projects stall at the match, where the wrong PO line gets paired with the wrong invoice line. This page covers which fields to extract, where matching goes wrong, and how to test PO OCR on your own documents before you commit.",
  sections: [
    {
      heading: "What to extract from a purchase order, and why each field matters",
      paragraphs: [
        "Header fields identify the order: PO number, supplier name or ID, order date, currency, payment terms, ship-to address, and buyer. The PO number is the join key to everything that follows, so a single wrong digit breaks the match for the whole order.",
        "Line fields describe what was ordered: line number, item or SKU code, description, quantity, unit of measure, unit price, line total, and requested delivery date. Two of these cause most of the trouble. Unit of measure decides whether 12 means twelve items or twelve cases, and currency decides whether a unit price is comparable at all. Extract both explicitly instead of assuming them.",
      ],
    },
    {
      heading: "Where three-way matching breaks, and it is rarely the OCR",
      paragraphs: [
        "Matching on PO line number alone is the most common mistake. Suppliers consolidate lines, split them, and reorder them on the invoice, so line 3 on the PO is often not line 3 on the invoice. A sturdier key combines supplier, item code, and unit of measure, plus a sequence counter when the same item appears on more than one PO line.",
        "Three other cases cause false mismatches. Partial shipments mean the invoice quantity is legitimately lower than the PO quantity. Revised POs mean an older version of the order may still be in your system, so capture the revision number or date when the document prints one. And price tolerance is your policy, not a standard: decide how far a unit price may drift before an invoice goes to review, and set that in your ERP.",
      ],
    },
    {
      heading: "How to test PO OCR on your own documents in an afternoon",
      paragraphs: [
        "Pull a sample that includes your worst documents, not your best: POs from several suppliers, a few poor scans, and at least one multi-page order. Decide up front which fields drive money or matching (PO number, quantity, unit of measure, unit price) and check those by hand against the source.",
        "Score fields, not documents. A PO with one wrong quantity out of forty fields looks fine at the document level and still fails the match. Count two things separately: fields that were wrong and fields that were wrong while presented as certain. The second number is the one that decides how much human review you need. For how long to run a check like this, see the guide on sizing an invoice OCR parallel run, linked below.",
      ],
    },
    {
      heading: "What DocsAPI returns for a PO",
      paragraphs: [
        "Each PO comes back as JSON with header fields and line items. Fields the model is unsure about are flagged for review instead of passed along as certain. Reading runs at about 1.1 seconds per page, and pricing starts at $0.02 per page. In our 2026 benchmark, clean typed text read at 97-99% and invoice line items at 93%. We have not published a PO-specific accuracy figure, which is why we suggest testing with your own orders at the demo.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between a purchase order and an invoice for OCR?",
      answer:
        "A purchase order is issued by the buyer before the purchase and states what was ordered at what agreed price. An invoice is issued by the supplier afterward and states what to pay. For OCR, POs follow the layout of the buyer's own system, so they are consistent within one company, while invoices vary by supplier. Both carry a PO number, which is how the two are matched.",
    },
    {
      question: "What is a three-way match?",
      answer:
        "A three-way match compares the purchase order, the goods receipt, and the supplier invoice before payment. It confirms that you are paying for what was ordered and delivered, at the agreed price. OCR supplies clean data from the PO and invoice; the comparison itself runs in your ERP or AP software.",
    },
    {
      question: "Can OCR handle revised or amended purchase orders?",
      answer:
        "OCR reads each document as it is. Deciding which version of a PO is current is a job for your system, so extract the revision number or date when the document prints one and let your ERP keep the latest.",
    },
  ],
  related: [
    { href: "/resources/blogs/3-way-match-invoice-automation", label: "3-way invoice match automation: where it breaks down" },
    { href: "/resources/blogs/partial-shipment-invoice-matching", label: "Partial shipment invoice matching: where errors compound" },
    { href: "/resources/blogs/non-po-invoice-exception-routing", label: "Non-PO invoice exception routing: what actually works" },
    { href: "/resources/blogs/invoice-line-item-ocr", label: "Invoice line-item extraction: where the accuracy gap is" },
    { href: "/resources/blogs/invoice-ocr-parallel-run-sample-size", label: "How long should your invoice OCR parallel run be?" },
    { href: "/documents/financial-docs/invoices", label: "Invoice OCR" },
    { href: "/documents/financial-docs", label: "All financial document OCR" },
  ],
}

export default function PurchaseOrdersPage() {
  return (
    <main className="min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-10-14" />
      <PurchaseOrderHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <AutomationWorkflow />
      <TimeCostSavings />
      <DeveloperOutput />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} related={CONTENT.related} />
      <PurchaseOrderFAQ />
      <PurchaseOrderCta />
    </main>
  )
}
