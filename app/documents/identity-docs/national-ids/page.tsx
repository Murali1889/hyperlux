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

export const metadata: Metadata = {
  title: "National ID OCR Template | Barcode & Text Extraction",
  description:
    "Extract data from national identity cards worldwide, including barcodes, QR codes and hologram text, with 99% accuracy.",
}

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
