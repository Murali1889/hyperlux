import type { Metadata } from "next"
import InvoiceHero from "@/components/documents/financial-docs/invoices/invoice-hero"
import FieldReference from "@/components/documents/financial-docs/invoices/field-reference"
import AccuracyBenchmarks from "@/components/documents/financial-docs/invoices/accuracy-benchmarks"
import HowItWorks from "@/components/documents/financial-docs/invoices/how-it-works"
import TimeCostSavings from "@/components/documents/financial-docs/invoices/time-cost-savings"
import DeveloperOutput from "@/components/documents/financial-docs/invoices/developer-output"
import CustomerExperienceNote from "@/components/documents/financial-docs/invoices/customer-experience-note"
import InvoiceFAQ from "@/components/documents/financial-docs/invoices/invoice-faq"
import InvoiceCta from "@/components/documents/financial-docs/invoices/invoice-cta"

export const metadata: Metadata = {
  title: "Invoice OCR Template | Header & Line-Item Extraction",
  description: "Capture invoice numbers, dates, VAT, SKU line-items, and totals with 99% accuracy and < 30-second SLA.",
}

export default function InvoicesPage() {
  return (
    <main className="min-h-screen">
      <InvoiceHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <HowItWorks />
      <TimeCostSavings />
      <DeveloperOutput />
      <CustomerExperienceNote />
      <InvoiceFAQ />
      <InvoiceCta />
    </main>
  )
}
