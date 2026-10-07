import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function AccuracyBenchmarks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Accuracy Benchmarks</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Accuracy depends on the document, so we publish ours by document type. These figures come from our{" "}
          <a href="/resources/blogs/ocr-accuracy-benchmark-2026" className="text-indigo-700 underline">
            2026 OCR accuracy benchmark
          </a>
          , which also lists the categories where DocsAPI loses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-green-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Multi-Page Table Rows</h3>
                </div>
                <span className="text-3xl font-bold text-green-600">91%</span>
              </div>
              <p className="text-gray-600">
                On multi-page bank statement tables, DocsAPI extracted 91% of rows correctly, against 76% to 79% for the
                next-best engines we tested. Rows that run across a page break are stitched back into one table.
              </p>
              <div className="mt-4 bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Pro tip:</strong> For highest accuracy, use PDF statements directly exported from online
                  banking.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <AlertCircle className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Unclear Rows Flagged</h3>
                </div>
                <span className="text-3xl font-bold text-indigo-600">Review</span>
              </div>
              <p className="text-gray-600">
                When a row is hard to read, DocsAPI flags it for a reviewer instead of guessing. A wrong amount in a
                cash-flow analysis costs far more than a short manual check.
              </p>
              <div className="mt-4 bg-indigo-50 p-3 rounded-lg">
                <p className="text-sm text-indigo-700">
                  <strong>Key benefit:</strong> Minimizes manual review requirements for compliance and audit teams.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
