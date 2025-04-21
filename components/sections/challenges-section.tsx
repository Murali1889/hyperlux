import { Section, SectionHeader } from "@/components/ui/section"
import { FeatureCard } from "@/components/ui/feature-card"

const challenges = [
  {
    title: "Manual document processing is slow and costly",
    icon: "document-search",
  },
  {
    title: "High risk of errors and compliance issues in document workflows",
    icon: "error",
  },
  {
    title: "Lack of automation in fraud detection and document verification",
    icon: "database-off",
  },
]

export default function ChallengesSection() {
  return (
    <Section background="muted" id="challenges">
      <SectionHeader
        title="The Challenges of Manual Document Processing"
        description="Financial institutions face significant challenges with manual document processing, from mortgage origination to small business lending. Our AI-powered OCR software addresses these pain points with intelligent automation."
      />

      <div className="mb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">The Manual Classification Problem</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Time-Consuming Process</h4>
                    <p className="text-sm text-muted-foreground">
                      Analysts spend 30-45 minutes per business researching and classifying
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Human Error & Inconsistency</h4>
                    <p className="text-sm text-muted-foreground">
                      Different analysts may classify the same business differently
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-blue-600"
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
                  </div>
                  <div>
                    <h4 className="font-medium">Limited Data Sources</h4>
                    <p className="text-sm text-muted-foreground">
                      Reliance on basic business information without multi-source verification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Scalability Issues</h4>
                    <p className="text-sm text-muted-foreground">
                      Manual process cannot scale with growing application volumes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-6 md:p-8">
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">Impact on Lending Operations</h3>

                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="relative">
                      <div className="h-48 bg-white rounded-lg shadow-md p-4 mb-4">
                        <div className="space-y-2">
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-3 bg-slate-200 rounded w-full"></div>
                          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                          <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                        </div>
                        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm font-medium mb-2">
                        <span>Loan Application</span>
                        <span className="text-red-500">Delayed</span>
                      </div>

                      <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Submitted</span>
                        <span>Classification</span>
                        <span>Underwriting</span>
                        <span>Approval</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Average Processing Time:</span>
                        <span className="font-medium text-red-500">5-7 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Classification Accuracy:</span>
                        <span className="font-medium text-amber-500">76%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Customer Satisfaction:</span>
                        <span className="font-medium text-amber-500">65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge, index) => (
          <FeatureCard
            key={index}
            title={challenge.title}
            description=""
            icon={
              challenge.icon === "document-search" ? (
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                    />
                  </svg>
                </div>
              ) : challenge.icon === "error" ? (
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )
            }
          />
        ))}
      </div>
    </Section>
  )
}
