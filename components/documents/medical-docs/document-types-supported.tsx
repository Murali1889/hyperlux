import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FlaskRoundIcon as Flask, FileCheck } from "lucide-react"
import Link from "next/link"

export default function DocumentTypesSupported() {
  const documentTypes = [
    {
      title: "Prescriptions",
      icon: <FileText className="h-10 w-10 text-indigo-700" />,
      description:
        "Extract medication names, dosages, patient details, and prescriber information from printed and handwritten prescriptions, with unclear handwriting flagged for review.",
      href: "/resources/blogs/ndc-code-extraction",
    },
    {
      title: "Lab Reports",
      icon: <Flask className="h-10 w-10 text-indigo-700" />,
      description:
        "Capture test results, reference ranges, and critical values from complex lab reports. Supports all major lab formats and multi-page documents.",
      href: "/resources/blogs/loinc-code-extraction",
    },
    {
      title: "Insurance Forms",
      icon: <FileCheck className="h-10 w-10 text-indigo-700" />,
      description:
        "Process claims, EOBs, and prior authorizations with automated field extraction, so your team reviews flagged fields instead of keying every form.",
      href: "/resources/blogs/cms-1500-form-processing",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
              Document Types Supported
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our medical OCR technology supports a wide range of healthcare documents with specialized extraction for
              each type.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {documentTypes.map((type, index) => (
            <Card key={index} className="border border-indigo-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {type.icon}
                  <CardTitle className="text-xl font-bold">{type.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 min-h-[100px]">{type.description}</CardDescription>
                <Link
                  href={type.href}
                  className="inline-flex items-center mt-4 text-indigo-700 hover:text-indigo-800 font-medium"
                >
                  View Details →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
