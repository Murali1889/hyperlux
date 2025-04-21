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
            <h2>Hello HyperVerge Community,</h2>
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
              <li>AI-driven risk assessment models showing 35% improvement in accuracy</li>
              <li>Regulatory changes affecting small business lending in key markets</li>
              <li>New partnerships between traditional banks and fintech companies</li>
            </ul>

            <h3>Product Updates</h3>
            <p>We're constantly improving our solutions to better serve your needs:</p>
            <ul>
              <li>Enhanced document classification with 99.2% accuracy</li>
              <li>New dashboard features for better visibility into lending metrics</li>
              <li>Improved API integration options for seamless workflow</li>
            </ul>

            <h3>Customer Success Story</h3>
            <p>
              This month, we spotlight how AsiaFinance implemented HyperVerge's solutions to reduce their loan
              processing time by 68% while improving accuracy by 45%.
            </p>

            <blockquote>
              <p>
                "HyperVerge has transformed our lending operations. What used to take days now takes hours, and our team
                can focus on building relationships rather than processing paperwork."
              </p>
              <cite>— Sarah Chen, COO at AsiaFinance</cite>
            </blockquote>

            <h3>Upcoming Events</h3>
            <p>Join us at these upcoming events to learn more about HyperVerge solutions:</p>
            <ul>
              <li>FinTech Forward Conference - June 15-17, Singapore</li>
              <li>Digital Lending Summit - July 8-9, New York</li>
              <li>HyperVerge Webinar: AI in Risk Assessment - June 22 (Virtual)</li>
            </ul>

            <h3>Resources You Might Have Missed</h3>
            <p>Check out these recent resources from our team:</p>
            <ul>
              <li>
                <a href="#">Whitepaper: The Future of Small Business Lending</a>
              </li>
              <li>
                <a href="#">Case Study: How Credit Unions Can Compete with Digital-First Lenders</a>
              </li>
              <li>
                <a href="#">Blog: 5 Ways AI is Transforming Risk Management</a>
              </li>
            </ul>

            <p>
              Thank you for being part of our community. If you have any questions or would like to learn more about our
              solutions, please don't hesitate to reach out.
            </p>

            <p>
              Best regards,
              <br />
              The HyperVerge Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
