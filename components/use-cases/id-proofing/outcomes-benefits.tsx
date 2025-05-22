"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function OutcomesBenefits() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [counts, setCounts] = useState({ onboarding: 0, fraud: 0, approval: 0 })

  const metrics = [
    { label: "faster onboarding", value: 90, suffix: "%" },
    { label: "fraud detection improved", value: 3, suffix: "×" },
    { label: "increase in approval rates", value: 20, suffix: "%" },
  ]

  useEffect(() => {
    if (inView) {
      controls.start("visible")

      const duration = 2000 // 2 seconds for the animation
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)

      let frame = 0
      const timer = setInterval(() => {
        frame++
        const progress = frame / totalFrames

        setCounts({
          onboarding: Math.floor(progress * 90),
          fraud: Math.min(Math.floor(progress * 3 * 100) / 100, 3),
          approval: Math.floor(progress * 20),
        })

        if (frame === totalFrames) {
          clearInterval(timer)
        }
      }, frameDuration)

      return () => clearInterval(timer)
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
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
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Outcomes & Benefits</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our ID proofing solution delivers measurable improvements in onboarding speed, fraud prevention, and
            customer experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2 flex items-center justify-center">
              {counts.onboarding}
              <span className="text-indigo-600">%</span>
            </div>
            <p className="text-slate-700 text-lg">faster onboarding</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2 flex items-center justify-center">
              {counts.fraud}
              <span className="text-indigo-600">×</span>
            </div>
            <p className="text-slate-700 text-lg">fraud detection improved</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2 flex items-center justify-center">
              {counts.approval}
              <span className="text-indigo-600">%</span>
            </div>
            <p className="text-slate-700 text-lg">increase in approval rates</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-200">
                <img src="/professional-headshot.png" alt="Client testimonial" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-3/4">
              <blockquote className="text-slate-700 italic mb-4">
                "Implementing HyperVerge's ID proofing solution reduced our customer onboarding time from days to
                minutes while significantly improving our fraud detection capabilities. The seamless user experience has
                dramatically increased our conversion rates."
              </blockquote>
              <div className="font-medium text-slate-900">Sarah Johnson</div>
              <div className="text-sm text-slate-600">Chief Digital Officer, Global Financial Services</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
