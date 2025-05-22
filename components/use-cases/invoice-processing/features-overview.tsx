"use client"

import { motion } from "framer-motion"
import { FileUp, Table, CheckCircle, ArrowRightLeft } from "lucide-react"

const features = [
  {
    icon: <FileUp className="h-8 w-8 text-indigo-600" />,
    title: "Multi-format Invoice Ingestion",
    description:
      "Process invoices in any format including PDF, scanned images, emails, and EDI. Our intelligent document recognition automatically identifies invoice types, handles multi-page documents, and supports batch processing for high-volume scenarios. The system adapts to your existing invoice formats without requiring supplier changes.",
  },
  {
    icon: <Table className="h-8 w-8 text-indigo-600" />,
    title: "Line-item and Header Data Extraction",
    description:
      "Extract complete invoice data including header information, line items, tax details, and payment terms with 99% accuracy. Our AI engine recognizes complex table structures, handles varying layouts, and captures crucial metadata like invoice numbers, dates, and vendor information. The system also supports multi-currency invoices and tax jurisdictions.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
    title: "Automatic Validation and Exception Routing",
    description:
      "Validate extracted data against purchase orders, receipts, and master data in real-time. The system automatically flags discrepancies, routes exceptions to the appropriate personnel, and provides an intuitive interface for quick resolution. Machine learning continuously improves validation rules based on historical patterns and user corrections.",
  },
  {
    icon: <ArrowRightLeft className="h-8 w-8 text-indigo-600" />,
    title: "ERP Integration",
    description:
      "Seamlessly integrate with leading ERP systems including SAP, Oracle, Microsoft Dynamics, and NetSuite. Our pre-built connectors enable bi-directional data flow, synchronizing vendor information, purchase orders, and payment status. The flexible API architecture supports custom integrations with legacy systems and specialized accounting software.",
  },
]

export default function FeaturesOverview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Invoice Automation Features
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-powered invoice processing solution delivers end-to-end automation with advanced capabilities
            designed for modern finance teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-slate-100"
            >
              <div className="bg-indigo-50 p-3 rounded-lg w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
