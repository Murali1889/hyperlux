"use client"

import { motion } from "framer-motion"
import { Upload, Search, FileText, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Upload / API Call",
      description: "Upload your financial document or send it via our API for processing.",
    },
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Smart Template Match",
      description: "Our AI identifies the document type and applies the appropriate template in under 2 seconds.",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Line-item Capture + Tax Calculation",
      description: "All line items are extracted with their details, and tax calculations are verified automatically.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Structured Data Output",
      description: "Receive clean, structured data ready for your financial systems.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [steps.length])

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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">How It Works for Finance</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our intelligent document processing platform handles financial documents with a simple four-step process
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Progress steps */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep ? "bg-indigo-700 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-2 bg-indigo-700 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Current step details */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-indigo-700 rounded-full p-6 shadow-lg">{steps[currentStep].icon}</div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                  Step {currentStep + 1}: {steps[currentStep].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">{steps[currentStep].description}</p>

                {currentStep === 0 && (
                  <div className="bg-white p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <Upload className="h-6 w-6 text-indigo-700" />
                      </div>
                      <div>
                        <div className="font-medium text-indigo-900">Multiple Upload Options</div>
                        <div className="text-gray-600">Drag & drop, API integration, or batch processing</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="bg-white p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <Search className="h-6 w-6 text-indigo-700" />
                      </div>
                      <div>
                        <div className="font-medium text-indigo-900">Template Matching Speed</div>
                        <div className="text-gray-600">
                          <span className="font-bold text-green-600">{"<"} 2 seconds</span> for any financial document
                          type
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="bg-white p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <FileText className="h-6 w-6 text-indigo-700" />
                      </div>
                      <div>
                        <div className="font-medium text-indigo-900">Line-Item Accuracy</div>
                        <div className="text-gray-600">
                          <span className="font-bold text-green-600">96%</span> accuracy on complex tables and line
                          items
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="bg-white p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                        <CheckCircle className="h-6 w-6 text-indigo-700" />
                      </div>
                      <div>
                        <div className="font-medium text-indigo-900">Integration Ready</div>
                        <div className="text-gray-600">JSON output ready for SAP, Oracle, QuickBooks, and more</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
