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

export const metadata: Metadata = {
  title: "Driver Licence OCR Template | Front & Back Extraction",
  description:
    "Extract licence number, class, expiry and barcode data from driver licences with 98% accuracy in under 10 seconds.",
}

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
