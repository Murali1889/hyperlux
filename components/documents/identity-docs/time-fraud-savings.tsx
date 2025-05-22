import { Clock, ShieldCheck } from "lucide-react"

export default function TimeFraudSavings() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Time & Fraud Savings</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Accelerate onboarding while enhancing security
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold">Time Savings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Manual Check</span>
                <span className="font-bold">90 seconds</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full">
                <div className="w-[100%] h-2 bg-red-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Automated Check</span>
                <span className="font-bold">8 seconds</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full">
                <div className="w-[9%] h-2 bg-green-400 rounded-full"></div>
              </div>
              <p className="text-green-600 font-bold text-lg">90% Faster</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold">Fraud Detection</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Manual Review</span>
                <span className="font-bold">Baseline</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full">
                <div className="w-[33%] h-2 bg-red-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">AI Detection</span>
                <span className="font-bold">3× Improvement</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full">
                <div className="w-[100%] h-2 bg-green-400 rounded-full"></div>
              </div>
              <p className="text-green-600 font-bold text-lg">Fraudulent IDs Flagged ↑ 3×</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-slate-600">
            By automating identity verification, organizations can provide a smoother onboarding experience while
            significantly reducing operational costs and fraud risks. Users complete verification in seconds rather than
            minutes, leading to higher conversion rates and improved customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}
