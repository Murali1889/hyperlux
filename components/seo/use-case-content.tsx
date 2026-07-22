import { JsonLd } from "@/components/json-ld/JsonLd"

export interface ContentSection {
  heading: string
  paragraphs: string[]
}

export interface ContentFaq {
  question: string
  answer: string
}

interface UseCaseContentProps {
  intro: string
  sections: ContentSection[]
  faqs?: ContentFaq[]
}

/**
 * Server-rendered long-form prose section for thin use-case / hub landing pages.
 * Adds substantial unique indexable content (Google Helpful Content threshold)
 * plus FAQPage schema. No "use client" so the content is in the initial HTML.
 */
export function UseCaseContent({ intro, sections, faqs }: UseCaseContentProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <article className="prose prose-slate max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed">{intro}</p>
          {sections.map((s, i) => (
            <div key={i} className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-slate-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {faqs && faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
              {faqs.map((f, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>

      {faqs && faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
    </section>
  )
}
