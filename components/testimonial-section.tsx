"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Over the past year, we've had a phenomenal experience partnering with HyperVerge for our eKYC journey. Their industry classification solution has transformed our small business lending operations.",
    author: {
      name: "Rachel Nguyen",
      title: "Director, CIMB Vietnam",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "CIMB",
      logo: "/placeholder.svg?height=100&width=100",
      tagline: "CIMB is very proud to be associated with HyperVerge",
    },
  },
  {
    quote:
      "HyperVerge's AI-powered industry classification has transformed our underwriting process, reducing classification time by 70% and improving our risk assessment accuracy significantly.",
    author: {
      name: "Michael Chen",
      title: "Head of Risk, Asia Finance Group",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "Asia Finance",
      logo: "/placeholder.svg?height=100&width=100",
      tagline: "Streamlining SME lending across Southeast Asia",
    },
  },
  {
    quote:
      "We've seen a 40% reduction in misclassification risk since implementing HyperVerge's solution. The accuracy and consistency have been game-changing for our portfolio management.",
    author: {
      name: "Sarah Johnson",
      title: "VP of Credit Operations, Global Lending Partners",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "Global Lending",
      logo: "/placeholder.svg?height=100&width=100",
      tagline: "Transforming lending through technology",
    },
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
          Customers love HyperVerge!
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-6 items-center">
            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] bg-primary/10 rounded-md overflow-hidden flex items-center justify-center">
                  <div className="text-3xl font-bold text-primary/30">{currentTestimonial.company.name}</div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{currentTestimonial.company.tagline}</p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <blockquote className="text-xl italic">"{currentTestimonial.quote}"</blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-600">
                    {currentTestimonial.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-medium">{currentTestimonial.author.name}</div>
                  <div className="text-sm text-muted-foreground">{currentTestimonial.author.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
