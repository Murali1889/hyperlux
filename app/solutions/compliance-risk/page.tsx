import type { Metadata } from "next"
import ComplianceRiskPage from "@/components/solutions/compliance-risk/compliance-risk-page"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Compliance OCR — KYC, AML, SAR-Ready Audit Trails",
  description:
    "KYC, AML, SOX, and GDPR document workflows with 100% traceable AI-OCR. Pass audits cleanly with immutable extraction logs.",
  path: "/solutions/compliance-risk",
})

export default function ComplianceRisk() {
  return <ComplianceRiskPage />
}
