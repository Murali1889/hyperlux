"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContractCta() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simplify your contract review process.</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join leading organizations that have transformed their contract management with our AI-powered solution.
          </p>
          <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 text-base font-medium" asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
