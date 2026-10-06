import { Clock, AlertTriangle, FileCheck } from "lucide-react"

const metrics = [
  {
    icon: <FileCheck className="w-10 h-10 text-indigo-600" />,
    value: "91%",
    label: "row accuracy on multi-page bank statements",
    description: "From our published 2026 OCR benchmark",
  },
  {
    icon: <Clock className="w-10 h-10 text-indigo-600" />,
    value: "1.1 s",
    label: "per page",
    description: "Including the network round-trip",
  },
  {
    icon: <AlertTriangle className="w-10 h-10 text-indigo-600" />,
    value: "Flagged",
    label: "unclear fields",
    description: "Sent to a reviewer instead of guessed",
  },
]

export default function BusinessOutcomes() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Business Outcomes</h2>
          <p className="text-lg text-slate-600">
            What we can measure, from our{" "}
            <a href="/resources/blogs/ocr-accuracy-benchmark-2026" className="text-indigo-700 underline">
              published benchmark
            </a>
            . How much time it saves your team depends on how verification works for you today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-xl p-8 shadow-md text-center border border-slate-100">
              <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {metric.icon}
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-indigo-600 block">{metric.value}</span>
                <span className="text-lg text-slate-700">{metric.label}</span>
              </div>
              <p className="text-slate-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
