import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { newsletters } from "@/data/newsletters"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PreviousNewslettersProps {
  currentNewsletterId: string
}

export default function PreviousNewsletters({ currentNewsletterId }: PreviousNewslettersProps) {
  // Filter out the current newsletter and get the 3 most recent ones
  const previousNewsletters = newsletters.filter((newsletter) => newsletter.id !== currentNewsletterId).slice(0, 3)

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tighter sm:text-3xl">Previous Newsletters</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previousNewsletters.map((newsletter) => (
              <Card
                key={newsletter.id}
                className="flex flex-col overflow-hidden border border-gray-200 transition-all hover:shadow-md"
              >
                <CardContent className="flex-1 p-6">
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={newsletter.date}>{newsletter.date}</time>
                  </div>
                  <h3 className="mb-2 font-bold">{newsletter.title}</h3>
                  <p className="text-sm text-gray-500">{newsletter.excerpt.substring(0, 80)}...</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link
                    href={`/resources/newsletters/${newsletter.slug}`}
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    Read Newsletter
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
