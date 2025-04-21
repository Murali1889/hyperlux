import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function BlogHeader({ blog }: { blog: any }) {
  return (
    <Section className="pt-12 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/resources/blogs" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
            ← Back to Blogs
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 border-none">{blog.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {blog.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {blog.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{blog.title}</h1>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src={blog.author.avatar || "/placeholder.svg"}
                  alt={blog.author.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-medium">{blog.author.name}</div>
                <div className="text-sm text-muted-foreground">{blog.author.title}</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-1">Share:</span>
              <button className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 aspect-[21/9] relative overflow-hidden rounded-xl bg-slate-100">
          <img src={blog.featuredImage || blog.image} alt={blog.title} className="object-cover w-full h-full" />
        </div>
      </div>
    </Section>
  )
}
