"use client"

import { motion } from "framer-motion"
import { Download, Shield, CheckCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertDownload() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Security Certifications & Testing
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <motion.div
            className="flex items-center justify-center bg-indigo-50 rounded-full p-6 w-32 h-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-16 w-16 text-indigo-700" />
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-indigo-50 rounded-full p-6 w-32 h-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CheckCircle className="h-16 w-16 text-indigo-700" />
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-indigo-50 rounded-full p-6 w-32 h-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Lock className="h-16 w-16 text-indigo-700" />
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Our platform undergoes rigorous security testing and certification to ensure your compliance data remains
            protected. We maintain ISO 27001, SOC 2 Type II, and GDPR certifications, with annual penetration testing by
            independent security firms.
          </p>

          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download 2024 Pen-Test PDF
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
