"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NationalIdHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                One-Scan National ID Verification
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Extract data from ID cards with advanced barcode decoding, hologram text recognition, and optional
                liveness checks for secure, instant verification across global formats.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-indigo-700 hover:bg-indigo-800">
                <Link href="/book-demo">Request Demo</Link>
              </Button>
              <Button variant="outline" className="border-indigo-700 text-indigo-700 hover:bg-indigo-50">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[400px] perspective-[1000px] group">
              {/* Card container with 3D effect */}
              <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180 animate-float">
                {/* Front of ID card */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white rounded-xl shadow-lg backface-hidden border-2 border-indigo-100 overflow-hidden">
                  {/* ID card header */}
                  <div className="bg-indigo-700 text-white p-3 flex justify-between items-center">
                    <div className="font-bold">NATIONAL IDENTITY CARD</div>
                    <div className="text-xs">REPUBLIC OF HYPERVERGE</div>
                  </div>

                  {/* Photo area */}
                  <div className="absolute top-14 left-4 w-24 h-32 bg-gray-200 border border-gray-300 overflow-hidden">
                    <div className="w-full h-full bg-gray-300"></div>
                    <div className="absolute inset-0 animate-pulse-slow bg-indigo-500/10"></div>
                  </div>

                  {/* Hologram effect */}
                  <div className="absolute top-14 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-300/30 via-purple-300/30 to-pink-300/30 animate-spin-slow"></div>

                  {/* Data fields with scanning effect */}
                  <div className="absolute top-14 left-32 right-4 space-y-3">
                    <div className="relative">
                      <div className="text-xs text-gray-500">NAME</div>
                      <div className="font-medium">JOHN Q. SAMPLE</div>
                      <div className="absolute inset-0 bg-indigo-400/20 animate-scan-1"></div>
                    </div>
                    <div className="relative">
                      <div className="text-xs text-gray-500">ID NUMBER</div>
                      <div className="font-medium">ID-12345678-9</div>
                      <div className="absolute inset-0 bg-indigo-400/20 animate-scan-2"></div>
                    </div>
                    <div className="relative">
                      <div className="text-xs text-gray-500">DATE OF BIRTH</div>
                      <div className="font-medium">01-JAN-1980</div>
                      <div className="absolute inset-0 bg-indigo-400/20 animate-scan-3"></div>
                    </div>
                    <div className="relative">
                      <div className="text-xs text-gray-500">EXPIRY DATE</div>
                      <div className="font-medium">01-JAN-2030</div>
                      <div className="absolute inset-0 bg-indigo-400/20 animate-scan-4"></div>
                    </div>
                  </div>

                  {/* Barcode */}
                  <div className="absolute bottom-4 left-4 right-4 h-16 bg-white border border-gray-300 flex items-center justify-center overflow-hidden">
                    <div className="flex space-x-1">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-16"
                          style={{
                            backgroundColor: Math.random() > 0.5 ? "#312e81" : "#ffffff",
                            height: `${Math.random() * 100}%`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-indigo-600/10 animate-scan-barcode"></div>
                  </div>

                  {/* Verification indicators */}
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                {/* Back of ID card */}
                <div className="absolute inset-0 bg-gray-50 rounded-xl shadow-lg backface-hidden rotate-y-180 border-2 border-indigo-100 overflow-hidden">
                  {/* Back header */}
                  <div className="bg-indigo-800 text-white p-2 text-sm">OFFICIAL GOVERNMENT ID</div>

                  {/* Address section */}
                  <div className="p-4 relative">
                    <div className="text-xs text-gray-500">ADDRESS</div>
                    <div className="text-sm mt-1">
                      123 VERIFICATION STREET
                      <br />
                      IDENTITY CITY, ID 12345
                    </div>
                    <div className="absolute inset-0 bg-indigo-400/20 animate-scan-5"></div>
                  </div>

                  {/* QR code */}
                  <div className="absolute top-20 right-4 w-24 h-24 bg-white p-1 border border-gray-300">
                    <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-0.5">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? "bg-indigo-900" : "bg-white"}`}></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-indigo-600/10 animate-scan-qr"></div>
                  </div>

                  {/* Large barcode */}
                  <div className="absolute bottom-12 left-4 right-4 h-20 bg-white border border-gray-300 flex items-center justify-center overflow-hidden">
                    <div className="flex space-x-0.5">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 h-20"
                          style={{
                            backgroundColor: Math.random() > 0.5 ? "#312e81" : "#ffffff",
                            height: `${Math.random() * 100}%`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-indigo-600/10 animate-scan-barcode-back"></div>
                  </div>

                  {/* Verification status */}
                  <div className="absolute bottom-4 left-4 right-4 bg-indigo-700/90 text-white p-2 rounded text-sm font-medium flex items-center justify-between">
                    <span>Barcode & text extraction</span>
                    <span className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                      99% accuracy
                    </span>
                  </div>
                </div>
              </div>

              {/* Data extraction visualization */}
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-20 h-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-4 bg-indigo-600 rounded-full animate-ping-slow"></div>
                <div className="w-0.5 h-full bg-indigo-300 -mt-2"></div>
              </div>
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-20 h-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-4 bg-indigo-600 rounded-full animate-ping-slow"></div>
                <div className="w-0.5 h-full bg-indigo-300 -mt-2"></div>
              </div>

              {/* Caption */}
              <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-indigo-700 font-medium">
                Hover to see front & back verification
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add custom animation styles */}
      <style jsx>{`
        .perspective-[1000px] {
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
        .animate-scan-1 {
          animation: scan 3s ease-in-out 0s infinite;
        }
        .animate-scan-2 {
          animation: scan 3s ease-in-out 0.5s infinite;
        }
        .animate-scan-3 {
          animation: scan 3s ease-in-out 1s infinite;
        }
        .animate-scan-4 {
          animation: scan 3s ease-in-out 1.5s infinite;
        }
        .animate-scan-5 {
          animation: scan 3s ease-in-out 2s infinite;
        }
        .animate-scan-barcode {
          animation: scanBarcode 4s ease-in-out infinite;
        }
        .animate-scan-barcode-back {
          animation: scanBarcode 4s ease-in-out 2s infinite;
        }
        .animate-scan-qr {
          animation: scanQr 4s ease-in-out 1s infinite;
        }
        .animate-ping-slow {
          animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes scan {
          0%, 100% {
            opacity: 0;
            transform: scaleX(0);
          }
          50% {
            opacity: 0.7;
            transform: scaleX(1);
          }
        }
        @keyframes scanBarcode {
          0%, 100% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.3;
            transform: translateX(100%);
          }
        }
        @keyframes scanQr {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes pingSlow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
