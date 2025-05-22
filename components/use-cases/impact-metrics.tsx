"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const metrics = [
  {
    value: 90,
    label: "reduction in manual effort",
    suffix: "%",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    value: 99,
    label: "accuracy on extracted data",
    suffix: "%",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    value: 3,
    label: "faster processing times",
    suffix: "×",
    color: "from-indigo-700 to-indigo-900",
  },
]

export default function ImpactMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState(metrics.map(() => 0))

  useEffect(() => {
    if (isInView) {
      metrics.forEach((metric, index) => {
        const duration = 2000 // 2 seconds
        const startTime = Date.now()
        const endValue = metric.value

        const interval = setInterval(() => {
          const elapsedTime = Date.now() - startTime
          const progress = Math.min(elapsedTime / duration, 1)

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[index] = Math.floor(progress * endValue)
            return newCounts
          })

          if (progress === 1) {
            clearInterval(interval)
          }
        }, 50)

        return () => clearInterval(interval)
      })
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Measurable Business Impact</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-OCR solutions deliver quantifiable results across all use cases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className={`bg-gradient-to-r ${metric.color} p-8 text-white text-center`}>
                <div className="flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold">
                    {metric.suffix === "×" ? metric.suffix : ""}
                    {counts[index]}
                    {metric.suffix !== "×" ? metric.suffix : ""}
                  </span>
                </div>
                <div className="mt-4 text-xl font-medium">{metric.label}</div>
              </div>
              <div className="bg-white p-4">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${metric.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
