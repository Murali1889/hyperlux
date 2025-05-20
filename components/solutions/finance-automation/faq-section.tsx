"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Does the system support multi-currency invoices?",
      answer:
        "Yes, our finance automation solution fully supports multi-currency invoices. The system automatically detects the currency, applies the correct exchange rates, and handles currency conversions according to your accounting policies. You can process invoices in any currency from vendors worldwide while maintaining accurate financial records in your base currency.",
    },
    {
      question: "Can it handle GST e-Invoices and compliance?",
      answer:
        "Absolutely. Our system is fully compliant with GST e-Invoice requirements in India. It can extract data from GST e-Invoices, validate the information against the GST portal, and ensure compliance with the latest regulations. The system also helps in preparing GST returns by categorizing transactions correctly and maintaining the required documentation.",
    },
    {
      question: "How does the system integrate with SAP and other ERPs?",
      answer:
        "Our finance automation solution offers pre-built connectors for major ERP systems including SAP, Oracle, Microsoft Dynamics, and Tally. The integration is bidirectional, allowing for seamless data flow between systems. We support both API-based real-time integration and batch processing through secure file transfers, depending on your requirements and ERP configuration.",
    },
    {
      question: "What are your data retention and security policies?",
      answer:
        "We maintain strict data security and retention policies. All data is encrypted both in transit and at rest using industry-standard encryption protocols. By default, we retain processed documents for 7 years to meet audit requirements, but this period is customizable based on your regulatory needs. We are compliant with GDPR, ISO 27001, and SOC 2 Type II standards, ensuring your financial data remains secure and private.",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about our finance automation solution
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg bg-white shadow-sm">
                  <AccordionTrigger className="px-4 sm:px-6 py-4 text-left text-base sm:text-lg font-medium text-indigo-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
