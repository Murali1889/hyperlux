import type { Metadata } from "next"
import ProductsHero from "@/components/products/products-hero"
import ProductFeatures from "@/components/products/product-features"
import ProductComparison from "@/components/products/product-comparison"
import ProductTestimonials from "@/components/products/product-testimonials"
import ProductsCTA from "@/components/products/products-cta"
import ProductIntegrations from "@/components/products/product-integrations"
import { BreadcrumbJsonLd } from "@/components/json-ld/BreadcrumbJsonLd"
import { SITE_URL, SITE_NAME } from "@/lib/seo"

const TITLE = "OCR & Document AI API for Builders | DocsAPI"
const DESCRIPTION =
  "Production-ready OCR and document intelligence API — classify, extract, validate, and ship in days. Free tier, transparent pricing, honest support."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/products`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
}

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Products", url: `${SITE_URL}/products` },
        ]}
      />
      <ProductsHero />
      <ProductFeatures />
      <ProductComparison />
      <ProductIntegrations />
      <ProductTestimonials />
      <ProductsCTA />
    </>
  )
}
