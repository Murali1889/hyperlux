"use client"

import { motion } from "framer-motion"
import { Clock, TrendingDown, TrendingUp } from "lucide-react"

export default function BenefitRail() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-indigo-700" />,
      metric: "30s",
      title: "Signup Time",
      description: "Complete digital onboarding in just 30 seconds with our AI-powered document processing.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-indigo-700" />,
      metric: "↓ 40%",
      title: "Drop-off Rate",
      description: "Reduce customer abandonment by 40% with frictionless document verification flows.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-700" />,
      metric: "↑ 18%",
      title: "CSAT Score",
      description: "Boost customer satisfaction scores by 18% with faster, more accurate document processing.",
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
