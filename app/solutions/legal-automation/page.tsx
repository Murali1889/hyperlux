import type { Metadata } from "next"
import LegalAutomationPage from "@/components/solutions/legal-automation/legal-automation-page"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Legal Automation OCR — Contract Clause Extraction",
  description:
    "Locate clauses, surface renewals, and redact NDAs with 95% accuracy. Save 200 paralegal hours per month with legal document AI.",
  path: "/solutions/legal-automation",
})

export default function LegalAutomation() {
  return <LegalAutomationPage />
}
