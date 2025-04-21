import ArticleHeader from "@/components/resources/articles/article-header"
import ArticleContent from "@/components/resources/articles/article-content"
import ArticleAuthor from "@/components/resources/articles/article-author"
import RelatedArticles from "@/components/resources/articles/related-articles"
import ArticleCTA from "@/components/resources/articles/article-cta"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex-1">
      <ArticleHeader slug={params.slug} />
      <ArticleContent slug={params.slug} />
      <ArticleAuthor slug={params.slug} />
      <RelatedArticles slug={params.slug} />
      <ArticleCTA />
    </main>
  )
}
