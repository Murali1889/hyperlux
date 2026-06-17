import type { Metadata } from "next"
import CustomerExperiencePage from "@/components/solutions/customer-experience/customer-experience-page"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Customer Experience OCR — 30-Second Onboarding",
  description:
    "Boost CSAT and cut drop-offs with instant ID and form extraction. Sub-5-second KYC verification powered by AI-OCR.",
  path: "/solutions/customer-experience",
})

export default function CustomerExperience() {
  return <CustomerExperiencePage />
}
