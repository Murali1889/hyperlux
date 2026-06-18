import type { Metadata } from "next"
import BlogsHero from "@/components/resources/blogs/blogs-hero"
import BlogsList from "@/components/resources/blogs/blogs-list"
import FeaturedBlog from "@/components/resources/blogs/featured-blog"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/resources/blogs"
const TITLE = "OCR & Document AI Blog — DocsAPI"
const DESCRIPTION =
  "Honest guides on OCR, PDF parsing, document AI, KYC/AML compliance, and lending automation. 34 in-depth posts from the DocsAPI team."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function BlogsPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <BlogsHero />
      <FeaturedBlog />
      <BlogsList />
    </>
  )
}
