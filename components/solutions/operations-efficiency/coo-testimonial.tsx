"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function CooTestimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto bg-indigo-50 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-indigo-700 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Quote className="h-12 w-12 text-indigo-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-indigo-100">
                Hear from operations leaders who have transformed their supply chain document processing.
              </p>
            </div>

            <div className="md:w-3/5 p-6 sm:p-8 md:p-12">
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                "We reduced our document processing time by 85% and virtually eliminated data entry errors. The
                real-time visibility into our supply chain has been a game-changer for our operations team."
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-700 font-bold">RK</span>
                </div>
                <div>
                  <div className="font-bold text-indigo-900">Rajiv Kumar</div>
                  <div className="text-gray-600">Chief Operations Officer, Global Logistics Inc.</div>
                </div>
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">Based on 200+ implementations</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  85% Faster Processing
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  99.7% Accuracy
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  Real-time Visibility
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
