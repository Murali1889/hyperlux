"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function LegalCTA() {
  return (
    <section className="py-20 bg-indigo-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Digitise contracts. Unlock insights.</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Transform your legal operations with AI-powered document automation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white hover:bg-indigo-50 text-indigo-700 px-6 py-3 rounded-md text-lg w-full sm:w-auto">
              <Link href="/book-demo">Request Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
