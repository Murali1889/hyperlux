import type { Metadata } from "next"
import NationalIdHero from "@/components/documents/identity-docs/national-ids/national-id-hero"
import FieldReference from "@/components/documents/identity-docs/national-ids/field-reference"
import AccuracyBenchmarks from "@/components/documents/identity-docs/national-ids/accuracy-benchmarks"
import Workflow from "@/components/documents/identity-docs/national-ids/workflow"
import TimeFraudSavings from "@/components/documents/identity-docs/national-ids/time-fraud-savings"
import DeveloperOutput from "@/components/documents/identity-docs/national-ids/developer-output"
import RegionalComplianceNote from "@/components/documents/identity-docs/national-ids/regional-compliance-note"
import NationalIdFAQ from "@/components/documents/identity-docs/national-ids/national-id-faq"
import NationalIdCta from "@/components/documents/identity-docs/national-ids/national-id-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "National ID Card OCR — Global Coverage, KYC-Ready",
  description:
    "Extract identity fields from national ID cards worldwide — barcodes, QR codes, hologram text. 99% accuracy, validation built-in.",
  path: "/documents/identity-docs/national-ids",
})

export default function NationalIdsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <NationalIdHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <Workflow />
      <TimeFraudSavings />
      <DeveloperOutput />
      <RegionalComplianceNote />
      <NationalIdFAQ />
      <NationalIdCta />
    </main>
  )
}
