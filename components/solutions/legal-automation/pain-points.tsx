"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle, FileSearch } from "lucide-react"

export default function PainPoints() {
  const painPoints = [
    {
      icon: <Clock className="h-10 w-10 text-indigo-700" />,
      title: "Clause hunt takes hours",
      description:
        "Legal teams spend hours searching contracts for one clause. It is slow, and on long agreements people miss things. The inefficiency increases exponentially with contract volume, creating bottlenecks in legal operations and delaying critical business decisions.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-indigo-700" />,
      title: "Renewals slip through cracks",
      description:
        "Without automated tracking, important contract renewal dates are easily missed. These oversights can lead to automatic renewals of unfavorable terms, missed opportunities to renegotiate, or even unintended contract terminations. Miss a renewal date and you keep paying for a service you meant to cancel, or lose the window to renegotiate.",
    },
    {
      icon: <FileSearch className="h-10 w-10 text-indigo-700" />,
      title: "PII redaction is tedious",
      description:
        "Manually identifying and redacting personally identifiable information (PII) from legal documents is painstakingly slow and error-prone. Missing sensitive information can lead to compliance violations and potential data breaches. It needs close attention to detail, and it eats lawyer hours that should go to judgment calls. As privacy regulations tighten globally, this burden only increases.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Legal Document Challenges</h2>
          <p className="text-xl text-gray-700">
            Common pain points that legal teams face when managing contracts and documents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-lg p-6 shadow-sm"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
