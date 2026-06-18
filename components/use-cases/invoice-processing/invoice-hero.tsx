"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InvoiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 to-slate-900 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automate Invoice Processing End-to-End
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your accounts payable with AI-powered invoice OCR that extracts line-items, supports multiple
              currencies, and integrates with your ERP system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/book-demo">See Invoice Demo</Link>
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
              <InvoiceAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InvoiceAnimation() {
  return (
    <div className="relative w-full h-full">
      {/* Invoice Document */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, -2, 0, 2, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] h-[380px] bg-white rounded-lg shadow-xl p-6 z-20"
      >
        <div className="flex justify-between mb-6">
          <div className="w-20 h-8 bg-indigo-100 rounded"></div>
          <div className="w-24 h-8 bg-indigo-200 rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="w-full h-4 bg-slate-100 rounded"></div>
          <div className="w-3/4 h-4 bg-slate-100 rounded"></div>
          <div className="w-5/6 h-4 bg-slate-100 rounded"></div>
        </div>
        <div className="mt-8 space-y-2">
          <div className="flex justify-between">
            <div className="w-32 h-4 bg-slate-200 rounded"></div>
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-28 h-4 bg-slate-200 rounded"></div>
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-36 h-4 bg-slate-200 rounded"></div>
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 w-24 h-8 bg-indigo-500 rounded"></div>
      </motion.div>

      {/* Data Grid Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 0.8],
          x: [0, 50, 100, 150],
          y: [0, 50, 100, 150],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          delay: 1,
          times: [0, 0.3, 0.7, 1],
        }}
        className="absolute top-1/4 left-1/4 w-12 h-4 bg-indigo-400 rounded z-10"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 0.8],
          x: [0, -30, -60, -90],
          y: [0, 40, 80, 120],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          delay: 1.5,
          times: [0, 0.3, 0.7, 1],
        }}
        className="absolute top-1/3 right-1/4 w-16 h-4 bg-indigo-500 rounded z-10"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 0.8],
          x: [0, 40, 80, 120],
          y: [0, -30, -60, -90],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          delay: 2,
          times: [0, 0.3, 0.7, 1],
        }}
        className="absolute bottom-1/3 left-1/3 w-14 h-4 bg-indigo-600 rounded z-10"
      ></motion.div>

      {/* Data Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-[280px] h-[200px] bg-indigo-50 rounded-lg p-4 z-0"
      >
        <div className="grid grid-cols-3 gap-2 h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="bg-indigo-200 rounded h-6"
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
