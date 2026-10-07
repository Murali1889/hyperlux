"use client"

import { motion } from "framer-motion"
import { FileText, Briefcase, Shield } from "lucide-react"

export default function FeatureGrid() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Clause Extraction",
      description:
        "Our advanced contract clause OCR technology automatically identifies and extracts key clauses from legal documents and flags low-confidence clauses for review. It recognizes common clause types including termination, indemnification, force majeure, and confidentiality provisions. Legal teams can instantly search across their entire contract repository by clause type, saving hours of manual review. The extracted clauses are presented in a structured format that can be exported to contract management systems or analyzed for risk assessment.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Litigation Bundle Builder",
      description:
        "Streamline the creation of litigation bundles with our automated document assembly tool. The system intelligently organizes case documents, exhibits, and supporting materials into properly structured bundles following court-specific formatting requirements. Automatic pagination, indexing, and table of contents generation eliminate hours of administrative work. The bundle builder also includes collaborative features allowing multiple team members to contribute simultaneously while maintaining version control. Finalized bundles can be securely shared with clients or submitted to courts electronically.",
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "NDA Redaction",
      description:
        "Protect sensitive information with our intelligent redaction tool designed specifically for legal documents. The system automatically identifies personally identifiable information (PII), financial data, and other confidential details across multiple document formats. Users can customize redaction rules to match specific privacy requirements or compliance frameworks. The tool maintains document integrity while permanently removing sensitive content, with audit logs tracking all redactions for compliance purposes. Batch processing capabilities allow for efficient handling of large document collections.",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Powerful Legal Automation Features</h2>
          <p className="text-xl text-gray-700">
            Transform how your legal team works with our AI-powered document solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="bg-indigo-700 p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              </div>
              <div className="bg-white p-6">
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
