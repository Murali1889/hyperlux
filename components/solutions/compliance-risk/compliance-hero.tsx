"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ComplianceHero() {
  return (
    <section className="bg-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-6">
              Stay Audit-Ready, Automatically
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Streamline compliance with intelligent document processing for AML/KYC verification, SOX section 404
              controls, and GDPR PII redaction—all with complete audit trails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                Request Compliance Demo
              </Button>
              <Button
                variant="outline"
                className="border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-2xl p-6 border border-indigo-100 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-700 opacity-5 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-700 opacity-5 rounded-full -ml-10 -mb-10"></div>

              {/* Header with compliance score */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-indigo-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
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
                  <div>
                    <h3 className="font-bold text-indigo-900">Compliance Readiness</h3>
                    <p className="text-sm text-gray-600">Real-time monitoring</p>
                  </div>
                </div>
                <div className="bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  <span className="text-green-700 font-medium text-sm">94% Compliant</span>
                </div>
              </div>

              {/* Radar chart visualization */}
              <div className="flex justify-center mb-6">
                <div className="relative h-48 w-48">
                  {/* Radar background */}
                  <div className="absolute inset-0 rounded-full border-2 border-indigo-100 opacity-20"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-indigo-100 opacity-40"></div>
                  <div className="absolute inset-8 rounded-full border-2 border-indigo-100 opacity-60"></div>
                  <div className="absolute inset-12 rounded-full border-2 border-indigo-100 opacity-80"></div>
                  <div className="absolute inset-16 rounded-full border-2 border-indigo-100"></div>

                  {/* Radar data points */}
                  <div className="absolute h-full w-full">
                    {/* AML/KYC - 95% */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3 w-3 bg-indigo-700 rounded-full"></div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-medium text-indigo-900">
                      AML/KYC
                    </div>

                    {/* SOX - 85% */}
                    <div className="absolute top-1/2 right-8 -translate-y-1/2 h-3 w-3 bg-indigo-600 rounded-full"></div>
                    <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs font-medium text-indigo-900">
                      SOX
                    </div>

                    {/* GDPR - 90% */}
                    <div className="absolute bottom-12 right-12 h-3 w-3 bg-indigo-500 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 text-xs font-medium text-indigo-900">GDPR</div>

                    {/* Data Security - 98% */}
                    <div className="absolute bottom-12 left-12 h-3 w-3 bg-indigo-800 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 text-xs font-medium text-indigo-900">Security</div>

                    {/* Audit Trail - 92% */}
                    <div className="absolute top-1/2 left-8 -translate-y-1/2 h-3 w-3 bg-indigo-400 rounded-full"></div>
                    <div className="absolute top-1/2 left-2 -translate-y-1/2 text-xs font-medium text-indigo-900">
                      Audit
                    </div>

                    {/* Connect the dots */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      <polygon
                        points="50,10 80,50 70,80 30,80 20,50"
                        fill="rgba(79, 70, 229, 0.2)"
                        stroke="rgba(79, 70, 229, 0.6)"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Compliance alerts */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-indigo-50">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">KYC Verification</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">Compliant</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-indigo-50">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">SOX Documentation</span>
                  </div>
                  <span className="text-yellow-600 text-sm font-medium">Review Needed</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-indigo-50">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">GDPR Redaction</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">Compliant</span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-indigo-100">
                <div className="text-sm text-gray-500">Updated: Just now</div>
                <button className="text-indigo-700 text-sm font-medium flex items-center">
                  View Full Report
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
