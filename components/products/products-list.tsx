import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const products = [
  {
    id: "industry-classifier",
    name: "Industry Classifier",
    description: "AI-powered industry classification for accurate business categorization",
    image: {
      src: "/icon-ai-mapping.png",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    features: [
      "Automated NAICS/SIC code assignment",
      "Multi-document analysis",
      "95% accuracy rate",
      "Regulatory compliance",
    ],
    cta: "Learn More",
  },
  {
    id: "document-analyzer",
    name: "Document Analyzer",
    description: "Extract and analyze critical data from financial documents",
    image: {
      src: "/icon-data-extraction.png",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    features: [
      "Automated data extraction",
      "Financial statement analysis",
      "Fraud detection",
      "Compliance verification",
    ],
    cta: "Learn More",
  },
  {
    id: "risk-assessment",
    name: "Risk Assessment Engine",
    description: "Comprehensive risk analysis for informed lending decisions",
    image: {
      src: "/icon-matching.png",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    features: ["Credit risk scoring", "Fraud detection", "Regulatory compliance", "Portfolio monitoring"],
    cta: "Learn More",
  },
]

export default function ProductsList() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our OCR Software Suite</h2>
          <p className="text-xl text-gray-600">
            Discover our comprehensive suite of AI-powered OCR products designed to transform document processing for
            mortgage lending, small business financing, and consumer lending
          </p>
        </div>

        <div className="grid gap-12 md:gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <div className="bg-indigo-50 rounded-xl p-8 h-full flex items-center justify-center">
                  <div className="relative h-64 w-full">
                    {product.id === "industry-classifier" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-md">
                          <div className="relative">
                            {/* Industry classification visualization */}
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                </div>
                                <span className="text-xs font-medium text-center">Real Estate</span>
                                <span className="text-xs text-gray-500 mt-1">NAICS: 531</span>
                              </div>
                              <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                  </svg>
                                </div>
                                <span className="text-xs font-medium text-center">Insurance</span>
                                <span className="text-xs text-gray-500 mt-1">NAICS: 524</span>
                              </div>
                              <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-indigo-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                                <span className="text-xs font-medium text-center">Finance</span>
                                <span className="text-xs text-gray-500 mt-1">NAICS: 522</span>
                              </div>
                            </div>
                            <div className="mt-4 bg-indigo-600 text-white p-3 rounded-lg text-sm font-medium text-center">
                              AI Classification Engine
                            </div>
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                              <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="mt-6 bg-white p-4 rounded-lg shadow-md border border-indigo-100 text-center">
                            <div className="font-medium">95% Classification Accuracy</div>
                            <div className="text-sm text-gray-500">Automated NAICS/SIC Assignment</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {product.id === "document-analyzer" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-md">
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-100">
                            <div className="p-4 bg-indigo-600 text-white">
                              <div className="flex items-center justify-between">
                                <div className="font-medium">Financial Document Analyzer</div>
                                <div className="flex space-x-2">
                                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="flex items-center mb-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-indigo-600 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                <span className="font-medium">Document Processing</span>
                              </div>
                              <div className="space-y-2 mb-4">
                                <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                                  <div className="bg-indigo-600 h-full rounded-full" style={{ width: "85%" }}></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>Processing...</span>
                                  <span>85%</span>
                                </div>
                              </div>
                              <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                  <span>Revenue:</span>
                                  <span className="font-medium">$1,245,000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>EBITDA:</span>
                                  <span className="font-medium">$328,500</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Debt Ratio:</span>
                                  <span className="font-medium">0.42</span>
                                </div>
                              </div>
                              <div className="mt-4 p-2 bg-green-50 text-green-700 text-sm rounded flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Data extraction complete
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {product.id === "risk-assessment" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-md">
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-100">
                            <div className="p-4 bg-indigo-600 text-white">
                              <div className="font-medium">Risk Assessment Dashboard</div>
                            </div>
                            <div className="p-4">
                              <div className="flex justify-between items-center mb-4">
                                <div className="text-lg font-medium">Risk Score</div>
                                <div className="flex items-center">
                                  <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center font-bold text-lg">
                                    A+
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Credit Risk</span>
                                    <span className="font-medium text-green-600">Low</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full" style={{ width: "25%" }}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Fraud Probability</span>
                                    <span className="font-medium text-green-600">Very Low</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full" style={{ width: "10%" }}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Regulatory Compliance</span>
                                    <span className="font-medium text-green-600">High</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full" style={{ width: "95%" }}></div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                                <div className="text-sm font-medium mb-2">Recommendation</div>
                                <div className="text-sm text-gray-700">
                                  This application has a strong risk profile. Proceed with standard lending terms.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="group bg-indigo-600 hover:bg-indigo-700">
                  <Link href={`#${product.id}`}>
                    {product.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
