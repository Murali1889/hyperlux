import { JsonLd } from "./JsonLd"
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo"

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  )
}
