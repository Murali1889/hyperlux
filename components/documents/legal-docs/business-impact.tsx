import { Clock, Bell, Users } from "lucide-react"

export default function BusinessImpact() {
  const impacts = [
    {
      title: "Clause Search Time Reduced",
      description: "Find specific clauses across thousands of contracts in seconds instead of hours",
      icon: <Clock className="h-8 w-8 text-indigo-700" />,
      metric: "98%",
      metricLabel: "Time Saved",
    },
    {
      title: "Earlier Renewal Alerts",
      description: "Automated extraction of key dates enables proactive renewal management",
      icon: <Bell className="h-8 w-8 text-indigo-700" />,
      metric: "30+",
      metricLabel: "Days Earlier",
    },
    {
      title: "Paralegal Hours Saved",
      description: "Dramatically reduce manual document review time for your legal team",
      icon: <Users className="h-8 w-8 text-indigo-700" />,
      metric: "200+",
      metricLabel: "Hours Monthly",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Business Impact & Time Savings
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Quantifiable benefits that transform your legal operations and reduce business risk.
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
            Beyond time savings, our legal document OCR significantly reduces compliance risks by ensuring no critical
            clauses or deadlines are missed. Organizations report 65% fewer contract-related disputes and a 40%
            reduction in compliance violations after implementation, protecting both reputation and bottom line.
          </p>
        </div>
      </div>
    </section>
  )
}
