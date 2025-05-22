import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileText, History } from "lucide-react"

export default function ComplianceNote() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Compliance Note</h2>

        <Card className="border-indigo-100 shadow-md max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="p-4 bg-indigo-50 rounded-full">
                  <Shield className="h-16 w-16 text-indigo-600" />
                </div>
              </div>

              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Enterprise-Grade Security & Compliance</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our bank statement OCR solution includes tamper-evident hashing for each document, maintaining a
                  complete audit trail for regulatory compliance. The system adheres to RBI guidelines for digital
                  lending and meets global financial data security standards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Tamper-Evident Hash</span>
                  </div>
                  <div className="flex items-center">
                    <History className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Complete Audit Trail</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">RBI Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
