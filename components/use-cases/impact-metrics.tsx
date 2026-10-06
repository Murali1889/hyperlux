const metrics = [
  {
    value: "93%",
    label: "invoice line-item accuracy",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    value: "91%",
    label: "row accuracy on multi-page bank statements",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    value: "1.1 s",
    label: "per page, including the network round-trip",
    color: "from-indigo-700 to-indigo-900",
  },
]

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Measured, Not Claimed</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Figures from our{" "}
            <a href="/resources/blogs/ocr-accuracy-benchmark-2026" className="text-indigo-700 underline">
              2026 OCR accuracy benchmark
            </a>
            , which also lists the document types where DocsAPI is not the best choice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl overflow-hidden shadow-lg">
              <div className={`bg-gradient-to-r ${metric.color} p-8 text-white text-center`}>
                <span className="text-5xl md:text-6xl font-bold">{metric.value}</span>
                <div className="mt-4 text-xl font-medium">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
