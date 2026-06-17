import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogs } from "@/data/blogs"

export default function FeaturedBlog() {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  const featuredBlog = sortedBlogs[0]

  return (
    <Section className="py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Link
          href={`/resources/blogs/${featuredBlog.slug}`}
          className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 group block"
        >
          <Image
            src={featuredBlog.image || "/placeholder.svg"}
            alt={featuredBlog.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Latest Post
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
              Read Full Blog <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
