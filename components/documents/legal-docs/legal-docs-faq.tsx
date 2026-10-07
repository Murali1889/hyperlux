import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LegalDocsFAQ() {
  const faqs = [
    {
      question: "How accurate is clause detection?",
      answer:
        "It depends on the clause and the document. Standard clauses in well-formatted contracts extract reliably; specialized or unusual clauses are harder because the language varies so much. Each extracted clause carries a confidence score, and low-confidence clauses are flagged for a legal reviewer to confirm. Customer documents are not used to train models.",
    },
    {
      question: "Can the system handle multilingual contracts?",
      answer:
        "Yes, our OCR system supports documents in over 25 languages, including English, Spanish, French, German, Chinese, Japanese, and Arabic. The system can process contracts with mixed languages and automatically detect the primary language of each document. For specialized legal terminology, we offer industry-specific language models that understand context-specific meanings across different jurisdictions and legal systems.",
    },
    {
      question: "Can DocsAPI run on-premise?",
      answer:
        "DocsAPI runs as a cloud API. If your documents must stay inside your own environment, raise it in the demo and we will tell you plainly what is and is not possible for your setup.",
    },
    {
      question: "How is sensitive data protected?",
      answer:
        "We implement multiple layers of security to protect sensitive data. All documents are encrypted both in transit and at rest using AES-256 encryption. Our platform includes automated PII detection and redaction capabilities that can be configured to your specific compliance requirements. Access controls allow you to define precisely who can view, process, or export different document types. Additionally, comprehensive audit logs track all document access and processing activities for compliance purposes.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about our legal document OCR technology and implementation.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-indigo-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
