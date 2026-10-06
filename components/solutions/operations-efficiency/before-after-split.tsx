"use client"

import { motion } from "framer-motion"
import { Clock, CheckCircle, XCircle, FileText } from "lucide-react"

export default function BeforeAfterSplit() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Manual Processing vs. Automated Extraction
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Before - Manual POD */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 md:p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 bg-gray-200 text-gray-700 px-4 py-2 rounded-bl-lg text-sm font-medium">
              BEFORE
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-4">Manual POD Processing</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-200 p-2 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Time-Consuming</h4>
                  <p className="text-gray-600">
                    Every document keyed by hand, with backlogs whenever volume spikes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-200 p-2 rounded-full mr-4 mt-1">
                  <XCircle className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Error-Prone</h4>
                  <p className="text-gray-600">
                    Retyping introduces typos that surface later as reconciliation problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-200 p-2 rounded-full mr-4 mt-1">
                  <FileText className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Document Handling</h4>
                  <p className="text-gray-600">Physical documents must be sorted, processed, and archived manually.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Processing Status</span>
                <span className="text-red-600 font-medium">Delayed</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">Waiting for someone to key it in</p>
            </div>

            {/* Decorative paper stack */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-200 rounded-md transform rotate-12 opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gray-300 rounded-md transform rotate-6 opacity-30"></div>
          </motion.div>

          {/* After - automated extraction */}
          <motion.div
            className="bg-indigo-50 rounded-xl p-6 md:p-8 relative overflow-hidden mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-indigo-700 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
              AFTER
            </div>

            <h3 className="text-2xl font-bold text-indigo-900 mb-6 mt-4">Automated OCR Extraction</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-200 p-2 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900">Fast</h4>
                  <p className="text-indigo-700">About 1.1 seconds per page in our 2026 benchmark.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-200 p-2 rounded-full mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900">Unclear Fields Flagged</h4>
                  <p className="text-indigo-700">
                    Fields the engine is unsure about go to review instead of being guessed.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-200 p-2 rounded-full mr-4 mt-1">
                  <FileText className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900">Digital Workflow</h4>
                  <p className="text-indigo-700">
                    Automatic document classification, data extraction, and digital archiving.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-100 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-indigo-900 font-medium">Processing Status</span>
                <span className="text-green-600 font-medium">Complete</span>
              </div>
              <div className="w-full bg-indigo-200 rounded-full h-2.5">
                <div className="bg-indigo-700 h-2.5 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="text-indigo-700 text-sm mt-2">About 1.1 s per page</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200 rounded-md transform rotate-12 opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-300 rounded-md transform rotate-6 opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
