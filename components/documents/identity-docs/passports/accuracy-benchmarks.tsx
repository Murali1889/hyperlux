import { BarChart, CheckCircle, Globe } from "lucide-react"

export default function AccuracyBenchmarks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industry-Leading Accuracy</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <BarChart className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Accuracy Metrics</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">MRZ Lines</span>
                    <span className="text-indigo-700 font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-700 h-2 rounded-full" style={{ width: "99.9%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Printed Text</span>
                    <span className="text-indigo-700 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-700 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Global Benchmark</h3>
              </div>

              <p className="text-gray-700 mb-4">
                Our accuracy metrics are based on a comprehensive benchmark of over 5 million passports across 110
                countries, including challenging scenarios like low-light conditions and worn documents.
              </p>

              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Tested across 6 continents</span>
              </div>
              <div className="flex items-center mt-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Includes non-Latin script passports</span>
              </div>
              <div className="flex items-center mt-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Verified against ICAO standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
