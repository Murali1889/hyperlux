"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/data/blogs"

export default function RecentBlogs() {
  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <SectionHeader title="Recent Blog Posts on OCR Software & Lending Automation" description="" className="mb-0" />
        <Button asChild variant="outline" className="hidden md:flex">
          <Link href="/resources/blogs" className="flex items-center gap-2">
            View All Blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.slice(0, 3).map((blog) => (
          <Link key={blog.id} href={`/resources/blogs/${blog.slug}`} className="group">
            <Card className="border-slate-200 overflow-hidden h-full transition-all duration-200 group-hover:border-indigo-300 group-hover:shadow-md">
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

      <div className="mt-8 text-center md:hidden">
        <Button asChild variant="outline">
          <Link href="/resources/blogs" className="flex items-center gap-2">
            View All Blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
