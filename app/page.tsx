import HeroSection from "@/components/sections/hero-section"
import ValueProposition from "@/components/sections/value-proposition"
import ChallengesSection from "@/components/sections/challenges-section"
import TransformationSection from "@/components/sections/transformation-section"
import CompetitiveAdvantage from "@/components/sections/competitive-advantage"
import SolutionSection from "@/components/sections/solution-section"
import ROICalculator from "@/components/sections/roi-calculator"
import ROISection from "@/components/sections/roi-section"
import TestimonialSection from "@/components/sections/testimonial-section"
import CTASection from "@/components/sections/cta-section"
import StickyCTA from "@/components/ui/sticky-cta"
import LeadCapturePopup from "@/components/ui/lead-capture-popup"
import TrustedBy from "@/components/sections/trusted-by"

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
      <div className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Calculate Your ROI with HyperVerge</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              See how much your organization can save by implementing our AI-powered industry classification solution
            </p>
          </div>
          <ROICalculator />
        </div>
      </div>
      <ROISection />
      <TestimonialSection />
      <CTASection />
      <StickyCTA />
      <LeadCapturePopup />
    </>
  )
}
