export default function KeyFieldsExtracted() {
  const extractedFields = [
    {
      name: "Clauses",
      description:
        "Automatically identifies and categorizes contract clauses (termination, indemnity, force majeure, etc.)",
    },
    {
      name: "Renewal Dates",
      description: "Extracts key dates including execution, effective, renewal, and termination dates",
    },
    {
      name: "Parties",
      description: "Identifies all parties to the agreement, including signatories and referenced third parties",
    },
    {
      name: "Signature Dates",
      description: "Captures signature dates and verification of execution completeness",
    },
    {
      name: "Confidential Information",
      description: "Identifies and can redact sensitive information based on configurable rules",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Key Fields Extracted
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered OCR extracts and structures the most critical information from your legal documents.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            {extractedFields.map((field, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-900">{field.name}</h3>
                  <p className="text-gray-600">{field.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">Example JSON Output</h3>
            <pre className="bg-gray-50 p-4 rounded-md text-sm overflow-x-auto">
              {`{
  "document_type": "contract",
  "parties": [
    {"name": "Acme Corp", "role": "service_provider"},
    {"name": "XYZ Inc", "role": "client"}
  ],
  "dates": {
    "execution_date": "2023-05-15",
    "effective_date": "2023-06-01",
    "termination_date": "2024-05-31"
  },
  "clauses": [
    {
      "type": "termination",
      "text": "This Agreement may be terminated by...",
      "page": 4,
      "confidence": 0.97
    },
    {
      "type": "confidentiality",
      "text": "Each party agrees to maintain...",
      "page": 2,
      "confidence": 0.98
    }
  ],
  "signatures": [
    {"party": "Acme Corp", "signatory": "John Smith", "date": "2023-05-15"},
    {"party": "XYZ Inc", "signatory": "Jane Doe", "date": "2023-05-14"}
  ]
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
