import type { Metadata } from "next"
import CustomerExperiencePage from "@/components/solutions/customer-experience/customer-experience-page"

export const metadata: Metadata = {
  title: "Customer Experience OCR | 30-Second Digital Onboarding",
  description: "Boost CSAT and cut drop-offs with instant ID and form extraction powered by AI-OCR.",
}

export default function CustomerExperience() {
  return <CustomerExperiencePage />
}
