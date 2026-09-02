import type { Metadata } from "next"
import MedicalDocsHero from "@/components/documents/medical-docs/medical-docs-hero"
import DocumentTypesSupported from "@/components/documents/medical-docs/document-types-supported"
import CriticalDataExtracted from "@/components/documents/medical-docs/critical-data-extracted"
import HowItWorks from "@/components/documents/medical-docs/how-it-works"
import ClinicalOperationalBenefits from "@/components/documents/medical-docs/clinical-operational-benefits"
import PrivacySecurity from "@/components/documents/medical-docs/privacy-security"
import CaseStudyHighlight from "@/components/documents/medical-docs/case-study-highlight"
import PillarClusterBlogs from "@/components/documents/shared/pillar-cluster-blogs"
import MedicalDocsFAQ from "@/components/documents/medical-docs/medical-docs-faq"
import MedicalDocsCta from "@/components/documents/medical-docs/medical-docs-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/medical-docs"
const TITLE = "Medical Document OCR: Prescriptions, Lab Reports"
const DESCRIPTION =
  "Digitize medical prescriptions, lab results, and insurance forms with 98% field accuracy. HIPAA-eligible with BAA. Reduce manual errors."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function MedicalDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <main className="flex-1">
        <MedicalDocsHero />
        <DocumentTypesSupported />
        <CriticalDataExtracted />
        <HowItWorks />
        <ClinicalOperationalBenefits />
        <PrivacySecurity />
        <CaseStudyHighlight />
        <PillarClusterBlogs
          cluster="healthcare"
          title="Healthcare Document Processing Guides"
          description="How document intelligence applies to claims, coding, compliance, and revenue cycle workflows."
        />
        <MedicalDocsFAQ />
        <MedicalDocsCta />
      </main>
    </div>
  )
}
