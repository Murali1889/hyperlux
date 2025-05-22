import type { Metadata } from "next"
import InvoiceHero from "@/components/use-cases/invoice-processing/invoice-hero"
import ManualChallenges from "@/components/use-cases/invoice-processing/manual-challenges"
import FeaturesOverview from "@/components/use-cases/invoice-processing/features-overview"
import WorkflowDiagram from "@/components/use-cases/invoice-processing/workflow-diagram"
import BusinessImpact from "@/components/use-cases/invoice-processing/business-impact"
import DemoAnimation from "@/components/use-cases/invoice-processing/demo-animation"
import InvoiceFaq from "@/components/use-cases/invoice-processing/invoice-faq"
import InvoiceCta from "@/components/use-cases/invoice-processing/invoice-cta"

export const metadata: Metadata = {
  title: "Invoice Processing Automation | AI-OCR for Faster AP",
  description:
    "Automate invoice data capture and validation to speed up accounts payable with 99% accuracy and significant cost savings.",
  openGraph: {
    title: "Invoice Processing Automation | AI-OCR for Faster AP",
    description:
      "Automate invoice data capture and validation to speed up accounts payable with 99% accuracy and significant cost savings.",
    type: "website",
    locale: "en_US",
  },
}

export default function InvoiceProcessingPage() {
  return (
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
  )
}
