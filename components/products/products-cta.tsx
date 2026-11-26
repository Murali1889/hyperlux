import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsCTA() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Want to See It on Your Own Documents?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start with a demo on your own files. Qualified lenders then get a free 30-day trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
