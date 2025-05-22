"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate is clause extraction?",
    answer:
      "Our AI-powered clause extraction achieves 85-95% accuracy depending on document quality and complexity. The system is trained on millions of legal documents and continuously improves through machine learning. For critical contracts, we recommend using our human-in-the-loop validation workflow, which combines AI efficiency with expert review to achieve near-perfect accuracy.",
  },
  {
    question: "Can it handle multi-language contracts?",
    answer:
      "Yes, our solution supports contract abstraction in multiple languages including English, Spanish, French, German, Italian, Portuguese, Dutch, and Japanese. The system can identify and extract key clauses regardless of language, though accuracy may vary slightly for less common languages. We're continuously expanding our language capabilities based on customer demand.",
  },
  {
    question: "Is human review supported?",
    answer:
      "Absolutely. Our platform includes a comprehensive human review interface that allows legal professionals to validate and refine AI-generated results. The system highlights extracted clauses, flags potential issues, and enables quick corrections. This human-in-the-loop approach combines the efficiency of AI with the expertise of your legal team for optimal results.",
  },
  {
    question: "How is sensitive data handled?",
    answer:
      "We take data security extremely seriously. All processing occurs within your secure environment, either on-premises or in your private cloud. The system supports automatic redaction of sensitive information based on configurable rules. We maintain SOC 2 Type II certification and comply with industry standards including GDPR, CCPA, and HIPAA where applicable.",
  },
]

export default function ContractFaq() {
  return (
    <section className="py-20 bg-white">
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
            Get answers to common questions about our contract abstraction solution.
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
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
