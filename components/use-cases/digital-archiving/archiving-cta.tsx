"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Database, FileSearch, ShieldCheck } from "lucide-react"

export default function ArchivingCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>

      {/* Floating icons */}
      <motion.div
        className="absolute left-10 top-20 opacity-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Database className="w-16 h-16 text-white" />
      </motion.div>

      <motion.div
        className="absolute right-20 top-40 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <FileSearch className="w-20 h-20 text-white" />
      </motion.div>

      <motion.div
        className="absolute left-1/3 bottom-20 opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      >
        <ShieldCheck className="w-14 h-14 text-white" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Digitize and organize your archives.</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
            Transform your document management with AI-powered digital archiving. Reduce search times, ensure
            compliance, and improve operational efficiency.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8">
              Request Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
