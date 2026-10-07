import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Scan, ShieldCheck } from "lucide-react"

export default function Workflow() {
  const steps = [
    {
      icon: <Camera className="h-10 w-10 text-indigo-700" />,
      title: "Multi-angle Capture Assistant",
      description: "Capture guidance helps users get the angle and lighting right, so fewer scans need a retake.",
    },
    {
      icon: <Scan className="h-10 w-10 text-indigo-700" />,
      title: "Barcode & Text Fusion OCR",
      description:
        "Dual extraction from both printed text and encoded barcode data for maximum accuracy and cross-validation.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-indigo-700" />,
      title: "Tamper & Duplicate Detection",
      description: "Checks flag IDs that look altered and IDs already seen in another application, for a reviewer to confirm.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Verification Workflow</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three-step process for secure, accurate ID verification
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-indigo-100 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <CardHeader className="pt-8">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <CardTitle className="text-xl text-center">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="relative w-full max-w-3xl h-[2px] bg-indigo-100">
            <div className="absolute left-1/6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-700 rounded-full"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-700 rounded-full"></div>
            <div className="absolute left-5/6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
