"use client"

import { motion } from "framer-motion"
import { Clock, AlertTriangle, Files } from "lucide-react"

const challenges = [
  {
    icon: <Clock className="h-8 w-8 text-red-500" />,
    title: "Time-intensive clause review",
    description:
      "Legal professionals spend long hours manually reviewing contracts to identify key clauses, obligations, and potential risks. This tedious process creates bottlenecks in business operations and increases costs significantly.",
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
    title: "Missed renewals and deadlines",
    description:
      "Organizations frequently miss critical contract dates like auto-renewals, termination windows, and compliance deadlines. These oversights lead to unwanted contract extensions, missed opportunities for renegotiation, and potential legal penalties.",
  },
  {
    icon: <Files className="h-8 w-8 text-blue-500" />,
    title: "Difficulty in managing large contract volumes",
    description:
      "As businesses grow, contract volumes increase exponentially. Legal teams struggle to maintain visibility across thousands of agreements, making it nearly impossible to track obligations, identify risks, or leverage favorable terms across the contract portfolio.",
  },
]

export default function ManualReviewChallenges() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Challenges of Manual Contract Review</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Traditional contract review processes are fraught with inefficiencies that cost organizations time, money,
            and competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 border border-slate-200"
            >
              <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
