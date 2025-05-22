"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, DollarSign } from "lucide-react"

const challenges = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
    title: "Data Entry Errors",
    description:
      "Manual invoice processing is prone to human errors, with studies showing error rates of 3-5%. These mistakes lead to payment issues, supplier disputes, and compliance risks. Automated OCR reduces error rates to less than 1%, ensuring accurate data capture from the start.",
  },
  {
    icon: <Clock className="h-8 w-8 text-amber-500" />,
    title: "Delayed Payments and Penalties",
    description:
      "The average invoice takes 8-10 days to process manually, often resulting in missed early payment discounts and late payment penalties. These delays strain supplier relationships and increase costs. AI-powered invoice processing reduces cycle times to hours instead of days.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-amber-500" />,
    title: "High Processing Costs",
    description:
      "Manual invoice processing costs between $10-$15 per invoice according to industry benchmarks. For companies processing thousands of invoices monthly, these costs add up significantly. Automation reduces per-invoice costs by 60-80%, creating substantial operational savings.",
  },
]

export default function ManualChallenges() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Challenges in Manual Invoice Processing
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Traditional invoice processing creates bottlenecks that impact your entire accounts payable workflow. Here's
            why automation is essential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-slate-100"
            >
              <div className="bg-amber-50 p-3 rounded-lg w-fit mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
