import type { Metadata } from "next"
import LoanHero from "@/components/use-cases/loan-verification/loan-hero"
import ManualPainPoints from "@/components/use-cases/loan-verification/manual-pain-points"
import KeyFeatures from "@/components/use-cases/loan-verification/key-features"
import WorkflowVisualization from "@/components/use-cases/loan-verification/workflow-visualization"
import BusinessOutcomes from "@/components/use-cases/loan-verification/business-outcomes"
import DemoVideo from "@/components/use-cases/loan-verification/demo-video"
import LoanFaq from "@/components/use-cases/loan-verification/loan-faq"
import LoanCta from "@/components/use-cases/loan-verification/loan-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/use-cases/loan-verification"
const TITLE = "Loan Verification OCR: From 45 Days to 5 Days"
const DESCRIPTION =
  "Accelerate loan verification with automated bank statement OCR, ID checks, and compliance audits. 98% accuracy on financial documents."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function LoanVerificationPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
      <LoanHero />
      <ManualPainPoints />
      <KeyFeatures />
      <WorkflowVisualization />
      <BusinessOutcomes />
      <DemoVideo />
      <LoanFaq />
      <LoanCta />
    </main>
  )
}
