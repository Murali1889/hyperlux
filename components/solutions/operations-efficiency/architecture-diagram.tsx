"use client"

import { motion } from "framer-motion"

export default function ArchitectureDiagram() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Architecture</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Seamless integration with your existing systems for end-to-end document processing.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="min-w-[800px]">
            {" "}
            {/* Minimum width to prevent squishing */}
            <svg className="w-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid */}
              <rect width="800" height="400" fill="#F5F7FF" rx="8" />
              <path d="M0 20 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 60 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 100 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 140 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 180 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 220 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 260 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 300 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 340 H800" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M0 380 H800" stroke="#E2E8F0" strokeWidth="1" />

              <path d="M20 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M60 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M100 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M140 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M180 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M220 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M260 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M300 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M340 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M380 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M420 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M460 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M500 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M540 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M580 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M620 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M660 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M700 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M740 0 V400" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M780 0 V400" stroke="#E2E8F0" strokeWidth="1" />

              {/* WMS/OMS Box */}
              <rect x="100" y="150" width="120" height="100" rx="8" fill="#4338CA" />
              <text x="160" y="185" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                WMS/OMS
              </text>
              <text x="160" y="210" textAnchor="middle" fill="white" fontSize="12">
                Warehouse &
              </text>
              <text x="160" y="230" textAnchor="middle" fill="white" fontSize="12">
                Order Management
              </text>

              {/* OCR Box */}
              <rect x="340" y="150" width="120" height="100" rx="8" fill="#4338CA" />
              <text x="400" y="185" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                OCR API
              </text>
              <text x="400" y="210" textAnchor="middle" fill="white" fontSize="12">
                Document
              </text>
              <text x="400" y="230" textAnchor="middle" fill="white" fontSize="12">
                Processing
              </text>

              {/* ERP Box */}
              <rect x="580" y="100" width="120" height="80" rx="8" fill="#4338CA" />
              <text x="640" y="135" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                ERP
              </text>
              <text x="640" y="155" textAnchor="middle" fill="white" fontSize="12">
                Enterprise
              </text>
              <text x="640" y="175" textAnchor="middle" fill="white" fontSize="12">
                Resource Planning
              </text>

              {/* BI Box */}
              <rect x="580" y="220" width="120" height="80" rx="8" fill="#4338CA" />
              <text x="640" y="255" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                BI
              </text>
              <text x="640" y="275" textAnchor="middle" fill="white" fontSize="12">
                Business
              </text>
              <text x="640" y="295" textAnchor="middle" fill="white" fontSize="12">
                Intelligence
              </text>

              {/* Arrows */}
              {/* WMS to OCR */}
              <path d="M220 200 H340" stroke="#4338CA" strokeWidth="3" />
              <polygon points="335,195 345,200 335,205" fill="#4338CA" />

              {/* OCR to ERP */}
              <path d="M460 180 C520,180 520,140 580,140" stroke="#4338CA" strokeWidth="3" />
              <polygon points="575,135 585,140 575,145" fill="#4338CA" />

              {/* OCR to BI */}
              <path d="M460 220 C520,220 520,260 580,260" stroke="#4338CA" strokeWidth="3" />
              <polygon points="575,255 585,260 575,265" fill="#4338CA" />

              {/* Document Icons */}
              {/* POD */}
              <rect x="100" y="80" width="40" height="50" rx="4" fill="#C7D2FE" />
              <rect x="110" y="90" width="20" height="2" fill="#4338CA" />
              <rect x="110" y="100" width="20" height="2" fill="#4338CA" />
              <rect x="110" y="110" width="15" height="2" fill="#4338CA" />
              <path d="M110 120 H125 S130,125 125,130 H110 Z" fill="#4338CA" />
              <text x="120" y="70" textAnchor="middle" fill="#4338CA" fontSize="10">
                POD
              </text>

              {/* Packing Slip */}
              <rect x="160" y="80" width="40" height="50" rx="4" fill="#C7D2FE" />
              <rect x="170" y="90" width="20" height="2" fill="#4338CA" />
              <rect x="170" y="100" width="20" height="2" fill="#4338CA" />
              <rect x="170" y="110" width="15" height="2" fill="#4338CA" />
              <rect x="170" y="120" width="20" height="2" fill="#4338CA" />
              <text x="180" y="70" textAnchor="middle" fill="#4338CA" fontSize="10">
                Packing Slip
              </text>

              {/* Shipment Log */}
              <rect x="130" y="270" width="40" height="50" rx="4" fill="#C7D2FE" />
              <rect x="140" y="280" width="20" height="2" fill="#4338CA" />
              <rect x="140" y="290" width="20" height="2" fill="#4338CA" />
              <rect x="140" y="300" width="20" height="2" fill="#4338CA" />
              <rect x="140" y="310" width="15" height="2" fill="#4338CA" />
              <text x="150" y="340" textAnchor="middle" fill="#4338CA" fontSize="10">
                Shipment Log
              </text>

              {/* Data Flow Icons */}
              <circle cx="280" cy="200" r="15" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
              <text x="280" y="204" textAnchor="middle" fill="#4338CA" fontSize="14">
                →
              </text>

              <circle cx="520" cy="140" r="15" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
              <text x="520" y="144" textAnchor="middle" fill="#4338CA" fontSize="14">
                →
              </text>

              <circle cx="520" cy="260" r="15" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
              <text x="520" y="264" textAnchor="middle" fill="#4338CA" fontSize="14">
                →
              </text>

              {/* JSON Data */}
              <rect x="400" y="80" width="60" height="50" rx="4" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" />
              <text x="430" y="100" textAnchor="middle" fill="#4338CA" fontSize="10">
                {"{"}
              </text>
              <text x="430" y="110" textAnchor="middle" fill="#4338CA" fontSize="10">
                "data": {"{...}"}
              </text>
              <text x="430" y="120" textAnchor="middle" fill="#4338CA" fontSize="10">
                {"}"}
              </text>

              {/* Dashboard */}
              <rect x="640" y="320" width="60" height="40" rx="4" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" />
              <rect x="645" y="325" width="50" height="5" rx="1" fill="#4338CA" />
              <rect x="645" y="335" width="30" height="5" rx="1" fill="#4338CA" />
              <rect x="645" y="345" width="40" height="5" rx="1" fill="#4338CA" />
              <rect x="645" y="355" width="20" height="5" rx="1" fill="#4338CA" />
            </svg>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            className="bg-indigo-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Input Systems</h3>
            <p className="text-gray-700">
              Seamlessly connect with your WMS, OMS, and other supply chain management systems to ingest documents.
            </p>
          </motion.div>

          <motion.div
            className="bg-indigo-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Processing Engine</h3>
            <p className="text-gray-700">
              Our OCR API processes documents in real-time, extracting structured data with industry-leading accuracy.
            </p>
          </motion.div>

          <motion.div
            className="bg-indigo-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Output Integration</h3>
            <p className="text-gray-700">
              Extracted data flows directly into your ERP and BI systems for immediate action and analysis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
