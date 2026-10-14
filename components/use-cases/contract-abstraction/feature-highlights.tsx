"use client"

import { motion } from "framer-motion"
import { FileSearch, Calendar, Shield, Link2 } from "lucide-react"

const features = [
  {
    icon: <FileSearch className="h-8 w-8 text-indigo-600" />,
    title: "Clause and field extraction",
    description:
      "Pulls parties, payment terms, termination and renewal provisions, and liability limitations out of contract text and returns them as JSON fields. Each clause carries a confidence score, so your legal team can see which extractions are solid and which need a lawyer to look.",
    tags: ["JSON output", "Confidence scores", "Clause fields"],
  },
  {
    icon: <Calendar className="h-8 w-8 text-indigo-600" />,
    title: "Key date fields",
    description:
      "Effective, renewal, notice, and expiry dates come back as date fields instead of sentences buried on page 47. Your contract system or calendar can then send the reminders; DocsAPI supplies the dates it reads, and flags any it is unsure about.",
    tags: ["Renewal dates", "Notice periods", "Flagged when unsure"],
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Handling of sensitive contracts",
    description:
      "DocsAPI is SOC 2 Type II and ISO 27001 certified, and HIPAA-eligible with a BAA. Customer documents are not used to train models, and documents and extracted data are kept only for a short, configurable retention period. DocsAPI runs as a cloud API, so if your contracts must stay inside your own environment, raise it at the demo.",
    tags: ["SOC 2 Type II", "ISO 27001", "No training on your documents"],
  },
  {
    icon: <Link2 className="h-8 w-8 text-indigo-600" />,
    title: "Output for your contract system",
    description:
      "Extracted data is returned through the API as structured JSON that you load into your contract repository or lifecycle management tool. We do not list named integrations; the output is plain JSON, so your team maps the fields into whichever system you use.",
    tags: ["API", "Structured JSON", "Your repository"],
  },
]

export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Feature Highlights</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-powered contract abstraction solution transforms how legal teams analyze, manage, and leverage their
            contract portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-lg p-3 mr-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              </div>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
