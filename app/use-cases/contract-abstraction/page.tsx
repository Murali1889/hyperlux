import type { Metadata } from "next"
import ContractHero from "@/components/use-cases/contract-abstraction/contract-hero"
import ManualReviewChallenges from "@/components/use-cases/contract-abstraction/manual-review-challenges"
import FeatureHighlights from "@/components/use-cases/contract-abstraction/feature-highlights"
import WorkflowDiagram from "@/components/use-cases/contract-abstraction/workflow-diagram"
import BusinessImpact from "@/components/use-cases/contract-abstraction/business-impact"
import DemoVideo from "@/components/use-cases/contract-abstraction/demo-video"
import ContractFaq from "@/components/use-cases/contract-abstraction/contract-faq"
import ContractCta from "@/components/use-cases/contract-abstraction/contract-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/use-cases/contract-abstraction"
const TITLE = "Contract Abstraction AI — Extract Clauses & Dates"
const DESCRIPTION =
  "Extract key clauses, dates, parties, and obligations from contracts automatically. Save hours of legal review per agreement."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ContractAbstractionPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
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
