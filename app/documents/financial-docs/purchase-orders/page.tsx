import type { Metadata } from "next"
import PurchaseOrderHero from "@/components/documents/financial-docs/purchase-orders/purchase-order-hero"
import FieldReference from "@/components/documents/financial-docs/purchase-orders/field-reference"
import AccuracyBenchmarks from "@/components/documents/financial-docs/purchase-orders/accuracy-benchmarks"
import AutomationWorkflow from "@/components/documents/financial-docs/purchase-orders/automation-workflow"
import TimeCostSavings from "@/components/documents/financial-docs/purchase-orders/time-cost-savings"
import DeveloperOutput from "@/components/documents/financial-docs/purchase-orders/developer-output"
import PurchaseOrderFAQ from "@/components/documents/financial-docs/purchase-orders/purchase-order-faq"
import PurchaseOrderCta from "@/components/documents/financial-docs/purchase-orders/purchase-order-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/documents/financial-docs/purchase-orders"
const TITLE = "Purchase Order OCR: Automated PO Processing"
const DESCRIPTION =
  "Extract PO numbers, vendor codes, SKUs, line items, and quantities, with unclear fields flagged for review. Built for three-way match against invoices."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function PurchaseOrdersPage() {
  return (
    <main className="min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} />
      <PurchaseOrderHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <AutomationWorkflow />
      <TimeCostSavings />
      <DeveloperOutput />
      <PurchaseOrderFAQ />
      <PurchaseOrderCta />
    </main>
  )
}
