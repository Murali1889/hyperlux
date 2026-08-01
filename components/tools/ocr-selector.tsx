"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, RotateCcw, Sparkles, CheckCircle2, Info } from "lucide-react"

// Recommendation logic is grounded in the OCR Accuracy Benchmark 2026
// (eight engines on 1,900 real documents). It is deliberately honest: it
// recommends open-source engines when they fit, so the result stays
// trustworthy and worth linking to.

type Choice = { value: string; label: string; hint?: string }

interface Question {
  id: string
  prompt: string
  choices: Choice[]
}

const QUESTIONS: Question[] = [
  {
    id: "docType",
    prompt: "What kind of documents do you mainly process?",
    choices: [
      { value: "bankStatements", label: "Bank statements", hint: "multi-page transaction tables" },
      { value: "invoices", label: "Invoices and receipts", hint: "AP, expenses, line items" },
      { value: "ids", label: "IDs and passports", hint: "KYC, onboarding" },
      { value: "academic", label: "Academic PDFs and reports", hint: "papers, layouts, figures" },
      { value: "generalText", label: "General printed text", hint: "letters, books, forms" },
      { value: "handwritten", label: "Handwritten or mixed", hint: "notes, filled forms" },
    ],
  },
  {
    id: "quality",
    prompt: "How clean are your documents?",
    choices: [
      { value: "clean", label: "Clean scans", hint: "flatbed, high resolution" },
      { value: "mixed", label: "A mix", hint: "some good, some rough" },
      { value: "messy", label: "Messy", hint: "phone photos, glare, skew, faded" },
    ],
  },
  {
    id: "language",
    prompt: "What language are they in?",
    choices: [
      { value: "english", label: "English only" },
      { value: "cjk", label: "Chinese, Japanese, or Korean" },
      { value: "other", label: "Other or mixed languages" },
    ],
  },
  {
    id: "output",
    prompt: "What do you need out of it?",
    choices: [
      { value: "rawText", label: "Just the text", hint: "search, archive, RAG" },
      { value: "structured", label: "Structured fields plus validation", hint: "totals, dates, reconciliation" },
    ],
  },
  {
    id: "deploy",
    prompt: "How do you want to run it?",
    choices: [
      { value: "openSource", label: "Open source, self-hosted", hint: "free, you run it" },
      { value: "api", label: "A hosted API", hint: "someone else runs it" },
      { value: "noPref", label: "No preference", hint: "whatever works best" },
    ],
  },
  {
    id: "volume",
    prompt: "Roughly how much volume?",
    choices: [
      { value: "low", label: "Low", hint: "hobby, prototype, under 1k/mo" },
      { value: "medium", label: "Medium", hint: "1k to 100k/mo" },
      { value: "high", label: "High", hint: "100k+/mo, production" },
    ],
  },
]

interface Engine {
  key: string
  name: string
  kind: "Open source" | "Hosted API"
  blurb: string
  // internal link to the most relevant comparison or asset on our own site
  href: string
  linkLabel: string
}

const ENGINES: Record<string, Engine> = {
  tesseract: {
    key: "tesseract",
    name: "Tesseract",
    kind: "Open source",
    blurb: "The default open-source OCR engine. Excellent on clean printed English, free, and easy to self-host. It struggles with tables, messy scans, and non-Latin scripts.",
    href: "/resources/blogs/paddleocr-vs-tesseract-vs-docsapi",
    linkLabel: "Tesseract vs PaddleOCR data",
  },
  paddleocr: {
    key: "paddleocr",
    name: "PaddleOCR",
    kind: "Open source",
    blurb: "The strongest open-source engine once documents get harder than clean English. It beat Tesseract on messy receipts, tables, and CJK scripts in our benchmark.",
    href: "/resources/blogs/paddleocr-vs-tesseract-vs-docsapi",
    linkLabel: "PaddleOCR vs Tesseract data",
  },
  docling: {
    key: "docling",
    name: "Docling",
    kind: "Open source",
    blurb: "Built for document structure. It led our benchmark on academic PDFs and complex layouts, preserving headings, figures, and reading order better than plain OCR.",
    href: "/resources/blogs/docling-vs-llamaparse-vs-docsapi",
    linkLabel: "Docling vs LlamaParse data",
  },
  llamaparse: {
    key: "llamaparse",
    name: "LlamaParse",
    kind: "Hosted API",
    blurb: "A parsing API that turns documents into clean markdown for LLM and RAG pipelines. Good when your end goal is feeding text to a model rather than extracting exact fields.",
    href: "/resources/blogs/docling-vs-llamaparse-vs-docsapi",
    linkLabel: "LlamaParse vs Docling data",
  },
  textract: {
    key: "textract",
    name: "AWS Textract",
    kind: "Hosted API",
    blurb: "A solid hosted API for forms and tables, strong if you are already on AWS. English-centric and priced per page, with less validation logic than a purpose-built document API.",
    href: "/resources/blogs/aws-textract-vs-docsapi",
    linkLabel: "AWS Textract vs DocsAPI data",
  },
  docsapi: {
    key: "docsapi",
    name: "DocsAPI",
    kind: "Hosted API",
    blurb: "A document-AI API built for financial documents. It led our benchmark on multi-page bank statement tables and runs classification, field extraction, and validation in one call.",
    href: "/resources/blogs/ocr-accuracy-benchmark-2026",
    linkLabel: "Full benchmark data",
  },
}

