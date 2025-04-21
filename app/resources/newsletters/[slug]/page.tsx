import NewsletterHeader from "@/components/resources/newsletters/newsletter-header"
import NewsletterContent from "@/components/resources/newsletters/newsletter-content"
import NewsletterSignup from "@/components/resources/newsletters/newsletter-signup"
import PreviousNewsletters from "@/components/resources/newsletters/previous-newsletters"
import { newsletters } from "@/data/newsletters"

export default function NewsletterPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the newsletter data from an API or CMS
  // For this example, we'll use mock data
  const newsletter = newsletters.find((newsletter) => newsletter.slug === params.slug) || newsletters[0]

  return (
    <main className="flex-1">
      <NewsletterHeader newsletter={newsletter} />
      <NewsletterContent newsletter={newsletter} />
      <NewsletterSignup />
      <PreviousNewsletters currentNewsletterId={newsletter.id} />
    </main>
  )
}
