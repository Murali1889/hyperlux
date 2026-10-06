import type { Metadata } from "next"
import LegalAutomationPage from "@/components/solutions/legal-automation/legal-automation-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/legal-automation"
const TITLE = "Legal Automation OCR: Contract Clause Extraction"
const DESCRIPTION =
  "Locate clauses, surface renewal dates, and redact NDAs with legal document AI, with low-confidence clauses flagged for a lawyer to confirm."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function LegalAutomation() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-10-06" />
      <LegalAutomationPage />
    </>
  )
}
