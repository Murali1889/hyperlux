import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"
import { Button } from "@/components/ui/button"

const PATH = "/pricing"
const TITLE = "DocsAPI Pricing: From $0.02 per Page, Demo First"
const DESCRIPTION =
  "DocsAPI costs from $0.02 per page, with volume discounts above 100K pages a month. Access starts with a demo and a free 30-day trial for qualified lenders."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "DocsAPI costs from $0.02 per page. There is no self-serve plan: access starts with a demo, and qualified lenders then get a free 30-day trial. Volume discounts apply above 100,000 pages a month. Table extraction and document classification are included in the base price, so they do not add a line to the bill. Price last checked October 28, 2026.",
  sections: [
    {
      heading: "What you pay for",
      paragraphs: [
        "You pay per page processed, starting at $0.02. Reading the page, extracting its fields and tables, and classifying the document type all sit inside that one price. There is no separate charge for table extraction or for classification.",
        "Above 100,000 pages a month the per-page price drops. The exact volume steps are not published on this page. They are quoted in the demo, once we know your document mix and monthly volume.",
      ],
    },
    {
      heading: "How access works",
      paragraphs: [
        "Access starts with a demo on your own documents. After the demo, qualified lenders get a free 30-day trial. There is no self-serve signup, so you cannot start processing documents without talking to us first.",
        "We say this up front because it is a real tradeoff. If you want to sign up and send a test file in five minutes, a self-serve OCR API will be faster to start with. If you want your own bank statements, invoices and pay stubs tested before you commit, the demo and trial are built for that.",
      ],
    },
    {
      heading: "What this page does not tell you",
      paragraphs: [
        "Minimum commitments, contract terms and the exact discount steps are not published here. Ask for them in the demo. We would rather leave a number off the page than print one that does not apply to your volume.",
      ],
    },
    {
      heading: "How to work out your own cost",
      paragraphs: [
        "Multiply your monthly pages by the per-page price, then add the time your team still spends on the documents the system sends to review. The review time is usually the larger number, so it is worth measuring before you compare vendors. The accounts payable OCR guide has a fill-in cost model that does exactly this.",
        "Other vendors price per page, per document or per field, and the units are not interchangeable. The Textract comparison lists its full price per 1,000 pages with the source, and the invoice OCR pricing models guide explains how each pricing unit behaves as volume grows.",
      ],
    },
    {
      heading: "Security and data handling",
      paragraphs: [
        "Compliance covers SOC 2 Type II and ISO 27001, and DocsAPI is HIPAA-eligible with a Business Associate Agreement available on request. We do not train models on customer documents. Documents and extracted data are kept for a short, configurable retention period and then deleted.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does DocsAPI cost?",
      answer:
        "From $0.02 per page. Volume discounts apply above 100,000 pages a month. Table extraction and classification are included in the base price. Price last checked October 28, 2026.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, for qualified lenders. Access starts with a demo, and after the demo you get a free 30-day trial.",
    },
    {
      question: "Is there a self-serve plan?",
      answer:
        "No. Access starts with a demo. There is no self-serve signup.",
    },
    {
      question: "Do tables and document classification cost extra?",
      answer:
        "No. Table extraction and classification are included in the base per-page price.",
    },
    {
      question: "Are there volume discounts?",
      answer:
        "Yes, above 100,000 pages a month. The exact steps are quoted in the demo.",
    },
    {
      question: "Does DocsAPI train on my documents?",
      answer:
        "No. Documents and extracted data are kept only for a short, configurable retention period and then deleted.",
    },
  ],
  related: [
    { href: "/resources/blogs/accounts-payable-ocr", label: "Accounts payable OCR: how it works and what it costs" },
    { href: "/resources/blogs/aws-textract-vs-docsapi", label: "AWS Textract vs DocsAPI: full price list and limits" },
    { href: "/resources/blogs/invoice-ocr-pricing-models", label: "Invoice OCR pricing models compared" },
    { href: "/resources/blogs/best-ocr-software-for-accounts-payable", label: "Best OCR software for accounts payable" },
    { href: "/resources/blogs/ocr-accuracy-benchmark-2026", label: "OCR accuracy benchmark 2026" },
  ],
}

export default function PricingPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} datePublished="2026-10-28" dateModified="2026-10-28" />
      <main className="flex flex-col min-h-screen">
        <section className="pt-20 pb-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">DocsAPI pricing</h1>
              <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-5">
                <p className="text-slate-900 font-semibold">From $0.02 per page.</p>
                <p className="text-slate-700 mt-1">
                  Access starts with a demo, then a free 30-day trial for qualified lenders. Volume discounts above 100K
                  pages a month. Tables and classification are included.
                </p>
              </div>
            </div>
          </div>
        </section>
        <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} related={CONTENT.related} />
        <section className="py-16 bg-indigo-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">See it on your own documents</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Book a demo to test your bank statements, invoices and pay stubs and get a quote for your volume.
            </p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 text-base font-medium" asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
