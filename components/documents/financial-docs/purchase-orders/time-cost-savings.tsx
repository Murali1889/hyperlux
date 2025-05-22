"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle } from "lucide-react"

export default function TimeCostSavings() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Time & Cost Savings</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Quantifiable benefits of automating your purchase order processing
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-indigo-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full mr-4">
                <Clock className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900">Processing Time</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Manual PO Entry:</span>
                <span className="font-bold text-red-600">120 seconds</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Automated Processing:</span>
                <span className="font-bold text-green-600">12 seconds</span>
              </div>
              <div className="h-px bg-gray-200 w-full my-2"></div>
              <div className="text-center font-bold text-indigo-700">90% time savings</div>
            </div>

            <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Process 10x more purchase orders with the same staff, allowing your team to focus on strategic supplier
                management instead of data entry.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-indigo-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full mr-4">
                <AlertTriangle className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900">Match Exceptions</h3>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-indigo-700">↓ 70%</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Fewer discrepancies between POs, receipts, and invoices</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Reduced manual intervention for exception handling</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Faster resolution of legitimate exceptions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
