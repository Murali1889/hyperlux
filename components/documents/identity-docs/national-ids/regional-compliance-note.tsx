import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Lock, Clock } from "lucide-react"

export default function RegionalComplianceNote() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Regional Compliance</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Privacy-first approach for sensitive identity documents
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-indigo-700" />
              </div>
              <CardTitle className="text-lg text-center">Sensitive ID Handling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Special handling for Aadhaar, SSN, and other privacy-sensitive IDs with masked data options and
                restricted field extraction.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <Lock className="h-8 w-8 text-indigo-700" />
              </div>
              <CardTitle className="text-lg text-center">End-to-End Encryption</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                All ID data is encrypted in transit and at rest with AES-256 encryption and optional client-side
                processing for maximum security.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <Clock className="h-8 w-8 text-indigo-700" />
              </div>
              <CardTitle className="text-lg text-center">GDPR Retention Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Configurable data retention periods with automatic deletion and audit logs to maintain compliance with
                GDPR and other privacy regulations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            Our platform is designed to meet the strictest global privacy standards, including GDPR, CCPA, and regional
            regulations for handling sensitive identity documents. We provide flexible deployment options to meet your
            specific compliance requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
