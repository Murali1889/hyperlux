"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Upload, Phone } from "lucide-react"

export default function DocumentsCta() {
  return (
    <section className="py-20 bg-indigo-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to test your documents?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Upload your sample documents to see our AI in action or contact our sales team for a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-indigo-50 text-indigo-700 px-6 py-6 text-lg w-full sm:w-auto flex items-center justify-center">
              <Upload className="mr-2 h-5 w-5" />
              Upload Sample PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
