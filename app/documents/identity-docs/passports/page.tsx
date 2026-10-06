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
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/identity-docs/passports"
const TITLE = "Passport OCR: MRZ and Face Extraction API"
const DESCRIPTION =
  "Extract MRZ, name, DOB, and expiry from ICAO 9303 passports, with MRZ check digits validated so misreads get flagged. KYC-ready JSON output."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function PassportsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
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
