import { Ship, PackageCheck, ClipboardList, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DocumentTypesSupported() {
  const documents = [
    {
      title: "Bills of Lading",
      icon: <Ship className="h-10 w-10 text-indigo-600" />,
      description:
        "Extract critical shipping information including consignor, consignee, vessel details, and goods description from all BOL formats.",
      link: "#",
    },
    {
      title: "Proof of Delivery",
      icon: <PackageCheck className="h-10 w-10 text-indigo-600" />,
      description:
        "Capture delivery confirmations, signatures, timestamps, and recipient information to verify successful deliveries.",
      link: "#",
    },
    {
      title: "Packing Lists",
      icon: <ClipboardList className="h-10 w-10 text-indigo-600" />,
      description:
        "Digitize item descriptions, quantities, weights, dimensions, and packaging details for accurate inventory tracking.",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Document Types Supported</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our OCR technology handles all major shipping document formats, from standard templates to custom forms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{doc.title}</h3>
              <p className="text-slate-600 mb-4">{doc.description}</p>
              <Link
                href={doc.link}
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                View Details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
