"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

// Add this CSS
const licenseStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotateY(0); }
    25% { transform: translateY(-5px) rotateY(5deg); }
    50% { transform: translateY(0) rotateY(0); }
    75% { transform: translateY(5px) rotateY(-5deg); }
  }
  
  @keyframes highlight-scan {
    0% { transform: translateX(-100%); background-color: rgba(79, 70, 229, 0.2); }
    50% { transform: translateX(0); background-color: rgba(79, 70, 229, 0.2); }
    100% { transform: translateX(100%); background-color: transparent; }
  }
  
  @keyframes barcode-scan {
    0% { box-shadow: -10px 0 0 0 rgba(79, 70, 229, 0.7); }
    100% { box-shadow: 300px 0 0 0 rgba(79, 70, 229, 0); }
  }
  
  @keyframes data-extract {
    0%, 100% { opacity: 0; transform: translate(0, -50%) scale(0.8); }
    50% { opacity: 1; transform: translate(-20px, -50%) scale(1); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-highlight-scan {
    animation: highlight-scan 2s ease-in-out infinite;
  }
  
  .animate-barcode-scan {
    animation: barcode-scan 1.5s linear infinite;
  }
  
  .animate-data-extract {
    animation: data-extract 3s ease-in-out infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  
  .license-container:hover {
    transform: rotateY(180deg);
  }
`

export default function DriverLicenceHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted && (
        <style jsx global>
          {licenseStyles}
        </style>
      )}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Fast, Reliable Driver Licence OCR
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl">
                Extract data from both front and back sides of licenses with advanced PDF417 and QR code decoding,
                supporting global formats with industry-leading accuracy.
              </p>
              <div className="pt-4">
                <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-6 text-lg rounded-lg">
                  Browse Templates
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md perspective-1000">
                  <div className="license-container w-full h-full relative transition-all duration-1000 transform-style-preserve-3d animate-float">
                    {/* Front of license */}
                    <div className="license-front absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-xl shadow-lg p-4 border border-indigo-200 backface-hidden">
                      <div className="flex justify-between items-start">
                        <div className="text-sm font-bold text-indigo-800">DRIVER LICENSE</div>
                        <div className="text-sm font-bold text-indigo-800">STATE OF EXAMPLE</div>
                      </div>

                      <div className="mt-4 flex space-x-4">
                        <div className="w-1/3 h-32 bg-indigo-200 rounded-md relative overflow-hidden animate-pulse">
                          <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-user"
                            >
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </div>
                        </div>

                        <div className="w-2/3 space-y-2">
                          {/* Animated highlighting fields */}
                          <div className="h-5 bg-white rounded relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-indigo-100 animate-highlight-scan"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center px-2">
                              <span className="text-xs font-medium text-gray-700">SMITH, JOHN MICHAEL</span>
                            </div>
                          </div>

                          <div className="h-5 bg-white rounded relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-indigo-100 animate-highlight-scan"
                              style={{ animationDelay: "1s" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center px-2">
                              <span className="text-xs font-medium text-gray-700">LIC#: D1234567</span>
                            </div>
                          </div>

                          <div className="h-5 bg-white rounded relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-indigo-100 animate-highlight-scan"
                              style={{ animationDelay: "1.5s" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center px-2">
                              <span className="text-xs font-medium text-gray-700">DOB: 01/15/1985</span>
                            </div>
                          </div>

                          <div className="h-5 bg-white rounded relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-indigo-100 animate-highlight-scan"
                              style={{ animationDelay: "2s" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center px-2">
                              <span className="text-xs font-medium text-gray-700">EXP: 01/15/2025</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 h-10 bg-white rounded relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-indigo-100 animate-highlight-scan"
                          style={{ animationDelay: "2.5s" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center px-2">
                          <span className="text-xs font-medium text-gray-700">123 MAIN STREET, ANYTOWN, ST 12345</span>
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3 text-xs text-indigo-600 font-medium animate-pulse">
                        Front Scan Complete
                      </div>
                    </div>

                    {/* Back of license */}
                    <div className="license-back absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl shadow-lg p-4 border border-indigo-200 backface-hidden transform rotate-y-180">
                      <div className="w-full h-12 bg-gray-800 mb-4"></div>

                      <div className="w-full h-16 bg-white border border-gray-300 mb-4 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5/6 h-10 bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 relative overflow-hidden">
                            <div className="absolute inset-0 animate-barcode-scan"></div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-4 bg-white rounded w-3/4"></div>
                        <div className="h-4 bg-white rounded w-2/3"></div>
                        <div className="h-4 bg-white rounded w-5/6"></div>
                      </div>

                      <div className="absolute bottom-3 right-3 text-xs text-indigo-600 font-medium animate-pulse">
                        Barcode Decoded
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium z-10">
                    98% Accuracy
                  </div>

                  {/* Data extraction animation */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 animate-data-extract">
                    <div className="w-full h-full bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  )
}
