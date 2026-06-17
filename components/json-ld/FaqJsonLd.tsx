import { JsonLd } from "./JsonLd"
import type { FAQ } from "@/types/resources"

export function FaqJsonLd({ items }: { items: FAQ[] }) {
  if (!items || items.length === 0) return null
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }}
    />
  )
}
