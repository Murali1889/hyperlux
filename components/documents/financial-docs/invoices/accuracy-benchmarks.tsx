const rows = [
  { engine: "DocsAPI", accuracy: 93, highlight: true },
  { engine: "LlamaParse", accuracy: 87, highlight: false },
  { engine: "Docling", accuracy: 81, highlight: false },
]

export default function AccuracyBenchmarks() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Accuracy Benchmarks</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Invoice line-item extraction, measured against hand-labeled ground truth in our 2026 benchmark
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
            <div className="space-y-8">
              {rows.map((row) => (
                <div key={row.engine}>
                  <div className="flex justify-between mb-2">
                    <div className="font-medium text-indigo-900">{row.engine}</div>
                    <div className="font-bold text-indigo-700">{row.accuracy}%</div>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${row.highlight ? "bg-indigo-700" : "bg-indigo-300"}`}
                      style={{ width: `${row.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                Line items are the hard part of an invoice: header fields like the invoice number sit in one place, but a
                table that wraps across lines or pages is where most engines slip. These figures come from the{" "}
                <a href="/resources/blogs/ocr-accuracy-benchmark-2026" className="text-indigo-700 underline">
                  2026 OCR accuracy benchmark
                </a>
                , which tested the same documents on every engine. When DocsAPI is unsure about a field, it flags it for
                review instead of guessing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
