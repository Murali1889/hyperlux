import type { Metadata } from "next"
import ProductsHero from "@/components/products/products-hero"
import ProductFeatures from "@/components/products/product-features"
import ProductComparison from "@/components/products/product-comparison"
import ProductTestimonials from "@/components/products/product-testimonials"
import ProductsCTA from "@/components/products/products-cta"
import ProductIntegrations from "@/components/products/product-integrations"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/products"
const TITLE = "OCR & Document AI API for Builders: DocsAPI"
const DESCRIPTION =
  "Production-ready OCR and document intelligence API, classify, extract, validate, and ship in days. Free tier, transparent pricing, honest support."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ProductsPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-09-21" />
      <ProductsHero />
      <ProductFeatures />
      <ProductComparison />
      <ProductIntegrations />
      <ProductTestimonials />
      <ProductsCTA />
    </>
  )
}
