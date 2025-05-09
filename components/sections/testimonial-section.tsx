"use client"

import { useState, useEffect } from "react"
import { Section, SectionHeader } from "@/components/ui/section"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Over the past year, we've had a phenomenal experience partnering with DocsAPI for our eKYC journey. Their industry classification solution has transformed our small business lending operations.",
    author: {
      name: "Rachel Nguyen",
      title: "Director, CIMB Vietnam",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "CIMB",
      logo: "/placeholder.svg?height=100&width=100",
      tagline: "CIMB is very proud to be associated with DocsAPI",
    },
  },
  {
    quote:
      "DocsAPI's AI-powered industry classification has transformed our underwriting process, reducing classification time by 70% and improving our risk assessment accuracy significantly.",
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
      "We've seen a 40% reduction in misclassification risk since implementing DocsAPI's solution. The accuracy and consistency have been game-changing for our portfolio management.",
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

  // Add auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Section id="testimonials">
      <SectionHeader title="Customers love DocsAPI!" />

      <div className="relative max-w-6xl mx-auto">
        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 md:px-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>

        {/* Testimonial content */}
        <div className="px-12 md:px-20">
          <TestimonialCard
            quote={currentTestimonial.quote}
            author={currentTestimonial.author}
            company={currentTestimonial.company}
          />
        </div>
      </div>
    </Section>
  )
}
