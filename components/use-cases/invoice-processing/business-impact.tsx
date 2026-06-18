"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const metrics = [
  {
    value: 70,
    label: "Reduction in Processing Time",
    suffix: "%",
  },
  {
    value: 50,
    label: "Fewer Invoice Disputes",
    suffix: "%",
  },
  {
    value: 60,
    label: "Cost Savings",
    suffix: "%",
  },
]

export default function BusinessImpact() {
  return (
    <section className="py-20 bg-indigo-50">
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
            Our invoice automation solution delivers quantifiable results that transform your accounts payable function
            from a cost center to a strategic asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <CounterCard key={index} metric={metric} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto border border-indigo-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-indigo-100 flex-shrink-0 overflow-hidden">
              <img src="/professional-headshot.png" alt="CFO testimonial" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-slate-700 italic mb-4">
                "Implementing DocsAPI's invoice automation solution reduced our invoice processing costs by 62% while
                enabling our AP team to focus on strategic vendor management instead of data entry. The ROI was evident
                within the first quarter."
              </p>
              <div>
                <p className="font-semibold text-slate-900">Sarah Johnson</p>
                <p className="text-sm text-slate-500">CFO, Global Manufacturing Inc.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CounterCard({ metric, index }: { metric: any; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = metric.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, metric.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center border border-indigo-100"
    >
      <div className="flex items-end justify-center mb-4">
        <span className="text-5xl font-bold text-indigo-600">{isInView ? count : 0}</span>
        <span className="text-2xl font-bold text-indigo-600 mb-1">{metric.suffix}</span>
      </div>
      <p className="text-lg text-slate-700">{metric.label}</p>
    </motion.div>
  )
}
