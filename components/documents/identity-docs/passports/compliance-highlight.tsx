import { Shield, Lock, Clock } from "lucide-react"

export default function ComplianceHighlight() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Compliance & Security</h2>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ICAO 9303 Compliant</h3>
              <p className="text-gray-700">
                Fully compliant with International Civil Aviation Organization standards for travel document processing.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <Lock className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-700">
                All passport data is encrypted in transit and at rest using AES-256 encryption standards.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-Redaction</h3>
              <p className="text-gray-700">
                Configurable data retention policies with automatic redaction when retention period expires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
