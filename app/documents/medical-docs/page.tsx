import type { Metadata } from "next"
import MedicalDocsHero from "@/components/documents/medical-docs/medical-docs-hero"
import DocumentTypesSupported from "@/components/documents/medical-docs/document-types-supported"
import CriticalDataExtracted from "@/components/documents/medical-docs/critical-data-extracted"
import HowItWorks from "@/components/documents/medical-docs/how-it-works"
import ClinicalOperationalBenefits from "@/components/documents/medical-docs/clinical-operational-benefits"
import PrivacySecurity from "@/components/documents/medical-docs/privacy-security"
import CaseStudyHighlight from "@/components/documents/medical-docs/case-study-highlight"
import MedicalDocsFAQ from "@/components/documents/medical-docs/medical-docs-faq"
import MedicalDocsCta from "@/components/documents/medical-docs/medical-docs-cta"

export const metadata: Metadata = {
  title: "Medical Document OCR | Prescriptions, Lab Reports & Insurance Forms",
  description:
    "Digitize medical prescriptions, lab results and insurance forms with 98% field accuracy. Improve patient care by automating data capture and reducing manual errors.",
}

export default function MedicalDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <MedicalDocsHero />
        <DocumentTypesSupported />
        <CriticalDataExtracted />
        <HowItWorks />
        <ClinicalOperationalBenefits />
        <PrivacySecurity />
        <CaseStudyHighlight />
        <MedicalDocsFAQ />
        <MedicalDocsCta />
      </main>
    </div>
  )
}
