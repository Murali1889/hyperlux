"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function IdProofingHero() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 to-slate-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Instant, Accurate ID Proofing</h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-lg">
              Verify passports, national IDs, and driver licenses in seconds with AI-powered OCR and biometric face
              matching, ensuring regulatory compliance while accelerating customer onboarding.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/book-demo">See ID Proofing Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[450px] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              {/* ID Card */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-64 h-40 overflow-hidden"
                animate={{
                  scale: animationStep === 0 ? 1 : 0.8,
                  x: animationStep === 0 ? "-50%" : animationStep === 1 ? "-80%" : "-50%",
                  y: animationStep === 0 ? "-50%" : "-50%",
                  rotateY: animationStep === 2 ? 180 : 0,
                  zIndex: animationStep === 0 ? 10 : 5,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="h-3 w-20 bg-indigo-600 rounded"></div>
                      <div className="h-2 w-16 bg-slate-300 rounded"></div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-indigo-100"></div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                    <div className="space-y-1">
                      <div className="h-2 w-24 bg-slate-300 rounded"></div>
                      <div className="h-3 w-32 bg-slate-800 rounded"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="h-2 w-full bg-slate-200 rounded"></div>
                    <div className="h-3 w-3/4 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </motion.div>

              {/* Face Comparison */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 rounded-xl shadow-lg w-56 h-56 overflow-hidden flex flex-col"
                animate={{
                  scale: animationStep === 1 ? 1 : 0.7,
                  x: animationStep === 1 ? "-50%" : animationStep === 0 ? "0%" : "-50%",
                  y: animationStep === 1 ? "-50%" : "-50%",
                  opacity: animationStep === 3 ? 0.5 : 1,
                  zIndex: animationStep === 1 ? 10 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-indigo-700 p-2 text-white text-xs font-medium">Face Matching</div>
                <div className="flex-1 p-3 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-slate-300 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-slate-400"></div>
                      </div>
                    </div>
                    <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-slate-300 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-slate-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div className="h-2 w-20 bg-slate-200 rounded"></div>
                  <div className="h-6 w-16 bg-green-500 rounded text-xs text-white flex items-center justify-center font-medium">
                    MATCH
                  </div>
                </div>
              </motion.div>

              {/* Data Extraction */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-72 p-4"
                animate={{
                  scale: animationStep === 2 ? 1 : 0.6,
                  x: animationStep === 2 ? "-50%" : animationStep === 3 ? "0%" : "-50%",
                  y: animationStep === 2 ? "-50%" : "-50%",
                  opacity: animationStep === 2 ? 1 : 0.7,
                  zIndex: animationStep === 2 ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-24 bg-indigo-600 rounded"></div>
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="h-2 w-20 bg-slate-300 rounded"></div>
                      <div className="h-2 w-32 bg-slate-800 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-2 w-24 bg-slate-300 rounded"></div>
                      <div className="h-2 w-28 bg-slate-800 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-2 w-16 bg-slate-300 rounded"></div>
                      <div className="h-2 w-36 bg-slate-800 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-2 w-28 bg-slate-300 rounded"></div>
                      <div className="h-2 w-24 bg-slate-800 rounded"></div>
                    </div>
                  </div>

                  <div className="h-10 w-full bg-slate-100 rounded flex items-center px-3">
                    <div className="h-2 w-3/4 bg-indigo-200 rounded overflow-hidden">
                      <div className="h-full w-4/5 bg-indigo-600 rounded"></div>
                    </div>
                    <div className="ml-auto text-xs font-medium text-indigo-600">98%</div>
                  </div>
                </div>
              </motion.div>

              {/* Verification Complete */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-50 border border-green-200 rounded-xl shadow-lg w-64 p-5"
                animate={{
                  scale: animationStep === 3 ? 1 : 0.5,
                  opacity: animationStep === 3 ? 1 : 0,
                  zIndex: animationStep === 3 ? 20 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-700">Verification Complete</div>
                    <div className="text-sm text-green-600">Identity verified in 2.3 seconds</div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
