import { Clock, ShieldAlert } from "lucide-react"

export default function TimeFraudSavings() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Time & Fraud Savings</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Processing Time Reduction</h3>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Manual Passport Typing</span>
                  <span className="text-gray-900 font-bold">60 seconds</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-gray-400 h-4 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Automated OCR Processing</span>
                  <span className="text-indigo-700 font-bold">6 seconds</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-indigo-700 h-4 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-indigo-900 font-medium">
                  90% faster processing time, leading to smoother onboarding and higher conversion rates.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <ShieldAlert className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fraud Detection Improvement</h3>
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-indigo-700 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    3×
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-700">
                Our AI detects fraudulent passports at 3 times the rate of manual verification, identifying subtle
                inconsistencies in MRZ data, font patterns, and security features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
