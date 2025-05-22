"use client"

import { motion } from "framer-motion"
import { Scan, BrainCircuit, Database, Save, FileSearch } from "lucide-react"
import { useState } from "react"

export default function WorkflowVisualization() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Scan",
      description: "Digitize paper documents or import existing digital files in bulk",
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "OCR",
      description: "Extract text and metadata with AI-powered OCR technology",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Index",
      description: "Automatically categorize and tag documents for searchability",
    },
    {
      icon: <Save className="w-8 h-8" />,
      title: "Store",
      description: "Securely archive documents with access controls and retention policies",
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Retrieve",
      description: "Instantly find and access documents through powerful search",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Workflow Visualization</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined document archiving process integrates seamlessly with your existing document management
            system.
          </p>
        </motion.div>

        <div className="relative mt-12 py-8">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-100 -translate-y-1/2 rounded-full"></div>

          {/* Progress Bar */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-indigo-600 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: hoveredStep !== null ? `${(hoveredStep + 1) * 25}%` : "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: hoveredStep !== null ? 0.3 : 2,
              ease: "easeInOut",
              delay: hoveredStep !== null ? 0 : 0.5,
            }}
          ></motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center z-10 transition-all duration-300 mb-4 ${
                    hoveredStep === index || hoveredStep === null
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : hoveredStep !== null && index <= hoveredStep
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-indigo-600 border-2 border-indigo-200"
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 text-center">{step.title}</h3>
                <p className="text-sm text-slate-600 text-center mt-2 max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-lg text-slate-700">
            This end-to-end workflow provides unprecedented speed and accuracy in document processing, reducing
            retrieval times by up to 85% while maintaining complete data integrity and security throughout the document
            lifecycle.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
