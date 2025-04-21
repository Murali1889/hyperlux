import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
              AI-Powered OCR Software
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Intelligent Document Automation for Financial Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Our suite of AI-powered OCR products streamlines document processing, enhances fraud detection, and
              accelerates lending decisions with 99.9% accuracy and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact-sales">Contact Sales</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Abstract document patterns */}
                <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="docGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* Document outlines */}
                  <rect x="100" y="80" width="200" height="280" rx="8" fill="url(#docGrad1)" />
                  <rect x="350" y="150" width="200" height="280" rx="8" fill="url(#docGrad1)" />
                  <rect x="600" y="100" width="180" height="280" rx="8" fill="url(#docGrad1)" />

                  {/* Connection lines */}
                  <path
                    d="M300 200 C 320 200, 330 220, 350 220"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M550 300 C 570 300, 580 280, 600 280"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />

                  {/* Data points */}
                  <circle cx="300" cy="200" r="5" fill="white" opacity="0.8" />
                  <circle cx="350" cy="220" r="5" fill="white" opacity="0.8" />
                  <circle cx="550" cy="300" r="5" fill="white" opacity="0.8" />
                  <circle cx="600" cy="280" r="5" fill="white" opacity="0.8" />
                </svg>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-md text-center text-white p-6 bg-black/30 backdrop-blur-sm rounded-xl">
                <div className="mb-4 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="2" strokeDasharray="6 4" />
                    <circle cx="40" cy="40" r="30" fill="rgba(255,255,255,0.1)" />
                    <path d="M30 30 L50 30 L50 50 L30 50 Z" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M35 38 L45 38" stroke="white" strokeWidth="2" />
                    <path d="M35 42 L42 42" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">AI-Powered Document Processing</h3>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80">Accuracy</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-3xl font-bold">80%</div>
                    <div className="text-sm opacity-80">Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
        <div className="h-64 w-64 rounded-full bg-indigo-300 opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
        <div className="h-64 w-64 rounded-full bg-indigo-400 opacity-20 blur-3xl"></div>
      </div>
    </section>
  )
}
