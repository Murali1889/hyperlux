import type { Metadata } from "next"
import DocumentsHero from "@/components/documents/documents-hero"
import CategoryTiles from "@/components/documents/category-tiles"
import TemplateLibraryExplainer from "@/components/documents/template-library-explainer"
import AccuracyMetrics from "@/components/documents/accuracy-metrics"
import TimeToValue from "@/components/documents/time-to-value"
import ComplianceStrip from "@/components/documents/compliance-strip"
import DocumentsCta from "@/components/documents/documents-cta"

export const metadata: Metadata = {
  title: "Document Types Supported by HyperVerge OCR",
  description:
    "See every document template our AI extracts — financial, identity, legal, medical and shipping — with 99.5% field accuracy.",
}

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
