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
import PillarClusterBlogs from "@/components/documents/shared/pillar-cluster-blogs"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/financial-docs"
const TITLE = "Financial Document OCR: Statements, Invoices, POs"
const DESCRIPTION =
  "Extract data from bank statements, invoices, purchase orders, and financial reports. Accuracy benchmarked by document type, structured JSON output."

// Invoice/AP, bank-statement/lending, and standalone finance-document posts.
// These clusters share generic `cluster` tags (comparison/compliance/ai-doc)
// used elsewhere too, so this pillar page selects by explicit slug rather
// than by cluster to avoid pulling in unrelated posts.
const FINANCIAL_DOCS_SLUGS = [
  "invoice-ocr-netsuite",
  "invoice-ocr-quickbooks-integration",
  "invoice-ocr-sap",
  "invoice-ocr-xero",
  "duplicate-invoice-detection",
  "3-way-match-invoice-automation",
  "invoice-line-item-ocr",
  "early-payment-discount-capture",
  "non-po-invoice-exception-routing",
  "multi-currency-invoice-ocr",
  "month-end-ap-close-bottleneck",
  "invoice-fraud-detection",
  "partial-shipment-invoice-matching",
  "email-invoice-parsing",
  "handwritten-faxed-invoice-ocr",
  "ap-clerk-day-before-after-ocr",
  "invoice-ocr-pricing-models",
  "invoice-ocr-cfo-business-case",
  "build-vs-buy-invoice-ocr",
  "rules-based-vs-ai-invoice-extraction",
  "invoice-ocr-parallel-run-sample-size",
  "pay-stub-income-verification-ocr",
  "4506-c-tax-transcript-ocr",
  "verification-of-assets-ocr",
  "w2-1099-tax-form-ocr-underwriting",
  "heloc-document-ocr",
  "personal-loan-document-ocr",
  "auto-loan-document-ocr",
  "business-line-of-credit-ocr",
  "hard-money-lender-document-ocr",
  "credit-union-lending-ocr",
  "student-loan-refinance-ocr",
  "fintech-lending-api-ocr",
  "multi-account-bank-statement-ocr",
  "nsf-overdraft-detection-ocr",
  "cash-flow-underwriting-ocr",
  "dti-calculation-ocr",
  "real-time-bank-statement-processing",
  "state-mortgage-document-requirements",
  "bank-statement-fraud-detection",
  "ecoa-compliance-document-ocr",
  "bank-statement-ocr-pricing",
  "ocr-accounting",
  "ocr-technology-in-banking",
  "mortgage-ocr",
  "credit-card-statement-ocr",
  "ocr-meaning-in-finance",
  "ocr-finance",
  "accounts-payable-ocr",
  "best-ocr-software-for-accounts-payable",
  "smarter-invoice-processing-the-ocr-advantage-for-finance-departments",
  "ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now",
  "ocr-in-finance-transforming-document-processing-for-modern-financial-operations",
  "ocr-bank-statement-technology-revolutionizing-financial-data-processing",
  "revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions",
]

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function FinancialDocsPage() {
  return (
    <main className="min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-10-06" />
      <FinancialDocsHero />
      <SupportedFileTypes />
      <FieldCoverageTable />
      <HowItWorks />
      <TimeCostSavings />
      <CustomerExperienceImpact />
      <DeveloperOutput />
      <ComplianceNote />
      <PillarClusterBlogs
        slugs={FINANCIAL_DOCS_SLUGS}
        title="Financial Document Processing Guides"
        description="How document intelligence applies to invoices, bank statements, and lending workflows."
      />
      <FinancialDocsCta />
    </main>
  )
}
