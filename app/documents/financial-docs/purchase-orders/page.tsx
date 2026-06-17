import type { Metadata } from "next"
import PurchaseOrderHero from "@/components/documents/financial-docs/purchase-orders/purchase-order-hero"
import FieldReference from "@/components/documents/financial-docs/purchase-orders/field-reference"
import AccuracyBenchmarks from "@/components/documents/financial-docs/purchase-orders/accuracy-benchmarks"
import AutomationWorkflow from "@/components/documents/financial-docs/purchase-orders/automation-workflow"
import TimeCostSavings from "@/components/documents/financial-docs/purchase-orders/time-cost-savings"
import DeveloperOutput from "@/components/documents/financial-docs/purchase-orders/developer-output"
import OperationalImpact from "@/components/documents/financial-docs/purchase-orders/operational-impact"
import PurchaseOrderFAQ from "@/components/documents/financial-docs/purchase-orders/purchase-order-faq"
import PurchaseOrderCta from "@/components/documents/financial-docs/purchase-orders/purchase-order-cta"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Purchase Order OCR — Automated PO Processing",
  description:
    "Extract PO numbers, vendor codes, SKUs, line items, and quantities with 98% accuracy. Powers true three-way match against invoices.",
  path: "/documents/financial-docs/purchase-orders",
})

export default function PurchaseOrdersPage() {
  return (
    <main className="min-h-screen">
      <PurchaseOrderHero />
      <FieldReference />
      <AccuracyBenchmarks />
      <AutomationWorkflow />
      <TimeCostSavings />
      <DeveloperOutput />
      <OperationalImpact />
      <PurchaseOrderFAQ />
      <PurchaseOrderCta />
    </main>
  )
}
