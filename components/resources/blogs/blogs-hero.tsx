import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"

export default function BlogsHero() {
  return (
    <section className="relative bg-indigo-900 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/classification-process.png" alt="Background pattern" fill className="object-cover opacity-10" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            OCR Software Blog
          </h1>
          <p className="mb-8 text-xl text-indigo-100 md:text-2xl">
            Insights, updates, and expert perspectives on AI-powered OCR software for document automation, fraud
            detection, and lending workflow optimization.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs on OCR software, document automation..."
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
