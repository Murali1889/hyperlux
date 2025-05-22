"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PurchaseOrderFAQ() {
  const faqs = [
    {
      question: "How are scanned POs handled?",
      answer:
        "Our system processes scanned purchase orders using advanced image preprocessing techniques to enhance quality before OCR extraction. We handle skewed scans, low resolution documents, and even handwritten annotations. The AI is trained on thousands of real-world scanned POs and can identify key information even when the document quality is suboptimal. For best results, we recommend scanning at 300 DPI or higher, but our system can handle lower quality scans with minimal degradation in accuracy.",
    },
    {
      question: "Can you map custom SKU fields?",
      answer:
        "Yes, our system supports custom SKU field mapping to align with your specific inventory system. During implementation, we configure the system to recognize your unique SKU formats and naming conventions. The AI can be trained to extract and normalize proprietary product codes, internal part numbers, or vendor-specific SKUs. We also support cross-referencing between different SKU systems, allowing you to maintain your internal product codes while processing vendor documents that use different identification systems.",
    },
    {
      question: "Is there support for multi-page POs?",
      answer:
        "Absolutely. Our system handles multi-page purchase orders seamlessly, maintaining context across pages to ensure accurate data extraction. The AI recognizes when line items continue across multiple pages and correctly associates them with the same purchase order. We also handle complex scenarios like different sections spanning multiple pages (e.g., terms and conditions, appendices) and can extract data from tables that break across page boundaries. There's no practical limit to the number of pages we can process in a single purchase order document.",
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
