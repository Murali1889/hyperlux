"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CustomerExperienceCta() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            Turn documents into real-time CX wins.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join leading companies that have transformed their customer experience with our intelligent document
            processing solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-4 sm:py-6 rounded-lg text-base sm:text-lg w-full sm:w-auto">
              Request Demo
            </Button>
            <Button
              variant="outline"
              className="border-indigo-700 text-indigo-700 hover:bg-indigo-100 px-6 py-4 sm:py-6 rounded-lg text-base sm:text-lg w-full sm:w-auto"
            >
              Contact Sales
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-indigo-700 mb-1">30s</div>
              <p className="text-gray-700 text-sm">Average onboarding time</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-indigo-700 mb-1">99.5%</div>
              <p className="text-gray-700 text-sm">Data extraction accuracy</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-indigo-700 mb-1">40%</div>
              <p className="text-gray-700 text-sm">Reduction in drop-offs</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-indigo-700 mb-1">18%</div>
              <p className="text-gray-700 text-sm">Increase in CSAT scores</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
