import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MedicalDocsFAQ() {
  const faqs = [
    {
      question: "How do you handle handwriting recognition?",
      answer:
        "Our OCR engine uses specialized neural networks trained on millions of handwritten medical documents. It recognizes both printed and handwritten text, including doctor's notes and prescriptions. For challenging handwriting, our system employs contextual analysis and medical terminology databases to improve accuracy. In cases where confidence is low, the system flags the field for human review.",
    },
    {
      question: "Is multi-language support available?",
      answer:
        "Yes, our medical document OCR supports multiple languages including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, and Arabic. The system can automatically detect the document language or use a pre-specified language setting. For multilingual documents, our system can process different languages within the same document.",
    },
    {
      question: "How is patient data protected?",
      answer:
        "We implement comprehensive security measures including end-to-end encryption (AES-256), role-based access controls, and detailed audit logs. All processing is HIPAA-compliant with BAA agreements available. Data can be processed in your private cloud or on-premises environment for maximum security. We also offer automatic redaction of sensitive information and configurable data retention policies to meet regulatory requirements.",
    },
    {
      question: "What formats are supported?",
      answer:
        "Our system supports a wide range of document formats including PDF, TIFF, JPEG, PNG, and BMP. We can process scanned documents, digital PDFs, faxes, and even photos taken with mobile devices. For multi-page documents, our system maintains page relationships and can extract data across pages. We also support various medical document layouts including standard forms, custom templates, and unstructured documents.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get answers to common questions about our medical document OCR technology.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg text-indigo-700">
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
