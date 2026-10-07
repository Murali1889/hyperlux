import { Section } from "@/components/ui/section"
import { MetricCard } from "@/components/ui/metric-card"
import { TrendingUp, Clock, ShieldCheck, BarChart4, CalendarCheck } from "lucide-react"

const metrics = [
  {
    title: "Processing Speed",
    value: "~1.1 s",
    description: "Per page in our 2026 OCR benchmark, including the network round-trip",
    icon: Clock,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Invoice Line Items",
    value: "93%",
    description: "Extraction accuracy in our 2026 benchmark",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Bank Statement Tables",
    value: "91%",
    description: "Row accuracy on multi-page statements",
    icon: BarChart4,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Starting Price",
    value: "$0.02",
    description: "Per page, with volume discounts above 100K pages a month",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
  },
]

const steps = [
  "Time ten documents processed by hand today",
  "Multiply by your loaded hourly cost",
  "Compare with per-page pricing plus review time for flagged fields",
]

export default function ROISection() {
  return (
    <Section background="muted" id="roi">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ROI: Work It Out With Your Own Numbers</h2>
          <p className="text-lg text-muted-foreground">
            We would rather give you the inputs than a made-up ROI figure. These are the parts we can measure; the rest
            depends on your volume and what a document costs you today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                description={metric.description}
                icon={metric.icon}
                iconColor={metric.color}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-indigo-50 to-slate-50 rounded-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white p-6 pb-20">
            <h3 className="text-lg font-semibold text-indigo-600">Your ROI in three steps</h3>
            <p className="text-sm text-slate-600 mb-6">Takes about ten minutes with a stopwatch</p>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                    {i + 1}
                  </span>
                  <span className="text-slate-800 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="absolute -bottom-6 -right-0 md:-right-6 bg-white rounded-lg p-4 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CalendarCheck className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Free 30-day trial</p>
                <p className="text-xs text-muted-foreground">For qualified lenders, after a demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
