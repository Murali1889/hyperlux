"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const successStories = [
  {
    company: "DBS Bank",
    logo: "/placeholder.svg?height=60&width=120",
    quote:
      "HyperVerge's AI-powered industry classification has transformed our small business lending operations, reducing classification time by 80% and improving accuracy to 95%.",
    author: "Sarah Chen",
    title: "Head of SME Banking, DBS Bank",
    metrics: [
      { label: "Processing Time", before: "45 min", after: "9 min" },
      { label: "Accuracy Rate", before: "76%", after: "95%" },
      { label: "Monthly Applications", value: "12,000+" },
    ],
  },
  {
    company: "Standard Chartered",
    logo: "/placeholder.svg?height=60&width=120",
    quote:
      "We've seen a 40% reduction in misclassification risk and a 30% increase in loan approval rates since implementing HyperVerge's solution.",
    author: "Michael Wong",
    title: "Director of Credit Risk, Standard Chartered",
    metrics: [
      { label: "Risk Reduction", value: "40%" },
      { label: "Approval Rate Increase", value: "30%" },
      { label: "ROI", value: "3.5x" },
    ],
  },
  {
    company: "OCBC Bank",
    logo: "/placeholder.svg?height=60&width=120",
    quote:
      "HyperVerge has been a game-changer for our SME lending division. The AI-powered classification system has allowed us to scale our operations while maintaining regulatory compliance.",
    author: "David Tan",
    title: "VP of SME Banking, OCBC Bank",
    metrics: [
      { label: "Team Efficiency", value: "5x" },
      { label: "Compliance Rate", value: "99.8%" },
      { label: "Cost Savings", value: "$1.2M/year" },
    ],
  },
]

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [lastScrollTime, setLastScrollTime] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)
      const timeDelta = currentTime - lastScrollTime

      // Calculate scroll speed (pixels per millisecond)
      const scrollSpeed = timeDelta > 0 ? scrollDelta / timeDelta : 0

      // If scroll speed is above threshold, show the section
      if (scrollSpeed > 0.5) {
        setIsVisible(true)

        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        // Set timeout to hide the section after 5 seconds
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false)
        }, 5000)
      }

      setLastScrollY(currentScrollY)
      setLastScrollTime(currentTime)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [lastScrollY, lastScrollTime])

  return (
    <AnimatePresence>
      <motion.section
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              See how leading financial institutions have transformed their lending operations with HyperVerge
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story) => (
              <Card key={story.company} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-indigo-50 flex items-center justify-center">
                    <div className="h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center px-4">
                      <div className="text-xl font-bold text-slate-700">{story.company}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <blockquote className="text-sm italic mb-4">"{story.quote}"</blockquote>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                        {story.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{story.author}</div>
                        <div className="text-xs text-muted-foreground">{story.title}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {story.metrics.map((metric, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="font-medium">{metric.label}:</span>
                          {metric.before && metric.after ? (
                            <div className="flex items-center gap-2">
                              <span className="text-red-500 line-through">{metric.before}</span>
                              <ArrowRight className="h-3 w-3 text-slate-400" />
                              <span className="text-green-600 font-medium">{metric.after}</span>
                            </div>
                          ) : (
                            <span className="text-indigo-600 font-medium">{metric.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <Button asChild variant="outline" className="w-full">
                      <a href="#case-studies">Read Full Case Study</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
              <a href="#book-demo" className="flex items-center gap-2">
                Get Similar Results for Your Business <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
