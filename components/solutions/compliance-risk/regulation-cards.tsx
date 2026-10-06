"use client"

import { motion } from "framer-motion"
import { Shield, FileCheck, UserX } from "lucide-react"

export default function RegulationCards() {
  const regulations = [
    {
      title: "AML / KYC Automation",
      icon: <Shield className="h-12 w-12 text-indigo-700" />,
      description:
        "Automate identity verification and due diligence with AI-powered document processing. Extract and verify customer information from ID cards, passports, and proof of address documents, with MRZ check digits validated and unclear fields flagged for review. Keep a record of what was extracted for regulatory review. Supports global AML regulations including FinCEN, FINTRAC, and international equivalents.",
    },
    {
      title: "SOX Evidence Binder",
      icon: <FileCheck className="h-12 w-12 text-indigo-700" />,
      description:
        "Create digital evidence binders for SOX section 404 compliance with automated document classification and data extraction. Maintain immutable audit trails for all financial controls documentation. Evidence gets collected the same way every time instead of by whoever has a spare afternoon. Automatically flag exceptions and route for review, with full chain-of-custody tracking for every document and approval workflow.",
    },
    {
      title: "GDPR PII Redaction",
      icon: <UserX className="h-12 w-12 text-indigo-700" />,
      description:
        "Automatically identify and redact personally identifiable information (PII) from documents to maintain GDPR compliance. Our AI identifies PII such as names, addresses, ID numbers, and biometric data. Create redacted copies for sharing while maintaining original documents in secure storage. Implement right-to-be-forgotten requests with automated PII discovery across document repositories.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Regulatory Compliance Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regulations.map((regulation, index) => (
            <motion.div
              key={index}
              className="bg-indigo-50 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{regulation.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">{regulation.title}</h3>
              <p className="text-gray-700">{regulation.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
