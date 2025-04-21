import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { newsletters } from "@/data/newsletters"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewslettersList() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Newsletter Archives</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Browse through our past newsletters to catch up on what you've missed.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
              View All
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsletters.map((newsletter) => (
            <Card
              key={newsletter.id}
              className="flex flex-col overflow-hidden border border-gray-200 transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={newsletter.image || "/placeholder.svg"}
                  alt={newsletter.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="border-b border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={newsletter.date}>{newsletter.date}</time>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">{newsletter.title}</h3>
                  <p className="text-gray-500">{newsletter.excerpt}</p>
                </div>
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
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
            Load More
          </Button>
        </div>
      </div>
    </section>
  )
}
