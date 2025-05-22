import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NationalIdFAQ() {
  const faqs = [
    {
      question: "How does the system handle blurred photos on ID cards?",
      answer:
        "Our advanced image enhancement algorithms can process and extract data from ID photos with up to 40% blur or glare. The system uses multi-frame capture to select the clearest image and applies proprietary deblurring technology to improve extraction accuracy. For severely damaged photos, the system will flag the issue and may request a recapture if confidence scores fall below threshold.",
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
