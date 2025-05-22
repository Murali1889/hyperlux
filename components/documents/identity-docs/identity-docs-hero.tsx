import { Button } from "@/components/ui/button"
import Link from "next/link"
import DocumentGlobe from "./document-globe"

export default function IdentityDocsHero() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Identity Documents — Instant Verification, Global Coverage
              </h1>
              <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seamlessly extract and verify data from passports, national IDs, and driver licenses with
                industry-leading 99.8% accuracy. Process documents from 195+ countries in under 12 seconds.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-indigo-700 hover:bg-indigo-800">
                <Link href="#supported-file-types">Browse Templates</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <DocumentGlobe />
          </div>
        </div>
      </div>
    </section>
  )
}
