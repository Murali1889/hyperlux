"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function StickyCTA() {
  const [showCTA, setShowCTA] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px
      if (window.scrollY > 500) {
        setShowCTA(true)
      } else {
        setShowCTA(false)
      }

      // Show scroll to top after scrolling 1000px
      if (window.scrollY > 1000) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!showCTA) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-lg bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-100"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </div>
  )
}
