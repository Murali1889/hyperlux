import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewslettersCTA() {
  return (
    <section className="bg-indigo-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Lending Process?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Schedule a demo to see how HyperVerge can help you streamline your operations and increase ROI.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
