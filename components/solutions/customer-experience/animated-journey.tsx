"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Smartphone, Camera, FileText, CheckCircle } from "lucide-react"

export default function AnimatedJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-indigo-700" />,
      title: "Mobile Screen",
      description: "Customer opens the mobile app to begin the onboarding process",
    },
    {
      icon: <Camera className="w-12 h-12 text-indigo-700" />,
      title: "Snap ID",
      description: "User takes a photo of their ID document using the camera",
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-700" />,
      title: "Auto-filled Form",
      description: "OCR extracts data and automatically fills the registration form",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Success",
      description: "Verification complete and account is instantly activated",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">30-Second Customer Journey</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how our technology transforms the customer onboarding experience from minutes to seconds.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 shadow-md">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStep ? "bg-indigo-700 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-2 bg-indigo-700 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Phone mockup with animation */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="w-full md:w-1/2"
                key={currentStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl border-8 border-gray-800 p-4 shadow-xl max-w-xs mx-auto aspect-[9/16] flex flex-col">
                  {/* Phone content */}
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                key={`description-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Step description */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
