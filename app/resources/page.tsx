import ResourcesHero from "@/components/resources/resources-hero"
import ResourceCategories from "@/components/resources/resource-categories"
import FeaturedResources from "@/components/resources/featured-resources"
import RecentBlogs from "@/components/resources/recent-blogs"
import PopularArticles from "@/components/resources/popular-articles"
import LatestNewsletters from "@/components/resources/latest-newsletters"
import ResourcesCTA from "@/components/resources/resources-cta"

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourceCategories />
      <FeaturedResources />
      <RecentBlogs />
      <PopularArticles />
      <LatestNewsletters />
      <ResourcesCTA />
    </>
  )
}
