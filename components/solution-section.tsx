import { Card, CardContent } from "@/components/ui/card"

const solutions = [
  {
    title: "AI-Powered SIC/NAICS Code Mapping",
    description:
      "Our proprietary algorithm analyzes multiple data points to accurately classify businesses into the correct industry codes",
    icon: "brain-circuit",
  },
  {
    title: "Automated Data Extraction",
    description:
      "Automatically extract and analyze business information from websites, social media, and transactional data",
    icon: "database",
  },
  {
    title: "Enhanced Matching for Limited Online Presence",
    description: "Accurately classify businesses with minimal digital footprints using alternative data sources",
    icon: "search",
  },
]

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Our system gathers business information from multiple sources including business name, website, address, and transaction data",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our advanced algorithms analyze the collected data to identify key business activities and characteristics",
  },
  {
    number: "03",
    title: "Industry Classification",
    description: "The system maps the business to the appropriate SIC/NAICS codes with confidence scores",
  },
  {
    number: "04",
    title: "Verification & Refinement",
    description: "Results are verified against industry databases and refined for maximum accuracy",
  },
]

export default function SolutionSection() {
  return (
    <section className="py-16 md:py-24" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            How Our AI-Powered Industry Classification Works
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Our intelligent small business lending solution harnesses the power of generative AI to automate and refine
            the process of industry classification
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white border-slate-200 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-indigo-50 flex items-center justify-center p-6">
                  <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      {solution.icon === "brain-circuit" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {solution.icon === "database" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      )}
                      {solution.icon === "search" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">The Classification Process</h3>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-700 flex items-center justify-center text-lg font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{step.title}</h4>
                      <p className="text-indigo-200">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="h-full w-full bg-indigo-800 p-8 flex items-center justify-center">
                <div className="w-full max-w-md bg-indigo-700 rounded-lg p-6 shadow-lg">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="h-4 bg-indigo-600 rounded w-1/3"></div>
                      <div className="h-3 bg-indigo-600/60 rounded w-full"></div>
                      <div className="h-3 bg-indigo-600/60 rounded w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-indigo-600/40 rounded p-3">
                        <div className="h-4 bg-indigo-500 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-indigo-500/70 rounded w-full"></div>
                      </div>
                      <div className="h-20 bg-indigo-600/40 rounded p-3">
                        <div className="h-4 bg-indigo-500 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-indigo-500/70 rounded w-full"></div>
                      </div>
                      <div className="h-20 bg-indigo-600/40 rounded p-3">
                        <div className="h-4 bg-indigo-500 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-indigo-500/70 rounded w-full"></div>
                      </div>
                      <div className="h-20 bg-indigo-600/40 rounded p-3">
                        <div className="h-4 bg-indigo-500 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-indigo-500/70 rounded w-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-8 w-24 bg-white rounded-full flex items-center justify-center text-indigo-800 text-sm font-medium">
                        Classify
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent md:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
