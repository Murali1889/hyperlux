"use client"

import { motion } from "framer-motion"
import { FileText, DollarSign, ShieldAlert, ClipboardCheck } from "lucide-react"

export default function KeyFeatures() {
  const features = [
    {
      icon: <FileText className="w-10 h-10 text-indigo-600" />,
      title: "Bank statement OCR and parsing",
      description:
        "Our advanced OCR technology automatically extracts and categorizes transaction data from bank statements across 10,000+ financial institutions. The system identifies deposits, withdrawals, recurring payments, and calculates average balances. It handles multiple statement formats including PDFs, images, and digital statements, while maintaining 98% accuracy even with poor-quality scans. This eliminates manual data entry and accelerates income verification by up to 85%.",
      features: ["Multi-bank support", "Transaction categorization", "Balance calculation", "Format flexibility"],
    },
    {
      icon: <DollarSign className="w-10 h-10 text-indigo-600" />,
      title: "Income and employment document verification",
      description:
        "Automatically extract and verify income data from pay stubs, W-2s, tax returns, and employment verification letters. The system calculates gross and net income, identifies income sources, and verifies employment duration. It handles complex scenarios like variable income, multiple employers, and self-employment documentation. The AI engine learns from each verification, continuously improving accuracy and reducing exceptions. This comprehensive approach ensures thorough income verification while reducing processing time by 70%.",
      features: ["Multiple document types", "Income calculation", "Employment verification", "Self-learning AI"],
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-indigo-600" />,
      title: "Fraud detection flags",
      description:
        "Our AI-powered fraud detection system automatically identifies potential document tampering, inconsistencies, and suspicious patterns. It checks for pixel-level alterations, font inconsistencies, and mathematical discrepancies in financial documents. The system compares data across multiple documents to identify contradictions and maintains a database of known fraud patterns. Real-time alerts notify loan officers of potential issues, allowing for immediate investigation while reducing fraud losses by up to 60%.",
      features: [
        "Document tampering detection",
        "Cross-document verification",
        "Pattern recognition",
        "Real-time alerts",
      ],
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-indigo-600" />,
      title: "Audit-ready reporting",
      description:
        "Generate comprehensive, compliance-focused verification reports that document every step of the verification process. Each report includes data sources, extraction confidence scores, validation checks performed, and exception handling. The system maintains a complete audit trail of all verification activities, including user actions and system processes. Reports are customizable to meet specific regulatory requirements including TILA-RESPA, Ability-to-Repay, and Fair Lending standards. This ensures your verification process is fully transparent and audit-ready.",
      features: [
        "Comprehensive documentation",
        "Compliance alignment",
        "Complete audit trails",
        "Customizable reporting",
      ],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Key Features</h2>
          <p className="text-lg text-slate-600">
            Our AI-powered loan verification solution offers comprehensive capabilities to transform your lending
            process
          </p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:flex gap-8">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-slate-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {feature.features.map((item, i) => (
                      <div
                        key={i}
                        className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
