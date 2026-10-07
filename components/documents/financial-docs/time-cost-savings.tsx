import { Clock, DollarSign } from "lucide-react"

function Check() {
  return (
    <svg className="h-5 w-5 text-indigo-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function TimeCostSavings() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Time & Cost</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your savings depend on your volume and what a document costs you today. Here is what we can measure, and
            how to work out the rest.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full mr-4">
                <Clock className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900">Time</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="text-gray-700">Manual Key-in</div>
                <div className="font-bold text-red-600 text-right">Every field by hand</div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-gray-700">DocsAPI</div>
                <div className="font-bold text-green-600 text-right">About 1.1 s per page</div>
              </div>
              <div className="h-1 bg-gray-200 w-full"></div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check />
                    <span className="text-gray-700">Speed measured in our 2026 benchmark, including the network round-trip</span>
                  </li>
                  <li className="flex items-start">
                    <Check />
                    <span className="text-gray-700">People only see the documents with fields flagged for review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full mr-4">
                <DollarSign className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900">Cost</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="text-gray-700">Manual</div>
                <div className="font-bold text-red-600 text-right">Your loaded cost per document</div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-gray-700">DocsAPI</div>
                <div className="font-bold text-green-600 text-right">From $0.02 per page</div>
              </div>
              <div className="h-1 bg-gray-200 w-full"></div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="font-medium text-indigo-900 mb-2">How to work it out:</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check />
                    <span className="text-gray-700">Time ten documents keyed by hand and multiply by the loaded hourly cost</span>
                  </li>
                  <li className="flex items-start">
                    <Check />
                    <span className="text-gray-700">Compare with per-page pricing plus the time spent on flagged fields</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
