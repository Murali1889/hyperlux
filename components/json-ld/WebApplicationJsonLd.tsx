import { JsonLd } from "./JsonLd"
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_LOGO } from "@/lib/seo"

export function WebApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "@id": `${SITE_URL}/#webapp`,
        name: SITE_NAME,
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "DocumentManagement",
        operatingSystem: "Web, Cloud",
        description: SITE_DESCRIPTION,
        image: SITE_LOGO,
        // Per-page pricing, not free: access starts with a demo, then a free 30-day trial for qualified lenders
        offers: {
          "@type": "Offer",
          price: "0.02",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "0.02",
            priceCurrency: "USD",
            unitText: "page",
          },
          description:
            "From $0.02 per page, with volume discounts above 100K pages a month. Access starts with a demo; qualified lenders get a free 30-day trial.",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/book-demo`,
        },
        provider: { "@id": `${SITE_URL}/#organization` },
        featureList: [
          "OCR API",
          "Document type classification",
          "Structured field extraction as JSON",
          "Multi-page table stitching",
          "KYC document verification",
          "AML document checks",
          "Invoice parsing",
          "Searchable PDF generation",
        ],
      }}
    />
  )
}
