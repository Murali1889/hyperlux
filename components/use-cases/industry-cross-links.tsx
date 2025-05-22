"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Landmark, Briefcase, HeartPulse, ScaleIcon as Scales } from "lucide-react"

const industries = [
  {
    name: "Banking",
    icon: <Landmark className="h-10 w-10 text-indigo-600" />,
    href: "/industries#banking",
  },
  {
    name: "Insurance",
    icon: <Building2 className="h-10 w-10 text-indigo-600" />,
    href: "/industries#insurance",
  },
  {
    name: "Supply Chain",
    icon: <Briefcase className="h-10 w-10 text-indigo-600" />,
    href: "/industries#supply-chain",
  },
  {
    name: "Healthcare",
    icon: <HeartPulse className="h-10 w-10 text-indigo-600" />,
    href: "/industries#healthcare",
  },
  {
    name: "Legal",
    icon: <Scales className="h-10 w-10 text-indigo-600" />,
    href: "/industries#legal",
  },
]

export default function IndustryCrossLinks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industry-Specific Solutions</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore how our AI-OCR technology is tailored for your industry's unique requirements
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={industry.href} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center w-48">
                  <div className="flex justify-center mb-4">
                    <div className="bg-indigo-50 p-4 rounded-full">{industry.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
