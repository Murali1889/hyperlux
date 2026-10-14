import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { blogs } from "@/data/blogs"

export interface GuideGroup {
  heading: string
  intro: string
  slugs: string[]
}

/**
 * Server-rendered, grouped list of guide links for a hub page. Titles come from
 * the blog data so anchor text always matches the target page. Unlike a card
 * grid capped at six, every listed guide gets a crawlable link.
 */
export default function GuideIndex({
  title,
  description,
  groups,
}: {
  title: string
  description?: string
  groups: GuideGroup[]
}) {
  return (
    <Section background="muted" className="py-8 md:py-16">
      <SectionHeader title={title} description={description ?? ""} />
      <div className="grid gap-8 md:grid-cols-2">
        {groups.map((group) => {
          const items = group.slugs
            .map((slug) => blogs.find((b) => b.slug === slug && !b.noindex))
            .filter((b): b is NonNullable<typeof b> => Boolean(b))
          if (items.length === 0) return null
          return (
            <div key={group.heading} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{group.heading}</h3>
              <p className="text-sm text-slate-600 mb-4">{group.intro}</p>
              <ul className="space-y-2">
                {items.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/resources/blogs/${b.slug}`}
                      className="text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-900"
                    >
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
