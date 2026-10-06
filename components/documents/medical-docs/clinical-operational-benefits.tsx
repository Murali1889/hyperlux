"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, TrendingUp } from "lucide-react"

export default function ClinicalOperationalBenefits() {
  const benefits = [
    {
      icon: <CheckCircle className="h-12 w-12 text-indigo-700" />,
      title: "Fewer Transcription Errors",
      description:
        "Fields are read the same way every time, and unclear ones are flagged for review instead of guessed, which matters when a misread dosage or member ID has real consequences.",
    },
    {
      icon: <Clock className="h-12 w-12 text-indigo-700" />,
      title: "Data Available Sooner",
      description:
        "Pages are processed at about 1.1 seconds each in our 2026 benchmark, so data no longer waits in a queue for someone to key it in.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-indigo-700" />,
      title: "Accelerate Claims Approval Cycles",
      description:
        "Faster, more accurate insurance form processing leads to quicker approvals and reduced denial rates.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
              Clinical & Operational Benefits
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Transform your healthcare operations with automated document processing that improves accuracy, speed, and
              patient care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">Improving Patient Outcomes and Provider Efficiency</h3>
          <p className="text-gray-600">
            By automating document processing, healthcare providers can focus more on patient care and less on
            paperwork. Faster access to accurate medical information leads to better clinical decisions, reduced
            medication errors, and improved care coordination across departments. Staff previously dedicated to manual
            data entry can be reallocated to higher-value patient care activities, improving both operational efficiency
            and job satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}
