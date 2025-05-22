import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PassportHero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Instant, Accurate Passport Verification
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Support for 120+ ICAO passport templates worldwide, with e-passport chip image extraction and biometric
              verification capabilities in a single API call.
            </p>
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg text-lg font-medium">
              Browse Templates <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-indigo-100 rounded-xl transform rotate-3"></div>
              <img
                src="/passport-mrz-highlight.png"
                alt="Passport with MRZ highlighted"
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                99.9% MRZ Accuracy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
