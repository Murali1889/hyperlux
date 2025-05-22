import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function AccuracyBenchmarks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Accuracy Benchmarks</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our bank statement OCR delivers industry-leading accuracy for transaction extraction, validated across
          thousands of statements from over 200 financial institutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-green-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Transaction Line Accuracy</h3>
                </div>
                <span className="text-3xl font-bold text-green-600">99%</span>
              </div>
              <p className="text-gray-600">
                Our OCR engine correctly identifies and extracts 99% of all transaction lines across digital and scanned
                bank statements, including complex multi-line transactions.
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
                  <h3 className="text-xl font-semibold text-gray-800">False-Positive Splits</h3>
                </div>
                <span className="text-3xl font-bold text-indigo-600">0.2%</span>
              </div>
              <p className="text-gray-600">
                Our advanced table detection algorithm maintains an extremely low 0.2% rate of false-positive
                transaction splits, ensuring data integrity for financial analysis.
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
