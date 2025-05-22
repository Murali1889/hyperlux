"use client"

import { motion } from "framer-motion"
import { Clock, DollarSign } from "lucide-react"

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
            Quantifiable benefits of automating your financial document processing
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
              <h3 className="text-2xl font-bold text-indigo-900">Time Savings</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-gray-700">Manual Key-in</div>
                <div className="font-bold text-red-600">3 minutes</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-700">Automated Processing</div>
                <div className="font-bold text-green-600">15 seconds</div>
              </div>

              <div className="h-1 bg-gray-200 w-full"></div>

              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-700">Speed Improvement</div>
                <div className="font-bold text-indigo-700">88% faster</div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="font-medium text-indigo-900 mb-2">What this means:</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-700 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      Process 1,000 invoices in the time it takes to manually process 120
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-700 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Reallocate AP staff to higher-value activities</span>
                  </li>
                </ul>
              </div>
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
                <DollarSign className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900">Cost Savings</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-gray-700">Cost per Doc (Manual)</div>
                <div className="font-bold text-red-600">₹12</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-700">Cost per Doc (Automated)</div>
                <div className="font-bold text-green-600">₹3</div>
              </div>

              <div className="h-1 bg-gray-200 w-full"></div>

              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-700">Cost Reduction</div>
                <div className="font-bold text-indigo-700">75% savings</div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="font-medium text-indigo-900 mb-2">Annual Impact:</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-700 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">₹9 savings per document processed</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-700 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">For 10,000 docs/month = ₹90 lakh annual savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
