"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FinancialDocsCta() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Extract finance data in seconds.</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Transform your financial document processing with our AI-powered OCR solution. Reduce costs, save time, and
            improve accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white hover:bg-indigo-50 text-indigo-700 px-6 py-6 text-lg w-full sm:w-auto">
              <Link href="/book-demo">
                Request Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
