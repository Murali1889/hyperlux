"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Truck, ClipboardCheck } from "lucide-react"

export default function OperationsHero() {
  return (
    <section className="bg-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-6">
              Streamline Supply-Chain Paperwork
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Transform manual document processing into automated data extraction, reducing errors and accelerating your
              supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-4 sm:py-6 rounded-md w-full sm:w-auto">
                Book Operations Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-xl shadow-xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-700 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                Real-time OCR
              </div>

              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Truck className="h-8 w-8 text-indigo-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Supply Chain Documents</h3>
                  <p className="text-gray-500">Automated processing</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-indigo-50 p-4 rounded-lg flex items-center">
                  <ClipboardCheck className="h-6 w-6 text-indigo-700 mr-3" />
                  <span className="text-sm font-medium">POD Verification</span>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg flex items-center">
                  <svg className="h-6 w-6 text-indigo-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="text-sm font-medium">Packing Slips</span>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg flex items-center">
                  <svg className="h-6 w-6 text-indigo-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Shipment Logs</span>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg flex items-center">
                  <svg className="h-6 w-6 text-indigo-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                  <span className="text-sm font-medium">Inventory Data</span>
                </div>
              </div>

              <div className="bg-indigo-700 text-white p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Processing Time</span>
                  <span className="font-bold">30 seconds</span>
                </div>
                <div className="w-full bg-indigo-800 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full opacity-20"></div>
            <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-40 h-40 bg-indigo-300 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
