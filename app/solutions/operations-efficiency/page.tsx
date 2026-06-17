import type { Metadata } from "next"
import OperationsPage from "@/components/solutions/operations-efficiency/operations-page"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Operations Efficiency OCR — Supply Chain Automation",
  description:
    "Bill of lading, POD, packing slip, and shipment-log OCR. Real-time visibility, 80% fewer document delays, faster ops cycles.",
  path: "/solutions/operations-efficiency",
})

export default function OperationsEfficiencyPage() {
  return <OperationsPage />
}
