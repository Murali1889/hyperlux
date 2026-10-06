"use client"

import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeveloperOutput() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Developer Output Example</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Clean, structured JSON output ready for integration with your procurement systems
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
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
              <div className="ml-4 text-gray-400 text-sm">purchase-order-extraction-response.json</div>
              <Button variant="ghost" size="sm" className="ml-auto text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 text-sm font-mono overflow-x-auto">
              <pre className="text-white">
                {`{
  "po_number": "PO-2023-5678",
  "vendor_code": "SUPP-001",
  "issue_date": "2023-06-15",
  "ship_to": {
    "name": "DocsAPI Warehouse",
    "address": "123 Logistics Way, Mumbai 400001"
  },
  "bill_to": {
    "name": "DocsAPI Technologies",
    "address": "456 Tech Hub, Bangalore 560001"
  },
  "line_items": [
    {
      "line_number": 1,
      "sku": "LAP-PRO-15",
      "description": "Laptop Pro 15-inch",
      "qty_ordered": 10,
      "unit_price": 85000.00,
      "unit": "EA",
      "line_total": 850000.00
    },
    {
      "line_number": 2,
      "sku": "MON-27-4K",
      "description": "27-inch 4K Monitor",
      "qty_ordered": 15,
      "unit_price": 32000.00,
      "unit": "EA",
      "line_total": 480000.00
    }
  ],
  "subtotal": 1330000.00,
  "tax_total": 239400.00,
  "total_amount": 1569400.00,
  "currency": "INR"
}`}
              </pre>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/book-demo" className="text-indigo-700 font-medium hover:underline">
              Ask for the full API reference in a demo →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
