"use client"

import { motion } from "framer-motion"
import { CheckCircle, FileText } from "lucide-react"

export default function AccuracyBenchmarks() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Accuracy Benchmarks</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our purchase order OCR delivers industry-leading accuracy across all document types
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FileText className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900">Scanned POs</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-700 font-medium">Field Accuracy</span>
              <span className="text-2xl font-bold text-indigo-700">98%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full mb-6">
              <motion.div
                className="h-3 bg-indigo-700 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "98%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              ></motion.div>
            </div>
            <p className="text-gray-700">
              Even with handwritten notes, stamps, and poor scan quality, our AI maintains exceptional accuracy on
              physical purchase orders.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <CheckCircle className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900">Digital PDFs</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-700 font-medium">Field Accuracy</span>
              <span className="text-2xl font-bold text-indigo-700">99.5%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full mb-6">
              <motion.div
                className="h-3 bg-indigo-700 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "99.5%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              ></motion.div>
            </div>
            <p className="text-gray-700">
              For digitally generated PDFs, our system achieves near-perfect accuracy, ensuring seamless integration
              with your procurement systems.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-sm border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-center text-gray-700">
            Benchmarked on 15,000+ purchase orders from 200+ vendors across multiple industries and formats.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
