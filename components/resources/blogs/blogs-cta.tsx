import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function BlogsCTA() {
  return (
    <Section background="muted" className="py-16">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Never Miss a New Blog Post</h2>
        <p className="text-lg text-muted-foreground">
          Subscribe to our blog newsletter to receive the latest insights, tips, and industry trends directly in your
          inbox.
        </p>

        <div className="max-w-md mx-auto pt-4">
          <div className="flex gap-3 flex-col sm:flex-row">
            <Input type="email" placeholder="Enter your email" className="border-slate-300" />
            <Button className="bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </Section>
  )
}
