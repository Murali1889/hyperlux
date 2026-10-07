"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LegalFAQ() {
  const faqs = [
    {
      question: "Does your solution support multilingual contracts?",
      answer: (
        <>
          Yes, our legal automation platform supports document processing in over 25 languages, including English,
          Spanish, French, German, Chinese, Japanese, and Arabic. See our{" "}
          <Link href="/resources/blogs/legal-document-translation-ocr" className="underline hover:text-indigo-700">
            legal document translation OCR guide
          </Link>{" "}
          for how this works. The system uses language-specific OCR models trained on legal terminology to ensure
          high accuracy across different languages. Our clause extraction technology can identify equivalent clauses
          across languages, making it ideal for international organizations managing contracts in multiple
          jurisdictions. The platform also supports side-by-side translation views for easier comparison and review.
        </>
      ),
    },
    {
      question: "Can the system be deployed on-premises instead of cloud?",
      answer:
        "DocsAPI runs as a cloud API. If your documents must stay inside your own environment, raise it in the demo and we will tell you plainly what is and is not possible for your setup. Customer documents are not used to train models, and documents and extracted data are kept only for a short, configurable retention period and then deleted.",
    },
    {
      question: "What redaction standards does your solution comply with?",
      answer:
        "Our redaction technology adheres to the highest security standards, including NIST SP 800-171 for controlled unclassified information. The system performs true redaction, not just visual masking, ensuring that sensitive data cannot be recovered from the document. All redactions are applied at the binary level, removing the underlying data completely. The solution supports pattern-based redaction for PII (including names, addresses, SSNs, and financial information), as well as context-aware redaction that can identify sensitive information based on surrounding content. Each redaction is logged for compliance and audit purposes.",
    },
    {
      question: "How does the version comparison feature work?",
      answer: (
        <>
          Our version comparison tool uses advanced differential analysis to identify changes between contract
          versions with pinpoint accuracy. The system highlights additions, deletions, and modifications at both the
          text and clause level, making it easy to spot substantive changes versus formatting differences. See our{" "}
          <Link href="/resources/blogs/contract-ocr" className="underline hover:text-indigo-700">
            contract OCR guide
          </Link>{" "}
          for how clause-level extraction works. For legal teams, this eliminates the tedious process of manual
          redlining. The comparison view presents changes in an intuitive side-by-side format with color-coded
          highlights, and can generate summary reports of all changes for quick review. The tool works across
          multiple file formats, including Word, PDF, and scanned documents, and can compare documents with
          different formatting structures.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-700">Common questions about our legal automation solution</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-indigo-900 px-6 py-4 hover:no-underline hover:bg-indigo-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
