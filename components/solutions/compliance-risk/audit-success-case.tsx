"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AuditSuccessCase() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-indigo-700 p-8 flex items-center justify-center">
              <CheckCircle className="h-24 w-24 text-white" />
            </div>

            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Audit Success Story</h3>

              <p className="text-gray-700 mb-4">
                A mid-tier bank implemented our compliance solution just three months before a scheduled Reserve Bank of
                India (RBI) audit. During the audit period, the bank processed over 50,000 KYC documents with zero OCR
                exceptions. The RBI auditors were able to verify complete document lineage and validate the integrity of
                all customer onboarding processes, resulting in a clean audit report with no compliance findings.
              </p>

              <div className="flex items-center text-indigo-700 font-medium">
                <span>Read the full case study</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
