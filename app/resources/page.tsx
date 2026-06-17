import type { Metadata } from "next"
import ResourcesHero from "@/components/resources/resources-hero"
import ResourceCategories from "@/components/resources/resource-categories"
import FeaturedResources from "@/components/resources/featured-resources"
import RecentBlogs from "@/components/resources/recent-blogs"
import PopularArticles from "@/components/resources/popular-articles"
import LatestNewsletters from "@/components/resources/latest-newsletters"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Resources — Guides, Blogs, Newsletters for Document AI",
  description:
    "DocsAPI guides, blogs, articles, and newsletters on OCR, document AI, KYC, AML, and lending automation. Practical, honest, and free.",
  path: "/resources",
})

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourceCategories />
      {/* <FeaturedResources /> */}
      {/* <RecentBlogs /> */}
      {/* <PopularArticles /> */}
      {/* <LatestNewsletters /> */}
    </>
  )
}
