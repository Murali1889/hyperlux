import type { Metadata } from "next"
import ComplianceRiskPage from "@/components/solutions/compliance-risk/compliance-risk-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/compliance-risk"
const TITLE = "Compliance OCR: KYC, AML, SAR-Ready Audit Trails"
const DESCRIPTION =
  "KYC, AML, SOX, and GDPR document workflows on SOC 2 Type II and ISO 27001 certified document AI, with unclear fields flagged for human review."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function ComplianceRisk() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-10-06" />
      <ComplianceRiskPage />
    </>
  )
}
