"use client"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { DemoBookingForm } from "./demo-booking-form"

export default function CTASection() {

  return (
    <Section background="gradient" id="book-demo">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Transform Your Document Processing?
          </h2>
          <p className="text-lg text-indigo-100">
            Book a demo today to see how our AI-powered OCR software can automate your document workflows, enhance fraud
            detection, and streamline lending decisions.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span>Free 30-day trial for qualified lenders</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span>Dedicated implementation support</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span>ROI analysis for your specific business</span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Free Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <DemoBookingForm />
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By submitting this form, you agree to our{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Terms of Service
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <div className="absolute -bottom-4 -right-4">
            <Card>
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">30-minute demo</p>
                    <p className="text-xs text-muted-foreground">See it in action</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}
