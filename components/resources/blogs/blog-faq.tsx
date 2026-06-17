"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import type { FAQ } from "@/types/resources"

export default function BlogFaq({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-indigo-600" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Common questions
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`group rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-200 bg-white shadow-md"
                    : "border-slate-200 bg-white hover:border-indigo-100 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`font-semibold transition-colors ${
                      isOpen ? "text-indigo-700" : "text-slate-900 group-hover:text-indigo-600"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-indigo-600 border-indigo-600 rotate-180"
                        : "border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-colors ${
                        isOpen ? "text-white" : "text-slate-500 group-hover:text-indigo-600"
                      }`}
                    />
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
