"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContractHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 to-slate-900 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Automate Contract Abstraction with AI
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Instantly identify key clauses, extract critical dates, and flag potential risks with our AI-powered
              contract analysis platform. Reduce review time and never miss a renewal deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 text-base font-medium" asChild>
                <Link href="#demo">See Contract Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              {/* Contract Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Base Contract */}
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                    className="bg-white rounded-lg shadow-xl p-6 mb-4 transform rotate-[-3deg] relative z-10"
                  >
                    <div className="h-4 w-32 bg-slate-200 rounded mb-4"></div>
                    <div className="h-3 w-full bg-slate-100 rounded mb-3"></div>
                    <div className="h-3 w-full bg-slate-100 rounded mb-3"></div>
                    <div className="h-3 w-3/4 bg-slate-100 rounded mb-6"></div>
                    <div className="h-4 w-40 bg-slate-200 rounded mb-4"></div>
                    <div className="h-3 w-full bg-slate-100 rounded mb-3"></div>
                    <div className="h-3 w-full bg-slate-100 rounded mb-3"></div>
                    <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                  </motion.div>

                  {/* Extracted Clauses */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 30 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute top-10 right-0 bg-indigo-50 border border-indigo-200 rounded-lg shadow-lg p-4 w-64 z-20"
                  >
                    <div className="flex items-center mb-3">
                      <div className="h-3 w-3 rounded-full bg-indigo-500 mr-2"></div>
                      <div className="h-3 w-24 bg-indigo-200 rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-slate-200 rounded mb-4"></div>
                    <div className="flex items-center mb-3">
                      <div className="h-3 w-3 rounded-full bg-indigo-500 mr-2"></div>
                      <div className="h-3 w-20 bg-indigo-200 rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                  </motion.div>

                  {/* Date Extraction */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: -20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute bottom-0 left-10 bg-green-50 border border-green-200 rounded-lg shadow-lg p-3 w-48 z-30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-3 w-16 bg-green-200 rounded"></div>
                      <div className="h-3 w-16 bg-green-300 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-3 w-14 bg-green-200 rounded"></div>
                      <div className="h-3 w-16 bg-green-300 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-20 bg-green-200 rounded"></div>
                      <div className="h-3 w-16 bg-green-300 rounded"></div>
                    </div>
                  </motion.div>

                  {/* Animated Tags */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                      transition={{
                        delay: i * 0.5 + 1,
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 5,
                      }}
                      className="absolute"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 15}%`,
                        zIndex: 40,
                      }}
                    >
                      <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                        {["Payment Term", "Termination", "Renewal", "Liability", "Confidentiality"][i]}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
