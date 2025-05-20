"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const integrations = [
  {
    name: "SAP",
    description: "Seamless integration with SAP ERP and S/4HANA for real-time data synchronization.",
    logo: "SAP",
  },
  {
    name: "Oracle",
    description: "Connect with Oracle SCM Cloud and NetSuite for end-to-end supply chain visibility.",
    logo: "Oracle",
  },
  {
    name: "Manhattan",
    description: "Integrate with Manhattan WMS for warehouse document processing automation.",
    logo: "Manhattan",
  },
  {
    name: "Blue Yonder",
    description: "Sync with Blue Yonder (formerly JDA) for logistics and distribution optimization.",
    logo: "BlueYonder",
  },
  {
    name: "Infor",
    description: "Connect with Infor CloudSuite for comprehensive supply chain management.",
    logo: "Infor",
  },
  {
    name: "Microsoft Dynamics",
    description: "Integrate with Microsoft Dynamics 365 Supply Chain Management.",
    logo: "Microsoft",
  },
]

export default function IntegrationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState("right")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setSlideDirection("right")
    setActiveIndex((prev) => (prev === integrations.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setSlideDirection("left")
    setActiveIndex((prev) => (prev === 0 ? integrations.length - 1 : prev - 1))
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const handleNext = () => {
    nextSlide()
    resetInterval()
  }

  const handlePrev = () => {
    prevSlide()
    resetInterval()
  }

  const renderLogo = (logoName: string) => {
    return (
      <div className="h-16 w-40 flex items-center justify-center bg-white rounded-lg shadow-sm">
        <div className="text-2xl font-bold text-indigo-700">{logoName}</div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Integrations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our solution integrates seamlessly with your existing supply chain systems.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-4 sm:p-6 md:p-8 md:p-12">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: slideDirection === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: slideDirection === "right" ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              >
                <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                  {renderLogo(integrations[activeIndex].logo)}
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">
                    {integrations[activeIndex].name}
                  </h3>
                  <p className="text-gray-700 mb-6">{integrations[activeIndex].description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      Real-time Sync
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      Bi-directional
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      Secure
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-indigo-900 font-medium">Integration Partners</span>
              <span className="ml-2 bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-full">
                {activeIndex + 1}/{integrations.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white text-indigo-700 hover:bg-indigo-100 transition-colors"
                aria-label="Previous integration"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white text-indigo-700 hover:bg-indigo-100 transition-colors"
                aria-label="Next integration"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {integrations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > activeIndex ? "right" : "left")
                  setActiveIndex(index)
                  resetInterval()
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-indigo-700" : "w-2 bg-indigo-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
