import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PassportFAQ() {
  const faqs = [
    {
      question: "How does the system handle non-Latin passports?",
      answer:
        "Our OCR engine supports multi-script recognition including Arabic, Cyrillic, Chinese, Japanese, and Korean characters. For non-Latin scripts, we extract both the native script data and the Latin transliteration from the MRZ, so you get both versions of the name.",
    },
    {
      question: "How does the system handle glare and blur in passport images?",
      answer:
        "Images are cleaned up before reading to reduce glare, blur and poor lighting. The image is cleaned up before it is read, and each field comes back with a confidence score, so low-confidence fields can go to a person.",
    },
    {
      question: "What are the differences between on-device and server processing?",
      answer:
        "We offer both options. On-device processing provides faster results and works offline, but with slightly lower accuracy for complex cases. Server processing gives the best accuracy and supports all passport types, but requires internet connectivity. Many clients implement a hybrid approach: on-device for speed, with server fallback for low-confidence results.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left text-gray-900 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
