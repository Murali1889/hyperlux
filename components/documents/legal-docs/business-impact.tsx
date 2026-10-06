import { Clock, Bell, Users } from "lucide-react"

export default function BusinessImpact() {
  const impacts = [
    {
      title: "Clauses You Can Search",
      description: "Extracted clauses arrive as structured data, so your contract system can search them by type instead of someone reading page by page",
      icon: <Clock className="h-8 w-8 text-indigo-700" />,
      metric: "JSON",
      metricLabel: "Structured output",
    },
    {
      title: "Earlier Renewal Alerts",
      description: "Renewal, notice and expiry dates come out as fields your calendar or contract system can alert on",
      icon: <Bell className="h-8 w-8 text-indigo-700" />,
      metric: "Dates",
      metricLabel: "Extracted as fields",
    },
    {
      title: "Review Where It Matters",
      description: "Low-confidence clauses are flagged for a reviewer, so people check the uncertain parts instead of every page",
      icon: <Users className="h-8 w-8 text-indigo-700" />,
      metric: "Flagged",
      metricLabel: "Clauses only",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Where Legal Teams Get Time Back
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Time saved depends on your contract volume. These are the changes in the work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-2 rounded-full bg-indigo-50 w-fit mb-4">{impact.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{impact.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{impact.description}</p>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-indigo-700">{impact.metric}</span>
                <span className="text-gray-500">{impact.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-indigo-100">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Risk Reduction & Contract Compliance</h3>
          <p className="text-gray-600">
            A missed renewal date or an unnoticed liability cap usually comes from a contract nobody had time to read
            closely. Extraction reads every contract the same way and puts the dates into a system that can alert on
            them. A reviewer still confirms the clauses that carry real risk.
          </p>
        </div>
      </div>
    </section>
  )
}
