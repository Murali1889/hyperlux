import { Code, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeveloperOutputExample() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Developer Output Example</h2>

        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
            <div className="flex items-center">
              <Code className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-200 font-medium">Passport OCR Response</span>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-6 overflow-x-auto">
            <pre className="text-green-400 font-mono text-sm">
              {`{
  "request_id": "pass_req_8f7d9c2e",
  "status": "success",
  "processing_time_ms": 842,
  "document": {
    "type": "passport",
    "issuing_country": "GBR",
    "document_number": "123456789",
    "surname": "SMITH",
    "given_names": "JOHN JAMES",
    "nationality": "GBR",
    "dob": "1990-01-15",
    "expiry_date": "2030-01-14",
    "sex": "M",
    "mrz_raw": "P<GBRSMITH<<JOHN<JAMES<<<<<<<<<<<<<<<<<<<<<<<\\n1234567897GBR9001154M3001141<<<<<<<<<<<<<<00",
    "mrz_validity": true,
    "face_crop_base64": "[base64_encoded_image_data]",
    "confidence": {
      "document_number": 0.99,
      "surname": 0.98,
      "given_names": 0.97,
      "dob": 0.99,
      "expiry_date": 0.99
    },
    "face_match_score": 0.92
  }
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Response Elements</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex">
              <div className="bg-indigo-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-indigo-700 font-bold text-sm">1</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-mono text-indigo-900">document_number</span> and{" "}
                  <span className="font-mono text-indigo-900">expiry_date</span> for identity verification
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-indigo-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-indigo-700 font-bold text-sm">2</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-mono text-indigo-900">mrz_validity</span> boolean flag for document authenticity
                  check
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-indigo-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-indigo-700 font-bold text-sm">3</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-mono text-indigo-900">confidence</span> scores for each extracted field
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-indigo-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-indigo-700 font-bold text-sm">4</span>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-mono text-indigo-900">face_match_score</span> for biometric verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
