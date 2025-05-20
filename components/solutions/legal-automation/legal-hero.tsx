"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LegalHero() {
  return (
    <section className="bg-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
                Turn Contracts Into Structured Data
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Automate clause extraction, get timely renewal alerts, and streamline NDA redaction with our AI-powered
                legal document solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md text-lg w-full sm:w-auto">
                  Request Legal Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-md text-lg w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-xl p-6 border border-indigo-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500">Contract Analysis</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <div className="h-6 w-20 bg-indigo-200 rounded"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="h-6 w-full bg-indigo-100 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <div className="h-6 w-20 bg-indigo-200 rounded"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="h-6 w-full bg-indigo-100 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <div className="h-6 w-20 bg-indigo-200 rounded"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="h-6 w-3/4 bg-indigo-100 rounded"></div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white text-xs font-bold">
                        AI
                      </div>
                      <div className="ml-3">
                        <div className="h-4 w-40 bg-indigo-100 rounded mb-1"></div>
                        <div className="h-4 w-32 bg-indigo-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-indigo-700 text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium mb-1">Clauses Extracted</div>
                <div className="text-2xl font-bold">12/12</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
