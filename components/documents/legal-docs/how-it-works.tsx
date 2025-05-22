import { Upload, Brain, UserCheck, FileOutput } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload or API Call",
      description:
        "Submit PDF or scanned documents through our secure portal or API. Supports batch processing for multiple files.",
      icon: <Upload className="h-10 w-10 text-indigo-700" />,
    },
    {
      title: "AI-Powered Extraction",
      description:
        "Our specialized legal AI identifies and extracts clauses, dates, parties, and other key information with high precision.",
      icon: <Brain className="h-10 w-10 text-indigo-700" />,
    },
    {
      title: "Human-in-the-Loop Validation",
      description:
        "Optional review interface allows legal professionals to verify and correct extracted information when needed.",
      icon: <UserCheck className="h-10 w-10 text-indigo-700" />,
    },
    {
      title: "Export Structured Data",
      description:
        "Export results to your contract management system, e-signature platform, or download as structured JSON/CSV.",
      icon: <FileOutput className="h-10 w-10 text-indigo-700" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              How It Works
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process transforms complex legal documents into structured, actionable data in four simple
              steps.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 -translate-y-1/2">
                      <div className="absolute right-0 w-2 h-2 bg-indigo-400 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-4xl">
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowDiagram() {
  return (
    <div className="w-full h-64 bg-indigo-50 rounded-xl p-6 flex items-center justify-center border border-indigo-100">
      <svg width="100%" height="100%" viewBox="0 0 800 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document Input */}
        <rect x="50" y="50" width="100" height="60" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <text x="100" y="85" textAnchor="middle" fill="#4F46E5" fontSize="14" fontWeight="bold">
          Documents
        </text>

        {/* Arrow 1 */}
        <path d="M160 80 L220 80" stroke="#6366F1" strokeWidth="2" />
        <polygon points="220,80 210,75 210,85" fill="#6366F1" />

        {/* AI Processing */}
        <rect x="230" y="50" width="100" height="60" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <text x="280" y="85" textAnchor="middle" fill="#4F46E5" fontSize="14" fontWeight="bold">
          AI Engine
        </text>

        {/* Arrow 2 */}
        <path d="M340 80 L400 80" stroke="#6366F1" strokeWidth="2" />
        <polygon points="400,80 390,75 390,85" fill="#6366F1" />

        {/* Validation */}
        <rect x="410" y="50" width="100" height="60" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <text x="460" y="85" textAnchor="middle" fill="#4F46E5" fontSize="14" fontWeight="bold">
          Validation
        </text>

        {/* Arrow 3 */}
        <path d="M520 80 L580 80" stroke="#6366F1" strokeWidth="2" />
        <polygon points="580,80 570,75 570,85" fill="#6366F1" />

        {/* Output */}
        <rect x="590" y="50" width="100" height="60" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
        <text x="640" y="85" textAnchor="middle" fill="#4F46E5" fontSize="14" fontWeight="bold">
          Export
        </text>

        {/* Data points flowing */}
        <circle cx="190" y="80" r="3" fill="#4F46E5">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="370" y="80" r="3" fill="#4F46E5">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="550" y="80" r="3" fill="#4F46E5">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
      </svg>
    </div>
  )
}
