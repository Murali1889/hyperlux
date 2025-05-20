"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle, CheckCircle } from "lucide-react"

export default function KPIStrip() {
  const kpis = [
    {
      icon: <Clock className="h-12 w-12 text-indigo-200" />,
      metric: "65%",
      description: "faster AP cycle",
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-indigo-200" />,
      metric: "35%",
      description: "reduction in exceptions",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-indigo-200" />,
      metric: "99%",
      description: "extraction fidelity",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Proven Results for Finance Teams</h2>
          <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
            Our customers achieve significant improvements in their finance operations
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
