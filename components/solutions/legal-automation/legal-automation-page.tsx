import LegalHero from "./legal-hero"
import PainPoints from "./pain-points"
import FeatureGrid from "./feature-grid"
import Metrics from "./metrics"
import ContractLifecycleDiagram from "./contract-lifecycle-diagram"
import FinTechCaseStudy from "./fintech-case-study"
import LegalFAQ from "./legal-faq"
import LegalCTA from "./legal-cta"

export default function LegalAutomationPage() {
  return (
    <main className="min-h-screen">
      <LegalHero />
      <PainPoints />
      <FeatureGrid />
      <Metrics />
      <ContractLifecycleDiagram />
      <FinTechCaseStudy />
      <LegalFAQ />
      <LegalCTA />
    </main>
  )
}
