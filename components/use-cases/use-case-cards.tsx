"use client"

import { motion } from "framer-motion"
import { FileText, CreditCard, UserCheck, FileSignature, Database } from "lucide-react"
import Link from "next/link"

const useCases = [
  {
    title: "Invoice Processing",
    description:
      "Automate extraction of invoice data including line items, totals, and tax information, at 93% line-item accuracy in our 2026 benchmark.",
    icon: <FileText className="h-8 w-8 text-indigo-600" />,
    href: "/use-cases/invoice-processing",
    color: "bg-indigo-50",
  },
  {
    title: "Loan Verification",
    description:
      "Read and check bank statements, pay stubs and tax documents for loan files.",
    icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
    href: "/documents/financial-docs/bank-statements",
    color: "bg-indigo-50",
  },
  {
    title: "ID Proofing",
    description:
      "Check passports, driver licenses and national IDs in seconds, with fraud checks on each.",
    icon: <UserCheck className="h-8 w-8 text-indigo-600" />,
    href: "/use-cases/id-proofing",
    color: "bg-indigo-50",
  },
  {
    title: "Contract Abstraction",
    description:
      "Pull key clauses, terms and obligations out of contracts so review goes faster.",
    icon: <FileSignature className="h-8 w-8 text-indigo-600" />,
    href: "/use-cases/contract-abstraction",
    color: "bg-indigo-50",
  },
  {
    title: "Digital Archiving",
    description:
      "Turn paper into a searchable archive, with metadata so records are easy to find.",
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    href: "/use-cases/digital-archiving",
    color: "bg-indigo-50",
  },
]

export default function UseCaseCards() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Where Teams Use It</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Where document reading saves the most time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 h-full"
            >
              <div className="p-6 h-full flex flex-col">
                <div className={`${useCase.color} p-3 rounded-lg w-fit mb-4`}>{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{useCase.description}</p>
                <Link
                  href={useCase.href}
                  className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center group"
                >
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
