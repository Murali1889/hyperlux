"use client"

import { motion } from "framer-motion"
import { FileSearch, Calendar, Shield, Link2 } from "lucide-react"

const features = [
  {
    icon: <FileSearch className="h-8 w-8 text-indigo-600" />,
    title: "Clause extraction and classification",
    description:
      "Our AI engine automatically identifies and extracts over 50 common clause types including payment terms, termination conditions, renewal provisions, and liability limitations. The system classifies each clause by type, risk level, and enforceability, providing a comprehensive overview of contract obligations and rights. Legal teams can quickly search across thousands of contracts to find specific language or compare similar clauses across multiple agreements.",
    tags: ["NLP", "Machine Learning", "Legal Analysis"],
  },
  {
    icon: <Calendar className="h-8 w-8 text-indigo-600" />,
    title: "Key date detection and alerts",
    description:
      "Never miss another critical deadline with automated date extraction and proactive notifications. The system identifies important dates including renewal windows, termination rights, payment schedules, and compliance deadlines. Configurable alerts notify stakeholders at predetermined intervals before key dates, ensuring teams have adequate time to evaluate options and take appropriate action. Calendar integration allows for seamless incorporation of contract milestones into your existing workflow.",
    tags: ["Automated Alerts", "Calendar Integration", "Deadline Management"],
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Confidential data redaction",
    description:
      "Protect sensitive information with intelligent redaction capabilities that automatically identify and obscure confidential data. The system recognizes personally identifiable information (PII), financial details, and custom-defined sensitive content. Role-based access controls ensure that team members only see the information relevant to their function. All processing occurs within your secure environment, maintaining data sovereignty and compliance with privacy regulations like GDPR, CCPA, and industry-specific requirements.",
    tags: ["Data Privacy", "Compliance", "Security"],
  },
  {
    icon: <Link2 className="h-8 w-8 text-indigo-600" />,
    title: "Integration with contract management systems",
    description:
      "Seamlessly connect our contract abstraction engine with your existing contract lifecycle management (CLM) platform through our comprehensive API. Extracted data automatically populates your contract repository with structured metadata, eliminating manual data entry. The system works with leading CLM solutions including DocuSign CLM, Icertis, Agiloft, and Conga. Custom integrations are available for proprietary systems, ensuring a smooth implementation regardless of your current technology stack.",
    tags: ["API Integration", "CLM Compatibility", "Workflow Automation"],
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
