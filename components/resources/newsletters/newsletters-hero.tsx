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
        </div>
      </div>
    </section>
  )
}
