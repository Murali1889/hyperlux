"use client"

import { motion } from "framer-motion"
import { Upload, Search, FileJson } from "lucide-react"

export default function TemplateLibraryExplainer() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Upload",
      description: "Upload any document through our API or drag-and-drop interface.",
    },
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Auto-Detect",
      description: "Our AI automatically identifies the document type and template.",
    },
    {
      icon: <FileJson className="h-10 w-10 text-white" />,
      title: "Extract JSON",
      description: "Structured data is extracted and returned in clean JSON format.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">How the Template Library Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our intelligent document processing platform handles any document format with a simple three-step process
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Process steps */}
          <div className="relative">
            {/* Connector line - desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-indigo-300 z-0"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-indigo-700 rounded-full p-5 mb-4 shadow-lg">{step.icon}</div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{step.title}</h3>
                    <p className="text-center text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SVG Pipeline Visualization */}
          <motion.div
            className="mt-16 bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <svg width="80%" height="120" viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Document icon */}
                <rect x="50" y="20" width="80" height="100" rx="4" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
                <line x1="70" y1="40" x2="110" y2="40" stroke="#4338CA" strokeWidth="2" />
                <line x1="70" y1="60" x2="110" y2="60" stroke="#4338CA" strokeWidth="2" />
                <line x1="70" y1="80" x2="90" y2="80" stroke="#4338CA" strokeWidth="2" />

                {/* Arrow 1 */}
                <path d="M150 70 L250 70" stroke="#4338CA" strokeWidth="2" />
                <polygon points="245,65 255,70 245,75" fill="#4338CA" />

                {/* Processing box */}
                <rect x="270" y="30" width="160" height="80" rx="8" fill="#4338CA" />
                <text x="350" y="75" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                  AI Processing
                </text>

                {/* Arrow 2 */}
                <path d="M450 70 L550 70" stroke="#4338CA" strokeWidth="2" />
                <polygon points="545,65 555,70 545,75" fill="#4338CA" />

                {/* JSON result */}
                <rect x="570" y="20" width="120" height="100" rx="4" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
                <text x="630" y="50" textAnchor="middle" fill="#4338CA" fontSize="12">
                  {"{"}
                  {"}"}
                </text>
                <text x="630" y="70" textAnchor="middle" fill="#4338CA" fontSize="12">
                  "data": {"..."}
                </text>
                <text x="630" y="90" textAnchor="middle" fill="#4338CA" fontSize="12">
                  {"{"}
                  {"}"}
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
