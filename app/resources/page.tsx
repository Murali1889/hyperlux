import type { Metadata } from "next"
import ResourcesHero from "@/components/resources/resources-hero"
import ResourceCategories from "@/components/resources/resource-categories"
import FeaturedResources from "@/components/resources/featured-resources"
import RecentBlogs from "@/components/resources/recent-blogs"
import PopularArticles from "@/components/resources/popular-articles"
import LatestNewsletters from "@/components/resources/latest-newsletters"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/resources"
const TITLE = "Resources: Guides, Blogs & News for Document AI"
const DESCRIPTION =
  "DocsAPI guides, blogs, articles, and newsletters on OCR, document AI, KYC, AML, and lending automation. Practical, honest, and free."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ResourcesPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <ResourcesHero />
      <ResourceCategories />
      {/* <FeaturedResources /> */}
      {/* <RecentBlogs /> */}
      {/* <PopularArticles /> */}
      {/* <LatestNewsletters /> */}
    </>
  )
}
