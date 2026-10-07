"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, MessageSquare, TicketCheck } from "lucide-react"

export default function FeatureCards() {
  const features = [
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Onboarding Form OCR",
      description: (
        <>
          Transform customer onboarding with our advanced customer experience OCR technology that instantly
          extracts data from IDs, passports, and application forms, see our{" "}
          <Link href="/resources/blogs/mrz-passport-verification" className="underline hover:text-indigo-700">
            passport verification guide
          </Link>{" "}
          for how MRZ extraction works. MRZ check digits are validated, and fields the engine is unsure about are
          flagged for review, so damaged or low-quality documents do not slip through with wrong data.
        </>
      ),
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      title: "Chatbot Vision",
      description:
        "Enhance your customer support chatbots with document vision capabilities. Customers can share screenshots, receipts, or product images directly in chat, and our AI instantly extracts relevant information. That context means fewer follow-up questions for the customer.",
    },
    {
      icon: <TicketCheck className="w-10 h-10 text-white" />,
      title: "Ticket Triage",
      description:
        "Automatically categorize and prioritize customer support tickets based on document content. Our system analyzes attached documents, extracts key information, and routes tickets to the appropriate department with relevant context. Agents start with the context they need instead of opening every attachment.",
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Intelligent Document Processing for Better CX
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI-powered solutions transform how customers interact with your business through intelligent document
            processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-700 p-4">
                <div className="bg-indigo-800 w-16 h-16 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
