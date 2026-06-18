import type { Metadata } from "next"
import DocumentsHero from "@/components/documents/documents-hero"
import CategoryTiles from "@/components/documents/category-tiles"
import TemplateLibraryExplainer from "@/components/documents/template-library-explainer"
import AccuracyMetrics from "@/components/documents/accuracy-metrics"
import TimeToValue from "@/components/documents/time-to-value"
import ComplianceStrip from "@/components/documents/compliance-strip"
import DocumentsCta from "@/components/documents/documents-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents"
const TITLE = "Document Types Supported by DocsAPI OCR"
const DESCRIPTION =
  "OCR for financial, identity, legal, medical, and shipping documents. 99.5% field accuracy on 20+ document templates. Free tier, no install."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function DocumentsPage() {
  return (
    <main className="min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
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
