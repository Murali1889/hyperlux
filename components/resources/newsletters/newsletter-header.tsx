import { Calendar, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Newsletter } from "@/data/newsletters"

interface NewsletterHeaderProps {
  newsletter: Newsletter
}

export default function NewsletterHeader({ newsletter }: NewsletterHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Newsletter</Badge>
            <time className="flex items-center gap-1 text-sm text-gray-500" dateTime={newsletter.date}>
              <Calendar className="h-4 w-4" />
              {newsletter.date}
            </time>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{newsletter.title}</h1>
          <p className="mb-6 text-xl text-gray-500">{newsletter.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
