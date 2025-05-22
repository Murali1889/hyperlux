"use client"
import { motion } from "framer-motion"

// Add custom scrollbar styling
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c7d2fe;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #818cf8;
  }
`

export default function HowItWorks() {
  const steps = [
    {
      title: "Secure Upload or API Ingestion",
      description:
        "Submit documents via secure web portal or direct API integration. Supports PDFs, images, and scanned documents with end-to-end encryption.",
      icon: "🔒",
    },
    {
      title: "AI Extraction of Handwritten and Printed Text",
      description:
        "Our specialized medical OCR engine processes both typed and handwritten text, recognizing medical terminology and specialized notation.",
      icon: "🔍",
    },
    {
      title: "Data Validation & Error Correction Interface",
      description:
        "Optional human-in-the-loop validation for critical fields. AI-powered suggestions help resolve low-confidence extractions quickly.",
      icon: "✓",
    },
    {
      title: "Integration with EHR and Billing Systems",
      description:
        "Structured data is delivered to your systems via API, FHIR integration, or direct database connection. Compatible with all major EHR platforms.",
      icon: "🔄",
    },
  ]

  // Add scrollbar styles
  return (
    <>
      <style jsx global>
        {scrollbarStyles}
      </style>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
                How It Works
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our end-to-end process transforms medical documents into structured, actionable data in seconds.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-indigo-700 mb-2">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative h-[500px] bg-white rounded-xl shadow-lg p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white z-0"></div>
                <div className="relative h-full overflow-y-auto pr-2 custom-scrollbar z-10">
                  <MedicalDocumentPipeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function MedicalDocumentPipeline() {
  const documents = [
    { type: "Prescription", color: "#4338ca", icon: "💊" },
    { type: "Lab Report", color: "#6366f1", icon: "🧪" },
    { type: "Insurance", color: "#818cf8", icon: "📄" },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-start pb-6">
      {/* Pipeline stages */}
      <div className="w-full max-w-md">
        {/* Stage 1: Document Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-4 mb-12 relative"
        >
          <h4 className="text-lg font-bold text-indigo-700 mb-2">Document Ingestion</h4>
          <div className="flex space-x-2 mb-2">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="w-16 h-20 rounded border-2 border-gray-200 flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${doc.color}15` }}
              >
                {doc.icon}
              </motion.div>
            ))}
          </div>
          <div className="h-1 bg-indigo-100 w-full rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            />
          </div>

          {/* Connector */}
          <motion.div
            className="absolute left-1/2 -bottom-8 w-1 h-8 bg-indigo-300"
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.div>

        {/* Stage 2: OCR Processing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-4 mb-12 relative"
        >
          <h4 className="text-lg font-bold text-indigo-700 mb-2">AI OCR Processing</h4>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-gray-50 rounded p-2 text-xs font-mono overflow-hidden">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
                <span className="text-indigo-600">Patient:</span> John Doe
                <br />
                <span className="text-indigo-600">DOB:</span> 05/12/1980
                <br />
                <span className="text-indigo-600">Rx:</span> Amoxicillin
                <br />
                <span className="text-indigo-600">Dosage:</span> 500mg
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.8],
                  rotate: [-10, 0, 0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  times: [0, 0.2, 0.8, 1],
                }}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl">💊</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.8],
                  rotate: [-10, 0, 0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  delay: 1,
                  times: [0, 0.2, 0.8, 1],
                }}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl">🧪</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.8],
                  rotate: [-10, 0, 0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  delay: 2,
                  times: [0, 0.2, 0.8, 1],
                }}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl">📄</span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="h-1 bg-indigo-100 w-full rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 1 }}
            />
          </div>

          {/* Connector */}
          <motion.div
            className="absolute left-1/2 -bottom-8 w-1 h-8 bg-indigo-300"
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
        </motion.div>

        {/* Stage 3: Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="bg-white rounded-lg shadow-lg p-4 mb-12 relative"
        >
          <h4 className="text-lg font-bold text-indigo-700 mb-2">Validation & Integration</h4>
          <div className="flex items-center justify-between mb-2">
            <motion.div
              className="flex items-center"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Validated</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, duration: 0.5, type: "spring" }}
              className="flex items-center justify-center w-16 h-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <span className="text-sm">EHR</span>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
          <div className="h-1 bg-indigo-100 w-full rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 2 }}
            />
          </div>

          {/* Connector */}
          <motion.div
            className="absolute left-1/2 -bottom-8 w-1 h-8 bg-indigo-300"
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          />
        </motion.div>

        {/* Stage 4: Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="bg-white rounded-lg shadow-lg p-4 relative"
        >
          <h4 className="text-lg font-bold text-indigo-700 mb-2">Clinical Insights</h4>
          <div className="flex justify-between items-center">
            <motion.div
              className="w-24 h-24"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#EEF2FF" />
                <motion.path
                  d="M50 10 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#4338CA"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.75 }}
                  transition={{ delay: 3.2, duration: 1.5 }}
                />
                <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#4338CA">
                  75%
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="flex flex-col items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.5 }}
            >
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs">Completed</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-xs">In Progress</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-xs">Pending</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [-20, 0, 0, -20],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
          times: [0, 0.1, 0.9, 1],
        }}
      >
        <div className="text-4xl">🔍</div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, 20],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
          delay: 1,
          times: [0, 0.1, 0.9, 1],
        }}
      >
        <div className="text-4xl">📊</div>
      </motion.div>
    </div>
  )
}
