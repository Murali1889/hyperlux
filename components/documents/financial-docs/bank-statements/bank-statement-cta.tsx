import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BankStatementCta() {
  return (
    <section className="py-20 px-4 bg-indigo-900">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Streamline Statement Analysis</h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
          Transform your financial document processing with our bank statement OCR solution. Get started today and see
          the difference in speed, accuracy, and customer experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
            <Link href="#try-api">Try Bank-Statement API</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-indigo-800">
            <Link href="#contact-sales">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
