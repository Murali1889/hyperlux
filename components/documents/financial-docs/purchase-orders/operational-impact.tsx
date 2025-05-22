"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function OperationalImpact() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Operational Impact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real-world results from companies using our purchase order OCR solution
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Case Study: Electronics Manufacturer</h3>
              <p className="text-gray-700 mb-6">
                A leading electronics manufacturer implemented our purchase order OCR solution across their procurement
                operations. By automating PO processing and integrating with their inventory management system, they
                achieved a 15% improvement in inventory accuracy and reduced back-orders by 20%. The enhanced visibility
                into their supply chain allowed for better forecasting and just-in-time inventory management, reducing
                carrying costs while improving customer satisfaction.
              </p>
              <div className="text-indigo-700 font-medium">Read the full case study →</div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-indigo-900 mb-1">+15%</div>
                <div className="text-gray-700">Inventory Accuracy</div>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <TrendingDown className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-indigo-900 mb-1">-20%</div>
                <div className="text-gray-700">Back-Orders</div>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg text-center col-span-2">
                <div className="text-xl font-bold text-indigo-900 mb-1">3-month ROI</div>
                <div className="text-gray-700">Full return on investment within first quarter</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
