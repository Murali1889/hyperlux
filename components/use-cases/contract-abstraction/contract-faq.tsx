"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate is clause extraction?",
    answer: (
      <>
        It depends on the clause and the document quality, see our{" "}
        <Link href="/resources/blogs/contract-ocr" className="underline hover:text-indigo-700">contract OCR guide</Link>{" "}
        for the details. Standard clauses in clean contracts extract reliably; unusual or ambiguous clauses are
        harder. Every clause carries a confidence score, and for critical contracts a lawyer should confirm the
        flagged ones. Customer documents are not used to train models.
      </>
    ),
  },
  {
    question: "Can it handle multi-language contracts?",
    answer: (
      <>
        Yes, our solution supports contract abstraction in multiple languages including English, Spanish, French,
        German, Italian, Portuguese, Dutch, and Japanese. See our{" "}
        <Link href="/resources/blogs/legal-document-translation-ocr" className="underline hover:text-indigo-700">
          legal document translation guide
        </Link>{" "}
        for how this works. The system can identify and extract key clauses regardless of language, though accuracy
        may vary slightly for less common languages. We're continuously expanding our language capabilities based on
        customer demand.
      </>
    ),
  },
  {
    question: "Is human review supported?",
    answer:
      "Absolutely. Our platform includes a comprehensive human review interface that allows legal professionals to validate and refine AI-generated results. The system highlights extracted clauses, flags potential issues, and enables quick corrections. This human-in-the-loop approach combines the efficiency of AI with the expertise of your legal team for optimal results.",
  },
  {
    question: "How is sensitive data handled?",
    answer:
      "DocsAPI is SOC 2 Type II and ISO 27001 certified, and HIPAA-eligible with a BAA. Customer documents are not used to train models, and documents and extracted data are kept only for a short, configurable retention period and then deleted. DocsAPI runs as a cloud API; if your contracts must stay inside your own environment, raise it in the demo.",
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
