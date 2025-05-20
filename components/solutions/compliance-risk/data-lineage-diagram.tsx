"use client"

import { motion } from "framer-motion"
import { Scan, Lock, FileText, Database, ExternalLink } from "lucide-react"

export default function DataLineageDiagram() {
  const steps = [
    {
      icon: <Scan className="h-8 w-8 text-indigo-700" />,
      title: "Scan",
      description: "Document is scanned or uploaded to the system",
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-700" />,
      title: "Hash",
      description: "Cryptographic hash created for tamper evidence",
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-700" />,
      title: "Extract",
      description: "AI extracts and validates required data fields",
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-700" />,
      title: "Immutable Log",
      description: "All actions recorded in tamper-proof audit log",
    },
    {
      icon: <ExternalLink className="h-8 w-8 text-indigo-700" />,
      title: "Regulator Portal",
      description: "Secure access for auditors and regulators",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Data Lineage & Audit Trail
        </motion.h2>

        {/* Desktop version */}
        <div className="relative max-w-4xl mx-auto mb-12 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-300 -translate-y-1/2 z-0"></div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-full p-4 shadow-md border-2 border-indigo-700 mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{step.title}</h3>
                <p className="text-sm text-center text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile version - vertical flow */}
        <div className="block md:hidden max-w-xs mx-auto mb-12">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-full p-4 shadow-md border-2 border-indigo-700 mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{step.title}</h3>
                <p className="text-sm text-center text-gray-700">{step.description}</p>

                {/* Connector line to next step */}
                {index < steps.length - 1 && <div className="h-8 w-1 bg-indigo-300 mt-4"></div>}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700">
            Our end-to-end data lineage system ensures complete traceability for every document processed. From initial
            scan to regulator access, each step is cryptographically secured and logged. This immutable audit trail
            provides proof of compliance and simplifies regulatory reviews. The system maintains chain-of-custody
            documentation and can generate evidence packages on demand for specific time periods, document types, or
            regulatory requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
