"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Financial Institutions" },
  { value: "30M+", label: "Loan Applications Processed" },
  { value: "$12B+", label: "Loan Value Facilitated" },
  { value: "95%", label: "Classification Accuracy" },
]

const logos = [
  { name: "HSBC", region: "Global" },
  { name: "Citibank", region: "Global" },
  { name: "DBS", region: "Asia" },
  { name: "OCBC", region: "Asia" },
  { name: "UOB", region: "Asia" },
  { name: "Standard Chartered", region: "Global" },
  { name: "CIMB", region: "Asia" },
  { name: "Maybank", region: "Asia" },
  { name: "Bank of America", region: "Americas" },
  { name: "JP Morgan", region: "Global" },
  { name: "Goldman Sachs", region: "Global" },
  { name: "Wells Fargo", region: "Americas" },
]

export default function TrustedBy() {
  const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 6))
  const [currentIndex, setCurrentIndex] = useState(6)

  useEffect(() => {
    const interval = setInterval(() => {
      // Replace one logo at a time
      const randomIndex = Math.floor(Math.random() * 6)
      const newLogo = logos[currentIndex % logos.length]

      setVisibleLogos((prev) => {
        const updated = [...prev]
        updated[randomIndex] = newLogo
        return updated
      })

      setCurrentIndex((prev) => prev + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-16 md:py-24 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            HyperVerge powers industry classification for the world's leading financial institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-center mb-8">Our Global Client Network</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {visibleLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-40 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center p-3">
                  <div className="text-lg font-bold text-slate-700">{logo.name}</div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{logo.region}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              And many more across North America, Europe, Asia, and Australia
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#testimonials"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
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
      </div>
    </section>
  )
}
