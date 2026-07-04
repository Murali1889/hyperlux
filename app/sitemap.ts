import type { MetadataRoute } from "next"
import { blogs } from "@/data/blogs"
import { authors } from "@/data/authors"
import { SITE_URL } from "@/lib/seo"

const TODAY = "2026-07-04"

// All real, indexable static routes (excludes /pricing which 404s,
// and dynamic [slug] routes which are expanded separately).
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/use-cases", priority: 0.9, changeFrequency: "monthly" },
  { path: "/use-cases/invoice-processing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/use-cases/loan-verification", priority: 0.8, changeFrequency: "monthly" },
  { path: "/use-cases/id-proofing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/use-cases/contract-abstraction", priority: 0.8, changeFrequency: "monthly" },
  { path: "/use-cases/digital-archiving", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/finance-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/legal-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/compliance-risk", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/customer-experience", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/operations-efficiency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documents/financial-docs", priority: 0.75, changeFrequency: "monthly" },
  { path: "/documents/financial-docs/bank-statements", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/financial-docs/invoices", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/financial-docs/purchase-orders", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/identity-docs", priority: 0.75, changeFrequency: "monthly" },
  { path: "/documents/identity-docs/passports", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/identity-docs/driver-licences", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/identity-docs/national-ids", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/legal-docs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/medical-docs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documents/shipping-docs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources/blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resources/articles", priority: 0.6, changeFrequency: "weekly" },
  { path: "/resources/newsletters", priority: 0.5, changeFrequency: "monthly" },
  { path: "/book-demo", priority: 0.7, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: TODAY,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${SITE_URL}/resources/blogs/${b.slug}`,
    lastModified: b.dateModified
      ? b.dateModified.split("T")[0]
      : b.datePublished
        ? b.datePublished.split("T")[0]
        : TODAY,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const authorPages: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${SITE_URL}/author/${a.slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages, ...authorPages]
}
