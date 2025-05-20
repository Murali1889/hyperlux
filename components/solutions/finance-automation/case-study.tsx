"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-indigo-50 rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 md:p-8 md:p-12">
              <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                Case Study
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Tier-1 NBFC saves ₹2 cr annually</h2>
              <p className="text-gray-700 mb-6">
                One of India's largest NBFCs automated their invoice processing and reconciliation, reducing processing
                time by 78% and saving over ₹2 crore annually in operational costs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-indigo-700 mr-2">•</span>
                  <span className="text-gray-700">Processed 15,000+ invoices monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-700 mr-2">•</span>
                  <span className="text-gray-700">Reduced processing time from 12 min to 2.5 min per invoice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-700 mr-2">•</span>
                  <span className="text-gray-700">Improved vendor satisfaction scores by 42%</span>
                </li>
              </ul>
              <Button variant="link" className="text-indigo-700 p-0 flex items-center group">
                Read the full story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 bg-indigo-700 flex items-center justify-center p-8 md:p-0">
              <div className="text-center">
                <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">78%</div>
                <div className="text-indigo-100 text-xl">Reduction in processing time</div>
                <div className="mt-8">
                  <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">₹2 Cr+</div>
                  <div className="text-indigo-100 text-xl">Annual cost savings</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
