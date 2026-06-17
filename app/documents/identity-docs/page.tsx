import type { Metadata } from "next"
import IdentityDocsHero from "@/components/documents/identity-docs/identity-docs-hero"
import SupportedFileTypes from "@/components/documents/identity-docs/supported-file-types"
import FieldCoverageTable from "@/components/documents/identity-docs/field-coverage-table"
import VerificationWorkflow from "@/components/documents/identity-docs/verification-workflow"
import TimeFraudSavings from "@/components/documents/identity-docs/time-fraud-savings"
import ComplianceNote from "@/components/documents/identity-docs/compliance-note"
import DeveloperOutputSample from "@/components/documents/identity-docs/developer-output-sample"
import IdentityDocsCta from "@/components/documents/identity-docs/identity-docs-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Identity Document OCR — Passport, License, ID Cards",
  description:
    "Extract MRZ, barcodes, and face data from passports, national IDs, and driver licenses. 99.8% accuracy in under 12 seconds. KYC-ready.",
  path: "/documents/identity-docs",
})

export default function IdentityDocsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <IdentityDocsHero />
      <SupportedFileTypes />
      <FieldCoverageTable />
      <VerificationWorkflow />
      <TimeFraudSavings />
      <ComplianceNote />
      <DeveloperOutputSample />
      <IdentityDocsCta />
    </main>
  )
}
