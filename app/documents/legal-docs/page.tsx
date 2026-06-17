import type { Metadata } from "next"
import LegalDocsHero from "@/components/documents/legal-docs/legal-docs-hero"
import DocumentTypesSupported from "@/components/documents/legal-docs/document-types-supported"
import KeyFieldsExtracted from "@/components/documents/legal-docs/key-fields-extracted"
import HowItWorks from "@/components/documents/legal-docs/how-it-works"
import BusinessImpact from "@/components/documents/legal-docs/business-impact"
import SecurityCompliance from "@/components/documents/legal-docs/security-compliance"
import CaseStudyHighlight from "@/components/documents/legal-docs/case-study-highlight"
import LegalDocsFAQ from "@/components/documents/legal-docs/legal-docs-faq"
import LegalDocsCta from "@/components/documents/legal-docs/legal-docs-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Legal Document OCR — Contracts, NDAs, Litigation",
  description:
    "Extract clauses, dates, parties, and obligations from contracts, NDAs, and legal bundles. 95%+ accuracy on multi-column layouts.",
  path: "/documents/legal-docs",
})

export default function LegalDocsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <LegalDocsHero />
      <DocumentTypesSupported />
      <KeyFieldsExtracted />
      <HowItWorks />
      <BusinessImpact />
      <SecurityCompliance />
      <CaseStudyHighlight />
      <LegalDocsFAQ />
      <LegalDocsCta />
    </main>
  )
}
