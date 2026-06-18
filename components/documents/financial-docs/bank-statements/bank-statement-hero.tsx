import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BankStatementHero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 tracking-tight mb-6">
              Turn Bank Statements Into Live Data
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Extract transaction-level data for KYC verification, credit scoring algorithms, and cash-flow based
              underwriting decisions—all in seconds with enterprise-grade accuracy and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/book-demo">Try Bank Statement API</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                <Link href="#contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl">
              <img
                src="/highlighted-bank-statement.png"
                alt="Bank statement with transaction data highlighted"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                99% Accuracy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
