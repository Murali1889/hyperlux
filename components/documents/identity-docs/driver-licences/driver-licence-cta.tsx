import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DriverLicenceCta() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Launch licence OCR today.</h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
          Start extracting driver licence data, barcode included. Book a demo and bring a few real licence images to
          test.
        </p>
        <Button asChild className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-lg rounded-lg">
          <Link href="/book-demo">
            Book a Demo
          </Link>
        </Button>
      </div>
    </section>
  )
}
