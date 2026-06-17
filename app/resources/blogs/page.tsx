import type { Metadata } from "next"
import BlogsHero from "@/components/resources/blogs/blogs-hero"
import BlogsList from "@/components/resources/blogs/blogs-list"
import FeaturedBlog from "@/components/resources/blogs/featured-blog"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "OCR & Document AI Blog — DocsAPI",
  description:
    "Honest guides on OCR, PDF parsing, document AI, KYC/AML compliance, and lending automation. 34 in-depth posts from the DocsAPI team.",
  path: "/resources/blogs",
})

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <FeaturedBlog />
      <BlogsList />
    </>
  )
}
