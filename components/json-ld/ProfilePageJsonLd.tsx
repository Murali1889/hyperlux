import { JsonLd } from "./JsonLd"
import { SITE_URL } from "@/lib/seo"
import type { Author } from "@/types/resources"

export function ProfilePageJsonLd({ author }: { author: Author }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/author/${author.slug}#profilepage`,
        mainEntity: { "@id": `${SITE_URL}/author/${author.slug}#person` },
        about: { "@id": `${SITE_URL}/author/${author.slug}#person` },
        url: `${SITE_URL}/author/${author.slug}`,
        name: `${author.name} — ${author.title}`,
      }}
    />
  )
}
