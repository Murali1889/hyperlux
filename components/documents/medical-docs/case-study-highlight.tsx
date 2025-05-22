import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudyHighlight() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
              Case Study Highlight
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how leading healthcare organizations are transforming their operations with our medical document OCR.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Card className="border-indigo-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <CardTitle className="text-xl font-bold">MidwestCare Hospital Network</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Regional hospital network with 12 facilities and 3,000+ beds
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700 mb-2">Challenge</h3>
                    <p className="text-gray-600">
                      Processing over 15,000 lab reports daily with a team of 45 data entry specialists. Manual entry
                      led to delays in result availability, transcription errors, and high labor costs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700 mb-2">Solution</h3>
                    <p className="text-gray-600">
                      Implemented HyperVerge's medical document OCR platform to automatically process lab reports from
                      multiple facilities and integrate results directly into their Epic EHR system.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700 mb-2">Results</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-indigo-700">30%</div>
                        <div className="text-sm text-gray-600">Throughput Improvement</div>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-indigo-700">92%</div>
                        <div className="text-sm text-gray-600">Reduction in Errors</div>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-indigo-700">$1.2M</div>
                        <div className="text-sm text-gray-600">Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="bg-indigo-100 p-6 flex flex-col justify-center items-center">
                <div className="relative w-full max-w-md aspect-video bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-indigo-700 mb-2">30%</div>
                      <div className="text-lg font-medium text-indigo-900">Faster Results</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                        stroke="#4338CA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M9 7H7V17H9V7Z" fill="#4338CA" />
                      <path d="M17 7H15V17H17V7Z" fill="#4338CA" />
                      <path d="M13 7H11V17H13V7Z" fill="#4338CA" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-indigo-900">Dr. Emily Chen</div>
                    <div className="text-sm text-gray-600">Chief Medical Information Officer</div>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-700 italic">
                  "The impact on our clinical workflow has been transformative. Lab results are now available to our
                  physicians within minutes of being generated, allowing for faster clinical decisions and improved
                  patient care."
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
