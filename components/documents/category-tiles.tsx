"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CreditCard, UserCheck, Scale, Stethoscope, Truck } from "lucide-react"

export default function CategoryTiles() {
  const categories = [
    {
      title: "Financial Documents",
      description: "Invoices, bank statements, receipts, and financial reports with automated data extraction.",
      icon: <CreditCard className="h-8 w-8 text-indigo-700" />,
      href: "/documents/financial-docs",
      color: "bg-indigo-50",
    },
    {
      title: "Identity Documents",
      description: "Passports, driver's licenses, ID cards, and proof of address verification.",
      icon: <UserCheck className="h-8 w-8 text-indigo-700" />,
      href: "/documents/identity-docs",
      color: "bg-indigo-50",
    },
    {
      title: "Legal Documents",
      description: "Contracts, agreements, NDAs, and legal forms with clause extraction.",
      icon: <Scale className="h-8 w-8 text-indigo-700" />,
      href: "/documents/legal-docs",
      color: "bg-indigo-50",
    },
    {
      title: "Medical Documents",
      description: "Insurance claims, prescriptions, medical records, and lab reports.",
      icon: <Stethoscope className="h-8 w-8 text-indigo-700" />,
      href: "/documents/medical-docs",
      color: "bg-indigo-50",
    },
    {
      title: "Shipping Documents",
      description: "Bills of lading, packing slips, PODs, and customs declarations.",
      icon: <Truck className="h-8 w-8 text-indigo-700" />,
      href: "/documents/shipping-docs",
      color: "bg-indigo-50",
    },
  ]

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Document Categories</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI engine is trained on thousands of document templates across these key categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="block h-full">
                <div
                  className={`${category.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full border border-indigo-100`}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <div className="text-indigo-700 font-medium flex items-center">
                    View templates
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
