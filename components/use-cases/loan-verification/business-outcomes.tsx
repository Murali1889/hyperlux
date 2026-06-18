"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Clock, AlertTriangle, FileCheck } from "lucide-react"

export default function BusinessOutcomes() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const metrics = [
    {
      icon: <Clock className="w-10 h-10 text-indigo-600" />,
      value: "3×",
      label: "faster verification cycles",
      description: "Reduce verification time from days to hours",
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-indigo-600" />,
      value: "90%",
      label: "reduction in manual errors",
      description: "Minimize costly mistakes and rework",
    },
    {
      icon: <FileCheck className="w-10 h-10 text-indigo-600" />,
      value: "100%",
      label: "full compliance audit trails",
      description: "Maintain comprehensive documentation",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Business Outcomes</h2>
          <p className="text-lg text-slate-600">
            Our AI-powered loan verification solution delivers measurable results that transform lending operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md text-center border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {metric.icon}
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-indigo-600 block">{isVisible ? metric.value : "0"}</span>
                <span className="text-lg text-slate-700">{metric.label}</span>
              </div>
              <p className="text-slate-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-indigo-50 rounded-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <img
                src="/professional-headshot.png"
                alt="Sarah Johnson, VP of Lending"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div className="md:w-3/4">
              <blockquote className="text-slate-700 italic mb-4">
                "Implementing DocsAPI's AI-powered loan verification solution has transformed our lending operations.
                We've reduced our verification time by 75% while improving accuracy and compliance. Our loan officers
                can now focus on customer relationships instead of paperwork, and we've seen a 30% increase in loan
                throughput with the same team size."
              </blockquote>
              <div className="font-medium text-slate-900">Sarah Johnson</div>
              <div className="text-sm text-slate-600">VP of Lending, Regional Credit Union</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
