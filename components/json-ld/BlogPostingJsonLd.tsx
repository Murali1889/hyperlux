import { JsonLd } from "./JsonLd"
import { SITE_URL, blogUrl, absoluteUrl } from "@/lib/seo"
import type { BlogPost } from "@/types/resources"

export function BlogPostingJsonLd({ blog }: { blog: BlogPost }) {
  const url = blogUrl(blog.slug)
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#blogposting`,
        headline: blog.title,
        description: blog.description ?? blog.excerpt,
        ...(blog.summary && { abstract: blog.summary }),
        image: absoluteUrl(blog.featuredImage || blog.image),
        datePublished: blog.datePublished ?? new Date(blog.date).toISOString(),
        dateModified: blog.dateModified ?? blog.datePublished ?? new Date(blog.date).toISOString(),
        author: { "@id": `${SITE_URL}/author/${blog.author.slug}#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: blog.category,
        keywords: [blog.primary_keyword, ...(blog.secondary_keywords ?? [])]
          .filter(Boolean)
          .join(", "),
        wordCount: estimateWordCount(blog.content),
        inLanguage: "en-US",
      }}
    />
  )
}

function estimateWordCount(html: string): number {
  return html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
}
