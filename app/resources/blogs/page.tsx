import BlogsHero from "@/components/resources/blogs/blogs-hero"
import BlogCategories from "@/components/resources/blogs/blog-categories"
import BlogsList from "@/components/resources/blogs/blogs-list"
import FeaturedBlog from "@/components/resources/blogs/featured-blog"
import BlogsCTA from "@/components/resources/blogs/blogs-cta"

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <FeaturedBlog />
      <BlogCategories />
      <BlogsList />
      <BlogsCTA />
    </>
  )
}
