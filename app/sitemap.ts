import type { MetadataRoute } from "next"
import { blogs } from "@/data/blogs"
import { authors } from "@/data/authors"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const today = "2026-06-17"

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: today, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/products`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/use-cases`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resources/blogs`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resources/articles`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/resources/newsletters`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/documents`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/book-demo`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${SITE_URL}/resources/blogs/${b.slug}`,
    lastModified: b.dateModified
      ? b.dateModified.split("T")[0]
      : b.datePublished
        ? b.datePublished.split("T")[0]
        : today,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const authorPages: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${SITE_URL}/author/${a.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages, ...authorPages]
}
