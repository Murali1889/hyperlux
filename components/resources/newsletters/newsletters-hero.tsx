import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NewslettersHero() {
  return (
    <section className="relative bg-indigo-900 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/roi-dashboard.png" alt="Background pattern" fill className="object-cover opacity-10" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            OCR Software Newsletters
          </h1>
          <p className="mb-8 text-xl text-indigo-100 md:text-2xl">
            Stay updated with the latest OCR software news, document automation trends, and insights on AI-powered
            lending solutions delivered directly to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email for OCR updates"
                className="h-12 w-full rounded-lg border-0 bg-white px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
            <Button className="h-12 w-full bg-indigo-600 px-6 text-white hover:bg-indigo-700 sm:w-auto">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-sm text-indigo-200">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
