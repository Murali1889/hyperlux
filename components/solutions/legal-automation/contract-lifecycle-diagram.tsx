"use client"

import { motion } from "framer-motion"
import { FileText, Search, Database, PenTool } from "lucide-react"

export default function ContractLifecycleDiagram() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Intake",
      description: "Document upload & classification",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "OCR",
      description: "AI extraction & analysis",
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "CMS",
      description: "Storage & management",
    },
    {
      icon: <PenTool className="h-8 w-8 text-white" />,
      title: "e-Signature",
      description: "Secure digital signing",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Contract Lifecycle Management</h2>
          <p className="text-xl text-gray-700">Our end-to-end solution streamlines the entire contract process</p>
        </motion.div>

        {/* Desktop version with horizontal line */}
        <div className="relative max-w-4xl mx-auto mb-16 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-300 -translate-y-1/2 z-0"></div>
          <div className="relative z-10 grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-indigo-700 rounded-full p-4 mb-4 shadow-lg">{step.icon}</div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile version - vertical steps */}
        <div className="block md:hidden max-w-xs mx-auto mb-16">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center relative"
              >
                <div className="bg-indigo-700 rounded-full p-4 mb-4 shadow-lg">{step.icon}</div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>

                {/* Connector line to next step */}
                {index < steps.length - 1 && (
                  <div className="h-8 w-1 bg-indigo-300 absolute -bottom-8 left-1/2 transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-700">
            Our integrated contract lifecycle management system transforms how legal teams handle documents from
            creation to execution. The process begins with intelligent intake, automatically classifying incoming
            contracts by type and priority. Our advanced OCR technology then extracts key information, identifying
            clauses, parties, dates, and obligations with remarkable precision. The structured data flows seamlessly
            into your contract management system, creating a searchable repository of all agreements. Finally, our
            secure e-signature integration allows for rapid execution, with automatic archiving and renewal tracking.
            This end-to-end approach eliminates silos, reduces manual work, and provides unprecedented visibility into
            your contract portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
