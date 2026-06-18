"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Database, FileSearch, FolderArchive } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ArchivingHero() {
  const [currentAnimation, setCurrentAnimation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Build Smart, Searchable Document Archives
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-indigo-100 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transform paper and scanned documents into fully searchable digital archives with AI-powered OCR, metadata
              tagging, and intelligent indexing for faster retrieval and regulatory compliance.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-100">
                <Link href="/book-demo">See Archiving Demo</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full h-full relative perspective-[1000px]">
              {/* Document Grid Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[300px] h-[350px]">
                  {/* Stacked Paper Documents */}
                  <motion.div
                    className="absolute top-0 left-0 w-[220px] h-[280px] bg-white rounded-lg shadow-lg flex items-center justify-center"
                    animate={{
                      x: currentAnimation === 0 ? 0 : currentAnimation === 1 ? -150 : -150,
                      y: currentAnimation === 0 ? 0 : currentAnimation === 1 ? 0 : 0,
                      opacity: currentAnimation === 2 ? 0.5 : 1,
                      scale: currentAnimation === 0 ? 1 : currentAnimation === 1 ? 0.9 : 0.85,
                      rotateY: currentAnimation === 0 ? 0 : currentAnimation === 1 ? 15 : 30,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <div className="w-[180px] h-[240px] border-2 border-slate-200 rounded flex flex-col p-4">
                      <div className="w-full h-6 bg-slate-200 rounded mb-3"></div>
                      <div className="w-3/4 h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="w-full h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="w-5/6 h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="w-full h-4 bg-slate-200 rounded mb-4"></div>
                      <div className="w-full h-24 bg-slate-200 rounded mb-3"></div>
                      <div className="w-2/3 h-4 bg-slate-200 rounded"></div>
                    </div>
                  </motion.div>

                  {/* OCR Scanning Animation */}
                  <motion.div
                    className="absolute top-0 left-0 w-[220px] h-[280px] bg-indigo-50 rounded-lg shadow-lg overflow-hidden"
                    animate={{
                      x: currentAnimation === 0 ? 50 : currentAnimation === 1 ? 0 : 150,
                      y: currentAnimation === 0 ? 30 : currentAnimation === 1 ? 30 : 30,
                      opacity: currentAnimation === 0 ? 0.3 : 1,
                      scale: currentAnimation === 0 ? 0.9 : 1,
                      rotateY: currentAnimation === 0 ? 15 : currentAnimation === 1 ? 0 : -15,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <div className="w-full h-full relative p-4 flex flex-col">
                      <div className="w-full h-6 bg-indigo-200 rounded mb-3"></div>
                      <div className="w-3/4 h-4 bg-indigo-200 rounded mb-2"></div>
                      <div className="w-full h-4 bg-indigo-200 rounded mb-2"></div>
                      <div className="w-5/6 h-4 bg-indigo-200 rounded mb-2"></div>
                      <div className="w-full h-4 bg-indigo-200 rounded mb-4"></div>
                      <div className="w-full h-24 bg-indigo-200 rounded mb-3"></div>
                      <div className="w-2/3 h-4 bg-indigo-200 rounded"></div>

                      {/* Scanning Line Animation */}
                      <motion.div
                        className="absolute left-0 top-0 w-full h-2 bg-indigo-500 opacity-70"
                        animate={{
                          top: currentAnimation === 1 ? [0, 280, 0] : 0,
                          opacity: currentAnimation === 1 ? 0.7 : 0,
                        }}
                        transition={{
                          duration: 3,
                          ease: "linear",
                          repeat: currentAnimation === 1 ? Number.POSITIVE_INFINITY : 0,
                          repeatType: "loop",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Digital Data Grid */}
                  <motion.div
                    className="absolute top-0 left-0 w-[220px] h-[280px] bg-gradient-to-br from-indigo-100 to-white rounded-lg shadow-lg overflow-hidden"
                    animate={{
                      x: currentAnimation === 0 ? 100 : currentAnimation === 1 ? 150 : 0,
                      y: currentAnimation === 0 ? 60 : currentAnimation === 1 ? 60 : 60,
                      opacity: currentAnimation === 2 ? 1 : currentAnimation === 1 ? 0.3 : 0,
                      scale: currentAnimation === 2 ? 1 : 0.9,
                      rotateY: currentAnimation === 2 ? 0 : -15,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <div className="w-full h-full p-3 flex flex-col">
                      <div className="w-full flex justify-between items-center mb-3">
                        <div className="w-24 h-6 bg-indigo-600 rounded"></div>
                        <FileSearch className="w-6 h-6 text-indigo-600" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="h-8 bg-indigo-100 rounded flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-indigo-300"></div>
                          </div>
                        ))}
                      </div>

                      <div className="flex-1 bg-indigo-50 rounded p-2">
                        <div className="w-full h-5 bg-indigo-200 rounded mb-2"></div>
                        <div className="w-full h-5 bg-indigo-200 rounded mb-2"></div>
                        <div className="w-3/4 h-5 bg-indigo-200 rounded mb-2"></div>
                        <div className="w-full h-5 bg-indigo-200 rounded mb-2"></div>
                        <div className="w-5/6 h-5 bg-indigo-200 rounded"></div>
                      </div>

                      <div className="mt-3 flex justify-between">
                        <div className="w-16 h-6 bg-indigo-600 rounded"></div>
                        <div className="w-16 h-6 bg-indigo-300 rounded"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Icons floating around */}
                  <motion.div
                    className="absolute"
                    animate={{
                      x: [0, 50, 0],
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      times: [0, 0.5, 1],
                      delay: 0.5,
                    }}
                    style={{ left: "10%", top: "20%" }}
                  >
                    <FolderArchive className="text-indigo-300 w-8 h-8" />
                  </motion.div>

                  <motion.div
                    className="absolute"
                    animate={{
                      x: [0, -40, 0],
                      y: [0, 40, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      times: [0, 0.5, 1],
                      delay: 1,
                    }}
                    style={{ right: "15%", top: "30%" }}
                  >
                    <Database className="text-indigo-300 w-8 h-8" />
                  </motion.div>

                  <motion.div
                    className="absolute"
                    animate={{
                      x: [0, 30, 0],
                      y: [0, 50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      times: [0, 0.5, 1],
                      delay: 1.5,
                    }}
                    style={{ left: "25%", bottom: "10%" }}
                  >
                    <FileSearch className="text-indigo-300 w-8 h-8" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
