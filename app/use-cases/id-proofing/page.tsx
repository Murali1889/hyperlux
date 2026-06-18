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
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/use-cases/id-proofing"
const TITLE = "ID Proofing API — Passport, License, mDL Verify"
const DESCRIPTION =
  "Verify passports, driver's licenses, national IDs, and mobile DLs with OCR plus liveness check and sanctions screening in one API call."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function IdProofingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
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
