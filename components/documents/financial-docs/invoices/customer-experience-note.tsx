"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export default function CustomerExperienceNote() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/6 flex justify-center">
              <div className="bg-indigo-700 p-5 rounded-full shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="md:w-5/6">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Customer Experience Note</h2>
              <p className="text-lg text-gray-700 mb-6">
                Suppliers feel the difference too. When invoices are captured as they arrive, your team can answer
                &quot;where is my payment?&quot; from the system instead of digging through an inbox, and fewer invoices sit
                unread until someone chases them. Your AP team spends less time on status questions and more on the
                supplier relationships that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-indigo-700 mb-1">1.1 s</div>
                  <div className="text-gray-700">Per page, so invoices are captured as they arrive</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-indigo-700 mb-1">Flagged</div>
                  <div className="text-gray-700">Unclear fields are reviewed before payment</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
