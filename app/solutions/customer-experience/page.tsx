import type { Metadata } from "next"
import CustomerExperiencePage from "@/components/solutions/customer-experience/customer-experience-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/customer-experience"
const TITLE = "Customer Experience OCR: Faster KYC Onboarding"
const DESCRIPTION =
  "Cut onboarding drop-offs with instant ID and form extraction. Fast KYC document verification powered by AI-OCR for fintech, insurance and telco flows."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function CustomerExperience() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-10-06" />
      <CustomerExperiencePage />
    </>
  )
}
