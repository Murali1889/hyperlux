"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Phone } from "lucide-react"

export default function CtaFooter() {
  return (
    <section className="py-20 bg-indigo-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Supply Chain Operations?
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of companies that have streamlined their document processing and gained real-time visibility
            into their supply chain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-4 sm:py-6 rounded-md flex items-center justify-center w-full sm:w-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Book Operations Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-indigo-600 px-6 py-4 sm:py-6 rounded-md flex items-center justify-center w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-indigo-100">Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-indigo-100">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.7%</div>
              <div className="text-indigo-100">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
