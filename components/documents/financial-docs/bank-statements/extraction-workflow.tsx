import { Card, CardContent } from "@/components/ui/card"
import { Upload, Layers, Table, Code, FileDown } from "lucide-react"

export default function ExtractionWorkflow() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-indigo-600" />,
      title: "Upload PDF / Image",
      description: "Securely upload bank statements in PDF, JPG, or PNG format through API or web interface.",
    },
    {
      icon: <Layers className="h-10 w-10 text-indigo-600" />,
      title: "Page Segmentation",
      description: "AI identifies statement headers, transaction tables, and summary sections across multiple pages.",
    },
    {
      icon: <Table className="h-10 w-10 text-indigo-600" />,
      title: "Table Row OCR",
      description: "Advanced OCR extracts each transaction line with contextual awareness of banking formats.",
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      title: "Regex Post-Processing",
      description: "Bank-specific patterns normalize transaction descriptions and categorize payment types.",
    },
    {
      icon: <FileDown className="h-10 w-10 text-indigo-600" />,
      title: "CSV & JSON Export",
      description: "Structured data output in multiple formats for direct integration with financial systems.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Extraction Workflow</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our five-step process transforms complex bank statements into clean, structured data ready for analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <Card key={index} className="border-indigo-100">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-indigo-50 rounded-full">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-indigo-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-indigo-300">
                    →
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
