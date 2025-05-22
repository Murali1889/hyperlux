import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AccuracyBenchmarks() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Accuracy Benchmarks</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Industry-leading precision across all ID types and formats
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Printed Text Recognition</CardTitle>
              <CardDescription>OCR accuracy for printed text on ID cards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Accuracy Rate</span>
                  <span className="font-bold text-indigo-700">99%</span>
                </div>
                <Progress value={99} className="h-3 bg-indigo-100">
                  <div className="h-full bg-indigo-700 rounded-full" style={{ width: "99%" }} />
                </Progress>
                <p className="text-sm text-gray-500">
                  Benchmarked across 50+ ID types and 30+ languages, including non-Latin scripts and special characters.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-indigo-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">Barcode Decode Rate</CardTitle>
              <CardDescription>Success rate for barcode and QR code extraction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Success Rate</span>
                  <span className="font-bold text-indigo-700">99.5%</span>
                </div>
                <Progress value={99.5} className="h-3 bg-indigo-100">
                  <div className="h-full bg-indigo-700 rounded-full" style={{ width: "99.5%" }} />
                </Progress>
                <p className="text-sm text-gray-500">
                  Supports PDF417, QR, DataMatrix, and other barcode formats used in government-issued IDs worldwide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 italic">
            Results based on a benchmark of 3.2 million ID scans across 85 countries, including challenging conditions
            like glare, low light, and worn documents.
          </p>
        </div>
      </div>
    </section>
  )
}
