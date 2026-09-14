"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileCheck, Package, Database, FileText } from "lucide-react"

export default function CoreFeatures() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Core Features</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive suite of document processing tools streamlines your entire supply chain operation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* POD OCR */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-indigo-700 p-6 flex justify-center">
              <FileCheck className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">POD OCR</h3>
              <p className="text-gray-700">
                Automatically extract delivery confirmation data from proof of delivery documents. Capture signatures,
                timestamps, recipient details, and delivery notes with 99% accuracy. See our{" "}
                <Link href="/resources/blogs/proof-of-delivery-processing" className="underline hover:text-indigo-700">
                  proof of delivery processing guide
                </Link>
                .
              </p>
            </div>
          </motion.div>

          {/* Packing-Slip Scan */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-indigo-700 p-6 flex justify-center">
              <Package className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Packing-Slip Scan</h3>
              <p className="text-gray-700">
                Process packing slips to verify contents against orders. Extract item codes, quantities, weights, and
                special handling instructions to ensure accurate shipment verification. See our{" "}
                <Link href="/resources/blogs/packing-list-reconciliation" className="underline hover:text-indigo-700">
                  packing list reconciliation guide
                </Link>
                .
              </p>
            </div>
          </motion.div>

          {/* Inventory Sync */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-indigo-700 p-6 flex justify-center">
              <Database className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Inventory Sync</h3>
              <p className="text-gray-700">
                Automatically update inventory levels based on processed documents. Reconcile received goods, shipped
                items, and returns in real-time to maintain accurate stock levels.
              </p>
            </div>
          </motion.div>

          {/* Shipment-Log Parser */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-indigo-700 p-6 flex justify-center">
              <FileText className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Shipment-Log Parser</h3>
              <p className="text-gray-700">
                Extract critical data from carrier shipment logs and manifests. Capture tracking numbers, routes,
                timestamps, and delivery exceptions to provide end-to-end shipment visibility. See our{" "}
                <Link href="/resources/blogs/shipment-status-edi-processing" className="underline hover:text-indigo-700">
                  EDI 214 shipment status guide
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
