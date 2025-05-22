import type { Metadata } from "next"
import UseCasesHero from "@/components/use-cases/use-cases-hero"
import UseCaseCards from "@/components/use-cases/use-case-cards"
import CommonWorkflow from "@/components/use-cases/common-workflow"
import ImpactMetrics from "@/components/use-cases/impact-metrics"
import IndustryCrossLinks from "@/components/use-cases/industry-cross-links"
import UseCasesCta from "@/components/use-cases/use-cases-cta"

export const metadata: Metadata = {
  title: "AI-Powered Use Cases | Invoice Processing, Loan Verification & More",
  description:
    "Discover how AI-OCR automates invoice processing, loan verification, ID proofing, contract abstraction, and digital archiving with high accuracy and efficiency.",
}

export default function UseCasesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <UseCasesHero />
      <UseCaseCards />
      <CommonWorkflow />
      <ImpactMetrics />
      <IndustryCrossLinks />
      <UseCasesCta />
    </main>
  )
}
