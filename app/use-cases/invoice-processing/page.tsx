import type { Metadata } from "next"
import InvoiceHero from "@/components/use-cases/invoice-processing/invoice-hero"
import ManualChallenges from "@/components/use-cases/invoice-processing/manual-challenges"
import FeaturesOverview from "@/components/use-cases/invoice-processing/features-overview"
import WorkflowDiagram from "@/components/use-cases/invoice-processing/workflow-diagram"
import BusinessImpact from "@/components/use-cases/invoice-processing/business-impact"
import DemoAnimation from "@/components/use-cases/invoice-processing/demo-animation"
import InvoiceFaq from "@/components/use-cases/invoice-processing/invoice-faq"
import InvoiceCta from "@/components/use-cases/invoice-processing/invoice-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"

const PATH = "/use-cases/invoice-processing"
const TITLE = "Invoice Processing OCR: Cut AP Time 80% With AI"
const DESCRIPTION =
  "Automate invoice data capture, three-way match, and AP approval. 99% extraction accuracy. From $14 to $2.70 per invoice in production."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "Invoice processing is the workflow that takes an incoming vendor invoice from arrival to a paid, reconciled entry in your accounting system. Done manually, it costs $10 to $20 per invoice and takes days. Done with invoice processing OCR, it costs $2 to $4 and takes minutes. This page explains how automated invoice processing works, what it saves, and how to move your accounts payable team from manual data entry to a touchless pipeline.",
  sections: [
    {
      heading: "How automated invoice processing works",
      paragraphs: [
        "Automated invoice processing runs a six-step pipeline. The invoice arrives by email, portal, or upload. Pre-processing corrects rotation and contrast so the document is readable. Layout-aware OCR reads the invoice with an invoice-specific understanding of where the vendor, line items, tax, and total sit. Field extraction pulls those values into structured data. Validation reconciles the line-item sum against the stated total and matches the invoice to its purchase order. Anything the system is not confident about routes to a human review queue with the uncertain fields highlighted.",
        "The step that separates a working system from a demo is layout-aware OCR combined with validation. Generic OCR reads an invoice left to right and scrambles the line-item table, which produces data nobody can use. Validation is what turns extraction into trust: if the extracted total does not reconcile with the line items, or the invoice number collides with one already paid, the system flags it before payment rather than after.",
      ],
    },
    {
      heading: "What invoice processing OCR saves",
      paragraphs: [
        "The headline number is per-invoice cost, which typically drops 75% to 85%, from around $14 fully loaded to around $2.70. But the compounding value is in three places: labor, because data-entry hours disappear; speed, because a two-day close replaces an eight-day one; and errors, because fewer duplicate payments and late fees mean cleaner vendor relationships. A team processing 2,000 or more invoices a month usually sees the investment pay back within a quarter.",
        "The larger strategic win is redeploying the accounts payable team. When the routine keying disappears, the same people move to vendor management, cash-flow forecasting, and month-end close acceleration. The team stops being the bottleneck for routine document work and starts doing the analysis that finance leaders actually want from them.",
      ],
    },
    {
      heading: "How to roll out invoice OCR without disruption",
      paragraphs: [
        "The safe rollout starts narrow. Pick your top five vendors, which usually account for around 40% of volume, and run the OCR pipeline in parallel with your existing manual process for 30 days. Compare the outputs, tune the exception queue against real errors, then cut those five vendors over to touchless processing before expanding vendor by vendor. Full cutover on day one fails more often than it succeeds because one edge case can block all payments.",
        "The most underrated deliverable is the exception review queue. Even at 80% touchless, one in five invoices needs a human pass, and without a structured queue that pre-highlights the uncertain fields, those invoices pile up in someone's inbox and the team loses trust in the automation. Design the queue before you design the extraction, and cap vendor expansion at whatever the queue can clear within its daily service level.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is invoice processing OCR?",
      answer:
        "Invoice processing OCR is software that reads incoming vendor invoices and converts them into structured data (vendor, invoice number, purchase order, line items, tax, total, due date) that flows directly into your accounts payable system. Unlike generic OCR, it understands invoice layouts, validates totals against line items, matches to purchase orders, and routes low-confidence invoices to human review.",
    },
    {
      question: "How much does invoice OCR reduce cost?",
      answer:
        "Typically 75% to 85%. Manual invoice processing runs $10 to $20 fully loaded per invoice; automated processing runs $2 to $4. One accounts payable team moved from $14 to $2.70 per invoice in 90 days. Payback is usually under one quarter for teams processing 2,000 or more invoices a month.",
    },
    {
      question: "What is touchless invoice processing?",
      answer:
        "Touchless processing is the share of invoices that flow from arrival to payment without any human review. Modern layout-aware OCR reaches 60% to 80% touchless on repeat-vendor invoices and 30% to 50% on first-time vendors. Touchless rate is the number that most directly drives accounts payable cost.",
    },
    {
      question: "How long does an invoice OCR rollout take?",
      answer:
        "For a single accounting integration with a turn-key tool, two to four weeks. For a custom pipeline across multiple ERPs, six to twelve weeks. The slow part is never the OCR itself; it is the validation rules, the exception queue, and the integration into your accounting system.",
    },
  ],
}

export default function InvoiceProcessingPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
    <main className="flex flex-col min-h-screen">
      <InvoiceHero />
      <ManualChallenges />
      <FeaturesOverview />
      <WorkflowDiagram />
      <BusinessImpact />
      <DemoAnimation />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} />
      <InvoiceFaq />
      <InvoiceCta />
    </main>
    </>
  )
}
