"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Upload, Brain, CheckCircle, ThumbsUp } from "lucide-react"

export default function WorkflowVisualization() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-indigo-600" />,
      title: "Document Upload",
      description:
        "Borrowers or loan officers upload bank statements, pay stubs, tax returns, and other verification documents through a secure portal or API.",
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "AI Extraction",
      description:
        "Our AI engine automatically extracts relevant data from documents, including transaction details, income figures, and employment information.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      title: "Validation",
      description:
        "The system validates extracted data against lending criteria, flags discrepancies, and routes exceptions for human review when necessary.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-indigo-600" />,
      title: "Approval",
      description:
        "Verified data flows directly into loan origination systems, enabling faster decisions and reducing the overall loan processing timeline.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Workflow Visualization</h2>
          <p className="text-lg text-slate-600">
            See how our AI-powered solution transforms the loan verification process, reducing processing time by 75%
            while improving accuracy.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="hidden md:block h-2 bg-indigo-100 absolute top-12 left-0 right-0 z-0 rounded-full">
            <motion.div
              className="h-full bg-indigo-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${index <= activeStep ? "" : "opacity-50"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    index <= activeStep ? "bg-white" : "bg-slate-100"
                  } shadow-md`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 text-center">{step.title}</h3>
                <p className="text-slate-600 text-center text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Progress Indicator */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index <= activeStep ? "bg-indigo-600" : "bg-indigo-200"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mt-16 border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-slate-700 text-center">
            <span className="font-semibold">Key Benefits:</span> This streamlined workflow reduces verification time
            from days to minutes, increases data accuracy to 98%, and allows loan officers to focus on customer
            relationships rather than paperwork. The result is faster loan decisions, improved borrower experience, and
            increased operational efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
