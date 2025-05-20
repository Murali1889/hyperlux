"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ComplianceFAQ() {
  const faqs = [
    {
      question: "How does your solution handle data residency requirements?",
      answer:
        "Our platform supports regional data residency with deployment options in multiple geographic regions including US, EU, UK, APAC, and India. All data processing occurs within the selected region, and data never crosses geographic boundaries unless explicitly configured. We maintain separate infrastructure stacks in each region with local encryption keys and access controls to ensure compliance with regional data sovereignty laws.",
    },
    {
      question: "What encryption standards are used to protect sensitive data?",
      answer:
        "We implement multiple layers of encryption: AES-256 for data at rest, TLS 1.3 for data in transit, and field-level encryption for PII. Encryption keys are managed through a FIPS 140-2 compliant HSM with regular key rotation. Customer-managed encryption keys (CMEK) are available for enterprises requiring complete control over encryption. All cryptographic implementations undergo annual review by independent security firms.",
    },
    {
      question: "What is your data retention policy for compliance documents?",
      answer:
        "Our platform allows configurable retention policies based on document type and regulatory requirements. Default retention periods align with common regulatory frameworks (7 years for financial documents, etc.), but can be customized. Automated retention workflows handle secure deletion at the end of the retention period, with cryptographic proof of deletion. For regulated industries, we support legal hold functionality to suspend deletion during investigations or audits.",
    },
    {
      question: "How do you manage change control for compliance workflows?",
      answer:
        "All changes to compliance workflows follow a strict change management process. Changes are first deployed to a staging environment for validation, with comprehensive audit logs of who requested, approved, and implemented each change. Version control allows rollback to previous configurations if needed. Compliance officers receive notifications of pending changes and can approve or reject them. A complete history of all workflow changes is maintained for audit purposes.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-indigo-200">
                <AccordionTrigger className="text-lg font-medium text-indigo-900 hover:text-indigo-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
