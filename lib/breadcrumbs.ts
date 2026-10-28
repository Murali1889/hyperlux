import { SITE_URL } from "./seo"

const SEGMENT_NAMES: Record<string, string> = {
  "use-cases": "Use Cases",
  solutions: "Solutions",
  documents: "Documents",
  "financial-docs": "Financial Documents",
  "identity-docs": "Identity Documents",
  "legal-docs": "Legal Documents",
  "medical-docs": "Medical Documents",
  "shipping-docs": "Shipping Documents",
  "bank-statements": "Bank Statements",
  invoices: "Invoices",
  "purchase-orders": "Purchase Orders",
  passports: "Passports",
  "driver-licences": "Driver Licences",
  "national-ids": "National IDs",
  "invoice-processing": "Invoice Processing",
  "loan-verification": "Loan Verification",
  "id-proofing": "ID Proofing",
  "contract-abstraction": "Contract Abstraction",
  "digital-archiving": "Digital Archiving",
  "compliance-risk": "Compliance & Risk",
  "customer-experience": "Customer Experience",
  "finance-automation": "Finance Automation",
  "legal-automation": "Legal Automation",
  "operations-efficiency": "Operations Efficiency",
  industries: "Industries",
  products: "Products",
  resources: "Resources",
  blogs: "Blog",
  articles: "Articles",
  newsletters: "Newsletters",
  "book-demo": "Book a Demo",
  pricing: "Pricing",
  author: "Authors",
  tools: "Tools",
  "which-ocr": "Which OCR Should I Use?",
}

export function buildBreadcrumbs(path: string): { name: string; url: string }[] {
  const segments = path.split("/").filter(Boolean)
  const items: { name: string; url: string }[] = [{ name: "Home", url: SITE_URL }]
  let cumulative = ""
  for (const seg of segments) {
    cumulative += `/${seg}`
    items.push({
      name: SEGMENT_NAMES[seg] ?? seg,
      url: `${SITE_URL}${cumulative}`,
    })
  }
  return items
}
