import { Camera, Scan, GitCompare, ShieldCheck } from "lucide-react"

export default function VerificationWorkflow() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-indigo-700" />,
      title: "Front Capture",
      description: "User captures the front of the licence using our SDK with auto-focus and glare detection guidance.",
    },
    {
      icon: <Scan className="h-8 w-8 text-indigo-700" />,
      title: "Back Barcode Scan",
      description: "The back of the licence is scanned to extract the PDF417 or QR barcode data with high precision.",
    },
    {
      icon: <GitCompare className="h-8 w-8 text-indigo-700" />,
      title: "Data Fusion & Validity Check",
      description: "Front OCR data is cross-referenced with barcode data to ensure consistency and detect tampering.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-indigo-700" />,
      title: "Fraud Score Output",
      description:
        "A comprehensive fraud score is generated based on multiple verification factors and security features.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Verification Workflow</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our four-step process ensures accurate data extraction and fraud detection for driver licences.
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 hidden md:block"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center z-10 border-4 border-white shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
