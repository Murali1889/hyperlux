import NewslettersHero from "@/components/resources/newsletters/newsletters-hero"
import NewslettersList from "@/components/resources/newsletters/newsletters-list"
import NewsletterSignup from "@/components/resources/newsletters/newsletter-signup"
import NewslettersCTA from "@/components/resources/newsletters/newsletters-cta"

export default function NewslettersPage() {
  return (
    <>
      <NewslettersHero />
      <NewsletterSignup />
      <NewslettersList />
      <NewslettersCTA />
    </>
  )
}
