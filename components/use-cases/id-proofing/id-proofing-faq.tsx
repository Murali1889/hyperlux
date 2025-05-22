"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function IdProofingFaq() {
  const faqs = [
    {
      question: "What types of IDs are supported?",
      answer:
        "Our platform supports a wide range of government-issued identity documents from over 190 countries, including passports, driver licenses, national ID cards, residence permits, and voter IDs. We regularly update our templates to accommodate new document versions and security features as they are released by issuing authorities.",
    },
    {
      question: "How is liveness detection performed?",
      answer:
        "Our liveness detection uses a combination of passive and active techniques. Passive liveness analyzes micro-movements, texture patterns, and depth information from a single selfie without requiring user actions. For higher security needs, active liveness detection prompts users to perform simple actions like blinking, turning their head, or smiling to verify they are physically present.",
    },
    {
      question: "Is face data stored?",
      answer:
        "By default, we do not permanently store facial biometric data. During the verification process, facial vectors are created temporarily for comparison and then immediately discarded once the verification is complete. For clients with specific compliance requirements, we offer configurable data retention policies and secure storage options with strong encryption.",
    },
    {
      question: "What about privacy compliance?",
      answer:
        "Our platform is designed with privacy by design principles and complies with major regulations including GDPR, CCPA, BIPA, and other biometric privacy laws. We provide detailed audit logs, data minimization controls, and configurable retention policies. Our system allows for easy implementation of user consent flows and right-to-erasure requests.",
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our ID proofing solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 text-left text-slate-900 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
