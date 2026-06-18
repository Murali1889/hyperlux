import type { Metadata } from "next"
import InvoiceHero from "@/components/use-cases/invoice-processing/invoice-hero"
import ManualChallenges from "@/components/use-cases/invoice-processing/manual-challenges"
import FeaturesOverview from "@/components/use-cases/invoice-processing/features-overview"
import WorkflowDiagram from "@/components/use-cases/invoice-processing/workflow-diagram"
import BusinessImpact from "@/components/use-cases/invoice-processing/business-impact"
import DemoAnimation from "@/components/use-cases/invoice-processing/demo-animation"
import InvoiceFaq from "@/components/use-cases/invoice-processing/invoice-faq"
import InvoiceCta from "@/components/use-cases/invoice-processing/invoice-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/use-cases/invoice-processing"
const TITLE = "Invoice Processing OCR — Cut AP Time 80% With AI"
const DESCRIPTION =
  "Automate invoice data capture, three-way match, and AP approval. 99% extraction accuracy. From $14 to $2.70 per invoice in production."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function InvoiceProcessingPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
    <main className="flex flex-col min-h-screen">
      <InvoiceHero />
      <ManualChallenges />
      <FeaturesOverview />
      <WorkflowDiagram />
      <BusinessImpact />
      <DemoAnimation />
      <InvoiceFaq />
      <InvoiceCta />
    </main>
    </>
  )
}
