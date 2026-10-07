import type { Metadata } from "next"
import ArchivingHero from "@/components/use-cases/digital-archiving/archiving-hero"
import ArchivingChallenges from "@/components/use-cases/digital-archiving/archiving-challenges"
import FeaturesOverview from "@/components/use-cases/digital-archiving/features-overview"
import WorkflowVisualization from "@/components/use-cases/digital-archiving/workflow-visualization"
import BusinessBenefits from "@/components/use-cases/digital-archiving/business-benefits"
import DemoAnimation from "@/components/use-cases/digital-archiving/demo-animation"
import ArchivingFaq from "@/components/use-cases/digital-archiving/archiving-faq"
import ArchivingCta from "@/components/use-cases/digital-archiving/archiving-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"

const PATH = "/use-cases/digital-archiving"
const TITLE = "Digital Archiving OCR: Search Every Document"
const DESCRIPTION =
  "Convert paper and scanned archives into searchable, structured data with AI-powered OCR, at about 1.1 seconds per page in our 2026 benchmark."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "Digital archiving is the process of converting paper and scanned document archives into searchable, structured digital records. The difference between scanning a document and digitally archiving it is OCR: a scan is a picture nobody can search, while an OCR-processed archive lets you find any document by its content in seconds. This page explains how digital archiving with OCR works, why organizations do it, and how to run a large backfile conversion without losing data or blowing the budget.",
  sections: [
    {
      heading: "Why scanning is not the same as digital archiving",
      paragraphs: [
        "Most organizations that 'went paperless' actually just went to PDF: they scanned their filing cabinets into image files and stored them on a drive. Those files are pictures. You cannot search them, extract data from them, or feed them into another system. When someone needs the 2019 contract with a specific vendor, they still open folders one at a time, which is the same problem the filing cabinet had, just with more mouse-clicking.",
        "Digital archiving with OCR closes that gap. It reads every scanned page, converts the images into searchable text, and often extracts key metadata (document type, dates, parties, reference numbers) so the archive becomes a queryable database. A 30-year backfile that used to take hours to search becomes a full-text search that returns results in seconds, and the extracted metadata drives retention schedules and compliance workflows automatically.",
      ],
    },
    {
      heading: "Why organizations digitally archive",
      paragraphs: [
        "The drivers are search, compliance, space, and risk. Search is the everyday win: staff find documents in seconds instead of hours. Compliance is the regulatory win: many industries must retain records for years and produce them on demand, and a searchable archive with documented retention is far easier to defend in an audit than a room of boxes. Space is the operational win: physical storage costs money and floor space that a digital archive eliminates.",
        "Risk is the win nobody thinks about until it happens. Paper archives are destroyed by floods, fires, and simple misfiling. A digitally archived, backed-up record survives all three. Law firms with decades of case files, banks with years of loan documents, hospitals with patient records, and government agencies with permanent records all archive digitally because losing the record is not an option.",
      ],
    },
    {
      heading: "How to run a large backfile conversion",
      paragraphs: [
        "Start with a document inventory: what types of documents you have, how many, and their condition, since faded or damaged pages need different handling. Then choose the scanning and OCR approach that matches your volume and quality needs, and always run a sample batch first to measure OCR accuracy on your actual documents before committing to the full conversion. A pilot of a few hundred representative documents tells you whether the accuracy will hold across the archive.",
        "The step teams skip is validation. OCR on old, faded, or handwritten archives is never perfect, so build a review pass for low-confidence extractions and a quality-control sample check across the batch. And index for the searches you will actually run: if people will search by vendor, date, and document type, make sure those fields are extracted and indexed, because a full-text search alone is far less useful than structured metadata for retrieval.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is digital archiving?",
      answer:
        "Digital archiving is the process of converting paper and scanned document archives into searchable, structured digital records using OCR. Unlike simple scanning, which produces image files nobody can search, digital archiving reads the content, converts it to searchable text, and extracts key metadata so the archive becomes a queryable database.",
    },
    {
      question: "How is digital archiving different from scanning?",
      answer:
        "Scanning produces image files, essentially pictures of documents, that cannot be searched or have their data extracted. Digital archiving adds OCR, which converts those images into searchable text and structured metadata. The difference is the ability to find any document by its content in seconds instead of opening folders one at a time.",
    },
    {
      question: "How accurate is OCR on old archived documents?",
      answer:
        "On clean printed documents, 97% to 99% character accuracy in our 2026 benchmark. Faded, damaged, or multi-generation photocopies score lower, and handwriting lower still: the same benchmark measured 78% on handwritten forms. This is why a large backfile conversion needs a validation pass for low-confidence extractions and a quality-control sample check, rather than trusting the raw OCR output.",
    },
    {
      question: "How do I run a large document backfile conversion?",
      answer:
        "Start with a document inventory, run a sample batch to measure OCR accuracy on your real documents, then scale the conversion with a validation pass for low-confidence pages. Index for the searches you will actually run (vendor, date, document type) rather than relying on full-text search alone, and keep backups so the digital archive is more durable than the paper it replaces.",
    },
  ],
}

export default function DigitalArchivingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-10-06" />
      <ArchivingHero />
      <ArchivingChallenges />
      <FeaturesOverview />
      <WorkflowVisualization />
      <BusinessBenefits />
      <DemoAnimation />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} />
      <ArchivingFaq />
      <ArchivingCta />
    </main>
  )
}
