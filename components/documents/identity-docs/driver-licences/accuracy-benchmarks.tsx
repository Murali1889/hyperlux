import { CircleCheck, BarChart3 } from "lucide-react"

export default function AccuracyBenchmarks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Accuracy Benchmarks</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our driver licence OCR technology has been benchmarked across all 50 US states and 15 global templates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <CircleCheck className="h-10 w-10 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">98%</h3>
            <p className="text-center text-gray-700 font-medium text-lg mb-4">Text Field Accuracy</p>
            <p className="text-center text-gray-600">
              Printed text fields like name, licence number, and address are extracted with 98% accuracy across all
              supported templates.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <BarChart3 className="h-10 w-10 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">99%</h3>
            <p className="text-center text-gray-700 font-medium text-lg mb-4">Barcode Decode Rate</p>
            <p className="text-center text-gray-600">
              PDF417 and QR codes on the back of licences are decoded with 99% accuracy, even with partial damage or
              wear.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h4 className="font-semibold text-indigo-900 mb-2">Global Coverage</h4>
          <p className="text-gray-700">
            Our system supports all 50 US state driver licences, plus 15 international formats including Canada, UK,
            Australia, New Zealand, and major European countries. Template updates are released monthly to maintain high
            accuracy.
          </p>
        </div>
      </div>
    </section>
  )
}
