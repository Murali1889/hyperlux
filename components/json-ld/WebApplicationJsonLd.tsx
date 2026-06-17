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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/pricing`,
        },
        provider: { "@id": `${SITE_URL}/#organization` },
        featureList: [
          "OCR API",
          "Document classification",
          "KYC document verification",
          "AML document checks",
          "Invoice parsing",
          "Searchable PDF generation",
        ],
      }}
    />
  )
}
