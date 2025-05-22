"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, FileCheck, BarChart4 } from "lucide-react"

export default function SupportedFileTypes() {
  const fileTypes = [
    {
      title: "Invoices",
      description:
        "Process invoices in PDF, TIFF, JPEG, and PNG formats. Extract vendor details, line items, tax information, and payment terms with 99% accuracy.",
      icon: <FileText className="h-8 w-8 text-indigo-700" />,
      href: "/documents/financial-docs/invoices",
    },
    {
      title: "Purchase Orders",
      description:
        "Automatically extract buyer and supplier information, order details, line items, delivery terms, and payment conditions from purchase orders in any format.",
      icon: <FileCheck className="h-8 w-8 text-indigo-700" />,
      href: "/documents/financial-docs/purchase-orders",
    },
    {
      title: "Bank Statements",
      description:
        "Process both e-statements and scanned bank statements to extract account details, transaction history, opening/closing balances, and reconcile with your financial records.",
      icon: <BarChart4 className="h-8 w-8 text-indigo-700" />,
      href: "/documents/financial-docs/bank-statements",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Supported File Types</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI engine processes all common financial document formats with industry-leading accuracy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fileTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={type.href} className="block h-full">
                <div
                  className={`bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full border border-indigo-100 ${type.href.includes("invoices") ? "ring-2 ring-indigo-500" : ""}`}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">{type.title}</h3>
                  <p className="text-gray-700 mb-4">{type.description}</p>
                  <div className="text-indigo-700 font-medium flex items-center">
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
