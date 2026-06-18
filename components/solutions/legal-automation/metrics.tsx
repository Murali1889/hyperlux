"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Calendar } from "lucide-react"

export default function Metrics() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const metrics = [
    {
      icon: <CheckCircle className="h-10 w-10 text-indigo-700" />,
      value: 95,
      unit: "%",
      label: "clause accuracy",
      endValue: 95,
    },
    {
      icon: <Calendar className="h-10 w-10 text-indigo-700" />,
      value: 0,
      unit: "",
      label: "renewal alerts sooner",
      endValue: 30,
      suffix: " days",
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-700" />,
      value: 0,
      unit: "",
      label: "hours saved/month",
      endValue: 200,
    },
  ]

  const [counters, setCounters] = useState(
    metrics.map((metric) => ({
      ...metric,
      value: 0,
    })),
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const duration = 2000 // 2 seconds for the animation
          const frameDuration = 1000 / 60 // 60fps
          const totalFrames = Math.round(duration / frameDuration)

          let frame = 0
          const timer = setInterval(() => {
            frame++

            const progress = frame / totalFrames
            const easedProgress = easeOutQuad(progress)

            setCounters((prevCounters) =>
              prevCounters.map((counter, i) => ({
                ...counter,
                value: Math.round(easedProgress * metrics[i].endValue),
              })),
            )

            if (frame === totalFrames) {
              clearInterval(timer)
            }
          }, frameDuration)
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
  }, [hasAnimated])

  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => t * (2 - t)

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Measurable Results</h2>
          <p className="text-xl text-gray-700">
            Our legal automation solution delivers significant improvements in accuracy, efficiency, and time savings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {counters.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-lg p-8 text-center shadow-sm"
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
                {metric.value}
                {metric.unit}
                {metric.suffix}
              </div>
              <div className="text-lg text-gray-700">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 italic">
            Verified results from over 50 enterprise legal departments using our solution for 12+ months.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
