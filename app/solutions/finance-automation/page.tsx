import type { Metadata } from "next"
import FinanceHero from "@/components/solutions/finance-automation/finance-hero"
import PainPointTrio from "@/components/solutions/finance-automation/pain-point-trio"
import FeatureGallery from "@/components/solutions/finance-automation/feature-gallery"
import WorkflowCanvas from "@/components/solutions/finance-automation/workflow-canvas"
import KPIStrip from "@/components/solutions/finance-automation/kpi-strip"
import DemoAnimation from "@/components/solutions/finance-automation/demo-animation"
import FAQSection from "@/components/solutions/finance-automation/faq-section"
import StickyCTA from "@/components/solutions/finance-automation/sticky-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/finance-automation"
const TITLE = "Finance Automation OCR: Invoice & Reconciliation"
const DESCRIPTION =
  "Automate invoices, three-way match, and bank statement parsing. 93% invoice line-item accuracy in our 2026 benchmark, from $0.02 per page."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function FinanceAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-10-06" />
      <FinanceHero />
      <PainPointTrio />
      <FeatureGallery />
      <WorkflowCanvas />
      <KPIStrip />
      <DemoAnimation />
      <FAQSection />
      <StickyCTA />
    </main>
  )
}
