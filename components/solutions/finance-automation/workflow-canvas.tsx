"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, FileSearch, CheckCircle, CreditCard, ChevronRight } from "lucide-react"

export default function WorkflowCanvas() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: "erp",
      title: "ERP Integration",
      icon: <Database className="h-10 w-10 text-white" />,
      description: "Connect seamlessly with your existing ERP system",
      details:
        "Our platform integrates with SAP, Oracle, Microsoft Dynamics, and other major ERP systems with pre-built connectors.",
      color: "bg-indigo-700",
    },
    {
      id: "ocr",
      title: "OCR Processing",
      icon: <FileSearch className="h-10 w-10 text-white" />,
      description: "Extract line items, totals and vendor details from every invoice",
      details:
        "Our AI-powered OCR extracts line items, totals, tax information, and vendor details from invoices in multiple languages.",
      color: "bg-indigo-700",
    },
    {
      id: "rules",
      title: "Approval Rules",
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      description: "Automate approvals based on your custom business rules",
      details:
        "Configure multi-level approval workflows, delegation rules, and exception handling to match your organization's policies.",
      color: "bg-indigo-700",
    },
    {
      id: "payment",
      title: "Payment Gateway",
      icon: <CreditCard className="h-10 w-10 text-white" />,
      description: "Process payments automatically through your preferred gateway",
      details:
        "Integrate with over 50 payment gateways worldwide to automate payment execution with complete audit trails.",
      color: "bg-indigo-700",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Seamless Finance Workflow Integration</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform integrates with your existing systems to create an end-to-end automated finance workflow
          </p>
        </div>

        {/* Interactive Workflow Diagram */}
        <div className="relative mb-16">
          {/* Progress Bar */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-indigo-700"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Mobile progress indicator - visible only on small screens */}
          <div className="block md:hidden mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((_, index) => (
                <div
                  key={`mobile-step-${index}`}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStep === index ? "bg-indigo-700 text-white" : "bg-gray-200 text-gray-500"
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
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center ${step.color} shadow-lg mb-4 cursor-pointer transition-all duration-300 ${activeStep === index ? "ring-4 ring-indigo-300" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                      <ChevronRight className="h-8 w-8 text-indigo-700" />
                    </div>
                  )}
                </motion.button>
                <h3 className="font-semibold text-indigo-900 text-lg text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center mt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className={`p-4 rounded-lg ${steps[activeStep].color} flex-shrink-0`}>{steps[activeStep].icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-2">{steps[activeStep].title}</h3>
              <p className="text-gray-700 mb-4">{steps[activeStep].description}</p>
              <p className="text-gray-600">{steps[activeStep].details}</p>

              {activeStep === 0 && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {["SAP", "Oracle", "Microsoft", "Tally"].map((erp) => (
                    <div key={erp} className="bg-indigo-50 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-indigo-700">{erp}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeStep === 1 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Invoices", "Purchase Orders", "Receipts", "Statements", "Contracts"].map((doc) => (
                    <span key={doc} className="bg-indigo-50 px-3 py-1 rounded-full text-xs font-medium text-indigo-700">
                      {doc}
                    </span>
                  ))}
                </div>
              )}

              {activeStep === 2 && (
                <div className="mt-6 space-y-2">
                  {["Amount thresholds", "Multi-level approvals", "Department routing", "Exception handling"].map(
                    (rule) => (
                      <div key={rule} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-indigo-700" />
                        <span className="text-sm text-gray-700">{rule}</span>
                      </div>
                    ),
                  )}
                </div>
              )}

              {activeStep === 3 && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Bank Transfer", "Credit Card", "ACH", "Wire", "Check", "Digital Wallet"].map((payment) => (
                    <div key={payment} className="bg-indigo-50 p-2 rounded text-center">
                      <span className="text-xs font-medium text-indigo-700">{payment}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            className="px-4 py-2 rounded-lg bg-white border border-indigo-200 text-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
