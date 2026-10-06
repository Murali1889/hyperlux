import type { Metadata } from "next"
import BankStatementHero from "@/components/documents/financial-docs/bank-statements/bank-statement-hero"
import FieldReference from "@/components/documents/financial-docs/bank-statements/field-reference"
import AccuracyBenchmarks from "@/components/documents/financial-docs/bank-statements/accuracy-benchmarks"
import ExtractionWorkflow from "@/components/documents/financial-docs/bank-statements/extraction-workflow"
import TimeCostSavings from "@/components/documents/financial-docs/bank-statements/time-cost-savings"
import DeveloperOutput from "@/components/documents/financial-docs/bank-statements/developer-output"
import CustomerExperienceBenefit from "@/components/documents/financial-docs/bank-statements/customer-experience-benefit"
import ComplianceNote from "@/components/documents/financial-docs/bank-statements/compliance-note"
import BankStatementFAQ from "@/components/documents/financial-docs/bank-statements/bank-statement-faq"
import BankStatementCta from "@/components/documents/financial-docs/bank-statements/bank-statement-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/financial-docs/bank-statements"
const TITLE = "Bank Statement OCR: Multi-Page Transaction Extraction"
const DESCRIPTION =
  "Convert PDF bank statements into structured transaction data. 91% row accuracy on multi-page tables in our 2026 benchmark, CSV and JSON output."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function BankStatementsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <BankStatementHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <ExtractionWorkflow />
      <TimeCostSavings />
      <DeveloperOutput />
      <CustomerExperienceBenefit />
      <ComplianceNote />
      <BankStatementFAQ />
      <BankStatementCta />
    </main>
  )
}
