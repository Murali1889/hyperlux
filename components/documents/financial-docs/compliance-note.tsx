"use client"

import { motion } from "framer-motion"
import { Shield, FileCheck } from "lucide-react"


export default function ComplianceNote() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-indigo-700 mr-3" />
                <h3 className="text-xl font-bold text-indigo-900">Audit Trail</h3>
              </div>
              <p className="text-gray-700">
                Every document processed through our system maintains a complete audit trail from ingestion to
                extraction. Track who uploaded the document, when it was processed, and any manual corrections made.
                This comprehensive audit trail ensures compliance with internal controls and simplifies regulatory
                audits.
              </p>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-indigo-700 mr-3" />
                <h3 className="text-xl font-bold text-indigo-900">GST e-Invoice Support</h3>
              </div>
              <p className="text-gray-700">
                Our system fully supports GST e-Invoice requirements in India. It can extract data from GST e-Invoices,
                validate the information against the GST portal, and ensure compliance with the latest regulations. The
                system also helps in preparing GST returns by categorizing transactions correctly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
