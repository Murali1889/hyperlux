import { Clock, ListChecks, ScanText, ShieldCheck } from "lucide-react"

const BENCHMARK_URL = "/resources/blogs/ocr-accuracy-benchmark-2026"

type AccuracyProps = {
  /** Plural label, e.g. "passports" */
  doc: string
  /** Second card: the check that catches misreads on this document */
  check: { title: string; badge: string; body: string }
}

export function IdAccuracySection({ doc, check }: AccuracyProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Accurate Is It?</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          We have not published a benchmark for {doc} yet, so we will not put a made-up number here. This is what we
          have measured, and how errors get caught.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <ScanText className="h-10 w-10 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">97-99%</h3>
            <p className="text-center text-gray-700 font-medium text-lg mb-4">Clean Typed Text</p>
            <p className="text-center text-gray-600">
              Character accuracy on clean typed text in our{" "}
              <a href={BENCHMARK_URL} className="text-indigo-700 underline">
                2026 OCR benchmark
              </a>
              . Printed ID fields are typed text, but glare, wear and angled photos pull it down.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <ShieldCheck className="h-10 w-10 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{check.badge}</h3>
            <p className="text-center text-gray-700 font-medium text-lg mb-4">{check.title}</p>
            <p className="text-center text-gray-600">{check.body}</p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <p className="text-gray-700">
            Fields the engine is unsure about are flagged for a reviewer instead of guessed. The best test is your own
            sample, so bring a few real {doc} captures to the demo.
          </p>
        </div>
      </div>
    </section>
  )
}

type ChecksProps = {
  doc: string
  checks: string[]
}

export function IdTimeChecksSection({ doc, checks }: ChecksProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Time and Checks</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          What changes when {doc} are read by DocsAPI instead of typed in by hand
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Time</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between gap-4">
                <span className="text-gray-700">Manual entry</span>
                <span className="text-gray-900 font-bold text-right">Typed field by field</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-700">DocsAPI</span>
                <span className="text-indigo-700 font-bold text-right">About 1.1 s per page</span>
              </div>
              <p className="text-gray-600 pt-2">
                Speed from our 2026 OCR benchmark, including the network round-trip. Capture quality matters more than
                processing time: a blurry photo costs the user a retake, so guide them to a clean, flat, well-lit shot.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <ListChecks className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Checks Before the Data Moves On</h3>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              {checks.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              Fraud catch rates depend on your applicant mix and capture flow, so we would rather test on your samples
              than quote a number.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
