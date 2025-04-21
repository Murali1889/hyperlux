import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { articles } from "@/data/articles"

export default function FeaturedArticle() {
  // Get the most recent article
  const featuredArticle = articles[0]

  // Update the featured article title and excerpt
  featuredArticle.title = "The Future of Document Processing: AI OCR Software in 2025"
  featuredArticle.excerpt =
    "Our comprehensive research on how AI-powered OCR software will transform document processing for lending institutions, with predictions on automation rates, fraud detection capabilities, and integration with emerging technologies."

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl md:w-1/2">
            <Image
              src={featuredArticle.image || "/placeholder.svg"}
              alt={featuredArticle.title}
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                {featuredArticle.category}
              </span>
              <span className="text-sm text-gray-500">{featuredArticle.date}</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-indigo-900 md:text-4xl">
              {featuredArticle.title}
            </h2>
            <p className="mb-6 text-lg text-gray-700">{featuredArticle.excerpt}</p>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src={featuredArticle.author.avatar || "/placeholder.svg"}
                alt={featuredArticle.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-indigo-900">{featuredArticle.author.name}</p>
                <p className="text-sm text-gray-600">{featuredArticle.author.title}</p>
              </div>
            </div>
            <Button asChild className="w-fit bg-indigo-600 text-white hover:bg-indigo-700">
              <Link href={`/resources/articles/${featuredArticle.slug}`}>Read Full Article</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
