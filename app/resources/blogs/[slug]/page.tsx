import BlogHeader from "@/components/resources/blogs/blog-header"
import BlogContent from "@/components/resources/blogs/blog-content"
import BlogAuthor from "@/components/resources/blogs/blog-author"
import RelatedBlogs from "@/components/resources/blogs/related-blogs"
import BlogCTA from "@/components/resources/blogs/blog-cta"
import { blogs } from "@/data/blogs"

export default function BlogPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data from an API or CMS
  // For this example, we'll use mock data
  const blog = blogs.find((blog) => blog.slug === params.slug) || blogs[0]

  return (
    <main className="flex-1">
      <BlogHeader blog={blog} />
      <BlogContent blog={blog} />
      <BlogAuthor author={blog.author} />
      <RelatedBlogs currentBlogId={blog.id} />
      <BlogCTA />
    </main>
  )
}
