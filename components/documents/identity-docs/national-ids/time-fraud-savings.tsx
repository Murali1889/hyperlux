import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ShieldAlert } from "lucide-react"

export default function TimeFraudSavings() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Time & Fraud Savings</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Accelerate verification while enhancing security
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-indigo-700" />
              </div>
              <CardTitle className="text-2xl text-center">Processing Time Reduction</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-between w-full">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Manual Check</p>
                    <p className="text-2xl font-bold text-gray-700">90s</p>
                  </div>
                  <div className="h-0.5 w-20 bg-indigo-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-700">
                      →
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Automated</p>
                    <p className="text-2xl font-bold text-indigo-700">10s</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center">
                  89% faster verification enables smoother onboarding and reduces abandonment rates by 35%.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <ShieldAlert className="h-12 w-12 text-indigo-700" />
              </div>
              <CardTitle className="text-2xl text-center">Fraud Detection Improvement</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center">
                  <p className="text-gray-500 text-sm">Duplicate ID Flag Accuracy</p>
                  <p className="text-4xl font-bold text-indigo-700">97%</p>
                </div>
                <p className="text-gray-600 text-center">
                  Advanced algorithms detect altered IDs and flag potential duplicates with high precision, reducing
                  fraud attempts by 65%.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            Streamlined verification creates a smoother onboarding experience, reducing drop-offs while maintaining
            robust security. Customers report a 40% increase in successful onboarding completions.
          </p>
        </div>
      </div>
    </section>
  )
}
