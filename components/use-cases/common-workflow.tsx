"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Upload, Brain, CheckCircle, Share2, BarChart3 } from "lucide-react"

const workflowSteps = [
  {
    title: "Document Ingestion",
    description: "Capture documents via API, mobile SDK, or batch upload",
    icon: <Upload className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "AI Extraction",
    description: "ML models extract structured data with high precision",
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Validation",
    description: "Automated checks ensure data quality and completeness",
    icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Delivery",
    description: "Seamless integration with your business systems",
    icon: <Share2 className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Analytics",
    description: "Gain insights from document processing metrics",
    icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
  },
]

export default function CommonWorkflow() {
  const [activeStep, setActiveStep] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      width: `${(activeStep + 1) * (100 / workflowSteps.length)}%`,
      transition: { duration: 0.5, ease: "easeInOut" },
    })
  }, [activeStep, controls])

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common AI-OCR Workflow</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our standardized approach ensures consistent results across all document types
          </p>
        </motion.div>

        <div className="relative mb-12">
          <div className="h-2 bg-slate-200 rounded-full">
            <motion.div
              className="h-full bg-indigo-600 rounded-full"
              animate={controls}
              initial={{ width: `${100 / workflowSteps.length}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-6 text-center transition-all duration-300 ${
                index === activeStep
                  ? "bg-white shadow-lg border-2 border-indigo-500 scale-105"
                  : "bg-white shadow border border-slate-200"
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className={`rounded-full p-3 ${index === activeStep ? "bg-indigo-100" : "bg-slate-100"}`}>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {workflowSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeStep ? "bg-indigo-600" : "bg-slate-300"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
