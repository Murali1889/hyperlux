export const metadata = {
  title: "AI-Powered OCR Features for Document Processing | HyperVerge",
  description:
    "Explore AI-powered OCR features: classify, capture, detect, and analyze documents with precision. Optimize lending workflows with our software. Book a demo!",
}

import ProductsHero from "@/components/products/products-hero"
import ProductsList from "@/components/products/products-list"
import ProductFeatures from "@/components/products/product-features"
import ProductComparison from "@/components/products/product-comparison"
import ProductTestimonials from "@/components/products/product-testimonials"
import ProductsCTA from "@/components/products/products-cta"
import ProductIntegrations from "@/components/products/product-integrations"

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsList />
      <ProductFeatures />
      <ProductComparison />
      <ProductIntegrations />
      <ProductTestimonials />
      <ProductsCTA />
    </>
  )
}
