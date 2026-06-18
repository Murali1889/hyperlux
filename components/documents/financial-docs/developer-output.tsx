"use client"

import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeveloperOutput() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Developer Output</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Clean, structured JSON output ready for integration with your financial systems
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <div className="flex items-center bg-gray-800 px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm">invoice-extraction-response.json</div>
              <Button variant="ghost" size="sm" className="ml-auto text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 text-sm font-mono overflow-x-auto">
              <pre className="text-white">
                {`{
  "document_type": "invoice",
  "confidence_score": 0.98,
  "header": {
    "invoice_number": "INV-2023-0042",
    "invoice_date": "2023-05-18",
    "due_date": "2023-06-17",
    "vendor": {
      "name": "Acme Supplies Ltd",
      "address": "123 Business Park, Mumbai 400001",
      "tax_id": "GSTIN98765432109"
    },
    "customer": {
      "name": "DocsAPI Technologies",
      "address": "456 Tech Hub, Bangalore 560001",
      "tax_id": "GSTIN12345678901"
    },
    "payment_terms": "Net 30"
  },
  "line_items": [
    {
      "item_description": "Office Supplies",
      "item_code": "OS-123",
      "quantity": 5,
      "unit_price": 120.00,
      "tax_rate": 18,
      "tax_amount": 108.00,
      "line_total": 708.00
    },
    {
      "item_description": "Software License",
      "item_code": "SL-456",
      "quantity": 1,
      "unit_price": 1200.00,
      "tax_rate": 18,
      "tax_amount": 216.00,
      "line_total": 1416.00
    }
  ],
  "summary": {
    "subtotal": 1800.00,
    "total_tax": 324.00,
    "total_amount": 2124.00,
    "currency": "INR",
    "tax_verification": true
  }
}`}
              </pre>
            </div>
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-indigo-900 mb-2">Integration Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-indigo-50 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-indigo-700">REST API</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-indigo-700">Webhooks</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-indigo-700">SDK</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg text-center">
                <span className="text-sm font-medium text-indigo-700">Batch Processing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
