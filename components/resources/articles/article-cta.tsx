import { Button } from "@/components/ui/button"

export default function ArticleCTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Want to Learn More About Our AI Solutions?</h2>
          <p className="mb-8 text-lg text-indigo-100">
            Discover how HyperVerge's AI-powered document processing and risk assessment tools can transform your
            lending operations.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="bg-white text-indigo-700 hover:bg-indigo-50" size="lg">
              Request a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
