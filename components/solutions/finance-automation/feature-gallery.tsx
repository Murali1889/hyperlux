"use client"

import { motion } from "framer-motion"
import { FileText, CheckSquare, BarChart4, FileCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeatureGallery() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Invoice OCR",
      description:
        "Extract data from invoices with 99% accuracy using our advanced OCR technology. Process multiple formats including PDFs, images, and scanned documents automatically.",
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-white" />,
      title: "Three-Way Match",
      description:
        "Automatically match purchase orders, receiving documents, and invoices to ensure accuracy and prevent fraud. Reduce manual verification time by up to 85%.",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-white" />,
      title: "Bank-Statement Parsing",
      description:
        "Convert bank statements from any format into structured data. Automatically categorize transactions and identify discrepancies for faster reconciliation.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-white" />,
      title: "Audit-Pack Builder",
      description:
        "Generate comprehensive audit packs with a single click. Compile all necessary documentation and maintain compliance with regulatory requirements automatically.",
    },
  ]

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Comprehensive Finance Automation Suite
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI-powered solutions transform your finance operations end-to-end
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-indigo-700 text-white">
                <CardHeader className="pb-2">
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-100">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
