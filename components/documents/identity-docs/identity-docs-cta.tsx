import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IdentityDocsCta() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-700">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Verify identities in seconds.
            </h2>
            <p className="max-w-[600px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start automating identity verification today with our industry-leading OCR technology.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-white text-indigo-700 hover:bg-indigo-50">
              <Link href="#">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
