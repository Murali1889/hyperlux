import type { Metadata } from "next"
import ShippingDocsHero from "@/components/documents/shipping-docs/shipping-docs-hero"
import DocumentTypesSupported from "@/components/documents/shipping-docs/document-types-supported"
import KeyFieldsExtracted from "@/components/documents/shipping-docs/key-fields-extracted"
import HowItWorks from "@/components/documents/shipping-docs/how-it-works"
import OperationalBenefits from "@/components/documents/shipping-docs/operational-benefits"
import SecurityCompliance from "@/components/documents/shipping-docs/security-compliance"
import CaseStudyHighlight from "@/components/documents/shipping-docs/case-study-highlight"
import ShippingDocsFaq from "@/components/documents/shipping-docs/shipping-docs-faq"
import ShippingDocsCta from "@/components/documents/shipping-docs/shipping-docs-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/shipping-docs"
const TITLE = "Shipping Document OCR: BOL, PODs, Packing Lists"
const DESCRIPTION =
  "Extract data from bills of lading, proofs of delivery, packing lists, and manifests. 97% accuracy, real-time shipment visibility."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ShippingDocsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <ShippingDocsHero />
      <DocumentTypesSupported />
      <KeyFieldsExtracted />
      <HowItWorks />
      <OperationalBenefits />
      <SecurityCompliance />
      <CaseStudyHighlight />
      <ShippingDocsFaq />
      <ShippingDocsCta />
    </main>
  )
}
