"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, RefreshCw } from "lucide-react"

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const resetDemo = () => {
    setIsPlaying(false)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">See It In Action</h2>
          <p className="text-lg text-slate-600">
            Watch how our AI-powered loan verification solution transforms the lending process
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-video bg-slate-900">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="mb-4">
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      {/* Simulated video content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3/4 h-3/4 flex flex-col">
                            <div className="bg-white/10 p-4 rounded-t-lg">
                              <div className="h-6 w-1/3 bg-white/20 rounded mb-2"></div>
                              <div className="flex space-x-2">
                                <div className="h-4 w-16 bg-white/20 rounded"></div>
                                <div className="h-4 w-16 bg-white/20 rounded"></div>
                                <div className="h-4 w-16 bg-white/20 rounded"></div>
                              </div>
                            </div>
                            <div className="flex-1 bg-white/5 p-4 rounded-b-lg">
                              <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="bg-white/10 rounded p-3">
                                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                                  <div className="space-y-2">
                                    <div className="h-3 w-full bg-white/20 rounded"></div>
                                    <div className="h-3 w-full bg-white/20 rounded"></div>
                                    <div className="h-3 w-2/3 bg-white/20 rounded"></div>
                                  </div>
                                </div>
                                <div className="bg-white/10 rounded p-3">
                                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                                  <div className="space-y-2">
                                    <div className="h-3 w-full bg-white/20 rounded"></div>
                                    <div className="h-3 w-full bg-white/20 rounded"></div>
                                    <div className="h-3 w-2/3 bg-white/20 rounded"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                        <motion.div
                          className="h-full bg-indigo-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 60, ease: "linear" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-indigo-600/80 flex items-center justify-center cursor-pointer hover:bg-indigo-700/80 transition-colors">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                {!isPlaying && <h3 className="text-xl font-semibold">Click to play demo</h3>}
              </div>
            </div>

            {/* Controls */}
            {isPlaying && (
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                </button>

                <button
                  onClick={resetDemo}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <RefreshCw className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Loan Verification Workflow Demo</h3>
            <p className="text-slate-600">
              This demonstration shows how our AI-powered solution processes bank statements, pay stubs, and tax
              documents to verify income and employment information. Watch as the system automatically extracts data,
              validates it against lending criteria, and generates a comprehensive verification report.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
