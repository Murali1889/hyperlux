import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingDown } from "lucide-react"

export default function TimeCostSavings() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Time & Cost Savings</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Quantifiable efficiency gains that transform financial operations and accelerate decision-making.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-indigo-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Manual Parsing Time Reduction</h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Manual Process:</span>
                <span className="font-bold text-red-600">12 minutes</span>
              </div>

              <div className="w-full bg-gray-200 h-2 mb-6 rounded-full">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">With DocsAPI OCR:</span>
                <span className="font-bold text-green-600">45 seconds</span>
              </div>

              <div className="w-full bg-gray-200 h-2 mb-6 rounded-full">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "6.25%" }}></div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-medium">93.75% time savings on statement processing</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-100 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <TrendingDown className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Underwriting File Prep Reduction</h3>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                      90% Reduction
                    </span>
                  </div>
                </div>
                <div className="flex h-32 items-end">
                  <div className="w-1/2 pr-2">
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-red-200 rounded-t-lg" style={{ height: "90%" }}>
                        <div className="bg-red-500 h-full rounded-t-lg"></div>
                      </div>
                      <span className="text-sm mt-2 text-gray-600">Before</span>
                    </div>
                  </div>
                  <div className="w-1/2 pl-2">
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-green-200 rounded-t-lg" style={{ height: "9%" }}>
                        <div className="bg-green-500 h-full rounded-t-lg"></div>
                      </div>
                      <span className="text-sm mt-2 text-gray-600">After</span>
                    </div>
                  </div>
                </div>
              </div>

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
