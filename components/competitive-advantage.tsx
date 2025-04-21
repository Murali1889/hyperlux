import { CheckCircle, XCircle } from "lucide-react"

const features = [
  { name: "Accuracy" },
  { name: "Speed" },
  { name: "Scalability" },
  { name: "Consistency" },
  { name: "Multi-source verification" },
]

const competitors = [
  {
    name: "Traditional Methods",
    features: {
      Accuracy: false,
      Speed: false,
      Scalability: false,
      Consistency: false,
      "Multi-source verification": false,
    },
  },
  {
    name: "Basic Automation Tools",
    features: {
      Accuracy: false,
      Speed: true,
      Scalability: true,
      Consistency: false,
      "Multi-source verification": false,
    },
  },
  {
    name: "HyperVerge AI",
    features: {
      Accuracy: true,
      Speed: true,
      Scalability: true,
      Consistency: true,
      "Multi-source verification": true,
    },
    highlight: true,
  },
]

export default function CompetitiveAdvantage() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why HyperVerge Outperforms Competitors</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            See how our AI-powered industry classification solution compares to traditional methods and basic automation
            tools
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitors.map((competitor) => (
              <div
                key={competitor.name}
                className={`bg-white rounded-xl overflow-hidden border ${
                  competitor.highlight ? "border-indigo-600 shadow-lg" : "border-slate-200"
                }`}
              >
                <div className="p-6 border-b border-slate-200">
                  <div className={`text-xl font-bold ${competitor.highlight ? "text-indigo-600" : ""}`}>
                    {competitor.name}
                    {competitor.highlight && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                        Recommended
                      </span>
                    )}
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex items-center justify-between p-4">
                      <span className="text-sm">{feature.name}</span>
                      {competitor.features[feature.name] ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                  ))}
                </div>

                {competitor.highlight && (
                  <div className="p-4 bg-indigo-50">
                    <p className="text-sm text-indigo-700">
                      <span className="font-medium">HyperVerge AI</span> combines multiple data sources, machine
                      learning, and industry expertise to deliver superior classification accuracy.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
          >
            See how HyperVerge can transform your lending operations
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
