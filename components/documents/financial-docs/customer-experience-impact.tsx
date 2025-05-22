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
                Automating financial document processing doesn't just save time and money—it transforms your vendor and
                customer relationships. Vendors are paid 2 days sooner on average, leading to stronger supplier
                relationships and potential early payment discounts. AP disputes have fallen by 30% due to higher
                accuracy, reducing friction in your business relationships and freeing up staff time for more strategic
                activities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-700 mb-1">2 days</div>
                  <div className="text-gray-700">Faster vendor payments</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-700 mb-1">30%</div>
                  <div className="text-gray-700">Fewer AP disputes</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
