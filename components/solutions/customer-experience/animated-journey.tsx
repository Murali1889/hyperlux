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
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-xs font-medium">DocsAPI</div>
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                      </div>
                    </div>

                    {currentStep === 0 && (
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="bg-indigo-100 p-3 rounded-full mb-4">
                          <Smartphone className="h-8 w-8 text-indigo-700" />
                        </div>
                        <h3 className="text-sm font-bold mb-2">Welcome to DocsAPI</h3>
                        <p className="text-xs text-gray-600 mb-4">Complete your verification in seconds</p>
                        <button className="bg-indigo-700 text-white text-xs py-2 px-4 rounded-md">Get Started</button>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="bg-indigo-100 p-3 rounded-full mb-4">
                          <Camera className="h-8 w-8 text-indigo-700" />
                        </div>
                        <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 mb-4 w-full">
                          <div className="text-xs text-center text-indigo-700">Position your ID card here</div>
                        </div>
                        <button className="bg-indigo-700 text-white text-xs py-2 px-4 rounded-md">Take Photo</button>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-sm font-bold mb-3">Registration Form</h3>
                        <div className="space-y-3 mb-4">
                          <div>
                            <div className="text-xs mb-1">Full Name</div>
                            <div className="h-6 bg-indigo-50 rounded text-xs px-2 flex items-center">John Smith</div>
                          </div>
                          <div>
                            <div className="text-xs mb-1">ID Number</div>
                            <div className="h-6 bg-indigo-50 rounded text-xs px-2 flex items-center">AB123456C</div>
                          </div>
                          <div>
                            <div className="text-xs mb-1">Date of Birth</div>
                            <div className="h-6 bg-indigo-50 rounded text-xs px-2 flex items-center">15/04/1985</div>
                          </div>
                          <div>
                            <div className="text-xs mb-1">Address</div>
                            <div className="h-6 bg-indigo-50 rounded text-xs px-2 flex items-center">
                              123 Main St, Anytown
                            </div>
                          </div>
                        </div>
                        <button className="bg-indigo-700 text-white text-xs py-2 px-4 rounded-md mt-auto">
                          Confirm Details
                        </button>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="bg-green-100 p-3 rounded-full mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-sm font-bold mb-2">Verification Complete!</h3>
                        <p className="text-xs text-gray-600 mb-4">Your account is now active</p>
                        <div className="bg-green-50 text-green-700 text-xs py-1 px-3 rounded-full">
                          Completed in 30 seconds
                        </div>
                      </div>
                    )}
                  </div>
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
                <div>
                  <div className="flex items-center mb-4">
                    {steps[currentStep].icon}
                    <h3 className="text-2xl font-bold text-indigo-900 ml-3">{steps[currentStep].title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{steps[currentStep].description}</p>

                  {currentStep === 0 && (
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">1</span>
                        </div>
                        <span className="text-gray-700">Customer downloads the app</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">2</span>
                        </div>
                        <span className="text-gray-700">Creates account with basic information</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">3</span>
                        </div>
                        <span className="text-gray-700">Begins the verification process</span>
                      </li>
                    </ul>
                  )}

                  {currentStep === 1 && (
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">1</span>
                        </div>
                        <span className="text-gray-700">Camera automatically detects document edges</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">2</span>
                        </div>
                        <span className="text-gray-700">AI verifies document authenticity in real-time</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">3</span>
                        </div>
                        <span className="text-gray-700">Glare and blur detection ensures quality capture</span>
                      </li>
                    </ul>
                  )}

                  {currentStep === 2 && (
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">1</span>
                        </div>
                        <span className="text-gray-700">OCR extracts all relevant information</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">2</span>
                        </div>
                        <span className="text-gray-700">Form fields auto-populate with 99.5% accuracy</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">3</span>
                        </div>
                        <span className="text-gray-700">Customer only needs to verify, not type</span>
                      </li>
                    </ul>
                  )}

                  {currentStep === 3 && (
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">1</span>
                        </div>
                        <span className="text-gray-700">Account instantly activated</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">2</span>
                        </div>
                        <span className="text-gray-700">Customer can immediately access all services</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-indigo-700 text-xs">3</span>
                        </div>
                        <span className="text-gray-700">Entire process completed in just 30 seconds</span>
                      </li>
                    </ul>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
