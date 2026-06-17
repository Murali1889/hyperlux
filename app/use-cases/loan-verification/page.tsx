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

export const metadata: Metadata = buildPageMetadata({
  title: "Loan Verification OCR — From 45 Days to 5 Days",
  description:
    "Accelerate loan verification with automated bank statement OCR, ID checks, and compliance audits. 98% accuracy on financial documents.",
  path: "/use-cases/loan-verification",
})

export default function LoanVerificationPage() {
  return (
    <main className="flex flex-col min-h-screen">
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
