import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DriverLicenceFAQ() {
  const faqs = [
    {
      question: "How does the system handle glare and reflections on plastic licence cards?",
      answer:
        "Our SDK includes real-time glare detection that guides users to adjust their camera angle. Additionally, our AI has been trained on millions of images with varying lighting conditions and can compensate for moderate glare. For severe cases, the system will request a retake with guidance on positioning.",
    },
    {
      question: "Do you support state-specific templates for all US states and territories?",
      answer:
        "Yes, we support all 50 US states, Washington D.C., and US territories like Puerto Rico and Guam. Our system is updated monthly to accommodate new template designs as states refresh their licence formats. We also support 15 international formats including Canada, UK, Australia, and major European countries.",
    },
    {
      question: "Is there a built-in age calculation field for age verification use cases?",
      answer:
        "Yes, our API automatically calculates and returns an 'age_years' field based on the extracted date of birth and the current date. This simplifies age verification for alcohol sales, adult content access, and other age-restricted services. You can also specify a reference date for historical age calculations.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
