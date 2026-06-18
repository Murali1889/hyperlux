"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CaseStudyHighlight() {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div ref={ref} className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm font-medium mb-4">
              SUCCESS STORY
            </div>
            <h2 className="text-3xl font-bold mb-4">Leading 3PL Revolutionizes Delivery Process</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              How GlobalFreight Partners reduced delivery disputes by 40% and improved operational efficiency through
              OCR automation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="mb-6">
                  <img
                    src="/placeholder.svg?height=60&width=180&query=logistics company logo"
                    alt="GlobalFreight Partners"
                    className="h-12"
                  />
                </div>

                <blockquote className="text-slate-300 italic mb-6">
                  "By implementing DocsAPI's OCR solution, we've transformed our proof of delivery process from a
                  time-consuming paper nightmare into a streamlined digital workflow. Our customers now have instant
                  visibility into their shipments, and our dispute rate has plummeted."
                </blockquote>

                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src="/placeholder.svg?height=60&width=60&query=logistics executive portrait"
                      alt="Sarah Chen"
                      className="h-12 w-12 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-slate-400">VP of Operations, GlobalFreight Partners</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-indigo-300">Impact Metrics</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-slate-300">Delivery Disputes</span>
                    <span className="font-semibold text-indigo-300">-40%</span>
                  </li>
                  <li className="flex justify-between border-t border-slate-700 pt-3">
                    <span className="text-slate-300">Processing Time</span>
                    <span className="font-semibold text-indigo-300">-75%</span>
                  </li>
                  <li className="flex justify-between border-t border-slate-700 pt-3">
                    <span className="text-slate-300">Data Entry Costs</span>
                    <span className="font-semibold text-indigo-300">-62%</span>
                  </li>
                  <li className="flex justify-between border-t border-slate-700 pt-3">
                    <span className="text-slate-300">Customer Satisfaction</span>
                    <span className="font-semibold text-indigo-300">+28%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-indigo-700 text-indigo-300 hover:bg-indigo-900 hover:text-indigo-100"
              >
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
