import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsCTA() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            Ready to Transform Your Lending Operations?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of financial institutions that have revolutionized their lending processes with HyperVerge's
            AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-indigo-700">
              <Link href="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
