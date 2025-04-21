import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, Clock, Users, Building, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Book a Demo | HyperVerge",
  description:
    "Schedule a personalized demo of HyperVerge's AI-powered industry classification solution for small business lending.",
}

export default function BookDemoPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
              Book a Demo
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">See HyperVerge in Action</h1>
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

          <div className="mt-8 rounded-lg border bg-muted/40 p-6">
            <h3 className="text-lg font-medium">What Our Clients Say</h3>
            <blockquote className="mt-4 border-l-4 border-indigo-600 pl-4 italic text-muted-foreground">
              "The demo was incredibly valuable. It showed us exactly how HyperVerge could integrate with our existing
              systems and the potential ROI was compelling. We signed up immediately after."
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                <img src="/avatar-michael.png" alt="Client" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-medium">Michael Rodriguez</p>
                <p className="text-sm text-muted-foreground">VP of Lending, First Community Bank</p>
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
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Acme Financial" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="Lending Manager" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Select defaultValue="50-100">
                    <SelectTrigger id="company-size">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-49">1-49 employees</SelectItem>
                      <SelectItem value="50-100">50-100 employees</SelectItem>
                      <SelectItem value="101-500">101-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lending-volume">Monthly Small Business Lending Volume</Label>
                  <Select defaultValue="1-5m">
                    <SelectTrigger id="lending-volume">
                      <SelectValue placeholder="Select lending volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1m">Less than $1 million</SelectItem>
                      <SelectItem value="1-5m">$1-5 million</SelectItem>
                      <SelectItem value="5-10m">$5-10 million</SelectItem>
                      <SelectItem value="10-50m">$10-50 million</SelectItem>
                      <SelectItem value="50m+">$50+ million</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What specific challenges are you looking to address?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your current industry classification process and challenges..."
                    rows={4}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="flex h-5 items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to HyperVerge's{" "}
                      <Link href="#" className="text-indigo-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-indigo-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Book My Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
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
