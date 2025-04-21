import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { articles } from "@/data/articles"

export default function ArticlesList() {
  // Simulate updated articles with OCR, document automation, fraud detection, and lending keywords
  const updatedArticles = articles.map((article) => ({
    ...article,
    title: `Unlock Efficiency with OCR Software: ${article.title}`,
    excerpt: `Discover how document automation and OCR technology can revolutionize your lending processes and enhance fraud detection. ${article.excerpt}`,
  }))

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-indigo-900">
          Latest Articles on OCR Software & Document Automation
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updatedArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} className="object-cover" fill />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-indigo-900">{article.title}</h3>
                <p className="mb-6 flex-1 text-gray-600">{article.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={article.author.avatar || "/placeholder.svg"}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="text-sm">
                      <p className="font-medium text-indigo-900">{article.author.name}</p>
                      <p className="text-xs text-gray-500">{article.author.title}</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700">
                    <Link href={`/resources/articles/${article.slug}`}>Read</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
