"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function LoanFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What document formats are supported?",
      answer: (
        <>
          Our system supports a wide range of document formats including PDF, JPEG, PNG, TIFF, and even scanned
          documents. We can process bank statements from over 10,000 financial institutions, tax documents (
          <Link href="/resources/blogs/w2-1099-tax-form-ocr-underwriting" className="underline hover:text-indigo-700">
            W-2, 1099, 1040
          </Link>
          ),{" "}
          <Link href="/resources/blogs/pay-stub-income-verification-ocr" className="underline hover:text-indigo-700">
            pay stubs
          </Link>
          , and employment verification letters. The system is designed to handle both digital and scanned physical
          documents, maintaining high accuracy even with lower quality scans.
        </>
      ),
    },
    {
      question: "How is data privacy handled?",
      answer:
        "We take data privacy extremely seriously. All documents are processed in a secure, SOC 2 Type II compliant environment. Personal and financial data is encrypted both in transit and at rest using AES-256 encryption. We maintain strict access controls and implement data minimization practices. Our system is designed to be compliant with GLBA, CCPA, GDPR, and other relevant privacy regulations. We do not store documents longer than necessary for processing, and all data handling follows industry best practices for financial information.",
    },
    {
      question: "Can it integrate with loan origination systems?",
      answer:
        "Yes, our solution offers seamless integration with all major loan origination systems including Encompass, Calyx Point, Mortgage Cadence, and custom LOS platforms. We provide RESTful APIs, webhooks, and pre-built connectors to facilitate easy integration. The system can be configured to automatically push verified data directly into your LOS, eliminating manual data entry. Our professional services team provides comprehensive support for custom integrations to ensure a smooth implementation process.",
    },
    {
      question: "Can it detect forged documents?",
      answer: (
        <>
          Our system includes advanced fraud detection capabilities that can identify potentially forged or altered
          documents, see our{" "}
          <Link href="/resources/blogs/bank-statement-fraud-detection" className="underline hover:text-indigo-700">
            bank statement fraud detection guide
          </Link>{" "}
          for the specifics. It analyzes documents at the pixel level to detect inconsistencies in fonts, spacing,
          and formatting that might indicate tampering. The system also performs cross-document validation to
          identify discrepancies between related documents. Additionally, it checks for mathematical inconsistencies
          and compares extracted data against known patterns of fraudulent activity. When potential fraud is
          detected, the system flags the document for human review and provides detailed information about the
          suspicious elements.
        </>
      ),
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Get answers to common questions about our loan verification solution</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-slate-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-lg text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
