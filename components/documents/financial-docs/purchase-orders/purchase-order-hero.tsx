"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function PurchaseOrderHero() {
  return (
    <section className="bg-indigo-50 py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-6">
            Digitise Purchase Orders in Seconds
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform paper and PDF purchase orders into structured data that seamlessly integrates with your
            procurement systems and inventory management for real-time stock visibility.
          </p>
          <Button asChild className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-6 text-lg">
            <Link href="/book-demo">
              Book a PO OCR Demo
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#4338CA"
            d="M45.7,-76.9C58.9,-69.2,69.3,-55.4,76.4,-40.5C83.5,-25.6,87.3,-9.5,85.6,6.1C83.9,21.7,76.7,36.8,66.5,49.5C56.3,62.2,43.1,72.5,28.2,78.1C13.2,83.8,-3.5,84.8,-19.6,80.8C-35.7,76.8,-51.2,67.8,-62.3,55.1C-73.5,42.4,-80.3,26,-83.4,8.5C-86.5,-9,-85.9,-27.5,-78.2,-42.2C-70.5,-56.9,-55.7,-67.8,-40.5,-74.5C-25.3,-81.2,-9.7,-83.7,3.9,-80.1C17.5,-76.5,32.5,-84.7,45.7,-76.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#4338CA"
            d="M39.9,-65.7C51.1,-58.5,59.5,-46.3,65.2,-33.1C70.9,-19.9,73.9,-5.7,72.8,8.4C71.7,22.5,66.5,36.5,57.4,47.8C48.3,59.1,35.3,67.7,20.9,72.3C6.5,76.9,-9.4,77.5,-23.1,72.6C-36.8,67.7,-48.3,57.3,-57.3,45.1C-66.3,32.9,-72.8,18.9,-75.2,3.8C-77.6,-11.3,-75.9,-27.5,-68.1,-40.3C-60.3,-53.1,-46.4,-62.5,-32.5,-68.1C-18.6,-73.7,-4.7,-75.5,7.8,-72.5C20.2,-69.5,28.7,-72.9,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  )
}
