import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle } from "lucide-react"

export default function FieldReference() {
  const fields = [
    { name: "document_number", description: "Unique identifier of the ID card" },
    { name: "full_name", description: "Complete name as printed on the ID" },
    { name: "dob", description: "Date of birth in ISO format (YYYY-MM-DD)" },
    { name: "expiry_date", description: "Expiration date in ISO format (YYYY-MM-DD)" },
    { name: "issuing_authority", description: "Government body that issued the ID" },
    { name: "barcode_payload_json", description: "Complete decoded data from barcode/QR code" },
    { name: "face_crop_base64", description: "Base64 encoded image of the face from ID" },
  ]

  const idTypes = ["National ID", "Aadhaar", "REAL ID", "EU ID Card", "Social Security"]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Field Reference</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive data extraction from all types of national identity documents
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-8">
          <Tabs defaultValue="fields" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="fields">Standard Fields</TabsTrigger>
              <TabsTrigger value="coverage">ID Type Coverage</TabsTrigger>
            </TabsList>
            <TabsContent value="fields" className="p-4 border rounded-lg mt-2">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Field Name</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fields.map((field) => (
                      <TableRow key={field.name}>
                        <TableCell className="font-mono text-sm">{field.name}</TableCell>
                        <TableCell>{field.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="coverage" className="p-4 border rounded-lg mt-2">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Type</TableHead>
                      {fields.slice(0, 5).map((field) => (
                        <TableHead key={field.name} className="text-center">
                          {field.name.replace(/_/g, " ")}
                        </TableHead>
                      ))}
                      <TableHead className="text-center">barcode</TableHead>
                      <TableHead className="text-center">face</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {idTypes.map((type) => (
                      <TableRow key={type}>
                        <TableCell className="font-medium">{type}</TableCell>
                        {fields.slice(0, 5).map((field) => (
                          <TableCell key={field.name} className="text-center">
                            <CheckCircle className="h-5 w-5 text-indigo-600 mx-auto" />
                          </TableCell>
                        ))}
                        <TableCell className="text-center">
                          {type !== "Social Security" ? (
                            <CheckCircle className="h-5 w-5 text-indigo-600 mx-auto" />
                          ) : (
                            <span className="text-gray-400">n/a</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {type !== "Social Security" ? (
                            <CheckCircle className="h-5 w-5 text-indigo-600 mx-auto" />
                          ) : (
                            <span className="text-gray-400">n/a</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
