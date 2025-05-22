"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const handlePlay = () => {
    if (isPlaying) {
      if (intervalId) clearInterval(intervalId)
      setIsPlaying(false)
    } else {
      const id = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(id)
            setIsPlaying(false)
            return 100
          }
          return prev + 1
        })
      }, 600) // 60 seconds total (600ms * 100)
      setIntervalId(id)
      setIsPlaying(true)
    }
  }

  const handleReset = () => {
    if (intervalId) clearInterval(intervalId)
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section id="demo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See It In Action</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Watch our 60-second demo to see how our contract abstraction solution transforms complex legal documents
            into structured, actionable data.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Video Placeholder */}
            <div className="aspect-video bg-slate-200 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Contract Document Animation */}
                <div className="relative w-64 h-64">
                  {/* Base Contract */}
                  <div className="absolute top-0 left-0 w-48 h-64 bg-white rounded shadow-md transform rotate-[-5deg] border border-slate-200">
                    <div className="p-4">
                      <div className="h-3 w-32 bg-slate-200 rounded mb-3"></div>
                      <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                      <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-100 rounded mb-4"></div>

                      <div className="h-3 w-24 bg-slate-200 rounded mb-3"></div>
                      <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                      <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>

                      {isPlaying && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-12 left-4 h-2 w-32 bg-indigo-400 rounded"
                        ></motion.div>
                      )}
                    </div>
                  </div>

                  {/* Extracted Data */}
                  {isPlaying && progress > 30 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute top-10 right-0 w-40 h-48 bg-white rounded shadow-lg border border-indigo-200 p-3"
                    >
                      <div className="h-3 w-full bg-indigo-100 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded mb-3"></div>

                      <div className="h-3 w-full bg-indigo-100 rounded mb-2"></div>
                      <div className="h-2 w-full bg-slate-200 rounded mb-3"></div>

                      <div className="h-3 w-full bg-indigo-100 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded mb-3"></div>

                      <div className="h-3 w-full bg-indigo-100 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                    </motion.div>
                  )}
                </div>

                <div className="text-slate-500 mt-4">
                  {isPlaying ? "Demo in progress..." : "Click play to start demo"}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-slate-200">
              <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Controls */}
            <div className="p-4 flex justify-center space-x-4">
              <Button variant="outline" size="icon" className="rounded-full" onClick={handlePlay}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handleReset}
                disabled={progress === 0}
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
