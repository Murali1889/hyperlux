import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check } from "lucide-react"

export default function FieldCoverageTable() {
  const fields = [
    { name: "document_number", passport: true, nationalId: true, driverLicense: true },
    { name: "full_name", passport: true, nationalId: true, driverLicense: true },
    { name: "dob", passport: true, nationalId: true, driverLicense: true },
    { name: "expiry_date", passport: true, nationalId: true, driverLicense: true },
    { name: "nationality", passport: true, nationalId: true, driverLicense: false },
    { name: "face_crop_base64", passport: true, nationalId: true, driverLicense: true },
    { name: "mrz_raw", passport: true, nationalId: false, driverLicense: false },
    { name: "barcode_data", passport: false, nationalId: true, driverLicense: true },
    { name: "address", passport: false, nationalId: true, driverLicense: true },
    { name: "gender", passport: true, nationalId: true, driverLicense: true },
    { name: "issue_date", passport: true, nationalId: true, driverLicense: true },
    { name: "issuing_authority", passport: true, nationalId: true, driverLicense: true },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Field Coverage</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive data extraction across all identity document types
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <Table className="border rounded-lg">
            <TableHeader>
              <TableRow className="bg-indigo-50">
                <TableHead className="font-bold">Field Name</TableHead>
                <TableHead className="text-center font-bold">Passport</TableHead>
                <TableHead className="text-center font-bold">National ID</TableHead>
                <TableHead className="text-center font-bold">Driver License</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field) => (
                <TableRow key={field.name} className="hover:bg-slate-100">
                  <TableCell className="font-mono text-sm">{field.name}</TableCell>
                  <TableCell className="text-center">
                    {field.passport ? <Check className="h-5 w-5 text-indigo-700 mx-auto" /> : null}
                  </TableCell>
                  <TableCell className="text-center">
                    {field.nationalId ? <Check className="h-5 w-5 text-indigo-700 mx-auto" /> : null}
                  </TableCell>
                  <TableCell className="text-center">
                    {field.driverLicense ? <Check className="h-5 w-5 text-indigo-700 mx-auto" /> : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 text-center text-sm text-slate-500">
          <p>MRZ check digits are validated on every passport and ID that carries one.</p>
        </div>
      </div>
    </section>
  )
}
