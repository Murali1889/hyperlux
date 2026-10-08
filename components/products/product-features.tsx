import { CheckCircle } from "lucide-react"

const features = [
  {
    title: "Document Classification",
    description:
      "Identify each document in an application packet, such as a bank statement, invoice, pay stub, or ID, before extraction, with uncertain cases flagged for review",
    benefits: [
      "Sort mixed packets without opening each file",
      "Send each document to the right extraction step",
      "Classification is included in the per-page price",
      "Documents it cannot place are flagged for review",
    ],
  },
  {
    title: "Field and Table Extraction",
    description: "Pull fields and tables out of financial documents as JSON, including tables that run across pages",
    benefits: [
      "Read documents at about 1.1 seconds per page",
      "91% on multi-page bank statement tables in our 2026 benchmark",
      "93% on invoice line items in the same benchmark",
      "Stop retyping figures from PDFs",
    ],
  },
  {
    title: "Checks and Review",
    description:
      "Check extracted data against format rules and verify ID documents before it reaches your systems. Your team and your rules make the lending decision.",
    benefits: [
      "Format checks on dates, amounts, and ID numbers",
      "Passport MRZ check digits verified",
      "KYC document verification and AML document checks",
      "Fields DocsAPI is unsure about go to a person",
    ],
  },
]
export default function ProductFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI-Powered OCR Features</h2>
          <p className="text-xl text-gray-600">
            Classify, capture, check, and analyze lending documents through one API, with accuracy published by
            document type
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.title} className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-2" : "order-1"}>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-indigo-50 p-6">
                    {feature.title === "Document Classification" && (
                      <div className="h-full flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Document Classification
                          </div>
                          <div className="text-green-600 font-semibold flex items-center">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            Confidence scored
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {[
                              { name: "Bank statement", code: "bank_statement", color: "bg-blue-100 border-blue-300" },
                              { name: "Invoice", code: "invoice", color: "bg-purple-100 border-purple-300" },
                              { name: "Pay stub", code: "pay_stub", color: "bg-green-100 border-green-300" },
                            ].map((docType) => (
                              <div
                                key={docType.name}
                                className={`border ${docType.color} rounded-lg p-4 text-center`}
                              >
                                <div className="font-bold mb-1">{docType.name}</div>
                                <div className="text-xs text-gray-600">{docType.code}</div>
                              </div>
                            ))}
                          </div>

                          <div className="relative h-12 mb-6">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-0.5 bg-indigo-200"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white px-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-indigo-600"
                                >
                                  <path d="M12 5v14"></path>
                                  <path d="m19 12-7 7-7-7"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white border border-indigo-200 rounded-lg p-4 shadow-sm">
                            <div className="font-semibold text-lg mb-2">Sample Packet Result</div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Pages 1-6: bank statement</span>
                              </div>
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Page 7: pay stub</span>
                              </div>
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Page 8: driver&apos;s license</span>
                              </div>
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                                <span>Page 9: flagged for review</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === "Field and Table Extraction" && (
                      <div className="h-full flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Extraction
                          </div>
                          <div className="text-indigo-600 font-semibold">Sample output</div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
                            <div className="flex justify-between items-center mb-4">
                              <div className="font-semibold">statement_mar.pdf</div>
                              <div className="text-green-600 text-sm font-medium">Processed</div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <div className="text-sm text-gray-500 mb-1">Extracted Data</div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Opening Balance</div>
                                    <div className="font-semibold">$48,210.55</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Closing Balance</div>
                                    <div className="font-semibold">$52,904.18</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Total Deposits</div>
                                    <div className="font-semibold">$61,377.40</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Transactions</div>
                                    <div className="font-semibold">142 rows</div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="text-sm text-gray-500 mb-1">Confidence Score</div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                                </div>
                                <div className="flex justify-between text-xs mt-1">
                                  <span>0%</span>
                                  <span className="text-green-600 font-medium">High confidence</span>
                                  <span>100%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                            <div className="font-semibold mb-2">Output</div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Format</span>
                                <span className="font-medium">JSON</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Table</span>
                                <span className="font-medium">6 pages, stitched</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Flagged for review</span>
                                <span className="font-medium">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === "Checks and Review" && (
                      <div className="h-full flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Checks
                          </div>
                          <div className="text-green-600 font-semibold flex items-center">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            Sample result
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                              <div className="text-sm text-gray-500 mb-1">Format Checks</div>
                              <div className="text-2xl font-bold text-green-600">Passed</div>
                              <div className="mt-2 text-xs text-gray-500">Dates, amounts, IDs</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                              <div className="text-sm text-gray-500 mb-1">MRZ Check Digits</div>
                              <div className="text-2xl font-bold text-green-600">Valid</div>
                              <div className="mt-2 text-xs text-gray-500">Passport</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                              <div className="text-sm text-gray-500 mb-1">For Review</div>
                              <div className="text-2xl font-bold text-blue-600">1 field</div>
                              <div className="mt-2 text-xs text-gray-500">Low confidence</div>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-6">
                            <div className="font-semibold mb-3">Check Details</div>
                            <div className="space-y-3">
                              {[
                                { name: "Required fields present", status: "Passed", color: "text-green-600" },
                                { name: "Statement dates continuous", status: "Passed", color: "text-green-600" },
                                { name: "Employer name on pay stub", status: "Review", color: "text-yellow-600" },
                              ].map((check) => (
                                <div key={check.name} className="flex justify-between text-sm">
                                  <span>{check.name}</span>
                                  <span className={`font-medium ${check.color}`}>{check.status}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-green-800">Ready for Your Underwriting System</div>
                              <div className="text-sm text-green-700">Your team and your rules make the credit decision</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "order-1" : "order-2"}>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-8">{feature.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              {index < features.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px]">
                  <div className="h-20 w-[2px] bg-indigo-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
