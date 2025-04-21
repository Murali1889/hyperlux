import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, ShieldCheck, BarChart4 } from "lucide-react"

const metrics = [
  {
    title: "Faster Processing",
    value: "70%",
    description: "Reduction in classification time",
    icon: Clock,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Improved Accuracy",
    value: "95%",
    description: "Classification accuracy rate",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Cost Savings",
    value: "60%",
    description: "Reduction in operational costs",
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Risk Reduction",
    value: "40%",
    description: "Decrease in misclassification risk",
    icon: BarChart4,
    color: "bg-purple-50 text-purple-600",
  },
]

export default function ROISection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Measurable ROI for Your Lending Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Our clients see significant improvements in their lending operations after implementing HyperVerge's
              AI-powered industry classification solution.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <Card key={metric.title} className="border-slate-200">
                  <CardContent className="p-6 space-y-2">
                    <div className={`w-10 h-10 rounded-full ${metric.color} flex items-center justify-center`}>
                      <metric.icon className="h-5 w-5" />
                    </div>
                    <div className="text-3xl font-bold">{metric.value}</div>
                    <div>
                      <h3 className="font-medium">{metric.title}</h3>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-indigo-50 to-slate-50 rounded-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="aspect-video bg-white p-6">
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="h-4 bg-indigo-100 rounded w-32"></div>
                      <div className="h-3 bg-slate-200 rounded w-24"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-indigo-100"></div>
                      <div className="h-8 w-8 rounded-full bg-green-100"></div>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <div className="h-24 bg-green-100 rounded-lg mb-2 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                          +
                        </div>
                      </div>
                      <div className="h-3 bg-slate-200 rounded w-full mb-1"></div>
                      <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                    </div>
                    <div className="flex flex-col">
                      <div className="h-24 bg-red-100 rounded-lg mb-2 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                          -
                        </div>
                      </div>
                      <div className="h-3 bg-slate-200 rounded w-full mb-1"></div>
                      <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">3.2x ROI</p>
                  <p className="text-xs text-muted-foreground">Within first 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
