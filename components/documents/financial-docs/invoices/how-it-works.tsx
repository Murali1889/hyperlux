"use client"

import { motion } from "framer-motion"
import { Upload, Search, FileText, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Document Upload / API",
      description: "Upload invoices via our portal or send them directly through our API for processing.",
    },
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Template Auto-Detect",
      description:
        "Our AI recognizes the document as an invoice and reads its layout, at about 1.1 seconds per page in our benchmark.",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "OCR + Table Parsing",
      description:
        "Advanced OCR extracts all text while our table detection algorithm captures line items with precision.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Validation Rules",
      description: "Automatic verification of tax calculations, totals, and other fields to ensure data integrity.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our invoice processing workflow is designed for speed, accuracy, and reliability
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-1/6 flex justify-center">
                  <div className="relative">
                    <div className="bg-indigo-700 rounded-full p-4 shadow-lg">{step.icon}</div>
                    <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                      <span className="text-indigo-700 font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-5/6 bg-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connector lines between steps - visible only on desktop */}
          <div className="hidden md:block relative h-0">
            <div className="absolute left-[calc(1/12*100%)] top-[-380px] w-1 h-[320px] bg-indigo-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
