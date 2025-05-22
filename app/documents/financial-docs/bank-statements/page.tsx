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

export const metadata: Metadata = {
  title: "Bank Statement OCR Template | Transaction-Level Extraction",
  description:
    "Convert PDF bank statements into structured transactions with 99% line accuracy and AML-ready CSV output.",
}

export default function BankStatementsPage() {
  return (
    <main className="flex flex-col min-h-screen">
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
