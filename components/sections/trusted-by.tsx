"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import Image from "next/image"

const logos = [
  { name: "HSBC", image: "/logos/hsbc.webp" },
  { name: "Revolut", image: "/logos/revolut.webp" },
  { name: "Home Credit", image: "/logos/home-credit.webp" },
  { name: "Grab", image: "/logos/grab.webp" },
]

export default function TrustedBy() {
  return (
    <Section background="primary" id="trusted-by">
      <SectionHeader
        title="Trusted by Industry Leaders"
        description="DocsAPI powers industry classification for the world's leading financial institutions"
      />

      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-center mb-8">Our Global Client Network</h3>

        <div className="overflow-hidden">
          <div
            className="flex gap-10 animate-marquee"
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-40"
              >
                <div className="h-24 w-44 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center p-3">
                  <img src={logo.image} alt={logo.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            And many more across North America, Europe, Asia, and Australia
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="#testimonials" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
          Read what our clients say about us
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </Section>
  )
}