import { Card, CardContent } from "@/components/ui/card"
import { Clock, ListChecks } from "lucide-react"

export default function TimeCostSavings() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Where the Time Goes Back</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          How much time you save depends on how your team handles statements today. Here is what changes in the work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-indigo-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Time per Statement</h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Manual Process:</span>
                <span className="font-bold text-red-600">Keyed row by row</span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-600">With DocsAPI OCR:</span>
                <span className="font-bold text-green-600">About 1.1 s per page</span>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-medium">
                  Speed measured in our 2026 OCR benchmark, including the network round-trip. Compare it with the
                  minutes your team spends keying a statement today.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <ListChecks className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Underwriting File Prep</h3>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li>Transactions arrive as structured rows, ready for cash-flow analysis.</li>
                <li>Rows that run across a page break are stitched back into one table.</li>
                <li>Rows the engine is unsure about are flagged for a reviewer instead of guessed.</li>
              </ul>

              <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-medium">
                  Loan officers can focus on analysis rather than data entry, improving decision quality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
