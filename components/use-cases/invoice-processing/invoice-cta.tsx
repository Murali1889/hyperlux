"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InvoiceCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Transforming Invoice Processing</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have revolutionized their accounts payable workflows with our AI-powered
            invoice automation.
          </p>
          <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
            <Link href="/book-demo">Request Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
