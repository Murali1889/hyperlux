import { JsonLd } from "./JsonLd"
import { SITE_URL, absoluteUrl } from "@/lib/seo"
import type { Author } from "@/types/resources"

export function PersonJsonLd({ author }: { author: Author }) {
  const sameAs: string[] = []
  if (author.linkedin) sameAs.push(author.linkedin)
  if (author.twitter) sameAs.push(author.twitter)

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/author/${author.slug}#person`,
        name: author.name,
        jobTitle: author.title,
        description: author.bio,
        image: absoluteUrl(author.avatar),
        url: `${SITE_URL}/author/${author.slug}`,
        sameAs,
        knowsAbout: author.knowsAbout ?? [],
        worksFor: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  )
}
