"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ExpertCTA() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Check if confetti has been shown
    const checkConfettiStatus = () => {
      const confettiShown = sessionStorage.getItem("confettiShown") === "true"
      if (confettiShown && !showButton) {
        // Track scroll position and idle time
        let idleTimer: NodeJS.Timeout
        let hasScrolledEnough = false

        const handleScroll = () => {
          // Check if user has scrolled at least 30% down the page
          const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
          if (scrollPercentage > 0.3) {
            hasScrolledEnough = true
            if (!showButton) {
              setShowButton(true)

              // Auto-hide after 10 seconds
              setTimeout(() => {
                setShowButton(false)
              }, 10000)
            }
          }

          // Reset idle timer on scroll
          clearTimeout(idleTimer)
          idleTimer = setTimeout(() => {
            if (!showButton) {
              setShowButton(true)

              // Auto-hide after 10 seconds
              setTimeout(() => {
                setShowButton(false)
              }, 10000)
            }
          }, 10000) // 10 seconds of idle time
        }

        // Initial idle timer
        idleTimer = setTimeout(() => {
          if (!showButton && !hasScrolledEnough) {
            setShowButton(true)

            // Auto-hide after 10 seconds
            setTimeout(() => {
              setShowButton(false)
            }, 10000)
          }
        }, 10000)

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll)

        return () => {
          clearTimeout(idleTimer)
          window.removeEventListener("scroll", handleScroll)
        }
      }
    }

    // Check initially
    checkConfettiStatus()

    // Set up interval to check periodically
    const interval = setInterval(checkConfettiStatus, 1000)

    return () => clearInterval(interval)
  }, [showButton])

  if (!showButton) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-end pointer-events-none pb-8"
      >
        {/* Bottom gradient overlay */}
        <div className="fixed bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/80 to-transparent z-40 pointer-events-none" />

        <div className="flex flex-col items-center gap-3 pointer-events-auto z-50 relative">
          {/* Expert CTA button */}
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 shadow-xl px-8 py-6 rounded-xl">
            <a href="#book-demo" className="flex items-center gap-2 text-lg">
              Talk to an expert to transform <ArrowRight className="h-5 w-5" />
            </a>
          </Button>

          {/* Welcome message - just text */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-white text-center"
          >
            Welcome to the future of AI-powered lending!
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
