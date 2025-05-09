"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import ConfettiAnimation from "./confetti-animation"

// Create context for global confetti control
type ConfettiContextType = {
  triggerConfetti: () => void
}

const ConfettiContext = createContext<ConfettiContextType | undefined>(undefined)

export function useConfetti() {
  const context = useContext(ConfettiContext)
  if (!context) {
    throw new Error("useConfetti must be used within a ConfettiProvider")
  }
  return context
}

export function ConfettiProvider({ children }: { children: React.ReactNode }) {
  const [showConfetti, setShowConfetti] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const triggerConfetti = () => {
    setShowConfetti(true)

    // Store the timestamp of when confetti was shown
    sessionStorage.setItem("confettiShown", "true")
    sessionStorage.setItem("confettiTimestamp", Date.now().toString())
  }

  // Set up event listeners for significant user interactions
  useEffect(() => {
    // Function to check if enough time has passed since last confetti
    const canShowConfetti = () => {
      const lastShown = sessionStorage.getItem("confettiTimestamp")
      if (!lastShown) return true

      const now = Date.now()
      const timeSinceLastShown = now - Number.parseInt(lastShown)

      // Only show again if at least 30 seconds have passed
      return timeSinceLastShown > 30000
    }

    // Handle button clicks
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isButton =
        target.tagName === "BUTTON" || target.closest("button") || target.tagName === "A" || target.closest("a")

      if (isButton && canShowConfetti()) {
        triggerConfetti()
      }
    }

    // Handle significant scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)

      // If user has scrolled significantly (more than 300px)
      if (scrollDifference > 300 && canShowConfetti()) {
        triggerConfetti()
        setLastScrollY(currentScrollY)
      }
    }

    // Add event listeners
    document.addEventListener("click", handleButtonClick)
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("click", handleButtonClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <ConfettiContext.Provider value={{ triggerConfetti }}>
      <ConfettiAnimation
        show={showConfetti}
        duration={5000}
        onComplete={() => {
          setShowConfetti(false)
        }}
      />
      {children}
    </ConfettiContext.Provider>
  )
}
