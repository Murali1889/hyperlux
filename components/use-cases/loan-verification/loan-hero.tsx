"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function LoanHero() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Speed Up Loan Verification with AI
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-slate-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Automate extraction from bank statements, income proof documents, and identity verification while
              maintaining regulatory compliance and reducing processing time by 75%.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="bg-white text-indigo-700 hover:bg-slate-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                See Loan Demo
                <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Bank Statement Animation */}
              <div className="relative">
                {/* Bank Statement Document */}
                <motion.div
                  className="bg-white rounded-lg shadow-xl p-6 text-slate-800 relative z-10"
                  animate={{
                    scale: animationStep >= 1 ? 0.9 : 1,
                    y: animationStep >= 1 ? -20 : 0,
                    opacity: animationStep >= 3 ? 0.3 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="border-b border-slate-200 pb-4 mb-4">
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-24 bg-indigo-100 rounded"></div>
                      <div className="h-6 w-32 bg-slate-100 rounded"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="h-4 w-32 bg-slate-100 rounded"></div>
                      <div className="h-4 w-16 bg-slate-100 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 w-40 bg-slate-100 rounded"></div>
                      <div className="h-4 w-20 bg-slate-100 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 w-36 bg-slate-100 rounded"></div>
                      <div className="h-4 w-24 bg-slate-100 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 w-44 bg-slate-100 rounded"></div>
                      <div className="h-4 w-16 bg-slate-100 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-4 w-28 bg-slate-100 rounded"></div>
                      <div className="h-4 w-20 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Data Extraction Visualization */}
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center"
                  animate={{
                    opacity: animationStep >= 2 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {animationStep >= 2 && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-1 w-1 rounded-full bg-indigo-500"
                            initial={{
                              x: Math.random() * 100 - 50,
                              y: Math.random() * 100 - 50,
                              opacity: 0,
                            }}
                            animate={{
                              x: Math.random() * 200 - 100,
                              y: Math.random() * 200 - 100,
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Structured Data Result */}
                <motion.div
                  className="absolute top-10 left-0 right-0 bg-white rounded-lg shadow-xl p-6 text-slate-800 z-0"
                  animate={{
                    y: animationStep >= 3 ? 0 : 60,
                    opacity: animationStep >= 3 ? 1 : 0,
                    scale: animationStep >= 3 ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="border-b border-slate-200 pb-4 mb-4">
                    <div className="h-6 w-full bg-indigo-100 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-4 w-full bg-indigo-50 rounded mb-2"></div>
                      <div className="h-6 w-3/4 bg-indigo-100 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 w-full bg-indigo-50 rounded mb-2"></div>
                      <div className="h-6 w-1/2 bg-indigo-100 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 w-full bg-indigo-50 rounded mb-2"></div>
                      <div className="h-6 w-2/3 bg-indigo-100 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 w-full bg-indigo-50 rounded mb-2"></div>
                      <div className="h-6 w-3/5 bg-indigo-100 rounded"></div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-32 bg-green-100 rounded"></div>
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
