const metrics = [
  { value: "93%", label: "Invoice line-item accuracy in our 2026 benchmark" },
  { value: "1.1 s", label: "Per page, including the network round-trip" },
  { value: "$0.02", label: "Per page to start, with volume discounts above 100K pages a month" },
]

export default function BusinessImpact() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Changes in Accounts Payable</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Your savings depend on volume and how your team works today. These are the parts we can measure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="bg-white rounded-xl shadow-md p-8 text-center border border-indigo-100"
            >
              <div className="text-5xl font-bold text-indigo-600 mb-4">{metric.value}</div>
              <p className="text-lg text-slate-700">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto border border-indigo-100">
          <h3 className="font-semibold text-slate-900 mb-2">Work out your own number</h3>
          <p className="text-slate-700">
            Time ten invoices keyed by hand, multiply by the loaded hourly cost, and compare that with per-page pricing
            plus the time your team spends on flagged fields. Our{" "}
            <a href="/resources/blogs/accounts-payable-ocr" className="text-indigo-700 underline">
              accounts payable OCR guide
            </a>{" "}
            has a fill-in cost model for exactly this.
          </p>
        </div>
      </div>
    </section>
  )
}
