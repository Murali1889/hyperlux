import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NationalIdCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Add ID verification to your flow.
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Integrate our National ID verification API in minutes and start verifying identities securely.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-indigo-700 hover:bg-indigo-800">
              <Link href="/book-demo">Request Demo</Link>
            </Button>
            <Button variant="outline" className="border-indigo-700 text-indigo-700 hover:bg-indigo-50">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
