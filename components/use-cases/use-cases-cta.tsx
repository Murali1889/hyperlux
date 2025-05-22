"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function UseCasesCta() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your use case?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Our team of experts will help you implement the perfect AI-OCR solution for your specific business needs.
          </p>
          <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50" asChild>
            <a href="/book-demo">Request Demo</a>
          </Button>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
