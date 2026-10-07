"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle, CheckCircle } from "lucide-react"

export default function KPIStrip() {
  const kpis = [
    {
      icon: <Clock className="h-12 w-12 text-indigo-200" />,
      metric: "93%",
      description: "invoice line-item accuracy",
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-indigo-200" />,
      metric: "91%",
      description: "row accuracy on multi-page bank statement tables",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-indigo-200" />,
      metric: "$0.02",
      description: "per page to start, with volume discounts",
    },
  ]

  return (
    <section className="py-16 bg-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Numbers You Can Check</h2>
          <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
            Accuracy figures from our published 2026 OCR benchmark, which also lists the categories where we lose
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{kpi.icon}</div>
              <div className="text-5xl font-bold mb-2">{kpi.metric}</div>
              <p className="text-xl text-indigo-100">{kpi.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
