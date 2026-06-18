"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { CheckCircle, Clock, Database } from "lucide-react"

export default function AccuracyMetrics() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const metrics = [
    {
      icon: <CheckCircle className="h-10 w-10 text-indigo-700" />,
      value: 0,
      endValue: 99.5,
      unit: "%",
      label: "average field accuracy",
    },
    {
      icon: <Database className="h-10 w-10 text-indigo-700" />,
      value: 0,
      endValue: 5000,
      unit: "+",
      label: "templates pre-trained",
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-700" />,
      value: 0,
      endValue: 2,
      unit: " sec",
      prefix: "< ",
      label: "template detection",
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
                value:
                  i === 0
                    ? Number.parseFloat((easedProgress * metrics[i].endValue).toFixed(1))
                    : Math.round(easedProgress * metrics[i].endValue),
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Accuracy & Coverage Metrics</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our document processing platform delivers industry-leading performance across all document types
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {counters.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-indigo-50 rounded-xl p-8 text-center shadow-md border border-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">{metric.icon}</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
                {metric.prefix || ""}
                {metric.value}
                {metric.unit}
              </div>
              <div className="text-lg text-gray-700">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
