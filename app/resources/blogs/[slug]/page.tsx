import BlogContent from "@/components/resources/blogs/blog-content"
import BlogAuthor from "@/components/resources/blogs/blog-author"
import BlogFaq from "@/components/resources/blogs/blog-faq"
import RelatedBlogs from "@/components/resources/blogs/related-blogs"
import BlogCTA from "@/components/resources/blogs/blog-cta"
import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { BlogPostingJsonLd } from "@/components/json-ld/BlogPostingJsonLd"
import { BreadcrumbJsonLd } from "@/components/json-ld/BreadcrumbJsonLd"
import { FaqJsonLd } from "@/components/json-ld/FaqJsonLd"
import { PersonJsonLd } from "@/components/json-ld/PersonJsonLd"
import { SITE_URL, SITE_NAME, blogUrl, absoluteUrl } from "@/lib/seo"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return { title: "Blog Not Found" }

  const title = blog.metaTag || blog.title
  const description = blog.description ?? blog.excerpt
  const url = blogUrl(blog.slug)
  const image = absoluteUrl(blog.featuredImage || blog.image)
  const published = blog.datePublished ?? new Date(blog.date).toISOString()
  const modified = blog.dateModified ?? published

  return {
    title,
    description,
    keywords: [blog.primary_keyword, ...(blog.secondary_keywords ?? [])]
      .filter(Boolean)
      .join(", "),
    alternates: {
      canonical: url,
      types: {
        "text/markdown": `${url}/markdown`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE_NAME,
      publishedTime: published,
      modifiedTime: modified,
      authors: [`${SITE_URL}/author/${blog.author.slug}`],
      images: [{ url: image, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !blog.noindex,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params
  if (!slug) notFound()

  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) notFound()

  return (
    <>
      <BlogPostingJsonLd blog={blog} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/resources/blogs` },
          { name: blog.title, url: blogUrl(blog.slug) },
        ]}
      />
      {blog.faq && blog.faq.length > 0 && <FaqJsonLd items={blog.faq} />}
      <PersonJsonLd author={blog.author} />

      <main className="flex-1">
        <BlogContent blog={blog} />
        {blog.faq && blog.faq.length > 0 && <BlogFaq faqs={blog.faq} />}
        <BlogAuthor author={blog.author} />
        <RelatedBlogs currentBlogId={blog.id.toString()} />
        <BlogCTA />
      </main>
    </>
  )
}
