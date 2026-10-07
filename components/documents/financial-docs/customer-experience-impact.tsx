"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export default function CustomerExperienceImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-indigo-50 rounded-xl p-8 shadow-md border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-indigo-700 p-6 rounded-full shadow-lg">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Customer Experience Impact</h2>
              <p className="text-lg text-gray-700 mb-6">
                Vendors and customers notice when documents stop waiting in a queue. Invoices get captured the day they
                arrive, so payments are less likely to slip and early-payment discounts are easier to catch. Fields the
                engine is unsure about are flagged before anyone pays, which means fewer awkward calls about wrong
                amounts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-700 mb-1">Same day</div>
                  <div className="text-gray-700">Invoices captured as they arrive</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-700 mb-1">Flagged</div>
                  <div className="text-gray-700">Unclear amounts checked before payment</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
