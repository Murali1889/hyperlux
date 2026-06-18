import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MedicalDocsCta() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-700">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Streamline Medical Data Capture Today
            </h2>
            <p className="max-w-[900px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join leading healthcare organizations in transforming document processing with AI-powered OCR technology.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-white text-indigo-700 hover:bg-indigo-100">
              <Link href="/book-demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
