import type { Metadata } from "next"
import UseCasesHero from "@/components/use-cases/use-cases-hero"
import UseCaseCards from "@/components/use-cases/use-case-cards"
import CommonWorkflow from "@/components/use-cases/common-workflow"
import ImpactMetrics from "@/components/use-cases/impact-metrics"
import IndustryCrossLinks from "@/components/use-cases/industry-cross-links"
import UseCasesCta from "@/components/use-cases/use-cases-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/use-cases"
const TITLE = "Use Cases: KYC, AML, Invoice & Lending Automation"
const DESCRIPTION =
  "Production use cases for DocsAPI, KYC document verification, AML checks, invoice processing, loan automation, and revenue cycle management."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function UseCasesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <UseCasesHero />
      <UseCaseCards />
      <CommonWorkflow />
      <ImpactMetrics />
      <IndustryCrossLinks />
      <UseCasesCta />
    </main>
  )
}
