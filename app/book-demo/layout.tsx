import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Book a DocsAPI Demo — Document AI Walkthrough",
  description:
    "Schedule a personalized DocsAPI demo. See OCR, KYC, AML, and document automation tailored to your lending or fintech workflow.",
  path: "/book-demo",
})

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
