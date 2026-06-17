import type { Metadata } from "next"
import ArticlesHero from "@/components/resources/articles/articles-hero"
import ArticleCategories from "@/components/resources/articles/article-categories"
import ArticlesList from "@/components/resources/articles/articles-list"
import FeaturedArticle from "@/components/resources/articles/featured-article"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Articles — Industry Classification & Commercial Lending",
  description:
    "Articles on SIC and NAICS codes, regulatory compliance, AI in commercial lending, and industry concentration risk for fintech operations.",
  path: "/resources/articles",
})

export default function ArticlesPage() {
  return (
    <>
      <ArticlesHero />
      <FeaturedArticle />
      <ArticleCategories />
      <ArticlesList />
    </>
  )
}
