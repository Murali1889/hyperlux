import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <section className="bg-indigo-600 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-[600px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest updates, industry insights, and exclusive content delivered straight to your inbox.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex-1">
                <Input
                  className="h-12 w-full border-indigo-400 bg-white/10 text-white placeholder:text-indigo-200"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <Button className="h-12 bg-white text-indigo-600 hover:bg-indigo-50">Subscribe</Button>
            </form>
            <p className="text-sm text-indigo-200">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
