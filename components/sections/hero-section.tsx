import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
              AI-Powered OCR Software for Lending
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-indigo-700">Intelligent</span> Document Automation for Smarter Lending
            </h1>
            <p className="text-xl font-semibold text-slate-900 md:text-2xl max-w-[600px]">
              DocsAPI reads your business and identity documents (bank statements, pay stubs, IDs, invoices, tax forms)
              and gives you the data as clean, structured fields through one API.
            </p>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
              Accuracy depends on the document, so we publish it by type: 93% on invoice line items and 91% on
              multi-page bank statement tables, at about 1.1 seconds per page. Fields the engine is unsure about are
              flagged for review instead of guessed. See the{" "}
              <Link href="/resources/blogs/ocr-accuracy-benchmark-2026" className="underline hover:text-indigo-700">
                real per-document-type numbers
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Built by <span className="font-medium text-foreground">HyperVerge</span>. SOC 2 Type II and ISO 27001
              certified. About <span className="font-medium text-foreground">4 million</span> pages processed a month.
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[600px]">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-300 rounded-full blur-xl opacity-60"></div>

              {/* Visual representation of the problem and solution */}
              <div className="relative z-10 rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-white p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <img src="/docsapi-logo.png" alt="DocsAPI Logo" className="h-8 w-8" />
                      <span className="font-medium">DocsAPI Verification</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <div className="text-sm font-medium text-red-800 mb-2">Manual Process</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-red-500"
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
                          <div className="h-2 bg-red-200 rounded-full w-full"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-red-500"
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
                          <div className="h-2 bg-red-200 rounded-full w-full"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-red-500"
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
                          <div className="h-2 bg-red-200 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-2xl font-bold text-red-700">Typed</div>
                        <div className="text-xs text-red-600">field by field</div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="text-sm font-medium text-green-800 mb-2">AI-Powered</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div className="h-2 bg-green-200 rounded-full w-full"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div className="h-2 bg-green-200 rounded-full w-full"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div className="h-2 bg-green-200 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-2xl font-bold text-green-700">~1.1 s</div>
                        <div className="text-xs text-green-600">per page</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-indigo-800">Verification Results</div>
                      <div className="text-xs text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">Checks passed</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Document Type:</span>
                        <span className="font-medium">Bank Statement</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Identity Check:</span>
                        <span className="font-medium text-green-600">✓ Verified</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fraud Detection:</span>
                        <span className="font-medium text-green-600">✓ Clean</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Data Integrity:</span>
                        <span className="font-medium text-green-600">✓ Valid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 z-20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium w-[220px]">Document Verification Complete</p>
                    <p className="text-xs text-muted-foreground">All documents verified successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}