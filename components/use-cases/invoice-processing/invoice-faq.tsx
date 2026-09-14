"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How does the system handle multi-currency invoices?",
    answer: (
      <>
        Our invoice processing system supports multi-currency invoices out of the box, see our{" "}
        <Link href="/resources/blogs/multi-currency-invoice-ocr" className="underline hover:text-indigo-700">
          multi-currency invoice OCR guide
        </Link>{" "}
        for the details. It automatically detects the currency symbol or code, extracts the correct amounts, and can
        convert to your base currency using configurable exchange rates or real-time market rates. The system
        maintains both the original currency amount and the converted value for accurate reporting and
        reconciliation.
      </>
    ),
  },
  {
    question: "Can the system process handwritten invoices?",
    answer: (
      <>
        Yes, our advanced OCR technology can process handwritten invoices with high accuracy, see our{" "}
        <Link href="/resources/blogs/handwritten-faxed-invoice-ocr" className="underline hover:text-indigo-700">
          handwritten and faxed invoice guide
        </Link>{" "}
        for how this works. The system uses specialized handwriting recognition algorithms trained on diverse
        handwriting styles. While machine-printed invoices typically achieve 99% accuracy, handwritten invoices
        maintain 90-95% accuracy depending on legibility. The system also provides confidence scores and highlights
        uncertain fields for human verification when needed.
      </>
    ),
  },
  {
    question: "How does the system handle exceptions and discrepancies?",
    answer:
      "Our system includes a comprehensive exception management workflow. When discrepancies are detected (such as price variances, missing PO numbers, or quantity mismatches), the system automatically routes the invoice to designated approvers based on configurable business rules. The exception dashboard provides clear visibility into all pending issues, with drill-down capabilities to quickly resolve discrepancies and maintain audit trails of all decisions.",
  },
  {
    question: "Which ERP systems can the invoice processing solution integrate with?",
    answer:
      "Our solution offers pre-built connectors for all major ERP systems including SAP, Oracle, Microsoft Dynamics, NetSuite, Sage, and QuickBooks. We also provide a flexible API that enables custom integrations with proprietary or legacy systems. The integration is bi-directional, allowing master data synchronization from your ERP and pushing processed invoice data back to your financial systems.",
  },
]

export default function InvoiceFaq() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our invoice processing solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
