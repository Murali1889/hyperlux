import type { Metadata } from "next"
import FinancialDocsHero from "@/components/documents/financial-docs/financial-docs-hero"
import SupportedFileTypes from "@/components/documents/financial-docs/supported-file-types"
import FieldCoverageTable from "@/components/documents/financial-docs/field-coverage-table"
import HowItWorks from "@/components/documents/financial-docs/how-it-works"
import TimeCostSavings from "@/components/documents/financial-docs/time-cost-savings"
import CustomerExperienceImpact from "@/components/documents/financial-docs/customer-experience-impact"
import DeveloperOutput from "@/components/documents/financial-docs/developer-output"
import ComplianceNote from "@/components/documents/financial-docs/compliance-note"
import FinancialDocsCta from "@/components/documents/financial-docs/financial-docs-cta"
import GuideIndex, { type GuideGroup } from "@/components/documents/shared/guide-index"
import { UseCaseContent } from "@/components/seo/use-case-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/financial-docs"
const TITLE = "Financial Document OCR: Statements, Invoices, POs"
const DESCRIPTION =
  "Extract data from bank statements, invoices, purchase orders, and financial reports. Accuracy benchmarked by document type, structured JSON output."

// Every guide below gets a crawlable link from this hub. The older card grid
// showed only six, which left most of these posts with a single inbound link.
const GUIDE_GROUPS: GuideGroup[] = [
  {
    heading: "Invoices and accounts payable",
    intro: "Extraction, matching, and exceptions for AP teams.",
    slugs: [
      "accounts-payable-ocr",
      "best-ocr-software-for-accounts-payable",
      "invoice-line-item-ocr",
      "3-way-match-invoice-automation",
      "partial-shipment-invoice-matching",
      "non-po-invoice-exception-routing",
      "duplicate-invoice-detection",
      "invoice-fraud-detection",
      "multi-currency-invoice-ocr",
      "email-invoice-parsing",
      "handwritten-faxed-invoice-ocr",
      "early-payment-discount-capture",
      "month-end-ap-close-bottleneck",
      "smarter-invoice-processing-the-ocr-advantage-for-finance-departments",
    ],
  },
  {
    heading: "Invoice OCR with your accounting system",
    intro: "How extracted invoice data reaches the ledger.",
    slugs: ["invoice-ocr-netsuite", "invoice-ocr-quickbooks-integration", "invoice-ocr-sap", "invoice-ocr-xero"],
  },
  {
    heading: "Choosing and rolling out invoice OCR",
    intro: "Pricing, build versus buy, and how to test before you commit.",
    slugs: [
      "invoice-ocr-pricing-models",
      "invoice-ocr-cfo-business-case",
      "build-vs-buy-invoice-ocr",
      "rules-based-vs-ai-invoice-extraction",
      "invoice-ocr-parallel-run-sample-size",
      "ap-clerk-day-before-after-ocr",
    ],
  },
  {
    heading: "Bank statements and cash flow",
    intro: "Reading statements for underwriting and fraud checks.",
    slugs: [
      "multi-account-bank-statement-ocr",
      "nsf-overdraft-detection-ocr",
      "cash-flow-underwriting-ocr",
      "dti-calculation-ocr",
      "real-time-bank-statement-processing",
      "bank-statement-fraud-detection",
      "bank-statement-ocr-pricing",
      "ocr-bank-statement-technology-revolutionizing-financial-data-processing",
      "revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions",
    ],
  },
  {
    heading: "Loan and income documents",
    intro: "Document checklists and extraction by loan type.",
    slugs: [
      "pay-stub-income-verification-ocr",
      "4506-c-tax-transcript-ocr",
      "verification-of-assets-ocr",
      "w2-1099-tax-form-ocr-underwriting",
      "mortgage-ocr",
      "heloc-document-ocr",
      "state-mortgage-document-requirements",
      "personal-loan-document-ocr",
      "auto-loan-document-ocr",
      "business-line-of-credit-ocr",
      "hard-money-lender-document-ocr",
      "credit-union-lending-ocr",
      "student-loan-refinance-ocr",
      "fintech-lending-api-ocr",
      "ecoa-compliance-document-ocr",
      "credit-card-statement-ocr",
    ],
  },
  {
    heading: "Finance OCR overviews",
    intro: "Where OCR fits across finance work.",
    slugs: [
      "ocr-finance",
      "ocr-meaning-in-finance",
      "ocr-accounting",
      "ocr-technology-in-banking",
      "ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now",
    ],
  },
]

const CONTENT = {
  intro:
    "Financial document OCR turns invoices, purchase orders, bank statements, and similar documents into structured data your systems can use. Which page you need depends on the document in front of you, and the accuracy you can expect depends on the document type more than on the tool.",
  sections: [
    {
      heading: "Which financial document do you have?",
      paragraphs: [
        "An invoice is a bill from a supplier, and the work around it is accounts payable: reading line items, matching them to purchase orders, and catching duplicates. A purchase order is the buyer's record of what was ordered, and it is the document invoices are matched against. A bank statement is a multi-page transaction table that lenders read to judge cash flow. Pay stubs, tax forms, and loan packets sit in the lending guides further down this page.",
        "Start with the page that matches your document, then use the guides below for your specific workflow.",
      ],
    },
    {
      heading: "What accuracy to expect by document type",
      paragraphs: [
        "Accuracy changes a lot by document. In our 2026 benchmark, invoice line items read at 93% and multi-page bank statement tables at 91%. Clean typed text read at 97-99%, while handwriting read at 78% and phone-photographed receipts at 76%. Reading takes about 1.1 seconds per page and pricing starts at $0.02 per page. Your own documents are the real test, so bring a sample to the demo.",
      ],
    },
  ],
  related: [
    { href: "/documents/financial-docs/invoices", label: "Invoice OCR" },
    { href: "/documents/financial-docs/bank-statements", label: "Bank statement OCR" },
    { href: "/documents/financial-docs/purchase-orders", label: "Purchase order OCR" },
    { href: "/resources/blogs/ocr-accuracy-benchmark-2026", label: "The 2026 OCR accuracy benchmark" },
  ],
}

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function FinancialDocsPage() {
  return (
    <main className="min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-10-14" />
      <FinancialDocsHero />
      <SupportedFileTypes />
      <FieldCoverageTable />
      <HowItWorks />
      <TimeCostSavings />
      <CustomerExperienceImpact />
      <DeveloperOutput />
      <ComplianceNote />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} related={CONTENT.related} />
      <GuideIndex
        title="Financial Document Processing Guides"
        description="How document intelligence applies to invoices, bank statements, and lending workflows."
        groups={GUIDE_GROUPS}
      />
      <FinancialDocsCta />
    </main>
  )
}
