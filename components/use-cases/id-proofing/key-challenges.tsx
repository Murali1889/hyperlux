"use client"

import { motion } from "framer-motion"

export default function KeyChallenges() {
  const challenges = [
    {
      title: "Slow Manual ID Checks",
      description:
        "Traditional identity verification requires staff to manually review documents, comparing photos and validating information. This process can take days, frustrating customers and delaying account openings. In competitive markets, these delays directly impact conversion rates and revenue.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Fraud and Synthetic ID Risks",
      description:
        "As identity theft techniques become more sophisticated, manual verification struggles to detect forged documents and synthetic identities. Human reviewers can miss subtle signs of tampering or inconsistencies across documents, leading to increased fraud losses and compliance violations.",
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
    },
    {
      title: "High Customer Drop-off Rates",
      description:
        "Complex verification processes with multiple steps and document uploads lead to significant customer abandonment. Every extra step in the verification flow gives people another reason to leave, which directly impacts customer acquisition costs and overall business growth.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Key Challenges in Identity Verification
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Organizations face significant hurdles when verifying customer identities, impacting onboarding, security,
            and compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-indigo-700">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
