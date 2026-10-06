import type { Metadata } from "next"
import ProductsHero from "@/components/products/products-hero"
import ProductFeatures from "@/components/products/product-features"
import ProductComparison from "@/components/products/product-comparison"
import ProductTestimonials from "@/components/products/product-testimonials"
import ProductsCTA from "@/components/products/products-cta"
import ProductIntegrations from "@/components/products/product-integrations"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"

const PATH = "/products"
const TITLE = "OCR & Document AI API for Builders: DocsAPI"
const DESCRIPTION =
  "Production-ready OCR and document intelligence API, classify, extract, validate, and ship in days. Per-page pricing and a free 30-day trial for qualified lenders."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "DocsAPI is a document processing API: you send a PDF or image over HTTP and get back the document type and its fields as JSON. It reads bank statements, invoices, IDs and other business documents, joins tables that run across several pages, and checks the extracted data before you use it. Pricing is per page, from $0.02, and qualified lenders can start with a free 30-day trial for qualified lenders after a demo.",
  sections: [
    {
      heading: "What a document processing API does",
      paragraphs: [
        "A document OCR API turns an image into text. A document processing API goes further: it classifies each file (is this a bank statement or an invoice?), extracts the fields that matter as structured JSON, and validates them, for example checking that a statement's running balance adds up. That is the difference between text you still have to parse and data your system can use.",
        "DocsAPI does these steps in one API: OCR, classification, field extraction and validation, plus joining tables that span several pages, which general OCR APIs return page by page. For complex pages it falls back to a vision-language model rather than relying on a single OCR engine.",
      ],
    },
    {
      heading: "Who it is built for",
      paragraphs: [
        "It is built for document AI developers at lenders, fintechs and finance teams who need to read documents at volume and feed the results into their own systems. It runs as a cloud API: it is not a desktop application and it cannot run air-gapped.",
        "Customer documents are not used to train models. Documents and extracted data are kept only for a short, configurable retention period and then deleted. DocsAPI is built by HyperVerge and is SOC 2 Type II and ISO 27001 certified, and HIPAA-eligible with a business associate agreement.",
      ],
    },
    {
      heading: "Book a demo, try it free, then pay per page",
      paragraphs: [
        "Start with a short demo; qualified lenders then get a free 30-day trial on their own documents. Production use is billed per page from $0.02, with volume discounts above 100,000 pages a month, and table extraction and classification are included in the base price. If you only need text from one file, the free OCR tool runs in your browser with no signup.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is a document parsing API?",
      answer:
        "A document parsing API takes a file such as a PDF or scan and returns its content in structured form, for example the document type, fields and tables as JSON, instead of plain text. It combines OCR with layout understanding and field extraction, so your code does not have to parse raw text itself.",
    },
    {
      question: "What is the difference between a document OCR API and a document extraction API?",
      answer:
        "A document OCR API returns the text on the page. A document extraction API returns specific fields, such as an invoice total, an account number or a date of birth, already labeled and structured. Most teams need extraction, because turning raw OCR text into reliable fields is where most of the work is.",
    },
    {
      question: "Is there a free OCR API?",
      answer:
        "If you need an OCR API free of charge for testing, DocsAPI offers a free 30-day trial for qualified lenders after a demo, and the large cloud providers offer limited free tiers too. For unlimited free OCR you can run open-source engines such as Tesseract or PaddleOCR yourself. For a single file, the free OCR tool on this site works in the browser.",
    },
    {
      question: "Does DocsAPI train on my documents?",
      answer:
        "No. Customer documents are not used to train models. Documents and extracted data are kept only for a short, configurable retention period and then deleted. DocsAPI is SOC 2 Type II and ISO 27001 certified, and HIPAA-eligible with a business associate agreement available on request.",
    },
  ],
  related: [
    { href: "/tools/free-ocr", label: "Free OCR tool: image and PDF to text in your browser" },
    { href: "/resources/blogs/aws-textract-vs-docsapi", label: "AWS Textract vs DocsAPI: prices and limits compared" },
    { href: "/resources/blogs/paddleocr-vs-tesseract-vs-docsapi", label: "PaddleOCR vs Tesseract: our side-by-side test" },
    { href: "/resources/blogs/ocr-accuracy-benchmark-2026", label: "OCR accuracy benchmark 2026" },
  ],
}

export default function ProductsPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} dateModified="2026-09-28" />
      <ProductsHero />
      <ProductFeatures />
      <ProductComparison />
      <ProductIntegrations />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} related={CONTENT.related} />
      <ProductTestimonials />
      <ProductsCTA />
    </>
  )
}
