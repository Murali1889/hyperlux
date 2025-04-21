import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { Calendar, Clock, FileText, Newspaper } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/data/blogs"
import { articles } from "@/data/articles"
import { newsletters } from "@/data/newsletters"

export default function FeaturedResources() {
  // Get the most recent blog, article, and newsletter
  const featuredBlog = blogs[0]
  const featuredArticle = articles[0]
  const featuredNewsletter = newsletters[0]

  return (
    <Section>
      <SectionHeader
        title="Featured Resources"
        description="Explore our most popular and recent content across all resource types."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {/* Featured Blog */}
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-48">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="30" width="320" height="30" rx="2" fill="white" opacity="0.8" />
                    <rect x="40" y="70" width="280" height="10" rx="2" fill="white" opacity="0.6" />
                    <rect x="40" y="90" width="320" height="10" rx="2" fill="white" opacity="0.6" />
                    <rect x="40" y="110" width="240" height="10" rx="2" fill="white" opacity="0.6" />
                    <rect x="40" y="140" width="120" height="30" rx="15" fill="white" opacity="0.8" />
                    <circle cx="320" cy="100" r="40" fill="white" opacity="0.2" />
                    <circle cx="320" cy="100" r="30" fill="white" opacity="0.3" />
                    <circle cx="320" cy="100" r="20" fill="white" opacity="0.4" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                  Blog
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2 flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {featuredBlog.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {featuredBlog.readTime}
              </div>
            </div>
            <h3 className="mb-2 line-clamp-2 text-lg font-bold">{featuredBlog.title}</h3>
            <p className="mb-4 line-clamp-3 text-sm text-gray-600">{featuredBlog.excerpt}</p>
            <Link
              href={`/resources/blogs/${featuredBlog.slug}`}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              Read More
            </Link>
          </CardContent>
        </Card>

        {/* Featured Article */}
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-48">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="30" width="150" height="140" rx="4" fill="white" opacity="0.8" />
                    <rect x="210" y="30" width="150" height="40" rx="4" fill="white" opacity="0.8" />
                    <rect x="210" y="80" width="150" height="90" rx="4" fill="white" opacity="0.8" />
                    <rect x="50" y="40" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="55" width="100" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="70" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="85" width="110" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="100" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="115" width="90" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="130" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="50" y="145" width="110" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="40" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="55" width="100" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="90" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="105" width="110" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="120" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="135" width="90" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                    <rect x="220" y="150" width="130" height="8" rx="2" fill="#0284c7" opacity="0.6" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                  Article
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2 flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {featuredArticle.date}
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {featuredArticle.readTime}
              </div>
            </div>
            <h3 className="mb-2 line-clamp-2 text-lg font-bold">{featuredArticle.title}</h3>
            <p className="mb-4 line-clamp-3 text-sm text-gray-600">{featuredArticle.excerpt}</p>
            <Link
              href={`/resources/articles/${featuredArticle.slug}`}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              Read More
            </Link>
          </CardContent>
        </Card>

        {/* Featured Newsletter */}
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-48">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="30" width="300" height="140" rx="4" fill="white" opacity="0.9" />
                    <rect x="70" y="50" width="260" height="30" rx="2" fill="#10b981" opacity="0.2" />
                    <rect x="70" y="90" width="120" height="60" rx="2" fill="#10b981" opacity="0.2" />
                    <rect x="210" y="90" width="120" height="60" rx="2" fill="#10b981" opacity="0.2" />
                    <path d="M70,50 L330,50 L330,80 L70,80 Z" fill="#10b981" opacity="0.1" />
                    <rect x="80" y="60" width="180" height="10" rx="2" fill="#10b981" opacity="0.6" />
                    <rect x="80" y="100" width="100" height="8" rx="2" fill="#10b981" opacity="0.6" />
                    <rect x="80" y="115" width="80" height="8" rx="2" fill="#10b981" opacity="0.6" />
                    <rect x="80" y="130" width="100" height="8" rx="2" fill="#10b981" opacity="0.6" />
                    <rect x="220" y="100" width="100" height="8" rx="2" fill="#10b981" opacity="0.6" />
                    <rect x="220" y="115" width="80" height="8" rx="2" fill="#10b981" opacity="0.6" />
                    <rect x="220" y="130" width="100" height="8" rx="2" fill="#10b981" opacity="0.6" />
                    <circle cx="310" cy="65" r="10" fill="#10b981" opacity="0.6" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                  Newsletter
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2 flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {featuredNewsletter.date}
              </div>
              <div className="flex items-center gap-1">
                <Newspaper className="h-3 w-3" />
                {featuredNewsletter.category}
              </div>
            </div>
            <h3 className="mb-2 line-clamp-2 text-lg font-bold">{featuredNewsletter.title}</h3>
            <p className="mb-4 line-clamp-3 text-sm text-gray-600">{featuredNewsletter.excerpt}</p>
            <Link
              href={`/resources/newsletters/${featuredNewsletter.slug}`}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              Read More
            </Link>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
