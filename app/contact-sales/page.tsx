import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MessageSquare, Clock, ArrowRight, MapPin, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Contact Sales | HyperVerge",
  description:
    "Get in touch with our sales team to learn how HyperVerge can transform your small business lending process.",
}

export default function ContactSalesPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
          Contact Sales
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Let's Discuss Your Lending Needs
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Our team of industry experts is ready to help you transform your small business lending process with
          AI-powered industry classification.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <Tabs defaultValue="contact-form">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
                  <TabsTrigger value="schedule-call">Schedule a Call</TabsTrigger>
                </TabsList>

                <TabsContent value="contact-form" className="mt-6">
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
                      <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                      <Select defaultValue="product-info">
                        <SelectTrigger id="inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-info">Product Information</SelectItem>
                          <SelectItem value="pricing">Pricing</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="integration">Integration Questions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <div className="flex h-5 items-center">
                          <input
                            id="subscribe"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <Label htmlFor="subscribe" className="text-sm text-muted-foreground">
                          Subscribe to our newsletter for industry insights and product updates
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="schedule-call" className="mt-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="call-first-name">First Name</Label>
                        <Input id="call-first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="call-last-name">Last Name</Label>
                        <Input id="call-last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="call-email">Work Email</Label>
                      <Input id="call-email" type="email" placeholder="john.doe@company.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="call-phone">Phone Number</Label>
                      <Input id="call-phone" type="tel" placeholder="(123) 456-7890" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="call-date">Preferred Date</Label>
                      <Input id="call-date" type="date" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="call-time">Preferred Time</Label>
                      <Select defaultValue="morning">
                        <SelectTrigger id="call-time">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 3pm)</SelectItem>
                          <SelectItem value="evening">Evening (3pm - 6pm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="call-timezone">Timezone</Label>
                      <Select defaultValue="est">
                        <SelectTrigger id="call-timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="est">Eastern Time (ET)</SelectItem>
                          <SelectItem value="cst">Central Time (CT)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                          <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="call-topic">Discussion Topic</Label>
                      <Textarea
                        id="call-topic"
                        placeholder="What would you like to discuss on our call?"
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Schedule Call <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium">Contact Information</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:sales@hyperverge.ai" className="text-indigo-600 hover:underline">
                      sales@hyperverge.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+18005551234" className="text-indigo-600 hover:underline">
                      (800) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm ET</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium">Office Locations</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">New York (HQ)</p>
                    <p className="text-muted-foreground">
                      350 Fifth Avenue, 21st Floor
                      <br />
                      New York, NY 10118
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">San Francisco</p>
                    <p className="text-muted-foreground">
                      525 Market Street, Suite 2900
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">International</p>
                    <p className="text-muted-foreground">London • Singapore • Sydney</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <div className="mt-4 space-y-2">
                <Link href="/book-demo" className="flex items-center text-indigo-600 hover:underline">
                  <MessageSquare className="mr-2 h-4 w-4" /> Book a Demo
                </Link>
                <Link href="/pricing" className="flex items-center text-indigo-600 hover:underline">
                  <ArrowRight className="mr-2 h-4 w-4" /> View Pricing
                </Link>
                <Link href="/resources" className="flex items-center text-indigo-600 hover:underline">
                  <ArrowRight className="mr-2 h-4 w-4" /> Resources
                </Link>
                <Link href="#" className="flex items-center text-indigo-600 hover:underline">
                  <ArrowRight className="mr-2 h-4 w-4" /> Support Center
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-indigo-50 p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight">Ready for a personalized demo?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how HyperVerge can transform your small business lending process with our AI-powered industry
            classification solution.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/book-demo">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
