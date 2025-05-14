import NewsletterHeader from "@/components/resources/newsletters/newsletter-header"
import NewsletterContent from "@/components/resources/newsletters/newsletter-content"
import PreviousNewsletters from "@/components/resources/newsletters/previous-newsletters"
import { newsletters } from "@/data/newsletters"

export default function NewsletterPage({ params }: { params: { slug: string } }) {

  const newsletter = newsletters.find((newsletter) => newsletter.slug === params.slug) || newsletters[0]

  return (
    <main className="flex-1">
      <NewsletterHeader newsletter={newsletter} />
      <NewsletterContent newsletter={newsletter} />
      <PreviousNewsletters currentNewsletterId={newsletter.id} />
    </main>
  )
}
