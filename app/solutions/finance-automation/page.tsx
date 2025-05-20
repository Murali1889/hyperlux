import type { Metadata } from "next"
import FinanceHero from "@/components/solutions/finance-automation/finance-hero"
import PainPointTrio from "@/components/solutions/finance-automation/pain-point-trio"
import FeatureGallery from "@/components/solutions/finance-automation/feature-gallery"
import WorkflowCanvas from "@/components/solutions/finance-automation/workflow-canvas"
import KPIStrip from "@/components/solutions/finance-automation/kpi-strip"
import DemoAnimation from "@/components/solutions/finance-automation/demo-animation"
import CaseStudy from "@/components/solutions/finance-automation/case-study"
import FAQSection from "@/components/solutions/finance-automation/faq-section"
import StickyCTA from "@/components/solutions/finance-automation/sticky-cta"

export const metadata: Metadata = {
  title: "Finance Automation OCR | Invoice & Reconciliation AI",
  description: "Automate invoices, three-way match and bank-statement parsing. 65% faster AP close, 99% accuracy.",
}

export default function FinanceAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <FinanceHero />
      <PainPointTrio />
      <FeatureGallery />
      <WorkflowCanvas />
      <KPIStrip />
      <DemoAnimation />
      <CaseStudy />
      <FAQSection />
      <StickyCTA />
    </main>
  )
}
