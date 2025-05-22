import { Clock, ShieldAlert } from "lucide-react"

export default function TimeRiskSavings() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Time & Risk Savings</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our driver licence OCR solution dramatically reduces processing time while improving fraud detection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Clock className="h-10 w-10 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Processing Time Reduction</h3>

            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700 font-medium">Manual Entry:</div>
              <div className="text-gray-900 font-bold">75 seconds</div>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
              <div className="bg-gray-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700 font-medium">With OCR:</div>
              <div className="text-indigo-700 font-bold">9 seconds</div>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "12%" }}></div>
            </div>

            <div className="text-center mt-6">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">
                88% Time Savings
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <ShieldAlert className="h-10 w-10 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">Fraud Detection Improvement</h3>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-full max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-gray-700 font-medium">Manual Checks:</div>
                  <div className="text-gray-900 font-bold">Base Rate</div>
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full">
                  <div className="bg-gray-500 h-4 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>

              <div className="w-full max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-gray-700 font-medium">With OCR:</div>
                  <div className="text-indigo-700 font-bold">2.5× Higher</div>
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full">
                  <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">
                Suspended Licence Detection Rate ↑ 2.5×
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
