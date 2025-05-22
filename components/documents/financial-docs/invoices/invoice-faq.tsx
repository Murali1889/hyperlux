"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function InvoiceFAQ() {
  const faqs = [
    {
      question: "Does your system support multi-currency invoices?",
      answer:
        "Yes, our invoice OCR system fully supports multi-currency invoices. It automatically detects the currency from the invoice and processes the amounts accordingly. The system currently supports over 30 currencies including USD, EUR, GBP, JPY, INR, and many more. All currency symbols and formatting conventions are recognized, and the extracted amounts are normalized for consistent processing.",
    },
    {
      question: "How does duplicate invoice detection work?",
      answer:
        "Our system employs a multi-layered approach to detect duplicate invoices. First, it checks for exact matches on invoice number and vendor combinations. Second, it uses fuzzy matching algorithms to identify near-duplicates with slight variations in formatting or data entry. Finally, it compares line items, totals, and dates to catch sophisticated duplicates. When a potential duplicate is detected, the system flags it for review with a confidence score and comparison data to help AP teams make informed decisions.",
    },
    {
      question: "How are PDFs with multiple invoices handled?",
      answer:
        "Our system can process PDFs containing multiple invoices in two ways. First, it can automatically detect page boundaries between different invoices in a single PDF and process each as a separate document. Second, for complex cases where invoices span multiple pages or have irregular boundaries, our intelligent document splitting feature identifies where one invoice ends and another begins based on header patterns, totals, and other structural elements. Each detected invoice is then processed individually with its own extraction results.",
    },
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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Common questions about our invoice OCR solution</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-indigo-100 rounded-lg bg-indigo-50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-indigo-900 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
