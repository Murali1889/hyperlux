"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function AccuracyBenchmarks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [headerAccuracy, setHeaderAccuracy] = useState(0)
  const [lineItemAccuracy, setLineItemAccuracy] = useState(0)
  const [totalsAccuracy, setTotalsAccuracy] = useState(0)

  useEffect(() => {
    if (isInView) {
      const headerTimer = setTimeout(() => {
        const headerInterval = setInterval(() => {
          setHeaderAccuracy((prev) => {
            if (prev < 99) return prev + 1
            clearInterval(headerInterval)
            return 99
          })
        }, 20)
        return () => clearInterval(headerInterval)
      }, 0)

      const lineItemTimer = setTimeout(() => {
        const lineItemInterval = setInterval(() => {
          setLineItemAccuracy((prev) => {
            if (prev < 96) return prev + 1
            clearInterval(lineItemInterval)
            return 96
          })
        }, 20)
        return () => clearInterval(lineItemInterval)
      }, 200)

      const totalsTimer = setTimeout(() => {
        const totalsInterval = setInterval(() => {
          setTotalsAccuracy((prev) => {
            if (prev < 99.2) return prev + 0.1
            clearInterval(totalsInterval)
            return 99.2
          })
        }, 10)
        return () => clearInterval(totalsInterval)
      }, 400)

      return () => {
        clearTimeout(headerTimer)
        clearTimeout(lineItemTimer)
        clearTimeout(totalsTimer)
      }
    }
  }, [isInView])

  return (
    <section className="py-20 bg-indigo-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Accuracy Benchmarks</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our invoice OCR delivers industry-leading accuracy across all data fields
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
            <div className="space-y-8">
              {/* Header Fields Accuracy */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium text-indigo-900">Header Fields</div>
                  <div className="font-bold text-indigo-700">{headerAccuracy}%</div>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-700 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${headerAccuracy}%` : "0%" }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </div>

              {/* Line-Item Fields Accuracy */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium text-indigo-900">Line-Item Fields</div>
                  <div className="font-bold text-indigo-700">{lineItemAccuracy}%</div>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-700 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${lineItemAccuracy}%` : "0%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>

              {/* Totals Accuracy */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium text-indigo-900">Totals & Calculations</div>
                  <div className="font-bold text-indigo-700">{totalsAccuracy.toFixed(1)}%</div>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-700 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${totalsAccuracy}%` : "0%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                These accuracy metrics are based on a benchmark of 20,000 sample invoices across multiple industries,
                languages, and formats. Our AI continuously improves through machine learning, adapting to new invoice
                layouts and formats. Even for complex tables and multi-page invoices, our system maintains exceptional
                accuracy and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
