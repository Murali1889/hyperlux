import type { Metadata } from "next"
import ContractHero from "@/components/use-cases/contract-abstraction/contract-hero"
import ManualReviewChallenges from "@/components/use-cases/contract-abstraction/manual-review-challenges"
import FeatureHighlights from "@/components/use-cases/contract-abstraction/feature-highlights"
import WorkflowDiagram from "@/components/use-cases/contract-abstraction/workflow-diagram"
import BusinessImpact from "@/components/use-cases/contract-abstraction/business-impact"
import DemoVideo from "@/components/use-cases/contract-abstraction/demo-video"
import ContractFaq from "@/components/use-cases/contract-abstraction/contract-faq"
import ContractCta from "@/components/use-cases/contract-abstraction/contract-cta"

export const metadata: Metadata = {
  title: "Contract Abstraction AI | Extract Clauses & Dates from Documents",
  description:
    "Automatically extract key clauses, dates, and terms from contracts to accelerate review cycles and reduce legal risks.",
  openGraph: {
    title: "Contract Abstraction AI | Extract Clauses & Dates from Documents",
    description:
      "Automatically extract key clauses, dates, and terms from contracts to accelerate review cycles and reduce legal risks.",
    type: "website",
    locale: "en_US",
  },
}

export default function ContractAbstractionPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContractHero />
      <ManualReviewChallenges />
      <FeatureHighlights />
      <WorkflowDiagram />
      <BusinessImpact />
      <DemoVideo />
      <ContractFaq />
      <ContractCta />
    </main>
  )
}
