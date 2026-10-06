import { Shield, Lock, FileCheck } from "lucide-react"

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      title: "PII Redaction",
      description: "Automatically identify and redact personally identifiable information based on configurable rules",
      icon: <Shield className="h-6 w-6 text-indigo-700" />,
    },
    {
      title: "GDPR & HIPAA Compliance",
      description: "Built-in compliance controls for handling sensitive data in accordance with major regulations",
      icon: <Lock className="h-6 w-6 text-indigo-700" />,
    },
    {
      title: "Secure Audit Trails",
      description:
        "Comprehensive logging of all document access, processing, and modifications for compliance purposes",
      icon: <FileCheck className="h-6 w-6 text-indigo-700" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Security & Compliance
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enterprise-grade security and compliance features to protect your most sensitive legal documents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <div className="mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-indigo-200 rounded-xl bg-gradient-to-r from-indigo-50 to-white">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-indigo-100 mt-1">
              <Lock className="h-6 w-6 text-indigo-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Data Security Commitment</h3>
              <p className="text-gray-600">
                DocsAPI is SOC 2 Type II and ISO 27001 certified. Customer documents are not used to train models, and
                documents and extracted data are kept only for a short, configurable retention period and then deleted.
                DocsAPI runs as a cloud API; if your contracts must stay inside your own environment, raise it in the
                demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
