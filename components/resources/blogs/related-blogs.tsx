import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/data/blogs"
import type { BlogPost } from "@/types/resources"

function scoreRelevance(candidate: BlogPost, current: BlogPost): number {
  let score = 0
  if (candidate.cluster && candidate.cluster === current.cluster) score += 5
  if (candidate.category && candidate.category === current.category) score += 3
  const currentTags = new Set(current.tags ?? [])
  for (const tag of candidate.tags ?? []) {
    if (currentTags.has(tag)) score += 1
  }
  return score
}

function getRelatedBlogs(currentBlogId: string): BlogPost[] {
  const current = blogs.find((b) => b.id.toString() === currentBlogId)
  const candidates = blogs.filter((b) => b.id.toString() !== currentBlogId)

  if (!current) return candidates.slice(0, 3)

  const scored = candidates
    .map((b) => ({ blog: b, score: scoreRelevance(b, current) }))
    .sort((a, b) => b.score - a.score)

  const topScored = scored.filter((s) => s.score > 0).slice(0, 3)
  if (topScored.length >= 3) return topScored.map((s) => s.blog)

  // Not enough genuinely related posts: fill remaining slots with the most
  // recently published posts (still excluding anything already selected).
  const chosenIds = new Set(topScored.map((s) => s.blog.id))
  const fallback = candidates
    .filter((b) => !chosenIds.has(b.id))
    .sort((a, b) => new Date(b.datePublished ?? b.date).getTime() - new Date(a.datePublished ?? a.date).getTime())

  return [...topScored.map((s) => s.blog), ...fallback].slice(0, 3)
}

export default function RelatedBlogs({ currentBlogId }: { currentBlogId: string }) {
  const relatedBlogs = getRelatedBlogs(currentBlogId)

  return (
    <Section background="muted" className="py-8 md:py-16">
      <SectionHeader title="Related Blog Posts" description="" />

      <div className="grid md:grid-cols-3 gap-8">
        {relatedBlogs.map((blog) => (
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
    </Section>
  )
}
