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

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ValueProposition />
      <ChallengesSection />
      <TransformationSection />
      <CompetitiveAdvantage />
      <SolutionSection />
      <TryDemo/>
      <ROISection />
      <CTASection />
      <StickyCTA />
      <LeadCapturePopup />
    </>
  )
}
