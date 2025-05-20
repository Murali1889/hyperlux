"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function NeobankTestimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-indigo-700 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-indigo-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/placeholder-7yzg2.png" alt="NeoBank Logo" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">NeoBank</h3>
                <p className="text-indigo-200 text-sm">Digital Banking Leader</p>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <Quote className="w-12 h-12 text-indigo-500 mb-4" />
              <blockquote className="text-white text-xl font-medium mb-6">
                "Our KYC wait time dropped dramatically from 24 hours to just 90 seconds after implementing HyperVerge's
                document OCR solution. Customer satisfaction scores increased by 22% and account opening completion
                rates improved by 35%. This technology has been transformative for our digital onboarding experience."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full mr-4 flex items-center justify-center">
                  <img
                    src="/professional-woman-headshot.png"
                    alt="Sarah Chen"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold">Sarah Chen</p>
                  <p className="text-indigo-200 text-sm">Chief Digital Officer, NeoBank</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
