import type { Metadata } from "next"
import LoanHero from "@/components/use-cases/loan-verification/loan-hero"
import ManualPainPoints from "@/components/use-cases/loan-verification/manual-pain-points"
import KeyFeatures from "@/components/use-cases/loan-verification/key-features"
import WorkflowVisualization from "@/components/use-cases/loan-verification/workflow-visualization"
import BusinessOutcomes from "@/components/use-cases/loan-verification/business-outcomes"
import DemoVideo from "@/components/use-cases/loan-verification/demo-video"
import LoanFaq from "@/components/use-cases/loan-verification/loan-faq"
import LoanCta from "@/components/use-cases/loan-verification/loan-cta"

export const metadata: Metadata = {
  title: "Loan Verification Automation | AI-OCR for Faster Lending",
  description:
    "Accelerate loan application verification by automating bank statement and document extraction with 98% accuracy and compliance-ready audits.",
}

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
