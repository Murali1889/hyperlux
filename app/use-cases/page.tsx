import type { Metadata } from "next"
import UseCasesHero from "@/components/use-cases/use-cases-hero"
import UseCaseCards from "@/components/use-cases/use-case-cards"
import CommonWorkflow from "@/components/use-cases/common-workflow"
import ImpactMetrics from "@/components/use-cases/impact-metrics"
import IndustryCrossLinks from "@/components/use-cases/industry-cross-links"
import UseCasesCta from "@/components/use-cases/use-cases-cta"
import { BreadcrumbJsonLd } from "@/components/json-ld/BreadcrumbJsonLd"
import { SITE_URL, SITE_NAME } from "@/lib/seo"

const TITLE = "Use Cases: KYC, AML, Invoice & Lending Automation | DocsAPI"
const DESCRIPTION =
  "Production use cases for DocsAPI — KYC document verification, AML checks, invoice processing, loan automation, and revenue cycle management."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/use-cases` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/use-cases`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, "max-image-preview": "large" },
}

export default function UseCasesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Use Cases", url: `${SITE_URL}/use-cases` },
        ]}
      />
      <UseCasesHero />
      <UseCaseCards />
      <CommonWorkflow />
      <ImpactMetrics />
      <IndustryCrossLinks />
      <UseCasesCta />
    </main>
  )
}
