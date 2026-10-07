const outcomes = [
  {
    value: "Checksum",
    label: "MRZ check digits validated",
    description: "A misread passport or ID number usually fails the checksum and gets flagged instead of passing silently.",
  },
  {
    value: "1.1 s",
    label: "per page",
    description: "Processing speed in our 2026 OCR benchmark, including the network round-trip.",
  },
  {
    value: "Flagged",
    label: "unclear fields",
    description: "Fields the engine is unsure about go to a reviewer instead of being guessed.",
  },
]

export default function OutcomesBenefits() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Outcomes & Benefits</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Onboarding speed and fraud catch rates depend on your capture flow and applicant mix, so we would rather
            test on your samples than quote a number. This is what the checks do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((o) => (
            <div key={o.label} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{o.value}</div>
              <p className="text-slate-700 text-lg mb-3">{o.label}</p>
              <p className="text-slate-600">{o.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
