"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Smartphone, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CustomerExperienceHero() {
  return (
    <section className="bg-indigo-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
              Sharper CX With Instant Document Decisions
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Transform customer experiences with 30-second digital onboarding and see immediate CSAT gains. Our
              AI-powered OCR solutions eliminate friction and accelerate customer journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-4 sm:py-6 rounded-lg text-base sm:text-lg w-full sm:w-auto">
                <Link href="/book-demo">See CX Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-xl shadow-xl p-6 border border-indigo-100">
              <div className="absolute -top-3 -right-3 bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                LIVE DEMO
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-indigo-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Digital Onboarding</h3>
                  <p className="text-gray-600">30-second customer verification</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center h-32 mb-2">
                    <Smartphone className="w-12 h-12 text-indigo-700" />
                  </div>
                  <p className="text-center text-sm text-gray-700">Customer opens app</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center h-32 mb-2">
                    <FileText className="w-12 h-12 text-indigo-700" />
                  </div>
                  <p className="text-center text-sm text-gray-700">Scans ID document</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center h-32 mb-2">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <p className="text-center text-sm text-gray-700">Verified in seconds</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Average completion: <span className="font-bold text-indigo-700">30 seconds</span>
                </div>
                <Button variant="ghost" className="text-indigo-700 hover:text-indigo-800 p-0 flex items-center gap-1">
                  View details <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
