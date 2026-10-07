"use client"

import { motion } from "framer-motion"
import { Upload, FileSearch, CheckSquare, CreditCard, BarChart } from "lucide-react"

const workflowSteps = [
  {
    icon: <Upload className="h-6 w-6 text-white" />,
    title: "Upload",
    description: "Capture invoices via email, scan, upload, or API",
    color: "bg-indigo-500",
  },
  {
    icon: <FileSearch className="h-6 w-6 text-white" />,
    title: "Extract",
    description: "AI extracts all invoice data including line items",
    color: "bg-indigo-600",
  },
  {
    icon: <CheckSquare className="h-6 w-6 text-white" />,
    title: "Validate",
    description: "Automatic 3-way matching with POs and receipts",
    color: "bg-indigo-700",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-white" />,
    title: "Approve",
    description: "Route for approval based on business rules",
    color: "bg-indigo-800",
  },
  {
    icon: <BarChart className="h-6 w-6 text-white" />,
    title: "Pay",
    description: "Sync with ERP and payment systems",
    color: "bg-indigo-900",
  },
]

export default function WorkflowDiagram() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Streamlined Invoice Processing Workflow
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our end-to-end solution transforms your accounts payable process from document capture to payment execution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Workflow */}
          <div className="hidden md:block">
            <div className="relative flex justify-between items-center max-w-4xl mx-auto">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 -translate-y-1/2 z-0"></div>

              {/* Steps */}
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div
                    className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg mb-4`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600 text-center max-w-[150px]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Workflow */}
          <div className="md:hidden">
            <div className="relative max-w-xs mx-auto">
              {/* Connecting Line */}
              <div className="absolute top-0 bottom-0 left-7 w-1 bg-indigo-200 z-0"></div>

              {/* Steps */}
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex items-start mb-8"
                >
                  <div
                    className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-slate-700">
            This workflow cuts out the retyping and provides
            complete visibility into invoice status at every stage. The system adapts to your existing approval
            hierarchies while providing opportunities for continuous process improvement.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
