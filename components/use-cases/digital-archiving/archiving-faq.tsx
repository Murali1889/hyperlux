"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ArchivingFaq() {
  const faqs = [
    {
      question: "What file formats are supported for digital archiving?",
      answer: (
        <>
          Our digital archiving solution supports a wide range of file formats, including PDF, TIFF, JPEG, PNG,
          Microsoft Office documents (Word, Excel, PowerPoint), email formats (MSG, EML), and plain text files. See
          our{" "}
          <Link href="/resources/blogs/make-pdf-searchable" className="underline hover:text-indigo-700">
            making PDFs searchable guide
          </Link>{" "}
          for how the OCR layer works. The OCR engine can process scanned documents in any of these formats, as well
          as born-digital files that need metadata extraction and indexing.
        </>
      ),
    },
    {
      question: "Can metadata fields be customized for different document types?",
      answer: (
        <>
          Yes, the metadata schema is fully customizable based on your organization's needs. You can define
          different metadata templates for various document types (invoices, contracts, reports, etc.) with specific
          fields relevant to each, see our{" "}
          <Link href="/resources/blogs/document-classification-software" className="underline hover:text-indigo-700">
            document classification guide
          </Link>{" "}
          for how automatic categorization works. The AI system can be trained to automatically extract and populate
          these custom fields, and administrators can add new metadata fields at any time without disrupting
          existing archives.
        </>
      ),
    },
    {
      question: "How secure is the archived data?",
      answer:
        "Security is a core component of our digital archiving solution. All data is encrypted both in transit and at rest using AES-256 encryption. Access controls are granular, allowing you to set permissions at the document, folder, or collection level. The system maintains detailed audit logs of all access and actions, and supports multi-factor authentication. We also offer compliance with major security standards including SOC 2, HIPAA, GDPR, and ISO 27001.",
    },
    {
      question: "Does the solution integrate with popular document management systems?",
      answer:
        "Our digital archiving solution offers pre-built integrations with leading document management systems including SharePoint, Box, Dropbox, Google Drive, and OneDrive. We also provide a comprehensive API for custom integrations with proprietary systems or other DMS solutions. The integration allows for bi-directional syncing, ensuring your archives stay current regardless of where documents are added or modified.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our digital archiving solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900 py-5 hover:text-indigo-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
