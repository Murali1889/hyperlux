"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle, DollarSign } from "lucide-react"

export default function TimeCostSavings() {
  const metrics = [
    {
      icon: <Clock className="h-10 w-10 text-indigo-700" />,
      title: "Processing Time",
      before: "Keyed by hand",
      after: "About 1.1 s per page",
      improvement: "Measured in our 2026 benchmark",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-indigo-700" />,
      title: "Unclear Fields",
      before: "Found after payment",
      after: "Flagged before payment",
      improvement: "Low-confidence fields go to review",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-indigo-700" />,
      title: "AP Cost per Invoice",
      before: "Your loaded cost",
      after: "From $0.02 per page",
      improvement: "Volume discounts above 100K pages a month",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">What Changes When Invoices Are Automated</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your exact savings depend on volume and how your team works today, so here is what we can measure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">{metric.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 text-center mb-4">{metric.title}</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Before:</span>
                  <span className="font-bold text-red-600">{metric.before}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">After:</span>
                  <span className="font-bold text-green-600">{metric.after}</span>
                </div>
                <div className="h-px bg-gray-200 w-full my-2"></div>
                <div className="text-center font-bold text-indigo-700">{metric.improvement}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
