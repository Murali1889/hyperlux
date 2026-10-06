import LegalHero from "./legal-hero"
import PainPoints from "./pain-points"
import FeatureGrid from "./feature-grid"
import ContractLifecycleDiagram from "./contract-lifecycle-diagram"
import LegalFAQ from "./legal-faq"
import LegalCTA from "./legal-cta"

export default function LegalAutomationPage() {
  return (
    <main className="min-h-screen">
      <LegalHero />
      <PainPoints />
      <FeatureGrid />
      <ContractLifecycleDiagram />
      <LegalFAQ />
      <LegalCTA />
    </main>
  )
}
