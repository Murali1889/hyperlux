export const metadata = {
  title: "OCR Software Use Cases for Lending and Fintech | HyperVerge",
  description:
    "Discover how HyperVerge's AI OCR software powers use cases for mortgage lending, small business financing, consumer lending, and more. Book a demo today!",
}

export default function UseCasesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI OCR Software Use Cases</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Discover how our intelligent document automation transforms lending workflows across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/book-demo"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-center"
            >
              Book a Demo
            </a>
            <a
              href="/contact-sales"
              className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Use Cases List */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Our Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#small-business" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group-hover:border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Small Business Lending
                </h3>
                <p className="text-gray-600">
                  Automate document processing for small business loans to expand your borrower pool and reduce costs.
                </p>
              </div>
            </a>

            <a href="#commercial-banking" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group-hover:border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3h6m-6 20h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Commercial Banking
                </h3>
                <p className="text-gray-600">
                  Streamline document verification for commercial banking to accelerate loan processing and improve
                  compliance.
                </p>
              </div>
            </a>

            <a href="#mortgage-lending" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group-hover:border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
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
                      d="M3 12l2-2m0 0l7-7a7.071 7.071 0 0112.11 9.783L20 14m-9 5v-3.284m0 0l4.84-4.84m-5 0a3.182 3.182 0 01-3.182-3.182V9m1.245 5.757A4.818 4.818 0 0112 14.257m0 0V5.324m0 0L3.4 18.583"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Mortgage Lending
                </h3>
                <p className="text-gray-600">
                  Enhance efficiency in mortgage lending with automated document review and data extraction.
                </p>
              </div>
            </a>

            <a href="#consumer-lending" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group-hover:border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Consumer Lending
                </h3>
                <p className="text-gray-600">
                  Improve the speed and accuracy of consumer loan processing with AI-powered document automation.
                </p>
              </div>
            </a>

            <a href="#alternative-lending" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group-hover:border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
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
                      d="M15 13.5a4.5 4.5 0 01-1.578 3.422L7.5 10.5V5.305a8.952 8.952 0 0010.39 4.062 8.952 8.952 0 01-10.39 4.062v2.927m0 0l3.995-1.857m0 0a4.5 4.5 0 013.422-1.578M3 21v-7.293a8.953 8.953 0 012.804-4.062m0 0c3.594 0 6.719-1.036 9.419-2.888M5.804 8.943L7.5 10.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  Alternative Lending
                </h3>
                <p className="text-gray-600">
                  Automate document analysis for alternative lending to assess risk and improve decision-making.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Small Business Lending Section */}
      <div id="small-business" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              AI OCR for Small Business Lending: Automate and Expand
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Leverage HyperVerge's AI OCR solution to automate document processing, reduce manual effort, and expand
              your borrower pool. Our technology accurately extracts data from various financial documents, enabling
              faster and more informed lending decisions.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">Automated document classification and data extraction</li>
              <li className="mb-2">Reduced processing time and operational costs</li>
              <li className="mb-2">Improved accuracy and compliance</li>
              <li>Enhanced fraud detection capabilities</li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-indigo-600 text-white p-4">
                <h4 className="font-semibold text-lg">HyperVerge Small Business Lending Dashboard</h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <div className="text-indigo-600 font-bold text-xl mb-1">99.8%</div>
                    <div className="text-gray-700 text-sm">Document Classification Accuracy</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <div className="text-indigo-600 font-bold text-xl mb-1">99.9%</div>
                    <div className="text-gray-700 text-sm">Data Extraction Accuracy</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <div className="text-indigo-600 font-bold text-xl mb-1">97.5%</div>
                    <div className="text-gray-700 text-sm">Fraud Detection Rate</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-gray-700 flex-1">Tax Returns Processing</div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Automated</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-gray-700 flex-1">Financial Statements</div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Automated</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-gray-700 flex-1">Business Registration</div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Automated</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-gray-700 flex-1">Bank Statements</div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Automated</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-indigo-600 font-bold text-2xl">80%</div>
                      <div className="text-gray-600 text-sm">Processing Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-indigo-600 font-bold text-2xl">3.5x</div>
                      <div className="text-gray-600 text-sm">Borrower Pool Expansion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-indigo-600 font-bold text-2xl">65%</div>
                      <div className="text-gray-600 text-sm">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
