import { Shield, FileCheck, Lock } from "lucide-react"

export default function ComplianceNote() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compliance & Standards</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Built to meet global regulatory requirements
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-indigo-700" />
              <h3 className="font-bold">ICAO 9303 Standards</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Our OCR technology complies with International Civil Aviation Organization (ICAO) 9303 standards for
              machine-readable travel documents, ensuring global compatibility.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <FileCheck className="h-6 w-6 text-indigo-700" />
              <h3 className="font-bold">ISO 19794 Biometrics</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Face biometric data extraction follows ISO 19794 standards for biometric data interchange formats,
              supporting interoperability with identity verification systems.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="h-6 w-6 text-indigo-700" />
              <h3 className="font-bold">GDPR Data Controls</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Built-in data retention controls and privacy-by-design principles ensure compliance with GDPR, CCPA, and
              other privacy regulations for sensitive identity information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
