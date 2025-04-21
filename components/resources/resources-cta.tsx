import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function ResourcesCTA() {
  return (
    <Section background="gradient" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
          Stay Updated with OCR Software Insights
        </h2>
        <p className="text-lg text-indigo-100">
          Subscribe to our newsletter to receive the latest OCR trends, document automation updates, and exclusive
          content on AI-powered lending solutions directly in your inbox.
        </p>

        <div className="max-w-md mx-auto pt-4">
          <div className="flex gap-3 flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
            />
            <Button className="bg-white text-indigo-700 hover:bg-indigo-50 whitespace-nowrap">
              <Mail className="mr-2 h-4 w-4" /> Subscribe for OCR Updates
            </Button>
          </div>
          <p className="text-xs text-indigo-200 mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </Section>
  )
}
