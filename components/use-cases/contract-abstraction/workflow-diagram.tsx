"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { Upload, Cpu, CheckCircle, FileOutput } from "lucide-react"

const steps = [
  {
    icon: <Upload className="h-6 w-6 text-indigo-600" />,
    title: "Upload",
    description: "Send contracts as PDFs or scans through the API.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-indigo-600" />,
    title: "AI Extraction",
    description: "Key clauses, dates, and obligations are read out and given confidence scores.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
    title: "Review",
    description: "Your legal team checks the clauses flagged as uncertain.",
  },
  {
    icon: <FileOutput className="h-6 w-6 text-indigo-600" />,
    title: "Export",
    description: "Load the structured JSON into your contract system.",
  },
]

export default function WorkflowDiagram() {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.3 },
      }))
      await controls.start({
        width: "100%",
        transition: { duration: 1.5, ease: "easeInOut" },
      })
    }
    sequence()
  }, [controls])

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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Workflow Diagram</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our streamlined process transforms complex contracts into structured, actionable data in minutes instead of
            hours.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200 z-0">
            <motion.div
              className="h-full bg-indigo-600 rounded-full"
              initial={{ width: 0 }}
              custom={5}
              animate={controls}
            ></motion.div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0 }}
                animate={controls}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white w-24 h-24 rounded-full border-4 border-indigo-100 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-slate-700">
            <span className="font-semibold">Time savings:</span> Every contract is read the same way, and
            reviewers only check the clauses that are flagged. Our AI-powered workflow enables legal teams to focus on high-value
            analysis rather than tedious document review.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
