"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, CheckSquare, BarChart4 } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export default function OperationalBenefits() {
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

  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-indigo-600" />,
      title: "Stop Retyping Shipment Details",
      description:
        "Stop rekeying shipment data by hand, along with the typos that cause shipping delays and billing disputes.",
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-indigo-600" />,
      title: "Improve Delivery Accuracy",
      description:
        "Fewer delivery disputes, because consignee details, delivery instructions and shipment data are captured as written and checked.",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-indigo-600" />,
      title: "Accelerate Inventory Reconciliation",
      description:
        "Automatically match received items against packing lists for faster inventory updates and financial reconciliation.",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Operational Benefits & Time Savings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What you get when shipping documents stop being keyed in by hand.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-indigo-800">See Shipment Problems Sooner</h3>
            <p className="text-slate-700">
              By digitalizing shipping documents in real-time, stakeholders gain immediate visibility into shipment
              status, inventory levels, and delivery estimates. When shipment data arrives as fields instead of paper, problems show up while there is still time to fix them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
