import type { Newsletter } from "@/data/newsletters"

interface NewsletterContentProps {
  newsletter: Newsletter
}

export default function NewsletterContent({ newsletter }: NewsletterContentProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-indigo max-w-none">
            <h2>Hello DocsAPI Community,</h2>
            <p>
              Welcome to our {newsletter.title} newsletter. We're excited to share the latest updates, insights, and
              trends in AI-powered financial solutions.
            </p>

            <h3>Industry Highlights</h3>
            <p>
              The lending industry continues to evolve rapidly with new technologies and approaches. This month, we've
              seen significant developments in:
            </p>
            <ul>
              <li>AI-driven risk assessment models moving from pilots into production</li>
              <li>Regulatory changes affecting small business lending in key markets</li>
              <li>New partnerships between traditional banks and fintech companies</li>
            </ul>

            <h3>Product Updates</h3>
            <p>We're constantly improving our solutions to better serve your needs:</p>
            <ul>
              <li>Document accuracy published by document type in our OCR benchmark</li>
              <li>New dashboard features for better visibility into lending metrics</li>
              <li>Improved API integration options for seamless workflow</li>
            </ul>

            <p>
              Thank you for being part of our community. If you have any questions or would like to learn more about our
              solutions, please don't hesitate to reach out.
            </p>

            <p>
              Best regards,
              <br />
              The DocsAPI Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
