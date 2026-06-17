import type { Metadata } from "next"
import DocumentsHero from "@/components/documents/documents-hero"
import CategoryTiles from "@/components/documents/category-tiles"
import TemplateLibraryExplainer from "@/components/documents/template-library-explainer"
import AccuracyMetrics from "@/components/documents/accuracy-metrics"
import TimeToValue from "@/components/documents/time-to-value"
import ComplianceStrip from "@/components/documents/compliance-strip"
import DocumentsCta from "@/components/documents/documents-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Document Types Supported by DocsAPI OCR",
  description:
    "OCR for financial, identity, legal, medical, and shipping documents. 99.5% field accuracy on 20+ document templates. Free tier, no install.",
  path: "/documents",
})

export default function DocumentsPage() {
  return (
    <main className="min-h-screen">
      <DocumentsHero />
      <CategoryTiles />
      <TemplateLibraryExplainer />
      <AccuracyMetrics />
      <TimeToValue />
      <ComplianceStrip />
      <DocumentsCta />
    </main>
  )
}
