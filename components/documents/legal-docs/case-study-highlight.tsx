export default function CaseStudyHighlight() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
              Case Study Highlight
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how our clients are transforming their legal operations with our OCR technology.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <div className="w-32 h-12 bg-indigo-100 rounded flex items-center justify-center text-indigo-800 font-bold">
                  FinTech Co.
                </div>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">40% Faster Contract Review Cycle</h3>
              <p className="text-gray-600 mb-6">
                A leading fintech company implemented our legal document OCR solution to streamline their contract
                management process. With over 5,000 vendor agreements to manage, their legal team was spending countless
                hours on manual review and data entry.
              </p>
              <p className="text-gray-600 mb-6">
                After implementing our solution, they reduced their contract review cycle by 40%, enabling their legal
                team to focus on higher-value strategic work instead of document processing.
              </p>
              <div className="flex items-center">
                <img src="/professional-headshot.png" alt="Legal Director" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-medium text-indigo-900">
                    "The accuracy and speed of the system exceeded our expectations."
                  </p>
                  <p className="text-sm text-gray-500">— Sarah Chen, Legal Director</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-100 p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-indigo-900 mb-2">Key Results</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center mr-3">
                        40%
                      </div>
                      <span className="text-gray-700">Faster contract review cycle</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center mr-3">
                        95%
                      </div>
                      <span className="text-gray-700">Clause extraction accuracy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center mr-3">
                        85%
                      </div>
                      <span className="text-gray-700">Reduction in manual data entry</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center mr-3">
                        $250K
                      </div>
                      <span className="text-gray-700">Annual cost savings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
