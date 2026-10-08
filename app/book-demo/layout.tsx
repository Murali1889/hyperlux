import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/book-demo"
const TITLE = "Book a DocsAPI Demo: Document AI Walkthrough"
const DESCRIPTION =
  "Schedule a personalized DocsAPI demo. See OCR, KYC, AML, and document automation tailored to your lending or fintech workflow, 30-minute session with a custom ROI analysis."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-10-08" />
      {children}
    </>
  )
}
