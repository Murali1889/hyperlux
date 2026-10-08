import type { Metadata } from "next"
import NewslettersHero from "@/components/resources/newsletters/newsletters-hero"
import NewslettersList from "@/components/resources/newsletters/newsletters-list"
import NewslettersCTA from "@/components/resources/newsletters/newsletters-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/resources/newsletters"
const TITLE = "DocsAPI Newsletter: Document AI Updates"
const DESCRIPTION =
  "Monthly newsletter on OCR, document AI, and compliance trends for fintech and lending teams. Practical updates, no fluff."

// 2023 template pages with a placeholder author: kept out of the index until rewritten
export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, noindex: true })

export default function NewslettersPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <NewslettersHero />
      <NewslettersList />
      <NewslettersCTA />
    </>
  )
}
