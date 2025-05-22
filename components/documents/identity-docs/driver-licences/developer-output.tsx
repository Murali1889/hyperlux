export default function DeveloperOutput() {
  const jsonOutput = `{
  "metadata": {
    "document_type": "driver_licence",
    "issuing_state": "California",
    "scan_timestamp": "2023-09-15T14:32:18Z",
    "processing_time_ms": 856
  },
  "fields": {
    "licence_number": "F1234567",
    "full_name": "DOE, JOHN MICHAEL",
    "dob": "1985-06-12",
    "issue_date": "2020-03-15",
    "expiry_date": "2025-06-12",
    "licence_class": "C",
    "address": "123 MAIN ST, ANYTOWN CA 90210",
    "restrictions": "CORRECTIVE LENSES"
  },
  "barcode_payload": {
    "aamva_version": "08",
    "jurisdiction_version": "01",
    "inventory_control_number": "12345678901234",
    "height_in": "70",
    "eye_color": "BRO",
    "hair_color": "BRO",
    "organ_donor": "Y"
  },
  "validity": {
    "score": 0.97,
    "checks_passed": 12,
    "checks_failed": 0,
    "suspended_status": false
  }
}`

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Developer Output</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Our API returns a comprehensive JSON response with extracted fields, barcode data, and validity scores.
        </p>

        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm">response.json</div>
            <div></div>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-indigo-300 font-mono text-sm whitespace-pre">{jsonOutput}</pre>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h3 className="font-semibold text-indigo-900 mb-2">Document Metadata</h3>
            <p className="text-gray-700 text-sm">
              Includes document type, issuing state/country, and processing metrics for performance tracking.
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h3 className="font-semibold text-indigo-900 mb-2">Barcode Payload</h3>
            <p className="text-gray-700 text-sm">
              Contains additional data encoded in the PDF417 barcode that may not be visible on the licence face.
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h3 className="font-semibold text-indigo-900 mb-2">Validity Scoring</h3>
            <p className="text-gray-700 text-sm">
              Provides confidence scores and validation checks to help determine if the licence is authentic and valid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
