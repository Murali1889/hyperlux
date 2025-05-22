import Link from "next/link"
import { FileText, FileCheck, Files } from "lucide-react"

export default function DocumentTypesSupported() {
  const documentTypes = [
    {
      title: "Contracts",
      description:
        "Extract key clauses, parties, dates, and obligations from service agreements, employment contracts, and vendor agreements.",
      icon: <FileText className="h-10 w-10 text-indigo-700" />,
      href: "#",
    },
    {
      title: "NDAs",
      description:
        "Automatically identify confidentiality terms, restricted information, duration periods, and jurisdictional clauses from non-disclosure agreements.",
      icon: <FileCheck className="h-10 w-10 text-indigo-700" />,
      href: "#",
    },
    {
      title: "Litigation Bundles",
      description:
        "Process multi-document legal bundles, extracting case references, exhibit numbers, testimony highlights, and cross-referenced evidence.",
      icon: <Files className="h-10 w-10 text-indigo-700" />,
      href: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Document Types Supported
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our OCR technology is optimized for a wide range of legal documents with specialized extraction models for
              each type.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {documentTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-2 rounded-full bg-indigo-50 w-fit mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{type.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{type.description}</p>
              <Link
                href={type.href}
                className="text-indigo-700 font-medium flex items-center hover:text-indigo-800 transition-colors"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
