import type { Metadata } from "next"
import ComplianceRiskPage from "@/components/solutions/compliance-risk/compliance-risk-page"

export const metadata: Metadata = {
  title: "Compliance & Risk OCR | Audit-Ready Document AI",
  description: "AML/KYC, SOX, and GDPR redaction powered by 100% traceable AI-OCR workflows.",
}

export default function ComplianceRisk() {
  return <ComplianceRiskPage />
}
