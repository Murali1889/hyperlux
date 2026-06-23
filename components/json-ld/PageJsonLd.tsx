import { BreadcrumbJsonLd } from "./BreadcrumbJsonLd"
import { JsonLd } from "./JsonLd"
import { buildBreadcrumbs } from "@/lib/breadcrumbs"
import { SITE_URL, SITE_OG_IMAGE } from "@/lib/seo"

export const PAGE_PUBLISHED_DATE = "2026-06-17"
export const PAGE_MODIFIED_DATE = "2026-06-18"

interface PageJsonLdProps {
  path: string
  title: string
  description: string
  service?: boolean
  datePublished?: string
  dateModified?: string
}

export function PageJsonLd({
  path,
  title,
  description,
  service = false,
  datePublished = PAGE_PUBLISHED_DATE,
  dateModified = PAGE_MODIFIED_DATE,
}: PageJsonLdProps) {
  const url = `${SITE_URL}${path}`
  const breadcrumbs = buildBreadcrumbs(path)
  const hasBreadcrumbs = breadcrumbs.length >= 2

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          ...(hasBreadcrumbs && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
          datePublished,
          dateModified,
          inLanguage: "en-US",
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: SITE_OG_IMAGE,
            width: 1200,
            height: 630,
          },
        }}
      />
      {service && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: title,
            description,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "Worldwide",
            serviceType: title,
            url,
          }}
        />
      )}
    </>
  )
}
