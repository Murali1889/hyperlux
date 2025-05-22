import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DeveloperOutput() {
  const jsonOutput = `{
  "request_id": "req_01HGXYZ123456789",
  "document_type": "national_id",
  "confidence_score": 0.98,
  "extracted_fields": {
    "document_number": "AB123456789",
    "full_name": "JANE MARIE SMITH",
    "dob": "1985-06-15",
    "expiry_date": "2028-06-14",
    "issuing_authority": "DEPARTMENT OF HOME AFFAIRS"
  },
  "barcode_payload": {
    "encoded_data": "SMITH<<JANE<MARIE<<<<<<<<<<<<<<<<<",
    "id_number": "AB123456789",
    "nationality": "USA",
    "gender": "F",
    "additional_data": {
      "address": "123 MAIN ST, ANYTOWN, CA 90210",
      "issue_date": "2018-06-15"
    }
  },
  "face_crop_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABA...",
  "verification_results": {
    "tamper_check": "PASSED",
    "expiry_check": "VALID",
    "duplicate_check": "NO_DUPLICATES_FOUND"
  }
}`

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Developer Output</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Structured data ready for your application
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <Tabs defaultValue="json" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="json">JSON Response</TabsTrigger>
              <TabsTrigger value="explanation">Field Explanation</TabsTrigger>
            </TabsList>
            <TabsContent value="json" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>JSON Response</CardTitle>
                  <CardDescription>Sample response from the National ID OCR API</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-gray-800">{jsonOutput}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="explanation" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Field Explanation</CardTitle>
                  <CardDescription>Understanding the response structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-indigo-700">extracted_fields</h3>
                      <p className="text-sm text-gray-600">
                        Contains all the OCR-extracted text fields from the ID card.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-indigo-700">barcode_payload</h3>
                      <p className="text-sm text-gray-600">
                        Contains the decoded data from any barcodes or QR codes on the ID. Often includes additional
                        data not printed on the card.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-indigo-700">face_crop_base64</h3>
                      <p className="text-sm text-gray-600">
                        Base64-encoded image of the face extracted from the ID, ready for biometric matching.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-indigo-700">verification_results</h3>
                      <p className="text-sm text-gray-600">
                        Results of automated security checks performed on the document.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
