import { Clock, CheckCircle, FileSearch } from "lucide-react"

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-indigo-600" />,
    title: "Search by content",
    body: "A scan is a picture nobody can search. After OCR, staff find a document by what it says instead of opening folders one at a time.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
    title: "97-99% on clean print",
    body: "Character accuracy on clean typed text in our 2026 benchmark. Faded copies and handwriting score lower, so low-confidence pages are flagged for a check.",
  },
  {
    icon: <FileSearch className="w-8 h-8 text-indigo-600" />,
    title: "Metadata you can filter",
    body: "Document type, dates, parties and reference numbers come out as fields, so the archive works like a database instead of a pile of PDFs.",
  },
]

export default function BusinessBenefits() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Business Benefits</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
            What changes when an archive goes from scanned images to searchable, structured records.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {b.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{b.title}</h3>
              <p className="text-slate-600">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
