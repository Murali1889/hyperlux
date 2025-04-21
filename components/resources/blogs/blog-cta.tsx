import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogCTA() {
  return (
    <Section className="py-16">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-12 text-white">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Transform Your Lending Process?
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              See how HyperVerge's AI-powered industry classification can help you process loans faster, improve
              accuracy, and scale your operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-800 hover:bg-indigo-50">
              <Link href="#book-demo">Book a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-indigo-700/20">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
