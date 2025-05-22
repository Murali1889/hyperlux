"use client"

import { motion } from "framer-motion"
import { Search, Clock, ShieldAlert } from "lucide-react"

export default function ArchivingChallenges() {
  const challenges = [
    {
      icon: <Clock className="w-10 h-10 text-indigo-600" />,
      title: "Slow Manual Indexing",
      description:
        "Traditional document archiving relies on labor-intensive manual indexing, creating bottlenecks in your workflow. Staff spend hours categorizing and tagging documents instead of focusing on higher-value tasks, resulting in operational inefficiencies and increased labor costs.",
    },
    {
      icon: <Search className="w-10 h-10 text-indigo-600" />,
      title: "Difficulty Finding Documents Quickly",
      description:
        "Physical archives and poorly indexed digital repositories make document retrieval a frustrating, time-consuming process. Critical information gets buried in filing cabinets or scattered across disconnected systems, causing delays in decision-making and customer service responses.",
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-indigo-600" />,
      title: "Compliance Risk Due to Poor Records Management",
      description:
        "Inadequate archiving practices expose organizations to significant compliance and audit risks. Without proper document classification, retention policies, and audit trails, companies struggle to meet regulatory requirements, potentially facing penalties and reputation damage.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Challenges in Digital Archiving</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Organizations face significant hurdles when managing document archives without AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-100 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-5 p-3 bg-indigo-50 rounded-lg w-fit">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{challenge.title}</h3>
              <p className="text-slate-600 flex-grow">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
