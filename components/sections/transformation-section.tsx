import { Section, SectionHeader } from "@/components/ui/section"

export default function TransformationSection() {
  return (
    <Section id="transformation">
      <SectionHeader
        title="Transforming Small Business Lending with AI"
        description="The world is transforming with AI, and so is small business lending. We're the friend who helps you cross to the new age without fear."
      />

      <div className="relative">
        {/* Journey Path */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-200 -translate-y-1/2 rounded-full"></div>

        {/* Journey Stages */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Traditional Lending */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 relative z-10">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center shadow-md">
              <div className="text-3xl font-bold text-slate-400">1</div>
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-xl font-bold mb-3">Traditional Lending</h3>
              <div className="aspect-video bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-3/4 h-3/4 flex flex-col justify-center items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-slate-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                    <div className="h-2 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
                    <div className="h-2 bg-slate-300 rounded-full w-4/6 mx-auto"></div>
                  </div>
                </div>
              </div>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Manual industry classification taking hours per application</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Inconsistent classification results between team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Limited scalability with growing application volumes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Bridge - HyperVerge */}
          <div className="bg-indigo-600 rounded-xl p-6 shadow-xl border border-indigo-500 text-white relative z-20 transform md:translate-y-[-20px]">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-indigo-500 border-4 border-white flex items-center justify-center shadow-md">
              <div className="text-3xl font-bold text-white">2</div>
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-xl font-bold mb-3">HyperVerge AI Bridge</h3>
              <div className="aspect-video bg-indigo-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="relative w-full h-full p-4">
                  <div className="absolute left-0 right-0 top-1/2 h-2 bg-indigo-500 -translate-y-1/2"></div>
                  <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-indigo-500"></div>
                  <div className="absolute right-1/4 top-0 bottom-0 w-2 bg-indigo-500"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="text-left space-y-2 text-sm text-indigo-100">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Secure, guided transition to AI-powered classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Dedicated implementation team and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Seamless integration with existing systems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI-Powered Future */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 relative z-10">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-green-100 border-4 border-white flex items-center justify-center shadow-md">
              <div className="text-3xl font-bold text-green-600">3</div>
            </div>
            <div className="pt-10 text-center">
              <h3 className="text-xl font-bold mb-3">AI-Powered Future</h3>
              <div className="aspect-video bg-green-50 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-3/4 h-3/4 flex flex-col justify-center items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="h-2 bg-green-200 rounded-full w-full"></div>
                    <div className="h-2 bg-green-200 rounded-full w-5/6 mx-auto"></div>
                    <div className="h-2 bg-green-200 rounded-full w-4/6 mx-auto"></div>
                  </div>
                </div>
              </div>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5x faster classification with 95% accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consistent results across all applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited scalability with growing business needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
