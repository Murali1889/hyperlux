"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DemoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const handlePlay = () => {
    setIsPlaying(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsPlaying(false)
          return 100
        }
        return prev + 1
      })
    }, 600) // 60 seconds total (600ms * 100)

    return () => clearInterval(interval)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See ID Proofing in Action</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Watch our 60-second demo to see how our ID proofing solution works in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-100 rounded-xl overflow-hidden shadow-md">
            <div className="aspect-video relative bg-slate-800 flex items-center justify-center">
              {/* Demo Animation Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                {progress === 0 ? (
                  <div className="text-center">
                    <div className="bg-indigo-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white">
                      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-lg">Click Play to Start Demo</p>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Demo Content - This would be replaced with actual demo content */}
                    <div className="text-center space-y-4">
                      <div className="text-white text-xl font-medium">ID Proofing Demo</div>
                      <div className="flex justify-center space-x-8">
                        <div className="bg-white rounded-lg p-4 w-48 h-64 flex flex-col">
                          <div className="h-3 w-20 bg-slate-300 rounded mb-2"></div>
                          <div className="flex-1 bg-slate-200 rounded mb-2"></div>
                          <div className="h-2 w-full bg-slate-300 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-4 w-48 h-64 flex items-center justify-center">
                          <div className="h-32 w-32 rounded-full bg-slate-200 flex items-center justify-center">
                            <div className="h-16 w-16 rounded-full bg-slate-300"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-2 w-64 bg-white rounded-full mx-auto overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 bg-white border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {!isPlaying ? (
                    <Button onClick={handlePlay} variant="outline" size="sm" className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                      <span>Play</span>
                    </Button>
                  ) : (
                    <Button onClick={handlePause} variant="outline" size="sm" className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Pause</span>
                    </Button>
                  )}

                  <Button onClick={handleReset} variant="outline" size="sm" className="flex items-center space-x-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Reset</span>
                  </Button>
                </div>

                <div className="text-sm text-slate-600">{Math.floor(progress * 0.6)} / 60 seconds</div>
              </div>

              <div className="mt-2 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
