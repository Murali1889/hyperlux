import ArticlesHero from "@/components/resources/articles/articles-hero"
import ArticleCategories from "@/components/resources/articles/article-categories"
import ArticlesList from "@/components/resources/articles/articles-list"
import FeaturedArticle from "@/components/resources/articles/featured-article"
import ArticlesCTA from "@/components/resources/articles/articles-cta"

export default function ArticlesPage() {
  return (
    <>
      <ArticlesHero />
      <FeaturedArticle />
      <ArticleCategories />
      <ArticlesList />
      <ArticlesCTA />
    </>
  )
}
