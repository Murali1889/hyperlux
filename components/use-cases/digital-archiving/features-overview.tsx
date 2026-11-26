"use client"

import { motion } from "framer-motion"
import { Upload, FileText, Search, ShieldCheck } from "lucide-react"

export default function FeaturesOverview() {
  const features = [
    {
      icon: <Upload className="w-10 h-10 text-indigo-600" />,
      title: "Bulk Document Ingestion and Indexing",
      description:
        "Ingest large batches of documents at once. Documents are sorted by type, source and date as they come in, with no manual filing. Support for batch uploads accelerates the transition from physical to digital archives.",
      tags: ["Batch Processing", "Auto-Categorization", "Scalable"],
    },
    {
      icon: <FileText className="w-10 h-10 text-indigo-600" />,
      title: "OCR with Metadata Tagging",
      description:
        "Scanned images and PDFs become searchable text. The system automatically extracts and tags key metadata fields specific to each document type, including dates, reference numbers, entities, and custom fields. Handwriting is read too, at 78% character accuracy on handwritten forms in our 2026 benchmark, so plan to check those pages.",
      tags: ["Text Extraction", "Auto-Tagging", "Handwriting Recognition"],
    },
    {
      icon: <Search className="w-10 h-10 text-indigo-600" />,
      title: "Full-Text and Field-Level Search",
      description:
        "Search the whole archive by field or by full text. Users can search by specific fields, full-text content, or combinations of criteria. Filter by date range, document type or your own metadata fields.",
      tags: ["Instant Retrieval", "Advanced Filtering", "Content Search"],
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
      title: "Audit Trails and Retention Policies",
      description:
        "Every access and change is logged for audits. Retention rules keep each document as long as required and delete it after. Role-based access means each person sees only the records they should.",
      tags: ["Compliance", "Data Lifecycle", "Access Control"],
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Features Overview</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            What the archive does, from intake to deletion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-5 p-3 bg-indigo-50 rounded-lg w-fit">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 mb-5 flex-grow">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
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
