"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { TrendingDown, Clock, CheckCircle, BarChart } from "lucide-react"

export default function ImpactMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [delayReduction, setDelayReduction] = useState(0)
  const [hoursSaved, setHoursSaved] = useState(0)
  const [accuracyRate, setAccuracyRate] = useState(0)
  const [visibilityImprovement, setVisibilityImprovement] = useState(0)

  useEffect(() => {
    if (isInView) {
      const delayTimer = setTimeout(() => {
        const delayInterval = setInterval(() => {
          setDelayReduction((prev) => {
            if (prev < 80) return prev + 1
            clearInterval(delayInterval)
            return 80
          })
        }, 20)

        return () => clearInterval(delayInterval)
      }, 0)

      const hoursTimer = setTimeout(() => {
        const hoursInterval = setInterval(() => {
          setHoursSaved((prev) => {
            if (prev < 2) return prev + 0.1
            clearInterval(hoursInterval)
            return 2
          })
        }, 50)

        return () => clearInterval(hoursInterval)
      }, 200)

      const accuracyTimer = setTimeout(() => {
        const accuracyInterval = setInterval(() => {
          setAccuracyRate((prev) => {
            if (prev < 99) return prev + 1
            clearInterval(accuracyInterval)
            return 99
          })
        }, 20)

        return () => clearInterval(accuracyInterval)
      }, 400)

      const visibilityTimer = setTimeout(() => {
        const visibilityInterval = setInterval(() => {
          setVisibilityImprovement((prev) => {
            if (prev < 95) return prev + 1
            clearInterval(visibilityInterval)
            return 95
          })
        }, 20)

        return () => clearInterval(visibilityInterval)
      }, 600)

      return () => {
        clearTimeout(delayTimer)
        clearTimeout(hoursTimer)
        clearTimeout(accuracyTimer)
        clearTimeout(visibilityTimer)
      }
    }
  }, [isInView])

  return (
    <section className="py-20 bg-indigo-700 text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Metrics</h2>
          <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
            Our solutions deliver measurable improvements to your supply chain operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Delays Reduction */}
          <motion.div
            className="bg-indigo-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-700 p-3 rounded-full">
                <TrendingDown className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Delays Reduced</h3>
            <div className="text-4xl md:text-5xl font-bold text-center text-white mb-2">{delayReduction}%</div>
            <p className="text-indigo-200 text-center">Fewer processing delays in your supply chain operations</p>
          </motion.div>

          {/* Hours Saved */}
          <motion.div
            className="bg-indigo-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-700 p-3 rounded-full">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Hours Saved</h3>
            <div className="text-4xl md:text-5xl font-bold text-center text-white mb-2">{hoursSaved.toFixed(1)}</div>
            <p className="text-indigo-200 text-center">Hours saved per batch of documents processed</p>
          </motion.div>

          {/* Accuracy Rate */}
          <motion.div
            className="bg-indigo-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-700 p-3 rounded-full">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Accuracy Rate</h3>
            <div className="text-4xl md:text-5xl font-bold text-center text-white mb-2">{accuracyRate}%</div>
            <p className="text-indigo-200 text-center">Data extraction accuracy with AI-powered OCR</p>
          </motion.div>

          {/* Visibility Improvement */}
          <motion.div
            className="bg-indigo-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-700 p-3 rounded-full">
                <BarChart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Visibility</h3>
            <div className="text-4xl md:text-5xl font-bold text-center text-white mb-2">{visibilityImprovement}%</div>
            <p className="text-indigo-200 text-center">Improvement in supply chain visibility and tracking</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
