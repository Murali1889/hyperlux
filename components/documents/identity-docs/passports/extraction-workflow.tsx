import { Camera, Scan, ShieldCheck, UserCheck } from "lucide-react"

export default function ExtractionWorkflow() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-indigo-700" />,
      title: "Camera or Scan Upload",
      description: "Users can capture passport via mobile camera or upload a scan through your app or web interface.",
    },
    {
      icon: <Scan className="h-8 w-8 text-indigo-700" />,
      title: "Auto-detect & MRZ Parse",
      description: "AI detects the passport type and orientation, then reads the MRZ and validates its check digits.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-indigo-700" />,
      title: "Check Digits Validation",
      description: "System validates MRZ check digits to ensure document authenticity and data integrity.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-indigo-700" />,
      title: "Optional Face ≈ Selfie Match",
      description: "Compare extracted passport photo with live selfie for additional identity verification.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Passport Extraction Workflow</h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-indigo-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 h-full">
                  <div className="flex justify-center mb-6">
                    <div className="bg-indigo-100 p-4 rounded-full relative z-10">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-700 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
