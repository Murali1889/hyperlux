"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { StampIcon as Passport, BadgeIcon as IdCard, FileCheck } from "lucide-react"

export default function DocumentGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
    >
      <div className="absolute w-full h-full rounded-full border-2 border-dashed border-indigo-200 animate-spin-slow" />

      <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-indigo-300 animate-spin-slow-reverse" />

      <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-dashed border-indigo-400 animate-spin-slow" />

      <motion.div
        className="absolute"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Passport className="absolute text-indigo-700 w-10 h-10" style={{ transform: "translate(120px, 0)" }} />
        <IdCard className="absolute text-indigo-700 w-10 h-10" style={{ transform: "translate(-60px, 104px)" }} />
        <FileCheck className="absolute text-indigo-700 w-10 h-10" style={{ transform: "translate(-60px, -104px)" }} />
      </motion.div>

      <motion.div
        className="absolute"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Passport className="absolute text-indigo-600 w-8 h-8" style={{ transform: "translate(0, -150px)" }} />
        <IdCard className="absolute text-indigo-600 w-8 h-8" style={{ transform: "translate(130px, 75px)" }} />
        <FileCheck className="absolute text-indigo-600 w-8 h-8" style={{ transform: "translate(-130px, 75px)" }} />
      </motion.div>

      <div className="absolute w-[40%] h-[40%] rounded-full bg-indigo-50 flex items-center justify-center">
        <div className="text-indigo-700 font-bold text-center">
          <div className="text-3xl">MRZ</div>
          <div className="text-sm">Check digits validated</div>
        </div>
      </div>
    </div>
  )
}
