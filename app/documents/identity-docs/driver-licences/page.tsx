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

export const metadata: Metadata = buildPageMetadata({
  title: "Driver's License OCR — 50 US States + International",
  description:
    "Extract license number, name, DOB, class, expiry, and PDF417 barcode data from driver's licenses. 98% accuracy in under 10 seconds.",
  path: "/documents/identity-docs/driver-licences",
})

export default function DriverLicencePage() {
  return (
    <main className="flex flex-col min-h-screen">
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
