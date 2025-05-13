"use client"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, FileText, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"
import { submitDemoForm } from "@/lib/submitForm"
import toast from 'react-hot-toast';

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = {
      e: form['email'].value,
      p: form['phone'].value,
      w: form['where-did-you-hear-about-us'].value,
      ca: new Date().toISOString()
    }

    try {
      const result = await submitDemoForm(data)
      if (result.success) {
        toast.success("Demo booked successfully! We'll contact you soon.")
        form.reset()
      } else {
        toast.error(`Failed to submit form: ${result.error}`)
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Corporate Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="where-did-you-hear-about-us">Where did you hear about us?</Label>
                  <Input
                    id="where-did-you-hear-about-us"
                    name="where-did-you-hear-about-us"
                    placeholder="Google, LinkedIn, Referral, AI, etc."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Demo"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
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
