import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, FileText, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white" id="book-demo">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Transform Your Small Business Lending?
            </h2>
            <p className="text-lg text-indigo-100">
              Join 500+ financial institutions that have revolutionized their industry classification process with
              HyperVerge's AI-powered solution.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Free 30-day trial for qualified lenders</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Dedicated implementation support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>ROI analysis for your specific business</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-indigo-800 hover:bg-indigo-50 w-full border-2 border-white"
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a Demo
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-indigo-700 hover:bg-indigo-600 text-white w-full border-2 border-indigo-700"
              >
                <Link href="#learn-more" className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  Get Whitepaper
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-indigo-700 hover:bg-indigo-600 text-white w-full border-2 border-indigo-700"
              >
                <Link href="tel:+18005551234" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Your Free Demo</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>
                .
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900">30-minute demo</p>
                  <p className="text-xs text-muted-foreground">See it in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
