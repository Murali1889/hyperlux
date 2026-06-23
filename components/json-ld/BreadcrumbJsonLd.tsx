import { JsonLd } from "./JsonLd"

export interface Crumb {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null
  const pageUrl = items[items.length - 1].url
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
