"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Phone } from "lucide-react"
import Link from "next/link"

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
            Bring a few of your own bills of lading or delivery notes to the demo and see exactly what comes back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-4 sm:py-6 rounded-md flex items-center justify-center w-full sm:w-auto">
              <Link href="/book-demo">
                <Calendar className="mr-2 h-5 w-5" />
                Book Operations Demo
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1.1 s</div>
              <div className="text-indigo-100">Per page</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Flagged</div>
              <div className="text-indigo-100">Unclear fields reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">SOC 2</div>
              <div className="text-indigo-100">Type II certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$0.02</div>
              <div className="text-indigo-100">Per page to start</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
