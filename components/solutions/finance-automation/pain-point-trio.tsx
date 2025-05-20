"use client"

import { motion } from "framer-motion"
import { FileWarning, Clock, FileX } from "lucide-react"

export default function PainPointTrio() {
  const painPoints = [
    {
      icon: <FileWarning className="h-12 w-12 text-red-500" />,
      title: "Manual invoice typing stalls AP",
      description:
        "Data entry errors and backlogs delay payments and create bottlenecks in your accounts payable process.",
    },
    {
      icon: <Clock className="h-12 w-12 text-red-500" />,
      title: "Late payments & penalties",
      description:
        "Missing payment deadlines leads to penalties, damaged vendor relationships, and lost early payment discounts.",
    },
    {
      icon: <FileX className="h-12 w-12 text-red-500" />,
      title: "Reconciliation mismatches",
      description:
        "Manual reconciliation is time-consuming and error-prone, leading to financial discrepancies and audit issues.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Common Finance Operation Challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Organizations face these critical pain points that impact financial efficiency and accuracy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-indigo-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-4">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
