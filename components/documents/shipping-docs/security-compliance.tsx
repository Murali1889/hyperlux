import { Shield, Lock, FileCheck } from "lucide-react"

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: "Data Integrity",
      description: "Digital signatures and audit trails ensure document authenticity and prevent tampering.",
    },
    {
      icon: <Lock className="h-6 w-6 text-indigo-600" />,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for all documents and extracted data, both in transit and at rest.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-indigo-600" />,
      title: "Compliance Standards",
      description: "Adherence to ISO 27001, SOC 2 Type II, and industry-specific regulations like C-TPAT.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our platform prioritizes the security of your shipping data while maintaining compliance with global
            standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 border border-slate-200 rounded-xl bg-gradient-to-br from-slate-50 to-white">
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="p-5">
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 bg-indigo-100 rounded-full">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-center text-sm text-slate-500">
              DocsAPI maintains strict access controls and regular security audits to ensure your shipping data
              remains protected throughout its lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
