import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function FieldReference() {
  const standardFields = [
    { name: "licence_number", description: "Unique identifier for the driver licence" },
    { name: "full_name", description: "Full name of the licence holder" },
    { name: "dob", description: "Date of birth in ISO format (YYYY-MM-DD)" },
    { name: "issue_date", description: "Date when the licence was issued" },
    { name: "expiry_date", description: "Date when the licence expires" },
    { name: "licence_class", description: "Vehicle classes the holder is permitted to drive" },
    { name: "address", description: "Residential address of the licence holder" },
    { name: "barcode_payload_json", description: "Decoded data from PDF417/QR barcode" },
  ]

  const additionalFields = [
    { name: "restrictions", description: "Any driving restrictions (e.g., corrective lenses)" },
    { name: "endorsements", description: "Special endorsements on the licence" },
    { name: "organ_donor", description: "Organ donor status if available" },
    { name: "height", description: "Height of the licence holder" },
    { name: "eye_color", description: "Eye color of the licence holder" },
    { name: "face_crop_base64", description: "Base64 encoded image of the face" },
    { name: "document_discriminator", description: "Unique document identifier" },
    { name: "validity_score", description: "Confidence score for document validity" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Field Reference</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Our OCR engine extracts the following fields from driver licences with high accuracy and confidence scores.
        </p>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="standard">Standard Fields</TabsTrigger>
            <TabsTrigger value="additional">Additional Data</TabsTrigger>
          </TabsList>
          <TabsContent value="standard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {standardFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-700 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-gray-900">{field.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{field.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="additional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-indigo-700 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-gray-900">{field.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{field.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
