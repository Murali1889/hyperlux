import type { Metadata } from "next"
import ArticlesHero from "@/components/resources/articles/articles-hero"
import ArticleCategories from "@/components/resources/articles/article-categories"
import ArticlesList from "@/components/resources/articles/articles-list"
import FeaturedArticle from "@/components/resources/articles/featured-article"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/resources/articles"
const TITLE = "Articles: Industry Classification & Commercial Lending"
const DESCRIPTION =
  "Articles on SIC and NAICS codes, regulatory compliance, AI in commercial lending, and industry concentration risk for fintech operations."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ArticlesPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <ArticlesHero />
      <FeaturedArticle />
      <ArticleCategories />
      <ArticlesList />
    </>
  )
}
