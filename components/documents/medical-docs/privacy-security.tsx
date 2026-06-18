"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileText, Database } from "lucide-react"

export default function PrivacySecurity() {
  const securityFeatures = [
    {
      icon: <Shield className="h-10 w-10 text-indigo-700" />,
      title: "HIPAA Compliance",
      description: "End-to-end compliance with all HIPAA requirements for PHI handling, storage, and transmission.",
    },
    {
      icon: <Lock className="h-10 w-10 text-indigo-700" />,
      title: "Data Encryption",
      description:
        "AES-256 encryption for data at rest and TLS 1.3 for data in transit. Zero-knowledge architecture available.",
    },
    {
      icon: <FileText className="h-10 w-10 text-indigo-700" />,
      title: "Audit Logs",
      description: "Comprehensive audit trails for all document access, processing, and user interactions.",
    },
    {
      icon: <Database className="h-10 w-10 text-indigo-700" />,
      title: "Data Retention Controls",
      description: "Configurable retention policies with automatic purging to meet compliance requirements.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
              Privacy & Security
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We prioritize the security and privacy of sensitive medical information with enterprise-grade protections.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-indigo-700">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <HIPAAShieldAnimation />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Our Commitment to Data Security</h3>
              <p className="text-gray-600 mb-4">
                DocsAPI's medical document OCR platform is built with security as a foundational principle. Our
                infrastructure undergoes regular penetration testing and security audits to ensure the highest level of
                protection for sensitive patient information.
              </p>
              <p className="text-gray-600">
                We maintain compliance with HIPAA, HITECH, SOC 2 Type II, and other relevant healthcare data security
                standards. Our platform can be deployed in your private cloud or on-premises environment for maximum
                control over sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HIPAAShieldAnimation() {
  return (
    <div className="relative w-40 h-40">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M80 8L144 32V72C144 106.64 117.44 138.4 80 152C42.56 138.4 16 106.64 16 72V32L80 8Z"
            fill="#EEF2FF"
            stroke="#4338CA"
            strokeWidth="4"
          />
          <motion.path
            d="M80 24L128 42V72C128 98.64 107.44 123.4 80 134C52.56 123.4 32 98.64 32 72V42L80 24Z"
            fill="#EEF2FF"
            stroke="#4338CA"
            strokeWidth="2"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
          <text x="80" y="85" textAnchor="middle" fill="#4338CA" fontWeight="bold" fontSize="14">
            HIPAA
          </text>
          <text x="80" y="105" textAnchor="middle" fill="#4338CA" fontWeight="bold" fontSize="14">
            COMPLIANT
          </text>
        </svg>
      </motion.div>

      {/* Animated dots around the shield */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-indigo-500"
          initial={{
            x: 80 + 70 * Math.cos((i * Math.PI) / 3),
            y: 80 + 70 * Math.sin((i * Math.PI) / 3),
            opacity: 0,
          }}
          animate={{
            x: [
              80 + 70 * Math.cos((i * Math.PI) / 3),
              80 + 60 * Math.cos((i * Math.PI) / 3),
              80 + 70 * Math.cos((i * Math.PI) / 3),
            ],
            y: [
              80 + 70 * Math.sin((i * Math.PI) / 3),
              80 + 60 * Math.sin((i * Math.PI) / 3),
              80 + 70 * Math.sin((i * Math.PI) / 3),
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
