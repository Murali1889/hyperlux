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
                Automating invoice processing transforms supplier relationships. With our system, suppliers receive
                payment status updates 48 hours sooner than with manual processing. This transparency reduces payment
                queries by 65% and strengthens vendor relationships. Your AP team spends less time answering basic
                status questions and more time on strategic supplier management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-indigo-700 mb-1">48 hrs</div>
                  <div className="text-gray-700">Faster payment status</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-indigo-700 mb-1">65%</div>
                  <div className="text-gray-700">Fewer payment queries</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
