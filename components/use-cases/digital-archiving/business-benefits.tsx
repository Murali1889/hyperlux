"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Clock, CheckCircle, UserCheck } from "lucide-react"

export default function BusinessBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [searchTimeCount, setSearchTimeCount] = useState(0)
  const [complianceCount, setComplianceCount] = useState(0)
  const [satisfactionCount, setSatisfactionCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const searchDuration = 2000 // 2 seconds
      const complianceDuration = 2000
      const satisfactionDuration = 2000

      const searchIncrement = 85 / (searchDuration / 16)
      const complianceIncrement = 60 / (complianceDuration / 16)
      const satisfactionIncrement = 25 / (satisfactionDuration / 16)

      const searchInterval = setInterval(() => {
        setSearchTimeCount((prev) => {
          const newValue = prev + searchIncrement
          return newValue >= 85 ? 85 : newValue
        })
      }, 16)

      const complianceInterval = setInterval(() => {
        setComplianceCount((prev) => {
          const newValue = prev + complianceIncrement
          return newValue >= 60 ? 60 : newValue
        })
      }, 16)

      const satisfactionInterval = setInterval(() => {
        setSatisfactionCount((prev) => {
          const newValue = prev + satisfactionIncrement
          return newValue >= 25 ? 25 : newValue
        })
      }, 16)

      return () => {
        clearInterval(searchInterval)
        clearInterval(complianceInterval)
        clearInterval(satisfactionInterval)
      }
    }
  }, [isInView])

  return (
    <section className="py-20 bg-indigo-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Business Benefits</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our digital archiving solution delivers quantifiable business value across key operational metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-sm text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              <span className="text-indigo-600">{Math.round(searchTimeCount)}%</span> Reduction
            </h3>
            <p className="text-slate-700">
              Search times reduced by 85%, enabling staff to find critical documents in seconds rather than minutes or
              hours.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-sm text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              <span className="text-indigo-600">{Math.round(complianceCount)}%</span> Faster
            </h3>
            <p className="text-slate-700">
              Compliance audit preparation cut by 60%, with automated reporting and complete audit trails for all
              document activity.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-sm text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <UserCheck className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              <span className="text-indigo-600">{Math.round(satisfactionCount)}%</span> Increase
            </h3>
            <p className="text-slate-700">
              User satisfaction improved by 25% as employees experience frustration-free document retrieval and
              management.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-white rounded-xl p-8 shadow-sm border border-indigo-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden">
              <img src="/professional-headshot.png" alt="Client testimonial" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-slate-700 italic mb-4">
                "After implementing HyperVerge's digital archiving solution, our team reduced document retrieval time
                from minutes to seconds. The automatic metadata tagging has transformed how we organize and access
                critical information, making compliance audits significantly less stressful."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-slate-600 text-sm">Records Manager, National Insurance Group</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
