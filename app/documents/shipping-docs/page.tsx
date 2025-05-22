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

export const metadata: Metadata = {
  title: "Shipping Document OCR | Bills of Lading, PODs & Packing Lists",
  description:
    "Automate extraction from bills of lading, proofs of delivery, and packing lists with 97% accuracy. Gain real-time shipment visibility and reduce manual errors.",
}

export default function ShippingDocsPage() {
  return (
    <main className="flex flex-col min-h-screen">
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
