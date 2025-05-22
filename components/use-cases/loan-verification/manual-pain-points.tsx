"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle, FileWarning } from "lucide-react"

export default function ManualPainPoints() {
  const painPoints = [
    {
      icon: <Clock className="w-10 h-10 text-indigo-600" />,
      title: "Time-consuming document review",
      description:
        "Loan officers spend up to 70% of their time manually reviewing bank statements, pay stubs, and tax documents. This tedious process creates bottlenecks in the loan pipeline, extends decision timelines, and reduces the number of applications an officer can process daily. In competitive markets, slow verification can mean lost business opportunities.",
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-indigo-600" />,
      title: "Risk of human errors",
      description:
        "Manual data entry from complex financial documents introduces significant error potential. Misinterpreted income figures, overlooked transactions, or incorrectly calculated debt-to-income ratios can lead to improper loan decisions. These errors not only create compliance risks but can result in poor-quality loans that increase portfolio risk and potentially lead to defaults.",
    },
    {
      icon: <FileWarning className="w-10 h-10 text-indigo-600" />,
      title: "Compliance complexity",
      description:
        "Financial institutions face increasingly stringent regulatory requirements for loan verification. Manual processes make it difficult to maintain consistent documentation, create reliable audit trails, and demonstrate due diligence. Compliance failures can result in regulatory penalties, reputational damage, and increased scrutiny. The complexity increases with each new regulation or guideline.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Manual Verification Pain Points</h2>
          <p className="text-lg text-slate-600">
            Traditional loan verification processes create significant challenges for lenders and borrowers alike. Here
            are the key issues our AI-powered solution addresses:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">{point.title}</h3>
              <p className="text-slate-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
