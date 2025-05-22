import type { Metadata } from "next"
import PassportHero from "@/components/documents/identity-docs/passports/passport-hero"
import FieldReference from "@/components/documents/identity-docs/passports/field-reference"
import AccuracyBenchmarks from "@/components/documents/identity-docs/passports/accuracy-benchmarks"
import ExtractionWorkflow from "@/components/documents/identity-docs/passports/extraction-workflow"
import TimeFraudSavings from "@/components/documents/identity-docs/passports/time-fraud-savings"
import DeveloperOutputExample from "@/components/documents/identity-docs/passports/developer-output-example"
import ComplianceHighlight from "@/components/documents/identity-docs/passports/compliance-highlight"
import PassportFAQ from "@/components/documents/identity-docs/passports/passport-faq"
import PassportCta from "@/components/documents/identity-docs/passports/passport-cta"

export const metadata: Metadata = {
  title: "Passport OCR Template | MRZ & Face Extraction AI",
  description:
    "Capture passport MRZ, name, date-of-birth and expiry with 99.9 % accuracy and 8-second SLA for global ICAO formats.",
}

export default function PassportsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PassportHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <ExtractionWorkflow />
      <TimeFraudSavings />
      <DeveloperOutputExample />
      <ComplianceHighlight />
      <PassportFAQ />
      <PassportCta />
    </main>
  )
}
