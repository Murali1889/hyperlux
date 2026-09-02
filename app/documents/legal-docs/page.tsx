import type { Metadata } from "next"
import LegalDocsHero from "@/components/documents/legal-docs/legal-docs-hero"
import DocumentTypesSupported from "@/components/documents/legal-docs/document-types-supported"
import KeyFieldsExtracted from "@/components/documents/legal-docs/key-fields-extracted"
import HowItWorks from "@/components/documents/legal-docs/how-it-works"
import BusinessImpact from "@/components/documents/legal-docs/business-impact"
import SecurityCompliance from "@/components/documents/legal-docs/security-compliance"
import CaseStudyHighlight from "@/components/documents/legal-docs/case-study-highlight"
import PillarClusterBlogs from "@/components/documents/shared/pillar-cluster-blogs"
import LegalDocsFAQ from "@/components/documents/legal-docs/legal-docs-faq"
import LegalDocsCta from "@/components/documents/legal-docs/legal-docs-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/legal-docs"
const TITLE = "Legal Document OCR: Contracts, NDAs, Litigation"
const DESCRIPTION =
  "Extract clauses, dates, parties, and obligations from contracts, NDAs, and legal bundles. 95%+ accuracy on multi-column layouts."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function LegalDocsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <LegalDocsHero />
      <DocumentTypesSupported />
      <KeyFieldsExtracted />
      <HowItWorks />
      <BusinessImpact />
      <SecurityCompliance />
      <CaseStudyHighlight />
      <PillarClusterBlogs
        cluster="legal"
        title="Legal Document Processing Guides"
        description="How document intelligence applies to contracts, litigation, and compliance workflows."
      />
      <LegalDocsFAQ />
      <LegalDocsCta />
    </main>
  )
}
