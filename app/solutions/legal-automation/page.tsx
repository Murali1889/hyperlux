import type { Metadata } from "next"
import LegalAutomationPage from "@/components/solutions/legal-automation/legal-automation-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/legal-automation"
const TITLE = "Legal Automation OCR: Contract Clause Extraction"
const DESCRIPTION =
  "Locate clauses, surface renewals, and redact NDAs with 95% accuracy. Save 200 paralegal hours per month with legal document AI."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function LegalAutomation() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-09-14" />
      <LegalAutomationPage />
    </>
  )
}
