const impacts = [
  {
    value: "Fields",
    label: "Dates and parties as structured data",
    description: "Renewal, notice and expiry dates come out as fields your contract system can alert on.",
  },
  {
    value: "Scores",
    label: "A confidence score on every clause",
    description: "You can see which extractions are solid and which need a lawyer to look.",
  },
  {
    value: "Flagged",
    label: "Uncertain clauses go to review",
    description: "Liability caps and unusual renewal terms get a human check instead of a guess.",
  },
]

export default function BusinessImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Impact</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            How much review time you save depends on your contracts and how carefully each one must be read. These are
            the changes in the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((item) => (
            <div key={item.label} className="bg-indigo-50 rounded-xl p-8 text-center border border-indigo-100">
              <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{item.value}</h3>
              <p className="text-slate-700 font-medium mb-3">{item.label}</p>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
