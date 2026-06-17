import type { Metadata } from "next"
import NewslettersHero from "@/components/resources/newsletters/newsletters-hero"
import NewslettersList from "@/components/resources/newsletters/newsletters-list"
import NewslettersCTA from "@/components/resources/newsletters/newsletters-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "DocsAPI Newsletter — Document AI Updates",
  description:
    "Monthly newsletter on OCR, document AI, and compliance trends for fintech and lending teams. Practical updates, no fluff.",
  path: "/resources/newsletters",
})

export default function NewslettersPage() {
  return (
    <>
      <NewslettersHero />
      <NewslettersList />
      <NewslettersCTA />
    </>
  )
}
