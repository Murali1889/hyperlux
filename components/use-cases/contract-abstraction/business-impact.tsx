"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { User } from "lucide-react"

export default function BusinessImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000

      const timer1 = setInterval(() => {
        setCount1((prev) => {
          const next = Math.min(prev + 1, 50)
          if (next === 50) clearInterval(timer1)
          return next
        })
      }, duration / 50)

      const timer2 = setInterval(() => {
        setCount2((prev) => {
          const next = Math.min(prev + 1, 30)
          if (next === 30) clearInterval(timer2)
          return next
        })
      }, duration / 30)

      const timer3 = setInterval(() => {
        setCount3((prev) => {
          const next = Math.min(prev + 5, 200)
          if (next === 200) clearInterval(timer3)
          return next
        })
      }, duration / 40)

      return () => {
        clearInterval(timer1)
        clearInterval(timer2)
        clearInterval(timer3)
      }
    }
  }, [isInView])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Impact</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our contract abstraction solution delivers measurable results that transform legal operations and drive
            business value.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{count1}%</h3>
            <p className="text-slate-700 font-medium">Faster contract review</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-indigo-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{count2}%</h3>
            <p className="text-slate-700 font-medium">Reduction in renewal misses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-indigo-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{count3}+</h3>
            <p className="text-slate-700 font-medium">Hours saved per month</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-50 rounded-xl p-8 border border-slate-200 max-w-3xl mx-auto"
        >
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <div className="bg-indigo-100 rounded-full p-2">
                <User className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <p className="text-slate-600 italic mb-4">
                "Implementing DocsAPI's contract abstraction solution has transformed our legal operations. We've
                reduced contract review time by half and virtually eliminated missed renewal deadlines. Our team now
                focuses on strategic work instead of manual document review, delivering more value to the business."
              </p>
              <div>
                <p className="font-semibold text-slate-900">Sarah Johnson</p>
                <p className="text-sm text-slate-600">General Counsel, Fortune 500 Technology Company</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
