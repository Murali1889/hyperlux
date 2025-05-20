"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ComplianceCTA() {
  return (
    <section className="py-20 bg-indigo-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prove compliance on every document.</h2>

          <p className="text-lg text-indigo-100 mb-8">
            Transform your compliance operations from a cost center to a competitive advantage with automated document
            processing, complete audit trails, and regulator-ready reporting.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white hover:bg-indigo-50 text-indigo-700 px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              Request Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-indigo-600 px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
