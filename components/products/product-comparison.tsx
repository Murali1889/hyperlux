import { Check, X } from "lucide-react"

export default function ProductComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">OCR Software Comparison</h2>
          <p className="text-xl text-gray-600">
            See how our AI-powered OCR software for document automation compares to traditional methods and competitors
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-50 text-left text-lg font-semibold border-b">Features</th>
                <th className="py-4 px-6 bg-indigo-50 text-center text-lg font-semibold border-b text-indigo-700">
                  Our AI OCR Software
                </th>
                <th className="py-4 px-6 bg-gray-50 text-center text-lg font-semibold border-b">Traditional Methods</th>
                <th className="py-4 px-6 bg-gray-50 text-center text-lg font-semibold border-b">Competitors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-b">Automated Industry Classification</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Multi-document Analysis</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">99.9% Classification Accuracy</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Real-time Document Processing</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Regulatory Compliance</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">API Integration</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b">Custom Model Training</td>
                <td className="py-4 px-6 border-b text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6">Human-in-the-loop Validation</td>
                <td className="py-4 px-6 text-center bg-indigo-50">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-6 w-6 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-6 w-6 text-red-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
