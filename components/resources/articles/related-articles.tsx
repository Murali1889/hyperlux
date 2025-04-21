import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RelatedArticles({ slug }: { slug: string }) {
  // In a real application, you would fetch related articles based on the current article
  const relatedArticles = [
    {
      id: 1,
      title: "Machine Learning Models for Credit Risk Assessment",
      excerpt:
        "An overview of the most effective machine learning models for credit risk assessment in small business lending.",
      category: "Risk Management",
      image: "/placeholder.svg?height=400&width=600",
      slug: "machine-learning-models-credit-risk",
    },
    {
      id: 2,
      title: "Regulatory Considerations for AI in Lending",
      excerpt: "Navigating the complex regulatory landscape when implementing AI-driven lending solutions.",
      category: "Regulatory Compliance",
      image: "/placeholder.svg?height=400&width=600",
      slug: "regulatory-considerations-ai-lending",
    },
    {
      id: 3,
      title: "The Role of Alternative Data in SME Lending",
      excerpt: "How non-traditional data sources are transforming risk assessment for small and medium enterprises.",
      category: "Lending Innovation",
      image: "/placeholder.svg?height=400&width=600",
      slug: "alternative-data-sme-lending",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold text-indigo-900">Related Articles</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} className="object-cover" fill />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    {article.category}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-indigo-900">{article.title}</h3>
                <p className="mb-6 flex-1 text-sm text-gray-600">{article.excerpt}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-auto w-fit text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <Link href={`/resources/articles/${article.slug}`}>
                    Read Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
