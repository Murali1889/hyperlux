import { JsonLd } from "./JsonLd"

export interface Crumb {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const valid = items.filter((it) => it.name && it.url)
  if (valid.length < 2) return null
  const pageUrl = valid[valid.length - 1].url
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: valid.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
