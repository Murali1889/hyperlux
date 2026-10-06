import { CheckCircle, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Upload Documents",
      description:
        "Upload scanned shipping documents or PDFs through our web interface, mobile app, or direct API integration.",
      icon: "/upload-document-icon.png",
    },
    {
      number: 2,
      title: "AI-Powered Extraction",
      description: "Our AI engine extracts text, tables, barcodes, and signatures, and flags any field it is unsure about for review.",
      icon: "/ai-extraction-icon.png",
    },
    {
      number: 3,
      title: "Data Validation",
      description:
        "Review extracted data in our validation dashboard, with AI-flagged exceptions for human verification.",
      icon: "/data-validation-icon.png",
    },
    {
      number: 4,
      title: "System Integration",
      description: "Seamlessly integrate with your WMS, TMS, ERP, or tracking systems through our robust APIs.",
      icon: "/placeholder-we2zj.png",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our platform transforms paper-based shipping documents into structured data in just four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Step number */}
                  <div className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg absolute md:relative left-1/2 md:left-auto top-0 transform -translate-x-1/2 md:translate-x-0 z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 pt-12 md:pt-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-2/12"></div>

                  {/* Image/Icon */}
                  <div className="md:w-5/12 flex justify-center">
                    <div className="w-24 h-24 flex items-center justify-center bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 overflow-hidden relative group">
                      {step.number === 1 && (
                        <div className="transform transition-transform group-hover:scale-110">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4338CA" strokeWidth="1.5" />
                            <path
                              d="M16 8L12 12L8 8"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 8V16"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 16H16"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      {step.number === 2 && (
                        <div className="transform transition-transform group-hover:scale-110">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M7.5 12.5L10.5 15.5L16.5 9.5"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 6L6 9L9 12"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 12L18 15L15 18"
                              stroke="#4338CA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      {step.number === 3 && (
                        <div className="transform transition-transform group-hover:scale-110">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="3" y="6" width="18" height="15" rx="2" stroke="#4338CA" strokeWidth="1.5" />
                            <path d="M3 10H21" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M7 14H17" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M7 17H14" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8 3L8 7" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M16 3L16 7" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      {step.number === 4 && (
                        <div className="transform transition-transform group-hover:scale-110">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="3" y="3" width="7" height="7" rx="1" stroke="#4338CA" strokeWidth="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1" stroke="#4338CA" strokeWidth="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1" stroke="#4338CA" strokeWidth="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1" stroke="#4338CA" strokeWidth="1.5" />
                            <path d="M10 6.5H14" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M6.5 10V14" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M17.5 10V14" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M10 17.5H14" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <ArrowRight className="w-5 h-5 text-slate-400 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>About 1.1 seconds per page in our 2026 benchmark</span>
          </div>
        </div>
      </div>
    </section>
  )
}
