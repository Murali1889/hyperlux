'use client'
import Link from "next/link"
import { CalendarDays, Clock, Users, Building, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DemoBookingForm } from "@/components/sections/demo-booking-form"

export default function BookDemoPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
              Book a Demo
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">See DocsAPI in Action</h1>
            <p className="text-xl text-muted-foreground">
              Schedule a personalized demo to see how our AI-powered industry classification solution can transform your
              small business lending process.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Personalized Demonstration</h3>
                <p className="text-muted-foreground">
                  Our product specialists will walk you through our platform, tailored to your specific lending needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">30-Minute Session</h3>
                <p className="text-muted-foreground">
                  A focused session that respects your time while covering all the essential features and benefits.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Bring Your Team</h3>
                <p className="text-muted-foreground">
                  Invite colleagues from risk, compliance, and operations to get a comprehensive understanding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Custom ROI Analysis</h3>
                <p className="text-muted-foreground">
                  We'll provide a customized ROI analysis based on your lending volume and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="overflow-hidden">
            <div className="bg-indigo-600 p-6 text-white">
              <h2 className="text-xl font-bold">Schedule Your Demo</h2>
              <p className="mt-1 text-indigo-100">
                Fill out the form below and we'll contact you within 24 hours to confirm your demo.
              </p>
            </div>
            <div className="p-6">
              <DemoBookingForm />
            </div>
          </Card>

          <div className="mt-6 rounded-lg border bg-muted/40 p-6">
            <h3 className="flex items-center text-lg font-medium">What to Expect After Booking</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                <span>Confirmation email with calendar invite</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                <span>Brief pre-demo questionnaire to customize your experience</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                <span>30-minute personalized demo with a product specialist</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                <span>Follow-up with custom ROI analysis and implementation plan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
