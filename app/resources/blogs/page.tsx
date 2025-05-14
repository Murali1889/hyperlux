import BlogsHero from "@/components/resources/blogs/blogs-hero"
import BlogsList from "@/components/resources/blogs/blogs-list"
import FeaturedBlog from "@/components/resources/blogs/featured-blog"

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <FeaturedBlog />
      <BlogsList />
    </>
  )
}
