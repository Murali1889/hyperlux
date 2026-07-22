import type { Metadata } from "next"
import ContractHero from "@/components/use-cases/contract-abstraction/contract-hero"
import ManualReviewChallenges from "@/components/use-cases/contract-abstraction/manual-review-challenges"
import FeatureHighlights from "@/components/use-cases/contract-abstraction/feature-highlights"
import WorkflowDiagram from "@/components/use-cases/contract-abstraction/workflow-diagram"
import BusinessImpact from "@/components/use-cases/contract-abstraction/business-impact"
import DemoVideo from "@/components/use-cases/contract-abstraction/demo-video"
import ContractFaq from "@/components/use-cases/contract-abstraction/contract-faq"
import ContractCta from "@/components/use-cases/contract-abstraction/contract-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"

const PATH = "/use-cases/contract-abstraction"
const TITLE = "Contract Abstraction AI: Extract Clauses & Dates"
const DESCRIPTION =
  "Extract key clauses, dates, parties, and obligations from contracts automatically. Save hours of legal review per agreement."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "Contract abstraction is the process of pulling the key commercial and legal data points out of a contract so a team can track them without re-reading the full agreement. The data that matters (parties, effective and renewal dates, payment terms, obligations, liability caps, and auto-renewal triggers) hides in dense legal prose that can run 60 pages. Contract abstraction AI reads that prose, locates the clauses regardless of how they are worded, and turns them into structured, searchable, alertable data. This page explains how it works and where it saves the most time and money.",
  sections: [
    {
      heading: "Why contract abstraction is different from invoice extraction",
      paragraphs: [
        "An invoice is a structured form: the total sits in roughly the same place every time. A contract is unstructured legal prose, where a termination clause might appear on page 3 or page 47, phrased as 'either party may terminate,' 'this agreement shall cease,' or 'upon 30 days written notice.' Contract abstraction needs layout-aware OCR to read the document plus a language-understanding layer, increasingly LLM-based, to locate and normalize each clause no matter how it is written or where it sits.",
        "That second layer is what makes contract abstraction hard and valuable. Well-structured clauses like effective dates and party names extract at 95% or better. Nuanced clauses like liability caps and complex renewal conditions land closer to 85% to 90% because the legal language is genuinely ambiguous. The practical result is that contract abstraction accelerates legal review by 60% to 80% rather than replacing it: it surfaces the clauses for a human to confirm on the agreements that matter.",
      ],
    },
    {
      heading: "Where contract abstraction pays off most",
      paragraphs: [
        "The biggest single win is preventing the unwanted auto-renewal. Organizations routinely re-sign contracts they meant to cancel because the renewal-notice deadline was buried in a clause nobody re-read. Extracting renewal and termination dates across a portfolio, then feeding them into a contract management system that alerts before each deadline, usually pays for the whole project on its own.",
        "The second is contract lifecycle management intake: bulk-importing thousands of legacy contracts into a searchable database instead of a document dump. The third is mergers and acquisitions diligence, where an acquirer must review a target's entire contract portfolio for change-of-control clauses and material obligations in weeks. In each case, abstraction turns a stack of PDFs into a queryable dataset the business can actually act on.",
      ],
    },
    {
      heading: "How to roll out contract abstraction",
      paragraphs: [
        "Start narrow. Pick one contract type with consistent structure, such as your standard vendor master service agreements, and extract the five highest-value fields first: parties, effective date, renewal or termination date, contract value, and notice period. Validate the extraction against a human-reviewed sample of 20 to 30 contracts, then feed the results into your contract management system so the extracted dates drive alerts before you expand to more contract types and more clauses.",
        "Trying to extract everything from every contract type at once fails because contract language variety is enormous. Narrow first, prove accuracy on the fields that matter most, then widen the coverage once the core extraction is reliable. The renewal date alone justifies most projects, so lead with it.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is contract abstraction?",
      answer:
        "Contract abstraction is the process of extracting the key commercial and legal data points from a contract (parties, dates, payment terms, obligations, liability caps, auto-renewal triggers) so a team can track them without re-reading the full agreement. Contract abstraction AI reads the legal prose, locates each clause regardless of wording, and produces structured, searchable data.",
    },
    {
      question: "How accurate is automated contract abstraction?",
      answer:
        "It depends on the clause. Well-structured clauses like effective dates and party names extract at 95% or better. Nuanced clauses like liability caps and complex renewal conditions land at 85% to 90% because the legal language is genuinely ambiguous. Contract abstraction accelerates legal review by 60% to 80% rather than replacing it on high-value agreements.",
    },
    {
      question: "What does contract abstraction extract?",
      answer:
        "Five groups of data: parties and signatories; key dates (effective, renewal, termination, expiration); financial terms (value, payment schedule, escalation); obligations and deliverables; and risk clauses (liability caps, indemnification, governing law, auto-renewal triggers). Missing any of these across a large portfolio is where money leaks.",
    },
    {
      question: "How does contract abstraction prevent unwanted auto-renewals?",
      answer:
        "By extracting renewal and termination-notice dates from every contract and feeding them into a contract management system that alerts before each deadline. This prevents the common and expensive mistake of auto-renewing a contract you meant to cancel because the notice deadline was buried in a clause nobody re-read.",
    },
  ],
}

export default function ContractAbstractionPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
      <ContractHero />
      <ManualReviewChallenges />
      <FeatureHighlights />
      <WorkflowDiagram />
      <BusinessImpact />
      <DemoVideo />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} />
      <ContractFaq />
      <ContractCta />
    </main>
  )
}
