"use client"

import { motion } from "framer-motion"

export default function FieldCoverageTable() {
  const headerFields = [
    { key: "invoice_number", name: "Invoice Number" },
    { key: "invoice_date", name: "Invoice Date" },
    { key: "due_date", name: "Due Date" },
    { key: "vendor_name", name: "Vendor Name" },
    { key: "vendor_address", name: "Vendor Address" },
    { key: "vendor_tax_id", name: "Vendor Tax ID" },
    { key: "customer_name", name: "Customer Name" },
    { key: "customer_address", name: "Customer Address" },
    { key: "customer_tax_id", name: "Customer Tax ID" },
    { key: "payment_terms", name: "Payment Terms" },
  ]

  const lineItemFields = [
    { key: "item_description", name: "Item Description" },
    { key: "item_code", name: "Item Code" },
    { key: "quantity", name: "Quantity" },
    { key: "unit_price", name: "Unit Price" },
    { key: "discount", name: "Discount" },
    { key: "tax_rate", name: "Tax Rate" },
    { key: "tax_amount", name: "Tax Amount" },
    { key: "line_total", name: "Line Total" },
  ]

  const derivedMetrics = [
    { key: "subtotal", name: "Subtotal" },
    { key: "total_tax", name: "Total Tax" },
    { key: "total_amount", name: "Total Amount" },
    { key: "currency", name: "Currency" },
    { key: "discount_total", name: "Discount Total" },
    { key: "shipping_cost", name: "Shipping Cost" },
    { key: "tax_verification", name: "Tax Verification" },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Field Coverage Table</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI extracts all essential data fields from your financial documents with exceptional accuracy
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-6 border-b md:border-b-0 md:border-r border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  H
                </span>
                Header Fields
              </h3>
              <ul className="space-y-2">
                {headerFields.map((field, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="text-xs text-indigo-500 font-mono mr-2">{field.key}</span>
                    <span>{field.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-b md:border-b-0 md:border-r border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  L
                </span>
                Line-Item Fields
              </h3>
              <ul className="space-y-2">
                {lineItemFields.map((field, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="text-xs text-indigo-500 font-mono mr-2">{field.key}</span>
                    <span>{field.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  D
                </span>
                Derived Metrics
              </h3>
              <ul className="space-y-2">
                {derivedMetrics.map((field, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="text-xs text-indigo-500 font-mono mr-2">{field.key}</span>
                    <span>{field.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-indigo-50 p-4 text-center">
            <p className="text-indigo-900 font-medium">99%+ header, 96% line-item accuracy on benchmark set.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
