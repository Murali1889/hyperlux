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
    "Purchase order OCR reads a PO (PDF, scan or photo) and returns its header fields and line items as structured data, so your ERP or AP software can match it against the goods receipt and the supplier invoice. Extraction is the easier half. In our test of 100 generated PO and invoice pairs, matching invoice lines to PO lines by line number was wrong on 71% of lines on clean images, while a key of item code, unit of measure and unit price was wrong on none. This page covers which fields to extract, what each matching rule did on the same documents, and how to test PO OCR on your own orders.",
  sections: [
    {
      heading: "What should purchase order OCR extract?",
      paragraphs: [
        "Header fields identify the order: PO number, supplier name or ID, order date, currency, payment terms, ship-to address and buyer. The PO number is the join key to everything that follows, so one wrong digit breaks the match for the whole order.",
        "Line fields describe what was ordered: line number, item or SKU code, description, quantity, unit of measure, unit price, line total and requested delivery date. Unit of measure decides whether 12 means twelve items or twelve cases, and currency decides whether a unit price is comparable at all, so extract both explicitly instead of assuming them.",
      ],
    },
    {
      heading: "Why does matching invoice lines to PO lines by line number fail?",
      paragraphs: [
        "Because invoices do not keep the PO's line order. We generated 100 PO and invoice pairs with 6 to 10 PO lines each. The invoices were reordered in 70% of pairs, left out about 10% of PO lines (not shipped yet) and carried a smaller quantity on about 30% of lines (partial shipments). We read the clean renders with Tesseract 5.5.2, and on the 97 pairs where our parser found every line on both documents (695 invoice lines), matching by line number was right on 203 lines and wrong on 492, which is 71% wrong.",
        "The same result held on worse scans: 284 of 393 lines wrong on 200 DPI scans (56 pairs) and 92 of 150 wrong on noisy phone-style images (21 pairs). Line number matching also never sends a line to review. It always returns an answer, so a wrong match looks the same as a right one. Our test invoices were built to reorder and drop lines, so treat the 71% as what happens when invoices do reorder, not as a rate for your suppliers.",
      ],
    },
    {
      heading: "Is matching on item code alone enough?",
      paragraphs: [
        "Almost, and the failure is easy to miss. Matching on the item code alone was right on 661 of 695 clean lines, wrong on 33 and sent 1 to review. All 33 wrong lines came from POs that listed the same item twice, which we built into about 40% of the POs (37 of the 97 pairs that were read completely). On those pairs 33 of 260 lines were wrong; on the pairs with no repeated item, 0 of 435 were.",
        "A repeated item is normal: the same part ordered in two lots, in two units of measure, or at two negotiated prices. If your rule picks the first PO line with that code, the second lot is matched to the wrong line and nothing flags it. Our repeated items always differed in unit of measure and price. We did not test two lines that are identical in code, unit and price, where only the delivery date or a sequence number tells them apart.",
      ],
    },
    {
      heading: "What key should you match on?",
      paragraphs: [
        "The key that worked on our documents was item code plus unit of measure, with unit price as the tie-break when more than one PO line still fits, and a line sent to review whenever the rule cannot pick exactly one. On clean images it matched 694 of 695 lines correctly, none wrongly, and sent 1 to review. On 200 DPI scans it matched 393 of 393. On the noisy images it matched 142 of 150 with none wrong and sent 8 to review.",
        "Review is the point of that last number. The lines the rule could not match were sent to a person instead of being matched to the wrong line, which is where the 0 wrong comes from. A small normalization step also helped on the noisy images: treating the confusable pairs O and 0, I and 1, Z and 2, S and 5, and B and 8 as equal in item codes moved 3 lines from review to correct, for 145 right, 0 wrong and 5 for review. Quantity is not in the key on purpose. Partial shipments changed the quantity on about 30% of our invoice lines without affecting the match, and a quantity above the PO quantity is a separate check that belongs after the match.",
        "Two policy items stay in your ERP, not in the extraction. Price tolerance is your rule: decide how far a unit price may drift before an invoice goes to review. And a revised PO means an older version may still be in your system, so capture the revision number or date when the document prints one.",
      ],
    },
    {
      heading: "How accurately were the fields read?",
      paragraphs: [
        "On the pairs where the number of rows our parser found equalled the number printed, the share of lines with item code, quantity, unit and price all correct was high on clean and scanned images and lower on the noisy ones. For PO lines it was 772 of 775 on clean images, 524 of 531 on 200 DPI scans and 262 of 290 on noisy images. For invoice lines it was 703 of 704, 525 of 527 and 314 of 343.",
        "The larger loss was lines that never became a complete row. Our parser needs an item code, a quantity, a unit and a price on the same line. It found the right number of rows on both documents for 97 of 100 pairs on clean images, 56 of 100 on 200 DPI scans and 21 of 100 on noisy images. Those are the results for our simple parser reading Tesseract output, not for DocsAPI. They show why a missing line matters: when a row is lost, position-based matching shifts every line after it, and the document should go to a person.",
      ],
    },
    {
      heading: "How to test PO OCR on your own documents in an afternoon",
      paragraphs: [
        "Pull a sample that includes your worst documents, not your best: POs from several suppliers, a few poor scans and at least one multi-page order. Decide up front which fields drive money or matching (PO number, item code, quantity, unit of measure, unit price) and check those by hand against the source.",
        "Score fields, not documents. A PO with one wrong quantity out of forty fields looks fine at the document level and still fails the match. Count two things separately: fields that were wrong, and fields that were wrong while presented as certain. The second number decides how much human review you need. Then run your matching rule on the extracted lines and count right, wrong and sent to review, the way we did above. For how long to run a check like this, see the guide on sizing an invoice OCR parallel run, linked below.",
      ],
    },
    {
      heading: "What DocsAPI returns for a PO",
      paragraphs: [
        "Each PO comes back as JSON with header fields and line items. Fields the model is unsure about are flagged for review instead of passed along as certain. Reading runs at about 1.1 seconds per page, and pricing starts at $0.02 per page. In our 2026 benchmark, clean typed text read at 97% to 99% and invoice line items at 93%. We have not published a PO-specific accuracy figure, which is why we suggest testing with your own orders at the demo.",
      ],
    },
    {
      heading: "What our matching test did not cover",
      paragraphs: [
        "The documents were generated: one table layout, one font, English item descriptions, no handwriting and no multi-page orders. The OCR was Tesseract with a short parser we wrote, not DocsAPI, so the numbers above describe the matching rules and the cost of lost lines, not the accuracy of any product. The test also did not cover identical repeated lines, split deliveries across several invoices, consolidated lines or unit conversions such as boxes to items. Run the same comparison on a sample of your own POs before you choose a key.",
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
        "A three-way match compares the purchase order, the goods receipt and the supplier invoice before payment. It confirms that you are paying for what was ordered and delivered, at the agreed price. OCR supplies clean data from the PO and invoice; the comparison itself runs in your ERP or AP software.",
    },
    {
      question: "What should I match invoice lines to PO lines on?",
      answer:
        "Not the line number. In our test of 100 generated PO and invoice pairs, line number matching was wrong on 71% of invoice lines because invoices reorder and drop lines. Item code alone was wrong on 33 of 695 clean lines, all on POs that listed an item twice. Item code plus unit of measure, with unit price as the tie-break and review when the rule cannot pick one line, was wrong on none.",
    },
    {
      question: "Can OCR handle revised or amended purchase orders?",
      answer:
        "OCR reads each document as it is. Deciding which version of a PO is current is a job for your system, so extract the revision number or date when the document prints one and let your ERP keep the latest.",
    },
  ],
  related: [
    { href: "/resources/blogs/ocr-layout-analysis-and-key-value-extraction", label: "OCR layout analysis and key-value extraction, tested" },
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
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-11-13" />
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
