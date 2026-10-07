import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CriticalDataExtracted() {
  const fieldCategories = [
    {
      id: "patient",
      label: "Patient Information",
      fields: [
        "Patient Name",
        "Date of Birth",
        "Medical Record Number",
        "Gender",
        "Contact Information",
        "Insurance ID",
      ],
    },
    {
      id: "prescription",
      label: "Prescription Data",
      fields: [
        "Medication Name",
        "Dosage",
        "Frequency",
        "Quantity",
        "Refills",
        "Prescriber",
        "DEA Number",
        "Date Issued",
      ],
    },
    {
      id: "lab",
      label: "Lab Values",
      fields: [
        "Test Name",
        "Result Value",
        "Reference Range",
        "Units",
        "Collection Date",
        "Abnormal Flags",
        "Specimen Type",
        "Lab Facility",
      ],
    },
    {
      id: "insurance",
      label: "Insurance Details",
      fields: [
        "Policy Number",
        "Group Number",
        "Provider",
        "Coverage Type",
        "Effective Date",
        "Copay Amount",
        "Deductible",
        "Authorization Number",
      ],
    },
  ]

  const jsonExample = `{
  "document_type": "prescription",
  "patient": {
    "name": "John Smith",
    "dob": "1975-08-12",
    "mrn": "MRN12345678"
  },
  "medication": {
    "name": "Lisinopril",
    "strength": "10mg",
    "form": "tablet",
    "sig": "Take 1 tablet by mouth once daily",
    "quantity": "30",
    "refills": "3"
  },
  "prescriber": {
    "name": "Dr. Sarah Johnson",
    "npi": "1234567890",
    "dea": "XJ1234567"
  },
  "dates": {
    "written": "2023-06-15",
    "effective": "2023-06-15",
    "expiration": "2024-06-15"
  },
  "pharmacy": {
    "name": "HealthPlus Pharmacy",
    "address": "123 Main St, Anytown, US 12345"
  },
  "confidence_score": 0.98
}`

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
              Critical Data Extracted
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Key medical fields come back as structured data. Handwriting is the hard case: our 2026 benchmark
              measured 78% on handwritten forms, so handwritten fields are flagged for review.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">Field Categories</h3>
            <Tabs defaultValue="patient">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
                {fieldCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {fieldCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {category.fields.map((field, index) => (
                      <div key={index} className="flex items-center p-2 bg-indigo-50 rounded-md">
                        <div className="h-3 w-3 rounded-full bg-indigo-700 mr-2"></div>
                        <span>{field}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">JSON Output Example</h3>
            <div className="bg-gray-900 p-4 rounded-md overflow-auto max-h-[400px]">
              <pre className="text-green-400 text-sm">
                <code>{jsonExample}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Structured data output enables seamless integration with EHR systems, pharmacy management software, and
              billing platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
