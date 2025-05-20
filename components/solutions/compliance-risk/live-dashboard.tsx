"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LiveDashboard() {
  const [slaValue, setSlaValue] = useState(0)
  const [exceptionRate, setExceptionRate] = useState(0)
  const [auditIntegrity, setAuditIntegrity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlaValue(98.7)
      setExceptionRate(1.3)
      setAuditIntegrity(100)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-indigo-700">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Live Compliance Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="text-lg font-medium text-gray-500 mb-2">SLA Adherence</div>
              <div className="relative h-40 w-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E0E7FF" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4338CA"
                    strokeWidth="10"
                    strokeDasharray={`${(2 * Math.PI * 45 * slaValue) / 100} ${2 * Math.PI * 45 * (1 - slaValue / 100)}`}
                    strokeDashoffset={2 * Math.PI * 45 * 0.25}
                    strokeLinecap="round"
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#4338CA"
                  >
                    {slaValue}%
                  </text>
                </svg>
              </div>
              <div className="mt-4 text-indigo-900 font-medium">Target: 98%</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-center">
              <div className="text-lg font-medium text-gray-500 mb-2">Exception Rate</div>
              <div className="relative h-40 w-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E0E7FF" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4338CA"
                    strokeWidth="10"
                    strokeDasharray={`${(2 * Math.PI * 45 * exceptionRate) / 5} ${2 * Math.PI * 45 * (1 - exceptionRate / 5)}`}
                    strokeDashoffset={2 * Math.PI * 45 * 0.25}
                    strokeLinecap="round"
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#4338CA"
                  >
                    {exceptionRate}%
                  </text>
                </svg>
              </div>
              <div className="mt-4 text-indigo-900 font-medium">Target: &lt;2%</div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-lg font-medium text-gray-500 mb-2">Audit-Trail Integrity</div>
              <div className="relative h-40 w-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E0E7FF" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4338CA"
                    strokeWidth="10"
                    strokeDasharray={`${(2 * Math.PI * 45 * auditIntegrity) / 100} ${2 * Math.PI * 45 * (1 - auditIntegrity / 100)}`}
                    strokeDashoffset={2 * Math.PI * 45 * 0.25}
                    strokeLinecap="round"
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#4338CA"
                  >
                    {auditIntegrity}%
                  </text>
                </svg>
              </div>
              <div className="mt-4 text-indigo-900 font-medium">Target: 100%</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg">
            Our real-time compliance dashboard provides instant visibility into your document processing operations.
            Monitor SLA adherence, exception rates, and audit trail integrity with configurable alerts and
            notifications. Generate on-demand compliance reports for internal audits or regulatory inquiries with a
            single click.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
