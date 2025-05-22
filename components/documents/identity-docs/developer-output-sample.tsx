export default function DeveloperOutputSample() {
  const jsonSample = `{
  "document_type": "passport",
  "mrz_raw": "P<USASMITH<<JOHN<MICHAEL<<<<<<<<<<<<<<<<<<<<<\\nA123456789USA8001015M2501019<<<<<<<<<<<<<<02",
  "fields": {
    "document_number": "A123456789",
    "full_name": "JOHN MICHAEL SMITH",
    "dob": "1980-01-01",
    "gender": "M",
    "nationality": "USA",
    "issuing_country": "USA",
    "expiry_date": "2025-01-01",
    "face_crop_base64": "/9j/4AAQSkZJRgABAQAA...[truncated]"
  },
  "confidence_scores": {
    "document_number": 0.998,
    "full_name": 0.995,
    "dob": 0.997,
    "expiry_date": 0.996,
    "nationality": 0.999
  },
  "verification": {
    "mrz_checksum_valid": true,
    "document_expiry_valid": true,
    "face_detected": true
  }
}`

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Developer Output Sample</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Structured JSON response with confidence scores
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{jsonSample}</pre>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div>
              <h4 className="font-bold text-indigo-900">Document Metadata</h4>
              <p className="text-sm text-slate-600">
                Includes document type and raw MRZ data for verification and auditing purposes.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-900">Extracted Fields</h4>
              <p className="text-sm text-slate-600">
                Normalized data fields with consistent formatting across all document types.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-900">Confidence & Verification</h4>
              <p className="text-sm text-slate-600">
                Field-level confidence scores and built-in verification checks for data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
