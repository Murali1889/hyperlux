"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function LoanCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform your loan verification process.</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join leading lenders who have accelerated their verification process, reduced costs, and improved compliance
            with our AI-powered solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
