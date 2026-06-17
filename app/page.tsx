import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ValueProposition from "@/components/sections/value-proposition"
import ChallengesSection from "@/components/sections/challenges-section"
import TransformationSection from "@/components/sections/transformation-section"
import CompetitiveAdvantage from "@/components/sections/competitive-advantage"
import SolutionSection from "@/components/sections/solution-section"
import ROISection from "@/components/sections/roi-section"
import CTASection from "@/components/sections/cta-section"
import StickyCTA from "@/components/ui/sticky-cta"
import LeadCapturePopup from "@/components/ui/lead-capture-popup"
import TrustedBy from "@/components/sections/trusted-by"
import TryDemo from "@/components/try-demo"
import { WebApplicationJsonLd } from "@/components/json-ld/WebApplicationJsonLd"
import { SITE_URL, SITE_NAME } from "@/lib/seo"

const TITLE = "DocsAPI — Document AI & OCR API for SMB Lending"
const DESCRIPTION =
  "DocsAPI is the document intelligence API for SMB lending and fintech — OCR, classification, KYC, and AML document checks in one honest API."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, "max-image-preview": "large" },
}

export default function Home() {
  return (
    <>
      <WebApplicationJsonLd />
      <HeroSection />
      <TrustedBy />
      <ValueProposition />
      <ChallengesSection />
      <TransformationSection />
      <CompetitiveAdvantage />
      <SolutionSection />
      <TryDemo />
      <ROISection />
      <CTASection />
      <StickyCTA />
      <LeadCapturePopup />
    </>
  )
}
