"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try it on your own loan files.</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start with a demo on your own loan files. Qualified lenders then get a free 30-day trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Request Demo
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
