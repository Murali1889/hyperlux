import type { MetadataRoute } from "next"
import { blogs } from "@/data/blogs"
import { authors } from "@/data/authors"
import { SITE_URL } from "@/lib/seo"

const TODAY = "2026-07-31"

// All real, indexable static routes (excludes /pricing which 404s,
// and dynamic [slug] routes which are expanded separately).
// lastModified defaults to TODAY unless overridden below — only override
// for routes whose actual content changed, to avoid fake freshness signals.
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified?: string }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-09-21" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/use-cases", priority: 0.9, changeFrequency: "monthly" },
  { path: "/use-cases/invoice-processing", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-28" },
  { path: "/use-cases/loan-verification", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/use-cases/id-proofing", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/use-cases/contract-abstraction", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/use-cases/digital-archiving", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/solutions/finance-automation", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/solutions/legal-automation", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/solutions/compliance-risk", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/solutions/customer-experience", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/solutions/operations-efficiency", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documents/financial-docs", priority: 0.75, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/financial-docs/bank-statements", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/financial-docs/invoices", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/financial-docs/purchase-orders", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/identity-docs", priority: 0.75, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/identity-docs/passports", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/identity-docs/driver-licences", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/identity-docs/national-ids", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/legal-docs", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/documents/medical-docs", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/documents/shipping-docs", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-14" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-08-08" },
  { path: "/resources/blogs", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-08-08" },
  { path: "/resources/articles", priority: 0.6, changeFrequency: "weekly" },
  { path: "/resources/newsletters", priority: 0.5, changeFrequency: "monthly" },
  { path: "/tools/which-ocr", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tools/free-ocr", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/book-demo", priority: 0.7, changeFrequency: "yearly" },
  { path: "/llms.txt", priority: 0.3, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/llms-full.txt", priority: 0.3, changeFrequency: "monthly", lastModified: "2026-09-28" },
  { path: "/ai.txt", priority: 0.3, changeFrequency: "monthly", lastModified: "2026-09-21" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: r.lastModified ?? TODAY,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const blogPages: MetadataRoute.Sitemap = blogs
    .filter((b) => !b.noindex)
    .map((b) => ({
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
