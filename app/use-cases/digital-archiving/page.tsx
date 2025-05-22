import type { Metadata } from "next"
import ArchivingHero from "@/components/use-cases/digital-archiving/archiving-hero"
import ArchivingChallenges from "@/components/use-cases/digital-archiving/archiving-challenges"
import FeaturesOverview from "@/components/use-cases/digital-archiving/features-overview"
import WorkflowVisualization from "@/components/use-cases/digital-archiving/workflow-visualization"
import BusinessBenefits from "@/components/use-cases/digital-archiving/business-benefits"
import DemoAnimation from "@/components/use-cases/digital-archiving/demo-animation"
import ArchivingFaq from "@/components/use-cases/digital-archiving/archiving-faq"
import ArchivingCta from "@/components/use-cases/digital-archiving/archiving-cta"

export const metadata: Metadata = {
  title: "Digital Archiving AI | Searchable Document Repositories",
  description:
    "Convert paper and scanned documents into searchable digital archives with AI-powered OCR, improving compliance and retrieval speed.",
  openGraph: {
    title: "Digital Archiving AI | Searchable Document Repositories",
    description:
      "Convert paper and scanned documents into searchable digital archives with AI-powered OCR, improving compliance and retrieval speed.",
    type: "website",
    locale: "en_US",
  },
}

export default function DigitalArchivingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
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
