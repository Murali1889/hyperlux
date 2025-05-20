import OperationsHero from "./operations-hero"
import BeforeAfterSplit from "./before-after-split"
import CoreFeatures from "./core-features"
import ImpactMetrics from "./impact-metrics"
import ArchitectureDiagram from "./architecture-diagram"
import IntegrationsCarousel from "./integrations-carousel"
import CooTestimonial from "./coo-testimonial"
import CtaFooter from "./cta-footer"

export default function OperationsPage() {
  return (
    <main className="min-h-screen">
      <OperationsHero />
      <BeforeAfterSplit />
      <CoreFeatures />
      <ImpactMetrics />
      <ArchitectureDiagram />
      <IntegrationsCarousel />
      <CooTestimonial />
      <CtaFooter />
    </main>
  )
}
