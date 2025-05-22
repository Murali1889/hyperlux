"use client"

import { motion } from "framer-motion"
import { Play, Pause, RefreshCw } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function DemoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  const startAnimation = () => {
    setIsPlaying(true)
    if (progress >= 100) {
      setProgress(0)
    }

    animationRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(animationRef.current as NodeJS.Timeout)
          setIsPlaying(false)
          return 100
        }
        return prev + 1
      })
    }, 60) // 60ms * 100 steps = ~6 seconds total
  }

  const pauseAnimation = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
    }
    setIsPlaying(false)
  }

  const resetAnimation = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current)
    }
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See Invoice Automation in Action</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Watch how our system processes invoices from capture to payment in this interactive demo.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-4 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
            <div className="text-slate-700 font-medium">Invoice Processing Demo</div>
            <div className="flex items-center gap-2">
              {!isPlaying ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                  onClick={startAnimation}
                  disabled={progress >= 100}
                >
                  <Play className="h-4 w-4" /> Play
                </Button>
              ) : (
                <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={pauseAnimation}>
                  <Pause className="h-4 w-4" /> Pause
                </Button>
              )}
              <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={resetAnimation}>
                <RefreshCw className="h-4 w-4" /> Reset
              </Button>
            </div>
          </div>

          <div className="p-6">
            <div className="h-[400px] relative">
              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-indigo-600"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Demo content */}
              <div className="pt-6 h-full flex items-center justify-center">
                {progress < 20 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="w-64 h-80 mx-auto bg-white border border-slate-300 rounded-lg shadow-md p-4 flex flex-col">
                      <div className="w-full h-6 bg-slate-100 rounded mb-3"></div>
                      <div className="w-3/4 h-4 bg-slate-100 rounded mb-2"></div>
                      <div className="w-1/2 h-4 bg-slate-100 rounded mb-6"></div>
                      <div className="flex-1 grid grid-cols-2 gap-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div key={i} className="h-4 bg-slate-100 rounded"></div>
                        ))}
                      </div>
                      <div className="mt-4 w-full h-8 bg-indigo-100 rounded"></div>
                    </div>
                    <p className="mt-4 text-slate-700">Uploading invoice document...</p>
                  </motion.div>
                )}

                {progress >= 20 && progress < 40 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="relative w-64 h-80 mx-auto">
                      <div className="absolute inset-0 bg-white border border-slate-300 rounded-lg shadow-md p-4 flex flex-col">
                        <div className="w-full h-6 bg-slate-100 rounded mb-3"></div>
                        <div className="w-3/4 h-4 bg-slate-100 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-slate-100 rounded mb-6"></div>
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="h-4 bg-slate-100 rounded"></div>
                          ))}
                        </div>
                        <div className="mt-4 w-full h-8 bg-indigo-100 rounded"></div>
                      </div>

                      <motion.div
                        className="absolute inset-0 bg-indigo-500/20 rounded-lg flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.7, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1.5,
                          repeatType: "loop",
                        }}
                      >
                        <div className="bg-white p-2 rounded-full">
                          <FileSearch />
                        </div>
                      </motion.div>
                    </div>
                    <p className="mt-4 text-slate-700">AI extracting invoice data...</p>
                  </motion.div>
                )}

                {progress >= 40 && progress < 60 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-md"
                  >
                    <div className="bg-white border border-slate-300 rounded-lg shadow-md p-4">
                      <div className="mb-4 pb-3 border-b border-slate-200">
                        <h3 className="font-medium text-slate-900">Extracted Invoice Data</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <div className="text-sm text-slate-500">Invoice Number:</div>
                          <div className="text-sm font-medium">INV-2023-0042</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-slate-500">Date:</div>
                          <div className="text-sm font-medium">May 15, 2023</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-slate-500">Vendor:</div>
                          <div className="text-sm font-medium">Office Supplies Co.</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-slate-500">Amount:</div>
                          <div className="text-sm font-medium">$1,245.00</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-slate-500">Tax:</div>
                          <div className="text-sm font-medium">$112.05</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm text-slate-500">Total:</div>
                          <div className="text-sm font-medium">$1,357.05</div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-700 text-center">Validating extracted data...</p>
                  </motion.div>
                )}

                {progress >= 60 && progress < 80 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-md"
                  >
                    <div className="bg-white border border-slate-300 rounded-lg shadow-md p-4">
                      <div className="mb-4 pb-3 border-b border-slate-200">
                        <h3 className="font-medium text-slate-900">3-Way Matching</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Purchase Order Match</div>
                            <div className="text-xs text-slate-500">PO-2023-0036</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Receipt Match</div>
                            <div className="text-xs text-slate-500">GRN-2023-0042</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Vendor Master Match</div>
                            <div className="text-xs text-slate-500">VEN-0023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-700 text-center">Routing for approval...</p>
                  </motion.div>
                )}

                {progress >= 80 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-md"
                  >
                    <div className="bg-white border border-green-200 rounded-lg shadow-md p-4">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium text-slate-900 mb-1">Invoice Processed Successfully</h3>
                        <p className="text-sm text-slate-500 mb-4">
                          Invoice INV-2023-0042 has been approved and sent to payment
                        </p>
                        <div className="flex justify-center gap-2">
                          <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">ERP Updated</div>
                          <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                            Payment Scheduled
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-700 text-center">Process complete!</p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FileSearch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-indigo-600"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="11.5" cy="14.5" r="2.5" />
      <path d="M13.25 16.25L15 18" />
    </svg>
  )
}
