import type { Metadata } from "next"
import Link from "next/link"
import OcrSelector from "@/components/tools/ocr-selector"
import { UseCaseContent } from "@/components/seo/use-case-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { JsonLd } from "@/components/json-ld/JsonLd"
import { SITE_URL, SITE_OG_IMAGE } from "@/lib/seo"

const PATH = "/tools/which-ocr"
const TITLE = "Which OCR Should I Use? Free Selector Tool"
const DESCRIPTION =
  "Answer six questions and get an OCR engine recommendation grounded in a benchmark of eight tools on 1,900 real documents. Free, honest, no signup."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "Choosing an OCR engine is confusing because every tool claims to be the most accurate, and those claims are almost always measured on clean documents nobody uses in production. This free selector asks six quick questions about your documents and points you at the engine that fits best, based on an independent benchmark of eight OCR tools run on 1,900 real, anonymized documents. It recommends open-source engines when they are the right call, because a tool that only ever recommends the vendor who built it is not worth trusting.",
  sections: [
    {
      heading: "How the recommendation works",
      paragraphs: [
        "The selector scores each engine against your answers across six dimensions: document type, document quality, language, whether you need raw text or validated structured fields, whether you want open-source or a hosted API, and your volume. Each answer shifts the score for the engines that handle that situation well and penalizes the ones that do not. For example, if you choose open-source deployment, the paid APIs drop out of contention entirely, because recommending a hosted API to someone who wants to self-host would be dishonest.",
        "The weights come from the OCR Accuracy Benchmark 2026, where eight engines were tested on real invoices, multi-page bank statements, receipts, academic papers, and handwritten forms, scored by category rather than on a single headline number. That per-category view is the whole point: there is no universal best OCR engine, only a best engine for a given document mix. The selector encodes those category winners so the recommendation reflects how the tools actually performed, not marketing claims.",
      ],
    },
    {
      heading: "Why there is no single best OCR engine",
      paragraphs: [
        "On clean printed English, almost every engine ties between 97 and 99 percent, so accuracy is not a useful tiebreaker there. The differences show up on harder inputs. Open-source PaddleOCR pulls ahead of Tesseract on messy phone photos, skewed scans, and Chinese, Japanese, and Korean scripts. Docling leads on academic PDFs where preserving layout and reading order matters. On multi-page bank statement tables, where a transaction table spans ten or more pages, the spread was widest of all, because most engines read each page independently and break row continuity across page boundaries.",
        "This is why the honest answer to which OCR should I use is always it depends, and why a short questionnaire beats a ranked list. A tool that is perfect for academic PDFs can be a poor fit for financial tables, and the reverse is equally true. The selector exists to turn it depends into a concrete shortlist you can actually test.",
      ],
    },
    {
      heading: "Always validate on your own documents",
      paragraphs: [
        "Treat the recommendation as a starting shortlist, not a verdict. The single most reliable step you can take is to pull fifty of your real production documents, including the messy ones, hand-key the correct answers, and run your top one or two candidates against that ground truth. It costs an afternoon and predicts production far better than any published benchmark, including ours.",
        "Score on the metric that maps to your workflow. If you extract specific values like an invoice total or an account number, measure field accuracy, not character accuracy. A tool can read 98 percent of characters correctly and still get the one field you cared about wrong. If you work with tables, measure row-level accuracy, because a table is only useful when whole rows are correct.",
      ],
    },
  ],
  faqs: [
    {
      question: "Which OCR engine is the most accurate?",
      answer:
        "There is no single most accurate OCR engine. On clean printed English, Tesseract, PaddleOCR, and the major cloud APIs all cluster between 97 and 99 percent. The differences appear on harder documents: PaddleOCR leads open-source options on messy and non-Latin inputs, Docling leads on academic PDFs, and purpose-built document APIs lead on multi-page financial tables. The best engine depends on your specific document mix.",
    },
    {
      question: "Is Tesseract good enough, or do I need a paid OCR API?",
      answer:
        "Tesseract is excellent and free for clean printed English text, and at low volume it is hard to beat. You start needing more when your documents get messy, span non-Latin scripts, contain multi-page tables, or when you need validated structured fields rather than raw text. At that point PaddleOCR is the stronger open-source choice, and a hosted document API makes sense if you also want extraction and validation without building it yourself.",
    },
    {
      question: "What is the difference between OCR and a document AI API?",
      answer:
        "OCR converts an image of text into machine-readable text. A document AI API runs the full pipeline on top of OCR: it classifies the document type, extracts specific fields, validates them (for example, checking that invoice totals reconcile), and returns structured, ready-to-use data with confidence scores. If you only need raw text, plain OCR is enough. If you need reliable field values, a document AI API saves you from building the extraction and validation layer yourself.",
    },
    {
      question: "Is this selector tool free?",
      answer:
        "Yes. The selector is free, requires no signup, and gives an honest recommendation, including open-source engines when they fit your needs best. It is based on an independent benchmark of eight OCR tools tested on 1,900 real documents.",
    },
  ],
}

export default function WhichOcrPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${SITE_URL}${PATH}#app`,
          name: "Which OCR Should I Use?",
          url: `${SITE_URL}${PATH}`,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          description: DESCRIPTION,
          image: SITE_OG_IMAGE,
          isAccessibleForFree: true,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <section className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              Free tool
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Which OCR should I use?
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Answer six quick questions about your documents and get an honest recommendation,
              grounded in a benchmark of eight OCR engines on 1,900 real documents. It recommends
              open-source tools when they are the right call. No signup.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Based on the{" "}
              <Link
                href="/resources/blogs/ocr-accuracy-benchmark-2026"
                className="text-primary hover:underline"
              >
                OCR Accuracy Benchmark 2026
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <OcrSelector />

      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} />
    </main>
  )
}
