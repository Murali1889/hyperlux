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

export const metadata: Metadata = {
  title: "Financial Document OCR Templates | Invoices, POs, Statements",
  description:
    "Automate data capture from invoices, purchase orders and bank statements with 99% header + line-item accuracy.",
}

export default function FinancialDocsPage() {
  return (
    <main className="min-h-screen">
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
