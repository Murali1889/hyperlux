import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BankStatementFAQ() {
  const faqs = [
    {
      question: "Do you support multiple bank statement templates?",
      answer:
        "Yes. DocsAPI uses a layout-aware engine, with a vision-language model fallback for complex pages, so it reads the table structure instead of depending on one fixed template per bank. A new bank's format does not need its own setup. Customer documents are not used to train models.",
    },
    {
      question: "How do you handle password-protected statements?",
      answer:
        "A password-protected PDF has to be unlocked before its text can be read. The simplest route is to remove the protection in your own system before upload, so the password never leaves your environment. We can walk through other options for your flow during the demo.",
    },
    {
      question: "Can you process passbook scans and physical statements?",
      answer:
        "Yes, our OCR engine is optimized for both digital statements and scanned physical documents. For passbook scans, we apply additional image preprocessing techniques to handle handwritten entries, stamps, and varying scan qualities. Digital statements exported from online banking give the best results. Scanned passbooks depend heavily on scan quality, and rows the engine is unsure about are flagged for a reviewer instead of guessed.",
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
