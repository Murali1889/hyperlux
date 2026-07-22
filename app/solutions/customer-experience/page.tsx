import type { Metadata } from "next"
import CustomerExperiencePage from "@/components/solutions/customer-experience/customer-experience-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/customer-experience"
const TITLE = "Customer Experience OCR: 30-Second Onboarding"
const DESCRIPTION =
  "Boost CSAT and cut onboarding drop-offs with instant ID and form extraction. Sub-5-second KYC verification powered by AI-OCR, proven in fintech, insurance, and telco flows."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function CustomerExperience() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
      <CustomerExperiencePage />
    </>
  )
}
