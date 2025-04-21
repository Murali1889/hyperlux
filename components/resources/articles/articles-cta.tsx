import { Button } from "@/components/ui/button"

export default function ArticlesCTA() {
  return (
    <section className="bg-indigo-900 py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Stay Informed with Our Research Newsletter</h2>
          <p className="mb-8 text-lg text-indigo-200">
            Subscribe to receive our latest articles, research papers, and industry insights directly to your inbox.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border-0 bg-white px-5 py-3 text-indigo-900 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:max-w-md"
            />
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 sm:flex-shrink-0">Subscribe Now</Button>
          </div>
          <p className="mt-4 text-sm text-indigo-300">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
