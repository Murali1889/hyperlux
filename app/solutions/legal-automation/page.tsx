import type { Metadata } from "next"
import LegalAutomationPage from "@/components/solutions/legal-automation/legal-automation-page"

export const metadata: Metadata = {
  title: "Legal Document Automation | Contract Clause Extraction AI",
  description:
    "Locate clauses, surface renewals and redact NDAs with 95% accuracy—saving 200 paralegal hours every month.",
  openGraph: {
    title: "Legal Document Automation | Contract Clause Extraction AI",
    description:
      "Locate clauses, surface renewals and redact NDAs with 95% accuracy—saving 200 paralegal hours every month.",
    type: "website",
  },
}

export default function LegalAutomation() {
  return <LegalAutomationPage />
}
