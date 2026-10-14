"use client"

import { motion } from "framer-motion"
import { Upload, FileSearch, Database } from "lucide-react"

export default function AutomationWorkflow() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Ingest PO",
      description: "Upload purchase orders via API, email, or batch processing for immediate digitization.",
    },
    {
      icon: <FileSearch className="h-10 w-10 text-white" />,
      title: "Extract Header Fields and Line Items",
      description: "PO number, supplier, dates, and every line item come back as JSON, with SKU and part numbers as printed.",
    },
    {
      icon: <Database className="h-10 w-10 text-white" />,
      title: "Send JSON to Your Systems",
      description: "Your ERP or AP software uses the data for three-way matching with invoices and receipts.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Automation Workflow</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our three-step process transforms purchase orders into actionable data for your procurement systems
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Horizontal workflow - desktop */}
          <div className="hidden md:block relative mb-12">
            <div className="absolute top-24 left-0 right-0 h-1 bg-indigo-200"></div>
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-indigo-700 rounded-full p-5 mb-6 z-10 shadow-lg">{step.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical workflow - mobile */}
          <div className="md:hidden space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-indigo-700 rounded-full p-5 mb-6 z-10 shadow-lg">{step.icon}</div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 h-16 w-1 bg-indigo-200"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-indigo-50 p-6 rounded-xl border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-indigo-900 mb-3">Where the Three-Way Match Happens</h3>
            <p className="text-gray-700">
              DocsAPI covers the first step of a three-way match: it reads the PO and returns clean data. The comparison of PO, goods receipt, and invoice, with the tolerances you set, runs in your ERP or AP software. Fields DocsAPI is unsure about are flagged for review, so a bad read is not mistaken for a real mismatch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
