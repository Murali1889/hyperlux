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
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/financial-docs"
const TITLE = "Financial Document OCR — Statements, Invoices, POs"
const DESCRIPTION =
  "Extract data from bank statements, invoices, purchase orders, and financial reports. 99% header + line-item accuracy. Structured JSON output."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function FinancialDocsPage() {
  return (
    <main className="min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <FinancialDocsHero />
      <SupportedFileTypes />
      <FieldCoverageTable />
      <HowItWorks />
      <TimeCostSavings />
      <CustomerExperienceImpact />
      <DeveloperOutput />
      <ComplianceNote />
      <FinancialDocsCta />
    </main>
  )
}
