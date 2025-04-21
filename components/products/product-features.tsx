import { CheckCircle } from "lucide-react"

const features = [
  {
    title: "Industry Classification",
    description: "Automatically classify businesses into the correct industry categories with 95% accuracy",
    image: "/classification-process.png",
    benefits: [
      "Reduce manual classification time by 80%",
      "Ensure regulatory compliance",
      "Improve portfolio segmentation",
      "Enable industry-specific risk assessment",
    ],
  },
  {
    title: "Document Analysis",
    description: "Extract and analyze critical data from financial documents with our advanced AI",
    image: "/competitor-analysis.png",
    benefits: [
      "Reduce document processing time by 75%",
      "Eliminate manual data entry errors",
      "Standardize data extraction across documents",
      "Enable faster lending decisions",
    ],
  },
  {
    title: "Risk Assessment",
    description: "Comprehensive risk analysis for informed lending decisions",
    image: "/roi-dashboard.png",
    benefits: [
      "Reduce default rates by up to 30%",
      "Identify high-risk applications early",
      "Standardize risk assessment processes",
      "Enable data-driven lending decisions",
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
            Our intelligent document automation platform leverages machine learning to classify, capture, detect, and
            analyze documents with 99.9% accuracy
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.title} className="relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-2" : "order-1"}>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-indigo-50 p-6">
                    {feature.title === "Industry Classification" && (
                      <div className="h-full flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            AI Classification Engine
                          </div>
                          <div className="text-green-600 font-semibold flex items-center">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            95% Accuracy
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {[
                              { name: "Real Estate", code: "NAICS: 531", color: "bg-blue-100 border-blue-300" },
                              { name: "Manufacturing", code: "NAICS: 31-33", color: "bg-purple-100 border-purple-300" },
                              { name: "Retail", code: "NAICS: 44-45", color: "bg-green-100 border-green-300" },
                            ].map((industry) => (
                              <div
                                key={industry.name}
                                className={`border ${industry.color} rounded-lg p-4 text-center`}
                              >
                                <div className="font-bold mb-1">{industry.name}</div>
                                <div className="text-xs text-gray-600">{industry.code}</div>
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
                            <div className="font-semibold text-lg mb-2">Classification Results</div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Regulatory Compliance</span>
                              </div>
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Risk Assessment</span>
                              </div>
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Portfolio Segmentation</span>
                              </div>
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Reporting</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === "Document Analysis" && (
                      <div className="h-full flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Document Processing
                          </div>
                          <div className="text-indigo-600 font-semibold">Financial Statement Analysis</div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
                            <div className="flex justify-between items-center mb-4">
                              <div className="font-semibold">Balance_Sheet_2023.pdf</div>
                              <div className="text-green-600 text-sm font-medium">Processed</div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <div className="text-sm text-gray-500 mb-1">Extracted Data</div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Total Assets</div>
                                    <div className="font-semibold">$4,285,000</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Total Liabilities</div>
                                    <div className="font-semibold">$2,142,000</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Net Income</div>
                                    <div className="font-semibold">$856,000</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded">
                                    <div className="text-xs text-gray-500">Cash Flow</div>
                                    <div className="font-semibold">$1,250,000</div>
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
                                  <span className="text-green-600 font-medium">95% Accurate</span>
                                  <span>100%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                            <div className="font-semibold mb-2">Analysis Results</div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Debt-to-Equity Ratio</span>
                                <span className="font-medium">0.85</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Current Ratio</span>
                                <span className="font-medium">2.3</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Return on Assets</span>
                                <span className="font-medium">19.9%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.title === "Risk Assessment" && (
                      <div className="h-full flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Risk Analysis Dashboard
                          </div>
                          <div className="text-green-600 font-semibold flex items-center">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            Live Data
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                              <div className="text-sm text-gray-500 mb-1">Credit Score</div>
                              <div className="text-2xl font-bold text-green-600">A+</div>
                              <div className="mt-2 text-xs text-gray-500">Top 5% of applicants</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                              <div className="text-sm text-gray-500 mb-1">Default Probability</div>
                              <div className="text-2xl font-bold text-green-600">2.1%</div>
                              <div className="mt-2 text-xs text-gray-500">Industry avg: 7.8%</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                              <div className="text-sm text-gray-500 mb-1">Debt Service Ratio</div>
                              <div className="text-2xl font-bold text-blue-600">1.8x</div>
                              <div className="mt-2 text-xs text-gray-500">Threshold: 1.2x</div>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-6">
                            <div className="font-semibold mb-3">Risk Factors Analysis</div>
                            <div className="space-y-3">
                              {[
                                { name: "Industry Risk", value: 15, max: 100, color: "bg-green-500" },
                                { name: "Financial Health", value: 85, max: 100, color: "bg-green-500" },
                                { name: "Market Conditions", value: 65, max: 100, color: "bg-yellow-500" },
                              ].map((factor) => (
                                <div key={factor.name}>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>{factor.name}</span>
                                    <span>
                                      {factor.value}/{factor.max}
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                      className={`${factor.color} h-2 rounded-full`}
                                      style={{ width: `${factor.value}%` }}
                                    ></div>
                                  </div>
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
                              <div className="font-semibold text-green-800">Recommended Decision</div>
                              <div className="text-sm text-green-700">Approve loan with standard terms</div>
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
