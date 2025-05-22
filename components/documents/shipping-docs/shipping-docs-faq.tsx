"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ShippingDocsFaq() {
  const faqs = [
    {
      question: "How do you handle handwritten signatures and annotations?",
      answer:
        "Our OCR technology uses advanced AI specifically trained on handwritten content in shipping documents. For signatures, we capture both the image and position data for verification purposes. For handwritten annotations, we extract the text while preserving its location context on the document, allowing for accurate interpretation of margin notes, special delivery instructions, and other manual additions.",
    },
    {
      question: "Can your system OCR multiple languages in shipping documents?",
      answer:
        "Yes, our OCR platform supports over 40 languages for shipping document processing, including English, Spanish, French, German, Chinese, Japanese, Arabic, and Russian. This is particularly valuable for international shipping documents that may contain multiple languages within the same document, such as bills of lading with both origin and destination country languages.",
    },
    {
      question: "Are barcodes and QR codes supported in document processing?",
      answer:
        "Absolutely. Our system detects and decodes all standard barcode formats (1D and 2D) commonly used in shipping, including Code 128, Code 39, QR codes, Data Matrix, and PDF417. This enables automatic extraction of tracking numbers, container IDs, SKU data, and other encoded information, which is then integrated with the text-based data for comprehensive document processing.",
    },
    {
      question: "What integration options exist for my shipping management system?",
      answer:
        "We offer multiple integration pathways: a REST API for direct system-to-system communication, pre-built connectors for popular shipping and logistics platforms (including SAP TM, Oracle OTM, Blue Yonder, and CargoWise), webhook capabilities for event-driven workflows, and SFTP/batch processing for high-volume document processing. Our implementation team will work with you to determine the optimal integration approach for your technical environment.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get answers to common questions about our shipping document OCR technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
