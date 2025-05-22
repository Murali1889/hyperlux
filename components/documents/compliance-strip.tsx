"use client"

import { motion } from "framer-motion"
import { Shield, Lock } from "lucide-react"

export default function ComplianceStrip() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <Shield className="h-10 w-10 text-indigo-700 mr-4" />
              <div>
                <h3 className="text-xl font-bold text-indigo-900">Compliance & Security</h3>
                <p className="text-gray-700">
                  Enterprise-grade security with full regulatory compliance for sensitive document processing
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-indigo-50 px-4 py-2 rounded-lg flex items-center">
                <Lock className="h-5 w-5 text-indigo-700 mr-2" />
                <span className="font-medium text-indigo-900">ISO 27001</span>
              </div>
              <div className="bg-indigo-50 px-4 py-2 rounded-lg flex items-center">
                <Lock className="h-5 w-5 text-indigo-700 mr-2" />
                <span className="font-medium text-indigo-900">SOC 2 Type II</span>
              </div>
              <div className="bg-indigo-50 px-4 py-2 rounded-lg flex items-center">
                <Lock className="h-5 w-5 text-indigo-700 mr-2" />
                <span className="font-medium text-indigo-900">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
