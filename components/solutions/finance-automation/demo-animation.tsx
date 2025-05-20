"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function DemoAnimation() {
  // Using a simpler approach instead of Lottie to avoid potential errors
  const [animationStep, setAnimationStep] = useState(0)

  // Set up animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">See Finance Automation in Action</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Watch how our AI transforms unstructured documents into structured data in seconds
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">From Invoice to Structured Data</h3>
              <p className="text-gray-700 mb-4">Our AI engine extracts key information from invoices including:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-700">✓</span> Vendor details and tax information
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-700">✓</span> Line items, quantities, and prices
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-700">✓</span> Payment terms and due dates
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-700">✓</span> Currency and tax calculations
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-[300px] flex items-center justify-center">
              {/* Simple animation sequence instead of Lottie */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Step 1: Invoice */}
                <motion.div
                  className="absolute bg-white border-2 border-indigo-200 rounded-md p-4 w-64 h-80"
                  initial={false}
                  animate={{
                    opacity: animationStep === 0 ? 1 : 0,
                    scale: animationStep === 0 ? 1 : 0.8,
                    x: animationStep === 0 ? 0 : -100,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="border-b-2 border-gray-200 pb-2 mb-2">
                    <div className="font-bold text-indigo-900">INVOICE</div>
                    <div className="text-sm text-gray-500">#INV-2023-0042</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/5"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-sm text-gray-500">PDF Document</div>
                </motion.div>

                {/* Step 2: Processing */}
                <motion.div
                  className="absolute flex flex-col items-center"
                  initial={false}
                  animate={{
                    opacity: animationStep === 1 ? 1 : 0,
                    scale: animationStep === 1 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 border-4 border-indigo-700 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <div className="text-indigo-700 font-medium">Processing...</div>
                  <div className="text-sm text-gray-500 mt-2">Extracting data with AI</div>
                </motion.div>

                {/* Step 3: JSON Result */}
                <motion.div
                  className="absolute bg-gray-900 rounded-md p-4 w-72 h-80 text-left overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: animationStep === 2 ? 1 : 0,
                    scale: animationStep === 2 ? 1 : 0.8,
                    x: animationStep === 2 ? 0 : 100,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <pre className="text-xs text-indigo-300 font-mono">
                    {`{
  "invoice_number": "INV-2023-0042",
  "date": "2023-05-18",
  "vendor": {
    "name": "Acme Supplies Ltd",
    "tax_id": "GSTIN98765432109"
  },
  "line_items": [
    {
      "description": "Office Supplies",
      "quantity": 5,
      "unit_price": 120.00,
      "amount": 600.00
    },
    {
      "description": "Software License",
      "quantity": 1,
      "unit_price": 1200.00,
      "amount": 1200.00
    }
  ],
  "subtotal": 1800.00,
  "tax": 324.00,
  "total": 2124.00
}`}
                  </pre>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
