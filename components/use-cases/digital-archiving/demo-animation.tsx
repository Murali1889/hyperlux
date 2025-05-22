"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, RotateCcw, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DemoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)

  const frames = [
    "Document upload interface",
    "OCR processing screen",
    "Metadata tagging view",
    "Search and retrieval dashboard",
    "Document lifecycle management",
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 100
          }
          return prev + 0.5
        })
      }, 50) // 50ms interval for smooth animation
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying])

  useEffect(() => {
    const frameIndex = Math.min(Math.floor((progress / 100) * frames.length), frames.length - 1)
    setCurrentFrame(frameIndex)
  }, [progress, frames.length])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentFrame(0)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Demo Animation</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            See our digital archiving solution in action with this 60-second walkthrough.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-slate-100 rounded-xl overflow-hidden shadow-md">
            <div className="aspect-video bg-slate-900 relative">
              {/* Demo Animation Content - Placeholder for now */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center max-w-md px-4">
                  <h3 className="text-2xl font-semibold mb-4">{frames[currentFrame]}</h3>
                  <p className="text-slate-300">
                    {currentFrame === 0 &&
                      "Drag and drop multiple documents into the system or connect with existing document sources."}
                    {currentFrame === 1 &&
                      "AI-powered OCR extracts text from all document types, including handwritten notes."}
                    {currentFrame === 2 &&
                      "Documents are automatically tagged with relevant metadata for easy searching and filtering."}
                    {currentFrame === 3 &&
                      "Powerful search capabilities allow users to find documents instantly based on content or metadata."}
                    {currentFrame === 4 &&
                      "Complete document lifecycle management with retention policies and secure deletion."}
                  </p>

                  <div className="mt-8 flex items-center justify-center space-x-2">
                    <div className="w-20 h-20 rounded-full bg-indigo-900/50 flex items-center justify-center backdrop-blur-sm">
                      {currentFrame === 0 && <ChevronRight className="w-12 h-12 text-white" />}
                      {currentFrame === 1 && <ChevronRight className="w-12 h-12 text-white" />}
                      {currentFrame === 2 && <ChevronRight className="w-12 h-12 text-white" />}
                      {currentFrame === 3 && <ChevronRight className="w-12 h-12 text-white" />}
                      {currentFrame === 4 && <ChevronRight className="w-12 h-12 text-white" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-slate-200">
              <motion.div
                className="h-full bg-indigo-600"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              ></motion.div>
            </div>

            {/* Controls */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" onClick={handlePlayPause} className="w-10 h-10 rounded-full">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleReset}
                  className="w-10 h-10 rounded-full"
                  disabled={progress === 0}
                >
                  <RotateCcw className="w-5 h-5" />
                </Button>
              </div>

              <div className="text-sm text-slate-600">{`${Math.round(progress)}% complete`}</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-5 gap-2">
            {frames.map((frame, index) => (
              <div
                key={index}
                className={`h-1 rounded-full ${index <= currentFrame ? "bg-indigo-600" : "bg-slate-200"}`}
              ></div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-slate-600">{`Frame ${currentFrame + 1} of ${frames.length}: ${frames[currentFrame]}`}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
