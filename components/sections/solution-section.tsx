import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { ProcessStep } from "@/components/ui/process-step"

const solutions = [
  {
    title: "AI-Powered Document Classification",
    description:
      "Leverage machine learning to automatically classify and categorize various document types, streamlining your lending workflows.",
    icon: "brain-circuit",
  },
  {
    title: "Automated Data Extraction & Capture",
    description:
      "Automatically extract and capture key data points from documents, eliminating manual data entry and reducing errors.",
    icon: "database",
  },
  {
    title: "Validation & Document Checks",
    description:
      "Check extracted fields against format rules, verify ID documents, and run AML document checks before data reaches your systems.",
    icon: "search",
  },
  {
    title: "Multi-Page Table Stitching",
    description:
      "Bank statement tables that run across pages come back as one table: 91% on multi-page bank statements in our 2026 benchmark.",
    icon: "trending-up",
  },
]

const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Send a PDF or image to the API, from a single page to a full application packet",
  },
  {
    number: "02",
    title: "Classify",
    description:
      "DocsAPI identifies each document type, such as a bank statement, invoice, pay stub, or ID",
  },
  {
    number: "03",
    title: "Extract",
    description: "Fields and tables come back as JSON, with tables that run across pages stitched into one",
  },
  {
    number: "04",
    title: "Check",
    description: "Fields are checked against format rules, and anything DocsAPI is unsure about is flagged for a person to review",
  },
]

const ClassificationDemo = () => {
  const classificationData = {
    fileName: "loan_application_packet.pdf",
    documents: [
      { type: "Bank statement", pages: "Pages 1-6", fields: "Rows stitched into one table" },
      { type: "Pay stub", pages: "Page 7", fields: "Employer, pay period, net pay" },
    ],
    dataPoints: [
      { label: "Document types identified", status: "complete" },
      { label: "Fields and tables extracted", status: "complete" },
      { label: "Format checks passed", status: "complete" },
      { label: "1 field flagged for review", status: "complete" },
    ],
  }

  return (
    <div className="w-full max-w-md bg-indigo-700 rounded-lg p-6 shadow-lg">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold">Sample Output</h3>
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
            Illustrative
          </div>
        </div>

        <div className="bg-indigo-800 rounded-lg p-4">
          <div className="text-white font-medium mb-2">{classificationData.fileName}</div>
          {classificationData.documents.map((document, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-indigo-300 text-sm">{document.pages}</span>
                <div className="h-px flex-1 bg-indigo-600"></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="col-span-2">
                  <span className="text-indigo-300">Type:</span>
                  <span className="text-white ml-1">{document.type}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-indigo-300">Output:</span>
                  <span className="text-white ml-1">{document.fields}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {classificationData.dataPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-sm">{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SolutionSection() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        title="Our AI-Powered OCR Solution"
        description="DocsAPI classifies, captures, checks, and analyzes lending documents through one API, and sends the fields it is unsure about to a person instead of guessing."
      />

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
                    {solution.icon === "trending-up" && (
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
            <h3 className="text-2xl font-bold mb-6">How a Document Moves Through DocsAPI</h3>
            <div className="space-y-8">
              {steps.map((step) => (
                <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="h-full w-full bg-indigo-800 p-8 flex items-center justify-center">
              <ClassificationDemo />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
