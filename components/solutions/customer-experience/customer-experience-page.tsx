import CustomerExperienceHero from "./customer-experience-hero"
import BenefitRail from "./benefit-rail"
import FeatureCards from "./feature-cards"
import AnimatedJourney from "./animated-journey"
import SdkWidgetsSnippet from "./sdk-widgets-snippet"
import NeobankTestimonial from "./neobank-testimonial"
import CustomerExperienceCta from "./customer-experience-cta"

export default function CustomerExperiencePage() {
  return (
    <main className="min-h-screen">
      <CustomerExperienceHero />
      <BenefitRail />
      <FeatureCards />
      <AnimatedJourney />
      <SdkWidgetsSnippet />
      <NeobankTestimonial />
      <CustomerExperienceCta />
    </main>
  )
}
