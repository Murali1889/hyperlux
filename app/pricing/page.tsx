export const metadata = {
  title: "OCR Software Pricing | AI Document Processing | HyperVerge",
  description:
    "Explore HyperVerge's flexible OCR software pricing plans for document automation. Choose the right plan for your lending and fintech needs. Book a demo today!",
}

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing for AI Document Processing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Choose the right plan for your document automation needs with our flexible, scalable pricing options.
          </p>
          <div className="inline-flex items-center bg-indigo-800/30 rounded-full p-1 mb-8">
            <button className="px-6 py-2 rounded-full bg-white text-indigo-700 font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-full text-white font-medium">Annual (Save 20%)</button>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-gray-900">$499</span>
                <span className="text-xl font-medium text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for small businesses processing up to 1,000 documents monthly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 1,000 documents/month</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic document classification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data extraction for standard documents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="h-6 w-6 text-gray-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Advanced fraud detection</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="h-6 w-6 text-gray-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a
                href="/book-demo"
                className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-gray-900">$999</span>
                <span className="text-xl font-medium text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Ideal for growing businesses processing up to 5,000 documents monthly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 5,000 documents/month</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced document classification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data extraction for complex documents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic fraud detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority email & phone support</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="h-6 w-6 text-gray-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a
                href="/book-demo"
                className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">
                Tailored solutions for large organizations with high-volume document processing needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom document classification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced fraud detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SLA guarantees</span>
                </li>
              </ul>
              <a
                href="/contact-sales"
                className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">Starter</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">Professional</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-700">Document Classification</td>
                  <td className="py-4 px-6 text-center text-gray-700">Basic</td>
                  <td className="py-4 px-6 text-center text-gray-700">Advanced</td>
                  <td className="py-4 px-6 text-center text-gray-700">Custom</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Data Extraction</td>
                  <td className="py-4 px-6 text-center text-gray-700">Standard Documents</td>
                  <td className="py-4 px-6 text-center text-gray-700">Complex Documents</td>
                  <td className="py-4 px-6 text-center text-gray-700">Any Document Type</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Fraud Detection</td>
                  <td className="py-4 px-6 text-center text-gray-700">
                    <svg
                      className="h-6 w-6 text-gray-300 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700">Basic</td>
                  <td className="py-4 px-6 text-center text-gray-700">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">API Access</td>
                  <td className="py-4 px-6 text-center text-gray-700">Limited</td>
                  <td className="py-4 px-6 text-center text-gray-700">Full</td>
                  <td className="py-4 px-6 text-center text-gray-700">Custom</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Support</td>
                  <td className="py-4 px-6 text-center text-gray-700">Email</td>
                  <td className="py-4 px-6 text-center text-gray-700">Email & Phone</td>
                  <td className="py-4 px-6 text-center text-gray-700">Dedicated Manager</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-700">Custom Integrations</td>
                  <td className="py-4 px-6 text-center text-gray-700">
                    <svg
                      className="h-6 w-6 text-gray-300 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700">
                    <svg
                      className="h-6 w-6 text-gray-300 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700">
                    <svg
                      className="h-6 w-6 text-indigo-600 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our enterprise OCR solutions are tailored to the unique needs of large financial institutions and
                lending organizations. We offer custom document processing workflows, dedicated support, and seamless
                integration with your existing systems.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom document classification models</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced fraud detection and risk management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account management and support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom API integrations with your existing systems</span>
                </li>
              </ul>
              <a
                href="/contact-sales"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Contact Sales
              </a>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow-lg border border-indigo-100">
                <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Enterprise
                </div>
                <div className="flex justify-between items-center mb-6 border-b border-indigo-100 pb-4">
                  <div className="text-xl font-bold text-gray-800">Enterprise Plan</div>
                  <div className="text-indigo-600 font-bold">Custom Pricing</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Unlimited Volume</div>
                      <div className="text-sm text-gray-600">Process any number of documents</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Custom Configuration</div>
                      <div className="text-sm text-gray-600">Tailored to your specific needs</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Dedicated Support</div>
                      <div className="text-sm text-gray-600">Personal account manager</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Annual billing available</div>
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Contact Sales
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">How is pricing calculated?</h3>
              <p className="text-gray-600">
                Our pricing is based on the number of documents processed monthly, with additional factors including
                document complexity and required features. Contact us for a custom quote.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I upgrade my plan anytime?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. The new pricing will be prorated for the remainder of your
                billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                We offer a limited free trial for qualified businesses. Contact our sales team to determine if you're
                eligible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">What types of documents can your OCR process?</h3>
              <p className="text-gray-600">
                Our OCR software can process virtually any document type, including bank statements, paystubs, tax
                forms, IDs, and custom documents specific to your industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">How accurate is your OCR software?</h3>
              <p className="text-gray-600">
                Our OCR software achieves 99.9% accuracy through a combination of AI and human-in-the-loop validation,
                ensuring reliable data extraction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">How do you ensure data security?</h3>
              <p className="text-gray-600">
                We maintain bank-level security with SOC 2 compliance, data encryption, and secure cloud infrastructure
                to protect your sensitive information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your document processing?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Book a demo to see our AI OCR software in action and discuss the right pricing plan for your business needs.
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
