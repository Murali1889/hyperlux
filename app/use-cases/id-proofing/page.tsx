import type { Metadata } from "next"
import IdProofingHero from "@/components/use-cases/id-proofing/id-proofing-hero"
import KeyChallenges from "@/components/use-cases/id-proofing/key-challenges"
import SolutionFeatures from "@/components/use-cases/id-proofing/solution-features"
import ProcessFlow from "@/components/use-cases/id-proofing/process-flow"
import OutcomesBenefits from "@/components/use-cases/id-proofing/outcomes-benefits"
import DemoAnimation from "@/components/use-cases/id-proofing/demo-animation"
import IdProofingFaq from "@/components/use-cases/id-proofing/id-proofing-faq"
import IdProofingCta from "@/components/use-cases/id-proofing/id-proofing-cta"

export const metadata: Metadata = {
  title: "ID Proofing with AI-OCR | Fast & Accurate Identity Verification",
  description:
    "Instantly verify government IDs with AI-powered OCR and face matching to reduce fraud and accelerate onboarding.",
}

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
