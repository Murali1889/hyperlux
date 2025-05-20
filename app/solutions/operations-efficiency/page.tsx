import type { Metadata } from "next"
import OperationsPage from "@/components/solutions/operations-efficiency/operations-page"

export const metadata: Metadata = {
  title: "Operations OCR | Supply-Chain Document Automation",
  description: "POD, packing-slip & shipment-log OCR—real-time visibility, 80% fewer delays.",
}

export default function OperationsEfficiencyPage() {
  return <OperationsPage />
}
