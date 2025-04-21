import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogs } from "@/data/blogs"

export default function FeaturedBlog() {
  // Get the most recent blog
  const featuredBlog = blogs[0]

  // Update the featured blog title
  featuredBlog.title = "How AI-Powered OCR Software Transforms Mortgage Lending"

  // Update the excerpt
  featuredBlog.excerpt =
    "Discover how our intelligent document automation platform with 99.9% accurate data extraction is helping mortgage lenders reduce origination costs by up to 40% while enhancing compliance and fraud detection."

  return (
    <Section className="py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={featuredBlog.image || "/placeholder.svg"}
            alt={featuredBlog.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
            Featured Post
          </div>
          <h2 className="text-3xl font-bold">{featuredBlog.title}</h2>
          <p className="text-lg text-muted-foreground">{featuredBlog.excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {featuredBlog.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {featuredBlog.readTime}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                <Image
                  src={featuredBlog.author.avatar || "/placeholder.svg"}
                  alt={featuredBlog.author.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-medium">{featuredBlog.author.name}</div>
                <div className="text-sm text-muted-foreground">{featuredBlog.author.title}</div>
              </div>
            </div>
          </div>
          <Button asChild className="mt-2 bg-indigo-600 hover:bg-indigo-700">
            <Link href={`/resources/blogs/${featuredBlog.slug}`} className="flex items-center gap-2">
              Read Full Article <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
