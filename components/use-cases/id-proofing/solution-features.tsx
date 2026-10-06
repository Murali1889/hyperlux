"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function SolutionFeatures() {
  const features = [
    {
      title: "Advanced OCR Extraction",
      description:
        "Our AI-powered OCR technology accurately extracts data from machine-readable zones (MRZ), barcodes, and text fields on government IDs. The system processes multiple ID types including passports, driver licenses, and national ID cards from over 190 countries, with support for various languages and character sets.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      tags: ["MRZ Extraction", "Barcode Reading", "Multi-language Support"],
    },
    {
      title: "Biometric Face Matching",
      description:
        "Compare the photo on an ID document with a live selfie using advanced facial recognition algorithms. The match helps confirm the person presenting the ID is its rightful owner. Lighting and angle affect any face match, so borderline results go to a reviewer.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      tags: ["Facial Recognition", "Selfie Matching", "Anti-Spoofing"],
    },
    {
      title: "Liveness Detection",
      description:
        "Prevent presentation attacks with sophisticated liveness detection that distinguishes between a real person and photos, videos, or masks. Our passive liveness checks require no special actions from users while active challenges add an extra security layer when needed. The system detects sophisticated spoofing attempts including deepfakes.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      tags: ["Passive Liveness", "Deepfake Detection", "Presentation Attack Prevention"],
    },
    {
      title: "Fraud Detection & Alerts",
      description:
        "Identify suspicious patterns and potential fraud with our comprehensive risk scoring system. The platform checks for document tampering, inconsistencies across submitted documents, and matches against watchlists. Real-time alerts notify your team of high-risk applications that require additional review.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      tags: ["Tampering Detection", "Risk Scoring", "Watchlist Screening"],
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive ID Proofing Solution</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-powered platform combines multiple verification technologies to deliver fast, accurate identity
            verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-indigo-700 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
