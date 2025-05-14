import BlogContent from "@/components/resources/blogs/blog-content"
import BlogAuthor from "@/components/resources/blogs/blog-author"
import RelatedBlogs from "@/components/resources/blogs/related-blogs"
import BlogCTA from "@/components/resources/blogs/blog-cta"
import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find((blog) => blog.slug === slug)

  if (!blog) {
    return {
      title: 'Blog Not Found'
    }
  }

  return {
    title: blog.metaTag
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }

  const blog = blogs.find((blog) => blog.slug === slug)
  
  if (!blog) {
    notFound()
  }

  return (
    <main className="flex-1">
      <BlogContent blog={blog} />
      <BlogAuthor author={blog.author} />
      <RelatedBlogs currentBlogId={blog.id.toString()} />
      <BlogCTA />
    </main>
  )
}
