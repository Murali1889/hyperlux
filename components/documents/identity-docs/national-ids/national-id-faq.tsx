import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NationalIdFAQ() {
  const faqs = [
    {
      question: "How does the system handle blurred photos on ID cards?",
      answer:
        "Image preprocessing corrects rotation and contrast before extraction, which rescues many slightly blurred or glary photos. When a field still cannot be read with confidence, it is flagged rather than guessed, and your flow can ask the user for a recapture. Guiding users to a flat, well-lit shot prevents most of these cases.",
    },
    {
      question: "Is there an offline mode for ID verification?",
      answer:
        "Yes, we offer an offline SDK for iOS and Android that can perform ID verification without an internet connection. The offline mode includes core OCR capabilities, barcode scanning, and basic tamper detection. For enhanced security features like duplicate detection or advanced fraud checks, an online connection is required. The offline SDK periodically requires connectivity to update security models and templates.",
    },
    {
      question: "What languages and scripts are supported for ID processing?",
      answer:
        "Our system supports over 100 languages and multiple scripts including Latin, Cyrillic, Arabic, Chinese, Japanese, Korean, Thai, and Devanagari. For non-Latin scripts, we provide both the original text and romanized versions in the API response. Our multi-language capabilities ensure accurate extraction from IDs worldwide, with specialized models for region-specific ID formats and layouts.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about our National ID verification
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
