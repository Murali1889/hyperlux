"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { TruckIcon, FileTextIcon, BarChart3Icon } from "lucide-react"

export default function ShippingDocsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.2,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 to-slate-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Real-Time Shipment Data with Automated OCR
            </h1>
            <p className="text-xl text-slate-300 max-w-lg">
              Transform bills of lading, proofs of delivery, and packing lists into structured data with 97% accuracy.
              Streamline logistics workflows and gain instant shipment visibility.
            </p>
            <div className="pt-6">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
                Explore Shipping Templates
              </Button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="w-full lg:w-1/2 aspect-video relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50"
          >
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {/* Document cards that transform into data */}
                <motion.div
                  variants={cardVariants}
                  className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center aspect-square"
                >
                  <FileTextIcon className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-sm text-center">Bill of Lading</span>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center aspect-square"
                >
                  <TruckIcon className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-sm text-center">Proof of Delivery</span>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center aspect-square"
                >
                  <FileTextIcon className="w-8 h-8 text-indigo-400 mb-2" />
                  <span className="text-sm text-center">Packing List</span>
                </motion.div>
              </div>

              {/* Data flow visualization */}
              <div className="mt-16 w-full max-w-md">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3Icon className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm text-slate-300">Data Extraction</span>
                  </div>

                  {[
                    { label: "Shipment ID", value: 95 },
                    { label: "Consignee Details", value: 98 },
                    { label: "Item Descriptions", value: 92 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
