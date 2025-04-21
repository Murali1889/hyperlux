export const metadata = {
  title: "AI OCR Software for Financial Industries | HyperVerge",
  description:
    "Discover how HyperVerge's AI OCR software transforms document processing across banking, fintech, credit unions, and microfinance industries. Book a demo today!",
}

export default function IndustriesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI OCR Software for Financial Industries</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Transform document processing across banking, fintech, credit unions, and microfinance with intelligent
            automation solutions.
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

      {/* Industries List Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2">Banking</h3>
              <p className="text-gray-600">
                Streamline document processing for loan origination, account opening, and KYC verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fintech</h3>
              <p className="text-gray-600">
                Accelerate growth with automated data extraction and fraud detection for digital lending platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Credit Unions</h3>
              <p className="text-gray-600">
                Enhance member experience with efficient document processing and faster loan approvals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2">Microfinance</h3>
              <p className="text-gray-600">
                Scale operations with cost-effective document processing for small loans and financial inclusion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banking Industry Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Banking</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI OCR software transforms document processing for banks, reducing loan origination costs and
                accelerating account opening workflows. With 99.9% accuracy in data extraction, banks can automate KYC
                verification and compliance checks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce mortgage document processing time by 80%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automate bank statement analysis and income verification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhance fraud detection with document tampering alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintain compliance with automated audit trails</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-indigo-100">
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900">Banking Document Processor</h3>
                      <p className="text-sm text-gray-500">AI-powered document analysis</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Processing</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Processing mortgage documents</span>
                    <span className="text-indigo-600 font-medium">80% faster</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Loan Documents</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Income Verification</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Bank Statements</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Tax Returns</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">KYC Verification</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">ID Verification</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Address Proof</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-indigo-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <span className="text-sm">Fraud Detection</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h4 className="font-medium text-indigo-800">Compliance Check</h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-indigo-700">Automated audit trails and compliance verification</div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">99.9% Accurate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fintech Industry Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
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
                      <h3 className="font-bold">Fintech Lending Platform</h3>
                    </div>
                    <span className="bg-white text-indigo-600 text-xs px-2 py-1 rounded-full font-medium">
                      10x Faster
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Loan Application Processing</span>
                      <span className="text-green-600 font-medium">10x Faster</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Document Processing</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Bank Statements</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Processed</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Income Verification</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Processed</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Credit History</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Processed</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">API Integration</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Lending Platform</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Connected</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Credit Bureau</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Connected</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Banking API</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Connected</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded border border-indigo-100">
                    <div className="flex items-center mb-2">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <h4 className="font-medium text-indigo-800">Fraud Detection</h4>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-indigo-700">AI-powered document verification</div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Low Risk</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 mr-2"
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
                        <span className="text-sm font-medium">Decision: Approved</span>
                      </div>
                      <span className="text-xs text-gray-500">Processing time: 3 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fintech</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fintech lenders leverage our intelligent document automation to scale operations and improve customer
                experience. Our AI-powered OCR extracts data from various financial documents, enabling faster decisions
                and reduced operational costs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Process loan applications 10x faster with automated data extraction</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrate seamlessly with existing lending platforms via API</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scale operations without increasing headcount</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce fraud with AI-powered document verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Unions Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Unions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Credit unions enhance member experience with our OCR software that streamlines loan processing and
                account services. Our solution helps credit unions compete with larger institutions by automating
                document-heavy processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce loan processing time from days to hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automate income and employment verification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improve member satisfaction with faster service</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintain compliance with automated document processing</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <h3 className="font-bold">Credit Union Member Services</h3>
                    </div>
                    <span className="bg-white text-purple-600 text-xs px-2 py-1 rounded-full font-medium">
                      Days → Hours
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Loan Processing Time</span>
                      <span className="text-purple-600 font-medium">85% Reduction</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Document Automation</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Income Verification</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Automated</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Employment Proof</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Automated</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Credit History</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Automated</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Member Experience</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Satisfaction Score</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">94%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Wait Time</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">-75%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Member Retention</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">+18%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded border border-purple-100">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-600 mr-2"
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
                      <h4 className="font-medium text-purple-800">Compliance Automation</h4>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-purple-700">Automated regulatory compliance checks</div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">100% Compliant</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm font-medium">Average processing: 2.5 hours</span>
                      </div>
                      <span className="text-xs text-gray-500">Previously: 2-3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Microfinance Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
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
                      <h3 className="font-bold">Microfinance Field Operations</h3>
                    </div>
                    <span className="bg-white text-emerald-600 text-xs px-2 py-1 rounded-full font-medium">
                      Mobile Enabled
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Small Loan Processing</span>
                      <span className="text-emerald-600 font-medium">6x Volume Increase</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Field Operations</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">ID Verification</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Mobile</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Income Proof</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Mobile</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Address Verification</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Mobile</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Impact Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Borrowers Served</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">+240%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Processing Cost</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">-68%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Rural Coverage</span>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">+175%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-4 rounded border border-teal-100">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <h4 className="font-medium text-teal-800">Financial Inclusion</h4>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-teal-700">Expanding access to underserved communities</div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">High Impact</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-emerald-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm font-medium">Average processing: 15 minutes</span>
                      </div>
                      <span className="text-xs text-gray-500">Previously: 2-3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Microfinance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Microfinance institutions scale their impact with our cost-effective OCR solution that automates small
                loan processing. Our platform helps MFIs serve more borrowers with faster, more accurate document
                processing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Process high volumes of small loans efficiently</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce operational costs with automated document processing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expand financial inclusion with faster loan approvals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support field operations with mobile document capture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/logo-asiafinance.png" alt="AsiaFinance logo" className="h-10 mr-4" />
                <h3 className="text-xl font-semibold">AsiaFinance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "HyperVerge's OCR software reduced our loan processing time by 75%, allowing us to serve more small
                businesses with faster approvals."
              </p>
              <div className="flex items-center">
                <img src="/customer-avatar-1.png" alt="Customer" className="h-10 w-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Chief Digital Officer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/logo-globallending.png" alt="Global Lending logo" className="h-10 mr-4" />
                <h3 className="text-xl font-semibold">Global Lending</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "We've scaled our fintech operations across 5 countries using HyperVerge's AI document processing, with
                99.9% accuracy in data extraction."
              </p>
              <div className="flex items-center">
                <img src="/customer-avatar-2.png" alt="Customer" className="h-10 w-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">Michael Wong</p>
                  <p className="text-sm text-gray-500">Head of Operations</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/logo-cimb.png" alt="CIMB logo" className="h-10 mr-4" />
                <h3 className="text-xl font-semibold">CIMB Bank</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "HyperVerge's OCR technology helped us detect fraud in loan applications, saving over $2M in potential
                losses in the first year alone."
              </p>
              <div className="flex items-center">
                <img src="/customer-avatar-3.png" alt="Customer" className="h-10 w-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">David Lim</p>
                  <p className="text-sm text-gray-500">Risk Management Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform document processing in your industry?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Book a demo to see how our AI OCR software can automate workflows, reduce costs, and improve accuracy for
            your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/book-demo"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-center"
            >
              Book a Demo
            </a>
            <a
              href="/contact-sales"
              className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
