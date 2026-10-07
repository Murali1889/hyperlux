import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function LegalDocsHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Transform Legal Documents into Structured Data Instantly
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Automatically extract clauses, key dates, and confidential information from contracts, NDAs, and
              litigation bundles, with low-confidence clauses flagged for review. Speed up legal review without
              handing judgment to a machine.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                Explore Legal Templates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-xl shadow-lg">
              <ContractAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContractAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md h-80">
        {/* Legal document with realistic elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main contract document */}
          <div className="absolute w-64 h-80 bg-white border border-gray-300 shadow-lg rounded-sm transform transition-all duration-1000 animate-float-slow z-30">
            {/* Document header */}
            <div className="p-4 space-y-3">
              <div className="text-center">
                <div className="h-5 bg-indigo-700 rounded-sm w-full mb-1"></div>
                <div className="h-4 bg-indigo-600 rounded-sm w-3/4 mx-auto mb-3 animate-pulse"></div>
              </div>

              {/* Parties section */}
              <div className="space-y-1 border-b border-gray-200 pb-2">
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-400 rounded-sm w-1/4"></div>
                  <div className="h-3 bg-gray-400 rounded-sm w-1/4"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded-sm w-full"></div>
                <div className="h-2 bg-gray-300 rounded-sm w-5/6"></div>
              </div>

              {/* Clauses with highlighting */}
              <div className="space-y-2">
                <div className="h-3 bg-indigo-200 rounded-sm w-1/2 animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                  <div className="h-2 bg-indigo-100 rounded-sm w-3/4 animate-pulse"></div>
                </div>

                <div className="h-3 bg-red-200 rounded-sm w-2/3 animate-pulse delay-300"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                  <div className="h-2 bg-red-100 rounded-sm w-full animate-pulse delay-300"></div>
                  <div className="h-2 bg-gray-200 rounded-sm w-5/6"></div>
                </div>

                <div className="h-3 bg-green-200 rounded-sm w-1/2 animate-pulse delay-600"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-green-100 rounded-sm w-full animate-pulse delay-600"></div>
                  <div className="h-2 bg-gray-200 rounded-sm w-3/4"></div>
                </div>
              </div>

              {/* Signature block */}
              <div className="flex justify-between items-end pt-2 mt-2 border-t border-gray-200">
                <div className="space-y-1 w-1/2">
                  <div className="h-2 bg-gray-300 rounded-sm w-3/4"></div>
                  <div className="h-4 bg-indigo-100 rounded-sm w-full animate-pulse delay-900">
                    <div className="h-3 w-12 bg-indigo-400 rounded-sm mx-auto mt-0.5"></div>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full border border-indigo-300 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-indigo-200 animate-pulse"></div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="transform rotate-45 text-indigo-300 text-xl font-bold">CONFIDENTIAL</div>
              </div>
            </div>
          </div>

          {/* Secondary document (NDA) */}
          <div className="absolute w-64 h-80 bg-white border border-gray-300 shadow-md rounded-sm transform translate-x-4 translate-y-4 transition-all duration-1000 animate-float z-20">
            <div className="p-4 space-y-2">
              <div className="text-center">
                <div className="h-4 bg-gray-400 rounded-sm w-1/2 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-300 rounded-sm w-3/4 mx-auto mb-3"></div>
              </div>

              <div className="space-y-1 border-b border-gray-200 pb-2">
                <div className="h-2 bg-gray-300 rounded-sm w-full"></div>
                <div className="h-2 bg-gray-300 rounded-sm w-5/6"></div>
              </div>

              <div className="space-y-2">
                <div className="h-3 bg-gray-400 rounded-sm w-1/3"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                </div>

                <div className="h-3 bg-gray-400 rounded-sm w-1/2"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded-sm w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-sm w-3/4"></div>
                </div>
              </div>

              <div className="flex justify-between items-end pt-2 mt-2 border-t border-gray-200">
                <div className="space-y-1 w-1/2">
                  <div className="h-2 bg-gray-300 rounded-sm w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-sm w-full"></div>
                </div>
                <div className="h-8 w-8 rounded-full border border-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Extraction animation */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
            {/* Clause extraction points */}
            <div
              className="absolute w-20 h-3 bg-indigo-200 rounded-full opacity-0 animate-extract-clause"
              style={{ top: "-30px", left: "-60px" }}
            ></div>
            <div
              className="absolute w-24 h-3 bg-red-200 rounded-full opacity-0 animate-extract-clause"
              style={{ top: "0px", left: "-70px", animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute w-16 h-3 bg-green-200 rounded-full opacity-0 animate-extract-clause"
              style={{ top: "30px", left: "-50px", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-12 h-4 bg-indigo-100 rounded-full opacity-0 animate-extract-clause"
              style={{ top: "60px", left: "-40px", animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Structured JSON output */}
          <div className="absolute right-0 transform translate-x-20 translate-y-0 w-48 h-64 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10 animate-slide-in overflow-hidden">
            <div className="p-3 font-mono text-xs">
              <div className="text-green-400 mb-1">// Legal document extraction</div>
              <div className="text-white">{`{`}</div>
              <div className="pl-2">
                <span className="text-indigo-400">"document_type"</span>:
                <span className="text-yellow-300">"contract"</span>,
              </div>
              <div className="pl-2">
                <span className="text-indigo-400">"parties"</span>: [
                <span className="text-yellow-300">"ABC Corp", "XYZ Inc"</span>],
              </div>
              <div className="pl-2">
                <span className="text-indigo-400">"effective_date"</span>:
                <span className="text-yellow-300">"2023-06-15"</span>,
              </div>
              <div className="pl-2">
                <span className="text-indigo-400">"clauses"</span>: {`{`}
              </div>
              <div className="pl-4">
                <span className="text-red-400">"confidentiality"</span>:<span className="text-gray-400">"{`...`}"</span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-green-400">"termination"</span>:<span className="text-gray-400">"{`...`}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-400">"governing_law"</span>:<span className="text-gray-400">"{`...`}"</span>
              </div>
              <div className="pl-2">{`}`},</div>
              <div className="pl-2">
                <span className="text-indigo-400">"signatures"</span>:<span className="text-green-400">true</span>
              </div>
              <div className="text-white">{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
