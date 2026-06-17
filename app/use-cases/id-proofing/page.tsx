import type { Metadata } from "next"
import IdProofingHero from "@/components/use-cases/id-proofing/id-proofing-hero"
import KeyChallenges from "@/components/use-cases/id-proofing/key-challenges"
import SolutionFeatures from "@/components/use-cases/id-proofing/solution-features"
import ProcessFlow from "@/components/use-cases/id-proofing/process-flow"
import OutcomesBenefits from "@/components/use-cases/id-proofing/outcomes-benefits"
import DemoAnimation from "@/components/use-cases/id-proofing/demo-animation"
import IdProofingFaq from "@/components/use-cases/id-proofing/id-proofing-faq"
import IdProofingCta from "@/components/use-cases/id-proofing/id-proofing-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "ID Proofing API — Passport, License, mDL Verify",
  description:
    "Verify passports, driver's licenses, national IDs, and mobile DLs with OCR plus liveness check and sanctions screening in one API call.",
  path: "/use-cases/id-proofing",
})

export default function IdProofingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <IdProofingHero />
      <KeyChallenges />
      <SolutionFeatures />
      <ProcessFlow />
      <OutcomesBenefits />
      <DemoAnimation />
      <IdProofingFaq />
      <IdProofingCta />
    </main>
  )
}
