import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function FieldReference() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Field Extraction</h2>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="standard">Standard Fields</TabsTrigger>
            <TabsTrigger value="extended">Extended Data</TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "document_number",
                "issuing_country",
                "surname",
                "given_names",
                "nationality",
                "dob",
                "expiry_date",
                "sex",
              ].map((field) => (
                <div key={field} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-mono text-sm text-gray-800">{field}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="extended" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                <h3 className="font-mono text-lg font-semibold mb-3 text-indigo-900">mrz_raw</h3>
                <p className="text-gray-700">
                  Raw Machine Readable Zone text as extracted from the passport's lower section.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                <h3 className="font-mono text-lg font-semibold mb-3 text-indigo-900">mrz_validity</h3>
                <p className="text-gray-700">Boolean flag indicating if the MRZ check digits validate correctly.</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                <h3 className="font-mono text-lg font-semibold mb-3 text-indigo-900">face_crop_base64</h3>
                <p className="text-gray-700">
                  Base64-encoded image of the passport holder's face, automatically cropped.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
