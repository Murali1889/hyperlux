"use client"

import { useState } from "react"
import { Section, SectionHeader } from "@/components/ui/section"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    <Section id="testimonials">
      <SectionHeader title="Customers love HyperVerge!" />

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

        <TestimonialCard
          quote={currentTestimonial.quote}
          author={currentTestimonial.author}
          company={currentTestimonial.company}
        />
      </div>
    </Section>
  )
}
