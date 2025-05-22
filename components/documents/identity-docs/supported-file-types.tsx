import { StampIcon as Passport, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

export default function SupportedFileTypes() {
  const documentTypes = [
    {
      icon: <Passport className="h-10 w-10 text-indigo-700" />,
      title: "Passports",
      description:
        "Extract MRZ data and biometric information from e-passport chips with support for 120+ ICAO-compliant passport formats worldwide.",
      href: "/documents/identity-docs/passports",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-indigo-700" />,
      title: "National IDs",
      description:
        "Process national identity cards with barcode and hologram verification, supporting both electronic and traditional ID formats.",
      href: "/documents/identity-docs/national-ids",
    },
    {
      icon: <FileText className="h-10 w-10 text-indigo-700" />,
      title: "Driver Licences",
      description:
        "Capture data from both front and back sides of driver licenses, including barcodes and security features from various jurisdictions.",
      href: "/documents/identity-docs/driver-licences",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Supported Identity Document Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documentTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-indigo-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-full">{type.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{type.title}</h3>
                <p className="text-gray-700 text-center mb-6">{type.description}</p>
                <div className="text-center">
                  <Link
                    href={type.href}
                    className="text-indigo-700 font-medium hover:text-indigo-900 inline-flex items-center"
                  >
                    View Details <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
