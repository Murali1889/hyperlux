import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BankStatementFAQ() {
  const faqs = [
    {
      question: "Do you support multiple bank statement templates?",
      answer:
        "Yes, our OCR engine supports over 200 bank statement formats from financial institutions worldwide. The system is continuously trained on new templates and can adapt to custom formats with minimal configuration. Our template-matching algorithm identifies the bank and applies the appropriate extraction rules automatically.",
    },
    {
      question: "How do you handle password-protected statements?",
      answer:
        "For password-protected PDF statements, we provide two options: 1) A secure client-side decryption tool that removes password protection before upload, ensuring credentials never leave your environment, or 2) A secure password submission API that handles decryption in a PCI-DSS compliant environment with immediate credential disposal after processing.",
    },
    {
      question: "Can you process passbook scans and physical statements?",
      answer:
        "Yes, our OCR engine is optimized for both digital statements and scanned physical documents. For passbook scans, we apply additional image preprocessing techniques to handle handwritten entries, stamps, and varying scan qualities. While digital statements yield the highest accuracy (99%), scanned passbooks still achieve excellent results (95-97% accuracy) depending on scan quality.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 text-indigo-900 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
