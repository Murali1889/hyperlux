"use client"

import { motion } from "framer-motion"
import { Clock, TrendingDown, TrendingUp } from "lucide-react"

export default function BenefitRail() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-indigo-700" />,
      metric: "1.1s",
      title: "Per Page",
      description: "About 1.1 seconds per page in our 2026 benchmark, so the document step does not keep a customer waiting.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-indigo-700" />,
      metric: "Flagged",
      title: "Unclear Fields",
      description: "Fields the engine is unsure about go to review instead of being guessed, so one bad read does not derail an onboarding.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-700" />,
      metric: "SOC 2",
      title: "Type II Certified",
      description: "Customer documents are not used to train models and are kept only for a short, configurable retention period.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">{benefit.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-indigo-700 mb-1">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
