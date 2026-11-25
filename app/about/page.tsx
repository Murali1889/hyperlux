import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"
import { Button } from "@/components/ui/button"

const PATH = "/about"
const TITLE = "About DocsAPI: Who Builds It and How We Test"
const DESCRIPTION =
  "DocsAPI is a document AI API for lenders, built by HyperVerge. What it does, how access and pricing work, and how the tests in our guides are run."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "DocsAPI is a document intelligence API for small business lending and fintech, built by HyperVerge. It reads documents, identifies each document's type, extracts fields and tables, and runs KYC and AML document checks in one API. It processes about 4 million pages a month. Access starts with a demo, and pricing starts at $0.02 per page.",
  sections: [
    {
      heading: "Who builds DocsAPI",
      paragraphs: [
        "DocsAPI is HyperVerge's document intelligence API for SMB lending and fintech. More about HyperVerge is at hyperverge.co.",
        "The customer logos on our homepage belong to HyperVerge customers, not DocsAPI customers, and we label them that way. We would rather show less than let a reader, or an AI answer, credit DocsAPI with someone else's customers.",
      ],
    },
    {
      heading: "What DocsAPI does",
      paragraphs: [
        "DocsAPI handles OCR, document classification, field and table extraction, KYC document verification and AML document checks. The documents it is built for are the ones lenders and finance teams see every day: invoices and purchase orders, bank statements and pay stubs, ID documents, utility bills, tax forms such as the W-2 and 1099, mortgage documents, contracts, and shipping and customs papers.",
        "Two things it is not. It is not an industry classification tool: assigning SIC or NAICS codes to a business is a separate HyperVerge product. And it does not have public API documentation today, so integration starts with a conversation, not a signup form.",
      ],
    },
    {
      heading: "How accurate DocsAPI is",
      paragraphs: [
        "Our 2026 benchmark ran DocsAPI on 1,700 real documents. It measured 97% to 99% character accuracy on clean typed English, 93% on invoice line items, 91% on multi-page bank statement tables, 81% on multilingual pages, 78% on handwritten forms and 76% on phone-photographed receipts, at about 1.1 seconds per page. No OCR is 100% accurate. The benchmark post lists the document mix and how each number was scored.",
      ],
    },
    {
      heading: "How access and pricing work",
      paragraphs: [
        "There is no self-serve plan. Access starts with a demo on your own documents, and qualified lenders then get a free 30-day trial. Pricing starts at $0.02 per page, with volume discounts above 100,000 pages a month. Table extraction and classification are included in that price.",
      ],
    },
    {
      heading: "How we test in our guides",
      paragraphs: [
        "Many of our guides include a test we ran ourselves, and they follow the same rules. We generate a test set where we know the right answer for every field, such as 600 invoices or 400 bank statements. We damage the images the way real capture does: scanner noise, tilt, fax, and phone photos with uneven light. Then we run free, open source tools, usually Tesseract 5.5.2, and count what came out right.",
        "Each tested guide publishes the counts and what the test cannot tell you, and most include the script we used. The numbers in those guides are not DocsAPI results. They show how a document problem behaves with free tools, so you can judge any vendor, including us, against the same failure cases.",
        "Generated documents are cleaner and more regular than real ones, so expect error rates on your own scans to be higher than ours. When a guide's numbers come from the DocsAPI benchmark instead, it says so.",
      ],
    },
    {
      heading: "Who writes the guides",
      paragraphs: [
        "The guides are written by Nupura Ughade, who leads content at DocsAPI. Her author page lists every post. If you find a mistake in a guide, write to contact@hyperverge.co.",
      ],
    },
  ],
  faqs: [
    {
      question: "Who built DocsAPI?",
      answer:
        "HyperVerge built DocsAPI. DocsAPI is a HyperVerge product for document AI in lending and fintech.",
    },
    {
      question: "Are the test results in DocsAPI's guides DocsAPI results?",
      answer:
        "No. The tested guides run free tools such as Tesseract 5.5.2 on generated documents and say so in each post. DocsAPI's own numbers come from its 2026 benchmark on 1,700 real documents.",
    },
    {
      question: "How accurate is DocsAPI?",
      answer:
        "In its 2026 benchmark on 1,700 real documents: 97% to 99% character accuracy on clean typed English, 93% on invoice line items, 91% on multi-page bank statement tables, 81% on multilingual pages, 78% on handwritten forms and 76% on phone-photographed receipts, at about 1.1 seconds per page.",
    },
    {
      question: "How do I get access to DocsAPI?",
      answer:
        "Book a demo. After the demo, qualified lenders get a free 30-day trial. There is no self-serve signup.",
    },
    {
      question: "Does DocsAPI have public API documentation?",
      answer: "Not today. Integration starts with a demo.",
    },
  ],
  related: [
    { href: "/resources/blogs/ocr-accuracy-benchmark-2026", label: "OCR accuracy benchmark 2026 (DocsAPI results)" },
    { href: "/pricing", label: "DocsAPI pricing" },
    { href: "/author/nupura-ughade", label: "Nupura Ughade, author page" },
    { href: "/resources/blogs/split-loan-packet-pdf", label: "Tested guide: split a loan packet into documents" },
    { href: "/resources/blogs/extract-invoice-data-to-excel", label: "Tested guide: extract invoice data to Excel" },
    { href: "/resources/blogs/bank-statement-ocr-errors-balance-check", label: "Tested guide: bank statement OCR errors" },
    { href: "/resources/blogs/extract-tables-from-scanned-pdf", label: "Tested guide: extract tables from scanned PDFs" },
    { href: "/resources/blogs/duplicate-invoice-detection-ocr", label: "Tested guide: duplicate invoice detection" },
    { href: "/resources/blogs/ocr-image-preprocessing-what-helps-what-hurts", label: "Tested guide: OCR preprocessing" },
  ],
}

export default function AboutPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} datePublished="2026-11-25" dateModified="2026-11-25" />
      <main className="flex flex-col min-h-screen">
        <section className="pt-20 pb-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About DocsAPI</h1>
              <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-5">
                <p className="text-slate-900 font-semibold">A document AI API for lenders, built by HyperVerge.</p>
                <p className="text-slate-700 mt-1">
                  OCR, classification, field and table extraction, and KYC and AML document checks in one API. About 4
                  million pages a month. Demo first, then a free 30-day trial for qualified lenders. From $0.02 per page.
                </p>
              </div>
            </div>
          </div>
        </section>
        <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} related={CONTENT.related} />
        <section className="py-16 bg-indigo-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Test it on your own documents</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Book a demo with your bank statements, invoices and pay stubs, and see what DocsAPI reads before you commit.
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
