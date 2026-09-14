import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/data/blogs"
import type { BlogCluster } from "@/types/resources"

export default function PillarClusterBlogs({
  cluster,
  slugs,
  title = "Related Articles",
  description = "",
}: {
  cluster?: BlogCluster
  slugs?: string[]
  title?: string
  description?: string
}) {
  const clusterBlogs = blogs
    .filter((b) => (slugs ? slugs.includes(b.slug) : b.cluster === cluster) && !b.noindex)
    .sort((a, b) => new Date(b.datePublished ?? b.date).getTime() - new Date(a.datePublished ?? a.date).getTime())
    .slice(0, 6)

  if (clusterBlogs.length === 0) return null

  return (
    <Section background="muted" className="py-8 md:py-16">
      <SectionHeader title={title} description={description} />

      <div className="grid md:grid-cols-3 gap-8">
        {clusterBlogs.map((blog) => (
          <Link key={blog.id} href={`/resources/blogs/${blog.slug}`} className="group">
            <Card className="border-slate-200 overflow-hidden h-full transition-all duration-200 group-hover:border-indigo-300 group-hover:shadow-md">
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-indigo-600 font-medium mb-2">{blog.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/resources/blogs"
          className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
        >
          View all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
