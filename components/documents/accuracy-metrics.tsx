import { CheckCircle, Clock, Table } from "lucide-react"

const metrics = [
  {
    icon: <CheckCircle className="h-10 w-10 text-indigo-700" />,
    value: "93%",
    label: "invoice line-item accuracy",
  },
  {
    icon: <Table className="h-10 w-10 text-indigo-700" />,
    value: "91%",
    label: "row accuracy on multi-page bank statements",
  },
  {
    icon: <Clock className="h-10 w-10 text-indigo-700" />,
    value: "~1.1 s",
    label: "per page, including the network round-trip",
  },
]

export default function AccuracyMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Accuracy & Coverage Metrics</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Measured in our{" "}
            <a href="/resources/blogs/ocr-accuracy-benchmark-2026" className="text-indigo-700 underline">
              2026 OCR accuracy benchmark
            </a>
            . Accuracy changes with the document, so we report it by type, including where we lose: 78% on handwritten
            forms and 76% on phone-photographed receipts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-indigo-50 rounded-xl p-8 text-center shadow-md border border-indigo-100">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">{metric.icon}</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">{metric.value}</div>
              <div className="text-lg text-gray-700">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
