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
        title="Built by HyperVerge"
        description="DocsAPI is built by HyperVerge. The companies below are HyperVerge customers, not DocsAPI customers."
      />

      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-center mb-8">HyperVerge Customers</h3>

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
                  <img src={logo.image} alt={`${logo.name} logo, a HyperVerge customer`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            More about HyperVerge at{" "}
            <a href="https://hyperverge.co" className="text-indigo-600 hover:text-indigo-700 font-medium">
              hyperverge.co
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}