type Answers = Record<string, string>

function score(a: Answers): { engine: Engine; points: number; reasons: string[] }[] {
  const s: Record<string, number> = {
    tesseract: 0, paddleocr: 0, docling: 0, llamaparse: 0, textract: 0, docsapi: 0,
  }
  const reasons: Record<string, string[]> = {
    tesseract: [], paddleocr: [], docling: [], llamaparse: [], textract: [], docsapi: [],
  }
  const add = (k: string, n: number, why?: string) => {
    s[k] += n
    if (why && n > 0) reasons[k].push(why)
  }

  // Document type
  switch (a.docType) {
    case "bankStatements":
      add("docsapi", 6, "led the benchmark on multi-page bank statement tables")
      add("textract", 3, "handles tabular forms")
      add("paddleocr", 2, "the best open-source option for tables")
      break
    case "invoices":
      add("docsapi", 4, "runs invoice classification, extraction, and validation together")
      add("textract", 4, "has a dedicated expense and invoice parser")
      add("paddleocr", 2, "workable open-source route for invoices")
      break
    case "ids":
      add("docsapi", 6, "built for ID and KYC extraction with MRZ validation")
      add("textract", 2, "reads ID fields but without KYC validation")
      break
    case "academic":
      add("docling", 6, "led the benchmark on academic PDFs and layout")
      add("llamaparse", 4, "turns papers into clean markdown for RAG")
      break
    case "generalText":
      add("tesseract", 5, "excellent and free on clean printed text")
      add("paddleocr", 4, "strong general-purpose open-source OCR")
      break
    case "handwritten":
      add("paddleocr", 4, "the more robust open-source engine on hard inputs")
      add("textract", 3, "supports handwriting recognition")
      add("docsapi", 2, "handles mixed real-world inputs")
      break
  }

  // Quality
  if (a.quality === "clean") {
    add("tesseract", 4, "clean scans are exactly where Tesseract ties the paid tools")
    add("paddleocr", 2)
  } else if (a.quality === "mixed") {
    add("paddleocr", 3, "holds up better than Tesseract as quality drops")
    add("docsapi", 2)
    add("textract", 2)
  } else if (a.quality === "messy") {
    add("paddleocr", 4, "clearly beat Tesseract on phone-photo and skewed inputs")
    add("docsapi", 3, "tuned for the messy real-world documents finance teams see")
    add("textract", 2)
    add("tesseract", -3)
  }

  // Language
  if (a.language === "cjk") {
    add("paddleocr", 5, "much stronger than Tesseract on Chinese, Japanese, and Korean")
    add("tesseract", -2)
  } else if (a.language === "other") {
    add("paddleocr", 3, "broad multilingual coverage")
    add("textract", 1)
  } else {
    add("tesseract", 1)
  }

  // Output
  if (a.output === "structured") {
    add("docsapi", 5, "returns validated structured fields, not just text")
    add("textract", 3, "returns key-value pairs for forms")
    add("tesseract", -2)
    add("paddleocr", -1)
    add("docling", -1)
  } else {
    add("tesseract", 2, "gives you raw text cheaply")
    add("paddleocr", 2)
    add("docling", 2, "clean structured markdown for downstream use")
    add("llamaparse", 3, "purpose-built to hand text to an LLM")
  }

  // Deploy preference (this is where honesty matters)
  if (a.deploy === "openSource") {
    add("tesseract", 5, "fully open source and self-hostable")
    add("paddleocr", 5, "fully open source and self-hostable")
    add("docling", 5, "fully open source and self-hostable")
    // paid APIs cannot honestly win here
    add("docsapi", -8)
    add("textract", -8)
    add("llamaparse", -5)
  } else if (a.deploy === "api") {
    add("docsapi", 4, "hosted, nothing to run yourself")
    add("textract", 3, "fully managed on AWS")
    add("llamaparse", 3, "managed parsing API")
    add("tesseract", -3)
    add("paddleocr", -2)
  }

  // Volume
  if (a.volume === "low") {
    add("tesseract", 3, "free is hard to beat at low volume")
    add("paddleocr", 2)
    add("llamaparse", 1)
  } else if (a.volume === "high") {
    add("docsapi", 2, "built for production throughput")
    add("textract", 1)
    add("paddleocr", 1, "no per-page cost at scale if you self-host")
  }

  return Object.keys(s)
    .map((k) => ({ engine: ENGINES[k], points: s[k], reasons: reasons[k] }))
    .sort((x, y) => y.points - x.points)
}

