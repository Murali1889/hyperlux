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
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/identity-docs/national-ids"
const TITLE = "National ID Card OCR: Global Coverage, KYC-Ready"
const DESCRIPTION =
  "Extract identity fields, barcodes and QR codes from national ID cards, with MRZ check digits validated and unclear fields flagged for review."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function NationalIdsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
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
