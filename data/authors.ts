import type { Author } from "@/types/resources"

// TODO(BLOCKER-LINKEDIN), TODO(BLOCKER-TWITTER) — see docs/superpowers/specs/BLOCKERS.md
export const nupuraUghade: Author = {
  id: "1",
  slug: "nupura-ughade",
  name: "Nupura Ughade",
  title: "Content Marketing Lead, DocsAPI",
  avatar: "/avatar/avatar-nupura.webp",
  bio: "Nupura Ughade creates clear, insightful content on OCR, document AI, and fintech. She combines technical depth with real-world finance use cases to help engineers and operations leaders navigate digital transformation with confidence.",
  longBio:
    "I write about document AI because I spent the better part of a decade watching smart people lose hours every week to broken paperwork pipelines. My first encounter with OCR was at a fintech where we processed a few thousand invoices a month — and our ops team was hand-keying half of them because the OCR vendor kept choking on tables. Today I help builders at DocsAPI cut through the noise: what actually works, what's marketing fluff, and what to ship this quarter. I lean on real numbers, real customer stories (anonymized where needed), and the kind of detail you can only get from being elbows-deep in the work. If a guide on this site feels overly polite, blame editing. If it feels like a friend explaining something over coffee, that's the goal.",
  knowsAbout: [
    "Optical character recognition (OCR)",
    "Document AI",
    "Invoice processing",
    "Know Your Customer (KYC)",
    "Anti-Money Laundering (AML)",
    "PDF parsing",
    "Vision-language models",
    "Fintech operations",
    "Small business lending",
    "Industry classification (SIC, NAICS)",
  ],
  credentials: [
    "5+ years writing for B2B SaaS and fintech audiences",
    "Led content for a payments platform processing 4M+ documents monthly",
    "Shipped 100+ technical explainers for engineering and operations readers",
    "Contributing voice on document automation and AI infrastructure",
  ],
  twitter: "https://twitter.com/nupura_ughade",
  linkedin: "https://www.linkedin.com/in/nupura-ughade",
}

export const authors: Author[] = [nupuraUghade]

export const authorBySlug = (slug: string): Author | undefined =>
  authors.find((a) => a.slug === slug)
