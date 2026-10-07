"use client"

import { Button } from "@/components/ui/button"

export default function MedicalDocsHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-indigo-700">
                Automate Medical Document Processing with Precision
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Extract data from prescriptions, lab reports, and insurance forms, with unclear fields flagged for
                review. HIPAA-eligible with a BAA, and results come back in seconds, not hours.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Browse Medical Templates</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] h-[400px] bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-6">
                  {/* Medical Documents Stack */}
                  <div className="absolute top-[30px] left-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center perspective-[1000px]">
                    <div className="relative w-[400px]">
                      {/* Prescription */}
                      <div className="absolute -left-[100px] top-0 w-[180px] h-[240px] bg-white rounded-lg shadow-lg transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300">
                        <div className="h-10 bg-indigo-700 rounded-t-lg flex items-center justify-between px-3">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                              <span className="text-indigo-700 text-xs font-bold">Rx</span>
                            </div>
                            <span className="text-white text-sm font-bold ml-2">PRESCRIPTION</span>
                          </div>
                        </div>
                        <div className="p-3 space-y-3">
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Patient:</span>
                              <span className="text-xs text-gray-800">John Doe</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Medication:</span>
                              <span className="text-xs text-gray-800">Amoxicillin</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Dosage:</span>
                              <span className="text-xs text-gray-800">500mg</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Frequency:</span>
                              <span className="text-xs text-gray-800">3x daily</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Quantity:</span>
                              <span className="text-xs text-gray-800">30 tablets</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Doctor:</span>
                              <span className="text-xs text-gray-800">Dr. Smith</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                        </div>
                      </div>

                      {/* Lab Report */}
                      <div className="absolute left-[40px] top-[20px] w-[200px] h-[260px] bg-white rounded-lg shadow-lg transform rotate-[-3deg] hover:rotate-[1deg] transition-transform duration-300">
                        <div className="h-10 bg-indigo-500 rounded-t-lg flex items-center justify-between px-3">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                              <span className="text-indigo-500 text-xs font-bold">LAB</span>
                            </div>
                            <span className="text-white text-sm font-bold ml-2">LAB REPORT</span>
                          </div>
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Patient:</span>
                              <span className="text-xs text-gray-800">Jane Smith</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Test:</span>
                              <span className="text-xs text-gray-800">CBC</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">WBC:</span>
                              <span className="text-xs text-gray-800">7.2 x10^9/L</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">RBC:</span>
                              <span className="text-xs text-gray-800">4.8 x10^12/L</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">HGB:</span>
                              <span className="text-xs text-gray-800">14.2 g/dL</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">PLT:</span>
                              <span className="text-xs text-gray-800">250 x10^9/L</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Date:</span>
                              <span className="text-xs text-gray-800">2023-05-15</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                        </div>
                      </div>

                      {/* Insurance Form */}
                      <div className="absolute left-[180px] top-[0px] w-[190px] h-[230px] bg-white rounded-lg shadow-lg transform rotate-[5deg] hover:rotate-[2deg] transition-transform duration-300">
                        <div className="h-10 bg-indigo-400 rounded-t-lg flex items-center justify-between px-3">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                              <span className="text-indigo-400 text-xs font-bold">INS</span>
                            </div>
                            <span className="text-white text-sm font-bold ml-2">INSURANCE</span>
                          </div>
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Patient:</span>
                              <span className="text-xs text-gray-800">R. Johnson</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Policy #:</span>
                              <span className="text-xs text-gray-800">INS-12345</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Provider:</span>
                              <span className="text-xs text-gray-800">HealthPlus</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Group #:</span>
                              <span className="text-xs text-gray-800">GP-987654</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-semibold text-gray-500">Date:</span>
                              <span className="text-xs text-gray-800">2023-06-10</span>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Extraction Visualization - Completely Redesigned */}
                  <div className="absolute bottom-6 left-0 right-0 mx-auto w-[90%] bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-700">Extracted Medical Data</h4>
                        <span className="text-xs text-indigo-600 font-medium">Extraction status</span>
                      </div>

                      {/* Prescription Accuracy */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-indigo-700 mr-2"></div>
                            <span className="text-xs text-gray-600">Prescriptions</span>
                          </div>
                          <span className="text-xs font-bold text-indigo-700">Done</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-700 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>

                      {/* Lab Results Accuracy */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                            <span className="text-xs text-gray-600">Lab Results</span>
                          </div>
                          <span className="text-xs font-bold text-indigo-500">Done</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>

                      {/* Insurance Forms Accuracy */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-indigo-400 mr-2"></div>
                            <span className="text-xs text-gray-600">Insurance Forms</span>
                          </div>
                          <span className="text-xs font-bold text-indigo-400">Review</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-400 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Data Points */}
                  <DataPoints />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DataPoints() {
  // Generate random data points flowing from documents to progress bars
  const points = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startX: 50 + Math.random() * 300,
    startY: 50 + Math.random() * 150,
    endX: 100 + Math.random() * 400,
    endY: 300 + Math.random() * 50,
    size: 3 + Math.random() * 3,
    delay: Math.random() * 10,
    duration: 2 + Math.random() * 3,
    color: i % 3 === 0 ? "bg-indigo-700" : i % 3 === 1 ? "bg-indigo-500" : "bg-indigo-400",
  }))

  return (
    <>
      {points.map((point) => (
        <div
          key={point.id}
          className={`absolute rounded-full ${point.color} opacity-0`}
          style={{
            left: point.startX,
            top: point.startY,
            width: point.size,
            height: point.size,
            animation: `float-data-point ${point.duration}s infinite ${point.delay}s`,
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes float-data-point {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translate(${points[0].endX - points[0].startX}px, ${points[0].endY - points[0].startY}px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
