"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, CreditCard, UserCheck, FileSignature, Database } from "lucide-react"

const useCaseIcons = [
  {
    icon: <FileText className="h-12 w-12 text-indigo-600" />,
    label: "Invoice Processing",
  },
  {
    icon: <CreditCard className="h-12 w-12 text-indigo-600" />,
    label: "Loan Verification",
  },
  {
    icon: <UserCheck className="h-12 w-12 text-indigo-600" />,
    label: "ID Proofing",
  },
  {
    icon: <FileSignature className="h-12 w-12 text-indigo-600" />,
    label: "Contract Abstraction",
  },
  {
    icon: <Database className="h-12 w-12 text-indigo-600" />,
    label: "Digital Archiving",
  },
]

export default function UseCasesHero() {
  const [activeIconIndex, setActiveIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prevIndex) => (prevIndex + 1) % useCaseIcons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Unlock Business Value with AI-OCR Use Cases
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-200 mb-8"
            >
              Transform document-heavy processes with intelligent automation that delivers unmatched speed, accuracy,
              and efficiency across industries, from finance to healthcare.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                <a href="#use-cases">Explore Use Cases</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 bg-indigo-800/30 rounded-full flex items-center justify-center border border-indigo-500/30 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-dashed animate-spin-slow"></div>

              {useCaseIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === activeIconIndex ? 1 : 0,
                    scale: index === activeIconIndex ? 1 : 0.8,
                    zIndex: index === activeIconIndex ? 10 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute flex flex-col items-center"
                >
                  <div className="bg-white rounded-full p-6 shadow-lg mb-3">{item.icon}</div>
                  <span className="text-white font-medium text-lg">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-800/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
