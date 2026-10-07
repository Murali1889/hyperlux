import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PassportCta() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Deploy passport OCR in your app.</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Start verifying passports with MRZ check digits validated on every read. Book a demo and bring a few real passport images.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg text-lg font-medium">
            <Link href="/book-demo">
              Book a Passport OCR Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
