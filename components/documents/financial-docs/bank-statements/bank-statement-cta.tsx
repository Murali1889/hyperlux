import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BankStatementCta() {
  return (
    <section className="py-20 px-4 bg-indigo-900">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Streamline Statement Analysis</h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
          Bring a few real statements to a demo and see exactly what comes back. Qualified lenders can then try
          DocsAPI free for 30 days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
            <Link href="/book-demo">Book a Bank Statement OCR Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
