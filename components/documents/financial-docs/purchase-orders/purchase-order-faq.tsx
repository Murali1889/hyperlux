"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PurchaseOrderFAQ() {
  const faqs = [
    {
      question: "How are scanned POs handled?",
      answer:
        "Scanned and photographed POs go through the same extraction as PDFs, and accuracy follows the quality of the scan. In our 2026 benchmark, clean typed text read at 97-99%, handwriting at 78%, and phone-photographed receipts at 76%. Handwritten notes in a margin are the most likely thing to need a person to check. Scanning at 300 DPI or higher helps any OCR tool.",
    },
    {
      question: "What happens to SKU and part numbers?",
      answer:
        "Item codes come back as text fields, exactly as they are printed on the PO. Matching them to your own item master is done in your ERP or AP software, not in the extraction step. If you need a mapping step, bring a few real POs to the demo and we will show you what the output looks like.",
    },
    {
      question: "Is there support for multi-page POs?",
      answer:
        "Yes. Line-item tables that continue across pages are read as one table. We publish 93% for invoice line items and 91% for multi-page bank statement tables. We have not published a PO-specific figure, so the best test is a few of your own multi-page POs.",
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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Common questions about our purchase order OCR solution
          </p>
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
