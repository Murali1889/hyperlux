import type { Metadata } from "next"
import ArchivingHero from "@/components/use-cases/digital-archiving/archiving-hero"
import ArchivingChallenges from "@/components/use-cases/digital-archiving/archiving-challenges"
import FeaturesOverview from "@/components/use-cases/digital-archiving/features-overview"
import WorkflowVisualization from "@/components/use-cases/digital-archiving/workflow-visualization"
import BusinessBenefits from "@/components/use-cases/digital-archiving/business-benefits"
import DemoAnimation from "@/components/use-cases/digital-archiving/demo-animation"
import ArchivingFaq from "@/components/use-cases/digital-archiving/archiving-faq"
import ArchivingCta from "@/components/use-cases/digital-archiving/archiving-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/use-cases/digital-archiving"
const TITLE = "Digital Archiving OCR — Search Every Document"
const DESCRIPTION =
  "Convert paper and scanned archives into searchable structured data with AI-powered OCR. 30-second turnaround per document."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function DigitalArchivingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
      <ArchivingHero />
      <ArchivingChallenges />
      <FeaturesOverview />
      <WorkflowVisualization />
      <BusinessBenefits />
      <DemoAnimation />
      <ArchivingFaq />
      <ArchivingCta />
    </main>
  )
}
