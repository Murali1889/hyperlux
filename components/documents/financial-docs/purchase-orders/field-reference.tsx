"use client"

import { motion } from "framer-motion"

export default function FieldReference() {
  const headerFields = [
    { key: "po_number", description: "Purchase order identifier" },
    { key: "vendor_code", description: "Vendor/supplier code" },
    { key: "issue_date", description: "Date PO was issued" },
    { key: "ship_to", description: "Shipping address details" },
    { key: "bill_to", description: "Billing address details" },
    { key: "delivery_date", description: "Expected delivery date" },
    { key: "payment_terms", description: "Payment terms and conditions" },
    { key: "buyer_name", description: "Purchasing agent name" },
    { key: "currency", description: "Currency code" },
    { key: "tax_id", description: "Tax identification number" },
  ]

  const lineItemFields = [
    { key: "line_number", description: "Line item sequence number" },
    { key: "sku", description: "Stock keeping unit code" },
    { key: "description", description: "Item description" },
    { key: "qty_ordered", description: "Quantity ordered" },
    { key: "unit_price", description: "Price per unit" },
    { key: "unit", description: "Unit of measure" },
    { key: "delivery_date", description: "Line item delivery date" },
    { key: "discount", description: "Discount percentage or amount" },
    { key: "tax_rate", description: "Tax rate applied" },
    { key: "line_total", description: "Total for line item" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Field Reference</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our purchase order OCR extracts all essential data fields with exceptional accuracy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-indigo-50 rounded-xl p-6 shadow-md border border-indigo-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
              <span className="bg-indigo-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                H
              </span>
              Header Fields
            </h3>
            <div className="space-y-3">
              {headerFields.map((field, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white p-2 rounded-md shadow-sm mr-3">
                    <code className="text-sm text-indigo-700 font-mono">{field.key}</code>
                  </div>
                  <div className="text-gray-700 pt-2">{field.description}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-indigo-50 rounded-xl p-6 shadow-md border border-indigo-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
              <span className="bg-indigo-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                L
              </span>
              Line-Item Fields
            </h3>
            <div className="space-y-3">
              {lineItemFields.map((field, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white p-2 rounded-md shadow-sm mr-3">
                    <code className="text-sm text-indigo-700 font-mono">{field.key}</code>
                  </div>
                  <div className="text-gray-700 pt-2">{field.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
