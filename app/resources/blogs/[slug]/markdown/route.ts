import { NextResponse } from "next/server"
import { blogs } from "@/data/blogs"
import { blogToMarkdown } from "@/lib/blog-to-markdown"
import { blogUrl } from "@/lib/seo"

/**
 * Markdown twin endpoint.
 *
 * URL: /resources/blogs/[slug]/markdown
 *
 * Returns the blog post as clean Markdown for AI crawler consumption
 * (ChatGPT, Claude, Perplexity, Google AI Overviews). Per AEO best
 * practice:
 *  - X-Robots-Tag: noindex so Google does NOT index this as a
 *    separate document (would split impressions / cause duplicate)
 *  - Link header with rel="canonical" pointing to HTML URL so the
 *    AI engine cites the canonical HTML, not the .md
 *  - Content-Type: text/markdown so well-behaved bots negotiate it
 *  - The .md URL is intentionally excluded from sitemap.xml
 */

export const dynamic = "force-static"

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return new NextResponse("Not found", { status: 404 })
  }

  const markdown = blogToMarkdown(blog)
  const canonical = blogUrl(blog.slug)

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
      Link: `<${canonical}>; rel="canonical"`,
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  })
}
