import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ResourcesHero() {
  return (
    <section className="relative bg-indigo-900 py-16 md:py-24">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Resources & Insights
          </h1>
          <p className="mb-8 text-xl text-indigo-100 md:text-2xl">
            Explore our latest articles, blogs, and industry insights to stay ahead in the world of AI-powered OCR
            software and lending solutions. Discover how our intelligent document automation platform transforms
            document processing for financial institutions.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources for OCR software, document automation, fraud detection..."
                className="h-12 w-full rounded-lg border-0 bg-white pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
            <Button className="h-12 w-full bg-indigo-600 px-6 text-white hover:bg-indigo-700 sm:w-auto">Search</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