export default function OcrSelector() {
  const [answers, setAnswers] = useState<Answers>({})
  const [showResult, setShowResult] = useState(false)

  const allAnswered = QUESTIONS.every((q) => answers[q.id])

  const pick = (qid: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }))
    setShowResult(false)
  }

  const reset = () => {
    setAnswers({})
    setShowResult(false)
  }

  const ranked = allAnswered ? score(answers) : []
  const top = ranked[0]
  const runnerUp = ranked[1]

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {QUESTIONS.map((q, qi) => (
            <Card key={q.id} className="mb-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-slate-900">
                  <span className="text-primary mr-2">{qi + 1}.</span>
                  {q.prompt}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2">
                  {q.choices.map((c) => {
                    const selected = answers[q.id] === c.value
                    return (
                      <button
                        key={c.value}
                        type="button"
                        onClick={() => pick(q.id, c.value)}
                        aria-pressed={selected}
                        className={
                          "flex items-start gap-2 rounded-md border p-3 text-left transition-colors " +
                          (selected
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50")
                        }
                      >
                        <CheckCircle2
                          className={
                            "mt-0.5 h-4 w-4 shrink-0 " + (selected ? "text-primary" : "text-slate-300")
                          }
                        />
                        <span>
                          <span className="block text-sm font-medium text-slate-900">{c.label}</span>
                          {c.hint && <span className="block text-xs text-slate-500">{c.hint}</span>}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <Button
              size="lg"
              disabled={!allAnswered}
              onClick={() => setShowResult(true)}
            >
              <Sparkles className="h-4 w-4" />
              See my recommendation
            </Button>
            {(Object.keys(answers).length > 0) && (
              <Button size="lg" variant="ghost" onClick={reset}>
                <RotateCcw className="h-4 w-4" />
                Start over
              </Button>
            )}
            {!allAnswered && (
              <span className="text-sm text-slate-500">
                Answer all {QUESTIONS.length} questions to get a pick.
              </span>
            )}
          </div>

          {showResult && top && (
            <div className="mt-10">
              <Card className="border-primary/40 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary text-primary-foreground">Top pick</Badge>
                    <Badge variant="outline">{top.engine.kind}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mt-2">
                    {top.engine.name}
                  </CardTitle>
                  <CardDescription className="text-slate-700 text-base leading-relaxed">
                    {top.engine.blurb}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {top.reasons.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">
                        Why it fits your answers
                      </p>
                      <ul className="space-y-1">
                        {top.reasons.slice(0, 4).map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>It {r}.</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link
                    href={top.engine.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {top.engine.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {runnerUp && (
                <Card className="mt-4">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Also worth testing</Badge>
                      <Badge variant="outline">{runnerUp.engine.kind}</Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 mt-1">
                      {runnerUp.engine.name}
                    </CardTitle>
                    <CardDescription className="text-slate-700 leading-relaxed">
                      {runnerUp.engine.blurb}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={runnerUp.engine.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      {runnerUp.engine.linkLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              )}

              <div className="mt-6 flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  This is a starting shortlist, not a final answer. The only number that predicts
                  your production is the one you measure on your own documents. Pull 50 of your real
                  files, run them through the top one or two picks, and score against hand-labeled
                  truth before you commit.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
