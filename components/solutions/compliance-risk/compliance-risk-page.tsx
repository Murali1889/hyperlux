import ComplianceHero from "./compliance-hero"
import RegulationCards from "./regulation-cards"
import LiveDashboard from "./live-dashboard"
import DataLineageDiagram from "./data-lineage-diagram"
import CertDownload from "./cert-download"
import AuditSuccessCase from "./audit-success-case"
import ComplianceFAQ from "./compliance-faq"
import ComplianceCTA from "./compliance-cta"

export default function ComplianceRiskPage() {
  return (
    <main className="min-h-screen">
      <ComplianceHero />
      <RegulationCards />
      <LiveDashboard />
      <DataLineageDiagram />
      <CertDownload />
      <AuditSuccessCase />
      <ComplianceFAQ />
      <ComplianceCTA />
    </main>
  )
}
