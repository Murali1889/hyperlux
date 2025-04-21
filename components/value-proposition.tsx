import { CheckCircle } from "lucide-react"

const benefits = [
  {
    title: "70% Faster Classification",
    description: "Reduce industry classification time from hours to minutes with our AI-powered solution",
  },
  {
    title: "95% Accuracy Rate",
    description: "Achieve higher accuracy than manual processes through multi-source data verification",
  },
  {
    title: "60% Cost Reduction",
    description: "Lower operational costs by automating the classification process end-to-end",
  },
  {
    title: "Regulatory Compliance",
    description: "Stay compliant with industry regulations through consistent classification",
  },
]

export default function ValueProposition() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-indigo-50 to-slate-50 rounded-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-8 bg-indigo-100 rounded-full px-4 flex items-center">
                        <span className="text-sm font-medium text-indigo-800">Industry Classification</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-indigo-800">1</span>
                        </div>
                        <div className="text-sm font-medium">Business Information</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="h-4 bg-slate-100 rounded"></div>
                        <div className="h-4 bg-slate-100 rounded"></div>
                      </div>
                      <div className="h-4 bg-slate-100 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                    </div>

                    <div className="border border-slate-200 rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-indigo-800">2</span>
                        </div>
                        <div className="text-sm font-medium">AI Analysis</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-3 bg-indigo-100 rounded w-1/4"></div>
                        <div className="text-xs font-medium text-green-600">70% Faster</div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-3 bg-indigo-100 rounded w-1/3"></div>
                        <div className="text-xs font-medium text-green-600">95% Accurate</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="h-3 bg-indigo-100 rounded w-1/4"></div>
                        <div className="text-xs font-medium text-green-600">60% Savings</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 mr-3">
                        <svg
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-slate-200 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">5x Faster Processing</p>
                  <p className="text-xs text-muted-foreground">Than manual classification</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Transform Your Small Business Lending with Intelligent Industry Classification
            </h2>
            <p className="text-lg text-muted-foreground">
              Manual industry classification is slow, error-prone, and doesn't scale. HyperVerge's AI-powered solution
              automates the entire process, delivering faster decisions and better risk management.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
