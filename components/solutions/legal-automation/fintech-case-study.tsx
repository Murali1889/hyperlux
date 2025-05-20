"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function FinTechCaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Customer Success Story</h2>
          <p className="text-xl text-gray-700">
            See how our solution transformed legal operations for a leading FinTech
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-indigo-50 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-indigo-700 p-6 sm:p-8 flex items-center justify-center">
              <div className="text-center py-8 md:py-0">
                <div className="text-white text-4xl sm:text-5xl font-bold mb-2">43%</div>
                <div className="text-indigo-100 text-lg sm:text-xl">Faster Closing</div>
              </div>
            </div>
            <div className="md:w-2/3 p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <Quote className="h-8 w-8 text-indigo-700 mr-2 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-indigo-900">FinTech Slashes Contract Closing Time</h3>
              </div>
              <p className="text-gray-700 mb-6">
                A rapidly growing FinTech company was struggling with their contract management process as they scaled.
                With over 200 new client agreements each month, their legal team was overwhelmed by the manual review
                process. After implementing our legal automation solution, they transformed their workflow completely.
                The AI-powered clause extraction automatically identified key terms and obligations, while the automated
                renewal tracking system provided timely alerts. The results were dramatic: their contract closing cycle
                was cut from 14 days to just 8 days, a 43% improvement. This acceleration enabled faster revenue
                recognition and improved client satisfaction scores by 22%.
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-4">
                  JD
                </div>
                <div>
                  <div className="font-bold text-indigo-900">Jennifer Davis</div>
                  <div className="text-gray-600">General Counsel, PayFin Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
