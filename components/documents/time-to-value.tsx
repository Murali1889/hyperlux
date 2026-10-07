"use client"

import { motion } from "framer-motion"
import { Calendar, DropletsIcon } from "lucide-react"

export default function TimeToValue() {
  return (
    <section className="py-20 bg-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start without training data</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Pre-trained models mean you do not have to label your own documents before you start. After a demo,
              qualified lenders can run their own documents during a free 30-day trial.
            </p>
          </motion.div>

          <motion.div
            className="bg-indigo-800 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-700 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Rapid Implementation</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-indigo-600 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>One HTTP API to call from your stack</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-600 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Pre-configured templates for immediate use</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-600 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>No training on your documents needed</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-700 p-3 rounded-full mr-4">
                    <DropletsIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Drag-and-Drop Console</h3>
                </div>
                <div className="bg-indigo-900 rounded-lg p-4 border border-indigo-600">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-medium">Document Console</div>
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="border-2 border-dashed border-indigo-500 rounded-lg p-8 flex flex-col items-center justify-center">
                    <svg
                      className="h-12 w-12 text-indigo-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-indigo-300 text-center">
                      Drag & drop your documents here
                      <br />
                      or click to browse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
