import type { Metadata } from "next"
import DriverLicenceHero from "@/components/documents/identity-docs/driver-licences/driver-licence-hero"
import FieldReference from "@/components/documents/identity-docs/driver-licences/field-reference"
import AccuracyBenchmarks from "@/components/documents/identity-docs/driver-licences/accuracy-benchmarks"
import VerificationWorkflow from "@/components/documents/identity-docs/driver-licences/verification-workflow"
import TimeRiskSavings from "@/components/documents/identity-docs/driver-licences/time-risk-savings"
import DeveloperOutput from "@/components/documents/identity-docs/driver-licences/developer-output"
import UserExperienceBenefit from "@/components/documents/identity-docs/driver-licences/user-experience-benefit"
import DriverLicenceFAQ from "@/components/documents/identity-docs/driver-licences/driver-licence-faq"
import DriverLicenceCta from "@/components/documents/identity-docs/driver-licences/driver-licence-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/identity-docs/driver-licences"
const TITLE = "Driver's License OCR: 50 US States + International"
const DESCRIPTION =
  "Extract license number, name, DOB, class, expiry, and PDF417 barcode data from driver's licenses. 98% accuracy in under 10 seconds."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function DriverLicencePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <DriverLicenceHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <VerificationWorkflow />
      <TimeRiskSavings />
      <DeveloperOutput />
      <UserExperienceBenefit />
      <DriverLicenceFAQ />
      <DriverLicenceCta />
    </main>
  )
}
