import { ArrowRight } from "lucide-react"

export default function VerificationWorkflow() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Verification Workflow</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Streamlined process for fast and accurate identity verification
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-700 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold">User Uploads ID via SDK</h3>
            <p className="text-slate-500">
              Capture high-quality images through our mobile or web SDK with real-time quality checks and guidance.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-indigo-300" />
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-700 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold">AI Detects & Extracts Fields</h3>
            <p className="text-slate-500">
              Our AI automatically identifies document type and extracts all relevant fields in under 1 second with
              99.8% accuracy.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-indigo-300" />
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-700 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold">Optional Face Match & Fraud Checks</h3>
            <p className="text-slate-500">
              Perform biometric face matching and advanced fraud detection to ensure document authenticity and prevent
              identity theft.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl h-[200px] bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-400 italic">SVG pipeline visualization</p>
          </div>
        </div>
      </div>
    </section>
  )
}
